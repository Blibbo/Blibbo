import { type OpaqueColor, type ReadableOnDark, type ReadableOnLight, type ValidColor } from "$lib/style/color";
import { setCSSGlobal } from "$lib/style/prepaint/shared";
import { tags } from "typia";
import { type NonEmptyArray } from "$lib/types";
import { createContext, onDestroy } from "svelte";
import { type StyleConfig } from "./config";
import type { Accent, Accent2 } from "./accent";
import type { StyleManager } from "./manager.svelte";

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
  accent2: Accent2<Types["staticAccentValue"]>;
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

export type StyleArguments = {
  root: HTMLElement;
  persistKey: string;
  defaultStyle: StyleConfig;
};

export type StyleArgumentsInit = Omit<StyleArguments, "root">;
type StyleArgumentsEffect = Omit<StyleArguments, "defaultStyle">;



export const [getStyleContext, setStyleContext] = createContext<StyleManager>();

export function overrideStyle(
  persistKey: string,
  defaultStyle: StyleConfig
): void {
  try{
    const manager = getStyleContext();
    const previous = manager.override(persistKey, defaultStyle);
    
    onDestroy(()=>{
      manager.override(previous.persistKey, previous.defaultStyle);
    });
  } catch {
    throw new Error(`Unable to override style: application style not set.`);
  }
}

// Init

function initStyle(): void{
  setCSSGlobal("theme-switch-duration", THEME_SWITCH_DURATION);
}

initStyle();

