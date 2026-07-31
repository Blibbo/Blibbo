import { registerPlugin } from '@capacitor/core';
import { IS_MOBILE_APP } from '$lib/platform';

export interface BlibboLocalPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}

export const BlibboLocal = IS_MOBILE_APP? registerPlugin<BlibboLocalPlugin>('BlibboLocal') : null;

export default BlibboLocal;