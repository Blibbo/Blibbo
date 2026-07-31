import { Menu as Ark } from "@ark-ui/svelte";
import MenuRoot from "./MenuRoot.svelte";
import MenuTrigger from "./MenuTrigger.svelte";
import MenuContent from "./MenuContent.svelte";
import MenuTriggerItem from "./MenuTriggerItem.svelte";
import MenuGroupLabel from "./MenuGroupLabel.svelte";
import MenuRadioItem from "./MenuRadioItem.svelte";
import MenuCheckbox from "./MenuCheckbox.svelte";

export const Menu = Object.assign(MenuRoot, {
  Item: Ark.Item,
  Trigger: MenuTrigger,
  ContextTrigger: Ark.ContextTrigger,
  Content: MenuContent,
  TriggerItem: MenuTriggerItem,
  Separator: Ark.Separator,
  ItemGroup: Ark.ItemGroup,
  GroupLabel: MenuGroupLabel,
  RadioGroup: Ark.RadioItemGroup,
  RadioItem: MenuRadioItem,
  Checkbox: MenuCheckbox,
});