<script lang="ts">
import MathField from "$lib/components/mathlive/MathField.svelte";
import {expr, parse, serializeLatex } from "@cortex-js/compute-engine";
import type { MathJsonExpression } from "@cortex-js/compute-engine";
import { onMount } from "svelte";
import MainLayout from "$lib/components/MainLayout.svelte";

let input =  $state('\\left ( \\left ( a, b \\right ), c \\right )');
let output = $state('');
let parsingResult = $state('');
let jsonOutput = $state('');

function compile(latexString: string): MathJsonExpression {
  let boxed = parse(latexString); // parse LaTeX → MathJSON AST
  let mathJson = boxed.json;

  if (!(Array.isArray(mathJson))) {
    return mathJson; // atom
  }

  const head = mathJson[0];
  switch(head){
    case "Tuple":
      if(mathJson.length != 3){
        return mathJson;
      }

      // 2-tuple: could be an ordered pair in set theory
      // requirements: parentheses,

      const left = compile(serializeLatex(mathJson[1]));
      const right = compile(serializeLatex(mathJson[2]));

      return ["Set", ["Set", left], ["Set", left, right]];

    default:
      return mathJson;
  }
}


function update(latexInput: string){
  parsingResult = parse(latexInput)?.latex;

  const expression = expr(compile(latexInput));

  output = expression.latex;
  jsonOutput = JSON.stringify(expression.json, null, 2);

}

$effect(() => update(input ?? ""));

onMount(()=>{
  // inputMf!.applyStyle("");
  // inputMf!.placeholderSymbol = 'x'
});

</script>


<MainLayout>
  <div class="flex flex-col *:my-3 text-3xl">
    <MathField
      bind:value={input}
      placeholder={'Insert \\; pair'}
    />
    <!-- <MathField
      bind:value={parsingResult}
      readOnly
    /> -->
    <MathField
      bind:value={output}
      readOnly
    />
    <!-- <pre
      class="text-sm"
      contenteditable="false"
      bind:textContent={jsonOutput}
    ></pre> -->
  </div>

</MainLayout>