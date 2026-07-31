<script lang="ts">
import OpenSidePanel from "virtual:icons/carbon/side-panel-open-filled"
import CloseSidePanel from "virtual:icons/carbon/side-panel-close-filled"
import Close from 'virtual:icons/material-symbols/close-rounded';

import NextTheme from "$lib/style/components/NextTheme.svelte";
import Settings from "$lib/style/components/Settings.svelte";
import type { Snippet } from "svelte";
import Anchor from "$lib/components/Anchor.svelte";

type Props = {
  menu?: Snippet;
  sidePanel?: Snippet;
  children: Snippet;
  hideHome?: boolean;
};

let {
  menu = undefined,
  sidePanel = undefined,
  hideHome,
  children
}: Props = $props();

let sidePanelOpen = $state(false);

</script>

<div class="block min-h-dvh max-w-dvw overflow-clip
  sm:flex
">
  {#if sidePanel && sidePanelOpen}
    <div>
      <div class="preset-topbar-height pointer-events-none hidden sm:block"></div>

      <div class="
        min-h-full min-w-dvw fixed
        sm:min-w-0
        flex
        z-50
      ">
        <div class="preset-accent
          p-1
        ">
          <div class="h-sait"></div>
          {@render sidePanel?.()}
        </div>
        <button
          class="sm:hidden
            flex-1 h-dvh
            preset-blur bg-on-light/overlay
            flex flex-col justify-start items-start text-on-accent
          " title="" onclick={()=>{sidePanelOpen = false;}}>
          <div class="h-sait"></div>
          <div class="preset-interactive p-2 text-2xl">
            <Close/>
          </div>
        </button>
      </div>
    </div>
  {/if}

  <div class="sm:flex-1">
    <div class="preset-accent h-sait"></div>
    <div
      class="
        preset-accent md:flex md:justify-center text-nowrap
        text-md sm:text-xl select-none
        preset-topbar-height
      "
    >
      <!-- either *:*:hover:bg-white/20 or *:*:hover:bg-(--accent-light) -->
      <div
        class="
          preset-page-wrapper px-0 flex justify-between items-center h-full
          *:flex *:items-center *:h-full
          *:*:preset-page *:*:h-full
          *:*:*:px-3 *:*:*:h-full *:*:*:flex *:*:*:items-center *:*:*:overflow-clip *:*:*:preset-accent *:*:*:preset-theme-transition *:*:*:preset-button
        "
      >
        <nav>

          {#if sidePanel}
            <div>
              <button class="preset-interactive" onclick={()=>{sidePanelOpen = !sidePanelOpen}}>
                {#if sidePanelOpen}
                  <CloseSidePanel/>
                {:else}
                  <OpenSidePanel/>
                {/if}
              </button>
            </div>
          {/if}

          {#if !hideHome}
            <div>
              <Anchor href="/"><div class="font-[brush-script] text-3xl sm:text-4xl">Blibbo</div></Anchor>
            </div>
          {/if}
        </nav>
        <nav>
          <!-- <div><div><div>Login</div></div></div> -->
          <!-- <div><div><div>Sign Up</div></div></div> -->
          <div><NextTheme/></div>
          <div><Settings/></div>
        </nav>
      </div>
    </div>
    
    <div class="
      flex justify-center
    ">
      <div class="preset-page-wrapper mb-saib">
        {@render children?.()}
      </div>
    </div>
  </div>
</div>
