<script lang="ts">
import ColorPicker from "$lib/components/color-picker/ColorPicker.svelte";
import { staticAccent } from "../accent";
import { readableOnDark, readableOnLight } from "../color";
import { DEFAULT_ACCENT } from "../config";
import { getStyleContext } from "../main";
import { ON_DARK, ON_LIGHT } from "../prepaint/shared";
import AccentPicker from "./AccentPicker.svelte";
import TagsInput from "./TagsInput.svelte";
import ThemeColorPicker from "./ThemeColorPicker.svelte";

const manager = getStyleContext();

</script>

<h3 class="preset-title text-base">Theme colors</h3>

<div class="space-y-1.5 rounded-md">
  {#each manager.runtime.themes as theme (theme.id)}
    <div class="preset-outline-primary p-1.5 space-y-1 rounded-md">
      <ColorPicker lazyMount unmountOnExit label=Page type="opaque" bind:value={theme.page}/>
      
      <TagsInput label=Tags
        value={theme.tags ? [...theme.tags] : undefined}
        onValueChange={v=>theme.tags = new Set(v.value)}
        placeholder="Add tag"
      />

      <ThemeColorPicker inherited={!theme.accent} label=Accent
        onAdd={()=>theme.accent = staticAccent(DEFAULT_ACCENT)}
        onRemove={()=>theme.accent = undefined}
      >
        <AccentPicker class="flex-1" bind:accent={theme.accent!} kind="accent"/>
      </ThemeColorPicker>

      <ThemeColorPicker inherited={!theme.accent2} label=Accent2
        onAdd={()=>theme.accent2 = staticAccent(DEFAULT_ACCENT)}
        onRemove={()=>theme.accent2 = undefined}
      >
        <AccentPicker class="flex-1" bind:accent={theme.accent2!} kind="accent2"/>
      </ThemeColorPicker>

      <ThemeColorPicker inherited={!theme.onLight} label="On Light"
        onAdd={()=>theme.onLight = readableOnLight(ON_LIGHT)}
        onRemove={()=>theme.onLight = undefined}
      >
        <ColorPicker lazyMount unmountOnExit
          label="On Light"
          type="readable-on-light"
          bind:value={theme.onLight!}
        />
      </ThemeColorPicker>

      <ThemeColorPicker inherited={!theme.onDark} label="On Dark"
        onAdd={()=>theme.onDark = readableOnDark(ON_DARK)}
        onRemove={()=>theme.onDark = undefined}
      >
        <ColorPicker lazyMount unmountOnExit
          label="On Dark"
          type="readable-on-dark"
          bind:value={theme.onDark!}
        />
      </ThemeColorPicker>

    </div>
  {/each}
</div>