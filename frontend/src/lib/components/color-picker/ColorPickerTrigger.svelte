<script lang="ts">
import { ColorPicker } from "@ark-ui/svelte";
import type { ComponentProps } from 'svelte';
import { getColorPickerContext } from "./ColorPickerRoot.svelte";

type Props = ComponentProps<typeof ColorPicker.Trigger>;

let {
  children,
  ...rest
}: Props = $props();

const ctx = getColorPickerContext();

</script>

<ColorPicker.Label hidden>{@render children?.()}</ColorPicker.Label>
<ColorPicker.Trigger class="flex items-center p-2 gap-x-1 clickable-overlay-primary rounded-full" {...rest}>
  <div class="rounded-full relative outline outline-on-surface">
    <ColorPicker.TransparencyGrid hidden={ctx().type !== "any"} class="rounded-full"/>
    <ColorPicker.Swatch value={ctx().value?.raw}
      class="relative size-6 rounded-full"
    ></ColorPicker.Swatch>
  </div>

  {@render children?.()}
</ColorPicker.Trigger>