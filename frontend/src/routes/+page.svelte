<script lang="ts">
  import MainLayout from "$lib/components/MainLayout.svelte";

  import Card from "$lib/components/Card.svelte";
  import { GREEN_ACCENT } from "$lib/style/config";
  import { Greet } from "../../bindings/changeme/greetservice";

  const cards = [
    {
      title: "Math",
      description: "The legendary math program",
      href: "/maths"
    },
    {
      title: "Config",
      description: "My machine's config",
      href: "/config"
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
  ];

  Greet("ciaoooo").then(value=>{
    console.log(value)
  });

</script>

<MainLayout hideHome>

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