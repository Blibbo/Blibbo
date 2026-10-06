<script lang="ts">
import XIcon from "$lib/components/icons/XIcon.svelte";
import { TagsInput, type TagsInputRootProps } from "@ark-ui/svelte";
import type { Snippet } from "svelte";

type Props = Omit<TagsInputRootProps, "children"> & {
  label: string | Snippet;
  placeholder?: string | undefined;
};

let {
  label,
  placeholder,
  ...rest
}: Props = $props();

</script>

<TagsInput.Root {...rest}>
  <TagsInput.Context>
    {#snippet render(tagsInput)}
      <TagsInput.Label class="preset-label">
        {#if typeof label === "string"}{label}{:else}{@render label()}{/if}
      </TagsInput.Label>
      <TagsInput.Control>
        <div class="flex items-center gap-1 flex-wrap p-1 preset-outline-primary rounded-sm">
          {#each tagsInput().value as value, index (index)}
            <TagsInput.Item class="flex items-center" {index} {value}>
              {@const ITEM = "rounded-sm wrap-anywhere px-0.5"}
              <TagsInput.ItemPreview class="preset-primary {ITEM} flex items-center">
                <TagsInput.ItemText>{value}</TagsInput.ItemText>
                <TagsInput.ItemDeleteTrigger class="clickable-fade">
                  <XIcon />
                </TagsInput.ItemDeleteTrigger>
              </TagsInput.ItemPreview>
              <TagsInput.ItemInput class="{ITEM} preset-input preset-surface py-0"/>
            </TagsInput.Item>
          {/each}
          <TagsInput.Input class="focus-visible:outline-none placeholder:text-primary-readable-on-surface flex-1" {placeholder} />
        </div>
        <TagsInput.ClearTrigger class="clickable-fade text-sm text-primary-readable-on-surface">
          Clear all
        </TagsInput.ClearTrigger>
      </TagsInput.Control>
    {/snippet}
  </TagsInput.Context>
  <TagsInput.HiddenInput />
</TagsInput.Root>