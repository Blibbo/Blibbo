import { a as attributes, at as to_array, f as spread_props, i as attr_class, o as bind_props, p as stringify, s as derived, u as props_id } from "../../../chunks/index-server.js";
import { d as STYLE_PRESETS, l as JENNI_ACCENT, n as getStyleContext, o as ACCENT, r as overrideStyle, s as BLUE_ACCENT } from "../../../chunks/main.svelte.js";
import { _ as createSplitProps, a as Portal, c as usePresenceContext, d as useLocaleContext, f as useEnvironmentContext, g as normalizeProps, h as mergeProps, i as CheckIcon, l as usePresence, m as useMachine, o as useFieldContext, p as Factory, r as ColorPicker, s as PresenceProvider, t as MainLayout, u as splitPresenceProps, v as createContext } from "../../../chunks/MainLayout.js";
import { runIfFn } from "@zag-js/utils";
import * as menu from "@zag-js/menu";
import * as zagSwitch from "@zag-js/switch";
//#region node_modules/@ark-ui/svelte/dist/components/menu/use-menu-context.js
var [MenuProvider, useMenuContext] = createContext({
	name: "MenuContext",
	hookName: "useMenuContext",
	providerName: "<MenuProvider />",
	strict: false
});
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-arrow-tip.svelte
function Menu_arrow_tip($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const menu = useMenuContext();
		const mergedProps = derived(() => mergeProps(menu().getArrowTipProps(), props));
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
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-arrow.svelte
function Menu_arrow($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const menu = useMenuContext();
		const mergedProps = derived(() => mergeProps(menu().getArrowProps(), props));
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
function Menu_checkbox_item($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, checked = void 0, $$slots, $$events, ...props } = $$props;
		const $$d = derived(() => createSplitProps()(props, [
			"checked",
			"closeOnSelect",
			"disabled",
			"onCheckedChange",
			"value",
			"valueText"
		])), $$derived_array = derived(() => to_array($$d(), 2)), partialOptionItemProps = derived(() => $$derived_array()[0]), localProps = derived(() => $$derived_array()[1]);
		const optionItemProps = derived(() => ({
			...partialOptionItemProps(),
			type: "checkbox",
			checked,
			onCheckedChange(nextChecked) {
				if (checked !== void 0) checked = nextChecked;
				partialOptionItemProps().onCheckedChange?.(nextChecked);
			}
		}));
		const menu = useMenuContext();
		const mergedProps = derived(() => mergeProps(menu().getOptionItemProps(optionItemProps()), localProps()));
		const optionItemState = derived(() => menu().getOptionItemState(optionItemProps()));
		MenuItemPropsProvider(() => optionItemProps());
		MenuItemProvider(() => optionItemState());
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
			checked
		});
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-content.svelte
function Menu_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const menu = useMenuContext();
		const presence = usePresenceContext();
		const mergedProps = derived(() => mergeProps(menu().getContentProps(), presence().getPresenceProps(), props));
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
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-context-trigger.svelte
function Menu_context_trigger($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const menu = useMenuContext();
		const mergedProps = derived(() => mergeProps(menu().getContextTriggerProps(), props));
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
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-context.svelte
function Menu_context($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { render } = $$props;
		render($$renderer, useMenuContext());
		$$renderer.push(`<!---->`);
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-indicator.svelte
function Menu_indicator($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const menu = useMenuContext();
		const mergedProps = derived(() => mergeProps(menu().getIndicatorProps(), props));
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
//#region node_modules/@ark-ui/svelte/dist/components/menu/use-menu-item-group-context.js
var [MenuItemGroupProvider, useMenuItemGroupContext] = createContext({
	name: "MenuItemGroupContext",
	hookName: "useMenuItemGroupContext",
	providerName: "<MenuItemGroupProvider />"
});
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-item-group-label.svelte
function Menu_item_group_label($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const menu = useMenuContext();
		const itemGroup = useMenuItemGroupContext();
		const mergedProps = derived(() => mergeProps(menu().getItemGroupLabelProps({ htmlFor: itemGroup().id }), props));
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
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-item-group.svelte
function Menu_item_group($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const id = props_id($$renderer);
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const menu = useMenuContext();
		const itemGroupProps = derived(() => ({
			id,
			...props
		}));
		const mergedProps = derived(() => mergeProps(menu().getItemGroupProps(itemGroupProps()), props));
		MenuItemGroupProvider(() => itemGroupProps());
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
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-item-indicator.svelte
function Menu_item_indicator($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const menu = useMenuContext();
		const itemProps = useMenuItemPropsContext();
		const mergedProps = derived(() => mergeProps(menu().getItemIndicatorProps(itemProps()), props));
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
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-item-text.svelte
function Menu_item_text($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const menu = useMenuContext();
		const itemProps = useMenuItemPropsContext();
		const mergedProps = derived(() => mergeProps(menu().getItemTextProps(itemProps()), props));
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
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-item.svelte
function Menu_item($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const $$d = derived(() => createSplitProps()(props, [
			"closeOnSelect",
			"disabled",
			"value",
			"valueText",
			"onSelect"
		])), $$derived_array = derived(() => to_array($$d(), 2)), itemProps = derived(() => $$derived_array()[0]), localProps = derived(() => $$derived_array()[1]);
		const menu = useMenuContext();
		const mergedProps = derived(() => mergeProps(menu().getItemProps(itemProps()), localProps()));
		const itemState = derived(() => menu().getItemState(itemProps()));
		MenuItemPropsProvider(() => itemProps());
		MenuItemProvider(() => itemState());
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
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-positioner.svelte
function Menu_positioner($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const menu = useMenuContext();
		const presence = usePresenceContext();
		const mergedProps = derived(() => mergeProps(menu().getPositionerProps(), props));
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
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-radio-item-group.svelte
function Menu_radio_item_group($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const id = props_id($$renderer);
		let { ref = null, value = void 0, $$slots, $$events, ...props } = $$props;
		const $$d = derived(() => createSplitProps()(props, [
			"id",
			"onValueChange",
			"value"
		])), $$derived_array = derived(() => to_array($$d(), 2)), optionalItemGroupProps = derived(() => $$derived_array()[0]), localProps = derived(() => $$derived_array()[1]);
		const menu = useMenuContext();
		const itemGroupProps = derived(() => ({
			id: optionalItemGroupProps().id ?? id,
			value,
			onValueChange(e) {
				value = e.value;
				optionalItemGroupProps()?.onValueChange?.(e);
			}
		}));
		const mergedProps = derived(() => mergeProps(menu().getItemGroupProps({ id: itemGroupProps().id }), localProps()));
		MenuItemGroupProvider(() => itemGroupProps());
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
			value
		});
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-radio-item.svelte
function Menu_radio_item($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const $$d = derived(() => createSplitProps()(props, [
			"closeOnSelect",
			"disabled",
			"value",
			"valueText"
		])), $$derived_array = derived(() => to_array($$d(), 2)), partialItemProps = derived(() => $$derived_array()[0]), localProps = derived(() => $$derived_array()[1]);
		const menu = useMenuContext();
		const itemGroup = useMenuItemGroupContext();
		const optionItemProps = derived(() => ({
			...partialItemProps(),
			checked: itemGroup().value === partialItemProps().value,
			type: "radio",
			onCheckedChange: () => itemGroup().onValueChange?.({ value: partialItemProps().value })
		}));
		const mergedProps = derived(() => mergeProps(menu().getOptionItemProps(optionItemProps()), localProps()));
		const optionItemState = derived(() => menu().getOptionItemState(optionItemProps()));
		MenuItemPropsProvider(() => optionItemProps());
		MenuItemProvider(() => optionItemState());
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
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/menu/use-menu.svelte.js
var useMenu = (props) => {
	const env = useEnvironmentContext();
	const locale = useLocaleContext();
	const machineProps = derived(() => {
		const resolvedProps = runIfFn(props);
		return {
			dir: locale().dir,
			getRootNode: env().getRootNode,
			...resolvedProps
		};
	});
	const service = useMachine(menu.machine, () => machineProps());
	const api = derived(() => menu.connect(service, normalizeProps));
	return () => ({
		api: api(),
		service
	});
};
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-root.svelte
function Menu_root($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const providedId = props_id($$renderer);
		let { open = void 0, $$slots, $$events, ...props } = $$props;
		const $$d = derived(() => splitPresenceProps(props)), $$derived_array = derived(() => to_array($$d(), 2)), presenceProps = derived(() => $$derived_array()[0]), menuProps = derived(() => $$derived_array()[1]);
		const $$d_1 = derived(() => createSplitProps()(menuProps(), [
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
		])), $$derived_array_1 = derived(() => to_array($$d_1(), 2)), useMenuProps = derived(() => $$derived_array_1()[0]), localProps = derived(() => $$derived_array_1()[1]);
		const parentApi = useMenuContext();
		useMenuMachineContext();
		const resolvedProps = derived(() => ({
			...useMenuProps(),
			id: useMenuProps().id ?? providedId,
			open,
			onOpenChange(details) {
				useMenuProps().onOpenChange?.(details);
				if (open !== void 0) open = details.open;
			}
		}));
		const menu = useMenu(() => resolvedProps());
		const api = derived(() => menu().api);
		const service = derived(() => menu().service);
		const presence = usePresence(() => ({
			present: api().open,
			...presenceProps()
		}));
		const triggerItemContext = derived(() => parentApi?.().getTriggerItemProps(api()));
		MenuTriggerItemProvider(() => triggerItemContext());
		MenuMachineProvider(() => service());
		MenuProvider(() => api());
		PresenceProvider(presence);
		localProps().children?.($$renderer);
		$$renderer.push(`<!---->`);
		bind_props($$props, { open });
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-separator.svelte
function Menu_separator($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const menu = useMenuContext();
		const mergedProps = derived(() => mergeProps(menu().getSeparatorProps(), props));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Factory($$renderer, spread_props([
				{
					as: "div",
					"data-scope": "menu",
					"data-part": "separator"
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
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-trigger-item.svelte
function Menu_trigger_item($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const getTriggerItemProps = useMenuTriggerItemContext();
		const mergedProps = derived(() => mergeProps(getTriggerItemProps?.() ?? {}, props));
		MenuItemPropsProvider(() => ({ value: mergedProps()["data-value"] }));
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
//#region node_modules/@ark-ui/svelte/dist/components/menu/menu-trigger.svelte
function Menu_trigger($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const $$d = derived(() => createSplitProps()(props, ["value"])), $$derived_array = derived(() => to_array($$d(), 2)), triggerProps = derived(() => $$derived_array()[0]), localProps = derived(() => $$derived_array()[1]);
		const menu = useMenuContext();
		const triggerItemProps = useMenuTriggerItemContext();
		const mergedProps = derived(() => mergeProps(menu().getTriggerProps(triggerProps()), triggerItemProps?.() || {}, localProps()));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Factory($$renderer, spread_props([
				{
					as: "button",
					"data-scope": "menu",
					"data-part": "trigger"
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
//#region node_modules/@ark-ui/svelte/dist/components/switch/use-switch-context.js
var [SwitchProvider, useSwitchContext] = createContext({
	name: "SwitchContext",
	hookName: "useSwitchContext",
	providerName: "<SwitchProvider />"
});
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/switch/switch-control.svelte
function Switch_control($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const switchMachine = useSwitchContext();
		const mergedProps = derived(() => mergeProps(switchMachine().getControlProps(), props));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Factory($$renderer, spread_props([
				{ as: "span" },
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
//#region node_modules/@ark-ui/svelte/dist/components/switch/switch-hidden-input.svelte
function Switch_hidden_input($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const switchMachine = useSwitchContext();
		const mergedProps = derived(() => mergeProps(switchMachine().getHiddenInputProps(), props));
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
//#region node_modules/@ark-ui/svelte/dist/components/switch/switch-label.svelte
function Switch_label($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const switchMachine = useSwitchContext();
		const mergedProps = derived(() => mergeProps(switchMachine().getLabelProps(), props));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Factory($$renderer, spread_props([
				{ as: "span" },
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
//#region node_modules/@ark-ui/svelte/dist/components/switch/use-switch.svelte.js
var useSwitch = (props) => {
	const env = useEnvironmentContext();
	const locale = useLocaleContext();
	const field = useFieldContext();
	const machineProps = derived(() => {
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
	const service = useMachine(zagSwitch.machine, () => machineProps());
	const api = derived(() => zagSwitch.connect(service, normalizeProps));
	return () => api();
};
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/switch/switch-root.svelte
function Switch_root($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const providedId = props_id($$renderer);
		let { ref = null, checked = void 0, $$slots, $$events, ...props } = $$props;
		const $$d = derived(() => createSplitProps()(props, [
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
		])), $$derived_array = derived(() => to_array($$d(), 2)), useSwitchProps = derived(() => $$derived_array()[0]), localProps = derived(() => $$derived_array()[1]);
		const resolvedProps = derived(() => ({
			...useSwitchProps(),
			id: useSwitchProps().id ?? providedId,
			checked,
			onCheckedChange(details) {
				useSwitchProps().onCheckedChange?.(details);
				if (checked !== void 0) checked = details.checked;
			}
		}));
		const switchMachine = useSwitch(() => resolvedProps());
		const mergedProps = derived(() => mergeProps(switchMachine().getRootProps(), localProps()));
		SwitchProvider(switchMachine);
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
		bind_props($$props, {
			ref,
			checked
		});
	});
}
//#endregion
//#region node_modules/@ark-ui/svelte/dist/components/switch/switch-thumb.svelte
function Switch_thumb($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...props } = $$props;
		const switchMachine = useSwitchContext();
		const mergedProps = derived(() => mergeProps(switchMachine().getThumbProps(), props));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Factory($$renderer, spread_props([
				{ as: "span" },
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
//#region src/lib/components/menu/MenuRoot.svelte
function MenuRoot($$renderer, $$props) {
	let { children, loopFocus = true, closeOnSelect = false, $$slots, $$events, ...rest } = $$props;
	if (Menu_root) {
		$$renderer.push("<!--[-->");
		Menu_root($$renderer, spread_props([
			{
				loopFocus,
				closeOnSelect
			},
			rest,
			{
				children: ($$renderer) => {
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
}
//#endregion
//#region ~icons/majesticons/chevron-down.svelte
function Chevron_down($$renderer, $$props) {
	const { $$slots, $$events, ...p } = $$props;
	$$renderer.push(`<svg${attributes({
		viewBox: "0 0 24 24",
		width: "1.2em",
		height: "1.2em",
		...p
	}, void 0, void 0, void 0, 3)}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 10l-5 5l-5-5"></path></svg>`);
}
//#endregion
//#region src/lib/components/menu/MenuTrigger.svelte
function MenuTrigger($$renderer, $$props) {
	let { children, noChevron, $$slots, $$events, ...rest } = $$props;
	if (Menu_trigger) {
		$$renderer.push("<!--[-->");
		Menu_trigger($$renderer, spread_props([rest, {
			children: ($$renderer) => {
				children?.($$renderer);
				$$renderer.push(`<!----> `);
				if (!noChevron) {
					$$renderer.push("<!--[0-->");
					if (Menu_indicator) {
						$$renderer.push("<!--[-->");
						Menu_indicator($$renderer, {
							children: ($$renderer) => {
								Chevron_down($$renderer, {});
							},
							$$slots: { default: true }
						});
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
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
}
//#endregion
//#region src/lib/components/menu/MenuContent.svelte
function MenuContent($$renderer, $$props) {
	let { children, arrow, $$slots, $$events, ...rest } = $$props;
	Portal($$renderer, {
		children: ($$renderer) => {
			if (Menu_positioner) {
				$$renderer.push("<!--[-->");
				Menu_positioner($$renderer, {
					children: ($$renderer) => {
						if (Menu_content) {
							$$renderer.push("<!--[-->");
							Menu_content($$renderer, spread_props([rest, {
								children: ($$renderer) => {
									if (arrow) {
										$$renderer.push("<!--[0-->");
										if (Menu_arrow) {
											$$renderer.push("<!--[-->");
											Menu_arrow($$renderer, {
												children: ($$renderer) => {
													if (Menu_arrow_tip) {
														$$renderer.push("<!--[-->");
														Menu_arrow_tip($$renderer, {});
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
									} else $$renderer.push("<!--[-1-->");
									$$renderer.push(`<!--]--> `);
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
//#region ~icons/majesticons/chevron-right.svelte
function Chevron_right($$renderer, $$props) {
	const { $$slots, $$events, ...p } = $$props;
	$$renderer.push(`<svg${attributes({
		viewBox: "0 0 24 24",
		width: "1.2em",
		height: "1.2em",
		...p
	}, void 0, void 0, void 0, 3)}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 7l5 5l-5 5"></path></svg>`);
}
//#endregion
//#region src/lib/components/menu/MenuTriggerItem.svelte
function MenuTriggerItem($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { children, $$slots, $$events, ...rest } = $$props;
		if (Menu_trigger_item) {
			$$renderer.push("<!--[-->");
			Menu_trigger_item($$renderer, spread_props([rest, {
				children: ($$renderer) => {
					children?.($$renderer);
					$$renderer.push(`<!----> `);
					{
						function render($$renderer, api) {
							Chevron_right($$renderer, { class: `submenu-icon ${api().open ? "submenu-icon-active" : ""}` });
						}
						if (Menu_context) {
							$$renderer.push("<!--[-->");
							Menu_context($$renderer, {
								render,
								$$slots: { render: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
					}
				},
				$$slots: { default: true }
			}]));
			$$renderer.push("<!--]-->");
		} else {
			$$renderer.push("<!--[!-->");
			$$renderer.push("<!--]-->");
		}
	});
}
//#endregion
//#region src/lib/components/menu/MenuGroupLabel.svelte
function MenuGroupLabel($$renderer, $$props) {
	let { children, class: labelClasses, $$slots, $$events, ...rest } = $$props;
	$$renderer.push(`<div${attr_class(`label-container ${stringify(labelClasses ?? "")}`)}>`);
	if (Menu_item_group_label) {
		$$renderer.push("<!--[-->");
		Menu_item_group_label($$renderer, spread_props([rest, {
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
	$$renderer.push(`</div>`);
}
//#endregion
//#region src/lib/components/menu/MenuRadioItem.svelte
function MenuRadioItem($$renderer, $$props) {
	let { children, $$slots, $$events, ...rest } = $$props;
	if (Menu_radio_item) {
		$$renderer.push("<!--[-->");
		Menu_radio_item($$renderer, spread_props([rest, {
			children: ($$renderer) => {
				if (Menu_item_indicator) {
					$$renderer.push("<!--[-->");
					Menu_item_indicator($$renderer, {
						children: ($$renderer) => {
							CheckIcon($$renderer, {
								children: ($$renderer) => {
									$$renderer.push(`<!---->ciao`);
								},
								$$slots: { default: true }
							});
						},
						$$slots: { default: true }
					});
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
				$$renderer.push(` `);
				if (Menu_item_text) {
					$$renderer.push("<!--[-->");
					Menu_item_text($$renderer, {
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
//#region src/lib/components/menu/MenuCheckbox.svelte
function MenuCheckbox($$renderer, $$props) {
	let { children, $$slots, $$events, ...rest } = $$props;
	if (Menu_checkbox_item) {
		$$renderer.push("<!--[-->");
		Menu_checkbox_item($$renderer, spread_props([rest, {
			children: ($$renderer) => {
				if (Menu_item_indicator) {
					$$renderer.push("<!--[-->");
					Menu_item_indicator($$renderer, {
						children: ($$renderer) => {
							CheckIcon($$renderer, {});
						},
						$$slots: { default: true }
					});
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
				$$renderer.push(` `);
				if (Menu_item_text) {
					$$renderer.push("<!--[-->");
					Menu_item_text($$renderer, {
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
function SwitchRoot($$renderer, $$props) {
	let { children, $$slots, $$events, ...rest } = $$props;
	if (Switch_root) {
		$$renderer.push("<!--[-->");
		Switch_root($$renderer, spread_props([
			{ class: "block w-8 p-0.5 rounded-full\r\n    bg-accent data-[state=unchecked]:opacity-50\r\n  " },
			rest,
			{
				children: ($$renderer) => {
					if (Switch_control) {
						$$renderer.push("<!--[-->");
						Switch_control($$renderer, {
							class: "block",
							children: ($$renderer) => {
								if (Switch_thumb) {
									$$renderer.push("<!--[-->");
									Switch_thumb($$renderer, { class: "block size-4 rounded-full\r\n      data-[state=checked]:translate-x-3 transition-transform\r\n      bg-page\r\n    " });
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
					if (Switch_label) {
						$$renderer.push("<!--[-->");
						Switch_label($$renderer, {
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
					if (Switch_hidden_input) {
						$$renderer.push("<!--[-->");
						Switch_hidden_input($$renderer, {});
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
				},
				$$slots: { default: true }
			}
		]));
		$$renderer.push("<!--]-->");
	} else {
		$$renderer.push("<!--[!-->");
		$$renderer.push("<!--]-->");
	}
}
//#endregion
//#region src/lib/components/switch/index.ts
var Switch = Object.assign(SwitchRoot, {});
//#endregion
//#region src/routes/style-test/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		overrideStyle("test-page", STYLE_PRESETS.weather);
		getStyleContext();
		MainLayout($$renderer, {
			children: ($$renderer) => {
				$$renderer.push(`<div><div class="w-full flex justify-center mt-2"><button class="rounded-lg bg-accent preset-accent preset-button p-2 text-2xl" title="">Cast lightning</button></div></div>  <div class="space-y-2">`);
				Menu($$renderer, {
					onSelect: (id) => {
						console.log(id);
					},
					children: ($$renderer) => {
						Menu.Trigger($$renderer, {
							children: ($$renderer) => {
								$$renderer.push(`<!---->Click me`);
							},
							$$slots: { default: true }
						});
						$$renderer.push(`<!----> `);
						Menu.Content($$renderer, {
							arrow: true,
							class: "preset-vars-accent-complementary",
							children: ($$renderer) => {
								Menu.ItemGroup($$renderer, {
									children: ($$renderer) => {
										Menu.GroupLabel($$renderer, {
											children: ($$renderer) => {
												$$renderer.push(`<!---->Caccamo`);
											},
											$$slots: { default: true }
										});
										$$renderer.push(`<!----> `);
										Menu.Item($$renderer, {
											value: "caccamo-1",
											children: ($$renderer) => {
												$$renderer.push(`<!---->caccamo 1`);
											},
											$$slots: { default: true }
										});
										$$renderer.push(`<!----> `);
										Menu.Item($$renderer, {
											value: "caccamo-2",
											children: ($$renderer) => {
												$$renderer.push(`<!---->opzione caccamo 22222222222222222222222`);
											},
											$$slots: { default: true }
										});
										$$renderer.push(`<!----> `);
										Menu.Item($$renderer, {
											value: "caccamo-3",
											children: ($$renderer) => {
												$$renderer.push(`<!---->cacchina`);
											},
											$$slots: { default: true }
										});
										$$renderer.push(`<!---->`);
									},
									$$slots: { default: true }
								});
								$$renderer.push(`<!----> `);
								Menu.ItemGroup($$renderer, {
									children: ($$renderer) => {
										Menu.GroupLabel($$renderer, {
											children: ($$renderer) => {
												$$renderer.push(`<!---->Normali`);
											},
											$$slots: { default: true }
										});
										$$renderer.push(`<!----> `);
										Menu.Item($$renderer, {
											value: "test-value",
											children: ($$renderer) => {
												$$renderer.push(`<!---->TEST OPTION`);
											},
											$$slots: { default: true }
										});
										$$renderer.push(`<!----> `);
										Menu.Item($$renderer, {
											value: "test-value2",
											children: ($$renderer) => {
												$$renderer.push(`<!---->TEST OPTION 2`);
											},
											$$slots: { default: true }
										});
										$$renderer.push(`<!----> `);
										Menu.Separator($$renderer, {});
										$$renderer.push(`<!----> `);
										Menu($$renderer, {
											children: ($$renderer) => {
												Menu.TriggerItem($$renderer, {
													children: ($$renderer) => {
														$$renderer.push(`<!---->ciaoooooo`);
													},
													$$slots: { default: true }
												});
												$$renderer.push(`<!----> `);
												Menu.Content($$renderer, {
													children: ($$renderer) => {
														Menu.Item($$renderer, {
															value: "shtuchez",
															children: ($$renderer) => {
																$$renderer.push(`<!---->UELALAAAAAAAAA`);
															},
															$$slots: { default: true }
														});
														$$renderer.push(`<!----> `);
														Menu.Item($$renderer, {
															value: "PIPI",
															children: ($$renderer) => {
																$$renderer.push(`<!---->MIMIMIMI`);
															},
															$$slots: { default: true }
														});
														$$renderer.push(`<!---->`);
													},
													$$slots: { default: true }
												});
												$$renderer.push(`<!---->`);
											},
											$$slots: { default: true }
										});
										$$renderer.push(`<!---->`);
									},
									$$slots: { default: true }
								});
								$$renderer.push(`<!----> `);
								Menu.RadioGroup($$renderer, {
									children: ($$renderer) => {
										Menu.GroupLabel($$renderer, {
											children: ($$renderer) => {
												$$renderer.push(`<!---->radio schtuchez`);
											},
											$$slots: { default: true }
										});
										$$renderer.push(`<!----> `);
										Menu.RadioItem($$renderer, {
											value: "1-for-sure",
											children: ($$renderer) => {
												$$renderer.push(`<!---->PISCIO`);
											},
											$$slots: { default: true }
										});
										$$renderer.push(`<!----> `);
										Menu.RadioItem($$renderer, {
											value: "idk-2-i-think",
											children: ($$renderer) => {
												$$renderer.push(`<!---->weeee`);
											},
											$$slots: { default: true }
										});
										$$renderer.push(`<!---->`);
									},
									$$slots: { default: true }
								});
								$$renderer.push(`<!----> `);
								Menu.Separator($$renderer, {});
								$$renderer.push(`<!----> `);
								Menu.Checkbox($$renderer, {
									checked: false,
									value: "check-1",
									children: ($$renderer) => {
										$$renderer.push(`<!---->PISCIO`);
									},
									$$slots: { default: true }
								});
								$$renderer.push(`<!----> `);
								Menu.Checkbox($$renderer, {
									checked: true,
									value: "check-2",
									children: ($$renderer) => {
										$$renderer.push(`<!---->weeee`);
									},
									$$slots: { default: true }
								});
								$$renderer.push(`<!---->`);
							},
							$$slots: { default: true }
						});
						$$renderer.push(`<!---->`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----> `);
				ColorPicker($$renderer, {
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
							BLUE_ACCENT
						] });
						$$renderer.push(`<!---->`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----> <div>`);
				Switch($$renderer, { checked: true });
				$$renderer.push(`<!----></div> `);
				Switch($$renderer, { checked: false });
				$$renderer.push(`<!----> <div class="h-12 w-12 rounded-full bg-red-500 transition-all duration-200 hover:mix-blend-difference"></div></div>`);
			},
			$$slots: { default: true }
		});
	});
}
//#endregion
export { _page as default };
