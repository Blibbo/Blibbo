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
  <Menu.ItemIndicator>
    <CheckIcon>ciao</CheckIcon>
  </Menu.ItemIndicator>
  <Menu.ItemText>{@render children?.()}</Menu.ItemText>
</Menu.RadioItem>