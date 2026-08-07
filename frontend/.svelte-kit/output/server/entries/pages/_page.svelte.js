import { f as spread_props, l as ensure_array_like, x as escape_html } from "../../chunks/index-server.js";
import { n as Anchor, t as MainLayout } from "../../chunks/MainLayout.js";
//#region src/lib/components/Card.svelte
function Card($$renderer, $$props) {
	let { title = "", description = "", href = "#" } = $$props;
	Anchor($$renderer, {
		class: "\r\n    select-none\r\n\r\n    rounded-2xl p-4\r\n\r\n    preset-interactive-card\r\n  ",
		href,
		children: ($$renderer) => {
			$$renderer.push(`<h2 class="text-xl text-center my-4 font-semibold">${escape_html(title)}</h2> <p class="text-accent-readable-on-page text-center preset-theme-transition">${escape_html(description)}</p>`);
		},
		$$slots: { default: true }
	});
}
//#endregion
//#region src/routes/+page.svelte
function _page($$renderer) {
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
	MainLayout($$renderer, {
		hideHome: true,
		children: ($$renderer) => {
			$$renderer.push(`<div class="w-full flex justify-center my-4 md:my-10"><h1 class="font-[brush-script] text-9xl select-none">Blibbo</h1></div> <div class="w-full mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-4 md:space-x-4"><!--[-->`);
			const each_array = ensure_array_like(cards);
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let card = each_array[$$index];
				Card($$renderer, spread_props([card]));
			}
			$$renderer.push(`<!--]--></div>`);
		},
		$$slots: { default: true }
	});
}
//#endregion
export { _page as default };
