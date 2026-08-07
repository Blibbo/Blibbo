import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import Icons from 'unplugin-icons/vite';
import UnpluginTypia from '@typia/unplugin/vite';

import wails from "@wailsio/runtime/plugins/vite";

import "./scripts/build-app-template.js";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: Number(process.env.WAILS_VITE_PORT) || 9245,
    strictPort: true,
  },
  plugins: [
    wails("./bindings"),
    tailwindcss(),
    sveltekit(),
    Icons({
      compiler: 'svelte',
    }),
    UnpluginTypia({
      cache: true,
    }),
  ],
});
