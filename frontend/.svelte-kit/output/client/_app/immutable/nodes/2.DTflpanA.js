import { D as append, K as first_child, M as text, O as comment, b as snippet, ft as next, mt as noop } from "../chunks/D_ZKicVc.js";
import "../chunks/DhaYE-8x.js";
import { t as MainLayout } from "../chunks/CkNmWS-7.js";
//#region src/routes/maths/+layout.svelte
function _layout($$anchor, $$props) {
	{
		const sidePanel = ($$anchor) => {
			next();
			var text$1 = text("ciao");
			append($$anchor, text$1);
		};
		MainLayout($$anchor, {
			sidePanel,
			children: ($$anchor, $$slotProps) => {
				var fragment_1 = comment();
				var node = first_child(fragment_1);
				snippet(node, () => $$props.children ?? noop);
				append($$anchor, fragment_1);
			},
			$$slots: {
				sidePanel: true,
				default: true
			}
		});
	}
}
//#endregion
export { _layout as component };
