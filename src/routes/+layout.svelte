<script lang="ts">
import "../app.css";
import "$lib/buildlogic";
import Style from "$lib/style/Style.svelte";
import { DEFAULT_PRESET, STYLE_PRESETS } from "../lib/style/config";

let { children } = $props();

</script>

<Style
  persistKey="main"
  defaultStyle={STYLE_PRESETS.toggleable}
>
  {@render children?.()}
</Style>

