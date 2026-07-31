<script lang="ts">
import type { ComponentProps, Snippet } from "svelte";
import { Dialog } from "@ark-ui/svelte";
import "./dialog.css";

type Props = {
  children: Snippet;
} & ComponentProps<typeof Dialog.Root>;

let {
  children,
  ...rest
}: Props = $props();

</script>

<Dialog.Root {...rest}>
  {@render children?.()}
</Dialog.Root>
