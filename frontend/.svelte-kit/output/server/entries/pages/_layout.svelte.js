import { a as attributes } from "../../chunks/index-server.js";
import { _ as STYLE_ROOT, d as STYLE_PRESETS, i as setStyleContext, n as getStyleContext, t as StyleManager } from "../../chunks/main.svelte.js";
//#region src/lib/style/Style.svelte
function Style($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { persistKey, defaultStyle, children, $$slots, $$events, ...divProps } = $$props;
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
				persistKey,
				defaultStyle
			});
			setStyleContext(manager);
		}
		if (isRoot) initialize(STYLE_ROOT);
		if (isRoot) {
			$$renderer.push("<!--[0-->");
			children($$renderer);
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div${attributes({ ...divProps })}>`);
			children($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { children } = $$props;
		Style($$renderer, {
			persistKey: "main",
			defaultStyle: STYLE_PRESETS.toggleable,
			children: ($$renderer) => {
				children?.($$renderer);
				$$renderer.push(`<!---->`);
			},
			$$slots: { default: true }
		});
	});
}
//#endregion
export { _layout as default };
