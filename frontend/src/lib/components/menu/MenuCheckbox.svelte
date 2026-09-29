<script lang="ts">
import { Menu } from "@ark-ui/svelte";
import type { ComponentProps } from "svelte";
import CheckIcon from "../icons/CheckIcon.svelte";

type Props = ComponentProps<typeof Menu.CheckboxItem>;

let {
  children,
  ...rest
}: Props = $props();

</script>

<Menu.CheckboxItem {...rest}>
  <Menu.ItemText>{@render children?.()}</Menu.ItemText>
  <Menu.ItemIndicator hidden={false}>
    <CheckIcon/>
  </Menu.ItemIndicator>
</Menu.CheckboxItem>

<style>
@reference "$app.css";

@layer components {
  :global([data-scope="menu"][data-part="item"][data-type="checkbox"]) {
    @apply preset-menu-checkable-item;
  }
}

</style>