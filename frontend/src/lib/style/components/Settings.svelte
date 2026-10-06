<script lang="ts">
import { Dialog } from "$lib/components/dialog";
import ChevronLeft from "$lib/components/icons/ChevronLeft.svelte";
import { getStyleContext } from "../main.svelte";
import AccentPicker from "./AccentPicker.svelte";
import GlobalColorsEditor from "./GlobalColorsEditor.svelte";
  import TagsInput from "./TagsInput.svelte";
import ThemeColorsEditor from "./ThemeColorsEditor.svelte";
import ThemePreferencePicker from "./ThemePreferencePicker.svelte";

const manager = getStyleContext();

let advanced = $state(false);

let tagRotation = $derived(manager.runtime.tagRotation ? [...manager.runtime.tagRotation] : undefined);

</script>


<Dialog>
  <Dialog.Trigger icon="cog"/>
  <Dialog.Content class="preset-scrollbar {advanced ? "w-80 xs:w-96 h-[80dvh]" : ""}">
    <Dialog.Title class="preset-title">Settings</Dialog.Title>

    {#if advanced}
      <button class="clickable-fade text-primary-readable-on-surface flex items-center"
        onclick={()=>{advanced = false}}
      >
        <ChevronLeft/>Go back
      </button>
    {/if}

    <ThemePreferencePicker/>

    {#if advanced}

      {#if manager.runtime.preference === "custom"}
        <TagsInput label="Tag rotation"
          value={manager.runtime.tagRotation ? [...manager.runtime.tagRotation] : undefined}
          onValueChange={(v)=>new Set(v.value)}
        />
      {/if}

      <GlobalColorsEditor/>
      
      <ThemeColorsEditor/>

      <button class="clickable-fade text-primary-readable-on-surface" onclick={()=>manager.reset()}>Reset style</button>
    {:else}
      <AccentPicker noSwitch bind:accent={manager.runtime.accent}/>
      <button class="clickable-fade text-primary-readable-on-surface" onclick={()=>advanced=true}>Advanced</button>
    {/if}

  </Dialog.Content>
</Dialog>

