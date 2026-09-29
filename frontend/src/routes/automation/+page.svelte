<script lang="ts">
import MainLayout from "$lib/components/MainLayout.svelte";
import { Msys2 } from "$bindings/blibbo/automation/msys2";
import Spinner from "$lib/components/icons/Spinner.svelte";

let installing = $state(false);
let error = $state<string | null>(null);

async function handleInstall() {
  installing = true;
  error = null;
  try {
    await Msys2.Install();
  } catch (e) {
    error = e instanceof Error ? e.message : String(e);
  } finally {
    installing = false;
  }
}
</script>

<MainLayout>
  <button
    class="px-4 py-2 rounded preset-accent clickable-fade disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
    disabled={installing}
    onclick={handleInstall}
  >
    {#if installing}
      <Spinner/>
      Installing...
    {:else}
      Install
    {/if}
  </button>

  {#if error}
    <p class="text-red-600 text-sm mt-2">{error}</p>
  {/if}
</MainLayout>