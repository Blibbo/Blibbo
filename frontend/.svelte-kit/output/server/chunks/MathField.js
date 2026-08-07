import { a as attributes, i as attr_class, o as bind_props, p as stringify, y as attr } from "./index-server.js";
import "./events.js";
import { a as IS_ANDROID_APP } from "./main.svelte.js";
import { n as Hamburger_md } from "./cog.js";
import { MathfieldElement } from "mathlive";
//#region ~icons/mage/keyboard.svelte
function Keyboard($$renderer, $$props) {
	const { $$slots, $$events, ...p } = $$props;
	$$renderer.push(`<svg${attributes({
		viewBox: "0 0 24 24",
		width: "1.2em",
		height: "1.2em",
		...p
	}, void 0, void 0, void 0, 3)}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.981 6.583H4.02c-.701 0-1.269.647-1.269 1.444v7.946c0 .797.568 1.444 1.269 1.444h15.96c.701 0 1.269-.647 1.269-1.444V8.027c0-.797-.568-1.444-1.269-1.444M9.357 13.806h5.286m2.748 0h1.058m-11.84 0H5.55m.001-3.612H6.61m2.885 0h1.057m2.896 0h1.057m2.886 0h1.058"></path></svg>`);
}
//#endregion
//#region src/lib/components/mathlive/mathfield.ts
MathfieldElement.fontsDirectory = "/fonts/mathlive";
MathfieldElement.soundsDirectory = null;
//#endregion
//#region src/lib/components/mathlive/MathField.svelte
function MathField($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { value = void 0, hideButtonsOnBlur = false, noButtons = false, readOnly = false, placeholder = "", noRing = false, onfocus, onblur, $$slots, $$events, ...rest } = $$props;
		function focus() {}
		$$renderer.push(`<div${attributes({
			...rest,
			class: ` flex justify-between items-center rounded-sm ${stringify(rest.class ?? "")}  `
		})}>`);
		if (IS_ANDROID_APP) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div tabindex="-1" inputmode="none" class="fixed opacity-0"></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <math-field class="flex-1 w-0 svelte-8686or"${attr("readonly", readOnly, true)}${attr("placeholder", placeholder)}${attr("tabindex", readOnly ? -1 : void 0)}></math-field> `);
		if (!noButtons) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div${attr_class(` flex items-center justify-center flex-col text-accent-readable-on-page sm:flex-row *:sm:p-1 sm:mr-1 *:rounded-sm ${hideButtonsOnBlur ? "opacity-0 pointer-events-none w-0" : ""} `)}>`);
			if (!readOnly) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<button${attr_class(`preset-interactive-accent cursor-pointer `)}${attr("tabindex", hideButtonsOnBlur ? -1 : void 0)}>`);
				Keyboard($$renderer, {});
				$$renderer.push(`<!----></button>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> <button${attr_class(`preset-interactive-accent cursor-pointer `)}${attr("tabindex", hideButtonsOnBlur ? -1 : void 0)}>`);
			Hamburger_md($$renderer, {});
			$$renderer.push(`<!----></button></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div>`);
		bind_props($$props, {
			value,
			focus
		});
	});
}
//#endregion
export { MathField as t };
