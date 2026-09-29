<script lang="ts">
import { Menu } from "@ark-ui/svelte";
import type { ComponentProps } from "svelte";

type Props = ComponentProps<typeof Menu.Root>;

let {
  children,
  loopFocus = true,
  closeOnSelect = true,
  ...rest
}: Props = $props();

</script>

<Menu.Root {loopFocus} {closeOnSelect} {...rest}>
  {@render children?.()}
</Menu.Root>

<style>
@reference "$app.css";

@layer components {

  :global {
    [data-scope="menu"][data-part="item"] {
      @apply preset-menu-item;
    }

    [data-scope="menu"][data-part="separator"] {
      @apply preset-menu-separator;
    }
  }
}
</style>