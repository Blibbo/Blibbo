import { D as append, F as event, G as child, H as template_effect, R as get, S as index, X as mutate, Y as mutable_source, Z as set, h as clsx, k as from_html, m as set_class, pt as reset, x as each } from "../chunks/D_ZKicVc.js";
import "../chunks/DhaYE-8x.js";
import { t as MainLayout } from "../chunks/CkNmWS-7.js";
//#region src/routes/exile-puzzle/+page.svelte
var root = from_html(`<button title=""></button>`);
var root_1 = from_html(`<main><div class="flex justify-center py-4"><div></div></div></main>`);
function _page($$anchor) {
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
	let squares = mutable_source([]);
	const maxIndex = 8;
	for (let i = 0; i < squareCount; i++) {
		get(squares).push({
			"sequence": getSequenceFromIndex[i],
			"active": false
		});
		getIndexFromSequence[getSequenceFromIndex[i]] = i;
	}
	const classDisabled = "transition-colors duration-1000 bg-on-page";
	const classEnabled = "transition-colors duration-1000 bg-accent-unlike-page";
	let showVasta = mutable_source(false);
	function clicked(index) {
		if (index === getIndexFromSequence[0]) return;
		const seq = get(squares)[index].sequence;
		const seqPrev = seq - 1 === 0 ? maxIndex : seq - 1;
		const seqNext = seq === maxIndex ? 1 : seq + 1;
		[
			getIndexFromSequence[seqPrev],
			index,
			getIndexFromSequence[seqNext]
		].forEach((i) => {
			mutate(squares, get(squares)[i].active = !get(squares)[i].active);
		});
		let allActive = true;
		get(squares).forEach((square) => {
			if (!square.active && square.sequence != 0) allActive = false;
		});
		if (allActive) set(showVasta, true);
		else set(showVasta, false);
	}
	MainLayout($$anchor, {
		children: ($$anchor, $$slotProps) => {
			var main = root_1();
			var div = child(main);
			var div_1 = child(div);
			let classes;
			each(div_1, 5, () => get(squares), index, ($$anchor, square, i) => {
				var button = root();
				template_effect(() => set_class(button, 1, clsx(getSequenceFromIndex[i] === 0 ? "" : get(square).active ? classEnabled : classDisabled)));
				event("click", button, () => clicked(i));
				append($$anchor, button);
			});
			reset(div_1);
			reset(div);
			reset(main);
			template_effect(() => classes = set_class(div_1, 1, "relative grid grid-cols-3 gap-2 md:gap-4 p-4\r\n          after:absolute after:w-full after:h-full after:pointer-events-none after:transition-opacity after:duration-2000\r\n          after:bg-[url('/images/gigavasta.png')] after:bg-cover after:opacity-0\r\n          *:w-12 *:h-12 *:md:w-24 *:md:h-24 *:rounded-full\r\n        ", null, classes, { "after:opacity-0": !get(showVasta) }));
			append($$anchor, main);
		},
		$$slots: { default: true }
	});
}
//#endregion
export { _page as component };
