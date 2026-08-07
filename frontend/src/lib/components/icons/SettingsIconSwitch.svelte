<script lang="ts">

import Meatballs from 'virtual:icons/quill/meatballs-h';
import Kebab from 'virtual:icons/quill/meatballs-v';
import Hamburger from 'virtual:icons/ci/hamburger-md';
import Cog from 'virtual:icons/mdi/cog';
import type { SVGAttributes } from 'svelte/elements';

type Props = {
  icon:
    | 'kebab'
    | 'hamburger'
    | 'meatballs'
    | 'cog'
    | 'none';
} & SVGAttributes<SVGSVGElement>;

let {
  icon,
  ...rest
}: Props = $props();

const Icon = $derived((()=>{
  switch(icon){
    case "cog":
      return Cog;
    case "hamburger":
      return Hamburger;
    case "kebab":
      return Kebab;
    case "meatballs":
      return Meatballs;
    case "none":
      return undefined;
  }
})());

</script>

<Icon {...rest}/>
