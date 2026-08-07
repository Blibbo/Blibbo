<script lang="ts">
  import MainLayout from "$lib/components/MainLayout.svelte";

  import Card from "$lib/components/Card.svelte";

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