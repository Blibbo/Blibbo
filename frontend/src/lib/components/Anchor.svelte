
<script lang="ts">
import type { Snippet } from "svelte";
import type { HTMLAnchorAttributes } from "svelte/elements";


type Props = {
  children?: Snippet;
} & Omit<HTMLAnchorAttributes, "draggable">;

let { children, ...rest }: Props = $props();

</script>

<a draggable="false" {...rest}>{@render children?.()}</a>