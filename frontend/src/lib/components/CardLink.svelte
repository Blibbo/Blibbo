<script lang="ts">

import type { RouteId } from "$app/types";
import Anchor from "./Anchor.svelte";

type Props = {
  title: string;
  description?: string;
  href: RouteId;
  hidden?: boolean | undefined;
};

let {
  title,
  description,
  href,
  hidden
}: Props = $props();

</script>

{#if !hidden}
  <Anchor {href}
    class="
      select-none

      rounded-2xl p-4

      preset-interactive-card
    "
  >
    <h2 class="text-xl text-center my-4 font-semibold">{title}</h2>
    <p class="text-accent-readable-on-page text-center preset-theme-transition">{description}</p>
  </Anchor>
{/if}