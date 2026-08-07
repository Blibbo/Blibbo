import { System } from '@wailsio/runtime';

export const IS_ANDROID_APP = System.IsAndroid();

// PRIMARY input is a touchscreen
export const IS_TOUCH_SCREEN = window.matchMedia("(pointer: coarse)").matches;

// ANY connected device supports touch (useful for hybrid laptops)
export const HAS_TOUCH_CAPABILITY = window.matchMedia("(any-pointer: coarse)").matches;

// android shenanigans
type AndroidSystemUI = {
  setStatusBarIcons(safeAreaBgIsLight: boolean): void;
};

declare global {
  interface Window {
    AndroidSystemUI?: AndroidSystemUI;
  }
}

export function hasKotlinInterface(
  win: Window = window
): win is Window & { AndroidSystemUI: AndroidSystemUI } {
  return typeof win.AndroidSystemUI?.setStatusBarIcons === "function";
}