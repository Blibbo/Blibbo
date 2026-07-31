import { convertStringPrefix, type ConvertStringPrefix } from "../strings";
import type { Accent, Accent2, AccentFor } from "./accent";
import { computeColor1OnColor2, isLight, opaqueColor, toOpaque, type OpaqueColor, type ValidColor } from "./color";
import { computeContrasts, type BgColorName, type ColorModifiers, type CrossColors, type CrossContrasts, type DerivedContrasts, type NameVariants, type PageVariables, type PrimitiveContrasts } from "./variables";

export type PrimitiveAccents = {
  Accent: Accent;
  Accent2: Accent2;
};

export type AccentName = keyof PrimitiveAccents;

type ResolvedAccentModifiers = {
  "": ValidColor
  Opaque: OpaqueColor;
};

type ResolvedAccents<
  Name extends AccentName = AccentName
> = NameVariants<Name, ResolvedAccentModifiers>;

type DerivedAccents<
  Name extends AccentName = AccentName
> = NameVariants<Name, ColorModifiers>;

type AccentContrasts<
  Name extends AccentName = AccentName
> = DerivedContrasts<Name | keyof DerivedAccents<Name> & string>;

type CommonAccentVariables<
  Name extends AccentName = AccentName
> =
  & ResolvedAccents<Name>
  & DerivedAccents<Name>
  & AccentContrasts<Name>
  & CrossColors<BgColorName | Name>
  & CrossContrasts<BgColorName | Name>;

type CrossAccents =
  & CrossColors<AccentName>
  & CrossContrasts<AccentName>;

export type AccentVariables<Name extends AccentName = AccentName> =
  & CommonAccentVariables<Name>
  & (Name extends "Accent"
    ? {}
    : CrossAccents);

// dependencies -> dynamic values

type AccentDependencies =
  & PrimitiveAccents
  & PageVariables
  & PrimitiveContrasts;

type Accent2Dependencies =
  & Omit<AccentDependencies, "Accent">
  & AccentVariables<"Accent">;

type AccentDependenciesFor<Name extends AccentName> =
  [Name] extends ["Accent"]
    ? AccentDependencies
    : [Name] extends ["Accent2"]
      ? Accent2Dependencies
      : never;

export type DynamicAccentValueFor<Name extends AccentName> =
  Exclude<(
    [Name] extends ["Accent"]
    ? keyof AccentDependencies
    : [Name] extends ["Accent2"]
      ? keyof Accent2Dependencies
      : never
  ), AccentName>;

export type DynamicAccentValue = DynamicAccentValueFor<"Accent">;
export type DynamicAccent2Value = DynamicAccentValueFor<"Accent2">;

// derive variables

export { computeAllAccentVariables as computeAccentVariables };

function computeAllAccentVariables(deps: AccentDependencies): AccentVariables {
  
  const accentVariables = computeAccentVariables(deps);

  const accent2Deps = {
    ...deps,
    ...accentVariables,
  };
  const accent2Variables = computeAccent2Variables(accent2Deps);

  return {
    ...accent2Deps,
    ...accent2Variables,
  };
}

function computeAccentVariablesFor<Name extends AccentName>(
  accentName: Name,
  deps: AccentDependenciesFor<Name>,
): CommonAccentVariables<Name> {

  const raw = deps[accentName as keyof AccentDependenciesFor<Name>] as AccentFor<Name>;

  const validColor = raw.kind === "dynamic"
    ? deps[raw.value as keyof AccentDependenciesFor<Name>] as ValidColor
    : raw.value;

  const opaque = toOpaque(validColor, deps.Page);

  const complementary =
    opaqueColor(opaque.d().harmonies("complementary")[1]!);

  const inverted = opaqueColor(opaque.d().invert());

  const unlikePage = computeColor1OnColor2(opaque, deps.Page, {
    type: "unlike",
    contrast: deps.OnPage,
  });

  const readableOnPage = computeColor1OnColor2(opaque, deps.Page, {
    type: "readable"
  });

  const visibleOnPage = computeColor1OnColor2(opaque, deps.Page, {
    type: "visible"
  });

  const onAccent = raw.kind === "dynamic"
    ? deps[toggleVariableContrastPrefix(raw.value) as keyof AccentDependenciesFor<Name>] as OpaqueColor
    : isLight(opaque)
      ? deps.OnLight
      : deps.OnDark;

  const offAccent = raw.kind === "dynamic"
    ? deps[getOtherNonContrastingPrefix(raw.value) as keyof AccentDependenciesFor<Name>] as OpaqueColor
    : isLight(opaque)
      ? deps.OnDark
      : deps.OnLight;

  const pageUnlike = computeColor1OnColor2(deps.Page, opaque, {
    type: "unlike",
    contrast: onAccent,
  });

  const pageReadableOn = computeColor1OnColor2(deps.Page, opaque, {
    type: "readable"
  });

  const pageVisibleOn = computeColor1OnColor2(deps.Page, opaque, {
    type: "visible"
  });
  
  const variants = {
    [`${accentName}Complementary`]: complementary,
    [`${accentName}Inverted`]: inverted,
  };

  const crossPage = {
    [`${accentName}UnlikePage`]: unlikePage,
    [`${accentName}ReadableOnPage`]: readableOnPage,
    [`${accentName}VisibleOnPage`]: visibleOnPage,
    [`PageUnlike${accentName}`]: pageUnlike,
    [`PageReadableOn${accentName}`]: pageReadableOn,
    [`PageVisibleOn${accentName}`]: pageVisibleOn,
  };

  const variantContrasts = computeContrasts(deps.OnLight, deps.OnDark, variants);

  const crossContrasts = computeContrasts(deps.OnLight, deps.OnDark, crossPage, true);

  return {
    [accentName]: validColor,
    [`On${accentName}`]: onAccent,
    [`Off${accentName}`]: offAccent,
    [`${accentName}Opaque`]: opaque,
    ...variants,
    ...variantContrasts,
    ...crossPage,
    ...crossContrasts,
  } as AccentVariables<Name>;
}

function computeAccentVariables(deps: AccentDependencies): AccentVariables<"Accent"> {
  return computeAccentVariablesFor("Accent", deps);
}

function computeAccent2Variables(deps: Accent2Dependencies): AccentVariables<"Accent2"> {
  const accentCommons = computeAccentVariablesFor("Accent2", deps);

  const crossDependencies = {
    ...deps,
    ...accentCommons,
  };

  const crossed: any = {};

  for (const [name1, name2] of [["Accent", "Accent2"], ["Accent2", "Accent"]] as const) {
    crossed[`${name1}Unlike${name2}`] =
      computeColor1OnColor2(
        crossDependencies[`${name1}Opaque`],
        crossDependencies[`${name2}Opaque`],
        {
          type: "unlike",
          contrast: crossDependencies[`On${name2}`],
        }
      );
    crossed[`${name1}ReadableOn${name2}`] =
      computeColor1OnColor2(
        crossDependencies[`${name1}Opaque`],
        crossDependencies[`${name2}Opaque`],
        { type: "readable" }
      );
    crossed[`${name1}VisibleOn${name2}`] =
      computeColor1OnColor2(
        crossDependencies[`${name1}Opaque`],
        crossDependencies[`${name2}Opaque`],
        { type: "visible" }
      );
  }

  const crossContrasts = computeContrasts(crossDependencies.OnLight, crossDependencies.OnDark, crossed, true);

  return {
    ...crossDependencies,
    ...crossed as CrossAccents,
    ...crossContrasts,
  };
}

// the map chooses the more visually interesting color with visible contrast.
const TOGGLE_CONTRAST_PREFIX_MAP = [
  ["OnLight", "OnDark"],
  ["OnDark", "OnLight"],
  ["AccentOpaque", "OnAccent"],
  ["Accent2Opaque", "OnAccent2"],
  ["OnAccent", "AccentOpaque"],
  ["OnAccent2", "Accent2Opaque"],
  ["Off", "On"],
  ["On", ""],
  ["", "On"],
] as const;
function toggleVariableContrastPrefix<T extends string>(
  varName: T
): ConvertStringPrefix<T, typeof TOGGLE_CONTRAST_PREFIX_MAP> {
  return convertStringPrefix(varName, TOGGLE_CONTRAST_PREFIX_MAP);
}

const NON_CONTRASTING_PREFIX_MAP = [
  ["OnLight", "OnLight"],
  ["OnDark", "OnDark"],
  ["On", "On"],
  ["OffAccent", "AccentOpaque"],
  ["OffAccent2", "Accent2Opaque"],
  ["AccentOpaque", "OffAccent"],
  ["Accent2Opaque", "OffAccent2"],
  ["Off", ""],
  ["", "Off"],
] as const;
function getOtherNonContrastingPrefix<T extends string>(
  varName: T
): ConvertStringPrefix<T, typeof NON_CONTRASTING_PREFIX_MAP> {
  return convertStringPrefix(varName, NON_CONTRASTING_PREFIX_MAP);
}