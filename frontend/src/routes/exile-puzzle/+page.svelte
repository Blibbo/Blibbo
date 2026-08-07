<script lang="ts">
  import MainLayout from "$lib/components/MainLayout.svelte";

  const getSequenceFromIndex = [ 1, 2, 3, 8, 0, 4, 7, 6, 5 ] as const;
  const squareCount = 9;

  let getIndexFromSequence = Array<number>(squareCount);
  let squares: Array<{sequence: number; active: boolean}> = [];

  const maxIndex = squareCount - 1;

  for(let i = 0; i < squareCount; i++){
    squares.push({
      "sequence": getSequenceFromIndex[i]!,
      "active": false
    });
    getIndexFromSequence[getSequenceFromIndex[i]!] = i;
  }

  const classDisabled = "transition-colors duration-1000 bg-on-page";
  const classEnabled  = "transition-colors duration-1000 bg-accent-unlike-page";

  
  // const classDisabled = "transition-colors duration-1000 bg-red-500";
  // const classEnabled  = "transition-colors duration-1000 bg-red-500";

  let showVasta = false;

  function clicked(index: number) {
    if(index === getIndexFromSequence[0]) return;

    const seq = squares[index]!.sequence;
    const seqPrev = seq - 1 === 0 ? maxIndex : seq - 1;
    const seqNext = seq === maxIndex ? 1 : seq + 1;

    const iPrev = getIndexFromSequence[seqPrev]!;
    const iNext = getIndexFromSequence[seqNext]!;

    const involvedIndexes = [
      iPrev,
      index,
      iNext
    ]

    involvedIndexes.forEach(i => {
      squares[i]!.active = !squares[i]!.active
    });

    let allActive = true;
    squares.forEach(square => {
      if(!square.active && square.sequence != 0) allActive = false;
    })

    if(allActive){
      showVasta = true;
    } else {
      showVasta = false;
    }
  }

</script>

<MainLayout>
  <main>
    
    <div class="flex justify-center py-4">
      <!-- relative is required for after:w-full to work -->
      <div
        class="relative grid grid-cols-3 gap-2 md:gap-4 p-4
          after:absolute after:w-full after:h-full after:pointer-events-none after:transition-opacity after:duration-2000
          after:bg-[url('/images/gigavasta.png')] after:bg-cover after:opacity-0
          *:w-12 *:h-12 *:md:w-24 *:md:h-24 *:rounded-full
        "
        class:after:opacity-0={!showVasta}
      >
        {#each squares as square, i}
          <button
            class={getSequenceFromIndex[i] === 0? '' : square.active ? classEnabled : classDisabled}
            on:click={() => clicked(i)}
            title=""
          ></button>
        {/each}
      </div>
    </div>

  </main>
</MainLayout>