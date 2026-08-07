import { A as from_svg, B as tick, D as append, J as proxy, Q as state, R as get, Z as set, d as attribute_effect, it as createContext, n as onDestroy, o as rest_props, tt as user_derived } from "./D_ZKicVc.js";
import "./DhaYE-8x.js";
//#region src/lib/prepaint/shared.ts
var LIGHT = "#fff";
var DARK = "#283137";
var ON_LIGHT = "#000";
var ON_DARK = "#fff";
var STYLE_ROOT = document.documentElement;
var LOCALSTORAGE_PREFIX = "Blibbo.";
var PREPAINT_KEY = `${LOCALSTORAGE_PREFIX}prepaintInfo`;
function setPrepaintCache(info) {
	const stringified = JSON.stringify(info);
	localStorage.setItem(PREPAINT_KEY, stringified);
}
function getSystemTheme() {
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function setCSSGlobal(name, value) {
	STYLE_ROOT.style.setProperty("--" + name, value);
}
//#endregion
//#region src/lib/style/system-theme.svelte.ts
var mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
var theme = state(proxy(mediaQueryList.matches ? "dark" : "light"));
function listener(e) {
	set(theme, e.matches ? "dark" : "light", true);
}
mediaQueryList.addEventListener("change", listener);
var systemTheme = { get value() {
	return get(theme);
} };
//#endregion
//#region src/lib/types.ts
function mapNonEmpty(array, callback) {
	return array.map(callback);
}
function assertNonEmpty(array, errorMessage = "Expected array to be non empty") {
	if (array.length < 1) throw new Error(errorMessage);
}
//#endregion
//#region node_modules/colord/index.mjs
var r$1 = {
	grad: .9,
	turn: 360,
	rad: 360 / (2 * Math.PI)
};
var t$2 = function(r) {
	return "string" == typeof r ? r.length > 0 : "number" == typeof r;
};
var n$1 = function(r, t, n) {
	return void 0 === t && (t = 0), void 0 === n && (n = Math.pow(10, t)), Math.round(n * r) / n + 0;
};
var e$1 = function(r, t, n) {
	return void 0 === t && (t = 0), void 0 === n && (n = 1), r > n ? n : r > t ? r : t;
};
var u$1 = function(r) {
	return (r = isFinite(r) ? r % 360 : 0) > 0 ? r : r + 360;
};
var a$1 = function(r) {
	return {
		r: e$1(r.r, 0, 255),
		g: e$1(r.g, 0, 255),
		b: e$1(r.b, 0, 255),
		a: e$1(r.a)
	};
};
var o$2 = function(r) {
	return {
		r: n$1(r.r),
		g: n$1(r.g),
		b: n$1(r.b),
		a: n$1(r.a, 3)
	};
};
var i$1 = /^#([0-9a-f]{3,8})$/i;
var s = function(r) {
	var t = r.toString(16);
	return t.length < 2 ? "0" + t : t;
};
var h$1 = function(r) {
	var t = r.r, n = r.g, e = r.b, u = r.a, a = Math.max(t, n, e), o = a - Math.min(t, n, e), i = o ? a === t ? (n - e) / o : a === n ? 2 + (e - t) / o : 4 + (t - n) / o : 0;
	return {
		h: 60 * (i < 0 ? i + 6 : i),
		s: a ? o / a * 100 : 0,
		v: a / 255 * 100,
		a: u
	};
};
var b = function(r) {
	var t = r.h, n = r.s, e = r.v, u = r.a;
	t = t / 360 * 6, n /= 100, e /= 100;
	var a = Math.floor(t), o = e * (1 - n), i = e * (1 - (t - a) * n), s = e * (1 - (1 - t + a) * n), h = a % 6;
	return {
		r: 255 * [
			e,
			i,
			o,
			o,
			s,
			e
		][h],
		g: 255 * [
			s,
			e,
			e,
			i,
			o,
			o
		][h],
		b: 255 * [
			o,
			o,
			s,
			e,
			e,
			i
		][h],
		a: u
	};
};
var g = function(r) {
	return {
		h: u$1(r.h),
		s: e$1(r.s, 0, 100),
		l: e$1(r.l, 0, 100),
		a: e$1(r.a)
	};
};
var d = function(r) {
	return {
		h: n$1(r.h),
		s: n$1(r.s),
		l: n$1(r.l),
		a: n$1(r.a, 3)
	};
};
var f$1 = function(r) {
	return b((n = (t = r).s, {
		h: t.h,
		s: (n *= ((e = t.l) < 50 ? e : 100 - e) / 100) > 0 ? 2 * n / (e + n) * 100 : 0,
		v: e + n,
		a: t.a
	}));
	var t, n, e;
};
var c$1 = function(r) {
	return {
		h: (t = h$1(r)).h,
		s: (u = (200 - (n = t.s)) * (e = t.v) / 100) > 0 && u < 200 ? n * e / 100 / (u <= 100 ? u : 200 - u) * 100 : 0,
		l: u / 2,
		a: t.a
	};
	var t, n, e, u;
};
var l = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var p$1 = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var v = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var m = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var y = {
	string: [
		[function(r) {
			var t = i$1.exec(r);
			return t ? (r = t[1]).length <= 4 ? {
				r: parseInt(r[0] + r[0], 16),
				g: parseInt(r[1] + r[1], 16),
				b: parseInt(r[2] + r[2], 16),
				a: 4 === r.length ? n$1(parseInt(r[3] + r[3], 16) / 255, 2) : 1
			} : 6 === r.length || 8 === r.length ? {
				r: parseInt(r.substr(0, 2), 16),
				g: parseInt(r.substr(2, 2), 16),
				b: parseInt(r.substr(4, 2), 16),
				a: 8 === r.length ? n$1(parseInt(r.substr(6, 2), 16) / 255, 2) : 1
			} : null : null;
		}, "hex"],
		[function(r) {
			var t = v.exec(r) || m.exec(r);
			return t ? t[2] !== t[4] || t[4] !== t[6] ? null : a$1({
				r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
				g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
				b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
				a: void 0 === t[7] ? 1 : Number(t[7]) / (t[8] ? 100 : 1)
			}) : null;
		}, "rgb"],
		[function(t) {
			var n = l.exec(t) || p$1.exec(t);
			if (!n) return null;
			var e, u;
			return f$1(g({
				h: (e = n[1], u = n[2], void 0 === u && (u = "deg"), Number(e) * (r$1[u] || 1)),
				s: Number(n[3]),
				l: Number(n[4]),
				a: void 0 === n[5] ? 1 : Number(n[5]) / (n[6] ? 100 : 1)
			}));
		}, "hsl"]
	],
	object: [
		[function(r) {
			var n = r.r, e = r.g, u = r.b, o = r.a, i = void 0 === o ? 1 : o;
			return t$2(n) && t$2(e) && t$2(u) ? a$1({
				r: Number(n),
				g: Number(e),
				b: Number(u),
				a: Number(i)
			}) : null;
		}, "rgb"],
		[function(r) {
			var n = r.h, e = r.s, u = r.l, a = r.a, o = void 0 === a ? 1 : a;
			if (!t$2(n) || !t$2(e) || !t$2(u)) return null;
			return f$1(g({
				h: Number(n),
				s: Number(e),
				l: Number(u),
				a: Number(o)
			}));
		}, "hsl"],
		[function(r) {
			var n = r.h, a = r.s, o = r.v, i = r.a, s = void 0 === i ? 1 : i;
			if (!t$2(n) || !t$2(a) || !t$2(o)) return null;
			return b(function(r) {
				return {
					h: u$1(r.h),
					s: e$1(r.s, 0, 100),
					v: e$1(r.v, 0, 100),
					a: e$1(r.a)
				};
			}({
				h: Number(n),
				s: Number(a),
				v: Number(o),
				a: Number(s)
			}));
		}, "hsv"]
	]
};
var N = function(r, t) {
	for (var n = 0; n < t.length; n++) {
		var e = t[n][0](r);
		if (e) return [e, t[n][1]];
	}
	return [null, void 0];
};
var x = function(r) {
	return "string" == typeof r ? N(r.trim(), y.string) : "object" == typeof r && null !== r ? N(r, y.object) : [null, void 0];
};
var M = function(r, t) {
	var n = c$1(r);
	return {
		h: n.h,
		s: e$1(n.s + 100 * t, 0, 100),
		l: n.l,
		a: n.a
	};
};
var H = function(r) {
	return (299 * r.r + 587 * r.g + 114 * r.b) / 1e3 / 255;
};
var $ = function(r, t) {
	var n = c$1(r);
	return {
		h: n.h,
		s: n.s,
		l: e$1(n.l + 100 * t, 0, 100),
		a: n.a
	};
};
var j = function() {
	function r(r) {
		this.parsed = x(r)[0], this.rgba = this.parsed || {
			r: 0,
			g: 0,
			b: 0,
			a: 1
		};
	}
	return r.prototype.isValid = function() {
		return null !== this.parsed;
	}, r.prototype.brightness = function() {
		return n$1(H(this.rgba), 2);
	}, r.prototype.isDark = function() {
		return H(this.rgba) < .5;
	}, r.prototype.isLight = function() {
		return H(this.rgba) >= .5;
	}, r.prototype.toHex = function() {
		return r = o$2(this.rgba), t = r.r, e = r.g, u = r.b, i = (a = r.a) < 1 ? s(n$1(255 * a)) : "", "#" + s(t) + s(e) + s(u) + i;
		var r, t, e, u, a, i;
	}, r.prototype.toRgb = function() {
		return o$2(this.rgba);
	}, r.prototype.toRgbString = function() {
		return r = o$2(this.rgba), t = r.r, n = r.g, e = r.b, (u = r.a) < 1 ? "rgba(" + t + ", " + n + ", " + e + ", " + u + ")" : "rgb(" + t + ", " + n + ", " + e + ")";
		var r, t, n, e, u;
	}, r.prototype.toHsl = function() {
		return d(c$1(this.rgba));
	}, r.prototype.toHslString = function() {
		return r = d(c$1(this.rgba)), t = r.h, n = r.s, e = r.l, (u = r.a) < 1 ? "hsla(" + t + ", " + n + "%, " + e + "%, " + u + ")" : "hsl(" + t + ", " + n + "%, " + e + "%)";
		var r, t, n, e, u;
	}, r.prototype.toHsv = function() {
		return r = h$1(this.rgba), {
			h: n$1(r.h),
			s: n$1(r.s),
			v: n$1(r.v),
			a: n$1(r.a, 3)
		};
		var r;
	}, r.prototype.invert = function() {
		return w({
			r: 255 - (r = this.rgba).r,
			g: 255 - r.g,
			b: 255 - r.b,
			a: r.a
		});
		var r;
	}, r.prototype.saturate = function(r) {
		return void 0 === r && (r = .1), w(M(this.rgba, r));
	}, r.prototype.desaturate = function(r) {
		return void 0 === r && (r = .1), w(M(this.rgba, -r));
	}, r.prototype.grayscale = function() {
		return w(M(this.rgba, -1));
	}, r.prototype.lighten = function(r) {
		return void 0 === r && (r = .1), w($(this.rgba, r));
	}, r.prototype.darken = function(r) {
		return void 0 === r && (r = .1), w($(this.rgba, -r));
	}, r.prototype.rotate = function(r) {
		return void 0 === r && (r = 15), this.hue(this.hue() + r);
	}, r.prototype.alpha = function(r) {
		return "number" == typeof r ? w({
			r: (t = this.rgba).r,
			g: t.g,
			b: t.b,
			a: r
		}) : n$1(this.rgba.a, 3);
		var t;
	}, r.prototype.hue = function(r) {
		var t = c$1(this.rgba);
		return "number" == typeof r ? w({
			h: r,
			s: t.s,
			l: t.l,
			a: t.a
		}) : n$1(t.h);
	}, r.prototype.isEqual = function(r) {
		return this.toHex() === w(r).toHex();
	}, r;
}();
var w = function(r) {
	return r instanceof j ? r : new j(r);
};
var S = [];
var k = function(r) {
	r.forEach(function(r) {
		S.indexOf(r) < 0 && (r(j, y), S.push(r));
	});
};
//#endregion
//#region node_modules/colord/plugins/mix.mjs
var t$1 = function(t, a, n) {
	return void 0 === a && (a = 0), void 0 === n && (n = 1), t > n ? n : t > a ? t : a;
};
var a = function(t) {
	var a = t / 255;
	return a < .04045 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4);
};
var n = function(t) {
	return 255 * (t > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t);
};
var r = 96.422;
var o$1 = 100;
var u = 82.521;
var e = function(a) {
	var r, o, u = {
		x: .9555766 * (r = a).x + -.0230393 * r.y + .0631636 * r.z,
		y: -.0282895 * r.x + 1.0099416 * r.y + .0210077 * r.z,
		z: .0122982 * r.x + -.020483 * r.y + 1.3299098 * r.z
	};
	return o = {
		r: n(.032404542 * u.x - .015371385 * u.y - .004985314 * u.z),
		g: n(-.00969266 * u.x + .018760108 * u.y + 41556e-8 * u.z),
		b: n(556434e-9 * u.x - .002040259 * u.y + .010572252 * u.z),
		a: a.a
	}, {
		r: t$1(o.r, 0, 255),
		g: t$1(o.g, 0, 255),
		b: t$1(o.b, 0, 255),
		a: t$1(o.a)
	};
};
var i = function(n) {
	var e = a(n.r), i = a(n.g), p = a(n.b);
	return function(a) {
		return {
			x: t$1(a.x, 0, r),
			y: t$1(a.y, 0, o$1),
			z: t$1(a.z, 0, u),
			a: t$1(a.a)
		};
	}(function(t) {
		return {
			x: 1.0478112 * t.x + .0228866 * t.y + -.050127 * t.z,
			y: .0295424 * t.x + .9904844 * t.y + -.0170491 * t.z,
			z: -.0092345 * t.x + .0150436 * t.y + .7521316 * t.z,
			a: t.a
		};
	}({
		x: 100 * (.4124564 * e + .3575761 * i + .1804375 * p),
		y: 100 * (.2126729 * e + .7151522 * i + .072175 * p),
		z: 100 * (.0193339 * e + .119192 * i + .9503041 * p),
		a: n.a
	}));
};
var p = 216 / 24389;
var h = 24389 / 27;
var f = function(t) {
	var a = i(t), n = a.x / r, e = a.y / o$1, f = a.z / u;
	return n = n > p ? Math.cbrt(n) : (h * n + 16) / 116, {
		l: 116 * (e = e > p ? Math.cbrt(e) : (h * e + 16) / 116) - 16,
		a: 500 * (n - e),
		b: 200 * (e - (f = f > p ? Math.cbrt(f) : (h * f + 16) / 116)),
		alpha: a.a
	};
};
var c = function(a, n, i) {
	var c, y = f(a), x = f(n);
	return function(t) {
		var a = (t.l + 16) / 116, n = t.a / 500 + a, i = a - t.b / 200;
		return e({
			x: (Math.pow(n, 3) > p ? Math.pow(n, 3) : (116 * n - 16) / h) * r,
			y: (t.l > 8 ? Math.pow((t.l + 16) / 116, 3) : t.l / h) * o$1,
			z: (Math.pow(i, 3) > p ? Math.pow(i, 3) : (116 * i - 16) / h) * u,
			a: t.alpha
		});
	}({
		l: t$1((c = {
			l: y.l * (1 - i) + x.l * i,
			a: y.a * (1 - i) + x.a * i,
			b: y.b * (1 - i) + x.b * i,
			alpha: y.alpha * (1 - i) + x.alpha * i
		}).l, 0, 400),
		a: c.a,
		b: c.b,
		alpha: t$1(c.alpha)
	});
};
function mix_default(t) {
	function a(t, a, n) {
		void 0 === n && (n = 5);
		for (var r = [], o = 1 / (n - 1), u = 0; u <= n - 1; u++) r.push(t.mix(a, o * u));
		return r;
	}
	t.prototype.mix = function(a, n) {
		void 0 === n && (n = .5);
		var r = a instanceof t ? a : new t(a);
		return new t(c(this.toRgb(), r.toRgb(), n));
	}, t.prototype.tints = function(t) {
		return a(this, "#fff", t);
	}, t.prototype.shades = function(t) {
		return a(this, "#000", t);
	}, t.prototype.tones = function(t) {
		return a(this, "#808080", t);
	};
}
//#endregion
//#region node_modules/colord/plugins/a11y.mjs
var o = function(o) {
	var t = o / 255;
	return t < .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
};
var t = function(t) {
	return .2126 * o(t.r) + .7152 * o(t.g) + .0722 * o(t.b);
};
function a11y_default(o) {
	o.prototype.luminance = function() {
		return o = t(this.rgba), void 0 === (r = 2) && (r = 0), void 0 === n && (n = Math.pow(10, r)), Math.round(n * o) / n + 0;
		var o, r, n;
	}, o.prototype.contrast = function(r) {
		void 0 === r && (r = "#FFF");
		var n, a, i, e, v, u, d, c = r instanceof o ? r : new o(r);
		return e = this.rgba, v = c.toRgb(), u = t(e), d = t(v), n = u > d ? (u + .05) / (d + .05) : (d + .05) / (u + .05), void 0 === (a = 2) && (a = 0), void 0 === i && (i = Math.pow(10, a)), Math.floor(i * n) / i + 0;
	}, o.prototype.isReadable = function(o, t) {
		return void 0 === o && (o = "#FFF"), void 0 === t && (t = {}), this.contrast(o) >= (e = void 0 === (i = (r = t).size) ? "normal" : i, "AAA" === (a = void 0 === (n = r.level) ? "AA" : n) && "normal" === e ? 7 : "AA" === a && "large" === e ? 3 : 4.5);
		var r, n, a, i, e;
	};
}
//#endregion
//#region node_modules/colord/plugins/names.mjs
function names_default(e, f) {
	var a = {
		white: "#ffffff",
		bisque: "#ffe4c4",
		blue: "#0000ff",
		cadetblue: "#5f9ea0",
		chartreuse: "#7fff00",
		chocolate: "#d2691e",
		coral: "#ff7f50",
		antiquewhite: "#faebd7",
		aqua: "#00ffff",
		azure: "#f0ffff",
		whitesmoke: "#f5f5f5",
		papayawhip: "#ffefd5",
		plum: "#dda0dd",
		blanchedalmond: "#ffebcd",
		black: "#000000",
		gold: "#ffd700",
		goldenrod: "#daa520",
		gainsboro: "#dcdcdc",
		cornsilk: "#fff8dc",
		cornflowerblue: "#6495ed",
		burlywood: "#deb887",
		aquamarine: "#7fffd4",
		beige: "#f5f5dc",
		crimson: "#dc143c",
		cyan: "#00ffff",
		darkblue: "#00008b",
		darkcyan: "#008b8b",
		darkgoldenrod: "#b8860b",
		darkkhaki: "#bdb76b",
		darkgray: "#a9a9a9",
		darkgreen: "#006400",
		darkgrey: "#a9a9a9",
		peachpuff: "#ffdab9",
		darkmagenta: "#8b008b",
		darkred: "#8b0000",
		darkorchid: "#9932cc",
		darkorange: "#ff8c00",
		darkslateblue: "#483d8b",
		gray: "#808080",
		darkslategray: "#2f4f4f",
		darkslategrey: "#2f4f4f",
		deeppink: "#ff1493",
		deepskyblue: "#00bfff",
		wheat: "#f5deb3",
		firebrick: "#b22222",
		floralwhite: "#fffaf0",
		ghostwhite: "#f8f8ff",
		darkviolet: "#9400d3",
		magenta: "#ff00ff",
		green: "#008000",
		dodgerblue: "#1e90ff",
		grey: "#808080",
		honeydew: "#f0fff0",
		hotpink: "#ff69b4",
		blueviolet: "#8a2be2",
		forestgreen: "#228b22",
		lawngreen: "#7cfc00",
		indianred: "#cd5c5c",
		indigo: "#4b0082",
		fuchsia: "#ff00ff",
		brown: "#a52a2a",
		maroon: "#800000",
		mediumblue: "#0000cd",
		lightcoral: "#f08080",
		darkturquoise: "#00ced1",
		lightcyan: "#e0ffff",
		ivory: "#fffff0",
		lightyellow: "#ffffe0",
		lightsalmon: "#ffa07a",
		lightseagreen: "#20b2aa",
		linen: "#faf0e6",
		mediumaquamarine: "#66cdaa",
		lemonchiffon: "#fffacd",
		lime: "#00ff00",
		khaki: "#f0e68c",
		mediumseagreen: "#3cb371",
		limegreen: "#32cd32",
		mediumspringgreen: "#00fa9a",
		lightskyblue: "#87cefa",
		lightblue: "#add8e6",
		midnightblue: "#191970",
		lightpink: "#ffb6c1",
		mistyrose: "#ffe4e1",
		moccasin: "#ffe4b5",
		mintcream: "#f5fffa",
		lightslategray: "#778899",
		lightslategrey: "#778899",
		navajowhite: "#ffdead",
		navy: "#000080",
		mediumvioletred: "#c71585",
		powderblue: "#b0e0e6",
		palegoldenrod: "#eee8aa",
		oldlace: "#fdf5e6",
		paleturquoise: "#afeeee",
		mediumturquoise: "#48d1cc",
		mediumorchid: "#ba55d3",
		rebeccapurple: "#663399",
		lightsteelblue: "#b0c4de",
		mediumslateblue: "#7b68ee",
		thistle: "#d8bfd8",
		tan: "#d2b48c",
		orchid: "#da70d6",
		mediumpurple: "#9370db",
		purple: "#800080",
		pink: "#ffc0cb",
		skyblue: "#87ceeb",
		springgreen: "#00ff7f",
		palegreen: "#98fb98",
		red: "#ff0000",
		yellow: "#ffff00",
		slateblue: "#6a5acd",
		lavenderblush: "#fff0f5",
		peru: "#cd853f",
		palevioletred: "#db7093",
		violet: "#ee82ee",
		teal: "#008080",
		slategray: "#708090",
		slategrey: "#708090",
		aliceblue: "#f0f8ff",
		darkseagreen: "#8fbc8f",
		darkolivegreen: "#556b2f",
		greenyellow: "#adff2f",
		seagreen: "#2e8b57",
		seashell: "#fff5ee",
		tomato: "#ff6347",
		silver: "#c0c0c0",
		sienna: "#a0522d",
		lavender: "#e6e6fa",
		lightgreen: "#90ee90",
		orange: "#ffa500",
		orangered: "#ff4500",
		steelblue: "#4682b4",
		royalblue: "#4169e1",
		turquoise: "#40e0d0",
		yellowgreen: "#9acd32",
		salmon: "#fa8072",
		saddlebrown: "#8b4513",
		sandybrown: "#f4a460",
		rosybrown: "#bc8f8f",
		darksalmon: "#e9967a",
		lightgoldenrodyellow: "#fafad2",
		snow: "#fffafa",
		lightgrey: "#d3d3d3",
		lightgray: "#d3d3d3",
		dimgray: "#696969",
		dimgrey: "#696969",
		olivedrab: "#6b8e23",
		olive: "#808000"
	}, r = {};
	for (var d in a) r[a[d]] = d;
	var l = {};
	e.prototype.toName = function(f) {
		if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return "transparent";
		var d, i, n = r[this.toHex()];
		if (n) return n;
		if (null == f ? void 0 : f.closest) {
			var o = this.toRgb(), t = Infinity, b = "black";
			if (!l.length) for (var c in a) l[c] = new e(a[c]).toRgb();
			for (var g in a) {
				var u = (d = o, i = l[g], Math.pow(d.r - i.r, 2) + Math.pow(d.g - i.g, 2) + Math.pow(d.b - i.b, 2));
				u < t && (t = u, b = g);
			}
			return b;
		}
	};
	f.string.push([function(f) {
		var r = f.toLowerCase(), d = "transparent" === r ? "#0000" : a[r];
		return d ? new e(d).toRgb() : null;
	}, "name"]);
}
//#endregion
//#region node_modules/colord/plugins/harmonies.mjs
function harmonies_default(t) {
	var e = {
		analogous: [
			-30,
			0,
			30
		],
		complementary: [0, 180],
		"double-split-complementary": [
			-30,
			0,
			30,
			150,
			210
		],
		rectangle: [
			0,
			60,
			180,
			240
		],
		tetradic: [
			0,
			90,
			180,
			270
		],
		triadic: [
			0,
			120,
			240
		],
		"split-complementary": [
			0,
			150,
			210
		]
	};
	t.prototype.harmonies = function(t) {
		var r = this;
		return void 0 === t && (t = "complementary"), e[t].map(function(t) {
			return r.rotate(t);
		});
	};
}
//#endregion
//#region src/lib/style/color.ts
k([
	mix_default,
	a11y_default,
	names_default,
	harmonies_default
]);
var VALID = Symbol("VALID");
var OPAQUE = Symbol("OPAQUE");
var READABLE_ON_LIGHT = Symbol("READABLE_ON_LIGHT");
var READABLE_ON_DARK = Symbol("READABLE_ON_DARK");
var ValidColor = class {
	[VALID];
	raw;
	_d;
	constructor(input) {
		const d = typeof input === "string" ? w(input) : input;
		if (!d.isValid()) throw new Error(`Color ${input} is not valid.`);
		this.raw = typeof input === "string" ? input : d.toHex();
		this._d = d;
	}
	d = () => {
		return this._d ?? w(this.raw);
	};
};
var OpaqueColor = class extends ValidColor {
	[OPAQUE];
	constructor(input) {
		super(input);
		if (this.d().alpha() !== 1) throw new Error(`Expected opaque color, ${this.raw} given.`);
	}
};
var ReadableOnLight = class extends OpaqueColor {
	[READABLE_ON_LIGHT];
	constructor(input) {
		super(input);
		if (this.d().brightness() > .2) throw new Error(`Expected a color readable on light backgrounds, found ${this.raw} instead.`);
	}
};
var ReadableOnDark = class extends OpaqueColor {
	[READABLE_ON_DARK];
	constructor(input) {
		super(input);
		if (this.d().brightness() < .8) throw new Error(`Expected a color readable on dark backgrounds, found ${this.raw} instead.`);
	}
};
function validColor(color) {
	return new ValidColor(color);
}
function opaqueColor(color) {
	return new OpaqueColor(color);
}
function readableOnLight(color) {
	return new ReadableOnLight(color);
}
function readableOnDark(color) {
	return new ReadableOnDark(color);
}
function toOpaque(color, opaqueBase) {
	const original = color.d();
	return opaqueColor(opaqueBase.d().mix(original, original.alpha()).alpha(1).toHex());
}
function isLight(color) {
	return color.d().isLight();
}
function colorEquals(color1, color2) {
	return color1.d().isEqual(color2.d());
}
function contrastIsVisible(color1, color2) {
	return color1.d().contrast(color2.d()) > 2;
}
function computeColor1OnColor2(color1, color2, options) {
	const STEP = .1;
	let current = color1;
	let previous = current;
	const color2IsLight = isLight(color2);
	for (let i = 0; i < 10; i++) {
		const checkContrast = options.type === "unlike" ? contrastIsVisible(current, options.contrast) : true;
		const checkMain = options.type === "readable" ? current.d().isReadable(color2.d()) : contrastIsVisible(current, color2);
		if (checkContrast && checkMain) break;
		if (!checkContrast && !checkMain) {
			const unlikeOptions = options;
			return opaqueColor(color2.d().mix(unlikeOptions.contrast.d(), .5));
		}
		current = opaqueColor(!checkMain ? color2IsLight ? current.d().darken(STEP) : current.d().lighten(STEP) : color2IsLight ? current.d().lighten(STEP) : current.d().darken(STEP));
		if (colorEquals(current, previous)) break;
		previous = current;
	}
	return current;
}
//#endregion
//#region src/lib/style/accent.ts
function dryStaticAccent(value) {
	return {
		kind: "static",
		value
	};
}
function staticAccent(value) {
	return {
		kind: "static",
		value: validColor(value)
	};
}
function dynamicAccentFor(value) {
	return {
		kind: "dynamic",
		value
	};
}
function dynamicAccent(value) {
	return dynamicAccentFor(value);
}
function dynamicAccent2(value) {
	return dynamicAccentFor(value);
}
function hydrateAccentFor(accent) {
	return accent.kind === "dynamic" ? accent : {
		...accent,
		value: validColor(accent.value)
	};
}
function hydrateAccent(accent) {
	return hydrateAccentFor(accent);
}
function hydrateAccent2(accent) {
	return hydrateAccentFor(accent);
}
function dehydrateAccentFor(accent) {
	return accent.kind === "dynamic" ? accent : {
		...accent,
		value: accent.value.raw
	};
}
function dehydrateAccent(accent) {
	return dehydrateAccentFor(accent);
}
function dehydrateAccent2(accent) {
	return dehydrateAccentFor(accent);
}
//#endregion
//#region src/lib/style/config.ts
var PRESET_GENERAL = {
	onLight: ON_LIGHT,
	onDark: ON_DARK,
	accent2: dynamicAccent2("AccentComplementary")
};
var PRESET_TOGGLEABLE = presetToggleable();
var PRESET_SYSTEM = presetSystem();
var PRESET_CLOUDY = {
	...PRESET_TOGGLEABLE,
	accent: dynamicAccent("OnPage"),
	themes: [...PRESET_TOGGLEABLE.themes, {
		page: "#697c80",
		tags: ["cloudy"]
	}]
};
var ACCENT = "#67787c";
var JENNI_ACCENT = "#F00073";
var BLUE_ACCENT = "#36D";
var GREEN_ACCENT = "#61B09C";
var ORANGE_ACCENT = "#E8541A";
var YELLOW_ACCENT = "#D9ED00";
var STYLE_PRESETS = {
	default: {
		...PRESET_SYSTEM,
		accent: dryStaticAccent(ACCENT),
		accent2: dryStaticAccent(ORANGE_ACCENT)
	},
	hotPink: {
		...PRESET_SYSTEM,
		accent: dryStaticAccent(JENNI_ACCENT)
	},
	blue: {
		...PRESET_SYSTEM,
		accent: dryStaticAccent(BLUE_ACCENT)
	},
	monochrome: {
		...PRESET_SYSTEM,
		accent: dynamicAccent("Page")
	},
	red: {
		...PRESET_SYSTEM,
		accent: dryStaticAccent("#d6546b")
	},
	toggleable: {
		...PRESET_TOGGLEABLE,
		accent: dryStaticAccent(ACCENT)
	},
	cloudy: PRESET_CLOUDY,
	weather: {
		...PRESET_CLOUDY,
		themes: [
			...PRESET_CLOUDY.themes,
			{
				page: "#4a6583",
				tags: ["rainy"]
			},
			{
				page: "#777",
				accent: dryStaticAccent("#222"),
				tags: ["stormy"]
			},
			{
				page: "#def",
				accent: dryStaticAccent("#fff"),
				tags: ["snowy"]
			}
		]
	}
};
STYLE_PRESETS.default;
function presetToggleable(light = LIGHT, dark = DARK) {
	return {
		...PRESET_GENERAL,
		preference: "custom",
		themes: [{ page: getSystemTheme() === "dark" ? dark : light }, { page: getSystemTheme() === "light" ? dark : light }]
	};
}
function presetSystem(light = LIGHT, dark = DARK) {
	return {
		...PRESET_GENERAL,
		preference: "system",
		themes: [{ page: dark }, { page: light }]
	};
}
function hydratePreset(preset) {
	const tagRotation = preset.tagRotation ? new Set(preset.tagRotation) : void 0;
	const preference = preset.preference;
	const prefSystem = preference === "system";
	const prefSystemOrLight = prefSystem || preference === "light";
	const prefSystemOrDark = prefSystem || preference === "dark";
	const prefCustom = preference === "custom";
	let selected = void 0, selectedDark = void 0, selectedLight = void 0;
	const inRotation = [], inDarkRotation = [], inLightrotation = [];
	const themes = mapNonEmpty(preset.themes, ({ selected: presetSelected, selectedDark: presetSelectedDark, selectedLight: presetSelectedLight, ...theme }) => {
		const id = crypto.randomUUID();
		const page = opaqueColor(theme.page);
		const light = isLight(page);
		const tags = theme.tags ? new Set(theme.tags) : void 0;
		if (presetSelected && !selected) selected = id;
		if (presetSelectedDark && !selectedDark) {
			if (light) throw new Error(`Selected color for dark theme ${page.raw} is light.`);
			selectedDark = id;
		}
		if (presetSelectedLight && !selectedLight) {
			if (!light) throw new Error(`Selected color for light theme ${page.raw} is dark.`);
			selectedLight = id;
		}
		if (tagRotation?.size) {
			if (tags?.size && tagRotation.intersection(tags).size) inRotation.push(id);
		} else inRotation.push(id);
		if (light) inLightrotation.push(id);
		else inDarkRotation.push(id);
		return {
			...theme,
			id,
			page,
			tags,
			accent: theme.accent ? hydrateAccent(theme.accent) : void 0,
			accent2: theme.accent2 ? hydrateAccent2(theme.accent2) : void 0,
			onLight: theme.onLight ? readableOnLight(theme.onLight) : void 0,
			onDark: theme.onDark ? readableOnDark(theme.onDark) : void 0
		};
	});
	if (!selected && prefCustom) {
		const id = inRotation[0];
		if (!id) throw new Error(`Application theme not provided.`);
		selected = id;
	}
	if (!selectedDark && prefSystemOrDark) {
		const id = inDarkRotation[0];
		if (!id) throw new Error(`Dark mode theme not provided.`);
		selectedDark = id;
	}
	if (!selectedLight && prefSystemOrLight) {
		const id = inLightrotation[0];
		if (!id) throw new Error(`Light mode theme not provided.`);
		selectedLight = id;
	}
	return {
		...preset,
		accent: preset.accent ? hydrateAccent(preset.accent) : void 0,
		accent2: preset.accent2 ? hydrateAccent2(preset.accent) : void 0,
		onLight: preset.onLight ? readableOnLight(preset.onLight) : void 0,
		onDark: preset.onDark ? readableOnDark(preset.onDark) : void 0,
		themes,
		selected,
		selectedLight,
		selectedDark,
		tagRotation
	};
}
//#endregion
//#region node_modules/typia/lib/internal/_isFormatUuid.mjs
var _isFormatUuid = (str) => PATTERN.test(str);
var PATTERN = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
//#endregion
//#region src/lib/style/persist.ts
var BASE_STYLE_KEY = `${LOCALSTORAGE_PREFIX}style`;
function loadStyle(key, defaultStyle) {
	const storedString = localStorage.getItem(getStyleKey(key));
	if (!storedString) return hydratePreset(defaultStyle);
	try {
		const stored = JSON.parse(storedString);
		if ((() => {
			const _iv4 = /* @__PURE__ */ new Set([
				"Page",
				"PageComplementary",
				"PageInverted",
				"NextTheme",
				"OnPage",
				"OnPageComplementary",
				"OnPageInverted",
				"OnNextTheme",
				"OffPage",
				"OffPageComplementary",
				"OffPageInverted",
				"OffNextTheme",
				"OnLight",
				"OnDark"
			]);
			const _iv5 = /* @__PURE__ */ new Set([
				"Page",
				"PageComplementary",
				"PageInverted",
				"NextTheme",
				"OnPage",
				"OnPageComplementary",
				"OnPageInverted",
				"OnNextTheme",
				"OffPage",
				"OffPageComplementary",
				"OffPageInverted",
				"OffNextTheme",
				"OnLight",
				"OnDark",
				"AccentOpaque",
				"AccentComplementary",
				"AccentInverted",
				"OnAccent",
				"OnAccentComplementary",
				"OnAccentInverted",
				"OffAccent",
				"OffAccentComplementary",
				"OffAccentInverted",
				"PageUnlikeAccent",
				"PageReadableOnAccent",
				"PageVisibleOnAccent",
				"AccentUnlikePage",
				"AccentReadableOnPage",
				"AccentVisibleOnPage",
				"OnPageUnlikeAccent",
				"OnPageReadableOnAccent",
				"OnPageVisibleOnAccent",
				"OnAccentUnlikePage",
				"OnAccentReadableOnPage",
				"OnAccentVisibleOnPage"
			]);
			const _io0 = (input) => "custom" === input.preference && (void 0 === input.tagRotation || Array.isArray(input.tagRotation) && input.tagRotation.every((elem) => "string" === typeof elem)) && Array.isArray(input.themes) && "object" === typeof input.themes[0] && null !== input.themes[0] && _io1(input.themes[0]) && Array.isArray(input.themes.slice(1)) && input.themes.slice(1).every((elem) => "object" === typeof elem && null !== elem && _io1(elem)) && "string" === typeof input.onLight && "string" === typeof input.onDark && "object" === typeof input.accent && null !== input.accent && _iu0(input.accent) && (void 0 === input.accent2 || "object" === typeof input.accent2 && null !== input.accent2 && _iu1(input.accent2)) && "string" === typeof input.selected && _isFormatUuid(input.selected) && (void 0 === input.selectedLight || "string" === typeof input.selectedLight && _isFormatUuid(input.selectedLight)) && (void 0 === input.selectedDark || "string" === typeof input.selectedDark && _isFormatUuid(input.selectedDark));
			const _io1 = (input) => (void 0 === input.tags || Array.isArray(input.tags) && input.tags.every((elem) => "string" === typeof elem)) && "string" === typeof input.page && (void 0 === input.onLight || "string" === typeof input.onLight) && (void 0 === input.onDark || "string" === typeof input.onDark) && (void 0 === input.accent || "object" === typeof input.accent && null !== input.accent && _iu0(input.accent)) && (void 0 === input.accent2 || "object" === typeof input.accent2 && null !== input.accent2 && _iu1(input.accent2)) && "string" === typeof input.id && _isFormatUuid(input.id);
			const _io2 = (input) => "dynamic" === input.kind && true === _iv4.has(input.value);
			const _io3 = (input) => "static" === input.kind && "string" === typeof input.value;
			const _io4 = (input) => "dynamic" === input.kind && true === _iv5.has(input.value);
			const _io5 = (input) => "light" === input.preference && (void 0 === input.tagRotation || Array.isArray(input.tagRotation) && input.tagRotation.every((elem) => "string" === typeof elem)) && Array.isArray(input.themes) && "object" === typeof input.themes[0] && null !== input.themes[0] && _io1(input.themes[0]) && Array.isArray(input.themes.slice(1)) && input.themes.slice(1).every((elem) => "object" === typeof elem && null !== elem && _io1(elem)) && "string" === typeof input.onLight && "string" === typeof input.onDark && "object" === typeof input.accent && null !== input.accent && _iu0(input.accent) && (void 0 === input.accent2 || "object" === typeof input.accent2 && null !== input.accent2 && _iu1(input.accent2)) && (void 0 === input.selected || "string" === typeof input.selected && _isFormatUuid(input.selected)) && "string" === typeof input.selectedLight && _isFormatUuid(input.selectedLight) && (void 0 === input.selectedDark || "string" === typeof input.selectedDark && _isFormatUuid(input.selectedDark));
			const _io6 = (input) => "dark" === input.preference && (void 0 === input.tagRotation || Array.isArray(input.tagRotation) && input.tagRotation.every((elem) => "string" === typeof elem)) && Array.isArray(input.themes) && "object" === typeof input.themes[0] && null !== input.themes[0] && _io1(input.themes[0]) && Array.isArray(input.themes.slice(1)) && input.themes.slice(1).every((elem) => "object" === typeof elem && null !== elem && _io1(elem)) && "string" === typeof input.onLight && "string" === typeof input.onDark && "object" === typeof input.accent && null !== input.accent && _iu0(input.accent) && (void 0 === input.accent2 || "object" === typeof input.accent2 && null !== input.accent2 && _iu1(input.accent2)) && (void 0 === input.selected || "string" === typeof input.selected && _isFormatUuid(input.selected)) && (void 0 === input.selectedLight || "string" === typeof input.selectedLight && _isFormatUuid(input.selectedLight)) && "string" === typeof input.selectedDark && _isFormatUuid(input.selectedDark);
			const _io7 = (input) => "system" === input.preference && (void 0 === input.tagRotation || Array.isArray(input.tagRotation) && input.tagRotation.every((elem) => "string" === typeof elem)) && Array.isArray(input.themes) && "object" === typeof input.themes[0] && null !== input.themes[0] && _io1(input.themes[0]) && Array.isArray(input.themes.slice(1)) && input.themes.slice(1).every((elem) => "object" === typeof elem && null !== elem && _io1(elem)) && "string" === typeof input.onLight && "string" === typeof input.onDark && "object" === typeof input.accent && null !== input.accent && _iu0(input.accent) && (void 0 === input.accent2 || "object" === typeof input.accent2 && null !== input.accent2 && _iu1(input.accent2)) && (void 0 === input.selected || "string" === typeof input.selected && _isFormatUuid(input.selected)) && "string" === typeof input.selectedLight && _isFormatUuid(input.selectedLight) && "string" === typeof input.selectedDark && _isFormatUuid(input.selectedDark);
			const _iu0 = (input) => (() => {
				if ("static" === input.kind) return _io3(input);
				else if ("dynamic" === input.kind) return _io2(input);
				else return false;
			})();
			const _iu1 = (input) => (() => {
				if ("dynamic" === input.kind) return _io4(input);
				else if ("static" === input.kind) return _io3(input);
				else return false;
			})();
			const _iu2 = (input) => (() => {
				if ("system" === input.preference) return _io7(input);
				else if ("dark" === input.preference) return _io6(input);
				else if ("light" === input.preference) return _io5(input);
				else if ("custom" === input.preference) return _io0(input);
				else return false;
			})();
			return (input) => "object" === typeof input && null !== input && _iu2(input);
		})()(stored)) return hydrateStylePersist(stored);
		return hydratePreset(defaultStyle);
	} catch {
		return hydratePreset(defaultStyle);
	}
}
function persistStyle(style, key) {
	const dry = dehydrateStyle(style);
	localStorage.setItem(getStyleKey(key), JSON.stringify(dry));
}
function getStyleKey(key) {
	if (key) return `${BASE_STYLE_KEY}.${key}`;
	else return BASE_STYLE_KEY;
}
function hydrateStylePersist(stored) {
	return {
		...stored,
		accent: hydrateAccent(stored.accent),
		accent2: stored.accent2 ? hydrateAccent2(stored.accent2) : void 0,
		onLight: readableOnLight(stored.onLight),
		onDark: readableOnDark(stored.onDark),
		tagRotation: stored.tagRotation ? new Set(stored.tagRotation) : void 0,
		themes: mapNonEmpty(stored.themes, (theme) => ({
			...theme,
			page: opaqueColor(theme.page),
			accent: theme.accent ? hydrateAccent(theme.accent) : void 0,
			accent2: theme.accent2 ? hydrateAccent2(theme.accent2) : void 0,
			onLight: theme.onLight ? readableOnLight(theme.onLight) : void 0,
			onDark: theme.onDark ? readableOnDark(theme.onDark) : void 0,
			tags: theme.tags ? new Set(theme.tags) : void 0
		}))
	};
}
function dehydrateStyle(style) {
	return {
		...style,
		accent: dehydrateAccent(style.accent),
		accent2: style.accent2 ? dehydrateAccent2(style.accent2) : void 0,
		onLight: style.onLight.raw,
		onDark: style.onDark.raw,
		tagRotation: style.tagRotation ? [...style.tagRotation] : void 0,
		themes: mapNonEmpty(style.themes, (theme) => ({
			...theme,
			page: theme.page.raw,
			accent: theme.accent ? dehydrateAccent(theme.accent) : void 0,
			accent2: theme.accent2 ? dehydrateAccent2(theme.accent2) : void 0,
			tags: theme.tags ? [...theme.tags] : void 0
		}))
	};
}
//#endregion
//#region ~icons/icon-park-outline/sun-one.svelte
var rest_excludes$5 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy"
]);
var root$5 = from_svg(`<svg><g fill="none"><path stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M24 37c7.18 0 13-5.82 13-13s-5.82-13-13-13s-13 5.82-13 13s5.82 13 13 13Z"></path><path fill="currentColor" d="M24 6a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m14.5 6a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m6 14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m-6 14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M24 47a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M9.5 41a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m-6-14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m6-14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></path></g></svg>`);
function Sun_one($$anchor, $$props) {
	const p = rest_props($$props, rest_excludes$5);
	var svg = root$5();
	attribute_effect(svg, () => ({
		viewBox: "0 0 48 48",
		width: "1.2em",
		height: "1.2em",
		...p
	}));
	append($$anchor, svg);
}
//#endregion
//#region ~icons/ri/moon-fill.svelte
var rest_excludes$4 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy"
]);
var root$4 = from_svg(`<svg><path fill="currentColor" d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22C6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981"></path></svg>`);
function Moon_fill($$anchor, $$props) {
	const p = rest_props($$props, rest_excludes$4);
	var svg = root$4();
	attribute_effect(svg, () => ({
		viewBox: "0 0 24 24",
		width: "1.2em",
		height: "1.2em",
		...p
	}));
	append($$anchor, svg);
}
//#endregion
//#region ~icons/carbon/mostly-cloudy.svelte
var rest_excludes$3 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy"
]);
var root$3 = from_svg(`<svg><path fill="currentColor" d="M21.743 18.692a6 6 0 0 0 1.057-1.086a5.998 5.998 0 1 0-10.733-4.445A7.56 7.56 0 0 0 6.35 18.25A5.993 5.993 0 0 0 8 30.005h11a5.985 5.985 0 0 0 2.743-11.313M18 10.005a4.004 4.004 0 0 1 4 4a3.96 3.96 0 0 1-.8 2.4a4 4 0 0 1-.94.891a7.54 7.54 0 0 0-6.134-4.24A4 4 0 0 1 18 10.006m1 18H8a3.993 3.993 0 0 1-.673-7.93l.663-.112l.146-.656a5.496 5.496 0 0 1 10.729 0l.146.656l.662.112a3.993 3.993 0 0 1-.673 7.93m7-15.001h4v2h-4zM22.95 7.64l2.828-2.827l1.415 1.414l-2.829 2.828zM17 2.005h2v4h-2zM8.808 6.227l1.414-1.414l2.829 2.828l-1.415 1.414z"></path></svg>`);
function Mostly_cloudy($$anchor, $$props) {
	const p = rest_props($$props, rest_excludes$3);
	var svg = root$3();
	attribute_effect(svg, () => ({
		viewBox: "0 0 32 32",
		width: "1.2em",
		height: "1.2em",
		...p
	}));
	append($$anchor, svg);
}
//#endregion
//#region ~icons/material-symbols/rainy-outline.svelte
var rest_excludes$2 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy"
]);
var root$2 = from_svg(`<svg><path fill="currentColor" d="M13.95 21.9q-.375.2-.762.063t-.588-.513l-1.5-3q-.2-.375-.062-.762t.512-.588t.763-.062t.587.512l1.5 3q.2.375.063.763t-.513.587m6 0q-.375.2-.762.063t-.588-.513l-1.5-3q-.2-.375-.062-.762t.512-.588t.763-.062t.587.512l1.5 3q.2.375.063.763t-.513.587m-12 0q-.375.2-.762.063T6.6 21.45l-1.5-3q-.2-.375-.062-.762t.512-.588t.763-.062t.587.512l1.5 3q.2.375.063.763t-.513.587M7.5 16q-2.275 0-3.887-1.612T2 10.5q0-2.075 1.375-3.625t3.4-1.825q.8-1.425 2.188-2.238T12 2q2.25 0 3.913 1.438t2.012 3.587q1.725.15 2.9 1.425T22 11.5q0 1.875-1.312 3.188T17.5 16zm0-2h10q1.05 0 1.775-.725T20 11.5t-.725-1.775T17.5 9H16V8q0-1.65-1.175-2.825T12 4q-1.2 0-2.187.65T8.325 6.4l-.25.6H7.45q-1.425.05-2.437 1.063T4 10.5q0 1.45 1.025 2.475T7.5 14M12 9"></path></svg>`);
function Rainy_outline($$anchor, $$props) {
	const p = rest_props($$props, rest_excludes$2);
	var svg = root$2();
	attribute_effect(svg, () => ({
		viewBox: "0 0 24 24",
		width: "1.2em",
		height: "1.2em",
		...p
	}));
	append($$anchor, svg);
}
//#endregion
//#region ~icons/famicons/thunderstorm-outline.svelte
var rest_excludes$1 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy"
]);
var root$1 = from_svg(`<svg><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m120 352l-24 48m40 32l-16 32m280-112l-24 48m40 32l-16 32M208 304l-16 96h48v80l80-112h-48l16-64m116.33-151.11H392.2C384.71 84.85 326.14 32 256 32a136.39 136.39 0 0 0-128.63 90.67h-4.57c-49.94 0-90.8 40.8-90.8 90.66h0C32 263.2 72.86 304 122.8 304h281.53C446 304 480 270 480 228.44h0c0-41.55-34-75.55-75.67-75.55"></path></svg>`);
function Thunderstorm_outline($$anchor, $$props) {
	const p = rest_props($$props, rest_excludes$1);
	var svg = root$1();
	attribute_effect(svg, () => ({
		viewBox: "0 0 512 512",
		width: "1.2em",
		height: "1.2em",
		...p
	}));
	append($$anchor, svg);
}
//#endregion
//#region ~icons/material-symbols/cloudy-snowing.svelte
var rest_excludes = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy"
]);
var root = from_svg(`<svg><path fill="currentColor" d="M6 19q-.425 0-.712-.288T5 18t.288-.712T6 17t.713.288T7 18t-.288.713T6 19m12 0q-.425 0-.712-.288T17 18t.288-.712T18 17t.713.288T19 18t-.288.713T18 19m-9 4q-.425 0-.712-.288T8 22t.288-.712T9 21t.713.288T10 22t-.288.713T9 23m3-4q-.425 0-.712-.288T11 18t.288-.712T12 17t.713.288T13 18t-.288.713T12 19m3 4q-.425 0-.712-.288T14 22t.288-.712T15 21t.713.288T16 22t-.288.713T15 23m-7.5-7q-2.275 0-3.887-1.612T2 10.5q0-2.075 1.375-3.625t3.4-1.825q.8-1.425 2.188-2.238T12 2q2.25 0 3.913 1.438t2.012 3.587q1.725.15 2.9 1.425T22 11.5q0 1.875-1.312 3.188T17.5 16z"></path></svg>`);
function Cloudy_snowing($$anchor, $$props) {
	const p = rest_props($$props, rest_excludes);
	var svg = root();
	attribute_effect(svg, () => ({
		viewBox: "0 0 24 24",
		width: "1.2em",
		height: "1.2em",
		...p
	}));
	append($$anchor, svg);
}
//#endregion
//#region src/lib/style/derived.ts
var SPECIAL_TAG_NAMES = [
	"cloudy",
	"rainy",
	"stormy",
	"snowy"
];
function computeRuntimeInfo(runtime, systemTheme) {
	const selectionProperty = getSelectedProperty(runtime.preference, systemTheme);
	const selectedThemeId = runtime[selectionProperty];
	const selectedTheme = findTheme(selectedThemeId, runtime.themes, "Selected theme not found, style state is invalid.");
	const valid = getValidThemes(runtime.preference, runtime.themes, runtime.tagRotation, systemTheme);
	const nextTheme = valid[nextIndex(findThemeIndex(selectedThemeId, valid, "Selected theme is not valid."), valid.length)];
	return {
		selectionProperty,
		selectedTheme,
		nextTheme,
		nextThemeIcon: getIcon(nextTheme.tags, isLight(nextTheme.page))
	};
}
function nextIndex(current, length) {
	return (current + 1) % length;
}
function findTheme(id, themes, errorMessage) {
	return themes[findThemeIndex(id, themes, errorMessage)];
}
function findThemeIndex(id, themes, errorMessage = "Couldn't find searched theme.") {
	const index = themes.findIndex((theme) => theme.id === id);
	if (index === -1) throw new Error(errorMessage);
	return index;
}
function getValidThemes(preference, themes, tagRotation, systemPreference) {
	const valid = themes.filter((theme) => {
		if (preference === "custom") if (tagRotation?.size) return theme.tags?.size ? tagRotation.intersection(theme.tags) : false;
		else return true;
		else {
			const light = isLight(theme.page);
			switch (getStyleColorscheme(preference, systemPreference)) {
				case "light": return light;
				case "dark": return !light;
			}
		}
	});
	assertNonEmpty(valid, "No valid themes found.");
	return valid;
}
function getStyleColorscheme(stylePreference, systemPreference) {
	switch (stylePreference) {
		case "dark":
		case "light": return stylePreference;
		case "system": return systemPreference ?? getSystemTheme();
	}
}
function getSelectedProperty(stylePreference, systemPreference) {
	switch (stylePreference) {
		case "custom": return "selected";
		case "dark": return "selectedDark";
		case "light": return "selectedLight";
		case "system": return systemPreference === "light" ? "selectedLight" : "selectedDark";
	}
}
function getIcon(themeTags, isLight) {
	const sunMoon = () => isLight ? Sun_one : Moon_fill;
	if (!themeTags) return sunMoon();
	const present = themeTags.intersection(new Set(SPECIAL_TAG_NAMES));
	if (present.size === 0) return sunMoon();
	switch (present.values().next().value) {
		case "cloudy": return Mostly_cloudy;
		case "rainy": return Rainy_outline;
		case "snowy": return Cloudy_snowing;
		case "stormy": return Thunderstorm_outline;
	}
}
//#endregion
//#region src/lib/style/mutation.ts
function setPreference(preference, style, systemTheme, computed) {
	const valid = getValidThemes(preference, style.themes, style.tagRotation, systemTheme);
	const oldSelectedId = computed.selectedTheme.id;
	const newTargetProperty = getSelectedProperty(preference, systemTheme);
	const cached = style[newTargetProperty];
	const isOldThemeStillValid = () => valid.some((theme) => theme.id === oldSelectedId);
	let newSelected;
	if (cached) newSelected = cached;
	else if (isOldThemeStillValid()) newSelected = oldSelectedId;
	else newSelected = valid[0].id;
	style[newTargetProperty] = newSelected, style.preference = preference;
}
function nextTheme(style, computed) {
	style[computed.selectionProperty] = computed.nextTheme.id;
}
//#endregion
//#region src/lib/strings.ts
function convertStringPrefix(input, entries) {
	for (const [from, to] of entries) if (input.startsWith(from)) return to + input.slice(from.length);
	throw new Error(`String ${input} has incorrect prefix.`);
}
//#endregion
//#region src/lib/style/accent-variables.ts
function computeAllAccentVariables(deps) {
	const accentVariables = computeAccentVariables(deps);
	const accent2Deps = {
		...deps,
		...accentVariables
	};
	const accent2Variables = computeAccent2Variables(accent2Deps);
	return {
		...accent2Deps,
		...accent2Variables
	};
}
function computeAccentVariablesFor(accentName, deps) {
	const raw = deps[accentName];
	const validColor = raw.kind === "dynamic" ? deps[raw.value] : raw.value;
	const opaque = toOpaque(validColor, deps.Page);
	const complementary = opaqueColor(opaque.d().harmonies("complementary")[1]);
	const inverted = opaqueColor(opaque.d().invert());
	const unlikePage = computeColor1OnColor2(opaque, deps.Page, {
		type: "unlike",
		contrast: deps.OnPage
	});
	const readableOnPage = computeColor1OnColor2(opaque, deps.Page, { type: "readable" });
	const visibleOnPage = computeColor1OnColor2(opaque, deps.Page, { type: "visible" });
	const onAccent = raw.kind === "dynamic" ? deps[toggleVariableContrastPrefix(raw.value)] : isLight(opaque) ? deps.OnLight : deps.OnDark;
	const offAccent = raw.kind === "dynamic" ? deps[getOtherNonContrastingPrefix(raw.value)] : isLight(opaque) ? deps.OnDark : deps.OnLight;
	const pageUnlike = computeColor1OnColor2(deps.Page, opaque, {
		type: "unlike",
		contrast: onAccent
	});
	const pageReadableOn = computeColor1OnColor2(deps.Page, opaque, { type: "readable" });
	const pageVisibleOn = computeColor1OnColor2(deps.Page, opaque, { type: "visible" });
	const variants = {
		[`${accentName}Complementary`]: complementary,
		[`${accentName}Inverted`]: inverted
	};
	const crossPage = {
		[`${accentName}UnlikePage`]: unlikePage,
		[`${accentName}ReadableOnPage`]: readableOnPage,
		[`${accentName}VisibleOnPage`]: visibleOnPage,
		[`PageUnlike${accentName}`]: pageUnlike,
		[`PageReadableOn${accentName}`]: pageReadableOn,
		[`PageVisibleOn${accentName}`]: pageVisibleOn
	};
	const variantContrasts = computeContrasts(deps.OnLight, deps.OnDark, variants);
	const crossContrasts = computeContrasts(deps.OnLight, deps.OnDark, crossPage, true);
	return {
		[accentName]: validColor,
		[`On${accentName}`]: onAccent,
		[`Off${accentName}`]: offAccent,
		[`${accentName}Opaque`]: opaque,
		...variants,
		...variantContrasts,
		...crossPage,
		...crossContrasts
	};
}
function computeAccentVariables(deps) {
	return computeAccentVariablesFor("Accent", deps);
}
function computeAccent2Variables(deps) {
	const accentCommons = computeAccentVariablesFor("Accent2", deps);
	const crossDependencies = {
		...deps,
		...accentCommons
	};
	const crossed = {};
	for (const [name1, name2] of [["Accent", "Accent2"], ["Accent2", "Accent"]]) {
		crossed[`${name1}Unlike${name2}`] = computeColor1OnColor2(crossDependencies[`${name1}Opaque`], crossDependencies[`${name2}Opaque`], {
			type: "unlike",
			contrast: crossDependencies[`On${name2}`]
		});
		crossed[`${name1}ReadableOn${name2}`] = computeColor1OnColor2(crossDependencies[`${name1}Opaque`], crossDependencies[`${name2}Opaque`], { type: "readable" });
		crossed[`${name1}VisibleOn${name2}`] = computeColor1OnColor2(crossDependencies[`${name1}Opaque`], crossDependencies[`${name2}Opaque`], { type: "visible" });
	}
	const crossContrasts = computeContrasts(crossDependencies.OnLight, crossDependencies.OnDark, crossed, true);
	return {
		...crossDependencies,
		...crossed,
		...crossContrasts
	};
}
var TOGGLE_CONTRAST_PREFIX_MAP = [
	["OnLight", "OnDark"],
	["OnDark", "OnLight"],
	["AccentOpaque", "OnAccent"],
	["Accent2Opaque", "OnAccent2"],
	["OnAccent", "AccentOpaque"],
	["OnAccent2", "Accent2Opaque"],
	["Off", "On"],
	["On", ""],
	["", "On"]
];
function toggleVariableContrastPrefix(varName) {
	return convertStringPrefix(varName, TOGGLE_CONTRAST_PREFIX_MAP);
}
var NON_CONTRASTING_PREFIX_MAP = [
	["OnLight", "OnLight"],
	["OnDark", "OnDark"],
	["On", "On"],
	["OffAccent", "AccentOpaque"],
	["OffAccent2", "Accent2Opaque"],
	["AccentOpaque", "OffAccent"],
	["Accent2Opaque", "OffAccent2"],
	["Off", ""],
	["", "Off"]
];
function getOtherNonContrastingPrefix(varName) {
	return convertStringPrefix(varName, NON_CONTRASTING_PREFIX_MAP);
}
//#endregion
//#region src/lib/style/variables.ts
function computeIndependentVariables(runtime, info) {
	const OnLight = info.selectedTheme.onLight ?? runtime.onLight;
	const OnDark = info.selectedTheme.onDark ?? runtime.onDark;
	const Page = info.selectedTheme.page;
	const NextTheme = info.nextTheme.page;
	const Accent = info.selectedTheme.accent ?? runtime.accent;
	return {
		OnLight,
		OnDark,
		Page,
		NextTheme,
		Accent,
		Accent2: info.selectedTheme.accent2 ?? runtime.accent2 ?? Accent
	};
}
function computeAllVariables({ OnLight, OnDark, Page, NextTheme, ...accents }) {
	const pages = {
		Page,
		NextTheme,
		PageComplementary: opaqueColor(Page.d().harmonies("complementary")[1]),
		PageInverted: opaqueColor(Page.d().invert())
	};
	const pageContrasts = computeContrasts(OnLight, OnDark, pages);
	const accentDependencies = {
		...pages,
		...pageContrasts,
		...accents,
		OnLight,
		OnDark
	};
	const accentVariables = computeAllAccentVariables(accentDependencies);
	return {
		...accentDependencies,
		...accentVariables
	};
}
function computeContrasts(onLight, onDark, record, onlyOn = false) {
	return Object.fromEntries(Object.entries(record).flatMap(([key, color]) => {
		const light = isLight(color);
		return onlyOn ? [[`On${key}`, light ? onLight : onDark]] : [[`On${key}`, light ? onLight : onDark], [`Off${key}`, light ? onDark : onLight]];
	}));
}
//#endregion
//#region node_modules/@wailsio/runtime/dist/environment.js
/**
* True when running inside a browser/webview with a DOM available.
* False under server-side rendering (e.g. `next build` prerendering),
* where application code may import the runtime module even though no
* Wails APIs can actually be used (#4679). Modules must not touch
* `window`/`document` at import time except behind this guard.
*/
var hasDOM = typeof window !== "undefined" && typeof document !== "undefined";
//#endregion
//#region node_modules/@wailsio/runtime/dist/nanoid.js
var urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
function nanoid(size = 21) {
	let id = "";
	let i = size | 0;
	while (i--) id += urlAlphabet[Math.random() * 64 | 0];
	return id;
}
//#endregion
//#region node_modules/@wailsio/runtime/dist/runtime.js
var _a;
function runtimeURL() {
	return window.location.origin + "/wails/runtime";
}
var CHUNK_THRESHOLD = 524288;
/**
* Exception class that will be thrown in case the bound method returns an error.
* The value of the {@link RuntimeError#name} property is "RuntimeError".
*/
var RuntimeError = class extends Error {
	/**
	* Constructs a new RuntimeError instance.
	* @param message - The error message.
	* @param options - Options to be forwarded to the Error constructor.
	*/
	constructor(message, options) {
		super(message, options);
		this.name = "RuntimeError";
	}
};
var objectNames = Object.freeze({
	Call: 0,
	Clipboard: 1,
	Application: 2,
	Events: 3,
	ContextMenu: 4,
	Dialog: 5,
	Window: 6,
	Screens: 7,
	System: 8,
	Browser: 9,
	CancelCall: 10,
	IOS: 11,
	Android: 12
});
var clientId = nanoid();
/**
* Custom transport implementation (can be set by user)
*/
var customTransport = null;
/**
* Creates a new runtime caller with specified ID.
*
* @param object - The object to invoke the method on.
* @param windowName - The name of the window.
* @return The new runtime caller function.
*/
function newRuntimeCaller(object, windowName = "") {
	return function(method, args = null) {
		return runtimeCallWithID(object, method, windowName, args);
	};
}
async function runtimeCallWithID(objectID, method, windowName, args) {
	var _a, _b;
	if (customTransport) return customTransport.call(objectID, method, windowName, args);
	let url = new URL(runtimeURL());
	let body = {
		object: objectID,
		method
	};
	if (args !== null && args !== void 0) body.args = args;
	let headers = {
		["x-wails-client-id"]: clientId,
		["Content-Type"]: "application/json"
	};
	if (windowName) headers["x-wails-window-name"] = windowName;
	const bodyStr = JSON.stringify(body);
	let response;
	if (bodyStr.length > CHUNK_THRESHOLD) response = await sendChunked(url, headers, bodyStr);
	else response = await fetch(url, {
		method: "POST",
		headers,
		body: bodyStr
	});
	if (!response.ok) {
		const ct = response.headers.get("Content-Type");
		if (ct === null || ct === void 0 ? void 0 : ct.includes("application/json")) {
			const json = await response.json();
			let err;
			switch (json.kind) {
				case "ReferenceError":
					err = new ReferenceError(json.message);
					break;
				case "TypeError":
					err = new TypeError(json.message);
					break;
				case "RuntimeError":
					err = new RuntimeError(json.message);
					break;
				default: err = new Error(json.message);
			}
			err.cause = json.cause;
			throw err;
		}
		throw new Error(await response.text());
	}
	if (((_b = (_a = response.headers.get("Content-Type")) === null || _a === void 0 ? void 0 : _a.indexOf("application/json")) !== null && _b !== void 0 ? _b : -1) !== -1) return response.json();
	else return response.text();
}
async function sendChunked(url, headers, bodyStr) {
	const chunkId = nanoid();
	const bodyBytes = new TextEncoder().encode(bodyStr);
	const totalChunks = Math.ceil(bodyBytes.length / CHUNK_THRESHOLD);
	for (let i = 0; i < totalChunks - 1; i++) {
		const chunk = bodyBytes.subarray(i * CHUNK_THRESHOLD, (i + 1) * CHUNK_THRESHOLD);
		const resp = await fetch(url, {
			method: "POST",
			headers: Object.assign(Object.assign({}, headers), {
				"x-wails-chunk-id": chunkId,
				"x-wails-chunk-index": String(i),
				"x-wails-chunk-total": String(totalChunks)
			}),
			body: chunk
		});
		if (!resp.ok) throw new Error(await resp.text());
	}
	return fetch(url, {
		method: "POST",
		headers: Object.assign(Object.assign({}, headers), {
			"x-wails-chunk-id": chunkId,
			"x-wails-chunk-index": String(totalChunks - 1),
			"x-wails-chunk-total": String(totalChunks)
		}),
		body: bodyBytes.subarray((totalChunks - 1) * CHUNK_THRESHOLD)
	});
}
var androidBridge = hasDOM && typeof ((_a = window.wails) === null || _a === void 0 ? void 0 : _a.invokeAsync) === "function" ? window.wails : null;
if (androidBridge) {
	const pending = /* @__PURE__ */ new Map();
	window._wailsAndroidCallback = (id, response, error) => {
		var _a;
		const promise = pending.get(id);
		if (!promise) return;
		pending.delete(id);
		if (error) {
			promise.reject(new Error(error));
			return;
		}
		try {
			const envelope = JSON.parse(response !== null && response !== void 0 ? response : "{}");
			if (!envelope.ok) {
				promise.reject(new Error((_a = envelope.error) !== null && _a !== void 0 ? _a : "unknown runtime call error"));
				return;
			}
			promise.resolve("text" in envelope ? envelope.text : envelope.data);
		} catch (e) {
			promise.reject(e);
		}
	};
	customTransport = { call(objectID, method, windowName, args) {
		return new Promise((resolve, reject) => {
			const id = nanoid();
			pending.set(id, {
				resolve,
				reject
			});
			try {
				androidBridge.invokeAsync(id, JSON.stringify({
					object: objectID,
					method,
					windowName,
					args: args !== null && args !== void 0 ? args : null,
					clientId
				}));
			} catch (e) {
				pending.delete(id);
				reject(e);
			}
		});
	} };
}
objectNames.System;
var _invoke = (function() {
	var _a, _b, _c, _d, _e, _f;
	try {
		if ((_b = (_a = window.chrome) === null || _a === void 0 ? void 0 : _a.webview) === null || _b === void 0 ? void 0 : _b.postMessage) return window.chrome.webview.postMessage.bind(window.chrome.webview);
		else if ((_e = (_d = (_c = window.webkit) === null || _c === void 0 ? void 0 : _c.messageHandlers) === null || _d === void 0 ? void 0 : _d["external"]) === null || _e === void 0 ? void 0 : _e.postMessage) return window.webkit.messageHandlers["external"].postMessage.bind(window.webkit.messageHandlers["external"]);
		else if ((_f = window.wails) === null || _f === void 0 ? void 0 : _f.invoke) return (msg) => window.wails.invoke(typeof msg === "string" ? msg : JSON.stringify(msg));
	} catch (e) {}
	console.warn("\n%c⚠️ Browser Environment Detected %c\n\n%cOnly UI previews are available in the browser. For full functionality, please run the application in desktop mode.\nMore information at: https://v3.wails.io/learn/build/#using-a-browser-for-development\n", "background: #ffffff; color: #000000; font-weight: bold; padding: 4px 8px; border-radius: 4px; border: 2px solid #000000;", "background: transparent;", "color: #ffffff; font-style: italic; font-weight: bold;");
	return null;
})();
function invoke(msg) {
	_invoke === null || _invoke === void 0 || _invoke(msg);
}
/**
* Checks if the current operating system is Windows.
*
* @return True if the operating system is Windows, otherwise false.
*/
function IsWindows() {
	var _a, _b;
	return ((_b = (_a = window._wails) === null || _a === void 0 ? void 0 : _a.environment) === null || _b === void 0 ? void 0 : _b.OS) === "windows";
}
/**
* Checks if the current operating system is Linux.
*
* @returns Returns true if the current operating system is Linux, false otherwise.
*/
function IsLinux() {
	var _a, _b;
	return ((_b = (_a = window._wails) === null || _a === void 0 ? void 0 : _a.environment) === null || _b === void 0 ? void 0 : _b.OS) === "linux";
}
/**
* Checks if the current environment is a macOS operating system.
*
* @returns True if the environment is macOS, false otherwise.
*/
function IsMac() {
	var _a, _b;
	return ((_b = (_a = window._wails) === null || _a === void 0 ? void 0 : _a.environment) === null || _b === void 0 ? void 0 : _b.OS) === "darwin";
}
/**
* Checks if the current operating system is Android.
*
* @returns True if the operating system is Android, otherwise false.
*/
function IsAndroid() {
	var _a, _b;
	return ((_b = (_a = window._wails) === null || _a === void 0 ? void 0 : _a.environment) === null || _b === void 0 ? void 0 : _b.OS) === "android";
}
/**
* Reports whether the app is being run in debug mode.
*
* @returns True if the app is being run in debug mode.
*/
function IsDebug() {
	var _a, _b;
	return Boolean((_b = (_a = window._wails) === null || _a === void 0 ? void 0 : _a.environment) === null || _b === void 0 ? void 0 : _b.Debug);
}
//#endregion
//#region node_modules/@wailsio/runtime/dist/utils.js
/**
* Checks whether the webview supports the {@link MouseEvent#buttons} property.
* Looking at you macOS High Sierra!
*/
function canTrackButtons() {
	return new MouseEvent("mousedown").buttons === 0;
}
/**
* Resolves the closest HTMLElement ancestor of an event's target.
*/
function eventTarget(event) {
	var _a;
	if (event.target instanceof HTMLElement) return event.target;
	else if (!(event.target instanceof HTMLElement) && event.target instanceof Node) return (_a = event.target.parentElement) !== null && _a !== void 0 ? _a : document.body;
	else return document.body;
}
/***
This technique for proper load detection is taken from HTMX:

BSD 2-Clause License

Copyright (c) 2020, Big Sky Software
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
this list of conditions and the following disclaimer in the documentation
and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

***/
var isReady = false;
if (hasDOM) document.addEventListener("DOMContentLoaded", () => {
	isReady = true;
});
function whenReady(callback) {
	if (isReady || document.readyState === "complete") callback();
	else document.addEventListener("DOMContentLoaded", callback);
}
//#endregion
//#region node_modules/@wailsio/runtime/dist/contextmenu.js
if (hasDOM) window.addEventListener("contextmenu", contextMenuHandler);
var call = newRuntimeCaller(objectNames.ContextMenu);
var ContextMenuOpen = 0;
function openContextMenu(id, x, y, data) {
	call(ContextMenuOpen, {
		id,
		x,
		y,
		data
	});
}
function contextMenuHandler(event) {
	const target = eventTarget(event);
	const customContextMenu = window.getComputedStyle(target).getPropertyValue("--custom-contextmenu").trim();
	if (customContextMenu) {
		event.preventDefault();
		const data = window.getComputedStyle(target).getPropertyValue("--custom-contextmenu-data");
		openContextMenu(customContextMenu, event.clientX, event.clientY, data);
	} else processDefaultContextMenu(event, target);
}
function processDefaultContextMenu(event, target) {
	if (IsDebug()) return;
	switch (window.getComputedStyle(target).getPropertyValue("--default-contextmenu").trim()) {
		case "show": return;
		case "hide":
			event.preventDefault();
			return;
	}
	if (target.isContentEditable) return;
	const selection = window.getSelection();
	const hasSelection = selection && selection.toString().length > 0;
	if (hasSelection) for (let i = 0; i < selection.rangeCount; i++) {
		const rects = selection.getRangeAt(i).getClientRects();
		for (let j = 0; j < rects.length; j++) {
			const rect = rects[j];
			if (document.elementFromPoint(rect.left, rect.top) === target) return;
		}
	}
	if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
		if (hasSelection || !target.readOnly && !target.disabled) return;
	}
	event.preventDefault();
}
//#endregion
//#region node_modules/@wailsio/runtime/dist/flags.js
/**
* Retrieves the value associated with the specified key from the flag map.
*
* @param key - The key to retrieve the value for.
* @return The value associated with the specified key.
*/
function GetFlag(key) {
	try {
		return window._wails.flags[key];
	} catch (e) {
		throw new Error("Unable to retrieve flag '" + key + "': " + e, { cause: e });
	}
}
//#endregion
//#region node_modules/@wailsio/runtime/dist/drag.js
var canDrag = false;
var dragging = false;
var resizable = false;
var canResize = false;
var resizing = false;
var resizeEdge = "";
var defaultCursor = "auto";
var buttons = 0;
var buttonsTracked = false;
if (hasDOM) {
	buttonsTracked = canTrackButtons();
	window._wails = window._wails || {};
	window._wails.setResizable = (value) => {
		resizable = value;
		if (!resizable) {
			canResize = resizing = false;
			setResize();
		}
	};
}
var dragInitDone = false;
function isMobile() {
	var _a, _b;
	const os = (_b = (_a = window._wails) === null || _a === void 0 ? void 0 : _a.environment) === null || _b === void 0 ? void 0 : _b.OS;
	if (os === "ios" || os === "android") return true;
	const ua = navigator.userAgent || navigator.vendor || window.opera || "";
	return /android|iphone|ipad|ipod|iemobile|wpdesktop/i.test(ua);
}
function tryInitDragHandlers() {
	if (dragInitDone) return;
	if (isMobile()) return;
	window.addEventListener("mousedown", update, { capture: true });
	window.addEventListener("mousemove", update, { capture: true });
	window.addEventListener("mouseup", update, { capture: true });
	for (const ev of [
		"click",
		"contextmenu",
		"dblclick"
	]) window.addEventListener(ev, suppressEvent, { capture: true });
	dragInitDone = true;
}
if (hasDOM) {
	tryInitDragHandlers();
	document.addEventListener("DOMContentLoaded", tryInitDragHandlers, { once: true });
	let dragEnvPolls = 0;
	const dragEnvPoll = window.setInterval(() => {
		if (dragInitDone) {
			window.clearInterval(dragEnvPoll);
			return;
		}
		tryInitDragHandlers();
		if (++dragEnvPolls > 100) window.clearInterval(dragEnvPoll);
	}, 50);
}
function suppressEvent(event) {
	if (event.type === "dblclick" && IsMac() && window === window.top && isDraggableEvent(event)) {
		event.stopImmediatePropagation();
		event.stopPropagation();
		event.preventDefault();
		invoke("wails:drag:doubleclick");
		return;
	}
	if (dragging || resizing) {
		event.stopImmediatePropagation();
		event.stopPropagation();
		event.preventDefault();
	}
}
function isDraggableEvent(event) {
	const target = eventTarget(event);
	return window.getComputedStyle(target).getPropertyValue("--wails-draggable").trim() === "drag" && event.offsetX >= 0 && event.offsetX < target.clientWidth && event.offsetY >= 0 && event.offsetY < target.clientHeight;
}
var MouseDown = 0;
var MouseUp = 1;
var MouseMove = 2;
function update(event) {
	let eventType, eventButtons = event.buttons;
	switch (event.type) {
		case "mousedown":
			eventType = MouseDown;
			if (!buttonsTracked) eventButtons = buttons | 1 << event.button;
			break;
		case "mouseup":
			eventType = MouseUp;
			if (!buttonsTracked) eventButtons = buttons & ~(1 << event.button);
			break;
		default:
			eventType = MouseMove;
			if (!buttonsTracked) eventButtons = buttons;
	}
	let released = buttons & ~eventButtons;
	let pressed = eventButtons & ~buttons;
	buttons = eventButtons;
	if (eventType === MouseDown && !(pressed & event.button)) {
		released |= 1 << event.button;
		pressed |= 1 << event.button;
	}
	if (eventType !== MouseMove && resizing || dragging && (eventType === MouseDown || event.button !== 0)) {
		event.stopImmediatePropagation();
		event.stopPropagation();
		event.preventDefault();
	}
	if (released & 1) primaryUp(event);
	if (pressed & 1) primaryDown(event);
	if (eventType === MouseMove) onMouseMove(event);
}
function primaryDown(event) {
	canDrag = false;
	canResize = false;
	if (!IsWindows()) {
		if (event.type === "mousedown" && event.button === 0 && event.detail !== 1) return;
	}
	if (resizeEdge) {
		if (event.type !== "mousedown") return;
		canResize = true;
		return;
	}
	canDrag = isDraggableEvent(event);
}
function primaryUp(event) {
	canDrag = false;
	dragging = false;
	canResize = false;
	resizing = false;
}
var cursorForEdge = Object.freeze({
	"se-resize": "nwse-resize",
	"sw-resize": "nesw-resize",
	"nw-resize": "nwse-resize",
	"ne-resize": "nesw-resize",
	"w-resize": "ew-resize",
	"n-resize": "ns-resize",
	"s-resize": "ns-resize",
	"e-resize": "ew-resize"
});
function setResize(edge) {
	if (edge) {
		if (!resizeEdge) defaultCursor = document.body.style.cursor;
		document.body.style.cursor = cursorForEdge[edge];
	} else if (!edge && resizeEdge) document.body.style.cursor = defaultCursor;
	resizeEdge = edge || "";
}
function onMouseMove(event) {
	if (canResize && resizeEdge) {
		resizing = true;
		invoke("wails:resize:" + resizeEdge);
	} else if (canDrag) {
		dragging = true;
		invoke("wails:drag");
	}
	if (dragging || resizing) {
		canDrag = canResize = false;
		return;
	}
	if (!resizable || !IsWindows() && !(IsLinux() && GetFlag("frameless"))) {
		if (resizeEdge) setResize();
		return;
	}
	const resizeHandleHeight = GetFlag("system.resizeHandleHeight") || 5;
	const resizeHandleWidth = GetFlag("system.resizeHandleWidth") || 5;
	const cornerExtra = GetFlag("resizeCornerExtra") || 10;
	const scrollbarWidth = Math.max(0, window.innerWidth - document.documentElement.clientWidth);
	const scrollbarHeight = Math.max(0, window.innerHeight - document.documentElement.clientHeight);
	const rightContentEdge = window.innerWidth - scrollbarWidth;
	const bottomContentEdge = window.innerHeight - scrollbarHeight;
	const rightBorder = event.clientX < rightContentEdge && rightContentEdge - event.clientX < resizeHandleWidth;
	const leftBorder = event.clientX < resizeHandleWidth;
	const topBorder = event.clientY < resizeHandleHeight;
	const bottomBorder = event.clientY < bottomContentEdge && bottomContentEdge - event.clientY < resizeHandleHeight;
	const rightCorner = event.clientX < rightContentEdge && rightContentEdge - event.clientX < resizeHandleWidth + cornerExtra;
	const leftCorner = event.clientX < resizeHandleWidth + cornerExtra;
	const topCorner = event.clientY < resizeHandleHeight + cornerExtra;
	const bottomCorner = event.clientY < bottomContentEdge && bottomContentEdge - event.clientY < resizeHandleHeight + cornerExtra;
	if (!leftCorner && !topCorner && !bottomCorner && !rightCorner) setResize();
	else if (rightCorner && bottomCorner) setResize("se-resize");
	else if (leftCorner && bottomCorner) setResize("sw-resize");
	else if (leftCorner && topCorner) setResize("nw-resize");
	else if (topCorner && rightCorner) setResize("ne-resize");
	else if (leftBorder) setResize("w-resize");
	else if (topBorder) setResize("n-resize");
	else if (bottomBorder) setResize("s-resize");
	else if (rightBorder) setResize("e-resize");
	else setResize();
}
//#endregion
//#region node_modules/@wailsio/runtime/dist/appregion.js
var regionProperty = "--wails-non-client-region";
var runtimeConfigReadyEvent = "wails:runtime-config-ready";
var validRegions = /* @__PURE__ */ new Set([
	"caption",
	"minimize",
	"maximize",
	"close"
]);
if (hasDOM) window._wails = window._wails || {};
var updatePending = false;
var lastPayload = "";
var observedElements = /* @__PURE__ */ new Set();
var resizeObserver;
var trackingStarted = false;
function normaliseRegionKind(value) {
	const region = value.trim().toLowerCase();
	if (validRegions.has(region)) return region;
}
function nonClientRegionForElement(element) {
	if (!(element instanceof HTMLElement)) return;
	const region = normaliseRegionKind(window.getComputedStyle(element).getPropertyValue(regionProperty));
	if (!region) return;
	const parent = element.parentElement;
	if (parent) {
		if (normaliseRegionKind(window.getComputedStyle(parent).getPropertyValue(regionProperty)) === region) return;
	}
	return region;
}
function isVisible(element) {
	const style = window.getComputedStyle(element);
	return style.display !== "none" && style.visibility !== "hidden" && style.contentVisibility !== "hidden";
}
function elementRegion(element) {
	if (!(element instanceof HTMLElement)) return;
	const kind = nonClientRegionForElement(element);
	if (!kind || !isVisible(element)) return;
	const rect = element.getBoundingClientRect();
	if (rect.width <= 0 || rect.height <= 0) return;
	const scale = window.devicePixelRatio || 1;
	const left = Math.floor(rect.left * scale);
	const top = Math.floor(rect.top * scale);
	const right = Math.ceil(rect.right * scale);
	const bottom = Math.ceil(rect.bottom * scale);
	if (right <= left || bottom <= top) return;
	return {
		kind,
		left,
		top,
		right,
		bottom
	};
}
function regionElements() {
	const elements = [];
	if (document.documentElement) elements.push(document.documentElement);
	if (document.body) {
		elements.push(document.body);
		for (const element of document.body.querySelectorAll("*")) elements.push(element);
	}
	return elements;
}
function observeRegionElements(elements) {
	if (typeof ResizeObserver === "undefined") return;
	resizeObserver !== null && resizeObserver !== void 0 || (resizeObserver = new ResizeObserver(scheduleUpdate));
	const nextElements = new Set(elements);
	for (const element of observedElements) if (!nextElements.has(element)) resizeObserver.unobserve(element);
	for (const element of nextElements) if (!observedElements.has(element)) resizeObserver.observe(element);
	observedElements = nextElements;
}
function updateNonClientRegions() {
	updatePending = false;
	const elements = regionElements();
	const regions = [];
	const activeElements = [];
	for (const element of elements) {
		const region = elementRegion(element);
		if (region) {
			regions.push(region);
			activeElements.push(element);
		}
	}
	observeRegionElements(activeElements);
	const payload = JSON.stringify({
		version: 1,
		regions
	});
	if (payload === lastPayload) return;
	lastPayload = payload;
	invoke("wails:non-client-region:" + payload);
}
function scheduleUpdate() {
	if (updatePending) return;
	updatePending = true;
	window.requestAnimationFrame(updateNonClientRegions);
}
function startNonClientRegionTracking() {
	var _a, _b;
	if (trackingStarted) return;
	trackingStarted = true;
	scheduleUpdate();
	new MutationObserver(scheduleUpdate).observe(document.documentElement, {
		attributes: true,
		childList: true,
		subtree: true
	});
	window.addEventListener("resize", scheduleUpdate);
	window.addEventListener("scroll", scheduleUpdate, true);
	(_a = window.visualViewport) === null || _a === void 0 || _a.addEventListener("resize", scheduleUpdate);
	(_b = window.visualViewport) === null || _b === void 0 || _b.addEventListener("scroll", scheduleUpdate);
}
function tryStartNonClientRegionTracking() {
	var _a, _b;
	const os = (_a = window._wails.environment) === null || _a === void 0 ? void 0 : _a.OS;
	if (os === void 0) return false;
	const enabled = (_b = window._wails.flags) === null || _b === void 0 ? void 0 : _b.nonClientRegionTracking;
	if (os === "windows") {
		if (enabled === true) whenReady(startNonClientRegionTracking);
		return true;
	}
	return true;
}
if (hasDOM && !tryStartNonClientRegionTracking()) window.addEventListener(runtimeConfigReadyEvent, tryStartNonClientRegionTracking, { once: true });
//#endregion
//#region bindings/github.com/wailsapp/wails/v3/internal/eventcreate.ts
Object.freeze({});
//#endregion
//#region node_modules/@wailsio/runtime/dist/window.js
var DROP_TARGET_ATTRIBUTE = "data-file-drop-target";
var DROP_TARGET_ACTIVE_CLASS = "file-drop-target-active";
var currentDropTarget = null;
var PositionMethod = 0;
var CenterMethod = 1;
var CloseMethod = 2;
var DisableSizeConstraintsMethod = 3;
var EnableSizeConstraintsMethod = 4;
var FocusMethod = 5;
var ForceReloadMethod = 6;
var FullscreenMethod = 7;
var GetScreenMethod = 8;
var GetZoomMethod = 9;
var HeightMethod = 10;
var HideMethod = 11;
var IsFocusedMethod = 12;
var IsFullscreenMethod = 13;
var IsMaximisedMethod = 14;
var IsMinimisedMethod = 15;
var MaximiseMethod = 16;
var MinimiseMethod = 17;
var NameMethod = 18;
var OpenDevToolsMethod = 19;
var RelativePositionMethod = 20;
var ReloadMethod = 21;
var ResizableMethod = 22;
var RestoreMethod = 23;
var SetPositionMethod = 24;
var SetAlwaysOnTopMethod = 25;
var SetBackgroundColourMethod = 26;
var SetFramelessMethod = 27;
var SetFullscreenButtonEnabledMethod = 28;
var SetMaxSizeMethod = 29;
var SetMinSizeMethod = 30;
var SetRelativePositionMethod = 31;
var SetResizableMethod = 32;
var SetSizeMethod = 33;
var SetTitleMethod = 34;
var SetZoomMethod = 35;
var ShowMethod = 36;
var SizeMethod = 37;
var ToggleFullscreenMethod = 38;
var ToggleMaximiseMethod = 39;
var ToggleFramelessMethod = 40;
var UnFullscreenMethod = 41;
var UnMaximiseMethod = 42;
var UnMinimiseMethod = 43;
var WidthMethod = 44;
var ZoomMethod = 45;
var ZoomInMethod = 46;
var ZoomOutMethod = 47;
var ZoomResetMethod = 48;
var SnapAssistMethod = 49;
var FilesDropped = 50;
var PrintMethod = 51;
var SetScreenMethod = 52;
/**
* Finds the nearest drop target element by walking up the DOM tree.
*/
function getDropTargetElement(element) {
	if (!element) return null;
	return element.closest(`[${DROP_TARGET_ATTRIBUTE}]`);
}
/**
* Check if we can use WebView2's postMessageWithAdditionalObjects (Windows)
* Also checks that EnableFileDrop is true for this window.
*/
function canResolveFilePaths() {
	var _a, _b, _c, _d;
	if (((_b = (_a = window.chrome) === null || _a === void 0 ? void 0 : _a.webview) === null || _b === void 0 ? void 0 : _b.postMessageWithAdditionalObjects) == null) return false;
	return ((_d = (_c = window._wails) === null || _c === void 0 ? void 0 : _c.flags) === null || _d === void 0 ? void 0 : _d.enableFileDrop) === true;
}
/**
* Send file drop to backend via WebView2 (Windows only)
*/
function resolveFilePaths(x, y, files) {
	var _a, _b;
	if ((_b = (_a = window.chrome) === null || _a === void 0 ? void 0 : _a.webview) === null || _b === void 0 ? void 0 : _b.postMessageWithAdditionalObjects) window.chrome.webview.postMessageWithAdditionalObjects(`file:drop:${x}:${y}`, files);
}
var nativeDragActive = false;
/**
* Cleans up native drag state and hover effects.
* Called on drop or when drag leaves the window.
*/
function cleanupNativeDrag() {
	nativeDragActive = false;
	if (currentDropTarget) {
		currentDropTarget.classList.remove(DROP_TARGET_ACTIVE_CLASS);
		currentDropTarget = null;
	}
}
/**
* Called from Go when a file drag enters the window on Linux/macOS.
*/
function handleDragEnter() {
	var _a, _b;
	if (((_b = (_a = window._wails) === null || _a === void 0 ? void 0 : _a.flags) === null || _b === void 0 ? void 0 : _b.enableFileDrop) === false) return;
	nativeDragActive = true;
}
/**
* Called from Go when a file drag leaves the window on Linux/macOS.
*/
function handleDragLeave() {
	cleanupNativeDrag();
}
/**
* Called from Go during file drag to update hover state on Linux/macOS.
* @param x - X coordinate in CSS pixels
* @param y - Y coordinate in CSS pixels
*/
function handleDragOver(x, y) {
	var _a, _b;
	if (!nativeDragActive) return;
	if (((_b = (_a = window._wails) === null || _a === void 0 ? void 0 : _a.flags) === null || _b === void 0 ? void 0 : _b.enableFileDrop) === false) return;
	const dropTarget = getDropTargetElement(document.elementFromPoint(x, y));
	if (currentDropTarget && currentDropTarget !== dropTarget) currentDropTarget.classList.remove(DROP_TARGET_ACTIVE_CLASS);
	if (dropTarget) {
		dropTarget.classList.add(DROP_TARGET_ACTIVE_CLASS);
		currentDropTarget = dropTarget;
	} else currentDropTarget = null;
}
var callerSym = Symbol("caller");
/**
* The window within which the script is running.
*/
var thisWindow = new class Window {
	/**
	* Initialises a window object with the specified name.
	*
	* @private
	* @param name - The name of the target window.
	*/
	constructor(name = "") {
		this[callerSym] = newRuntimeCaller(objectNames.Window, name);
		for (const method of Object.getOwnPropertyNames(Window.prototype)) if (method !== "constructor" && typeof this[method] === "function") this[method] = this[method].bind(this);
	}
	/**
	* Gets the specified window.
	*
	* @param name - The name of the window to get.
	* @returns The corresponding window object.
	*/
	Get(name) {
		return new Window(name);
	}
	/**
	* Returns the absolute position of the window.
	*
	* @returns The current absolute position of the window.
	*/
	Position() {
		return this[callerSym](PositionMethod);
	}
	/**
	* Centers the window on the screen.
	*/
	Center() {
		return this[callerSym](CenterMethod);
	}
	/**
	* Closes the window.
	*/
	Close() {
		return this[callerSym](CloseMethod);
	}
	/**
	* Disables min/max size constraints.
	*/
	DisableSizeConstraints() {
		return this[callerSym](DisableSizeConstraintsMethod);
	}
	/**
	* Enables min/max size constraints.
	*/
	EnableSizeConstraints() {
		return this[callerSym](EnableSizeConstraintsMethod);
	}
	/**
	* Focuses the window.
	*/
	Focus() {
		return this[callerSym](FocusMethod);
	}
	/**
	* Forces the window to reload the page assets.
	*/
	ForceReload() {
		return this[callerSym](ForceReloadMethod);
	}
	/**
	* Switches the window to fullscreen mode.
	*/
	Fullscreen() {
		return this[callerSym](FullscreenMethod);
	}
	/**
	* Returns the screen that the window is on.
	*
	* @returns The screen the window is currently on.
	*/
	GetScreen() {
		return this[callerSym](GetScreenMethod);
	}
	/**
	* Returns the current zoom level of the window.
	*
	* @returns The current zoom level.
	*/
	GetZoom() {
		return this[callerSym](GetZoomMethod);
	}
	/**
	* Returns the height of the window.
	*
	* @returns The current height of the window.
	*/
	Height() {
		return this[callerSym](HeightMethod);
	}
	/**
	* Hides the window.
	*/
	Hide() {
		return this[callerSym](HideMethod);
	}
	/**
	* Returns true if the window is focused.
	*
	* @returns Whether the window is currently focused.
	*/
	IsFocused() {
		return this[callerSym](IsFocusedMethod);
	}
	/**
	* Returns true if the window is fullscreen.
	*
	* @returns Whether the window is currently fullscreen.
	*/
	IsFullscreen() {
		return this[callerSym](IsFullscreenMethod);
	}
	/**
	* Returns true if the window is maximised.
	*
	* @returns Whether the window is currently maximised.
	*/
	IsMaximised() {
		return this[callerSym](IsMaximisedMethod);
	}
	/**
	* Returns true if the window is minimised.
	*
	* @returns Whether the window is currently minimised.
	*/
	IsMinimised() {
		return this[callerSym](IsMinimisedMethod);
	}
	/**
	* Maximises the window.
	*/
	Maximise() {
		return this[callerSym](MaximiseMethod);
	}
	/**
	* Minimises the window.
	*/
	Minimise() {
		return this[callerSym](MinimiseMethod);
	}
	/**
	* Returns the name of the window.
	*
	* @returns The name of the window.
	*/
	Name() {
		return this[callerSym](NameMethod);
	}
	/**
	* Opens the development tools pane.
	*/
	OpenDevTools() {
		return this[callerSym](OpenDevToolsMethod);
	}
	/**
	* Returns the relative position of the window to the screen.
	*
	* @returns The current relative position of the window.
	*/
	RelativePosition() {
		return this[callerSym](RelativePositionMethod);
	}
	/**
	* Reloads the page assets.
	*/
	Reload() {
		return this[callerSym](ReloadMethod);
	}
	/**
	* Returns true if the window is resizable.
	*
	* @returns Whether the window is currently resizable.
	*/
	Resizable() {
		return this[callerSym](ResizableMethod);
	}
	/**
	* Restores the window to its previous state if it was previously minimised, maximised or fullscreen.
	*/
	Restore() {
		return this[callerSym](RestoreMethod);
	}
	/**
	* Sets the absolute position of the window.
	*
	* @param x - The desired horizontal absolute position of the window.
	* @param y - The desired vertical absolute position of the window.
	*/
	SetPosition(x, y) {
		return this[callerSym](SetPositionMethod, {
			x,
			y
		});
	}
	/**
	* Sets the window to be always on top.
	*
	* @param alwaysOnTop - Whether the window should stay on top.
	*/
	SetAlwaysOnTop(alwaysOnTop) {
		return this[callerSym](SetAlwaysOnTopMethod, { alwaysOnTop });
	}
	/**
	* Sets the background colour of the window.
	*
	* @param r - The desired red component of the window background.
	* @param g - The desired green component of the window background.
	* @param b - The desired blue component of the window background.
	* @param a - The desired alpha component of the window background.
	*/
	SetBackgroundColour(r, g, b, a) {
		return this[callerSym](SetBackgroundColourMethod, {
			r,
			g,
			b,
			a
		});
	}
	/**
	* Removes the window frame and title bar.
	*
	* @param frameless - Whether the window should be frameless.
	*/
	SetFrameless(frameless) {
		return this[callerSym](SetFramelessMethod, { frameless });
	}
	/**
	* Disables the system fullscreen button.
	*
	* @param enabled - Whether the fullscreen button should be enabled.
	*/
	SetFullscreenButtonEnabled(enabled) {
		return this[callerSym](SetFullscreenButtonEnabledMethod, { enabled });
	}
	/**
	* Sets the maximum size of the window.
	*
	* @param width - The desired maximum width of the window.
	* @param height - The desired maximum height of the window.
	*/
	SetMaxSize(width, height) {
		return this[callerSym](SetMaxSizeMethod, {
			width,
			height
		});
	}
	/**
	* Sets the minimum size of the window.
	*
	* @param width - The desired minimum width of the window.
	* @param height - The desired minimum height of the window.
	*/
	SetMinSize(width, height) {
		return this[callerSym](SetMinSizeMethod, {
			width,
			height
		});
	}
	/**
	* Sets the relative position of the window to the screen.
	*
	* @param x - The desired horizontal relative position of the window.
	* @param y - The desired vertical relative position of the window.
	*/
	SetRelativePosition(x, y) {
		return this[callerSym](SetRelativePositionMethod, {
			x,
			y
		});
	}
	/**
	* Sets whether the window is resizable.
	*
	* @param resizable - Whether the window should be resizable.
	*/
	SetResizable(resizable) {
		return this[callerSym](SetResizableMethod, { resizable });
	}
	/**
	* Sets the size of the window.
	*
	* @param width - The desired width of the window.
	* @param height - The desired height of the window.
	*/
	SetSize(width, height) {
		return this[callerSym](SetSizeMethod, {
			width,
			height
		});
	}
	/**
	* Sets the title of the window.
	*
	* @param title - The desired title of the window.
	*/
	SetTitle(title) {
		return this[callerSym](SetTitleMethod, { title });
	}
	/**
	* Sets the zoom level of the window.
	*
	* @param zoom - The desired zoom level.
	*/
	SetZoom(zoom) {
		return this[callerSym](SetZoomMethod, { zoom });
	}
	/**
	* Shows the window.
	*/
	Show() {
		return this[callerSym](ShowMethod);
	}
	/**
	* Returns the size of the window.
	*
	* @returns The current size of the window.
	*/
	Size() {
		return this[callerSym](SizeMethod);
	}
	/**
	* Toggles the window between fullscreen and normal.
	*/
	ToggleFullscreen() {
		return this[callerSym](ToggleFullscreenMethod);
	}
	/**
	* Toggles the window between maximised and normal.
	*/
	ToggleMaximise() {
		return this[callerSym](ToggleMaximiseMethod);
	}
	/**
	* Toggles the window between frameless and normal.
	*/
	ToggleFrameless() {
		return this[callerSym](ToggleFramelessMethod);
	}
	/**
	* Un-fullscreens the window.
	*/
	UnFullscreen() {
		return this[callerSym](UnFullscreenMethod);
	}
	/**
	* Un-maximises the window.
	*/
	UnMaximise() {
		return this[callerSym](UnMaximiseMethod);
	}
	/**
	* Un-minimises the window.
	*/
	UnMinimise() {
		return this[callerSym](UnMinimiseMethod);
	}
	/**
	* Returns the width of the window.
	*
	* @returns The current width of the window.
	*/
	Width() {
		return this[callerSym](WidthMethod);
	}
	/**
	* Zooms the window.
	*/
	Zoom() {
		return this[callerSym](ZoomMethod);
	}
	/**
	* Increases the zoom level of the webview content.
	*/
	ZoomIn() {
		return this[callerSym](ZoomInMethod);
	}
	/**
	* Decreases the zoom level of the webview content.
	*/
	ZoomOut() {
		return this[callerSym](ZoomOutMethod);
	}
	/**
	* Resets the zoom level of the webview content.
	*/
	ZoomReset() {
		return this[callerSym](ZoomResetMethod);
	}
	/**
	* Handles file drops originating from platform-specific code (e.g., macOS/Linux native drag-and-drop).
	* Gathers information about the drop target element and sends it back to the Go backend.
	*
	* @param filenames - An array of file paths (strings) that were dropped.
	* @param x - The x-coordinate of the drop event, in logical (CSS) pixels relative to the webview.
	* @param y - The y-coordinate of the drop event, in logical (CSS) pixels relative to the webview.
	*/
	HandlePlatformFileDrop(filenames, x, y) {
		var _a, _b;
		if (((_b = (_a = window._wails) === null || _a === void 0 ? void 0 : _a.flags) === null || _b === void 0 ? void 0 : _b.enableFileDrop) === false) return;
		const dropTarget = getDropTargetElement(document.elementFromPoint(x, y));
		if (!dropTarget) return;
		const elementDetails = {
			id: dropTarget.id,
			classList: Array.from(dropTarget.classList),
			attributes: {}
		};
		for (let i = 0; i < dropTarget.attributes.length; i++) {
			const attr = dropTarget.attributes[i];
			elementDetails.attributes[attr.name] = attr.value;
		}
		const payload = {
			filenames,
			x,
			y,
			elementDetails
		};
		this[callerSym](FilesDropped, payload);
		cleanupNativeDrag();
	}
	/**
	* Moves the window to the center of the specified screen's work area.
	*
	* @param screenID - The ID of the target screen.
	*/
	SetScreen(screenID) {
		return this[callerSym](SetScreenMethod, { screenID });
	}
	SnapAssist() {
		return this[callerSym](SnapAssistMethod);
	}
	/**
	* Opens the print dialog for the window.
	*/
	Print() {
		return this[callerSym](PrintMethod);
	}
}("");
/**
* Sets up global drag and drop event listeners for file drops.
* Handles visual feedback (hover state) and file drop processing.
*/
function setupDropTargetListeners() {
	const docElement = document.documentElement;
	let dragEnterCounter = 0;
	docElement.addEventListener("dragenter", (event) => {
		var _a, _b, _c;
		if (!((_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.types.includes("Files"))) return;
		event.preventDefault();
		if (((_c = (_b = window._wails) === null || _b === void 0 ? void 0 : _b.flags) === null || _c === void 0 ? void 0 : _c.enableFileDrop) === false) {
			event.dataTransfer.dropEffect = "none";
			return;
		}
		dragEnterCounter++;
		const dropTarget = getDropTargetElement(document.elementFromPoint(event.clientX, event.clientY));
		if (currentDropTarget && currentDropTarget !== dropTarget) currentDropTarget.classList.remove(DROP_TARGET_ACTIVE_CLASS);
		if (dropTarget) {
			dropTarget.classList.add(DROP_TARGET_ACTIVE_CLASS);
			event.dataTransfer.dropEffect = "copy";
			currentDropTarget = dropTarget;
		} else {
			event.dataTransfer.dropEffect = "none";
			currentDropTarget = null;
		}
	}, false);
	docElement.addEventListener("dragover", (event) => {
		var _a, _b, _c;
		if (!((_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.types.includes("Files"))) return;
		event.preventDefault();
		if (((_c = (_b = window._wails) === null || _b === void 0 ? void 0 : _b.flags) === null || _c === void 0 ? void 0 : _c.enableFileDrop) === false) {
			event.dataTransfer.dropEffect = "none";
			return;
		}
		const dropTarget = getDropTargetElement(document.elementFromPoint(event.clientX, event.clientY));
		if (currentDropTarget && currentDropTarget !== dropTarget) currentDropTarget.classList.remove(DROP_TARGET_ACTIVE_CLASS);
		if (dropTarget) {
			if (!dropTarget.classList.contains(DROP_TARGET_ACTIVE_CLASS)) dropTarget.classList.add(DROP_TARGET_ACTIVE_CLASS);
			event.dataTransfer.dropEffect = "copy";
			currentDropTarget = dropTarget;
		} else {
			event.dataTransfer.dropEffect = "none";
			currentDropTarget = null;
		}
	}, false);
	docElement.addEventListener("dragleave", (event) => {
		var _a, _b, _c;
		if (!((_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.types.includes("Files"))) return;
		event.preventDefault();
		if (((_c = (_b = window._wails) === null || _b === void 0 ? void 0 : _b.flags) === null || _c === void 0 ? void 0 : _c.enableFileDrop) === false) return;
		if (event.relatedTarget === null) return;
		dragEnterCounter--;
		if (dragEnterCounter === 0 || currentDropTarget && !currentDropTarget.contains(event.relatedTarget)) {
			if (currentDropTarget) {
				currentDropTarget.classList.remove(DROP_TARGET_ACTIVE_CLASS);
				currentDropTarget = null;
			}
			dragEnterCounter = 0;
		}
	}, false);
	docElement.addEventListener("drop", (event) => {
		var _a, _b, _c;
		if (!((_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.types.includes("Files"))) return;
		event.preventDefault();
		if (((_c = (_b = window._wails) === null || _b === void 0 ? void 0 : _b.flags) === null || _c === void 0 ? void 0 : _c.enableFileDrop) === false) return;
		dragEnterCounter = 0;
		if (currentDropTarget) {
			currentDropTarget.classList.remove(DROP_TARGET_ACTIVE_CLASS);
			currentDropTarget = null;
		}
		if (canResolveFilePaths()) {
			const files = [];
			if (event.dataTransfer.items) {
				for (const item of event.dataTransfer.items) if (item.kind === "file") {
					const file = item.getAsFile();
					if (file) files.push(file);
				}
			} else if (event.dataTransfer.files) for (const file of event.dataTransfer.files) files.push(file);
			if (files.length > 0) resolveFilePaths(event.clientX, event.clientY, files);
		}
	}, false);
}
if (typeof window !== "undefined" && typeof document !== "undefined") setupDropTargetListeners();
//#endregion
//#region node_modules/@wailsio/runtime/dist/index.js
if (hasDOM) window._wails = window._wails || {};
if (hasDOM) {
	window._wails.invoke = invoke;
	window._wails.clientId = clientId;
}
if (hasDOM) window._wails.handlePlatformFileDrop = thisWindow.HandlePlatformFileDrop.bind(thisWindow);
if (hasDOM) {
	window._wails.handleDragEnter = handleDragEnter;
	window._wails.handleDragLeave = handleDragLeave;
	window._wails.handleDragOver = handleDragOver;
}
if (hasDOM) invoke("wails:runtime:ready");
/**
* Loads a script from the given URL if it exists.
* Uses HEAD request to check existence, then injects a script tag.
* Silently ignores if the script doesn't exist.
*/
function loadOptionalScript(url) {
	return fetch(url, { method: "HEAD" }).then((response) => {
		if (response.ok) {
			if ((response.headers.get("content-type") || "").toLowerCase().includes("javascript")) {
				const script = document.createElement("script");
				script.src = url;
				document.head.appendChild(script);
			}
		}
	}).catch(() => {});
}
if (hasDOM) loadOptionalScript("/wails/custom.js");
//#endregion
//#region src/lib/platform.ts
var IS_ANDROID_APP = IsAndroid();
var IS_TOUCH_SCREEN = window.matchMedia("(pointer: coarse)").matches;
window.matchMedia("(any-pointer: coarse)").matches;
function hasKotlinInterface(win = window) {
	return typeof win.AndroidSystemUI?.setStatusBarIcons === "function";
}
//#endregion
//#region src/lib/style/effects.ts
function applyStyle(manager, computedOld, variablesOld) {
	const root = manager.root();
	const needTransition = manager.computed.selectedTheme.id !== computedOld?.selectedTheme.id;
	if (!needTransition) setCSSVar(root, "theme-switch-duration", "0ms");
	applyVariables(root, manager.variables);
	const pageColor = manager.variables.Page;
	if (!variablesOld || !colorEquals(pageColor, variablesOld.Page)) {
		const contrastHint = isLight(pageColor) ? "light" : "dark";
		setThemeAttributes(root, contrastHint);
		if (root === STYLE_ROOT) prepaintCache(manager.runtime, manager.variables, contrastHint);
	}
	const opaqueAccent = manager.variables.AccentOpaque;
	if (!variablesOld || !colorEquals(opaqueAccent, variablesOld.AccentOpaque)) {
		setMetaThemeColor(opaqueAccent);
		updateAndroidSystemIcons(isLight(opaqueAccent));
	}
	if (!needTransition) tick().then(() => setCSSVar(root, "theme-switch-duration", THEME_SWITCH_DURATION));
	if (computedOld) persistStyle(manager.runtime, manager.persistKey);
}
function applyVariables(root, variables) {
	for (const key in variables) setCSSVar(root, key.replace(/([A-Z])/g, (_, c) => `-${c.toLowerCase()}`).slice(1), variables[key].raw);
}
function setMetaThemeColor(color) {
	const meta = document.querySelector("meta[name=\"theme-color\"]");
	if (!meta) throw new Error("Expected <meta name=\"theme-color\" /> to exist in the document.");
	meta.content = color.raw;
}
function updateAndroidSystemIcons(safeAreaBgIsLight) {
	if (hasKotlinInterface(window)) window.AndroidSystemUI.setStatusBarIcons(safeAreaBgIsLight);
}
function setCSSVar(el, name, value) {
	el.style.setProperty("--" + name, value);
}
function setThemeAttributes(root, colorScheme) {
	root.setAttribute("data-theme", colorScheme);
	root.setAttribute("theme", colorScheme);
}
function prepaintCache(style, variables, contrastHint) {
	setPrepaintCache(style.preference === "system" ? {
		light: findTheme(style.selectedLight, style.themes).page.raw,
		dark: findTheme(style.selectedDark, style.themes).page.raw
	} : {
		color: variables.Page.raw,
		contrastHint
	});
}
//#endregion
//#region src/lib/style/main.svelte.ts
var THEME_SWITCH_DURATION = "300ms";
var StyleManager = class {
	#computed;
	get computed() {
		return get(this.#computed);
	}
	set computed(value) {
		set(this.#computed, value);
	}
	#active;
	get active() {
		return get(this.#active);
	}
	set active(value) {
		set(this.#active, value);
	}
	#variables;
	get variables() {
		return get(this.#variables);
	}
	set variables(value) {
		set(this.#variables, value);
	}
	defaultStyle;
	#persistKey;
	#root;
	#runtime;
	constructor({ root, persistKey, defaultStyle }) {
		this.#root = root;
		this.#persistKey = persistKey;
		this.defaultStyle = defaultStyle;
		this.#runtime = state(proxy(loadStyle(persistKey, defaultStyle)));
		this.#computed = user_derived(() => computeRuntimeInfo(get(this.#runtime), systemTheme.value));
		this.#active = user_derived(() => {
			return proxy(computeIndependentVariables(get(this.#runtime), this.computed));
		});
		this.#variables = user_derived(() => {
			return proxy(computeAllVariables(this.active));
		});
	}
	get persistKey() {
		return this.#persistKey;
	}
	root() {
		return this.#root;
	}
	get runtime() {
		return get(this.#runtime);
	}
	reset() {
		set(this.#runtime, hydratePreset(this.defaultStyle), true);
	}
	override(persistKey, defaultStyle) {
		const oldPersistKey = this.#persistKey;
		const oldDefaultStyle = this.defaultStyle;
		this.#persistKey = persistKey;
		this.defaultStyle = defaultStyle;
		set(this.#runtime, loadStyle(persistKey, defaultStyle), true);
		return {
			persistKey: oldPersistKey,
			defaultStyle: oldDefaultStyle
		};
	}
	load(presetStyle) {
		set(this.#runtime, hydratePreset(presetStyle), true);
	}
	setPreference(preference) {
		setPreference(preference, get(this.#runtime), systemTheme.value, this.computed);
	}
	runEffects(computedOld, variablesOld) {
		applyStyle(this, computedOld, variablesOld);
	}
	nextTheme() {
		nextTheme(get(this.#runtime), this.computed);
	}
};
var [getStyleContext, setStyleContext] = createContext();
function overrideStyle(persistKey, defaultStyle) {
	try {
		const previous = getStyleContext().override(persistKey, defaultStyle);
		onDestroy(() => {
			getStyleContext().override(previous.persistKey, previous.defaultStyle);
		});
	} catch {
		throw new Error(`Unable to override style: application style not set.`);
	}
}
function initStyle() {
	setCSSGlobal("theme-switch-duration", THEME_SWITCH_DURATION);
}
initStyle();
//#endregion
export { readableOnLight as _, IS_ANDROID_APP as a, BLUE_ACCENT as c, ORANGE_ACCENT as d, STYLE_PRESETS as f, readableOnDark as g, opaqueColor as h, setStyleContext as i, GREEN_ACCENT as l, staticAccent as m, getStyleContext as n, IS_TOUCH_SCREEN as o, YELLOW_ACCENT as p, overrideStyle as r, ACCENT as s, StyleManager as t, JENNI_ACCENT as u, validColor as v, STYLE_ROOT as y };
