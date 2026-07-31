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
  <Menu.ItemIndicator>
    <CheckIcon/>
  </Menu.ItemIndicator>
  <Menu.ItemText>{@render children?.()}</Menu.ItemText>
</Menu.CheckboxItem>