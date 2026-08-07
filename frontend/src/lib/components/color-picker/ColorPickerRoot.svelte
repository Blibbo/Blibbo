<script module lang="ts">
export type ColorPickerCtxPrimitive = {
  value: ValidColor;
  type: "any";
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

<script lang="ts">
import { ColorPicker, parseColor } from '@ark-ui/svelte/color-picker'
import "./color-picker.css";
import { createContext, type ComponentProps } from 'svelte';
import { opaqueColor, readableOnDark, readableOnLight, validColor, type OpaqueColor, type ReadableOnDark, type ReadableOnLight, type ValidColor } from '../../style/color';

type Props = Partial<ColorPickerCtxPrimitive>
  & Omit<ComponentProps<typeof ColorPicker.Root>, "value">;

let {
  type = "any",
  value = $bindable(validColor("#000")),
  children,
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
    validator: (v: string)=>ValidColor,
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

<ColorPicker.Root {...rest} onValueChange={(details)=>{
  const newValue = details.valueAsString
  updateValue(newValue);
}} value={pickerValue}>
  {@render children?.()}
</ColorPicker.Root>
