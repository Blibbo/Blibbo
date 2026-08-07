const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.VudKJl2u.js","../chunks/D_ZKicVc.js","../chunks/DhaYE-8x.js","../chunks/C8dnJ1Am.js","../assets/0.u2cotmQC.css","../nodes/1.CLMiCzcd.js","../chunks/c4n9jbxn.js","../nodes/2.DTflpanA.js","../chunks/CkNmWS-7.js","../chunks/BZBQPyqy.js","../assets/MainLayout.DLL6zaFU.css","../nodes/3.DgK-eUTN.js","../nodes/4.BheRx3Xx.js","../nodes/5.Ccmao85h.js","../chunks/BwelQSYv.js","../assets/MathField.BMNda30i.css","../assets/5.W1L3n9bP.css","../nodes/6.DQEGrxmv.js","../nodes/7._DjLBBNV.js","../assets/7.ytxaiNzK.css"])))=>i.map(i=>d[i]);
import { B as tick, C as if_block, D as append, G as child, H as template_effect, K as first_child, M as text, O as comment, Q as state, R as get, T as set_text, U as user_effect, W as user_pre_effect, Z as set, a as prop, ct as pop, i as asClassComponent, k as from_html, l as bind_this, lt as push, pt as reset, q as sibling, r as onMount, tt as user_derived, y as component } from "../chunks/D_ZKicVc.js";
import "../chunks/DhaYE-8x.js";
//#region \0vite/preload-helper.js
var scriptRel = "modulepreload";
var assetsURL = function(dep, importerUrl) {
	return new URL(dep, importerUrl).href;
};
var seen = {};
var __vitePreload = function preload(baseModule, deps, importerUrl) {
	let promise = Promise.resolve();
	if (deps && deps.length > 0) {
		const links = document.getElementsByTagName("link");
		const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
		const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
		function allSettled(promises) {
			return Promise.all(promises.map((p) => Promise.resolve(p).then((value) => ({
				status: "fulfilled",
				value
			}), (reason) => ({
				status: "rejected",
				reason
			}))));
		}
		function importMetaResolve(specifier) {
			if (import.meta.resolve) return import.meta.resolve(specifier);
			return new URL(
				specifier,
				/** #__KEEP__ */
				import.meta.url
			).href;
		}
		promise = allSettled(deps.map((dep) => {
			dep = assetsURL(dep, importerUrl);
			dep = importMetaResolve(dep);
			if (dep in seen) return;
			seen[dep] = true;
			const isCss = dep.endsWith(".css");
			for (let i = links.length - 1; i >= 0; i--) {
				const link = links[i];
				if (link.href === dep && (!isCss || link.rel === "stylesheet")) return;
			}
			const link = document.createElement("link");
			link.rel = isCss ? "stylesheet" : scriptRel;
			if (!isCss) link.as = "script";
			link.crossOrigin = "";
			link.href = dep;
			if (cspNonce) link.setAttribute("nonce", cspNonce);
			document.head.appendChild(link);
			if (isCss) return new Promise((res, rej) => {
				link.addEventListener("load", res);
				link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
			});
		}));
	}
	function handlePreloadError(err) {
		const e = new Event("vite:preloadError", { cancelable: true });
		e.payload = err;
		window.dispatchEvent(e);
		if (!e.defaultPrevented) throw err;
	}
	return promise.then((res) => {
		for (const item of res || []) {
			if (item.status !== "rejected") continue;
			handlePreloadError(item.reason);
		}
		return baseModule().catch(handlePreloadError);
	});
};
//#endregion
//#region .svelte-kit/generated/client-optimized/matchers.js
var matchers = {};
//#endregion
//#region .svelte-kit/generated/root.svelte
var root = from_html(`<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>`);
var root_1 = from_html(`<!> <!>`, 1);
function Root($$anchor, $$props) {
	push($$props, true);
	let components = prop($$props, "components", 23, () => []), data_0 = prop($$props, "data_0", 3, null), data_1 = prop($$props, "data_1", 3, null), data_2 = prop($$props, "data_2", 3, null);
	user_pre_effect(() => $$props.stores.page.set($$props.page));
	user_effect(() => {
		$$props.stores;
		$$props.page;
		$$props.constructors;
		components();
		$$props.form;
		data_0();
		data_1();
		data_2();
		$$props.stores.page.notify();
	});
	let mounted = state(false);
	let navigated = state(false);
	let title = state(null);
	onMount(() => {
		const unsubscribe = $$props.stores.page.subscribe(() => {
			if (get(mounted)) {
				set(navigated, true);
				tick().then(() => {
					set(title, document.title || "untitled page", true);
				});
			}
		});
		set(mounted, true);
		return unsubscribe;
	});
	const Pyramid_2 = user_derived(() => $$props.constructors[2]);
	var fragment = root_1();
	var node = first_child(fragment);
	var consequent_1 = ($$anchor) => {
		const Pyramid_0 = user_derived(() => $$props.constructors[0]);
		var fragment_1 = comment();
		var node_1 = first_child(fragment_1);
		component(node_1, () => get(Pyramid_0), ($$anchor, Pyramid_0_1) => {
			bind_this(Pyramid_0_1($$anchor, {
				get data() {
					return data_0();
				},
				get form() {
					return $$props.form;
				},
				get params() {
					return $$props.page.params;
				},
				children: ($$anchor, $$slotProps) => {
					var fragment_2 = comment();
					var node_2 = first_child(fragment_2);
					var consequent = ($$anchor) => {
						const Pyramid_1 = user_derived(() => $$props.constructors[1]);
						var fragment_3 = comment();
						var node_3 = first_child(fragment_3);
						component(node_3, () => get(Pyramid_1), ($$anchor, Pyramid_1_1) => {
							bind_this(Pyramid_1_1($$anchor, {
								get data() {
									return data_1();
								},
								get form() {
									return $$props.form;
								},
								get params() {
									return $$props.page.params;
								},
								children: ($$anchor, $$slotProps) => {
									var fragment_4 = comment();
									var node_4 = first_child(fragment_4);
									component(node_4, () => get(Pyramid_2), ($$anchor, Pyramid_2_1) => {
										bind_this(Pyramid_2_1($$anchor, {
											get data() {
												return data_2();
											},
											get form() {
												return $$props.form;
											},
											get params() {
												return $$props.page.params;
											}
										}), ($$value) => components()[2] = $$value, () => components()?.[2]);
									});
									append($$anchor, fragment_4);
								},
								$$slots: { default: true }
							}), ($$value) => components()[1] = $$value, () => components()?.[1]);
						});
						append($$anchor, fragment_3);
					};
					var alternate = ($$anchor) => {
						const Pyramid_1 = user_derived(() => $$props.constructors[1]);
						var fragment_5 = comment();
						var node_5 = first_child(fragment_5);
						component(node_5, () => get(Pyramid_1), ($$anchor, Pyramid_1_2) => {
							bind_this(Pyramid_1_2($$anchor, {
								get data() {
									return data_1();
								},
								get form() {
									return $$props.form;
								},
								get params() {
									return $$props.page.params;
								}
							}), ($$value) => components()[1] = $$value, () => components()?.[1]);
						});
						append($$anchor, fragment_5);
					};
					if_block(node_2, ($$render) => {
						if ($$props.constructors[2]) $$render(consequent);
						else $$render(alternate, -1);
					});
					append($$anchor, fragment_2);
				},
				$$slots: { default: true }
			}), ($$value) => components()[0] = $$value, () => components()?.[0]);
		});
		append($$anchor, fragment_1);
	};
	var alternate_1 = ($$anchor) => {
		const Pyramid_0 = user_derived(() => $$props.constructors[0]);
		var fragment_6 = comment();
		var node_6 = first_child(fragment_6);
		component(node_6, () => get(Pyramid_0), ($$anchor, Pyramid_0_2) => {
			bind_this(Pyramid_0_2($$anchor, {
				get data() {
					return data_0();
				},
				get form() {
					return $$props.form;
				},
				get params() {
					return $$props.page.params;
				}
			}), ($$value) => components()[0] = $$value, () => components()?.[0]);
		});
		append($$anchor, fragment_6);
	};
	if_block(node, ($$render) => {
		if ($$props.constructors[1]) $$render(consequent_1);
		else $$render(alternate_1, -1);
	});
	var node_7 = sibling(node, 2);
	var consequent_3 = ($$anchor) => {
		var div = root();
		var node_8 = child(div);
		var consequent_2 = ($$anchor) => {
			var text$1 = text();
			template_effect(() => set_text(text$1, get(title)));
			append($$anchor, text$1);
		};
		if_block(node_8, ($$render) => {
			if (get(navigated)) $$render(consequent_2);
		});
		reset(div);
		append($$anchor, div);
	};
	if_block(node_7, ($$render) => {
		if (get(mounted)) $$render(consequent_3);
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region .svelte-kit/generated/root.js
var root_default = asClassComponent(Root);
//#endregion
//#region .svelte-kit/generated/client-optimized/app.js
var nodes = [
	() => __vitePreload(() => import("../nodes/0.VudKJl2u.js"), __vite__mapDeps([0,1,2,3,4]), import.meta.url),
	() => __vitePreload(() => import("../nodes/1.CLMiCzcd.js"), __vite__mapDeps([5,1,6,2]), import.meta.url),
	() => __vitePreload(() => import("../nodes/2.DTflpanA.js"), __vite__mapDeps([7,1,2,8,3,9,10]), import.meta.url),
	() => __vitePreload(() => import("../nodes/3.DgK-eUTN.js"), __vite__mapDeps([11,1,2,8,3,9,10]), import.meta.url),
	() => __vitePreload(() => import("../nodes/4.BheRx3Xx.js"), __vite__mapDeps([12,1,2,8,3,9,10]), import.meta.url),
	() => __vitePreload(() => import("../nodes/5.Ccmao85h.js"), __vite__mapDeps([13,1,2,9,14,3,15,16]), import.meta.url),
	() => __vitePreload(() => import("../nodes/6.DQEGrxmv.js"), __vite__mapDeps([17,1,2,8,3,9,10,14,15]), import.meta.url),
	() => __vitePreload(() => import("../nodes/7._DjLBBNV.js"), __vite__mapDeps([18,1,2,3,8,9,10,19]), import.meta.url)
];
var server_loads = [];
var dictionary = {
	"/": [3],
	"/exile-puzzle": [4],
	"/maths": [5, [2]],
	"/pairs": [6],
	"/style-test": [7]
};
var hooks = {
	handleError: (({ error }) => {
		console.error(error);
	}),
	reroute: (() => {}),
	transport: {}
};
var decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));
var encoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.encode]));
var hash = false;
var decode = (type, value) => decoders[type](value);
var get_error_template = () => __vitePreload(() => import("../chunks/CpNdpYV-.js").then((m) => m.default), [], import.meta.url);
//#endregion
export { decode, decoders, dictionary, encoders, get_error_template, hash, hooks, matchers, nodes, root_default as root, server_loads };
