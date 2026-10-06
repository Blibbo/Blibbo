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
  <Dialog.Backdrop class="fixed inset-0 preset-blur bg-on-light/overlay z-"/>
  <Dialog.Positioner class="fixed inset-0 flex justify-center items-center z-">
    <Dialog.Content {...rest}>
      <Dialog.CloseTrigger class="absolute top-3 right-3 clickable-fade">
        <XIcon/>
      </Dialog.CloseTrigger>
      {@render children?.()}
    </Dialog.Content>
  </Dialog.Positioner>
</Portal>

<style>
@reference "$app.css";

@layer components {
  :global([data-scope="dialog"][data-part="content"]) {
    @apply
      preset-page preset-surface
      outline outline-primary-readable-on-surface
      relative p-3 rounded-xl space-y-2
      overflow-scroll
    ;
  }
}
</style>