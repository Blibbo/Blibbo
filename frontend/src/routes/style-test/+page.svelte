<script lang="ts">
import MainLayout from "$lib/components/MainLayout.svelte";
import { DEFAULT_PRESET, STYLE_PRESETS } from "$lib/style/config";
import { getStyleContext, overrideStyle } from "$lib/style/main.svelte";
import { opaqueColor } from "$lib/style/color";
import { staticAccent } from "$lib/style/accent";
import StyleTest from "$lib/style/components/StyleTest.svelte";
import { Menu } from "$lib/components/menu";
import { Switch } from "$lib/components/switch";
import Select from "$lib/components/Select.svelte";
    import ThemePreferencePicker from "$lib/style/components/ThemePreferencePicker.svelte";
  import TagsInput from "$lib/style/components/TagsInput.svelte";

overrideStyle("test-surface", STYLE_PRESETS.weather);

const manager = getStyleContext();

function lightning() {  
  const oldColor = manager.active.Page;
  const oldAccent = manager.active.Accent;
  manager.active.Page = opaqueColor("#fff");
  manager.active.Accent = staticAccent("#fff");
  setTimeout(() => {
    manager.active.Page = oldColor;
    manager.active.Accent = oldAccent;
  }, 150);
}

</script>

<MainLayout>
  <div class="space-y-2">

    <div class="w-full flex justify-center mt-2">
      <button
        class="clickable-fade-primary rounded-lg p-2 text-2xl"
        title=""
        onclick={lightning}
      >Cast lightning</button>
    </div>


    <!-- <StyleTest
      persistKey="super-test"
      defaultStyle={DEFAULT_PRESET}
    /> -->

    <!-- <TagsInput
      defaultValue={['Vanilla', 'Chocolate', 'Strawberry']}
      label=Flavors
    /> -->

    <Select closeOnSelect={false} items={[
      { label: 'React', value: 'react', type: "type 1" },
      { label: 'Solid', value: 'solid', type: "type 2" },
      { label: 'Vue', value: 'vue', type: "type 1" },
      { label: 'Svelte', value: 'svelte', type: "type 2" },
    ]} groupBy={i=>i.type} placeholder=Select label=Frameworks>
    </Select>

    <Menu closeOnSelect={false}>
      <Menu.Trigger>Menu trigger</Menu.Trigger>
      <Menu.Content arrow>
        <Menu.Group>
          <Menu.GroupLabel>Group label</Menu.GroupLabel>
          <Menu.Item value="item-1">Item 1 looooooooooooooong</Menu.Item>
        </Menu.Group>
        <Menu.Separator/>
        <Menu.Item value="item-2">Item 2</Menu.Item>
        <Menu.RadioGroup>
          <Menu.GroupLabel>Radio label</Menu.GroupLabel>
          <Menu.RadioItem value="radio-1">Radio 1</Menu.RadioItem>
          <Menu.RadioItem value="radio-2">Radio 2</Menu.RadioItem>
        </Menu.RadioGroup>
        <Menu.Separator/>
        <Menu closeOnSelect={false}>
          <Menu.TriggerItem>Submenu trigger</Menu.TriggerItem>
          <Menu.Content>
            <Menu.Checkbox checked={false} value="check-1">Nested checkbox 1</Menu.Checkbox>
            <Menu.Checkbox checked={false} value="check-2">Nested checkbox 2</Menu.Checkbox>
          </Menu.Content>
        </Menu>
      </Menu.Content>
    </Menu>

    <Switch>Switch label</Switch>

    <TagsInput label=Frameworks placeholder="Add Framework"/>

  </div>
</MainLayout>
