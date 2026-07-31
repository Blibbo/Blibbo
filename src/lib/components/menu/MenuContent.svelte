<script lang="ts">
import { Menu, Portal } from "@ark-ui/svelte";
import type { ComponentProps } from "svelte";

type Props = {
  arrow?: boolean | undefined;
} & ComponentProps<typeof Menu.Content>;

let {
  children,
  arrow,
  ...rest
}: Props = $props();

</script>

<Portal>
  <Menu.Positioner>
    <Menu.Content {...rest}>
      {#if arrow}
        <Menu.Arrow>
          <Menu.ArrowTip/>
        </Menu.Arrow>
      {/if}
      {@render children?.()}
    </Menu.Content>
  </Menu.Positioner>
</Portal>
