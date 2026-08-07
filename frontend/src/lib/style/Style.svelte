<script lang="ts">
import type { StyleConfig } from "./config";
import { type Snippet } from "svelte";
import { getStyleContext, setStyleContext, StyleManager } from "./main.svelte";
import type { HTMLAttributes } from "svelte/elements";
import { STYLE_ROOT } from "../prepaint/shared";
import type { StyleRuntimeInfo } from "./derived";
    import type { ColorVariables } from "./variables";

type Props = {
  persistKey: string;
  defaultStyle: StyleConfig;
  children: Snippet;
} & Partial<HTMLAttributes<HTMLDivElement>>;

const {
  persistKey,
  defaultStyle,
  children,
  ...divProps
}: Props = $props();

const isRoot = (()=>{
  try{
    getStyleContext();
    return false;
  } catch {
    return true;
  }
})();

function initialize(element: HTMLElement): void {
  const manager = new StyleManager({root: element, persistKey, defaultStyle});
  setStyleContext(manager);

  let computedOld: StyleRuntimeInfo | undefined = undefined;
  let variablesOld: ColorVariables | undefined = undefined;
  $effect(()=>{
    manager.runEffects(computedOld, variablesOld);
    computedOld = {...manager.computed};
    variablesOld = {...manager.variables};
  });
}

if(isRoot){
  initialize(STYLE_ROOT);
}

</script>

{#if isRoot}
  {@render children()}
{:else}
  <div
    {@attach initialize}
    { ...divProps }
  >
    {@render children()}
  </div>
{/if}