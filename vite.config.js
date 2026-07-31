import { defineConfig, normalizePath } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';
import path from 'path';
import { getEnvMode, isLSP, getPort } from './config.js';
import Icons from 'unplugin-icons/vite';
import UnpluginTypia from '@typia/unplugin/vite';

// not necessary? @ts-expect-error process is a nodejs global
const host = process.env.TAURI_DEV_HOST;

const baseConfig = {
  plugins: [
    tailwindcss(),
    sveltekit(),
    Icons({
      compiler: 'svelte',
    }),
    UnpluginTypia({
      cache: true,
    }),
  ],
  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent Vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server:{
    strictPort: true,
  },
  resolve:{
    alias:{
      '~': fileURLToPath(new URL('.', import.meta.url))
    }
  }
}

// https://vite.dev/config/
export default defineConfig(async () => {

  if(isLSP()){
    return baseConfig
  }

  // these two could error
  const envMode = getEnvMode();
  const port = getPort();

  return {
    ...baseConfig,
    mode: envMode,
    server: {
      ...baseConfig.server,
      fs: {
        allow: [
          // the vite project root is automatically allowed
          path.resolve(__dirname, 'shared')
          // path.resolve(__dirname, 'shared/' + envMode + '.json') // only allow correct shared config
        ]
      },
      port: port,
      host: host || false,
      hmr: host
        ? {
            protocol: 'ws',
            host,
            port: port + 1,
          }
        : undefined,
      watch: {
        // 3. tell Vite to ignore watching `src-tauri`
        // ignored: [
        //   '**/src-tauri/**'
        // ]



        /** @type {(p:string)=>boolean} */
        ignored(p) {
          const relativePath = path.relative(
            path.resolve(fileURLToPath(import.meta.url), '..'),
            p
          );

          return (
            relativePath !== '' &&
            relativePath !== 'src' &&
            !normalizePath(relativePath).startsWith('src/') &&
            relativePath !== 'static' &&
            !normalizePath(relativePath).startsWith('static/') &&
            relativePath !== 'shared' &&
            normalizePath(relativePath) !== `shared/${envMode}.json`
          );
        },
      },
    }
  };
});
