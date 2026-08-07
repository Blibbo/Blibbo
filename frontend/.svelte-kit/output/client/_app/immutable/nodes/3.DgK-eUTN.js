import { D as append, G as child, H as template_effect, K as first_child, R as get, S as index, T as set_text, a as prop, k as from_html, pt as reset, q as sibling, s as spread_props, x as each } from "../chunks/D_ZKicVc.js";
import "../chunks/DhaYE-8x.js";
import { n as Anchor, t as MainLayout } from "../chunks/CkNmWS-7.js";
//#region src/lib/components/Card.svelte
var root$1 = from_html(`<h2 class="text-xl text-center my-4 font-semibold"> </h2> <p class="text-accent-readable-on-page text-center preset-theme-transition"> </p>`, 1);
function Card($$anchor, $$props) {
	let title = prop($$props, "title", 3, ""), description = prop($$props, "description", 3, ""), href = prop($$props, "href", 3, "#");
	Anchor($$anchor, {
		class: "\r\n    select-none\r\n\r\n    rounded-2xl p-4\r\n\r\n    preset-interactive-card\r\n  ",
		get href() {
			return href();
		},
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = root$1();
			var h2 = first_child(fragment_1);
			var text = child(h2, true);
			reset(h2);
			var p = sibling(h2, 2);
			var text_1 = child(p, true);
			reset(p);
			template_effect(() => {
				set_text(text, title());
				set_text(text_1, description());
			});
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
}
//#endregion
//#region src/routes/+page.svelte
var root = from_html(`<div class="w-full flex justify-center my-4 md:my-10"><h1 class="font-[brush-script] text-9xl select-none">Blibbo</h1></div> <div class="w-full mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-4 md:space-x-4"></div>`, 1);
function _page($$anchor) {
	const cards = [
		{
			title: "Math",
			description: "The legendary math program",
			href: "/maths"
		},
		{
			title: "Path of exile puzzle study",
			description: "I couldn't open that one door",
			href: "/exile-puzzle"
		},
		{
			title: "Nested ordered pairs solver",
			description: "Proof of concept of the math substitution program",
			href: "/pairs"
		},
		{
			title: "Style test",
			description: "Become a meteorologist",
			href: "/style-test"
		}
	];
	MainLayout($$anchor, {
		hideHome: true,
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = root();
			var div = sibling(first_child(fragment_1), 2);
			each(div, 5, () => cards, index, ($$anchor, card) => {
				Card($$anchor, spread_props(() => get(card)));
			});
			reset(div);
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
}
//#endregion
export { _page as component };
