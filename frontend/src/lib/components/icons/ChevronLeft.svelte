<script lang="ts">
import type { ComponentProps } from "svelte";
import ChevronLeft from "virtual:icons/majesticons/chevron-left";

type Props = ComponentProps<typeof ChevronLeft>;

let {
  children,
  ...rest
}: Props = $props();

</script>

<ChevronLeft {...rest}>
  {@render children?.()}
</ChevronLeft>
