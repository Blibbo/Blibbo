import { a as attributes, b as clsx, f as spread_props, i as attr_class, n as onDestroy, o as bind_props, p as stringify, s as derived, x as escape_html } from "../../../chunks/index-server.js";
import { i as Meatballs_h, n as Hamburger_md, r as Meatballs_v, t as Cog } from "../../../chunks/cog.js";
import { t as MathField } from "../../../chunks/MathField.js";
import { autocompletion, closeBrackets, closeBracketsKeymap, completionKeymap } from "@codemirror/autocomplete";
import { defaultKeymap, history, historyKeymap, indentWithTab } from "@codemirror/commands";
import { bracketMatching, defaultHighlightStyle, foldGutter, foldKeymap, indentOnInput, indentUnit, syntaxHighlighting } from "@codemirror/language";
import { lintKeymap } from "@codemirror/lint";
import { highlightSelectionMatches, searchKeymap } from "@codemirror/search";
import { EditorState } from "@codemirror/state";
import { EditorView, crosshairCursor, drawSelection, dropCursor, highlightActiveLine, highlightActiveLineGutter, highlightSpecialChars, keymap, lineNumbers, placeholder, rectangularSelection } from "@codemirror/view";
import { latex } from "codemirror-lang-latex";
//#region node_modules/svelte-codemirror-editor/dist/util.js
/**
* Reduce calls to the passed function.
*
* @param func - Function to debounce.
* @param threshold - The delay to avoid recalling the function.
* @param execAsap - If true, the Function is called at the start of the threshold, otherwise the Function is called at the end of the threshold.
*/
function debounce(func, threshold, execAsap = false) {
	let timeout;
	return function debounced(...args) {
		const self = this;
		if (timeout) clearTimeout(timeout);
		else if (execAsap) func.apply(self, args);
		timeout = setTimeout(delayed, threshold || 100);
		function delayed() {
			if (!execAsap) func.apply(self, args);
			timeout = null;
		}
	};
}
//#endregion
//#region node_modules/svelte-codemirror-editor/dist/CodeMirror.svelte
function CodeMirror($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { value = "", lang, theme, extensions = [], keybindings = [], allowMultiSelect = true, useTab = true, tabSize = 2, lineWrapping = false, lineNumbers: lineNumbers$1 = true, highlight = {
			activeLine: true,
			activeLineGutter: true,
			specialChars: true,
			selectionMatches: true
		}, history: history$1 = true, foldGutter: foldGutter$1 = true, drawSelection: drawSelection$1 = true, dropCursor: dropCursor$1 = true, indentOnInput: indentOnInput$1 = true, syntaxHighlighting: syntaxHighlighting$1 = true, bracketMatching: bracketMatching$1 = true, closeBrackets: closeBrackets$1 = true, autocompletion: autocompletion$1 = true, rectangularSelection: rectangularSelection$1 = true, crosshairCursor: crosshairCursor$1 = true, styles, editable = true, readonly = false, placeholder: placeholder$1, nodebounce = false, class: classes = "", onchange, onready, onreconfigure } = $$props;
		const is_browser = typeof window !== "undefined";
		derived(() => [
			...get_base_extensions(),
			...get_theme(),
			...extensions
		]);
		derived(() => nodebounce ? handle_change : debounce(handle_change, 300));
		onDestroy(() => void 0);
		function handle_change() {}
		function get_base_extensions() {
			const extensions = [
				indentUnit.of(" ".repeat(tabSize)),
				EditorView.editable.of(editable),
				EditorState.readOnly.of(readonly),
				EditorState.allowMultipleSelections.of(allowMultiSelect)
			];
			const key_bindings = [
				...keybindings,
				...defaultKeymap,
				...searchKeymap,
				...lintKeymap
			];
			if (useTab) key_bindings.push(indentWithTab);
			if (lineNumbers$1) extensions.push(lineNumbers(lineNumbers$1 === true ? void 0 : lineNumbers$1));
			if (highlight.activeLine) extensions.push(highlightActiveLine());
			if (highlight.activeLineGutter) extensions.push(highlightActiveLineGutter());
			if (dropCursor$1) extensions.push(dropCursor());
			if (indentOnInput$1) extensions.push(indentOnInput());
			if (placeholder$1) extensions.push(placeholder(placeholder$1));
			if (lang) extensions.push(lang);
			if (lineWrapping) extensions.push(EditorView.lineWrapping);
			if (highlight.specialChars) extensions.push(highlightSpecialChars(highlight.specialChars === true ? void 0 : highlight.specialChars));
			if (highlight.selectionMatches) extensions.push(highlightSelectionMatches(highlight.selectionMatches === true ? void 0 : highlight.selectionMatches));
			if (history$1) {
				extensions.push(history$1 === true ? history() : history(history$1));
				key_bindings.push(...historyKeymap);
			}
			if (foldGutter$1) {
				extensions.push(foldGutter$1 === true ? foldGutter() : foldGutter(foldGutter$1));
				key_bindings.push(...foldKeymap);
			}
			if (drawSelection$1) extensions.push(drawSelection$1 === true ? drawSelection() : drawSelection(drawSelection$1));
			if (syntaxHighlighting$1) if (syntaxHighlighting$1 === true) extensions.push(syntaxHighlighting(defaultHighlightStyle, { fallback: true }));
			else {
				const { highlighter = defaultHighlightStyle, fallback = true } = syntaxHighlighting$1;
				extensions.push(syntaxHighlighting(highlighter, { fallback }));
			}
			if (bracketMatching$1) extensions.push(bracketMatching(bracketMatching$1 === true ? void 0 : bracketMatching$1));
			if (closeBrackets$1) {
				extensions.push(closeBrackets());
				key_bindings.push(...closeBracketsKeymap);
			}
			if (autocompletion$1) {
				extensions.push(autocompletion(autocompletion$1 === true ? void 0 : autocompletion$1));
				key_bindings.push(...completionKeymap);
			}
			if (rectangularSelection$1) extensions.push(rectangularSelection(rectangularSelection$1 === true ? void 0 : rectangularSelection$1));
			if (crosshairCursor$1) extensions.push(crosshairCursor(crosshairCursor$1 === true ? void 0 : crosshairCursor$1));
			extensions.push(keymap.of(key_bindings));
			return extensions;
		}
		function get_theme() {
			const extensions = [];
			if (styles) extensions.push(EditorView.theme(styles));
			if (theme) extensions.push(theme);
			return extensions;
		}
		if (is_browser) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div${attr_class(clsx(["codemirror-wrapper", classes]), "svelte-re3zpr")}></div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div${attr_class(clsx(["scm-waiting", classes]), "svelte-re3zpr")}><div class="scm-waiting__loading scm-loading svelte-re3zpr"><div class="scm-loading__spinner svelte-re3zpr"></div> <p class="scm-loading__text svelte-re3zpr">Loading editor...</p></div> <pre class="scm-pre cm-editor svelte-re3zpr">${escape_html(value)}</pre></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { value });
	});
}
//#endregion
//#region src/lib/components/MenuOld.svelte
function MenuOld($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { icon = "kebab", type = "popup", buttonContent, children, $$slots, $$events, ...rest } = $$props;
		const Icon = derived(() => (() => {
			switch (icon) {
				case "cog": return Cog;
				case "hamburger": return Hamburger_md;
				case "kebab": return Meatballs_v;
				case "meatballs": return Meatballs_h;
				case "none": return;
			}
		})());
		if (type !== "replace" || type === "replace" && true) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<button${attributes({
				...rest,
				class: `${stringify(rest.class)} cursor-pointer pointer-events-auto w-full h-full flex justify-center items-center`
			})}>`);
			if (Icon()) {
				$$renderer.push("<!--[-->");
				Icon()($$renderer, {});
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
			$$renderer.push(` `);
			buttonContent?.($$renderer);
			$$renderer.push(`<!----></button>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <div>`);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div>`);
	});
}
//#endregion
//#region src/lib/components/blibbo/BlibboField.svelte
function BlibboField($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { field = void 0, readOnly = false, hideButtonsOnBlur = true, noButtons = false, onfocus, onblur, editorType = "math", mathEditorProperties, codeEditorProperties, textEditorProperties, onshiftenter, onemptybackspace, $$slots, $$events, ...divProps } = $$props;
		let value = field.value;
		let editorElement = void 0;
		function focus() {
			editorElement?.focus();
		}
		let focused = false;
		function focusComponent() {
			focused = true;
		}
		function blurComponent() {
			focused = false;
		}
		function handleEditorFocus(e) {
			focusComponent();
			onfocus?.(e);
		}
		function handleEditorBlur(e) {
			blurComponent();
			onblur?.(e);
		}
		function handleCodeMirrorReady(editor) {
			editorElement = editor;
			editor.dom.addEventListener("focusin", handleEditorFocus);
			editor.dom.addEventListener("focusout", handleEditorBlur);
		}
		let shiftDown = false;
		function handleKeydown(e) {
			if (onshiftenter) {
				if (e.code === "ShiftLeft" || e.code === "ShiftRight") shiftDown = true;
				if (e.code === "Enter" && shiftDown) onshiftenter?.();
			}
			if (onemptybackspace && e.code === "Backspace" && value === "") onemptybackspace();
		}
		function handleKeyup(e) {
			if (onshiftenter && (e.code === "ShiftLeft" || e.code === "ShiftRight")) shiftDown = false;
		}
		const codeMirrorKeybindings = [];
		if (onshiftenter) codeMirrorKeybindings.push({
			key: "Shift-Enter",
			run: () => {
				onshiftenter();
				return true;
			}
		});
		if (onemptybackspace) codeMirrorKeybindings.push({
			key: "Backspace",
			run: (view) => {
				const { state } = view;
				if (state.doc.length === 0) {
					onemptybackspace();
					return true;
				}
				return false;
			}
		});
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			$$renderer.push(`<div${attributes({
				...divProps,
				class: `${stringify(divProps.class)} flex gap-x-1 sm:gap-x-2 `
			})}>`);
			if (editorType === "text") {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<textarea${attributes({
					...textEditorProperties,
					class: `${stringify(textEditorProperties?.class ?? "")} ${!readOnly ? "focus:outline-2 outline-accent" : "outline-0"} placeholder:text-accent rounded-xs flex-1 w-0 min-h-lh field-sizing-content  overflow-clip `,
					placeholder: "Enter Formula...",
					readonly: readOnly
				})}>`);
				const $$body = escape_html(value);
				if ($$body) $$renderer.push(`${$$body}`);
				$$renderer.push(`</textarea>`);
			} else if (editorType === "code") {
				$$renderer.push("<!--[1-->");
				CodeMirror($$renderer, spread_props([codeEditorProperties, {
					onready: handleCodeMirrorReady,
					class: `${stringify(codeEditorProperties?.class ?? "")}
        flex-1 w-0
      `,
					lang: latex(),
					keybindings: codeMirrorKeybindings,
					placeholder: "Enter Formula...",
					readonly: readOnly,
					get value() {
						return value;
					},
					set value($$value) {
						value = $$value;
						$$settled = false;
					}
				}]));
			} else if (editorType === "math") {
				$$renderer.push("<!--[2-->");
				MathField($$renderer, spread_props([mathEditorProperties, {
					class: `${mathEditorProperties?.class ?? ""}
        flex-1
      `,
					onkeydown: handleKeydown,
					onkeyup: handleKeyup,
					hideButtonsOnBlur,
					noButtons,
					placeholder: "Enter \\; Formula...",
					readOnly,
					onfocus: handleEditorFocus,
					onblur: handleEditorBlur,
					get value() {
						return value;
					},
					set value($$value) {
						value = $$value;
						$$settled = false;
					}
				}]));
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> `);
			if ((focused || !hideButtonsOnBlur) && !noButtons) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div class="flex items-center"><div>`);
				MenuOld($$renderer, {
					icon: "meatballs",
					type: "popup",
					class: "bg-accent text-on-accent rounded-sm sm:p-2",
					tabindex: hideButtonsOnBlur ? -1 : void 0,
					children: ($$renderer) => {
						$$renderer.push(`<div class="text-lg rounded-sm bg-accent text-on-accent p-2 text-nowrap">`);
						{
							function buttonContent($$renderer) {
								$$renderer.push(`<!---->Editor type`);
							}
							MenuOld($$renderer, {
								icon: "none",
								buttonContent,
								children: ($$renderer) => {
									$$renderer.push(`<div class="mt-2 flex flex-col bg-accent rounded-sm *:cursor-pointer *:p-2 *:hover:bg-white/20"><button>Math</button> <button>Text</button> <button>Code</button></div>`);
								},
								$$slots: {
									buttonContent: true,
									default: true
								}
							});
						}
						$$renderer.push(`<!----></div>`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----></div></div>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div>`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, {
			field,
			focus
		});
	});
}
//#endregion
//#region src/lib/components/blibbo/blibbo.ts
function newBlibboFieldState() {
	return {
		value: "",
		type: "formula",
		assert: false
	};
}
//#endregion
//#region src/routes/maths/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let field = newBlibboFieldState();
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			$$renderer.push(`<div class="flex flex-col *:my-3 w-full px-1 sm:px-3 md:px-0 text-2xl sm:text-4xl">`);
			BlibboField($$renderer, {
				class: "w-full",
				editorType: "math",
				onshiftenter: () => {
					console.log("Shift enter.");
				},
				onemptybackspace: () => {
					console.log("Empty backspace.");
				},
				get field() {
					return field;
				},
				set field($$value) {
					field = $$value;
					$$settled = false;
				}
			});
			$$renderer.push(`<!----></div>`);
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
