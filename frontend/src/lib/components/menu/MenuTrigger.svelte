<script lang="ts">
import { Menu } from "@ark-ui/svelte";
import type { ComponentProps } from "svelte";
import ChevronDown from "../icons/ChevronDown.svelte";

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

<style>
@reference "$app.css";

:global {
  [data-scope="menu"][data-part="indicator"] {
    @apply transition-transform duration-200 ease-out data-[state=open]:rotate-180;
  }

  @layer components {
    [data-scope="menu"][data-part="trigger"] {
      @apply preset-windicator;
    }

    [data-scope="menu"]:is([data-part="context-trigger"], [data-part="trigger"]) {
      @apply clickable-fade-primary rounded-md p-1;
    }
  }
}

</style>