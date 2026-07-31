import { colord, extend, type Colord } from "colord";
import mixPlugin from "colord/plugins/mix";
import a11yPlugin from "colord/plugins/a11y";
import namesPlugin from "colord/plugins/names";
import harmoniesPlugin from "colord/plugins/harmonies";

extend([mixPlugin, a11yPlugin, namesPlugin, harmoniesPlugin]);

const VALID: unique symbol = Symbol("VALID");
const OPAQUE: unique symbol = Symbol("OPAQUE");
const READABLE_ON_LIGHT: unique symbol = Symbol("READABLE_ON_LIGHT");
const READABLE_ON_DARK: unique symbol = Symbol("READABLE_ON_DARK");

const KEEP_COLORD_IN_MEMORY = true;

// Wrapper for Colord.
// Reason 1: branded type gives some safety over the color being valid.
// Reason 2: safe to call mapped types like ReadonlyDeep on this class
//    I'd rather not make mapped types out of the raw Colord.
// Reason 3: preserves raw string the color was constructed with,
//    which colord doesn't remember
// Reason 4: allows me to mess around with keeping the colord objects in memory or not.
//    Not that it'll make a difference, but I liked the option
class ValidColor {
  readonly [VALID]!: void;

  readonly raw: string;
  private readonly _d?: Colord;

  constructor(input: string | Colord) {

    const d = typeof input === "string" ? colord(input) : input;
    if (!d.isValid()) throw new Error(`Color ${input} is not valid.`);

    this.raw = typeof input === "string" ? input : d.toHex();

    if (KEEP_COLORD_IN_MEMORY) {
      this._d = d;
    }
  }

  readonly d = () => {
    return this._d ?? colord(this.raw);
  }
}

class OpaqueColor extends ValidColor {
  readonly [OPAQUE]!: void;

  constructor(input: string | Colord) {
    super(input);

    if (this.d().alpha() !== 1)
      throw new Error(`Expected opaque color, ${this.raw} given.`);
  }
}

class ReadableOnLight extends OpaqueColor {
  readonly [READABLE_ON_LIGHT]!: void;

  constructor(input: string | Colord) {
    super(input);

    if(this.d().brightness() > 0.2)
      throw new Error(`Expected a color readable on light backgrounds, found ${this.raw} instead.`);
  }
}

class ReadableOnDark extends OpaqueColor {
  readonly [READABLE_ON_DARK]!: void;

  constructor(input: string | Colord) {
    super(input);

    if(this.d().brightness() < 0.8)
      throw new Error(`Expected a color readable on dark backgrounds, found ${this.raw} instead.`);
  }
}

export type { ValidColor, OpaqueColor, ReadableOnLight, ReadableOnDark };

export function validColor(color: string | Colord): ValidColor {
  return new ValidColor(color);
}

export function opaqueColor(color: string | Colord): OpaqueColor {
  return new OpaqueColor(color);
}

export function readableOnLight(color: string | Colord): ReadableOnLight {
  return new ReadableOnLight(color);
}

export function readableOnDark(color: string | Colord): ReadableOnDark {
  return new ReadableOnDark(color);
}

export function toOpaque(color: ValidColor, opaqueBase: OpaqueColor): OpaqueColor {
  const original = color.d();
  const newColor = opaqueBase.d().mix(original, original.alpha()).alpha(1);
  // newColor now has hue information you don't actually care about here if you're darkening later.
  // to delete it, I'll go through rgb
  return opaqueColor(newColor.toHex());
}

// guard against unintentionally checking for a transparent color's lightness, which is a mistake in my opinion
export function isLight(color: OpaqueColor): boolean {
  return color.d().isLight();
}

export function colorEquals(color1: ValidColor, color2: ValidColor): boolean {
  return color1.d().isEqual(color2.d());
}

export function contrastIsVisible(color1: OpaqueColor, color2: OpaqueColor): boolean {
  // console.log(color1.raw, color2.raw, color1.d().contrast(color2.d()));
  // TODO fix with hue, test with yellow
  return color1.d().contrast(color2.d()) > 2;
}

export function computeColor1OnColor2(
  color1: OpaqueColor,
  color2: OpaqueColor,
  options: {
    type: "unlike";
    contrast: OpaqueColor;
  } | {
    type: "readable" | "visible";
  },
): OpaqueColor {

  const STEP = 0.1;
  let current = color1;
  let previous = current;
  const color2IsLight = isLight(color2);

  for(let i = 0; i < 10; i++) {
    const checkContrast = options.type === "unlike"
      ? contrastIsVisible(current, options.contrast)
      : true;

    const checkMain = options.type === "readable"
      ? current.d().isReadable(color2.d())
      : contrastIsVisible(current, color2);
    
    if(checkContrast && checkMain) break;
    if(!checkContrast && !checkMain) {
      const unlikeOptions = options as Extract<typeof options, { type: "unlike" }>;
      return opaqueColor(color2.d().mix(unlikeOptions.contrast.d(), 0.5));
    }

    current = opaqueColor(!checkMain
      ? color2IsLight
        ? current.d().darken(STEP)
        : current.d().lighten(STEP)
      : color2IsLight
        ? current.d().lighten(STEP)
        : current.d().darken(STEP)
    );

    if(colorEquals(current, previous))
      break;

    previous = current;
  }
 
  return current;
}