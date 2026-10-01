
export const LIGHT = "#fff";
export const DARK = "#283137";
export const ON_LIGHT = "#000";
export const ON_DARK = "#fff";

export const STYLE_ROOT = document.documentElement;

// schema validation, my replacement for typia (no dependencies allowed here)
function hasExactKeys<
  T extends readonly string[]
>(
  value: unknown,
  keys: T
): value is Record<T[number], unknown> {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const objectKeys = Object.keys(value);

  return (
    objectKeys.length === keys.length &&
    keys.every((key) =>
      Object.prototype.hasOwnProperty.call(value, key)
    )
  );
}

type CustomPrepaintInfo = {
  color: string;
  contrastHint: "light" | "dark";
};

function isCustomPrepaintInfo(
  value: unknown
): value is CustomPrepaintInfo {
  if (!hasExactKeys(value, ["color", "contrastHint"] as const)) {
    return false;
  }

  return (
    typeof value.color === "string" &&
    (
      value.contrastHint === "light" ||
      value.contrastHint === "dark"
    )
  );
}

type SystemPrepaintInfo = {
  dark: string;
  light: string;
};

function isSystemPrepaintInfo(
  value: unknown
): value is SystemPrepaintInfo {
  if (!hasExactKeys(value, ["dark", "light"] as const)) {
    return false;
  }

  return (
    typeof value.dark === "string" &&
    typeof value.light === "string"
  );
}

type PrepaintInfo = CustomPrepaintInfo | SystemPrepaintInfo;

function isPrepaintInfo(value: unknown): value is PrepaintInfo {
  return (
    isSystemPrepaintInfo(value) ||
    isCustomPrepaintInfo(value)
  );
}


const PREPAINT_DEFAULTS: PrepaintInfo = {
  dark: DARK,
  light: LIGHT,
};

export const LOCALSTORAGE_PREFIX = "Blibbo."
const PREPAINT_KEY = `${LOCALSTORAGE_PREFIX}prepaintInfo`;
export function setPrepaintCache(info: PrepaintInfo): void{
  const stringified = JSON.stringify(info);
  localStorage.setItem(PREPAINT_KEY, stringified);
}
function getPrepaintCache(): PrepaintInfo {
  const cacheString = localStorage.getItem(PREPAINT_KEY);
  if(!cacheString) return PREPAINT_DEFAULTS;

  try{
    const cacheObject = JSON.parse(cacheString);

    if(isPrepaintInfo(cacheObject)){
      return cacheObject;
    }

    return PREPAINT_DEFAULTS;
  } catch{
    return PREPAINT_DEFAULTS;
  }
}

export function getSystemTheme(): "light" | "dark" {
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return systemDark ? "dark" : "light";
}

function infoIsMatchSystem(info: PrepaintInfo): info is SystemPrepaintInfo {
  return "dark" in info;
}

type ProcessedPrepaintInfo = {
  background: string;
  text: string;
};

function getTextColor(background: "light" | "dark"): string{
  if(background === "light")
    return ON_LIGHT;
  return ON_DARK;
}

function getPrepaintPageColors(): ProcessedPrepaintInfo{
  const info: PrepaintInfo = getPrepaintCache();

  if(infoIsMatchSystem(info)){
    const systemTheme = getSystemTheme();
    return {
      background: info[systemTheme],
      text: getTextColor(systemTheme),
    };
  }

  return {
    background: info.color,
    text: getTextColor(info.contrastHint),
  };
}

export function setCSSGlobal(name: string, value: string): void{
  STYLE_ROOT.style.setProperty("--" + name, value);
}

export function applyPrepaintColors(): void{
  const {
    background: page,
    text: onPage,
  } = getPrepaintPageColors();
  setCSSGlobal("page", page);
  setCSSGlobal("on-page", onPage);
}