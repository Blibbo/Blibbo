<script lang="ts">
import { Menu, Portal } from "@ark-ui/svelte";
import type { ComponentProps } from "svelte";

type Props = {
  arrow?: boolean | undefined;
  portal?: boolean | undefined;
} & ComponentProps<typeof Menu.Content>;

let {
  children,
  arrow,
  portal = true,
  ...rest
}: Props = $props();

</script>

<Portal disabled={!portal}>
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

<style>
@reference "$app.css";

:global{

  [data-scope="menu"][data-part="arrow-tip"] {
    @apply preset-after outline outline-primary-readable-on-surface;
    @variant after {
      @apply bg-(--arrow-background) origin-left scale-y-185 translate-x-1/2 rotate-45;
    }
  }

  @layer components {
    [data-scope="menu"][data-part="content"] {
      @apply
        preset-menu
        [--arrow-size:--spacing(2)]
        [--arrow-background:var(--surface)]
      ;
    }
  }
}


</style>