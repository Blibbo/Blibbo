<script lang="ts">
import "$app.css";
import Style from "$lib/style/components/Style.svelte";
    import ThemePreferencePicker from "$lib/style/components/ThemePreferencePicker.svelte";
import { DEFAULT_PRESET } from "../lib/style/config";

let { children } = $props();

</script>

<Style
  persistKey="main"
  defaultStyle={DEFAULT_PRESET}
>
  {@render children?.()}
</Style>

