const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

export type SystemTheme = "dark" | "light";

let theme = $state<SystemTheme>(
  mediaQueryList.matches ? "dark" : "light"
);

function listener(e: MediaQueryListEvent) {
  theme = e.matches ? "dark" : "light";
}

mediaQueryList.addEventListener("change", listener);

export const systemTheme = {
  get value() { return theme }
};
