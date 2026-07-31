<script lang="ts">
import type { ComponentProps } from "svelte";
import Pipette from "virtual:icons/gg/color-picker";

type Props = ComponentProps<typeof Pipette>;

let {
  children,
  ...rest
}: Props = $props();

</script>

<Pipette {...rest}>
  {@render children?.()}
</Pipette>