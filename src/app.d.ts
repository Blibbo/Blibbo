import { type MathfieldElementAttributes } from "mathlive";
import 'unplugin-icons/types/svelte'

declare namespace svelteHTML {
	interface IntrinsicElements {
    'math-field': MathfieldElementAttributes;
	}
}

// gotta fix my build setup, I don't even know what I'm building LOL
declare global {
	interface ImportMetaEnv {
		readonly VITE_BUILD: "static" | "watch" | "reload" | "hmr";
		readonly VITE_ENV: "production" | "development";
		// readonly VITE_GO_PORT:
	}
}