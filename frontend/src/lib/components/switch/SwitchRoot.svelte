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

<!-- bg-surface data-[state=unchecked]:bg-on-surface -->
<Switch.Root {...rest}>
  <Switch.Control
    class="block w-8 h-fit p-0.5 rounded-full bg-primary-readable-on-surface data-[state=unchecked]:opacity-50"
  >
    <Switch.Thumb class="block size-4 rounded-full
      data-[state=checked]:translate-x-3 transition-transform
      bg-surface data-[state=unchecked]:opacity-25
    "/>
  </Switch.Control>
  <Switch.Label class="">{@render children?.()}</Switch.Label>
  <Switch.HiddenInput/>
</Switch.Root>