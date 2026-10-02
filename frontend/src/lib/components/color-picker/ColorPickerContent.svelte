<script lang="ts">
import { ColorPicker } from "@ark-ui/svelte";
import PickerIcon from "../icons/PickerIcon.svelte";
import ColorPickerSlider from "./ColorPickerSlider.svelte";
import { getColorPickerContext } from "./ColorPicker.svelte";
import ColorPickerSwatchGroup from "./ColorPickerSwatchGroup.svelte";

type Props = {
  swatches?: string[] | undefined;
  contentClass?: string | undefined;
};

let {
  swatches,
  contentClass,
}: Props = $props();

const ctx = getColorPickerContext();

const HAS_EYEDROPPER = "EyeDropper" in window;

</script>


<ColorPicker.Positioner>
  <ColorPicker.Content class={contentClass}>
    <ColorPicker.Area class="h-24">
      <ColorPicker.AreaBackground class="cursor-crosshair size-full rounded-md outline outline-on-surface"/>
      <ColorPicker.AreaThumb class="cursor-crosshair rounded-full size-4 preset-outline-contrast" />
    </ColorPicker.Area>
    <div class="flex space-x-2">
      {#if HAS_EYEDROPPER}
        <ColorPicker.EyeDropperTrigger
          class="size-8 flex justify-center items-center clickable-fade rounded-md outline outline-on-surface"
        >
          <PickerIcon/>
        </ColorPicker.EyeDropperTrigger>
      {/if}
      <div class="flex-1 flex flex-col py-1
        { ctx().type === "any" ? "justify-between" : "justify-center"}
        { !HAS_EYEDROPPER ? "gap-y-1.5" : "" }
      ">
        <ColorPickerSlider channel="hue"/>
        {#if ctx().type === "any"}
          <ColorPickerSlider channel="alpha" transparencyGrid/>
        {/if}
      </div>
    </div>
    <ColorPicker.ChannelInput channel="hex"
      class="p-1 rounded-md outline outline-on-surface w-full"
    />
    <ColorPickerSwatchGroup {swatches}/>
    {#if ctx().errorMsg}
      <p class="bg-on-surface text-surface text-xs rounded-md p-1">{ctx().errorMsg}</p>
    {/if}
  </ColorPicker.Content>
</ColorPicker.Positioner>
<ColorPicker.HiddenInput />

<style>
@reference "$app.css";

:global {
  @layer components {
    [data-scope="color-picker"][data-part="content"] {
      @apply z-1 preset-accent preset-surface flex flex-col wrap-break-word gap-y-3 w-48 p-3 rounded-md outline outline-on-surface;
    }
  }
}
</style>