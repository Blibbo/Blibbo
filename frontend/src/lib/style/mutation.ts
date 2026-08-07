import type { ReadonlyDeep } from "type-fest";
import type { RichStyleTypes, StyleCommons, StyleTypes, UUID } from "./main.svelte";
import type { SystemTheme } from "./system-theme.svelte";
import { getSelectedProperty, getValidThemes, type StyleRuntimeInfo } from "./derived";

export type StyleRuntime<Types extends StyleTypes = RichStyleTypes> =
  StyleCommons<Types, {
    id: UUID;
  }> & {
    selected?: UUID | undefined;
    selectedLight?: UUID | undefined;
    selectedDark?: UUID | undefined;
  } & (
    {
      preference: "custom";
      selected: UUID;
    } | {
      preference: "light";
      selectedLight: UUID;
    } | {
      preference: "dark";
      selectedDark: UUID;
    } | {
      preference: "system";
      selectedLight: UUID;
      selectedDark: UUID;
    }
  );

export type StyleRuntimeReadonly<
  Types extends StyleTypes = RichStyleTypes
> = ReadonlyDeep<StyleRuntime<Types>>;

export function setPreference(
  preference: StyleRuntime["preference"],
  style: StyleRuntime,
  systemTheme: SystemTheme,
  computed: StyleRuntimeInfo,
): void {
  const valid = getValidThemes(preference, style.themes, style.tagRotation, systemTheme);
  const oldSelectedId = computed.selectedTheme.id;
  const newTargetProperty = getSelectedProperty(preference, systemTheme);

  const cached = style[newTargetProperty];
  const isOldThemeStillValid =
    ()=>valid.some(theme => theme.id === oldSelectedId);

  let newSelected: UUID;
  if(cached){
    newSelected = cached;
  } else if (isOldThemeStillValid()) {
    newSelected = oldSelectedId;
  } else {
    newSelected = valid[0].id;
  }

  style[newTargetProperty] = newSelected,
  style.preference = preference;
}

export function nextTheme(
  style: StyleRuntime,
  computed: StyleRuntimeInfo
): void {
  style[computed.selectionProperty] = computed.nextTheme.id;
}