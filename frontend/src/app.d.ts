/// <reference types="svelte" />
/// <reference types="vite/client" />

import { type MathfieldElementAttributes } from "mathlive";
import 'unplugin-icons/types/svelte'

declare namespace svelteHTML {
	interface IntrinsicElements {
    'math-field': MathfieldElementAttributes;
	}
}
