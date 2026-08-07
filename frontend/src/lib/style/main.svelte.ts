import { type OpaqueColor, type ReadableOnDark, type ReadableOnLight, type ValidColor } from "$lib/style/color";
import { setCSSGlobal } from "$lib/prepaint/shared";
import { tags } from "typia";
import { type NonEmptyArray } from "$lib/types";
import { systemTheme } from "./system-theme.svelte";
import { createContext, onDestroy } from "svelte";
import { hydratePreset, type StyleConfig } from "./config";
import { loadStyle } from "./persist";
import { nextTheme, setPreference, type StyleRuntime } from "./mutation";
import { computeRuntimeInfo, type StyleRuntimeInfo } from "./derived";
import { computeAllVariables, computeIndependentVariables, type Primitives, type ColorVariables } from "./variables";
import { applyStyle } from "./effects";
import type { Accent, Accent2 } from "./accent";

export type UUID = string & tags.Format<"uuid">;

export type RichStyleTypes = {
  pageColor: OpaqueColor;
  readableOnLight: ReadableOnLight;
  readableOnDark: ReadableOnDark;
  staticAccentValue: ValidColor;
  stringSets: Set<string>;
};
export type DryStyleTypes = {
  pageColor: string;
  readableOnLight: string;
  readableOnDark: string;
  staticAccentValue: string;
  stringSets: string[];
};
export type StyleTypes = RichStyleTypes | DryStyleTypes;

type OverridableByTheme<Types extends StyleTypes> = {
  onLight: Types["readableOnLight"];
  onDark: Types["readableOnDark"];
  accent: Accent<Types["staticAccentValue"]>;
  accent2?: Accent2<Types["staticAccentValue"]> | undefined;
};

export type StyleCommons<
  Types extends StyleTypes,
  ExtendTheme extends Record<string, unknown>,
> = {
  preference: "system" | "dark" | "light" | "custom";
  tagRotation?: Types["stringSets"] | undefined;
  themes: NonEmptyArray<{
    tags?: Types["stringSets"] | undefined;
    page: Types["pageColor"];
  } & Partial<OverridableByTheme<Types>> & ExtendTheme>
} & OverridableByTheme<Types>;

export const THEME_SWITCH_DURATION = "300ms";

// Side effects

type StyleArguments = {
  root: HTMLElement;
  persistKey: string;
  defaultStyle: StyleConfig;
};

type StyleArgumentsInit = Omit<StyleArguments, "root">;
type StyleArgumentsEffect = Omit<StyleArguments, "defaultStyle">;

export class StyleManager {
  defaultStyle: StyleConfig;
  #persistKey: string;
  readonly #root: HTMLElement;

  #runtime: StyleRuntime;

  readonly computed: StyleRuntimeInfo;
  active: Primitives;
  variables: ColorVariables;

  constructor({root, persistKey, defaultStyle}: StyleArguments) {
    this.#root = root;
    this.#persistKey = persistKey;
    this.defaultStyle = defaultStyle;

    this.#runtime = $state(loadStyle(persistKey, defaultStyle));
    this.computed = $derived(computeRuntimeInfo(this.#runtime, systemTheme.value));

    this.active = $derived.by(()=>{
      const reactiveProxy = $state(computeIndependentVariables(this.#runtime, this.computed));
      return reactiveProxy;
    });

    this.variables = $derived.by(()=>{
      const reactiveProxy = $state(computeAllVariables(this.active));
      return reactiveProxy;
    })
  }

  get persistKey(): string {
    return this.#persistKey;
  }

  // if I use helpers like Readonly<> I don't want to recurse into HTMLElement's properties.
  root(): HTMLElement {
    return this.#root;
  }

  get runtime(): (StyleRuntime & {
    readonly preference: StyleRuntime["preference"];
  }) {
    return this.#runtime;
  }

  reset(): void {
    this.#runtime = hydratePreset(this.defaultStyle);
  }

  override(persistKey: string, defaultStyle: StyleConfig): StyleArgumentsInit {
    const oldPersistKey = this.#persistKey;
    const oldDefaultStyle = this.defaultStyle;
    this.#persistKey = persistKey;
    this.defaultStyle = defaultStyle;
    this.#runtime = loadStyle(persistKey, defaultStyle);

    return {
      persistKey: oldPersistKey,
      defaultStyle: oldDefaultStyle,
    };
  }

  load(presetStyle: StyleConfig): void {
    this.#runtime = hydratePreset(presetStyle);
  }

  setPreference(preference: StyleRuntime["preference"]): void {
    setPreference(preference, this.#runtime, systemTheme.value, this.computed);
  }

  runEffects(
    computedOld?: StyleRuntimeInfo | undefined,
    variablesOld?: Readonly<ColorVariables> | undefined,
  ): void {
    applyStyle(
      this,
      computedOld,
      variablesOld,
    );
  }

  nextTheme(): void {
    nextTheme(this.#runtime, this.computed);
  }
}

export const [getStyleContext, setStyleContext] = createContext<StyleManager>();

export function overrideStyle(
  persistKey: string,
  defaultStyle: StyleConfig
): void {
  try{
    const previous =
      getStyleContext().override(persistKey, defaultStyle);
    
    onDestroy(()=>{
      getStyleContext().
        override(previous.persistKey, previous.defaultStyle);
    })
  } catch {
    throw new Error(`Unable to override style: application style not set.`);
  }
}

// Init

function initStyle(): void{
  setCSSGlobal("theme-switch-duration", THEME_SWITCH_DURATION);
}

initStyle();

