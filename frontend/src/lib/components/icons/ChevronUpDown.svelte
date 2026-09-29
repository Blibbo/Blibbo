<script lang="ts">
import type { ComponentProps } from "svelte";
import ChevronUpDown from "virtual:icons/heroicons/chevron-up-down-20-solid";

type Props = ComponentProps<typeof ChevronUpDown>;

let {
  children,
  ...rest
}: Props = $props();

</script>

<ChevronUpDown {...rest}>
  {@render children?.()}
</ChevronUpDown>
