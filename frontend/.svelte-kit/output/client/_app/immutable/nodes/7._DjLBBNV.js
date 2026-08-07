import { A as from_svg, C as if_block, D as append, G as child, H as template_effect, K as first_child, L as createAttachmentKey, M as text, N as delegate, O as comment, P as delegated, R as get, U as user_effect, a as prop, b as snippet, c as init, ct as pop, d as attribute_effect, et as derived_safe_equal, ft as next, ht as to_array, j as props_id, k as from_html, lt as push, m as set_class, mt as noop, o as rest_props, pt as reset, q as sibling, r as onMount, s as spread_props, tt as user_derived, y as component } from "../chunks/D_ZKicVc.js";
import "../chunks/DhaYE-8x.js";
import { c as BLUE_ACCENT, f as STYLE_PRESETS, h as opaqueColor, m as staticAccent, n as getStyleContext, r as overrideStyle, s as ACCENT, u as JENNI_ACCENT } from "../chunks/C8dnJ1Am.js";
import { $ as isEditableElement, A as isValidTabEvent, B as isModifierKey, C as defaultItemToId, D as queueBeforeEvent, E as isOverflowElement, F as getEventKey, G as isMac, H as isPrintableKey, I as getEventPoint, J as getActiveElement, K as isSafari, L as getEventTarget, M as setElementChecked, N as trackFormControl, O as raf, P as addDomEvent, Q as isAnchorElement, R as isContextMenuEvent, S as visuallyHiddenStyle, T as queryAll, U as isVirtualClick, V as isOpeningInNewTab, W as isFirefox, X as getWindow, Y as getDocument, Z as isActiveElement, _ as useEnvironmentContext, _t as next$1, a as Portal, at as pipe, b as mergeProps, bt as createContext, c as getPlacementSide, ct as createMachine, d as PresenceProvider, dt as runIfFn, et as isHTMLElement, f as usePresenceContext, ft as hasProp, g as useLocaleContext, gt as last, h as createAnatomy, ht as first, i as CheckIcon, it as noop$1, j as dispatchInputCheckedEvent, k as getInitialFocus, l as useFieldContext, lt as mergeProps$1, m as usePresence, mt as isEqual, nt as dataAttr, o as getPlacementStyles, ot as wrap, p as splitPresenceProps, pt as isFunction, q as contains, r as ColorPicker, rt as getByOwnerId, s as getPlacement, st as createGuards, t as MainLayout, tt as ariaAttr, u as trackDismissableElement, ut as cast, v as Factory, vt as prev, w as indexOfId, x as normalizeProps, y as useMachine, yt as createSplitProps, z as isDownloadingEvent } from "../chunks/CkNmWS-7.js";
//#region node_modules/@zag-js/dom-query/dist/mutation-observer.mjs
function observeAttributesImpl(node, options) {
	if (!node) return;
	const { attributes, callback: fn } = options;
	const obs = new (node.ownerDocument.defaultView || window).MutationObserver((changes) => {
		for (const change of changes) if (change.type === "attributes" && change.attributeName && attributes.includes(change.attributeName)) fn(change);
	});
	obs.observe(node, {
		attributes: true,
		attributeFilter: attributes
	});
	return () => obs.disconnect();
}
function observeAttributes(nodeOrFn, options) {
	const { defer } = options;
	const func = defer ? raf : (v) => v();
	const cleanups = [];
	cleanups.push(func(() => {
		const node = typeof nodeOrFn === "function" ? nodeOrFn() : nodeOrFn;
		cleanups.push(observeAttributesImpl(node, options));
	}));
	return () => {
		cleanups.forEach((fn) => fn?.());
	};
}
//#endregion
//#region node_modules/@zag-js/dom-query/dist/navigate.mjs
function clickIfLink(el) {
	const click = () => {
		const win = getWindow(el);
		el.dispatchEvent(new win.MouseEvent("click"));
	};
	if (isFirefox()) queueBeforeEvent(el, "keyup", click);
	else queueMicrotask(click);
}
//#endregion
//#region node_modules/@zag-js/dom-query/dist/press.mjs
function trackPress(options) {
	const { pointerNode, keyboardNode = pointerNode, onPress, onPressStart, onPressEnd, isValidKey = (e) => e.key === "Enter" } = options;
	if (!pointerNode) return noop$1;
	const win = getWindow(pointerNode);
	let removeStartListeners = noop$1;
	let removeEndListeners = noop$1;
	let removeAccessibleListeners = noop$1;
	const getInfo = (event) => ({
		point: getEventPoint(event),
		event
	});
	function startPress(event) {
		onPressStart?.(getInfo(event));
	}
	function cancelPress(event) {
		onPressEnd?.(getInfo(event));
	}
	const startPointerPress = (startEvent) => {
		removeEndListeners();
		const endPointerPress = (endEvent) => {
			const target = getEventTarget(endEvent);
			if (contains(pointerNode, target)) onPress?.(getInfo(endEvent));
			else onPressEnd?.(getInfo(endEvent));
		};
		const removePointerUpListener = addDomEvent(win, "pointerup", endPointerPress, {
			passive: !onPress,
			once: true
		});
		const removePointerCancelListener = addDomEvent(win, "pointercancel", cancelPress, {
			passive: !onPressEnd,
			once: true
		});
		removeEndListeners = pipe(removePointerUpListener, removePointerCancelListener);
		if (isActiveElement(keyboardNode) && startEvent.pointerType === "mouse") startEvent.preventDefault();
		startPress(startEvent);
	};
	const removePointerListener = addDomEvent(pointerNode, "pointerdown", startPointerPress, { passive: !onPressStart });
	const removeFocusListener = addDomEvent(keyboardNode, "focus", startAccessiblePress);
	removeStartListeners = pipe(removePointerListener, removeFocusListener);
	function startAccessiblePress() {
		const handleKeydown = (keydownEvent) => {
			if (!isValidKey(keydownEvent)) return;
			const handleKeyup = (keyupEvent) => {
				if (!isValidKey(keyupEvent)) return;
				const evt2 = new win.PointerEvent("pointerup");
				const info = getInfo(evt2);
				onPress?.(info);
				onPressEnd?.(info);
			};
			removeEndListeners();
			removeEndListeners = addDomEvent(keyboardNode, "keyup", handleKeyup);
			startPress(new win.PointerEvent("pointerdown"));
		};
		const handleBlur = () => {
			cancelPress(new win.PointerEvent("pointercancel"));
		};
		const removeKeydownListener = addDomEvent(keyboardNode, "keydown", handleKeydown);
		const removeBlurListener = addDomEvent(keyboardNode, "blur", handleBlur);
		removeAccessibleListeners = pipe(removeKeydownListener, removeBlurListener);
	}
	return () => {
		removeStartListeners();
		removeEndListeners();
		removeAccessibleListeners();
	};
}
//#endregion
//#region node_modules/@zag-js/dom-query/dist/scroll.mjs
function isScrollable(el) {
	return el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth;
}
function scrollIntoView(el, options) {
	const { rootEl, ...scrollOptions } = options || {};
	if (!el || !rootEl) return;
	if (!isOverflowElement(rootEl) || !isScrollable(rootEl)) return;
	el.scrollIntoView(scrollOptions);
}
//#endregion
//#region node_modules/@zag-js/dom-query/dist/searchable.mjs
var sanitize = (str) => str.split("").map((char) => {
	const code = char.charCodeAt(0);
	if (code > 0 && code < 128) return char;
	if (code >= 128 && code <= 255) return `/x${code.toString(16)}`.replace("/", "\\");
	return "";
}).join("").trim();
var getValueText = (el) => {
	return sanitize(el.dataset?.valuetext ?? el.textContent ?? "");
};
var match = (valueText, query) => {
	return valueText.trim().toLowerCase().startsWith(query.toLowerCase());
};
function getByText(v, text, currentId, itemToId = defaultItemToId) {
	const index = currentId ? indexOfId(v, currentId, itemToId) : -1;
	let items = currentId ? wrap(v, index) : v;
	if (text.length === 1) items = items.filter((item) => itemToId(item) !== currentId);
	return items.find((item) => match(getValueText(item), text));
}
//#endregion
//#region node_modules/@zag-js/dom-query/dist/typeahead.mjs
function getByTypeaheadImpl(baseItems, options) {
	const { state, activeId, key, timeout = 350, itemToId } = options;
	const search = state.keysSoFar + key;
	const query = search.length > 1 && Array.from(search).every((char) => char === search[0]) ? search[0] : search;
	const next = getByText(baseItems.slice(), query, activeId, itemToId);
	function cleanup() {
		clearTimeout(state.timer);
		state.timer = -1;
	}
	function update(value) {
		state.keysSoFar = value;
		cleanup();
		if (value !== "") state.timer = +setTimeout(() => {
			update("");
			cleanup();
		}, timeout);
	}
	update(search);
	return next;
}
var getByTypeahead = /* @__PURE__ */ Object.assign(getByTypeaheadImpl, {
	defaultOptions: {
		keysSoFar: "",
		timer: -1
	},
	isValidEvent: isValidTypeaheadEvent
});
function isValidTypeaheadEvent(event) {
	return event.key.length === 1 && !event.ctrlKey && !event.metaKey;
}
//#endregion
//#region node_modules/@zag-js/rect-utils/dist/rect.mjs
var createPoint = (x, y) => ({
	x,
	y
});
function createRect(r) {
	const { x, y, width, height } = r;
	const midX = x + width / 2;
	const midY = y + height / 2;
	return {
		x,
		y,
		width,
		height,
		minX: x,
		minY: y,
		maxX: x + width,
		maxY: y + height,
		midX,
		midY,
		center: createPoint(midX, midY)
	};
}
function getRectCorners(v) {
	return {
		top: createPoint(v.minX, v.minY),
		right: createPoint(v.maxX, v.minY),
		bottom: createPoint(v.maxX, v.maxY),
		left: createPoint(v.minX, v.maxY)
	};
}
//#endregion
//#region node_modules/@zag-js/rect-utils/dist/polygon.mjs
function getElementPolygon(rectValue, placement) {
	const { top, right, left, bottom } = getRectCorners(createRect(rectValue));
	const [base] = placement.split("-");
	return {
		top: [
			left,
			top,
			right,
			bottom
		],
		right: [
			top,
			right,
			bottom,
			left
		],
		bottom: [
			top,
			left,
			bottom,
			right
		],
		left: [
			right,
			top,
			left,
			bottom
		]
	}[base];
}
function isPointInPolygon(polygon, point) {
	const { x, y } = point;
	let c = false;
	for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
		const xi = polygon[i].x;
		const yi = polygon[i].y;
		const xj = polygon[j].x;
		const yj = polygon[j].y;
		if (yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi) c = !c;
	}
	return c;
}
//#endregion
//#region node_modules/@zag-js/focus-visible/dist/index.mjs
function isValidKey(e) {
	return !(e.metaKey || !isMac() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
var nonTextInputTypes = /* @__PURE__ */ new Set([
	"checkbox",
	"radio",
	"range",
	"color",
	"file",
	"image",
	"button",
	"submit",
	"reset"
]);
function isKeyboardFocusEvent(isTextInput, modality, e) {
	const eventTarget = e ? getEventTarget(e) : null;
	const doc = getDocument(eventTarget);
	const win = getWindow(eventTarget);
	const activeElement = getActiveElement(doc);
	isTextInput = isTextInput || activeElement instanceof win.HTMLInputElement && !nonTextInputTypes.has(activeElement?.type) || activeElement instanceof win.HTMLTextAreaElement || activeElement instanceof win.HTMLElement && activeElement.isContentEditable;
	return !(isTextInput && modality === "keyboard" && e instanceof win.KeyboardEvent && !Reflect.has(FOCUS_VISIBLE_INPUT_KEYS, e.key));
}
var currentModality = null;
var changeHandlers = /* @__PURE__ */ new Set();
var listenerMap = /* @__PURE__ */ new Map();
var hasEventBeforeFocus = false;
var hasBlurredWindowRecently = false;
var FOCUS_VISIBLE_INPUT_KEYS = {
	Tab: true,
	Escape: true
};
function triggerChangeHandlers(modality, e) {
	for (let handler of changeHandlers) handler(modality, e);
}
function handleKeyboardEvent(e) {
	hasEventBeforeFocus = true;
	if (isValidKey(e)) {
		currentModality = "keyboard";
		triggerChangeHandlers("keyboard", e);
	}
}
function handlePointerEvent(e) {
	currentModality = "pointer";
	if (e.type === "mousedown" || e.type === "pointerdown") {
		hasEventBeforeFocus = true;
		triggerChangeHandlers("pointer", e);
	}
}
function handleClickEvent(e) {
	if (isVirtualClick(e)) {
		hasEventBeforeFocus = true;
		currentModality = "virtual";
	}
}
function handleFocusEvent(e) {
	const target = getEventTarget(e);
	if (target === getWindow(target) || target === getDocument(target) || !e.isTrusted) return;
	if (!hasEventBeforeFocus && !hasBlurredWindowRecently) {
		currentModality = "virtual";
		triggerChangeHandlers("virtual", e);
	}
	hasEventBeforeFocus = false;
	hasBlurredWindowRecently = false;
}
function handleWindowBlur() {
	hasEventBeforeFocus = false;
	hasBlurredWindowRecently = true;
}
function setupGlobalFocusEvents(root) {
	if (typeof window === "undefined" || listenerMap.get(getWindow(root))) return;
	const win = getWindow(root);
	const doc = getDocument(root);
	let focus = win.HTMLElement.prototype.focus;
	function patchedFocus() {
		hasEventBeforeFocus = true;
		focus.apply(this, arguments);
	}
	try {
		Object.defineProperty(win.HTMLElement.prototype, "focus", {
			configurable: true,
			value: patchedFocus
		});
	} catch {}
	doc.addEventListener("keydown", handleKeyboardEvent, true);
	doc.addEventListener("keyup", handleKeyboardEvent, true);
	doc.addEventListener("click", handleClickEvent, true);
	win.addEventListener("focus", handleFocusEvent, true);
	win.addEventListener("blur", handleWindowBlur, false);
	if (typeof win.PointerEvent !== "undefined") {
		doc.addEventListener("pointerdown", handlePointerEvent, true);
		doc.addEventListener("pointermove", handlePointerEvent, true);
		doc.addEventListener("pointerup", handlePointerEvent, true);
	} else {
		doc.addEventListener("mousedown", handlePointerEvent, true);
		doc.addEventListener("mousemove", handlePointerEvent, true);
		doc.addEventListener("mouseup", handlePointerEvent, true);
	}
	win.addEventListener("beforeunload", () => {
		tearDownWindowFocusTracking(root);
	}, { once: true });
	listenerMap.set(win, { focus });
}
var tearDownWindowFocusTracking = (root, loadListener) => {
	const win = getWindow(root);
	const doc = getDocument(root);
	if (loadListener) doc.removeEventListener("DOMContentLoaded", loadListener);
	const listenerData = listenerMap.get(win);
	if (!listenerData) return;
	try {
		Object.defineProperty(win.HTMLElement.prototype, "focus", {
			configurable: true,
			value: listenerData.focus
		});
	} catch {}
	doc.removeEventListener("keydown", handleKeyboardEvent, true);
	doc.removeEventListener("keyup", handleKeyboardEvent, true);
	doc.removeEventListener("click", handleClickEvent, true);
	win.removeEventListener("focus", handleFocusEvent, true);
	win.removeEventListener("blur", handleWindowBlur, false);
	if (typeof win.PointerEvent !== "undefined") {
		doc.removeEventListener("pointerdown", handlePointerEvent, true);
		doc.removeEventListener("pointermove", handlePointerEvent, true);
		doc.removeEventListener("pointerup", handlePointerEvent, true);
	} else {
		doc.removeEventListener("mousedown", handlePointerEvent, true);
		doc.removeEventListener("mousemove", handlePointerEvent, true);
		doc.removeEventListener("mouseup", handlePointerEvent, true);
	}
	listenerMap.delete(win);
};
function getInteractionModality() {
	return currentModality;
}
function setInteractionModality(modality) {
	currentModality = modality;
	triggerChangeHandlers(modality, null);
}
function isFocusVisible() {
	return currentModality === "keyboard" || currentModality === "virtual";
}
function trackFocusVisible(props = {}) {
	const { isTextInput, autoFocus, onChange, root } = props;
	setupGlobalFocusEvents(root);
	onChange?.({
		isFocusVisible: autoFocus || isFocusVisible(),
		modality: currentModality
	});
	const handler = (modality, e) => {
		if (!isKeyboardFocusEvent(!!isTextInput, modality, e)) return;
		onChange?.({
			isFocusVisible: isFocusVisible(),
			modality
		});
	};
	changeHandlers.add(handler);
	return () => {
		changeHandlers.delete(handler);
	};
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/menu/use-menu-context.js
var [MenuProvider, useMenuContext] = createContext({
	name: "MenuContext",
	hookName: "useMenuContext",
	providerName: "<MenuProvider />",
	strict: false
});
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-arrow-tip.svelte
var rest_excludes$32 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Menu_arrow_tip($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$32);
	const menu = useMenuContext();
	const mergedProps = user_derived(() => mergeProps(menu().getArrowTipProps(), props));
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
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-arrow.svelte
var rest_excludes$31 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Menu_arrow($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$31);
	const menu = useMenuContext();
	const mergedProps = user_derived(() => mergeProps(menu().getArrowProps(), props));
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
//#region node_modules/@ark-ui/svelte/dist/components/menu/use-menu-item-context.js
var [MenuItemProvider, useMenuItemContext] = createContext({
	name: "MenuItemContext",
	hookName: "useMenuItemContext",
	providerName: "<MenuItemProvider />"
});
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/menu/use-menu-option-item-props-context.js
var [MenuItemPropsProvider, useMenuItemPropsContext] = createContext({
	name: "MenuItemPropsContext",
	hookName: "useMenuItemPropsContext",
	providerName: "<MenuItemPropsProvider />"
});
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-checkbox-item.svelte
var rest_excludes$30 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"checked"
]);
function Menu_checkbox_item($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), checked = prop($$props, "checked", 15), props = rest_props($$props, rest_excludes$30);
	const $$d = user_derived(() => createSplitProps()(props, [
		"checked",
		"closeOnSelect",
		"disabled",
		"onCheckedChange",
		"value",
		"valueText"
	])), $$array = user_derived(() => to_array(get($$d), 2)), partialOptionItemProps = user_derived(() => get($$array)[0]), localProps = user_derived(() => get($$array)[1]);
	const optionItemProps = user_derived(() => ({
		...get(partialOptionItemProps),
		type: "checkbox",
		checked: checked(),
		onCheckedChange(nextChecked) {
			if (checked() !== void 0) checked(nextChecked);
			get(partialOptionItemProps).onCheckedChange?.(nextChecked);
		}
	}));
	const menu = useMenuContext();
	const mergedProps = user_derived(() => mergeProps(menu().getOptionItemProps(get(optionItemProps)), get(localProps)));
	const optionItemState = user_derived(() => menu().getOptionItemState(get(optionItemProps)));
	MenuItemPropsProvider(() => get(optionItemProps));
	MenuItemProvider(() => get(optionItemState));
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
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-content.svelte
var rest_excludes$29 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Menu_content($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$29);
	const menu = useMenuContext();
	const presence = usePresenceContext();
	const mergedProps = user_derived(() => mergeProps(menu().getContentProps(), presence().getPresenceProps(), props));
	function setNode(node) {
		presence().setNode(node);
	}
	var fragment = comment();
	var node_1 = first_child(fragment);
	var consequent = ($$anchor) => {
		Factory($$anchor, spread_props({
			as: "div",
			[createAttachmentKey()]: setNode
		}, () => get(mergedProps), {
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
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-context-trigger.svelte
var rest_excludes$28 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Menu_context_trigger($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$28);
	const menu = useMenuContext();
	const mergedProps = user_derived(() => mergeProps(menu().getContextTriggerProps(), props));
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
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-context.svelte
function Menu_context($$anchor, $$props) {
	push($$props, true);
	const context = useMenuContext();
	var fragment = comment();
	var node = first_child(fragment);
	snippet(node, () => $$props.render, () => context);
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-indicator.svelte
var rest_excludes$27 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Menu_indicator($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$27);
	const menu = useMenuContext();
	const mergedProps = user_derived(() => mergeProps(menu().getIndicatorProps(), props));
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
//#region node_modules/@ark-ui/svelte/dist/components/menu/use-menu-item-group-context.js
var [MenuItemGroupProvider, useMenuItemGroupContext] = createContext({
	name: "MenuItemGroupContext",
	hookName: "useMenuItemGroupContext",
	providerName: "<MenuItemGroupProvider />"
});
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-item-group-label.svelte
var rest_excludes$26 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Menu_item_group_label($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$26);
	const menu = useMenuContext();
	const itemGroup = useMenuItemGroupContext();
	const mergedProps = user_derived(() => mergeProps(menu().getItemGroupLabelProps({ htmlFor: itemGroup().id }), props));
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
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-item-group.svelte
var rest_excludes$25 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Menu_item_group($$anchor, $$props) {
	const id = props_id();
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$25);
	const menu = useMenuContext();
	const itemGroupProps = user_derived(() => ({
		id,
		...props
	}));
	const mergedProps = user_derived(() => mergeProps(menu().getItemGroupProps(get(itemGroupProps)), props));
	MenuItemGroupProvider(() => get(itemGroupProps));
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
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-item-indicator.svelte
var rest_excludes$24 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Menu_item_indicator($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$24);
	const menu = useMenuContext();
	const itemProps = useMenuItemPropsContext();
	const mergedProps = user_derived(() => mergeProps(menu().getItemIndicatorProps(itemProps()), props));
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
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-item-text.svelte
var rest_excludes$23 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Menu_item_text($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$23);
	const menu = useMenuContext();
	const itemProps = useMenuItemPropsContext();
	const mergedProps = user_derived(() => mergeProps(menu().getItemTextProps(itemProps()), props));
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
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-item.svelte
var rest_excludes$22 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Menu_item($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$22);
	const $$d = user_derived(() => createSplitProps()(props, [
		"closeOnSelect",
		"disabled",
		"value",
		"valueText",
		"onSelect"
	])), $$array = user_derived(() => to_array(get($$d), 2)), itemProps = user_derived(() => get($$array)[0]), localProps = user_derived(() => get($$array)[1]);
	const menu = useMenuContext();
	const mergedProps = user_derived(() => mergeProps(menu().getItemProps(get(itemProps)), get(localProps)));
	const itemState = user_derived(() => menu().getItemState(get(itemProps)));
	user_effect(() => {
		return menu().addItemListener({
			id: get(itemState).id,
			onSelect: get(itemProps).onSelect
		});
	});
	MenuItemPropsProvider(() => get(itemProps));
	MenuItemProvider(() => get(itemState));
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
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-positioner.svelte
var rest_excludes$21 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Menu_positioner($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$21);
	const menu = useMenuContext();
	const presence = usePresenceContext();
	const mergedProps = user_derived(() => mergeProps(menu().getPositionerProps(), props));
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
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-radio-item-group.svelte
var rest_excludes$20 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"value"
]);
function Menu_radio_item_group($$anchor, $$props) {
	const id = props_id();
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), value = prop($$props, "value", 15), props = rest_props($$props, rest_excludes$20);
	const $$d = user_derived(() => createSplitProps()(props, [
		"id",
		"onValueChange",
		"value"
	])), $$array = user_derived(() => to_array(get($$d), 2)), optionalItemGroupProps = user_derived(() => get($$array)[0]), localProps = user_derived(() => get($$array)[1]);
	const menu = useMenuContext();
	const itemGroupProps = user_derived(() => ({
		id: get(optionalItemGroupProps).id ?? id,
		value: value(),
		onValueChange(e) {
			value(e.value);
			get(optionalItemGroupProps)?.onValueChange?.(e);
		}
	}));
	const mergedProps = user_derived(() => mergeProps(menu().getItemGroupProps({ id: get(itemGroupProps).id }), get(localProps)));
	MenuItemGroupProvider(() => get(itemGroupProps));
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
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-radio-item.svelte
var rest_excludes$19 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Menu_radio_item($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$19);
	const $$d = user_derived(() => createSplitProps()(props, [
		"closeOnSelect",
		"disabled",
		"value",
		"valueText"
	])), $$array = user_derived(() => to_array(get($$d), 2)), partialItemProps = user_derived(() => get($$array)[0]), localProps = user_derived(() => get($$array)[1]);
	const menu = useMenuContext();
	const itemGroup = useMenuItemGroupContext();
	const optionItemProps = user_derived(() => ({
		...get(partialItemProps),
		checked: itemGroup().value === get(partialItemProps).value,
		type: "radio",
		onCheckedChange: () => itemGroup().onValueChange?.({ value: get(partialItemProps).value })
	}));
	const mergedProps = user_derived(() => mergeProps(menu().getOptionItemProps(get(optionItemProps)), get(localProps)));
	const optionItemState = user_derived(() => menu().getOptionItemState(get(optionItemProps)));
	MenuItemPropsProvider(() => get(optionItemProps));
	MenuItemProvider(() => get(optionItemState));
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
//#region node_modules/@ark-ui/svelte/dist/components/menu/use-menu-machine-context.js
var [MenuMachineProvider, useMenuMachineContext] = createContext({
	name: "MenuMachineContext",
	hookName: "useMenuMachineContext",
	providerName: "<MenuMachineProvider />",
	strict: false
});
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/menu/use-menu-trigger-item-context.js
var [MenuTriggerItemProvider, useMenuTriggerItemContext] = createContext({
	name: "MenuTriggerItemContext",
	hookName: "useMenuTriggerItemContext",
	providerName: "<MenuTriggerItemProvider />",
	strict: false
});
var parts$1 = createAnatomy("menu").parts("arrow", "arrowTip", "content", "contextTrigger", "indicator", "item", "itemGroup", "itemGroupLabel", "itemIndicator", "itemText", "positioner", "separator", "trigger", "triggerItem").build();
//#endregion
//#region node_modules/@zag-js/menu/dist/menu.dom.mjs
var getTriggerId = (ctx, value) => {
	const customId = ctx.ids?.trigger;
	if (customId != null) return isFunction(customId) ? customId(value) : customId;
	return value ? `menu:${ctx.id}:trigger:${value}` : `menu:${ctx.id}:trigger`;
};
var getContextTriggerId = (ctx, value) => {
	const customId = ctx.ids?.contextTrigger;
	if (customId != null) return isFunction(customId) ? customId(value) : customId;
	return value ? `menu:${ctx.id}:ctx-trigger:${value}` : `menu:${ctx.id}:ctx-trigger`;
};
var getContentId = (ctx) => ctx.ids?.content ?? `menu:${ctx.id}:content`;
var getArrowId = (ctx) => ctx.ids?.arrow ?? `menu:${ctx.id}:arrow`;
var getPositionerId = (ctx) => ctx.ids?.positioner ?? `menu:${ctx.id}:popper`;
var getGroupId = (ctx, id) => ctx.ids?.group?.(id) ?? `menu:${ctx.id}:group:${id}`;
var getItemId = (ctx, id) => `${ctx.id}/${id}`;
var getItemValue = (el) => el?.dataset.value ?? null;
var getGroupLabelId = (ctx, id) => ctx.ids?.groupLabel?.(id) ?? `menu:${ctx.id}:group-label:${id}`;
var getContentEl = (ctx) => ctx.getById(getContentId(ctx));
var getPositionerEl = (ctx) => ctx.getById(getPositionerId(ctx));
var getTriggerEl = (ctx) => ctx.getById(getTriggerId(ctx));
var getItemEl = (ctx, value) => value ? ctx.getById(getItemId(ctx, value)) : null;
var getContextTriggerEl = (ctx) => ctx.getById(getContextTriggerId(ctx));
var getTriggerEls = (ctx) => queryAll(ctx.getRootNode(), `[data-scope="menu"][data-part="trigger"]${getByOwnerId(ctx.id)}`);
var getContextTriggerEls = (ctx) => queryAll(ctx.getRootNode(), `[data-scope="menu"][data-part="context-trigger"]${getByOwnerId(ctx.id)}`);
var getActiveTriggerEl = (ctx, value) => {
	if (value == null) return getTriggerEl(ctx) ?? getTriggerEls(ctx)[0];
	return ctx.getById(getTriggerId(ctx, value));
};
var getElements = (ctx) => {
	const selector = `[role^="menuitem"]${getByOwnerId(getContentId(ctx))}:not([data-disabled])`;
	return queryAll(getContentEl(ctx), selector);
};
var getFirstEl = (ctx) => first(getElements(ctx));
var getLastEl = (ctx) => last(getElements(ctx));
var isMatch = (el, value) => {
	if (!value) return false;
	return el.id === value || el.dataset.value === value;
};
var getNextEl = (ctx, opts) => {
	const items = getElements(ctx);
	const index = items.findIndex((el) => isMatch(el, opts.value));
	return next$1(items, index, { loop: opts.loop ?? opts.loopFocus });
};
var getPrevEl = (ctx, opts) => {
	const items = getElements(ctx);
	const index = items.findIndex((el) => isMatch(el, opts.value));
	return prev(items, index, { loop: opts.loop ?? opts.loopFocus });
};
var getElemByKey = (ctx, opts) => {
	const items = getElements(ctx);
	const item = items.find((el) => isMatch(el, opts.value));
	return getByTypeahead(items, {
		state: opts.typeaheadState,
		key: opts.key,
		activeId: item?.id ?? null
	});
};
var isTargetDisabled = (v) => {
	return isHTMLElement(v) && (v.dataset.disabled === "" || v.hasAttribute("disabled"));
};
var isTriggerItem = (el) => {
	return !!el?.getAttribute("role")?.startsWith("menuitem") && !!el?.hasAttribute("data-controls");
};
var itemSelectEvent = "menu:select";
function dispatchSelectionEvent(el, value) {
	if (!el) return;
	const event = new (getWindow(el)).CustomEvent(itemSelectEvent, { detail: { value } });
	el.dispatchEvent(event);
}
function getPortaledContentEl(scope) {
	const contentId = getContentId(scope);
	return getContentEl(scope) ?? scope.getDoc().getElementById(contentId);
}
function isTargetWithinMenuTree(target, children) {
	if (!isHTMLElement(target)) return false;
	for (const id in children) {
		const child = children[id];
		const childContent = getPortaledContentEl(child.scope);
		if (childContent && contains(childContent, target)) return true;
		const nested = child.refs.get("children");
		if (Object.keys(nested).length > 0 && isTargetWithinMenuTree(target, nested)) return true;
	}
	return false;
}
//#endregion
//#region node_modules/@zag-js/menu/dist/menu.utils.mjs
function closeRootMenu(ctx) {
	let parent = ctx.parent;
	while (parent && parent.context.get("isSubmenu")) parent = parent.refs.get("parent");
	parent?.send({ type: "CLOSE" });
}
function isWithinPolygon(polygon, point) {
	if (!polygon) return false;
	return isPointInPolygon(polygon, point);
}
function resolveItemId(children, value, scope) {
	const hasChildren = Object.keys(children).length > 0;
	if (!value) return null;
	if (!hasChildren) return getItemId(scope, value);
	for (const id in children) {
		const childMenu = children[id];
		const childTriggerId = getTriggerId(childMenu.scope);
		if (childTriggerId === value) return childTriggerId;
	}
	return getItemId(scope, value);
}
function setParentRoutingLock(parent, locked) {
	if (!parent) return;
	parent.refs.set("pointerRoutingLocked", locked);
	parent.context.set("pointerRoutingMode", locked ? "locked" : "interactive");
}
function isHighlightedItemSubmenuOpen(parent) {
	const highlighted = parent.context.get("highlightedValue");
	if (!highlighted) return false;
	const children = parent.refs.get("children");
	for (const id in children) {
		const child = children[id];
		if (!child.state.hasTag("open")) continue;
		if (getTriggerId(child.scope) === highlighted) return true;
	}
	return false;
}
function unlockParentAfterChildClose(parent, childIsSubmenu) {
	if (!parent) return;
	if (parent.refs.get("pointerRoutingLocked")) return;
	if (childIsSubmenu && isHighlightedItemSubmenuOpen(parent)) return;
	setParentRoutingLock(parent, false);
}
function unlockParentOnSubmenuClose(parent) {
	if (!parent) return;
	if (!isHighlightedItemSubmenuOpen(parent)) setParentRoutingLock(parent, false);
}
//#endregion
//#region node_modules/@zag-js/menu/dist/menu.connect.mjs
function connect$1(service, normalize) {
	const { context, send, state, computed, prop, scope } = service;
	const open = state.hasTag("open");
	const isSubmenu = context.get("isSubmenu");
	const isTypingAhead = computed("isTypingAhead");
	const composite = prop("composite");
	const currentPlacement = context.get("currentPlacement");
	const currentPlacementSide = currentPlacement ? getPlacementSide(currentPlacement) : void 0;
	const anchorPoint = context.get("anchorPoint");
	const highlightedValue = context.get("highlightedValue");
	const triggerValue = context.get("triggerValue");
	const popperStyles = getPlacementStyles({
		...prop("positioning"),
		placement: currentPlacement
	});
	function getItemState(props) {
		return {
			id: getItemId(scope, props.value),
			disabled: !!props.disabled,
			highlighted: highlightedValue === props.value
		};
	}
	function getOptionItemProps(props) {
		const valueText = props.valueText ?? props.value;
		return {
			...props,
			id: props.value,
			valueText
		};
	}
	function getOptionItemState(props) {
		return {
			...getItemState(getOptionItemProps(props)),
			checked: !!props.checked
		};
	}
	function getItemProps(props) {
		const { closeOnSelect, valueText, value } = props;
		const itemState = getItemState(props);
		const id = getItemId(scope, value);
		return normalize.element({
			...parts$1.item.attrs,
			id,
			role: "menuitem",
			"aria-disabled": ariaAttr(itemState.disabled),
			"data-disabled": dataAttr(itemState.disabled),
			"data-ownedby": getContentId(scope),
			"data-highlighted": dataAttr(itemState.highlighted),
			"data-value": value,
			"data-valuetext": valueText,
			onDragStart(event) {
				if (event.currentTarget.matches("a[href]")) event.preventDefault();
			},
			onPointerMove(event) {
				if (itemState.disabled) return;
				if (event.pointerType !== "mouse") return;
				const target = event.currentTarget;
				if (itemState.highlighted) return;
				const point = getEventPoint(event);
				send({
					type: "ITEM_POINTERMOVE",
					id,
					target,
					closeOnSelect,
					point
				});
			},
			onPointerLeave(event) {
				if (itemState.disabled) return;
				if (event.pointerType !== "mouse") return;
				if (!service.event.previous()?.type.includes("POINTER")) return;
				const target = event.currentTarget;
				send({
					type: "ITEM_POINTERLEAVE",
					id,
					target,
					closeOnSelect
				});
			},
			onPointerDown(event) {
				if (itemState.disabled) return;
				const target = event.currentTarget;
				send({
					type: "ITEM_POINTERDOWN",
					target,
					id,
					closeOnSelect
				});
			},
			onClick(event) {
				if (isDownloadingEvent(event)) return;
				if (isOpeningInNewTab(event)) return;
				if (itemState.disabled) return;
				const target = event.currentTarget;
				send({
					type: "ITEM_CLICK",
					target,
					id,
					closeOnSelect
				});
			}
		});
	}
	return {
		highlightedValue,
		open,
		setOpen(nextOpen) {
			if (state.hasTag("open") === nextOpen) return;
			send({ type: nextOpen ? "OPEN" : "CLOSE" });
		},
		triggerValue,
		setTriggerValue(value) {
			send({
				type: "TRIGGER_VALUE.SET",
				value
			});
		},
		setHighlightedValue(value) {
			send({
				type: "HIGHLIGHTED.SET",
				value
			});
		},
		setParent(parent) {
			send({
				type: "PARENT.SET",
				value: parent,
				id: parent.prop("id")
			});
		},
		setChild(child) {
			send({
				type: "CHILD.SET",
				value: child,
				id: child.prop("id")
			});
		},
		reposition(options = {}) {
			send({
				type: "POSITIONING.SET",
				options
			});
		},
		addItemListener(props) {
			const node = scope.getById(props.id);
			if (!node) return;
			const listener = () => props.onSelect?.();
			node.addEventListener(itemSelectEvent, listener);
			return () => node.removeEventListener(itemSelectEvent, listener);
		},
		getContextTriggerProps(props = {}) {
			const { value } = props;
			const current = value == null ? false : triggerValue === value;
			const contextTriggerId = getContextTriggerId(scope, value);
			return normalize.element({
				...parts$1.contextTrigger.attrs,
				dir: prop("dir"),
				id: contextTriggerId,
				"data-ownedby": scope.id,
				"data-value": value,
				"data-current": dataAttr(current),
				"data-state": open ? "open" : "closed",
				onPointerDown(event) {
					if (event.pointerType === "mouse") return;
					const point = getEventPoint(event);
					send({
						type: "CONTEXT_MENU_START",
						point,
						value
					});
				},
				onPointerCancel(event) {
					if (event.pointerType === "mouse") return;
					send({ type: "CONTEXT_MENU_CANCEL" });
				},
				onPointerMove(event) {
					if (event.pointerType === "mouse") return;
					send({ type: "CONTEXT_MENU_CANCEL" });
				},
				onPointerUp(event) {
					if (event.pointerType === "mouse") return;
					send({ type: "CONTEXT_MENU_CANCEL" });
				},
				onContextMenu(event) {
					const point = getEventPoint(event);
					send({
						type: open && value != null && !current ? "TRIGGER_VALUE.SET" : "CONTEXT_MENU",
						point,
						value
					});
					event.preventDefault();
				},
				style: {
					WebkitTouchCallout: "none",
					WebkitUserSelect: "none",
					userSelect: "none"
				}
			});
		},
		getTriggerItemProps(childApi) {
			const triggerProps = childApi.getTriggerProps();
			return mergeProps$1(getItemProps({ value: triggerProps.id }), triggerProps);
		},
		getTriggerProps(props = {}) {
			const { value } = props;
			const current = value == null ? false : triggerValue === value;
			const triggerId = getTriggerId(scope, value);
			return normalize.button({
				...isSubmenu ? parts$1.triggerItem.attrs : parts$1.trigger.attrs,
				"data-placement": currentPlacement,
				"data-side": currentPlacementSide,
				type: "button",
				dir: prop("dir"),
				id: triggerId,
				...value != null && {
					"data-ownedby": scope.id,
					"data-value": value,
					"data-current": dataAttr(current)
				},
				"data-uid": prop("id"),
				"aria-haspopup": composite ? "menu" : "dialog",
				"aria-controls": getContentId(scope),
				"data-controls": getContentId(scope),
				"aria-expanded": value == null ? open : open && current,
				"data-state": open ? "open" : "closed",
				onPointerMove(event) {
					if (event.pointerType !== "mouse") return;
					if (isTargetDisabled(event.currentTarget) || !isSubmenu) return;
					const point = getEventPoint(event);
					send({
						type: "TRIGGER_POINTERMOVE",
						target: event.currentTarget,
						point
					});
				},
				onPointerLeave(event) {
					if (isTargetDisabled(event.currentTarget)) return;
					if (event.pointerType !== "mouse") return;
					if (!isSubmenu) return;
					setParentRoutingLock(service.refs.get("parent"), true);
					const point = getEventPoint(event);
					send({
						type: "TRIGGER_POINTERLEAVE",
						target: event.currentTarget,
						point
					});
				},
				onPointerDown(event) {
					if (isTargetDisabled(event.currentTarget)) return;
					if (isContextMenuEvent(event)) return;
					event.preventDefault();
				},
				onClick(event) {
					if (event.defaultPrevented) return;
					if (isTargetDisabled(event.currentTarget)) return;
					send({
						type: open && value != null && !current ? "TRIGGER_VALUE.SET" : "TRIGGER_CLICK",
						target: event.currentTarget,
						value
					});
				},
				onBlur() {
					send({ type: "TRIGGER_BLUR" });
				},
				onFocus() {
					send({ type: "TRIGGER_FOCUS" });
				},
				onKeyDown(event) {
					if (event.defaultPrevented) return;
					const exec = {
						ArrowDown() {
							send({
								type: "ARROW_DOWN",
								value
							});
						},
						ArrowUp() {
							send({
								type: "ARROW_UP",
								value
							});
						},
						Enter() {
							send({
								type: "ARROW_DOWN",
								src: "enter",
								value
							});
						},
						Space() {
							send({
								type: "ARROW_DOWN",
								src: "space",
								value
							});
						}
					}[getEventKey(event, {
						orientation: "vertical",
						dir: prop("dir")
					})];
					if (exec) {
						event.preventDefault();
						exec(event);
					}
				}
			});
		},
		getIndicatorProps() {
			return normalize.element({
				...parts$1.indicator.attrs,
				dir: prop("dir"),
				"data-state": open ? "open" : "closed"
			});
		},
		getPositionerProps() {
			return normalize.element({
				...parts$1.positioner.attrs,
				dir: prop("dir"),
				id: getPositionerId(scope),
				style: popperStyles.floating
			});
		},
		getArrowProps() {
			return normalize.element({
				id: getArrowId(scope),
				...parts$1.arrow.attrs,
				dir: prop("dir"),
				style: popperStyles.arrow
			});
		},
		getArrowTipProps() {
			return normalize.element({
				...parts$1.arrowTip.attrs,
				dir: prop("dir"),
				style: popperStyles.arrowTip
			});
		},
		getContentProps() {
			return normalize.element({
				...parts$1.content.attrs,
				id: getContentId(scope),
				"aria-label": prop("aria-label"),
				hidden: !open,
				"data-state": open ? "open" : "closed",
				role: composite ? "menu" : "dialog",
				tabIndex: 0,
				dir: prop("dir"),
				"aria-activedescendant": computed("highlightedId") || void 0,
				"aria-labelledby": anchorPoint ? getContextTriggerId(scope, triggerValue ?? void 0) : getTriggerId(scope, triggerValue ?? void 0),
				"data-placement": currentPlacement,
				"data-side": currentPlacementSide,
				onPointerEnter(event) {
					if (event.pointerType !== "mouse") return;
					send({ type: "MENU_POINTERENTER" });
				},
				onKeyDown(event) {
					if (event.defaultPrevented) return;
					if (!contains(event.currentTarget, getEventTarget(event))) return;
					const target = getEventTarget(event);
					if (!(target?.closest("[role=menu]") === event.currentTarget || target === event.currentTarget)) return;
					if (event.key === "Tab") {
						if (!isValidTabEvent(event)) {
							event.preventDefault();
							return;
						}
					}
					const keyMap = {
						ArrowDown() {
							send({ type: "ARROW_DOWN" });
						},
						ArrowUp() {
							send({ type: "ARROW_UP" });
						},
						ArrowLeft() {
							send({ type: "ARROW_LEFT" });
						},
						ArrowRight() {
							send({ type: "ARROW_RIGHT" });
						},
						Enter() {
							send({ type: "ENTER" });
						},
						Space(event2) {
							if (isTypingAhead) send({
								type: "TYPEAHEAD",
								key: event2.key
							});
							else keyMap.Enter?.(event2);
						},
						Home() {
							send({ type: "HOME" });
						},
						End() {
							send({ type: "END" });
						}
					};
					const exec = keyMap[getEventKey(event, { dir: prop("dir") })];
					if (exec) {
						exec(event);
						event.stopPropagation();
						event.preventDefault();
						return;
					}
					if (!prop("typeahead")) return;
					if (!isPrintableKey(event)) return;
					if (isModifierKey(event)) return;
					if (isEditableElement(target)) return;
					send({
						type: "TYPEAHEAD",
						key: event.key
					});
					event.preventDefault();
				}
			});
		},
		getSeparatorProps() {
			return normalize.element({
				...parts$1.separator.attrs,
				role: "separator",
				dir: prop("dir"),
				"aria-orientation": "horizontal"
			});
		},
		getItemState,
		getItemProps,
		getOptionItemState,
		getOptionItemProps(props) {
			const { type, disabled, closeOnSelect } = props;
			const option = getOptionItemProps(props);
			const itemState = getOptionItemState(props);
			return {
				...getItemProps(option),
				...normalize.element({
					"data-type": type,
					...parts$1.item.attrs,
					dir: prop("dir"),
					"data-value": option.value,
					role: `menuitem${type}`,
					"aria-checked": !!itemState.checked,
					"data-state": itemState.checked ? "checked" : "unchecked",
					onClick(event) {
						if (disabled) return;
						if (isDownloadingEvent(event)) return;
						if (isOpeningInNewTab(event)) return;
						const target = event.currentTarget;
						send({
							type: "ITEM_CLICK",
							target,
							option,
							closeOnSelect
						});
					}
				})
			};
		},
		getItemIndicatorProps(props) {
			const itemState = getOptionItemState(cast(props));
			const dataState = itemState.checked ? "checked" : "unchecked";
			return normalize.element({
				...parts$1.itemIndicator.attrs,
				dir: prop("dir"),
				"data-disabled": dataAttr(itemState.disabled),
				"data-highlighted": dataAttr(itemState.highlighted),
				"data-state": hasProp(props, "checked") ? dataState : void 0,
				hidden: hasProp(props, "checked") ? !itemState.checked : void 0
			});
		},
		getItemTextProps(props) {
			const itemState = getOptionItemState(cast(props));
			const dataState = itemState.checked ? "checked" : "unchecked";
			return normalize.element({
				...parts$1.itemText.attrs,
				dir: prop("dir"),
				"data-disabled": dataAttr(itemState.disabled),
				"data-highlighted": dataAttr(itemState.highlighted),
				"data-state": hasProp(props, "checked") ? dataState : void 0
			});
		},
		getItemGroupLabelProps(props) {
			return normalize.element({
				...parts$1.itemGroupLabel.attrs,
				id: getGroupLabelId(scope, props.htmlFor),
				dir: prop("dir")
			});
		},
		getItemGroupProps(props) {
			return normalize.element({
				id: getGroupId(scope, props.id),
				...parts$1.itemGroup.attrs,
				dir: prop("dir"),
				"aria-labelledby": getGroupLabelId(scope, props.id),
				role: "group"
			});
		}
	};
}
//#endregion
//#region node_modules/@zag-js/menu/dist/menu.machine.mjs
var { not: not$1, and, or } = createGuards();
var machine$1 = createMachine({
	props({ props }) {
		return {
			closeOnSelect: true,
			typeahead: true,
			composite: true,
			loopFocus: false,
			navigate(details) {
				clickIfLink(details.node);
			},
			...props,
			positioning: {
				placement: "bottom-start",
				gutter: 8,
				...props.positioning
			}
		};
	},
	initialState({ prop }) {
		return prop("open") || prop("defaultOpen") ? "open" : "idle";
	},
	context({ bindable, prop, scope }) {
		return {
			highlightedValue: bindable(() => ({
				defaultValue: prop("defaultHighlightedValue") || null,
				value: prop("highlightedValue"),
				onChange(value) {
					prop("onHighlightChange")?.({ highlightedValue: value });
				}
			})),
			lastHighlightedValue: bindable(() => ({ defaultValue: null })),
			currentPlacement: bindable(() => ({ defaultValue: void 0 })),
			intentPolygon: bindable(() => ({ defaultValue: null })),
			anchorPoint: bindable(() => ({
				defaultValue: null,
				hash(value) {
					return `x: ${value?.x}, y: ${value?.y}`;
				}
			})),
			isSubmenu: bindable(() => ({ defaultValue: false })),
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
			})),
			pointerRoutingMode: bindable(() => ({ defaultValue: "interactive" }))
		};
	},
	refs() {
		return {
			parent: null,
			children: {},
			pointerRoutingLocked: false,
			typeaheadState: { ...getByTypeahead.defaultOptions },
			positioningOverride: {}
		};
	},
	computed: {
		isRtl: ({ prop }) => prop("dir") === "rtl",
		isTypingAhead: ({ refs }) => refs.get("typeaheadState").keysSoFar !== "",
		highlightedId: ({ context, scope, refs }) => resolveItemId(refs.get("children"), context.get("highlightedValue"), scope)
	},
	watch({ track, action, context, prop }) {
		track([() => context.get("isSubmenu")], () => {
			action(["setSubmenuPlacement"]);
		});
		track([() => context.hash("anchorPoint")], () => {
			if (!context.get("anchorPoint")) return;
			action(["reposition"]);
		});
		track([() => prop("open")], () => {
			action(["toggleVisibility"]);
		});
	},
	on: {
		"TRIGGER_VALUE.SET": { actions: [
			"setTriggerValue",
			"setAnchorPoint",
			"reposition",
			"focusMenu"
		] },
		"PARENT.SET": { actions: ["setParentMenu"] },
		"CHILD.SET": { actions: ["setChildMenu"] },
		OPEN: [{
			guard: "isOpenControlled",
			actions: ["setTriggerValue", "invokeOnOpen"]
		}, {
			target: "open",
			actions: ["setTriggerValue", "invokeOnOpen"]
		}],
		OPEN_AUTOFOCUS: [{
			guard: "isOpenControlled",
			actions: ["setTriggerValue", "invokeOnOpen"]
		}, {
			target: "open",
			actions: [
				"setTriggerValue",
				"highlightFirstItem",
				"invokeOnOpen"
			]
		}],
		CLOSE: [{
			guard: "isOpenControlled",
			actions: ["invokeOnClose", "releaseParentRoutingLock"]
		}, {
			target: "closed",
			actions: [
				"invokeOnClose",
				"releaseParentRoutingLock",
				"focusTrigger"
			]
		}],
		"HIGHLIGHTED.RESTORE": { actions: ["restoreHighlightedItem"] },
		"HIGHLIGHTED.SET": { actions: ["setHighlightedItem"] },
		"HIGHLIGHTED.SUGGEST": { actions: ["suggestHighlightedItem"] }
	},
	states: {
		idle: {
			tags: ["closed"],
			on: {
				"CONTROLLED.OPEN": { target: "open" },
				"CONTROLLED.CLOSE": { target: "closed" },
				CONTEXT_MENU_START: {
					target: "opening:contextmenu",
					actions: ["setAnchorPoint", "setTriggerValue"]
				},
				CONTEXT_MENU: [{
					guard: "isOpenControlled",
					actions: [
						"setAnchorPoint",
						"setTriggerValue",
						"invokeOnOpen"
					]
				}, {
					target: "open",
					actions: [
						"setAnchorPoint",
						"setTriggerValue",
						"invokeOnOpen"
					]
				}],
				TRIGGER_CLICK: [{
					guard: "isOpenControlled",
					actions: ["invokeOnOpen", "setTriggerValue"]
				}, {
					target: "open",
					actions: ["invokeOnOpen", "setTriggerValue"]
				}],
				TRIGGER_FOCUS: {
					guard: not$1("isSubmenu"),
					target: "closed"
				},
				TRIGGER_POINTERMOVE: {
					guard: "isSubmenu",
					target: "opening"
				}
			}
		},
		"opening:contextmenu": {
			tags: ["closed"],
			effects: ["waitForLongPress"],
			on: {
				"CONTROLLED.OPEN": {
					target: "open",
					actions: ["reposition"]
				},
				"CONTROLLED.CLOSE": {
					target: "closed",
					actions: ["focusTrigger"]
				},
				CONTEXT_MENU_CANCEL: [{
					guard: "isOpenControlled",
					actions: ["invokeOnClose", "releaseParentRoutingLock"]
				}, {
					target: "closed",
					actions: [
						"invokeOnClose",
						"releaseParentRoutingLock",
						"focusTrigger"
					]
				}],
				"LONG_PRESS.OPEN": [{
					guard: "isOpenControlled",
					actions: ["setTriggerValue", "invokeOnOpen"]
				}, {
					target: "open",
					actions: [
						"setTriggerValue",
						"invokeOnOpen",
						"reposition"
					]
				}]
			}
		},
		opening: {
			tags: ["closed"],
			effects: ["waitForOpenDelay"],
			on: {
				"CONTROLLED.OPEN": { target: "open" },
				"CONTROLLED.CLOSE": {
					target: "closed",
					actions: ["focusTrigger"]
				},
				BLUR: [{
					guard: "isOpenControlled",
					actions: ["invokeOnClose", "releaseParentRoutingLock"]
				}, {
					target: "closed",
					actions: [
						"invokeOnClose",
						"releaseParentRoutingLock",
						"focusTrigger"
					]
				}],
				TRIGGER_POINTERLEAVE: [{
					guard: "isOpenControlled",
					actions: ["invokeOnClose", "releaseParentRoutingLock"]
				}, {
					target: "closed",
					actions: [
						"invokeOnClose",
						"releaseParentRoutingLock",
						"focusTrigger"
					]
				}],
				"DELAY.OPEN": [{
					guard: "isOpenControlled",
					actions: ["invokeOnOpen"]
				}, {
					target: "open",
					actions: ["invokeOnOpen"]
				}]
			}
		},
		closing: {
			tags: ["open"],
			effects: [
				"trackPointerMove",
				"trackInteractOutside",
				"waitForCloseDelay"
			],
			on: {
				"CONTROLLED.OPEN": { target: "open" },
				"CONTROLLED.CLOSE": {
					target: "closed",
					actions: ["focusParentMenu", "restoreParentHighlightedItem"]
				},
				MENU_POINTERENTER: {
					target: "open",
					actions: ["clearIntentPolygon"]
				},
				POINTER_MOVED_AWAY_FROM_SUBMENU: [{
					guard: "isOpenControlled",
					actions: ["invokeOnClose", "releaseParentRoutingLock"]
				}, {
					target: "closed",
					actions: ["focusParentMenu", "restoreParentHighlightedItem"]
				}],
				"DELAY.CLOSE": [{
					guard: "isOpenControlled",
					actions: ["invokeOnClose", "releaseParentRoutingLock"]
				}, {
					target: "closed",
					actions: [
						"focusParentMenu",
						"restoreParentHighlightedItem",
						"invokeOnClose",
						"releaseParentRoutingLock"
					]
				}]
			}
		},
		closed: {
			tags: ["closed"],
			entry: [
				"clearHighlightedItem",
				"unlockParentOnClose",
				"clearAnchorPoint"
			],
			on: {
				"CONTROLLED.OPEN": [
					{
						guard: or("isOpenAutoFocusEvent", "isArrowDownEvent"),
						target: "open",
						actions: ["highlightFirstItem"]
					},
					{
						guard: "isArrowUpEvent",
						target: "open",
						actions: ["highlightLastItem"]
					},
					{ target: "open" }
				],
				CONTEXT_MENU_START: {
					target: "opening:contextmenu",
					actions: ["setAnchorPoint", "setTriggerValue"]
				},
				CONTEXT_MENU: [{
					guard: "isOpenControlled",
					actions: [
						"setAnchorPoint",
						"setTriggerValue",
						"invokeOnOpen"
					]
				}, {
					target: "open",
					actions: [
						"setAnchorPoint",
						"setTriggerValue",
						"invokeOnOpen"
					]
				}],
				TRIGGER_CLICK: [{
					guard: "isOpenControlled",
					actions: ["invokeOnOpen", "setTriggerValue"]
				}, {
					target: "open",
					actions: ["invokeOnOpen", "setTriggerValue"]
				}],
				TRIGGER_POINTERMOVE: {
					guard: "isTriggerItem",
					target: "opening"
				},
				TRIGGER_BLUR: { target: "idle" },
				ARROW_DOWN: [{
					guard: "isOpenControlled",
					actions: ["setTriggerValue", "invokeOnOpen"]
				}, {
					target: "open",
					actions: [
						"setTriggerValue",
						"highlightFirstItem",
						"invokeOnOpen"
					]
				}],
				ARROW_UP: [{
					guard: "isOpenControlled",
					actions: ["setTriggerValue", "invokeOnOpen"]
				}, {
					target: "open",
					actions: [
						"setTriggerValue",
						"highlightLastItem",
						"invokeOnOpen"
					]
				}]
			}
		},
		open: {
			tags: ["open"],
			effects: [
				"trackInteractOutside",
				"trackFocusVisible",
				"trackPositioning",
				"scrollToHighlightedItem"
			],
			entry: ["focusMenu", "unlockParentOnOpen"],
			on: {
				"CONTROLLED.CLOSE": [{
					target: "closed",
					guard: "isArrowLeftEvent",
					actions: ["focusParentMenu"]
				}, {
					target: "closed",
					actions: ["focusTrigger"]
				}],
				TRIGGER_CLICK: [{
					guard: and(not$1("isTriggerItem"), "isOpenControlled"),
					actions: ["invokeOnClose", "releaseParentRoutingLock"]
				}, {
					guard: not$1("isTriggerItem"),
					target: "closed",
					actions: [
						"invokeOnClose",
						"releaseParentRoutingLock",
						"focusTrigger"
					]
				}],
				CONTEXT_MENU: { actions: [
					"setAnchorPoint",
					"setTriggerValue",
					"focusMenu"
				] },
				ARROW_UP: { actions: ["highlightPrevItem", "focusMenu"] },
				ARROW_DOWN: { actions: ["highlightNextItem", "focusMenu"] },
				ARROW_LEFT: [{
					guard: and("isSubmenu", "isOpenControlled"),
					actions: ["invokeOnClose", "releaseParentRoutingLock"]
				}, {
					guard: "isSubmenu",
					target: "closed",
					actions: [
						"focusParentMenu",
						"invokeOnClose",
						"releaseParentRoutingLock"
					]
				}],
				HOME: { actions: ["highlightFirstItem", "focusMenu"] },
				END: { actions: ["highlightLastItem", "focusMenu"] },
				ARROW_RIGHT: {
					guard: "isTriggerItemHighlighted",
					actions: ["openSubmenu"]
				},
				ENTER: [{
					guard: "isTriggerItemHighlighted",
					actions: ["openSubmenu"]
				}, { actions: ["clickHighlightedItem"] }],
				ITEM_POINTERMOVE: [{
					guard: not$1("isPointerRoutingLocked"),
					actions: [
						"setHighlightedItem",
						"focusMenu",
						"closeSiblingMenus"
					]
				}, { actions: ["setLastHighlightedItem", "closeSiblingMenus"] }],
				ITEM_POINTERLEAVE: {
					guard: and(not$1("isPointerRoutingLocked"), not$1("isTriggerItem")),
					actions: ["clearHighlightedItem"]
				},
				ITEM_CLICK: [
					{
						guard: and(not$1("isTriggerItemHighlighted"), not$1("isHighlightedItemEditable"), "closeOnSelect", "isOpenControlled"),
						actions: [
							"invokeOnSelect",
							"setOptionState",
							"closeRootMenu",
							"invokeOnClose",
							"releaseParentRoutingLock"
						]
					},
					{
						guard: and(not$1("isTriggerItemHighlighted"), not$1("isHighlightedItemEditable"), "closeOnSelect"),
						target: "closed",
						actions: [
							"invokeOnSelect",
							"setOptionState",
							"closeRootMenu",
							"invokeOnClose",
							"releaseParentRoutingLock",
							"focusTrigger"
						]
					},
					{
						guard: and(not$1("isTriggerItemHighlighted"), not$1("isHighlightedItemEditable")),
						actions: ["invokeOnSelect", "setOptionState"]
					},
					{ actions: ["setHighlightedItem"] }
				],
				TRIGGER_POINTERMOVE: {
					guard: "isTriggerItem",
					actions: ["setIntentPolygon"]
				},
				TRIGGER_POINTERLEAVE: {
					target: "closing",
					actions: ["setIntentPolygon"]
				},
				ITEM_POINTERDOWN: { actions: ["setHighlightedItem"] },
				TYPEAHEAD: { actions: ["highlightMatchedItem"] },
				FOCUS_MENU: { actions: ["focusMenu"] },
				"POSITIONING.SET": { actions: ["reposition"] }
			}
		}
	},
	implementations: {
		guards: {
			closeOnSelect: ({ prop, event }) => !!(event?.closeOnSelect ?? prop("closeOnSelect")),
			isTriggerItem: ({ event }) => isTriggerItem(event.target),
			isTriggerItemHighlighted: ({ event, scope, computed }) => {
				return !!(event.target ?? scope.getById(computed("highlightedId")))?.hasAttribute("data-controls");
			},
			isSubmenu: ({ context }) => context.get("isSubmenu"),
			isPointerRoutingLocked: ({ refs }) => refs.get("pointerRoutingLocked"),
			isHighlightedItemEditable: ({ scope, computed }) => isEditableElement(scope.getById(computed("highlightedId"))),
			isOpenControlled: ({ prop }) => prop("open") !== void 0,
			isArrowLeftEvent: ({ event }) => event.previousEvent?.type === "ARROW_LEFT",
			isArrowUpEvent: ({ event }) => event.previousEvent?.type === "ARROW_UP",
			isArrowDownEvent: ({ event }) => event.previousEvent?.type === "ARROW_DOWN",
			isOpenAutoFocusEvent: ({ event }) => event.previousEvent?.type === "OPEN_AUTOFOCUS"
		},
		effects: {
			waitForOpenDelay({ send }) {
				const timer = setTimeout(() => {
					send({ type: "DELAY.OPEN" });
				}, 200);
				return () => clearTimeout(timer);
			},
			waitForCloseDelay({ send }) {
				const timer = setTimeout(() => {
					send({ type: "DELAY.CLOSE" });
				}, 100);
				return () => clearTimeout(timer);
			},
			waitForLongPress({ send }) {
				const timer = setTimeout(() => {
					send({ type: "LONG_PRESS.OPEN" });
				}, 700);
				return () => clearTimeout(timer);
			},
			trackFocusVisible({ scope }) {
				return trackFocusVisible({ root: scope.getRootNode?.() });
			},
			trackPositioning({ context, prop, scope, refs }) {
				if (getContextTriggerEl(scope) || getContextTriggerEls(scope).length > 0) return;
				const positioning = {
					...prop("positioning"),
					...refs.get("positioningOverride")
				};
				context.set("currentPlacement", positioning.placement);
				const getPositionerEl2 = () => getPositionerEl(scope);
				const getTriggerEl2 = () => getActiveTriggerEl(scope, context.get("triggerValue"));
				return getPlacement(getTriggerEl2, getPositionerEl2, {
					...positioning,
					defer: true,
					onComplete(data) {
						context.set("currentPlacement", data.placement);
					}
				});
			},
			trackInteractOutside({ refs, scope, prop, context, send }) {
				const getContentEl2 = () => getContentEl(scope);
				let restoreFocus = true;
				const isWithinAnyContextTrigger = (target) => {
					return getContextTriggerEls(scope).some((el) => contains(el, target));
				};
				return trackDismissableElement(getContentEl2, {
					type: "menu",
					defer: true,
					exclude: [getTriggerEl(scope), ...getTriggerEls(scope)].filter(Boolean),
					onInteractOutside: prop("onInteractOutside"),
					onRequestDismiss: prop("onRequestDismiss"),
					onFocusOutside(event) {
						prop("onFocusOutside")?.(event);
						const target = getEventTarget(event.detail.originalEvent);
						if (isWithinAnyContextTrigger(target)) {
							event.preventDefault();
							return;
						}
						if (isTargetWithinMenuTree(target, refs.get("children"))) {
							event.preventDefault();
							return;
						}
					},
					onEscapeKeyDown(event) {
						prop("onEscapeKeyDown")?.(event);
						if (context.get("isSubmenu")) event.preventDefault();
						closeRootMenu({ parent: refs.get("parent") });
					},
					onPointerDownOutside(event) {
						prop("onPointerDownOutside")?.(event);
						const target = getEventTarget(event.detail.originalEvent);
						if (isWithinAnyContextTrigger(target) && event.detail.contextmenu) {
							event.preventDefault();
							return;
						}
						restoreFocus = !event.detail.focusable;
					},
					onDismiss() {
						send({
							type: "CLOSE",
							src: "interact-outside",
							restoreFocus
						});
					}
				});
			},
			trackPointerMove({ context, scope, send, refs }) {
				const parent = refs.get("parent");
				if (!parent) return;
				setParentRoutingLock(parent, true);
				const doc = scope.getDoc();
				return addDomEvent(doc, "pointermove", (e) => {
					if (!isWithinPolygon(context.get("intentPolygon"), {
						x: e.clientX,
						y: e.clientY
					})) {
						send({ type: "POINTER_MOVED_AWAY_FROM_SUBMENU" });
						setParentRoutingLock(parent, false);
					}
				});
			},
			scrollToHighlightedItem({ scope, computed }) {
				const exec = () => {
					if (getInteractionModality() === "pointer") return;
					scrollIntoView(scope.getById(computed("highlightedId")), {
						rootEl: getContentEl(scope),
						block: "nearest"
					});
				};
				raf(() => {
					setInteractionModality("virtual");
					exec();
				});
				const contentEl = () => getContentEl(scope);
				return observeAttributes(contentEl, {
					defer: true,
					attributes: ["aria-activedescendant"],
					callback: exec
				});
			}
		},
		actions: {
			setAnchorPoint({ context, event }) {
				context.set("anchorPoint", (prev) => isEqual(prev, event.point) ? prev : event.point);
			},
			setSubmenuPlacement({ context, computed, refs }) {
				if (!context.get("isSubmenu")) return;
				const placement = computed("isRtl") ? "left-start" : "right-start";
				refs.set("positioningOverride", {
					placement,
					gutter: 0
				});
			},
			reposition({ context, scope, prop, event, refs }) {
				const getPositionerEl2 = () => getPositionerEl(scope);
				const anchorPoint = event.point ?? context.get("anchorPoint");
				const getAnchorRect = anchorPoint ? () => ({
					width: 0,
					height: 0,
					...anchorPoint
				}) : void 0;
				const positioning = {
					...prop("positioning"),
					...refs.get("positioningOverride")
				};
				const triggerValue = event.value ?? context.get("triggerValue");
				const getTriggerEl2 = () => getActiveTriggerEl(scope, triggerValue);
				getPlacement(getTriggerEl2, getPositionerEl2, {
					...positioning,
					defer: true,
					getAnchorRect,
					...event.options ?? {},
					listeners: false,
					onComplete(data) {
						context.set("currentPlacement", data.placement);
					}
				});
			},
			setOptionState({ event }) {
				if (!event.option) return;
				const { checked, onCheckedChange, type } = event.option;
				if (type === "radio") onCheckedChange?.(true);
				else if (type === "checkbox") onCheckedChange?.(!checked);
			},
			clickHighlightedItem({ scope, computed, prop, context }) {
				const itemEl = scope.getById(computed("highlightedId"));
				if (!itemEl || itemEl.dataset.disabled) return;
				const highlightedValue = context.get("highlightedValue");
				if (isAnchorElement(itemEl)) prop("navigate")?.({
					value: highlightedValue,
					node: itemEl,
					href: itemEl.href
				});
				else queueMicrotask(() => itemEl.click());
			},
			setIntentPolygon({ context, scope, event }) {
				const menu = getContentEl(scope);
				const placement = context.get("currentPlacement");
				if (!menu || !placement) return;
				const polygon = getElementPolygon(menu.getBoundingClientRect(), placement);
				if (!polygon) return;
				const bleed = getPlacementSide(placement) === "right" ? -5 : 5;
				context.set("intentPolygon", [{
					...event.point,
					x: event.point.x + bleed
				}, ...polygon]);
			},
			clearIntentPolygon({ context }) {
				context.set("intentPolygon", null);
			},
			clearAnchorPoint({ context }) {
				context.set("anchorPoint", null);
			},
			unlockParentOnOpen({ refs, context, scope }) {
				const parent = refs.get("parent");
				if (context.get("isSubmenu")) {
					const value = getTriggerId(scope);
					parent?.send({
						type: "HIGHLIGHTED.SUGGEST",
						value
					});
				}
				setParentRoutingLock(parent, false);
			},
			unlockParentOnClose({ refs, context }) {
				unlockParentAfterChildClose(refs.get("parent"), context.get("isSubmenu"));
			},
			setHighlightedItem({ context, event }) {
				const value = event.value || getItemValue(event.target);
				context.set("highlightedValue", value);
			},
			clearHighlightedItem({ context }) {
				context.set("highlightedValue", null);
			},
			focusMenu({ scope }) {
				raf(() => {
					const contentEl = getContentEl(scope);
					getInitialFocus({
						root: contentEl,
						enabled: !contains(contentEl, scope.getActiveElement()),
						filter(node) {
							return !node.role?.startsWith("menuitem");
						}
					})?.focus({ preventScroll: true });
				});
			},
			highlightFirstItem({ context, scope }) {
				(getContentEl(scope) ? queueMicrotask : raf)(() => {
					const first = getFirstEl(scope);
					if (!first) return;
					context.set("highlightedValue", getItemValue(first));
				});
			},
			highlightLastItem({ context, scope }) {
				(getContentEl(scope) ? queueMicrotask : raf)(() => {
					const last = getLastEl(scope);
					if (!last) return;
					context.set("highlightedValue", getItemValue(last));
				});
			},
			highlightNextItem({ context, scope, event, prop }) {
				const next = getNextEl(scope, {
					loop: event.loop,
					value: context.get("highlightedValue"),
					loopFocus: prop("loopFocus")
				});
				context.set("highlightedValue", getItemValue(next));
			},
			highlightPrevItem({ context, scope, event, prop }) {
				const prev = getPrevEl(scope, {
					loop: event.loop,
					value: context.get("highlightedValue"),
					loopFocus: prop("loopFocus")
				});
				context.set("highlightedValue", getItemValue(prev));
			},
			invokeOnSelect({ context, prop, scope }) {
				const value = context.get("highlightedValue");
				if (value == null) return;
				dispatchSelectionEvent(getItemEl(scope, value), value);
				prop("onSelect")?.({ value });
			},
			focusTrigger({ scope, context, event }) {
				if (context.get("isSubmenu") || context.get("anchorPoint") || event.restoreFocus === false) return;
				queueMicrotask(() => {
					getActiveTriggerEl(scope, context.get("triggerValue"))?.focus({ preventScroll: true });
				});
			},
			highlightMatchedItem({ scope, context, event, refs }) {
				const node = getElemByKey(scope, {
					key: event.key,
					value: context.get("highlightedValue"),
					typeaheadState: refs.get("typeaheadState")
				});
				if (!node) return;
				context.set("highlightedValue", getItemValue(node));
			},
			setParentMenu({ refs, event, context }) {
				refs.set("parent", event.value);
				context.set("isSubmenu", true);
			},
			setChildMenu({ refs, event }) {
				const children = refs.get("children");
				children[event.id] = event.value;
				refs.set("children", children);
			},
			closeSiblingMenus({ refs, event, scope }) {
				const target = event.target;
				if (!isTriggerItem(target)) return;
				const hoveredChildId = target?.getAttribute("data-uid");
				const children = refs.get("children");
				for (const id in children) {
					if (id === hoveredChildId) continue;
					const child = children[id];
					const intentPolygon = child.context.get("intentPolygon");
					if (intentPolygon && event.point && isPointInPolygon(intentPolygon, event.point)) continue;
					getContentEl(scope)?.focus({ preventScroll: true });
					child.send({ type: "CLOSE" });
				}
			},
			closeRootMenu({ refs }) {
				closeRootMenu({ parent: refs.get("parent") });
			},
			openSubmenu({ refs, scope, computed }) {
				const id = scope.getById(computed("highlightedId"))?.getAttribute("data-uid");
				const children = refs.get("children");
				(id ? children[id] : null)?.send({ type: "OPEN_AUTOFOCUS" });
			},
			focusParentMenu({ refs }) {
				refs.get("parent")?.send({ type: "FOCUS_MENU" });
			},
			setLastHighlightedItem({ context, event }) {
				context.set("lastHighlightedValue", getItemValue(event.target));
			},
			suggestHighlightedItem({ context, event }) {
				const value = event.value;
				if (!value) return;
				if (context.get("highlightedValue") != null) {
					context.set("lastHighlightedValue", value);
					return;
				}
				context.set("highlightedValue", value);
			},
			restoreHighlightedItem({ context }) {
				const last = context.get("lastHighlightedValue");
				context.set("lastHighlightedValue", null);
				if (!last) return;
				context.set("highlightedValue", last);
			},
			restoreParentHighlightedItem({ refs }) {
				refs.get("parent")?.send({ type: "HIGHLIGHTED.RESTORE" });
			},
			invokeOnOpen({ prop }) {
				prop("onOpenChange")?.({ open: true });
			},
			invokeOnClose({ prop }) {
				prop("onOpenChange")?.({ open: false });
			},
			releaseParentRoutingLock({ refs, context }) {
				if (!context.get("isSubmenu")) return;
				unlockParentOnSubmenuClose(refs.get("parent"));
			},
			toggleVisibility({ prop, event, send }) {
				send({
					type: prop("open") ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE",
					previousEvent: event
				});
			},
			setTriggerValue({ context, event }) {
				if (event.value === void 0) return;
				context.set("triggerValue", event.value);
			}
		}
	}
});
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/menu/use-menu.svelte.js
var useMenu = (props) => {
	const env = useEnvironmentContext();
	const locale = useLocaleContext();
	const machineProps = user_derived(() => {
		const resolvedProps = runIfFn(props);
		return {
			dir: locale().dir,
			getRootNode: env().getRootNode,
			...resolvedProps
		};
	});
	const service = useMachine(machine$1, () => get(machineProps));
	const api = user_derived(() => connect$1(service, normalizeProps));
	return () => ({
		api: get(api),
		service
	});
};
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-root.svelte
var rest_excludes$18 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"open"
]);
function Menu_root($$anchor, $$props) {
	const providedId = props_id();
	push($$props, true);
	let open = prop($$props, "open", 15), props = rest_props($$props, rest_excludes$18);
	const $$d = user_derived(() => splitPresenceProps(props)), $$array = user_derived(() => to_array(get($$d), 2)), presenceProps = user_derived(() => get($$array)[0]), menuProps = user_derived(() => get($$array)[1]);
	const $$d_1 = user_derived(() => createSplitProps()(get(menuProps), [
		"anchorPoint",
		"aria-label",
		"closeOnSelect",
		"composite",
		"defaultHighlightedValue",
		"defaultOpen",
		"defaultTriggerValue",
		"highlightedValue",
		"id",
		"ids",
		"loopFocus",
		"navigate",
		"onEscapeKeyDown",
		"onFocusOutside",
		"onHighlightChange",
		"onInteractOutside",
		"onOpenChange",
		"onPointerDownOutside",
		"onRequestDismiss",
		"onSelect",
		"onTriggerValueChange",
		"open",
		"positioning",
		"triggerValue",
		"typeahead"
	])), $$array_1 = user_derived(() => to_array(get($$d_1), 2)), useMenuProps = user_derived(() => get($$array_1)[0]), localProps = user_derived(() => get($$array_1)[1]);
	const parentApi = useMenuContext();
	const parentMachine = useMenuMachineContext();
	const resolvedProps = user_derived(() => ({
		...get(useMenuProps),
		id: get(useMenuProps).id ?? providedId,
		open: open(),
		onOpenChange(details) {
			get(useMenuProps).onOpenChange?.(details);
			if (open() !== void 0) open(details.open);
		}
	}));
	const menu = useMenu(() => get(resolvedProps));
	const api = user_derived(() => menu().api);
	const service = user_derived(() => menu().service);
	const presence = usePresence(() => ({
		present: get(api).open,
		...get(presenceProps)
	}));
	onMount(() => {
		const _parentService = parentMachine?.();
		const _parentApi = parentApi?.();
		if (!_parentService || !_parentApi) return;
		_parentApi.setChild(get(service));
		get(api).setParent(_parentService);
	});
	const triggerItemContext = user_derived(() => parentApi?.().getTriggerItemProps(get(api)));
	MenuTriggerItemProvider(() => get(triggerItemContext));
	MenuMachineProvider(() => get(service));
	MenuProvider(() => get(api));
	PresenceProvider(presence);
	var fragment = comment();
	var node = first_child(fragment);
	snippet(node, () => get(localProps).children ?? noop);
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-separator.svelte
var rest_excludes$17 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Menu_separator($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$17);
	const menu = useMenuContext();
	const mergedProps = user_derived(() => mergeProps(menu().getSeparatorProps(), props));
	Factory($$anchor, spread_props({
		as: "div",
		"data-scope": "menu",
		"data-part": "separator"
	}, () => get(mergedProps), {
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
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-trigger-item.svelte
var rest_excludes$16 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Menu_trigger_item($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$16);
	const getTriggerItemProps = useMenuTriggerItemContext();
	const mergedProps = user_derived(() => mergeProps(getTriggerItemProps?.() ?? {}, props));
	MenuItemPropsProvider(() => ({ value: get(mergedProps)["data-value"] }));
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
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-trigger.svelte
var rest_excludes$15 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Menu_trigger($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$15);
	const $$d = user_derived(() => createSplitProps()(props, ["value"])), $$array = user_derived(() => to_array(get($$d), 2)), triggerProps = user_derived(() => get($$array)[0]), localProps = user_derived(() => get($$array)[1]);
	const menu = useMenuContext();
	const triggerItemProps = useMenuTriggerItemContext();
	const mergedProps = user_derived(() => mergeProps(menu().getTriggerProps(get(triggerProps)), triggerItemProps?.() || {}, get(localProps)));
	Factory($$anchor, spread_props({
		as: "button",
		"data-scope": "menu",
		"data-part": "trigger"
	}, () => get(mergedProps), {
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
//#region node_modules/@ark-ui/svelte/dist/components/switch/use-switch-context.js
var [SwitchProvider, useSwitchContext] = createContext({
	name: "SwitchContext",
	hookName: "useSwitchContext",
	providerName: "<SwitchProvider />"
});
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/switch/switch-control.svelte
var rest_excludes$14 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Switch_control($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$14);
	const switchMachine = useSwitchContext();
	const mergedProps = user_derived(() => mergeProps(switchMachine().getControlProps(), props));
	Factory($$anchor, spread_props({ as: "span" }, () => get(mergedProps), {
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
//#region node_modules/@ark-ui/svelte/dist/components/switch/switch-hidden-input.svelte
var rest_excludes$13 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Switch_hidden_input($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$13);
	const switchMachine = useSwitchContext();
	const mergedProps = user_derived(() => mergeProps(switchMachine().getHiddenInputProps(), props));
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
//#region node_modules/@ark-ui/svelte/dist/components/switch/switch-label.svelte
var rest_excludes$12 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Switch_label($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$12);
	const switchMachine = useSwitchContext();
	const mergedProps = user_derived(() => mergeProps(switchMachine().getLabelProps(), props));
	Factory($$anchor, spread_props({ as: "span" }, () => get(mergedProps), {
		get ref() {
			return ref();
		},
		set ref($$value) {
			ref($$value);
		}
	}));
	pop();
}
var parts = createAnatomy("switch").parts("root", "label", "control", "thumb").build();
//#endregion
//#region node_modules/@zag-js/switch/dist/switch.dom.mjs
var getRootId = (ctx) => ctx.ids?.root ?? `switch:${ctx.id}`;
var getLabelId = (ctx) => ctx.ids?.label ?? `switch:${ctx.id}:label`;
var getThumbId = (ctx) => ctx.ids?.thumb ?? `switch:${ctx.id}:thumb`;
var getControlId = (ctx) => ctx.ids?.control ?? `switch:${ctx.id}:control`;
var getHiddenInputId = (ctx) => ctx.ids?.hiddenInput ?? `switch:${ctx.id}:input`;
var getRootEl = (ctx) => ctx.getById(getRootId(ctx));
var getHiddenInputEl = (ctx) => ctx.getById(getHiddenInputId(ctx));
//#endregion
//#region node_modules/@zag-js/switch/dist/switch.connect.mjs
function connect(service, normalize) {
	const { context, send, prop, scope } = service;
	const disabled = !!prop("disabled");
	const readOnly = !!prop("readOnly");
	const required = !!prop("required");
	const checked = !!context.get("checked");
	const focused = !disabled && context.get("focused");
	const focusVisible = !disabled && context.get("focusVisible");
	const active = !disabled && context.get("active");
	const dataAttrs = {
		"data-active": dataAttr(active),
		"data-focus": dataAttr(focused),
		"data-focus-visible": dataAttr(focusVisible),
		"data-readonly": dataAttr(readOnly),
		"data-hover": dataAttr(context.get("hovered")),
		"data-disabled": dataAttr(disabled),
		"data-state": checked ? "checked" : "unchecked",
		"data-invalid": dataAttr(prop("invalid")),
		"data-required": dataAttr(required)
	};
	return {
		checked,
		disabled,
		focused,
		setChecked(checked2) {
			send({
				type: "CHECKED.SET",
				checked: checked2,
				isTrusted: false
			});
		},
		toggleChecked() {
			send({
				type: "CHECKED.TOGGLE",
				checked,
				isTrusted: false
			});
		},
		getRootProps() {
			return normalize.label({
				...parts.root.attrs,
				...dataAttrs,
				dir: prop("dir"),
				id: getRootId(scope),
				htmlFor: getHiddenInputId(scope),
				onPointerMove() {
					if (disabled) return;
					send({
						type: "CONTEXT.SET",
						context: { hovered: true }
					});
				},
				onPointerLeave() {
					if (disabled) return;
					send({
						type: "CONTEXT.SET",
						context: { hovered: false }
					});
				},
				onClick(event) {
					if (disabled) return;
					if (getEventTarget(event) === getHiddenInputEl(scope)) event.stopPropagation();
					if (isSafari()) getHiddenInputEl(scope)?.focus();
				}
			});
		},
		getLabelProps() {
			return normalize.element({
				...parts.label.attrs,
				...dataAttrs,
				dir: prop("dir"),
				id: getLabelId(scope)
			});
		},
		getThumbProps() {
			return normalize.element({
				...parts.thumb.attrs,
				...dataAttrs,
				dir: prop("dir"),
				id: getThumbId(scope),
				"aria-hidden": true
			});
		},
		getControlProps() {
			return normalize.element({
				...parts.control.attrs,
				...dataAttrs,
				dir: prop("dir"),
				id: getControlId(scope),
				"aria-hidden": true
			});
		},
		getHiddenInputProps() {
			return normalize.input({
				id: getHiddenInputId(scope),
				type: "checkbox",
				required: prop("required"),
				defaultChecked: checked,
				disabled,
				"aria-labelledby": getLabelId(scope),
				"aria-invalid": prop("invalid"),
				name: prop("name"),
				form: prop("form"),
				value: prop("value"),
				style: visuallyHiddenStyle,
				onFocus() {
					const focusVisible2 = isFocusVisible();
					send({
						type: "CONTEXT.SET",
						context: {
							focused: true,
							focusVisible: focusVisible2
						}
					});
				},
				onBlur() {
					send({
						type: "CONTEXT.SET",
						context: {
							focused: false,
							focusVisible: false
						}
					});
				},
				onClick(event) {
					if (readOnly) {
						event.preventDefault();
						return;
					}
					const checked2 = event.currentTarget.checked;
					send({
						type: "CHECKED.SET",
						checked: checked2,
						isTrusted: true
					});
				}
			});
		}
	};
}
//#endregion
//#region node_modules/@zag-js/switch/dist/switch.machine.mjs
var { not } = createGuards();
var machine = createMachine({
	props({ props }) {
		return {
			defaultChecked: false,
			label: "switch",
			value: "on",
			...props
		};
	},
	initialState() {
		return "ready";
	},
	context({ prop, bindable }) {
		return {
			checked: bindable(() => ({
				defaultValue: prop("defaultChecked"),
				value: prop("checked"),
				onChange(value) {
					prop("onCheckedChange")?.({ checked: value });
				}
			})),
			fieldsetDisabled: bindable(() => ({ defaultValue: false })),
			focusVisible: bindable(() => ({ defaultValue: false })),
			active: bindable(() => ({ defaultValue: false })),
			focused: bindable(() => ({ defaultValue: false })),
			hovered: bindable(() => ({ defaultValue: false }))
		};
	},
	computed: { isDisabled: ({ context, prop }) => prop("disabled") || context.get("fieldsetDisabled") },
	watch({ track, prop, context, action }) {
		track([() => prop("disabled")], () => {
			action(["removeFocusIfNeeded"]);
		});
		track([() => context.get("checked")], () => {
			action(["syncInputElement"]);
		});
	},
	effects: [
		"trackFormControlState",
		"trackPressEvent",
		"trackFocusVisible"
	],
	on: {
		"CHECKED.TOGGLE": [{
			guard: not("isTrusted"),
			actions: ["toggleChecked", "dispatchChangeEvent"]
		}, { actions: ["toggleChecked"] }],
		"CHECKED.SET": [{
			guard: not("isTrusted"),
			actions: ["setChecked", "dispatchChangeEvent"]
		}, { actions: ["setChecked"] }],
		"CONTEXT.SET": { actions: ["setContext"] }
	},
	states: { ready: {} },
	implementations: {
		guards: { isTrusted: ({ event }) => !!event.isTrusted },
		effects: {
			trackPressEvent({ computed, scope, context }) {
				if (computed("isDisabled")) return;
				return trackPress({
					pointerNode: getRootEl(scope),
					keyboardNode: getHiddenInputEl(scope),
					isValidKey: (event) => event.key === " ",
					onPress: () => context.set("active", false),
					onPressStart: () => context.set("active", true),
					onPressEnd: () => context.set("active", false)
				});
			},
			trackFocusVisible({ computed, scope }) {
				if (computed("isDisabled")) return;
				return trackFocusVisible({ root: scope.getRootNode() });
			},
			trackFormControlState({ context, send, scope }) {
				return trackFormControl(getHiddenInputEl(scope), {
					onFieldsetDisabledChange(disabled) {
						context.set("fieldsetDisabled", disabled);
					},
					onFormReset() {
						send({
							type: "CHECKED.SET",
							checked: !!context.initial("checked"),
							src: "form-reset"
						});
					}
				});
			}
		},
		actions: {
			setContext({ context, event }) {
				for (const key in event.context) context.set(key, event.context[key]);
			},
			syncInputElement({ context, scope }) {
				const inputEl = getHiddenInputEl(scope);
				if (!inputEl) return;
				setElementChecked(inputEl, !!context.get("checked"));
			},
			removeFocusIfNeeded({ context, prop }) {
				if (prop("disabled")) context.set("focused", false);
			},
			setChecked({ context, event }) {
				context.set("checked", event.checked);
			},
			toggleChecked({ context }) {
				context.set("checked", !context.get("checked"));
			},
			dispatchChangeEvent({ context, scope }) {
				queueMicrotask(() => {
					const inputEl = getHiddenInputEl(scope);
					dispatchInputCheckedEvent(inputEl, { checked: context.get("checked") });
				});
			}
		}
	}
});
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/switch/use-switch.svelte.js
var useSwitch = (props) => {
	const env = useEnvironmentContext();
	const locale = useLocaleContext();
	const field = useFieldContext();
	const machineProps = user_derived(() => {
		const resolvedProps = runIfFn(props);
		return {
			dir: locale().dir,
			getRootNode: env().getRootNode,
			ids: {
				label: field?.()?.ids.label,
				hiddenInput: field?.()?.ids.control
			},
			disabled: field?.()?.disabled,
			readOnly: field?.()?.readOnly,
			invalid: field?.()?.invalid,
			required: field?.()?.required,
			...resolvedProps
		};
	});
	const service = useMachine(machine, () => get(machineProps));
	const api = user_derived(() => connect(service, normalizeProps));
	return () => get(api);
};
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/switch/switch-root.svelte
var rest_excludes$11 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"checked"
]);
function Switch_root($$anchor, $$props) {
	const providedId = props_id();
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), checked = prop($$props, "checked", 15), props = rest_props($$props, rest_excludes$11);
	const $$d = user_derived(() => createSplitProps()(props, [
		"checked",
		"defaultChecked",
		"disabled",
		"form",
		"id",
		"ids",
		"invalid",
		"label",
		"name",
		"onCheckedChange",
		"readOnly",
		"required",
		"value"
	])), $$array = user_derived(() => to_array(get($$d), 2)), useSwitchProps = user_derived(() => get($$array)[0]), localProps = user_derived(() => get($$array)[1]);
	const resolvedProps = user_derived(() => ({
		...get(useSwitchProps),
		id: get(useSwitchProps).id ?? providedId,
		checked: checked(),
		onCheckedChange(details) {
			get(useSwitchProps).onCheckedChange?.(details);
			if (checked() !== void 0) checked(details.checked);
		}
	}));
	const switchMachine = useSwitch(() => get(resolvedProps));
	const mergedProps = user_derived(() => mergeProps(switchMachine().getRootProps(), get(localProps)));
	SwitchProvider(switchMachine);
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
//#region node_modules/@ark-ui/svelte/dist/components/switch/switch-thumb.svelte
var rest_excludes$10 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Switch_thumb($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), props = rest_props($$props, rest_excludes$10);
	const switchMachine = useSwitchContext();
	const mergedProps = user_derived(() => mergeProps(switchMachine().getThumbProps(), props));
	Factory($$anchor, spread_props({ as: "span" }, () => get(mergedProps), {
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
//#region src/lib/components/menu/MenuRoot.svelte
var rest_excludes$9 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"children",
	"loopFocus",
	"closeOnSelect"
]);
function MenuRoot($$anchor, $$props) {
	let loopFocus = prop($$props, "loopFocus", 3, true), closeOnSelect = prop($$props, "closeOnSelect", 3, false), rest = rest_props($$props, rest_excludes$9);
	var fragment = comment();
	var node = first_child(fragment);
	component(node, () => Menu_root, ($$anchor, Menu_Root) => {
		Menu_Root($$anchor, spread_props({
			get loopFocus() {
				return loopFocus();
			},
			get closeOnSelect() {
				return closeOnSelect();
			}
		}, () => rest, {
			children: ($$anchor, $$slotProps) => {
				var fragment_1 = comment();
				var node_1 = first_child(fragment_1);
				snippet(node_1, () => $$props.children ?? noop);
				append($$anchor, fragment_1);
			},
			$$slots: { default: true }
		}));
	});
	append($$anchor, fragment);
}
//#endregion
//#region ~icons/majesticons/chevron-down.svelte
var rest_excludes$8 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy"
]);
var root$9 = from_svg(`<svg><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 10l-5 5l-5-5"></path></svg>`);
function Chevron_down($$anchor, $$props) {
	const p = rest_props($$props, rest_excludes$8);
	var svg = root$9();
	attribute_effect(svg, () => ({
		viewBox: "0 0 24 24",
		width: "1.2em",
		height: "1.2em",
		...p
	}));
	append($$anchor, svg);
}
//#endregion
//#region src/lib/components/menu/MenuTrigger.svelte
var rest_excludes$7 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"children",
	"noChevron"
]);
var root$8 = from_html(`<!> <!>`, 1);
function MenuTrigger($$anchor, $$props) {
	let rest = rest_props($$props, rest_excludes$7);
	var fragment = comment();
	var node = first_child(fragment);
	component(node, () => Menu_trigger, ($$anchor, Menu_Trigger) => {
		Menu_Trigger($$anchor, spread_props(() => rest, {
			children: ($$anchor, $$slotProps) => {
				var fragment_1 = root$8();
				var node_1 = first_child(fragment_1);
				snippet(node_1, () => $$props.children ?? noop);
				var node_2 = sibling(node_1, 2);
				var consequent = ($$anchor) => {
					var fragment_2 = comment();
					var node_3 = first_child(fragment_2);
					component(node_3, () => Menu_indicator, ($$anchor, Menu_Indicator) => {
						Menu_Indicator($$anchor, {
							children: ($$anchor, $$slotProps) => {
								Chevron_down($$anchor, {});
							},
							$$slots: { default: true }
						});
					});
					append($$anchor, fragment_2);
				};
				if_block(node_2, ($$render) => {
					if (!$$props.noChevron) $$render(consequent);
				});
				append($$anchor, fragment_1);
			},
			$$slots: { default: true }
		}));
	});
	append($$anchor, fragment);
}
//#endregion
//#region src/lib/components/menu/MenuContent.svelte
var rest_excludes$6 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"children",
	"arrow"
]);
var root$7 = from_html(`<!> <!>`, 1);
function MenuContent($$anchor, $$props) {
	let rest = rest_props($$props, rest_excludes$6);
	Portal($$anchor, {
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = comment();
			var node = first_child(fragment_1);
			component(node, () => Menu_positioner, ($$anchor, Menu_Positioner) => {
				Menu_Positioner($$anchor, {
					children: ($$anchor, $$slotProps) => {
						var fragment_2 = comment();
						var node_1 = first_child(fragment_2);
						component(node_1, () => Menu_content, ($$anchor, Menu_Content) => {
							Menu_Content($$anchor, spread_props(() => rest, {
								children: ($$anchor, $$slotProps) => {
									var fragment_3 = root$7();
									var node_2 = first_child(fragment_3);
									var consequent = ($$anchor) => {
										var fragment_4 = comment();
										var node_3 = first_child(fragment_4);
										component(node_3, () => Menu_arrow, ($$anchor, Menu_Arrow) => {
											Menu_Arrow($$anchor, {
												children: ($$anchor, $$slotProps) => {
													var fragment_5 = comment();
													var node_4 = first_child(fragment_5);
													component(node_4, () => Menu_arrow_tip, ($$anchor, Menu_ArrowTip) => {
														Menu_ArrowTip($$anchor, {});
													});
													append($$anchor, fragment_5);
												},
												$$slots: { default: true }
											});
										});
										append($$anchor, fragment_4);
									};
									if_block(node_2, ($$render) => {
										if ($$props.arrow) $$render(consequent);
									});
									var node_5 = sibling(node_2, 2);
									snippet(node_5, () => $$props.children ?? noop);
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
//#region ~icons/majesticons/chevron-right.svelte
var rest_excludes$5 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy"
]);
var root$6 = from_svg(`<svg><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 7l5 5l-5 5"></path></svg>`);
function Chevron_right($$anchor, $$props) {
	const p = rest_props($$props, rest_excludes$5);
	var svg = root$6();
	attribute_effect(svg, () => ({
		viewBox: "0 0 24 24",
		width: "1.2em",
		height: "1.2em",
		...p
	}));
	append($$anchor, svg);
}
//#endregion
//#region src/lib/components/menu/MenuTriggerItem.svelte
var rest_excludes$4 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"children"
]);
var root$5 = from_html(`<!> <!>`, 1);
function MenuTriggerItem($$anchor, $$props) {
	push($$props, true);
	let rest = rest_props($$props, rest_excludes$4);
	var fragment = comment();
	var node = first_child(fragment);
	component(node, () => Menu_trigger_item, ($$anchor, Menu_TriggerItem) => {
		Menu_TriggerItem($$anchor, spread_props(() => rest, {
			children: ($$anchor, $$slotProps) => {
				var fragment_1 = root$5();
				var node_1 = first_child(fragment_1);
				snippet(node_1, () => $$props.children ?? noop);
				var node_2 = sibling(node_1, 2);
				{
					const render = ($$anchor, api = noop) => {
						{
							let $0 = user_derived(() => api()().open ? "submenu-icon-active" : "");
							Chevron_right($$anchor, { get class() {
								return `submenu-icon ${get($0) ?? ""}`;
							} });
						}
					};
					component(node_2, () => Menu_context, ($$anchor, Menu_Context) => {
						Menu_Context($$anchor, {
							render,
							$$slots: { render: true }
						});
					});
				}
				append($$anchor, fragment_1);
			},
			$$slots: { default: true }
		}));
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region src/lib/components/menu/MenuGroupLabel.svelte
var rest_excludes$3 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"children",
	"class"
]);
var root$4 = from_html(`<div><!></div>`);
function MenuGroupLabel($$anchor, $$props) {
	let rest = rest_props($$props, rest_excludes$3);
	var div = root$4();
	var node = child(div);
	component(node, () => Menu_item_group_label, ($$anchor, Menu_ItemGroupLabel) => {
		Menu_ItemGroupLabel($$anchor, spread_props(() => rest, {
			children: ($$anchor, $$slotProps) => {
				var fragment = comment();
				var node_1 = first_child(fragment);
				snippet(node_1, () => $$props.children ?? noop);
				append($$anchor, fragment);
			},
			$$slots: { default: true }
		}));
	});
	reset(div);
	template_effect(() => set_class(div, 1, `label-container ${$$props.class ?? "" ?? ""}`));
	append($$anchor, div);
}
//#endregion
//#region src/lib/components/menu/MenuRadioItem.svelte
var rest_excludes$2 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"children"
]);
var root$3 = from_html(`<!> <!>`, 1);
function MenuRadioItem($$anchor, $$props) {
	let rest = rest_props($$props, rest_excludes$2);
	var fragment = comment();
	var node = first_child(fragment);
	component(node, () => Menu_radio_item, ($$anchor, Menu_RadioItem) => {
		Menu_RadioItem($$anchor, spread_props(() => rest, {
			children: ($$anchor, $$slotProps) => {
				var fragment_1 = root$3();
				var node_1 = first_child(fragment_1);
				component(node_1, () => Menu_item_indicator, ($$anchor, Menu_ItemIndicator) => {
					Menu_ItemIndicator($$anchor, {
						children: ($$anchor, $$slotProps) => {
							CheckIcon($$anchor, {
								children: ($$anchor, $$slotProps) => {
									next();
									var text$2 = text("ciao");
									append($$anchor, text$2);
								},
								$$slots: { default: true }
							});
						},
						$$slots: { default: true }
					});
				});
				var node_2 = sibling(node_1, 2);
				component(node_2, () => Menu_item_text, ($$anchor, Menu_ItemText) => {
					Menu_ItemText($$anchor, {
						children: ($$anchor, $$slotProps) => {
							var fragment_3 = comment();
							var node_3 = first_child(fragment_3);
							snippet(node_3, () => $$props.children ?? noop);
							append($$anchor, fragment_3);
						},
						$$slots: { default: true }
					});
				});
				append($$anchor, fragment_1);
			},
			$$slots: { default: true }
		}));
	});
	append($$anchor, fragment);
}
//#endregion
//#region src/lib/components/menu/MenuCheckbox.svelte
var rest_excludes$1 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"children"
]);
var root$2 = from_html(`<!> <!>`, 1);
function MenuCheckbox($$anchor, $$props) {
	let rest = rest_props($$props, rest_excludes$1);
	var fragment = comment();
	var node = first_child(fragment);
	component(node, () => Menu_checkbox_item, ($$anchor, Menu_CheckboxItem) => {
		Menu_CheckboxItem($$anchor, spread_props(() => rest, {
			children: ($$anchor, $$slotProps) => {
				var fragment_1 = root$2();
				var node_1 = first_child(fragment_1);
				component(node_1, () => Menu_item_indicator, ($$anchor, Menu_ItemIndicator) => {
					Menu_ItemIndicator($$anchor, {
						children: ($$anchor, $$slotProps) => {
							CheckIcon($$anchor, {});
						},
						$$slots: { default: true }
					});
				});
				var node_2 = sibling(node_1, 2);
				component(node_2, () => Menu_item_text, ($$anchor, Menu_ItemText) => {
					Menu_ItemText($$anchor, {
						children: ($$anchor, $$slotProps) => {
							var fragment_3 = comment();
							var node_3 = first_child(fragment_3);
							snippet(node_3, () => $$props.children ?? noop);
							append($$anchor, fragment_3);
						},
						$$slots: { default: true }
					});
				});
				append($$anchor, fragment_1);
			},
			$$slots: { default: true }
		}));
	});
	append($$anchor, fragment);
}
//#endregion
//#region src/lib/components/menu/index.ts
var Menu = Object.assign(MenuRoot, {
	Item: Menu_item,
	Trigger: MenuTrigger,
	ContextTrigger: Menu_context_trigger,
	Content: MenuContent,
	TriggerItem: MenuTriggerItem,
	Separator: Menu_separator,
	ItemGroup: Menu_item_group,
	GroupLabel: MenuGroupLabel,
	RadioGroup: Menu_radio_item_group,
	RadioItem: MenuRadioItem,
	Checkbox: MenuCheckbox
});
//#endregion
//#region src/lib/components/switch/SwitchRoot.svelte
var rest_excludes = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"children"
]);
var root$1 = from_html(`<!> <!> <!>`, 1);
function SwitchRoot($$anchor, $$props) {
	let rest = rest_props($$props, rest_excludes);
	var fragment = comment();
	var node = first_child(fragment);
	component(node, () => Switch_root, ($$anchor, Switch_Root) => {
		Switch_Root($$anchor, spread_props({ class: "block w-8 p-0.5 rounded-full\r\n    bg-accent data-[state=unchecked]:opacity-50\r\n  " }, () => rest, {
			children: ($$anchor, $$slotProps) => {
				var fragment_1 = root$1();
				var node_1 = first_child(fragment_1);
				component(node_1, () => Switch_control, ($$anchor, Switch_Control) => {
					Switch_Control($$anchor, {
						class: "block",
						children: ($$anchor, $$slotProps) => {
							var fragment_2 = comment();
							var node_2 = first_child(fragment_2);
							component(node_2, () => Switch_thumb, ($$anchor, Switch_Thumb) => {
								Switch_Thumb($$anchor, { class: "block size-4 rounded-full\r\n      data-[state=checked]:translate-x-3 transition-transform\r\n      bg-page\r\n    " });
							});
							append($$anchor, fragment_2);
						},
						$$slots: { default: true }
					});
				});
				var node_3 = sibling(node_1, 2);
				component(node_3, () => Switch_label, ($$anchor, Switch_Label) => {
					Switch_Label($$anchor, {
						children: ($$anchor, $$slotProps) => {
							var fragment_3 = comment();
							var node_4 = first_child(fragment_3);
							snippet(node_4, () => $$props.children ?? noop);
							append($$anchor, fragment_3);
						},
						$$slots: { default: true }
					});
				});
				var node_5 = sibling(node_3, 2);
				component(node_5, () => Switch_hidden_input, ($$anchor, Switch_HiddenInput) => {
					Switch_HiddenInput($$anchor, {});
				});
				append($$anchor, fragment_1);
			},
			$$slots: { default: true }
		}));
	});
	append($$anchor, fragment);
}
//#endregion
//#region src/lib/components/switch/index.ts
var Switch = Object.assign(SwitchRoot, {});
//#endregion
//#region src/routes/style-test/+page.svelte
var root = from_html(`<!> <!> <!> <!>`, 1);
var root_1 = from_html(`<!> <!>`, 1);
var root_2 = from_html(`<!> <!> <!> <!> <!>`, 1);
var root_3 = from_html(`<!> <!> <!>`, 1);
var root_4 = from_html(`<!> <!> <!> <!> <!> <!>`, 1);
var root_5 = from_html(`<div><div class="w-full flex justify-center mt-2"><button class="rounded-lg bg-accent preset-accent preset-button p-2 text-2xl" title="">Cast lightning</button></div></div>  <div class="space-y-2"><!> <!> <div><!></div> <!> <div class="h-12 w-12 rounded-full bg-red-500 transition-all duration-200 hover:mix-blend-difference"></div></div>`, 1);
function _page($$anchor, $$props) {
	push($$props, false);
	overrideStyle("test-page", STYLE_PRESETS.weather);
	const manager = getStyleContext();
	function lightning() {
		const oldColor = manager.active.Page;
		const oldAccent = manager.active.Accent;
		manager.active.Page = opaqueColor("#fff");
		manager.active.Accent = staticAccent("#000");
		setTimeout(() => {
			manager.active.Page = oldColor;
			manager.active.Accent = oldAccent;
		}, 150);
	}
	init();
	MainLayout($$anchor, {
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = root_5();
			var div = first_child(fragment_1);
			var div_1 = child(div);
			var button = child(div_1);
			reset(div_1);
			reset(div);
			var div_2 = sibling(div, 2);
			var node = child(div_2);
			Menu(node, {
				onSelect: (id) => {
					console.log(id);
				},
				children: ($$anchor, $$slotProps) => {
					var fragment_2 = root_1();
					var node_1 = first_child(fragment_2);
					Menu.Trigger(node_1, {
						children: ($$anchor, $$slotProps) => {
							next();
							var text$1 = text("Click me");
							append($$anchor, text$1);
						},
						$$slots: { default: true }
					});
					var node_2 = sibling(node_1, 2);
					Menu.Content(node_2, {
						arrow: true,
						class: "preset-vars-accent-complementary",
						children: ($$anchor, $$slotProps) => {
							var fragment_3 = root_4();
							var node_3 = first_child(fragment_3);
							Menu.ItemGroup(node_3, {
								children: ($$anchor, $$slotProps) => {
									var fragment_4 = root();
									var node_4 = first_child(fragment_4);
									Menu.GroupLabel(node_4, {
										children: ($$anchor, $$slotProps) => {
											next();
											var text_1 = text("Caccamo");
											append($$anchor, text_1);
										},
										$$slots: { default: true }
									});
									var node_5 = sibling(node_4, 2);
									Menu.Item(node_5, {
										value: "caccamo-1",
										children: ($$anchor, $$slotProps) => {
											next();
											var text_2 = text("caccamo 1");
											append($$anchor, text_2);
										},
										$$slots: { default: true }
									});
									var node_6 = sibling(node_5, 2);
									Menu.Item(node_6, {
										value: "caccamo-2",
										children: ($$anchor, $$slotProps) => {
											next();
											var text_3 = text("opzione caccamo 22222222222222222222222");
											append($$anchor, text_3);
										},
										$$slots: { default: true }
									});
									var node_7 = sibling(node_6, 2);
									Menu.Item(node_7, {
										value: "caccamo-3",
										children: ($$anchor, $$slotProps) => {
											next();
											var text_4 = text("cacchina");
											append($$anchor, text_4);
										},
										$$slots: { default: true }
									});
									append($$anchor, fragment_4);
								},
								$$slots: { default: true }
							});
							var node_8 = sibling(node_3, 2);
							Menu.ItemGroup(node_8, {
								children: ($$anchor, $$slotProps) => {
									var fragment_5 = root_2();
									var node_9 = first_child(fragment_5);
									Menu.GroupLabel(node_9, {
										children: ($$anchor, $$slotProps) => {
											next();
											var text_5 = text("Normali");
											append($$anchor, text_5);
										},
										$$slots: { default: true }
									});
									var node_10 = sibling(node_9, 2);
									Menu.Item(node_10, {
										value: "test-value",
										children: ($$anchor, $$slotProps) => {
											next();
											var text_6 = text("TEST OPTION");
											append($$anchor, text_6);
										},
										$$slots: { default: true }
									});
									var node_11 = sibling(node_10, 2);
									Menu.Item(node_11, {
										value: "test-value2",
										children: ($$anchor, $$slotProps) => {
											next();
											var text_7 = text("TEST OPTION 2");
											append($$anchor, text_7);
										},
										$$slots: { default: true }
									});
									var node_12 = sibling(node_11, 2);
									Menu.Separator(node_12, {});
									Menu(sibling(node_12, 2), {
										children: ($$anchor, $$slotProps) => {
											var fragment_6 = root_1();
											var node_14 = first_child(fragment_6);
											Menu.TriggerItem(node_14, {
												children: ($$anchor, $$slotProps) => {
													next();
													var text_8 = text("ciaoooooo");
													append($$anchor, text_8);
												},
												$$slots: { default: true }
											});
											var node_15 = sibling(node_14, 2);
											Menu.Content(node_15, {
												children: ($$anchor, $$slotProps) => {
													var fragment_7 = root_1();
													var node_16 = first_child(fragment_7);
													Menu.Item(node_16, {
														value: "shtuchez",
														children: ($$anchor, $$slotProps) => {
															next();
															var text_9 = text("UELALAAAAAAAAA");
															append($$anchor, text_9);
														},
														$$slots: { default: true }
													});
													var node_17 = sibling(node_16, 2);
													Menu.Item(node_17, {
														value: "PIPI",
														children: ($$anchor, $$slotProps) => {
															next();
															var text_10 = text("MIMIMIMI");
															append($$anchor, text_10);
														},
														$$slots: { default: true }
													});
													append($$anchor, fragment_7);
												},
												$$slots: { default: true }
											});
											append($$anchor, fragment_6);
										},
										$$slots: { default: true }
									});
									append($$anchor, fragment_5);
								},
								$$slots: { default: true }
							});
							var node_18 = sibling(node_8, 2);
							Menu.RadioGroup(node_18, {
								children: ($$anchor, $$slotProps) => {
									var fragment_8 = root_3();
									var node_19 = first_child(fragment_8);
									Menu.GroupLabel(node_19, {
										children: ($$anchor, $$slotProps) => {
											next();
											var text_11 = text("radio schtuchez");
											append($$anchor, text_11);
										},
										$$slots: { default: true }
									});
									var node_20 = sibling(node_19, 2);
									Menu.RadioItem(node_20, {
										value: "1-for-sure",
										children: ($$anchor, $$slotProps) => {
											next();
											var text_12 = text("PISCIO");
											append($$anchor, text_12);
										},
										$$slots: { default: true }
									});
									var node_21 = sibling(node_20, 2);
									Menu.RadioItem(node_21, {
										value: "idk-2-i-think",
										children: ($$anchor, $$slotProps) => {
											next();
											var text_13 = text("weeee");
											append($$anchor, text_13);
										},
										$$slots: { default: true }
									});
									append($$anchor, fragment_8);
								},
								$$slots: { default: true }
							});
							var node_22 = sibling(node_18, 2);
							Menu.Separator(node_22, {});
							var node_23 = sibling(node_22, 2);
							Menu.Checkbox(node_23, {
								checked: false,
								value: "check-1",
								children: ($$anchor, $$slotProps) => {
									next();
									var text_14 = text("PISCIO");
									append($$anchor, text_14);
								},
								$$slots: { default: true }
							});
							var node_24 = sibling(node_23, 2);
							Menu.Checkbox(node_24, {
								checked: true,
								value: "check-2",
								children: ($$anchor, $$slotProps) => {
									next();
									var text_15 = text("weeee");
									append($$anchor, text_15);
								},
								$$slots: { default: true }
							});
							append($$anchor, fragment_3);
						},
						$$slots: { default: true }
					});
					append($$anchor, fragment_2);
				},
				$$slots: { default: true }
			});
			var node_25 = sibling(node, 2);
			ColorPicker(node_25, {
				children: ($$anchor, $$slotProps) => {
					var fragment_9 = root_1();
					var node_26 = first_child(fragment_9);
					ColorPicker.Trigger(node_26, {
						children: ($$anchor, $$slotProps) => {
							next();
							var text_16 = text("Accent Color");
							append($$anchor, text_16);
						},
						$$slots: { default: true }
					});
					var node_27 = sibling(node_26, 2);
					{
						let $0 = derived_safe_equal(() => [
							ACCENT,
							JENNI_ACCENT,
							BLUE_ACCENT
						]);
						ColorPicker.Content(node_27, { get swatches() {
							return get($0);
						} });
					}
					append($$anchor, fragment_9);
				},
				$$slots: { default: true }
			});
			var div_3 = sibling(node_25, 2);
			Switch(child(div_3), { checked: true });
			reset(div_3);
			Switch(sibling(div_3, 2), { checked: false });
			next(2);
			reset(div_2);
			delegated("click", button, lightning);
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
	pop();
}
delegate(["click"]);
//#endregion
export { _page as component };
