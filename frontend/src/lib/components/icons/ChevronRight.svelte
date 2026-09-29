<script lang="ts">
import type { ComponentProps } from "svelte";
import ChevronRight from "virtual:icons/majesticons/chevron-right";

type Props = ComponentProps<typeof ChevronRight>;

let {
  children,
  ...rest
}: Props = $props();

</script>

<ChevronRight {...rest}>
  {@render children?.()}
</ChevronRight>
