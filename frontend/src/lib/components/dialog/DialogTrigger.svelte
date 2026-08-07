<script lang="ts">
import { Dialog } from "@ark-ui/svelte";
import SettingsIconSwitch from "../icons/SettingsIconSwitch.svelte";
import type { ComponentProps } from "svelte";

type Props = {
  icon: ComponentProps<typeof SettingsIconSwitch>["icon"];
} & ComponentProps<typeof Dialog.Trigger>;

let {
  icon,
  children,
  ...rest
}: Props = $props();

</script>

<Dialog.Trigger {...rest}>
  <SettingsIconSwitch {icon}/>
  {@render children?.()}
</Dialog.Trigger>