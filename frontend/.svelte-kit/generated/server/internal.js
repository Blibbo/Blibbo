
import root from '../root.js';
import { set_building, set_prerendering } from '$app/env/internal';
import { set_assets } from '$app/paths/internal/server';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';
import error from '../shared/error-template.js';

export const options = {
	app_template_contains_nonce: false,
	async: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	csrf_trusted_origins: [],
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	service_worker_options: undefined,
	server_error_boundaries: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\r\n<html lang=\"en\">\r\n<head>\r\n  <script>\"use strict\";(()=>{var c=\"#fff\",f=\"#283137\",p=\"#000\",g=\"#fff\",u=document.documentElement;function i(t,n){return typeof t!=\"object\"||t===null?!1:Object.keys(t).length===n.length&&n.every(a=>Object.prototype.hasOwnProperty.call(t,a))}function l(t){return i(t,[\"color\",\"contrastHint\"])?typeof t.color==\"string\"&&(t.contrastHint===\"light\"||t.contrastHint===\"dark\"):!1}function P(t){return i(t,[\"dark\",\"light\"])?typeof t.dark==\"string\"&&typeof t.light==\"string\":!1}function y(t){return P(t)||l(t)}var e={dark:f,light:c},d=\"Blibbo.\",I=`${d}prepaintInfo`;function m(){let t=localStorage.getItem(I);if(!t)return e;try{let n=JSON.parse(t);return y(n)?n:e}catch{return e}}function h(){return window.matchMedia(\"(prefers-color-scheme: dark)\").matches?\"dark\":\"light\"}function k(t){return\"dark\"in t}function r(t){return t===\"light\"?p:g}function x(){let t=m();if(k(t)){let n=h();return{background:t[n],text:r(n)}}return{background:t.color,text:r(t.contrastHint)}}function o(t,n){u.style.setProperty(\"--\"+t,n)}function s(){let{background:t,text:n}=x();o(\"page\",t),o(\"on-page\",n)}s();})();\n</script>\r\n  <style>\r\n    :root {\r\n      background-color: var(--page);\r\n      color: var(--on-page);\r\n    }\r\n\r\n    .no-theme-transition *, .no-theme-transition *::before, .no-theme-transition *::after {\r\n      transition: none !important;\r\n    }\r\n  </style>\r\n  <meta charset=\"utf-8\" />\r\n  <link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover\" />\r\n  <meta name=\"theme-color\">\r\n  <title>Blibbo</title>\r\n  " + head + "\r\n</head>\r\n<body data-sveltekit-preload-data=\"hover\">\r\n  <div style=\"display: contents\">" + body + "</div>\r\n</body>\r\n</html>\r\n",
		error
	},
	version_hash: "19u1o2n"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let handleValidationError;
	let init;
	

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		handleValidationError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation };
