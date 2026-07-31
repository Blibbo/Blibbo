import type { ReadonlyDeep } from "type-fest";
import type { DryStyleTypes, StyleCommons, UUID } from "./main.svelte";
import { DARK, getSystemTheme, LIGHT, ON_DARK, ON_LIGHT } from "../prepaint/shared";
import { mapNonEmpty } from "../types";
import { opaqueColor, isLight, readableOnLight, readableOnDark } from "./color";
import type { StyleRuntime } from "./mutation";
import { dynamicAccent, dynamicAccent2, hydrateAccent, hydrateAccent2, dryStaticAccent as staticAccent } from "./accent";

export type StyleConfig = ReadonlyDeep<
  StyleCommons<DryStyleTypes, {
    selected?: boolean;
    selectedDark?: boolean;
    selectedLight?: boolean;
  }>
>;

const PRESET_GENERAL = {
  onLight: ON_LIGHT,
  onDark: ON_DARK,
  accent2: dynamicAccent2("AccentComplementary"),
} as const;
const PRESET_TOGGLEABLE = presetToggleable();
const PRESET_SYSTEM = presetSystem();
const PRESET_CLOUDY = {
  ...PRESET_TOGGLEABLE,
  accent: dynamicAccent("OnPage"),
  themes: [
    ...PRESET_TOGGLEABLE.themes,
    {
      page: "#697c80",
      tags: ["cloudy"],
    },
  ],
} as const;

// accents: hotter pink: #ff0063 light blue: #00FFF3 light pink: #C4588C purple: #9B61B0
export const ACCENT = "#67787c";
export const JENNI_ACCENT = "#F00073";
export const BLUE_ACCENT = "#36D";
export const GREEN_ACCENT = "#61B09C";
export const ORANGE_ACCENT = "#E8541A";
export const YELLOW_ACCENT = "#D9ED00";

export const STYLE_PRESETS = {
  default: {
    ...PRESET_SYSTEM,
    accent: staticAccent(ACCENT),
    accent2: staticAccent(ORANGE_ACCENT),
  },
  hotPink: {
    ...PRESET_SYSTEM,
    accent: staticAccent(JENNI_ACCENT),
  },
  blue: {
    ...PRESET_SYSTEM,
    accent: staticAccent(BLUE_ACCENT),
  },
  monochrome: {
    ...PRESET_SYSTEM,
    accent: dynamicAccent("Page"),
  },
  red: {
    ...PRESET_SYSTEM,
    accent: staticAccent("#d6546b"),
  },
  toggleable: {
    ...PRESET_TOGGLEABLE,
    accent: staticAccent(ACCENT),
  },
  cloudy: PRESET_CLOUDY,
  weather: {
    ...PRESET_CLOUDY,
    themes: [
      ...PRESET_CLOUDY.themes,
      {
        page: "#4a6583",
        tags: ["rainy"],
      },
      {
        page: "#777",
        accent: staticAccent("#222"),
        tags: ["stormy"],
      },
      {
        page: "#def",
        accent: staticAccent("#fff"), // staticAccent("#739BD0"),
        tags: ["snowy"],
      },
    ],
  },
} as const satisfies Record<string, StyleConfig>;

export const DEFAULT_PRESET = STYLE_PRESETS.default;

function presetToggleable<
  T1 extends string = typeof LIGHT,
  T2 extends string = typeof DARK
>(
  light: T1 = LIGHT as T1,
  dark: T2 = DARK as T2
) {
  return {
    ...PRESET_GENERAL,
    preference: "custom",
    themes: [
      {
        page: getSystemTheme() === "dark" ? dark : light,
      },
      {
        page: getSystemTheme() === "light" ? dark : light,
      },
    ],
  } as const;
}

function presetSystem<
  T1 extends string = typeof LIGHT,
  T2 extends string = typeof DARK,
>(
  light: T1 = LIGHT as T1,
  dark: T2 = DARK as T2,
) {
  return {
    ...PRESET_GENERAL,
    preference: "system",
    themes: [
      {
        page: dark,
      },
      {
        page: light,
      },
    ],
  } as const;
}

export function hydratePreset(preset: StyleConfig): StyleRuntime {
  const tagRotation = preset.tagRotation ? new Set(preset.tagRotation) : undefined;
  const preference = preset.preference;
  const prefSystem = preference === "system";
  const prefSystemOrLight = prefSystem || preference === "light";
  const prefSystemOrDark = prefSystem || preference === "dark";
  const prefCustom = preference === "custom";

  let selected: UUID | undefined = undefined,
    selectedDark: UUID | undefined = undefined,
    selectedLight: UUID | undefined = undefined;
  
  const inRotation: UUID[] = [],
    inDarkRotation: UUID[] = [],
    inLightrotation: UUID[] = [];

  const themes: StyleRuntime["themes"] =
    mapNonEmpty(preset.themes, ({
      selected: presetSelected,
      selectedDark: presetSelectedDark,
      selectedLight: presetSelectedLight,
      ...theme
    }) => {
      const id = crypto.randomUUID();
      const page = opaqueColor(theme.page);
      const light = isLight(page);
      const tags = theme.tags ? new Set(theme.tags) : undefined;

      if(presetSelected && !selected)
        selected = id;

      if(presetSelectedDark && !selectedDark) {
        if(light) throw new Error(`Selected color for dark theme ${page.raw} is light.`);
        selectedDark = id;
      }

      if(presetSelectedLight && !selectedLight) {
        if(!light) throw new Error(`Selected color for light theme ${page.raw} is dark.`);
        selectedLight = id;
      }

      if(tagRotation?.size){
        if(tags?.size && tagRotation.intersection(tags).size)
          inRotation.push(id);
      } else
        inRotation.push(id);
      
      if(light)
        inLightrotation.push(id);
      else
        inDarkRotation.push(id);
      
      return {
        ...theme,
        id,
        page,
        tags,
        accent: theme.accent ? hydrateAccent(theme.accent) : undefined,
        accent2: theme.accent2 ? hydrateAccent2(theme.accent2) : undefined,
        onLight: theme.onLight ? readableOnLight(theme.onLight) : undefined,
        onDark: theme.onDark ? readableOnDark(theme.onDark) : undefined,
      };
    });

  if(!selected && prefCustom) {
    const id = inRotation[0];
    if(!id) throw new Error(`Application theme not provided.`);
    selected = id;
  }

  if(!selectedDark && prefSystemOrDark) {
    const id = inDarkRotation[0];
    if(!id) throw new Error(`Dark mode theme not provided.`);
    selectedDark = id;
  }

  if(!selectedLight && prefSystemOrLight) {
    const id = inLightrotation[0];
    if(!id) throw new Error(`Light mode theme not provided.`);
    selectedLight = id;
  }

  return {
    ...preset,
    accent: preset.accent ? hydrateAccent(preset.accent) : undefined,
    accent2: preset.accent2 ? hydrateAccent2(preset.accent) : undefined,
    onLight: preset.onLight ? readableOnLight(preset.onLight) : undefined,
    onDark: preset.onDark ? readableOnDark(preset.onDark) : undefined,
    themes,
    selected,
    selectedLight,
    selectedDark,
    tagRotation,
  } as StyleRuntime;
}
