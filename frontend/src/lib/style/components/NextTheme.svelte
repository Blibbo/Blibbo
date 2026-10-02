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

{#if manager.nextThemeExists}

<button
  {...rest}
  onclick={()=>{manager.nextTheme()}}
  aria-label="Toggle theme"
  class="clickable {children ? 'flex space-x-2 items-center' : ''} {externalClass ?? ''}"
>
  <NextThemeIcon/>
  {@render children?.()}
</button>

{/if}