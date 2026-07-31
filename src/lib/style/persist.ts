import typia from "typia";
import { LOCALSTORAGE_PREFIX } from "../prepaint/shared";
import { mapNonEmpty } from "../types";
import { opaqueColor, readableOnDark, readableOnLight } from "./color";
import type { DryStyleTypes } from "./main.svelte";
import { hydratePreset, type StyleConfig } from "./config";
import type { StyleRuntime, StyleRuntimeReadonly } from "./mutation";
import { dehydrateAccent, dehydrateAccent2, hydrateAccent, hydrateAccent2 } from "./accent";

export type StylePersist = StyleRuntimeReadonly<DryStyleTypes>;

const BASE_STYLE_KEY = `${LOCALSTORAGE_PREFIX}style`;

export function loadStyle(key: string, defaultStyle: StyleConfig): StyleRuntime {
  const storedString = localStorage.getItem(getStyleKey(key));
  if(!storedString) return hydratePreset(defaultStyle);

  try{
    const stored = JSON.parse(storedString);

    if(typia.is<StylePersist>(stored)){      
      return hydrateStylePersist(stored);
    }

    return hydratePreset(defaultStyle);
  } catch{
    return hydratePreset(defaultStyle);
  }
}

export function persistStyle(style: StyleRuntimeReadonly, key: string): void {
  const dry = dehydrateStyle(style);
  localStorage.setItem(getStyleKey(key), JSON.stringify(dry));
}

function getStyleKey(key: string): string {
  if(key)
    return `${BASE_STYLE_KEY}.${key}`;
  else
    return BASE_STYLE_KEY;
}

function hydrateStylePersist(stored: StylePersist): StyleRuntime {
  return {
    ...stored,

    accent: hydrateAccent(stored.accent),
    accent2: stored.accent2 ? hydrateAccent2(stored.accent2) : undefined,

    onLight: readableOnLight(stored.onLight),
    onDark: readableOnDark(stored.onDark),

    tagRotation: stored.tagRotation ? new Set(stored.tagRotation) : undefined,

    themes: mapNonEmpty(stored.themes, (theme) => ({
      ...theme,
      
      page: opaqueColor(theme.page),
      accent: theme.accent ? hydrateAccent(theme.accent) : undefined,
      accent2: theme.accent2 ? hydrateAccent2(theme.accent2) : undefined,
      onLight: theme.onLight ? readableOnLight(theme.onLight) : undefined,
      onDark: theme.onDark ? readableOnDark(theme.onDark) : undefined,

      tags: theme.tags ? new Set(theme.tags) : undefined,
    })),
  };
}

function dehydrateStyle(style: StyleRuntimeReadonly): StylePersist {
  return {
    ...style,

    accent: dehydrateAccent(style.accent),
    accent2: style.accent2 ? dehydrateAccent2(style.accent2) : undefined,
    
    onLight: style.onLight.raw,
    onDark: style.onDark.raw,

    tagRotation: style.tagRotation ? [...style.tagRotation] : undefined,

    themes: mapNonEmpty(style.themes, (theme) => ({
      ...theme,

      page: theme.page.raw,
      accent: theme.accent ? dehydrateAccent(theme.accent) : undefined,
      accent2: theme.accent2 ? dehydrateAccent2(theme.accent2) : undefined,
      tags: theme.tags ? [...theme.tags] : undefined,
    })),
  } as StylePersist;
}