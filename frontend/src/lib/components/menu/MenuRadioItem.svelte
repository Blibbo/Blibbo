<script lang="ts">
import { Menu } from "@ark-ui/svelte";
import type { ComponentProps } from "svelte";
import CheckIcon from "../icons/CheckIcon.svelte";

type Props = ComponentProps<typeof Menu.RadioItem>;

let {
  children,
  ...rest
}: Props = $props();

</script>


<Menu.RadioItem {...rest}>
  <Menu.ItemText>{@render children?.()}</Menu.ItemText>
  <Menu.ItemIndicator hidden={false}>
    <CheckIcon>ciao</CheckIcon>
  </Menu.ItemIndicator>
</Menu.RadioItem>

<style>
@reference "$app.css";

@layer components {
  :global([data-scope="menu"][data-part="item"][data-type="radio"]) {
    @apply preset-menu-checkable-item;
  }
}

</style>