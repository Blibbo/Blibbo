import { ColorPicker as Ark } from "@ark-ui/svelte";
import ColorPickerRoot from "./ColorPickerRoot.svelte";
import ColorPickerContent from "./ColorPickerContent.svelte";
import ColorPickerTrigger from "./ColorPickerTrigger.svelte";

export const ColorPicker = Object.assign(ColorPickerRoot, {
  Content: ColorPickerContent,
  Trigger: ColorPickerTrigger,
});
