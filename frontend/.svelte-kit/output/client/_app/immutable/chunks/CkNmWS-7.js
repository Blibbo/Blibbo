import { $ as flushSync, A as from_svg, B as tick, C as if_block, D as append, E as unmount, G as child, H as template_effect, J as proxy, K as first_child, L as createAttachmentKey, M as text, N as delegate, O as comment, P as delegated, Q as state$1, R as get, S as index, T as set_text, U as user_effect, V as untrack, W as user_pre_effect, X as mutate, Y as mutable_source, Z as set, a as prop, at as getAllContexts, b as snippet, c as init, ct as pop, d as attribute_effect, dt as enable_legacy_mode_flag, et as derived_safe_equal, ft as next$1, ht as to_array, it as createContext$1, j as props_id, k as from_html, l as bind_this, lt as push, m as set_class, mt as noop$2, n as onDestroy, nt as remove_textarea_child, o as rest_props, ot as getContext, pt as reset, q as sibling, r as onMount, s as spread_props, st as hasContext, tt as user_derived, ut as setContext, v as element, w as mount, x as each, y as component } from "./D_ZKicVc.js";
import "./DhaYE-8x.js";
import { _ as readableOnLight, c as BLUE_ACCENT, d as ORANGE_ACCENT, g as readableOnDark, h as opaqueColor, l as GREEN_ACCENT, n as getStyleContext, p as YELLOW_ACCENT, s as ACCENT, u as JENNI_ACCENT, v as validColor } from "./C8dnJ1Am.js";
import { a as Close_rounded, i as Meatballs_h, n as Hamburger_md, r as Meatballs_v, t as Cog } from "./BZBQPyqy.js";
//#region ~icons/carbon/side-panel-open-filled.svelte
var rest_excludes$46 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy"
]);
var root$13 = from_svg(`<svg><path fill="currentColor" d="M28 4H4c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 22H12v-9h10.2l-3.6 3.6L20 22l6-6l-6-6l-1.4 1.4l3.6 3.6H12V6h16z"></path></svg>`);
function Side_panel_open_filled($$anchor, $$props) {
	const p = rest_props($$props, rest_excludes$46);
	var svg = root$13();
	attribute_effect(svg, () => ({
		viewBox: "0 0 32 32",
		width: "1.2em",
		height: "1.2em",
		...p
	}));
	append($$anchor, svg);
}
//#endregion
//#region ~icons/carbon/side-panel-close-filled.svelte
var rest_excludes$45 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy"
]);
var root$12 = from_svg(`<svg><path fill="currentColor" d="M28 4H4c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 11H17.8l3.6-3.6L20 10l-6 6l6 6l1.4-1.4l-3.6-3.6H28v9H12V6h16z"></path></svg>`);
function Side_panel_close_filled($$anchor, $$props) {
	const p = rest_props($$props, rest_excludes$45);
	var svg = root$12();
	attribute_effect(svg, () => ({
		viewBox: "0 0 32 32",
		width: "1.2em",
		height: "1.2em",
		...p
	}));
	append($$anchor, svg);
}
//#endregion
//#region src/lib/style/components/NextTheme.svelte
var rest_excludes$44 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"class",
	"children"
]);
var root$11 = from_html(`<button><!> <!></button>`);
function NextTheme($$anchor, $$props) {
	push($$props, true);
	let rest = rest_props($$props, rest_excludes$44);
	const manager = getStyleContext();
	const NextThemeIcon = user_derived(() => manager.computed.nextThemeIcon);
	var fragment = comment();
	var node = first_child(fragment);
	var consequent = ($$anchor) => {
		var button = root$11();
		var event_handler = () => {
			manager.nextTheme();
		};
		attribute_effect(button, () => ({
			...rest,
			onclick: event_handler,
			"aria-label": "Toggle theme",
			class: `preset-interactive ${$$props.children ? "flex space-x-[0.5em] items-center" : ""} ${$$props.class ?? "" ?? ""}`
		}));
		var node_1 = child(button);
		component(node_1, () => get(NextThemeIcon), ($$anchor, NextThemeIcon_1) => {
			NextThemeIcon_1($$anchor, {});
		});
		var node_2 = sibling(node_1, 2);
		snippet(node_2, () => $$props.children ?? noop$2);
		reset(button);
		append($$anchor, button);
	};
	if_block(node, ($$render) => {
		if (manager.computed.selectedTheme.id !== manager.computed.nextTheme.id) $$render(consequent);
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/svelte/src/internal/flags/legacy.js
enable_legacy_mode_flag();
//#endregion
//#region node_modules/@ark-ui/svelte/dist/utils/create-context.js
function getErrorMessage(hook, provider) {
	return `${hook} returned \`undefined\`. Seems you forgot to wrap component within ${provider}`;
}
var createContext = (options) => {
	const { name, strict = true, hookName = "useContext", providerName = "Provider", errorMessage, defaultValue } = options;
	const contextId = Symbol(name);
	const provider = (value) => setContext(contextId, value);
	const consumer = () => {
		const exists = hasContext(contextId);
		if (strict && !exists) throw new Error(errorMessage ?? getErrorMessage(hookName, providerName));
		return exists ? getContext(contextId) : defaultValue;
	};
	return [
		provider,
		consumer,
		contextId
	];
};
//#endregion
//#region node_modules/@ark-ui/svelte/dist/utils/create-split-props.js
var createSplitProps = () => (props, keys) => keys.reduce((previousValue, currentValue) => {
	const [target, source] = previousValue;
	const key = currentValue;
	if (source[key] !== void 0) target[key] = source[key];
	delete source[key];
	return [target, source];
}, [{}, { ...props }]);
//#endregion
//#region node_modules/@ark-ui/svelte/dist/utils/render-strategy.js
var [RenderStrategyPropsProvider, useRenderStrategyPropsContext] = createContext({
	name: "RenderStrategyContext",
	hookName: "useRenderStrategyContext",
	providerName: "<RenderStrategyPropsProvider />"
});
var splitFn$1 = createSplitProps();
var splitRenderStrategyProps = (props) => splitFn$1(props, ["lazyMount", "unmountOnExit"]);
//#endregion
//#region node_modules/@zag-js/utils/dist/array.mjs
function toArray(v) {
	if (v == null) return [];
	return Array.isArray(v) ? v : [v];
}
var first = (v) => v[0];
var last = (v) => v[v.length - 1];
function nextIndex(v, idx, opts = {}) {
	const { step = 1, loop = true } = opts;
	const next2 = idx + step;
	const len = v.length;
	const last2 = len - 1;
	if (idx === -1) return step > 0 ? 0 : last2;
	if (next2 < 0) return loop ? last2 : 0;
	if (next2 >= len) return loop ? 0 : idx > len ? len : idx;
	return next2;
}
function next(v, idx, opts = {}) {
	return v[nextIndex(v, idx, opts)];
}
function prevIndex(v, idx, opts = {}) {
	const { step = 1, loop = true } = opts;
	return nextIndex(v, idx, {
		step: -step,
		loop
	});
}
function prev(v, index, opts = {}) {
	return v[prevIndex(v, index, opts)];
}
//#endregion
//#region node_modules/@zag-js/utils/dist/equal.mjs
var isArrayLike = (value) => value?.constructor.name === "Array";
var isArrayEqual = (a, b) => {
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) if (!isEqual$1(a[i], b[i])) return false;
	return true;
};
var isEqual$1 = (a, b) => {
	if (Object.is(a, b)) return true;
	if (a == null && b != null || a != null && b == null) return false;
	if (typeof a?.isEqual === "function" && typeof b?.isEqual === "function") return a.isEqual(b);
	if (typeof a === "function" && typeof b === "function") return a.toString() === b.toString();
	if (isArrayLike(a) && isArrayLike(b)) return isArrayEqual(Array.from(a), Array.from(b));
	if (!(typeof a === "object") || !(typeof b === "object")) return false;
	const keys = Object.keys(b ?? /* @__PURE__ */ Object.create(null));
	const length = keys.length;
	for (let i = 0; i < length; i++) if (!Reflect.has(a, keys[i])) return false;
	for (let i = 0; i < length; i++) {
		const key = keys[i];
		if (!isEqual$1(a[key], b[key])) return false;
	}
	return true;
};
//#endregion
//#region node_modules/@zag-js/utils/dist/guard.mjs
var isObjectLike = (v) => v != null && typeof v === "object";
var isString = (v) => typeof v === "string";
var isFunction = (v) => typeof v === "function";
var isNull = (v) => v == null;
var hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
var baseGetTag = (v) => Object.prototype.toString.call(v);
var fnToString = Function.prototype.toString;
var objectCtorString = fnToString.call(Object);
var isPlainObject = (v) => {
	if (!isObjectLike(v) || baseGetTag(v) != "[object Object]" || isFrameworkElement(v)) return false;
	const proto = Object.getPrototypeOf(v);
	if (proto === null) return true;
	const Ctor = hasProp(proto, "constructor") && proto.constructor;
	return typeof Ctor == "function" && Ctor instanceof Ctor && fnToString.call(Ctor) == objectCtorString;
};
var isReactElement = (x) => typeof x === "object" && x !== null && "$$typeof" in x && "props" in x;
var isVueElement = (x) => typeof x === "object" && x !== null && "__v_isVNode" in x;
var isFrameworkElement = (x) => isReactElement(x) || isVueElement(x);
//#endregion
//#region node_modules/@zag-js/utils/dist/functions.mjs
var runIfFn = (v, ...a) => {
	return (typeof v === "function" ? v(...a) : v) ?? void 0;
};
var cast = (v) => v;
var identity = (v) => v();
var noop$1 = () => {};
var callAll = (...fns) => (...a) => {
	fns.forEach(function(fn) {
		fn?.(...a);
	});
};
var tryCatch = (fn, fallback) => {
	try {
		return fn();
	} catch (error) {
		if (error instanceof Error) Error.captureStackTrace?.(error, tryCatch);
		return fallback?.();
	}
};
//#endregion
//#region node_modules/@zag-js/utils/dist/number.mjs
var { floor: floor$1, abs, round: round$1, min: min$1, max: max$1, pow, sign } = Math;
var isNaN = (v) => Number.isNaN(v);
var nan = (v) => isNaN(v) ? 0 : v;
var mod = (v, m) => (v % m + m) % m;
var roundValue = (v, vmin, step) => round$1((nan(v) - vmin) / step) * step + vmin;
var clampValue = (v, vmin, vmax) => min$1(max$1(nan(v), vmin), vmax);
var getValuePercent = (v, vmin, vmax) => (nan(v) - vmin) / (vmax - vmin);
var getPercentValue = (p, vmin, vmax, step) => clampValue(roundValue(p * (vmax - vmin) + vmin, vmin, step), vmin, vmax);
var roundToStepPrecision = (v, step) => {
	let rv = v;
	let ss = step.toString();
	let pi = ss.indexOf(".");
	let p = pi >= 0 ? ss.length - pi : 0;
	if (p > 0) {
		let pw = pow(10, p);
		rv = round$1(rv * pw) / pw;
	}
	return rv;
};
var snapValueToStep = (v, vmin, vmax, step) => {
	const min2 = vmin != null ? Number(vmin) : 0;
	const max2 = Number(vmax);
	const remainder = (v - min2) % step;
	let snapped = abs(remainder) * 2 >= step ? v + sign(remainder) * (step - abs(remainder)) : v - remainder;
	snapped = roundToStepPrecision(snapped, step);
	if (!isNaN(min2) && snapped < min2) snapped = min2;
	else if (!isNaN(max2) && snapped > max2) {
		const stepsInRange = floor$1((max2 - min2) / step);
		const largestValidStep = min2 + stepsInRange * step;
		snapped = stepsInRange <= 0 || largestValidStep < min2 ? max2 : largestValidStep;
	}
	return roundToStepPrecision(snapped, step);
};
var toFixedNumber = (v, d = 0, b = 10) => {
	const pow2 = Math.pow(b, d);
	return round$1(v * pow2) / pow2;
};
//#endregion
//#region node_modules/@zag-js/utils/dist/object.mjs
function compact(obj) {
	if (!isPlainObject(obj) || obj === void 0) return obj;
	const keys2 = Reflect.ownKeys(obj).filter((key) => typeof key === "string");
	const filtered = {};
	for (const key of keys2) {
		const value = obj[key];
		if (value !== void 0) filtered[key] = compact(value);
	}
	return filtered;
}
//#endregion
//#region node_modules/@zag-js/utils/dist/warning.mjs
function warn(...a) {
	a.length === 1 ? a[0] : a[1];
	a.length === 2 && a[0];
}
function invariant(...a) {
	a.length === 1 ? a[0] : a[1];
	a.length === 2 && a[0];
}
function ensure(c, m) {
	if (c == null) throw new Error(m());
}
//#endregion
//#region node_modules/@zag-js/core/dist/merge-props.mjs
var clsx = (...args) => args.map((str) => str?.trim?.()).filter(Boolean).join(" ");
var ownedBy = (...args) => Array.from(new Set(clsx(...args).split(/\s+/).filter(Boolean))).join(" ");
var CSS_REGEX$1 = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;
var serialize$1 = (style) => {
	const res = {};
	let match;
	while (match = CSS_REGEX$1.exec(style)) res[match[1]] = match[2];
	return res;
};
var css = (a, b) => {
	if (isString(a)) {
		if (isString(b)) return `${a};${b}`;
		a = serialize$1(a);
	} else if (isString(b)) b = serialize$1(b);
	return Object.assign({}, a ?? {}, b ?? {});
};
function mergeProps$1(...args) {
	let result = {};
	for (let props of args) {
		if (!props) continue;
		for (let key in result) {
			if (key.startsWith("on") && typeof result[key] === "function" && typeof props[key] === "function") {
				result[key] = callAll(props[key], result[key]);
				continue;
			}
			if (key === "className" || key === "class") {
				result[key] = clsx(result[key], props[key]);
				continue;
			}
			if (key === "style") {
				result[key] = css(result[key], props[key]);
				continue;
			}
			if (key === "data-ownedby") {
				result[key] = ownedBy(result[key], props[key]);
				continue;
			}
			result[key] = props[key] !== void 0 ? props[key] : result[key];
		}
		for (let key in props) if (result[key] === void 0) result[key] = props[key];
		const symbols = Object.getOwnPropertySymbols(props);
		for (let symbol of symbols) result[symbol] = props[symbol];
	}
	return result;
}
//#endregion
//#region node_modules/@zag-js/core/dist/state.mjs
var STATE_DELIMITER = ".";
var ABSOLUTE_PREFIX = "#";
var stateIndexCache = /* @__PURE__ */ new WeakMap();
var stateIdIndexCache = /* @__PURE__ */ new WeakMap();
function joinStatePath(parts) {
	return parts.join(STATE_DELIMITER);
}
function isAbsoluteStatePath(value) {
	return value.includes(STATE_DELIMITER);
}
function isExplicitAbsoluteStatePath(value) {
	return value.startsWith(ABSOLUTE_PREFIX);
}
function isChildTarget(value) {
	return value.startsWith(STATE_DELIMITER);
}
function stripAbsolutePrefix(value) {
	return isExplicitAbsoluteStatePath(value) ? value.slice(ABSOLUTE_PREFIX.length) : value;
}
function appendStatePath(base, segment) {
	return base ? `${base}${STATE_DELIMITER}${segment}` : segment;
}
function buildStateIndex(machine) {
	const index = /* @__PURE__ */ new Map();
	const idIndex = /* @__PURE__ */ new Map();
	const visit = (basePath, state) => {
		index.set(basePath, state);
		const stateId = state.id;
		if (stateId) {
			if (idIndex.has(stateId)) invariant(`[zag-js] Duplicate state id: "${stateId}"`);
			idIndex.set(stateId, basePath);
		}
		const childStates = state.states;
		if (!childStates) return;
		ensure(state.initial, () => `[zag-js] Compound state "${basePath}" has child states but no "initial" property`);
		if (!(state.initial in childStates)) invariant(`[zag-js] Compound state "${basePath}" has initial "${String(state.initial)}" which is not a child state`);
		for (const [childKey, childState] of Object.entries(childStates)) {
			if (!childState) continue;
			const childPath = appendStatePath(basePath, childKey);
			visit(childPath, childState);
		}
	};
	for (const [topKey, topState] of Object.entries(machine.states)) {
		if (!topState) continue;
		visit(topKey, topState);
	}
	return {
		index,
		idIndex
	};
}
function ensureStateIndex(machine) {
	const cached = stateIndexCache.get(machine);
	if (cached) return cached;
	const { index, idIndex } = buildStateIndex(machine);
	stateIndexCache.set(machine, index);
	stateIdIndexCache.set(machine, idIndex);
	return index;
}
function getStatePathById(machine, stateId) {
	ensureStateIndex(machine);
	return stateIdIndexCache.get(machine)?.get(stateId);
}
function toSegments(value) {
	if (!value) return [];
	return String(value).split(STATE_DELIMITER).filter(Boolean);
}
function getStateChain(machine, state) {
	if (!state) return [];
	const stateIndex = ensureStateIndex(machine);
	const segments = toSegments(state);
	const chain = [];
	const statePath = [];
	for (const segment of segments) {
		statePath.push(segment);
		const path = joinStatePath(statePath);
		const current = stateIndex.get(path);
		if (!current) break;
		chain.push({
			path,
			state: current
		});
	}
	return chain;
}
function resolveAbsoluteStateValue(machine, value) {
	const stateIndex = ensureStateIndex(machine);
	const segments = toSegments(value);
	if (!segments.length) return value;
	const resolved = [];
	for (const segment of segments) {
		resolved.push(segment);
		const path = joinStatePath(resolved);
		if (!stateIndex.has(path)) return value;
	}
	let resolvedPath = joinStatePath(resolved);
	let current = stateIndex.get(resolvedPath);
	while (current?.initial) {
		const nextPath = `${resolvedPath}${STATE_DELIMITER}${current.initial}`;
		const nextState = stateIndex.get(nextPath);
		if (!nextState) break;
		resolvedPath = nextPath;
		current = nextState;
	}
	return resolvedPath;
}
function hasStatePath(machine, value) {
	return ensureStateIndex(machine).has(value);
}
function resolveStateValue(machine, value, source) {
	const stateValue = String(value);
	if (isExplicitAbsoluteStatePath(stateValue)) {
		const stateId = stripAbsolutePrefix(stateValue);
		const statePath = getStatePathById(machine, stateId);
		ensure(statePath, () => `[zag-js] Unknown state id: "${stateId}"`);
		return resolveAbsoluteStateValue(machine, statePath);
	}
	if (isChildTarget(stateValue) && source) return resolveAbsoluteStateValue(machine, appendStatePath(source, stateValue.slice(1)));
	if (!isAbsoluteStatePath(stateValue) && source) {
		const sourceSegments = toSegments(source);
		for (let index = sourceSegments.length - 1; index >= 1; index--) {
			const candidate = appendStatePath(sourceSegments.slice(0, index).join(STATE_DELIMITER), stateValue);
			if (hasStatePath(machine, candidate)) return resolveAbsoluteStateValue(machine, candidate);
		}
		if (hasStatePath(machine, stateValue)) return resolveAbsoluteStateValue(machine, stateValue);
	}
	return resolveAbsoluteStateValue(machine, stateValue);
}
function findTransition(machine, state, eventType) {
	const chain = getStateChain(machine, state);
	for (let index = chain.length - 1; index >= 0; index--) {
		const transition = (chain[index]?.state.on)?.[eventType];
		if (transition) return {
			transitions: transition,
			source: chain[index]?.path
		};
	}
	return {
		transitions: machine.on?.[eventType],
		source: void 0
	};
}
function getExitEnterStates(machine, prevState, nextState, reenter) {
	const prevChain = prevState ? getStateChain(machine, prevState) : [];
	const nextChain = getStateChain(machine, nextState);
	let commonIndex = 0;
	while (commonIndex < prevChain.length && commonIndex < nextChain.length && prevChain[commonIndex]?.path === nextChain[commonIndex]?.path) commonIndex += 1;
	let exiting = prevChain.slice(commonIndex).reverse();
	let entering = nextChain.slice(commonIndex);
	const sameLeaf = prevChain.at(-1)?.path === nextChain.at(-1)?.path;
	if (reenter && sameLeaf) {
		exiting = prevChain.slice().reverse();
		entering = nextChain;
	}
	return {
		exiting,
		entering
	};
}
function matchesState(current, value) {
	if (!current) return false;
	return current === value || current.startsWith(`${value}${STATE_DELIMITER}`);
}
function hasTag(machine, state, tag) {
	return getStateChain(machine, state).some((item) => item.state.tags?.includes(tag));
}
//#endregion
//#region node_modules/@zag-js/core/dist/create-machine.mjs
function createGuards() {
	return {
		and: (...guards) => {
			return function andGuard(params) {
				return guards.every((str) => params.guard(str));
			};
		},
		or: (...guards) => {
			return function orGuard(params) {
				return guards.some((str) => params.guard(str));
			};
		},
		not: (guard) => {
			return function notGuard(params) {
				return !params.guard(guard);
			};
		}
	};
}
function createMachine(config) {
	ensureStateIndex(config);
	return config;
}
//#endregion
//#region node_modules/@zag-js/core/dist/types.mjs
var MachineStatus = /* @__PURE__ */ ((MachineStatus2) => {
	MachineStatus2["NotStarted"] = "Not Started";
	MachineStatus2["Started"] = "Started";
	MachineStatus2["Stopped"] = "Stopped";
	return MachineStatus2;
})(MachineStatus || {});
var INIT_STATE = "__init__";
//#endregion
//#region node_modules/@zag-js/dom-query/dist/chunk-QZ7TP4HQ.mjs
var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __publicField$2 = (obj, key, value) => __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value);
//#endregion
//#region node_modules/@zag-js/dom-query/dist/shared.mjs
var clamp$1 = (value) => Math.max(0, Math.min(1, value));
var wrap = (v, idx) => {
	return v.map((_, index) => v[(Math.max(idx, 0) + index) % v.length]);
};
var pipe = (...fns) => (arg) => fns.reduce((acc, fn) => fn(acc), arg);
var noop = () => void 0;
var isObject = (v) => typeof v === "object" && v !== null;
var dataAttr = (guard) => guard ? "" : void 0;
var ariaAttr = (guard) => guard ? "true" : void 0;
var BACKSLASH_RE = /\\/g;
var DOUBLE_QUOTE_RE = /"/g;
var cssesc = (value) => globalThis.CSS?.escape?.(value) ?? value.replace(BACKSLASH_RE, "\\\\").replace(DOUBLE_QUOTE_RE, "\\\"");
var getByOwnerId = (id) => `[data-ownedby~="${cssesc(String(id))}"]`;
//#endregion
//#region node_modules/@zag-js/dom-query/dist/node.mjs
var ELEMENT_NODE = 1;
var DOCUMENT_NODE = 9;
var DOCUMENT_FRAGMENT_NODE = 11;
var isHTMLElement$1 = (el) => isObject(el) && el.nodeType === ELEMENT_NODE && typeof el.nodeName === "string";
var isDocument = (el) => isObject(el) && el.nodeType === DOCUMENT_NODE;
var isWindow = (el) => isObject(el) && el === el.window;
var getNodeName$1 = (node) => {
	if (isHTMLElement$1(node)) return node.localName || "";
	return "#document";
};
function isRootElement(node) {
	return [
		"html",
		"body",
		"#document"
	].includes(getNodeName$1(node));
}
var isNode$1 = (el) => isObject(el) && el.nodeType !== void 0;
var isShadowRoot$1 = (el) => isNode$1(el) && el.nodeType === DOCUMENT_FRAGMENT_NODE && "host" in el;
var isInputElement = (el) => isHTMLElement$1(el) && el.localName === "input";
var isAnchorElement = (el) => !!el?.matches("a[href]");
var isElementVisible = (el) => {
	if (!isHTMLElement$1(el)) return false;
	return el.offsetWidth > 0 || el.offsetHeight > 0 || el.getClientRects().length > 0;
};
function isActiveElement(element) {
	if (!element) return false;
	return getActiveElement(element.getRootNode()) === element;
}
var TEXTAREA_SELECT_REGEX = /(textarea|select)/;
function isEditableElement(el) {
	if (el == null || !isHTMLElement$1(el)) return false;
	try {
		return isInputElement(el) && el.selectionStart != null || TEXTAREA_SELECT_REGEX.test(el.localName) || el.isContentEditable || el.getAttribute("contenteditable") === "true" || el.getAttribute("contenteditable") === "";
	} catch {
		return false;
	}
}
function contains(parent, child) {
	if (!parent || !child) return false;
	if (!isHTMLElement$1(parent) || !isNode$1(child)) return false;
	if (isHTMLElement$1(child) && parent === child) return true;
	if (parent.contains(child)) return true;
	const rootNode = child.getRootNode?.();
	if (rootNode && isShadowRoot$1(rootNode)) {
		let next = child;
		while (next) {
			if (parent === next) return true;
			next = next.parentNode || next.host;
		}
	}
	return false;
}
function getDocument(el) {
	if (isDocument(el)) return el;
	if (isWindow(el)) return el.document;
	return el?.ownerDocument ?? document;
}
function getDocumentElement$1(el) {
	return getDocument(el).documentElement;
}
function getWindow$1(el) {
	if (isShadowRoot$1(el)) return getWindow$1(el.host);
	if (isDocument(el)) return el.defaultView ?? window;
	if (isHTMLElement$1(el)) return el.ownerDocument?.defaultView ?? window;
	return window;
}
function getActiveElement(rootNode) {
	let activeElement = rootNode.activeElement;
	while (activeElement?.shadowRoot) {
		const el = activeElement.shadowRoot.activeElement;
		if (!el || el === activeElement) break;
		else activeElement = el;
	}
	return activeElement;
}
function getParentNode$2(node) {
	if (getNodeName$1(node) === "html") return node;
	const result = node.assignedSlot || node.parentNode || isShadowRoot$1(node) && node.host || getDocumentElement$1(node);
	return isShadowRoot$1(result) ? result.host : result;
}
function getRootNode(node) {
	let result;
	try {
		result = node.getRootNode({ composed: true });
		if (isDocument(result) || isShadowRoot$1(result)) return result;
	} catch {}
	return node.ownerDocument ?? document;
}
//#endregion
//#region node_modules/@zag-js/dom-query/dist/computed-style.mjs
var styleCache = /* @__PURE__ */ new WeakMap();
function getComputedStyle$2(el) {
	if (!styleCache.has(el)) styleCache.set(el, getWindow$1(el).getComputedStyle(el));
	return styleCache.get(el);
}
//#endregion
//#region node_modules/@zag-js/dom-query/dist/controller.mjs
var INTERACTIVE_CONTAINER_ROLE = /* @__PURE__ */ new Set([
	"menu",
	"listbox",
	"dialog",
	"grid",
	"tree",
	"region",
	"application"
]);
var isInteractiveContainerRole = (role) => INTERACTIVE_CONTAINER_ROLE.has(role);
var getAriaControls = (element) => element.getAttribute("aria-controls")?.split(" ") || [];
function isControlledElement(container, element) {
	const visitedIds = /* @__PURE__ */ new Set();
	const rootNode = getRootNode(container);
	const checkElement = (searchRoot) => {
		const controllingElements = searchRoot.querySelectorAll("[aria-controls]");
		for (const controller of controllingElements) {
			if (controller.getAttribute("aria-expanded") !== "true") continue;
			const controlledIds = getAriaControls(controller);
			for (const id of controlledIds) {
				if (!id || visitedIds.has(id)) continue;
				visitedIds.add(id);
				const controlledElement = rootNode.getElementById(id);
				if (controlledElement) {
					const role = controlledElement.getAttribute("role");
					const modal = controlledElement.getAttribute("aria-modal") === "true";
					if (role && isInteractiveContainerRole(role) && !modal) {
						if (controlledElement === element || controlledElement.contains(element)) return true;
						if (checkElement(controlledElement)) return true;
					}
				}
			}
		}
		return false;
	};
	return checkElement(container);
}
function findControlledElements(searchRoot, callback) {
	const rootNode = getRootNode(searchRoot);
	const visitedIds = /* @__PURE__ */ new Set();
	const findRecursive = (root) => {
		const controllingElements = root.querySelectorAll("[aria-controls]");
		for (const controller of controllingElements) {
			if (controller.getAttribute("aria-expanded") !== "true") continue;
			const controlledIds = getAriaControls(controller);
			for (const id of controlledIds) {
				if (!id || visitedIds.has(id)) continue;
				visitedIds.add(id);
				const controlledElement = rootNode.getElementById(id);
				if (controlledElement) {
					const role = controlledElement.getAttribute("role");
					const modal = controlledElement.getAttribute("aria-modal") === "true";
					if (role && INTERACTIVE_CONTAINER_ROLE.has(role) && !modal) {
						callback(controlledElement);
						findRecursive(controlledElement);
					}
				}
			}
		}
	};
	findRecursive(searchRoot);
}
function getControlledElements(container) {
	const controlledElements = /* @__PURE__ */ new Set();
	findControlledElements(container, (controlledElement) => {
		if (!container.contains(controlledElement)) controlledElements.add(controlledElement);
	});
	return Array.from(controlledElements);
}
function isInteractiveContainerElement(element) {
	const role = element.getAttribute("role");
	return Boolean(role && INTERACTIVE_CONTAINER_ROLE.has(role));
}
function isControllerElement(element) {
	return element.hasAttribute("aria-controls") && element.getAttribute("aria-expanded") === "true";
}
function hasControllerElements(element) {
	if (isControllerElement(element)) return true;
	return Boolean(element.querySelector?.("[aria-controls][aria-expanded=\"true\"]"));
}
function isControlledByExpandedController(element) {
	if (!element.id) return false;
	const rootNode = getRootNode(element);
	const escapedId = CSS.escape(element.id);
	const selector = `[aria-controls~="${escapedId}"][aria-expanded="true"], [aria-controls="${escapedId}"][aria-expanded="true"]`;
	const controller = rootNode.querySelector(selector);
	return Boolean(controller && isInteractiveContainerElement(element));
}
//#endregion
//#region node_modules/@zag-js/dom-query/dist/platform.mjs
var isDom = () => typeof document !== "undefined";
function getPlatform() {
	return navigator.userAgentData?.platform ?? navigator.platform;
}
function getUserAgent() {
	const ua2 = navigator.userAgentData;
	if (ua2 && Array.isArray(ua2.brands)) return ua2.brands.map(({ brand, version }) => `${brand}/${version}`).join(" ");
	return navigator.userAgent;
}
var pt = (v) => isDom() && v.test(getPlatform());
var ua = (v) => isDom() && v.test(getUserAgent());
var vn = (v) => isDom() && v.test(navigator.vendor);
var isTouchDevice = () => isDom() && !!navigator.maxTouchPoints;
var isIPhone = () => pt(/^iPhone/i);
var isIPad = () => pt(/^iPad/i) || isMac() && navigator.maxTouchPoints > 1;
var isIos = () => isIPhone() || isIPad();
var isApple = () => isMac() || isIos();
var isMac = () => pt(/^Mac/i);
var isSafari = () => isApple() && vn(/apple/i);
var isFirefox = () => ua(/Firefox/i);
var isAndroid = () => ua(/Android/i);
//#endregion
//#region node_modules/@zag-js/dom-query/dist/event.mjs
function getComposedPath(event) {
	return event.composedPath?.() ?? event.nativeEvent?.composedPath?.();
}
function getEventTarget(event) {
	return getComposedPath(event)?.[0] ?? event.target;
}
function isOpeningInNewTab(event) {
	const element = event.currentTarget;
	if (!element) return false;
	if (!element.matches("a[href], button[type='submit'], input[type='submit']")) return false;
	const isMiddleClick = event.button === 1;
	const isModKeyClick = isCtrlOrMetaKey(event);
	return isMiddleClick || isModKeyClick;
}
function isDownloadingEvent(event) {
	const element = event.currentTarget;
	if (!element) return false;
	const localName = element.localName;
	if (!event.altKey) return false;
	if (localName === "a") return true;
	if (localName === "button" && element.type === "submit") return true;
	if (localName === "input" && element.type === "submit") return true;
	return false;
}
function isComposingEvent(event) {
	return getNativeEvent(event).isComposing || event.keyCode === 229;
}
function isCtrlOrMetaKey(e) {
	if (isMac()) return e.metaKey;
	return e.ctrlKey;
}
function isPrintableKey(e) {
	return e.key.length === 1 && !e.ctrlKey && !e.metaKey;
}
function isVirtualClick(e) {
	if (e.pointerType === "" && e.isTrusted) return true;
	if (isAndroid() && e.pointerType) return e.type === "click" && e.buttons === 1;
	return e.detail === 0 && !e.pointerType;
}
var isLeftClick = (e) => e.button === 0;
var isContextMenuEvent = (e) => {
	return e.button === 2 || isMac() && e.ctrlKey && e.button === 0;
};
var isModifierKey = (e) => e.ctrlKey || e.altKey || e.metaKey;
var isTouchEvent = (event) => "touches" in event && event.touches.length > 0;
var keyMap = {
	Up: "ArrowUp",
	Down: "ArrowDown",
	Esc: "Escape",
	" ": "Space",
	",": "Comma",
	Left: "ArrowLeft",
	Right: "ArrowRight"
};
var rtlKeyMap = {
	ArrowLeft: "ArrowRight",
	ArrowRight: "ArrowLeft"
};
function getEventKey(event, options = {}) {
	const { dir = "ltr", orientation = "horizontal" } = options;
	let key = event.key;
	key = keyMap[key] ?? key;
	if (dir === "rtl" && orientation === "horizontal" && key in rtlKeyMap) key = rtlKeyMap[key];
	return key;
}
function getNativeEvent(event) {
	return event.nativeEvent ?? event;
}
var pageKeys = /* @__PURE__ */ new Set(["PageUp", "PageDown"]);
var arrowKeys = /* @__PURE__ */ new Set([
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
]);
function getEventStep(event) {
	return pageKeys.has(event.key) || event.shiftKey && arrowKeys.has(event.key) ? 10 : 1;
}
function getEventPoint(event, type = "client") {
	const point = isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
	return {
		x: point[`${type}X`],
		y: point[`${type}Y`]
	};
}
var addDomEvent = (target, eventName, handler, options) => {
	const node = typeof target === "function" ? target() : target;
	node?.addEventListener(eventName, handler, options);
	return () => {
		node?.removeEventListener(eventName, handler, options);
	};
};
//#endregion
//#region node_modules/@zag-js/dom-query/dist/form.mjs
function getDescriptor(el, options) {
	const { type = "HTMLInputElement", property = "value" } = options;
	const proto = getWindow$1(el)[type].prototype;
	return Object.getOwnPropertyDescriptor(proto, property) ?? {};
}
function getElementType(el) {
	if (el.localName === "input") return "HTMLInputElement";
	if (el.localName === "textarea") return "HTMLTextAreaElement";
	if (el.localName === "select") return "HTMLSelectElement";
}
function setElementValue(el, value, property = "value") {
	if (!el) return;
	const type = getElementType(el);
	if (type) getDescriptor(el, {
		type,
		property
	}).set?.call(el, value);
	el.setAttribute(property, value);
}
function setElementChecked(el, checked) {
	if (!el) return;
	getDescriptor(el, {
		type: "HTMLInputElement",
		property: "checked"
	}).set?.call(el, checked);
	if (checked) el.setAttribute("checked", "");
	else el.removeAttribute("checked");
}
function dispatchInputValueEvent(el, options) {
	const { value, bubbles = true } = options;
	if (!el) return;
	const win = getWindow$1(el);
	if (!(el instanceof win.HTMLInputElement)) return;
	setElementValue(el, `${value}`);
	const event = new win.Event("input", { bubbles });
	el.dispatchEvent(markAsInternalChangeEvent(event));
}
function dispatchInputCheckedEvent(el, options) {
	const { checked, bubbles = true } = options;
	if (!el) return;
	const win = getWindow$1(el);
	if (!(el instanceof win.HTMLInputElement)) return;
	setElementChecked(el, checked);
	const event = new win.Event("click", { bubbles });
	el.dispatchEvent(markAsInternalChangeEvent(event));
}
function isFormElement(el) {
	return el.matches("textarea, input, select, button");
}
function trackFormReset(el, callback) {
	if (!el) return;
	const form = isFormElement(el) ? el.form : el.closest("form");
	const onReset = (e) => {
		if (e.defaultPrevented) return;
		callback();
	};
	form?.addEventListener("reset", onReset, { passive: true });
	return () => form?.removeEventListener("reset", onReset);
}
function trackFieldsetDisabled(el, callback) {
	const fieldset = el?.closest("fieldset");
	if (!fieldset) return;
	callback(fieldset.disabled);
	const obs = new (getWindow$1(fieldset)).MutationObserver(() => callback(fieldset.disabled));
	obs.observe(fieldset, {
		attributes: true,
		attributeFilter: ["disabled"]
	});
	return () => obs.disconnect();
}
function trackFormControl(el, options) {
	if (!el) return;
	const { onFieldsetDisabledChange, onFormReset } = options;
	const cleanups = [trackFormReset(el, onFormReset), trackFieldsetDisabled(el, onFieldsetDisabledChange)];
	return () => cleanups.forEach((cleanup) => cleanup?.());
}
var INTERNAL_CHANGE_EVENT = /* @__PURE__ */ Symbol.for("zag.changeEvent");
function isInternalChangeEvent(e) {
	return Object.prototype.hasOwnProperty.call(e, INTERNAL_CHANGE_EVENT);
}
function markAsInternalChangeEvent(event) {
	if (isInternalChangeEvent(event)) return event;
	Object.defineProperty(event, INTERNAL_CHANGE_EVENT, { value: true });
	return event;
}
//#endregion
//#region node_modules/@zag-js/dom-query/dist/tabbable.mjs
var isFrame = (el) => isHTMLElement$1(el) && el.tagName === "IFRAME";
var NATURALLY_TABBABLE_REGEX = /^(audio|video|details)$/;
function parseTabIndex(el) {
	const attr = el.getAttribute("tabindex");
	if (!attr) return NaN;
	return parseInt(attr, 10);
}
var hasTabIndex = (el) => !Number.isNaN(parseTabIndex(el));
var hasNegativeTabIndex = (el) => parseTabIndex(el) < 0;
function isRadioInput(element) {
	return isInputElement(element) && element.type === "radio";
}
function isTabbableRadio(element) {
	if (!isRadioInput(element) || !element.name) return true;
	if (element.checked) return true;
	const selector = `input[type="radio"][name="${CSS.escape(element.name)}"]`;
	const scope = element.form ?? element.ownerDocument;
	const group = Array.from(scope.querySelectorAll(selector)).filter((radio) => radio.form === element.form && isFocusable(radio));
	const checked = group.find((radio) => radio.checked);
	if (checked) return checked === element;
	return group[0] === element;
}
function getShadowRootForNode(element, getShadowRoot) {
	if (!getShadowRoot) return null;
	if (getShadowRoot === true) return element.shadowRoot || null;
	const result = getShadowRoot(element);
	return (result === true ? element.shadowRoot : result) || null;
}
function collectElementsWithShadowDOM(elements, getShadowRoot, filterFn) {
	const allElements = [...elements];
	const toProcess = [...elements];
	const processed = /* @__PURE__ */ new Set();
	const positionMap = /* @__PURE__ */ new Map();
	elements.forEach((el, i) => positionMap.set(el, i));
	let processIndex = 0;
	while (processIndex < toProcess.length) {
		const element = toProcess[processIndex++];
		if (!element || processed.has(element)) continue;
		processed.add(element);
		const shadowRoot = getShadowRootForNode(element, getShadowRoot);
		if (shadowRoot) {
			const shadowElements = Array.from(shadowRoot.querySelectorAll(focusableSelector)).filter(filterFn);
			const hostIndex = positionMap.get(element);
			if (hostIndex !== void 0) {
				const insertPosition = hostIndex + 1;
				allElements.splice(insertPosition, 0, ...shadowElements);
				shadowElements.forEach((el, i) => {
					positionMap.set(el, insertPosition + i);
				});
				for (let i = insertPosition + shadowElements.length; i < allElements.length; i++) positionMap.set(allElements[i], i);
			} else {
				const insertPosition = allElements.length;
				allElements.push(...shadowElements);
				shadowElements.forEach((el, i) => {
					positionMap.set(el, insertPosition + i);
				});
			}
			toProcess.push(...shadowElements);
		}
	}
	return allElements;
}
var focusableSelector = "input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false']), details > summary:first-of-type";
var getFocusables = (container, options = {}) => {
	if (!container) return [];
	const { includeContainer = false, getShadowRoot } = options;
	const elements = Array.from(container.querySelectorAll(focusableSelector));
	if ((includeContainer == true || includeContainer == "if-empty" && elements.length === 0) && isHTMLElement$1(container) && isFocusable(container)) elements.unshift(container);
	const focusableElements = [];
	for (const element of elements) {
		if (!isFocusable(element)) continue;
		if (isFrame(element) && element.contentDocument) {
			const frameBody = element.contentDocument.body;
			focusableElements.push(...getFocusables(frameBody, { getShadowRoot }));
			continue;
		}
		focusableElements.push(element);
	}
	if (getShadowRoot) return collectElementsWithShadowDOM(focusableElements, getShadowRoot, isFocusable);
	return focusableElements;
};
function isFocusable(element) {
	if (!isHTMLElement$1(element) || element.closest("[inert]")) return false;
	return element.matches(focusableSelector) && isElementVisible(element);
}
function getTabbables(container, options = {}) {
	if (!container) return [];
	const { includeContainer, getShadowRoot } = options;
	const elements = Array.from(container.querySelectorAll(focusableSelector));
	if (includeContainer && isTabbable(container)) elements.unshift(container);
	const tabbableElements = [];
	for (const element of elements) {
		if (!isTabbable(element)) continue;
		if (isFrame(element) && element.contentDocument) {
			const frameBody = element.contentDocument.body;
			tabbableElements.push(...getTabbables(frameBody, { getShadowRoot }));
			continue;
		}
		tabbableElements.push(element);
	}
	if (getShadowRoot) {
		const allElements = collectElementsWithShadowDOM(tabbableElements, getShadowRoot, isTabbable);
		if (!allElements.length && includeContainer) return elements;
		return allElements;
	}
	if (!tabbableElements.length && includeContainer) return elements;
	return tabbableElements;
}
function isTabbable(el) {
	if (isHTMLElement$1(el) && el.tabIndex > 0) return true;
	if (!isFocusable(el) || hasNegativeTabIndex(el)) return false;
	return isTabbableRadio(el);
}
function getTabbableEdges(container, options = {}) {
	const elements = getTabbables(container, options);
	return [elements[0] || null, elements[elements.length - 1] || null];
}
function getTabIndex(node) {
	if (node.tabIndex < 0) {
		if ((NATURALLY_TABBABLE_REGEX.test(node.localName) || isEditableElement(node)) && !hasTabIndex(node)) return 0;
	}
	return node.tabIndex;
}
//#endregion
//#region node_modules/@zag-js/dom-query/dist/initial-focus.mjs
function getInitialFocus(options) {
	const { root, getInitialEl, filter, enabled = true } = options;
	if (!enabled) return;
	let node = typeof getInitialEl === "function" ? getInitialEl() : getInitialEl;
	node || (node = root?.querySelector("[data-autofocus],[autofocus]"));
	if (!node) node = getTabbables(root).filter((el) => filter ? filter(el) : true).find((el) => !el.hasAttribute("data-no-autofocus"));
	return node || root || void 0;
}
function isValidTabEvent(event) {
	const container = event.currentTarget;
	if (!container) return false;
	const [firstTabbable, lastTabbable] = getTabbableEdges(container);
	if (isActiveElement(firstTabbable) && event.shiftKey) return false;
	if (isActiveElement(lastTabbable) && !event.shiftKey) return false;
	if (!firstTabbable && !lastTabbable) return false;
	return true;
}
//#endregion
//#region node_modules/@zag-js/dom-query/dist/raf.mjs
var AnimationFrame = class _AnimationFrame {
	constructor() {
		__publicField$2(this, "id", null);
		__publicField$2(this, "fn_cleanup");
		__publicField$2(this, "cleanup", () => {
			this.cancel();
		});
	}
	static create() {
		return new _AnimationFrame();
	}
	request(fn) {
		this.cancel();
		this.id = globalThis.requestAnimationFrame(() => {
			this.id = null;
			this.fn_cleanup = fn?.();
		});
	}
	cancel() {
		if (this.id !== null) {
			globalThis.cancelAnimationFrame(this.id);
			this.id = null;
		}
		this.fn_cleanup?.();
		this.fn_cleanup = void 0;
	}
	isActive() {
		return this.id !== null;
	}
};
function raf$1(fn) {
	const frame = AnimationFrame.create();
	frame.request(fn);
	return frame.cleanup;
}
function nextTick(fn) {
	const set = /* @__PURE__ */ new Set();
	function raf2(fn2) {
		const id = globalThis.requestAnimationFrame(fn2);
		set.add(() => globalThis.cancelAnimationFrame(id));
	}
	raf2(() => raf2(fn));
	return function cleanup() {
		set.forEach((fn2) => fn2());
	};
}
function queueBeforeEvent(el, type, cb) {
	const cancelTimer = raf$1(() => {
		el.removeEventListener(type, exec, true);
		cb();
	});
	const exec = () => {
		cancelTimer();
		cb();
	};
	el.addEventListener(type, exec, {
		once: true,
		capture: true
	});
	return cancelTimer;
}
//#endregion
//#region node_modules/@zag-js/dom-query/dist/overflow.mjs
function getNearestOverflowAncestor$1(el) {
	const parentNode = getParentNode$2(el);
	if (isRootElement(parentNode)) return getDocument(parentNode).body;
	if (isHTMLElement$1(parentNode) && isOverflowElement$1(parentNode)) return parentNode;
	return getNearestOverflowAncestor$1(parentNode);
}
var OVERFLOW_RE = /auto|scroll|overlay|hidden|clip/;
var nonOverflowValues = /* @__PURE__ */ new Set(["inline", "contents"]);
function isOverflowElement$1(el) {
	const { overflow, overflowX, overflowY, display } = getWindow$1(el).getComputedStyle(el);
	return OVERFLOW_RE.test(overflow + overflowY + overflowX) && !nonOverflowValues.has(display);
}
//#endregion
//#region node_modules/@zag-js/dom-query/dist/point.mjs
function getRelativePoint(point, element) {
	const { left, top, width, height } = element.getBoundingClientRect();
	const offset = {
		x: point.x - left,
		y: point.y - top
	};
	const percent = {
		x: clamp$1(offset.x / width),
		y: clamp$1(offset.y / height)
	};
	function getPercentValue(options = {}) {
		const { dir = "ltr", orientation = "horizontal", inverted } = options;
		const invertX = typeof inverted === "object" ? inverted.x : inverted;
		const invertY = typeof inverted === "object" ? inverted.y : inverted;
		if (orientation === "horizontal") return dir === "rtl" || invertX ? 1 - percent.x : percent.x;
		return invertY ? 1 - percent.y : percent.y;
	}
	return {
		offset,
		percent,
		getPercentValue
	};
}
//#endregion
//#region node_modules/@zag-js/dom-query/dist/text-selection.mjs
var state = "default";
var userSelect = "";
var elementMap = /* @__PURE__ */ new WeakMap();
function disableTextSelectionImpl(options = {}) {
	const { target, doc } = options;
	const docNode = doc ?? document;
	const rootEl = docNode.documentElement;
	if (isIos()) {
		if (state === "default") {
			userSelect = rootEl.style.webkitUserSelect;
			rootEl.style.webkitUserSelect = "none";
		}
		state = "disabled";
	} else if (target) {
		elementMap.set(target, target.style.userSelect);
		target.style.userSelect = "none";
	}
	return () => restoreTextSelection({
		target,
		doc: docNode
	});
}
function restoreTextSelection(options = {}) {
	const { target, doc } = options;
	const rootEl = (doc ?? document).documentElement;
	if (isIos()) {
		if (state !== "disabled") return;
		state = "restoring";
		setTimeout(() => {
			nextTick(() => {
				if (state === "restoring") {
					if (rootEl.style.webkitUserSelect === "none") rootEl.style.webkitUserSelect = userSelect || "";
					userSelect = "";
					state = "default";
				}
			});
		}, 300);
	} else if (target && elementMap.has(target)) {
		const prevUserSelect = elementMap.get(target);
		if (target.style.userSelect === "none") target.style.userSelect = prevUserSelect ?? "";
		if (target.getAttribute("style") === "") target.removeAttribute("style");
		elementMap.delete(target);
	}
}
function disableTextSelection(options = {}) {
	const { defer, target, ...restOptions } = options;
	const func = defer ? raf$1 : (v) => v();
	const cleanups = [];
	cleanups.push(func(() => {
		const node = typeof target === "function" ? target() : target;
		cleanups.push(disableTextSelectionImpl({
			...restOptions,
			target: node
		}));
	}));
	return () => {
		cleanups.forEach((fn) => fn?.());
	};
}
//#endregion
//#region node_modules/@zag-js/dom-query/dist/pointer-move.mjs
function trackPointerMove(doc, handlers) {
	const { onPointerMove, onPointerUp } = handlers;
	const handleMove = (event) => {
		const point = getEventPoint(event);
		if (Math.sqrt(point.x ** 2 + point.y ** 2) < (event.pointerType === "touch" ? 10 : 5)) return;
		if (event.pointerType === "mouse" && event.buttons === 0) {
			handleUp(event);
			return;
		}
		onPointerMove({
			point,
			event
		});
	};
	const handleUp = (event) => {
		const point = getEventPoint(event);
		onPointerUp({
			point,
			event
		});
	};
	const cleanups = [
		addDomEvent(doc, "pointermove", handleMove, false),
		addDomEvent(doc, "pointerup", handleUp, false),
		addDomEvent(doc, "pointercancel", handleUp, false),
		addDomEvent(doc, "contextmenu", handleUp, false),
		disableTextSelection({ doc })
	];
	return () => {
		cleanups.forEach((cleanup) => cleanup());
	};
}
//#endregion
//#region node_modules/@zag-js/dom-query/dist/query.mjs
function queryAll(root, selector) {
	return Array.from(root?.querySelectorAll(selector) ?? []);
}
function query(root, selector) {
	return root?.querySelector(selector) ?? null;
}
var defaultItemToId = (v) => v.id;
function itemById(v, id, itemToId = defaultItemToId) {
	return v.find((item) => itemToId(item) === id);
}
function indexOfId(v, id, itemToId = defaultItemToId) {
	const item = itemById(v, id, itemToId);
	return item ? v.indexOf(item) : -1;
}
//#endregion
//#region node_modules/@zag-js/dom-query/dist/set.mjs
function setStyle(el, style) {
	if (!el) return noop;
	const prev = Object.keys(style).reduce((acc, key) => {
		acc[key] = el.style.getPropertyValue(key);
		return acc;
	}, {});
	if (isEqual(prev, style)) return noop;
	Object.assign(el.style, style);
	return () => {
		Object.assign(el.style, prev);
		if (el.style.length === 0) el.removeAttribute("style");
	};
}
function setStyleProperty(el, prop, value) {
	if (!el) return noop;
	const prev = el.style.getPropertyValue(prop);
	if (prev === value) return noop;
	el.style.setProperty(prop, value);
	return () => {
		el.style.setProperty(prop, prev);
		if (el.style.length === 0) el.removeAttribute("style");
	};
}
function isEqual(a, b) {
	return Object.keys(a).every((key) => a[key] === b[key]);
}
//#endregion
//#region node_modules/@zag-js/dom-query/dist/visually-hidden.mjs
var visuallyHiddenStyle = {
	border: "0",
	clip: "rect(0 0 0 0)",
	height: "1px",
	margin: "-1px",
	overflow: "hidden",
	padding: "0",
	position: "absolute",
	width: "1px",
	whiteSpace: "nowrap",
	wordWrap: "normal"
};
//#endregion
//#region node_modules/@zag-js/dom-query/dist/wait-for.mjs
function waitForPromise(promise, controller, timeout) {
	const { signal } = controller;
	const wrappedPromise = new Promise((resolve, reject) => {
		const timeoutId = setTimeout(() => {
			reject(/* @__PURE__ */ new Error(`Timeout of ${timeout}ms exceeded`));
		}, timeout);
		signal.addEventListener("abort", () => {
			clearTimeout(timeoutId);
			reject(new DOMException("Promise aborted", "AbortError"));
		});
		promise.then((result) => {
			if (!signal.aborted) {
				clearTimeout(timeoutId);
				resolve(result);
			}
		}).catch((error) => {
			if (!signal.aborted) {
				clearTimeout(timeoutId);
				reject(error);
			}
		});
	});
	const abort = () => controller.abort();
	return [wrappedPromise, abort];
}
function waitForElement(target, options) {
	const { timeout, rootNode } = options;
	const win = getWindow$1(rootNode);
	const doc = getDocument(rootNode);
	const controller = new win.AbortController();
	return waitForPromise(new Promise((resolve) => {
		const el = target();
		if (el) {
			resolve(el);
			return;
		}
		const observer = new win.MutationObserver(() => {
			const el2 = target();
			if (el2 && el2.isConnected) {
				observer.disconnect();
				resolve(el2);
			}
		});
		observer.observe(doc.body, {
			childList: true,
			subtree: true
		});
	}), controller, timeout);
}
//#endregion
//#region node_modules/@zag-js/core/dist/scope.mjs
function createScope(props) {
	const getRootNode = () => props.getRootNode?.() ?? document;
	const getDoc = () => getDocument(getRootNode());
	const getWin = () => getDoc().defaultView ?? window;
	const getActiveElementFn = () => getActiveElement(getRootNode());
	const getById = (id) => getRootNode().getElementById(id);
	return {
		...props,
		getRootNode,
		getDoc,
		getWin,
		getActiveElement: getActiveElementFn,
		isActiveElement,
		getById
	};
}
//#endregion
//#region node_modules/@zag-js/types/dist/prop-types.mjs
function createNormalizer(fn) {
	return new Proxy({}, { get(_target, key) {
		if (key === "style") return (props) => {
			return fn({ style: props }).style;
		};
		return fn;
	} });
}
//#endregion
//#region node_modules/@zag-js/svelte/dist/normalize-props.js
var propMap = {
	className: "class",
	defaultChecked: "checked",
	defaultValue: "value",
	htmlFor: "for",
	onBlur: "onfocusout",
	onChange: "oninput",
	onFocus: "onfocusin",
	onDoubleClick: "ondblclick"
};
function toStyleString(style) {
	let string = "";
	for (let key in style) {
		/**
		* Ignore null and undefined values.
		*/
		const value = style[key];
		if (value === null || value === void 0) continue;
		/**
		* Convert camelCase to kebab-case except for CSS custom properties.
		*/
		if (!key.startsWith("--")) key = key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
		string += `${key}:${value};`;
	}
	return string;
}
var preserveKeys = new Set("viewBox,className,preserveAspectRatio,fillRule,clipPath,clipRule,strokeWidth,strokeLinecap,strokeLinejoin,strokeDasharray,strokeDashoffset,strokeMiterlimit".split(","));
function toSvelteProp(key) {
	if (key in propMap) return propMap[key];
	if (preserveKeys.has(key)) return key;
	return key.toLowerCase();
}
function toSveltePropValue(key, value) {
	if (key === "style" && typeof value === "object") return toStyleString(value);
	return value;
}
var normalizeProps = createNormalizer((props) => {
	const normalized = {};
	for (const key in props) normalized[toSvelteProp(key)] = toSveltePropValue(key, props[key]);
	return normalized;
});
//#endregion
//#region node_modules/@zag-js/svelte/dist/merge-props.js
var CSS_REGEX = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;
var serialize = (style) => {
	const res = {};
	let match;
	while (match = CSS_REGEX.exec(style)) res[match[1]] = match[2];
	return res;
};
function mergeProps(...args) {
	const classNames = [];
	for (const props of args) {
		if (!props) continue;
		if ("class" in props && props.class != null) classNames.push(props.class);
	}
	const merged = mergeProps$1(...args);
	if (classNames.length > 0) merged.class = classNames.length === 1 ? classNames[0] : classNames;
	if ("style" in merged) {
		if (typeof merged.style === "string") merged.style = serialize(merged.style);
		merged.style = toStyleString(merged.style);
	}
	return merged;
}
//#endregion
//#region node_modules/@zag-js/svelte/dist/bindable.svelte.js
function bindable(props) {
	const initial = props().value ?? props().defaultValue;
	const eq = props().isEqual ?? Object.is;
	let value = state$1(proxy(initial));
	const controlled = user_derived(() => props().value !== void 0);
	let valueRef = { current: untrack(() => get(value)) };
	let prevValue = { current: void 0 };
	user_pre_effect(() => {
		const v = get(controlled) ? props().value : get(value);
		valueRef = { current: v };
		prevValue = { current: v };
	});
	const setValueFn = (v) => {
		const next = isFunction(v) ? v(valueRef.current) : v;
		const prev = prevValue.current;
		if (props().debug) console.log(`[bindable > ${props().debug}] setValue`, {
			next,
			prev
		});
		if (!get(controlled)) set(value, next, true);
		if (!eq(next, prev)) props().onChange?.(next, prev);
	};
	function get$1() {
		return get(controlled) ? props().value : get(value);
	}
	return {
		initial,
		ref: valueRef,
		get: get$1,
		set(val) {
			const exec = props().sync ? flushSync : identity;
			untrack(() => exec(() => setValueFn(val)));
		},
		invoke(nextValue, prevValue) {
			props().onChange?.(nextValue, prevValue);
		},
		hash(value) {
			return props().hash?.(value) ?? String(value);
		}
	};
}
bindable.cleanup = (fn) => {
	onDestroy(() => fn());
};
bindable.ref = (defaultValue) => {
	let value = defaultValue;
	return {
		get: () => value,
		set: (next) => {
			value = next;
		}
	};
};
//#endregion
//#region node_modules/@zag-js/svelte/dist/refs.svelte.js
function useRefs(refs) {
	const ref = { current: refs };
	return {
		get(key) {
			return ref.current[key];
		},
		set(key, value) {
			ref.current[key] = value;
		}
	};
}
//#endregion
//#region node_modules/@zag-js/svelte/dist/track.svelte.js
var access$1 = (value) => {
	if (typeof value === "function") return value();
	return value;
};
var track = (deps, effect) => {
	let prevDeps = [];
	let isFirstRun = true;
	user_effect(() => {
		if (isFirstRun) {
			prevDeps = deps.map((d) => access$1(d));
			isFirstRun = false;
			return;
		}
		let changed = false;
		for (let i = 0; i < deps.length; i++) if (!isEqual$1(prevDeps[i], access$1(deps[i]))) {
			changed = true;
			break;
		}
		if (changed) {
			prevDeps = deps.map((d) => access$1(d));
			effect();
		}
	});
};
//#endregion
//#region node_modules/@zag-js/svelte/dist/machine.svelte.js
function access(userProps) {
	if (isFunction(userProps)) return userProps();
	return userProps;
}
function useMachine(machine, userProps) {
	const scope = user_derived(() => {
		const { id, ids, getRootNode } = access(userProps);
		return createScope({
			id,
			ids,
			getRootNode
		});
	});
	const debug = (...args) => {
		if (machine.debug) console.log(...args);
	};
	const props = user_derived(() => machine.props?.({
		props: compact(access(userProps)),
		scope: get(scope)
	}) ?? access(userProps));
	const prop = useProp(() => get(props));
	const context = machine.context?.({
		prop,
		bindable,
		get scope() {
			return get(scope);
		},
		flush,
		getContext() {
			return ctx;
		},
		getComputed() {
			return computed;
		},
		getRefs() {
			return refs;
		},
		getEvent() {
			return getEvent();
		}
	});
	const ctx = {
		get(key) {
			return context?.[key].get();
		},
		set(key, value) {
			context?.[key].set(value);
		},
		initial(key) {
			return context?.[key].initial;
		},
		hash(key) {
			const current = context?.[key].get();
			return context?.[key].hash(current);
		}
	};
	let effects = /* @__PURE__ */ new Map();
	let transitionRef = { current: null };
	let previousEventRef = { current: null };
	let eventRef = { current: { type: "" } };
	const getEvent = () => ({
		...eventRef.current,
		current() {
			return eventRef.current;
		},
		previous() {
			return previousEventRef.current;
		}
	});
	const getState = () => ({
		...state,
		hasTag(tag) {
			return hasTag(machine, state.get(), tag);
		},
		matches(...values) {
			const currentState = state.get();
			return values.some((value) => matchesState(currentState, value));
		}
	});
	const refs = useRefs(machine.refs?.({
		prop,
		context: ctx
	}) ?? {});
	const getParams = () => ({
		state: getState(),
		context: ctx,
		event: getEvent(),
		prop,
		send,
		action,
		guard,
		track,
		refs,
		computed,
		flush,
		scope: get(scope),
		choose
	});
	const action = (keys) => {
		const strs = isFunction(keys) ? keys(getParams()) : keys;
		if (!strs) return;
		const fns = strs.map((s) => {
			const fn = machine.implementations?.actions?.[s];
			if (!fn) warn(`[zag-js] No implementation found for action "${JSON.stringify(s)}"`);
			return fn;
		});
		for (const fn of fns) fn?.(getParams());
	};
	const guard = (str) => {
		if (isFunction(str)) return str(getParams());
		const fn = machine.implementations?.guards?.[str];
		if (!fn) warn(`[zag-js] No implementation found for guard "${JSON.stringify(str)}"`);
		return fn?.(getParams());
	};
	const effect = (keys) => {
		const strs = isFunction(keys) ? keys(getParams()) : keys;
		if (!strs) return;
		const fns = strs.map((s) => {
			const fn = machine.implementations?.effects?.[s];
			if (!fn) warn(`[zag-js] No implementation found for effect "${JSON.stringify(s)}"`);
			return fn;
		});
		const cleanups = [];
		for (const fn of fns) {
			const cleanup = fn?.(getParams());
			if (cleanup) cleanups.push(cleanup);
		}
		return () => cleanups.forEach((fn) => fn?.());
	};
	const choose = (transitions) => {
		return toArray(transitions).find((t) => {
			let result = !t.guard;
			if (isString(t.guard)) result = !!guard(t.guard);
			else if (isFunction(t.guard)) result = t.guard(getParams());
			return result;
		});
	};
	const computed = (key) => {
		ensure(machine.computed, () => `[zag-js] No computed object found on machine`);
		const fn = machine.computed[key];
		return fn({
			context: ctx,
			event: getEvent(),
			prop,
			refs,
			scope: get(scope),
			computed
		});
	};
	const state = bindable(() => ({
		defaultValue: resolveStateValue(machine, machine.initialState({ prop })),
		onChange(nextState, prevState) {
			const { exiting, entering } = getExitEnterStates(machine, prevState, nextState, transitionRef.current?.reenter);
			exiting.forEach((item) => {
				effects.get(item.path)?.();
				effects.delete(item.path);
			});
			exiting.forEach((item) => {
				action(item.state?.exit);
			});
			action(transitionRef.current?.actions);
			entering.forEach((item) => {
				const cleanup = effect(item.state?.effects);
				if (cleanup) {
					const existing = effects.get(item.path);
					effects.set(item.path, existing ? callAll(existing, cleanup) : cleanup);
				}
			});
			if (prevState === "__init__") {
				action(machine.entry);
				const cleanup = effect(machine.effects);
				if (cleanup) {
					const existing = effects.get(INIT_STATE);
					effects.set(INIT_STATE, existing ? callAll(existing, cleanup) : cleanup);
				}
			}
			entering.forEach((item) => {
				action(item.state?.entry);
			});
		}
	}));
	let status = MachineStatus.NotStarted;
	onMount(() => {
		const started = status === MachineStatus.Started;
		status = MachineStatus.Started;
		debug(started ? "rehydrating..." : "initializing...");
		state.invoke(state.initial, INIT_STATE);
	});
	onDestroy(() => {
		if (status !== MachineStatus.Started) return;
		debug("unmounting...");
		status = MachineStatus.Stopped;
		effects.forEach((fn) => fn?.());
		effects = /* @__PURE__ */ new Map();
		transitionRef.current = null;
		action(machine.exit);
	});
	const send = (event) => {
		if (status !== MachineStatus.Started) return;
		previousEventRef.current = eventRef.current;
		eventRef.current = event;
		let currentState = state.get();
		const { transitions, source } = findTransition(machine, currentState, event.type);
		const transition = choose(transitions);
		if (!transition) return;
		transitionRef.current = transition;
		const target = resolveStateValue(machine, transition.target ?? currentState, source);
		debug("transition", event.type, transition.target || currentState, `(${transition.actions})`);
		if (target !== currentState) state.set(target);
		else if (transition.reenter) state.invoke(currentState, currentState);
		else action(transition.actions);
	};
	machine.watch?.(getParams());
	return {
		get state() {
			return getState();
		},
		send,
		context: ctx,
		prop,
		get scope() {
			return get(scope);
		},
		refs,
		computed,
		get event() {
			return getEvent();
		},
		getStatus: () => status
	};
}
function useProp(value) {
	return function get(key) {
		return value()[key];
	};
}
function flush(fn) {
	flushSync(() => {
		queueMicrotask(() => fn());
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/utils/tags.js
var voidSVGTags = [
	"path",
	"rect",
	"circle",
	"ellipse",
	"line",
	"polygon",
	"polyline"
];
var isVoidSVGTag = (tag) => typeof tag === "string" && voidSVGTags.includes(tag);
var voidHTMLTags = [
	"area",
	"base",
	"br",
	"col",
	"embed",
	"hr",
	"img",
	"input",
	"link"
];
var isVoidHTMLTag = (tag) => typeof tag === "string" && voidHTMLTags.includes(tag);
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/factory/svg-factory.svelte
var rest_excludes$43 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"as",
	"ref"
]);
function Svg_factory($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$43);
	var fragment = comment();
	var node = first_child(fragment);
	element(node, () => $$props.as, true, ($$element, $$anchor) => {
		bind_this($$element, ($$value) => ref($$value), () => ref());
		attribute_effect($$element, () => ({ ...props }));
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/factory/factory.svelte
var rest_excludes$42 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"asChild",
	"children",
	"as",
	"ref"
]);
var root$10 = from_html(`<textarea></textarea>`);
function Factory($$anchor, $$props) {
	push($$props, true);
	/**
	* The HTML tag of the component.
	*/
	/**
	* The bindable ref of the component.
	*/
	let ref = prop($$props, "ref", 15, null), rest = rest_props($$props, rest_excludes$42);
	const propsFn = (props) => mergeProps(rest, props ?? {});
	var fragment = comment();
	var node = first_child(fragment);
	var consequent = ($$anchor) => {
		var fragment_1 = comment();
		var node_1 = first_child(fragment_1);
		snippet(node_1, () => $$props.asChild ?? noop$2, () => propsFn);
		append($$anchor, fragment_1);
	};
	var consequent_1 = ($$anchor) => {
		Svg_factory($$anchor, spread_props({ get as() {
			return $$props.as;
		} }, () => rest, {
			get ref() {
				return ref();
			},
			set ref($$value) {
				ref($$value);
			}
		}));
	};
	var d = user_derived(() => isVoidSVGTag($$props.as));
	var consequent_2 = ($$anchor) => {
		var fragment_3 = comment();
		var node_2 = first_child(fragment_3);
		element(node_2, () => $$props.as, false, ($$element, $$anchor) => {
			bind_this($$element, ($$value) => ref($$value), () => ref());
			attribute_effect($$element, () => ({ ...rest }));
		});
		append($$anchor, fragment_3);
	};
	var d_1 = user_derived(() => isVoidHTMLTag($$props.as));
	var consequent_3 = ($$anchor) => {
		var textarea = root$10();
		remove_textarea_child(textarea);
		attribute_effect(textarea, () => ({ ...rest }));
		bind_this(textarea, ($$value) => ref($$value), () => ref());
		append($$anchor, textarea);
	};
	var alternate = ($$anchor) => {
		var fragment_4 = comment();
		var node_3 = first_child(fragment_4);
		element(node_3, () => $$props.as, false, ($$element_1, $$anchor) => {
			bind_this($$element_1, ($$value) => ref($$value), () => ref());
			attribute_effect($$element_1, () => ({ ...rest }));
			var fragment_5 = comment();
			var node_4 = first_child(fragment_5);
			snippet(node_4, () => $$props.children ?? noop$2);
			append($$anchor, fragment_5);
		});
		append($$anchor, fragment_4);
	};
	if_block(node, ($$render) => {
		if ($$props.asChild) $$render(consequent);
		else if (get(d)) $$render(consequent_1, 1);
		else if (get(d_1)) $$render(consequent_2, 2);
		else if ($$props.as === "textarea") $$render(consequent_3, 3);
		else $$render(alternate, -1);
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/providers/environment/use-environment-context.js
var [EnvironmentContextProvider, useEnvironmentContext] = createContext({
	name: "EnvironmentContext",
	strict: false,
	defaultValue: () => ({
		getRootNode: () => document,
		getDocument: () => document,
		getWindow: () => window
	})
});
//#endregion
//#region node_modules/@ark-ui/svelte/dist/providers/locale/use-locale-context.js
var [LocaleContextProvider, useLocaleContext] = createContext({
	name: "LocaleContext",
	strict: false,
	defaultValue: () => ({
		dir: "ltr",
		locale: "en-US"
	})
});
//#endregion
//#region node_modules/@zag-js/anatomy/dist/create-anatomy.mjs
var createAnatomy = (name, parts = []) => ({
	parts: (...values) => {
		if (isEmpty(parts)) return createAnatomy(name, values);
		throw new Error("createAnatomy().parts(...) should only be called once. Did you mean to use .extendWith(...) ?");
	},
	extendWith: (...values) => createAnatomy(name, [...parts, ...values]),
	omit: (...values) => createAnatomy(name, parts.filter((part) => !values.includes(part))),
	rename: (newName) => createAnatomy(newName, parts),
	keys: () => parts,
	build: () => [...new Set(parts)].reduce((prev, part) => Object.assign(prev, { [part]: {
		selector: [`&[data-scope="${toKebabCase(name)}"][data-part="${toKebabCase(part)}"]`, `& [data-scope="${toKebabCase(name)}"][data-part="${toKebabCase(part)}"]`].join(", "),
		attrs: {
			"data-scope": toKebabCase(name),
			"data-part": toKebabCase(part)
		}
	} }), {})
});
var toKebabCase = (value) => value.replace(/([A-Z])([A-Z])/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase();
var isEmpty = (v) => v.length === 0;
//#endregion
//#region node_modules/@zag-js/presence/dist/presence.connect.mjs
function connect$2(service, _normalize) {
	const { state, send, context } = service;
	const present = state.matches("mounted", "unmountSuspended");
	return {
		skip: !context.get("initial"),
		present,
		setNode(node) {
			if (!node) return;
			send({
				type: "NODE.SET",
				node
			});
		},
		unmount() {
			send({ type: "UNMOUNT" });
		}
	};
}
//#endregion
//#region node_modules/@zag-js/presence/dist/presence.machine.mjs
var machine$2 = createMachine({
	props({ props }) {
		return {
			...props,
			present: !!props.present
		};
	},
	initialState({ prop }) {
		return prop("present") ? "mounted" : "unmounted";
	},
	refs() {
		return {
			node: null,
			styles: null
		};
	},
	context({ bindable }) {
		return {
			unmountAnimationName: bindable(() => ({ defaultValue: null })),
			prevAnimationName: bindable(() => ({ defaultValue: null })),
			present: bindable(() => ({ defaultValue: false })),
			initial: bindable(() => ({
				sync: true,
				defaultValue: false
			}))
		};
	},
	exit: ["cleanupNode"],
	watch({ track, prop, send }) {
		track([() => prop("present")], () => {
			send({ type: "PRESENCE.CHANGED" });
		});
	},
	on: {
		"NODE.SET": { actions: ["setupNode"] },
		"PRESENCE.CHANGED": { actions: ["setInitial", "syncPresence"] }
	},
	states: {
		mounted: { on: {
			UNMOUNT: {
				target: "unmounted",
				actions: ["clearPrevAnimationName", "invokeOnExitComplete"]
			},
			"UNMOUNT.SUSPEND": { target: "unmountSuspended" }
		} },
		unmountSuspended: {
			effects: ["trackAnimationEvents"],
			on: {
				MOUNT: {
					target: "mounted",
					actions: ["setPrevAnimationName"]
				},
				UNMOUNT: {
					target: "unmounted",
					actions: ["clearPrevAnimationName", "invokeOnExitComplete"]
				}
			}
		},
		unmounted: { on: { MOUNT: {
			target: "mounted",
			actions: ["setPrevAnimationName"]
		} } }
	},
	implementations: {
		actions: {
			setInitial: ({ context }) => {
				if (context.get("initial")) return;
				queueMicrotask(() => {
					context.set("initial", true);
				});
			},
			invokeOnExitComplete: ({ prop, refs }) => {
				prop("onExitComplete")?.();
				const node = refs.get("node");
				if (!node) return;
				const event = new (getWindow$1(node)).CustomEvent("exitcomplete", { bubbles: false });
				node.dispatchEvent(event);
			},
			setupNode: ({ refs, event }) => {
				if (refs.get("node") === event.node) return;
				refs.set("node", event.node);
				refs.set("styles", getComputedStyle$2(event.node));
			},
			cleanupNode: ({ refs }) => {
				refs.set("node", null);
				refs.set("styles", null);
			},
			syncPresence: ({ context, refs, send, prop }) => {
				const presentProp = prop("present");
				if (presentProp) return send({
					type: "MOUNT",
					src: "presence.changed"
				});
				const node = refs.get("node");
				if (!presentProp && node?.ownerDocument.visibilityState === "hidden") return send({
					type: "UNMOUNT",
					src: "visibilitychange"
				});
				raf$1(() => {
					if (prop("present")) return;
					const animationName = getAnimationName(refs.get("styles"));
					context.set("unmountAnimationName", animationName);
					if (animationName === "none" || animationName === context.get("prevAnimationName") || refs.get("styles")?.display === "none" || refs.get("styles")?.animationDuration === "0s") send({
						type: "UNMOUNT",
						src: "presence.changed"
					});
					else send({ type: "UNMOUNT.SUSPEND" });
				});
			},
			setPrevAnimationName: ({ context, refs }) => {
				raf$1(() => {
					context.set("prevAnimationName", getAnimationName(refs.get("styles")));
				});
			},
			clearPrevAnimationName: ({ context }) => {
				context.set("prevAnimationName", null);
			}
		},
		effects: { trackAnimationEvents: ({ context, refs, send, prop }) => {
			const node = refs.get("node");
			if (!node) return;
			const onStart = (event) => {
				if ((event.composedPath?.()?.[0] ?? event.target) === node) context.set("prevAnimationName", getAnimationName(refs.get("styles")));
			};
			const onEnd = (event) => {
				const animationName = getAnimationName(refs.get("styles"));
				if (getEventTarget(event) === node && animationName === context.get("unmountAnimationName") && !prop("present")) send({
					type: "UNMOUNT",
					src: "animationend"
				});
			};
			const onCancel = (event) => {
				if (getEventTarget(event) === node && !prop("present")) send({
					type: "UNMOUNT",
					src: "animationcancel"
				});
			};
			node.addEventListener("animationstart", onStart);
			node.addEventListener("animationcancel", onCancel);
			node.addEventListener("animationend", onEnd);
			const cleanupStyles = setStyle(node, { animationFillMode: "forwards" });
			return () => {
				node.removeEventListener("animationstart", onStart);
				node.removeEventListener("animationcancel", onCancel);
				node.removeEventListener("animationend", onEnd);
				nextTick(() => cleanupStyles());
			};
		} }
	}
});
function getAnimationName(styles) {
	return styles?.animationName || "none";
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/presence/use-presence.svelte.js
var usePresence = (props) => {
	const resolvedProps = user_derived(() => runIfFn(props));
	const $$d = user_derived(() => splitRenderStrategyProps(get(resolvedProps))), $$array = user_derived(() => to_array(get($$d), 2)), renderStrategyProps = user_derived(() => get($$array)[0]), machineProps = user_derived(() => get($$array)[1]);
	const service = useMachine(machine$2, () => get(machineProps));
	const api = user_derived(() => connect$2(service, normalizeProps));
	let wasEverPresent = state$1(false);
	user_effect(() => {
		if (get(api).present) set(wasEverPresent, true);
	});
	const setNode = (node) => {
		if (!node) return;
		service.send({
			type: "NODE.SET",
			node
		});
	};
	const unmounted = user_derived(() => !get(api).present && !get(wasEverPresent) && get(renderStrategyProps).lazyMount || get(renderStrategyProps).unmountOnExit && !get(api).present && get(wasEverPresent));
	const result = user_derived(() => ({
		getPresenceProps: () => ({
			"data-state": get(api).skip && get(resolvedProps).skipAnimationOnMount ? void 0 : get(resolvedProps).present ? "open" : "closed",
			hidden: !get(api).present
		}),
		present: get(api).present,
		setNode,
		unmounted: get(unmounted)
	}));
	return () => get(result);
};
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/presence/split-presence-props.svelte.js
var splitPresenceProps = (props) => createSplitProps()(props, [
	"immediate",
	"lazyMount",
	"onExitComplete",
	"present",
	"skipAnimationOnMount",
	"unmountOnExit"
]);
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/presence/use-presence-context.js
var [PresenceProvider, usePresenceContext] = createContext({ name: "PresenceContext" });
//#endregion
//#region node_modules/@zag-js/aria-hidden/dist/walk-tree-outside.mjs
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = (node) => node && (node.host || unwrapHost(node.parentNode));
var correctTargets = (parent, targets) => targets.map((target) => {
	if (parent.contains(target)) return target;
	const correctedTarget = unwrapHost(target);
	if (correctedTarget && parent.contains(correctedTarget)) return correctedTarget;
	console.error("[zag-js > ariaHidden] target", target, "in not contained inside", parent, ". Doing nothing");
	return null;
}).filter((x) => Boolean(x));
var ignoreableNodes = /* @__PURE__ */ new Set([
	"script",
	"output",
	"status",
	"next-route-announcer"
]);
var isIgnoredNode = (node) => {
	if (ignoreableNodes.has(node.localName)) return true;
	if (node.role === "status") return true;
	if (node.hasAttribute("aria-live")) return true;
	return node.matches("[data-live-announcer]");
};
var walkTreeOutside = (originalTarget, props) => {
	const { parentNode, markerName, controlAttribute, explicitBooleanValue, followControlledElements = true } = props;
	const targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
	markerMap[markerName] || (markerMap[markerName] = /* @__PURE__ */ new WeakMap());
	const markerCounter = markerMap[markerName];
	const hiddenNodes = [];
	const elementsToKeep = /* @__PURE__ */ new Set();
	const elementsToStop = new Set(targets);
	const keep = (el) => {
		if (!el || elementsToKeep.has(el)) return;
		elementsToKeep.add(el);
		keep(el.parentNode);
	};
	targets.forEach((target) => {
		keep(target);
		if (followControlledElements && isHTMLElement$1(target)) findControlledElements(target, (controlledElement) => {
			keep(controlledElement);
		});
	});
	const deep = (parent) => {
		if (!parent || elementsToStop.has(parent)) return;
		Array.prototype.forEach.call(parent.children, (node) => {
			if (elementsToKeep.has(node)) deep(node);
			else try {
				if (isIgnoredNode(node)) return;
				const attr = node.getAttribute(controlAttribute);
				const alreadyHidden = explicitBooleanValue ? attr === "true" : attr !== null && attr !== "false";
				const counterValue = (counterMap.get(node) || 0) + 1;
				const markerValue = (markerCounter.get(node) || 0) + 1;
				counterMap.set(node, counterValue);
				markerCounter.set(node, markerValue);
				hiddenNodes.push(node);
				if (counterValue === 1 && alreadyHidden) uncontrolledNodes.set(node, true);
				if (markerValue === 1) node.setAttribute(markerName, "");
				if (!alreadyHidden) node.setAttribute(controlAttribute, explicitBooleanValue ? "true" : "");
			} catch (e) {
				console.error("[zag-js > ariaHidden] cannot operate on ", node, e);
			}
		});
	};
	deep(parentNode);
	elementsToKeep.clear();
	lockCount++;
	return () => {
		hiddenNodes.forEach((node) => {
			const counterValue = counterMap.get(node) - 1;
			const markerValue = markerCounter.get(node) - 1;
			counterMap.set(node, counterValue);
			markerCounter.set(node, markerValue);
			if (!counterValue) {
				if (!uncontrolledNodes.has(node)) node.removeAttribute(controlAttribute);
				uncontrolledNodes.delete(node);
			}
			if (!markerValue) node.removeAttribute(markerName);
		});
		lockCount--;
		if (!lockCount) {
			counterMap = /* @__PURE__ */ new WeakMap();
			counterMap = /* @__PURE__ */ new WeakMap();
			uncontrolledNodes = /* @__PURE__ */ new WeakMap();
			markerMap = {};
		}
	};
};
//#endregion
//#region node_modules/@zag-js/aria-hidden/dist/aria-hidden.mjs
var getParentNode$1 = (originalTarget) => {
	return (Array.isArray(originalTarget) ? originalTarget[0] : originalTarget).ownerDocument.body;
};
var hideOthers = (originalTarget, parentNode = getParentNode$1(originalTarget), markerName = "data-aria-hidden", followControlledElements = true) => {
	if (!parentNode) return;
	return walkTreeOutside(originalTarget, {
		parentNode,
		markerName,
		controlAttribute: "aria-hidden",
		explicitBooleanValue: true,
		followControlledElements
	});
};
//#endregion
//#region node_modules/@zag-js/aria-hidden/dist/index.mjs
var raf = (fn) => {
	const frameId = requestAnimationFrame(() => fn());
	return () => cancelAnimationFrame(frameId);
};
function ariaHidden(targetsOrFn, options = {}) {
	const { defer = true } = options;
	const func = defer ? raf : (v) => v();
	const cleanups = [];
	cleanups.push(func(() => {
		const elements = (typeof targetsOrFn === "function" ? targetsOrFn() : targetsOrFn).filter(Boolean);
		if (elements.length === 0) return;
		cleanups.push(hideOthers(elements));
	}));
	return () => {
		cleanups.forEach((fn) => fn?.());
	};
}
//#endregion
//#region node_modules/@zag-js/interact-outside/dist/frame-utils.mjs
function getWindowFrames(win) {
	const frames = {
		each(cb) {
			for (let i = 0; i < win.frames?.length; i += 1) {
				const frame = win.frames[i];
				if (frame) cb(frame);
			}
		},
		addEventListener(event, listener, options) {
			frames.each((frame) => {
				try {
					frame.document.addEventListener(event, listener, options);
				} catch {}
			});
			return () => {
				try {
					frames.removeEventListener(event, listener, options);
				} catch {}
			};
		},
		removeEventListener(event, listener, options) {
			frames.each((frame) => {
				try {
					frame.document.removeEventListener(event, listener, options);
				} catch {}
			});
		}
	};
	return frames;
}
function getParentWindow(win) {
	const parent = win.frameElement != null ? win.parent : null;
	return {
		addEventListener: (event, listener, options) => {
			try {
				parent?.addEventListener(event, listener, options);
			} catch {}
			return () => {
				try {
					parent?.removeEventListener(event, listener, options);
				} catch {}
			};
		},
		removeEventListener: (event, listener, options) => {
			try {
				parent?.removeEventListener(event, listener, options);
			} catch {}
		}
	};
}
//#endregion
//#region node_modules/@zag-js/interact-outside/dist/index.mjs
var POINTER_OUTSIDE_EVENT = "pointerdown.outside";
var FOCUS_OUTSIDE_EVENT = "focus.outside";
function isComposedPathFocusable(composedPath) {
	for (const node of composedPath) if (isHTMLElement$1(node) && isFocusable(node)) return true;
	return false;
}
var isPointerEvent = (event) => "clientY" in event;
function isEventPointWithin(node, event) {
	if (!isPointerEvent(event) || !node) return false;
	const rect = node.getBoundingClientRect();
	if (rect.width === 0 || rect.height === 0) return false;
	return rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width;
}
function isPointInRect(rect, point) {
	return rect.y <= point.y && point.y <= rect.y + rect.height && rect.x <= point.x && point.x <= rect.x + rect.width;
}
function isEventWithinScrollbar(event, ancestor) {
	if (!ancestor || !isPointerEvent(event)) return false;
	const isScrollableY = ancestor.scrollHeight > ancestor.clientHeight;
	const onScrollbarY = isScrollableY && event.clientX > ancestor.offsetLeft + ancestor.clientWidth;
	const isScrollableX = ancestor.scrollWidth > ancestor.clientWidth;
	const onScrollbarX = isScrollableX && event.clientY > ancestor.offsetTop + ancestor.clientHeight;
	if (!isPointInRect({
		x: ancestor.offsetLeft,
		y: ancestor.offsetTop,
		width: ancestor.clientWidth + (isScrollableY ? 16 : 0),
		height: ancestor.clientHeight + (isScrollableX ? 16 : 0)
	}, {
		x: event.clientX,
		y: event.clientY
	})) return false;
	return onScrollbarY || onScrollbarX;
}
function trackInteractOutsideImpl(node, options) {
	const { exclude, onFocusOutside, onPointerDownOutside, onInteractOutside, defer, followControlledElements = true } = options;
	if (!node) return;
	const doc = getDocument(node);
	const win = getWindow$1(node);
	const frames = getWindowFrames(win);
	const parentWin = getParentWindow(win);
	function isEventOutside(event, target) {
		if (!isHTMLElement$1(target)) return false;
		if (!target.isConnected) return false;
		if (contains(node, target)) return false;
		if (isEventPointWithin(node, event)) return false;
		if (followControlledElements && isControlledElement(node, target)) return false;
		const triggerEl = doc.querySelector(`[aria-controls="${node.id}"]`);
		if (triggerEl) {
			if (isEventWithinScrollbar(event, getNearestOverflowAncestor$1(triggerEl))) return false;
		}
		if (isEventWithinScrollbar(event, getNearestOverflowAncestor$1(node))) return false;
		return !exclude?.(target);
	}
	const pointerdownCleanups = /* @__PURE__ */ new Set();
	const isInShadowRoot = isShadowRoot$1(node?.getRootNode());
	let isPointerDown = false;
	function onPointerDown(event) {
		isPointerDown = true;
		const onPointerUp = () => {
			isPointerDown = false;
		};
		doc.addEventListener("pointerup", onPointerUp, { once: true });
		win.addEventListener("pointerup", onPointerUp, { once: true });
		function handler(clickEvent) {
			const func = defer && !isTouchDevice() ? raf$1 : (v) => v();
			const evt = clickEvent ?? event;
			const composedPath = evt?.composedPath?.() ?? [evt?.target];
			func(() => {
				const target = isInShadowRoot ? composedPath[0] : getEventTarget(event);
				if (!node || !isEventOutside(event, target)) return;
				if (onPointerDownOutside || onInteractOutside) {
					const handler2 = callAll(onPointerDownOutside, onInteractOutside);
					node.addEventListener(POINTER_OUTSIDE_EVENT, handler2, { once: true });
				}
				fireCustomEvent$1(node, POINTER_OUTSIDE_EVENT, {
					bubbles: false,
					cancelable: true,
					detail: {
						originalEvent: evt,
						contextmenu: isContextMenuEvent(evt),
						focusable: isComposedPathFocusable(composedPath),
						target
					}
				});
			});
		}
		if (event.pointerType === "touch") {
			pointerdownCleanups.forEach((fn) => fn());
			pointerdownCleanups.add(addDomEvent(doc, "click", handler, { once: true }));
			pointerdownCleanups.add(parentWin.addEventListener("click", handler, { once: true }));
			pointerdownCleanups.add(frames.addEventListener("click", handler, { once: true }));
		} else handler();
	}
	const cleanups = /* @__PURE__ */ new Set();
	const timer = setTimeout(() => {
		cleanups.add(addDomEvent(doc, "pointerdown", onPointerDown, true));
		cleanups.add(parentWin.addEventListener("pointerdown", onPointerDown, true));
		cleanups.add(frames.addEventListener("pointerdown", onPointerDown, true));
	}, 0);
	function onFocusin(event) {
		if (isPointerDown) return;
		(defer ? raf$1 : (v) => v())(() => {
			const composedPath = event?.composedPath?.() ?? [event?.target];
			const target = isInShadowRoot ? composedPath[0] : getEventTarget(event);
			if (!node || !isEventOutside(event, target)) return;
			if (onFocusOutside || onInteractOutside) {
				const handler = callAll(onFocusOutside, onInteractOutside);
				node.addEventListener(FOCUS_OUTSIDE_EVENT, handler, { once: true });
			}
			fireCustomEvent$1(node, FOCUS_OUTSIDE_EVENT, {
				bubbles: false,
				cancelable: true,
				detail: {
					originalEvent: event,
					contextmenu: false,
					focusable: isFocusable(target),
					target
				}
			});
		});
	}
	if (!isTouchDevice()) {
		cleanups.add(addDomEvent(doc, "focusin", onFocusin, true));
		cleanups.add(parentWin.addEventListener("focusin", onFocusin, true));
		cleanups.add(frames.addEventListener("focusin", onFocusin, true));
	}
	return () => {
		clearTimeout(timer);
		pointerdownCleanups.forEach((fn) => fn());
		cleanups.forEach((fn) => fn());
	};
}
function trackInteractOutside(nodeOrFn, options) {
	const { defer } = options;
	const func = defer ? raf$1 : (v) => v();
	const cleanups = [];
	cleanups.push(func(() => {
		const node = typeof nodeOrFn === "function" ? nodeOrFn() : nodeOrFn;
		cleanups.push(trackInteractOutsideImpl(node, options));
	}));
	return () => {
		cleanups.forEach((fn) => fn?.());
	};
}
function fireCustomEvent$1(el, type, init) {
	const event = new (el.ownerDocument.defaultView || window).CustomEvent(type, init);
	return el.dispatchEvent(event);
}
//#endregion
//#region node_modules/@zag-js/dismissable/dist/escape-keydown.mjs
function trackEscapeKeydown(node, fn) {
	const handleKeyDown = (event) => {
		if (event.key !== "Escape") return;
		if (event.isComposing) return;
		fn?.(event);
	};
	return addDomEvent(getDocument(node), "keydown", handleKeyDown, { capture: true });
}
//#endregion
//#region node_modules/@zag-js/dismissable/dist/layer-stack.mjs
var LAYER_REQUEST_DISMISS_EVENT = "layer:request-dismiss";
var layerStack = {
	layers: [],
	branches: [],
	recentlyRemoved: /* @__PURE__ */ new Set(),
	count() {
		return this.layers.length;
	},
	pointerBlockingLayers() {
		return this.layers.filter((layer) => layer.pointerBlocking);
	},
	topMostPointerBlockingLayer() {
		return [...this.pointerBlockingLayers()].slice(-1)[0];
	},
	hasPointerBlockingLayer() {
		return this.pointerBlockingLayers().length > 0;
	},
	isBelowPointerBlockingLayer(node) {
		return this.indexOf(node) < (this.topMostPointerBlockingLayer() ? this.indexOf(this.topMostPointerBlockingLayer()?.node) : -1);
	},
	isTopMost(node) {
		return this.layers[this.count() - 1]?.node === node;
	},
	getNestedLayers(node) {
		return Array.from(this.layers).slice(this.indexOf(node) + 1);
	},
	getLayersByType(type) {
		return this.layers.filter((layer) => layer.type === type);
	},
	getNestedLayersByType(node, type) {
		const index = this.indexOf(node);
		if (index === -1) return [];
		return this.layers.slice(index + 1).filter((layer) => layer.type === type);
	},
	getParentLayerOfType(node, type) {
		const index = this.indexOf(node);
		if (index <= 0) return void 0;
		return this.layers.slice(0, index).reverse().find((layer) => layer.type === type);
	},
	countNestedLayersOfType(node, type) {
		return this.getNestedLayersByType(node, type).length;
	},
	isInNestedLayer(node, target) {
		if (this.getNestedLayers(node).some((layer) => contains(layer.node, target))) return true;
		if (this.recentlyRemoved.size > 0) return true;
		return false;
	},
	isInBranch(target) {
		return Array.from(this.branches).some((branch) => contains(branch, target));
	},
	add(layer) {
		const existingIndex = this.indexOf(layer.node);
		if (existingIndex !== -1) this.layers.splice(existingIndex, 1);
		this.layers.push(layer);
		this.syncLayers();
	},
	addBranch(node) {
		this.branches.push(node);
	},
	remove(node) {
		const index = this.indexOf(node);
		if (index < 0) return;
		this.layers[index].styleTargets?.forEach((getTarget) => {
			const target = getTarget();
			if (target) clearLayerStyleMirror(target);
		});
		this.recentlyRemoved.add(node);
		nextTick(() => this.recentlyRemoved.delete(node));
		if (index < this.count() - 1) this.getNestedLayers(node).forEach((layer2) => layerStack.dismiss(layer2.node, node));
		this.layers.splice(index, 1);
		this.syncLayers();
	},
	removeBranch(node) {
		const index = this.branches.indexOf(node);
		if (index >= 0) this.branches.splice(index, 1);
	},
	syncLayers() {
		this.layers.forEach((layer, index) => {
			applyLayerStackMetadata(layer, index, layer.node);
			layer.styleTargets?.forEach((getTarget) => {
				const target = getTarget();
				if (!target || target === layer.node) return;
				applyLayerStackMetadata(layer, index, target);
				const { zIndex } = getComputedStyle$2(layer.node);
				target.style.setProperty("--z-index", zIndex);
			});
		});
	},
	indexOf(node) {
		return this.layers.findIndex((layer) => layer.node === node);
	},
	dismiss(node, parent) {
		const index = this.indexOf(node);
		if (index === -1) return;
		const layer = this.layers[index];
		addListenerOnce(node, LAYER_REQUEST_DISMISS_EVENT, (event) => {
			layer.requestDismiss?.(event);
			if (!event.defaultPrevented) layer?.dismiss();
		});
		fireCustomEvent(node, LAYER_REQUEST_DISMISS_EVENT, {
			originalLayer: node,
			targetLayer: parent,
			originalIndex: index,
			targetIndex: parent ? this.indexOf(parent) : -1
		});
		this.syncLayers();
	},
	clear() {
		this.remove(this.layers[0].node);
	}
};
function applyLayerStackMetadata(layer, index, el) {
	el.style.setProperty("--layer-index", `${index}`);
	el.removeAttribute("data-nested");
	el.removeAttribute("data-has-nested");
	if (layerStack.getParentLayerOfType(layer.node, layer.type)) el.setAttribute("data-nested", layer.type);
	const nestedCount = layerStack.countNestedLayersOfType(layer.node, layer.type);
	if (nestedCount > 0) el.setAttribute("data-has-nested", layer.type);
	el.style.setProperty("--nested-layer-count", `${nestedCount}`);
}
function clearLayerStyleMirror(el) {
	el.style.removeProperty("--layer-index");
	el.style.removeProperty("--nested-layer-count");
	el.style.removeProperty("--z-index");
	el.removeAttribute("data-nested");
	el.removeAttribute("data-has-nested");
}
function fireCustomEvent(el, type, detail) {
	const event = new (el.ownerDocument.defaultView || window).CustomEvent(type, {
		cancelable: true,
		bubbles: true,
		detail
	});
	return el.dispatchEvent(event);
}
function addListenerOnce(el, type, callback) {
	el.addEventListener(type, callback, { once: true });
}
//#endregion
//#region node_modules/@zag-js/dismissable/dist/pointer-event-outside.mjs
var originalBodyPointerEvents = /* @__PURE__ */ new WeakMap();
var layerObservers = /* @__PURE__ */ new WeakMap();
function getDesiredPointerEvents(node) {
	return layerStack.isBelowPointerBlockingLayer(node) ? "none" : "auto";
}
function applyPointerEvents(node) {
	const desired = getDesiredPointerEvents(node);
	if (node.style.pointerEvents !== desired) node.style.pointerEvents = desired;
}
function ensurePointerEventsObserver(node) {
	if (layerObservers.has(node)) return;
	const win = getWindow$1(node);
	if (typeof win.MutationObserver === "undefined") return;
	const observer = new win.MutationObserver(() => {
		if (!layerObservers.has(node)) return;
		applyPointerEvents(node);
	});
	observer.observe(node, {
		attributes: true,
		attributeFilter: ["style"]
	});
	layerObservers.set(node, observer);
}
function assignPointerEventToLayers() {
	layerStack.layers.forEach(({ node }) => {
		applyPointerEvents(node);
		ensurePointerEventsObserver(node);
	});
}
function clearPointerEvent(node) {
	const observer = layerObservers.get(node);
	if (observer) {
		observer.disconnect();
		layerObservers.delete(node);
	}
	node.style.pointerEvents = "";
}
function disablePointerEventsOutside(node, persistentElements) {
	const doc = getDocument(node);
	const cleanups = [];
	if (layerStack.hasPointerBlockingLayer() && !doc.body.hasAttribute("data-inert")) {
		originalBodyPointerEvents.set(doc.body, doc.body.style.pointerEvents);
		queueMicrotask(() => {
			const body = doc.body;
			if (!body) return;
			body.style.pointerEvents = "none";
			body.setAttribute("data-inert", "");
		});
	}
	persistentElements?.forEach((el) => {
		const [promise, abort] = waitForElement(() => {
			const node2 = el();
			return isHTMLElement$1(node2) ? node2 : null;
		}, { timeout: 1e3 });
		promise.then((el2) => cleanups.push(setStyle(el2, { pointerEvents: "auto" })));
		cleanups.push(abort);
	});
	return () => {
		if (layerStack.hasPointerBlockingLayer()) return;
		queueMicrotask(() => {
			const body = doc.body;
			if (!body) return;
			const original = originalBodyPointerEvents.get(body);
			if (original !== void 0) {
				body.style.pointerEvents = original;
				originalBodyPointerEvents.delete(body);
			}
			body.removeAttribute("data-inert");
			if (body.style.length === 0) body.removeAttribute("style");
		});
		cleanups.forEach((fn) => fn());
	};
}
//#endregion
//#region node_modules/@zag-js/dismissable/dist/dismissable-layer.mjs
function trackDismissableElementImpl(node, options) {
	const { warnOnMissingNode = true } = options;
	if (warnOnMissingNode && !node) {
		warn("[@zag-js/dismissable] node is `null` or `undefined`");
		return;
	}
	if (!node) return;
	const { onDismiss, onRequestDismiss, pointerBlocking, exclude: excludeContainers, debug, type = "dialog", layerStyleTargets } = options;
	const layer = {
		dismiss: onDismiss,
		node,
		type,
		pointerBlocking,
		requestDismiss: onRequestDismiss,
		styleTargets: layerStyleTargets
	};
	layerStack.add(layer);
	assignPointerEventToLayers();
	function onPointerDownOutside(event) {
		const target = getEventTarget(event.detail.originalEvent);
		if (layerStack.isBelowPointerBlockingLayer(node) || layerStack.isInBranch(target)) return;
		options.onPointerDownOutside?.(event);
		options.onInteractOutside?.(event);
		if (event.defaultPrevented) return;
		if (debug) console.log("onPointerDownOutside:", event.detail.originalEvent);
		onDismiss?.();
	}
	function onFocusOutside(event) {
		const target = getEventTarget(event.detail.originalEvent);
		if (layerStack.isInBranch(target)) return;
		options.onFocusOutside?.(event);
		options.onInteractOutside?.(event);
		if (event.defaultPrevented) return;
		if (debug) console.log("onFocusOutside:", event.detail.originalEvent);
		onDismiss?.();
	}
	function onEscapeKeyDown(event) {
		if (!layerStack.isTopMost(node)) return;
		options.onEscapeKeyDown?.(event);
		if (!event.defaultPrevented && onDismiss) {
			event.preventDefault();
			onDismiss();
		}
	}
	function exclude(target) {
		if (!node) return false;
		const containers = typeof excludeContainers === "function" ? excludeContainers() : excludeContainers;
		const _containers = Array.isArray(containers) ? containers : [containers];
		const persistentElements = options.persistentElements?.map((fn) => fn()).filter(isHTMLElement$1);
		if (persistentElements) _containers.push(...persistentElements);
		return _containers.some((node2) => contains(node2, target)) || layerStack.isInNestedLayer(node, target);
	}
	const cleanups = [
		pointerBlocking ? disablePointerEventsOutside(node, options.persistentElements) : void 0,
		trackEscapeKeydown(node, onEscapeKeyDown),
		trackInteractOutside(node, {
			exclude,
			onFocusOutside,
			onPointerDownOutside,
			defer: options.defer
		})
	];
	return () => {
		layerStack.remove(node);
		assignPointerEventToLayers();
		clearPointerEvent(node);
		cleanups.forEach((fn) => fn?.());
	};
}
function trackDismissableElement(nodeOrFn, options) {
	const { defer } = options;
	const func = defer ? raf$1 : (v) => v();
	const cleanups = [];
	cleanups.push(func(() => {
		const node = isFunction(nodeOrFn) ? nodeOrFn() : nodeOrFn;
		cleanups.push(trackDismissableElementImpl(node, options));
	}));
	return () => {
		cleanups.forEach((fn) => fn?.());
	};
}
//#endregion
//#region node_modules/@zag-js/focus-trap/dist/chunk-QZ7TP4HQ.mjs
var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __publicField$1 = (obj, key, value) => __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
//#endregion
//#region node_modules/@zag-js/focus-trap/dist/focus-trap.mjs
var activeFocusTraps = {
	activateTrap(trapStack, trap) {
		if (trapStack.length > 0) {
			const activeTrap = trapStack[trapStack.length - 1];
			if (activeTrap !== trap) activeTrap.pause();
		}
		const trapIndex = trapStack.indexOf(trap);
		if (trapIndex === -1) trapStack.push(trap);
		else {
			trapStack.splice(trapIndex, 1);
			trapStack.push(trap);
		}
	},
	deactivateTrap(trapStack, trap) {
		const trapIndex = trapStack.indexOf(trap);
		if (trapIndex !== -1) trapStack.splice(trapIndex, 1);
		if (trapStack.length > 0) trapStack[trapStack.length - 1].unpause();
	}
};
var sharedTrapStack = [];
var FocusTrap = class {
	constructor(elements, options) {
		__publicField$1(this, "trapStack");
		__publicField$1(this, "config");
		__publicField$1(this, "doc");
		__publicField$1(this, "state", {
			containers: [],
			containerGroups: [],
			tabbableGroups: [],
			nodeFocusedBeforeActivation: null,
			mostRecentlyFocusedNode: null,
			active: false,
			paused: false,
			delayInitialFocusTimer: void 0,
			recentNavEvent: void 0
		});
		__publicField$1(this, "lastInteractionType", "keyboard");
		__publicField$1(this, "portalContainers", /* @__PURE__ */ new Set());
		__publicField$1(this, "listenerCleanups", []);
		__publicField$1(this, "handleFocus", (event) => {
			const target = getEventTarget(event);
			const targetContained = this.findContainerIndex(target, event) >= 0;
			if (targetContained || isDocument(target)) {
				if (targetContained) this.state.mostRecentlyFocusedNode = target;
			} else {
				event.stopImmediatePropagation();
				let nextNode;
				let navAcrossContainers = true;
				if (this.state.mostRecentlyFocusedNode) {
					if (getTabIndex(this.state.mostRecentlyFocusedNode) > 0) {
						const mruContainerIdx = this.findContainerIndex(this.state.mostRecentlyFocusedNode);
						const { tabbableNodes } = this.state.containerGroups[mruContainerIdx];
						if (tabbableNodes.length > 0) {
							const mruTabIdx = tabbableNodes.findIndex((node) => node === this.state.mostRecentlyFocusedNode);
							if (mruTabIdx >= 0) {
								if (this.config.isKeyForward(this.state.recentNavEvent)) {
									if (mruTabIdx + 1 < tabbableNodes.length) {
										nextNode = tabbableNodes[mruTabIdx + 1];
										navAcrossContainers = false;
									}
								} else if (mruTabIdx - 1 >= 0) {
									nextNode = tabbableNodes[mruTabIdx - 1];
									navAcrossContainers = false;
								}
							}
						}
					} else if (!this.state.containerGroups.some((g) => g.tabbableNodes.some((n) => getTabIndex(n) > 0))) navAcrossContainers = false;
				} else navAcrossContainers = false;
				if (navAcrossContainers) nextNode = this.findNextNavNode({
					target: this.state.mostRecentlyFocusedNode,
					isBackward: this.config.isKeyBackward(this.state.recentNavEvent)
				});
				if (nextNode) this.tryFocus(nextNode);
				else this.tryFocus(this.state.mostRecentlyFocusedNode || this.getInitialFocusNode());
			}
			this.state.recentNavEvent = void 0;
		});
		__publicField$1(this, "handlePointerDown", (event) => {
			this.lastInteractionType = "pointer";
			const target = getEventTarget(event);
			if (this.findContainerIndex(target, event) >= 0) return;
			if (valueOrHandler(this.config.clickOutsideDeactivates, event)) {
				this.deactivate({ returnFocus: this.config.returnFocusOnDeactivate });
				return;
			}
			if (valueOrHandler(this.config.allowOutsideClick, event)) return;
			event.preventDefault();
		});
		__publicField$1(this, "handleClick", (event) => {
			const target = getEventTarget(event);
			if (this.findContainerIndex(target, event) >= 0) return;
			if (valueOrHandler(this.config.clickOutsideDeactivates, event)) return;
			if (valueOrHandler(this.config.allowOutsideClick, event)) return;
			event.preventDefault();
			event.stopImmediatePropagation();
		});
		__publicField$1(this, "handleTabKey", (event) => {
			this.lastInteractionType = "keyboard";
			if (this.config.isKeyForward(event) || this.config.isKeyBackward(event)) {
				this.state.recentNavEvent = event;
				const isBackward = this.config.isKeyBackward(event);
				const destinationNode = this.findNextNavNode({
					event,
					isBackward
				});
				if (!destinationNode) return;
				if (isTabEvent(event)) event.preventDefault();
				this.tryFocus(destinationNode);
			}
		});
		__publicField$1(this, "handleEscapeKey", (event) => {
			if (isEscapeEvent(event) && valueOrHandler(this.config.escapeDeactivates, event) !== false) {
				event.preventDefault();
				this.deactivate();
			}
		});
		__publicField$1(this, "_mutationObserver");
		__publicField$1(this, "setupMutationObserver", () => {
			const win = this.doc.defaultView || window;
			this._mutationObserver = new win.MutationObserver((mutations) => {
				if (mutations.some((mutation) => {
					return Array.from(mutation.removedNodes).some((node) => node === this.state.mostRecentlyFocusedNode);
				})) this.tryFocus(this.getInitialFocusNode());
				if (mutations.some((mutation) => {
					if (mutation.type === "attributes" && (mutation.attributeName === "aria-controls" || mutation.attributeName === "aria-expanded")) return true;
					if (mutation.type === "childList" && mutation.addedNodes.length > 0) return Array.from(mutation.addedNodes).some((node) => {
						if (node.nodeType !== Node.ELEMENT_NODE) return false;
						const element = node;
						if (hasControllerElements(element)) return true;
						if (element.id && !this.state.containers.some((c) => c.contains(element))) return isControlledByExpandedController(element);
						return false;
					});
					return false;
				}) && this.state.active && !this.state.paused) {
					this.updateTabbableNodes();
					this.updatePortalContainers();
				}
			});
		});
		__publicField$1(this, "updateObservedNodes", () => {
			this._mutationObserver?.disconnect();
			if (this.state.active && !this.state.paused) {
				this.state.containers.map((container) => {
					this._mutationObserver?.observe(container, {
						subtree: true,
						childList: true,
						attributes: true,
						attributeFilter: ["aria-controls", "aria-expanded"]
					});
				});
				this.portalContainers.forEach((portalContainer) => {
					this.observePortalContainer(portalContainer);
				});
			}
		});
		__publicField$1(this, "getInitialFocusNode", () => {
			let node = this.getNodeForOption("initialFocus", { hasFallback: true });
			if (node === false) return false;
			if (node === void 0 || node && !isFocusable(node)) {
				const activeElement = getActiveElement(this.doc);
				if (activeElement && this.findContainerIndex(activeElement) >= 0) node = activeElement;
				else {
					const firstTabbableGroup = this.state.tabbableGroups[0];
					node = firstTabbableGroup && firstTabbableGroup.firstTabbableNode || this.getNodeForOption("fallbackFocus");
				}
			} else if (node === null) node = this.getNodeForOption("fallbackFocus");
			if (!node) throw new Error("Your focus-trap needs to have at least one focusable element");
			if (!node.isConnected) node = this.getNodeForOption("fallbackFocus");
			if (!node || !node.isConnected) throw new Error("Your focus-trap needs to have at least one focusable element");
			return node;
		});
		__publicField$1(this, "tryFocus", (node, focusOptions) => {
			if (node === false) return;
			if (node === getActiveElement(this.doc)) return;
			if (!node || !node.focus) {
				this.tryFocus(this.getInitialFocusNode());
				return;
			}
			node.focus({
				preventScroll: !!this.config.preventScroll,
				...focusOptions
			});
			this.state.mostRecentlyFocusedNode = node;
			if (isSelectableInput(node)) node.select();
		});
		__publicField$1(this, "deactivate", (deactivateOptions) => {
			if (!this.state.active) return this;
			const options = {
				onDeactivate: this.config.onDeactivate,
				onPostDeactivate: this.config.onPostDeactivate,
				checkCanReturnFocus: this.config.checkCanReturnFocus,
				...deactivateOptions
			};
			clearTimeout(this.state.delayInitialFocusTimer);
			this.state.delayInitialFocusTimer = void 0;
			this.removeListeners();
			this.state.active = false;
			this.state.paused = false;
			this.updateObservedNodes();
			activeFocusTraps.deactivateTrap(this.trapStack, this);
			this.portalContainers.clear();
			const onDeactivate = this.getOption(options, "onDeactivate");
			const onPostDeactivate = this.getOption(options, "onPostDeactivate");
			const checkCanReturnFocus = this.getOption(options, "checkCanReturnFocus");
			const returnFocus = this.getOption(options, "returnFocus", "returnFocusOnDeactivate");
			onDeactivate?.();
			const finishDeactivation = () => {
				delay(() => {
					if (returnFocus && this.isSafeToOverrideFocus()) {
						const returnFocusNode = this.getReturnFocusNode(this.state.nodeFocusedBeforeActivation);
						const focusOptions = this.lastInteractionType === "keyboard" ? { focusVisible: true } : void 0;
						this.tryFocus(returnFocusNode, focusOptions);
					}
					onPostDeactivate?.();
				});
			};
			if (returnFocus && checkCanReturnFocus) {
				checkCanReturnFocus(this.getReturnFocusNode(this.state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
				return this;
			}
			finishDeactivation();
			return this;
		});
		__publicField$1(this, "pause", (pauseOptions) => {
			if (this.state.paused || !this.state.active) return this;
			const onPause = this.getOption(pauseOptions, "onPause");
			const onPostPause = this.getOption(pauseOptions, "onPostPause");
			this.state.paused = true;
			onPause?.();
			this.removeListeners();
			this.updateObservedNodes();
			onPostPause?.();
			return this;
		});
		__publicField$1(this, "unpause", (unpauseOptions) => {
			if (!this.state.paused || !this.state.active) return this;
			const onUnpause = this.getOption(unpauseOptions, "onUnpause");
			const onPostUnpause = this.getOption(unpauseOptions, "onPostUnpause");
			this.state.paused = false;
			onUnpause?.();
			try {
				this.updateTabbableNodes();
			} catch {}
			this.attachListeners();
			try {
				this.commitInitialFocus();
			} catch {}
			this.updateObservedNodes();
			onPostUnpause?.();
			return this;
		});
		__publicField$1(this, "updateContainerElements", (containerElements) => {
			this.state.containers = Array.isArray(containerElements) ? containerElements.filter(Boolean) : [containerElements].filter(Boolean);
			if (this.state.active) this.updateTabbableNodes();
			this.updateObservedNodes();
			return this;
		});
		__publicField$1(this, "getReturnFocusNode", (previousActiveElement) => {
			const node = this.getNodeForOption("setReturnFocus", { params: [previousActiveElement] });
			return node ? node : node === false ? false : previousActiveElement;
		});
		__publicField$1(this, "getOption", (configOverrideOptions, optionName, configOptionName) => {
			return configOverrideOptions && configOverrideOptions[optionName] !== void 0 ? configOverrideOptions[optionName] : this.config[configOptionName || optionName];
		});
		__publicField$1(this, "getNodeForOption", (optionName, { hasFallback = false, params = [] } = {}) => {
			let optionValue = this.config[optionName];
			if (typeof optionValue === "function") optionValue = optionValue(...params);
			if (optionValue === true) optionValue = void 0;
			if (!optionValue) {
				if (optionValue === void 0 || optionValue === false) return optionValue;
				throw new Error(`\`${optionName}\` was specified but was not a node, or did not return a node`);
			}
			let node = optionValue;
			if (typeof optionValue === "string") {
				try {
					node = this.doc.querySelector(optionValue);
				} catch (err) {
					throw new Error(`\`${optionName}\` appears to be an invalid selector; error="${err.message}"`);
				}
				if (!node) {
					if (!hasFallback) throw new Error(`\`${optionName}\` as selector refers to no known node`);
				}
			}
			return node;
		});
		__publicField$1(this, "findNextNavNode", (opts) => {
			const { event, isBackward = false } = opts;
			const target = opts.target || getEventTarget(event);
			this.updateTabbableNodes();
			let destinationNode = null;
			if (this.state.tabbableGroups.length > 0) {
				const containerIndex = this.findContainerIndex(target, event);
				const containerGroup = containerIndex >= 0 ? this.state.containerGroups[containerIndex] : void 0;
				if (containerIndex < 0) if (isBackward) destinationNode = this.state.tabbableGroups[this.state.tabbableGroups.length - 1].lastTabbableNode;
				else destinationNode = this.state.tabbableGroups[0].firstTabbableNode;
				else if (isBackward) {
					let startOfGroupIndex = this.state.tabbableGroups.findIndex(({ firstTabbableNode }) => target === firstTabbableNode);
					if (startOfGroupIndex < 0 && (containerGroup?.container === target || isFocusable(target) && !isTabbable(target) && !containerGroup?.nextTabbableNode(target, false))) startOfGroupIndex = containerIndex;
					if (startOfGroupIndex >= 0) {
						const destinationGroupIndex = startOfGroupIndex === 0 ? this.state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
						const destinationGroup = this.state.tabbableGroups[destinationGroupIndex];
						destinationNode = getTabIndex(target) >= 0 ? destinationGroup.lastTabbableNode : destinationGroup.lastDomTabbableNode;
					} else if (!isTabEvent(event)) destinationNode = containerGroup?.nextTabbableNode(target, false);
				} else {
					let lastOfGroupIndex = this.state.tabbableGroups.findIndex(({ lastTabbableNode }) => target === lastTabbableNode);
					if (lastOfGroupIndex < 0 && (containerGroup?.container === target || isFocusable(target) && !isTabbable(target) && !containerGroup?.nextTabbableNode(target))) lastOfGroupIndex = containerIndex;
					if (lastOfGroupIndex >= 0) {
						const destinationGroupIndex = lastOfGroupIndex === this.state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
						const destinationGroup = this.state.tabbableGroups[destinationGroupIndex];
						destinationNode = getTabIndex(target) >= 0 ? destinationGroup.firstTabbableNode : destinationGroup.firstDomTabbableNode;
					} else if (!isTabEvent(event)) destinationNode = containerGroup?.nextTabbableNode(target);
				}
			} else destinationNode = this.getNodeForOption("fallbackFocus");
			return destinationNode;
		});
		this.trapStack = options.trapStack || sharedTrapStack;
		const config = {
			returnFocusOnDeactivate: true,
			escapeDeactivates: true,
			delayInitialFocus: true,
			followControlledElements: true,
			isKeyForward,
			isKeyBackward,
			...options
		};
		this.doc = config.document || getDocument(Array.isArray(elements) ? elements[0] : elements);
		this.config = config;
		this.updateContainerElements(elements);
		this.setupMutationObserver();
	}
	addPortalContainer(controlledElement) {
		const portalContainer = controlledElement.parentElement;
		if (portalContainer && !this.portalContainers.has(portalContainer)) {
			this.portalContainers.add(portalContainer);
			if (this.state.active && !this.state.paused) this.observePortalContainer(portalContainer);
		}
	}
	observePortalContainer(portalContainer) {
		this._mutationObserver?.observe(portalContainer, {
			subtree: true,
			childList: true,
			attributes: true,
			attributeFilter: ["aria-controls", "aria-expanded"]
		});
	}
	updatePortalContainers() {
		if (!this.config.followControlledElements) return;
		this.state.containers.forEach((container) => {
			getControlledElements(container).forEach((controlledElement) => {
				this.addPortalContainer(controlledElement);
			});
		});
	}
	get active() {
		return this.state.active;
	}
	get paused() {
		return this.state.paused;
	}
	findContainerIndex(element, event) {
		const composedPath = typeof event?.composedPath === "function" ? event.composedPath() : void 0;
		return this.state.containerGroups.findIndex(({ container, tabbableNodes }) => container.contains(element) || composedPath?.includes(container) || tabbableNodes.find((node) => node === element) || this.isControlledElement(container, element) || this.isPersistentElement(element, event));
	}
	isControlledElement(container, element) {
		if (!this.config.followControlledElements) return false;
		return isControlledElement(container, element);
	}
	isPersistentElement(element, event) {
		const persistentElements = this.config.persistentElements;
		if (!persistentElements || persistentElements.length === 0) return false;
		const composedPath = typeof event?.composedPath === "function" ? event.composedPath() : void 0;
		return persistentElements.some((getEl) => {
			const el = getEl();
			return contains(el, element) || el != null && composedPath?.includes(el);
		});
	}
	updateTabbableNodes() {
		this.state.containerGroups = this.state.containers.map((container) => {
			const tabbableNodes = getTabbables(container, { getShadowRoot: this.config.getShadowRoot });
			const focusableNodes = getFocusables(container, { getShadowRoot: this.config.getShadowRoot });
			const firstTabbableNode = tabbableNodes[0];
			const lastTabbableNode = tabbableNodes[tabbableNodes.length - 1];
			const firstDomTabbableNode = firstTabbableNode;
			const lastDomTabbableNode = lastTabbableNode;
			let posTabIndexesFound = false;
			for (let i = 0; i < tabbableNodes.length; i++) if (getTabIndex(tabbableNodes[i]) > 0) {
				posTabIndexesFound = true;
				break;
			}
			function nextTabbableNode(node, forward = true) {
				const nodeIdx = tabbableNodes.indexOf(node);
				if (nodeIdx >= 0) return tabbableNodes[nodeIdx + (forward ? 1 : -1)];
				const focusableIdx = focusableNodes.indexOf(node);
				if (focusableIdx < 0) return void 0;
				if (forward) {
					for (let i = focusableIdx + 1; i < focusableNodes.length; i++) if (isTabbable(focusableNodes[i])) return focusableNodes[i];
				} else for (let i = focusableIdx - 1; i >= 0; i--) if (isTabbable(focusableNodes[i])) return focusableNodes[i];
			}
			return {
				container,
				tabbableNodes,
				focusableNodes,
				posTabIndexesFound,
				firstTabbableNode,
				lastTabbableNode,
				firstDomTabbableNode,
				lastDomTabbableNode,
				nextTabbableNode
			};
		});
		this.state.tabbableGroups = this.state.containerGroups.filter((group) => group.tabbableNodes.length > 0);
		if (this.state.tabbableGroups.length <= 0 && !this.getNodeForOption("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
		if (this.state.containerGroups.find((g) => g.posTabIndexesFound) && this.state.containerGroups.length > 1) throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
	}
	attachListeners() {
		if (!this.state.active) return;
		activeFocusTraps.activateTrap(this.trapStack, this);
		this.listenerCleanups.push(addDomEvent(this.doc, "focusin", this.handleFocus, true), addDomEvent(this.doc, "mousedown", this.handlePointerDown, {
			capture: true,
			passive: false
		}), addDomEvent(this.doc, "touchstart", this.handlePointerDown, {
			capture: true,
			passive: false
		}), addDomEvent(this.doc, "click", this.handleClick, {
			capture: true,
			passive: false
		}), addDomEvent(this.doc, "keydown", this.handleTabKey, {
			capture: true,
			passive: false
		}), addDomEvent(this.doc, "keydown", this.handleEscapeKey));
		return this;
	}
	commitInitialFocus() {
		this.state.delayInitialFocusTimer = this.config.delayInitialFocus ? delay(() => {
			this.tryFocus(this.getInitialFocusNode());
		}) : this.tryFocus(this.getInitialFocusNode());
		return this;
	}
	addListeners() {
		if (!this.state.active) return;
		this.attachListeners();
		this.commitInitialFocus();
		return this;
	}
	removeListeners() {
		if (!this.state.active) return;
		this.listenerCleanups.forEach((cleanup) => cleanup());
		this.listenerCleanups = [];
		return this;
	}
	containsElement(element) {
		return this.state.containers.some((container) => contains(container, element));
	}
	isSafeToOverrideFocus() {
		const activeEl = getActiveElement(this.doc);
		if (!activeEl || activeEl === this.doc.body) return true;
		if (this.containsElement(activeEl)) return true;
		return this.trapStack.some((trap) => trap !== this && trap.containsElement(activeEl));
	}
	activate(activateOptions) {
		if (this.state.active) return this;
		const onActivate = this.getOption(activateOptions, "onActivate");
		const onPostActivate = this.getOption(activateOptions, "onPostActivate");
		const checkCanFocusTrap = this.getOption(activateOptions, "checkCanFocusTrap");
		if (!checkCanFocusTrap) this.updateTabbableNodes();
		this.state.active = true;
		this.state.paused = false;
		this.state.nodeFocusedBeforeActivation = getActiveElement(this.doc);
		onActivate?.();
		const finishActivation = () => {
			if (checkCanFocusTrap) this.updateTabbableNodes();
			this.addListeners();
			this.updateObservedNodes();
			onPostActivate?.();
		};
		if (checkCanFocusTrap) {
			checkCanFocusTrap(this.state.containers.concat()).then(finishActivation, finishActivation);
			return this;
		}
		finishActivation();
		return this;
	}
};
var isKeyboardEvent = (event) => event?.type === "keydown";
var isTabEvent = (event) => isKeyboardEvent(event) && event?.key === "Tab";
var isKeyForward = (e) => isKeyboardEvent(e) && e.key === "Tab" && !e?.shiftKey;
var isKeyBackward = (e) => isKeyboardEvent(e) && e.key === "Tab" && e?.shiftKey;
var valueOrHandler = (value, ...params) => typeof value === "function" ? value(...params) : value;
var isEscapeEvent = (event) => !event.isComposing && event.key === "Escape";
var delay = (fn) => setTimeout(fn, 0);
var isSelectableInput = (node) => node.localName === "input" && "select" in node && typeof node.select === "function";
//#endregion
//#region node_modules/@zag-js/focus-trap/dist/index.mjs
function trapFocus(el, options = {}) {
	let trap;
	const cleanup = raf$1(() => {
		const resolvedElements = (Array.isArray(el) ? el : [el]).map((e) => typeof e === "function" ? e() : e).filter((e) => e != null);
		if (resolvedElements.length === 0) return;
		const primaryEl = resolvedElements[0];
		trap = new FocusTrap(resolvedElements, {
			escapeDeactivates: false,
			allowOutsideClick: true,
			preventScroll: true,
			returnFocusOnDeactivate: true,
			delayInitialFocus: false,
			fallbackFocus: primaryEl,
			...options,
			document: getDocument(primaryEl)
		});
		try {
			trap.activate();
		} catch {}
	});
	return function destroy() {
		trap?.deactivate();
		cleanup();
	};
}
//#endregion
//#region node_modules/@zag-js/remove-scroll/dist/index.mjs
var LOCK_CLASSNAME = "data-scroll-lock";
var lockMap = /* @__PURE__ */ new WeakMap();
function getPaddingProperty(documentElement) {
	const documentLeft = documentElement.getBoundingClientRect().left;
	return Math.round(documentLeft) + documentElement.scrollLeft ? "paddingLeft" : "paddingRight";
}
function hasStableScrollbarGutter(element) {
	const scrollbarGutter = getComputedStyle$2(element)?.scrollbarGutter;
	return scrollbarGutter === "stable" || scrollbarGutter?.startsWith("stable ") === true;
}
function getScrollContainer(doc) {
	const { documentElement, body } = doc;
	return isOverflowElement$1(documentElement) ? documentElement : body;
}
function applyLock(doc) {
	const win = doc.defaultView ?? window;
	const { documentElement, body } = doc;
	const scroller = getScrollContainer(doc);
	const hasStableGutter = hasStableScrollbarGutter(documentElement) || hasStableScrollbarGutter(body);
	const scrollbarWidth = win.innerWidth - documentElement.clientWidth;
	body.setAttribute(LOCK_CLASSNAME, "");
	const setScrollbarWidthProperty = () => setStyleProperty(documentElement, "--scrollbar-width", `${scrollbarWidth}px`);
	const paddingProperty = getPaddingProperty(documentElement);
	const setScrollerStyle = () => {
		const styles = { overflow: "hidden" };
		if (!hasStableGutter && scrollbarWidth > 0) styles[paddingProperty] = `${scrollbarWidth}px`;
		return setStyle(scroller, styles);
	};
	const setBodyStyleIOS = () => {
		const { scrollX, scrollY, visualViewport } = win;
		const offsetLeft = visualViewport?.offsetLeft ?? 0;
		const offsetTop = visualViewport?.offsetTop ?? 0;
		const styles = {
			position: "fixed",
			overflow: "hidden",
			top: `${-(scrollY - Math.floor(offsetTop))}px`,
			left: `${-(scrollX - Math.floor(offsetLeft))}px`,
			right: "0"
		};
		if (!hasStableGutter && scrollbarWidth > 0) styles[paddingProperty] = `${scrollbarWidth}px`;
		const restoreStyle = setStyle(body, styles);
		return () => {
			restoreStyle?.();
			win.scrollTo({
				left: scrollX,
				top: scrollY,
				behavior: "instant"
			});
		};
	};
	const cleanups = [setScrollbarWidthProperty(), isIos() ? setBodyStyleIOS() : setScrollerStyle()];
	return () => {
		cleanups.forEach((fn) => fn?.());
		body.removeAttribute(LOCK_CLASSNAME);
	};
}
function preventBodyScroll(_document) {
	const doc = _document ?? document;
	let state = lockMap.get(doc);
	if (!state) {
		state = {
			count: 0,
			cleanup: applyLock(doc)
		};
		lockMap.set(doc, state);
	}
	state.count++;
	const lockState = state;
	let released = false;
	return () => {
		if (released) return;
		released = true;
		lockState.count--;
		if (lockState.count === 0) {
			lockState.cleanup();
			lockMap.delete(doc);
		}
	};
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/field/use-field-context.js
var [FieldProvider, useFieldContext] = createContext({
	name: "FieldContext",
	strict: false
});
var parts$1 = createAnatomy("color-picker", [
	"root",
	"label",
	"control",
	"trigger",
	"positioner",
	"content",
	"area",
	"areaThumb",
	"valueText",
	"areaBackground",
	"channelSlider",
	"channelSliderLabel",
	"channelSliderTrack",
	"channelSliderThumb",
	"channelSliderValueText",
	"channelInput",
	"transparencyGrid",
	"swatchGroup",
	"swatchTrigger",
	"swatchIndicator",
	"swatch",
	"eyeDropperTrigger",
	"formatTrigger",
	"formatSelect"
]).build();
//#endregion
//#region node_modules/@zag-js/color-utils/dist/chunk-QZ7TP4HQ.mjs
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
//#endregion
//#region node_modules/@zag-js/color-utils/dist/color-format-gradient.mjs
var generateRGB_R = (orientation, dir, zValue) => {
	const maskImage = `linear-gradient(to ${orientation[Number(!dir)]}, transparent, #000)`;
	return {
		areaStyles: { backgroundImage: `linear-gradient(to ${orientation[Number(dir)]},rgb(${zValue},0,0),rgb(${zValue},255,0))` },
		areaGradientStyles: {
			backgroundImage: `linear-gradient(to ${orientation[Number(dir)]},rgb(${zValue},0,255),rgb(${zValue},255,255))`,
			WebkitMaskImage: maskImage,
			maskImage
		}
	};
};
var generateRGB_G = (orientation, dir, zValue) => {
	const maskImage = `linear-gradient(to ${orientation[Number(!dir)]}, transparent, #000)`;
	return {
		areaStyles: { backgroundImage: `linear-gradient(to ${orientation[Number(dir)]},rgb(0,${zValue},0),rgb(255,${zValue},0))` },
		areaGradientStyles: {
			backgroundImage: `linear-gradient(to ${orientation[Number(dir)]},rgb(0,${zValue},255),rgb(255,${zValue},255))`,
			WebkitMaskImage: maskImage,
			maskImage
		}
	};
};
var generateRGB_B = (orientation, dir, zValue) => {
	const maskImage = `linear-gradient(to ${orientation[Number(!dir)]}, transparent, #000)`;
	return {
		areaStyles: { backgroundImage: `linear-gradient(to ${orientation[Number(dir)]},rgb(0,0,${zValue}),rgb(255,0,${zValue}))` },
		areaGradientStyles: {
			backgroundImage: `linear-gradient(to ${orientation[Number(dir)]},rgb(0,255,${zValue}),rgb(255,255,${zValue}))`,
			WebkitMaskImage: maskImage,
			maskImage
		}
	};
};
var generateHSL_H = (orientation, dir, zValue) => {
	return {
		areaStyles: {},
		areaGradientStyles: { background: [
			`linear-gradient(to ${orientation[Number(dir)]}, hsla(0,0%,0%,1) 0%, hsla(0,0%,0%,0) 50%, hsla(0,0%,100%,0) 50%, hsla(0,0%,100%,1) 100%)`,
			`linear-gradient(to ${orientation[Number(!dir)]},hsl(0,0%,50%),hsla(0,0%,50%,0))`,
			`hsl(${zValue}, 100%, 50%)`
		].join(",") }
	};
};
var generateHSL_S = (orientation, dir, alphaValue) => {
	return {
		areaStyles: {},
		areaGradientStyles: { background: [
			`linear-gradient(to ${orientation[Number(!dir)]}, hsla(0,0%,0%,${alphaValue}) 0%, hsla(0,0%,0%,0) 50%, hsla(0,0%,100%,0) 50%, hsla(0,0%,100%,${alphaValue}) 100%)`,
			`linear-gradient(to ${orientation[Number(dir)]},hsla(0,100%,50%,${alphaValue}),hsla(60,100%,50%,${alphaValue}),hsla(120,100%,50%,${alphaValue}),hsla(180,100%,50%,${alphaValue}),hsla(240,100%,50%,${alphaValue}),hsla(300,100%,50%,${alphaValue}),hsla(359,100%,50%,${alphaValue}))`,
			"hsl(0, 0%, 50%)"
		].join(",") }
	};
};
var generateHSL_L = (orientation, dir, zValue) => {
	return {
		areaStyles: {},
		areaGradientStyles: { backgroundImage: [`linear-gradient(to ${orientation[Number(!dir)]},hsl(0,0%,${zValue}%),hsla(0,0%,${zValue}%,0))`, `linear-gradient(to ${orientation[Number(dir)]},hsl(0,100%,${zValue}%),hsl(60,100%,${zValue}%),hsl(120,100%,${zValue}%),hsl(180,100%,${zValue}%),hsl(240,100%,${zValue}%),hsl(300,100%,${zValue}%),hsl(360,100%,${zValue}%))`].join(",") }
	};
};
var generateHSB_H = (orientation, dir, zValue) => {
	return {
		areaStyles: {},
		areaGradientStyles: { background: [
			`linear-gradient(to ${orientation[Number(dir)]},hsl(0,0%,0%),hsla(0,0%,0%,0))`,
			`linear-gradient(to ${orientation[Number(!dir)]},hsl(0,0%,100%),hsla(0,0%,100%,0))`,
			`hsl(${zValue}, 100%, 50%)`
		].join(",") }
	};
};
var generateHSB_S = (orientation, dir, alphaValue) => {
	return {
		areaStyles: {},
		areaGradientStyles: { background: [
			`linear-gradient(to ${orientation[Number(!dir)]},hsla(0,0%,0%,${alphaValue}),hsla(0,0%,0%,0))`,
			`linear-gradient(to ${orientation[Number(dir)]},hsla(0,100%,50%,${alphaValue}),hsla(60,100%,50%,${alphaValue}),hsla(120,100%,50%,${alphaValue}),hsla(180,100%,50%,${alphaValue}),hsla(240,100%,50%,${alphaValue}),hsla(300,100%,50%,${alphaValue}),hsla(359,100%,50%,${alphaValue}))`,
			`linear-gradient(to ${orientation[Number(!dir)]},hsl(0,0%,0%),hsl(0,0%,100%))`
		].join(",") }
	};
};
var generateHSB_B = (orientation, dir, alphaValue) => {
	return {
		areaStyles: {},
		areaGradientStyles: { background: [
			`linear-gradient(to ${orientation[Number(!dir)]},hsla(0,0%,100%,${alphaValue}),hsla(0,0%,100%,0))`,
			`linear-gradient(to ${orientation[Number(dir)]},hsla(0,100%,50%,${alphaValue}),hsla(60,100%,50%,${alphaValue}),hsla(120,100%,50%,${alphaValue}),hsla(180,100%,50%,${alphaValue}),hsla(240,100%,50%,${alphaValue}),hsla(300,100%,50%,${alphaValue}),hsla(359,100%,50%,${alphaValue}))`,
			"#000"
		].join(",") }
	};
};
//#endregion
//#region node_modules/@zag-js/color-utils/dist/area-gradient.mjs
function getColorAreaGradient(color, options) {
	const { xChannel, yChannel, dir: dirProp = "ltr" } = options;
	const { zChannel } = color.getColorAxes({
		xChannel,
		yChannel
	});
	const zValue = color.getChannelValue(zChannel);
	const { minValue: zMin, maxValue: zMax } = color.getChannelRange(zChannel);
	const orientation = ["top", dirProp === "rtl" ? "left" : "right"];
	let dir = false;
	let background = {
		areaStyles: {},
		areaGradientStyles: {}
	};
	let alphaValue = (zValue - zMin) / (zMax - zMin);
	let isHSL = color.getFormat() === "hsla";
	switch (zChannel) {
		case "red":
			dir = xChannel === "green";
			background = generateRGB_R(orientation, dir, zValue);
			break;
		case "green":
			dir = xChannel === "red";
			background = generateRGB_G(orientation, dir, zValue);
			break;
		case "blue":
			dir = xChannel === "red";
			background = generateRGB_B(orientation, dir, zValue);
			break;
		case "hue":
			dir = xChannel !== "saturation";
			if (isHSL) background = generateHSL_H(orientation, dir, zValue);
			else background = generateHSB_H(orientation, dir, zValue);
			break;
		case "saturation":
			dir = xChannel === "hue";
			if (isHSL) background = generateHSL_S(orientation, dir, alphaValue);
			else background = generateHSB_S(orientation, dir, alphaValue);
			break;
		case "brightness":
			dir = xChannel === "hue";
			background = generateHSB_B(orientation, dir, alphaValue);
			break;
		case "lightness":
			dir = xChannel === "hue";
			background = generateHSL_L(orientation, dir, zValue);
	}
	return background;
}
//#endregion
//#region node_modules/@zag-js/color-utils/dist/color.mjs
var isEqualObject = (a, b) => {
	if (Object.keys(a).length !== Object.keys(b).length) return false;
	for (let key in a) if (a[key] !== b[key]) return false;
	return true;
};
var Color = class {
	toHexInt() {
		return this.toFormat("rgba").toHexInt();
	}
	getChannelValue(channel) {
		if (channel in this) return this[channel];
		throw new Error("Unsupported color channel: " + channel);
	}
	getChannelValuePercent(channel, valueToCheck) {
		const value = valueToCheck ?? this.getChannelValue(channel);
		const { minValue, maxValue } = this.getChannelRange(channel);
		return getValuePercent(value, minValue, maxValue);
	}
	getChannelPercentValue(channel, percentToCheck) {
		const { minValue, maxValue, step } = this.getChannelRange(channel);
		return snapValueToStep(getPercentValue(percentToCheck, minValue, maxValue, step), minValue, maxValue, step);
	}
	withChannelValue(channel, value) {
		const { minValue, maxValue } = this.getChannelRange(channel);
		if (channel in this) {
			let clone = this.clone();
			clone[channel] = clampValue(value, minValue, maxValue);
			return clone;
		}
		throw new Error("Unsupported color channel: " + channel);
	}
	getColorAxes(xyChannels) {
		let { xChannel, yChannel } = xyChannels;
		let xCh = xChannel || this.getChannels().find((c) => c !== yChannel);
		let yCh = yChannel || this.getChannels().find((c) => c !== xCh);
		return {
			xChannel: xCh,
			yChannel: yCh,
			zChannel: this.getChannels().find((c) => c !== xCh && c !== yCh)
		};
	}
	incrementChannel(channel, stepSize) {
		const { minValue, maxValue, step } = this.getChannelRange(channel);
		const value = snapValueToStep(clampValue(this.getChannelValue(channel) + stepSize, minValue, maxValue), minValue, maxValue, step);
		return this.withChannelValue(channel, value);
	}
	decrementChannel(channel, stepSize) {
		return this.incrementChannel(channel, -stepSize);
	}
	isEqual(color) {
		return isEqualObject(this.toJSON(), color.toJSON()) && this.getChannelValue("alpha") === color.getChannelValue("alpha");
	}
};
//#endregion
//#region node_modules/@zag-js/color-utils/dist/rgb-color.mjs
var HEX_COLOR_REGEX = /^#[\da-f]+$/i;
var RGB_COLOR_REGEX = /^rgba?\((.*)\)$/;
var HEX_STARTING_REGEX = /[^#]/gi;
var _RGBColor = class _RGBColor extends Color {
	constructor(red, green, blue, alpha) {
		super();
		__publicField(this, "red", red);
		__publicField(this, "green", green);
		__publicField(this, "blue", blue);
		__publicField(this, "alpha", alpha);
	}
	static parse(value) {
		let colors = [];
		if (HEX_COLOR_REGEX.test(value) && [
			4,
			5,
			7,
			9
		].includes(value.length)) {
			const values = (value.length < 6 ? value.replace(HEX_STARTING_REGEX, "$&$&") : value).slice(1).split("");
			while (values.length > 0) colors.push(parseInt(values.splice(0, 2).join(""), 16));
			colors[3] = colors[3] !== void 0 ? colors[3] / 255 : void 0;
		}
		const match = value.match(RGB_COLOR_REGEX);
		if (match?.[1]) colors = match[1].split(",").map((value2) => Number(value2.trim())).map((num, i) => clampValue(num, 0, i < 3 ? 255 : 1));
		return colors.length < 3 ? void 0 : new _RGBColor(colors[0], colors[1], colors[2], colors[3] ?? 1);
	}
	toString(format = "css") {
		switch (format) {
			case "hex": return "#" + (this.red.toString(16).padStart(2, "0") + this.green.toString(16).padStart(2, "0") + this.blue.toString(16).padStart(2, "0")).toUpperCase();
			case "hexa": return "#" + (this.red.toString(16).padStart(2, "0") + this.green.toString(16).padStart(2, "0") + this.blue.toString(16).padStart(2, "0") + Math.round(this.alpha * 255).toString(16).padStart(2, "0")).toUpperCase();
			case "rgb": return `rgb(${this.red}, ${this.green}, ${this.blue})`;
			case "css":
			case "rgba": return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
			case "hsl": return this.toHSL().toString("hsl");
			case "hsb": return this.toHSB().toString("hsb");
			default: return this.toFormat(format).toString(format);
		}
	}
	toFormat(format) {
		switch (format) {
			case "rgba": return this;
			case "hsba": return this.toHSB();
			case "hsla": return this.toHSL();
			default: throw new Error("Unsupported color conversion: rgb -> " + format);
		}
	}
	toHexInt() {
		return this.red << 16 | this.green << 8 | this.blue;
	}
	/**
	* Converts an RGB color value to HSB.
	* Conversion formula adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#From_RGB.
	* @returns An HSBColor object.
	*/
	toHSB() {
		const red = this.red / 255;
		const green = this.green / 255;
		const blue = this.blue / 255;
		const min = Math.min(red, green, blue);
		const brightness = Math.max(red, green, blue);
		const chroma = brightness - min;
		const saturation = brightness === 0 ? 0 : chroma / brightness;
		let hue = 0;
		if (chroma !== 0) {
			switch (brightness) {
				case red:
					hue = (green - blue) / chroma + (green < blue ? 6 : 0);
					break;
				case green:
					hue = (blue - red) / chroma + 2;
					break;
				case blue: hue = (red - green) / chroma + 4;
			}
			hue /= 6;
		}
		return new HSBColor(toFixedNumber(hue * 360, 2), toFixedNumber(saturation * 100, 2), toFixedNumber(brightness * 100, 2), toFixedNumber(this.alpha, 2));
	}
	/**
	* Converts an RGB color value to HSL.
	* Conversion formula adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#From_RGB.
	* @returns An HSLColor object.
	*/
	toHSL() {
		const red = this.red / 255;
		const green = this.green / 255;
		const blue = this.blue / 255;
		const min = Math.min(red, green, blue);
		const max = Math.max(red, green, blue);
		const lightness = (max + min) / 2;
		const chroma = max - min;
		let hue = -1;
		let saturation = -1;
		if (chroma === 0) hue = saturation = 0;
		else {
			saturation = chroma / (lightness < .5 ? max + min : 2 - max - min);
			switch (max) {
				case red:
					hue = (green - blue) / chroma + (green < blue ? 6 : 0);
					break;
				case green:
					hue = (blue - red) / chroma + 2;
					break;
				case blue: hue = (red - green) / chroma + 4;
			}
			hue /= 6;
		}
		return new HSLColor(toFixedNumber(hue * 360, 2), toFixedNumber(saturation * 100, 2), toFixedNumber(lightness * 100, 2), toFixedNumber(this.alpha, 2));
	}
	clone() {
		return new _RGBColor(this.red, this.green, this.blue, this.alpha);
	}
	getChannelFormatOptions(channel) {
		switch (channel) {
			case "red":
			case "green":
			case "blue": return { style: "decimal" };
			case "alpha": return { style: "percent" };
			default: throw new Error("Unknown color channel: " + channel);
		}
	}
	formatChannelValue(channel, locale) {
		let options = this.getChannelFormatOptions(channel);
		let value = this.getChannelValue(channel);
		return new Intl.NumberFormat(locale, options).format(value);
	}
	getChannelRange(channel) {
		switch (channel) {
			case "red":
			case "green":
			case "blue": return {
				minValue: 0,
				maxValue: 255,
				step: 1,
				pageSize: 17
			};
			case "alpha": return {
				minValue: 0,
				maxValue: 1,
				step: .01,
				pageSize: .1
			};
			default: throw new Error("Unknown color channel: " + channel);
		}
	}
	toJSON() {
		return {
			r: this.red,
			g: this.green,
			b: this.blue,
			a: this.alpha
		};
	}
	getFormat() {
		return "rgba";
	}
	getChannels() {
		return _RGBColor.colorChannels;
	}
};
__publicField(_RGBColor, "colorChannels", [
	"red",
	"green",
	"blue"
]);
var RGBColor = _RGBColor;
//#endregion
//#region node_modules/@zag-js/color-utils/dist/hsl-color.mjs
var HSL_REGEX = /hsl\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%)\)|hsla\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d(.\d+)?)\)/;
var _HSLColor = class _HSLColor extends Color {
	constructor(hue, saturation, lightness, alpha) {
		super();
		__publicField(this, "hue", hue);
		__publicField(this, "saturation", saturation);
		__publicField(this, "lightness", lightness);
		__publicField(this, "alpha", alpha);
	}
	static parse(value) {
		let m;
		if (m = value.match(HSL_REGEX)) {
			const [h, s, l, a] = (m[1] ?? m[2]).split(",").map((n) => Number(n.trim().replace("%", "")));
			return new _HSLColor(mod(h, 360), clampValue(s, 0, 100), clampValue(l, 0, 100), clampValue(a ?? 1, 0, 1));
		}
	}
	toString(format = "css") {
		switch (format) {
			case "hex": return this.toRGB().toString("hex");
			case "hexa": return this.toRGB().toString("hexa");
			case "hsl": return `hsl(${this.hue}, ${toFixedNumber(this.saturation, 2)}%, ${toFixedNumber(this.lightness, 2)}%)`;
			case "css":
			case "hsla": return `hsla(${this.hue}, ${toFixedNumber(this.saturation, 2)}%, ${toFixedNumber(this.lightness, 2)}%, ${this.alpha})`;
			case "hsb": return this.toHSB().toString("hsb");
			case "rgb": return this.toRGB().toString("rgb");
			default: return this.toFormat(format).toString(format);
		}
	}
	toFormat(format) {
		switch (format) {
			case "hsla": return this;
			case "hsba": return this.toHSB();
			case "rgba": return this.toRGB();
			default: throw new Error("Unsupported color conversion: hsl -> " + format);
		}
	}
	/**
	* Converts a HSL color to HSB.
	* Conversion formula adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_HSV.
	* @returns An HSBColor object.
	*/
	toHSB() {
		let saturation = this.saturation / 100;
		let lightness = this.lightness / 100;
		let brightness = lightness + saturation * Math.min(lightness, 1 - lightness);
		saturation = brightness === 0 ? 0 : 2 * (1 - lightness / brightness);
		return new HSBColor(toFixedNumber(this.hue, 2), toFixedNumber(saturation * 100, 2), toFixedNumber(brightness * 100, 2), toFixedNumber(this.alpha, 2));
	}
	/**
	* Converts a HSL color to RGB.
	* Conversion formula adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB_alternative.
	* @returns An RGBColor object.
	*/
	toRGB() {
		let hue = this.hue;
		let saturation = this.saturation / 100;
		let lightness = this.lightness / 100;
		let a = saturation * Math.min(lightness, 1 - lightness);
		let fn = (n, k = (n + hue / 30) % 12) => lightness - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
		return new RGBColor(Math.round(fn(0) * 255), Math.round(fn(8) * 255), Math.round(fn(4) * 255), toFixedNumber(this.alpha, 2));
	}
	clone() {
		return new _HSLColor(this.hue, this.saturation, this.lightness, this.alpha);
	}
	getChannelFormatOptions(channel) {
		switch (channel) {
			case "hue": return {
				style: "unit",
				unit: "degree",
				unitDisplay: "narrow"
			};
			case "saturation":
			case "lightness":
			case "alpha": return { style: "percent" };
			default: throw new Error("Unknown color channel: " + channel);
		}
	}
	formatChannelValue(channel, locale) {
		let options = this.getChannelFormatOptions(channel);
		let value = this.getChannelValue(channel);
		if (channel === "saturation" || channel === "lightness") value /= 100;
		return new Intl.NumberFormat(locale, options).format(value);
	}
	getChannelRange(channel) {
		switch (channel) {
			case "hue": return {
				minValue: 0,
				maxValue: 360,
				step: 1,
				pageSize: 15
			};
			case "saturation":
			case "lightness": return {
				minValue: 0,
				maxValue: 100,
				step: 1,
				pageSize: 10
			};
			case "alpha": return {
				minValue: 0,
				maxValue: 1,
				step: .01,
				pageSize: .1
			};
			default: throw new Error("Unknown color channel: " + channel);
		}
	}
	toJSON() {
		return {
			h: this.hue,
			s: this.saturation,
			l: this.lightness,
			a: this.alpha
		};
	}
	getFormat() {
		return "hsla";
	}
	getChannels() {
		return _HSLColor.colorChannels;
	}
};
__publicField(_HSLColor, "colorChannels", [
	"hue",
	"saturation",
	"lightness"
]);
var HSLColor = _HSLColor;
//#endregion
//#region node_modules/@zag-js/color-utils/dist/hsb-color.mjs
var HSB_REGEX = /hsb\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%)\)|hsba\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d(.\d+)?)\)/;
var _HSBColor = class _HSBColor extends Color {
	constructor(hue, saturation, brightness, alpha) {
		super();
		__publicField(this, "hue", hue);
		__publicField(this, "saturation", saturation);
		__publicField(this, "brightness", brightness);
		__publicField(this, "alpha", alpha);
	}
	static parse(value) {
		let m;
		if (m = value.match(HSB_REGEX)) {
			const [h, s, b, a] = (m[1] ?? m[2]).split(",").map((n) => Number(n.trim().replace("%", "")));
			return new _HSBColor(mod(h, 360), clampValue(s, 0, 100), clampValue(b, 0, 100), clampValue(a ?? 1, 0, 1));
		}
	}
	toString(format = "css") {
		switch (format) {
			case "css": return this.toHSL().toString("css");
			case "hex": return this.toRGB().toString("hex");
			case "hexa": return this.toRGB().toString("hexa");
			case "hsb": return `hsb(${this.hue}, ${toFixedNumber(this.saturation, 2)}%, ${toFixedNumber(this.brightness, 2)}%)`;
			case "hsba": return `hsba(${this.hue}, ${toFixedNumber(this.saturation, 2)}%, ${toFixedNumber(this.brightness, 2)}%, ${this.alpha})`;
			case "hsl": return this.toHSL().toString("hsl");
			case "rgb": return this.toRGB().toString("rgb");
			default: return this.toFormat(format).toString(format);
		}
	}
	toFormat(format) {
		switch (format) {
			case "hsba": return this;
			case "hsla": return this.toHSL();
			case "rgba": return this.toRGB();
			default: throw new Error("Unsupported color conversion: hsb -> " + format);
		}
	}
	/**
	* Converts a HSB color to HSL.
	* Conversion formula adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#HSV_to_HSL.
	* @returns An HSLColor object.
	*/
	toHSL() {
		let saturation = this.saturation / 100;
		let brightness = this.brightness / 100;
		let lightness = brightness * (1 - saturation / 2);
		saturation = lightness === 0 || lightness === 1 ? 0 : (brightness - lightness) / Math.min(lightness, 1 - lightness);
		return new HSLColor(toFixedNumber(this.hue, 2), toFixedNumber(saturation * 100, 2), toFixedNumber(lightness * 100, 2), toFixedNumber(this.alpha, 2));
	}
	/**
	* Converts a HSV color value to RGB.
	* Conversion formula adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#HSV_to_RGB_alternative.
	* @returns An RGBColor object.
	*/
	toRGB() {
		let hue = this.hue;
		let saturation = this.saturation / 100;
		let brightness = this.brightness / 100;
		let fn = (n, k = (n + hue / 60) % 6) => brightness - saturation * brightness * Math.max(Math.min(k, 4 - k, 1), 0);
		return new RGBColor(Math.round(fn(5) * 255), Math.round(fn(3) * 255), Math.round(fn(1) * 255), toFixedNumber(this.alpha, 2));
	}
	clone() {
		return new _HSBColor(this.hue, this.saturation, this.brightness, this.alpha);
	}
	getChannelFormatOptions(channel) {
		switch (channel) {
			case "hue": return {
				style: "unit",
				unit: "degree",
				unitDisplay: "narrow"
			};
			case "saturation":
			case "brightness":
			case "alpha": return { style: "percent" };
			default: throw new Error("Unknown color channel: " + channel);
		}
	}
	formatChannelValue(channel, locale) {
		let options = this.getChannelFormatOptions(channel);
		let value = this.getChannelValue(channel);
		if (channel === "saturation" || channel === "brightness") value /= 100;
		return new Intl.NumberFormat(locale, options).format(value);
	}
	getChannelRange(channel) {
		switch (channel) {
			case "hue": return {
				minValue: 0,
				maxValue: 360,
				step: 1,
				pageSize: 15
			};
			case "saturation":
			case "brightness": return {
				minValue: 0,
				maxValue: 100,
				step: 1,
				pageSize: 10
			};
			case "alpha": return {
				minValue: 0,
				maxValue: 1,
				step: .01,
				pageSize: .1
			};
			default: throw new Error("Unknown color channel: " + channel);
		}
	}
	toJSON() {
		return {
			h: this.hue,
			s: this.saturation,
			b: this.brightness,
			a: this.alpha
		};
	}
	getFormat() {
		return "hsba";
	}
	getChannels() {
		return _HSBColor.colorChannels;
	}
};
__publicField(_HSBColor, "colorChannels", [
	"hue",
	"saturation",
	"brightness"
]);
var HSBColor = _HSBColor;
//#endregion
//#region node_modules/@zag-js/color-utils/dist/native-color.mjs
var nativeColors = "aliceblue:f0f8ff,antiquewhite:faebd7,aqua:00ffff,aquamarine:7fffd4,azure:f0ffff,beige:f5f5dc,bisque:ffe4c4,black:000000,blanchedalmond:ffebcd,blue:0000ff,blueviolet:8a2be2,brown:a52a2a,burlywood:deb887,cadetblue:5f9ea0,chartreuse:7fff00,chocolate:d2691e,coral:ff7f50,cornflowerblue:6495ed,cornsilk:fff8dc,crimson:dc143c,cyan:00ffff,darkblue:00008b,darkcyan:008b8b,darkgoldenrod:b8860b,darkgray:a9a9a9,darkgreen:006400,darkkhaki:bdb76b,darkmagenta:8b008b,darkolivegreen:556b2f,darkorange:ff8c00,darkorchid:9932cc,darkred:8b0000,darksalmon:e9967a,darkseagreen:8fbc8f,darkslateblue:483d8b,darkslategray:2f4f4f,darkturquoise:00ced1,darkviolet:9400d3,deeppink:ff1493,deepskyblue:00bfff,dimgray:696969,dodgerblue:1e90ff,firebrick:b22222,floralwhite:fffaf0,forestgreen:228b22,fuchsia:ff00ff,gainsboro:dcdcdc,ghostwhite:f8f8ff,gold:ffd700,goldenrod:daa520,gray:808080,green:008000,greenyellow:adff2f,honeydew:f0fff0,hotpink:ff69b4,indianred:cd5c5c,indigo:4b0082,ivory:fffff0,khaki:f0e68c,lavender:e6e6fa,lavenderblush:fff0f5,lawngreen:7cfc00,lemonchiffon:fffacd,lightblue:add8e6,lightcoral:f08080,lightcyan:e0ffff,lightgoldenrodyellow:fafad2,lightgrey:d3d3d3,lightgreen:90ee90,lightpink:ffb6c1,lightsalmon:ffa07a,lightseagreen:20b2aa,lightskyblue:87cefa,lightslategray:778899,lightsteelblue:b0c4de,lightyellow:ffffe0,lime:00ff00,limegreen:32cd32,linen:faf0e6,magenta:ff00ff,maroon:800000,mediumaquamarine:66cdaa,mediumblue:0000cd,mediumorchid:ba55d3,mediumpurple:9370d8,mediumseagreen:3cb371,mediumslateblue:7b68ee,mediumspringgreen:00fa9a,mediumturquoise:48d1cc,mediumvioletred:c71585,midnightblue:191970,mintcream:f5fffa,mistyrose:ffe4e1,moccasin:ffe4b5,navajowhite:ffdead,navy:000080,oldlace:fdf5e6,olive:808000,olivedrab:6b8e23,orange:ffa500,orangered:ff4500,orchid:da70d6,palegoldenrod:eee8aa,palegreen:98fb98,paleturquoise:afeeee,palevioletred:d87093,papayawhip:ffefd5,peachpuff:ffdab9,peru:cd853f,pink:ffc0cb,plum:dda0dd,powderblue:b0e0e6,purple:800080,rebeccapurple:663399,red:ff0000,rosybrown:bc8f8f,royalblue:4169e1,saddlebrown:8b4513,salmon:fa8072,sandybrown:f4a460,seagreen:2e8b57,seashell:fff5ee,sienna:a0522d,silver:c0c0c0,skyblue:87ceeb,slateblue:6a5acd,slategray:708090,snow:fffafa,springgreen:00ff7f,steelblue:4682b4,tan:d2b48c,teal:008080,thistle:d8bfd8,tomato:ff6347,turquoise:40e0d0,violet:ee82ee,wheat:f5deb3,white:ffffff,whitesmoke:f5f5f5,yellow:ffff00,yellowgreen:9acd32";
var makeMap = (str) => {
	const map = /* @__PURE__ */ new Map();
	const list = str.split(",");
	for (let i = 0; i < list.length; i++) {
		const [key, val] = list[i].split(":");
		map.set(key, `#${val}`);
		if (key.includes("gray")) map.set(key.replace("gray", "grey"), `#${val}`);
	}
	return map;
};
var nativeColorMap = makeMap(nativeColors);
//#endregion
//#region node_modules/@zag-js/color-utils/dist/parse-color.mjs
var parseColor = (value) => {
	if (nativeColorMap.has(value)) return parseColor(nativeColorMap.get(value));
	const result = RGBColor.parse(value) || HSBColor.parse(value) || HSLColor.parse(value);
	if (!result) {
		const error = /* @__PURE__ */ new Error("Invalid color value: " + value);
		Error.captureStackTrace?.(error, parseColor);
		throw error;
	}
	return result;
};
var normalizeColor = (v) => {
	return typeof v === "string" ? parseColor(v) : v;
};
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
/**
* Custom positioning reference element.
* @see https://floating-ui.com/docs/virtual-elements
*/
var sides = [
	"top",
	"right",
	"bottom",
	"left"
];
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
	x: v,
	y: v
});
var oppositeSideMap = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function clamp(start, value, end) {
	return max(start, min(value, end));
}
function evaluate(value, param) {
	return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
	return placement.split("-")[0];
}
function getAlignment(placement) {
	return placement.split("-")[1];
}
function getOppositeAxis(axis) {
	return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
	return axis === "y" ? "height" : "width";
}
function getSideAxis$1(placement) {
	const firstChar = placement[0];
	return firstChar === "t" || firstChar === "b" ? "y" : "x";
}
function getAlignmentAxis(placement) {
	return getOppositeAxis(getSideAxis$1(placement));
}
function getAlignmentSides(placement, rects, rtl) {
	if (rtl === void 0) rtl = false;
	const alignment = getAlignment(placement);
	const alignmentAxis = getAlignmentAxis(placement);
	const length = getAxisLength(alignmentAxis);
	let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
	if (rects.reference[length] > rects.floating[length]) mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
	return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
	const oppositePlacement = getOppositePlacement(placement);
	return [
		getOppositeAlignmentPlacement(placement),
		oppositePlacement,
		getOppositeAlignmentPlacement(oppositePlacement)
	];
}
function getOppositeAlignmentPlacement(placement) {
	return placement.includes("start") ? placement.replace("start", "end") : placement.replace("end", "start");
}
var lrPlacement = ["left", "right"];
var rlPlacement = ["right", "left"];
var tbPlacement = ["top", "bottom"];
var btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
	switch (side) {
		case "top":
		case "bottom":
			if (rtl) return isStart ? rlPlacement : lrPlacement;
			return isStart ? lrPlacement : rlPlacement;
		case "left":
		case "right": return isStart ? tbPlacement : btPlacement;
		default: return [];
	}
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
	const alignment = getAlignment(placement);
	let list = getSideList(getSide(placement), direction === "start", rtl);
	if (alignment) {
		list = list.map((side) => side + "-" + alignment);
		if (flipAlignment) list = list.concat(list.map(getOppositeAlignmentPlacement));
	}
	return list;
}
function getOppositePlacement(placement) {
	const side = getSide(placement);
	return oppositeSideMap[side] + placement.slice(side.length);
}
function expandPaddingObject(padding) {
	var _padding$top, _padding$right, _padding$bottom, _padding$left;
	return {
		top: (_padding$top = padding.top) != null ? _padding$top : 0,
		right: (_padding$right = padding.right) != null ? _padding$right : 0,
		bottom: (_padding$bottom = padding.bottom) != null ? _padding$bottom : 0,
		left: (_padding$left = padding.left) != null ? _padding$left : 0
	};
}
function getPaddingObject(padding) {
	return typeof padding !== "number" ? expandPaddingObject(padding) : {
		top: padding,
		right: padding,
		bottom: padding,
		left: padding
	};
}
function rectToClientRect(rect) {
	const { x, y, width, height } = rect;
	return {
		width,
		height,
		top: y,
		left: x,
		right: x + width,
		bottom: y + height,
		x,
		y
	};
}
//#endregion
//#region node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
	let { reference, floating } = _ref;
	const sideAxis = getSideAxis$1(placement);
	const alignmentAxis = getAlignmentAxis(placement);
	const alignLength = getAxisLength(alignmentAxis);
	const side = getSide(placement);
	const isVertical = sideAxis === "y";
	const commonX = reference.x + reference.width / 2 - floating.width / 2;
	const commonY = reference.y + reference.height / 2 - floating.height / 2;
	const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
	let coords;
	switch (side) {
		case "top":
			coords = {
				x: commonX,
				y: reference.y - floating.height
			};
			break;
		case "bottom":
			coords = {
				x: commonX,
				y: reference.y + reference.height
			};
			break;
		case "right":
			coords = {
				x: reference.x + reference.width,
				y: commonY
			};
			break;
		case "left":
			coords = {
				x: reference.x - floating.width,
				y: commonY
			};
			break;
		default: coords = {
			x: reference.x,
			y: reference.y
		};
	}
	const alignment = getAlignment(placement);
	if (alignment) coords[alignmentAxis] += commonAlign * (alignment === "end" ? 1 : -1) * (rtl && isVertical ? -1 : 1);
	return coords;
}
/**
* Resolves with an object of overflow side offsets that determine how much the
* element is overflowing a given clipping boundary on each side.
* - positive = overflowing the boundary by that number of pixels
* - negative = how many pixels left before it will overflow
* - 0 = lies flush with the boundary
* @see https://floating-ui.com/docs/detectOverflow
*/
async function detectOverflow(state, options) {
	var _await$platform$isEle;
	if (options === void 0) options = {};
	const { x, y, platform, rects, elements, strategy } = state;
	const { boundary = "clippingAncestors", rootBoundary = "viewport", elementContext = "floating", altBoundary = false, padding = 0 } = evaluate(options, state);
	const paddingObject = getPaddingObject(padding);
	const element = elements[altBoundary ? elementContext === "floating" ? "reference" : "floating" : elementContext];
	const clippingClientRect = rectToClientRect(await platform.getClippingRect({
		element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
		boundary,
		rootBoundary,
		strategy
	}));
	const rect = elementContext === "floating" ? {
		x,
		y,
		width: rects.floating.width,
		height: rects.floating.height
	} : rects.reference;
	const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
	const offsetScale = await (platform.isElement == null ? void 0 : platform.isElement(offsetParent)) && await (platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
		x: 1,
		y: 1
	};
	const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements,
		rect,
		offsetParent,
		strategy
	}) : rect);
	return {
		top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
		bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
		left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
		right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
	};
}
var MAX_RESET_COUNT = 50;
/**
* Computes the `x` and `y` coordinates that will place the floating element
* next to a given reference element.
*
* This export does not have any `platform` interface logic. You will need to
* write one for the platform you are using Floating UI with.
*/
var computePosition$1 = async (reference, floating, config) => {
	const { placement = "bottom", strategy = "absolute", middleware = [], platform } = config;
	const platformWithDetectOverflow = platform.detectOverflow ? platform : {
		...platform,
		detectOverflow
	};
	const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
	let rects = await platform.getElementRects({
		reference,
		floating,
		strategy
	});
	let { x, y } = computeCoordsFromPlacement(rects, placement, rtl);
	let statefulPlacement = placement;
	let resetCount = 0;
	const middlewareData = {};
	for (let i = 0; i < middleware.length; i++) {
		const currentMiddleware = middleware[i];
		if (!currentMiddleware) continue;
		const { name, fn } = currentMiddleware;
		const { x: nextX, y: nextY, data, reset } = await fn({
			x,
			y,
			initialPlacement: placement,
			placement: statefulPlacement,
			strategy,
			middlewareData,
			rects,
			platform: platformWithDetectOverflow,
			elements: {
				reference,
				floating
			}
		});
		x = nextX != null ? nextX : x;
		y = nextY != null ? nextY : y;
		middlewareData[name] = {
			...middlewareData[name],
			...data
		};
		if (reset && resetCount < MAX_RESET_COUNT) {
			resetCount++;
			if (typeof reset === "object") {
				if (reset.placement) statefulPlacement = reset.placement;
				if (reset.rects) rects = reset.rects === true ? await platform.getElementRects({
					reference,
					floating,
					strategy
				}) : reset.rects;
				({x, y} = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
			}
			i = -1;
		}
	}
	return {
		x,
		y,
		placement: statefulPlacement,
		strategy,
		middlewareData
	};
};
/**
* Provides data to position an inner element of the floating element so that it
* appears centered to the reference element.
* @see https://floating-ui.com/docs/arrow
*/
var arrow$1 = (options) => ({
	name: "arrow",
	options,
	async fn(state) {
		const { x, y, placement, rects, platform, elements, middlewareData } = state;
		const { element, padding = 0 } = evaluate(options, state) || {};
		if (element == null) return {};
		const paddingObject = getPaddingObject(padding);
		const coords = {
			x,
			y
		};
		const axis = getAlignmentAxis(placement);
		const length = getAxisLength(axis);
		const arrowDimensions = await platform.getDimensions(element);
		const isYAxis = axis === "y";
		const minProp = isYAxis ? "top" : "left";
		const maxProp = isYAxis ? "bottom" : "right";
		const clientProp = isYAxis ? "clientHeight" : "clientWidth";
		const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
		const startDiff = coords[axis] - rects.reference[axis];
		const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
		let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
		if (!clientSize || !await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent))) clientSize = elements.floating[clientProp] || rects.floating[length];
		const centerToReference = endDiff / 2 - startDiff / 2;
		const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
		const minPadding = min(paddingObject[minProp], largestPossiblePadding);
		const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
		const max = clientSize - arrowDimensions[length] - maxPadding;
		const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
		const offset = clamp(minPadding, center, max);
		const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < minPadding ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
		const alignmentOffset = shouldAddOffset ? center < minPadding ? center - minPadding : center - max : 0;
		return {
			[axis]: coords[axis] + alignmentOffset,
			data: {
				[axis]: offset,
				centerOffset: center - offset - alignmentOffset,
				...shouldAddOffset && { alignmentOffset }
			},
			reset: shouldAddOffset
		};
	}
});
/**
* Optimizes the visibility of the floating element by flipping the `placement`
* in order to keep it in view when the preferred placement(s) will overflow the
* clipping boundary. Alternative to `autoPlacement`.
* @see https://floating-ui.com/docs/flip
*/
var flip$1 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "flip",
		options,
		async fn(state) {
			var _middlewareData$arrow, _middlewareData$flip;
			const { placement, middlewareData, rects, initialPlacement, platform, elements } = state;
			const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true, fallbackPlacements: specifiedFallbackPlacements, fallbackStrategy = "bestFit", fallbackAxisSideDirection = "none", flipAlignment = true, ...detectOverflowOptions } = evaluate(options, state);
			if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) return {};
			const side = getSide(placement);
			const initialSideAxis = getSideAxis$1(initialPlacement);
			const isBasePlacement = getSide(initialPlacement) === initialPlacement;
			const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
			const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
			const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
			if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
			const placements = [initialPlacement, ...fallbackPlacements];
			const overflow = await platform.detectOverflow(state, detectOverflowOptions);
			const overflows = [];
			let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
			if (checkMainAxis) overflows.push(overflow[side]);
			if (checkCrossAxis) {
				const sides = getAlignmentSides(placement, rects, rtl);
				overflows.push(overflow[sides[0]], overflow[sides[1]]);
			}
			overflowsData = [...overflowsData, {
				placement,
				overflows
			}];
			if (!overflows.every((side) => side <= 0)) {
				var _middlewareData$flip2, _overflowsData$filter;
				const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
				const nextPlacement = placements[nextIndex];
				if (nextPlacement) {
					if (!(checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis$1(nextPlacement) : false) || overflowsData.every((d) => getSideAxis$1(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) return {
						data: {
							index: nextIndex,
							overflows: overflowsData
						},
						reset: { placement: nextPlacement }
					};
				}
				let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
				if (!resetPlacement) switch (fallbackStrategy) {
					case "bestFit": {
						var _overflowsData$filter2;
						const placement = (_overflowsData$filter2 = overflowsData.filter((d) => {
							if (hasFallbackAxisSideDirection) {
								const currentSideAxis = getSideAxis$1(d.placement);
								return currentSideAxis === initialSideAxis || currentSideAxis === "y";
							}
							return true;
						}).map((d) => [d.placement, d.overflows.filter((overflow) => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
						if (placement) resetPlacement = placement;
						break;
					}
					case "initialPlacement": resetPlacement = initialPlacement;
				}
				if (placement !== resetPlacement) return { reset: { placement: resetPlacement } };
			}
			return {};
		}
	};
};
function getSideOffsets(overflow, rect) {
	return {
		top: overflow.top - rect.height,
		right: overflow.right - rect.width,
		bottom: overflow.bottom - rect.height,
		left: overflow.left - rect.width
	};
}
function isAnySideFullyClipped(overflow) {
	return sides.some((side) => overflow[side] >= 0);
}
/**
* Provides data to hide the floating element in applicable situations, such as
* when it is not in the same clipping context as the reference element.
* @see https://floating-ui.com/docs/hide
*/
var hide$1 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "hide",
		options,
		async fn(state) {
			const { rects, platform } = state;
			const { strategy = "referenceHidden", ...detectOverflowOptions } = evaluate(options, state);
			switch (strategy) {
				case "referenceHidden": {
					const offsets = getSideOffsets(await platform.detectOverflow(state, {
						...detectOverflowOptions,
						elementContext: "reference"
					}), rects.reference);
					return { data: {
						referenceHiddenOffsets: offsets,
						referenceHidden: isAnySideFullyClipped(offsets)
					} };
				}
				case "escaped": {
					const offsets = getSideOffsets(await platform.detectOverflow(state, {
						...detectOverflowOptions,
						altBoundary: true
					}), rects.floating);
					return { data: {
						escapedOffsets: offsets,
						escaped: isAnySideFullyClipped(offsets)
					} };
				}
				default: return {};
			}
		}
	};
};
var originSides = /*#__PURE__*/ new Set(["left", "top"]);
async function convertValueToCoords(state, options) {
	const { placement, platform, elements } = state;
	const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
	const side = getSide(placement);
	const alignment = getAlignment(placement);
	const isVertical = getSideAxis$1(placement) === "y";
	const mainAxisMulti = originSides.has(side) ? -1 : 1;
	const crossAxisMulti = rtl && isVertical ? -1 : 1;
	const rawValue = evaluate(options, state);
	let { mainAxis, crossAxis, alignmentAxis } = typeof rawValue === "number" ? {
		mainAxis: rawValue,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: rawValue.mainAxis || 0,
		crossAxis: rawValue.crossAxis || 0,
		alignmentAxis: rawValue.alignmentAxis
	};
	if (alignment && typeof alignmentAxis === "number") crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
	return isVertical ? {
		x: crossAxis * crossAxisMulti,
		y: mainAxis * mainAxisMulti
	} : {
		x: mainAxis * mainAxisMulti,
		y: crossAxis * crossAxisMulti
	};
}
/**
* Modifies the placement by translating the floating element along the
* specified axes.
* A number (shorthand for `mainAxis` or distance), or an axes configuration
* object may be passed.
* @see https://floating-ui.com/docs/offset
*/
var offset$1 = function(options) {
	if (options === void 0) options = 0;
	return {
		name: "offset",
		options,
		async fn(state) {
			var _middlewareData$offse, _middlewareData$arrow;
			const { x, y, placement, middlewareData } = state;
			const diffCoords = await convertValueToCoords(state, options);
			if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) return {};
			return {
				x: x + diffCoords.x,
				y: y + diffCoords.y,
				data: {
					...diffCoords,
					placement
				}
			};
		}
	};
};
/**
* Optimizes the visibility of the floating element by shifting it in order to
* keep it in view when it will overflow the clipping boundary.
* @see https://floating-ui.com/docs/shift
*/
var shift$1 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "shift",
		options,
		async fn(state) {
			const { x, y, placement, platform } = state;
			const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = false, limiter = { fn: (_ref) => {
				let { x, y } = _ref;
				return {
					x,
					y
				};
			} }, ...detectOverflowOptions } = evaluate(options, state);
			const coords = {
				x,
				y
			};
			const overflow = await platform.detectOverflow(state, detectOverflowOptions);
			const crossAxis = getSideAxis$1(placement);
			const mainAxis = getOppositeAxis(crossAxis);
			let mainAxisCoord = coords[mainAxis];
			let crossAxisCoord = coords[crossAxis];
			const clampCoord = (axis, coord) => clamp(coord + overflow[axis === "y" ? "top" : "left"], coord, coord - overflow[axis === "y" ? "bottom" : "right"]);
			if (checkMainAxis) mainAxisCoord = clampCoord(mainAxis, mainAxisCoord);
			if (checkCrossAxis) crossAxisCoord = clampCoord(crossAxis, crossAxisCoord);
			const limitedCoords = limiter.fn({
				...state,
				[mainAxis]: mainAxisCoord,
				[crossAxis]: crossAxisCoord
			});
			return {
				...limitedCoords,
				data: {
					x: limitedCoords.x - x,
					y: limitedCoords.y - y,
					enabled: {
						[mainAxis]: checkMainAxis,
						[crossAxis]: checkCrossAxis
					}
				}
			};
		}
	};
};
/**
* Built-in `limiter` that will stop `shift()` at a certain point.
*/
var limitShift$1 = function(options) {
	if (options === void 0) options = {};
	return {
		options,
		fn(state) {
			var _rawOffset$mainAxis, _rawOffset$crossAxis;
			const { x, y, placement, rects, middlewareData } = state;
			const { offset = 0, mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true } = evaluate(options, state);
			const coords = {
				x,
				y
			};
			const crossAxis = getSideAxis$1(placement);
			const mainAxis = getOppositeAxis(crossAxis);
			let mainAxisCoord = coords[mainAxis];
			let crossAxisCoord = coords[crossAxis];
			const rawOffset = evaluate(offset, state);
			const computedOffset = typeof rawOffset === "number" ? {
				mainAxis: rawOffset,
				crossAxis: 0
			} : {
				mainAxis: (_rawOffset$mainAxis = rawOffset.mainAxis) != null ? _rawOffset$mainAxis : 0,
				crossAxis: (_rawOffset$crossAxis = rawOffset.crossAxis) != null ? _rawOffset$crossAxis : 0
			};
			if (checkMainAxis) {
				const len = mainAxis === "y" ? "height" : "width";
				const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
				const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
				if (mainAxisCoord < limitMin) mainAxisCoord = limitMin;
				else if (mainAxisCoord > limitMax) mainAxisCoord = limitMax;
			}
			if (checkCrossAxis) {
				var _middlewareData$offse, _middlewareData$offse2;
				const len = mainAxis === "y" ? "width" : "height";
				const isOriginSide = originSides.has(getSide(placement));
				const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
				const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
				if (crossAxisCoord < limitMin) crossAxisCoord = limitMin;
				else if (crossAxisCoord > limitMax) crossAxisCoord = limitMax;
			}
			return {
				[mainAxis]: mainAxisCoord,
				[crossAxis]: crossAxisCoord
			};
		}
	};
};
/**
* Provides data that allows you to change the size of the floating element —
* for instance, prevent it from overflowing the clipping boundary or match the
* width of the reference element.
* @see https://floating-ui.com/docs/size
*/
var size$1 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "size",
		options,
		async fn(state) {
			const { placement, rects, platform, elements } = state;
			const { apply = () => {}, ...detectOverflowOptions } = evaluate(options, state);
			const overflow = await platform.detectOverflow(state, detectOverflowOptions);
			const side = getSide(placement);
			const alignment = getAlignment(placement);
			const isYAxis = getSideAxis$1(placement) === "y";
			const { width, height } = rects.floating;
			let heightSide;
			let widthSide;
			if (side === "top" || side === "bottom") {
				heightSide = side;
				widthSide = alignment === (await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
			} else {
				widthSide = side;
				heightSide = alignment === "end" ? "top" : "bottom";
			}
			const maximumClippingHeight = height - overflow.top - overflow.bottom;
			const maximumClippingWidth = width - overflow.left - overflow.right;
			const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
			const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
			const shiftData = state.middlewareData.shift;
			const noShift = !shiftData;
			let availableHeight = overflowAvailableHeight;
			let availableWidth = overflowAvailableWidth;
			if (shiftData != null && shiftData.enabled.x) availableWidth = maximumClippingWidth;
			if (shiftData != null && shiftData.enabled.y) availableHeight = maximumClippingHeight;
			if (noShift && !alignment) if (isYAxis) availableWidth = width - 2 * max(overflow.left, overflow.right);
			else availableHeight = height - 2 * max(overflow.top, overflow.bottom);
			await apply({
				...state,
				availableWidth,
				availableHeight
			});
			const nextDimensions = await platform.getDimensions(elements.floating);
			if (width !== nextDimensions.width || height !== nextDimensions.height) return { reset: { rects: true } };
			return {};
		}
	};
};
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
	return typeof window !== "undefined";
}
function getNodeName(node) {
	if (isNode(node)) return (node.nodeName || "").toLowerCase();
	return "#document";
}
function getWindow(node) {
	var _node$ownerDocument;
	return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
	var _ref;
	return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
	if (!hasWindow()) return false;
	return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
	if (!hasWindow()) return false;
	return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
	if (!hasWindow()) return false;
	return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
	if (!hasWindow() || typeof ShadowRoot === "undefined") return false;
	return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
	const { overflow, overflowX, overflowY, display } = getComputedStyle$1(element);
	return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== "inline" && display !== "contents";
}
function isTableElement(element) {
	return /^(table|td|th)$/.test(getNodeName(element));
}
function isTopLayer(element) {
	try {
		if (element.matches(":popover-open")) return true;
	} catch (_e) {}
	try {
		return element.matches(":modal");
	} catch (_e) {
		return false;
	}
}
var willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
var containRe = /paint|layout|strict|content/;
var isNotNone = (value) => !!value && value !== "none";
var isWebKitValue;
function isContainingBlock(elementOrCss) {
	const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;
	return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || "") || containRe.test(css.contain || "");
}
function getContainingBlock(element) {
	let currentNode = getParentNode(element);
	while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
		if (isContainingBlock(currentNode)) return currentNode;
		else if (isTopLayer(currentNode)) return null;
		currentNode = getParentNode(currentNode);
	}
	return null;
}
function isWebKit() {
	if (isWebKitValue == null) isWebKitValue = typeof CSS !== "undefined" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
	return isWebKitValue;
}
function isLastTraversableNode(node) {
	return /^(html|body|#document)$/.test(getNodeName(node));
}
function getComputedStyle$1(element) {
	return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
	if (isElement(element)) return {
		scrollLeft: element.scrollLeft,
		scrollTop: element.scrollTop
	};
	return {
		scrollLeft: element.scrollX,
		scrollTop: element.scrollY
	};
}
function getParentNode(node) {
	if (getNodeName(node) === "html") return node;
	const result = node.assignedSlot || node.parentNode || isShadowRoot(node) && node.host || getDocumentElement(node);
	return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
	const parentNode = getParentNode(node);
	if (isLastTraversableNode(parentNode)) return (node.ownerDocument || node).body;
	if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) return parentNode;
	return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
	var _node$ownerDocument2;
	if (list === void 0) list = [];
	if (traverseIframes === void 0) traverseIframes = true;
	const scrollableAncestor = getNearestOverflowAncestor(node);
	const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
	const win = getWindow(scrollableAncestor);
	if (isBody) {
		const frameElement = getFrameElement(win);
		return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
	} else return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
	return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
	const css = getComputedStyle$1(element);
	let width = parseFloat(css.width) || 0;
	let height = parseFloat(css.height) || 0;
	const hasOffset = isHTMLElement(element);
	const offsetWidth = hasOffset ? element.offsetWidth : width;
	const offsetHeight = hasOffset ? element.offsetHeight : height;
	const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
	if (shouldFallback) {
		width = offsetWidth;
		height = offsetHeight;
	}
	return {
		width,
		height,
		$: shouldFallback
	};
}
function unwrapElement(element) {
	return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
	const domElement = unwrapElement(element);
	if (!isHTMLElement(domElement)) return createCoords(1);
	const rect = domElement.getBoundingClientRect();
	const { width, height, $ } = getCssDimensions(domElement);
	let x = ($ ? round(rect.width) : rect.width) / width;
	let y = ($ ? round(rect.height) : rect.height) / height;
	if (!x || !Number.isFinite(x)) x = 1;
	if (!y || !Number.isFinite(y)) y = 1;
	return {
		x,
		y
	};
}
var noOffsets = /*#__PURE__*/ createCoords(0);
function getVisualOffsets(element) {
	const win = getWindow(element);
	if (!isWebKit() || !win.visualViewport) return noOffsets;
	return {
		x: win.visualViewport.offsetLeft,
		y: win.visualViewport.offsetTop
	};
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
	if (isFixed === void 0) isFixed = false;
	return !!floatingOffsetParent && isFixed && floatingOffsetParent === getWindow(element);
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
	if (includeScale === void 0) includeScale = false;
	if (isFixedStrategy === void 0) isFixedStrategy = false;
	const clientRect = element.getBoundingClientRect();
	const domElement = unwrapElement(element);
	let scale = createCoords(1);
	if (includeScale) if (offsetParent) {
		if (isElement(offsetParent)) scale = getScale(offsetParent);
	} else scale = getScale(element);
	const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
	let x = (clientRect.left + visualOffsets.x) / scale.x;
	let y = (clientRect.top + visualOffsets.y) / scale.y;
	let width = clientRect.width / scale.x;
	let height = clientRect.height / scale.y;
	if (domElement && offsetParent) {
		const win = getWindow(domElement);
		const offsetWin = isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
		let currentWin = win;
		let currentIFrame = getFrameElement(currentWin);
		while (currentIFrame && offsetWin !== currentWin) {
			const iframeScale = getScale(currentIFrame);
			const iframeRect = currentIFrame.getBoundingClientRect();
			const css = getComputedStyle$1(currentIFrame);
			const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
			const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
			x *= iframeScale.x;
			y *= iframeScale.y;
			width *= iframeScale.x;
			height *= iframeScale.y;
			x += left;
			y += top;
			currentWin = getWindow(currentIFrame);
			currentIFrame = getFrameElement(currentWin);
		}
	}
	return rectToClientRect({
		width,
		height,
		x,
		y
	});
}
function getWindowScrollBarX(element, rect) {
	const leftScroll = getNodeScroll(element).scrollLeft;
	if (!rect) return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
	return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
	const htmlRect = documentElement.getBoundingClientRect();
	return {
		x: htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect),
		y: htmlRect.top + scroll.scrollTop
	};
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
	let { elements, rect, offsetParent, strategy } = _ref;
	const isFixed = strategy === "fixed";
	const documentElement = getDocumentElement(offsetParent);
	const topLayer = elements ? isTopLayer(elements.floating) : false;
	if (offsetParent === documentElement || topLayer && isFixed) return rect;
	let scroll = {
		scrollLeft: 0,
		scrollTop: 0
	};
	let scale = createCoords(1);
	const offsets = createCoords(0);
	const isOffsetParentAnElement = isHTMLElement(offsetParent);
	if (isOffsetParentAnElement || !isFixed) {
		if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = getNodeScroll(offsetParent);
		if (isOffsetParentAnElement) {
			const offsetRect = getBoundingClientRect(offsetParent);
			scale = getScale(offsetParent);
			offsets.x = offsetRect.x + offsetParent.clientLeft;
			offsets.y = offsetRect.y + offsetParent.clientTop;
		}
	}
	const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
	return {
		width: rect.width * scale.x,
		height: rect.height * scale.y,
		x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
		y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
	};
}
function getClientRects(element) {
	return element.getClientRects ? Array.from(element.getClientRects()) : [];
}
function getDocumentRect(html) {
	const scroll = getNodeScroll(html);
	const body = html.ownerDocument.body;
	const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
	const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
	let x = -scroll.scrollLeft + getWindowScrollBarX(html);
	const y = -scroll.scrollTop;
	if (getComputedStyle$1(body).direction === "rtl") x += max(html.clientWidth, body.clientWidth) - width;
	return {
		width,
		height,
		x,
		y
	};
}
var SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy, rootBoundary) {
	if (rootBoundary === void 0) rootBoundary = "viewport";
	const isLayoutViewport = rootBoundary === "layoutViewport";
	const win = getWindow(element);
	const html = getDocumentElement(element);
	const visualViewport = win.visualViewport;
	let width = html.clientWidth;
	let height = html.clientHeight;
	let x = 0;
	let y = 0;
	if (visualViewport) {
		const layoutRelativeClientCoords = !isWebKit() || strategy === "fixed";
		if (isLayoutViewport) {
			if (!layoutRelativeClientCoords) {
				x = -visualViewport.offsetLeft;
				y = -visualViewport.offsetTop;
			}
		} else {
			width = visualViewport.width;
			height = visualViewport.height;
			if (layoutRelativeClientCoords) {
				x = visualViewport.offsetLeft;
				y = visualViewport.offsetTop;
			}
		}
	}
	if (getWindowScrollBarX(html) <= 0) {
		const doc = html.ownerDocument;
		const body = doc.body;
		const bodyStyles = getComputedStyle(body);
		const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
		const reservedWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
		const gutter = getComputedStyle(html).scrollbarGutter === "stable both-edges" ? reservedWidth / 2 : reservedWidth;
		if (gutter <= SCROLLBAR_MAX) width -= gutter;
	}
	return {
		width,
		height,
		x,
		y
	};
}
function getInnerBoundingClientRect(element, strategy) {
	const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
	const top = clientRect.top + element.clientTop;
	const left = clientRect.left + element.clientLeft;
	const scale = getScale(element);
	return {
		width: element.clientWidth * scale.x,
		height: element.clientHeight * scale.y,
		x: left * scale.x,
		y: top * scale.y
	};
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
	let rect;
	if (clippingAncestor === "viewport" || clippingAncestor === "layoutViewport") rect = getViewportRect(element, strategy, clippingAncestor);
	else if (clippingAncestor === "document") rect = getDocumentRect(getDocumentElement(element));
	else if (isElement(clippingAncestor)) rect = getInnerBoundingClientRect(clippingAncestor, strategy);
	else {
		const visualOffsets = getVisualOffsets(element);
		rect = {
			x: clippingAncestor.x - visualOffsets.x,
			y: clippingAncestor.y - visualOffsets.y,
			width: clippingAncestor.width,
			height: clippingAncestor.height
		};
	}
	return rectToClientRect(rect);
}
function getClippingElementAncestors(element, cache) {
	const cachedResult = cache.get(element);
	if (cachedResult) return cachedResult;
	let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
	let lastKeptComputedStyle = null;
	const elementIsFixed = getComputedStyle$1(element).position === "fixed";
	let currentNode = elementIsFixed ? getParentNode(element) : element;
	while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
		const computedStyle = getComputedStyle$1(currentNode);
		const currentNodeIsContaining = isContainingBlock(currentNode);
		const lastPosition = lastKeptComputedStyle ? lastKeptComputedStyle.position : elementIsFixed ? "fixed" : "";
		if (!currentNodeIsContaining && (lastPosition === "fixed" || lastPosition === "absolute" && computedStyle.position === "static")) result = result.filter((ancestor) => ancestor !== currentNode);
		else lastKeptComputedStyle = computedStyle;
		currentNode = getParentNode(currentNode);
	}
	cache.set(element, result);
	return result;
}
function getClippingRect(_ref) {
	let { element, boundary, rootBoundary, strategy } = _ref;
	const clippingAncestors = [...boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary), rootBoundary];
	const firstRect = getClientRectFromClippingAncestor(element, clippingAncestors[0], strategy);
	let top = firstRect.top;
	let right = firstRect.right;
	let bottom = firstRect.bottom;
	let left = firstRect.left;
	for (let i = 1; i < clippingAncestors.length; i++) {
		const rect = getClientRectFromClippingAncestor(element, clippingAncestors[i], strategy);
		top = max(rect.top, top);
		right = min(rect.right, right);
		bottom = min(rect.bottom, bottom);
		left = max(rect.left, left);
	}
	return {
		width: right - left,
		height: bottom - top,
		x: left,
		y: top
	};
}
function getDimensions(element) {
	const { width, height } = getCssDimensions(element);
	return {
		width,
		height
	};
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
	const isOffsetParentAnElement = isHTMLElement(offsetParent);
	const documentElement = getDocumentElement(offsetParent);
	const isFixed = strategy === "fixed";
	const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
	let scroll = {
		scrollLeft: 0,
		scrollTop: 0
	};
	const offsets = createCoords(0);
	if (isOffsetParentAnElement || !isFixed) {
		if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = getNodeScroll(offsetParent);
		if (isOffsetParentAnElement) {
			const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
			offsets.x = offsetRect.x + offsetParent.clientLeft;
			offsets.y = offsetRect.y + offsetParent.clientTop;
		}
	}
	if (!isOffsetParentAnElement && documentElement) offsets.x = getWindowScrollBarX(documentElement);
	const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
	return {
		x: rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x,
		y: rect.top + scroll.scrollTop - offsets.y - htmlOffset.y,
		width: rect.width,
		height: rect.height
	};
}
function isStaticPositioned(element) {
	return getComputedStyle$1(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
	if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") return null;
	if (polyfill) return polyfill(element);
	let rawOffsetParent = element.offsetParent;
	if (getDocumentElement(element) === rawOffsetParent) rawOffsetParent = rawOffsetParent.ownerDocument.body;
	return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
	const win = getWindow(element);
	if (isTopLayer(element)) return win;
	if (!isHTMLElement(element)) {
		let svgOffsetParent = getParentNode(element);
		while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
			if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) return svgOffsetParent;
			svgOffsetParent = getParentNode(svgOffsetParent);
		}
		return win;
	}
	let offsetParent = getTrueOffsetParent(element, polyfill);
	while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) offsetParent = getTrueOffsetParent(offsetParent, polyfill);
	if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) return win;
	return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
	const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
	const getDimensionsFn = this.getDimensions;
	const floatingDimensions = await getDimensionsFn(data.floating);
	return {
		reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
		floating: {
			x: 0,
			y: 0,
			width: floatingDimensions.width,
			height: floatingDimensions.height
		}
	};
};
function isRTL(element) {
	return getComputedStyle$1(element).direction === "rtl";
}
var platform = {
	convertOffsetParentRelativeRectToViewportRelativeRect,
	getDocumentElement,
	getClippingRect,
	getOffsetParent,
	getElementRects,
	getClientRects,
	getDimensions,
	getScale,
	isElement,
	isRTL
};
function rectsAreEqual(a, b) {
	return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove, ancestorResize) {
	let io = null;
	let timeoutId;
	const root = getDocumentElement(element);
	function cleanup() {
		var _io;
		clearTimeout(timeoutId);
		(_io = io) == null || _io.disconnect();
		io = null;
	}
	function refresh(skip, threshold) {
		if (skip === void 0) skip = false;
		if (threshold === void 0) threshold = 1;
		cleanup();
		const elementRectForRootMargin = element.getBoundingClientRect();
		const { left, top, width, height } = elementRectForRootMargin;
		if (!skip) onMove();
		if (!width || !height) return;
		const insetTop = floor(top);
		const insetRight = floor(root.clientWidth - (left + width));
		const insetBottom = floor(root.clientHeight - (top + height));
		const insetLeft = floor(left);
		const options = {
			rootMargin: -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px",
			threshold: max(0, min(1, threshold)) || 1
		};
		let isFirstUpdate = true;
		function handleObserve(entries) {
			const ratio = entries[0].intersectionRatio;
			if (!rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) return refresh();
			if (ratio !== threshold) {
				if (!isFirstUpdate) return refresh();
				if (!ratio) timeoutId = setTimeout(() => {
					refresh(false, 1e-7);
				}, 1e3);
				else refresh(false, ratio);
			}
			isFirstUpdate = false;
		}
		try {
			io = new IntersectionObserver(handleObserve, {
				...options,
				root: root.ownerDocument
			});
		} catch (_e) {
			io = new IntersectionObserver(handleObserve, options);
		}
		io.observe(element);
	}
	const win = getWindow(element);
	const handleResize = () => refresh(ancestorResize);
	win.addEventListener("resize", handleResize);
	refresh(true);
	return () => {
		win.removeEventListener("resize", handleResize);
		cleanup();
	};
}
/**
* Automatically updates the position of the floating element when necessary.
* Should only be called when the floating element is mounted on the DOM or
* visible on the screen.
* @returns cleanup function that should be invoked when the floating element is
* removed from the DOM or hidden from the screen.
* @see https://floating-ui.com/docs/autoUpdate
*/
function autoUpdate(reference, floating, update, options) {
	if (options === void 0) options = {};
	const { ancestorScroll = true, ancestorResize = true, elementResize = typeof ResizeObserver === "function", layoutShift = typeof IntersectionObserver === "function", animationFrame = false } = options;
	const referenceEl = unwrapElement(reference);
	const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...floating ? getOverflowAncestors(floating) : []] : [];
	ancestors.forEach((ancestor) => {
		ancestorScroll && ancestor.addEventListener("scroll", update);
		ancestorResize && ancestor.addEventListener("resize", update);
	});
	const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update, ancestorResize) : null;
	let reobserveFrame = -1;
	let resizeObserver = null;
	if (elementResize) {
		resizeObserver = new ResizeObserver((_ref) => {
			let [firstEntry] = _ref;
			if (firstEntry && firstEntry.target === referenceEl && resizeObserver && floating) {
				resizeObserver.unobserve(floating);
				cancelAnimationFrame(reobserveFrame);
				reobserveFrame = requestAnimationFrame(() => {
					var _resizeObserver;
					(_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
				});
			}
			update();
		});
		if (referenceEl && !animationFrame) resizeObserver.observe(referenceEl);
		if (floating) resizeObserver.observe(floating);
	}
	let frameId;
	let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
	if (animationFrame) frameLoop();
	function frameLoop() {
		const nextRefRect = getBoundingClientRect(reference);
		if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) update();
		prevRefRect = nextRefRect;
		frameId = requestAnimationFrame(frameLoop);
	}
	update();
	return () => {
		var _resizeObserver2;
		ancestors.forEach((ancestor) => {
			ancestorScroll && ancestor.removeEventListener("scroll", update);
			ancestorResize && ancestor.removeEventListener("resize", update);
		});
		cleanupIo?.();
		(_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
		resizeObserver = null;
		if (animationFrame) cancelAnimationFrame(frameId);
	};
}
/**
* Modifies the placement by translating the floating element along the
* specified axes.
* A number (shorthand for `mainAxis` or distance), or an axes configuration
* object may be passed.
* @see https://floating-ui.com/docs/offset
*/
var offset = offset$1;
/**
* Optimizes the visibility of the floating element by shifting it in order to
* keep it in view when it will overflow the clipping boundary.
* @see https://floating-ui.com/docs/shift
*/
var shift = shift$1;
/**
* Optimizes the visibility of the floating element by flipping the `placement`
* in order to keep it in view when the preferred placement(s) will overflow the
* clipping boundary. Alternative to `autoPlacement`.
* @see https://floating-ui.com/docs/flip
*/
var flip = flip$1;
/**
* Provides data that allows you to change the size of the floating element —
* for instance, prevent it from overflowing the clipping boundary or match the
* width of the reference element.
* @see https://floating-ui.com/docs/size
*/
var size = size$1;
/**
* Provides data to hide the floating element in applicable situations, such as
* when it is not in the same clipping context as the reference element.
* @see https://floating-ui.com/docs/hide
*/
var hide = hide$1;
/**
* Provides data to position an inner element of the floating element so that it
* appears centered to the reference element.
* @see https://floating-ui.com/docs/arrow
*/
var arrow = arrow$1;
/**
* Built-in `limiter` that will stop `shift()` at a certain point.
*/
var limitShift = limitShift$1;
/**
* Computes the `x` and `y` coordinates that will place the floating element
* next to a given reference element.
*/
var computePosition = (reference, floating, options) => {
	const cache = /* @__PURE__ */ new Map();
	const mergedOptions = options != null ? options : {};
	const platformWithCache = {
		...platform,
		...mergedOptions.platform,
		_c: cache
	};
	return computePosition$1(reference, floating, {
		...mergedOptions,
		platform: platformWithCache
	});
};
//#endregion
//#region node_modules/@zag-js/popper/dist/get-anchor.mjs
function createDOMRect(x = 0, y = 0, width = 0, height = 0) {
	if (typeof DOMRect === "function") return new DOMRect(x, y, width, height);
	const rect = {
		x,
		y,
		width,
		height,
		top: y,
		right: x + width,
		bottom: y + height,
		left: x
	};
	return {
		...rect,
		toJSON: () => rect
	};
}
function getDOMRect(anchorRect) {
	if (!anchorRect) return createDOMRect();
	const { x, y, width, height } = anchorRect;
	return createDOMRect(x, y, width, height);
}
function getAnchorElement(anchorElement, getAnchorRect) {
	return {
		contextElement: isHTMLElement$1(anchorElement) ? anchorElement : anchorElement?.contextElement,
		getBoundingClientRect: () => {
			const anchor = anchorElement;
			const anchorRect = getAnchorRect?.(anchor);
			if (anchorRect || !anchor) return getDOMRect(anchorRect);
			return anchor.getBoundingClientRect();
		}
	};
}
//#endregion
//#region node_modules/@zag-js/popper/dist/middleware.mjs
var toVar = (value) => ({
	variable: value,
	reference: `var(${value})`
});
var cssVars = {
	arrowSize: toVar("--arrow-size"),
	arrowSizeHalf: toVar("--arrow-size-half"),
	arrowBg: toVar("--arrow-background"),
	transformOrigin: toVar("--transform-origin"),
	arrowOffset: toVar("--arrow-offset")
};
var getSideAxis = (side) => side === "top" || side === "bottom" ? "y" : "x";
function createTransformOriginMiddleware(opts, arrowEl) {
	return {
		name: "transformOrigin",
		fn(state) {
			const { elements, middlewareData, placement, rects, y } = state;
			const side = placement.split("-")[0];
			const axis = getSideAxis(side);
			const arrowX = middlewareData.arrow?.x || 0;
			const arrowY = middlewareData.arrow?.y || 0;
			const arrowWidth = arrowEl?.clientWidth || 0;
			const arrowHeight = arrowEl?.clientHeight || 0;
			const transformX = arrowX + arrowWidth / 2;
			const transformY = arrowY + arrowHeight / 2;
			const shiftY = Math.abs(middlewareData.shift?.y || 0);
			const halfAnchorHeight = rects.reference.height / 2;
			const arrowOffset = arrowHeight / 2;
			const gutter = opts.offset?.mainAxis ?? opts.gutter;
			const sideOffsetValue = typeof gutter === "number" ? gutter + arrowOffset : gutter ?? arrowOffset;
			const isOverlappingAnchor = shiftY > sideOffsetValue;
			const adjacentTransformOrigin = {
				top: `${transformX}px calc(100% + ${sideOffsetValue}px)`,
				bottom: `${transformX}px ${-sideOffsetValue}px`,
				left: `calc(100% + ${sideOffsetValue}px) ${transformY}px`,
				right: `${-sideOffsetValue}px ${transformY}px`
			}[side];
			const overlapTransformOrigin = `${transformX}px ${rects.reference.y + halfAnchorHeight - y}px`;
			const useOverlap = Boolean(opts.overlap) && axis === "y" && isOverlappingAnchor;
			elements.floating.style.setProperty(cssVars.transformOrigin.variable, useOverlap ? overlapTransformOrigin : adjacentTransformOrigin);
			return { data: { transformOrigin: useOverlap ? overlapTransformOrigin : adjacentTransformOrigin } };
		}
	};
}
var rectMiddleware = {
	name: "rects",
	fn({ rects }) {
		return { data: rects };
	}
};
var shiftArrowMiddleware = (arrowEl) => {
	if (!arrowEl) return;
	return {
		name: "shiftArrow",
		fn({ placement, middlewareData }) {
			if (!middlewareData.arrow) return {};
			const { x, y } = middlewareData.arrow;
			const dir = placement.split("-")[0];
			Object.assign(arrowEl.style, {
				left: x != null ? `${x}px` : "",
				top: y != null ? `${y}px` : "",
				[dir]: `calc(100% + ${cssVars.arrowOffset.reference})`
			});
			return {};
		}
	};
};
//#endregion
//#region node_modules/@zag-js/popper/dist/placement.mjs
function getPlacementDetails(placement) {
	const [side, align] = placement.split("-");
	return {
		side,
		align,
		hasAlign: align != null
	};
}
function getPlacementSide(placement) {
	return placement.split("-")[0];
}
//#endregion
//#region node_modules/@zag-js/popper/dist/get-placement.mjs
var defaultOptions = {
	strategy: "absolute",
	placement: "bottom",
	listeners: true,
	restoreStyles: false,
	applyStyles: true,
	gutter: 8,
	flip: true,
	slide: true,
	overlap: false,
	sameWidth: false,
	fitViewport: false,
	overflowPadding: 8,
	arrowPadding: 4
};
function roundByDpr(win, value) {
	const dpr = win.devicePixelRatio || 1;
	return Math.round(value * dpr) / dpr;
}
function isApproximatelyEqual(a, b) {
	return a != null && Math.abs(a - b) < .5;
}
function resolveBoundaryOption(boundary) {
	if (typeof boundary === "function") return boundary();
	if (boundary === "clipping-ancestors") return "clippingAncestors";
	return boundary;
}
function getArrowMiddleware(arrowElement, doc, opts) {
	return arrow({
		element: arrowElement || doc.createElement("div"),
		padding: opts.arrowPadding
	});
}
function getOffsetMiddleware(arrowElement, opts) {
	if (isNull(opts.offset ?? opts.gutter)) return;
	return offset(({ placement }) => {
		const arrowOffset = (arrowElement?.clientHeight || 0) / 2;
		const gutter = opts.offset?.mainAxis ?? opts.gutter;
		const mainAxis = typeof gutter === "number" ? gutter + arrowOffset : gutter ?? arrowOffset;
		const { hasAlign } = getPlacementDetails(placement);
		const shift2 = !hasAlign ? opts.shift : void 0;
		return compact({
			crossAxis: opts.offset?.crossAxis ?? shift2,
			mainAxis,
			alignmentAxis: opts.shift
		});
	});
}
function getFlipMiddleware(opts) {
	if (!opts.flip) return;
	return flip(() => {
		const boundary = resolveBoundaryOption(opts.boundary);
		return {
			...boundary ? { boundary } : void 0,
			padding: opts.overflowPadding,
			fallbackPlacements: opts.flip === true ? void 0 : opts.flip
		};
	});
}
function getShiftMiddleware(opts) {
	if (!opts.slide && !opts.overlap) return;
	return shift(() => {
		const boundary = resolveBoundaryOption(opts.boundary);
		return {
			...boundary ? { boundary } : void 0,
			mainAxis: opts.slide,
			crossAxis: opts.overlap,
			padding: opts.overflowPadding,
			limiter: limitShift()
		};
	});
}
function getSizeMiddleware(opts) {
	if (opts.sizeMiddleware === false && !opts.sameWidth && !opts.fitViewport) return;
	let lastReferenceWidth;
	let lastReferenceHeight;
	let lastAvailableWidth;
	let lastAvailableHeight;
	return size(() => {
		const boundary = resolveBoundaryOption(opts.boundary);
		return {
			padding: opts.overflowPadding,
			...boundary ? { boundary } : void 0,
			apply({ elements, rects, availableHeight, availableWidth }) {
				const floating = elements.floating;
				const referenceWidth = Math.round(rects.reference.width);
				const referenceHeight = Math.round(rects.reference.height);
				availableWidth = Math.floor(availableWidth);
				availableHeight = Math.floor(availableHeight);
				if (!isApproximatelyEqual(lastReferenceWidth, referenceWidth)) {
					floating.style.setProperty("--reference-width", `${referenceWidth}px`);
					lastReferenceWidth = referenceWidth;
				}
				if (!isApproximatelyEqual(lastReferenceHeight, referenceHeight)) {
					floating.style.setProperty("--reference-height", `${referenceHeight}px`);
					lastReferenceHeight = referenceHeight;
				}
				if (!isApproximatelyEqual(lastAvailableWidth, availableWidth)) {
					floating.style.setProperty("--available-width", `${availableWidth}px`);
					lastAvailableWidth = availableWidth;
				}
				if (!isApproximatelyEqual(lastAvailableHeight, availableHeight)) {
					floating.style.setProperty("--available-height", `${availableHeight}px`);
					lastAvailableHeight = availableHeight;
				}
			}
		};
	});
}
function hideWhenDetachedMiddleware(opts) {
	if (!opts.hideWhenDetached) return;
	return hide(() => ({
		strategy: "referenceHidden",
		boundary: resolveBoundaryOption(opts.boundary) ?? "clippingAncestors"
	}));
}
function getAutoUpdateOptions(opts) {
	if (!opts) return {};
	if (opts === true) return {
		ancestorResize: true,
		ancestorScroll: true,
		elementResize: true,
		layoutShift: true
	};
	return opts;
}
var floatingStyleProps = [
	"transform",
	"visibility",
	"pointer-events",
	"--x",
	"--y",
	"--z-index",
	"--reference-width",
	"--reference-height",
	"--available-width",
	"--available-height",
	"--transform-origin"
];
var arrowStyleProps = [
	"top",
	"right",
	"bottom",
	"left"
];
function createStyleCleanup(el, props) {
	if (!el) return noop$1;
	const prev = new Map(props.map((prop) => [prop, el.style.getPropertyValue(prop)]));
	return () => {
		prev.forEach((value, prop) => {
			if (value) el.style.setProperty(prop, value);
			else el.style.removeProperty(prop);
		});
		if (el.style.length === 0) el.removeAttribute("style");
	};
}
function anchorIdentity(anchor) {
	if (anchor == null) return null;
	if (isHTMLElement$1(anchor)) return anchor;
	if (typeof anchor === "object" && anchor && "contextElement" in anchor && anchor.contextElement) return anchor.contextElement;
	return anchor;
}
function getPlacementImpl(referenceOrVirtual, floatingOrVirtual, opts = {}) {
	const resolveFloating = () => {
		return (typeof floatingOrVirtual === "function" ? floatingOrVirtual() : floatingOrVirtual) ?? null;
	};
	const resolveAnchor = () => {
		const raw = typeof referenceOrVirtual === "function" ? referenceOrVirtual() : referenceOrVirtual;
		return opts.getAnchorElement?.() ?? raw;
	};
	const resolveReference = () => {
		const anchor = resolveAnchor();
		if (!anchor && !opts.getAnchorRect) return null;
		return getAnchorElement(anchor, opts.getAnchorRect);
	};
	const options = Object.assign({}, defaultOptions, opts);
	let middleware = [];
	let cachedMiddlewareFloating = null;
	let restoreFloatingStyles;
	let restoreArrowStyles;
	function rebuildMiddlewareForFloating(floating) {
		restoreFloatingStyles?.();
		restoreArrowStyles?.();
		cachedMiddlewareFloating = floating;
		restoreFloatingStyles = options.restoreStyles ? createStyleCleanup(floating, floatingStyleProps) : void 0;
		const arrowEl = floating.querySelector("[data-part=arrow]");
		restoreArrowStyles = options.restoreStyles ? createStyleCleanup(arrowEl, arrowStyleProps) : void 0;
		middleware = [
			getOffsetMiddleware(arrowEl, options),
			getFlipMiddleware(options),
			getShiftMiddleware(options),
			getArrowMiddleware(arrowEl, floating.ownerDocument, options),
			shiftArrowMiddleware(arrowEl),
			createTransformOriginMiddleware({
				gutter: options.gutter,
				offset: options.offset,
				overlap: options.overlap
			}, arrowEl),
			getSizeMiddleware(options),
			hideWhenDetachedMiddleware(options),
			rectMiddleware
		];
	}
	const { placement, strategy, onComplete, onPositioned } = options;
	let lastX;
	let lastY;
	let zIndexComputed = false;
	let lastAnchorForObserve = void 0;
	let lastFloatingForObserve = void 0;
	let cancelAutoUpdate = noop$1;
	const autoUpdateOptions = getAutoUpdateOptions(options.listeners);
	function syncAutoUpdateObservers() {
		if (!options.listeners) return;
		const anchor = resolveAnchor();
		const reference = resolveReference();
		const floating = resolveFloating();
		if (!reference || !floating) return;
		if (anchorIdentity(anchor) !== anchorIdentity(lastAnchorForObserve) || floating !== lastFloatingForObserve) {
			cancelAutoUpdate();
			lastAnchorForObserve = anchor;
			lastFloatingForObserve = floating;
			cancelAutoUpdate = autoUpdate(reference, floating, runUpdate, autoUpdateOptions);
		}
	}
	async function updatePosition() {
		syncAutoUpdateObservers();
		const floating = resolveFloating();
		if (!floating) return;
		if (floating !== cachedMiddlewareFloating) {
			rebuildMiddlewareForFloating(floating);
			zIndexComputed = false;
		}
		const reference = resolveReference();
		if (!reference) return;
		const pos = await computePosition(reference, floating, {
			placement,
			middleware,
			strategy
		});
		const win = getWindow$1(floating);
		const x = roundByDpr(win, pos.x);
		const y = roundByDpr(win, pos.y);
		onComplete?.({
			...pos,
			x,
			y
		});
		if (options.applyStyles === false) return;
		if (!isApproximatelyEqual(lastX, x)) {
			floating.style.setProperty("--x", `${x}px`);
			lastX = x;
		}
		if (!isApproximatelyEqual(lastY, y)) {
			floating.style.setProperty("--y", `${y}px`);
			lastY = y;
		}
		if (options.hideWhenDetached) if (pos.middlewareData.hide?.referenceHidden) {
			floating.style.setProperty("visibility", "hidden");
			floating.style.setProperty("pointer-events", "none");
		} else {
			floating.style.removeProperty("visibility");
			floating.style.removeProperty("pointer-events");
		}
		if (!zIndexComputed) {
			const contentEl = floating.firstElementChild;
			if (contentEl) {
				floating.style.setProperty("--z-index", getComputedStyle$2(contentEl).zIndex);
				zIndexComputed = true;
			}
		}
	}
	async function runUpdate() {
		if (opts.updatePosition) {
			await opts.updatePosition({
				updatePosition,
				floatingElement: resolveFloating()
			});
			onPositioned?.({ placed: true });
		} else await updatePosition();
	}
	runUpdate();
	return () => {
		cancelAutoUpdate();
		restoreArrowStyles?.();
		restoreFloatingStyles?.();
		onPositioned?.({ placed: false });
	};
}
function getPlacement(referenceOrFn, floatingOrFn, opts = {}) {
	const { defer, ...options } = opts;
	const func = defer ? raf$1 : (v) => v();
	const cleanups = [];
	cleanups.push(func(() => {
		cleanups.push(getPlacementImpl(referenceOrFn, floatingOrFn, options));
	}));
	return () => {
		cleanups.forEach((fn) => fn?.());
	};
}
//#endregion
//#region node_modules/@zag-js/popper/dist/get-styles.mjs
var ARROW_FLOATING_STYLE = {
	bottom: "rotate(45deg)",
	left: "rotate(135deg)",
	top: "rotate(225deg)",
	right: "rotate(315deg)"
};
function getPlacementStyles(options = {}) {
	const { placement, sameWidth, fitViewport, strategy = "absolute" } = options;
	return {
		arrow: {
			position: "absolute",
			width: cssVars.arrowSize.reference,
			height: cssVars.arrowSize.reference,
			[cssVars.arrowSizeHalf.variable]: `calc(${cssVars.arrowSize.reference} / 2)`,
			[cssVars.arrowOffset.variable]: `calc(${cssVars.arrowSizeHalf.reference} * -1)`
		},
		arrowTip: {
			transform: placement ? ARROW_FLOATING_STYLE[placement.split("-")[0]] : void 0,
			background: cssVars.arrowBg.reference,
			top: "0",
			left: "0",
			width: "100%",
			height: "100%",
			position: "absolute",
			zIndex: "inherit"
		},
		floating: {
			position: strategy,
			isolation: "isolate",
			minWidth: sameWidth ? void 0 : "max-content",
			width: sameWidth ? "var(--reference-width)" : void 0,
			maxWidth: fitViewport ? "var(--available-width)" : void 0,
			maxHeight: fitViewport ? "var(--available-height)" : void 0,
			pointerEvents: !placement ? "none" : void 0,
			top: "0px",
			left: "0px",
			transform: placement ? "translate3d(var(--x), var(--y), 0)" : "translate3d(0, -100vh, 0)",
			zIndex: "var(--z-index)"
		}
	};
}
//#endregion
//#region node_modules/@zag-js/color-picker/dist/color-picker.dom.mjs
var getRootId = (ctx) => ctx.ids?.root ?? `color-picker:${ctx.id}`;
var getLabelId = (ctx) => ctx.ids?.label ?? `color-picker:${ctx.id}:label`;
var getHiddenInputId = (ctx) => ctx.ids?.hiddenInput ?? `color-picker:${ctx.id}:hidden-input`;
var getControlId = (ctx) => ctx.ids?.control ?? `color-picker:${ctx.id}:control`;
var getTriggerId$1 = (ctx) => ctx.ids?.trigger ?? `color-picker:${ctx.id}:trigger`;
var getContentId$1 = (ctx) => ctx.ids?.content ?? `color-picker:${ctx.id}:content`;
var getPositionerId$1 = (ctx) => ctx.ids?.positioner ?? `color-picker:${ctx.id}:positioner`;
var getFormatSelectId = (ctx) => ctx.ids?.formatSelect ?? `color-picker:${ctx.id}:format-select`;
var getAreaId = (ctx) => ctx.ids?.area ?? `color-picker:${ctx.id}:area`;
var getAreaGradientId = (ctx) => ctx.ids?.areaGradient ?? `color-picker:${ctx.id}:area-gradient`;
var getAreaThumbId = (ctx) => ctx.ids?.areaThumb ?? `color-picker:${ctx.id}:area-thumb`;
var getChannelSliderTrackId = (ctx, channel) => ctx.ids?.channelSliderTrack?.(channel) ?? `color-picker:${ctx.id}:slider-track:${channel}`;
var getChannelSliderThumbId = (ctx, channel) => ctx.ids?.channelSliderThumb?.(channel) ?? `color-picker:${ctx.id}:slider-thumb:${channel}`;
var getContentEl$1 = (ctx) => ctx.getById(getContentId$1(ctx));
var getAreaThumbEl = (ctx) => ctx.getById(getAreaThumbId(ctx));
var getChannelSliderThumbEl = (ctx, channel) => ctx.getById(getChannelSliderThumbId(ctx, channel));
var getFormatSelectEl = (ctx) => ctx.getById(getFormatSelectId(ctx));
var getHiddenInputEl = (ctx) => ctx.getById(getHiddenInputId(ctx));
var getAreaEl = (ctx) => ctx.getById(getAreaId(ctx));
var getAreaValueFromPoint = (ctx, point, dir) => {
	const areaEl = getAreaEl(ctx);
	if (!areaEl) return;
	const { getPercentValue } = getRelativePoint(point, areaEl);
	return {
		x: getPercentValue({
			dir,
			orientation: "horizontal"
		}),
		y: getPercentValue({ orientation: "vertical" })
	};
};
var getControlEl = (ctx) => ctx.getById(getControlId(ctx));
var getTriggerEl$1 = (ctx) => ctx.getById(getTriggerId$1(ctx));
var getPositionerEl$1 = (ctx) => ctx.getById(getPositionerId$1(ctx));
var getChannelSliderTrackEl = (ctx, channel) => ctx.getById(getChannelSliderTrackId(ctx, channel));
var getChannelSliderValueFromPoint = (ctx, point, channel, dir) => {
	const trackEl = getChannelSliderTrackEl(ctx, channel);
	if (!trackEl) return;
	const { getPercentValue } = getRelativePoint(point, trackEl);
	return {
		x: getPercentValue({
			dir,
			orientation: "horizontal"
		}),
		y: getPercentValue({ orientation: "vertical" })
	};
};
var getChannelInputEls = (ctx) => {
	return [...queryAll(getContentEl$1(ctx), "input[data-channel]"), ...queryAll(getControlEl(ctx), "input[data-channel]")];
};
//#endregion
//#region node_modules/@zag-js/color-picker/dist/utils/get-channel-display-color.mjs
function getChannelDisplayColor(color, channel) {
	switch (channel) {
		case "hue": return parseColor(`hsl(${color.getChannelValue("hue")}, 100%, 50%)`);
		case "lightness":
		case "brightness":
		case "saturation":
		case "red":
		case "green":
		case "blue": return color.withChannelValue("alpha", 1);
		case "alpha": return color;
		default: throw new Error("Unknown color channel: " + channel);
	}
}
//#endregion
//#region node_modules/@zag-js/color-picker/dist/utils/get-channel-input-value.mjs
function getChannelValue(color, channel) {
	if (channel == null) return "";
	if (channel === "hex") return color.toString("hex");
	if (channel === "css") return color.toString("css");
	if (channel in color) return color.getChannelValue(channel).toString();
	const isHSL = color.getFormat() === "hsla";
	switch (channel) {
		case "hue": return isHSL ? color.toFormat("hsla").getChannelValue("hue").toString() : color.toFormat("hsba").getChannelValue("hue").toString();
		case "saturation": return isHSL ? color.toFormat("hsla").getChannelValue("saturation").toString() : color.toFormat("hsba").getChannelValue("saturation").toString();
		case "lightness": return color.toFormat("hsla").getChannelValue("lightness").toString();
		case "brightness": return color.toFormat("hsba").getChannelValue("brightness").toString();
		case "red":
		case "green":
		case "blue": return color.toFormat("rgba").getChannelValue(channel).toString();
		default: return color.getChannelValue(channel).toString();
	}
}
function getChannelRange(color, channel) {
	switch (channel) {
		case "hex":
			const minColor = parseColor("#000000");
			const maxColor = parseColor("#FFFFFF");
			return {
				minValue: minColor.toHexInt(),
				maxValue: maxColor.toHexInt(),
				pageSize: 10,
				step: 1
			};
		case "css": return;
		case "hue":
		case "saturation":
		case "lightness": return color.toFormat("hsla").getChannelRange(channel);
		case "brightness": return color.toFormat("hsba").getChannelRange(channel);
		case "red":
		case "green":
		case "blue": return color.toFormat("rgba").getChannelRange(channel);
		default: return color.getChannelRange(channel);
	}
}
//#endregion
//#region node_modules/@zag-js/color-picker/dist/utils/get-slider-background.mjs
function getSliderBackgroundDirection(orientation, dir) {
	if (orientation === "vertical") return "top";
	else if (dir === "ltr") return "right";
	else return "left";
}
var getSliderBackground = (props) => {
	const { channel, value, dir, orientation } = props;
	const bgDirection = getSliderBackgroundDirection(orientation, dir);
	const { minValue, maxValue } = value.getChannelRange(channel);
	switch (channel) {
		case "hue": return `linear-gradient(to ${bgDirection}, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)`;
		case "lightness": return `linear-gradient(to ${bgDirection}, ${value.withChannelValue(channel, minValue).toString("css")}, ${value.withChannelValue(channel, (maxValue - minValue) / 2).toString("css")}, ${value.withChannelValue(channel, maxValue).toString("css")})`;
		case "saturation":
		case "brightness":
		case "red":
		case "green":
		case "blue":
		case "alpha": return `linear-gradient(to ${bgDirection}, ${value.withChannelValue(channel, minValue).toString("css")}, ${value.withChannelValue(channel, maxValue).toString("css")})`;
		default: throw new Error("Unknown color channel: " + channel);
	}
};
//#endregion
//#region node_modules/@zag-js/color-picker/dist/color-picker.connect.mjs
function connect$1(service, normalize) {
	const { context, send, prop, computed, state, scope } = service;
	const value = context.get("value");
	const format = context.get("format");
	const areaValue = computed("areaValue");
	const valueAsString = computed("valueAsString");
	const disabled = computed("disabled");
	const readOnly = !!prop("readOnly");
	const invalid = !!prop("invalid");
	const required = !!prop("required");
	const interactive = computed("interactive");
	const dragging = state.hasTag("dragging");
	const open = state.hasTag("open");
	const focused = state.hasTag("focused");
	const getAreaChannels = (props) => {
		const channels = areaValue.getChannels();
		return {
			xChannel: props.xChannel ?? channels[1],
			yChannel: props.yChannel ?? channels[2]
		};
	};
	const currentPlacement = context.get("currentPlacement");
	const currentPlacementSide = currentPlacement ? getPlacementSide(currentPlacement) : void 0;
	const popperStyles = getPlacementStyles({
		...prop("positioning"),
		placement: currentPlacement
	});
	function getSwatchTriggerState(props) {
		const color = normalizeColor(props.value).toFormat(context.get("format"));
		return {
			value: color,
			valueAsString: color.toString("hex"),
			checked: color.isEqual(value),
			disabled: props.disabled || !interactive
		};
	}
	return {
		dragging,
		open,
		valueAsString,
		value,
		inline: !!prop("inline"),
		setOpen(nextOpen) {
			if (prop("inline")) return;
			if (state.hasTag("open") === nextOpen) return;
			send({ type: nextOpen ? "OPEN" : "CLOSE" });
		},
		setValue(value2) {
			send({
				type: "VALUE.SET",
				value: normalizeColor(value2),
				src: "set-color"
			});
		},
		getChannelValue(channel) {
			return getChannelValue(value, channel);
		},
		getChannelValueText(channel, locale) {
			return value.formatChannelValue(channel, locale);
		},
		setChannelValue(channel, channelValue) {
			const color = value.withChannelValue(channel, channelValue);
			send({
				type: "VALUE.SET",
				value: color,
				src: "set-channel"
			});
		},
		format: context.get("format"),
		setFormat(format2) {
			const formatValue = value.toFormat(format2);
			send({
				type: "VALUE.SET",
				value: formatValue,
				src: "set-format"
			});
		},
		alpha: value.getChannelValue("alpha"),
		setAlpha(alphaValue) {
			const color = value.withChannelValue("alpha", alphaValue);
			send({
				type: "VALUE.SET",
				value: color,
				src: "set-alpha"
			});
		},
		getRootProps() {
			return normalize.element({
				...parts$1.root.attrs,
				dir: prop("dir"),
				id: getRootId(scope),
				"data-disabled": dataAttr(disabled),
				"data-readonly": dataAttr(readOnly),
				"data-invalid": dataAttr(invalid),
				style: { "--value": value.toString("css") }
			});
		},
		getLabelProps() {
			return normalize.element({
				...parts$1.label.attrs,
				dir: prop("dir"),
				id: getLabelId(scope),
				htmlFor: getHiddenInputId(scope),
				"data-disabled": dataAttr(disabled),
				"data-readonly": dataAttr(readOnly),
				"data-invalid": dataAttr(invalid),
				"data-required": dataAttr(required),
				"data-focus": dataAttr(focused),
				onClick(event) {
					event.preventDefault();
					query(getControlEl(scope), "[data-channel=hex]")?.focus({ preventScroll: true });
				}
			});
		},
		getControlProps() {
			return normalize.element({
				...parts$1.control.attrs,
				id: getControlId(scope),
				dir: prop("dir"),
				"data-disabled": dataAttr(disabled),
				"data-readonly": dataAttr(readOnly),
				"data-invalid": dataAttr(invalid),
				"data-state": open ? "open" : "closed",
				"data-focus": dataAttr(focused)
			});
		},
		getTriggerProps() {
			return normalize.button({
				...parts$1.trigger.attrs,
				id: getTriggerId$1(scope),
				dir: prop("dir"),
				disabled,
				"aria-label": `select color. current color is ${valueAsString}`,
				"aria-controls": getContentId$1(scope),
				"aria-labelledby": getLabelId(scope),
				"aria-haspopup": prop("inline") ? void 0 : "dialog",
				"data-disabled": dataAttr(disabled),
				"data-readonly": dataAttr(readOnly),
				"data-invalid": dataAttr(invalid),
				"data-placement": currentPlacement,
				"data-side": currentPlacementSide,
				"aria-expanded": open,
				"data-state": open ? "open" : "closed",
				"data-focus": dataAttr(focused),
				type: "button",
				onClick() {
					if (!interactive) return;
					send({ type: "TRIGGER.CLICK" });
				},
				onBlur() {
					if (!interactive) return;
					send({ type: "TRIGGER.BLUR" });
				},
				style: { position: "relative" }
			});
		},
		getPositionerProps() {
			return normalize.element({
				...parts$1.positioner.attrs,
				id: getPositionerId$1(scope),
				dir: prop("dir"),
				style: popperStyles.floating
			});
		},
		getContentProps() {
			return normalize.element({
				...parts$1.content.attrs,
				id: getContentId$1(scope),
				dir: prop("dir"),
				role: prop("inline") ? void 0 : "dialog",
				tabIndex: -1,
				"data-placement": currentPlacement,
				"data-side": currentPlacementSide,
				"data-state": open ? "open" : "closed",
				hidden: !open
			});
		},
		getValueTextProps() {
			return normalize.element({
				...parts$1.valueText.attrs,
				dir: prop("dir"),
				"data-disabled": dataAttr(disabled),
				"data-focus": dataAttr(focused)
			});
		},
		getAreaProps(props = {}) {
			const { xChannel, yChannel } = getAreaChannels(props);
			const { areaStyles } = getColorAreaGradient(areaValue, {
				xChannel,
				yChannel,
				dir: prop("dir")
			});
			return normalize.element({
				...parts$1.area.attrs,
				id: getAreaId(scope),
				role: "group",
				"data-invalid": dataAttr(invalid),
				"data-disabled": dataAttr(disabled),
				"data-readonly": dataAttr(readOnly),
				onPointerDown(event) {
					if (!interactive) return;
					if (!isLeftClick(event)) return;
					if (isModifierKey(event)) return;
					const point = getEventPoint(event);
					send({
						type: "AREA.POINTER_DOWN",
						point,
						channel: {
							xChannel,
							yChannel
						},
						id: "area"
					});
					event.preventDefault();
				},
				style: {
					position: "relative",
					touchAction: "none",
					forcedColorAdjust: "none",
					...areaStyles
				}
			});
		},
		getAreaBackgroundProps(props = {}) {
			const { xChannel, yChannel } = getAreaChannels(props);
			const { areaGradientStyles } = getColorAreaGradient(areaValue, {
				xChannel,
				yChannel,
				dir: prop("dir")
			});
			return normalize.element({
				...parts$1.areaBackground.attrs,
				id: getAreaGradientId(scope),
				"data-invalid": dataAttr(invalid),
				"data-disabled": dataAttr(disabled),
				"data-readonly": dataAttr(readOnly),
				style: {
					position: "relative",
					touchAction: "none",
					forcedColorAdjust: "none",
					...areaGradientStyles
				}
			});
		},
		getAreaThumbProps(props = {}) {
			const { xChannel, yChannel } = getAreaChannels(props);
			const channel = {
				xChannel,
				yChannel
			};
			const xPercent = areaValue.getChannelValuePercent(xChannel);
			const yPercent = 1 - areaValue.getChannelValuePercent(yChannel);
			const finalXPercent = prop("dir") === "rtl" ? 1 - xPercent : xPercent;
			const xValue = areaValue.getChannelValue(xChannel);
			const yValue = areaValue.getChannelValue(yChannel);
			const color = areaValue.withChannelValue("alpha", 1).toString("css");
			return normalize.element({
				...parts$1.areaThumb.attrs,
				id: getAreaThumbId(scope),
				dir: prop("dir"),
				tabIndex: disabled ? void 0 : 0,
				"data-disabled": dataAttr(disabled),
				"data-invalid": dataAttr(invalid),
				"data-readonly": dataAttr(readOnly),
				role: "slider",
				"aria-valuemin": 0,
				"aria-valuemax": 100,
				"aria-valuenow": xValue,
				"aria-label": `${xChannel} and ${yChannel}`,
				"aria-roledescription": "2d slider",
				"aria-valuetext": `${xChannel} ${xValue}, ${yChannel} ${yValue}`,
				style: {
					position: "absolute",
					left: `${finalXPercent * 100}%`,
					top: `${yPercent * 100}%`,
					transform: "translate(-50%, -50%)",
					touchAction: "none",
					forcedColorAdjust: "none",
					"--color": color,
					background: color
				},
				onFocus() {
					if (!interactive) return;
					send({
						type: "AREA.FOCUS",
						id: "area",
						channel
					});
				},
				onKeyDown(event) {
					if (event.defaultPrevented) return;
					if (!interactive) return;
					const step = getEventStep(event);
					const exec = {
						ArrowUp() {
							send({
								type: "AREA.ARROW_UP",
								channel,
								step
							});
						},
						ArrowDown() {
							send({
								type: "AREA.ARROW_DOWN",
								channel,
								step
							});
						},
						ArrowLeft() {
							send({
								type: "AREA.ARROW_LEFT",
								channel,
								step
							});
						},
						ArrowRight() {
							send({
								type: "AREA.ARROW_RIGHT",
								channel,
								step
							});
						},
						PageUp() {
							send({
								type: "AREA.PAGE_UP",
								channel,
								step
							});
						},
						PageDown() {
							send({
								type: "AREA.PAGE_DOWN",
								channel,
								step
							});
						},
						Escape(event2) {
							event2.stopPropagation();
						}
					}[getEventKey(event, { dir: prop("dir") })];
					if (exec) {
						exec(event);
						event.preventDefault();
					}
				}
			});
		},
		getTransparencyGridProps(props = {}) {
			const { size = "12px" } = props;
			return normalize.element({
				...parts$1.transparencyGrid.attrs,
				style: {
					"--size": size,
					width: "100%",
					height: "100%",
					position: "absolute",
					backgroundColor: "#fff",
					backgroundImage: "conic-gradient(#eeeeee 0 25%, transparent 0 50%, #eeeeee 0 75%, transparent 0)",
					backgroundSize: "var(--size) var(--size)",
					inset: "0px",
					zIndex: "auto",
					pointerEvents: "none"
				}
			});
		},
		getChannelSliderProps(props) {
			const { orientation = "horizontal", channel, format: format2 } = props;
			return normalize.element({
				...parts$1.channelSlider.attrs,
				"data-channel": channel,
				"data-orientation": orientation,
				role: "presentation",
				onPointerDown(event) {
					if (!interactive) return;
					if (!isLeftClick(event)) return;
					if (isModifierKey(event)) return;
					const point = getEventPoint(event);
					send({
						type: "CHANNEL_SLIDER.POINTER_DOWN",
						channel,
						format: format2,
						point,
						id: channel,
						orientation
					});
					event.preventDefault();
				},
				style: {
					position: "relative",
					touchAction: "none"
				}
			});
		},
		getChannelSliderTrackProps(props) {
			const { orientation = "horizontal", channel, format: format2 } = props;
			const normalizedValue = format2 ? value.toFormat(format2) : areaValue;
			return normalize.element({
				...parts$1.channelSliderTrack.attrs,
				id: getChannelSliderTrackId(scope, channel),
				role: "group",
				"data-channel": channel,
				"data-orientation": orientation,
				style: {
					position: "relative",
					forcedColorAdjust: "none",
					backgroundImage: getSliderBackground({
						orientation,
						channel,
						dir: prop("dir"),
						value: normalizedValue
					})
				}
			});
		},
		getChannelSliderLabelProps(props) {
			const { channel } = props;
			return normalize.element({
				...parts$1.channelSliderLabel.attrs,
				"data-channel": channel,
				onClick(event) {
					if (!interactive) return;
					event.preventDefault();
					const thumbId = getChannelSliderThumbId(scope, channel);
					scope.getById(thumbId)?.focus({ preventScroll: true });
				},
				style: {
					userSelect: "none",
					WebkitUserSelect: "none"
				}
			});
		},
		getChannelSliderValueTextProps(props) {
			return normalize.element({
				...parts$1.channelSliderValueText.attrs,
				"data-channel": props.channel
			});
		},
		getChannelSliderThumbProps(props) {
			const { orientation = "horizontal", channel, format: format2 } = props;
			const normalizedValue = format2 ? value.toFormat(format2) : areaValue;
			const channelRange = normalizedValue.getChannelRange(channel);
			const channelValue = normalizedValue.getChannelValue(channel);
			const offset = (channelValue - channelRange.minValue) / (channelRange.maxValue - channelRange.minValue);
			const isRtl = prop("dir") === "rtl";
			const finalOffset = orientation === "horizontal" && isRtl ? 1 - offset : offset;
			const placementStyles = orientation === "horizontal" ? {
				left: `${finalOffset * 100}%`,
				top: "50%"
			} : {
				top: `${offset * 100}%`,
				left: "50%"
			};
			return normalize.element({
				...parts$1.channelSliderThumb.attrs,
				id: getChannelSliderThumbId(scope, channel),
				role: "slider",
				"aria-label": channel,
				tabIndex: disabled ? void 0 : 0,
				"data-channel": channel,
				"data-disabled": dataAttr(disabled),
				"data-orientation": orientation,
				"aria-disabled": dataAttr(disabled),
				"aria-orientation": orientation,
				"aria-valuemax": channelRange.maxValue,
				"aria-valuemin": channelRange.minValue,
				"aria-valuenow": channelValue,
				"aria-valuetext": `${channel} ${channelValue}`,
				style: {
					forcedColorAdjust: "none",
					position: "absolute",
					background: getChannelDisplayColor(areaValue, channel).toString("css"),
					...placementStyles
				},
				onFocus() {
					if (!interactive) return;
					send({
						type: "CHANNEL_SLIDER.FOCUS",
						channel
					});
				},
				onKeyDown(event) {
					if (event.defaultPrevented) return;
					if (!interactive) return;
					const step = getEventStep(event) * channelRange.step;
					const exec = {
						ArrowUp() {
							send({
								type: "CHANNEL_SLIDER.ARROW_UP",
								channel,
								step
							});
						},
						ArrowDown() {
							send({
								type: "CHANNEL_SLIDER.ARROW_DOWN",
								channel,
								step
							});
						},
						ArrowLeft() {
							send({
								type: "CHANNEL_SLIDER.ARROW_LEFT",
								channel,
								step
							});
						},
						ArrowRight() {
							send({
								type: "CHANNEL_SLIDER.ARROW_RIGHT",
								channel,
								step
							});
						},
						PageUp() {
							send({
								type: "CHANNEL_SLIDER.PAGE_UP",
								channel
							});
						},
						PageDown() {
							send({
								type: "CHANNEL_SLIDER.PAGE_DOWN",
								channel
							});
						},
						Home() {
							send({
								type: "CHANNEL_SLIDER.HOME",
								channel
							});
						},
						End() {
							send({
								type: "CHANNEL_SLIDER.END",
								channel
							});
						},
						Escape(event2) {
							event2.stopPropagation();
						}
					}[getEventKey(event, { dir: prop("dir") })];
					if (exec) {
						exec(event);
						event.preventDefault();
					}
				}
			});
		},
		getChannelInputProps(props) {
			const { channel } = props;
			const isTextField = channel === "hex" || channel === "css";
			const channelRange = getChannelRange(value, channel);
			return normalize.input({
				...parts$1.channelInput.attrs,
				dir: prop("dir"),
				type: isTextField ? "text" : "number",
				"data-channel": channel,
				"aria-label": channel,
				spellCheck: false,
				autoComplete: "off",
				disabled,
				"data-disabled": dataAttr(disabled),
				"data-invalid": dataAttr(invalid),
				"data-readonly": dataAttr(readOnly),
				readOnly,
				defaultValue: getChannelValue(value, channel),
				min: channelRange?.minValue,
				max: channelRange?.maxValue,
				step: channelRange?.step,
				onBeforeInput(event) {
					if (isTextField || !interactive) return;
					if (event.currentTarget.value.match(/[^0-9.]/g)) event.preventDefault();
				},
				onFocus(event) {
					if (!interactive) return;
					send({
						type: "CHANNEL_INPUT.FOCUS",
						channel
					});
					event.currentTarget.select();
				},
				onBlur(event) {
					if (!interactive) return;
					const value2 = isTextField ? event.currentTarget.value : event.currentTarget.valueAsNumber;
					send({
						type: "CHANNEL_INPUT.BLUR",
						channel,
						value: value2,
						isTextField
					});
				},
				onKeyDown(event) {
					if (event.defaultPrevented) return;
					if (!interactive) return;
					if (isComposingEvent(event)) return;
					if (event.key === "Enter") {
						const value2 = isTextField ? event.currentTarget.value : event.currentTarget.valueAsNumber;
						send({
							type: "CHANNEL_INPUT.CHANGE",
							channel,
							value: value2,
							isTextField
						});
						event.preventDefault();
					}
				},
				style: {
					appearance: "none",
					WebkitAppearance: "none",
					MozAppearance: "textfield"
				}
			});
		},
		getHiddenInputProps() {
			return normalize.input({
				type: "text",
				disabled,
				name: prop("name"),
				tabIndex: -1,
				readOnly,
				required,
				id: getHiddenInputId(scope),
				style: visuallyHiddenStyle,
				defaultValue: valueAsString
			});
		},
		getEyeDropperTriggerProps() {
			return normalize.button({
				...parts$1.eyeDropperTrigger.attrs,
				type: "button",
				dir: prop("dir"),
				disabled,
				"data-disabled": dataAttr(disabled),
				"data-invalid": dataAttr(invalid),
				"data-readonly": dataAttr(readOnly),
				"aria-label": "Pick a color from the screen",
				onClick() {
					if (!interactive) return;
					send({ type: "EYEDROPPER.CLICK" });
				}
			});
		},
		getSwatchGroupProps() {
			return normalize.element({
				...parts$1.swatchGroup.attrs,
				role: "group"
			});
		},
		getSwatchTriggerState,
		getSwatchTriggerProps(props) {
			const swatchState = getSwatchTriggerState(props);
			return normalize.button({
				...parts$1.swatchTrigger.attrs,
				disabled: swatchState.disabled,
				dir: prop("dir"),
				type: "button",
				"aria-label": `select ${swatchState.valueAsString} as the color`,
				"data-state": swatchState.checked ? "checked" : "unchecked",
				"data-value": swatchState.valueAsString,
				"data-disabled": dataAttr(swatchState.disabled),
				onClick() {
					if (swatchState.disabled) return;
					send({
						type: "SWATCH_TRIGGER.CLICK",
						value: swatchState.value
					});
				},
				style: {
					"--color": swatchState.valueAsString,
					position: "relative"
				}
			});
		},
		getSwatchIndicatorProps(props) {
			const swatchState = getSwatchTriggerState(props);
			return normalize.element({
				...parts$1.swatchIndicator.attrs,
				dir: prop("dir"),
				hidden: !swatchState.checked
			});
		},
		getSwatchProps(props) {
			const { respectAlpha = true } = props;
			const swatchState = getSwatchTriggerState(props);
			const color = swatchState.value.toString(respectAlpha ? "css" : "hex");
			return normalize.element({
				...parts$1.swatch.attrs,
				dir: prop("dir"),
				"data-state": swatchState.checked ? "checked" : "unchecked",
				"data-value": swatchState.valueAsString,
				style: {
					"--color": color,
					position: "relative",
					background: color
				}
			});
		},
		getFormatTriggerProps() {
			return normalize.button({
				...parts$1.formatTrigger.attrs,
				dir: prop("dir"),
				type: "button",
				"aria-label": `change color format to ${getNextFormat(format)}`,
				onClick(event) {
					if (event.currentTarget.disabled) return;
					const nextFormat = getNextFormat(format);
					send({
						type: "FORMAT.SET",
						format: nextFormat,
						src: "format-trigger"
					});
				}
			});
		},
		getFormatSelectProps() {
			return normalize.select({
				...parts$1.formatSelect.attrs,
				"aria-label": "change color format",
				dir: prop("dir"),
				defaultValue: prop("format"),
				disabled,
				onChange(event) {
					const format2 = assertFormat(event.currentTarget.value);
					send({
						type: "FORMAT.SET",
						format: format2,
						src: "format-select"
					});
				}
			});
		}
	};
}
var formats = [
	"hsba",
	"hsla",
	"rgba"
];
var formatRegex = new RegExp(`^(${formats.join("|")})$`);
function getNextFormat(format) {
	return formats[formats.indexOf(format) + 1] ?? formats[0];
}
function assertFormat(format) {
	if (formatRegex.test(format)) return format;
	throw new Error(`Unsupported color format: ${format}`);
}
//#endregion
//#region node_modules/@zag-js/color-picker/dist/color-picker.parse.mjs
var parse = (colorString) => {
	return parseColor(colorString);
};
//#endregion
//#region node_modules/@zag-js/color-picker/dist/utils/is-valid-hex.mjs
var HEX_REGEX = /^[0-9a-fA-F]{3,8}$/;
function isValidHex(value) {
	return HEX_REGEX.test(value);
}
function prefixHex(value) {
	if (value.startsWith("#")) return value;
	if (isValidHex(value)) return `#${value}`;
	return value;
}
//#endregion
//#region node_modules/@zag-js/color-picker/dist/color-picker.machine.mjs
var { and } = createGuards();
var hashObject = (obj) => {
	let hash = "";
	for (const key in obj) hash += `${key}:${obj[key] ?? ""};`;
	return hash;
};
var DEFAULT_COLOR = parse("#000000");
var machine$1 = createMachine({
	props({ props }) {
		return {
			dir: "ltr",
			defaultValue: DEFAULT_COLOR,
			defaultFormat: (props.value ?? props.defaultValue ?? DEFAULT_COLOR).getFormat(),
			openAutoFocus: true,
			...props,
			positioning: {
				placement: "bottom",
				...props.positioning
			}
		};
	},
	initialState({ prop }) {
		return prop("open") || prop("defaultOpen") || prop("inline") ? "open" : "idle";
	},
	context({ prop, bindable, getContext }) {
		return {
			value: bindable(() => ({
				defaultValue: prop("defaultValue").toFormat(prop("format") ?? prop("defaultFormat")),
				value: prop("value")?.toFormat(prop("format") ?? prop("defaultFormat")),
				isEqual(a, b) {
					return b != null && a.isEqual(b);
				},
				hash(a) {
					return hashObject(a.toJSON());
				},
				onChange(value) {
					const format = getContext().get("format");
					prop("onValueChange")?.({
						value,
						valueAsString: value.toString(format)
					});
				}
			})),
			format: bindable(() => ({
				defaultValue: prop("defaultFormat"),
				value: prop("format"),
				onChange(format) {
					prop("onFormatChange")?.({ format });
				}
			})),
			activeId: bindable(() => ({ defaultValue: null })),
			activeChannel: bindable(() => ({ defaultValue: null })),
			activeOrientation: bindable(() => ({ defaultValue: null })),
			fieldsetDisabled: bindable(() => ({ defaultValue: false })),
			restoreFocus: bindable(() => ({ defaultValue: true })),
			currentPlacement: bindable(() => ({ defaultValue: void 0 }))
		};
	},
	computed: {
		rtl: ({ prop }) => prop("dir") === "rtl",
		disabled: ({ prop, context }) => !!prop("disabled") || context.get("fieldsetDisabled"),
		interactive: ({ prop }) => !(prop("disabled") || prop("readOnly")),
		valueAsString: ({ context }) => context.get("value").toString(context.get("format")),
		areaValue: ({ context }) => {
			const format = context.get("format").startsWith("hsl") ? "hsla" : "hsba";
			return context.get("value").toFormat(format);
		}
	},
	effects: ["trackFormControl"],
	watch({ prop, context, action, track }) {
		track([() => context.hash("value")], () => {
			action(["syncInputElements", "dispatchChangeEvent"]);
		});
		track([() => context.get("format")], () => {
			action(["syncFormatSelectElement", "syncValueWithFormat"]);
		});
		track([() => prop("open")], () => {
			action(["toggleVisibility"]);
		});
	},
	on: {
		"VALUE.SET": { actions: ["setValue"] },
		"FORMAT.SET": { actions: ["setFormat"] },
		"CHANNEL_INPUT.CHANGE": { actions: ["setChannelColorFromInput"] },
		"EYEDROPPER.CLICK": { actions: ["openEyeDropper"] },
		"SWATCH_TRIGGER.CLICK": { actions: ["setValue"] }
	},
	states: {
		idle: {
			tags: ["closed"],
			on: {
				"CONTROLLED.OPEN": {
					target: "open",
					actions: ["setInitialFocus"]
				},
				OPEN: [{
					guard: "isOpenControlled",
					actions: ["invokeOnOpen"]
				}, {
					target: "open",
					actions: ["invokeOnOpen", "setInitialFocus"]
				}],
				"TRIGGER.CLICK": [{
					guard: "isOpenControlled",
					actions: ["invokeOnOpen"]
				}, {
					target: "open",
					actions: ["invokeOnOpen", "setInitialFocus"]
				}],
				"CHANNEL_INPUT.FOCUS": {
					target: "focused",
					actions: ["setActiveChannel"]
				}
			}
		},
		focused: {
			id: "color-picker-focused",
			tags: ["closed", "focused"],
			on: {
				"CONTROLLED.OPEN": {
					target: "open",
					actions: ["setInitialFocus"]
				},
				OPEN: [{
					guard: "isOpenControlled",
					actions: ["invokeOnOpen"]
				}, {
					target: "open",
					actions: ["invokeOnOpen", "setInitialFocus"]
				}],
				"TRIGGER.CLICK": [{
					guard: "isOpenControlled",
					actions: ["invokeOnOpen"]
				}, {
					target: "open",
					actions: ["invokeOnOpen", "setInitialFocus"]
				}],
				"CHANNEL_INPUT.FOCUS": { actions: ["setActiveChannel"] },
				"CHANNEL_INPUT.BLUR": {
					target: "idle",
					actions: ["setChannelColorFromInput"]
				},
				"TRIGGER.BLUR": { target: "idle" }
			}
		},
		open: {
			tags: ["open"],
			effects: ["trackPositioning", "trackDismissableElement"],
			initial: "idle",
			on: {
				"CONTROLLED.CLOSE": [{
					guard: "shouldRestoreFocus",
					target: "focused",
					actions: ["setReturnFocus"]
				}, { target: "idle" }],
				INTERACT_OUTSIDE: [
					{
						guard: "isOpenControlled",
						actions: ["invokeOnClose"]
					},
					{
						guard: "shouldRestoreFocus",
						target: "focused",
						actions: ["invokeOnClose", "setReturnFocus"]
					},
					{
						target: "idle",
						actions: ["invokeOnClose"]
					}
				],
				CLOSE: [{
					guard: "isOpenControlled",
					actions: ["invokeOnClose"]
				}, {
					target: "idle",
					actions: ["invokeOnClose"]
				}]
			},
			states: {
				idle: { on: {
					"TRIGGER.CLICK": [{
						guard: "isOpenControlled",
						actions: ["invokeOnClose"]
					}, {
						target: "#color-picker-focused",
						actions: ["invokeOnClose"]
					}],
					"AREA.POINTER_DOWN": {
						target: "dragging",
						actions: [
							"setActiveChannel",
							"setAreaColorFromPoint",
							"focusAreaThumb"
						]
					},
					"AREA.FOCUS": { actions: ["setActiveChannel"] },
					"CHANNEL_SLIDER.POINTER_DOWN": {
						target: "dragging",
						actions: [
							"setActiveChannel",
							"setChannelColorFromPoint",
							"focusChannelThumb"
						]
					},
					"CHANNEL_SLIDER.FOCUS": { actions: ["setActiveChannel"] },
					"AREA.ARROW_LEFT": { actions: ["decrementAreaXChannel"] },
					"AREA.ARROW_RIGHT": { actions: ["incrementAreaXChannel"] },
					"AREA.ARROW_UP": { actions: ["incrementAreaYChannel"] },
					"AREA.ARROW_DOWN": { actions: ["decrementAreaYChannel"] },
					"AREA.PAGE_UP": { actions: ["incrementAreaXChannel"] },
					"AREA.PAGE_DOWN": { actions: ["decrementAreaXChannel"] },
					"CHANNEL_SLIDER.ARROW_LEFT": { actions: ["decrementChannel"] },
					"CHANNEL_SLIDER.ARROW_RIGHT": { actions: ["incrementChannel"] },
					"CHANNEL_SLIDER.ARROW_UP": { actions: ["incrementChannel"] },
					"CHANNEL_SLIDER.ARROW_DOWN": { actions: ["decrementChannel"] },
					"CHANNEL_SLIDER.PAGE_UP": { actions: ["incrementChannel"] },
					"CHANNEL_SLIDER.PAGE_DOWN": { actions: ["decrementChannel"] },
					"CHANNEL_SLIDER.HOME": { actions: ["setChannelToMin"] },
					"CHANNEL_SLIDER.END": { actions: ["setChannelToMax"] },
					"CHANNEL_INPUT.BLUR": { actions: ["setChannelColorFromInput"] },
					"SWATCH_TRIGGER.CLICK": [
						{
							guard: and("isOpenControlled", "closeOnSelect"),
							actions: ["setValue", "invokeOnClose"]
						},
						{
							guard: "closeOnSelect",
							target: "focused",
							actions: [
								"setValue",
								"invokeOnClose",
								"setReturnFocus"
							]
						},
						{ actions: ["setValue"] }
					]
				} },
				dragging: {
					tags: ["dragging"],
					exit: ["clearActiveChannel"],
					effects: ["trackPointerMove", "disableTextSelection"],
					on: {
						"AREA.POINTER_MOVE": { actions: ["setAreaColorFromPoint", "focusAreaThumb"] },
						"AREA.POINTER_UP": {
							target: "idle",
							actions: ["invokeOnChangeEnd"]
						},
						"CHANNEL_SLIDER.POINTER_MOVE": { actions: ["setChannelColorFromPoint", "focusChannelThumb"] },
						"CHANNEL_SLIDER.POINTER_UP": {
							target: "idle",
							actions: ["invokeOnChangeEnd"]
						}
					}
				}
			}
		}
	},
	implementations: {
		guards: {
			closeOnSelect: ({ prop }) => !!prop("closeOnSelect"),
			isOpenControlled: ({ prop }) => prop("open") != null || !!prop("inline"),
			shouldRestoreFocus: ({ context }) => !!context.get("restoreFocus")
		},
		effects: {
			trackPositioning({ context, prop, scope }) {
				if (prop("inline")) return;
				if (!context.get("currentPlacement")) context.set("currentPlacement", prop("positioning")?.placement);
				const anchorEl = getTriggerEl$1(scope);
				const getPositionerEl2 = () => getPositionerEl$1(scope);
				return getPlacement(anchorEl, getPositionerEl2, {
					...prop("positioning"),
					defer: true,
					onComplete(data) {
						context.set("currentPlacement", data.placement);
					}
				});
			},
			trackDismissableElement({ context, scope, prop, send }) {
				if (prop("inline")) return;
				const getContentEl2 = () => getContentEl$1(scope);
				return trackDismissableElement(getContentEl2, {
					type: "popover",
					exclude: getTriggerEl$1(scope),
					defer: true,
					onInteractOutside(event) {
						prop("onInteractOutside")?.(event);
						if (event.defaultPrevented) return;
						context.set("restoreFocus", !(event.detail.focusable || event.detail.contextmenu));
					},
					onPointerDownOutside: prop("onPointerDownOutside"),
					onFocusOutside: prop("onFocusOutside"),
					onDismiss() {
						send({ type: "INTERACT_OUTSIDE" });
					}
				});
			},
			trackFormControl({ context, scope, send }) {
				return trackFormControl(getHiddenInputEl(scope), {
					onFieldsetDisabledChange(disabled) {
						context.set("fieldsetDisabled", disabled);
					},
					onFormReset() {
						send({
							type: "VALUE.SET",
							value: context.initial("value"),
							src: "form.reset"
						});
					}
				});
			},
			trackPointerMove({ context, scope, event, send }) {
				return trackPointerMove(scope.getDoc(), {
					onPointerMove({ point }) {
						send({
							type: context.get("activeId") === "area" ? "AREA.POINTER_MOVE" : "CHANNEL_SLIDER.POINTER_MOVE",
							point,
							format: event.format,
							orientation: context.get("activeOrientation") ?? void 0
						});
					},
					onPointerUp() {
						send({ type: context.get("activeId") === "area" ? "AREA.POINTER_UP" : "CHANNEL_SLIDER.POINTER_UP" });
					}
				});
			},
			disableTextSelection({ scope }) {
				return disableTextSelection({
					doc: scope.getDoc(),
					target: getContentEl$1(scope)
				});
			}
		},
		actions: {
			openEyeDropper({ scope, context, prop }) {
				const win = scope.getWin();
				if (!("EyeDropper" in win)) return;
				new win.EyeDropper().open().then(({ sRGBHex }) => {
					const format = context.get("value").getFormat();
					const color = parseColor(sRGBHex).toFormat(format);
					context.set("value", color);
					return color;
				}).then((value) => {
					prop("onValueChangeEnd")?.({
						value,
						valueAsString: value.toString(context.get("format"))
					});
				}).catch(() => void 0);
			},
			setActiveChannel({ context, event }) {
				context.set("activeId", event.id);
				if (event.channel) context.set("activeChannel", event.channel);
				if (event.orientation) context.set("activeOrientation", event.orientation);
			},
			clearActiveChannel({ context }) {
				context.set("activeChannel", null);
				context.set("activeId", null);
				context.set("activeOrientation", null);
			},
			setAreaColorFromPoint({ context, event, computed, scope, prop }) {
				const v = event.format ? context.get("value").toFormat(event.format) : computed("areaValue");
				const { xChannel, yChannel } = event.channel || context.get("activeChannel");
				const percent = getAreaValueFromPoint(scope, event.point, prop("dir"));
				if (!percent) return;
				const xValue = v.getChannelPercentValue(xChannel, percent.x);
				const yValue = v.getChannelPercentValue(yChannel, 1 - percent.y);
				const color = v.withChannelValue(xChannel, xValue).withChannelValue(yChannel, yValue);
				context.set("value", color);
			},
			setChannelColorFromPoint({ context, event, computed, scope, prop }) {
				const channel = event.channel || context.get("activeId");
				const normalizedValue = event.format ? context.get("value").toFormat(event.format) : computed("areaValue");
				const percent = getChannelSliderValueFromPoint(scope, event.point, channel, prop("dir"));
				if (!percent) return;
				const channelPercent = (event.orientation || context.get("activeOrientation") || "horizontal") === "horizontal" ? percent.x : percent.y;
				const value = normalizedValue.getChannelPercentValue(channel, channelPercent);
				const color = normalizedValue.withChannelValue(channel, value);
				context.set("value", color);
			},
			setValue({ context, event }) {
				const format = context.get("format");
				context.set("value", event.value.toFormat(format));
			},
			setFormat({ context, event }) {
				context.set("format", event.format);
			},
			dispatchChangeEvent({ scope, computed }) {
				dispatchInputValueEvent(getHiddenInputEl(scope), { value: computed("valueAsString") });
			},
			syncInputElements({ context, scope }) {
				syncChannelInputs(scope, context.get("value"));
			},
			invokeOnChangeEnd({ context, prop, computed }) {
				prop("onValueChangeEnd")?.({
					value: context.get("value"),
					valueAsString: computed("valueAsString")
				});
			},
			setChannelColorFromInput({ context, event, scope, prop }) {
				const { channel, isTextField, value } = event;
				const currentAlpha = context.get("value").getChannelValue("alpha");
				let color;
				if (channel === "alpha") {
					let valueAsNumber = parseFloat(value);
					valueAsNumber = Number.isNaN(valueAsNumber) ? currentAlpha : valueAsNumber;
					color = context.get("value").withChannelValue("alpha", valueAsNumber);
				} else if (isTextField) color = tryCatch(() => {
					return parse(channel === "hex" ? prefixHex(value) : value).withChannelValue("alpha", currentAlpha);
				}, () => context.get("value"));
				else {
					const current = context.get("value").toFormat(context.get("format"));
					const valueAsNumber = Number.isNaN(value) ? current.getChannelValue(channel) : value;
					color = current.withChannelValue(channel, valueAsNumber);
				}
				syncChannelInputs(scope, context.get("value"), color);
				context.set("value", color);
				prop("onValueChangeEnd")?.({
					value: color,
					valueAsString: color.toString(context.get("format"))
				});
			},
			incrementChannel({ context, event }) {
				const color = context.get("value").incrementChannel(event.channel, event.step);
				context.set("value", color);
			},
			decrementChannel({ context, event }) {
				const color = context.get("value").decrementChannel(event.channel, event.step);
				context.set("value", color);
			},
			incrementAreaXChannel({ context, event, computed }) {
				const { xChannel } = event.channel;
				const color = computed("areaValue").incrementChannel(xChannel, event.step);
				context.set("value", color);
			},
			decrementAreaXChannel({ context, event, computed }) {
				const { xChannel } = event.channel;
				const color = computed("areaValue").decrementChannel(xChannel, event.step);
				context.set("value", color);
			},
			incrementAreaYChannel({ context, event, computed }) {
				const { yChannel } = event.channel;
				const color = computed("areaValue").incrementChannel(yChannel, event.step);
				context.set("value", color);
			},
			decrementAreaYChannel({ context, event, computed }) {
				const { yChannel } = event.channel;
				const color = computed("areaValue").decrementChannel(yChannel, event.step);
				context.set("value", color);
			},
			setChannelToMax({ context, event }) {
				const value = context.get("value");
				const range = value.getChannelRange(event.channel);
				const color = value.withChannelValue(event.channel, range.maxValue);
				context.set("value", color);
			},
			setChannelToMin({ context, event }) {
				const value = context.get("value");
				const range = value.getChannelRange(event.channel);
				const color = value.withChannelValue(event.channel, range.minValue);
				context.set("value", color);
			},
			focusAreaThumb({ scope }) {
				raf$1(() => {
					getAreaThumbEl(scope)?.focus({ preventScroll: true });
				});
			},
			focusChannelThumb({ event, scope }) {
				raf$1(() => {
					getChannelSliderThumbEl(scope, event.channel)?.focus({ preventScroll: true });
				});
			},
			setInitialFocus({ prop, scope }) {
				if (!prop("openAutoFocus")) return;
				raf$1(() => {
					getInitialFocus({
						root: getContentEl$1(scope),
						getInitialEl: prop("initialFocusEl")
					})?.focus({ preventScroll: true });
				});
			},
			setReturnFocus({ scope }) {
				raf$1(() => {
					getTriggerEl$1(scope)?.focus({ preventScroll: true });
				});
			},
			syncFormatSelectElement({ context, scope }) {
				syncFormatSelect(scope, context.get("format"));
			},
			syncValueWithFormat({ context }) {
				const value = context.get("value");
				const newValue = value.toFormat(context.get("format"));
				if (newValue.isEqual(value)) return;
				context.set("value", newValue);
			},
			invokeOnOpen({ prop, context }) {
				if (prop("inline")) return;
				prop("onOpenChange")?.({
					open: true,
					value: context.get("value")
				});
			},
			invokeOnClose({ prop, context }) {
				if (prop("inline")) return;
				prop("onOpenChange")?.({
					open: false,
					value: context.get("value")
				});
			},
			toggleVisibility({ prop, event, send }) {
				send({
					type: prop("open") ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE",
					previousEvent: event
				});
			}
		}
	}
});
function syncChannelInputs(scope, currentValue, nextValue) {
	const channelInputEls = getChannelInputEls(scope);
	raf$1(() => {
		channelInputEls.forEach((inputEl) => {
			const channel = inputEl.dataset.channel;
			setElementValue(inputEl, getChannelValue(nextValue || currentValue, channel));
		});
	});
}
function syncFormatSelect(scope, format) {
	const selectEl = getFormatSelectEl(scope);
	if (!selectEl) return;
	raf$1(() => setElementValue(selectEl, format));
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/use-color-picker-context.js
var [ColorPickerProvider, useColorPickerContext] = createContext({
	name: "ColorPickerContext",
	hookName: "useColorPickerContext",
	providerName: "<ColorPickerProvider />"
});
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/use-color-picker-area-props-context.js
var [ColorPickerAreaPropsProvider, useColorPickerAreaPropsContext] = createContext({
	name: "ColorPickerAreaContext",
	hookName: "useColorPickerAreaContext",
	providerName: "<ColorPickerAreaProvider />"
});
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-area.svelte
var rest_excludes$41 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Color_picker_area($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$41);
	const $$d = user_derived(() => createSplitProps()(props, ["xChannel", "yChannel"])), $$array = user_derived(() => to_array(get($$d), 2)), areaProps = user_derived(() => get($$array)[0]), localProps = user_derived(() => get($$array)[1]);
	const colorPicker = useColorPickerContext();
	const mergedProps = user_derived(() => mergeProps(colorPicker().getAreaProps(get(areaProps)), get(localProps)));
	ColorPickerAreaPropsProvider(() => get(areaProps));
	Factory($$anchor, spread_props({ as: "div" }, () => get(mergedProps), {
		get ref() {
			return ref();
		},
		set ref($$value) {
			ref($$value);
		}
	}));
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-area-background.svelte
var rest_excludes$40 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Color_picker_area_background($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$40);
	const colorPicker = useColorPickerContext();
	const areaProps = useColorPickerAreaPropsContext();
	const mergedProps = user_derived(() => mergeProps(colorPicker().getAreaBackgroundProps(areaProps()), props));
	Factory($$anchor, spread_props({ as: "div" }, () => get(mergedProps), {
		get ref() {
			return ref();
		},
		set ref($$value) {
			ref($$value);
		}
	}));
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-area-thumb.svelte
var rest_excludes$39 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Color_picker_area_thumb($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$39);
	const colorPicker = useColorPickerContext();
	const areaProps = useColorPickerAreaPropsContext();
	const mergedProps = user_derived(() => mergeProps(colorPicker().getAreaThumbProps(areaProps()), props));
	Factory($$anchor, spread_props({ as: "div" }, () => get(mergedProps), {
		get ref() {
			return ref();
		},
		set ref($$value) {
			ref($$value);
		}
	}));
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-channel-input.svelte
var rest_excludes$38 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Color_picker_channel_input($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$38);
	const $$d = user_derived(() => createSplitProps()(props, ["channel", "orientation"])), $$array = user_derived(() => to_array(get($$d), 2)), channelProps = user_derived(() => get($$array)[0]), localProps = user_derived(() => get($$array)[1]);
	const colorPicker = useColorPickerContext();
	const mergedProps = user_derived(() => mergeProps(colorPicker().getChannelInputProps(get(channelProps)), get(localProps)));
	Factory($$anchor, spread_props({ as: "input" }, () => get(mergedProps), {
		get ref() {
			return ref();
		},
		set ref($$value) {
			ref($$value);
		}
	}));
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/use-color-picker-channel-props-context.js
var [ColorPickerChannelPropsProvider, useColorPickerChannelPropsContext] = createContext({
	name: "ColorPickerChannelPropsContext",
	hookName: "useColorPickerChannelPropsContext",
	providerName: "<ColorPickerChannelPropsProvider />",
	strict: false
});
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/use-color-picker-format-context.js
var EMPTY_OBJ = {};
var [ColorPickerFormatPropsProvider, useColorPickerFormatPropsContext] = createContext({
	name: "ColorPickerFormatContext",
	hookName: "useColorPickerFormatPropsContext",
	providerName: "<ColorPickerFormatPropsProvider />",
	strict: false,
	defaultValue: () => EMPTY_OBJ
});
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-channel-slider.svelte
var rest_excludes$37 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Color_picker_channel_slider($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$37);
	const $$d = user_derived(() => createSplitProps()(props, ["channel", "orientation"])), $$array = user_derived(() => to_array(get($$d), 2)), channelProps = user_derived(() => get($$array)[0]), localProps = user_derived(() => get($$array)[1]);
	const colorPicker = useColorPickerContext();
	const formatProps = useColorPickerFormatPropsContext();
	const channelSliderProps = user_derived(() => ({
		...get(channelProps),
		...formatProps()
	}));
	const mergedProps = user_derived(() => mergeProps(colorPicker().getChannelSliderProps(get(channelSliderProps)), get(localProps)));
	ColorPickerChannelPropsProvider(() => get(channelProps));
	Factory($$anchor, spread_props({ as: "div" }, () => get(mergedProps), {
		get ref() {
			return ref();
		},
		set ref($$value) {
			ref($$value);
		}
	}));
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-channel-slider-thumb.svelte
var rest_excludes$36 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Color_picker_channel_slider_thumb($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$36);
	const colorPicker = useColorPickerContext();
	const channelProps = useColorPickerChannelPropsContext();
	const formatProps = useColorPickerFormatPropsContext();
	const channelSliderProps = user_derived(() => ({
		...channelProps(),
		...formatProps()
	}));
	const mergedProps = user_derived(() => mergeProps(colorPicker().getChannelSliderThumbProps(get(channelSliderProps)), props));
	Factory($$anchor, spread_props({ as: "div" }, () => get(mergedProps), {
		get ref() {
			return ref();
		},
		set ref($$value) {
			ref($$value);
		}
	}));
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-channel-slider-track.svelte
var rest_excludes$35 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Color_picker_channel_slider_track($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$35);
	const colorPicker = useColorPickerContext();
	const channelProps = useColorPickerChannelPropsContext();
	const formatProps = useColorPickerFormatPropsContext();
	const channelSliderProps = user_derived(() => ({
		...channelProps(),
		...formatProps()
	}));
	const mergedProps = user_derived(() => mergeProps(colorPicker().getChannelSliderTrackProps(get(channelSliderProps)), props));
	Factory($$anchor, spread_props({ as: "div" }, () => get(mergedProps), {
		get ref() {
			return ref();
		},
		set ref($$value) {
			ref($$value);
		}
	}));
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-content.svelte
var rest_excludes$34 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Color_picker_content($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$34);
	const colorPicker = useColorPickerContext();
	const presence = usePresenceContext();
	const mergedProps = user_derived(() => mergeProps(colorPicker().getContentProps(), presence().getPresenceProps(), props));
	function setNode(node) {
		presence().setNode(node);
	}
	var fragment = comment();
	var node_1 = first_child(fragment);
	var consequent = ($$anchor) => {
		Factory($$anchor, spread_props({ as: "div" }, () => get(mergedProps), {
			[createAttachmentKey()]: setNode,
			get ref() {
				return ref();
			},
			set ref($$value) {
				ref($$value);
			}
		}));
	};
	var d = user_derived(() => !presence().unmounted);
	if_block(node_1, ($$render) => {
		if (get(d)) $$render(consequent);
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-eye-dropper-trigger.svelte
var rest_excludes$33 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Color_picker_eye_dropper_trigger($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$33);
	const colorPicker = useColorPickerContext();
	const mergedProps = user_derived(() => mergeProps(colorPicker().getEyeDropperTriggerProps(), props));
	Factory($$anchor, spread_props({ as: "button" }, () => get(mergedProps), {
		get ref() {
			return ref();
		},
		set ref($$value) {
			ref($$value);
		}
	}));
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-hidden-input.svelte
var rest_excludes$32 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Color_picker_hidden_input($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$32);
	const colorPicker = useColorPickerContext();
	const mergedProps = user_derived(() => mergeProps(colorPicker().getHiddenInputProps(), props));
	const field = useFieldContext();
	{
		let $0 = user_derived(() => field?.()?.ariaDescribedby);
		Factory($$anchor, spread_props({
			as: "input",
			get "aria-describedby"() {
				return get($0);
			}
		}, () => get(mergedProps), {
			get ref() {
				return ref();
			},
			set ref($$value) {
				ref($$value);
			}
		}));
	}
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-label.svelte
var rest_excludes$31 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Color_picker_label($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$31);
	const colorPicker = useColorPickerContext();
	const mergedProps = user_derived(() => mergeProps(colorPicker().getLabelProps(), props));
	Factory($$anchor, spread_props({ as: "label" }, () => get(mergedProps), {
		get ref() {
			return ref();
		},
		set ref($$value) {
			ref($$value);
		}
	}));
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-positioner.svelte
var rest_excludes$30 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Color_picker_positioner($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$30);
	const colorPicker = useColorPickerContext();
	const mergedProps = user_derived(() => mergeProps(colorPicker().getPositionerProps(), props));
	const presence = usePresenceContext();
	var fragment = comment();
	var node = first_child(fragment);
	var consequent = ($$anchor) => {
		Factory($$anchor, spread_props({ as: "div" }, () => get(mergedProps), {
			get ref() {
				return ref();
			},
			set ref($$value) {
				ref($$value);
			}
		}));
	};
	var d = user_derived(() => !presence().unmounted);
	if_block(node, ($$render) => {
		if (get(d)) $$render(consequent);
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/split-color-picker-props.svelte.js
var splitFn = createSplitProps();
var splitColorPickerProps = (props) => splitFn(props, [
	"closeOnSelect",
	"defaultOpen",
	"defaultValue",
	"defaultFormat",
	"disabled",
	"format",
	"id",
	"ids",
	"initialFocusEl",
	"invalid",
	"name",
	"onFocusOutside",
	"onFormatChange",
	"onInteractOutside",
	"onOpenChange",
	"onPointerDownOutside",
	"onValueChange",
	"onValueChangeEnd",
	"open",
	"openAutoFocus",
	"positioning",
	"readOnly",
	"required",
	"value",
	"inline"
]);
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/use-color-picker.svelte.js
var useColorPicker = (props = {}) => {
	const env = useEnvironmentContext();
	const locale = useLocaleContext();
	const field = useFieldContext();
	const machineProps = user_derived(() => {
		const resolvedProps = runIfFn(props);
		return {
			ids: {
				label: field?.()?.ids.label,
				hiddenInput: field?.()?.ids.control
			},
			dir: locale().dir,
			disabled: field?.()?.disabled,
			readOnly: field?.()?.readOnly,
			invalid: field?.()?.invalid,
			required: field?.()?.required,
			getRootNode: env().getRootNode,
			...resolvedProps
		};
	});
	const service = useMachine(machine$1, () => get(machineProps));
	const api = user_derived(() => connect$1(service, normalizeProps));
	return () => get(api);
};
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-root.svelte
var rest_excludes$29 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"value",
	"open"
]);
function Color_picker_root($$anchor, $$props) {
	const providedId = props_id();
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), value = prop($$props, "value", 15), open = prop($$props, "open", 15), props = rest_props($$props, rest_excludes$29);
	const $$d = user_derived(() => splitPresenceProps(props)), $$array = user_derived(() => to_array(get($$d), 2)), presenceProps = user_derived(() => get($$array)[0]), colorPickerProps = user_derived(() => get($$array)[1]);
	const $$d_1 = user_derived(() => splitColorPickerProps(get(colorPickerProps))), $$array_1 = user_derived(() => to_array(get($$d_1), 2)), useColorPickerProps = user_derived(() => get($$array_1)[0]), localProps = user_derived(() => get($$array_1)[1]);
	const machineProps = user_derived(() => ({
		...get(useColorPickerProps),
		id: get(useColorPickerProps).id ?? providedId,
		value: value(),
		open: open(),
		onValueChange(details) {
			get(useColorPickerProps).onValueChange?.(details);
			if (value() !== void 0) value(details.value);
		},
		onOpenChange(details) {
			get(useColorPickerProps).onOpenChange?.(details);
			if (open() !== void 0) open(details.open);
		}
	}));
	const colorPicker = useColorPicker(() => get(machineProps));
	const presence = usePresence(() => ({
		present: colorPicker().open,
		...get(presenceProps)
	}));
	const mergedProps = user_derived(() => mergeProps(colorPicker().getRootProps(), get(localProps)));
	ColorPickerProvider(colorPicker);
	PresenceProvider(presence);
	Factory($$anchor, spread_props({ as: "div" }, () => get(mergedProps), {
		get ref() {
			return ref();
		},
		set ref($$value) {
			ref($$value);
		}
	}));
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/use-color-picker-swatch-props-context.js
var [ColorPickerSwatchPropsProvider, useColorPickerSwatchPropsContext] = createContext({
	name: "ColorPickerSwatchPropsContext",
	hookName: "useColorPickerSwatchPropsContext",
	providerName: "<ColorPickerSwatchPropsProvider />",
	strict: false
});
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-swatch.svelte
var rest_excludes$28 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Color_picker_swatch($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$28);
	const $$d = user_derived(() => createSplitProps()(props, ["value", "respectAlpha"])), $$array = user_derived(() => to_array(get($$d), 2)), swatchProps = user_derived(() => get($$array)[0]), localProps = user_derived(() => get($$array)[1]);
	const colorPicker = useColorPickerContext();
	const mergedProps = user_derived(() => mergeProps(colorPicker().getSwatchProps(get(swatchProps)), get(localProps)));
	ColorPickerSwatchPropsProvider(() => get(swatchProps));
	Factory($$anchor, spread_props({ as: "div" }, () => get(mergedProps), {
		get ref() {
			return ref();
		},
		set ref($$value) {
			ref($$value);
		}
	}));
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-swatch-group.svelte
var rest_excludes$27 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Color_picker_swatch_group($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$27);
	const colorPicker = useColorPickerContext();
	const mergedProps = user_derived(() => mergeProps(colorPicker().getSwatchGroupProps(), props));
	Factory($$anchor, spread_props({ as: "div" }, () => get(mergedProps), {
		get ref() {
			return ref();
		},
		set ref($$value) {
			ref($$value);
		}
	}));
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-swatch-indicator.svelte
var rest_excludes$26 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Color_picker_swatch_indicator($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$26);
	const colorPicker = useColorPickerContext();
	const swatchProps = useColorPickerSwatchPropsContext();
	const mergedProps = user_derived(() => mergeProps(colorPicker().getSwatchIndicatorProps(swatchProps()), props));
	Factory($$anchor, spread_props({ as: "div" }, () => get(mergedProps), {
		get ref() {
			return ref();
		},
		set ref($$value) {
			ref($$value);
		}
	}));
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-swatch-trigger.svelte
var rest_excludes$25 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Color_picker_swatch_trigger($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$25);
	const $$d = user_derived(() => createSplitProps()(props, ["value", "disabled"])), $$array = user_derived(() => to_array(get($$d), 2)), swatchTriggerProps = user_derived(() => get($$array)[0]), localProps = user_derived(() => get($$array)[1]);
	const colorPicker = useColorPickerContext();
	const mergedProps = user_derived(() => mergeProps(colorPicker().getSwatchTriggerProps(get(swatchTriggerProps)), get(localProps)));
	Factory($$anchor, spread_props({ as: "button" }, () => get(mergedProps), {
		get ref() {
			return ref();
		},
		set ref($$value) {
			ref($$value);
		}
	}));
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-transparency-grid.svelte
var rest_excludes$24 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Color_picker_transparency_grid($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$24);
	const $$d = user_derived(() => createSplitProps()(props, ["size"])), $$array = user_derived(() => to_array(get($$d), 2)), gridProps = user_derived(() => get($$array)[0]), localProps = user_derived(() => get($$array)[1]);
	const colorPicker = useColorPickerContext();
	const mergedProps = user_derived(() => mergeProps(colorPicker().getTransparencyGridProps(get(gridProps)), get(localProps)));
	Factory($$anchor, spread_props({ as: "div" }, () => get(mergedProps), {
		get ref() {
			return ref();
		},
		set ref($$value) {
			ref($$value);
		}
	}));
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-trigger.svelte
var rest_excludes$23 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Color_picker_trigger($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$23);
	const colorPicker = useColorPickerContext();
	const mergedProps = user_derived(() => mergeProps(colorPicker().getTriggerProps(), props));
	Factory($$anchor, spread_props({ as: "button" }, () => get(mergedProps), {
		get ref() {
			return ref();
		},
		set ref($$value) {
			ref($$value);
		}
	}));
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/dialog/use-dialog-context.js
var [DialogProvider, useDialogContext] = createContext({ name: "DialogContext" });
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/dialog/dialog-backdrop.svelte
var rest_excludes$22 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Dialog_backdrop($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$22);
	const dialog = useDialogContext();
	const renderStrategyProps = useRenderStrategyPropsContext();
	const presence = usePresence(() => ({
		...renderStrategyProps(),
		present: dialog().open
	}));
	const mergedProps = user_derived(() => mergeProps(dialog().getBackdropProps(), presence().getPresenceProps(), props));
	function setNode(node) {
		presence().setNode(node);
	}
	var fragment = comment();
	var node_1 = first_child(fragment);
	var consequent = ($$anchor) => {
		Factory($$anchor, spread_props({ as: "div" }, () => get(mergedProps), {
			[createAttachmentKey()]: setNode,
			get ref() {
				return ref();
			},
			set ref($$value) {
				ref($$value);
			}
		}));
	};
	var d = user_derived(() => !presence().unmounted);
	if_block(node_1, ($$render) => {
		if (get(d)) $$render(consequent);
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/dialog/dialog-close-trigger.svelte
var rest_excludes$21 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Dialog_close_trigger($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$21);
	const dialog = useDialogContext();
	const mergedProps = user_derived(() => mergeProps(dialog().getCloseTriggerProps(), props));
	Factory($$anchor, spread_props({ as: "button" }, () => get(mergedProps), {
		get ref() {
			return ref();
		},
		set ref($$value) {
			ref($$value);
		}
	}));
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/dialog/dialog-content.svelte
var rest_excludes$20 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Dialog_content($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$20);
	const dialog = useDialogContext();
	const presence = usePresenceContext();
	const mergedProps = user_derived(() => mergeProps(dialog().getContentProps(), presence().getPresenceProps(), props));
	function setNode(node) {
		presence().setNode(node);
	}
	var fragment = comment();
	var node_1 = first_child(fragment);
	var consequent = ($$anchor) => {
		Factory($$anchor, spread_props({ as: "div" }, () => get(mergedProps), {
			[createAttachmentKey()]: setNode,
			get ref() {
				return ref();
			},
			set ref($$value) {
				ref($$value);
			}
		}));
	};
	var d = user_derived(() => !presence().unmounted);
	if_block(node_1, ($$render) => {
		if (get(d)) $$render(consequent);
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/dialog/dialog-description.svelte
var rest_excludes$19 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Dialog_description($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$19);
	const dialog = useDialogContext();
	const mergedProps = user_derived(() => mergeProps(dialog().getDescriptionProps(), props));
	Factory($$anchor, spread_props({ as: "p" }, () => get(mergedProps), {
		get ref() {
			return ref();
		},
		set ref($$value) {
			ref($$value);
		}
	}));
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/dialog/dialog-positioner.svelte
var rest_excludes$18 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Dialog_positioner($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$18);
	const dialog = useDialogContext();
	const presence = usePresenceContext();
	const mergedProps = user_derived(() => mergeProps(dialog().getPositionerProps(), props));
	var fragment = comment();
	var node = first_child(fragment);
	var consequent = ($$anchor) => {
		Factory($$anchor, spread_props({ as: "div" }, () => get(mergedProps), {
			get ref() {
				return ref();
			},
			set ref($$value) {
				ref($$value);
			}
		}));
	};
	var d = user_derived(() => !presence().unmounted);
	if_block(node, ($$render) => {
		if (get(d)) $$render(consequent);
	});
	append($$anchor, fragment);
	pop();
}
var parts = createAnatomy("dialog").parts("trigger", "backdrop", "positioner", "content", "title", "description", "closeTrigger").build();
//#endregion
//#region node_modules/@zag-js/dialog/dist/dialog.dom.mjs
var getPositionerId = (ctx) => ctx.ids?.positioner ?? `dialog:${ctx.id}:positioner`;
var getBackdropId = (ctx) => ctx.ids?.backdrop ?? `dialog:${ctx.id}:backdrop`;
var getContentId = (ctx) => ctx.ids?.content ?? `dialog:${ctx.id}:content`;
var getTriggerId = (ctx, value) => {
	const customId = ctx.ids?.trigger;
	if (customId != null) return isFunction(customId) ? customId(value) : customId;
	return value ? `dialog:${ctx.id}:trigger:${value}` : `dialog:${ctx.id}:trigger`;
};
var getTitleId = (ctx) => ctx.ids?.title ?? `dialog:${ctx.id}:title`;
var getDescriptionId = (ctx) => ctx.ids?.description ?? `dialog:${ctx.id}:description`;
var getCloseTriggerId = (ctx) => ctx.ids?.closeTrigger ?? `dialog:${ctx.id}:close`;
var getContentEl = (ctx) => ctx.getById(getContentId(ctx));
var getPositionerEl = (ctx) => ctx.getById(getPositionerId(ctx));
var getBackdropEl = (ctx) => ctx.getById(getBackdropId(ctx));
var getTriggerEl = (ctx) => ctx.getById(getTriggerId(ctx));
var getTitleEl = (ctx) => ctx.getById(getTitleId(ctx));
var getDescriptionEl = (ctx) => ctx.getById(getDescriptionId(ctx));
var getCloseTriggerEl = (ctx) => ctx.getById(getCloseTriggerId(ctx));
var getTriggerEls = (ctx) => queryAll(ctx.getRootNode(), `[data-scope="dialog"][data-part="trigger"]${getByOwnerId(ctx.id)}`);
var getActiveTriggerEl = (ctx, value) => {
	if (value == null) return getTriggerEl(ctx) ?? getTriggerEls(ctx)[0];
	return ctx.getById(getTriggerId(ctx, value));
};
//#endregion
//#region node_modules/@zag-js/dialog/dist/dialog.connect.mjs
function connect(service, normalize) {
	const { state, send, context, prop, scope } = service;
	const ariaLabel = prop("aria-label");
	const open = state.matches("open");
	const triggerValue = context.get("triggerValue");
	return {
		open,
		setOpen(nextOpen) {
			if (state.matches("open") === nextOpen) return;
			send({ type: nextOpen ? "OPEN" : "CLOSE" });
		},
		triggerValue,
		setTriggerValue(value) {
			send({
				type: "TRIGGER_VALUE.SET",
				value
			});
		},
		getTriggerProps(props = {}) {
			const { value } = props;
			const current = value == null ? false : triggerValue === value;
			return normalize.button({
				...parts.trigger.attrs,
				dir: prop("dir"),
				id: getTriggerId(scope, value),
				"data-ownedby": scope.id,
				"data-value": value,
				"aria-haspopup": "dialog",
				type: "button",
				"aria-expanded": value == null ? open : open && current,
				"data-state": open ? "open" : "closed",
				"aria-controls": getContentId(scope),
				"data-current": dataAttr(current),
				onClick(event) {
					if (event.defaultPrevented) return;
					send({
						type: open && value != null && !current ? "TRIGGER_VALUE.SET" : "TOGGLE",
						value
					});
				}
			});
		},
		getBackdropProps() {
			return normalize.element({
				...parts.backdrop.attrs,
				dir: prop("dir"),
				hidden: !open,
				id: getBackdropId(scope),
				"data-state": open ? "open" : "closed"
			});
		},
		getPositionerProps() {
			return normalize.element({
				...parts.positioner.attrs,
				dir: prop("dir"),
				id: getPositionerId(scope),
				style: compact({ pointerEvents: !open || !prop("modal") ? "none" : void 0 })
			});
		},
		getContentProps() {
			const rendered = context.get("rendered");
			return normalize.element({
				...parts.content.attrs,
				dir: prop("dir"),
				role: prop("role"),
				hidden: !open,
				id: getContentId(scope),
				tabIndex: -1,
				"data-state": open ? "open" : "closed",
				"aria-modal": prop("modal"),
				"aria-label": ariaLabel || void 0,
				"aria-labelledby": ariaLabel || !rendered.title ? void 0 : getTitleId(scope),
				"aria-describedby": rendered.description ? getDescriptionId(scope) : void 0,
				style: compact({ pointerEvents: prop("modal") ? void 0 : "auto" })
			});
		},
		getTitleProps() {
			return normalize.element({
				...parts.title.attrs,
				dir: prop("dir"),
				id: getTitleId(scope)
			});
		},
		getDescriptionProps() {
			return normalize.element({
				...parts.description.attrs,
				dir: prop("dir"),
				id: getDescriptionId(scope)
			});
		},
		getCloseTriggerProps() {
			return normalize.button({
				...parts.closeTrigger.attrs,
				dir: prop("dir"),
				id: getCloseTriggerId(scope),
				type: "button",
				onClick(event) {
					if (event.defaultPrevented) return;
					event.stopPropagation();
					send({ type: "CLOSE" });
				}
			});
		}
	};
}
//#endregion
//#region node_modules/@zag-js/dialog/dist/dialog.machine.mjs
var machine = createMachine({
	props({ props, scope }) {
		const alertDialog = props.role === "alertdialog";
		const initialFocusEl = alertDialog ? () => getCloseTriggerEl(scope) : void 0;
		const modal = typeof props.modal === "boolean" ? props.modal : true;
		return {
			role: "dialog",
			modal,
			trapFocus: modal,
			preventScroll: modal,
			closeOnInteractOutside: modal && !alertDialog,
			closeOnEscape: true,
			restoreFocus: true,
			initialFocusEl,
			...props
		};
	},
	initialState({ prop }) {
		return prop("open") || prop("defaultOpen") ? "open" : "closed";
	},
	context({ bindable, prop, scope }) {
		return {
			rendered: bindable(() => ({ defaultValue: {
				title: true,
				description: true
			} })),
			triggerValue: bindable(() => ({
				defaultValue: prop("defaultTriggerValue") ?? null,
				value: prop("triggerValue"),
				onChange(value) {
					const onTriggerValueChange = prop("onTriggerValueChange");
					if (!onTriggerValueChange) return;
					onTriggerValueChange({
						value,
						triggerElement: getActiveTriggerEl(scope, value)
					});
				}
			}))
		};
	},
	watch({ track, action, prop }) {
		track([() => prop("open")], () => {
			action(["toggleVisibility"]);
		});
	},
	states: {
		open: {
			entry: ["checkRenderedElements", "setInitialFocus"],
			effects: [
				"trackDismissableElement",
				"trapFocus",
				"preventScroll",
				"hideContentBelow"
			],
			on: {
				"CONTROLLED.CLOSE": { target: "closed" },
				CLOSE: [{
					guard: "isOpenControlled",
					actions: ["invokeOnClose"]
				}, {
					target: "closed",
					actions: ["invokeOnClose"]
				}],
				TOGGLE: [{
					guard: "isOpenControlled",
					actions: ["invokeOnClose"]
				}, {
					target: "closed",
					actions: ["invokeOnClose"]
				}],
				"TRIGGER_VALUE.SET": { actions: ["setTriggerValue"] }
			}
		},
		closed: { on: {
			"CONTROLLED.OPEN": { target: "open" },
			OPEN: [{
				guard: "isOpenControlled",
				actions: ["invokeOnOpen", "setTriggerValue"]
			}, {
				target: "open",
				actions: ["invokeOnOpen", "setTriggerValue"]
			}],
			TOGGLE: [{
				guard: "isOpenControlled",
				actions: ["invokeOnOpen", "setTriggerValue"]
			}, {
				target: "open",
				actions: ["invokeOnOpen", "setTriggerValue"]
			}],
			"TRIGGER_VALUE.SET": { actions: ["setTriggerValue"] }
		} }
	},
	implementations: {
		guards: { isOpenControlled: ({ prop }) => prop("open") != void 0 },
		effects: {
			trackDismissableElement({ scope, send, prop }) {
				const getContentEl2 = () => getContentEl(scope);
				return trackDismissableElement(getContentEl2, {
					type: "dialog",
					defer: true,
					pointerBlocking: prop("modal"),
					layerStyleTargets: [() => getBackdropEl(scope), () => getPositionerEl(scope)],
					exclude: [getTriggerEl(scope), ...getTriggerEls(scope)].filter(Boolean),
					onInteractOutside(event) {
						prop("onInteractOutside")?.(event);
						if (!prop("closeOnInteractOutside")) event.preventDefault();
					},
					persistentElements: prop("persistentElements"),
					onFocusOutside: prop("onFocusOutside"),
					onPointerDownOutside: prop("onPointerDownOutside"),
					onRequestDismiss: prop("onRequestDismiss"),
					onEscapeKeyDown(event) {
						prop("onEscapeKeyDown")?.(event);
						if (!prop("closeOnEscape")) event.preventDefault();
					},
					onDismiss() {
						send({
							type: "CLOSE",
							src: "interact-outside"
						});
					}
				});
			},
			preventScroll({ scope, prop }) {
				if (!prop("preventScroll")) return;
				return preventBodyScroll(scope.getDoc());
			},
			trapFocus({ scope, prop, context }) {
				if (!prop("trapFocus")) return;
				const contentEl = () => getContentEl(scope);
				return trapFocus(contentEl, {
					preventScroll: true,
					returnFocusOnDeactivate: !!prop("restoreFocus"),
					initialFocus: () => getInitialFocus({
						root: getContentEl(scope),
						getInitialEl: prop("initialFocusEl")
					}),
					setReturnFocus: (el) => {
						const finalFocusEl = prop("finalFocusEl")?.();
						if (finalFocusEl) return finalFocusEl;
						const triggerValue = context.get("triggerValue");
						if (triggerValue) {
							const activeTriggerEl = getActiveTriggerEl(scope, triggerValue);
							if (activeTriggerEl) return activeTriggerEl;
						}
						const fallbackTrigger = getTriggerEls(scope)[0];
						if (fallbackTrigger) return fallbackTrigger;
						return el;
					},
					getShadowRoot: true
				});
			},
			hideContentBelow({ scope, prop }) {
				if (!prop("modal")) return;
				const getElements = () => [getContentEl(scope)];
				return ariaHidden(getElements, { defer: true });
			}
		},
		actions: {
			setInitialFocus({ prop, scope }) {
				if (prop("trapFocus")) return;
				raf$1(() => {
					getInitialFocus({
						root: getContentEl(scope),
						getInitialEl: prop("initialFocusEl")
					})?.focus({ preventScroll: true });
				});
			},
			checkRenderedElements({ context, scope }) {
				raf$1(() => {
					context.set("rendered", {
						title: !!getTitleEl(scope),
						description: !!getDescriptionEl(scope)
					});
				});
			},
			invokeOnClose({ prop }) {
				prop("onOpenChange")?.({ open: false });
			},
			invokeOnOpen({ prop }) {
				prop("onOpenChange")?.({ open: true });
			},
			setTriggerValue({ context, event }) {
				if (event.value === void 0) return;
				context.set("triggerValue", event.value);
			},
			toggleVisibility({ prop, send, event }) {
				send({
					type: prop("open") ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE",
					previousEvent: event
				});
			}
		}
	}
});
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/dialog/use-dialog.svelte.js
var useDialog = (props) => {
	const env = useEnvironmentContext();
	const locale = useLocaleContext();
	const machineProps = user_derived(() => {
		const resolvedProps = runIfFn(props) || {};
		return {
			getRootNode: env().getRootNode,
			dir: locale().dir,
			...resolvedProps
		};
	});
	const service = useMachine(machine, () => get(machineProps));
	const api = user_derived(() => connect(service, normalizeProps));
	return () => get(api);
};
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/dialog/dialog-root.svelte
var rest_excludes$17 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"open",
	"children"
]);
function Dialog_root($$anchor, $$props) {
	const providedId = props_id();
	push($$props, true);
	let open = prop($$props, "open", 15), props = rest_props($$props, rest_excludes$17);
	const $$d = user_derived(() => splitPresenceProps(props)), $$array = user_derived(() => to_array(get($$d), 2)), presenceProps = user_derived(() => get($$array)[0]), localProps = user_derived(() => get($$array)[1]);
	const $$d_1 = user_derived(() => splitRenderStrategyProps(get(presenceProps))), $$array_1 = user_derived(() => to_array(get($$d_1), 1)), renderStrategyProps = user_derived(() => get($$array_1)[0]);
	const machineProps = user_derived(() => {
		return {
			...get(localProps),
			id: get(localProps).id ?? providedId,
			open: open(),
			onOpenChange(details) {
				get(localProps).onOpenChange?.(details);
				if (open() !== void 0) open(details.open);
			}
		};
	});
	const dialog = useDialog(() => get(machineProps));
	const presenceMachineProps = user_derived(() => ({
		...get(presenceProps),
		present: dialog().open
	}));
	const presence = usePresence(() => get(presenceMachineProps));
	DialogProvider(dialog);
	RenderStrategyPropsProvider(() => get(renderStrategyProps));
	PresenceProvider(presence);
	var fragment = comment();
	var node = first_child(fragment);
	snippet(node, () => $$props.children ?? noop$2);
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/dialog/dialog-title.svelte
var rest_excludes$16 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Dialog_title($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$16);
	const dialog = useDialogContext();
	const mergedProps = user_derived(() => mergeProps(dialog().getTitleProps(), props));
	Factory($$anchor, spread_props({ as: "h2" }, () => get(mergedProps), {
		get ref() {
			return ref();
		},
		set ref($$value) {
			ref($$value);
		}
	}));
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/dialog/dialog-trigger.svelte
var rest_excludes$15 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Dialog_trigger($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$15);
	const $$d = user_derived(() => createSplitProps()(props, ["value"])), $$array = user_derived(() => to_array(get($$d), 2)), triggerProps = user_derived(() => get($$array)[0]), localProps = user_derived(() => get($$array)[1]);
	const dialog = useDialogContext();
	const presence = usePresenceContext();
	const mergedProps = user_derived(() => {
		const triggerPropsRaw = dialog().getTriggerProps(get(triggerProps));
		return mergeProps({
			...triggerPropsRaw,
			"aria-controls": presence().unmounted ? void 0 : triggerPropsRaw["aria-controls"]
		}, get(localProps));
	});
	Factory($$anchor, spread_props({ as: "button" }, () => get(mergedProps), {
		get ref() {
			return ref();
		},
		set ref($$value) {
			ref($$value);
		}
	}));
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/portal/portal.svelte
function Portal($$anchor, $$props) {
	push($$props, true);
	/**
	* If true, the portal will not be rendered.
	*/
	/**
	* The container to render the portal into.
	*/
	/**
	* The children to render in the portal.
	*/
	let container = prop($$props, "container", 19, () => globalThis.document?.body), disabled = prop($$props, "disabled", 3, false);
	const context = getAllContexts();
	let instance = null;
	user_effect(() => {
		const cleanup = () => {
			if (instance) {
				unmount(instance);
				instance = null;
			}
		};
		if (disabled()) {
			cleanup();
			return;
		}
		tick().then(() => {
			instance = mount($$props.children, {
				target: container(),
				context
			});
		});
		return () => {
			cleanup();
		};
	});
	var fragment = comment();
	var node = first_child(fragment);
	var consequent = ($$anchor) => {
		var fragment_1 = comment();
		var node_1 = first_child(fragment_1);
		snippet(node_1, () => $$props.children ?? noop$2);
		append($$anchor, fragment_1);
	};
	if_block(node, ($$render) => {
		if (disabled()) $$render(consequent);
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region src/lib/components/dialog/DialogRoot.svelte
var rest_excludes$14 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"children"
]);
function DialogRoot($$anchor, $$props) {
	let rest = rest_props($$props, rest_excludes$14);
	var fragment = comment();
	var node = first_child(fragment);
	component(node, () => Dialog_root, ($$anchor, Dialog_Root) => {
		Dialog_Root($$anchor, spread_props(() => rest, {
			children: ($$anchor, $$slotProps) => {
				var fragment_1 = comment();
				var node_1 = first_child(fragment_1);
				snippet(node_1, () => $$props.children ?? noop$2);
				append($$anchor, fragment_1);
			},
			$$slots: { default: true }
		}));
	});
	append($$anchor, fragment);
}
//#endregion
//#region src/lib/components/icons/SettingsIconSwitch.svelte
var rest_excludes$13 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"icon"
]);
function SettingsIconSwitch($$anchor, $$props) {
	push($$props, true);
	let rest = rest_props($$props, rest_excludes$13);
	const Icon = user_derived(() => (() => {
		switch ($$props.icon) {
			case "cog": return Cog;
			case "hamburger": return Hamburger_md;
			case "kebab": return Meatballs_v;
			case "meatballs": return Meatballs_h;
			case "none": return;
		}
	})());
	var fragment = comment();
	var node = first_child(fragment);
	component(node, () => get(Icon), ($$anchor, Icon_1) => {
		Icon_1($$anchor, spread_props(() => rest));
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region src/lib/components/dialog/DialogTrigger.svelte
var rest_excludes$12 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"icon",
	"children"
]);
var root$9 = from_html(`<!> <!>`, 1);
function DialogTrigger($$anchor, $$props) {
	let rest = rest_props($$props, rest_excludes$12);
	var fragment = comment();
	var node = first_child(fragment);
	component(node, () => Dialog_trigger, ($$anchor, Dialog_Trigger) => {
		Dialog_Trigger($$anchor, spread_props(() => rest, {
			children: ($$anchor, $$slotProps) => {
				var fragment_1 = root$9();
				var node_1 = first_child(fragment_1);
				SettingsIconSwitch(node_1, { get icon() {
					return $$props.icon;
				} });
				var node_2 = sibling(node_1, 2);
				snippet(node_2, () => $$props.children ?? noop$2);
				append($$anchor, fragment_1);
			},
			$$slots: { default: true }
		}));
	});
	append($$anchor, fragment);
}
//#endregion
//#region src/lib/components/icons/XIcon.svelte
var rest_excludes$11 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy"
]);
function XIcon($$anchor, $$props) {
	let props = rest_props($$props, rest_excludes$11);
	Close_rounded($$anchor, spread_props(() => props));
}
//#endregion
//#region src/lib/components/dialog/DialogContent.svelte
var rest_excludes$10 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"children"
]);
var root$8 = from_html(`<!> <!>`, 1);
function DialogContent($$anchor, $$props) {
	let rest = rest_props($$props, rest_excludes$10);
	Portal($$anchor, {
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = root$8();
			var node = first_child(fragment_1);
			component(node, () => Dialog_backdrop, ($$anchor, Dialog_Backdrop) => {
				Dialog_Backdrop($$anchor, {});
			});
			var node_1 = sibling(node, 2);
			component(node_1, () => Dialog_positioner, ($$anchor, Dialog_Positioner) => {
				Dialog_Positioner($$anchor, {
					children: ($$anchor, $$slotProps) => {
						var fragment_2 = comment();
						var node_2 = first_child(fragment_2);
						component(node_2, () => Dialog_content, ($$anchor, Dialog_Content) => {
							Dialog_Content($$anchor, spread_props(() => rest, {
								children: ($$anchor, $$slotProps) => {
									var fragment_3 = root$8();
									var node_3 = first_child(fragment_3);
									component(node_3, () => Dialog_close_trigger, ($$anchor, Dialog_CloseTrigger) => {
										Dialog_CloseTrigger($$anchor, {
											children: ($$anchor, $$slotProps) => {
												XIcon($$anchor, {});
											},
											$$slots: { default: true }
										});
									});
									var node_4 = sibling(node_3, 2);
									snippet(node_4, () => $$props.children ?? noop$2);
									append($$anchor, fragment_3);
								},
								$$slots: { default: true }
							}));
						});
						append($$anchor, fragment_2);
					},
					$$slots: { default: true }
				});
			});
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
}
//#endregion
//#region src/lib/components/dialog/index.ts
var Dialog = Object.assign(DialogRoot, {
	Title: Dialog_title,
	Description: Dialog_description,
	Content: DialogContent,
	Trigger: DialogTrigger
});
//#endregion
//#region src/lib/components/color-picker/ColorPickerRoot.svelte
var [getColorPickerContext, setColorPickerContext] = createContext$1();
var rest_excludes$9 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"type",
	"value",
	"children"
]);
function ColorPickerRoot($$anchor, $$props) {
	push($$props, true);
	let type = prop($$props, "type", 3, "any"), value = prop($$props, "value", 31, () => proxy(validColor("#000"))), rest = rest_props($$props, rest_excludes$9);
	let pickerValue = user_derived(() => parse(value().d().toHex()));
	let errorMsg = state$1(void 0);
	setColorPickerContext(() => {
		return {
			type: type(),
			value: value(),
			errorMsg: get(errorMsg)
		};
	});
	function updateValue(newValue) {
		const wrapError = (validator, msg) => {
			try {
				value(validator(newValue));
				set(errorMsg, void 0);
			} catch {
				set(errorMsg, msg, true);
			}
		};
		switch (type()) {
			case "any":
				wrapError(validColor, "Input a valid color!");
				break;
			case "opaque":
				wrapError(opaqueColor, "Input an opaque color!");
				break;
			case "readable-on-dark":
				wrapError(readableOnDark, "Input a color readable on a dark background.");
				break;
			case "readable-on-light": wrapError(readableOnLight, "Input a color readable on a light background.");
		}
	}
	var fragment = comment();
	var node = first_child(fragment);
	component(node, () => Color_picker_root, ($$anchor, ColorPicker_Root) => {
		ColorPicker_Root($$anchor, spread_props(() => rest, {
			onValueChange: (details) => {
				const newValue = details.valueAsString;
				updateValue(newValue);
			},
			get value() {
				return get(pickerValue);
			},
			children: ($$anchor, $$slotProps) => {
				var fragment_1 = comment();
				var node_1 = first_child(fragment_1);
				snippet(node_1, () => $$props.children ?? noop$2);
				append($$anchor, fragment_1);
			},
			$$slots: { default: true }
		}));
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region ~icons/gg/color-picker.svelte
var rest_excludes$8 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy"
]);
var root$7 = from_svg(`<svg><g fill="currentColor"><path d="M20.385 2.879a3 3 0 0 0-4.243 0L14.02 5l-.707-.708a1 1 0 1 0-1.414 1.415l5.657 5.656A1 1 0 0 0 18.97 9.95l-.707-.707l2.122-2.122a3 3 0 0 0 0-4.242"></path><path fill-rule="evenodd" d="M11.93 7.091L4.152 14.87a3 3 0 0 0-.587 3.415L2 19.85l1.414 1.415l1.565-1.566a3 3 0 0 0 3.415-.586l7.778-7.778zm1.414 4.243L11.93 9.92l-6.364 6.364a1 1 0 0 0 1.414 1.414z" clip-rule="evenodd"></path></g></svg>`);
function Color_picker($$anchor, $$props) {
	const p = rest_props($$props, rest_excludes$8);
	var svg = root$7();
	attribute_effect(svg, () => ({
		viewBox: "0 0 24 24",
		width: "1.2em",
		height: "1.2em",
		...p
	}));
	append($$anchor, svg);
}
//#endregion
//#region src/lib/components/icons/PickerIcon.svelte
var rest_excludes$7 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"children"
]);
function PickerIcon($$anchor, $$props) {
	let rest = rest_props($$props, rest_excludes$7);
	Color_picker($$anchor, spread_props(() => rest, {
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = comment();
			var node = first_child(fragment_1);
			snippet(node, () => $$props.children ?? noop$2);
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	}));
}
//#endregion
//#region src/lib/components/color-picker/ColorPickerSlider.svelte
var rest_excludes$6 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"transparencyGrid"
]);
var root$6 = from_html(`<!> <!> <!>`, 1);
function ColorPickerSlider($$anchor, $$props) {
	let rest = rest_props($$props, rest_excludes$6);
	var fragment = comment();
	var node = first_child(fragment);
	component(node, () => Color_picker_channel_slider, ($$anchor, ColorPicker_ChannelSlider) => {
		ColorPicker_ChannelSlider($$anchor, spread_props(() => rest, {
			children: ($$anchor, $$slotProps) => {
				var fragment_1 = root$6();
				var node_1 = first_child(fragment_1);
				var consequent = ($$anchor) => {
					var fragment_2 = comment();
					var node_2 = first_child(fragment_2);
					component(node_2, () => Color_picker_transparency_grid, ($$anchor, ColorPicker_TransparencyGrid) => {
						ColorPicker_TransparencyGrid($$anchor, { class: "rounded-full" });
					});
					append($$anchor, fragment_2);
				};
				if_block(node_1, ($$render) => {
					if ($$props.transparencyGrid) $$render(consequent);
				});
				var node_3 = sibling(node_1, 2);
				component(node_3, () => Color_picker_channel_slider_track, ($$anchor, ColorPicker_ChannelSliderTrack) => {
					ColorPicker_ChannelSliderTrack($$anchor, { class: "w-full h-2.5 rounded-full outline outline-(--fg)" });
				});
				var node_4 = sibling(node_3, 2);
				component(node_4, () => Color_picker_channel_slider_thumb, ($$anchor, ColorPicker_ChannelSliderThumb) => {
					ColorPicker_ChannelSliderThumb($$anchor, { class: "size-2 -translate-1/2 rounded-full preset-outline-contrast" });
				});
				append($$anchor, fragment_1);
			},
			$$slots: { default: true }
		}));
	});
	append($$anchor, fragment);
}
//#endregion
//#region ~icons/material-symbols/check-rounded.svelte
var rest_excludes$5 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy"
]);
var root$5 = from_svg(`<svg><path fill="currentColor" d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z"></path></svg>`);
function Check_rounded($$anchor, $$props) {
	const p = rest_props($$props, rest_excludes$5);
	var svg = root$5();
	attribute_effect(svg, () => ({
		viewBox: "0 0 24 24",
		width: "1.2em",
		height: "1.2em",
		...p
	}));
	append($$anchor, svg);
}
//#endregion
//#region src/lib/components/icons/CheckIcon.svelte
var rest_excludes$4 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"children"
]);
function CheckIcon($$anchor, $$props) {
	let rest = rest_props($$props, rest_excludes$4);
	Check_rounded($$anchor, spread_props(() => rest, {
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = comment();
			var node = first_child(fragment_1);
			snippet(node, () => $$props.children ?? noop$2);
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	}));
}
//#endregion
//#region src/lib/components/color-picker/ColorPickerSwatchGroup.svelte
var rest_excludes$3 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"swatches"
]);
function ColorPickerSwatchGroup($$anchor, $$props) {
	let rest = rest_props($$props, rest_excludes$3);
	var fragment = comment();
	var node = first_child(fragment);
	var consequent = ($$anchor) => {
		var fragment_1 = comment();
		var node_1 = first_child(fragment_1);
		component(node_1, () => Color_picker_swatch_group, ($$anchor, ColorPicker_SwatchGroup) => {
			ColorPicker_SwatchGroup($$anchor, spread_props({ class: "flex flex-wrap gap-[0.3rem]" }, () => rest, {
				children: ($$anchor, $$slotProps) => {
					var fragment_2 = comment();
					var node_2 = first_child(fragment_2);
					each(node_2, 17, () => $$props.swatches, index, ($$anchor, color) => {
						var fragment_3 = comment();
						var node_3 = first_child(fragment_3);
						component(node_3, () => Color_picker_swatch_trigger, ($$anchor, ColorPicker_SwatchTrigger) => {
							ColorPicker_SwatchTrigger($$anchor, {
								get value() {
									return get(color);
								},
								children: ($$anchor, $$slotProps) => {
									var fragment_4 = comment();
									var node_4 = first_child(fragment_4);
									component(node_4, () => Color_picker_swatch, ($$anchor, ColorPicker_Swatch) => {
										ColorPicker_Swatch($$anchor, {
											get value() {
												return get(color);
											},
											class: "size-6 flex justify-center items-center rounded-md outline outline-(--fg)",
											children: ($$anchor, $$slotProps) => {
												var fragment_5 = comment();
												var node_5 = first_child(fragment_5);
												component(node_5, () => Color_picker_swatch_indicator, ($$anchor, ColorPicker_SwatchIndicator) => {
													ColorPicker_SwatchIndicator($$anchor, {
														children: ($$anchor, $$slotProps) => {
															CheckIcon($$anchor, { class: "preset-outline-svg" });
														},
														$$slots: { default: true }
													});
												});
												append($$anchor, fragment_5);
											},
											$$slots: { default: true }
										});
									});
									append($$anchor, fragment_4);
								},
								$$slots: { default: true }
							});
						});
						append($$anchor, fragment_3);
					});
					append($$anchor, fragment_2);
				},
				$$slots: { default: true }
			}));
		});
		append($$anchor, fragment_1);
	};
	if_block(node, ($$render) => {
		if ($$props.swatches) $$render(consequent);
	});
	append($$anchor, fragment);
}
//#endregion
//#region src/lib/components/color-picker/ColorPickerContent.svelte
var rest_excludes$2 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"swatches"
]);
var root$4 = from_html(`<!> <!>`, 1);
var root_1$3 = from_html(`<p class="bg-(--fg) text-(--bg) text-xs rounded-md p-1"> </p>`);
var root_2$2 = from_html(`<!> <div class="flex space-x-2"><!> <div><!> <!></div></div> <!> <!> <!>`, 1);
function ColorPickerContent($$anchor, $$props) {
	push($$props, true);
	let rest = rest_props($$props, rest_excludes$2);
	const ctx = getColorPickerContext();
	var fragment = root$4();
	var node = first_child(fragment);
	component(node, () => Color_picker_positioner, ($$anchor, ColorPicker_Positioner) => {
		ColorPicker_Positioner($$anchor, {
			children: ($$anchor, $$slotProps) => {
				var fragment_1 = comment();
				var node_1 = first_child(fragment_1);
				component(node_1, () => Color_picker_content, ($$anchor, ColorPicker_Content) => {
					ColorPicker_Content($$anchor, spread_props(() => rest, {
						children: ($$anchor, $$slotProps) => {
							var fragment_2 = root_2$2();
							var node_2 = first_child(fragment_2);
							component(node_2, () => Color_picker_area, ($$anchor, ColorPicker_Area) => {
								ColorPicker_Area($$anchor, {
									class: "h-24",
									children: ($$anchor, $$slotProps) => {
										var fragment_3 = root$4();
										var node_3 = first_child(fragment_3);
										component(node_3, () => Color_picker_area_background, ($$anchor, ColorPicker_AreaBackground) => {
											ColorPicker_AreaBackground($$anchor, { class: "size-full rounded-md outline outline-(--fg)" });
										});
										var node_4 = sibling(node_3, 2);
										component(node_4, () => Color_picker_area_thumb, ($$anchor, ColorPicker_AreaThumb) => {
											ColorPicker_AreaThumb($$anchor, { class: "rounded-full size-4 preset-outline-contrast" });
										});
										append($$anchor, fragment_3);
									},
									$$slots: { default: true }
								});
							});
							var div = sibling(node_2, 2);
							var node_5 = child(div);
							component(node_5, () => Color_picker_eye_dropper_trigger, ($$anchor, ColorPicker_EyeDropperTrigger) => {
								ColorPicker_EyeDropperTrigger($$anchor, {
									class: "size-8 flex justify-center items-center preset-button rounded-md outline outline-(--fg)",
									children: ($$anchor, $$slotProps) => {
										PickerIcon($$anchor, {});
									},
									$$slots: { default: true }
								});
							});
							var div_1 = sibling(node_5, 2);
							var node_6 = child(div_1);
							ColorPickerSlider(node_6, { channel: "hue" });
							var node_7 = sibling(node_6, 2);
							var consequent = ($$anchor) => {
								ColorPickerSlider($$anchor, {
									channel: "alpha",
									transparencyGrid: true
								});
							};
							var d = user_derived(() => ctx().type === "any");
							if_block(node_7, ($$render) => {
								if (get(d)) $$render(consequent);
							});
							reset(div_1);
							reset(div);
							var node_8 = sibling(div, 2);
							component(node_8, () => Color_picker_channel_input, ($$anchor, ColorPicker_ChannelInput) => {
								ColorPicker_ChannelInput($$anchor, {
									channel: "hex",
									class: "p-1 rounded-md outline outline-(--fg) w-full"
								});
							});
							var node_9 = sibling(node_8, 2);
							ColorPickerSwatchGroup(node_9, { get swatches() {
								return $$props.swatches;
							} });
							var node_10 = sibling(node_9, 2);
							var consequent_1 = ($$anchor) => {
								var p = root_1$3();
								var text = child(p, true);
								reset(p);
								template_effect(($0) => set_text(text, $0), [() => ctx().errorMsg]);
								append($$anchor, p);
							};
							var d_1 = user_derived(() => ctx().errorMsg);
							if_block(node_10, ($$render) => {
								if (get(d_1)) $$render(consequent_1);
							});
							template_effect(($0) => set_class(div_1, 1, `flex-1 flex flex-col py-1
        ${$0 ?? ""}`), [() => ctx().type === "any" ? "justify-between" : "justify-center"]);
							append($$anchor, fragment_2);
						},
						$$slots: { default: true }
					}));
				});
				append($$anchor, fragment_1);
			},
			$$slots: { default: true }
		});
	});
	var node_11 = sibling(node, 2);
	component(node_11, () => Color_picker_hidden_input, ($$anchor, ColorPicker_HiddenInput) => {
		ColorPicker_HiddenInput($$anchor, {});
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region src/lib/components/color-picker/ColorPickerTrigger.svelte
var rest_excludes$1 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"children"
]);
var root$3 = from_html(`<div class="rounded-full relative outline outline-(--fg)"><!> <!></div> <!>`, 1);
var root_1$2 = from_html(`<!> <!>`, 1);
function ColorPickerTrigger($$anchor, $$props) {
	push($$props, true);
	let rest = rest_props($$props, rest_excludes$1);
	const ctx = getColorPickerContext();
	var fragment = root_1$2();
	var node = first_child(fragment);
	component(node, () => Color_picker_label, ($$anchor, ColorPicker_Label) => {
		ColorPicker_Label($$anchor, {
			hidden: true,
			children: ($$anchor, $$slotProps) => {
				var fragment_1 = comment();
				var node_1 = first_child(fragment_1);
				snippet(node_1, () => $$props.children ?? noop$2);
				append($$anchor, fragment_1);
			},
			$$slots: { default: true }
		});
	});
	var node_2 = sibling(node, 2);
	component(node_2, () => Color_picker_trigger, ($$anchor, ColorPicker_Trigger) => {
		ColorPicker_Trigger($$anchor, spread_props({ class: "flex items-center p-1 gap-x-1" }, () => rest, {
			children: ($$anchor, $$slotProps) => {
				var fragment_2 = root$3();
				var div = first_child(fragment_2);
				var node_3 = child(div);
				{
					let $0 = user_derived(() => ctx().type !== "any");
					component(node_3, () => Color_picker_transparency_grid, ($$anchor, ColorPicker_TransparencyGrid) => {
						ColorPicker_TransparencyGrid($$anchor, {
							get hidden() {
								return get($0);
							},
							class: "rounded-full"
						});
					});
				}
				var node_4 = sibling(node_3, 2);
				{
					let $0 = user_derived(() => ctx().value?.raw);
					component(node_4, () => Color_picker_swatch, ($$anchor, ColorPicker_Swatch) => {
						ColorPicker_Swatch($$anchor, {
							get value() {
								return get($0);
							},
							class: "relative size-6 rounded-full"
						});
					});
				}
				reset(div);
				var node_5 = sibling(div, 2);
				snippet(node_5, () => $$props.children ?? noop$2);
				append($$anchor, fragment_2);
			},
			$$slots: { default: true }
		}));
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region src/lib/components/color-picker/index.ts
var ColorPicker = Object.assign(ColorPickerRoot, {
	Content: ColorPickerContent,
	Trigger: ColorPickerTrigger
});
//#endregion
//#region src/lib/style/components/Settings.svelte
var root$2 = from_html(`<p>Next theme</p>`);
var root_1$1 = from_html(`<!> <!>`, 1);
var root_2$1 = from_html(`<!> <div><!></div> <!>`, 1);
function Settings($$anchor, $$props) {
	push($$props, false);
	const manager = mutable_source(getStyleContext());
	init();
	Dialog($$anchor, {
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = root_1$1();
			var node = first_child(fragment_1);
			Dialog.Trigger(node, { icon: "cog" });
			var node_1 = sibling(node, 2);
			Dialog.Content(node_1, {
				children: ($$anchor, $$slotProps) => {
					var fragment_2 = root_2$1();
					var node_2 = first_child(fragment_2);
					Dialog.Title(node_2, {
						class: "preset-title",
						children: ($$anchor, $$slotProps) => {
							next$1();
							var text$1 = text("Settings");
							append($$anchor, text$1);
						},
						$$slots: { default: true }
					});
					var div = sibling(node_2, 2);
					NextTheme(child(div), {
						class: "hover:preset-next-theme focus-visible:preset-next-theme active:preset-next-theme focus-visible:outline-none preset-theme-transition p-2 rounded-lg",
						children: ($$anchor, $$slotProps) => {
							var p = root$2();
							append($$anchor, p);
						},
						$$slots: { default: true }
					});
					reset(div);
					var node_4 = sibling(div, 2);
					var consequent = ($$anchor) => {
						ColorPicker($$anchor, {
							type: "any",
							get value() {
								return get(manager).runtime.accent.value;
							},
							set value($$value) {
								mutate(manager, get(manager).runtime.accent.value = $$value);
							},
							children: ($$anchor, $$slotProps) => {
								var fragment_4 = root_1$1();
								var node_5 = first_child(fragment_4);
								ColorPicker.Trigger(node_5, {
									children: ($$anchor, $$slotProps) => {
										next$1();
										var text_1 = text("Accent Color");
										append($$anchor, text_1);
									},
									$$slots: { default: true }
								});
								var node_6 = sibling(node_5, 2);
								{
									let $0 = derived_safe_equal(() => [
										ACCENT,
										JENNI_ACCENT,
										BLUE_ACCENT,
										GREEN_ACCENT,
										ORANGE_ACCENT,
										YELLOW_ACCENT
									]);
									ColorPicker.Content(node_6, { get swatches() {
										return get($0);
									} });
								}
								append($$anchor, fragment_4);
							},
							$$slots: { default: true },
							$$legacy: true
						});
					};
					if_block(node_4, ($$render) => {
						if (get(manager).runtime.accent.kind === "static") $$render(consequent);
					});
					append($$anchor, fragment_2);
				},
				$$slots: { default: true }
			});
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
	pop();
}
//#endregion
//#region src/lib/components/Anchor.svelte
var rest_excludes = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"children"
]);
var root$1 = from_html(`<a><!></a>`);
function Anchor($$anchor, $$props) {
	let rest = rest_props($$props, rest_excludes);
	var a = root$1();
	attribute_effect(a, () => ({
		draggable: "false",
		...rest
	}));
	var node = child(a);
	snippet(node, () => $$props.children ?? noop$2);
	reset(a);
	append($$anchor, a);
}
//#endregion
//#region src/lib/components/MainLayout.svelte
var root = from_html(`<div><div class="preset-topbar-height pointer-events-none hidden sm:block"></div> <div class="
        min-h-full min-w-dvw fixed
        sm:min-w-0
        flex
        z-50
      "><div class="preset-accent
          p-1
        "><div class="h-sait"></div> <!></div> <button class="sm:hidden
            flex-1 h-dvh
            preset-blur bg-on-light/overlay
            flex flex-col justify-start items-start text-on-accent
          " title=""><div class="h-sait"></div> <div class="preset-interactive p-2 text-2xl"><!></div></button></div></div>`);
var root_1 = from_html(`<div><button class="preset-interactive"><!></button></div>`);
var root_2 = from_html(`<div class="font-[brush-script] text-3xl sm:text-4xl">Blibbo</div>`);
var root_3 = from_html(`<div><!></div>`);
var root_4 = from_html(`<div class="block min-h-dvh max-w-dvw overflow-clip
  sm:flex
"><!> <div class="sm:flex-1"><div class="preset-accent h-sait"></div> <div class="
        preset-accent md:flex md:justify-center text-nowrap
        text-md sm:text-xl select-none
        preset-topbar-height
      "><div class="
          preset-page-wrapper px-0 flex justify-between items-center h-full
          *:flex *:items-center *:h-full
          *:*:preset-page *:*:h-full
          *:*:*:px-3 *:*:*:h-full *:*:*:flex *:*:*:items-center *:*:*:overflow-clip *:*:*:preset-accent *:*:*:preset-theme-transition *:*:*:preset-button
        "><nav><!> <!></nav> <nav><div><!></div> <div><!></div></nav></div></div> <div class="
      flex justify-center
    "><div class="preset-page-wrapper mb-saib"><!></div></div></div></div>`);
function MainLayout($$anchor, $$props) {
	prop($$props, "menu", 3, void 0);
	let sidePanel = prop($$props, "sidePanel", 3, void 0);
	let sidePanelOpen = state$1(false);
	var div = root_4();
	var node = child(div);
	var consequent = ($$anchor) => {
		var div_1 = root();
		var div_2 = sibling(child(div_1), 2);
		var div_3 = child(div_2);
		var node_1 = sibling(child(div_3), 2);
		snippet(node_1, () => sidePanel() ?? noop$2);
		reset(div_3);
		var button = sibling(div_3, 2);
		var div_4 = sibling(child(button), 2);
		var node_2 = child(div_4);
		Close_rounded(node_2, {});
		reset(div_4);
		reset(button);
		reset(div_2);
		reset(div_1);
		delegated("click", button, () => {
			set(sidePanelOpen, false);
		});
		append($$anchor, div_1);
	};
	if_block(node, ($$render) => {
		if (sidePanel() && get(sidePanelOpen)) $$render(consequent);
	});
	var div_5 = sibling(node, 2);
	var div_6 = sibling(child(div_5), 2);
	var div_7 = child(div_6);
	var nav = child(div_7);
	var node_3 = child(nav);
	var consequent_2 = ($$anchor) => {
		var div_8 = root_1();
		var button_1 = child(div_8);
		var node_4 = child(button_1);
		var consequent_1 = ($$anchor) => {
			Side_panel_close_filled($$anchor, {});
		};
		var alternate = ($$anchor) => {
			Side_panel_open_filled($$anchor, {});
		};
		if_block(node_4, ($$render) => {
			if (get(sidePanelOpen)) $$render(consequent_1);
			else $$render(alternate, -1);
		});
		reset(button_1);
		reset(div_8);
		delegated("click", button_1, () => {
			set(sidePanelOpen, !get(sidePanelOpen));
		});
		append($$anchor, div_8);
	};
	if_block(node_3, ($$render) => {
		if (sidePanel()) $$render(consequent_2);
	});
	var node_5 = sibling(node_3, 2);
	var consequent_3 = ($$anchor) => {
		var div_9 = root_3();
		Anchor(child(div_9), {
			href: "/",
			children: ($$anchor, $$slotProps) => {
				var div_10 = root_2();
				append($$anchor, div_10);
			},
			$$slots: { default: true }
		});
		reset(div_9);
		append($$anchor, div_9);
	};
	if_block(node_5, ($$render) => {
		if (!$$props.hideHome) $$render(consequent_3);
	});
	reset(nav);
	var nav_1 = sibling(nav, 2);
	var div_11 = child(nav_1);
	NextTheme(child(div_11), {});
	reset(div_11);
	var div_12 = sibling(div_11, 2);
	Settings(child(div_12), {});
	reset(div_12);
	reset(nav_1);
	reset(div_7);
	reset(div_6);
	var div_13 = sibling(div_6, 2);
	var div_14 = child(div_13);
	var node_9 = child(div_14);
	snippet(node_9, () => $$props.children ?? noop$2);
	reset(div_14);
	reset(div_13);
	reset(div_5);
	reset(div);
	append($$anchor, div);
}
delegate(["click"]);
//#endregion
export { isEditableElement as $, isValidTabEvent as A, isModifierKey as B, defaultItemToId as C, queueBeforeEvent as D, isOverflowElement$1 as E, getEventKey as F, isMac as G, isPrintableKey as H, getEventPoint as I, getActiveElement as J, isSafari as K, getEventTarget as L, setElementChecked as M, trackFormControl as N, raf$1 as O, addDomEvent as P, isAnchorElement as Q, isContextMenuEvent as R, visuallyHiddenStyle as S, queryAll as T, isVirtualClick as U, isOpeningInNewTab as V, isFirefox as W, getWindow$1 as X, getDocument as Y, isActiveElement as Z, useEnvironmentContext as _, next as _t, Portal as a, pipe as at, mergeProps as b, createContext as bt, getPlacementSide as c, createMachine as ct, PresenceProvider as d, runIfFn as dt, isHTMLElement$1 as et, usePresenceContext as f, hasProp as ft, useLocaleContext as g, last as gt, createAnatomy as h, first as ht, CheckIcon as i, noop as it, dispatchInputCheckedEvent as j, getInitialFocus as k, useFieldContext as l, mergeProps$1 as lt, usePresence as m, isEqual$1 as mt, Anchor as n, dataAttr as nt, getPlacementStyles as o, wrap as ot, splitPresenceProps as p, isFunction as pt, contains as q, ColorPicker as r, getByOwnerId as rt, getPlacement as s, createGuards as st, MainLayout as t, ariaAttr as tt, trackDismissableElement as u, cast as ut, Factory as v, prev as vt, indexOfId as w, normalizeProps as x, useMachine as y, createSplitProps as yt, isDownloadingEvent as z };
