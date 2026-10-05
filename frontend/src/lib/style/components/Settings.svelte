<script lang="ts">
import ColorPicker from "$lib/components/color-picker/ColorPicker.svelte";
import { Dialog } from "$lib/components/dialog";
import { getStyleContext } from "../main.svelte";
import AccentPicker from "./AccentPicker.svelte";
import ThemePreferencePicker from "./ThemePreferencePicker.svelte";

const manager = getStyleContext();

let advanced = $state(false);

</script>

<Dialog>
  <Dialog.Trigger icon="cog"/>
  <Dialog.Content class={advanced ? "w-80 xs:w-96 h-72" : "w-60"}>
    <Dialog.Title class="preset-title">Settings</Dialog.Title>

    <ThemePreferencePicker/>

    {#if advanced}
      <AccentPicker bind:accent={manager.runtime.accent}/>
      <AccentPicker bind:accent={manager.runtime.accent2} kind=accent2/>
      
      <ColorPicker label="On light" type="readable-on-light" bind:value={manager.runtime.onLight}/>
      <ColorPicker label="On dark" type="readable-on-dark" bind:value={manager.runtime.onDark}/>

      <button class="clickable-fade text-primary-readable-on-surface" onclick={()=>manager.reset()}>Reset style</button>
    {:else}
      <AccentPicker noSwitch bind:accent={manager.runtime.accent}/>
      <button class="clickable-fade text-primary-readable-on-surface" onclick={()=>advanced=true}>Advanced</button>
    {/if}

  </Dialog.Content>
</Dialog>

