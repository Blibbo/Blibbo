<script lang="ts">
import {type BlibboFieldState, type BlibboFieldProps, type FocusableEditorElement} from "$lib/components/blibbo/blibbo";

import MathField from "$lib/components/mathlive/MathField.svelte";
import CodeMirror, { type CodeMirrorProps } from "svelte-codemirror-editor";
import { latex } from "codemirror-lang-latex";
import Menu from "~/src/lib/components/MenuOld.svelte";
import { tick } from "svelte";
import { EditorView } from "@codemirror/view";

let {
  field = $bindable<BlibboFieldState>(),
  readOnly = false,
  hideButtonsOnBlur = true,
  noButtons = false,
  onfocus,
  onblur,
  editorType = 'math',
  mathEditorProperties,
  codeEditorProperties,
  textEditorProperties,
  onshiftenter,
  onemptybackspace,
  ...divProps
}: BlibboFieldProps = $props();

let value = $state(field.value);
$effect(() => {
  if (value !== field.value) {
    field = { ...field, value };
  }
})
$effect(()=>{
  if (field.value !== value) {
    value = field.value ?? '';
  }
})

// focus this component = focus editor
let editorElement: FocusableEditorElement | undefined = $state(undefined);
export function focus(){
  editorElement?.focus();
}

$effect(() => {
  editorType;

  let cancelled = false;

  tick().then(() => {
    if (!cancelled) focus();
  });

  return () => {
    cancelled = true;
  };
});

// component focus
let focused = $state(false);
function focusComponent(){
  focused = true;
}
function blurComponent(){
  focused = false;
}

function handleEditorFocus(e: FocusEvent){
  focusComponent();

  onfocus?.(e);
}

function handleParentPointerDown(e: PointerEvent){
  const clickedElements = e.composedPath();

  if(!clickedElements.includes(editorElement as Node)){
    e.preventDefault();
  }
}

function handleEditorBlur(e: FocusEvent){
  blurComponent();

  onblur?.(e);
}

// codemirror init
function handleCodeMirrorReady(editor: EditorView){
  editorElement = editor;

  editor.dom.addEventListener("focusin", handleEditorFocus);
  editor.dom.addEventListener("focusout", handleEditorBlur);

}

// key combos:
let shiftDown = false;

function handleKeydown(e: KeyboardEvent){
  if(onshiftenter){
    if(e.code === 'ShiftLeft' || e.code === 'ShiftRight'){
      shiftDown = true;
    }

    if(e.code === 'Enter' && shiftDown){
      onshiftenter?.();
    }
  }

  if(onemptybackspace && e.code === 'Backspace' && value === ''){
    onemptybackspace();
  }
}

function handleKeyup(e: KeyboardEvent){
  if(onshiftenter && (e.code === 'ShiftLeft' || e.code === 'ShiftRight')){
    shiftDown = false;
  }
}

const codeMirrorKeybindings: CodeMirrorProps["keybindings"] = [];

if (onshiftenter) {
  codeMirrorKeybindings.push({
    key: "Shift-Enter",
    run: () => {
      onshiftenter();
      return true;
    }
  });
}

if (onemptybackspace) {
  codeMirrorKeybindings.push({
    key: "Backspace",
    run: (view) => {
      const { state } = view;

      // only trigger when empty
      if (state.doc.length === 0) {
        onemptybackspace();
        return true;
      }

      return false; // allow normal delete
    }
  });
}

</script>

<div
  {...divProps}
  class="{divProps.class}
    flex gap-x-1 sm:gap-x-2
  "
  onpointerdown={handleParentPointerDown}
>
  {#if editorType === 'text'}
    <textarea
      {...textEditorProperties}
      bind:this={editorElement}
      class="{textEditorProperties?.class ?? ''}
        {!readOnly ? 'focus:outline-2 outline-accent' : 'outline-0'} placeholder:text-accent rounded-xs
        flex-1 w-0 min-h-lh field-sizing-content {false? 'resize-none' : '' /* mozilla hasn't implemented field-sizing-content yet. */} overflow-clip
      "
      bind:value={value}
      onkeydown={handleKeydown}
      onkeyup={handleKeyup}
      placeholder='Enter Formula...'
      readonly={readOnly}
      onfocus={handleEditorFocus}
      onblur={handleEditorBlur}
    ></textarea>
  {:else if editorType === 'code'}
    <CodeMirror
      {...codeEditorProperties}
      onready={handleCodeMirrorReady}
      class="{codeEditorProperties?.class ?? ''}
        flex-1 w-0
      "
      bind:value={value}
      lang={latex()}
      keybindings={codeMirrorKeybindings}
      placeholder='Enter Formula...'
      readonly={readOnly}
    />
  {:else if editorType === 'math'}
    <MathField
      {...mathEditorProperties}
      bind:this={editorElement}
      class={`${mathEditorProperties?.class ?? ''}
        flex-1
      `}
      bind:value={value}
      onkeydown={handleKeydown}
      onkeyup={handleKeyup}
      hideButtonsOnBlur={hideButtonsOnBlur}
      noButtons={noButtons}
      placeholder='Enter \; Formula...'
      readOnly={readOnly}
      onfocus={handleEditorFocus}
      onblur={handleEditorBlur}
    />
  {/if}

  {#if (focused || !hideButtonsOnBlur) && !noButtons }
    <div class="flex items-center">
      <div>
        <Menu icon=meatballs type=popup
          class="bg-accent text-on-accent rounded-sm sm:p-2"
          tabindex={hideButtonsOnBlur ? -1 : undefined}
        >
          <div class="text-lg rounded-sm bg-accent text-on-accent p-2 text-nowrap">
            <Menu icon=none >
              {#snippet buttonContent()}
                Editor type
              {/snippet}
              
              <div class="mt-2 flex flex-col bg-accent rounded-sm *:cursor-pointer *:p-2 *:hover:bg-white/20">
                <button onclick={()=>{editorType='math'}}>Math</button>
                <button onclick={()=>{editorType='text'}}>Text</button>
                <button onclick={()=>{editorType='code'}}>Code</button>
              </div>
            </Menu>
          </div>
        </Menu>
      </div>
    </div>
  {/if}

</div>