import type { ReadonlyDeep } from "type-fest";
import type { RichStyleTypes, StyleCommons, StyleTypes, UUID } from "./main.svelte";
import type { SystemTheme } from "./system-theme.svelte";
import { getSelectedProperty, getValidThemes, type SelectionProperty, type StyleRuntimeInfo } from "./derived";

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
  const newTargetProperty = getSelectedProperty(preference, systemTheme);

  const index = [{
    targetProperty: newTargetProperty,
    preference,
  }];

  if(preference === "system") {
    index.push({
      targetProperty: systemTheme === "dark"
        ? "selectedLight"
        : "selectedDark",
      preference: systemTheme === "dark"
        ? "light"
        : "dark",
    });
  }
  
  for (const i of index) {
    const valid =
      getValidThemes(i.preference, style.themes, style.tagRotation, systemTheme);
    const oldSelectedId = computed.selectedTheme.id;

    const cached = style[i.targetProperty];
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

    style[i.targetProperty] = newSelected;
  }

  style.preference = preference;
}

export function nextTheme(
  style: StyleRuntime,
  computed: StyleRuntimeInfo
): void {
  style[computed.selectionProperty] = computed.nextTheme.id;
}