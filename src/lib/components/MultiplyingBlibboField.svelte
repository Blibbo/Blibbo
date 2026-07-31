<script lang="ts">
  import BlibboField from "$lib/components/blibbo/BlibboField.svelte";
  import { type BlibboFieldProps } from "$lib/components/blibbo/blibbo";

  type Props = {
    fields: Array<string>
  } & BlibboFieldProps;

  let {
    fields = $bindable<string[]>([""]),
    ...rest
  }: Props = $props();

  function addField(index: number) {
    fields.splice(index + 1, 0, "");
    fields = fields; // trigger reactivity
  }

  function removeField(index: number) {
    if (fields.length === 1) return;

    fields.splice(index, 1);
    fields = fields;
  }
</script>

{#each fields as value, i (i)}
  <!-- <BlibboField
    {...rest}
    bind:value={fields[i]}

    onshiftenter={() => addField(i)}
    onemptybackspace={() => {
      removeField(i);
    }}

  /> -->
{/each}