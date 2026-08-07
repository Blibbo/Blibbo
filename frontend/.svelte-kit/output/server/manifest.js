export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/Brush Script MT Regular.ttf","fonts/mathlive/KaTeX_AMS-Regular.woff2","fonts/mathlive/KaTeX_Caligraphic-Bold.woff2","fonts/mathlive/KaTeX_Caligraphic-Regular.woff2","fonts/mathlive/KaTeX_Fraktur-Bold.woff2","fonts/mathlive/KaTeX_Fraktur-Regular.woff2","fonts/mathlive/KaTeX_Main-Bold.woff2","fonts/mathlive/KaTeX_Main-BoldItalic.woff2","fonts/mathlive/KaTeX_Main-Italic.woff2","fonts/mathlive/KaTeX_Main-Regular.woff2","fonts/mathlive/KaTeX_Math-BoldItalic.woff2","fonts/mathlive/KaTeX_Math-Italic.woff2","fonts/mathlive/KaTeX_SansSerif-Bold.woff2","fonts/mathlive/KaTeX_SansSerif-Italic.woff2","fonts/mathlive/KaTeX_SansSerif-Regular.woff2","fonts/mathlive/KaTeX_Script-Regular.woff2","fonts/mathlive/KaTeX_Size1-Regular.woff2","fonts/mathlive/KaTeX_Size2-Regular.woff2","fonts/mathlive/KaTeX_Size3-Regular.woff2","fonts/mathlive/KaTeX_Size4-Regular.woff2","fonts/mathlive/KaTeX_Typewriter-Regular.woff2","fonts/papyrus.ttf","images/cat-laugh.jpg","images/gigavasta.png","sounds/mathlive/keypress-delete.wav","sounds/mathlive/keypress-return.wav","sounds/mathlive/keypress-spacebar.wav","sounds/mathlive/keypress-standard.wav","sounds/mathlive/plonk.wav","svelte.svg","tauri.svg","vite.svg"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".woff2":"font/woff2",".jpg":"image/jpeg",".wav":"audio/wav",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.BfYJzPOh.js",app:"_app/immutable/entry/app.CrUEFOfO.js",imports:["_app/immutable/entry/start.BfYJzPOh.js","_app/immutable/chunks/c4n9jbxn.js","_app/immutable/chunks/D_ZKicVc.js","_app/immutable/entry/app.CrUEFOfO.js","_app/immutable/chunks/D_ZKicVc.js","_app/immutable/chunks/DhaYE-8x.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/exile-puzzle",
				pattern: /^\/exile-puzzle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/maths",
				pattern: /^\/maths\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/pairs",
				pattern: /^\/pairs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/style-test",
				pattern: /^\/style-test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
