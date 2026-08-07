<script lang="ts">
import type { HTMLButtonAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import { getStyleContext } from '../main.svelte';

type Props = {
  children?: Snippet;
} & Partial<HTMLButtonAttributes>;

let {
  class: externalClass,
  children,
  ...rest
}: Props = $props();

const manager = getStyleContext();

const NextThemeIcon = $derived(manager.computed.nextThemeIcon);

</script>

{#if manager.computed.selectedTheme.id !== manager.computed.nextTheme.id}

<button
  {...rest}
  onclick={()=>{manager.nextTheme()}}
  aria-label="Toggle theme"
  class="preset-interactive {children ? 'flex space-x-[0.5em] items-center' : ''} {externalClass ?? ''}"
>
  <NextThemeIcon/>
  {@render children?.()}
</button>

{/if}