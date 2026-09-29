<script lang="ts">
import type { ComponentProps, Snippet } from "svelte";
import Style from "./Style.svelte";

type Props = {
  children?: Snippet;
} & Omit<ComponentProps<typeof Style>, "children">;

let {
  children,
  ...rest
}: Props = $props();

</script>

<div class="outline outline-on-surface preset-card p-0">
  <Style {...rest} class="preset-surface preset-card">
    placeholder
  </Style>
</div>
