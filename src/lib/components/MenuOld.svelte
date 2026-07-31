
<script lang="ts">
// https://icon-sets.iconify.design/

import Meatballs from 'virtual:icons/quill/meatballs-h';
import Kebab from 'virtual:icons/quill/meatballs-v';
import Hamburger from 'virtual:icons/ci/hamburger-md';
import Cog from 'virtual:icons/mdi/cog';

import Close from 'virtual:icons/material-symbols/close-rounded';

import { type Snippet } from 'svelte';
import type { HTMLButtonAttributes } from 'svelte/elements';
import type { Attachment } from 'svelte/attachments';

type Props = {
  icon?: 'kebab' | 'hamburger' | 'meatballs' | 'cog' | 'none';
  type?: 'replace' | 'popup' | 'overlay';
  buttonContent?: Snippet;
  children: Snippet;
} & Omit<HTMLButtonAttributes, "type">;

let {
  icon = 'kebab',
  type = 'popup',
  buttonContent,
  children,
  ...rest
}: Props = $props();

let menuShown = $state(false);
const toggle = ()=>{menuShown = !menuShown};
const hide = ()=>{menuShown=false};

const Icon = $derived((()=>{
  switch(icon){
    case "cog":
      return Cog;
    case "hamburger":
      return Hamburger;
    case "kebab":
      return Kebab;
    case "meatballs":
      return Meatballs;
    case "none":
      return undefined;
  }
})());

let button: HTMLButtonElement | undefined = $state(undefined);

const popupAttachment: ()=>Attachment<HTMLElement> = ()=>(menu)=>{
  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as Node;
    if (!menu.contains(target) && (!button || !button.contains(target))) {
      hide();
    }
  }
  window.addEventListener("click", handleClickOutside);
  return ()=>{
    window.removeEventListener("click", handleClickOutside);
  };
};

</script>


{#if type !== 'replace' || (type === 'replace' && !menuShown)}
  <button
    {...rest}
    class="{rest.class} cursor-pointer pointer-events-auto w-full h-full flex justify-center items-center"
    onclick={toggle}
    bind:this={button}
  >
  <Icon/>
  {@render buttonContent?.()}
  </button>
{/if}

<div>
{#if menuShown}
  {#if type === 'replace'}
    <button class="cursor-pointer pointer-events-auto w-full h-full flex justify-end"
      onclick={hide}
    >
      <Close/>
    </button>
    <div>
      {@render children()}
    </div>
  {:else if type === 'popup'}
    <div
      {@attach popupAttachment()}
      class="absolute right-0 mt-2"
    >
      {@render children()}
    </div>
  {:else if type === 'overlay'}
    <button title="" class="
        fixed inset-0 preset-blur bg-on-light/overlay z-40
      "
      onclick={hide}
    ></button>
    <div class="fixed inset-0 pointer-events-none flex justify-center items-center z-50">
      <div class="pointer-events-auto">
        {@render children()}
      </div>
    </div>
  {/if}
{/if}
</div>