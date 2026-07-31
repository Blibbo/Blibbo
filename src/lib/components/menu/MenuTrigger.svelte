<script lang="ts">
import { Menu } from "@ark-ui/svelte";
import type { ComponentProps } from "svelte";
import ChevronDown from "virtual:icons/majesticons/chevron-down";

type Props = {
  noChevron?: boolean | undefined;
} & ComponentProps<typeof Menu.Trigger>;

let {
  children,
  noChevron,
  ...rest
}: Props = $props();

</script>

<Menu.Trigger {...rest}>
  {@render children?.()}
  {#if !noChevron}
    <Menu.Indicator>
      <ChevronDown />
    </Menu.Indicator>
  {/if}
</Menu.Trigger>
