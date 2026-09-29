<script lang="ts">
import type { ComponentProps } from "svelte";
import ChevronDown from "virtual:icons/majesticons/chevron-down";

type Props = ComponentProps<typeof ChevronDown>;

let {
  children,
  ...rest
}: Props = $props();

</script>

<ChevronDown {...rest}>
  {@render children?.()}
</ChevronDown>
