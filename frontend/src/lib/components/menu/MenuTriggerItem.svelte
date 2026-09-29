<script lang="ts">
import { Menu } from "@ark-ui/svelte";
import type { ComponentProps } from "svelte";
import ChevronRight from "../icons/ChevronRight.svelte";

type Props = ComponentProps<typeof Menu.TriggerItem>;

let {
  children,
  ...rest
}: Props = $props();

</script>

<Menu.TriggerItem {...rest}>
  {@render children?.()}
  <Menu.Context>
    {#snippet render(api)}
      <ChevronRight class="duration-200 ease-out {api().open ? "rotate-180" : ""}"/>
    {/snippet}
  </Menu.Context>
</Menu.TriggerItem>

<style>
@reference "$app.css";

@layer components {
  :global([data-scope="menu"][data-part="trigger-item"]) {
    @apply preset-menu-item flex justify-between items-center;
  }
}
</style>