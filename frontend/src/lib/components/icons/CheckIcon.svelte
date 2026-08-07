
<script lang="ts">
import type { ComponentProps } from "svelte";
import Check from "virtual:icons/material-symbols/check-rounded";

type Props = ComponentProps<typeof Check>;

let {
  children,
  ...rest
}: Props = $props();

</script>

<Check {...rest}>
  {@render children?.()}
</Check>
