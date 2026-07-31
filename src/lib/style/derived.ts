import Sun from 'virtual:icons/icon-park-outline/sun-one';
import Moon from 'virtual:icons/ri/moon-fill';
import Cloudy from 'virtual:icons/carbon/mostly-cloudy';
// import Cloudy from 'virtual:icons/material-symbols/cloud-outline';
import Rainy from 'virtual:icons/material-symbols/rainy-outline';
import Stormy from 'virtual:icons/famicons/thunderstorm-outline';
import Snowy from 'virtual:icons/material-symbols/cloudy-snowing';
import { getSystemTheme } from "../prepaint/shared";
import { assertNonEmpty } from "../types";
import { isLight } from "./color";
import type { UUID } from "./main.svelte";
import type { StyleRuntimeReadonly } from "./mutation";
import type { SystemTheme } from "./system-theme.svelte";
import { type Component } from "svelte";

// Domain

export type SelectionProperty = "selected" | "selectedDark" | "selectedLight";

export type StyleRuntimeInfo = Readonly<{
  selectionProperty: SelectionProperty;
  selectedTheme: StyleRuntimeReadonly["themes"][number];
  nextTheme: StyleRuntimeReadonly["themes"][number];
  nextThemeIcon: Component;
}>;

type SpecialTag = typeof SPECIAL_TAG_NAMES[number];

const SPECIAL_TAG_NAMES = [
  "cloudy",
  "rainy",
  "stormy",
  "snowy",
] as const;

export function computeRuntimeInfo(
  runtime: StyleRuntimeReadonly,
  systemTheme: SystemTheme,
): StyleRuntimeInfo {

  // current theme
  const selectionProperty = getSelectedProperty(runtime.preference, systemTheme);
  const selectedThemeId = runtime[selectionProperty]!;
  const selectedTheme = findTheme(selectedThemeId, runtime.themes,
    "Selected theme not found, style state is invalid.");

  // next theme
  const valid = getValidThemes(runtime.preference, runtime.themes, runtime.tagRotation, systemTheme);
  const validSelectedIndex = findThemeIndex(selectedThemeId, valid,
    "Selected theme is not valid.");
  const nextTheme = valid[nextIndex(validSelectedIndex, valid.length)]!;
  const nextThemeIcon = getIcon(nextTheme.tags, isLight(nextTheme.page));

  return {
    selectionProperty,
    selectedTheme,
    nextTheme,
    nextThemeIcon,
  };
}

function nextIndex(current: number, length: number): number {
  return (current + 1) % length;
}

export function findTheme<T>(
  id: UUID,
  themes: readonly ({ readonly id: UUID } & T)[],
  errorMessage?: string
): { readonly id: UUID } & T {
  return themes[findThemeIndex(id, themes, errorMessage)]!;
}

function findThemeIndex(
  id: UUID,
  themes: readonly { readonly id: UUID }[],
  errorMessage: string = "Couldn't find searched theme."
): number {
  const index = themes.findIndex(theme => theme.id === id);
  if(index === -1) throw new Error(errorMessage);
  return index;
}

export function getValidThemes(
  preference: StyleRuntimeReadonly["preference"],
  themes: StyleRuntimeReadonly["themes"],
  tagRotation: StyleRuntimeReadonly["tagRotation"],
  systemPreference?: SystemTheme,
): StyleRuntimeReadonly["themes"] {
  const valid = themes.filter(theme => {
    if(preference === "custom"){
      if(tagRotation?.size)
        return theme.tags?.size
          ? tagRotation.intersection(theme.tags)
          : false;
      else
        return true;
    } else {
      const light = isLight(theme.page);
      const scheme = getStyleColorscheme(preference, systemPreference);
      switch(scheme){
        case "light":
          return light;
        case "dark":
          return !light;
      }
    }
  });

  assertNonEmpty(valid, "No valid themes found.");

  return valid;
}

function getStyleColorscheme(
  stylePreference: SystemTheme | "system",
  systemPreference?: SystemTheme
): SystemTheme {
  switch(stylePreference){
    case "dark":
    case "light":
      return stylePreference;
    case "system":
      return systemPreference ?? getSystemTheme();
  }
}

export function getSelectedProperty(
  stylePreference: StyleRuntimeReadonly["preference"],
  systemPreference: SystemTheme
): SelectionProperty {
  switch(stylePreference){
    case "custom":
      return "selected";
    case "dark":
      return "selectedDark";
    case "light":
      return "selectedLight";
    case "system":
      return systemPreference === "light"
        ? "selectedLight"
        : "selectedDark";
  }
}

function getIcon(
  themeTags: StyleRuntimeReadonly["themes"][number]["tags"],
  isLight: boolean
): Component {

  const sunMoon = () => isLight ? Sun : Moon;

  if(!themeTags) return sunMoon();

  const present =
    themeTags.intersection(new Set(SPECIAL_TAG_NAMES));

  if(present.size === 0) return sunMoon();

  // Axiom of Choice
  const choice = present.values().next().value as SpecialTag;

  switch(choice) {
    case "cloudy":
      return Cloudy;
    case "rainy":
      return Rainy;
    case "snowy":
      return Snowy;
    case "stormy":
      return Stormy;
  }
}