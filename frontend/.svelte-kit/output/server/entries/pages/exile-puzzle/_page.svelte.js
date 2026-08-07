import { b as clsx, i as attr_class, l as ensure_array_like } from "../../../chunks/index-server.js";
import { t as MainLayout } from "../../../chunks/MainLayout.js";
//#region src/routes/exile-puzzle/+page.svelte
function _page($$renderer) {
	const getSequenceFromIndex = [
		1,
		2,
		3,
		8,
		0,
		4,
		7,
		6,
		5
	];
	const squareCount = 9;
	let getIndexFromSequence = Array(squareCount);
	let squares = [];
	for (let i = 0; i < squareCount; i++) {
		squares.push({
			"sequence": getSequenceFromIndex[i],
			"active": false
		});
		getIndexFromSequence[getSequenceFromIndex[i]] = i;
	}
	const classDisabled = "transition-colors duration-1000 bg-on-page";
	const classEnabled = "transition-colors duration-1000 bg-accent-unlike-page";
	MainLayout($$renderer, {
		children: ($$renderer) => {
			$$renderer.push(`<main><div class="flex justify-center py-4"><div${attr_class("relative grid grid-cols-3 gap-2 md:gap-4 p-4 after:absolute after:w-full after:h-full after:pointer-events-none after:transition-opacity after:duration-2000 after:bg-[url('/images/gigavasta.png')] after:bg-cover after:opacity-0 *:w-12 *:h-12 *:md:w-24 *:md:h-24 *:rounded-full", void 0, { "after:opacity-0": true })}><!--[-->`);
			const each_array = ensure_array_like(squares);
			for (let i = 0, $$length = each_array.length; i < $$length; i++) {
				let square = each_array[i];
				$$renderer.push(`<button${attr_class(clsx(getSequenceFromIndex[i] === 0 ? "" : square.active ? classEnabled : classDisabled))} title=""></button>`);
			}
			$$renderer.push(`<!--]--></div></div></main>`);
		},
		$$slots: { default: true }
	});
}
//#endregion
export { _page as default };
