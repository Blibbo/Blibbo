<script module lang="ts">
export type ColorPickerCtxPrimitive = {
  value: ValidColor;
  type?: "any" | undefined;
} | {
  value: OpaqueColor;
  type: "opaque";
} | {
  value: ReadableOnLight;
  type: "readable-on-light";
} | {
  value: ReadableOnDark;
  type: "readable-on-dark";
};

export type ColorPickerCtx = ColorPickerCtxPrimitive & {
  errorMsg?: string | undefined;
};

export const [
  getColorPickerContext,
  setColorPickerContext
] = createContext<()=>ColorPickerCtx>();
</script>

<script lang="ts" generics="T extends ColorPickerCtxPrimitive">
import { ColorPicker, parseColor } from '@ark-ui/svelte/color-picker'
import { createContext, type ComponentProps } from 'svelte';
import { opaqueColor, readableOnDark, readableOnLight, validColor, type OpaqueColor, type ReadableOnDark, type ReadableOnLight, type ValidColor } from '../../style/color';
import ColorPickerTrigger from './ColorPickerTrigger.svelte';
import ColorPickerContent from './ColorPickerContent.svelte';

type Props = T
  & Omit<ComponentProps<typeof ColorPicker.Root>, "value" | "children" | "onValueChange">
  & ComponentProps<typeof ColorPickerTrigger>
  & ComponentProps<typeof ColorPickerContent>
  & { onValueChange?: ((value: T["value"])=>void) | undefined }
  ;

let {
  type = "any",
  value = $bindable(),
  onValueChange,
  label,
  inlineLabel,
  positioning = {placement: "bottom-start"},
  swatches,
  labelClass,
  triggerClass,
  contentClass,
  ...rest
}: Props = $props();

let pickerValue = $derived(parseColor(value.d().toHex()));

let errorMsg: ColorPickerCtx["errorMsg"] = $state(undefined);

setColorPickerContext(()=>{return {
  type,
  value,
  errorMsg
} as ColorPickerCtx});

function updateValue(newValue: string) {

  const wrapError = (
    validator: (v: string)=>T["value"],
    msg: string
  ) => {
    try {
      value = validator(newValue);
      errorMsg = undefined;
    } catch {
      errorMsg = msg;
    }
  }

  switch(type){
    case "any":
      wrapError(validColor, "Input a valid color!");
      break;
    case "opaque":
      wrapError(opaqueColor, "Input an opaque color!");
      break;
    case "readable-on-dark":
      wrapError(readableOnDark, "Input a color readable on a dark background.");
      break;
    case "readable-on-light":
      wrapError(readableOnLight, "Input a color readable on a light background.");
      break;
  }
}

</script>

<ColorPicker.Root {positioning} {...rest} onValueChange={(details)=>{
  const newValue = details.valueAsString
  updateValue(newValue);
  onValueChange?.(value);
}} value={pickerValue}>
  <ColorPickerTrigger {label} {inlineLabel} {triggerClass} {labelClass}/>
  <ColorPickerContent {swatches} {contentClass}/>
</ColorPicker.Root>
