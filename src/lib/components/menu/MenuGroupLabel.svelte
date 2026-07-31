<script lang="ts">
import { Menu } from "@ark-ui/svelte";
import type { ComponentProps } from "svelte";

type Props = ComponentProps<typeof Menu.ItemGroupLabel>;

let {
  children,
  class: labelClasses,
  ...rest
}: Props = $props();

</script>

<div class="label-container {labelClasses ?? ""}">
  <Menu.ItemGroupLabel {...rest}>
    {@render children?.()}
  </Menu.ItemGroupLabel>
</div>
