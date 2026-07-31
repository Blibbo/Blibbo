<script lang="ts">
import { Menu } from "@ark-ui/svelte";
import type { ComponentProps } from "svelte";
import "./menu.css";

type Props = ComponentProps<typeof Menu.Root>;

let {
  children,
  loopFocus = true,
  closeOnSelect = false,
  ...rest
}: Props = $props();

</script>

<Menu.Root {loopFocus} {closeOnSelect} {...rest}>
  {@render children?.()}
</Menu.Root>