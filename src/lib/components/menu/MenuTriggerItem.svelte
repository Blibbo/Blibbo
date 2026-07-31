<script lang="ts">
import { Menu } from "@ark-ui/svelte";
import type { ComponentProps } from "svelte";
import ChevronDown from "virtual:icons/majesticons/chevron-right";

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
      <ChevronDown class="submenu-icon {api().open ? "submenu-icon-active" : ""}"/>
    {/snippet}
  </Menu.Context>
</Menu.TriggerItem>