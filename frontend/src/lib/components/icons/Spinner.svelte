<script lang="ts">
import type { ComponentProps } from "svelte";
import Spinner from "virtual:icons/gg/spinner";

type Props = ComponentProps<typeof Spinner>;

let {
  class: className,
  children,
  ...rest
}: Props = $props();
</script>

<Spinner class="animate-spin {className}" {...rest}>
  {@render children?.()}
</Spinner>