
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/exile-puzzle" | "/maths" | "/pairs" | "/style-test";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/exile-puzzle": Record<string, never>;
			"/maths": Record<string, never>;
			"/pairs": Record<string, never>;
			"/style-test": Record<string, never>
		};
		Pathname(): "/" | "/exile-puzzle" | "/maths" | "/pairs" | "/style-test";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.png" | "/fonts/Brush Script MT Regular.ttf" | "/fonts/mathlive/KaTeX_AMS-Regular.woff2" | "/fonts/mathlive/KaTeX_Caligraphic-Bold.woff2" | "/fonts/mathlive/KaTeX_Caligraphic-Regular.woff2" | "/fonts/mathlive/KaTeX_Fraktur-Bold.woff2" | "/fonts/mathlive/KaTeX_Fraktur-Regular.woff2" | "/fonts/mathlive/KaTeX_Main-Bold.woff2" | "/fonts/mathlive/KaTeX_Main-BoldItalic.woff2" | "/fonts/mathlive/KaTeX_Main-Italic.woff2" | "/fonts/mathlive/KaTeX_Main-Regular.woff2" | "/fonts/mathlive/KaTeX_Math-BoldItalic.woff2" | "/fonts/mathlive/KaTeX_Math-Italic.woff2" | "/fonts/mathlive/KaTeX_SansSerif-Bold.woff2" | "/fonts/mathlive/KaTeX_SansSerif-Italic.woff2" | "/fonts/mathlive/KaTeX_SansSerif-Regular.woff2" | "/fonts/mathlive/KaTeX_Script-Regular.woff2" | "/fonts/mathlive/KaTeX_Size1-Regular.woff2" | "/fonts/mathlive/KaTeX_Size2-Regular.woff2" | "/fonts/mathlive/KaTeX_Size3-Regular.woff2" | "/fonts/mathlive/KaTeX_Size4-Regular.woff2" | "/fonts/mathlive/KaTeX_Typewriter-Regular.woff2" | "/fonts/papyrus.ttf" | "/images/cat-laugh.jpg" | "/images/gigavasta.png" | "/sounds/mathlive/keypress-delete.wav" | "/sounds/mathlive/keypress-return.wav" | "/sounds/mathlive/keypress-spacebar.wav" | "/sounds/mathlive/keypress-standard.wav" | "/sounds/mathlive/plonk.wav" | "/svelte.svg" | "/tauri.svg" | "/vite.svg" | string & {};
	}
}