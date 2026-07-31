<script lang="ts">
import { ColorPicker } from "@ark-ui/svelte";
import PickerIcon from "../icons/PickerIcon.svelte";
import type { ComponentProps } from "svelte";
import ColorPickerSlider from "./ColorPickerSlider.svelte";
import { getColorPickerContext } from "./ColorPickerRoot.svelte";
import ColorPickerSwatchGroup from "./ColorPickerSwatchGroup.svelte";

type Props = {
  swatches?: string[] | undefined;
} & ComponentProps<typeof ColorPicker.Content>;

let {
  swatches,
  ...rest
}: Props = $props();

const ctx = getColorPickerContext();

</script>


<ColorPicker.Positioner>
  <ColorPicker.Content
    {...rest}
  >
    <ColorPicker.Area class="h-24">
      <ColorPicker.AreaBackground class="size-full rounded-md outline outline-(--fg)"/>
      <ColorPicker.AreaThumb class="rounded-full size-4 preset-outline-contrast" />
    </ColorPicker.Area>
    <div class="flex space-x-2">
      <ColorPicker.EyeDropperTrigger
        class="size-8 flex justify-center items-center preset-button rounded-md outline outline-(--fg)"
      >
        <PickerIcon/>
      </ColorPicker.EyeDropperTrigger>
      <div class="flex-1 flex flex-col py-1
        { ctx().type === "any" ? "justify-between" : "justify-center"}"
      >
        <ColorPickerSlider channel="hue"/>
        {#if ctx().type === "any"}
          <ColorPickerSlider channel="alpha" transparencyGrid/>
        {/if}
      </div>
    </div>
    <ColorPicker.ChannelInput channel="hex"
      class="p-1 rounded-md outline outline-(--fg) w-full"
    />
    <ColorPickerSwatchGroup {swatches}/>
    {#if ctx().errorMsg}
      <p class="bg-(--fg) text-(--bg) text-xs rounded-md p-1">{ctx().errorMsg}</p>
    {/if}
  </ColorPicker.Content>
</ColorPicker.Positioner>
<ColorPicker.HiddenInput />
