
interface Config{
  LOG_LEVEL: string
}

let config: Config;

import dev from '~/shared/development.json';
import prod from '~/shared/production.json';
config = import.meta.env.MODE === 'production'? prod : dev;

// no SSR so maybe dynamic imports are fine?
// if (import.meta.env.MODE === 'production') {
//   config = await import('~/shared/production.json');
// } else {
//   config = await import('~/shared/development.json');
// }

export default config;
