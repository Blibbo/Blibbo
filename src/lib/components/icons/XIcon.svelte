<script lang="ts">
import type { ComponentProps } from 'svelte';
import X from 'virtual:icons/material-symbols/close-rounded';

type Props = ComponentProps<typeof X>;

let props: Props = $props();
</script>

<X {...props} />