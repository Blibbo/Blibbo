<script lang="ts">
import MainLayout from "$lib/components/MainLayout.svelte";
import { ACCENT, BLUE_ACCENT, JENNI_ACCENT, STYLE_PRESETS } from "$lib/style/config";
import { getStyleContext, overrideStyle } from "$lib/style/main.svelte";
import { opaqueColor } from "$lib/style/color";
import TagsInput from "$lib/components/TagsInput.svelte";
import { Menu } from "$lib/components/menu";
import { ColorPicker } from "$lib/components/color-picker";
import { Switch } from "$lib/components/switch";
import { staticAccent } from "$lib/style/accent";

overrideStyle("test-page", STYLE_PRESETS.weather);

const manager = getStyleContext();

function lightning() {
  const oldColor = manager.active.Page;
  const oldAccent = manager.active.Accent;
  manager.active.Page = opaqueColor("#fff");
  manager.active.Accent = staticAccent("#000");
  setTimeout(() => {
    manager.active.Page = oldColor;
    manager.active.Accent = oldAccent;
  }, 150);
}

</script>

<MainLayout>
  <div>

    <div class="w-full flex justify-center mt-2">
      <button
        class="rounded-lg bg-accent preset-accent preset-button p-2 text-2xl"
        title=""
        onclick={lightning}
      >Cast lightning</button>
    </div>

  </div>
  <!-- <div class="bg-accent h-12 w-12"></div> -->

  <!-- <Style
    persistKey="super-test"
    defaultStyle={DEFAULT_PRESET}
  >
    <div class="bg-accent h-12 w-12"></div>
  </Style> -->

  <!-- <TagsInput
    defaultValue={['Vanilla', 'Chocolate', 'Strawberry']}
    label=Flavors
  />
  
  <Dialog aria-label="" icon=cog>
    <div class="space-y-1">
      <h2 class="preset-title">test</h2>
      <p>test 2asfasdfdsafa</p>
    </div>
  </Dialog> -->

  <div class="space-y-2">

    <Menu onSelect={(id)=>{console.log(id)}}>
      <Menu.Trigger>
        Click me
      </Menu.Trigger>
      <Menu.Content arrow class="preset-vars-accent-complementary">
        <Menu.ItemGroup>
          <Menu.GroupLabel>Caccamo</Menu.GroupLabel>
          <Menu.Item value="caccamo-1">caccamo 1</Menu.Item>
          <Menu.Item value="caccamo-2">opzione caccamo 22222222222222222222222</Menu.Item>
          <Menu.Item value="caccamo-3">cacchina</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup>
          <Menu.GroupLabel>Normali</Menu.GroupLabel>
          <Menu.Item value="test-value">TEST OPTION</Menu.Item>
          <Menu.Item value="test-value2">TEST OPTION 2</Menu.Item>
          <Menu.Separator/>
          <Menu>
            <Menu.TriggerItem>
              ciaoooooo
            </Menu.TriggerItem>
            <Menu.Content>
              <Menu.Item value="shtuchez">UELALAAAAAAAAA</Menu.Item>
              <Menu.Item value="PIPI">MIMIMIMI</Menu.Item>
            </Menu.Content>
          </Menu>
        </Menu.ItemGroup>
        <Menu.RadioGroup>
          <Menu.GroupLabel>radio schtuchez</Menu.GroupLabel>
          <Menu.RadioItem value="1-for-sure">PISCIO</Menu.RadioItem>
          <Menu.RadioItem value="idk-2-i-think">weeee</Menu.RadioItem>
        </Menu.RadioGroup>
        <Menu.Separator/>
        <Menu.Checkbox checked={false} value="check-1">PISCIO</Menu.Checkbox>
        <Menu.Checkbox checked value="check-2">weeee</Menu.Checkbox>
      </Menu.Content>
    </Menu>

    <!-- <ColorPicker value={getStyleContext().runtime.accent.value}> -->
    <ColorPicker>
      <ColorPicker.Trigger>Accent Color</ColorPicker.Trigger>
      <ColorPicker.Content swatches={[ACCENT, JENNI_ACCENT, BLUE_ACCENT]}/>
    </ColorPicker>

    <div>
    <Switch checked={true}/>

    </div>
    <Switch checked={false}/>

    <div class="h-12 w-12 rounded-full bg-red-500 transition-all duration-200 hover:mix-blend-difference"></div>

  </div>
</MainLayout>
