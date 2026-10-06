<script lang="ts">
  import PlusIcon from "$lib/components/icons/PlusIcon.svelte";
  import XIcon from "$lib/components/icons/XIcon.svelte";
import type { Snippet } from "svelte";

type Props = {
  children: Snippet;
  inherited?: boolean | undefined;
  label: string;
  onAdd?: ()=>void;
  onRemove?: ()=>void;
};

let {
  children,
  inherited,
  label,
  onAdd,
  onRemove,
}: Props = $props();
</script>

<div class="flex justify-between items-end">
  <div class="flex-1" class:flex={!inherited}>
    {#if !inherited}
      {@render children()}
    {:else}
      <h4 class="preset-label">{label}</h4>
      <p class="italic text-primary-readable-on-surface p-1">Inherited</p>
    {/if}
  </div>
  {#if inherited}
    <PlusIcon class="clickable-fade m-2" onclick={onAdd}/>
  {:else}
    <XIcon class="clickable-fade m-2" onclick={onRemove}/>
  {/if}
</div>