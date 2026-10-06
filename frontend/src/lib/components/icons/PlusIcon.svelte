<script lang="ts">
import type { ComponentProps } from "svelte";
import Plus from "virtual:icons/f7/plus-circle";

type Props = ComponentProps<typeof Plus>;

let props: Props = $props();
</script>

<Plus {...props} />