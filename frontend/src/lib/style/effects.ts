import { hasKotlinInterface } from "../platform";
import { setCSSGlobal, setPrepaintCache, STYLE_ROOT } from "../prepaint/shared";
import { colorEquals, isLight, type OpaqueColor } from "./color";
import { findTheme, type StyleRuntimeInfo } from "./derived";
import { persistStyle } from "./persist";
import type { StyleRuntimeReadonly } from "./mutation";
import type { SystemTheme } from "./system-theme.svelte";
import { StyleManager, THEME_SWITCH_DURATION } from "./main.svelte";
import { tick } from "svelte";
import type { ReadonlyDeep } from "type-fest";
import type { ColorVariables } from "./variables";

export function applyStyle(
  manager: ReadonlyDeep<StyleManager>,
  computedOld?: StyleRuntimeInfo | undefined,
  variablesOld?: Readonly<ColorVariables> | undefined,
): void {
  const root = manager.root();

  const needTransition = manager.computed.selectedTheme.id !== computedOld?.selectedTheme.id;
  if(!needTransition)
    setCSSVar(root, "theme-switch-duration", "0ms");

  applyVariables(root, manager.variables);

  const pageColor = manager.variables.Page;
  if(!variablesOld || !colorEquals(pageColor, variablesOld.Page)){
    const contrastHint = isLight(pageColor) ? "light" : "dark";
    setThemeAttributes(root, contrastHint);

    if(root === STYLE_ROOT) {
      prepaintCache(manager.runtime, manager.variables, contrastHint);
    }
  }

  const opaqueAccent = manager.variables.AccentOpaque;
  if(!variablesOld || !colorEquals(opaqueAccent, variablesOld.AccentOpaque)){
    setMetaThemeColor(opaqueAccent);
    updateAndroidSystemIcons(isLight(opaqueAccent));
  }

  if(!needTransition)
    tick().then(()=>setCSSVar(root, "theme-switch-duration", THEME_SWITCH_DURATION)); 

  if(computedOld)
    persistStyle(manager.runtime, manager.persistKey);
}

function applyVariables(
  root: HTMLElement,
  variables: ColorVariables
): void {
  for (const key in variables) {
    const kebabKey = key
      .replace(/([A-Z])/g, (_, c) => `-${c.toLowerCase()}`)
      .slice(1);
    setCSSVar(root, kebabKey, variables[key as keyof typeof variables].raw);
  }
}

function setMetaThemeColor(color: OpaqueColor): void{
  const meta: HTMLMetaElement | null = document.querySelector('meta[name="theme-color"]');
  if(!meta){
    throw new Error('Expected <meta name="theme-color" /> to exist in the document.');
  }

  meta.content = color.raw;
}

function updateAndroidSystemIcons(safeAreaBgIsLight: boolean): void {
  if(hasKotlinInterface(window)){
    window.AndroidSystemUI.setStatusBarIcons(safeAreaBgIsLight);
  }
}

function setCSSVar(el: HTMLElement, name: string, value: string): void {
  el.style.setProperty("--" + name, value);
}

function setThemeAttributes(root: HTMLElement, colorScheme: SystemTheme): void {
  root.setAttribute("data-theme", colorScheme);
  root.setAttribute("theme", colorScheme);
}

function prepaintCache(
  style: StyleRuntimeReadonly,
  variables: ColorVariables,
  contrastHint: SystemTheme
): void {
  setPrepaintCache(style.preference === "system"
    ? {
      light: findTheme(style.selectedLight, style.themes).page.raw,
      dark: findTheme(style.selectedDark, style.themes).page.raw,
    }
    : {
      color: variables.Page.raw,
      contrastHint,
    }
  );
}