<script lang="ts">
import { Dialog } from "$lib/components/dialog";
import Select from "$lib/components/Select.svelte";
import typia from "typia";
import { getStyleContext } from "../main.svelte";
import NextTheme from "./NextTheme.svelte";
import { type StyleRuntime } from "../mutation";
import AccentEditor from "./AccentEditor.svelte";

const manager = getStyleContext();

let preferences = typia.misc.literals<StyleRuntime["preference"]>();

</script>

<Dialog>
  <Dialog.Trigger icon="cog"/>
  <Dialog.Content class="w-80 xs:w-96">
    <Dialog.Title class="preset-title">Settings</Dialog.Title>

    <NextTheme class="clickable-next-theme p-2 rounded-lg">
      <p>Next theme</p>
    </NextTheme>

    <Select lazyMount unmountOnExit noClear
      label="Theme preference"
      onValueChange={v =>
        manager.preference = v.value[0] as StyleRuntime["preference"]
      }
      value={[manager.preference]}
      items={preferences}
    />

    <AccentEditor bind:accent={manager.runtime.accent}/>
    <AccentEditor bind:accent={manager.runtime.accent2} kind=accent2/>

    <button class="clickable-fade text-primary-readable-on-surface" onclick={()=>manager.reset()}>Reset style</button>
    
  </Dialog.Content>
</Dialog>

