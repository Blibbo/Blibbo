<script>
import Anchor from "./Anchor.svelte";

let {
  title = "",
  description = "",
  href = "#"
} = $props();

</script>

<Anchor
  class="
    select-none

    rounded-2xl p-4

    preset-interactive-card
  "
  href={href}
>
  <h2 class="text-xl text-center my-4 font-semibold">{title}</h2>
  <p class="text-accent-readable-on-page text-center preset-theme-transition">{description}</p>
</Anchor>