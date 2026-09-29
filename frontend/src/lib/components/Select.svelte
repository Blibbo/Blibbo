<script lang="ts" generics="T extends Select.CollectionItem = Select.CollectionItem">
import { createListCollection, Portal, Select } from "@ark-ui/svelte";
import ChevronUpDown from "./icons/ChevronUpDown.svelte";
import XIcon from "./icons/XIcon.svelte";
import CheckIcon from "./icons/CheckIcon.svelte";
import type { Snippet } from "svelte";

type Props = Omit<Select.RootProps<T>, "collection" | "children"> & {
  items: T[];
  groupBy?: ((item: T) => string) | undefined;
  label: string | Snippet;
  placeholder?: string | undefined;
  labelClass?: string | undefined;
  triggerClass?: string | undefined;
  contentClass?: string | undefined;
};

let {
  items,
  groupBy,
  placeholder,
  label,
  labelClass,
  triggerClass,
  contentClass,
  ...rest
}: Props = $props();

const collection = $derived(createListCollection({ items, groupBy }));
const groups = $derived(collection.group());

</script>

{#snippet option(item: T)}
  <Select.Item class="preset-menu-checkable-item" {item}>
    <Select.ItemText>{collection.stringifyItem(item)}</Select.ItemText>
    <Select.ItemIndicator hidden={false}><CheckIcon/></Select.ItemIndicator>
  </Select.Item>
{/snippet}

<Select.Root {...rest} collection={collection}>
  <Select.Label class={labelClass}>
    {#if typeof label === "string"}{label}{:else}{@render label()}{/if}
  </Select.Label>

  <Select.Control class="preset-input relative">
    <Select.Trigger class={triggerClass}>
      <Select.ValueText {placeholder} />
    </Select.Trigger>
    <div class="pointer-events-none absolute right-1 top-0 h-full flex items-center">
      <Select.ClearTrigger class="clickable-fade">
        <XIcon/>
      </Select.ClearTrigger>
      <Select.Indicator>
        <ChevronUpDown/>
      </Select.Indicator>
    </div>
  </Select.Control>

  <Portal>
    <Select.Positioner>
      <Select.Content class={contentClass}>
        {#if groupBy}
          {#each groups as [groupName, groupItems]}
            <Select.ItemGroup>
              <div class="preset-menu-label-container">
                <Select.ItemGroupLabel>{groupName}</Select.ItemGroupLabel>
              </div>
              {#each groupItems as item (collection.getItemValue(item))}
                {@render option(item)}
              {/each}
            </Select.ItemGroup>
          {/each}
        {:else}
          {#each collection.items as item (collection.getItemValue(item))}
            {@render option(item)}
          {/each}
        {/if}
      </Select.Content>
    </Select.Positioner>
  </Portal>
  <Select.HiddenSelect />
</Select.Root>

<style>
@reference "$app.css";

:global{
  @layer components {
    [data-scope="select"][data-part="trigger"] {
      @apply flex-1 text-left w-full;
    }

    [data-scope="select"][data-part="content"] {
      @apply preset-menu;
    }
  }
}

</style>