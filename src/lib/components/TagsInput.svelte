<script lang="ts">
import * as tagsInput from "@zag-js/tags-input";
import { useMachine, normalizeProps } from "@zag-js/svelte";
import X from "./icons/XIcon.svelte";

type Props = {
  defaultValue: string[],
  label: string,
};

let {
  defaultValue,
  label
}: Props = $props();

const id = $props.id();
const service = useMachine(tagsInput.machine, {
  id,
  // defaultValue,
});
const api = $derived(tagsInput.connect(service, normalizeProps));
</script>


<div>
  <div>
    {label}
  </div>
  <div {...api.getRootProps()}
    class="flex flex-wrap gap-1 outline outline-accent-readable-on-page rounded-md p-1"
  >
    {#each api.value as value, index}
      <span {...api.getItemProps({ index, value })} class="rounded-sm flex items-center p-0.5 preset-accent">
        <div {...api.getItemPreviewProps({ index, value })}
          class="flex items-center space-x-0.5"
        >
          <span>{value} </span>
          <button {...api.getItemDeleteTriggerProps({ index, value })}
            class="preset-button"
          >
            <X class="text-[0.8em]"/>
          </button>
        </div>
        <input {...api.getItemInputProps({ index, value })} />
      </span>
    {/each}
    <input {...api.getInputProps()}
      placeholder="Add tag..."
      class="focus-visible:outline-none placeholder:text-accent-readable-on-page placeholder:opacity-65"
    />
  </div>
  <div {...api.getControlProps()}>
    <button {...api.getClearTriggerProps()}
      class="text-accent-readable-on-page preset-button"
    >
      Clear all
    </button>
  </div>
</div>
