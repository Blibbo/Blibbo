import type { UnionToIntersection } from "type-fest";
import { computeAccentVariables, type AccentName, type AccentVariables, type PrimitiveAccents } from "./accent-variables";
import { isLight, opaqueColor, type OpaqueColor, type ReadableOnDark, type ReadableOnLight } from "./color";
import type { StyleRuntimeReadonly } from "./mutation";
import type { StyleRuntimeInfo } from "./derived";

// Convoluted helpers

export type NameVariants<
  Names extends string,
  Variants extends Record<string, any>,
  Position extends "prefix" | "suffix" = "suffix",
> = UnionToIntersection<
  Names extends infer N extends string
    ? {
        [K in keyof Variants as Position extends "suffix"
          ? `${N}${K & string}`
          : `${K & string}${N}`]: Variants[K];
      }
    : never
>;

type OrderedPairs<
  Names extends string,
  Other extends string = Names,
> = Names extends infer A extends string
  ? Other extends infer B extends string
    ? A extends B
      ? never
      : [A, B]
    : never
  : never;

type PairEntry<Pair, Modifiers extends Record<string, any>> =
  Pair extends [infer A extends string, infer B extends string]
    ? { [M in keyof Modifiers as `${Capitalize<A>}${M & string}${Capitalize<B>}`]: Modifiers[M] }
    : never;

type CrossVariants<
  Names extends string,
  Modifiers extends Record<string, any>,
> = UnionToIntersection<PairEntry<OrderedPairs<Names>, Modifiers>>;

// Color primitives

export type PrimitiveContrasts = {
  OnLight: ReadableOnLight;
  OnDark: ReadableOnDark;
};
export type BgColorName = "Page";
type PrimitivePages = {
  [K in BgColorName]: OpaqueColor;
} & {
  NextTheme: OpaqueColor;
};

// Computed

export type ColorModifiers = Record<
  | "Complementary"
  | "Inverted"
  , OpaqueColor>;

type DerivedPages = NameVariants<BgColorName, ColorModifiers>;

// Crossed colors

type CrossModifiers = {
  Unlike: OpaqueColor;
  ReadableOn: OpaqueColor;
  VisibleOn: OpaqueColor;
};

export type CrossColors<
  ColorNames extends AccentName | BgColorName =
    AccentName | BgColorName
> = CrossVariants<ColorNames, CrossModifiers>;

// Contrasts

export type DerivedContrasts<
  Keys extends string,
  ContrastPrefix extends "On" | "Off" = "On" | "Off"
> = NameVariants<ContrastPrefix, Record<Keys, OpaqueColor>>;

export type PageContrasts = DerivedContrasts<keyof PagesWithContrasts>;

export type CrossContrasts<
  ColorNames extends AccentName | BgColorName =
    AccentName | BgColorName
> = DerivedContrasts<keyof CrossColors<ColorNames> & string, "On">;

// Groupings

export type Primitives =
  & PrimitiveContrasts
  & PrimitivePages
  & PrimitiveAccents;

type PagesWithContrasts = 
  & PrimitivePages
  & DerivedPages;

export type PageVariables =
  & PagesWithContrasts
  & PageContrasts;

export type ColorVariables =
  & PrimitiveContrasts  
  & PageVariables
  & AccentVariables;


export function computeIndependentVariables(
  runtime: StyleRuntimeReadonly,
  info: StyleRuntimeInfo,
): Primitives {

  const OnLight = info.selectedTheme.onLight ?? runtime.onLight;
  const OnDark = info.selectedTheme.onDark ?? runtime.onDark;
  const Page = info.selectedTheme.page;
  const NextTheme = info.nextTheme.page;
  const Accent = info.selectedTheme.accent ?? runtime.accent;
  const Accent2 = info.selectedTheme.accent2 ?? runtime.accent2 ?? Accent;

  return {
    OnLight,
    OnDark,
    Page,
    NextTheme,
    Accent,
    Accent2,
  };
}

export function computeAllVariables(
  {OnLight, OnDark, Page, NextTheme, ...accents}: Primitives,
): ColorVariables {
  const pages: PagesWithContrasts = {
    Page,
    NextTheme,
    PageComplementary:
      opaqueColor(Page.d().harmonies("complementary")[1]!),
    PageInverted:
      opaqueColor(Page.d().invert()),
  };

  const pageContrasts: PageContrasts =
    computeContrasts(OnLight, OnDark, pages);

  const accentDependencies = {
    ...pages,
    ...pageContrasts,
    ...accents,
    OnLight,
    OnDark,
  };
  
  const accentVariables = computeAccentVariables(accentDependencies);

  return {
    ...accentDependencies,
    ...accentVariables,
  };
}

export function computeContrasts<T extends string>(
  onLight: ReadableOnLight,
  onDark: ReadableOnDark,
  record: Record<T, OpaqueColor>,
  onlyOn: boolean = false,
): DerivedContrasts<T> {
  return Object.fromEntries(
    Object.entries(record).flatMap(([key, color]) => {
      const light = isLight(color as OpaqueColor);
      return onlyOn
      ? [[`On${key}`, light ? onLight : onDark]]
      : [
        [`On${key}`, light ? onLight : onDark],
        [`Off${key}`, light ? onDark : onLight],
      ]
    })
  ) as unknown as DerivedContrasts<T>;
}

// debug

export function getCSSVar(root: HTMLElement, name: string): string{
  return getComputedStyle(root).
    getPropertyValue("--" + name).trim();
}