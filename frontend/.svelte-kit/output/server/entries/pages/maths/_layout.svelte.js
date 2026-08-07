import "../../../chunks/index-server.js";
import { t as MainLayout } from "../../../chunks/MainLayout.js";
//#region src/routes/maths/+layout.svelte
function _layout($$renderer, $$props) {
	let { children } = $$props;
	{
		function sidePanel($$renderer) {
			$$renderer.push(`<!---->ciao`);
		}
		MainLayout($$renderer, {
			sidePanel,
			children: ($$renderer) => {
				children?.($$renderer);
				$$renderer.push(`<!---->`);
			},
			$$slots: {
				sidePanel: true,
				default: true
			}
		});
	}
}
//#endregion
export { _layout as default };
