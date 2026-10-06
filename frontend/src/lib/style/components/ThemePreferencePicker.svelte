<script lang="ts">
import Select from "$lib/components/Select.svelte";
import typia from "typia";
import NextTheme from "./NextTheme.svelte";
import type { StyleRuntime } from "../mutation";
import { getStyleContext } from "../main.svelte";

let preferences = typia.misc.literals<StyleRuntime["preference"]>();

const manager = getStyleContext();
const nextThemeExists = $derived(manager.computed.nextThemeExists);

</script>

<div class="text-nowrap {nextThemeExists ? "flex gap-2 items-end" : ""}">
  <Select lazyMount unmountOnExit noClear
    class={nextThemeExists
      ? "flex-1 mb-1"
      : "flex gap-x-2 items-center justify-between"
    }
    labelClass={nextThemeExists ? "" : "text-base"}
    label="Theme preference"
    controlClass={nextThemeExists ? "" : "w-20" }
    onValueChange={v =>
      manager.preference = v.value[0] as StyleRuntime["preference"]
    }
    value={[manager.preference]}
    items={preferences}
  />

  <NextTheme class="clickable-next-theme p-2 rounded-lg">
    <p>Next theme</p>
  </NextTheme>
</div>