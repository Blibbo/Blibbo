import { a as attributes } from "./index-server.js";
//#region ~icons/material-symbols/close-rounded.svelte
function Close_rounded($$renderer, $$props) {
	const { $$slots, $$events, ...p } = $$props;
	$$renderer.push(`<svg${attributes({
		viewBox: "0 0 24 24",
		width: "1.2em",
		height: "1.2em",
		...p
	}, void 0, void 0, void 0, 3)}><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"></path></svg>`);
}
//#endregion
//#region ~icons/quill/meatballs-h.svelte
function Meatballs_h($$renderer, $$props) {
	const { $$slots, $$events, ...p } = $$props;
	$$renderer.push(`<svg${attributes({
		viewBox: "0 0 32 32",
		width: "1.2em",
		height: "1.2em",
		...p
	}, void 0, void 0, void 0, 3)}><path fill="none" stroke="currentColor" stroke-width="2" d="M8 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></path></svg>`);
}
//#endregion
//#region ~icons/quill/meatballs-v.svelte
function Meatballs_v($$renderer, $$props) {
	const { $$slots, $$events, ...p } = $$props;
	$$renderer.push(`<svg${attributes({
		viewBox: "0 0 32 32",
		width: "1.2em",
		height: "1.2em",
		...p
	}, void 0, void 0, void 0, 3)}><path fill="none" stroke="currentColor" stroke-width="2" d="M16 24a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0-7a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0-7a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></path></svg>`);
}
//#endregion
//#region ~icons/ci/hamburger-md.svelte
function Hamburger_md($$renderer, $$props) {
	const { $$slots, $$events, ...p } = $$props;
	$$renderer.push(`<svg${attributes({
		viewBox: "0 0 24 24",
		width: "1.2em",
		height: "1.2em",
		...p
	}, void 0, void 0, void 0, 3)}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h14M5 12h14M5 7h14"></path></svg>`);
}
//#endregion
//#region ~icons/mdi/cog.svelte
function Cog($$renderer, $$props) {
	const { $$slots, $$events, ...p } = $$props;
	$$renderer.push(`<svg${attributes({
		viewBox: "0 0 24 24",
		width: "1.2em",
		height: "1.2em",
		...p
	}, void 0, void 0, void 0, 3)}><path fill="currentColor" d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64z"></path></svg>`);
}
//#endregion
export { Close_rounded as a, Meatballs_h as i, Hamburger_md as n, Meatballs_v as r, Cog as t };
