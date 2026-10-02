<script lang="ts">
import { ColorPicker } from "@ark-ui/svelte";
import type { ComponentProps } from "svelte";

type Props = {
  transparencyGrid?: boolean | undefined;
} & ComponentProps<typeof ColorPicker.ChannelSlider>;

let {
  transparencyGrid,
  ...rest
}: Props = $props();

</script>

<ColorPicker.ChannelSlider {...rest}>
  {#if transparencyGrid}
    <ColorPicker.TransparencyGrid class="rounded-full" />
  {/if}
  <ColorPicker.ChannelSliderTrack class="cursor-ew-resize w-full h-2.5 rounded-full outline outline-on-surface" />
  <ColorPicker.ChannelSliderThumb class="cursor-ew-resize size-2 -translate-1/2 rounded-full preset-outline-contrast" />
</ColorPicker.ChannelSlider>