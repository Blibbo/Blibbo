<script lang="ts">
import { ColorPicker } from "$lib/components/color-picker";
import Select from "$lib/components/Select.svelte";
import { Switch } from "$lib/components/switch";
import typia from "typia";
import { dynamicAccent, staticAccent, type Accent, type Accent2 } from "../accent";
import { type DynamicAccent2Value, type DynamicAccentValue } from "../accent-variables";
import { ACCENT, BLUE_ACCENT, GREEN_ACCENT, JENNI_ACCENT, ORANGE_ACCENT, YELLOW_ACCENT } from "../config";

type Props = {
  kind?: "accent" | undefined;
  accent: Accent;
} | {
  kind: "accent2";
  accent: Accent2;
};

let {
  accent = $bindable(),
  kind,
}: Props = $props();

let dynamicAccents = typia.misc.literals<DynamicAccentValue>();
let dynamicAccents2 = typia.misc.literals<DynamicAccent2Value>();

</script>

<div class="flex gap-x-2 justify-between">
  {#if accent.kind === "static"}
    <ColorPicker type="any" bind:value={accent.value}>
      <ColorPicker.Trigger class="capitalize">{kind ?? "Accent"}</ColorPicker.Trigger>
      <ColorPicker.Content swatches={[ACCENT, JENNI_ACCENT, BLUE_ACCENT, GREEN_ACCENT, ORANGE_ACCENT, YELLOW_ACCENT]}/>
    </ColorPicker>
  {:else}
    <Select lazyMount unmountOnExit noClear label="Dynamic accent" labelClass="hidden"
      items={kind === "accent2" ? dynamicAccents2 : dynamicAccents}
      onValueChange={v=>{
        accent = dynamicAccent(v.value[0] as DynamicAccentValue);
      }}
      value={[accent.value]}
    />
  {/if}

  <Switch class="flex-row-reverse" checked={accent.kind === "dynamic"}
    onCheckedChange={details => {
      const dynamic = details.checked;

      if(dynamic) {
        accent = dynamicAccent("OnPage");
      } else {
        accent = staticAccent(ACCENT);
      }
    }}
  >
    Dynamic
  </Switch>
</div>