import "../../../chunks/index-server.js";
import { t as MainLayout } from "../../../chunks/MainLayout.js";
import { t as MathField } from "../../../chunks/MathField.js";
import "@cortex-js/compute-engine";
//#region src/routes/pairs/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let input = "\\left ( \\left ( a, b \\right ), c \\right )";
		let output = "";
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			MainLayout($$renderer, {
				children: ($$renderer) => {
					$$renderer.push(`<div class="flex flex-col *:my-3 text-3xl">`);
					MathField($$renderer, {
						placeholder: "Insert \\; pair",
						get value() {
							return input;
						},
						set value($$value) {
							input = $$value;
							$$settled = false;
						}
					});
					$$renderer.push(`<!----> `);
					MathField($$renderer, {
						readOnly: true,
						get value() {
							return output;
						},
						set value($$value) {
							output = $$value;
							$$settled = false;
						}
					});
					$$renderer.push(`<!----></div>`);
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
export { _page as default };
