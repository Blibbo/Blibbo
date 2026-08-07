import { _ as hasContext, a as attributes, at as to_array, c as element, f as spread_props, g as getContext, h as getAllContexts, i as attr_class, it as run, l as ensure_array_like, m as createContext$1, n as onDestroy, o as bind_props, p as stringify, rt as noop, s as derived, u as props_id, v as setContext, x as escape_html } from "./index-server.js";
import { c as GREEN_ACCENT, f as YELLOW_ACCENT, g as validColor, h as readableOnLight, l as JENNI_ACCENT, m as readableOnDark, n as getStyleContext, o as ACCENT, p as opaqueColor, s as BLUE_ACCENT, u as ORANGE_ACCENT } from "./main.svelte.js";
import { a as Close_rounded, i as Meatballs_h, n as Hamburger_md, r as Meatballs_v, t as Cog } from "./cog.js";
import { INIT_STATE, MachineStatus, createScope, findTransition, getExitEnterStates, hasTag, matchesState, mergeProps, resolveStateValue } from "@zag-js/core";
import { createNormalizer } from "@zag-js/types";
import { callAll, compact, ensure, identity, isFunction, isString, runIfFn, toArray, warn } from "@zag-js/utils";
import * as presence from "@zag-js/presence";
import * as colorPicker from "@zag-js/color-picker";
import { parse as parseColor } from "@zag-js/color-picker";
import * as dialog from "@zag-js/dialog";
//#region ~icons/carbon/side-panel-open-filled.svelte
function Side_panel_open_filled($$renderer, $$props) {
	const { $$slots, $$events, ...p } = $$props;
	$$renderer.push(`<svg${attributes({
		viewBox: "0 0 32 32",
		width: "1.2em",
		height: "1.2em",
		...p
	}, void 0, void 0, void 0, 3)}><path fill="currentColor" d="M28 4H4c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 22H12v-9h10.2l-3.6 3.6L20 22l6-6l-6-6l-1.4 1.4l3.6 3.6H12V6h16z"></path></svg>`);
}
//#endregion
//#region src/lib/style/components/NextTheme.svelte
function NextTheme($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { class: externalClass, children, $$slots, $$events, ...rest } = $$props;
		const manager = getStyleContext();
		const NextThemeIcon = derived(() => manager.computed.nextThemeIcon);
		if (manager.computed.selectedTheme.id !== manager.computed.nextTheme.id) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<button${attributes({
				...rest,
				"aria-label": "Toggle theme",
				class: `preset-interactive ${children ? "flex space-x-[0.5em] items-center" : ""} ${stringify(externalClass ?? "")}`
			})}>`);
			if (NextThemeIcon()) {
				$$renderer.push("<!--[-->");
				NextThemeIcon()($$renderer, {});
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
			$$renderer.push(` `);
			children?.($$renderer);
			$$renderer.push(`<!----></button>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
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
function mergeProps$1(...args) {
	const classNames = [];
	for (const props of args) {
		if (!props) continue;
		if ("class" in props && props.class != null) classNames.push(props.class);
	}
	const merged = mergeProps(...args);
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
	let value = initial;
	const controlled = derived(() => props().value !== void 0);
	let valueRef = { current: run(() => value) };
	let prevValue = { current: void 0 };
	const setValueFn = (v) => {
		const next = isFunction(v) ? v(valueRef.current) : v;
		const prev = prevValue.current;
		if (props().debug) console.log(`[bindable > ${props().debug}] setValue`, {
			next,
			prev
		});
		if (!controlled()) value = next;
		if (!eq(next, prev)) props().onChange?.(next, prev);
	};
	function get() {
		return controlled() ? props().value : value;
	}
	return {
		initial,
		ref: valueRef,
		get,
		set(val) {
			const exec = props().sync ? noop : identity;
			run(() => exec(() => setValueFn(val)));
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
var track = (deps, effect) => {};
//#endregion
//#region node_modules/@zag-js/svelte/dist/machine.svelte.js
function access(userProps) {
	if (isFunction(userProps)) return userProps();
	return userProps;
}
function useMachine(machine, userProps) {
	const scope = derived(() => {
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
	const props = derived(() => machine.props?.({
		props: compact(access(userProps)),
		scope: scope()
	}) ?? access(userProps));
	const prop = useProp(() => props());
	const context = machine.context?.({
		prop,
		bindable,
		get scope() {
			return scope();
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
			const currentState = state.get();
			return hasTag(machine, currentState, tag);
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
		scope: scope(),
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
			scope: scope(),
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
			if (prevState === INIT_STATE) {
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
			return scope();
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
function flush(fn) {}
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
function Svg_factory($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { as, ref = null, $$slots, $$events, ...props } = $$props;
		element($$renderer, as, () => {
			$$renderer.push(`${attributes({ ...props }, void 0, void 0, void 0, 3)}`);
		});
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/factory/factory.svelte
function Factory($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		/**
		* The HTML tag of the component.
		*/
		/**
		* The bindable ref of the component.
		*/
		let { asChild, children, as, ref = null, $$slots, $$events, ...rest } = $$props;
		const propsFn = (props) => mergeProps$1(rest, props ?? {});
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (asChild) {
				$$renderer.push("<!--[0-->");
				asChild?.($$renderer, propsFn);
				$$renderer.push(`<!---->`);
			} else if (isVoidSVGTag(as)) {
				$$renderer.push("<!--[1-->");
				Svg_factory($$renderer, spread_props([
					{ as },
					rest,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
			} else if (isVoidHTMLTag(as)) {
				$$renderer.push("<!--[2-->");
				element($$renderer, as, () => {
					$$renderer.push(`${attributes({ ...rest })}`);
				});
			} else if (as === "textarea") {
				$$renderer.push("<!--[3-->");
				$$renderer.push(`<textarea${attributes({ ...rest })}></textarea>`);
			} else {
				$$renderer.push("<!--[-1-->");
				element($$renderer, as, () => {
					$$renderer.push(`${attributes({ ...rest })}`);
				}, () => {
					children?.($$renderer);
					$$renderer.push(`<!---->`);
				});
			}
			$$renderer.push(`<!--]-->`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
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
//#region node_modules/@ark-ui/svelte/dist/components/presence/use-presence.svelte.js
var usePresence = (props) => {
	const resolvedProps = derived(() => runIfFn(props));
	const $$d = derived(() => splitRenderStrategyProps(resolvedProps())), $$derived_array = derived(() => to_array($$d(), 2)), renderStrategyProps = derived(() => $$derived_array()[0]), machineProps = derived(() => $$derived_array()[1]);
	const service = useMachine(presence.machine, () => machineProps());
	const api = derived(() => presence.connect(service, normalizeProps));
	let wasEverPresent = false;
	const setNode = (node) => {
		if (!node) return;
		service.send({
			type: "NODE.SET",
			node
		});
	};
	const unmounted = derived(() => !api().present && renderStrategyProps().lazyMount || renderStrategyProps().unmountOnExit && !api().present && wasEverPresent);
	const result = derived(() => ({
		getPresenceProps: () => ({
			"data-state": api().skip && resolvedProps().skipAnimationOnMount ? void 0 : resolvedProps().present ? "open" : "closed",
			hidden: !api().present
		}),
		present: api().present,
		setNode,
		unmounted: unmounted()
	}));
	return () => result();
};
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/presence/use-presence-context.js
var [PresenceProvider, usePresenceContext] = createContext({ name: "PresenceContext" });
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/field/use-field-context.js
var [FieldProvider, useFieldContext] = createContext({
	name: "FieldContext",
	strict: false
});
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
function Color_picker_area($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const $$d = derived(() => createSplitProps()(props, ["xChannel", "yChannel"])), $$derived_array = derived(() => to_array($$d(), 2)), areaProps = derived(() => $$derived_array()[0]), localProps = derived(() => $$derived_array()[1]);
		const colorPicker = useColorPickerContext();
		const mergedProps = derived(() => mergeProps$1(colorPicker().getAreaProps(areaProps()), localProps()));
		ColorPickerAreaPropsProvider(() => areaProps());
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Factory($$renderer, spread_props([
				{ as: "div" },
				mergedProps(),
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					}
				}
			]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-area-background.svelte
function Color_picker_area_background($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const colorPicker = useColorPickerContext();
		const areaProps = useColorPickerAreaPropsContext();
		const mergedProps = derived(() => mergeProps$1(colorPicker().getAreaBackgroundProps(areaProps()), props));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Factory($$renderer, spread_props([
				{ as: "div" },
				mergedProps(),
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					}
				}
			]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-area-thumb.svelte
function Color_picker_area_thumb($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const colorPicker = useColorPickerContext();
		const areaProps = useColorPickerAreaPropsContext();
		const mergedProps = derived(() => mergeProps$1(colorPicker().getAreaThumbProps(areaProps()), props));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Factory($$renderer, spread_props([
				{ as: "div" },
				mergedProps(),
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					}
				}
			]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-channel-input.svelte
function Color_picker_channel_input($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const $$d = derived(() => createSplitProps()(props, ["channel", "orientation"])), $$derived_array = derived(() => to_array($$d(), 2)), channelProps = derived(() => $$derived_array()[0]), localProps = derived(() => $$derived_array()[1]);
		const colorPicker = useColorPickerContext();
		const mergedProps = derived(() => mergeProps$1(colorPicker().getChannelInputProps(channelProps()), localProps()));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Factory($$renderer, spread_props([
				{ as: "input" },
				mergedProps(),
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					}
				}
			]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
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
function Color_picker_channel_slider($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const $$d = derived(() => createSplitProps()(props, ["channel", "orientation"])), $$derived_array = derived(() => to_array($$d(), 2)), channelProps = derived(() => $$derived_array()[0]), localProps = derived(() => $$derived_array()[1]);
		const colorPicker = useColorPickerContext();
		const formatProps = useColorPickerFormatPropsContext();
		const channelSliderProps = derived(() => ({
			...channelProps(),
			...formatProps()
		}));
		const mergedProps = derived(() => mergeProps$1(colorPicker().getChannelSliderProps(channelSliderProps()), localProps()));
		ColorPickerChannelPropsProvider(() => channelProps());
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Factory($$renderer, spread_props([
				{ as: "div" },
				mergedProps(),
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					}
				}
			]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-channel-slider-thumb.svelte
function Color_picker_channel_slider_thumb($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const colorPicker = useColorPickerContext();
		const channelProps = useColorPickerChannelPropsContext();
		const formatProps = useColorPickerFormatPropsContext();
		const channelSliderProps = derived(() => ({
			...channelProps(),
			...formatProps()
		}));
		const mergedProps = derived(() => mergeProps$1(colorPicker().getChannelSliderThumbProps(channelSliderProps()), props));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Factory($$renderer, spread_props([
				{ as: "div" },
				mergedProps(),
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					}
				}
			]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-channel-slider-track.svelte
function Color_picker_channel_slider_track($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const colorPicker = useColorPickerContext();
		const channelProps = useColorPickerChannelPropsContext();
		const formatProps = useColorPickerFormatPropsContext();
		const channelSliderProps = derived(() => ({
			...channelProps(),
			...formatProps()
		}));
		const mergedProps = derived(() => mergeProps$1(colorPicker().getChannelSliderTrackProps(channelSliderProps()), props));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Factory($$renderer, spread_props([
				{ as: "div" },
				mergedProps(),
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					}
				}
			]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-content.svelte
function Color_picker_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const colorPicker = useColorPickerContext();
		const presence = usePresenceContext();
		const mergedProps = derived(() => mergeProps$1(colorPicker().getContentProps(), presence().getPresenceProps(), props));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (!presence().unmounted) {
				$$renderer.push("<!--[0-->");
				Factory($$renderer, spread_props([
					{ as: "div" },
					mergedProps(),
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]-->`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-eye-dropper-trigger.svelte
function Color_picker_eye_dropper_trigger($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const colorPicker = useColorPickerContext();
		const mergedProps = derived(() => mergeProps$1(colorPicker().getEyeDropperTriggerProps(), props));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Factory($$renderer, spread_props([
				{ as: "button" },
				mergedProps(),
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					}
				}
			]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-hidden-input.svelte
function Color_picker_hidden_input($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const colorPicker = useColorPickerContext();
		const mergedProps = derived(() => mergeProps$1(colorPicker().getHiddenInputProps(), props));
		const field = useFieldContext();
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Factory($$renderer, spread_props([
				{
					as: "input",
					"aria-describedby": field?.()?.ariaDescribedby
				},
				mergedProps(),
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					}
				}
			]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-label.svelte
function Color_picker_label($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const colorPicker = useColorPickerContext();
		const mergedProps = derived(() => mergeProps$1(colorPicker().getLabelProps(), props));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Factory($$renderer, spread_props([
				{ as: "label" },
				mergedProps(),
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					}
				}
			]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-positioner.svelte
function Color_picker_positioner($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const colorPicker = useColorPickerContext();
		const mergedProps = derived(() => mergeProps$1(colorPicker().getPositionerProps(), props));
		const presence = usePresenceContext();
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (!presence().unmounted) {
				$$renderer.push("<!--[0-->");
				Factory($$renderer, spread_props([
					{ as: "div" },
					mergedProps(),
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]-->`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
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
	const machineProps = derived(() => {
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
	const service = useMachine(colorPicker.machine, () => machineProps());
	const api = derived(() => colorPicker.connect(service, normalizeProps));
	return () => api();
};
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-root.svelte
function Color_picker_root($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const providedId = props_id($$renderer);
		let { ref = null, value = void 0, open = void 0, $$slots, $$events, ...props } = $$props;
		const $$d = derived(() => splitPresenceProps(props)), $$derived_array = derived(() => to_array($$d(), 2)), presenceProps = derived(() => $$derived_array()[0]), colorPickerProps = derived(() => $$derived_array()[1]);
		const $$d_1 = derived(() => splitColorPickerProps(colorPickerProps())), $$derived_array_1 = derived(() => to_array($$d_1(), 2)), useColorPickerProps = derived(() => $$derived_array_1()[0]), localProps = derived(() => $$derived_array_1()[1]);
		const machineProps = derived(() => ({
			...useColorPickerProps(),
			id: useColorPickerProps().id ?? providedId,
			value,
			open,
			onValueChange(details) {
				useColorPickerProps().onValueChange?.(details);
				if (value !== void 0) value = details.value;
			},
			onOpenChange(details) {
				useColorPickerProps().onOpenChange?.(details);
				if (open !== void 0) open = details.open;
			}
		}));
		const colorPicker = useColorPicker(() => machineProps());
		const presence = usePresence(() => ({
			present: colorPicker().open,
			...presenceProps()
		}));
		const mergedProps = derived(() => mergeProps$1(colorPicker().getRootProps(), localProps()));
		ColorPickerProvider(colorPicker);
		PresenceProvider(presence);
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Factory($$renderer, spread_props([
				{ as: "div" },
				mergedProps(),
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					}
				}
			]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, {
			ref,
			value,
			open
		});
	});
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
function Color_picker_swatch($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const $$d = derived(() => createSplitProps()(props, ["value", "respectAlpha"])), $$derived_array = derived(() => to_array($$d(), 2)), swatchProps = derived(() => $$derived_array()[0]), localProps = derived(() => $$derived_array()[1]);
		const colorPicker = useColorPickerContext();
		const mergedProps = derived(() => mergeProps$1(colorPicker().getSwatchProps(swatchProps()), localProps()));
		ColorPickerSwatchPropsProvider(() => swatchProps());
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Factory($$renderer, spread_props([
				{ as: "div" },
				mergedProps(),
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					}
				}
			]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-swatch-group.svelte
function Color_picker_swatch_group($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const colorPicker = useColorPickerContext();
		const mergedProps = derived(() => mergeProps$1(colorPicker().getSwatchGroupProps(), props));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Factory($$renderer, spread_props([
				{ as: "div" },
				mergedProps(),
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					}
				}
			]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-swatch-indicator.svelte
function Color_picker_swatch_indicator($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const colorPicker = useColorPickerContext();
		const swatchProps = useColorPickerSwatchPropsContext();
		const mergedProps = derived(() => mergeProps$1(colorPicker().getSwatchIndicatorProps(swatchProps()), props));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Factory($$renderer, spread_props([
				{ as: "div" },
				mergedProps(),
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					}
				}
			]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-swatch-trigger.svelte
function Color_picker_swatch_trigger($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const $$d = derived(() => createSplitProps()(props, ["value", "disabled"])), $$derived_array = derived(() => to_array($$d(), 2)), swatchTriggerProps = derived(() => $$derived_array()[0]), localProps = derived(() => $$derived_array()[1]);
		const colorPicker = useColorPickerContext();
		const mergedProps = derived(() => mergeProps$1(colorPicker().getSwatchTriggerProps(swatchTriggerProps()), localProps()));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Factory($$renderer, spread_props([
				{ as: "button" },
				mergedProps(),
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					}
				}
			]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-transparency-grid.svelte
function Color_picker_transparency_grid($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const $$d = derived(() => createSplitProps()(props, ["size"])), $$derived_array = derived(() => to_array($$d(), 2)), gridProps = derived(() => $$derived_array()[0]), localProps = derived(() => $$derived_array()[1]);
		const colorPicker = useColorPickerContext();
		const mergedProps = derived(() => mergeProps$1(colorPicker().getTransparencyGridProps(gridProps()), localProps()));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Factory($$renderer, spread_props([
				{ as: "div" },
				mergedProps(),
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					}
				}
			]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/color-picker/color-picker-trigger.svelte
function Color_picker_trigger($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const colorPicker = useColorPickerContext();
		const mergedProps = derived(() => mergeProps$1(colorPicker().getTriggerProps(), props));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Factory($$renderer, spread_props([
				{ as: "button" },
				mergedProps(),
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					}
				}
			]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/dialog/use-dialog-context.js
var [DialogProvider, useDialogContext] = createContext({ name: "DialogContext" });
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/dialog/dialog-backdrop.svelte
function Dialog_backdrop($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const dialog = useDialogContext();
		const renderStrategyProps = useRenderStrategyPropsContext();
		const presence = usePresence(() => ({
			...renderStrategyProps(),
			present: dialog().open
		}));
		const mergedProps = derived(() => mergeProps$1(dialog().getBackdropProps(), presence().getPresenceProps(), props));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (!presence().unmounted) {
				$$renderer.push("<!--[0-->");
				Factory($$renderer, spread_props([
					{ as: "div" },
					mergedProps(),
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]-->`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/dialog/dialog-close-trigger.svelte
function Dialog_close_trigger($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const dialog = useDialogContext();
		const mergedProps = derived(() => mergeProps$1(dialog().getCloseTriggerProps(), props));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Factory($$renderer, spread_props([
				{ as: "button" },
				mergedProps(),
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					}
				}
			]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/dialog/dialog-content.svelte
function Dialog_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const dialog = useDialogContext();
		const presence = usePresenceContext();
		const mergedProps = derived(() => mergeProps$1(dialog().getContentProps(), presence().getPresenceProps(), props));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (!presence().unmounted) {
				$$renderer.push("<!--[0-->");
				Factory($$renderer, spread_props([
					{ as: "div" },
					mergedProps(),
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]-->`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/dialog/dialog-description.svelte
function Dialog_description($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const dialog = useDialogContext();
		const mergedProps = derived(() => mergeProps$1(dialog().getDescriptionProps(), props));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Factory($$renderer, spread_props([
				{ as: "p" },
				mergedProps(),
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					}
				}
			]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/dialog/dialog-positioner.svelte
function Dialog_positioner($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const dialog = useDialogContext();
		const presence = usePresenceContext();
		const mergedProps = derived(() => mergeProps$1(dialog().getPositionerProps(), props));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (!presence().unmounted) {
				$$renderer.push("<!--[0-->");
				Factory($$renderer, spread_props([
					{ as: "div" },
					mergedProps(),
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]-->`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/dialog/use-dialog.svelte.js
var useDialog = (props) => {
	const env = useEnvironmentContext();
	const locale = useLocaleContext();
	const machineProps = derived(() => {
		const resolvedProps = runIfFn(props) || {};
		return {
			getRootNode: env().getRootNode,
			dir: locale().dir,
			...resolvedProps
		};
	});
	const service = useMachine(dialog.machine, () => machineProps());
	const api = derived(() => dialog.connect(service, normalizeProps));
	return () => api();
};
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/dialog/dialog-root.svelte
function Dialog_root($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const providedId = props_id($$renderer);
		let { open = void 0, children, $$slots, $$events, ...props } = $$props;
		const $$d = derived(() => splitPresenceProps(props)), $$derived_array = derived(() => to_array($$d(), 2)), presenceProps = derived(() => $$derived_array()[0]), localProps = derived(() => $$derived_array()[1]);
		const $$d_1 = derived(() => splitRenderStrategyProps(presenceProps())), $$derived_array_1 = derived(() => to_array($$d_1(), 1)), renderStrategyProps = derived(() => $$derived_array_1()[0]);
		const machineProps = derived(() => {
			return {
				...localProps(),
				id: localProps().id ?? providedId,
				open,
				onOpenChange(details) {
					localProps().onOpenChange?.(details);
					if (open !== void 0) open = details.open;
				}
			};
		});
		const dialog = useDialog(() => machineProps());
		const presenceMachineProps = derived(() => ({
			...presenceProps(),
			present: dialog().open
		}));
		const presence = usePresence(() => presenceMachineProps());
		DialogProvider(dialog);
		RenderStrategyPropsProvider(() => renderStrategyProps());
		PresenceProvider(presence);
		children?.($$renderer);
		$$renderer.push(`<!---->`);
		bind_props($$props, { open });
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/dialog/dialog-title.svelte
function Dialog_title($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const dialog = useDialogContext();
		const mergedProps = derived(() => mergeProps$1(dialog().getTitleProps(), props));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Factory($$renderer, spread_props([
				{ as: "h2" },
				mergedProps(),
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					}
				}
			]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/dialog/dialog-trigger.svelte
function Dialog_trigger($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const $$d = derived(() => createSplitProps()(props, ["value"])), $$derived_array = derived(() => to_array($$d(), 2)), triggerProps = derived(() => $$derived_array()[0]), localProps = derived(() => $$derived_array()[1]);
		const dialog = useDialogContext();
		const presence = usePresenceContext();
		const mergedProps = derived(() => {
			const triggerPropsRaw = dialog().getTriggerProps(triggerProps());
			return mergeProps$1({
				...triggerPropsRaw,
				"aria-controls": presence().unmounted ? void 0 : triggerPropsRaw["aria-controls"]
			}, localProps());
		});
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Factory($$renderer, spread_props([
				{ as: "button" },
				mergedProps(),
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					}
				}
			]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/portal/portal.svelte
function Portal($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		/**
		* If true, the portal will not be rendered.
		*/
		/**
		* The container to render the portal into.
		*/
		/**
		* The children to render in the portal.
		*/
		let { children, container = globalThis.document?.body, disabled = false } = $$props;
		getAllContexts();
		if (disabled) {
			$$renderer.push("<!--[0-->");
			children?.($$renderer);
			$$renderer.push(`<!---->`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/lib/components/dialog/DialogRoot.svelte
function DialogRoot($$renderer, $$props) {
	let { children, $$slots, $$events, ...rest } = $$props;
	if (Dialog_root) {
		$$renderer.push("<!--[-->");
		Dialog_root($$renderer, spread_props([rest, {
			children: ($$renderer) => {
				children?.($$renderer);
				$$renderer.push(`<!---->`);
			},
			$$slots: { default: true }
		}]));
		$$renderer.push("<!--]-->");
	} else {
		$$renderer.push("<!--[!-->");
		$$renderer.push("<!--]-->");
	}
}
//#endregion
//#region src/lib/components/icons/SettingsIconSwitch.svelte
function SettingsIconSwitch($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { icon, $$slots, $$events, ...rest } = $$props;
		const Icon = derived(() => (() => {
			switch (icon) {
				case "cog": return Cog;
				case "hamburger": return Hamburger_md;
				case "kebab": return Meatballs_v;
				case "meatballs": return Meatballs_h;
				case "none": return;
			}
		})());
		if (Icon()) {
			$$renderer.push("<!--[-->");
			Icon()($$renderer, spread_props([rest]));
			$$renderer.push("<!--]-->");
		} else {
			$$renderer.push("<!--[!-->");
			$$renderer.push("<!--]-->");
		}
	});
}
//#endregion
//#region src/lib/components/dialog/DialogTrigger.svelte
function DialogTrigger($$renderer, $$props) {
	let { icon, children, $$slots, $$events, ...rest } = $$props;
	if (Dialog_trigger) {
		$$renderer.push("<!--[-->");
		Dialog_trigger($$renderer, spread_props([rest, {
			children: ($$renderer) => {
				SettingsIconSwitch($$renderer, { icon });
				$$renderer.push(`<!----> `);
				children?.($$renderer);
				$$renderer.push(`<!---->`);
			},
			$$slots: { default: true }
		}]));
		$$renderer.push("<!--]-->");
	} else {
		$$renderer.push("<!--[!-->");
		$$renderer.push("<!--]-->");
	}
}
//#endregion
//#region src/lib/components/icons/XIcon.svelte
function XIcon($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Close_rounded($$renderer, spread_props([props]));
}
//#endregion
//#region src/lib/components/dialog/DialogContent.svelte
function DialogContent($$renderer, $$props) {
	let { children, $$slots, $$events, ...rest } = $$props;
	Portal($$renderer, {
		children: ($$renderer) => {
			if (Dialog_backdrop) {
				$$renderer.push("<!--[-->");
				Dialog_backdrop($$renderer, {});
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
			$$renderer.push(` `);
			if (Dialog_positioner) {
				$$renderer.push("<!--[-->");
				Dialog_positioner($$renderer, {
					children: ($$renderer) => {
						if (Dialog_content) {
							$$renderer.push("<!--[-->");
							Dialog_content($$renderer, spread_props([rest, {
								children: ($$renderer) => {
									if (Dialog_close_trigger) {
										$$renderer.push("<!--[-->");
										Dialog_close_trigger($$renderer, {
											children: ($$renderer) => {
												XIcon($$renderer, {});
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
									$$renderer.push(` `);
									children?.($$renderer);
									$$renderer.push(`<!---->`);
								},
								$$slots: { default: true }
							}]));
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
					},
					$$slots: { default: true }
				});
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
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
function ColorPickerRoot($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { type = "any", value = validColor("#000"), children, $$slots, $$events, ...rest } = $$props;
		let pickerValue = derived(() => parseColor(value.d().toHex()));
		let errorMsg = void 0;
		setColorPickerContext(() => {
			return {
				type,
				value,
				errorMsg
			};
		});
		function updateValue(newValue) {
			const wrapError = (validator, msg) => {
				try {
					value = validator(newValue);
					errorMsg = void 0;
				} catch {
					errorMsg = msg;
				}
			};
			switch (type) {
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
		if (Color_picker_root) {
			$$renderer.push("<!--[-->");
			Color_picker_root($$renderer, spread_props([rest, {
				onValueChange: (details) => {
					const newValue = details.valueAsString;
					updateValue(newValue);
				},
				value: pickerValue(),
				children: ($$renderer) => {
					children?.($$renderer);
					$$renderer.push(`<!---->`);
				},
				$$slots: { default: true }
			}]));
			$$renderer.push("<!--]-->");
		} else {
			$$renderer.push("<!--[!-->");
			$$renderer.push("<!--]-->");
		}
		bind_props($$props, { value });
	});
}
//#endregion
//#region ~icons/gg/color-picker.svelte
function Color_picker($$renderer, $$props) {
	const { $$slots, $$events, ...p } = $$props;
	$$renderer.push(`<svg${attributes({
		viewBox: "0 0 24 24",
		width: "1.2em",
		height: "1.2em",
		...p
	}, void 0, void 0, void 0, 3)}><g fill="currentColor"><path d="M20.385 2.879a3 3 0 0 0-4.243 0L14.02 5l-.707-.708a1 1 0 1 0-1.414 1.415l5.657 5.656A1 1 0 0 0 18.97 9.95l-.707-.707l2.122-2.122a3 3 0 0 0 0-4.242"></path><path fill-rule="evenodd" d="M11.93 7.091L4.152 14.87a3 3 0 0 0-.587 3.415L2 19.85l1.414 1.415l1.565-1.566a3 3 0 0 0 3.415-.586l7.778-7.778zm1.414 4.243L11.93 9.92l-6.364 6.364a1 1 0 0 0 1.414 1.414z" clip-rule="evenodd"></path></g></svg>`);
}
//#endregion
//#region src/lib/components/icons/PickerIcon.svelte
function PickerIcon($$renderer, $$props) {
	let { children, $$slots, $$events, ...rest } = $$props;
	Color_picker($$renderer, spread_props([rest, {
		children: ($$renderer) => {
			children?.($$renderer);
			$$renderer.push(`<!---->`);
		},
		$$slots: { default: true }
	}]));
}
//#endregion
//#region src/lib/components/color-picker/ColorPickerSlider.svelte
function ColorPickerSlider($$renderer, $$props) {
	let { transparencyGrid, $$slots, $$events, ...rest } = $$props;
	if (Color_picker_channel_slider) {
		$$renderer.push("<!--[-->");
		Color_picker_channel_slider($$renderer, spread_props([rest, {
			children: ($$renderer) => {
				if (transparencyGrid) {
					$$renderer.push("<!--[0-->");
					if (Color_picker_transparency_grid) {
						$$renderer.push("<!--[-->");
						Color_picker_transparency_grid($$renderer, { class: "rounded-full" });
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--> `);
				if (Color_picker_channel_slider_track) {
					$$renderer.push("<!--[-->");
					Color_picker_channel_slider_track($$renderer, { class: "w-full h-2.5 rounded-full outline outline-(--fg)" });
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
				$$renderer.push(` `);
				if (Color_picker_channel_slider_thumb) {
					$$renderer.push("<!--[-->");
					Color_picker_channel_slider_thumb($$renderer, { class: "size-2 -translate-1/2 rounded-full preset-outline-contrast" });
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
			},
			$$slots: { default: true }
		}]));
		$$renderer.push("<!--]-->");
	} else {
		$$renderer.push("<!--[!-->");
		$$renderer.push("<!--]-->");
	}
}
//#endregion
//#region ~icons/material-symbols/check-rounded.svelte
function Check_rounded($$renderer, $$props) {
	const { $$slots, $$events, ...p } = $$props;
	$$renderer.push(`<svg${attributes({
		viewBox: "0 0 24 24",
		width: "1.2em",
		height: "1.2em",
		...p
	}, void 0, void 0, void 0, 3)}><path fill="currentColor" d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z"></path></svg>`);
}
//#endregion
//#region src/lib/components/icons/CheckIcon.svelte
function CheckIcon($$renderer, $$props) {
	let { children, $$slots, $$events, ...rest } = $$props;
	Check_rounded($$renderer, spread_props([rest, {
		children: ($$renderer) => {
			children?.($$renderer);
			$$renderer.push(`<!---->`);
		},
		$$slots: { default: true }
	}]));
}
//#endregion
//#region src/lib/components/color-picker/ColorPickerSwatchGroup.svelte
function ColorPickerSwatchGroup($$renderer, $$props) {
	let { swatches, $$slots, $$events, ...rest } = $$props;
	if (swatches) {
		$$renderer.push("<!--[0-->");
		if (Color_picker_swatch_group) {
			$$renderer.push("<!--[-->");
			Color_picker_swatch_group($$renderer, spread_props([
				{ class: "flex flex-wrap gap-[0.3rem]" },
				rest,
				{
					children: ($$renderer) => {
						$$renderer.push(`<!--[-->`);
						const each_array = ensure_array_like(swatches);
						for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
							let color = each_array[$$index];
							if (Color_picker_swatch_trigger) {
								$$renderer.push("<!--[-->");
								Color_picker_swatch_trigger($$renderer, {
									value: color,
									children: ($$renderer) => {
										if (Color_picker_swatch) {
											$$renderer.push("<!--[-->");
											Color_picker_swatch($$renderer, {
												value: color,
												class: "size-6 flex justify-center items-center rounded-md outline outline-(--fg)",
												children: ($$renderer) => {
													if (Color_picker_swatch_indicator) {
														$$renderer.push("<!--[-->");
														Color_picker_swatch_indicator($$renderer, {
															children: ($$renderer) => {
																CheckIcon($$renderer, { class: "preset-outline-svg" });
															},
															$$slots: { default: true }
														});
														$$renderer.push("<!--]-->");
													} else {
														$$renderer.push("<!--[!-->");
														$$renderer.push("<!--]-->");
													}
												},
												$$slots: { default: true }
											});
											$$renderer.push("<!--]-->");
										} else {
											$$renderer.push("<!--[!-->");
											$$renderer.push("<!--]-->");
										}
									},
									$$slots: { default: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
						}
						$$renderer.push(`<!--]-->`);
					},
					$$slots: { default: true }
				}
			]));
			$$renderer.push("<!--]-->");
		} else {
			$$renderer.push("<!--[!-->");
			$$renderer.push("<!--]-->");
		}
	} else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]-->`);
}
//#endregion
//#region src/lib/components/color-picker/ColorPickerContent.svelte
function ColorPickerContent($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { swatches, $$slots, $$events, ...rest } = $$props;
		const ctx = getColorPickerContext();
		if (Color_picker_positioner) {
			$$renderer.push("<!--[-->");
			Color_picker_positioner($$renderer, {
				children: ($$renderer) => {
					if (Color_picker_content) {
						$$renderer.push("<!--[-->");
						Color_picker_content($$renderer, spread_props([rest, {
							children: ($$renderer) => {
								if (Color_picker_area) {
									$$renderer.push("<!--[-->");
									Color_picker_area($$renderer, {
										class: "h-24",
										children: ($$renderer) => {
											if (Color_picker_area_background) {
												$$renderer.push("<!--[-->");
												Color_picker_area_background($$renderer, { class: "size-full rounded-md outline outline-(--fg)" });
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` `);
											if (Color_picker_area_thumb) {
												$$renderer.push("<!--[-->");
												Color_picker_area_thumb($$renderer, { class: "rounded-full size-4 preset-outline-contrast" });
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
										},
										$$slots: { default: true }
									});
									$$renderer.push("<!--]-->");
								} else {
									$$renderer.push("<!--[!-->");
									$$renderer.push("<!--]-->");
								}
								$$renderer.push(` <div class="flex space-x-2">`);
								if (Color_picker_eye_dropper_trigger) {
									$$renderer.push("<!--[-->");
									Color_picker_eye_dropper_trigger($$renderer, {
										class: "size-8 flex justify-center items-center preset-button rounded-md outline outline-(--fg)",
										children: ($$renderer) => {
											PickerIcon($$renderer, {});
										},
										$$slots: { default: true }
									});
									$$renderer.push("<!--]-->");
								} else {
									$$renderer.push("<!--[!-->");
									$$renderer.push("<!--]-->");
								}
								$$renderer.push(` <div${attr_class(`flex-1 flex flex-col py-1 ${ctx().type === "any" ? "justify-between" : "justify-center"}`)}>`);
								ColorPickerSlider($$renderer, { channel: "hue" });
								$$renderer.push(`<!----> `);
								if (ctx().type === "any") {
									$$renderer.push("<!--[0-->");
									ColorPickerSlider($$renderer, {
										channel: "alpha",
										transparencyGrid: true
									});
								} else $$renderer.push("<!--[-1-->");
								$$renderer.push(`<!--]--></div></div> `);
								if (Color_picker_channel_input) {
									$$renderer.push("<!--[-->");
									Color_picker_channel_input($$renderer, {
										channel: "hex",
										class: "p-1 rounded-md outline outline-(--fg) w-full"
									});
									$$renderer.push("<!--]-->");
								} else {
									$$renderer.push("<!--[!-->");
									$$renderer.push("<!--]-->");
								}
								$$renderer.push(` `);
								ColorPickerSwatchGroup($$renderer, { swatches });
								$$renderer.push(`<!----> `);
								if (ctx().errorMsg) {
									$$renderer.push("<!--[0-->");
									$$renderer.push(`<p class="bg-(--fg) text-(--bg) text-xs rounded-md p-1">${escape_html(ctx().errorMsg)}</p>`);
								} else $$renderer.push("<!--[-1-->");
								$$renderer.push(`<!--]-->`);
							},
							$$slots: { default: true }
						}]));
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
				},
				$$slots: { default: true }
			});
			$$renderer.push("<!--]-->");
		} else {
			$$renderer.push("<!--[!-->");
			$$renderer.push("<!--]-->");
		}
		$$renderer.push(` `);
		if (Color_picker_hidden_input) {
			$$renderer.push("<!--[-->");
			Color_picker_hidden_input($$renderer, {});
			$$renderer.push("<!--]-->");
		} else {
			$$renderer.push("<!--[!-->");
			$$renderer.push("<!--]-->");
		}
	});
}
//#endregion
//#region src/lib/components/color-picker/ColorPickerTrigger.svelte
function ColorPickerTrigger($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { children, $$slots, $$events, ...rest } = $$props;
		const ctx = getColorPickerContext();
		if (Color_picker_label) {
			$$renderer.push("<!--[-->");
			Color_picker_label($$renderer, {
				hidden: true,
				children: ($$renderer) => {
					children?.($$renderer);
					$$renderer.push(`<!---->`);
				},
				$$slots: { default: true }
			});
			$$renderer.push("<!--]-->");
		} else {
			$$renderer.push("<!--[!-->");
			$$renderer.push("<!--]-->");
		}
		$$renderer.push(` `);
		if (Color_picker_trigger) {
			$$renderer.push("<!--[-->");
			Color_picker_trigger($$renderer, spread_props([
				{ class: "flex items-center p-1 gap-x-1" },
				rest,
				{
					children: ($$renderer) => {
						$$renderer.push(`<div class="rounded-full relative outline outline-(--fg)">`);
						if (Color_picker_transparency_grid) {
							$$renderer.push("<!--[-->");
							Color_picker_transparency_grid($$renderer, {
								hidden: ctx().type !== "any",
								class: "rounded-full"
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
						$$renderer.push(` `);
						if (Color_picker_swatch) {
							$$renderer.push("<!--[-->");
							Color_picker_swatch($$renderer, {
								value: ctx().value?.raw,
								class: "relative size-6 rounded-full"
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
						$$renderer.push(`</div> `);
						children?.($$renderer);
						$$renderer.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
			$$renderer.push("<!--]-->");
		} else {
			$$renderer.push("<!--[!-->");
			$$renderer.push("<!--]-->");
		}
	});
}
//#endregion
//#region src/lib/components/color-picker/index.ts
var ColorPicker = Object.assign(ColorPickerRoot, {
	Content: ColorPickerContent,
	Trigger: ColorPickerTrigger
});
//#endregion
//#region src/lib/style/components/Settings.svelte
function Settings($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const manager = getStyleContext();
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Dialog($$renderer, {
				children: ($$renderer) => {
					Dialog.Trigger($$renderer, { icon: "cog" });
					$$renderer.push(`<!----> `);
					Dialog.Content($$renderer, {
						children: ($$renderer) => {
							Dialog.Title($$renderer, {
								class: "preset-title",
								children: ($$renderer) => {
									$$renderer.push(`<!---->Settings`);
								},
								$$slots: { default: true }
							});
							$$renderer.push(`<!----> <div>`);
							NextTheme($$renderer, {
								class: "hover:preset-next-theme focus-visible:preset-next-theme active:preset-next-theme focus-visible:outline-none preset-theme-transition p-2 rounded-lg",
								children: ($$renderer) => {
									$$renderer.push(`<p>Next theme</p>`);
								},
								$$slots: { default: true }
							});
							$$renderer.push(`<!----></div> `);
							if (manager.runtime.accent.kind === "static") {
								$$renderer.push("<!--[0-->");
								ColorPicker($$renderer, {
									type: "any",
									get value() {
										return manager.runtime.accent.value;
									},
									set value($$value) {
										manager.runtime.accent.value = $$value;
										$$settled = false;
									},
									children: ($$renderer) => {
										ColorPicker.Trigger($$renderer, {
											children: ($$renderer) => {
												$$renderer.push(`<!---->Accent Color`);
											},
											$$slots: { default: true }
										});
										$$renderer.push(`<!----> `);
										ColorPicker.Content($$renderer, { swatches: [
											ACCENT,
											JENNI_ACCENT,
											BLUE_ACCENT,
											GREEN_ACCENT,
											ORANGE_ACCENT,
											YELLOW_ACCENT
										] });
										$$renderer.push(`<!---->`);
									},
									$$slots: { default: true }
								});
							} else $$renderer.push("<!--[-1-->");
							$$renderer.push(`<!--]-->`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!---->`);
				},
				$$slots: { default: true }
			});
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
	});
}
//#endregion
//#region src/lib/components/Anchor.svelte
function Anchor($$renderer, $$props) {
	let { children, $$slots, $$events, ...rest } = $$props;
	$$renderer.push(`<a${attributes({
		draggable: "false",
		...rest
	})}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></a>`);
}
//#endregion
//#region src/lib/components/MainLayout.svelte
function MainLayout($$renderer, $$props) {
	let { menu = void 0, sidePanel = void 0, hideHome, children } = $$props;
	$$renderer.push(`<div class="block min-h-dvh max-w-dvw overflow-clip sm:flex">`);
	$$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]--> <div class="sm:flex-1"><div class="preset-accent h-sait"></div> <div class="preset-accent md:flex md:justify-center text-nowrap text-md sm:text-xl select-none preset-topbar-height"><div class="preset-page-wrapper px-0 flex justify-between items-center h-full *:flex *:items-center *:h-full *:*:preset-page *:*:h-full *:*:*:px-3 *:*:*:h-full *:*:*:flex *:*:*:items-center *:*:*:overflow-clip *:*:*:preset-accent *:*:*:preset-theme-transition *:*:*:preset-button"><nav>`);
	if (sidePanel) {
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<div><button class="preset-interactive">`);
		$$renderer.push("<!--[-1-->");
		Side_panel_open_filled($$renderer, {});
		$$renderer.push(`<!--]--></button></div>`);
	} else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]--> `);
	if (!hideHome) {
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<div>`);
		Anchor($$renderer, {
			href: "/",
			children: ($$renderer) => {
				$$renderer.push(`<div class="font-[brush-script] text-3xl sm:text-4xl">Blibbo</div>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div>`);
	} else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]--></nav> <nav><div>`);
	NextTheme($$renderer, {});
	$$renderer.push(`<!----></div> <div>`);
	Settings($$renderer, {});
	$$renderer.push(`<!----></div></nav></div></div> <div class="flex justify-center"><div class="preset-page-wrapper mb-saib">`);
	children?.($$renderer);
	$$renderer.push(`<!----></div></div></div></div>`);
}
//#endregion
export { createSplitProps as _, Portal as a, usePresenceContext as c, useLocaleContext as d, useEnvironmentContext as f, normalizeProps as g, mergeProps$1 as h, CheckIcon as i, usePresence as l, useMachine as m, Anchor as n, useFieldContext as o, Factory as p, ColorPicker as r, PresenceProvider as s, MainLayout as t, splitPresenceProps as u, createContext as v };
