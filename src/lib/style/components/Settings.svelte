<script lang="ts">
import { Dialog } from "$lib/components/dialog";
import { ColorPicker } from "../../components/color-picker";
import { ACCENT, BLUE_ACCENT, GREEN_ACCENT, JENNI_ACCENT, ORANGE_ACCENT, YELLOW_ACCENT } from "../config";
import { getStyleContext } from "../main.svelte";
import NextTheme from "./NextTheme.svelte";

const manager = getStyleContext();

</script>

<Dialog>
  <Dialog.Trigger icon="cog"/>
  <Dialog.Content>
    <Dialog.Title class="preset-title">Settings</Dialog.Title>
    <div>
      <NextTheme class="hover:preset-next-theme focus-visible:preset-next-theme active:preset-next-theme focus-visible:outline-none preset-theme-transition p-2 rounded-lg">
        <p>Next theme</p>
      </NextTheme>
    </div>

    {#if manager.runtime.accent.kind === "static"}
      <ColorPicker type="any" bind:value={manager.runtime.accent.value}>
        <ColorPicker.Trigger>Accent Color</ColorPicker.Trigger>
        <ColorPicker.Content swatches={[ACCENT, JENNI_ACCENT, BLUE_ACCENT, GREEN_ACCENT, ORANGE_ACCENT, YELLOW_ACCENT]}/>
      </ColorPicker>
    {/if}
  </Dialog.Content>
</Dialog>

