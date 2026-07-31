import { platform, type } from '@tauri-apps/plugin-os'

export const IS_TAURI = '__TAURI_INTERNALS__' in window;
export const TAURI_OS_TYPE = IS_TAURI && type() || undefined;
export const IS_MOBILE_APP = TAURI_OS_TYPE === 'ios' || TAURI_OS_TYPE === 'android';
export const IS_DESKTOP_APP = IS_TAURI && !IS_MOBILE_APP;

export const IS_ANDROID = navigator.userAgent.includes("Android") || TAURI_OS_TYPE === 'android';
export const IS_ANDROID_APP = TAURI_OS_TYPE === 'android';
export const IS_IOS_APP = TAURI_OS_TYPE === 'ios';

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
  // return typeof win.AndroidSystemUI?.setStatusBarIcons === "function";
  return IS_ANDROID_APP;
}