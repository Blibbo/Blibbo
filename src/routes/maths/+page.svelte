<script lang="ts">
import BlibboField from "$lib/components/blibbo/BlibboField.svelte";
import { type BlibboFieldState, newBlibboFieldState } from "$lib/components/blibbo/blibbo";
import MathField from "~/src/lib/components/mathlive/MathField.svelte";

let field: BlibboFieldState = $state(newBlibboFieldState());

let component: any = $state()

let value = $state("");
  

</script>

<div class="flex flex-col *:my-3
  w-full px-1 sm:px-3 md:px-0
  text-2xl sm:text-4xl
">
  <BlibboField
    bind:this={component}
    bind:field
    class="w-full"
    editorType=math
    onshiftenter={()=>{console.log("Shift enter.")}}
    onemptybackspace={()=>{console.log("Empty backspace.")}}
  />

</div>
