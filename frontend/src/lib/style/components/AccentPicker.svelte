<script lang="ts">
import Select from "$lib/components/Select.svelte";
import { Switch } from "$lib/components/switch";
import typia from "typia";
import { dynamicAccent, dynamicAccent2, staticAccent, type Accent, type Accent2 } from "../accent";
import { type DynamicAccent2Value, type DynamicAccentValue } from "../accent-variables";
import ColorPicker from "$lib/components/color-picker/ColorPicker.svelte";
import {ColorPicker as ArkColorPicker} from "@ark-ui/svelte";
import { getStyleContext } from "../main";
  import { ACCENTS } from "../config";

type Props = {
  noSwitch?: boolean | undefined;
  class?: string | undefined;
} & ({
  kind?: "accent" | undefined;
  accent: Accent;
} | {
  kind: "accent2";
  accent: Accent2;
});

let {
  accent = $bindable(),
  noSwitch,
  kind,
  class: className,
}: Props = $props();

let dynamicAccents = typia.misc.literals<DynamicAccentValue>();
let dynamicAccents2 = typia.misc.literals<DynamicAccent2Value>();

const manager = getStyleContext();

</script>

{#snippet picker()}
  {#if accent.kind === "static"}
    <ColorPicker lazyMount unmountOnExit
      type="any"
      bind:value={accent.value}
      swatches={Object.values(ACCENTS)}
      labelClass="capitalize"
      label={kind ?? "Accent"}
    />
  {:else}
    <div class="flex items-end">
      <ArkColorPicker.Root aria-hidden>
        <div class="preset-swatch m-1 relative">
          <ArkColorPicker.TransparencyGrid class="rounded-full"/>
          <ArkColorPicker.Swatch value={manager.variables[accent.value]?.raw}
            class="rounded-full size-full"></ArkColorPicker.Swatch>
        </div>
      </ArkColorPicker.Root>
      
      <Select lazyMount unmountOnExit noClear
        label={kind ?? "Accent"}
        labelClass="capitalize -translate-x-[2.29em] block"
        items={kind === "accent2" ? dynamicAccents2 : dynamicAccents}
        onValueChange={v=>{
          accent = kind === "accent2"
            ? dynamicAccent2(v.value[0] as DynamicAccent2Value)
            : dynamicAccent(v.value[0] as DynamicAccentValue);
        }}
        value={[accent.value]}
      />
    </div>
  {/if}
{/snippet}

{#if noSwitch}
  {@render picker()}
{:else}
  <div class="accent-picker {className}">
    {@render picker()}

    <Switch class="flex-row-reverse mb-1.5" checked={accent.kind === "dynamic"}
      onCheckedChange={details => {
        const dynamic = details.checked;

        if(dynamic) {
          accent = dynamicAccent("OnPage");
        } else {
          accent = staticAccent(DEFAULT_ACCENT);
        }
      }}
    >
      Dynamic
    </Switch>
  </div>
{/if}

<style>
@reference "$app.css";

@layer components {
  .accent-picker {
    @apply flex gap-x-2 justify-between items-end;
  }
}
</style>