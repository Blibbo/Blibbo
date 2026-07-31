<script lang="ts">
import Keyboard from "virtual:icons/mage/keyboard";
import Hamburger from 'virtual:icons/ci/hamburger-md';

import { getMenuElements, HideKeyboard, hideMenu, MathfieldElement, ShowKeyboard, showMenu, ToggleKeyboard } from "./mathfield";

import { on } from "svelte/events";
import type { HTMLAttributes } from "svelte/elements";
import { IS_ANDROID_APP, IS_TOUCH_SCREEN } from "$lib/platform";
import { onMount } from "svelte";
    import { getStyleContext } from "../../style/main.svelte";
    import { STYLE_PRESETS } from "../../style/config";

type Props = {
  value?: string;
  hideButtonsOnBlur?: boolean;
  noButtons?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  noRing?: boolean;
  onfocus?: (e:FocusEvent)=>void;
  onblur?: (e:FocusEvent)=>void;
} & Partial<HTMLAttributes<HTMLDivElement>>;

let {
  value = $bindable(),
  hideButtonsOnBlur = false,
  noButtons = false,
  readOnly = false,
  placeholder = '',
  noRing = false,
  onfocus,
  onblur,
  ...rest
}: Props = $props();

const init = (node: MathfieldElement) => {
  $effect(() => {
    if (value) node.value = value;
  });
  $effect(() => {
    return on(node, "input", () => {
      value = node.value;
    });
  });
};

// setup

let mf: MathfieldElement | undefined = $state(undefined);
let menuItems: MathfieldElement["menuItems"] | undefined = undefined;

function handleOnMathfieldMount(){
  if(!mf){return}
  menuItems = mf.menuItems;
  mf.menuItems = [];
  mf.mathVirtualKeyboardPolicy = 'manual';

  // fix desync with the menu shown status
  mf.addEventListener('menu-select', (e) => {
    // e.detail.id contains stuff like 'insert-matrix'
    registerMenuHidden();
  });
}

// handle focus

function mfSafeFocus() {
  if (!mf) return;

  try {
    // check if it's safe to focus (window focused etc)
    mf.focus();
  } catch {
    queueMicrotask(mfSafeFocus);
  }
}

let focused = $state(false);

export function focus(){
  mfSafeFocus();
}

function focusComponent(){
  focused = true;

  if(IS_TOUCH_SCREEN){
    wrapShowKeyboard();
  }
}

function blurComponent(){
  focused = false;
  
  wrapHideKeyboard();
}

function handleMfFocus(e: FocusEvent){
  focusComponent();

  onfocus?.(e);
}

function handleMfBlur(e: FocusEvent){
  blurComponent();

  onblur?.(e);
}

function handleParentPointerDown(e: PointerEvent){
  const clickedElements = e.composedPath();

  if(!clickedElements.includes(mf as Node)){
    e.preventDefault();
  }
}

// keyboard
let keyboardShown = $state(false)
function wrapToggleKeyboard(){
  ToggleKeyboard();
  keyboardShown = !keyboardShown;
}
function wrapShowKeyboard(){
  if(readOnly)return;

  ShowKeyboard();
  keyboardShown = true;
}
function wrapHideKeyboard(){
  HideKeyboard();
  keyboardShown = false;
}
function handleKeyboardButtonClick(){
  wrapToggleKeyboard();
}

// menu

let menuShown = $state(false);
function wrapShowMenu(x: number, y: number){
  menuShown = true;
  showMenu(x, y, menuItems, mf);
}
function registerMenuHidden(){
  menuShown = false;
}
function wrapHideMenu(){
  registerMenuHidden();
  hideMenu(mf);
}

function handleMenuClick(e: MouseEvent){

  // find x and y
  const clickedThroughFocus = e.clientX === 0 && e.clientY === 0;

  let x = e.clientX, y = e.clientY + (IS_TOUCH_SCREEN ? -30 : 10);
  if(clickedThroughFocus){
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    x = rect.left;
    y = rect.bottom;
  }

  wrapShowMenu(x, y);
}

// hide menu
function hideMenuOnWindowPointerDown(e: MouseEvent){
  const clicked = e.composedPath();
  const menuElements = getMenuElements(mf);

  const mustHide = menuElements.length > 0 && !menuElements.some(el => clicked.includes(el));;
  if(mustHide){
    wrapHideMenu();
  }
}

onMount(()=>{
  window.addEventListener("pointerdown", hideMenuOnWindowPointerDown);
  return (()=>{
    window.removeEventListener("pointerdown", hideMenuOnWindowPointerDown);
  })
})

let decoy: HTMLDivElement | undefined = $state(undefined);
onMount(()=>{

  // fix desync between menu visibility state
  document.addEventListener('visibilitychange', wrapHideMenu);
  window.addEventListener('blur', wrapHideMenu);

  // heuristics to fix the system keyboard appearing when switching apps on mobile app builds
  let focusDecoyOnVisibilityChange = undefined;
  if(IS_ANDROID_APP){
    focusDecoyOnVisibilityChange = ()=>{
      if (!document.hidden && mf?.hasFocus()) {
        decoy?.focus();
        mf?.focus();
      }
    }
    document.addEventListener('visibilitychange', focusDecoyOnVisibilityChange);
  }

  // cleanup
  return (()=>{
    document.removeEventListener('visibilitychange', wrapHideMenu);
    window.removeEventListener('blur', wrapHideMenu);
    if(focusDecoyOnVisibilityChange){
      document.removeEventListener('visibilitychange', focusDecoyOnVisibilityChange);
    }
  })
})

</script>

<div
  {...rest}
  class="
    flex justify-between items-center rounded-sm
    {rest.class ?? ''}
    {focused && !readOnly ? 'outline-2 outline-accent-readable-on-page' : ''}
  "
  onpointerdown={handleParentPointerDown}
>
  {#if IS_ANDROID_APP}
    <div tabindex="-1" inputmode="none" class="fixed opacity-0" bind:this={decoy}></div>
  {/if}

  <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
  <math-field
    bind:this={mf} use:init
    class="flex-1 w-0"
    readOnly={readOnly}
    placeholder={placeholder}
    onmount={handleOnMathfieldMount}
    onfocus={handleMfFocus}
    onblur={handleMfBlur}
    tabindex={readOnly ? -1 : undefined}
  ></math-field>

  {#if !noButtons}
    <div class="
      flex items-center justify-center flex-col text-accent-readable-on-page sm:flex-row *:sm:p-1 sm:mr-1 *:rounded-sm

      {(!focused && hideButtonsOnBlur)? 'opacity-0 pointer-events-none w-0' : ''}
    ">
      {#if !readOnly}
        <button
          onclick={handleKeyboardButtonClick}
          class="preset-interactive-accent cursor-pointer {keyboardShown ? 'preset-accent-unlike-page' : ''}"
          tabindex={ hideButtonsOnBlur ? -1 : undefined}
        >
          <Keyboard/>
        </button>
      {/if}
      <button
        onclick={handleMenuClick}
        class="preset-interactive-accent cursor-pointer {menuShown ? 'preset-accent-unlike-page' : ''}"
        tabindex={ hideButtonsOnBlur ? -1 : undefined}
      >
        <Hamburger/>
      </button>
    </div>
  {/if}
</div>



<style>

math-field{
  outline: none;

  background-color: var(--page);
  transition:
    background-color var(--theme-switch-duration),
    outline 200ms;
}

math-field::part(virtual-keyboard-toggle),
math-field::part(menu-toggle) {
  display:none;
}

/* when the field is focused, I'm handling focusing myself though */
/* math-field:focus-within {} */

/* The virtual keyboard toggle button */
/* math-field::part(virtual-keyboard-toggle), */
/* The menu toggle button */
/* math-field::part(menu-toggle) {
  color: var(--accent);
} */

/* math-field::part(virtual-keyboard-toggle):hover,
math-field::part(menu-toggle):hover {
  background-color: var(--accent);
  color: var(--on-accent);
} */

/* The math formula */
math-field::part(content) {
  color: var(--on-page);
  transition-property: color;
  transition-duration: var(--theme-switch-duration);
}

/* The element containing the formula, the keyboard toggle and the menu toggle */
math-field::part(container) {
  /* background-color: var(--page); */
  transition-property: background-color;
  transition-duration: var(--theme-switch-duration);
}

/* The hidden element capturing the physical keyboard input */
/* math-field::part(keyboard-sink) {} */

/* The element containing the placeholder attribute when the mathfield is empty */
math-field::part(placeholder) {
  color: var(--accent-readable-on-page);
}

/* The prompts (placeholder{}) inside the mathfield */
/* math-field::part(prompt) {} */

/* you could give these properties to math-field instead of :root */
math-field{

  /* Primary accent color, used for example keyboard toggle and menu glyphs and in the virtual keyboard */
  --primary: var(--accent);
  
  /* Color of the insertion point */
  --caret-color: var(--accent-readable-on-page);
  
  /* Color of the content when selected */
  --selection-color: var(--on-accent-unlike-page);
  
  /* Background color of the selection */
  --selection-background-color: var(--accent-unlike-page);
  
  /* Background color of items that contain the caret */
  --contains-highlight-background-color: var(--accent-unlike-page);
  
  /* of the placeholder symbol */
  /* --placeholder-color	Color */
  
  /* (0-1) of the placeholder symbol */
  /* --placeholder-opacity	Opacity */
  
  /* Color of a smart fence (default is current color) */
  --smart-fence-color: var(--on-page);
  
  /* Opacity of a smart fence (default is 50%) */
  --smart-fence-opacity: 1;
  
  /* The background color indicating the caret is in a text zone */
  /* --highlight-text: red; */
  
  /* The font stack used for content in a text zone */
  /* --text-font-family */
  
  /* The color of content in a LaTeX zone */
  /* --latex-color: red; */
  
  /* Highlight color of a prompt when in the "correct" state */
  /* --correct-color */
  
  /* Highlight color of a prompt when in the "incorrect" state */
  /* --incorrect-color */

}

</style>