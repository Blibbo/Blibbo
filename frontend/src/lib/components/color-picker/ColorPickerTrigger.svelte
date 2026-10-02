<script lang="ts">
import { ColorPicker } from "@ark-ui/svelte";
import { getColorPickerContext } from "./ColorPicker.svelte";
import type { Snippet } from "svelte";

type Props = {
  label: string | Snippet;
  inlineLabel?: boolean | undefined;
  triggerClass?: string | undefined;
  labelClass?: string | undefined;
};

let {
  label,
  inlineLabel,
  labelClass,
  triggerClass,
}: Props = $props();

const ctx = getColorPickerContext();

</script>

<ColorPicker.Label class={labelClass} hidden={inlineLabel}>
  {#if typeof label === "string"}{label}{:else}{@render label()}{/if}
</ColorPicker.Label>
<ColorPicker.Trigger class={triggerClass}>
  <div class="preset-swatch relative">
    <ColorPicker.TransparencyGrid hidden={ctx().type !== "any"} class="rounded-full"/>
    <ColorPicker.Swatch value={ctx().value?.raw}
      class="relative size-full rounded-full"
    ></ColorPicker.Swatch>
  </div>

  {#if inlineLabel}
    {#if typeof label === "string"}{label}{:else}{@render label()}{/if}
  {:else}
    {ctx().value?.d().toHex().toUpperCase()}
  {/if}
</ColorPicker.Trigger>

<style>
@reference "$app.css";

:global {
  @layer components {
    [data-scope="color-picker"][data-part="trigger"] {
      @apply flex items-center p-1 gap-x-1 clickable-fade rounded-full;
    }
    [data-scope="color-picker"][data-part="label"] {
      @apply preset-label block;
    }
  }
}

</style>