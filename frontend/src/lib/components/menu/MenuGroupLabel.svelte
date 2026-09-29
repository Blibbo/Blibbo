<script lang="ts">
import { Menu } from "@ark-ui/svelte";
import type { ComponentProps } from "svelte";

type Props = ComponentProps<typeof Menu.ItemGroupLabel>;

let {
  children,
  class: className,
  ...rest
}: Props = $props();

</script>

<div class={className}>
  <Menu.ItemGroupLabel {...rest}>
    {@render children?.()}
  </Menu.ItemGroupLabel>
</div>

<style>
@reference "$app.css";

@layer components {
  div {
    @apply preset-menu-label-container;
  }
}

</style>