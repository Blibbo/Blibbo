import { C as if_block, D as append, G as child, K as first_child, O as comment, U as user_effect, b as snippet, ct as pop, d as attribute_effect, g as attach, gt as __exportAll, k as from_html, lt as push, mt as noop, o as rest_props, pt as reset } from "../chunks/D_ZKicVc.js";
import "../chunks/DhaYE-8x.js";
import { f as STYLE_PRESETS, i as setStyleContext, n as getStyleContext, t as StyleManager, y as STYLE_ROOT } from "../chunks/C8dnJ1Am.js";
//#region src/routes/+layout.ts
var _layout_exports = /* @__PURE__ */ __exportAll({ ssr: () => false });
//#endregion
//#region src/lib/style/Style.svelte
var rest_excludes = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"persistKey",
	"defaultStyle",
	"children"
]);
var root = from_html(`<div><!></div>`);
function Style($$anchor, $$props) {
	push($$props, true);
	const divProps = rest_props($$props, rest_excludes);
	const isRoot = (() => {
		try {
			getStyleContext();
			return false;
		} catch {
			return true;
		}
	})();
	function initialize(element) {
		const manager = new StyleManager({
			root: element,
			persistKey: $$props.persistKey,
			defaultStyle: $$props.defaultStyle
		});
		setStyleContext(manager);
		let computedOld = void 0;
		let variablesOld = void 0;
		user_effect(() => {
			manager.runEffects(computedOld, variablesOld);
			computedOld = { ...manager.computed };
			variablesOld = { ...manager.variables };
		});
	}
	if (isRoot) initialize(STYLE_ROOT);
	var fragment = comment();
	var node = first_child(fragment);
	var consequent = ($$anchor) => {
		var fragment_1 = comment();
		var node_1 = first_child(fragment_1);
		snippet(node_1, () => $$props.children);
		append($$anchor, fragment_1);
	};
	var alternate = ($$anchor) => {
		var div = root();
		attribute_effect(div, () => ({ ...divProps }));
		var node_2 = child(div);
		snippet(node_2, () => $$props.children);
		reset(div);
		attach(div, () => initialize);
		append($$anchor, div);
	};
	if_block(node, ($$render) => {
		if (isRoot) $$render(consequent);
		else $$render(alternate, -1);
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region src/routes/+layout.svelte
function _layout($$anchor, $$props) {
	push($$props, true);
	Style($$anchor, {
		persistKey: "main",
		get defaultStyle() {
			return STYLE_PRESETS.toggleable;
		},
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = comment();
			var node = first_child(fragment_1);
			snippet(node, () => $$props.children ?? noop);
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
	pop();
}
//#endregion
export { _layout as component, _layout_exports as universal };
