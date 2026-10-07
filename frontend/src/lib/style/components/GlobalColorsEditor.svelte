<script lang="ts">
  import ColorPicker from "$lib/components/color-picker/ColorPicker.svelte";
  import { getStyleContext } from "../main";
  import AccentPicker from "./AccentPicker.svelte";
const manager = getStyleContext();

</script>

<h3 class="preset-title text-base">Global colors</h3>
<div class="preset-outline-primary p-1.5 rounded-md space-y-1">
  <AccentPicker bind:accent={manager.runtime.accent}/>
  <AccentPicker bind:accent={manager.runtime.accent2} kind=accent2/>
  
  <ColorPicker lazyMount unmountOnExit
    label="On light"
    type="readable-on-light"
    bind:value={manager.runtime.onLight}
  />
  
  <ColorPicker lazyMount unmountOnExit
    label="On dark"
    type="readable-on-dark"
    bind:value={manager.runtime.onDark}
  />

</div>