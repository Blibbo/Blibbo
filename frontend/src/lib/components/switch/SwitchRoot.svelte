<script lang="ts">
import { Switch } from "@ark-ui/svelte";
import type { ComponentProps } from "svelte";
import "./switch.css";

type Props = ComponentProps<typeof Switch.Root>;

let {
  children,
  ...rest
}: Props = $props();

</script>

<!-- bg-page data-[state=unchecked]:bg-on-page -->
<Switch.Root
  class="block w-8 p-0.5 rounded-full
    bg-accent data-[state=unchecked]:opacity-50
  " {...rest}>
  <Switch.Control class="block">
    <!-- bg-accent-unlike-page -->
    <Switch.Thumb class="block size-4 rounded-full
      data-[state=checked]:translate-x-3 transition-transform
      bg-page
    "/>
  </Switch.Control>
  <Switch.Label>{@render children?.()}</Switch.Label>
  <Switch.HiddenInput/>
</Switch.Root>