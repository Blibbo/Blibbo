import { a as attributes, m as createContext, n as onDestroy, r as tick, s as derived } from "./index-server.js";
import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import a11yPlugin from "colord/plugins/a11y";
import namesPlugin from "colord/plugins/names";
import harmoniesPlugin from "colord/plugins/harmonies";
import * as __typia_transform__isFormatUuid from "typia/lib/internal/_isFormatUuid";
import { System } from "@wailsio/runtime";
//#region src/lib/prepaint/shared.ts
var LIGHT = "#fff";
var DARK = "#283137";
var ON_LIGHT = "#000";
var ON_DARK = "#fff";
var STYLE_ROOT = document.documentElement;
var LOCALSTORAGE_PREFIX = "Blibbo.";
var PREPAINT_KEY = `${LOCALSTORAGE_PREFIX}prepaintInfo`;
function setPrepaintCache(info) {
	const stringified = JSON.stringify(info);
	localStorage.setItem(PREPAINT_KEY, stringified);
}
function getSystemTheme() {
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function setCSSGlobal(name, value) {
	STYLE_ROOT.style.setProperty("--" + name, value);
}
//#endregion
//#region src/lib/style/system-theme.svelte.ts
var mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
var theme = mediaQueryList.matches ? "dark" : "light";
function listener(e) {
	theme = e.matches ? "dark" : "light";
}
mediaQueryList.addEventListener("change", listener);
var systemTheme = { get value() {
	return theme;
} };
//#endregion
//#region src/lib/types.ts
function mapNonEmpty(array, callback) {
	return array.map(callback);
}
function assertNonEmpty(array, errorMessage = "Expected array to be non empty") {
	if (array.length < 1) throw new Error(errorMessage);
}
//#endregion
//#region src/lib/style/color.ts
extend([
	mixPlugin,
	a11yPlugin,
	namesPlugin,
	harmoniesPlugin
]);
var VALID = Symbol("VALID");
var OPAQUE = Symbol("OPAQUE");
var READABLE_ON_LIGHT = Symbol("READABLE_ON_LIGHT");
var READABLE_ON_DARK = Symbol("READABLE_ON_DARK");
var ValidColor = class {
	[VALID];
	raw;
	_d;
	constructor(input) {
		const d = typeof input === "string" ? colord(input) : input;
		if (!d.isValid()) throw new Error(`Color ${input} is not valid.`);
		this.raw = typeof input === "string" ? input : d.toHex();
		this._d = d;
	}
	d = () => {
		return this._d ?? colord(this.raw);
	};
};
var OpaqueColor = class extends ValidColor {
	[OPAQUE];
	constructor(input) {
		super(input);
		if (this.d().alpha() !== 1) throw new Error(`Expected opaque color, ${this.raw} given.`);
	}
};
var ReadableOnLight = class extends OpaqueColor {
	[READABLE_ON_LIGHT];
	constructor(input) {
		super(input);
		if (this.d().brightness() > .2) throw new Error(`Expected a color readable on light backgrounds, found ${this.raw} instead.`);
	}
};
var ReadableOnDark = class extends OpaqueColor {
	[READABLE_ON_DARK];
	constructor(input) {
		super(input);
		if (this.d().brightness() < .8) throw new Error(`Expected a color readable on dark backgrounds, found ${this.raw} instead.`);
	}
};
function validColor(color) {
	return new ValidColor(color);
}
function opaqueColor(color) {
	return new OpaqueColor(color);
}
function readableOnLight(color) {
	return new ReadableOnLight(color);
}
function readableOnDark(color) {
	return new ReadableOnDark(color);
}
function toOpaque(color, opaqueBase) {
	const original = color.d();
	return opaqueColor(opaqueBase.d().mix(original, original.alpha()).alpha(1).toHex());
}
function isLight(color) {
	return color.d().isLight();
}
function colorEquals(color1, color2) {
	return color1.d().isEqual(color2.d());
}
function contrastIsVisible(color1, color2) {
	return color1.d().contrast(color2.d()) > 2;
}
function computeColor1OnColor2(color1, color2, options) {
	const STEP = .1;
	let current = color1;
	let previous = current;
	const color2IsLight = isLight(color2);
	for (let i = 0; i < 10; i++) {
		const checkContrast = options.type === "unlike" ? contrastIsVisible(current, options.contrast) : true;
		const checkMain = options.type === "readable" ? current.d().isReadable(color2.d()) : contrastIsVisible(current, color2);
		if (checkContrast && checkMain) break;
		if (!checkContrast && !checkMain) {
			const unlikeOptions = options;
			return opaqueColor(color2.d().mix(unlikeOptions.contrast.d(), .5));
		}
		current = opaqueColor(!checkMain ? color2IsLight ? current.d().darken(STEP) : current.d().lighten(STEP) : color2IsLight ? current.d().lighten(STEP) : current.d().darken(STEP));
		if (colorEquals(current, previous)) break;
		previous = current;
	}
	return current;
}
//#endregion
//#region src/lib/style/accent.ts
function dryStaticAccent(value) {
	return {
		kind: "static",
		value
	};
}
function dynamicAccentFor(value) {
	return {
		kind: "dynamic",
		value
	};
}
function dynamicAccent(value) {
	return dynamicAccentFor(value);
}
function dynamicAccent2(value) {
	return dynamicAccentFor(value);
}
function hydrateAccentFor(accent) {
	return accent.kind === "dynamic" ? accent : {
		...accent,
		value: validColor(accent.value)
	};
}
function hydrateAccent(accent) {
	return hydrateAccentFor(accent);
}
function hydrateAccent2(accent) {
	return hydrateAccentFor(accent);
}
function dehydrateAccentFor(accent) {
	return accent.kind === "dynamic" ? accent : {
		...accent,
		value: accent.value.raw
	};
}
function dehydrateAccent(accent) {
	return dehydrateAccentFor(accent);
}
function dehydrateAccent2(accent) {
	return dehydrateAccentFor(accent);
}
//#endregion
//#region src/lib/style/config.ts
var PRESET_GENERAL = {
	onLight: ON_LIGHT,
	onDark: ON_DARK,
	accent2: dynamicAccent2("AccentComplementary")
};
var PRESET_TOGGLEABLE = presetToggleable();
var PRESET_SYSTEM = presetSystem();
var PRESET_CLOUDY = {
	...PRESET_TOGGLEABLE,
	accent: dynamicAccent("OnPage"),
	themes: [...PRESET_TOGGLEABLE.themes, {
		page: "#697c80",
		tags: ["cloudy"]
	}]
};
var ACCENT = "#67787c";
var JENNI_ACCENT = "#F00073";
var BLUE_ACCENT = "#36D";
var GREEN_ACCENT = "#61B09C";
var ORANGE_ACCENT = "#E8541A";
var YELLOW_ACCENT = "#D9ED00";
var STYLE_PRESETS = {
	default: {
		...PRESET_SYSTEM,
		accent: dryStaticAccent(ACCENT),
		accent2: dryStaticAccent(ORANGE_ACCENT)
	},
	hotPink: {
		...PRESET_SYSTEM,
		accent: dryStaticAccent(JENNI_ACCENT)
	},
	blue: {
		...PRESET_SYSTEM,
		accent: dryStaticAccent(BLUE_ACCENT)
	},
	monochrome: {
		...PRESET_SYSTEM,
		accent: dynamicAccent("Page")
	},
	red: {
		...PRESET_SYSTEM,
		accent: dryStaticAccent("#d6546b")
	},
	toggleable: {
		...PRESET_TOGGLEABLE,
		accent: dryStaticAccent(ACCENT)
	},
	cloudy: PRESET_CLOUDY,
	weather: {
		...PRESET_CLOUDY,
		themes: [
			...PRESET_CLOUDY.themes,
			{
				page: "#4a6583",
				tags: ["rainy"]
			},
			{
				page: "#777",
				accent: dryStaticAccent("#222"),
				tags: ["stormy"]
			},
			{
				page: "#def",
				accent: dryStaticAccent("#fff"),
				tags: ["snowy"]
			}
		]
	}
};
STYLE_PRESETS.default;
function presetToggleable(light = LIGHT, dark = DARK) {
	return {
		...PRESET_GENERAL,
		preference: "custom",
		themes: [{ page: getSystemTheme() === "dark" ? dark : light }, { page: getSystemTheme() === "light" ? dark : light }]
	};
}
function presetSystem(light = LIGHT, dark = DARK) {
	return {
		...PRESET_GENERAL,
		preference: "system",
		themes: [{ page: dark }, { page: light }]
	};
}
function hydratePreset(preset) {
	const tagRotation = preset.tagRotation ? new Set(preset.tagRotation) : void 0;
	const preference = preset.preference;
	const prefSystem = preference === "system";
	const prefSystemOrLight = prefSystem || preference === "light";
	const prefSystemOrDark = prefSystem || preference === "dark";
	const prefCustom = preference === "custom";
	let selected = void 0, selectedDark = void 0, selectedLight = void 0;
	const inRotation = [], inDarkRotation = [], inLightrotation = [];
	const themes = mapNonEmpty(preset.themes, ({ selected: presetSelected, selectedDark: presetSelectedDark, selectedLight: presetSelectedLight, ...theme }) => {
		const id = crypto.randomUUID();
		const page = opaqueColor(theme.page);
		const light = isLight(page);
		const tags = theme.tags ? new Set(theme.tags) : void 0;
		if (presetSelected && !selected) selected = id;
		if (presetSelectedDark && !selectedDark) {
			if (light) throw new Error(`Selected color for dark theme ${page.raw} is light.`);
			selectedDark = id;
		}
		if (presetSelectedLight && !selectedLight) {
			if (!light) throw new Error(`Selected color for light theme ${page.raw} is dark.`);
			selectedLight = id;
		}
		if (tagRotation?.size) {
			if (tags?.size && tagRotation.intersection(tags).size) inRotation.push(id);
		} else inRotation.push(id);
		if (light) inLightrotation.push(id);
		else inDarkRotation.push(id);
		return {
			...theme,
			id,
			page,
			tags,
			accent: theme.accent ? hydrateAccent(theme.accent) : void 0,
			accent2: theme.accent2 ? hydrateAccent2(theme.accent2) : void 0,
			onLight: theme.onLight ? readableOnLight(theme.onLight) : void 0,
			onDark: theme.onDark ? readableOnDark(theme.onDark) : void 0
		};
	});
	if (!selected && prefCustom) {
		const id = inRotation[0];
		if (!id) throw new Error(`Application theme not provided.`);
		selected = id;
	}
	if (!selectedDark && prefSystemOrDark) {
		const id = inDarkRotation[0];
		if (!id) throw new Error(`Dark mode theme not provided.`);
		selectedDark = id;
	}
	if (!selectedLight && prefSystemOrLight) {
		const id = inLightrotation[0];
		if (!id) throw new Error(`Light mode theme not provided.`);
		selectedLight = id;
	}
	return {
		...preset,
		accent: preset.accent ? hydrateAccent(preset.accent) : void 0,
		accent2: preset.accent2 ? hydrateAccent2(preset.accent) : void 0,
		onLight: preset.onLight ? readableOnLight(preset.onLight) : void 0,
		onDark: preset.onDark ? readableOnDark(preset.onDark) : void 0,
		themes,
		selected,
		selectedLight,
		selectedDark,
		tagRotation
	};
}
//#endregion
//#region src/lib/style/persist.ts
var BASE_STYLE_KEY = `${LOCALSTORAGE_PREFIX}style`;
function loadStyle(key, defaultStyle) {
	const storedString = localStorage.getItem(getStyleKey(key));
	if (!storedString) return hydratePreset(defaultStyle);
	try {
		const stored = JSON.parse(storedString);
		if ((() => {
			const _iv4 = /* @__PURE__ */ new Set([
				"Page",
				"PageComplementary",
				"PageInverted",
				"NextTheme",
				"OnPage",
				"OnPageComplementary",
				"OnPageInverted",
				"OnNextTheme",
				"OffPage",
				"OffPageComplementary",
				"OffPageInverted",
				"OffNextTheme",
				"OnLight",
				"OnDark"
			]);
			const _iv5 = /* @__PURE__ */ new Set([
				"Page",
				"PageComplementary",
				"PageInverted",
				"NextTheme",
				"OnPage",
				"OnPageComplementary",
				"OnPageInverted",
				"OnNextTheme",
				"OffPage",
				"OffPageComplementary",
				"OffPageInverted",
				"OffNextTheme",
				"OnLight",
				"OnDark",
				"AccentOpaque",
				"AccentComplementary",
				"AccentInverted",
				"OnAccent",
				"OnAccentComplementary",
				"OnAccentInverted",
				"OffAccent",
				"OffAccentComplementary",
				"OffAccentInverted",
				"PageUnlikeAccent",
				"PageReadableOnAccent",
				"PageVisibleOnAccent",
				"AccentUnlikePage",
				"AccentReadableOnPage",
				"AccentVisibleOnPage",
				"OnPageUnlikeAccent",
				"OnPageReadableOnAccent",
				"OnPageVisibleOnAccent",
				"OnAccentUnlikePage",
				"OnAccentReadableOnPage",
				"OnAccentVisibleOnPage"
			]);
			const _io0 = (input) => "custom" === input.preference && (void 0 === input.tagRotation || Array.isArray(input.tagRotation) && input.tagRotation.every((elem) => "string" === typeof elem)) && Array.isArray(input.themes) && "object" === typeof input.themes[0] && null !== input.themes[0] && _io1(input.themes[0]) && Array.isArray(input.themes.slice(1)) && input.themes.slice(1).every((elem) => "object" === typeof elem && null !== elem && _io1(elem)) && "string" === typeof input.onLight && "string" === typeof input.onDark && "object" === typeof input.accent && null !== input.accent && _iu0(input.accent) && (void 0 === input.accent2 || "object" === typeof input.accent2 && null !== input.accent2 && _iu1(input.accent2)) && "string" === typeof input.selected && __typia_transform__isFormatUuid._isFormatUuid(input.selected) && (void 0 === input.selectedLight || "string" === typeof input.selectedLight && __typia_transform__isFormatUuid._isFormatUuid(input.selectedLight)) && (void 0 === input.selectedDark || "string" === typeof input.selectedDark && __typia_transform__isFormatUuid._isFormatUuid(input.selectedDark));
			const _io1 = (input) => (void 0 === input.tags || Array.isArray(input.tags) && input.tags.every((elem) => "string" === typeof elem)) && "string" === typeof input.page && (void 0 === input.onLight || "string" === typeof input.onLight) && (void 0 === input.onDark || "string" === typeof input.onDark) && (void 0 === input.accent || "object" === typeof input.accent && null !== input.accent && _iu0(input.accent)) && (void 0 === input.accent2 || "object" === typeof input.accent2 && null !== input.accent2 && _iu1(input.accent2)) && "string" === typeof input.id && __typia_transform__isFormatUuid._isFormatUuid(input.id);
			const _io2 = (input) => "dynamic" === input.kind && true === _iv4.has(input.value);
			const _io3 = (input) => "static" === input.kind && "string" === typeof input.value;
			const _io4 = (input) => "dynamic" === input.kind && true === _iv5.has(input.value);
			const _io5 = (input) => "light" === input.preference && (void 0 === input.tagRotation || Array.isArray(input.tagRotation) && input.tagRotation.every((elem) => "string" === typeof elem)) && Array.isArray(input.themes) && "object" === typeof input.themes[0] && null !== input.themes[0] && _io1(input.themes[0]) && Array.isArray(input.themes.slice(1)) && input.themes.slice(1).every((elem) => "object" === typeof elem && null !== elem && _io1(elem)) && "string" === typeof input.onLight && "string" === typeof input.onDark && "object" === typeof input.accent && null !== input.accent && _iu0(input.accent) && (void 0 === input.accent2 || "object" === typeof input.accent2 && null !== input.accent2 && _iu1(input.accent2)) && (void 0 === input.selected || "string" === typeof input.selected && __typia_transform__isFormatUuid._isFormatUuid(input.selected)) && "string" === typeof input.selectedLight && __typia_transform__isFormatUuid._isFormatUuid(input.selectedLight) && (void 0 === input.selectedDark || "string" === typeof input.selectedDark && __typia_transform__isFormatUuid._isFormatUuid(input.selectedDark));
			const _io6 = (input) => "dark" === input.preference && (void 0 === input.tagRotation || Array.isArray(input.tagRotation) && input.tagRotation.every((elem) => "string" === typeof elem)) && Array.isArray(input.themes) && "object" === typeof input.themes[0] && null !== input.themes[0] && _io1(input.themes[0]) && Array.isArray(input.themes.slice(1)) && input.themes.slice(1).every((elem) => "object" === typeof elem && null !== elem && _io1(elem)) && "string" === typeof input.onLight && "string" === typeof input.onDark && "object" === typeof input.accent && null !== input.accent && _iu0(input.accent) && (void 0 === input.accent2 || "object" === typeof input.accent2 && null !== input.accent2 && _iu1(input.accent2)) && (void 0 === input.selected || "string" === typeof input.selected && __typia_transform__isFormatUuid._isFormatUuid(input.selected)) && (void 0 === input.selectedLight || "string" === typeof input.selectedLight && __typia_transform__isFormatUuid._isFormatUuid(input.selectedLight)) && "string" === typeof input.selectedDark && __typia_transform__isFormatUuid._isFormatUuid(input.selectedDark);
			const _io7 = (input) => "system" === input.preference && (void 0 === input.tagRotation || Array.isArray(input.tagRotation) && input.tagRotation.every((elem) => "string" === typeof elem)) && Array.isArray(input.themes) && "object" === typeof input.themes[0] && null !== input.themes[0] && _io1(input.themes[0]) && Array.isArray(input.themes.slice(1)) && input.themes.slice(1).every((elem) => "object" === typeof elem && null !== elem && _io1(elem)) && "string" === typeof input.onLight && "string" === typeof input.onDark && "object" === typeof input.accent && null !== input.accent && _iu0(input.accent) && (void 0 === input.accent2 || "object" === typeof input.accent2 && null !== input.accent2 && _iu1(input.accent2)) && (void 0 === input.selected || "string" === typeof input.selected && __typia_transform__isFormatUuid._isFormatUuid(input.selected)) && "string" === typeof input.selectedLight && __typia_transform__isFormatUuid._isFormatUuid(input.selectedLight) && "string" === typeof input.selectedDark && __typia_transform__isFormatUuid._isFormatUuid(input.selectedDark);
			const _iu0 = (input) => (() => {
				if ("static" === input.kind) return _io3(input);
				else if ("dynamic" === input.kind) return _io2(input);
				else return false;
			})();
			const _iu1 = (input) => (() => {
				if ("dynamic" === input.kind) return _io4(input);
				else if ("static" === input.kind) return _io3(input);
				else return false;
			})();
			const _iu2 = (input) => (() => {
				if ("system" === input.preference) return _io7(input);
				else if ("dark" === input.preference) return _io6(input);
				else if ("light" === input.preference) return _io5(input);
				else if ("custom" === input.preference) return _io0(input);
				else return false;
			})();
			return (input) => "object" === typeof input && null !== input && _iu2(input);
		})()(stored)) return hydrateStylePersist(stored);
		return hydratePreset(defaultStyle);
	} catch {
		return hydratePreset(defaultStyle);
	}
}
function persistStyle(style, key) {
	const dry = dehydrateStyle(style);
	localStorage.setItem(getStyleKey(key), JSON.stringify(dry));
}
function getStyleKey(key) {
	if (key) return `${BASE_STYLE_KEY}.${key}`;
	else return BASE_STYLE_KEY;
}
function hydrateStylePersist(stored) {
	return {
		...stored,
		accent: hydrateAccent(stored.accent),
		accent2: stored.accent2 ? hydrateAccent2(stored.accent2) : void 0,
		onLight: readableOnLight(stored.onLight),
		onDark: readableOnDark(stored.onDark),
		tagRotation: stored.tagRotation ? new Set(stored.tagRotation) : void 0,
		themes: mapNonEmpty(stored.themes, (theme) => ({
			...theme,
			page: opaqueColor(theme.page),
			accent: theme.accent ? hydrateAccent(theme.accent) : void 0,
			accent2: theme.accent2 ? hydrateAccent2(theme.accent2) : void 0,
			onLight: theme.onLight ? readableOnLight(theme.onLight) : void 0,
			onDark: theme.onDark ? readableOnDark(theme.onDark) : void 0,
			tags: theme.tags ? new Set(theme.tags) : void 0
		}))
	};
}
function dehydrateStyle(style) {
	return {
		...style,
		accent: dehydrateAccent(style.accent),
		accent2: style.accent2 ? dehydrateAccent2(style.accent2) : void 0,
		onLight: style.onLight.raw,
		onDark: style.onDark.raw,
		tagRotation: style.tagRotation ? [...style.tagRotation] : void 0,
		themes: mapNonEmpty(style.themes, (theme) => ({
			...theme,
			page: theme.page.raw,
			accent: theme.accent ? dehydrateAccent(theme.accent) : void 0,
			accent2: theme.accent2 ? dehydrateAccent2(theme.accent2) : void 0,
			tags: theme.tags ? [...theme.tags] : void 0
		}))
	};
}
//#endregion
//#region ~icons/icon-park-outline/sun-one.svelte
function Sun_one($$renderer, $$props) {
	const { $$slots, $$events, ...p } = $$props;
	$$renderer.push(`<svg${attributes({
		viewBox: "0 0 48 48",
		width: "1.2em",
		height: "1.2em",
		...p
	}, void 0, void 0, void 0, 3)}><g fill="none"><path stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M24 37c7.18 0 13-5.82 13-13s-5.82-13-13-13s-13 5.82-13 13s5.82 13 13 13Z"></path><path fill="currentColor" d="M24 6a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m14.5 6a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m6 14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m-6 14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M24 47a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M9.5 41a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m-6-14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m6-14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></path></g></svg>`);
}
//#endregion
//#region ~icons/ri/moon-fill.svelte
function Moon_fill($$renderer, $$props) {
	const { $$slots, $$events, ...p } = $$props;
	$$renderer.push(`<svg${attributes({
		viewBox: "0 0 24 24",
		width: "1.2em",
		height: "1.2em",
		...p
	}, void 0, void 0, void 0, 3)}><path fill="currentColor" d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22C6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981"></path></svg>`);
}
//#endregion
//#region ~icons/carbon/mostly-cloudy.svelte
function Mostly_cloudy($$renderer, $$props) {
	const { $$slots, $$events, ...p } = $$props;
	$$renderer.push(`<svg${attributes({
		viewBox: "0 0 32 32",
		width: "1.2em",
		height: "1.2em",
		...p
	}, void 0, void 0, void 0, 3)}><path fill="currentColor" d="M21.743 18.692a6 6 0 0 0 1.057-1.086a5.998 5.998 0 1 0-10.733-4.445A7.56 7.56 0 0 0 6.35 18.25A5.993 5.993 0 0 0 8 30.005h11a5.985 5.985 0 0 0 2.743-11.313M18 10.005a4.004 4.004 0 0 1 4 4a3.96 3.96 0 0 1-.8 2.4a4 4 0 0 1-.94.891a7.54 7.54 0 0 0-6.134-4.24A4 4 0 0 1 18 10.006m1 18H8a3.993 3.993 0 0 1-.673-7.93l.663-.112l.146-.656a5.496 5.496 0 0 1 10.729 0l.146.656l.662.112a3.993 3.993 0 0 1-.673 7.93m7-15.001h4v2h-4zM22.95 7.64l2.828-2.827l1.415 1.414l-2.829 2.828zM17 2.005h2v4h-2zM8.808 6.227l1.414-1.414l2.829 2.828l-1.415 1.414z"></path></svg>`);
}
//#endregion
//#region ~icons/material-symbols/rainy-outline.svelte
function Rainy_outline($$renderer, $$props) {
	const { $$slots, $$events, ...p } = $$props;
	$$renderer.push(`<svg${attributes({
		viewBox: "0 0 24 24",
		width: "1.2em",
		height: "1.2em",
		...p
	}, void 0, void 0, void 0, 3)}><path fill="currentColor" d="M13.95 21.9q-.375.2-.762.063t-.588-.513l-1.5-3q-.2-.375-.062-.762t.512-.588t.763-.062t.587.512l1.5 3q.2.375.063.763t-.513.587m6 0q-.375.2-.762.063t-.588-.513l-1.5-3q-.2-.375-.062-.762t.512-.588t.763-.062t.587.512l1.5 3q.2.375.063.763t-.513.587m-12 0q-.375.2-.762.063T6.6 21.45l-1.5-3q-.2-.375-.062-.762t.512-.588t.763-.062t.587.512l1.5 3q.2.375.063.763t-.513.587M7.5 16q-2.275 0-3.887-1.612T2 10.5q0-2.075 1.375-3.625t3.4-1.825q.8-1.425 2.188-2.238T12 2q2.25 0 3.913 1.438t2.012 3.587q1.725.15 2.9 1.425T22 11.5q0 1.875-1.312 3.188T17.5 16zm0-2h10q1.05 0 1.775-.725T20 11.5t-.725-1.775T17.5 9H16V8q0-1.65-1.175-2.825T12 4q-1.2 0-2.187.65T8.325 6.4l-.25.6H7.45q-1.425.05-2.437 1.063T4 10.5q0 1.45 1.025 2.475T7.5 14M12 9"></path></svg>`);
}
//#endregion
//#region ~icons/famicons/thunderstorm-outline.svelte
function Thunderstorm_outline($$renderer, $$props) {
	const { $$slots, $$events, ...p } = $$props;
	$$renderer.push(`<svg${attributes({
		viewBox: "0 0 512 512",
		width: "1.2em",
		height: "1.2em",
		...p
	}, void 0, void 0, void 0, 3)}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m120 352l-24 48m40 32l-16 32m280-112l-24 48m40 32l-16 32M208 304l-16 96h48v80l80-112h-48l16-64m116.33-151.11H392.2C384.71 84.85 326.14 32 256 32a136.39 136.39 0 0 0-128.63 90.67h-4.57c-49.94 0-90.8 40.8-90.8 90.66h0C32 263.2 72.86 304 122.8 304h281.53C446 304 480 270 480 228.44h0c0-41.55-34-75.55-75.67-75.55"></path></svg>`);
}
//#endregion
//#region ~icons/material-symbols/cloudy-snowing.svelte
function Cloudy_snowing($$renderer, $$props) {
	const { $$slots, $$events, ...p } = $$props;
	$$renderer.push(`<svg${attributes({
		viewBox: "0 0 24 24",
		width: "1.2em",
		height: "1.2em",
		...p
	}, void 0, void 0, void 0, 3)}><path fill="currentColor" d="M6 19q-.425 0-.712-.288T5 18t.288-.712T6 17t.713.288T7 18t-.288.713T6 19m12 0q-.425 0-.712-.288T17 18t.288-.712T18 17t.713.288T19 18t-.288.713T18 19m-9 4q-.425 0-.712-.288T8 22t.288-.712T9 21t.713.288T10 22t-.288.713T9 23m3-4q-.425 0-.712-.288T11 18t.288-.712T12 17t.713.288T13 18t-.288.713T12 19m3 4q-.425 0-.712-.288T14 22t.288-.712T15 21t.713.288T16 22t-.288.713T15 23m-7.5-7q-2.275 0-3.887-1.612T2 10.5q0-2.075 1.375-3.625t3.4-1.825q.8-1.425 2.188-2.238T12 2q2.25 0 3.913 1.438t2.012 3.587q1.725.15 2.9 1.425T22 11.5q0 1.875-1.312 3.188T17.5 16z"></path></svg>`);
}
//#endregion
//#region src/lib/style/derived.ts
var SPECIAL_TAG_NAMES = [
	"cloudy",
	"rainy",
	"stormy",
	"snowy"
];
function computeRuntimeInfo(runtime, systemTheme) {
	const selectionProperty = getSelectedProperty(runtime.preference, systemTheme);
	const selectedThemeId = runtime[selectionProperty];
	const selectedTheme = findTheme(selectedThemeId, runtime.themes, "Selected theme not found, style state is invalid.");
	const valid = getValidThemes(runtime.preference, runtime.themes, runtime.tagRotation, systemTheme);
	const nextTheme = valid[nextIndex(findThemeIndex(selectedThemeId, valid, "Selected theme is not valid."), valid.length)];
	return {
		selectionProperty,
		selectedTheme,
		nextTheme,
		nextThemeIcon: getIcon(nextTheme.tags, isLight(nextTheme.page))
	};
}
function nextIndex(current, length) {
	return (current + 1) % length;
}
function findTheme(id, themes, errorMessage) {
	return themes[findThemeIndex(id, themes, errorMessage)];
}
function findThemeIndex(id, themes, errorMessage = "Couldn't find searched theme.") {
	const index = themes.findIndex((theme) => theme.id === id);
	if (index === -1) throw new Error(errorMessage);
	return index;
}
function getValidThemes(preference, themes, tagRotation, systemPreference) {
	const valid = themes.filter((theme) => {
		if (preference === "custom") if (tagRotation?.size) return theme.tags?.size ? tagRotation.intersection(theme.tags) : false;
		else return true;
		else {
			const light = isLight(theme.page);
			switch (getStyleColorscheme(preference, systemPreference)) {
				case "light": return light;
				case "dark": return !light;
			}
		}
	});
	assertNonEmpty(valid, "No valid themes found.");
	return valid;
}
function getStyleColorscheme(stylePreference, systemPreference) {
	switch (stylePreference) {
		case "dark":
		case "light": return stylePreference;
		case "system": return systemPreference ?? getSystemTheme();
	}
}
function getSelectedProperty(stylePreference, systemPreference) {
	switch (stylePreference) {
		case "custom": return "selected";
		case "dark": return "selectedDark";
		case "light": return "selectedLight";
		case "system": return systemPreference === "light" ? "selectedLight" : "selectedDark";
	}
}
function getIcon(themeTags, isLight) {
	const sunMoon = () => isLight ? Sun_one : Moon_fill;
	if (!themeTags) return sunMoon();
	const present = themeTags.intersection(new Set(SPECIAL_TAG_NAMES));
	if (present.size === 0) return sunMoon();
	switch (present.values().next().value) {
		case "cloudy": return Mostly_cloudy;
		case "rainy": return Rainy_outline;
		case "snowy": return Cloudy_snowing;
		case "stormy": return Thunderstorm_outline;
	}
}
//#endregion
//#region src/lib/style/mutation.ts
function setPreference(preference, style, systemTheme, computed) {
	const valid = getValidThemes(preference, style.themes, style.tagRotation, systemTheme);
	const oldSelectedId = computed.selectedTheme.id;
	const newTargetProperty = getSelectedProperty(preference, systemTheme);
	const cached = style[newTargetProperty];
	const isOldThemeStillValid = () => valid.some((theme) => theme.id === oldSelectedId);
	let newSelected;
	if (cached) newSelected = cached;
	else if (isOldThemeStillValid()) newSelected = oldSelectedId;
	else newSelected = valid[0].id;
	style[newTargetProperty] = newSelected, style.preference = preference;
}
function nextTheme(style, computed) {
	style[computed.selectionProperty] = computed.nextTheme.id;
}
//#endregion
//#region src/lib/strings.ts
function convertStringPrefix(input, entries) {
	for (const [from, to] of entries) if (input.startsWith(from)) return to + input.slice(from.length);
	throw new Error(`String ${input} has incorrect prefix.`);
}
//#endregion
//#region src/lib/style/accent-variables.ts
function computeAllAccentVariables(deps) {
	const accentVariables = computeAccentVariables(deps);
	const accent2Deps = {
		...deps,
		...accentVariables
	};
	const accent2Variables = computeAccent2Variables(accent2Deps);
	return {
		...accent2Deps,
		...accent2Variables
	};
}
function computeAccentVariablesFor(accentName, deps) {
	const raw = deps[accentName];
	const validColor = raw.kind === "dynamic" ? deps[raw.value] : raw.value;
	const opaque = toOpaque(validColor, deps.Page);
	const complementary = opaqueColor(opaque.d().harmonies("complementary")[1]);
	const inverted = opaqueColor(opaque.d().invert());
	const unlikePage = computeColor1OnColor2(opaque, deps.Page, {
		type: "unlike",
		contrast: deps.OnPage
	});
	const readableOnPage = computeColor1OnColor2(opaque, deps.Page, { type: "readable" });
	const visibleOnPage = computeColor1OnColor2(opaque, deps.Page, { type: "visible" });
	const onAccent = raw.kind === "dynamic" ? deps[toggleVariableContrastPrefix(raw.value)] : isLight(opaque) ? deps.OnLight : deps.OnDark;
	const offAccent = raw.kind === "dynamic" ? deps[getOtherNonContrastingPrefix(raw.value)] : isLight(opaque) ? deps.OnDark : deps.OnLight;
	const pageUnlike = computeColor1OnColor2(deps.Page, opaque, {
		type: "unlike",
		contrast: onAccent
	});
	const pageReadableOn = computeColor1OnColor2(deps.Page, opaque, { type: "readable" });
	const pageVisibleOn = computeColor1OnColor2(deps.Page, opaque, { type: "visible" });
	const variants = {
		[`${accentName}Complementary`]: complementary,
		[`${accentName}Inverted`]: inverted
	};
	const crossPage = {
		[`${accentName}UnlikePage`]: unlikePage,
		[`${accentName}ReadableOnPage`]: readableOnPage,
		[`${accentName}VisibleOnPage`]: visibleOnPage,
		[`PageUnlike${accentName}`]: pageUnlike,
		[`PageReadableOn${accentName}`]: pageReadableOn,
		[`PageVisibleOn${accentName}`]: pageVisibleOn
	};
	const variantContrasts = computeContrasts(deps.OnLight, deps.OnDark, variants);
	const crossContrasts = computeContrasts(deps.OnLight, deps.OnDark, crossPage, true);
	return {
		[accentName]: validColor,
		[`On${accentName}`]: onAccent,
		[`Off${accentName}`]: offAccent,
		[`${accentName}Opaque`]: opaque,
		...variants,
		...variantContrasts,
		...crossPage,
		...crossContrasts
	};
}
function computeAccentVariables(deps) {
	return computeAccentVariablesFor("Accent", deps);
}
function computeAccent2Variables(deps) {
	const accentCommons = computeAccentVariablesFor("Accent2", deps);
	const crossDependencies = {
		...deps,
		...accentCommons
	};
	const crossed = {};
	for (const [name1, name2] of [["Accent", "Accent2"], ["Accent2", "Accent"]]) {
		crossed[`${name1}Unlike${name2}`] = computeColor1OnColor2(crossDependencies[`${name1}Opaque`], crossDependencies[`${name2}Opaque`], {
			type: "unlike",
			contrast: crossDependencies[`On${name2}`]
		});
		crossed[`${name1}ReadableOn${name2}`] = computeColor1OnColor2(crossDependencies[`${name1}Opaque`], crossDependencies[`${name2}Opaque`], { type: "readable" });
		crossed[`${name1}VisibleOn${name2}`] = computeColor1OnColor2(crossDependencies[`${name1}Opaque`], crossDependencies[`${name2}Opaque`], { type: "visible" });
	}
	const crossContrasts = computeContrasts(crossDependencies.OnLight, crossDependencies.OnDark, crossed, true);
	return {
		...crossDependencies,
		...crossed,
		...crossContrasts
	};
}
var TOGGLE_CONTRAST_PREFIX_MAP = [
	["OnLight", "OnDark"],
	["OnDark", "OnLight"],
	["AccentOpaque", "OnAccent"],
	["Accent2Opaque", "OnAccent2"],
	["OnAccent", "AccentOpaque"],
	["OnAccent2", "Accent2Opaque"],
	["Off", "On"],
	["On", ""],
	["", "On"]
];
function toggleVariableContrastPrefix(varName) {
	return convertStringPrefix(varName, TOGGLE_CONTRAST_PREFIX_MAP);
}
var NON_CONTRASTING_PREFIX_MAP = [
	["OnLight", "OnLight"],
	["OnDark", "OnDark"],
	["On", "On"],
	["OffAccent", "AccentOpaque"],
	["OffAccent2", "Accent2Opaque"],
	["AccentOpaque", "OffAccent"],
	["Accent2Opaque", "OffAccent2"],
	["Off", ""],
	["", "Off"]
];
function getOtherNonContrastingPrefix(varName) {
	return convertStringPrefix(varName, NON_CONTRASTING_PREFIX_MAP);
}
//#endregion
//#region src/lib/style/variables.ts
function computeIndependentVariables(runtime, info) {
	const OnLight = info.selectedTheme.onLight ?? runtime.onLight;
	const OnDark = info.selectedTheme.onDark ?? runtime.onDark;
	const Page = info.selectedTheme.page;
	const NextTheme = info.nextTheme.page;
	const Accent = info.selectedTheme.accent ?? runtime.accent;
	return {
		OnLight,
		OnDark,
		Page,
		NextTheme,
		Accent,
		Accent2: info.selectedTheme.accent2 ?? runtime.accent2 ?? Accent
	};
}
function computeAllVariables({ OnLight, OnDark, Page, NextTheme, ...accents }) {
	const pages = {
		Page,
		NextTheme,
		PageComplementary: opaqueColor(Page.d().harmonies("complementary")[1]),
		PageInverted: opaqueColor(Page.d().invert())
	};
	const pageContrasts = computeContrasts(OnLight, OnDark, pages);
	const accentDependencies = {
		...pages,
		...pageContrasts,
		...accents,
		OnLight,
		OnDark
	};
	const accentVariables = computeAllAccentVariables(accentDependencies);
	return {
		...accentDependencies,
		...accentVariables
	};
}
function computeContrasts(onLight, onDark, record, onlyOn = false) {
	return Object.fromEntries(Object.entries(record).flatMap(([key, color]) => {
		const light = isLight(color);
		return onlyOn ? [[`On${key}`, light ? onLight : onDark]] : [[`On${key}`, light ? onLight : onDark], [`Off${key}`, light ? onDark : onLight]];
	}));
}
//#endregion
//#region src/lib/platform.ts
var IS_ANDROID_APP = System.IsAndroid();
window.matchMedia("(pointer: coarse)").matches;
window.matchMedia("(any-pointer: coarse)").matches;
function hasKotlinInterface(win = window) {
	return typeof win.AndroidSystemUI?.setStatusBarIcons === "function";
}
//#endregion
//#region src/lib/style/effects.ts
function applyStyle(manager, computedOld, variablesOld) {
	const root = manager.root();
	const needTransition = manager.computed.selectedTheme.id !== computedOld?.selectedTheme.id;
	if (!needTransition) setCSSVar(root, "theme-switch-duration", "0ms");
	applyVariables(root, manager.variables);
	const pageColor = manager.variables.Page;
	if (!variablesOld || !colorEquals(pageColor, variablesOld.Page)) {
		const contrastHint = isLight(pageColor) ? "light" : "dark";
		setThemeAttributes(root, contrastHint);
		if (root === STYLE_ROOT) prepaintCache(manager.runtime, manager.variables, contrastHint);
	}
	const opaqueAccent = manager.variables.AccentOpaque;
	if (!variablesOld || !colorEquals(opaqueAccent, variablesOld.AccentOpaque)) {
		setMetaThemeColor(opaqueAccent);
		updateAndroidSystemIcons(isLight(opaqueAccent));
	}
	if (!needTransition) (/* @__PURE__ */ tick()).then(() => setCSSVar(root, "theme-switch-duration", THEME_SWITCH_DURATION));
	if (computedOld) persistStyle(manager.runtime, manager.persistKey);
}
function applyVariables(root, variables) {
	for (const key in variables) setCSSVar(root, key.replace(/([A-Z])/g, (_, c) => `-${c.toLowerCase()}`).slice(1), variables[key].raw);
}
function setMetaThemeColor(color) {
	const meta = document.querySelector("meta[name=\"theme-color\"]");
	if (!meta) throw new Error("Expected <meta name=\"theme-color\" /> to exist in the document.");
	meta.content = color.raw;
}
function updateAndroidSystemIcons(safeAreaBgIsLight) {
	if (hasKotlinInterface(window)) window.AndroidSystemUI.setStatusBarIcons(safeAreaBgIsLight);
}
function setCSSVar(el, name, value) {
	el.style.setProperty("--" + name, value);
}
function setThemeAttributes(root, colorScheme) {
	root.setAttribute("data-theme", colorScheme);
	root.setAttribute("theme", colorScheme);
}
function prepaintCache(style, variables, contrastHint) {
	setPrepaintCache(style.preference === "system" ? {
		light: findTheme(style.selectedLight, style.themes).page.raw,
		dark: findTheme(style.selectedDark, style.themes).page.raw
	} : {
		color: variables.Page.raw,
		contrastHint
	});
}
//#endregion
//#region src/lib/style/main.svelte.ts
var THEME_SWITCH_DURATION = "300ms";
var StyleManager = class {
	#computed;
	get computed() {
		return this.#computed();
	}
	set computed($$value) {
		return this.#computed($$value);
	}
	#active;
	get active() {
		return this.#active();
	}
	set active($$value) {
		return this.#active($$value);
	}
	#variables;
	get variables() {
		return this.#variables();
	}
	set variables($$value) {
		return this.#variables($$value);
	}
	defaultStyle;
	#persistKey;
	#root;
	#runtime;
	constructor({ root, persistKey, defaultStyle }) {
		this.#root = root;
		this.#persistKey = persistKey;
		this.defaultStyle = defaultStyle;
		this.#runtime = loadStyle(persistKey, defaultStyle);
		this.#computed = derived(() => computeRuntimeInfo(this.#runtime, systemTheme.value));
		this.#active = derived(() => {
			return computeIndependentVariables(this.#runtime, this.computed);
		});
		this.#variables = derived(() => {
			return computeAllVariables(this.active);
		});
	}
	get persistKey() {
		return this.#persistKey;
	}
	root() {
		return this.#root;
	}
	get runtime() {
		return this.#runtime;
	}
	reset() {
		this.#runtime = hydratePreset(this.defaultStyle);
	}
	override(persistKey, defaultStyle) {
		const oldPersistKey = this.#persistKey;
		const oldDefaultStyle = this.defaultStyle;
		this.#persistKey = persistKey;
		this.defaultStyle = defaultStyle;
		this.#runtime = loadStyle(persistKey, defaultStyle);
		return {
			persistKey: oldPersistKey,
			defaultStyle: oldDefaultStyle
		};
	}
	load(presetStyle) {
		this.#runtime = hydratePreset(presetStyle);
	}
	setPreference(preference) {
		setPreference(preference, this.#runtime, systemTheme.value, this.computed);
	}
	runEffects(computedOld, variablesOld) {
		applyStyle(this, computedOld, variablesOld);
	}
	nextTheme() {
		nextTheme(this.#runtime, this.computed);
	}
};
var [getStyleContext, setStyleContext] = createContext();
function overrideStyle(persistKey, defaultStyle) {
	try {
		const previous = getStyleContext().override(persistKey, defaultStyle);
		onDestroy(() => {
			getStyleContext().override(previous.persistKey, previous.defaultStyle);
		});
	} catch {
		throw new Error(`Unable to override style: application style not set.`);
	}
}
function initStyle() {
	setCSSGlobal("theme-switch-duration", THEME_SWITCH_DURATION);
}
initStyle();
//#endregion
export { STYLE_ROOT as _, IS_ANDROID_APP as a, GREEN_ACCENT as c, STYLE_PRESETS as d, YELLOW_ACCENT as f, validColor as g, readableOnLight as h, setStyleContext as i, JENNI_ACCENT as l, readableOnDark as m, getStyleContext as n, ACCENT as o, opaqueColor as p, overrideStyle as r, BLUE_ACCENT as s, StyleManager as t, ORANGE_ACCENT as u };
