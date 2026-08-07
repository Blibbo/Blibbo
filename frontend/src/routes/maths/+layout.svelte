<script lang="ts">
import MainLayout from "$lib/components/MainLayout.svelte";
let {children} = $props();
</script>


<MainLayout>
  {#snippet sidePanel()}
    ciao
  {/snippet}

  {@render children?.()}
</MainLayout>