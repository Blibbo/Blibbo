<script lang="ts">
import { ColorPicker } from "@ark-ui/svelte";
import CheckIcon from "../icons/CheckIcon.svelte";
import type { ComponentProps } from "svelte";

type Props = {
  swatches?: string[] | undefined;
} & ComponentProps<typeof ColorPicker.SwatchGroup>;

let {
  swatches,
  ...rest
}: Props = $props();

</script>

{#if swatches}
  <ColorPicker.SwatchGroup class="flex flex-wrap gap-[0.3rem]" {...rest}>
    {#each swatches as color}
      <ColorPicker.SwatchTrigger value={color}>
        <ColorPicker.Swatch value={color}
          class="size-6 flex justify-center items-center rounded-md outline outline-(--fg)"
        >
          <ColorPicker.SwatchIndicator>
            <CheckIcon class="preset-outline-svg"/>
          </ColorPicker.SwatchIndicator>
        </ColorPicker.Swatch>
      </ColorPicker.SwatchTrigger>
    {/each}
  </ColorPicker.SwatchGroup>
{/if}