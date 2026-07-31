<script lang="ts">
import { Dialog, Portal } from "@ark-ui/svelte";
import XIcon from "../icons/XIcon.svelte";
import type { ComponentProps } from "svelte";

type Props = ComponentProps<typeof Dialog.Content>;

let {
  children,
  ...rest
}: Props = $props();

</script>

<Portal>
  <Dialog.Backdrop/>
  <Dialog.Positioner>
    <Dialog.Content {...rest}>
      <Dialog.CloseTrigger>
        <XIcon/>
      </Dialog.CloseTrigger>
      {@render children?.()}
    </Dialog.Content>
  </Dialog.Positioner>
</Portal>