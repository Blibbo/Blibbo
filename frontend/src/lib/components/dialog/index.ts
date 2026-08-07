import { Dialog as Ark } from "@ark-ui/svelte";
import DialogRoot from "./DialogRoot.svelte";
import DialogTrigger from "./DialogTrigger.svelte";
import DialogContent from "./DialogContent.svelte";

export const Dialog = Object.assign(DialogRoot, {
  Title: Ark.Title,
  Description: Ark.Description,
  Content: DialogContent,
  Trigger: DialogTrigger,
})