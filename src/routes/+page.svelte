<script lang="ts">
  import { invoke } from "@tauri-apps/api/core";
  import { IS_MOBILE_APP, IS_DESKTOP_APP } from "$lib/platform";
  import MainLayout from "$lib/components/MainLayout.svelte";

  let name = $state("");
  let greetMsg = $state("");


  async function greet(event: Event) {
    event.preventDefault();
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    if(IS_DESKTOP_APP){
      greetMsg = await invoke("greet", { name });
    } else {
      greetMsg = "Tauri backend disabled";
    }

  }







  // backend
  import { api } from '$lib/api';
  // ((async ()=>{
  //   const health = await api<{ status: string }>('/health');
  //   console.log(health);
  // })());




  // the actual site...
  import Card from "$lib/components/Card.svelte";
    import { getStyleContext } from "../lib/style/main.svelte";
    import { persistStyle } from "../lib/style/persist";

  const cards = [
    {
      title: "Math",
      description: "The legendary math program",
      href: "/maths"
    },
    {
      title: "Path of exile puzzle study",
      description: "I couldn't open that one door",
      href: "/exile-puzzle"
    },
    {
      title: "Nested ordered pairs solver",
      description: "Proof of concept of the math substitution program",
      href: "/pairs"
    },
    {
      title: "Style test",
      description: "Become a meteorologist",
      href: "/style-test",
    }
  ]

</script>

<MainLayout hideHome>
  <!-- <form class="row" onsubmit={greet}>
    <input id="greet-input" placeholder="Enter a name..." bind:value={name} />
    <button type="submit">Greet</button>
  </form> -->

  <!-- <div class="mb-10 w-full"> -->
    <div class="w-full flex justify-center my-4 md:my-10">
      <h1 class="font-[brush-script] text-9xl select-none">Blibbo</h1>
    </div>

    <div class="w-full mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-4 md:space-x-4">
      {#each cards as card}
        <Card {...card} />
      {/each}
    </div>
  <!-- </div> -->

</MainLayout>