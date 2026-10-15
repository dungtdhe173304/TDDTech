import Dark3DBanner from "../components/Dark3DBanner";
import useRouteScrollReset from "../components/useRouteScrollReset";
import ContactChannelPair from "../components/ContactChannelPair";
import FacebookContactLink from "../components/FacebookContactLink";
import { site, siteOrigin, siteUrl, siteText } from "../config/site.js";
import Copyright from "../components/Copyright";
import FacebookIcon from "../components/FacebookIcon";
import { loadLogoModel } from "../lib/load-logo-model.mjs";
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/world-CfZ9xr8b.js",
      "assets/vendor-three-nfDmK6kc.js",
      "assets/chatbotKnowledge-CK2UAvVi.js",
      "assets/blogPosts-BytO_tYi.js",
      "assets/vendor-react-BaqgPuim.js",
      "assets/vendor-radix-CIIFFl0l.js",
      "assets/vendor-icons-xx0BMbwT.js",
      "assets/vendor-motion-B2aXCTtA.js",
      "assets/WorkGallery-CyYN0KRM.js",
      "assets/NotFound-ChbCxhR4.js",
      "assets/PrivacyPolicy-B70vyD1l.js",
      "assets/Terms-DUW2xTNl.js",
      "assets/MarketingPage-BLJ5g1qS.js",
      "assets/CurtainChapter-Q8xUbhSg.js",
      "assets/SeoLayout-CuGaHTIj.js",
      "assets/Projects-C0kpfK7V.js",
      "assets/ProjectDetail-DyXWaEkD.js",
      "assets/CompanyPage-BQ4Zl90y.js",
      "assets/CapabilityProfile-DePoOAgZ.js",
      "assets/Blog-s__qQNIp.js",
      "assets/blog-CE27P5gZ.js",
      "assets/BlogCover-DaspM6LB.js",
      "assets/BlogPost-DdsJrswq.js",
      "assets/SearchPage-CSDOjFZF.js",
      "",
    ]),
) => i.map((i) => d[i]);
var Zo = Object.defineProperty;
var Jo = (e, n, s) =>
  n in e
    ? Zo(e, n, { enumerable: !0, configurable: !0, writable: !0, value: s })
    : (e[n] = s);
var G = (e, n, s) => Jo(e, typeof n != "symbol" ? n + "" : n, s);
import {
  r as f,
  j as t,
  R as O,
  v as tc,
  a as ec,
  g as Ns,
  i as Zi,
  k as nc,
  Q as sc,
  m as ac,
  B as ic,
  n as rc,
  p as Ht,
  N as oc,
  q as cc,
} from "./vendor-react-BaqgPuim.js";
import {
  V as Ji,
  R as tr,
  A as er,
  C as nr,
  T as sr,
  D as ar,
  P as lc,
  a as ir,
  b as hc,
  S as dc,
} from "./vendor-radix-CIIFFl0l.js";
import {
  X as Ln,
  F as mc,
  a as uc,
  b as gc,
  c as pc,
  S as $s,
  M as Ps,
  V as rr,
  d as or,
  e as xc,
  A as _n,
  P as va,
  f as cr,
  g as fc,
  h as bc,
  i as lr,
  C as vc,
  j as un,
  k as wc,
  l as xs,
  m as yc,
  R as kc,
  G as jc,
  n as Nc,
  K as Tc,
  o as Hn,
  p as Sc,
  L as qc,
  q as Cc,
  r as hn,
  s as hr,
  t as dr,
  W as Ts,
  T as wa,
  u as Ec,
  v as mr,
  w as we,
  x as dn,
  y as ur,
  B as ya,
  z as Mc,
  D as Lc,
  E as _c,
  H as Ac,
  I as $c,
  J as Pc,
  N as Rc,
  O as Ic,
  Q as gr,
  U as Oc,
  Y as Wc,
  Z as zc,
  _ as Dc,
  $ as Hc,
  a0 as Nn,
  a1 as Bc,
  a2 as on,
  a3 as pr,
  a4 as xr,
  a5 as Vc,
  a6 as Xc,
  a7 as Fc,
  a8 as fr,
  a9 as br,
  aa as Gc,
  ab as Kc,
  ac as Yc,
  ad as Uc,
  ae as vr,
  af as Qc,
  ag as wr,
  ah as Zc,
  ai as Rs,
  aj as An,
  ak as Xa,
  al as Fa,
  am as yr,
  an as fs,
  ao as Jc,
  ap as tl,
  aq as el,
  ar as nl,
  as as sl,
  at as al,
  au as il,
  av as rl,
  aw as ol,
  ax as cl,
  ay as ll,
  az as hl,
  aA as dl,
  aB as ml,
  aC as ul,
  aD as Ga,
  aE as Is,
  aF as Os,
  aG as Ka,
  aH as Ya,
  aI as Ua,
  aJ as gl,
  aK as pl,
  aL as xl,
  aM as Kn,
} from "./vendor-icons-xx0BMbwT.js";
import {
  m as q,
  u as Zt,
  a as Je,
  b as gn,
  A as fe,
  c as gt,
  d as bs,
  L as kr,
} from "./vendor-motion-B2aXCTtA.js";
(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) i(a);
  new MutationObserver((a) => {
    for (const o of a)
      if (o.type === "childList")
        for (const r of o.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && i(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(a) {
    const o = {};
    return (
      a.integrity && (o.integrity = a.integrity),
      a.referrerPolicy && (o.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : a.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function i(a) {
    if (a.ep) return;
    a.ep = !0;
    const o = s(a);
    fetch(a.href, o);
  }
})();
const fl = 1,
  bl = 1e6;
let Ws = 0;
function vl() {
  return ((Ws = (Ws + 1) % Number.MAX_SAFE_INTEGER), Ws.toString());
}
const zs = new Map(),
  Qa = (e) => {
    if (zs.has(e)) return;
    const n = setTimeout(() => {
      (zs.delete(e), Tn({ type: "REMOVE_TOAST", toastId: e }));
    }, bl);
    zs.set(e, n);
  },
  wl = (e, n) => {
    switch (n.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [n.toast, ...e.toasts].slice(0, fl) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((s) =>
            s.id === n.toast.id ? { ...s, ...n.toast } : s,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: s } = n;
        return (
          s
            ? Qa(s)
            : e.toasts.forEach((i) => {
                Qa(i.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((i) =>
              i.id === s || s === void 0 ? { ...i, open: !1 } : i,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return n.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((s) => s.id !== n.toastId) };
    }
  },
  rs = [];
let os = { toasts: [] };
function Tn(e) {
  ((os = wl(os, e)),
    rs.forEach((n) => {
      n(os);
    }));
}
function yl({ ...e }) {
  const n = vl(),
    s = (a) => Tn({ type: "UPDATE_TOAST", toast: { ...a, id: n } }),
    i = () => Tn({ type: "DISMISS_TOAST", toastId: n });
  return (
    Tn({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: n,
        open: !0,
        onOpenChange: (a) => {
          a || i();
        },
      },
    }),
    { id: n, dismiss: i, update: s }
  );
}
function kl() {
  const [e, n] = f.useState(os);
  return (
    f.useEffect(
      () => (
        rs.push(n),
        () => {
          const s = rs.indexOf(n);
          s > -1 && rs.splice(s, 1);
        }
      ),
      [e],
    ),
    {
      ...e,
      toast: yl,
      dismiss: (s) => Tn({ type: "DISMISS_TOAST", toastId: s }),
    }
  );
}
function jr(e) {
  var n,
    s,
    i = "";
  if (typeof e == "string" || typeof e == "number") i += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var a = e.length;
      for (n = 0; n < a; n++)
        e[n] && (s = jr(e[n])) && (i && (i += " "), (i += s));
    } else for (s in e) e[s] && (i && (i += " "), (i += s));
  return i;
}
function Nr() {
  for (var e, n, s = 0, i = "", a = arguments.length; s < a; s++)
    (e = arguments[s]) && (n = jr(e)) && (i && (i += " "), (i += n));
  return i;
}
const Za = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Ja = Nr,
  Tr = (e, n) => (s) => {
    var i;
    if ((n == null ? void 0 : n.variants) == null)
      return Ja(
        e,
        s == null ? void 0 : s.class,
        s == null ? void 0 : s.className,
      );
    const { variants: a, defaultVariants: o } = n,
      r = Object.keys(a).map((h) => {
        const g = s == null ? void 0 : s[h],
          p = o == null ? void 0 : o[h];
        if (g === null) return null;
        const d = Za(g) || Za(p);
        return a[h][d];
      }),
      l =
        s &&
        Object.entries(s).reduce((h, g) => {
          let [p, d] = g;
          return (d === void 0 || (h[p] = d), h);
        }, {}),
      c =
        n == null || (i = n.compoundVariants) === null || i === void 0
          ? void 0
          : i.reduce((h, g) => {
              let { class: p, className: d, ...m } = g;
              return Object.entries(m).every((u) => {
                let [x, v] = u;
                return Array.isArray(v)
                  ? v.includes({ ...o, ...l }[x])
                  : { ...o, ...l }[x] === v;
              })
                ? [...h, p, d]
                : h;
            }, []);
    return Ja(
      e,
      r,
      c,
      s == null ? void 0 : s.class,
      s == null ? void 0 : s.className,
    );
  },
  ka = "-",
  jl = (e) => {
    const n = Tl(e),
      { conflictingClassGroups: s, conflictingClassGroupModifiers: i } = e;
    return {
      getClassGroupId: (r) => {
        const l = r.split(ka);
        return (l[0] === "" && l.length !== 1 && l.shift(), Sr(l, n) || Nl(r));
      },
      getConflictingClassGroupIds: (r, l) => {
        const c = s[r] || [];
        return l && i[r] ? [...c, ...i[r]] : c;
      },
    };
  },
  Sr = (e, n) => {
    var r;
    if (e.length === 0) return n.classGroupId;
    const s = e[0],
      i = n.nextPart.get(s),
      a = i ? Sr(e.slice(1), i) : void 0;
    if (a) return a;
    if (n.validators.length === 0) return;
    const o = e.join(ka);
    return (r = n.validators.find(({ validator: l }) => l(o))) == null
      ? void 0
      : r.classGroupId;
  },
  ti = /^\[(.+)\]$/,
  Nl = (e) => {
    if (ti.test(e)) {
      const n = ti.exec(e)[1],
        s = n == null ? void 0 : n.substring(0, n.indexOf(":"));
      if (s) return "arbitrary.." + s;
    }
  },
  Tl = (e) => {
    const { theme: n, prefix: s } = e,
      i = { nextPart: new Map(), validators: [] };
    return (
      ql(Object.entries(e.classGroups), s).forEach(([o, r]) => {
        ia(r, i, o, n);
      }),
      i
    );
  },
  ia = (e, n, s, i) => {
    e.forEach((a) => {
      if (typeof a == "string") {
        const o = a === "" ? n : ei(n, a);
        o.classGroupId = s;
        return;
      }
      if (typeof a == "function") {
        if (Sl(a)) {
          ia(a(i), n, s, i);
          return;
        }
        n.validators.push({ validator: a, classGroupId: s });
        return;
      }
      Object.entries(a).forEach(([o, r]) => {
        ia(r, ei(n, o), s, i);
      });
    });
  },
  ei = (e, n) => {
    let s = e;
    return (
      n.split(ka).forEach((i) => {
        (s.nextPart.has(i) ||
          s.nextPart.set(i, { nextPart: new Map(), validators: [] }),
          (s = s.nextPart.get(i)));
      }),
      s
    );
  },
  Sl = (e) => e.isThemeGetter,
  ql = (e, n) =>
    n
      ? e.map(([s, i]) => {
          const a = i.map((o) =>
            typeof o == "string"
              ? n + o
              : typeof o == "object"
                ? Object.fromEntries(
                    Object.entries(o).map(([r, l]) => [n + r, l]),
                  )
                : o,
          );
          return [s, a];
        })
      : e,
  Cl = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let n = 0,
      s = new Map(),
      i = new Map();
    const a = (o, r) => {
      (s.set(o, r), n++, n > e && ((n = 0), (i = s), (s = new Map())));
    };
    return {
      get(o) {
        let r = s.get(o);
        if (r !== void 0) return r;
        if ((r = i.get(o)) !== void 0) return (a(o, r), r);
      },
      set(o, r) {
        s.has(o) ? s.set(o, r) : a(o, r);
      },
    };
  },
  qr = "!",
  El = (e) => {
    const { separator: n, experimentalParseClassName: s } = e,
      i = n.length === 1,
      a = n[0],
      o = n.length,
      r = (l) => {
        const c = [];
        let h = 0,
          g = 0,
          p;
        for (let v = 0; v < l.length; v++) {
          let w = l[v];
          if (h === 0) {
            if (w === a && (i || l.slice(v, v + o) === n)) {
              (c.push(l.slice(g, v)), (g = v + o));
              continue;
            }
            if (w === "/") {
              p = v;
              continue;
            }
          }
          w === "[" ? h++ : w === "]" && h--;
        }
        const d = c.length === 0 ? l : l.substring(g),
          m = d.startsWith(qr),
          u = m ? d.substring(1) : d,
          x = p && p > g ? p - g : void 0;
        return {
          modifiers: c,
          hasImportantModifier: m,
          baseClassName: u,
          maybePostfixModifierPosition: x,
        };
      };
    return s ? (l) => s({ className: l, parseClassName: r }) : r;
  },
  Ml = (e) => {
    if (e.length <= 1) return e;
    const n = [];
    let s = [];
    return (
      e.forEach((i) => {
        i[0] === "[" ? (n.push(...s.sort(), i), (s = [])) : s.push(i);
      }),
      n.push(...s.sort()),
      n
    );
  },
  Ll = (e) => ({ cache: Cl(e.cacheSize), parseClassName: El(e), ...jl(e) }),
  _l = /\s+/,
  Al = (e, n) => {
    const {
        parseClassName: s,
        getClassGroupId: i,
        getConflictingClassGroupIds: a,
      } = n,
      o = [],
      r = e.trim().split(_l);
    let l = "";
    for (let c = r.length - 1; c >= 0; c -= 1) {
      const h = r[c],
        {
          modifiers: g,
          hasImportantModifier: p,
          baseClassName: d,
          maybePostfixModifierPosition: m,
        } = s(h);
      let u = !!m,
        x = i(u ? d.substring(0, m) : d);
      if (!x) {
        if (!u) {
          l = h + (l.length > 0 ? " " + l : l);
          continue;
        }
        if (((x = i(d)), !x)) {
          l = h + (l.length > 0 ? " " + l : l);
          continue;
        }
        u = !1;
      }
      const v = Ml(g).join(":"),
        w = p ? v + qr : v,
        y = w + x;
      if (o.includes(y)) continue;
      o.push(y);
      const N = a(x, u);
      for (let j = 0; j < N.length; ++j) {
        const k = N[j];
        o.push(w + k);
      }
      l = h + (l.length > 0 ? " " + l : l);
    }
    return l;
  };
function $l() {
  let e = 0,
    n,
    s,
    i = "";
  for (; e < arguments.length;)
    (n = arguments[e++]) && (s = Cr(n)) && (i && (i += " "), (i += s));
  return i;
}
const Cr = (e) => {
  if (typeof e == "string") return e;
  let n,
    s = "";
  for (let i = 0; i < e.length; i++)
    e[i] && (n = Cr(e[i])) && (s && (s += " "), (s += n));
  return s;
};
function Pl(e, ...n) {
  let s,
    i,
    a,
    o = r;
  function r(c) {
    const h = n.reduce((g, p) => p(g), e());
    return ((s = Ll(h)), (i = s.cache.get), (a = s.cache.set), (o = l), l(c));
  }
  function l(c) {
    const h = i(c);
    if (h) return h;
    const g = Al(c, s);
    return (a(c, g), g);
  }
  return function () {
    return o($l.apply(null, arguments));
  };
}
const Mt = (e) => {
    const n = (s) => s[e] || [];
    return ((n.isThemeGetter = !0), n);
  },
  Er = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Rl = /^\d+\/\d+$/,
  Il = new Set(["px", "full", "screen"]),
  Ol = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Wl =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  zl = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Dl = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Hl =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  $e = (e) => cn(e) || Il.has(e) || Rl.test(e),
  ze = (e) => pn(e, "length", Ul),
  cn = (e) => !!e && !Number.isNaN(Number(e)),
  Ds = (e) => pn(e, "number", cn),
  bn = (e) => !!e && Number.isInteger(Number(e)),
  Bl = (e) => e.endsWith("%") && cn(e.slice(0, -1)),
  ht = (e) => Er.test(e),
  De = (e) => Ol.test(e),
  Vl = new Set(["length", "size", "percentage"]),
  Xl = (e) => pn(e, Vl, Mr),
  Fl = (e) => pn(e, "position", Mr),
  Gl = new Set(["image", "url"]),
  Kl = (e) => pn(e, Gl, Zl),
  Yl = (e) => pn(e, "", Ql),
  vn = () => !0,
  pn = (e, n, s) => {
    const i = Er.exec(e);
    return i
      ? i[1]
        ? typeof n == "string"
          ? i[1] === n
          : n.has(i[1])
        : s(i[2])
      : !1;
  },
  Ul = (e) => Wl.test(e) && !zl.test(e),
  Mr = () => !1,
  Ql = (e) => Dl.test(e),
  Zl = (e) => Hl.test(e),
  Jl = () => {
    const e = Mt("colors"),
      n = Mt("spacing"),
      s = Mt("blur"),
      i = Mt("brightness"),
      a = Mt("borderColor"),
      o = Mt("borderRadius"),
      r = Mt("borderSpacing"),
      l = Mt("borderWidth"),
      c = Mt("contrast"),
      h = Mt("grayscale"),
      g = Mt("hueRotate"),
      p = Mt("invert"),
      d = Mt("gap"),
      m = Mt("gradientColorStops"),
      u = Mt("gradientColorStopPositions"),
      x = Mt("inset"),
      v = Mt("margin"),
      w = Mt("opacity"),
      y = Mt("padding"),
      N = Mt("saturate"),
      j = Mt("scale"),
      k = Mt("sepia"),
      b = Mt("skew"),
      S = Mt("space"),
      E = Mt("translate"),
      L = () => ["auto", "contain", "none"],
      T = () => ["auto", "hidden", "clip", "visible", "scroll"],
      C = () => ["auto", ht, n],
      _ = () => [ht, n],
      D = () => ["", $e, ze],
      B = () => ["auto", cn, ht],
      K = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      z = () => ["solid", "dashed", "dotted", "double", "none"],
      st = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      P = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      R = () => ["", "0", ht],
      et = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      at = () => [cn, ht];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [vn],
        spacing: [$e, ze],
        blur: ["none", "", De, ht],
        brightness: at(),
        borderColor: [e],
        borderRadius: ["none", "", "full", De, ht],
        borderSpacing: _(),
        borderWidth: D(),
        contrast: at(),
        grayscale: R(),
        hueRotate: at(),
        invert: R(),
        gap: _(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Bl, ze],
        inset: C(),
        margin: C(),
        opacity: at(),
        padding: _(),
        saturate: at(),
        scale: at(),
        sepia: R(),
        skew: at(),
        space: _(),
        translate: _(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", ht] }],
        container: ["container"],
        columns: [{ columns: [De] }],
        "break-after": [{ "break-after": et() }],
        "break-before": [{ "break-before": et() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...K(), ht] }],
        overflow: [{ overflow: T() }],
        "overflow-x": [{ "overflow-x": T() }],
        "overflow-y": [{ "overflow-y": T() }],
        overscroll: [{ overscroll: L() }],
        "overscroll-x": [{ "overscroll-x": L() }],
        "overscroll-y": [{ "overscroll-y": L() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [x] }],
        "inset-x": [{ "inset-x": [x] }],
        "inset-y": [{ "inset-y": [x] }],
        start: [{ start: [x] }],
        end: [{ end: [x] }],
        top: [{ top: [x] }],
        right: [{ right: [x] }],
        bottom: [{ bottom: [x] }],
        left: [{ left: [x] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", bn, ht] }],
        basis: [{ basis: C() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", ht] }],
        grow: [{ grow: R() }],
        shrink: [{ shrink: R() }],
        order: [{ order: ["first", "last", "none", bn, ht] }],
        "grid-cols": [{ "grid-cols": [vn] }],
        "col-start-end": [{ col: ["auto", { span: ["full", bn, ht] }, ht] }],
        "col-start": [{ "col-start": B() }],
        "col-end": [{ "col-end": B() }],
        "grid-rows": [{ "grid-rows": [vn] }],
        "row-start-end": [{ row: ["auto", { span: [bn, ht] }, ht] }],
        "row-start": [{ "row-start": B() }],
        "row-end": [{ "row-end": B() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", ht] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", ht] }],
        gap: [{ gap: [d] }],
        "gap-x": [{ "gap-x": [d] }],
        "gap-y": [{ "gap-y": [d] }],
        "justify-content": [{ justify: ["normal", ...P()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...P(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...P(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [y] }],
        px: [{ px: [y] }],
        py: [{ py: [y] }],
        ps: [{ ps: [y] }],
        pe: [{ pe: [y] }],
        pt: [{ pt: [y] }],
        pr: [{ pr: [y] }],
        pb: [{ pb: [y] }],
        pl: [{ pl: [y] }],
        m: [{ m: [v] }],
        mx: [{ mx: [v] }],
        my: [{ my: [v] }],
        ms: [{ ms: [v] }],
        me: [{ me: [v] }],
        mt: [{ mt: [v] }],
        mr: [{ mr: [v] }],
        mb: [{ mb: [v] }],
        ml: [{ ml: [v] }],
        "space-x": [{ "space-x": [S] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [S] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ht, n] }],
        "min-w": [{ "min-w": [ht, n, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              ht,
              n,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [De] },
              De,
            ],
          },
        ],
        h: [{ h: [ht, n, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [ht, n, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [ht, n, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [ht, n, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", De, ze] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Ds,
            ],
          },
        ],
        "font-family": [{ font: [vn] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              ht,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", cn, Ds] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              $e,
              ht,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", ht] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", ht] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [w] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [w] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...z(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", $e, ze] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", $e, ht] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: _() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              ht,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", ht] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [w] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...K(), Fl] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Xl] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Kl,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [u] }],
        "gradient-via-pos": [{ via: [u] }],
        "gradient-to-pos": [{ to: [u] }],
        "gradient-from": [{ from: [m] }],
        "gradient-via": [{ via: [m] }],
        "gradient-to": [{ to: [m] }],
        rounded: [{ rounded: [o] }],
        "rounded-s": [{ "rounded-s": [o] }],
        "rounded-e": [{ "rounded-e": [o] }],
        "rounded-t": [{ "rounded-t": [o] }],
        "rounded-r": [{ "rounded-r": [o] }],
        "rounded-b": [{ "rounded-b": [o] }],
        "rounded-l": [{ "rounded-l": [o] }],
        "rounded-ss": [{ "rounded-ss": [o] }],
        "rounded-se": [{ "rounded-se": [o] }],
        "rounded-ee": [{ "rounded-ee": [o] }],
        "rounded-es": [{ "rounded-es": [o] }],
        "rounded-tl": [{ "rounded-tl": [o] }],
        "rounded-tr": [{ "rounded-tr": [o] }],
        "rounded-br": [{ "rounded-br": [o] }],
        "rounded-bl": [{ "rounded-bl": [o] }],
        "border-w": [{ border: [l] }],
        "border-w-x": [{ "border-x": [l] }],
        "border-w-y": [{ "border-y": [l] }],
        "border-w-s": [{ "border-s": [l] }],
        "border-w-e": [{ "border-e": [l] }],
        "border-w-t": [{ "border-t": [l] }],
        "border-w-r": [{ "border-r": [l] }],
        "border-w-b": [{ "border-b": [l] }],
        "border-w-l": [{ "border-l": [l] }],
        "border-opacity": [{ "border-opacity": [w] }],
        "border-style": [{ border: [...z(), "hidden"] }],
        "divide-x": [{ "divide-x": [l] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [l] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [w] }],
        "divide-style": [{ divide: z() }],
        "border-color": [{ border: [a] }],
        "border-color-x": [{ "border-x": [a] }],
        "border-color-y": [{ "border-y": [a] }],
        "border-color-s": [{ "border-s": [a] }],
        "border-color-e": [{ "border-e": [a] }],
        "border-color-t": [{ "border-t": [a] }],
        "border-color-r": [{ "border-r": [a] }],
        "border-color-b": [{ "border-b": [a] }],
        "border-color-l": [{ "border-l": [a] }],
        "divide-color": [{ divide: [a] }],
        "outline-style": [{ outline: ["", ...z()] }],
        "outline-offset": [{ "outline-offset": [$e, ht] }],
        "outline-w": [{ outline: [$e, ze] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: D() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [w] }],
        "ring-offset-w": [{ "ring-offset": [$e, ze] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", De, Yl] }],
        "shadow-color": [{ shadow: [vn] }],
        opacity: [{ opacity: [w] }],
        "mix-blend": [
          { "mix-blend": [...st(), "plus-lighter", "plus-darker"] },
        ],
        "bg-blend": [{ "bg-blend": st() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [s] }],
        brightness: [{ brightness: [i] }],
        contrast: [{ contrast: [c] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", De, ht] }],
        grayscale: [{ grayscale: [h] }],
        "hue-rotate": [{ "hue-rotate": [g] }],
        invert: [{ invert: [p] }],
        saturate: [{ saturate: [N] }],
        sepia: [{ sepia: [k] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [s] }],
        "backdrop-brightness": [{ "backdrop-brightness": [i] }],
        "backdrop-contrast": [{ "backdrop-contrast": [c] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [h] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [g] }],
        "backdrop-invert": [{ "backdrop-invert": [p] }],
        "backdrop-opacity": [{ "backdrop-opacity": [w] }],
        "backdrop-saturate": [{ "backdrop-saturate": [N] }],
        "backdrop-sepia": [{ "backdrop-sepia": [k] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [r] }],
        "border-spacing-x": [{ "border-spacing-x": [r] }],
        "border-spacing-y": [{ "border-spacing-y": [r] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              ht,
            ],
          },
        ],
        duration: [{ duration: at() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", ht] }],
        delay: [{ delay: at() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", ht] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [j] }],
        "scale-x": [{ "scale-x": [j] }],
        "scale-y": [{ "scale-y": [j] }],
        rotate: [{ rotate: [bn, ht] }],
        "translate-x": [{ "translate-x": [E] }],
        "translate-y": [{ "translate-y": [E] }],
        "skew-x": [{ "skew-x": [b] }],
        "skew-y": [{ "skew-y": [b] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              ht,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              ht,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": _() }],
        "scroll-mx": [{ "scroll-mx": _() }],
        "scroll-my": [{ "scroll-my": _() }],
        "scroll-ms": [{ "scroll-ms": _() }],
        "scroll-me": [{ "scroll-me": _() }],
        "scroll-mt": [{ "scroll-mt": _() }],
        "scroll-mr": [{ "scroll-mr": _() }],
        "scroll-mb": [{ "scroll-mb": _() }],
        "scroll-ml": [{ "scroll-ml": _() }],
        "scroll-p": [{ "scroll-p": _() }],
        "scroll-px": [{ "scroll-px": _() }],
        "scroll-py": [{ "scroll-py": _() }],
        "scroll-ps": [{ "scroll-ps": _() }],
        "scroll-pe": [{ "scroll-pe": _() }],
        "scroll-pt": [{ "scroll-pt": _() }],
        "scroll-pr": [{ "scroll-pr": _() }],
        "scroll-pb": [{ "scroll-pb": _() }],
        "scroll-pl": [{ "scroll-pl": _() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", ht] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [$e, ze, Ds] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  th = Pl(Jl);
function ge(...e) {
  return th(Nr(e));
}
const eh = lc,
  Lr = f.forwardRef(({ className: e, ...n }, s) =>
    t.jsx(Ji, {
      ref: s,
      className: ge(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e,
      ),
      ...n,
    }),
  );
Lr.displayName = Ji.displayName;
const nh = Tr(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  _r = f.forwardRef(({ className: e, variant: n, ...s }, i) =>
    t.jsx(tr, { ref: i, className: ge(nh({ variant: n }), e), ...s }),
  );
_r.displayName = tr.displayName;
const sh = f.forwardRef(({ className: e, ...n }, s) =>
  t.jsx(er, {
    ref: s,
    className: ge(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e,
    ),
    ...n,
  }),
);
sh.displayName = er.displayName;
const Ar = f.forwardRef(({ className: e, ...n }, s) =>
  t.jsx(nr, {
    ref: s,
    className: ge(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e,
    ),
    "toast-close": "",
    ...n,
    children: t.jsx(Ln, { className: "h-4 w-4" }),
  }),
);
Ar.displayName = nr.displayName;
const $r = f.forwardRef(({ className: e, ...n }, s) =>
  t.jsx(sr, { ref: s, className: ge("text-sm font-semibold", e), ...n }),
);
$r.displayName = sr.displayName;
const Pr = f.forwardRef(({ className: e, ...n }, s) =>
  t.jsx(ar, { ref: s, className: ge("text-sm opacity-90", e), ...n }),
);
Pr.displayName = ar.displayName;
function ah() {
  const { toasts: e } = kl();
  return t.jsxs(eh, {
    children: [
      e.map(function ({ id: n, title: s, description: i, action: a, ...o }) {
        return t.jsxs(
          _r,
          {
            ...o,
            children: [
              t.jsxs("div", {
                className: "grid gap-1",
                children: [
                  s && t.jsx($r, { children: s }),
                  i && t.jsx(Pr, { children: i }),
                ],
              }),
              a,
              t.jsx(Ar, {}),
            ],
          },
          n,
        );
      }),
      t.jsx(Lr, {}),
    ],
  });
}
const ih = () => {
  f.useEffect(() => {
    const e = navigator,
      n = e.deviceMemory,
      s = e.hardwareConcurrency,
      i = typeof n == "number" && n <= 4,
      a = typeof s == "number" && s <= 4,
      r =
        (window.matchMedia("(pointer: coarse)").matches &&
          window.matchMedia("(max-width: 767px)").matches) ||
        i ||
        a;
    document.documentElement.classList.toggle("low-power", r);
  }, []);
};
let ra = !1;
const cs = new Set();
let Ye = null;
const rh = () => {
    const e = document.documentElement.classList.contains("low-power");
    e !== ra && ((ra = e), cs.forEach((n) => n(e)));
  },
  oh = (e) => (
    cs.add(e),
    Ye ||
      ((ra = document.documentElement.classList.contains("low-power")),
      (Ye = new MutationObserver(rh)),
      Ye.observe(document.documentElement, {
        attributes: !0,
        attributeFilter: ["class"],
      })),
    () => {
      (cs.delete(e),
        cs.size === 0 && (Ye == null || Ye.disconnect(), (Ye = null)));
    }
  ),
  Rr = () => {
    const [e, n] = f.useState(!1);
    return (
      f.useEffect(
        () => (
          n(document.documentElement.classList.contains("low-power")),
          oh(n)
        ),
        [],
      ),
      e
    );
  };
var ni = ["light", "dark"],
  ch = "(prefers-color-scheme: dark)",
  lh = f.createContext(void 0),
  hh = { setTheme: (e) => {}, themes: [] },
  dh = () => {
    var e;
    return (e = f.useContext(lh)) != null ? e : hh;
  };
f.memo(
  ({
    forcedTheme: e,
    storageKey: n,
    attribute: s,
    enableSystem: i,
    enableColorScheme: a,
    defaultTheme: o,
    value: r,
    attrs: l,
    nonce: c,
  }) => {
    let h = o === "system",
      g =
        s === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map((u) => `'${u}'`).join(",")})`};`
          : `var d=document.documentElement,n='${s}',s='setAttribute';`,
      p = a
        ? ni.includes(o) && o
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      d = (u, x = !1, v = !0) => {
        let w = r ? r[u] : u,
          y = x ? u + "|| ''" : `'${w}'`,
          N = "";
        return (
          a &&
            v &&
            !x &&
            ni.includes(u) &&
            (N += `d.style.colorScheme = '${u}';`),
          s === "class"
            ? x || w
              ? (N += `c.add(${y})`)
              : (N += "null")
            : w && (N += `d[s](n,${y})`),
          N
        );
      },
      m = e
        ? `!function(){${g}${d(e)}}()`
        : i
          ? `!function(){try{${g}var e=localStorage.getItem('${n}');if('system'===e||(!e&&${h})){var t='${ch}',m=window.matchMedia(t);if(m.media!==t||m.matches){${d("dark")}}else{${d("light")}}}else if(e){${r ? `var x=${JSON.stringify(r)};` : ""}${d(r ? "x[e]" : "e", !0)}}${h ? "" : "else{" + d(o, !1, !1) + "}"}${p}}catch(e){}}()`
          : `!function(){try{${g}var e=localStorage.getItem('${n}');if(e){${r ? `var x=${JSON.stringify(r)};` : ""}${d(r ? "x[e]" : "e", !0)}}else{${d(o, !1, !1)};}${p}}catch(t){}}();`;
    return f.createElement("script", {
      nonce: c,
      dangerouslySetInnerHTML: { __html: m },
    });
  },
);
var mh = (e) => {
    switch (e) {
      case "success":
        return ph;
      case "info":
        return fh;
      case "warning":
        return xh;
      case "error":
        return bh;
      default:
        return null;
    }
  },
  uh = Array(12).fill(0),
  gh = ({ visible: e, className: n }) =>
    O.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", n].filter(Boolean).join(" "),
        "data-visible": e,
      },
      O.createElement(
        "div",
        { className: "sonner-spinner" },
        uh.map((s, i) =>
          O.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${i}`,
          }),
        ),
      ),
    ),
  ph = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  xh = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  fh = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  bh = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  vh = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    O.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    O.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  ),
  wh = () => {
    let [e, n] = O.useState(document.hidden);
    return (
      O.useEffect(() => {
        let s = () => {
          n(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", s),
          () => window.removeEventListener("visibilitychange", s)
        );
      }, []),
      e
    );
  },
  oa = 1,
  yh = class {
    constructor() {
      ((this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let n = this.subscribers.indexOf(e);
          this.subscribers.splice(n, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((n) => n(e));
        }),
        (this.addToast = (e) => {
          (this.publish(e), (this.toasts = [...this.toasts, e]));
        }),
        (this.create = (e) => {
          var n;
          let { message: s, ...i } = e,
            a =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((n = e.id) == null ? void 0 : n.length) > 0
                ? e.id
                : oa++,
            o = this.toasts.find((l) => l.id === a),
            r = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(a) && this.dismissedToasts.delete(a),
            o
              ? (this.toasts = this.toasts.map((l) =>
                  l.id === a
                    ? (this.publish({ ...l, ...e, id: a, title: s }),
                      { ...l, ...e, id: a, dismissible: r, title: s })
                    : l,
                ))
              : this.addToast({ title: s, ...i, dismissible: r, id: a }),
            a
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((n) => {
              this.subscribers.forEach((s) => s({ id: n.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((n) => n({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, n) => this.create({ ...n, message: e })),
        (this.error = (e, n) =>
          this.create({ ...n, message: e, type: "error" })),
        (this.success = (e, n) =>
          this.create({ ...n, type: "success", message: e })),
        (this.info = (e, n) => this.create({ ...n, type: "info", message: e })),
        (this.warning = (e, n) =>
          this.create({ ...n, type: "warning", message: e })),
        (this.loading = (e, n) =>
          this.create({ ...n, type: "loading", message: e })),
        (this.promise = (e, n) => {
          if (!n) return;
          let s;
          n.loading !== void 0 &&
            (s = this.create({
              ...n,
              promise: e,
              type: "loading",
              message: n.loading,
              description:
                typeof n.description != "function" ? n.description : void 0,
            }));
          let i = e instanceof Promise ? e : e(),
            a = s !== void 0,
            o,
            r = i
              .then(async (c) => {
                if (((o = ["resolve", c]), O.isValidElement(c)))
                  ((a = !1),
                    this.create({ id: s, type: "default", message: c }));
                else if (jh(c) && !c.ok) {
                  a = !1;
                  let h =
                      typeof n.error == "function"
                        ? await n.error(`HTTP error! status: ${c.status}`)
                        : n.error,
                    g =
                      typeof n.description == "function"
                        ? await n.description(`HTTP error! status: ${c.status}`)
                        : n.description;
                  this.create({
                    id: s,
                    type: "error",
                    message: h,
                    description: g,
                  });
                } else if (n.success !== void 0) {
                  a = !1;
                  let h =
                      typeof n.success == "function"
                        ? await n.success(c)
                        : n.success,
                    g =
                      typeof n.description == "function"
                        ? await n.description(c)
                        : n.description;
                  this.create({
                    id: s,
                    type: "success",
                    message: h,
                    description: g,
                  });
                }
              })
              .catch(async (c) => {
                if (((o = ["reject", c]), n.error !== void 0)) {
                  a = !1;
                  let h =
                      typeof n.error == "function" ? await n.error(c) : n.error,
                    g =
                      typeof n.description == "function"
                        ? await n.description(c)
                        : n.description;
                  this.create({
                    id: s,
                    type: "error",
                    message: h,
                    description: g,
                  });
                }
              })
              .finally(() => {
                var c;
                (a && (this.dismiss(s), (s = void 0)),
                  (c = n.finally) == null || c.call(n));
              }),
            l = () =>
              new Promise((c, h) =>
                r.then(() => (o[0] === "reject" ? h(o[1]) : c(o[1]))).catch(h),
              );
          return typeof s != "string" && typeof s != "number"
            ? { unwrap: l }
            : Object.assign(s, { unwrap: l });
        }),
        (this.custom = (e, n) => {
          let s = (n == null ? void 0 : n.id) || oa++;
          return (this.create({ jsx: e(s), id: s, ...n }), s);
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()));
    }
  },
  ie = new yh(),
  kh = (e, n) => {
    let s = (n == null ? void 0 : n.id) || oa++;
    return (ie.addToast({ title: e, ...n, id: s }), s);
  },
  jh = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  Nh = kh,
  Th = () => ie.toasts,
  Sh = () => ie.getActiveToasts();
Object.assign(
  Nh,
  {
    success: ie.success,
    info: ie.info,
    warning: ie.warning,
    error: ie.error,
    custom: ie.custom,
    message: ie.message,
    promise: ie.promise,
    dismiss: ie.dismiss,
    loading: ie.loading,
  },
  { getHistory: Th, getToasts: Sh },
);
function qh(e, { insertAt: n } = {}) {
  if (typeof document > "u") return;
  let s = document.head || document.getElementsByTagName("head")[0],
    i = document.createElement("style");
  ((i.type = "text/css"),
    n === "top" && s.firstChild
      ? s.insertBefore(i, s.firstChild)
      : s.appendChild(i),
    i.styleSheet
      ? (i.styleSheet.cssText = e)
      : i.appendChild(document.createTextNode(e)));
}
qh(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Yn(e) {
  return e.label !== void 0;
}
var Ch = 3,
  Eh = "32px",
  Mh = "16px",
  si = 4e3,
  Lh = 356,
  _h = 14,
  Ah = 20,
  $h = 200;
function ve(...e) {
  return e.filter(Boolean).join(" ");
}
function Ph(e) {
  let [n, s] = e.split("-"),
    i = [];
  return (n && i.push(n), s && i.push(s), i);
}
var Rh = (e) => {
  var n, s, i, a, o, r, l, c, h, g, p;
  let {
      invert: d,
      toast: m,
      unstyled: u,
      interacting: x,
      setHeights: v,
      visibleToasts: w,
      heights: y,
      index: N,
      toasts: j,
      expanded: k,
      removeToast: b,
      defaultRichColors: S,
      closeButton: E,
      style: L,
      cancelButtonStyle: T,
      actionButtonStyle: C,
      className: _ = "",
      descriptionClassName: D = "",
      duration: B,
      position: K,
      gap: z,
      loadingIcon: st,
      expandByDefault: P,
      classNames: R,
      icons: et,
      closeButtonAriaLabel: at = "Close toast",
      pauseWhenPageIsHidden: Y,
    } = e,
    [Q, Z] = O.useState(null),
    [ut, jt] = O.useState(null),
    [W, it] = O.useState(!1),
    [ct, dt] = O.useState(!1),
    [lt, I] = O.useState(!1),
    [mt, pt] = O.useState(!1),
    [Nt, St] = O.useState(!1),
    [H, J] = O.useState(0),
    [ft, vt] = O.useState(0),
    wt = O.useRef(m.duration || B || si),
    Jt = O.useRef(null),
    Pt = O.useRef(null),
    Et = N === 0,
    Gt = N + 1 <= w,
    M = m.type,
    U = m.dismissible !== !1,
    tt = m.className || "",
    xt = m.descriptionClassName || "",
    qt = O.useMemo(
      () => y.findIndex((rt) => rt.toastId === m.id) || 0,
      [y, m.id],
    ),
    Vt = O.useMemo(() => {
      var rt;
      return (rt = m.closeButton) != null ? rt : E;
    }, [m.closeButton, E]),
    Wt = O.useMemo(() => m.duration || B || si, [m.duration, B]),
    Kt = O.useRef(0),
    oe = O.useRef(0),
    _e = O.useRef(0),
    pe = O.useRef(null),
    [Fe, Ge] = K.split("-"),
    Oe = O.useMemo(
      () => y.reduce((rt, bt, Tt) => (Tt >= qt ? rt : rt + bt.height), 0),
      [y, qt],
    ),
    Bt = wh(),
    nn = m.invert || d,
    We = M === "loading";
  ((oe.current = O.useMemo(() => qt * z + Oe, [qt, Oe])),
    O.useEffect(() => {
      wt.current = Wt;
    }, [Wt]),
    O.useEffect(() => {
      it(!0);
    }, []),
    O.useEffect(() => {
      let rt = Pt.current;
      if (rt) {
        let bt = rt.getBoundingClientRect().height;
        return (
          vt(bt),
          v((Tt) => [
            { toastId: m.id, height: bt, position: m.position },
            ...Tt,
          ]),
          () => v((Tt) => Tt.filter((ce) => ce.toastId !== m.id))
        );
      }
    }, [v, m.id]),
    O.useLayoutEffect(() => {
      if (!W) return;
      let rt = Pt.current,
        bt = rt.style.height;
      rt.style.height = "auto";
      let Tt = rt.getBoundingClientRect().height;
      ((rt.style.height = bt),
        vt(Tt),
        v((ce) =>
          ce.find((le) => le.toastId === m.id)
            ? ce.map((le) => (le.toastId === m.id ? { ...le, height: Tt } : le))
            : [{ toastId: m.id, height: Tt, position: m.position }, ...ce],
        ));
    }, [W, m.title, m.description, v, m.id]));
  let Yt = O.useCallback(() => {
    (dt(!0),
      J(oe.current),
      v((rt) => rt.filter((bt) => bt.toastId !== m.id)),
      setTimeout(() => {
        b(m);
      }, $h));
  }, [m, b, v, oe]);
  (O.useEffect(() => {
    if (
      (m.promise && M === "loading") ||
      m.duration === 1 / 0 ||
      m.type === "loading"
    )
      return;
    let rt;
    return (
      k || x || (Y && Bt)
        ? (() => {
            if (_e.current < Kt.current) {
              let bt = new Date().getTime() - Kt.current;
              wt.current = wt.current - bt;
            }
            _e.current = new Date().getTime();
          })()
        : wt.current !== 1 / 0 &&
          ((Kt.current = new Date().getTime()),
          (rt = setTimeout(() => {
            var bt;
            ((bt = m.onAutoClose) == null || bt.call(m, m), Yt());
          }, wt.current))),
      () => clearTimeout(rt)
    );
  }, [k, x, m, M, Y, Bt, Yt]),
    O.useEffect(() => {
      m.delete && Yt();
    }, [Yt, m.delete]));
  function fn() {
    var rt, bt, Tt;
    return et != null && et.loading
      ? O.createElement(
          "div",
          {
            className: ve(
              R == null ? void 0 : R.loader,
              (rt = m == null ? void 0 : m.classNames) == null
                ? void 0
                : rt.loader,
              "sonner-loader",
            ),
            "data-visible": M === "loading",
          },
          et.loading,
        )
      : st
        ? O.createElement(
            "div",
            {
              className: ve(
                R == null ? void 0 : R.loader,
                (bt = m == null ? void 0 : m.classNames) == null
                  ? void 0
                  : bt.loader,
                "sonner-loader",
              ),
              "data-visible": M === "loading",
            },
            st,
          )
        : O.createElement(gh, {
            className: ve(
              R == null ? void 0 : R.loader,
              (Tt = m == null ? void 0 : m.classNames) == null
                ? void 0
                : Tt.loader,
            ),
            visible: M === "loading",
          });
  }
  return O.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Pt,
      className: ve(
        _,
        tt,
        R == null ? void 0 : R.toast,
        (n = m == null ? void 0 : m.classNames) == null ? void 0 : n.toast,
        R == null ? void 0 : R.default,
        R == null ? void 0 : R[M],
        (s = m == null ? void 0 : m.classNames) == null ? void 0 : s[M],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (i = m.richColors) != null ? i : S,
      "data-styled": !(m.jsx || m.unstyled || u),
      "data-mounted": W,
      "data-promise": !!m.promise,
      "data-swiped": Nt,
      "data-removed": ct,
      "data-visible": Gt,
      "data-y-position": Fe,
      "data-x-position": Ge,
      "data-index": N,
      "data-front": Et,
      "data-swiping": lt,
      "data-dismissible": U,
      "data-type": M,
      "data-invert": nn,
      "data-swipe-out": mt,
      "data-swipe-direction": ut,
      "data-expanded": !!(k || (P && W)),
      style: {
        "--index": N,
        "--toasts-before": N,
        "--z-index": j.length - N,
        "--offset": `${ct ? H : oe.current}px`,
        "--initial-height": P ? "auto" : `${ft}px`,
        ...L,
        ...m.style,
      },
      onDragEnd: () => {
        (I(!1), Z(null), (pe.current = null));
      },
      onPointerDown: (rt) => {
        We ||
          !U ||
          ((Jt.current = new Date()),
          J(oe.current),
          rt.target.setPointerCapture(rt.pointerId),
          rt.target.tagName !== "BUTTON" &&
            (I(!0), (pe.current = { x: rt.clientX, y: rt.clientY })));
      },
      onPointerUp: () => {
        var rt, bt, Tt, ce;
        if (mt || !U) return;
        pe.current = null;
        let le = Number(
            ((rt = Pt.current) == null
              ? void 0
              : rt.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0,
          ),
          je = Number(
            ((bt = Pt.current) == null
              ? void 0
              : bt.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0,
          ),
          Ae =
            new Date().getTime() -
            ((Tt = Jt.current) == null ? void 0 : Tt.getTime()),
          he = Q === "x" ? le : je,
          Ne = Math.abs(he) / Ae;
        if (Math.abs(he) >= Ah || Ne > 0.11) {
          (J(oe.current),
            (ce = m.onDismiss) == null || ce.call(m, m),
            jt(
              Q === "x" ? (le > 0 ? "right" : "left") : je > 0 ? "down" : "up",
            ),
            Yt(),
            pt(!0),
            St(!1));
          return;
        }
        (I(!1), Z(null));
      },
      onPointerMove: (rt) => {
        var bt, Tt, ce, le;
        if (
          !pe.current ||
          !U ||
          ((bt = window.getSelection()) == null
            ? void 0
            : bt.toString().length) > 0
        )
          return;
        let je = rt.clientY - pe.current.y,
          Ae = rt.clientX - pe.current.x,
          he = (Tt = e.swipeDirections) != null ? Tt : Ph(K);
        !Q &&
          (Math.abs(Ae) > 1 || Math.abs(je) > 1) &&
          Z(Math.abs(Ae) > Math.abs(je) ? "x" : "y");
        let Ne = { x: 0, y: 0 };
        (Q === "y"
          ? (he.includes("top") || he.includes("bottom")) &&
            ((he.includes("top") && je < 0) ||
              (he.includes("bottom") && je > 0)) &&
            (Ne.y = je)
          : Q === "x" &&
            (he.includes("left") || he.includes("right")) &&
            ((he.includes("left") && Ae < 0) ||
              (he.includes("right") && Ae > 0)) &&
            (Ne.x = Ae),
          (Math.abs(Ne.x) > 0 || Math.abs(Ne.y) > 0) && St(!0),
          (ce = Pt.current) == null ||
            ce.style.setProperty("--swipe-amount-x", `${Ne.x}px`),
          (le = Pt.current) == null ||
            le.style.setProperty("--swipe-amount-y", `${Ne.y}px`));
      },
    },
    Vt && !m.jsx
      ? O.createElement(
          "button",
          {
            "aria-label": at,
            "data-disabled": We,
            "data-close-button": !0,
            onClick:
              We || !U
                ? () => {}
                : () => {
                    var rt;
                    (Yt(), (rt = m.onDismiss) == null || rt.call(m, m));
                  },
            className: ve(
              R == null ? void 0 : R.closeButton,
              (a = m == null ? void 0 : m.classNames) == null
                ? void 0
                : a.closeButton,
            ),
          },
          (o = et == null ? void 0 : et.close) != null ? o : vh,
        )
      : null,
    m.jsx || f.isValidElement(m.title)
      ? m.jsx
        ? m.jsx
        : typeof m.title == "function"
          ? m.title()
          : m.title
      : O.createElement(
          O.Fragment,
          null,
          M || m.icon || m.promise
            ? O.createElement(
                "div",
                {
                  "data-icon": "",
                  className: ve(
                    R == null ? void 0 : R.icon,
                    (r = m == null ? void 0 : m.classNames) == null
                      ? void 0
                      : r.icon,
                  ),
                },
                m.promise || (m.type === "loading" && !m.icon)
                  ? m.icon || fn()
                  : null,
                m.type !== "loading"
                  ? m.icon || (et == null ? void 0 : et[M]) || mh(M)
                  : null,
              )
            : null,
          O.createElement(
            "div",
            {
              "data-content": "",
              className: ve(
                R == null ? void 0 : R.content,
                (l = m == null ? void 0 : m.classNames) == null
                  ? void 0
                  : l.content,
              ),
            },
            O.createElement(
              "div",
              {
                "data-title": "",
                className: ve(
                  R == null ? void 0 : R.title,
                  (c = m == null ? void 0 : m.classNames) == null
                    ? void 0
                    : c.title,
                ),
              },
              typeof m.title == "function" ? m.title() : m.title,
            ),
            m.description
              ? O.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: ve(
                      D,
                      xt,
                      R == null ? void 0 : R.description,
                      (h = m == null ? void 0 : m.classNames) == null
                        ? void 0
                        : h.description,
                    ),
                  },
                  typeof m.description == "function"
                    ? m.description()
                    : m.description,
                )
              : null,
          ),
          f.isValidElement(m.cancel)
            ? m.cancel
            : m.cancel && Yn(m.cancel)
              ? O.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: m.cancelButtonStyle || T,
                    onClick: (rt) => {
                      var bt, Tt;
                      Yn(m.cancel) &&
                        U &&
                        ((Tt = (bt = m.cancel).onClick) == null ||
                          Tt.call(bt, rt),
                        Yt());
                    },
                    className: ve(
                      R == null ? void 0 : R.cancelButton,
                      (g = m == null ? void 0 : m.classNames) == null
                        ? void 0
                        : g.cancelButton,
                    ),
                  },
                  m.cancel.label,
                )
              : null,
          f.isValidElement(m.action)
            ? m.action
            : m.action && Yn(m.action)
              ? O.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: m.actionButtonStyle || C,
                    onClick: (rt) => {
                      var bt, Tt;
                      Yn(m.action) &&
                        ((Tt = (bt = m.action).onClick) == null ||
                          Tt.call(bt, rt),
                        !rt.defaultPrevented && Yt());
                    },
                    className: ve(
                      R == null ? void 0 : R.actionButton,
                      (p = m == null ? void 0 : m.classNames) == null
                        ? void 0
                        : p.actionButton,
                    ),
                  },
                  m.action.label,
                )
              : null,
        ),
  );
};
function ai() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function Ih(e, n) {
  let s = {};
  return (
    [e, n].forEach((i, a) => {
      let o = a === 1,
        r = o ? "--mobile-offset" : "--offset",
        l = o ? Mh : Eh;
      function c(h) {
        ["top", "right", "bottom", "left"].forEach((g) => {
          s[`${r}-${g}`] = typeof h == "number" ? `${h}px` : h;
        });
      }
      typeof i == "number" || typeof i == "string"
        ? c(i)
        : typeof i == "object"
          ? ["top", "right", "bottom", "left"].forEach((h) => {
              i[h] === void 0
                ? (s[`${r}-${h}`] = l)
                : (s[`${r}-${h}`] =
                    typeof i[h] == "number" ? `${i[h]}px` : i[h]);
            })
          : c(l);
    }),
    s
  );
}
var Oh = f.forwardRef(function (e, n) {
  let {
      invert: s,
      position: i = "bottom-right",
      hotkey: a = ["altKey", "KeyT"],
      expand: o,
      closeButton: r,
      className: l,
      offset: c,
      mobileOffset: h,
      theme: g = "light",
      richColors: p,
      duration: d,
      style: m,
      visibleToasts: u = Ch,
      toastOptions: x,
      dir: v = ai(),
      gap: w = _h,
      loadingIcon: y,
      icons: N,
      containerAriaLabel: j = "Notifications",
      pauseWhenPageIsHidden: k,
    } = e,
    [b, S] = O.useState([]),
    E = O.useMemo(
      () =>
        Array.from(
          new Set(
            [i].concat(b.filter((Y) => Y.position).map((Y) => Y.position)),
          ),
        ),
      [b, i],
    ),
    [L, T] = O.useState([]),
    [C, _] = O.useState(!1),
    [D, B] = O.useState(!1),
    [K, z] = O.useState(
      g !== "system"
        ? g
        : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
    ),
    st = O.useRef(null),
    P = a.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    R = O.useRef(null),
    et = O.useRef(!1),
    at = O.useCallback((Y) => {
      S((Q) => {
        var Z;
        return (
          ((Z = Q.find((ut) => ut.id === Y.id)) != null && Z.delete) ||
            ie.dismiss(Y.id),
          Q.filter(({ id: ut }) => ut !== Y.id)
        );
      });
    }, []);
  return (
    O.useEffect(
      () =>
        ie.subscribe((Y) => {
          if (Y.dismiss) {
            S((Q) => Q.map((Z) => (Z.id === Y.id ? { ...Z, delete: !0 } : Z)));
            return;
          }
          setTimeout(() => {
            tc.flushSync(() => {
              S((Q) => {
                let Z = Q.findIndex((ut) => ut.id === Y.id);
                return Z !== -1
                  ? [...Q.slice(0, Z), { ...Q[Z], ...Y }, ...Q.slice(Z + 1)]
                  : [Y, ...Q];
              });
            });
          });
        }),
      [],
    ),
    O.useEffect(() => {
      if (g !== "system") {
        z(g);
        return;
      }
      if (
        (g === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? z("dark")
            : z("light")),
        typeof window > "u")
      )
        return;
      let Y = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        Y.addEventListener("change", ({ matches: Q }) => {
          z(Q ? "dark" : "light");
        });
      } catch {
        Y.addListener(({ matches: Z }) => {
          try {
            z(Z ? "dark" : "light");
          } catch (ut) {
            console.error(ut);
          }
        });
      }
    }, [g]),
    O.useEffect(() => {
      b.length <= 1 && _(!1);
    }, [b]),
    O.useEffect(() => {
      let Y = (Q) => {
        var Z, ut;
        (a.every((jt) => Q[jt] || Q.code === jt) &&
          (_(!0), (Z = st.current) == null || Z.focus()),
          Q.code === "Escape" &&
            (document.activeElement === st.current ||
              ((ut = st.current) != null &&
                ut.contains(document.activeElement))) &&
            _(!1));
      };
      return (
        document.addEventListener("keydown", Y),
        () => document.removeEventListener("keydown", Y)
      );
    }, [a]),
    O.useEffect(() => {
      if (st.current)
        return () => {
          R.current &&
            (R.current.focus({ preventScroll: !0 }),
            (R.current = null),
            (et.current = !1));
        };
    }, [st.current]),
    O.createElement(
      "section",
      {
        ref: n,
        "aria-label": `${j} ${P}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      E.map((Y, Q) => {
        var Z;
        let [ut, jt] = Y.split("-");
        return b.length
          ? O.createElement(
              "ol",
              {
                key: Y,
                dir: v === "auto" ? ai() : v,
                tabIndex: -1,
                ref: st,
                className: l,
                "data-sonner-toaster": !0,
                "data-theme": K,
                "data-y-position": ut,
                "data-lifted": C && b.length > 1 && !o,
                "data-x-position": jt,
                style: {
                  "--front-toast-height": `${((Z = L[0]) == null ? void 0 : Z.height) || 0}px`,
                  "--width": `${Lh}px`,
                  "--gap": `${w}px`,
                  ...m,
                  ...Ih(c, h),
                },
                onBlur: (W) => {
                  et.current &&
                    !W.currentTarget.contains(W.relatedTarget) &&
                    ((et.current = !1),
                    R.current &&
                      (R.current.focus({ preventScroll: !0 }),
                      (R.current = null)));
                },
                onFocus: (W) => {
                  (W.target instanceof HTMLElement &&
                    W.target.dataset.dismissible === "false") ||
                    et.current ||
                    ((et.current = !0), (R.current = W.relatedTarget));
                },
                onMouseEnter: () => _(!0),
                onMouseMove: () => _(!0),
                onMouseLeave: () => {
                  D || _(!1);
                },
                onDragEnd: () => _(!1),
                onPointerDown: (W) => {
                  (W.target instanceof HTMLElement &&
                    W.target.dataset.dismissible === "false") ||
                    B(!0);
                },
                onPointerUp: () => B(!1),
              },
              b
                .filter((W) => (!W.position && Q === 0) || W.position === Y)
                .map((W, it) => {
                  var ct, dt;
                  return O.createElement(Rh, {
                    key: W.id,
                    icons: N,
                    index: it,
                    toast: W,
                    defaultRichColors: p,
                    duration:
                      (ct = x == null ? void 0 : x.duration) != null ? ct : d,
                    className: x == null ? void 0 : x.className,
                    descriptionClassName:
                      x == null ? void 0 : x.descriptionClassName,
                    invert: s,
                    visibleToasts: u,
                    closeButton:
                      (dt = x == null ? void 0 : x.closeButton) != null
                        ? dt
                        : r,
                    interacting: D,
                    position: Y,
                    style: x == null ? void 0 : x.style,
                    unstyled: x == null ? void 0 : x.unstyled,
                    classNames: x == null ? void 0 : x.classNames,
                    cancelButtonStyle: x == null ? void 0 : x.cancelButtonStyle,
                    actionButtonStyle: x == null ? void 0 : x.actionButtonStyle,
                    removeToast: at,
                    toasts: b.filter((lt) => lt.position == W.position),
                    heights: L.filter((lt) => lt.position == W.position),
                    setHeights: T,
                    expandByDefault: o,
                    gap: w,
                    loadingIcon: y,
                    expanded: C,
                    pauseWhenPageIsHidden: k,
                    swipeDirections: e.swipeDirections,
                  });
                }),
            )
          : null;
      }),
    )
  );
});
const Wh = ({ ...e }) => {
    const { theme: n = "system" } = dh();
    return t.jsx(Oh, {
      theme: n,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...e,
    });
  },
  zh = hc,
  Dh = f.forwardRef(({ className: e, sideOffset: n = 4, ...s }, i) =>
    t.jsx(ir, {
      ref: i,
      sideOffset: n,
      className: ge(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e,
      ),
      ...s,
    }),
  );
Dh.displayName = ir.displayName;
const Hh = Tr(
    "ximi-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  Re = f.forwardRef(
    ({ className: e, variant: n, size: s, asChild: i = !1, ...a }, o) => {
      const r = i ? dc : "button";
      return t.jsx(r, {
        className: ge(Hh({ variant: n, size: s, className: e })),
        ref: o,
        ...a,
      });
    },
  );
Re.displayName = "Button";
const Ir = [
    {
      label: "Zalo",
      href: site.zaloHref,
      icon: (e) =>
        t.jsx("img", {
          src: "/zalo-icon.png",
          alt: "",
          className: `${e} rounded object-cover`,
        }),
    },
    {
      label: "Facebook",
      href: site.social.facebook,
      icon: (e) => t.jsx(FacebookIcon, { className: e }),
    },
    {
      label: "TikTok",
      href: site.social.tiktok,
      icon: (e) => t.jsx(mc, { className: e }),
    },
    {
      label: "YouTube",
      href: site.social.youtube,
      icon: (e) => t.jsx(uc, { className: e }),
    },
    {
      label: "Instagram",
      href: site.social.instagram,
      icon: (e) => t.jsx(gc, { className: e }),
    },
    {
      label: "Threads",
      href: site.social.threads,
      icon: (e) => t.jsx(pc, { className: e }),
    },
  ],
  Bh = ({
    className: e = "",
    itemClassName: n = "",
    iconClassName: s = "h-4 w-4",
  }) =>
    t.jsx("div", {
      className: `flex flex-wrap items-center gap-3 ${e}`,
      children: Ir.map((i) =>
        t.jsx(
          "a",
          {
            href: i.href,
            target: "_blank",
            rel: "noreferrer",
            "aria-label": i.label,
            title: i.label,
            className: n,
            children: i.icon(s),
          },
          i.label,
        ),
      ),
    });
var ii = "1.3.26";
function Or(e, n, s) {
  return Math.max(e, Math.min(n, s));
}
function Vh(e, n, s) {
  return (1 - s) * e + s * n;
}
function Xh(e, n, s, i) {
  return Vh(e, n, 1 - Math.exp(-s * i));
}
function Fh(e, n) {
  return ((e % n) + n) % n;
}
var Gh = class {
  constructor() {
    G(this, "isRunning", !1);
    G(this, "value", 0);
    G(this, "from", 0);
    G(this, "to", 0);
    G(this, "currentTime", 0);
    G(this, "lerp");
    G(this, "duration");
    G(this, "easing");
    G(this, "onUpdate");
  }
  advance(e) {
    var s;
    if (!this.isRunning) return;
    let n = !1;
    if (this.duration && this.easing) {
      this.currentTime += e;
      const i = Or(0, this.currentTime / this.duration, 1);
      n = i >= 1;
      const a = n ? 1 : this.easing(i);
      this.value = this.from + (this.to - this.from) * a;
    } else
      this.lerp
        ? ((this.value = Xh(this.value, this.to, this.lerp * 60, e)),
          Math.round(this.value) === Math.round(this.to) &&
            ((this.value = this.to), (n = !0)))
        : ((this.value = this.to), (n = !0));
    (n && this.stop(),
      (s = this.onUpdate) == null || s.call(this, this.value, n));
  }
  stop() {
    this.isRunning = !1;
  }
  fromTo(e, n, { lerp: s, duration: i, easing: a, onStart: o, onUpdate: r }) {
    ((this.from = this.value = e),
      (this.to = n),
      (this.lerp = s),
      (this.duration = i),
      (this.easing = a),
      (this.currentTime = 0),
      (this.isRunning = !0),
      o == null || o(),
      (this.onUpdate = r));
  }
};
function Kh(e, n) {
  let s;
  return function (...i) {
    (clearTimeout(s),
      (s = setTimeout(() => {
        ((s = void 0), e.apply(this, i));
      }, n)));
  };
}
var Yh = class {
    constructor(e, n, { autoResize: s = !0, debounce: i = 250 } = {}) {
      G(this, "width", 0);
      G(this, "height", 0);
      G(this, "scrollHeight", 0);
      G(this, "scrollWidth", 0);
      G(this, "debouncedResize");
      G(this, "wrapperResizeObserver");
      G(this, "contentResizeObserver");
      G(this, "resize", () => {
        (this.onWrapperResize(), this.onContentResize());
      });
      G(this, "onWrapperResize", () => {
        this.wrapper instanceof Window
          ? ((this.width = window.innerWidth),
            (this.height = window.innerHeight))
          : ((this.width = this.wrapper.clientWidth),
            (this.height = this.wrapper.clientHeight));
      });
      G(this, "onContentResize", () => {
        this.wrapper instanceof Window
          ? ((this.scrollHeight = this.content.scrollHeight),
            (this.scrollWidth = this.content.scrollWidth))
          : ((this.scrollHeight = this.wrapper.scrollHeight),
            (this.scrollWidth = this.wrapper.scrollWidth));
      });
      ((this.wrapper = e),
        (this.content = n),
        s &&
          ((this.debouncedResize = Kh(this.resize, i)),
          this.wrapper instanceof Window
            ? window.addEventListener("resize", this.debouncedResize)
            : ((this.wrapperResizeObserver = new ResizeObserver(
                this.debouncedResize,
              )),
              this.wrapperResizeObserver.observe(this.wrapper)),
          (this.contentResizeObserver = new ResizeObserver(
            this.debouncedResize,
          )),
          this.contentResizeObserver.observe(this.content)),
        this.resize());
    }
    destroy() {
      var e, n;
      ((e = this.wrapperResizeObserver) == null || e.disconnect(),
        (n = this.contentResizeObserver) == null || n.disconnect(),
        this.wrapper === window &&
          this.debouncedResize &&
          window.removeEventListener("resize", this.debouncedResize));
    }
    get limit() {
      return {
        x: this.scrollWidth - this.width,
        y: this.scrollHeight - this.height,
      };
    }
  },
  Wr = class {
    constructor() {
      G(this, "events", {});
    }
    emit(e, ...n) {
      var i;
      const s = this.events[e] || [];
      for (let a = 0, o = s.length; a < o; a++)
        (i = s[a]) == null || i.call(s, ...n);
    }
    on(e, n) {
      return (
        this.events[e] ? this.events[e].push(n) : (this.events[e] = [n]),
        () => {
          var s;
          this.events[e] =
            (s = this.events[e]) == null ? void 0 : s.filter((i) => n !== i);
        }
      );
    }
    off(e, n) {
      var s;
      this.events[e] =
        (s = this.events[e]) == null ? void 0 : s.filter((i) => n !== i);
    }
    destroy() {
      this.events = {};
    }
  };
const Uh = 100 / 6,
  He = { passive: !1 };
function ri(e, n) {
  return e === 1 ? Uh : e === 2 ? n : 1;
}
var Qh = class {
  constructor(e, n = { wheelMultiplier: 1, touchMultiplier: 1 }) {
    G(this, "touchStart", { x: 0, y: 0 });
    G(this, "lastDelta", { x: 0, y: 0 });
    G(this, "window", { width: 0, height: 0 });
    G(this, "emitter", new Wr());
    G(this, "onTouchStart", (e) => {
      const { clientX: n, clientY: s } = e.targetTouches
        ? e.targetTouches[0]
        : e;
      ((this.touchStart.x = n),
        (this.touchStart.y = s),
        (this.lastDelta = { x: 0, y: 0 }),
        this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: e }));
    });
    G(this, "onTouchMove", (e) => {
      const { clientX: n, clientY: s } = e.targetTouches
          ? e.targetTouches[0]
          : e,
        i = -(n - this.touchStart.x) * this.options.touchMultiplier,
        a = -(s - this.touchStart.y) * this.options.touchMultiplier;
      ((this.touchStart.x = n),
        (this.touchStart.y = s),
        (this.lastDelta = { x: i, y: a }),
        this.emitter.emit("scroll", { deltaX: i, deltaY: a, event: e }));
    });
    G(this, "onTouchEnd", (e) => {
      this.emitter.emit("scroll", {
        deltaX: this.lastDelta.x,
        deltaY: this.lastDelta.y,
        event: e,
      });
    });
    G(this, "onWheel", (e) => {
      let { deltaX: n, deltaY: s, deltaMode: i } = e;
      const a = ri(i, this.window.width),
        o = ri(i, this.window.height);
      ((n *= a),
        (s *= o),
        (n *= this.options.wheelMultiplier),
        (s *= this.options.wheelMultiplier),
        this.emitter.emit("scroll", { deltaX: n, deltaY: s, event: e }));
    });
    G(this, "onWindowResize", () => {
      this.window = { width: window.innerWidth, height: window.innerHeight };
    });
    ((this.element = e),
      (this.options = n),
      window.addEventListener("resize", this.onWindowResize),
      this.onWindowResize(),
      this.element.addEventListener("wheel", this.onWheel, He),
      this.element.addEventListener("touchstart", this.onTouchStart, He),
      this.element.addEventListener("touchmove", this.onTouchMove, He),
      this.element.addEventListener("touchend", this.onTouchEnd, He));
  }
  on(e, n) {
    return this.emitter.on(e, n);
  }
  destroy() {
    (this.emitter.destroy(),
      window.removeEventListener("resize", this.onWindowResize),
      this.element.removeEventListener("wheel", this.onWheel, He),
      this.element.removeEventListener("touchstart", this.onTouchStart, He),
      this.element.removeEventListener("touchmove", this.onTouchMove, He),
      this.element.removeEventListener("touchend", this.onTouchEnd, He));
  }
};
const oi = (e) => Math.min(1, 1.001 - 2 ** (-10 * e));
var Zh = class {
  constructor({
    wrapper: e = window,
    content: n = document.documentElement,
    eventsTarget: s = e,
    smoothWheel: i = !0,
    syncTouch: a = !1,
    syncTouchLerp: o = 0.075,
    touchInertiaExponent: r = 1.7,
    duration: l,
    easing: c,
    lerp: h = 0.1,
    infinite: g = !1,
    orientation: p = "vertical",
    gestureOrientation: d = p === "horizontal" ? "both" : "vertical",
    touchMultiplier: m = 1,
    wheelMultiplier: u = 1,
    autoResize: x = !0,
    prevent: v,
    virtualScroll: w,
    overscroll: y = !0,
    autoRaf: N = !1,
    anchors: j = !1,
    autoToggle: k = !1,
    allowNestedScroll: b = !1,
    __experimental__naiveDimensions: S = !1,
    naiveDimensions: E = S,
    stopInertiaOnNavigate: L = !1,
    respectReducedMotion: T = !0,
  } = {}) {
    G(this, "_isScrolling", !1);
    G(this, "_isStopped", !1);
    G(this, "_isLocked", !1);
    G(this, "_preventNextNativeScrollEvent", !1);
    G(this, "_resetVelocityTimeout", null);
    G(this, "_rafId", null);
    G(this, "_isDraggingSelection", !1);
    G(
      this,
      "reducedMotionMediaQuery",
      window.matchMedia("(prefers-reduced-motion: reduce)"),
    );
    G(this, "isTouching");
    G(this, "isIos");
    G(this, "time", 0);
    G(this, "userData", {});
    G(this, "lastVelocity", 0);
    G(this, "velocity", 0);
    G(this, "direction", 0);
    G(this, "options");
    G(this, "targetScroll");
    G(this, "animatedScroll");
    G(this, "animate", new Gh());
    G(this, "emitter", new Wr());
    G(this, "dimensions");
    G(this, "virtualScroll");
    G(this, "onScrollEnd", (e) => {
      e instanceof CustomEvent ||
        ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
          e.stopPropagation());
    });
    G(this, "dispatchScrollendEvent", () => {
      this.options.wrapper.dispatchEvent(
        new CustomEvent("scrollend", {
          bubbles: this.options.wrapper === window,
          detail: { lenisScrollEnd: !0 },
        }),
      );
    });
    G(this, "onTransitionEnd", (e) => {
      var n;
      (n = e.propertyName) != null &&
        n.includes("overflow") &&
        e.target === this.rootElement &&
        this.checkOverflow();
    });
    G(this, "onClick", (e) => {
      const n = e
          .composedPath()
          .filter((i) => i instanceof HTMLAnchorElement && i.href)
          .map((i) => new URL(i.href)),
        s = new URL(window.location.href);
      if (this.options.anchors) {
        const i = n.find(
          (a) => s.host === a.host && s.pathname === a.pathname && a.hash,
        );
        if (i) {
          const a =
              typeof this.options.anchors == "object" && this.options.anchors
                ? this.options.anchors
                : void 0,
            o = decodeURIComponent(i.hash);
          this.scrollTo(o, a);
          return;
        }
      }
      if (
        this.options.stopInertiaOnNavigate &&
        n.some((i) => s.host === i.host && s.pathname !== i.pathname)
      ) {
        this.reset();
        return;
      }
    });
    G(this, "onPointerDown", (e) => {
      e.button === 1 && this.reset();
    });
    G(this, "onVirtualScroll", (e) => {
      if (
        typeof this.options.virtualScroll == "function" &&
        this.options.virtualScroll(e) === !1
      )
        return;
      const { deltaX: n, deltaY: s, event: i } = e;
      if (
        (this.emitter.emit("virtual-scroll", {
          deltaX: n,
          deltaY: s,
          event: i,
        }),
        i.ctrlKey || i.lenisStopPropagation)
      )
        return;
      const a = i.type.includes("touch"),
        o = i.type.includes("wheel");
      if (
        a &&
        this.isIos &&
        (i.type === "touchstart" &&
          (this._isDraggingSelection = this.isTouchOnSelectionHandle(i)),
        this._isDraggingSelection)
      ) {
        i.type === "touchend" && (this._isDraggingSelection = !1);
        return;
      }
      this.isTouching = i.type === "touchstart" || i.type === "touchmove";
      const r = n === 0 && s === 0;
      if (
        this.options.syncTouch &&
        a &&
        i.type === "touchstart" &&
        r &&
        !this.isStopped &&
        !this.isLocked
      ) {
        this.reset();
        return;
      }
      const l =
        (this.options.gestureOrientation === "vertical" && s === 0) ||
        (this.options.gestureOrientation === "horizontal" && n === 0);
      if (r || l) return;
      let c = i.composedPath();
      c = c.slice(0, c.indexOf(this.rootElement));
      const h = this.options.prevent,
        g = Math.abs(n) >= Math.abs(s) ? "horizontal" : "vertical";
      if (
        c.find((u) => {
          var x, v, w, y, N;
          return (
            u instanceof HTMLElement &&
            ((typeof h == "function" && (h == null ? void 0 : h(u))) ||
              ((x = u.hasAttribute) == null
                ? void 0
                : x.call(u, "data-lenis-prevent")) ||
              (g === "vertical" &&
                ((v = u.hasAttribute) == null
                  ? void 0
                  : v.call(u, "data-lenis-prevent-vertical"))) ||
              (g === "horizontal" &&
                ((w = u.hasAttribute) == null
                  ? void 0
                  : w.call(u, "data-lenis-prevent-horizontal"))) ||
              (a &&
                ((y = u.hasAttribute) == null
                  ? void 0
                  : y.call(u, "data-lenis-prevent-touch"))) ||
              (o &&
                ((N = u.hasAttribute) == null
                  ? void 0
                  : N.call(u, "data-lenis-prevent-wheel"))) ||
              (this.options.allowNestedScroll &&
                this.hasNestedScroll(u, { deltaX: n, deltaY: s })))
          );
        })
      )
        return;
      if (this.isStopped || this.isLocked) {
        i.cancelable && i.preventDefault();
        return;
      }
      if (!((this.options.syncTouch && a) || (this.options.smoothWheel && o))) {
        ((this.isScrolling = "native"),
          this.animate.stop(),
          (i.lenisStopPropagation = !0));
        return;
      }
      let p = s;
      (this.options.gestureOrientation === "both"
        ? (p = Math.abs(s) > Math.abs(n) ? s : n)
        : this.options.gestureOrientation === "horizontal" && (p = n),
        (!this.options.overscroll ||
          this.options.infinite ||
          (this.options.wrapper !== window &&
            this.limit > 0 &&
            ((this.animatedScroll > 0 && this.animatedScroll < this.limit) ||
              (this.animatedScroll === 0 && s > 0) ||
              (this.animatedScroll === this.limit && s < 0)))) &&
          (i.lenisStopPropagation = !0),
        i.cancelable && i.preventDefault());
      const d = a && this.options.syncTouch,
        m = a && i.type === "touchend";
      (m &&
        (p =
          Math.sign(p) *
          Math.abs(this.velocity) ** this.options.touchInertiaExponent),
        this.scrollTo(this.targetScroll + p, {
          programmatic: !1,
          ...(d
            ? { lerp: m ? this.options.syncTouchLerp : 1 }
            : {
                lerp: this.options.lerp,
                duration: this.options.duration,
                easing: this.options.easing,
              }),
        }));
    });
    G(this, "onNativeScroll", () => {
      if (
        (this._resetVelocityTimeout !== null &&
          (clearTimeout(this._resetVelocityTimeout),
          (this._resetVelocityTimeout = null)),
        this._preventNextNativeScrollEvent)
      ) {
        this._preventNextNativeScrollEvent = !1;
        return;
      }
      if (this.isScrolling === !1 || this.isScrolling === "native") {
        const e = this.animatedScroll;
        ((this.animatedScroll = this.targetScroll = this.actualScroll),
          (this.lastVelocity = this.velocity),
          (this.velocity = this.animatedScroll - e),
          (this.direction = Math.sign(this.animatedScroll - e)),
          this.isStopped || (this.isScrolling = "native"),
          this.emit(),
          this.velocity !== 0 &&
            (this._resetVelocityTimeout = setTimeout(() => {
              ((this.lastVelocity = this.velocity),
                (this.velocity = 0),
                (this.isScrolling = !1),
                this.emit());
            }, 400)));
      }
    });
    G(this, "raf", (e) => {
      const n = e - (this.time || e);
      ((this.time = e),
        this.animate.advance(n * 0.001),
        this.options.autoRaf &&
          (this._rafId = requestAnimationFrame(this.raf)));
    });
    ((window.lenisVersion = ii),
      window.lenis || (window.lenis = {}),
      (window.lenis.version = ii),
      p === "horizontal" && (window.lenis.horizontal = !0),
      a === !0 && (window.lenis.touch = !0),
      (this.isIos = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)),
      (!e || e === document.documentElement) && (e = window),
      typeof l == "number" && typeof c != "function"
        ? (c = oi)
        : typeof c == "function" && typeof l != "number" && (l = 1),
      (this.options = {
        wrapper: e,
        content: n,
        eventsTarget: s,
        smoothWheel: i,
        syncTouch: a,
        syncTouchLerp: o,
        touchInertiaExponent: r,
        duration: l,
        easing: c,
        lerp: h,
        infinite: g,
        gestureOrientation: d,
        orientation: p,
        touchMultiplier: m,
        wheelMultiplier: u,
        autoResize: x,
        prevent: v,
        virtualScroll: w,
        overscroll: y,
        autoRaf: N,
        anchors: j,
        autoToggle: k,
        allowNestedScroll: b,
        naiveDimensions: E,
        stopInertiaOnNavigate: L,
        respectReducedMotion: T,
      }),
      (this.dimensions = new Yh(e, n, { autoResize: x })),
      this.updateClassName(),
      (this.targetScroll = this.animatedScroll = this.actualScroll),
      this.options.wrapper.addEventListener("scroll", this.onNativeScroll),
      this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
        capture: !0,
      }),
      (this.options.anchors || this.options.stopInertiaOnNavigate) &&
        this.options.wrapper.addEventListener("click", this.onClick),
      this.options.wrapper.addEventListener("pointerdown", this.onPointerDown),
      (this.virtualScroll = new Qh(s, {
        touchMultiplier: m,
        wheelMultiplier: u,
      })),
      this.virtualScroll.on("scroll", this.onVirtualScroll),
      this.options.autoToggle &&
        (this.checkOverflow(),
        this.rootElement.addEventListener(
          "transitionend",
          this.onTransitionEnd,
        )),
      this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf)));
  }
  destroy() {
    (this.emitter.destroy(),
      this.options.wrapper.removeEventListener("scroll", this.onNativeScroll),
      this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
        capture: !0,
      }),
      this.options.wrapper.removeEventListener(
        "pointerdown",
        this.onPointerDown,
      ),
      (this.options.anchors || this.options.stopInertiaOnNavigate) &&
        this.options.wrapper.removeEventListener("click", this.onClick),
      this.virtualScroll.destroy(),
      this.dimensions.destroy(),
      this.cleanUpClassName(),
      this._rafId && cancelAnimationFrame(this._rafId));
  }
  on(e, n) {
    return this.emitter.on(e, n);
  }
  off(e, n) {
    return this.emitter.off(e, n);
  }
  get overflow() {
    const e = this.isHorizontal ? "overflow-x" : "overflow-y";
    return getComputedStyle(this.rootElement)[e];
  }
  checkOverflow() {
    ["hidden", "clip"].includes(this.overflow)
      ? this.internalStop()
      : this.internalStart();
  }
  setScroll(e) {
    this.isHorizontal
      ? this.options.wrapper.scrollTo({ left: e, behavior: "instant" })
      : this.options.wrapper.scrollTo({ top: e, behavior: "instant" });
  }
  isTouchOnSelectionHandle(e) {
    const n = window.getSelection();
    if (!n || n.isCollapsed || n.rangeCount === 0) return !1;
    const s = e.targetTouches[0] ?? e.changedTouches[0];
    if (!s) return !1;
    const i = n.getRangeAt(0).getClientRects();
    if (i.length === 0) return !1;
    const a = i[0],
      o = i[i.length - 1],
      r = 40,
      l = Math.hypot(s.clientX - a.left, s.clientY - a.top) <= r,
      c = Math.hypot(s.clientX - o.right, s.clientY - o.bottom) <= r;
    return l || c;
  }
  resize() {
    (this.dimensions.resize(),
      (this.animatedScroll = this.targetScroll = this.actualScroll),
      this.emit());
  }
  emit() {
    this.emitter.emit("scroll", this);
  }
  reset() {
    ((this.isLocked = !1),
      (this.isScrolling = !1),
      (this.animatedScroll = this.targetScroll = this.actualScroll),
      (this.lastVelocity = this.velocity = 0),
      this.animate.stop());
  }
  start() {
    if (this.isStopped) {
      if (this.options.autoToggle) {
        this.rootElement.style.removeProperty("overflow");
        return;
      }
      this.internalStart();
    }
  }
  internalStart() {
    this.isStopped && (this.reset(), (this.isStopped = !1), this.emit());
  }
  stop() {
    if (!this.isStopped) {
      if (this.options.autoToggle) {
        this.rootElement.style.setProperty("overflow", "clip");
        return;
      }
      this.internalStop();
    }
  }
  internalStop() {
    this.isStopped || (this.reset(), (this.isStopped = !0), this.emit());
  }
  scrollTo(
    e,
    {
      offset: n = 0,
      immediate: s = !1,
      lock: i = !1,
      programmatic: a = !0,
      lerp: o = a ? this.options.lerp : void 0,
      duration: r = a ? this.options.duration : void 0,
      easing: l = a ? this.options.easing : void 0,
      onStart: c,
      onComplete: h,
      force: g = !1,
      userData: p,
    } = {},
  ) {
    if (
      (this.prefersReducedMotion &&
        (a ? (s = !0) : ((o = 1), (r = void 0), (l = void 0))),
      (this.isStopped || this.isLocked) && !g)
    )
      return;
    let d = e,
      m = n;
    if (typeof d == "string" && ["top", "left", "start", "#"].includes(d))
      d = 0;
    else if (typeof d == "string" && ["bottom", "right", "end"].includes(d))
      d = this.limit;
    else {
      let u = null;
      if (
        (typeof d == "string"
          ? ((u = d.startsWith("#")
              ? document.getElementById(d.slice(1))
              : document.querySelector(d)),
            u ||
              (d === "#top"
                ? (d = 0)
                : console.warn("Lenis: Target not found", d)))
          : d instanceof HTMLElement && d != null && d.nodeType && (u = d),
        u)
      ) {
        if (this.options.wrapper !== window) {
          const j = this.rootElement.getBoundingClientRect();
          m -= this.isHorizontal ? j.left : j.top;
        }
        const x = u.getBoundingClientRect(),
          v = getComputedStyle(u),
          w = this.isHorizontal
            ? Number.parseFloat(v.scrollMarginLeft)
            : Number.parseFloat(v.scrollMarginTop),
          y = getComputedStyle(this.rootElement),
          N = this.isHorizontal
            ? Number.parseFloat(y.scrollPaddingLeft)
            : Number.parseFloat(y.scrollPaddingTop);
        d =
          (this.isHorizontal ? x.left : x.top) +
          this.animatedScroll -
          (Number.isNaN(w) ? 0 : w) -
          (Number.isNaN(N) ? 0 : N);
      }
    }
    if (typeof d == "number") {
      if (((d += m), this.options.infinite)) {
        if (a) {
          this.targetScroll = this.animatedScroll = this.scroll;
          const u = d - this.animatedScroll;
          u > this.limit / 2
            ? (d -= this.limit)
            : u < -this.limit / 2 && (d += this.limit);
        }
      } else d = Or(0, d, this.limit);
      if (d === this.targetScroll) {
        (c == null || c(this), h == null || h(this));
        return;
      }
      if (((this.userData = p ?? {}), s)) {
        ((this.animatedScroll = this.targetScroll = d),
          this.setScroll(this.scroll),
          this.reset(),
          this.preventNextNativeScrollEvent(),
          this.emit(),
          h == null || h(this),
          (this.userData = {}),
          requestAnimationFrame(() => {
            this.dispatchScrollendEvent();
          }));
        return;
      }
      (a || (this.targetScroll = d),
        typeof r == "number" && typeof l != "function"
          ? (l = oi)
          : typeof l == "function" && typeof r != "number" && (r = 1),
        this.animate.fromTo(this.animatedScroll, d, {
          duration: r,
          easing: l,
          lerp: o,
          onStart: () => {
            (i && (this.isLocked = !0),
              (this.isScrolling = "smooth"),
              c == null || c(this));
          },
          onUpdate: (u, x) => {
            ((this.isScrolling = "smooth"),
              (this.lastVelocity = this.velocity),
              (this.velocity = u - this.animatedScroll),
              (this.direction = Math.sign(this.velocity)),
              (this.animatedScroll = u),
              this.setScroll(this.scroll),
              a && (this.targetScroll = u),
              x || this.emit(),
              x &&
                (this.reset(),
                this.emit(),
                h == null || h(this),
                (this.userData = {}),
                requestAnimationFrame(() => {
                  this.dispatchScrollendEvent();
                }),
                this.preventNextNativeScrollEvent()));
          },
        }));
    }
  }
  preventNextNativeScrollEvent() {
    ((this._preventNextNativeScrollEvent = !0),
      requestAnimationFrame(() => {
        this._preventNextNativeScrollEvent = !1;
      }));
  }
  hasNestedScroll(e, { deltaX: n, deltaY: s }) {
    const i = Date.now();
    e._lenis || (e._lenis = {});
    const a = e._lenis;
    let o, r, l, c, h, g, p, d, m, u;
    if (i - (a.time ?? 0) > 2e3) {
      a.time = Date.now();
      const b = window.getComputedStyle(e);
      if (
        ((a.computedStyle = b),
        (o = ["auto", "overlay", "scroll"].includes(b.overflowX)),
        (r = ["auto", "overlay", "scroll"].includes(b.overflowY)),
        (h = ["auto"].includes(b.overscrollBehaviorX)),
        (g = ["auto"].includes(b.overscrollBehaviorY)),
        (a.hasOverflowX = o),
        (a.hasOverflowY = r),
        !(o || r))
      )
        return !1;
      ((p = e.scrollWidth),
        (d = e.scrollHeight),
        (m = e.clientWidth),
        (u = e.clientHeight),
        (l = p > m),
        (c = d > u),
        (a.isScrollableX = l),
        (a.isScrollableY = c),
        (a.scrollWidth = p),
        (a.scrollHeight = d),
        (a.clientWidth = m),
        (a.clientHeight = u),
        (a.hasOverscrollBehaviorX = h),
        (a.hasOverscrollBehaviorY = g));
    } else
      ((l = a.isScrollableX),
        (c = a.isScrollableY),
        (o = a.hasOverflowX),
        (r = a.hasOverflowY),
        (p = a.scrollWidth),
        (d = a.scrollHeight),
        (m = a.clientWidth),
        (u = a.clientHeight),
        (h = a.hasOverscrollBehaviorX),
        (g = a.hasOverscrollBehaviorY));
    if (!((o && l) || (r && c))) return !1;
    const x = Math.abs(n) >= Math.abs(s) ? "horizontal" : "vertical";
    let v, w, y, N, j, k;
    if (x === "horizontal")
      ((v = Math.round(e.scrollLeft)),
        (w = p - m),
        (y = n),
        (N = o),
        (j = l),
        (k = h));
    else if (x === "vertical")
      ((v = Math.round(e.scrollTop)),
        (w = d - u),
        (y = s),
        (N = r),
        (j = c),
        (k = g));
    else return !1;
    return !k && (v >= w || v <= 0) ? !0 : (y > 0 ? v < w : v > 0) && N && j;
  }
  get rootElement() {
    return this.options.wrapper === window
      ? document.documentElement
      : this.options.wrapper;
  }
  get limit() {
    return this.options.naiveDimensions
      ? this.isHorizontal
        ? this.rootElement.scrollWidth - this.rootElement.clientWidth
        : this.rootElement.scrollHeight - this.rootElement.clientHeight
      : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
  }
  get isHorizontal() {
    return this.options.orientation === "horizontal";
  }
  get actualScroll() {
    const e = this.options.wrapper;
    return this.isHorizontal
      ? (e.scrollX ?? e.scrollLeft)
      : (e.scrollY ?? e.scrollTop);
  }
  get scroll() {
    return this.options.infinite
      ? Fh(this.animatedScroll, this.limit)
      : this.animatedScroll;
  }
  get progress() {
    return this.limit === 0 ? 1 : this.scroll / this.limit;
  }
  get isScrolling() {
    return this._isScrolling;
  }
  set isScrolling(e) {
    this._isScrolling !== e &&
      ((this._isScrolling = e), this.updateClassName());
  }
  get isStopped() {
    return this._isStopped;
  }
  set isStopped(e) {
    this._isStopped !== e && ((this._isStopped = e), this.updateClassName());
  }
  get isLocked() {
    return this._isLocked;
  }
  set isLocked(e) {
    this._isLocked !== e && ((this._isLocked = e), this.updateClassName());
  }
  get isSmooth() {
    return this.isScrolling === "smooth";
  }
  get prefersReducedMotion() {
    return (
      this.options.respectReducedMotion && this.reducedMotionMediaQuery.matches
    );
  }
  get className() {
    let e = "lenis";
    return (
      this.options.autoToggle && (e += " lenis-autoToggle"),
      this.isStopped && (e += " lenis-stopped"),
      this.isLocked && (e += " lenis-locked"),
      this.isScrolling && (e += " lenis-scrolling"),
      this.isScrolling === "smooth" && (e += " lenis-smooth"),
      e
    );
  }
  updateClassName() {
    (this.cleanUpClassName(),
      this.className.split(" ").forEach((e) => {
        this.rootElement.classList.add(e);
      }));
  }
  cleanUpClassName() {
    for (const e of Array.from(this.rootElement.classList))
      (e === "lenis" || e.startsWith("lenis-")) &&
        this.rootElement.classList.remove(e);
  }
};
let re = null;
const Hs = (e) => {
    re && (e ? re.stop() : re.start());
  },
  Bs = (e, n = 0) => {
    if (re) {
      re.scrollTo(e, { immediate: !0, force: !0, offset: n });
      return;
    }
    typeof e == "number"
      ? window.scrollTo(0, e)
      : window.scrollTo(0, e.getBoundingClientRect().top + window.scrollY + n);
  };
let vs = 0,
  ci = !1;
const Jh = () => {
    if (ci || typeof window > "u") return;
    ci = !0;
    let e = window.scrollY,
      n = performance.now();
    window.addEventListener(
      "scroll",
      () => {
        const s = performance.now(),
          i = ((window.scrollY - e) / Math.max(1, s - n)) * 16.7;
        ((vs = vs * 0.6 + i * 0.4), (e = window.scrollY), (n = s));
      },
      { passive: !0 },
    );
  },
  ja = () => (re ? re.velocity : (Jh(), (vs *= 0.9), vs)),
  dg = (e, n = 0.9) => {
    if (re) {
      re.scrollTo(e, { duration: n });
      return;
    }
    window.scrollTo({ top: e, behavior: "smooth" });
  },
  mg = (e) => {
    if (re) {
      re.scrollTo(re.targetScroll + e, { immediate: !0, force: !0 });
      return;
    }
    window.scrollBy(0, e);
  },
  td = () => {
    f.useEffect(() => {
      const e = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        n = window.matchMedia("(pointer: coarse)").matches;
      if (e || n) return;
      const s = new Zh({
        duration: 1.05,
        easing: (r) => Math.min(1, 1.001 - Math.pow(2, -10 * r)),
        wheelMultiplier: 0.9,
        touchMultiplier: 1.6,
      });
      re = s;
      let i = 0;
      const a = (r) => {
        (s.raf(r), (i = requestAnimationFrame(a)));
      };
      i = requestAnimationFrame(a);
      const o = (r) => {
        var g, p;
        const l =
          (p = (g = r.target) == null ? void 0 : g.closest) == null
            ? void 0
            : p.call(g, 'a[href*="#"]');
        if (!(l instanceof HTMLAnchorElement)) return;
        const c = new URL(l.href, window.location.href);
        if (c.pathname !== window.location.pathname || !c.hash) return;
        const h = document.querySelector(c.hash);
        h && (r.preventDefault(), s.scrollTo(h, { offset: -120 }));
      };
      return (
        document.addEventListener("click", o),
        () => {
          (document.removeEventListener("click", o),
            cancelAnimationFrame(i),
            s.destroy(),
            (re = null));
        }
      );
    }, []);
  },
  ed = {
    theme: "light",
    resolvedTheme: "light",
    setTheme: () => null,
    toggleTheme: () => null,
  },
  zr = f.createContext(ed);
function nd({
  children: e,
  defaultTheme: n = "light",
  storageKey: s = "tddtech-ui-theme",
}) {
  const [i, a] = f.useState(() => {
      try {
        return localStorage.getItem(s) || n;
      } catch {
        return n;
      }
    }),
    [o, r] = f.useState("light");
  (f.useEffect(() => {
    const h = window.document.documentElement;
    h.classList.remove("light", "dark");
    let g = "light";
    (i === "system"
      ? (g = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light")
      : (g = i),
      h.classList.add(g),
      r(g));
    const p = document.querySelector('meta[name="theme-color"]');
    p && p.setAttribute("content", g === "dark" ? "#070d18" : "#f8fafc");
  }, [i]),
    f.useEffect(() => {
      if (i !== "system") return;
      const h = window.matchMedia("(prefers-color-scheme: dark)"),
        g = () => {
          const p = window.document.documentElement;
          p.classList.remove("light", "dark");
          const d = h.matches ? "dark" : "light";
          (p.classList.add(d), r(d));
        };
      return (
        h.addEventListener("change", g),
        () => h.removeEventListener("change", g)
      );
    }, [i]));
  const l = (h) => {
      try {
        localStorage.setItem(s, h);
      } catch {}
      a(h);
    },
    c = () => {
      l(o === "dark" ? "light" : "dark");
    };
  return t.jsx(zr.Provider, {
    value: { theme: i, resolvedTheme: o, setTheme: l, toggleTheme: c },
    children: e,
  });
}
const Bn = () => {
    const e = f.useContext(zr);
    if (e === void 0)
      throw new Error("useTheme must be used within a ThemeProvider");
    return e;
  },
  Vs = ({ variant: e = "icon", className: n = "" }) => {
    const { resolvedTheme: s, toggleTheme: i } = Bn(),
      a = s === "dark";
    return e === "pill"
      ? t.jsxs("button", {
          type: "button",
          onClick: i,
          className: `group relative flex items-center justify-between gap-3 rounded-full border border-slate-200 bg-slate-100/90 p-1 text-xs font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-primary/50 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:border-primary/50 ${n}`,
          "aria-label": a
            ? "Chuyển sang giao diện Sáng"
            : "Chuyển sang giao diện Tối",
          title: a ? "Chuyển sang giao diện Sáng" : "Chuyển sang giao diện Tối",
          children: [
            t.jsxs("span", {
              className: `flex items-center gap-1.5 rounded-full px-2.5 py-1 transition-all ${a ? "text-slate-500 hover:text-slate-900 dark:text-white/40 dark:hover:text-white" : "bg-white text-sky-600 shadow-sm font-bold"}`,
              children: [
                t.jsx($s, { className: "h-3.5 w-3.5 text-amber-500" }),
                t.jsx("span", { children: "Sáng" }),
              ],
            }),
            t.jsxs("span", {
              className: `flex items-center gap-1.5 rounded-full px-2.5 py-1 transition-all ${a ? "bg-primary/20 text-primary shadow-sm font-bold dark:bg-primary/30 dark:text-primary-foreground" : "text-slate-500 hover:text-slate-900"}`,
              children: [
                t.jsx(Ps, { className: "h-3.5 w-3.5 text-cyan-400" }),
                t.jsx("span", { children: "Tối" }),
              ],
            }),
          ],
        })
      : e === "menu-item"
        ? t.jsxs("button", {
            type: "button",
            onClick: i,
            className: `flex w-full items-center justify-between rounded-xl border border-slate-200/80 bg-slate-100/70 px-4 py-3 text-sm font-medium text-slate-800 transition-all hover:border-primary/40 hover:bg-slate-100 hover:text-primary dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:border-primary/40 dark:hover:bg-white/10 dark:hover:text-primary ${n}`,
            "aria-label": "Chuyển chế độ giao diện Sáng / Tối",
            children: [
              t.jsxs("span", {
                className: "flex items-center gap-2.5",
                children: [
                  a
                    ? t.jsx(Ps, { className: "h-4 w-4 text-cyan-400" })
                    : t.jsx($s, { className: "h-4 w-4 text-amber-500" }),
                  t.jsxs("span", {
                    children: [
                      "Giao diện: ",
                      a ? "Tối (Dark Mode)" : "Sáng (Light Mode)",
                    ],
                  }),
                ],
              }),
              t.jsx("span", {
                className:
                  "rounded-md bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary",
                children: "Đổi",
              }),
            ],
          })
        : t.jsx("button", {
            type: "button",
            onClick: i,
            className: `relative flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full border border-slate-200/90 bg-white/80 p-2 text-slate-700 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-sky-50/50 hover:text-primary dark:border-white/15 dark:bg-white/5 dark:text-white/80 dark:hover:border-primary/50 dark:hover:bg-white/10 dark:hover:text-primary ${n}`,
            "aria-label": a
              ? "Chuyển sang giao diện Sáng"
              : "Chuyển sang giao diện Tối",
            title: a
              ? "Chuyển sang giao diện Sáng"
              : "Chuyển sang giao diện Tối",
            children: t.jsx(
              q.div,
              {
                initial: { rotate: -90, scale: 0.5, opacity: 0 },
                animate: { rotate: 0, scale: 1, opacity: 1 },
                exit: { rotate: 90, scale: 0.5, opacity: 0 },
                transition: { duration: 0.25, ease: "easeOut" },
                className: "flex items-center justify-center",
                children: a
                  ? t.jsx(Ps, {
                      className: "h-4 w-4 md:h-4.5 md:w-4.5 text-cyan-400",
                    })
                  : t.jsx($s, {
                      className: "h-4 w-4 md:h-4.5 md:w-4.5 text-amber-500",
                    }),
              },
              a ? "dark" : "light",
            ),
          });
  },
  Dr = "ximitech:sound",
  sd = 0.85;
let ue = null,
  $n = !1,
  ln = (() => {
    try {
      return localStorage.getItem(Dr) !== "off";
    } catch {
      return !0;
    }
  })();
const ca = new Set(),
  la = new Set(),
  Hr = () => ca.forEach((e) => e()),
  ad = () =>
    typeof window > "u"
      ? void 0
      : window.AudioContext || window.webkitAudioContext,
  id = (e, n = 1.9, s = 3.4) => {
    const i = Math.floor(e.sampleRate * n),
      a = e.createBuffer(2, i, e.sampleRate);
    for (let o = 0; o < 2; o++) {
      const r = a.getChannelData(o);
      for (let l = 0; l < i; l++)
        r[l] = (Math.random() * 2 - 1) * Math.pow(1 - l / i, s);
    }
    return a;
  },
  rd = (e) => {
    const n = e.createBuffer(1, e.sampleRate * 2, e.sampleRate),
      s = n.getChannelData(0);
    for (let i = 0; i < s.length; i++) s[i] = Math.random() * 2 - 1;
    return n;
  },
  Br = () => {
    if (ue) return ue;
    const e = ad();
    if (!e) return null;
    let n;
    try {
      n = new e({ latencyHint: "interactive" });
    } catch {
      return null;
    }
    const s = n.createGain();
    ((s.gain.value = 0), s.connect(n.destination));
    const i = n.createDynamicsCompressor();
    ((i.threshold.value = -20),
      (i.knee.value = 14),
      (i.ratio.value = 4),
      (i.attack.value = 0.004),
      (i.release.value = 0.22),
      i.connect(s));
    const a = n.createGain();
    a.connect(i);
    const o = n.createConvolver();
    o.buffer = id(n);
    const r = n.createGain(),
      l = n.createGain();
    return (
      (l.gain.value = 0.42),
      r.connect(o).connect(l).connect(i),
      (ue = { ac: n, out: s, bus: a, verb: r, noise: rd(n) }),
      ue
    );
  },
  Vr = () => (ln ? sd : 0),
  li = (e) => {
    const n = !$n;
    (($n = !0),
      e.out.gain.setTargetAtTime(Vr(), e.ac.currentTime, 0.25),
      n && (la.forEach((s) => s()), Hr()));
  },
  Xr = () => {
    if (!ln) return;
    const e = Br();
    if (e) {
      if (e.ac.state === "running") {
        li(e);
        return;
      }
      e.ac
        .resume()
        .then(() => li(e))
        .catch(() => {});
    }
  };
if (typeof window < "u") {
  for (const e of ["pointerdown", "keydown", "touchend"])
    window.addEventListener(e, Xr, { passive: !0, capture: !0 });
  document.addEventListener("visibilitychange", () => {
    !ue ||
      !$n ||
      (document.hidden
        ? ue.ac.suspend().catch(() => {})
        : ln && ue.ac.resume().catch(() => {}));
  });
}
const Lt = {
    core: () => Br(),
    ready: () =>
      ln && $n && ue && ue.ac.state === "running" && !document.hidden
        ? ue
        : null,
    isEnabled: () => ln,
    isUnlocked: () => $n,
    setEnabled(e) {
      ln = e;
      try {
        localStorage.setItem(Dr, e ? "on" : "off");
      } catch {}
      (ue && ue.out.gain.setTargetAtTime(Vr(), ue.ac.currentTime, 0.12),
        e && Xr(),
        Hr());
    },
    subscribe(e) {
      return (
        ca.add(e),
        () => {
          ca.delete(e);
        }
      );
    },
    onUnlock(e) {
      return (
        la.add(e),
        () => {
          la.delete(e);
        }
      );
    },
  },
  od = [261.63, 293.66, 329.63, 392, 440],
  nt = (e, n = 5) => {
    const s = ((e % 5) + 5) % 5,
      i = n + Math.floor(e / 5);
    return od[s] * Math.pow(2, i - 4);
  },
  ne = (e) => {
    if (!e || typeof window > "u") return { x: 0, y: 0 };
    const n = e.getBoundingClientRect(),
      s = ((n.left + n.width / 2) / window.innerWidth - 0.5) * 2,
      i = (0.5 - (n.top + n.height / 2) / window.innerHeight) * 2;
    return {
      x: Math.max(-1.2, Math.min(1.2, s)),
      y: Math.max(-1.2, Math.min(1.2, i)),
    };
  };
let Un = 4,
  hi = 0,
  Xs = 0;
const cd = 26,
  di = new Map(),
  ld = (e, n, s) => {
    const i = performance.now();
    return Xs >= cd || i - (di.get(e) ?? -1e9) < n
      ? !1
      : (di.set(e, i),
        (Xs += 1),
        window.setTimeout(
          () => {
            Xs -= 1;
          },
          s * 1e3 + 120,
        ),
        !0);
  },
  Fs = (e) => e.x * 2.2,
  Gs = (e) => e.y * 1.3,
  Ks = (e) => -(e.z ?? 1.7),
  hd = (e, n, s, i, a = 0) => {
    const o = e.ac.createPanner();
    return (
      (o.panningModel = "HRTF"),
      (o.distanceModel = "inverse"),
      (o.refDistance = 1),
      (o.rolloffFactor = 0.55),
      o.positionX
        ? (o.positionX.setValueAtTime(Fs(n), s),
          o.positionY.setValueAtTime(Gs(n), s),
          o.positionZ.setValueAtTime(Ks(n), s),
          i &&
            a > 0 &&
            (o.positionX.linearRampToValueAtTime(Fs(i), s + a),
            o.positionY.linearRampToValueAtTime(Gs(i), s + a),
            o.positionZ.linearRampToValueAtTime(Ks(i), s + a)))
        : o.setPosition(Fs(n), Gs(n), Ks(n)),
      o
    );
  },
  de = (e, n, s, i = 0.3, a, o = 0) => {
    const r = e.ac.createGain(),
      l = hd(e, n, s, a, o);
    if ((r.connect(l), l.connect(e.bus), i > 0)) {
      const c = e.ac.createGain();
      ((c.gain.value = i), l.connect(c).connect(e.verb));
    }
    return r;
  },
  Xt = (e, n, s, i, a, o = 0) => {
    (e.setValueAtTime(1e-4, n),
      e.exponentialRampToValueAtTime(Math.max(2e-4, i), n + Math.max(0.001, s)),
      o > 0 && e.setValueAtTime(Math.max(2e-4, i), n + s + o),
      e.exponentialRampToValueAtTime(1e-4, n + s + o + a));
  },
  Be = (e, n, s) => {
    const i = e.ac.createBufferSource();
    return ((i.buffer = e.noise), i.start(n, Math.random() * 1.2, s + 0.05), i);
  },
  se = (e, n, s, i, a) => {
    const o = e.ac.createOscillator();
    return (
      (o.type = n),
      o.frequency.setValueAtTime(s, i),
      o.start(i),
      o.stop(i + a + 0.05),
      o
    );
  },
  te = (e, n, s, i = 0) => {
    const a = Lt.ready();
    return !a || !ld(e, n, s + i)
      ? null
      : { c: a, t: a.ac.currentTime + 0.01 + i };
  },
  A = {
    air(e, n = {}) {
      const s = n.dur ?? 0.55,
        i = te("air", 70, s, n.delay);
      if (!i) return;
      const { c: a, t: o } = i,
        r = Be(a, o, s),
        l = a.ac.createBiquadFilter();
      ((l.type = "bandpass"),
        (l.Q.value = n.q ?? 0.9),
        l.frequency.setValueAtTime(n.from ?? 320, o),
        l.frequency.exponentialRampToValueAtTime(n.to ?? 2400, o + s * 0.75));
      const c = a.ac.createBiquadFilter();
      ((c.type = "lowpass"), (c.frequency.value = 7e3));
      const h = a.ac.createGain();
      (Xt(h.gain, o, s * 0.42, n.gain ?? 0.09, s * 0.58),
        r
          .connect(l)
          .connect(c)
          .connect(h)
          .connect(de(a, e, o, 0.25, n.toPos, s)));
    },
    bell(e, n, s = {}) {
      const i = s.decay ?? 1.5,
        a = te(`bell${Math.round(n)}`, 40, i, s.delay);
      if (!a) return;
      const { c: o, t: r } = a,
        l = de(o, e, r, 0.45),
        c = se(o, "sine", n, r, i),
        h = se(o, "sine", n * (s.ratio ?? 3.5), r, i),
        g = o.ac.createGain(),
        p = (s.index ?? 2.2) * n;
      (g.gain.setValueAtTime(p, r),
        g.gain.exponentialRampToValueAtTime(Math.max(1, p * 0.02), r + i * 0.5),
        h.connect(g).connect(c.frequency));
      const d = o.ac.createGain();
      (Xt(d.gain, r, 0.004, s.gain ?? 0.05, i), c.connect(d).connect(l));
      const m = se(o, "sine", n * 2.001, r, i * 0.6),
        u = o.ac.createGain();
      (Xt(u.gain, r, 0.004, (s.gain ?? 0.05) * 0.18, i * 0.6),
        m.connect(u).connect(l));
    },
    tick(e, n = {}) {
      const s = te("tick", 28, 0.08, n.delay);
      if (!s) return;
      const { c: i, t: a } = s,
        o = de(i, e, a, 0.12),
        r = se(i, "triangle", n.f ?? 2200, a, 0.05),
        l = i.ac.createGain();
      (Xt(l.gain, a, 0.001, n.gain ?? 0.035, 0.035), r.connect(l).connect(o));
      const c = Be(i, a, 0.02),
        h = i.ac.createBiquadFilter();
      ((h.type = "highpass"), (h.frequency.value = 3500));
      const g = i.ac.createGain();
      (Xt(g.gain, a, 8e-4, (n.gain ?? 0.035) * 0.6, 0.012),
        c.connect(h).connect(g).connect(o));
    },
    hover(e, n = !1) {
      const s = te("hover", 60, 0.2, 0);
      if (!s) return;
      const { c: i, t: a } = s,
        o = de(i, e, a, 0.25),
        r = 2400 + Math.random() * 900,
        l = se(i, "sine", r, a, 0.16);
      l.frequency.exponentialRampToValueAtTime(r * 1.12, a + 0.06);
      const c = i.ac.createGain();
      (Xt(c.gain, a, 0.003, 0.018, 0.12),
        l.connect(c).connect(o),
        n && A.air(e, { dur: 0.45, from: 900, to: 3200, gain: 0.025, q: 1.2 }));
    },
    click(e, n = {}) {
      const s = te("click", 60, 0.12, n.delay);
      if (!s) return;
      const { c: i, t: a } = s,
        o = de(i, e, a, 0.15),
        r = se(i, "square", 1650, a, 0.03),
        l = i.ac.createBiquadFilter();
      ((l.type = "bandpass"), (l.frequency.value = 2600), (l.Q.value = 2));
      const c = i.ac.createGain();
      (Xt(c.gain, a, 8e-4, (n.gain ?? 0.06) * 0.5, 0.02),
        r.connect(l).connect(c).connect(o));
      const h = se(i, "sine", 210, a, 0.09);
      h.frequency.exponentialRampToValueAtTime(90, a + 0.07);
      const g = i.ac.createGain();
      (Xt(g.gain, a, 0.002, n.gain ?? 0.06, 0.07), h.connect(g).connect(o));
    },
    key(e, n = {}) {
      const s = te("key", 22, 0.06, n.delay);
      if (!s) return;
      const { c: i, t: a } = s,
        o = de(i, e, a, 0.08),
        r = Be(i, a, 0.03),
        l = i.ac.createBiquadFilter();
      ((l.type = "bandpass"),
        (l.frequency.value = 1900 + Math.random() * 1600),
        (l.Q.value = 3));
      const c = i.ac.createGain();
      (Xt(c.gain, a, 8e-4, n.gain ?? 0.05, 0.022),
        r.connect(l).connect(c).connect(o));
      const h = se(i, "sine", 150 + Math.random() * 40, a, 0.04),
        g = i.ac.createGain();
      (Xt(g.gain, a, 0.001, (n.gain ?? 0.05) * 0.5, 0.03),
        h.connect(g).connect(o));
    },
    pop(e, n = {}) {
      const s = te("pop", 45, 0.14, n.delay);
      if (!s) return;
      const { c: i, t: a } = s,
        o = n.f ?? 520,
        r = se(i, "sine", o, a, 0.12);
      r.frequency.exponentialRampToValueAtTime(o * 1.9, a + 0.05);
      const l = i.ac.createGain();
      (Xt(l.gain, a, 0.002, n.gain ?? 0.06, 0.1),
        r.connect(l).connect(de(i, e, a, 0.2)));
    },
    thump(e, n = {}) {
      const s = te("thump", 120, 0.4, n.delay);
      if (!s) return;
      const { c: i, t: a } = s,
        o = de(i, e, a, 0.18),
        r = se(i, "sine", 150, a, 0.32);
      r.frequency.exponentialRampToValueAtTime(42, a + 0.18);
      const l = i.ac.createGain();
      (Xt(l.gain, a, 0.002, n.gain ?? 0.22, 0.28), r.connect(l).connect(o));
      const c = Be(i, a, 0.06),
        h = i.ac.createBiquadFilter();
      ((h.type = "lowpass"), (h.frequency.value = 1400));
      const g = i.ac.createGain();
      (Xt(g.gain, a, 0.001, (n.gain ?? 0.22) * 0.45, 0.05),
        c.connect(h).connect(g).connect(o));
    },
    crack(e, n = {}) {
      const s = te("crack", 300, 0.5, n.delay);
      if (!s) return;
      const { c: i, t: a } = s,
        o = de(i, e, a, 0.35),
        r = n.gain ?? 0.12;
      ([0, 0.018, 0.041, 0.07, 0.102].forEach((l, c) => {
        const h = Be(i, a + l, 0.03),
          g = i.ac.createBiquadFilter();
        ((g.type = "bandpass"),
          (g.frequency.value = 2600 + Math.random() * 4200),
          (g.Q.value = 2.4));
        const p = i.ac.createGain();
        (Xt(
          p.gain,
          a + l,
          6e-4,
          r * (1 - c * 0.12),
          0.016 + Math.random() * 0.02,
        ),
          h.connect(g).connect(p).connect(o));
      }),
        [3150, 4720, 6080].forEach((l, c) => {
          const h = se(
              i,
              "sine",
              l * (0.97 + Math.random() * 0.06),
              a + 0.01 + c * 0.03,
              0.2,
            ),
            g = i.ac.createGain();
          (Xt(g.gain, a + 0.01 + c * 0.03, 0.001, r * 0.16, 0.16),
            h.connect(g).connect(o));
        }));
    },
    marker(e, n = {}) {
      const s = n.dur ?? 0.38,
        i = te("marker", 200, s, n.delay);
      if (!i) return;
      const { c: a, t: o } = i,
        r = Be(a, o, s),
        l = a.ac.createBiquadFilter();
      ((l.type = "bandpass"),
        (l.Q.value = 1.6),
        l.frequency.setValueAtTime(2400, o),
        l.frequency.linearRampToValueAtTime(3900, o + s));
      const c = a.ac.createGain();
      (c.gain.setValueAtTime(1e-4, o),
        c.gain.exponentialRampToValueAtTime(n.gain ?? 0.07, o + 0.035),
        c.gain.setValueAtTime(n.gain ?? 0.07, o + s * 0.75),
        c.gain.exponentialRampToValueAtTime(1e-4, o + s),
        r
          .connect(l)
          .connect(c)
          .connect(de(a, e, o, 0.12, n.toPos ?? { x: e.x + 0.4, y: e.y }, s)));
    },
    riser(e = {}) {
      const n = e.dur ?? 1.4,
        s = te("riser", 800, n + 0.6, e.delay);
      if (!s) return;
      const { c: i, t: a } = s,
        o = de(i, { x: 0, y: -1.1, z: 1.4 }, a, 0.5, { x: 0, y: 1, z: 1.9 }, n),
        r = Be(i, a, n + 0.4),
        l = i.ac.createBiquadFilter();
      ((l.type = "bandpass"),
        (l.Q.value = 1.1),
        l.frequency.setValueAtTime(180, a),
        l.frequency.exponentialRampToValueAtTime(4800, a + n));
      const c = i.ac.createGain();
      (c.gain.setValueAtTime(1e-4, a),
        c.gain.exponentialRampToValueAtTime(
          (e.gain ?? 0.14) * 0.3,
          a + n * 0.5,
        ),
        c.gain.exponentialRampToValueAtTime(e.gain ?? 0.14, a + n),
        c.gain.exponentialRampToValueAtTime(1e-4, a + n + 0.35),
        r.connect(l).connect(c).connect(o),
        [nt(0, 3), nt(3, 3)].forEach((h) => {
          const g = se(i, "sawtooth", h, a, n + 0.4);
          g.frequency.exponentialRampToValueAtTime(h * 2, a + n);
          const p = i.ac.createBiquadFilter();
          ((p.type = "lowpass"),
            p.frequency.setValueAtTime(300, a),
            p.frequency.exponentialRampToValueAtTime(2600, a + n));
          const d = i.ac.createGain();
          (d.gain.setValueAtTime(1e-4, a),
            d.gain.exponentialRampToValueAtTime(
              (e.gain ?? 0.14) * 0.16,
              a + n * 0.9,
            ),
            d.gain.exponentialRampToValueAtTime(1e-4, a + n + 0.3),
            g.connect(p).connect(d).connect(o));
        }));
    },
    shimmer(e, n = {}) {
      const s = n.count ?? 7;
      if (te("shimmer", 500, 1.8, n.delay))
        for (let a = 0; a < s; a++) {
          const o = [7, 9, 10, 12, 11, 14, 13, 15][a % 8];
          A.bell(
            {
              x: e.x + (Math.random() - 0.5) * 0.9,
              y: e.y + (Math.random() - 0.3) * 0.6,
            },
            nt(o, 5),
            {
              delay: (n.delay ?? 0) + a * 0.055,
              gain: (n.gain ?? 0.03) * (1 - a * 0.06),
              decay: 1.1,
              ratio: 4.01,
              index: 1.2,
            },
          );
        }
    },
    ping(e, n = {}) {
      if (!te("ping", 220, 0.9, n.delay)) return;
      const i = { x: e.x + 0.6, y: e.y + 0.2 };
      (A.bell(i, nt(12, 5), {
        delay: n.delay,
        gain: n.gain ?? 0.05,
        decay: 0.7,
        ratio: 2,
        index: 1.4,
      }),
        A.bell(e, nt(15, 5), {
          delay: (n.delay ?? 0) + 0.11,
          gain: (n.gain ?? 0.05) * 0.9,
          decay: 1,
          ratio: 2,
          index: 1.4,
        }));
    },
    pad(e, n = {}) {
      const s = n.dur ?? 2.2,
        i = te("pad", 400, s + 1.6, n.delay);
      if (!i) return;
      const { c: a, t: o } = i,
        r = de(a, n.pos ?? { x: 0, y: 0.2, z: 2.4 }, o, 0.7),
        l = a.ac.createBiquadFilter();
      ((l.type = "lowpass"),
        l.frequency.setValueAtTime(700, o),
        l.frequency.exponentialRampToValueAtTime(2200, o + s * 0.4),
        l.connect(r),
        e.forEach((c) => {
          [0, 5].forEach((h, g) => {
            const p = se(
                a,
                g ? "triangle" : "sine",
                c * Math.pow(2, h / 1200),
                o,
                s + 1.6,
              ),
              d = a.ac.createGain();
            (d.gain.setValueAtTime(1e-4, o),
              d.gain.exponentialRampToValueAtTime(
                (n.gain ?? 0.05) / e.length,
                o + 0.35,
              ),
              d.gain.setValueAtTime((n.gain ?? 0.05) / e.length, o + s),
              d.gain.exponentialRampToValueAtTime(1e-4, o + s + 1.5),
              p.connect(d).connect(l));
          });
        }));
    },
    printer(e, n = {}) {
      const s = n.lines ?? 6,
        i = n.spacing ?? 0.16,
        a = s * i + 0.2,
        o = te("printer", 900, a, n.delay);
      if (!o) return;
      const { c: r, t: l } = o,
        c = de(r, e, l, 0.1),
        h = n.gain ?? 0.05,
        g = se(r, "sawtooth", 72, l, a),
        p = r.ac.createBiquadFilter();
      ((p.type = "lowpass"), (p.frequency.value = 380));
      const d = r.ac.createGain();
      (Xt(d.gain, l, 0.05, h * 0.5, 0.15, a - 0.2),
        g.connect(p).connect(d).connect(c));
      for (let m = 0; m < s; m++)
        for (let u = 0; u < 7; u++) {
          const x = l + m * i + u * 0.013,
            v = Be(r, x, 0.01),
            w = r.ac.createBiquadFilter();
          ((w.type = "bandpass"),
            (w.frequency.value = 3200 + Math.random() * 900),
            (w.Q.value = 4));
          const y = r.ac.createGain();
          (Xt(y.gain, x, 5e-4, h * 0.55, 0.006),
            v.connect(w).connect(y).connect(c));
        }
    },
    reveal(e, n, s = 0) {
      if (
        !Lt.ready() ||
        (Math.abs(ja()) > 38 &&
          n !== "heading" &&
          n !== "split" &&
          n !== "wordmark")
      )
        return;
      const a = performance.now();
      if (((Un = Math.min(4, Un + ((a - hi) / 1e3) * 5)), (hi = a), Un < 1))
        return;
      Un -= 1;
      const o = ne(e),
        r = s / 1e3;
      switch (n) {
        case "heading":
        case "split":
          (A.air(o, {
            delay: r,
            dur: 0.75,
            from: 220,
            to: 1500,
            gain: 0.06,
            q: 0.7,
          }),
            A.bell(o, nt([5, 7, 8, 9][Math.floor(Math.random() * 4)], 5), {
              delay: r + 0.08,
              gain: 0.022,
              decay: 1.8,
              ratio: 3.5,
              index: 1.6,
            }));
          break;
        case "wordmark":
          (A.air(
            { x: 0, y: -0.6 },
            {
              delay: r,
              dur: 1.2,
              from: 140,
              to: 1800,
              gain: 0.1,
              q: 0.6,
              toPos: { x: 0, y: -0.2 },
            },
          ),
            A.pad([nt(0, 3), nt(3, 3), nt(2, 4), nt(4, 4)], {
              delay: r + 0.15,
              gain: 0.06,
              dur: 1.6,
            }),
            A.shimmer(
              { x: 0, y: -0.4 },
              { delay: r + 0.55, gain: 0.022, count: 6 },
            ));
          break;
        case "pop":
          A.pop(o, { delay: r, gain: 0.05 });
          break;
        case "card":
        case "tilt-back":
        case "tilt-front":
        case "curtain":
          (A.air(o, { delay: r, dur: 0.55, from: 380, to: 2600, gain: 0.065 }),
            A.bell(o, nt([9, 10, 12, 14][Math.floor(Math.random() * 4)], 5), {
              delay: r + 0.12,
              gain: 0.014,
              decay: 1.1,
              ratio: 4.01,
              index: 1,
            }));
          break;
        default:
          A.air(o, {
            delay: r,
            dur: 0.4,
            from: 700,
            to: 3200,
            gain: 0.032,
            q: 1.2,
          });
      }
    },
  },
  mi = "ximitech:sound-hint",
  dd = ({ className: e = "" }) => {
    const [, n] = f.useState(0),
      [s, i] = f.useState(!1),
      [a, o] = f.useState(null),
      [r] = f.useState(
        () =>
          typeof window < "u" &&
          window.matchMedia("(max-width: 639px)").matches,
      ),
      l = f.useRef(null);
    (f.useEffect(() => Lt.subscribe(() => n((p) => p + 1)), []),
      f.useEffect(() => {
        let p = !1;
        try {
          p = sessionStorage.getItem(mi) === "1";
        } catch {}
        if (p || !Lt.isEnabled() || Lt.isUnlocked()) return;
        const d = window.setTimeout(() => i(!0), 2600),
          m = window.setTimeout(() => i(!1), r ? 7600 : 11e3),
          u = Lt.onUnlock(() => i(!1));
        return () => {
          (window.clearTimeout(d), window.clearTimeout(m), u());
        };
      }, [r]),
      f.useEffect(() => {
        var m;
        if (!s) return;
        try {
          sessionStorage.setItem(mi, "1");
        } catch {}
        const p = (m = l.current) == null ? void 0 : m.getBoundingClientRect();
        if (!p || p.bottom < 30) {
          i(!1);
          return;
        }
        o({
          top: p.bottom + 12,
          right: Math.max(12, window.innerWidth - p.right - 6),
        });
        const d = () => i(!1);
        return (
          window.addEventListener("scroll", d, { passive: !0, once: !0 }),
          window.addEventListener("resize", d, { once: !0 }),
          () => {
            (window.removeEventListener("scroll", d),
              window.removeEventListener("resize", d));
          }
        );
      }, [s]));
    const c = Lt.isEnabled(),
      h = c && Lt.isUnlocked(),
      g = () => {
        i(!1);
        const p = !h;
        if ((Lt.setEnabled(p), p)) {
          const d = () => {
            (A.bell({ x: 0.7, y: 0.9 }, nt(7, 5), { gain: 0.05, decay: 1.4 }),
              A.bell({ x: 0.8, y: 0.9 }, nt(9, 5), {
                delay: 0.09,
                gain: 0.04,
                decay: 1.6,
              }));
          };
          if (Lt.isUnlocked()) window.setTimeout(d, 60);
          else {
            const m = Lt.onUnlock(() => {
              (m(), window.setTimeout(d, 60));
            });
          }
        }
      };
    return t.jsxs("div", {
      className: `relative ${e}`,
      children: [
        t.jsxs("button", {
          ref: l,
          type: "button",
          onClick: g,
          "aria-pressed": h,
          "aria-label": h ? "Tắt âm thanh" : "Bật âm thanh",
          title: h ? "Tắt âm thanh" : "Bật âm thanh 3D",
          className:
            "relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/90 bg-white/80 p-2 text-slate-700 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-sky-50/50 hover:text-primary dark:border-white/15 dark:bg-white/5 dark:text-white/80 dark:hover:border-primary/50 dark:hover:bg-white/10 dark:hover:text-primary md:h-10 md:w-10",
          children: [
            c
              ? h
                ? t.jsxs("span", {
                    className: "sound-eq is-live",
                    "aria-hidden": "true",
                    children: [
                      t.jsx("i", {}),
                      t.jsx("i", {}),
                      t.jsx("i", {}),
                      t.jsx("i", {}),
                    ],
                  })
                : t.jsx(or, { className: "h-4 w-4" })
              : t.jsx(rr, { className: "h-4 w-4" }),
            c && !h
              ? t.jsx("span", {
                  className:
                    "absolute right-1 top-1 h-2 w-2 animate-pulse rounded-full bg-emerald-400",
                })
              : null,
            s && r
              ? t.jsx("span", {
                  "aria-hidden": "true",
                  className:
                    "pointer-events-none absolute inset-0 animate-ping rounded-full border-2 border-primary/70",
                })
              : null,
          ],
        }),
        s && a && !r
          ? ec.createPortal(
              t.jsxs("button", {
                type: "button",
                onClick: g,
                style: { top: a.top, right: a.right },
                className:
                  "fixed z-[60] w-max max-w-[230px] rounded-xl bg-slate-950 px-3.5 py-2.5 text-left text-xs font-semibold leading-snug text-white shadow-2xl dark:bg-white dark:text-slate-950",
                children: [
                  t.jsx("span", {
                    className:
                      "absolute -top-1 right-4 h-2.5 w-2.5 rotate-45 bg-inherit",
                  }),
                  "Chạm để bật âm thanh 3D",
                  t.jsx("span", {
                    className: "block font-normal opacity-70",
                    children: "Đeo tai nghe để nghe rõ hướng âm.",
                  }),
                ],
              }),
              document.body,
            )
          : null,
      ],
    });
  },
  md = "modulepreload",
  ud = function (e) {
    return "/" + e;
  },
  ui = {},
  zt = function (load) {
    return load();
  },
  Fr = ({
    className: e = "",
    dieu: n,
    vungChuot: s = "khung",
    mauChu: i = "theo-nen",
  }) => {
    const a = f.useRef(null),
      [o, r] = f.useState(!1),
      l = Rr(),
      c = Zt(),
      { resolvedTheme: h } = Bn();
    f.useEffect(() => {
      if (c || !site.logoModelUrl) return;
      const p = a.current;
      if (!p) return;
      let d = null,
        m = !0;
      return (
        (async () => {
          try {
            const modelData = await loadLogoModel(site.logoModelUrl);
            if (!m) return;
            const [u, { GLTFLoader: x }, { RoomEnvironment: v }] =
              await Promise.all([
                zt(
                  () => import("./vendor-three-nfDmK6kc.js").then((H) => H.a2),
                  [],
                ),
                zt(
                  () => import("./vendor-three-nfDmK6kc.js").then((H) => H.a3),
                  [],
                ),
                zt(
                  () => import("./vendor-three-nfDmK6kc.js").then((H) => H.a4),
                  [],
                ),
              ]);
            if (!m) return;
            const w = p.clientWidth || 320,
              y = p.clientHeight || 320,
              N = new u.WebGLRenderer({ alpha: !0, antialias: !l });
            (N.setSize(w, y),
              N.setPixelRatio(l ? 1 : Math.min(window.devicePixelRatio, 2)),
              (N.domElement.style.cssText =
                "position:absolute;inset:0;width:100%;height:100%;touch-action:pan-y"),
              p.appendChild(N.domElement));
            const j = new u.Scene(),
              k = new u.PMREMGenerator(N);
            ((j.environment = k.fromScene(new v(), 0.04).texture), k.dispose());
            const b = new u.DirectionalLight(16777215, 1.8);
            (b.position.set(2, 4, 5), j.add(b));
            const S = new u.DirectionalLight(13958975, 0.5);
            (S.position.set(-2, -3, 2),
              j.add(S),
              j.add(new u.AmbientLight(16777215, 0.5)));
            const E = new u.PerspectiveCamera(36, w / y, 0.1, 100),
              L = new u.Group();
            j.add(L);
            const T = await new x().parseAsync(
              modelData,
              new URL(".", new URL(site.logoModelUrl, window.location.href))
                .href,
            );
            if (!m) {
              N.dispose();
              return;
            }
            L.add(T.scene);
            const C = [],
              _ = (H) => H.userData.gocXoay.x,
              D = (H) => H.userData.gocXoay.y,
              B = (H) => H.userData.gocXoay.z;
            (T.scene.traverse((H) => {
              const J = H;
              if (
                J.isMesh &&
                ((J.userData.goc = J.position.clone()),
                (J.userData.gocXoay = J.rotation.clone()),
                C.push(J),
                J.name.startsWith("Letter_") && !Array.isArray(J.material))
              ) {
                const ft = i === "trang" || h === "dark";
                J.material.color.set(ft ? 16777215 : 741254);
              }
            }),
              C.forEach((H, J) => {
                const ft = H.userData.goc;
                ((H.userData.roi = new u.Vector3(
                  ft.x * 1.12,
                  ft.y * 1.12,
                  ft.z - 1.6 - (J % 4) * 0.25,
                )),
                  (H.userData.xoayRoi = new u.Euler(
                    _(H),
                    D(H) + Math.sin(J * 1.7) * 0.25,
                    B(H),
                  )),
                  (H.userData.tre = (J % 8) * 0.04));
                const vt = H.userData.goc.clone();
                (vt.lengthSq() < 1e-4 && vt.set(0, 0, 1),
                  (H.userData.huong = vt.normalize()));
              }));
            const z = new u.Box3().setFromObject(L).getSize(new u.Vector3()),
              st = (H, J) => {
                const ft = H / J,
                  vt = z.x / z.y < ft ? z.y : z.x / ft;
                ((E.aspect = ft),
                  (E.position.z =
                    (vt / 2 / Math.tan((E.fov * Math.PI) / 360)) * 1.45),
                  E.updateProjectionMatrix());
              };
            (st(w, y), r(!0));
            let P = 0,
              R = !1,
              et = !1,
              at = !0;
            const Y = s === "section" ? (p.closest("section") ?? p) : p;
            let Q = 0,
              Z = 0,
              ut = 0,
              jt = 0;
            const W = (H) => {
                const J = Y.getBoundingClientRect();
                ((Q = ((H.clientX - J.left) / J.width) * 2 - 1),
                  (Z = ((H.clientY - J.top) / J.height) * 2 - 1));
              },
              it = () => {
                ((Q = 0), (Z = 0));
              };
            (Y.addEventListener("pointermove", W, { passive: !0 }),
              Y.addEventListener("pointerleave", it, { passive: !0 }),
              Y.addEventListener("pointercancel", it, { passive: !0 }));
            let ct = 0;
            const dt = new IntersectionObserver(
              ([H]) => {
                ((at = !H.isIntersecting),
                  H.isIntersecting &&
                    !et &&
                    ((R = !0), (et = !0), (ct = performance.now() * 0.001)));
              },
              { threshold: 0.2 },
            );
            dt.observe(p);
            const lt = (H) => 1 - Math.pow(1 - H, 4),
              I = (H) => ({
                y: Math.sin(H * 0.32) * 0.32,
                x: Math.sin(H * 0.23) * 0.05 - 0.04,
                z: 0,
                tach: 0,
                nhip: 0,
                lech: 0,
              });
            let mt = 0;
            const pt = () => {
              if (((mt = requestAnimationFrame(pt)), at)) return;
              const H = performance.now() * 0.001,
                J = I(H);
              R && P < 1 && ((P = Math.min(1, P + 0.012)), P >= 1 && (R = !1));
              for (let vt = 0; vt < C.length; vt++) {
                const wt = C[vt],
                  Jt = wt.userData.goc,
                  Pt = wt.userData.roi,
                  Et = wt.userData.gocXoay,
                  Gt = wt.userData.xoayRoi,
                  M = wt.userData.tre,
                  U = Math.max(0, Math.min(1, (P - M) / (1 - M || 1))),
                  tt = lt(U);
                if (
                  (wt.position.set(
                    Pt.x + (Jt.x - Pt.x) * tt,
                    Pt.y + (Jt.y - Pt.y) * tt,
                    Pt.z + (Jt.z - Pt.z) * tt,
                  ),
                  wt.rotation.set(
                    Gt.x + (Et.x - Gt.x) * tt,
                    Gt.y + (Et.y - Gt.y) * tt,
                    Gt.z + (Et.z - Gt.z) * tt,
                  ),
                  P >= 1)
                ) {
                  const xt = wt.userData.huong,
                    qt = J.tach * (0.55 + (vt % 4) * 0.12),
                    Vt = Math.sin(H * J.nhip + vt * J.lech);
                  ((wt.position.x += xt.x * qt * Vt),
                    (wt.position.y += xt.y * qt * Vt),
                    (wt.position.z += xt.z * qt * Vt * 1.4),
                    (wt.rotation.z += J.tach * Math.sin(H * 1.1 + vt) * 0.28),
                    (wt.rotation.x +=
                      J.tach * Math.cos(H * 0.9 + vt * 0.7) * 0.2));
                }
              }
              ((ut += (Q - ut) * 0.05), (jt += (Z - jt) * 0.05));
              const ft = Math.min(1, Math.hypot(ut, jt) * 1.6);
              ((L.rotation.y = J.y + (ut * 0.6 - J.y) * ft),
                (L.rotation.x = J.x + (jt * 0.35 - J.x) * ft),
                (L.rotation.z = 0),
                (b.position.x = Math.sin(H * 0.45) * 5),
                (b.position.y = 3 + Math.cos(H * 0.3) * 1.2),
                N.render(j, E));
            };
            pt();
            const Nt = () => {
                const H = p.clientWidth || 320,
                  J = p.clientHeight || 320;
                H < 2 || J < 2 || (N.setSize(H, J), st(H, J));
              },
              St = new ResizeObserver(Nt);
            (St.observe(p),
              (d = () => {
                (cancelAnimationFrame(mt),
                  dt.disconnect(),
                  St.disconnect(),
                  Y.removeEventListener("pointermove", W),
                  Y.removeEventListener("pointerleave", it),
                  Y.removeEventListener("pointercancel", it),
                  j.traverse((H) => {
                    var ft, vt;
                    const J = H;
                    J.isMesh &&
                      ((ft = J.geometry) == null || ft.dispose(),
                      (vt = J.material) == null || vt.dispose());
                  }),
                  N.dispose(),
                  N.domElement.remove());
              }));
          } catch (u) {
            console.warn("Logo 3D không dựng được, giữ ảnh tĩnh:", u);
          }
        })(),
        () => {
          ((m = !1), d == null || d());
        }
      );
    }, [l, c, h, n, s, i]);
    const g =
      i === "trang" || h === "dark"
        ? "/brand/logo-dark.png"
        : "/brand/logo-light.png";
    return t.jsx("div", {
      ref: a,
      className: `relative ${e}`,
      children: t.jsx("img", {
        src: g,
        alt: "TDDTech",
        width: "256",
        height: "256",
        className:
          "mx-auto h-full w-auto object-contain transition-opacity duration-500",
        style: { opacity: o ? 0 : 1 },
      }),
    });
  },
  gd = 700,
  pd = () =>
    typeof document < "u" &&
    document.documentElement.classList.contains("low-power"),
  xd = ({ hideContact: e = !1, careers: n = !1 }) => {
    const i = Ns().pathname === "/",
      [a, o] = f.useState(!1),
      [r, l] = f.useState(!1),
      [c, h] = f.useState(!1),
      [g, p] = f.useState(!1),
      [d, m] = f.useState(!1),
      u = f.useRef(0),
      { scrollYProgress: x } = Je(),
      v = gn(x, { stiffness: 100, damping: 30, restDelta: 0.001 });
    (f.useEffect(() => {
      const k = () => {
        const b = window.scrollY,
          S = b > u.current + 3,
          E = b < u.current - 3;
        p(b > 20);
        const L = document.querySelector("[data-immersive]");
        if (!L) {
          (b < 160 || E ? m(!1) : S && b > 160 && m(!0), (u.current = b));
          return;
        }
        const T = L.getBoundingClientRect();
        (T.top <= 4 && T.bottom > window.innerHeight * 0.6
          ? m(!0)
          : b < 160 || E
            ? m(!1)
            : S && b > 160 && m(!0),
          (u.current = b));
      };
      return (
        k(),
        window.addEventListener("scroll", k, { passive: !0 }),
        () => window.removeEventListener("scroll", k)
      );
    }, []),
      f.useEffect(() => h(pd()), []),
      f.useEffect(() => {
        if (r) {
          ((document.body.style.overflow = "hidden"), Hs(!0));
          const b = window.requestAnimationFrame(() => {
            document.body.classList.add("menu-open");
          });
          return () => window.cancelAnimationFrame(b);
        }
        ((document.body.style.overflow = ""), Hs(!1));
        const k = window.setTimeout(
          () => {
            document.body.classList.remove("menu-open");
          },
          c ? 320 : gd,
        );
        return () => window.clearTimeout(k);
      }, [r, c]),
      f.useEffect(
        () => () => {
          ((document.body.style.overflow = ""),
            document.body.classList.remove("menu-open"),
            Hs(!1));
        },
        [],
      ));
    const y = [
        { label: "Trang chủ", href: "/" },
        { label: "Dịch vụ", href: "/thiet-ke-website" },
        { label: "Kho giao diện", href: "/#kho-giao-dien" },
        { label: "Dự án", href: "/du-an" },
        { label: "Blog", href: "/blog" },
        { label: "Bảng giá", href: "/bang-gia-thiet-ke-website" },
        { label: "Hồ sơ năng lực", href: "/ho-so-nang-luc" },
      ],
      N = [...y],
      j = n ? "Ứng tuyển ngay" : "Liên hệ ngay";
    return t.jsxs(t.Fragment, {
      children: [
        t.jsx("header", {
          className: `fixed left-0 right-0 top-0 z-50 transition-[transform,opacity] duration-500 ${d ? "pointer-events-none -translate-y-full opacity-0" : "translate-y-0 opacity-100"} ${n && !g ? "dark" : ""}`,
          children: t.jsxs("div", {
            className: `transition-all duration-300 ${g ? "py-2" : "py-3"}`,
            children: [
              t.jsx(fe, {
                children:
                  a &&
                  t.jsx(q.div, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    onClick: () => o(!1),
                    className:
                      "menu-scrim fixed inset-0 bg-black/40 backdrop-blur-sm z-[-1] md:hidden",
                  }),
              }),
              t.jsxs("div", {
                className: `container mx-auto px-4 transition-all duration-500 ${g ? "max-w-6xl" : "max-w-full"}`,
                children: [
                  t.jsxs("div", {
                    className: `relative flex items-center justify-between px-6 transition-all duration-500 overflow-hidden
              ${g ? "h-16 rounded-full border border-slate-200/80 bg-white/80 dark:border-white/20 dark:bg-black/60 backdrop-blur-md shadow-[0_8px_32px_0_rgba(15,23,42,0.08)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]" : "h-20 rounded-2xl border border-transparent bg-transparent"}`,
                    children: [
                      t.jsx(q.div, {
                        className:
                          "absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-cyan-400 to-primary origin-left z-50",
                        style: { scaleX: v },
                      }),
                      t.jsxs("a", {
                        href: i ? "#home" : "/",
                        className: "flex items-center cursor-pointer z-10",
                        children: [
                          t.jsx("img", {
                            src: "/brand/logo-light.png",
                            alt: "TDDTech Logo",
                            width: "256",
                            height: "256",
                            className: `w-auto object-contain transition-all duration-300 block dark:hidden ${g ? "h-12 md:h-16" : "h-16 md:h-20 lg:h-24"}`,
                          }),
                          t.jsx("img", {
                            src: "/brand/logo-dark.png",
                            alt: "TDDTech Logo",
                            width: "256",
                            height: "256",
                            className: `w-auto object-contain transition-all duration-500 hidden dark:block ${g ? "h-10 md:h-12" : "h-12 md:h-14 lg:h-16"}`,
                          }),
                        ],
                      }),
                      t.jsx("nav", {
                        className: `hidden items-center overflow-hidden z-10 transition-all duration-500 xl:flex ${g ? "max-w-0 gap-0 opacity-0 pointer-events-none" : "max-w-[900px] gap-5 opacity-100 2xl:gap-7"}`,
                        "aria-hidden": g,
                        children: N.map((k) =>
                          t.jsx(
                            "a",
                            {
                              href: k.href,
                              tabIndex: g ? -1 : 0,
                              className:
                                "ximi-link whitespace-nowrap text-sm font-semibold text-slate-700 hover:text-primary dark:text-white/80 dark:hover:text-primary transition-all",
                              children: k.label,
                            },
                            k.href,
                          ),
                        ),
                      }),
                      t.jsxs("div", {
                        className: "flex items-center gap-2.5 lg:gap-3.5 z-10",
                        children: [
                          t.jsx(Vs, { variant: "icon" }),
                          t.jsx(dd, {}),
                          t.jsxs(Re, {
                            className: `hidden md:inline-flex bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all font-bold ${g ? "h-9 px-4 text-xs" : "h-10 px-6 text-sm"}`,
                            onClick: () => window.open(site.zaloHref, "_blank"),
                            children: [
                              t.jsx("img", {
                                src: "/zalo-icon.png",
                                alt: "",
                                className: "mr-1.5 h-4 w-4 rounded-sm",
                              }),
                              j,
                            ],
                          }),
                          t.jsxs("button", {
                            type: "button",
                            onClick: () => l(!0),
                            className:
                              "group hidden md:flex items-center gap-2.5 rounded-full py-2 pl-4 pr-2.5 transition-all hover:bg-slate-100 dark:hover:bg-white/10",
                            "aria-label": "Mở menu",
                            children: [
                              t.jsx("span", {
                                className: `overflow-hidden whitespace-nowrap text-sm font-bold text-slate-700 transition-all duration-500 group-hover:text-primary dark:text-white/80 ${g ? "max-w-[60px] opacity-100" : "max-w-0 opacity-0"}`,
                                children: "Menu",
                              }),
                              t.jsxs("span", {
                                className:
                                  "flex h-10 w-10 flex-col items-end justify-center gap-[5px] p-1.5",
                                children: [
                                  t.jsx("span", {
                                    className:
                                      "block h-[2.5px] w-6 rounded-full bg-slate-800 transition-all group-hover:bg-primary dark:bg-white dark:group-hover:bg-primary",
                                  }),
                                  t.jsx("span", {
                                    className:
                                      "block h-[2.5px] w-4 rounded-full bg-slate-600 transition-all group-hover:w-6 group-hover:bg-primary dark:bg-white/70 dark:group-hover:bg-primary",
                                  }),
                                  t.jsx("span", {
                                    className:
                                      "block h-[2.5px] w-5 rounded-full bg-slate-400 transition-all group-hover:w-6 group-hover:bg-primary dark:bg-white/50 dark:group-hover:bg-primary",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          !a &&
                            t.jsx("div", {
                              className: "flex md:hidden items-center gap-1.5",
                              children: t.jsxs(Re, {
                                size: "sm",
                                className:
                                  "h-8 px-2.5 text-[10px] font-bold bg-primary hover:bg-primary/90 text-white rounded-full shadow-md flex items-center gap-1",
                                onClick: () =>
                                  window.open(site.zaloHref, "_blank"),
                                children: [
                                  t.jsx("img", {
                                    src: "/zalo-icon.png",
                                    alt: "",
                                    className: "h-4 w-4 rounded-sm",
                                  }),
                                  "Zalo",
                                ],
                              }),
                            }),
                          t.jsx("button", {
                            type: "button",
                            onClick: () => l(!0),
                            "aria-label": "Mở menu",
                            className:
                              "md:hidden relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/90 bg-white/80 p-2 text-slate-700 shadow-sm backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-primary/50 hover:bg-sky-50/70 hover:text-primary active:scale-95 active:bg-sky-100 active:text-primary dark:border-white/15 dark:bg-white/5 dark:text-white/80 dark:hover:border-primary/50 dark:hover:bg-white/10 dark:hover:text-primary",
                            children: t.jsx(xc, { className: "h-5 w-5" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  t.jsx(fe, {
                    children:
                      a &&
                      t.jsx(q.nav, {
                        initial: { opacity: 0, height: 0, y: -10 },
                        animate: { opacity: 1, height: "auto", y: 0 },
                        exit: { opacity: 0, height: 0, y: -10 },
                        transition: { duration: 0.3, ease: "easeInOut" },
                        className:
                          "md:hidden mt-2 overflow-hidden rounded-3xl border border-slate-200 bg-white/95 text-slate-900 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-black/90 dark:text-white",
                        children: t.jsxs("div", {
                          className: "p-6 space-y-1",
                          children: [
                            t.jsxs("div", {
                              className:
                                "mb-3 flex items-center justify-between border-b border-slate-100 pb-3 dark:border-white/5",
                              children: [
                                t.jsx("span", {
                                  className:
                                    "text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-white/40",
                                  children: "Giao diện",
                                }),
                                t.jsx(Vs, { variant: "pill" }),
                              ],
                            }),
                            N.map((k, b) =>
                              t.jsx(
                                q.a,
                                {
                                  href: k.href,
                                  initial: { opacity: 0, x: -10 },
                                  animate: { opacity: 1, x: 0 },
                                  transition: { delay: b * 0.05 },
                                  className:
                                    "ximi-link block text-base font-medium text-slate-700 hover:text-primary dark:text-white/70 dark:hover:text-primary hover:pl-2 py-3 border-b border-slate-100 dark:border-white/5 last:border-0 transition-all",
                                  onClick: () => o(!1),
                                  children: k.label,
                                },
                                k.href,
                              ),
                            ),
                            t.jsxs(q.div, {
                              initial: { opacity: 0, y: 10 },
                              animate: { opacity: 1, y: 0 },
                              transition: { delay: y.length * 0.05 },
                              className: "flex flex-col gap-3 pt-4",
                              children: [
                                t.jsx(Re, {
                                  variant: "outline",
                                  className:
                                    "w-full border-slate-300 text-slate-800 hover:bg-slate-100 hover:text-slate-900 dark:border-white/20 dark:text-white dark:hover:bg-white/10 dark:hover:text-white rounded-xl h-12",
                                  onClick: () =>
                                    window.open(site.phoneHref, "_self"),
                                  children: siteText("{{phone}}"),
                                }),
                                t.jsxs(Re, {
                                  className:
                                    "w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-xl h-12 shadow-lg shadow-primary/20",
                                  onClick: () =>
                                    window.open(site.zaloHref, "_blank"),
                                  children: [
                                    t.jsx("img", {
                                      src: "/zalo-icon.png",
                                      alt: "",
                                      className: "mr-2 h-5 w-5 rounded-sm",
                                    }),
                                    j,
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                  }),
                ],
              }),
            ],
          }),
        }),
        t.jsx(fe, {
          children:
            r &&
            t.jsxs(q.div, {
              initial: c ? { opacity: 0, x: "12%", y: "-12%" } : { opacity: 1 },
              animate: c ? { opacity: 1, x: 0, y: 0 } : { opacity: 1 },
              exit: c ? { opacity: 0, x: "12%", y: "-12%" } : { opacity: 1 },
              transition: c
                ? { duration: 0.2, ease: [0.4, 0, 0.6, 1] }
                : { duration: 0 },
              className:
                "fixed inset-0 z-[100] md:flex md:items-center md:justify-center",
              "data-menu-overlay": !0,
              children: [
                c
                  ? t.jsx("div", {
                      className:
                        "menu-scrim absolute inset-0 bg-white/[0.86] dark:bg-[hsl(220_40%_5%_/_0.88)]",
                    })
                  : t.jsx(q.div, {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      transition: { duration: 0.34, ease: [0.22, 1, 0.36, 1] },
                      className:
                        "menu-scrim absolute inset-0 bg-slate-900/40 dark:bg-black/60",
                    }),
                t.jsx("div", {
                  className:
                    "menu-glow pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,180,216,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,180,216,0.05)_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(to_right,rgba(0,212,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,212,255,0.06)_1px,transparent_1px)]",
                }),
                t.jsx("div", {
                  className:
                    "menu-glow pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[140px]",
                }),
                t.jsxs(q.div, {
                  initial: c
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 0.94, y: 18 },
                  animate: c ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 },
                  exit: c
                    ? {
                        opacity: 0,
                        transition: { duration: 0.18, ease: "easeIn" },
                      }
                    : {
                        opacity: 0,
                        scale: 0.96,
                        y: 12,
                        transition: { duration: 0.22, ease: "easeIn" },
                      },
                  transition: c
                    ? { duration: 0.15, delay: 0 }
                    : { duration: 0.42, delay: 0.06, ease: [0.22, 1, 0.36, 1] },
                  className: c
                    ? "relative flex h-full flex-col overflow-y-auto"
                    : "menu-glass relative mx-auto flex max-h-[86vh] w-[min(92vw,980px)] flex-col overflow-y-auto rounded-[28px] border border-white/25 bg-white/70 shadow-[0_24px_80px_-12px_rgba(15,23,42,0.35)] dark:border-white/12 dark:bg-[hsl(220_40%_8%_/_0.7)]",
                  children: [
                    t.jsxs("div", {
                      className:
                        "flex items-center justify-between px-6 py-5 md:px-10 md:py-7",
                      children: [
                        t.jsxs("a", {
                          href: "/",
                          onClick: () => l(!1),
                          children: [
                            t.jsx("img", {
                              src: "/brand/logo-light.png",
                              alt: "TDDTech",
                              className:
                                "h-10 w-auto object-contain md:h-12 dark:hidden",
                            }),
                            t.jsx("img", {
                              src: "/brand/logo-dark.png",
                              alt: "TDDTech",
                              className:
                                "hidden h-11 w-auto object-contain md:h-14 dark:block",
                            }),
                          ],
                        }),
                        t.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            t.jsx(Vs, { variant: "icon" }),
                            t.jsx("button", {
                              type: "button",
                              onClick: () => l(!1),
                              className:
                                "group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-primary hover:text-primary dark:border-white/15 dark:text-white/60",
                              "aria-label": "Đóng menu",
                              children: t.jsx(Ln, {
                                className:
                                  "h-5 w-5 transition-transform duration-300 group-hover:rotate-90",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    t.jsxs("div", {
                      className:
                        "grid flex-1 gap-10 px-6 pb-10 md:px-10 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-16",
                      children: [
                        t.jsx("nav", {
                          className: "flex flex-col justify-center",
                          children: N.map((k, b) =>
                            c
                              ? t.jsxs(
                                  "a",
                                  {
                                    href: k.href,
                                    onClick: () => l(!1),
                                    className:
                                      "menu-item-in group flex items-baseline gap-3 border-b border-slate-200/80 py-3 dark:border-white/[0.07] sm:gap-4 sm:py-3.5 md:py-4",
                                    style: { "--i": b },
                                    children: [
                                      t.jsx("span", {
                                        className:
                                          "w-7 flex-none font-mono text-xs text-slate-400 dark:text-white/30",
                                        children: String(b + 1).padStart(
                                          2,
                                          "0",
                                        ),
                                      }),
                                      t.jsx("span", {
                                        className:
                                          "text-[26px] font-extrabold leading-tight tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-primary dark:text-white sm:text-3xl md:text-4xl lg:text-[42px]",
                                        children: k.label,
                                      }),
                                      t.jsx(_n, {
                                        className:
                                          "ml-auto h-6 w-6 flex-none translate-x-[-8px] text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100",
                                      }),
                                    ],
                                  },
                                  k.href,
                                )
                              : t.jsxs(
                                  q.a,
                                  {
                                    href: k.href,
                                    onClick: () => l(!1),
                                    initial: { opacity: 0, y: 28 },
                                    animate: { opacity: 1, y: 0 },
                                    exit: {
                                      opacity: 0,
                                      y: 14,
                                      transition: {
                                        duration: 0.16,
                                        delay: (N.length - b) * 0.015,
                                      },
                                    },
                                    transition: {
                                      delay: 0.28 + b * 0.055,
                                      duration: 0.5,
                                      ease: [0.22, 1, 0.36, 1],
                                    },
                                    className:
                                      "group flex items-baseline gap-3 border-b border-slate-200/80 py-3 dark:border-white/[0.07] sm:gap-4 sm:py-3.5 md:py-4",
                                    children: [
                                      t.jsx("span", {
                                        className:
                                          "w-7 flex-none font-mono text-xs text-slate-400 dark:text-white/30",
                                        children: String(b + 1).padStart(
                                          2,
                                          "0",
                                        ),
                                      }),
                                      t.jsx("span", {
                                        className:
                                          "text-[26px] font-extrabold leading-tight tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-primary dark:text-white sm:text-3xl md:text-4xl lg:text-[42px]",
                                        children: k.label,
                                      }),
                                      t.jsx(_n, {
                                        className:
                                          "ml-auto h-6 w-6 flex-none translate-x-[-8px] text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100",
                                      }),
                                    ],
                                  },
                                  k.href,
                                ),
                          ),
                        }),
                        t.jsxs(q.div, {
                          initial: { opacity: 0, y: 28 },
                          animate: { opacity: 1, y: 0 },
                          exit: {
                            opacity: 0,
                            y: 14,
                            transition: { duration: 0.16 },
                          },
                          transition: c
                            ? { delay: 0.06, duration: 0.2 }
                            : { delay: 0.55, duration: 0.5 },
                          className: "flex flex-col gap-7",
                          children: [
                            t.jsx("div", {
                              className: "h-36 w-full md:h-44",
                              children: t.jsx(Fr, {
                                dieu: "menu",
                                className: "h-full w-full",
                              }),
                            }),
                            t.jsx("div", {
                              children: t.jsxs("h2", {
                                className:
                                  "text-xl font-extrabold leading-tight text-slate-900 dark:text-white md:text-2xl",
                                children: [
                                  "Website là tài sản.",
                                  t.jsx("br", {}),
                                  t.jsx("span", {
                                    className: "text-primary",
                                    children: "TDDTech giữ nó sinh lời.",
                                  }),
                                ],
                              }),
                            }),
                            t.jsxs("div", {
                              className: "space-y-3.5",
                              children: [
                                t.jsx("p", {
                                  className:
                                    "text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-white/40",
                                  children: "Liên hệ",
                                }),
                                t.jsxs("a", {
                                  href: site.phoneHref,
                                  className:
                                    "flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-primary dark:text-white/60",
                                  children: [
                                    t.jsx(va, {
                                      className:
                                        "h-4 w-4 flex-none text-primary",
                                    }),
                                    t.jsx("span", {
                                      children: siteText(
                                        "{{phone}} (Zalo / Hotline)",
                                      ),
                                    }),
                                  ],
                                }),
                                t.jsxs("a", {
                                  href: site.emailHref,
                                  className:
                                    "flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-primary dark:text-white/60",
                                  children: [
                                    t.jsx(cr, {
                                      className:
                                        "h-4 w-4 flex-none text-primary",
                                    }),
                                    t.jsx("span", {
                                      children: siteText("{{email}}"),
                                    }),
                                  ],
                                }),
                                t.jsxs("p", {
                                  className:
                                    "flex items-start gap-3 text-sm text-slate-600 dark:text-white/60",
                                  children: [
                                    t.jsx(fc, {
                                      className:
                                        "mt-0.5 h-4 w-4 flex-none text-primary",
                                    }),
                                    t.jsx("span", {
                                      children: "Hà Nội · phục vụ toàn quốc",
                                    }),
                                  ],
                                }),
                                t.jsx(FacebookContactLink, {
                                  variant: "inline",
                                }),
                              ],
                            }),
                            t.jsx(Bh, {
                              itemClassName:
                                "flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-primary/40 hover:text-primary dark:border-white/10 dark:text-white/60",
                              iconClassName: "h-[18px] w-[18px]",
                            }),
                            t.jsxs(Re, {
                              className:
                                "h-12 w-full rounded-xl bg-primary font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 sm:w-auto sm:px-8",
                              onClick: () =>
                                window.open(site.zaloHref, "_blank"),
                              children: [
                                t.jsx("img", {
                                  src: "/zalo-icon.png",
                                  alt: "",
                                  className: "mr-2 h-5 w-5 rounded-sm",
                                }),
                                n
                                  ? "Ứng tuyển qua Zalo"
                                  : "Chat Zalo nhận báo giá",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        }),
      ],
    });
  },
  Ys = [
    "Website là tài sản",
    "Bảo vệ",
    "Giữ gìn",
    "Phát triển",
    "Anh chị sở hữu 100%",
  ],
  Us = [
    "TDDTech vận hành mỗi tháng",
    "Báo cáo minh bạch",
    "Chỉnh sửa miễn phí 5 năm",
    "Kênh bán riêng, không phụ thuộc sàn",
  ],
  sn = ({ words: e, outline: n, groupRef: s }) =>
    t.jsx("div", {
      ref: s,
      className: "flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14",
      children: e.map((i) =>
        t.jsxs(
          "span",
          {
            className: "flex items-center gap-10 sm:gap-14",
            children: [
              t.jsx("span", {
                className: n
                  ? "band-outline"
                  : "text-slate-950 dark:text-white",
                children: i,
              }),
              t.jsx("span", {
                className:
                  "h-3 w-3 flex-none rotate-45 bg-primary sm:h-4 sm:w-4",
              }),
            ],
          },
          i,
        ),
      ),
    }),
  gi = 55,
  pi = 260,
  fd = () => {
    const e = f.useRef(null),
      n = f.useRef(null),
      s = f.useRef(null),
      i = f.useRef(null),
      a = f.useRef(null);
    f.useEffect(() => {
      var N;
      const r = e.current,
        l = n.current,
        c = s.current;
      if (
        !r ||
        !l ||
        !c ||
        !i.current ||
        !a.current ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      )
        return;
      let h = i.current.offsetWidth,
        g = a.current.offsetWidth;
      const p = () => {
          var j, k;
          ((h = ((j = i.current) == null ? void 0 : j.offsetWidth) || h),
            (g = ((k = a.current) == null ? void 0 : k.offsetWidth) || g));
        },
        d = new ResizeObserver(p);
      (d.observe(i.current),
        d.observe(a.current),
        (N = document.fonts) == null || N.ready.then(p));
      let m = 0,
        u = gi,
        x = performance.now(),
        v = 0;
      const w = (j) => {
          v = requestAnimationFrame(w);
          const k = Math.min(50, j - x) / 1e3;
          x = j;
          const b = ja(),
            S = Math.max(-pi, Math.min(pi, b * 9)),
            E = gi + S;
          ((u += (E - u) * Math.min(1, k * 5)), (m += u * k));
          const L = ((m % h) + h) % h,
            T = (((m * 0.8) % g) + g) % g;
          ((l.style.transform = `translate3d(${-L}px, 0, 0)`),
            (c.style.transform = `translate3d(${T - g}px, 0, 0)`));
        },
        y = new IntersectionObserver(([j]) => {
          (j.isIntersecting &&
            !v &&
            ((x = performance.now()), (v = requestAnimationFrame(w))),
            !j.isIntersecting && v && (cancelAnimationFrame(v), (v = 0)));
        });
      return (
        y.observe(r),
        () => {
          (y.disconnect(), d.disconnect(), cancelAnimationFrame(v));
        }
      );
    }, []);
    const o =
      "whitespace-nowrap text-5xl font-black uppercase tracking-[-0.04em] sm:text-7xl lg:text-8xl";
    return t.jsxs("section", {
      ref: e,
      "aria-hidden": "true",
      "data-no-motion": !0,
      className:
        "measure-height relative overflow-hidden bg-background border-t border-slate-200 py-10 dark:border-white/[0.06] md:py-16",
      children: [
        t.jsx("div", {
          className: o,
          children: t.jsxs("div", {
            ref: n,
            className: "flex w-max will-change-transform",
            children: [
              t.jsx(sn, { words: Ys, groupRef: i }),
              t.jsx(sn, { words: Ys }),
              t.jsx(sn, { words: Ys }),
            ],
          }),
        }),
        t.jsx("div", {
          className: `${o} mt-3 sm:mt-5`,
          children: t.jsxs("div", {
            ref: s,
            className: "flex w-max will-change-transform",
            children: [
              t.jsx(sn, { words: Us, outline: !0, groupRef: a }),
              t.jsx(sn, { words: Us, outline: !0 }),
              t.jsx(sn, { words: Us, outline: !0 }),
            ],
          }),
        }),
      ],
    });
  },
  ae = "/media/tddtech/video/v1",
  bd = {
    light: {
      desktop: {
        webm: `${ae}/hero/hero-bg-light.webm`,
        mp4: `${ae}/hero/hero-bg-light.mp4`,
        poster: `${ae}/hero/hero-bg-light.jpg`,
      },
      mobile: {
        mp4: `${ae}/hero/hero-bg-light-mobile.mp4`,
        poster: `${ae}/hero/hero-bg-light-mobile.jpg`,
      },
    },
    dark: {
      desktop: {
        webm: `${ae}/hero/hero-bg-dark.webm`,
        mp4: `${ae}/hero/hero-bg-dark.mp4`,
        poster: `${ae}/hero/hero-bg-dark.jpg`,
      },
      mobile: {
        mp4: `${ae}/hero/hero-bg-dark-mobile.mp4`,
        poster: `${ae}/hero/hero-bg-dark-mobile.jpg`,
      },
    },
  },
  Se = {
    desktop: {
      mp4: `${ae}/film/brand-film-16x9.mp4`,
      poster: `${ae}/film/brand-film-16x9.jpg`,
    },
    mobile: {
      mp4: `${ae}/film/brand-film-9x16.mp4`,
      poster: `${ae}/film/brand-film-9x16.jpg`,
    },
    duration: "1:06",
  },
  Pn = "(max-width: 767px)",
  Gr = "/media/tddtech",
  Kr = (e) => `${Gr}/kho-giao-dien/v1/${e}.webp`,
  vd = (e) => `${Gr}/company-profile/v1/${e}`,
  Yr = ({ text: e, as: n = "h2", className: s = "", style: i }) => {
    const a = e.split(" ");
    return t.jsx(n, {
      "data-motion": "split",
      "aria-label": e,
      className: s,
      style: i,
      children: a.map((o, r) =>
        t.jsxs(
          f.Fragment,
          {
            children: [
              t.jsx("span", {
                "aria-hidden": "true",
                className: "split-mask",
                children: t.jsx("span", {
                  className: "split-word",
                  style: { "--i": r },
                  children: o,
                }),
              }),
              r < a.length - 1 ? " " : null,
            ],
          },
          r,
        ),
      ),
    });
  },
  Na = ({ children: e, icon: n, center: s = !1, className: i = "" }) =>
    t.jsxs("span", {
      className: `inline-flex items-center gap-2.5 border-b-2 border-slate-900 pb-2 text-[0.7rem] font-black uppercase tracking-[0.24em] text-slate-900 dark:border-white dark:text-white sm:text-xs ${s ? "mx-auto" : ""} ${i}`,
      children: [
        n
          ? t.jsx(n, { className: "h-3.5 w-3.5 text-primary" })
          : t.jsx("span", { className: "text-primary", children: "/" }),
        e,
      ],
    }),
  wd = ({ topBorder: e = !0, roomierHeading: n = !1 }) => {
    const s = f.useRef(null),
      i = f.useRef(null),
      [a, o] = f.useState(!1),
      r = () => {
        const l = s.current;
        if (!l) return;
        const c = window.matchMedia(Pn).matches ? Se.mobile : Se.desktop;
        (l.src || ((l.poster = c.poster), (l.src = c.mp4)),
          (l.muted = !1),
          l.play().catch(() => {
            ((l.muted = !0), l.play().catch(() => {}));
          }),
          o(!0));
      };
    return (
      f.useEffect(() => {
        const l = i.current;
        if (!a || !l || typeof IntersectionObserver > "u") return;
        const c = new IntersectionObserver(
          ([h]) => {
            var g;
            h.isIntersecting || (g = s.current) == null || g.pause();
          },
          { threshold: 0.15 },
        );
        return (c.observe(l), () => c.disconnect());
      }, [a]),
      t.jsx("section", {
        id: "phim-gioi-thieu",
        className: `py-12 md:py-20 ${e ? "border-t border-slate-200 dark:border-white/[0.06]" : ""}`,
        children: t.jsx("div", {
          className: "container mx-auto px-4",
          children: t.jsxs("div", {
            className:
              "grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14",
            children: [
              t.jsxs("div", {
                className: "min-w-0",
                children: [
                  t.jsx(Na, { children: "Cách TDDTech làm việc" }),
                  t.jsx(Yr, {
                    text: "Từ yêu cầu đến sản phẩm doanh nghiệp có thể vận hành",
                    className: `text-balance text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl ${n ? "mt-4" : "mt-3"}`,
                    style: { lineHeight: n ? 1.28 : 1.22 },
                  }),
                  t.jsx("p", {
                    className: `${n ? "mt-6" : "mt-4"} max-w-lg text-pretty text-base leading-8 text-slate-600 dark:text-white/60`,
                    children:
                      "TDDTech làm rõ người dùng, luồng nghiệp vụ, dữ liệu và tiêu chí nghiệm thu trước khi chốt cấu trúc kỹ thuật. Khách hàng theo dõi sản phẩm qua từng mốc, kiểm tra các luồng chính rồi nhận quyền truy cập, mã nguồn và hướng dẫn theo phạm vi.",
                  }),
                  t.jsxs("div", {
                    className:
                      "mt-8 flex flex-wrap items-center gap-x-6 gap-y-3",
                    children: [t.jsxs(ContactChannelPair,{children:[t.jsxs("a", {
                        href: site.zaloHref,
                        target: "_blank",
                        rel: "noreferrer",
                        className:
                          "inline-flex h-12 items-center gap-2.5 rounded-full bg-slate-900 px-6 text-[0.95rem] font-bold text-white transition-colors hover:bg-primary dark:bg-white dark:text-slate-950 dark:hover:bg-primary dark:hover:text-white",
                        children: [
                          t.jsx("img", {
                            src: "/zalo-icon.png",
                            alt: "",
                            width: 20,
                            height: 20,
                            className: "h-5 w-5 rounded-sm",
                          }),
                          "Trao đổi nhu cầu dự án",
                        ],
                      }),t.jsx(FacebookContactLink,{variant:"button",label:"Tư vấn thiết kế dự án",className:"inline-flex h-12 items-center gap-2.5 rounded-full bg-slate-900 px-6 text-[0.95rem] font-bold text-white transition-colors hover:bg-primary dark:bg-white dark:text-slate-950 dark:hover:bg-primary dark:hover:text-white"})]})],
                  }),
                ],
              }),
              t.jsxs("div", {
                ref: i,
                "data-scroll": "grow",
                className:
                  "relative mx-auto aspect-[9/16] w-full max-w-[380px] overflow-hidden rounded-[12px] bg-[#071224] shadow-[0_30px_70px_-35px_rgba(7,18,36,0.7)] ring-1 ring-slate-900/5 dark:ring-white/10 md:aspect-video md:max-w-none",
                children: [
                  t.jsx("video", {
                    ref: s,
                    controls: a,
                    playsInline: !0,
                    preload: "none",
                    onEnded: () => o(!1),
                    className: "absolute inset-0 h-full w-full object-cover",
                  }),
                  !a &&
                    t.jsxs("button", {
                      type: "button",
                      onClick: r,
                      "aria-label": `Phát video về TDDTech, dài ${Se.duration}, có tiếng`,
                      className: "group absolute inset-0 block h-full w-full",
                      children: [
                        t.jsxs("picture", {
                          children: [
                            t.jsx("source", {
                              media: Pn,
                              srcSet: Se.mobile.poster,
                            }),
                            t.jsx("img", {
                              src: Se.desktop.poster,
                              alt: "TDDTech: Biến ý tưởng thành website",
                              loading: "lazy",
                              decoding: "async",
                              className: "h-full w-full object-cover",
                            }),
                          ],
                        }),
                        t.jsx("span", {
                          className:
                            "absolute inset-0 bg-[#071224]/15 transition-colors duration-300 group-hover:bg-transparent",
                        }),
                        t.jsxs("span", {
                          className:
                            "absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-full bg-white py-1.5 pl-1.5 pr-5 text-slate-900 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover:-translate-y-0.5 md:bottom-6 md:left-6 md:translate-x-0",
                          children: [
                            t.jsx("span", {
                              className:
                                "flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white transition-colors duration-300 group-hover:bg-primary md:h-11 md:w-11",
                              children: t.jsx(bc, {
                                className: "ml-0.5 h-4 w-4 fill-current",
                              }),
                            }),
                            t.jsxs("span", {
                              className: "text-left leading-tight",
                              children: [
                                t.jsx("span", {
                                  className: "block text-sm font-bold",
                                  children: "Xem video",
                                }),
                                t.jsx("span", {
                                  className:
                                    "block font-mono text-[0.7rem] text-slate-500",
                                  children: Se.duration,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        }),
      })
    );
  },
  Ur = ({ text: e, as: n = "p", className: s = "" }) => {
    const i = e.split(" ");
    return t.jsx(n, {
      "data-scroll": "read",
      "data-no-motion": !0,
      "aria-label": e,
      className: s,
      style: { "--n": i.length },
      children: i.map((a, o) =>
        t.jsxs(
          f.Fragment,
          {
            children: [
              t.jsx("span", {
                "aria-hidden": "true",
                className: "read-word",
                style: { "--i": o },
                children: a,
              }),
              o < i.length - 1 ? " " : null,
            ],
          },
          o,
        ),
      ),
    });
  },
  yd = () => {
    const e = Zt(),
      n = f.useRef(null),
      s = f.useRef(null),
      i = f.useRef(null),
      a = f.useRef(null),
      o = f.useRef(null),
      [r, l] = f.useState(!0),
      [c, h] = f.useState(!1),
      g = f.useRef(!1);
    if (
      (f.useEffect(() => {
        if (e) return;
        const d = n.current,
          m = s.current,
          u = i.current,
          x = o.current;
        if (!d || !m || !u || !x) return;
        const v = window.matchMedia(Pn);
        let w = v.matches,
          y = w ? Se.mobile : Se.desktop;
        x.poster = y.poster;
        let N = w ? 0.56 : 0.42;
        const j = () => {
          if (
            ((w = v.matches),
            (y = w ? Se.mobile : Se.desktop),
            (N = w ? 0.56 : 0.42),
            (x.poster = y.poster),
            x.src && !x.src.endsWith(y.mp4))
          ) {
            const K = x.currentTime,
              z = !x.paused;
            ((x.src = y.mp4),
              (x.currentTime = K),
              z && x.play().catch(() => {}));
          }
          C();
        };
        v.addEventListener("change", j);
        let k = 0,
          b = !1,
          S = !1;
        const E = () => {
            x.src || ((x.src = y.mp4), (x.preload = "auto"));
          },
          L = () => {
            (E(),
              x.paused &&
                ((x.muted = g.current),
                x
                  .play()
                  .then(() => l(x.muted))
                  .catch(() => {
                    ((x.muted = !0), l(!0), x.play().catch(() => {}));
                  })));
          },
          T = () => {
            k = 0;
            const K = window.innerHeight,
              z = d.getBoundingClientRect(),
              st = Math.max(1, z.height - K),
              P = Math.min(1, Math.max(0, -z.top / st)),
              R = u.offsetHeight,
              et = Math.max(K * 0.16, R + 18 - K * 0.62 * (1 - N)),
              at = Math.min(1, P / 0.45),
              Y = 1 - Math.pow(1 - at, 3),
              Q = N + (1 - N) * Y,
              Z = (1 - Y) * et;
            ((m.style.transform = `translate3d(0, ${Z}px, 0) scale(${Q})`),
              (m.style.borderRadius = `${((1 - Y) * 28) / Q}px`),
              (u.style.opacity = String(Math.max(0, 1 - at * 1.8))));
            const ut = K * 0.62 * (Q - N) + (Z - et);
            ((u.style.transform = `translate3d(0, ${Math.min(-at * K * 0.18, -ut)}px, 0)`),
              a.current &&
                (a.current.style.opacity = String(
                  at > 0.95 && P < 0.97 ? 1 : 0,
                )));
            const jt = at > 0.6;
            h((it) => (it === jt ? it : jt));
            const W = b && at > 0.5 && P < 0.995;
            W !== S && ((S = W), W ? L() : x.pause());
          },
          C = () => {
            b && !k && (k = requestAnimationFrame(T));
          },
          _ = new IntersectionObserver(
            ([K]) => {
              K.isIntersecting && E();
            },
            { rootMargin: "100% 0px" },
          );
        _.observe(d);
        const D = new IntersectionObserver(([K]) => {
          ((b = K.isIntersecting), b || ((S = !1), x.pause()), C());
        });
        (D.observe(d),
          window.addEventListener("scroll", C, { passive: !0 }),
          window.addEventListener("resize", C));
        const B = () => {
          !g.current && !x.paused && x.muted && ((x.muted = !1), l(!1));
        };
        return (
          window.addEventListener("pointerdown", B, { passive: !0 }),
          window.addEventListener("keydown", B),
          T(),
          () => {
            (cancelAnimationFrame(k),
              _.disconnect(),
              D.disconnect(),
              window.removeEventListener("scroll", C),
              window.removeEventListener("resize", C),
              window.removeEventListener("pointerdown", B),
              window.removeEventListener("keydown", B),
              v.removeEventListener("change", j),
              x.pause());
          }
        );
      }, [e]),
      e)
    )
      return t.jsx(wd, { topBorder: !1, roomierHeading: !0 });
    const p = () => {
      const d = o.current;
      d &&
        ((d.muted = !d.muted),
        (g.current = d.muted),
        l(d.muted),
        d.paused && d.play().catch(() => {}));
    };
    return t.jsx("section", {
      ref: n,
      id: "phim-gioi-thieu",
      "data-no-motion": !0,
      "aria-label": "Phim giới thiệu TDDTech",
      className: "relative h-[290svh] bg-slate-50 dark:bg-[hsl(220_40%_6%)]",
      children: t.jsxs("div", {
        className: "sticky top-0 h-[100svh] overflow-hidden",
        children: [
          t.jsxs("div", {
            ref: i,
            className:
              "pointer-events-none absolute inset-x-0 top-0 z-10 px-4 pt-24 text-center will-change-transform md:pt-28",
            children: [
              t.jsx("p", {
                className:
                  "text-xs font-bold uppercase tracking-[0.26em] text-primary sm:text-sm",
                children: "Cách TDDTech làm việc",
              }),
              t.jsx(Ur, {
                as: "h2",
                text: "Từ yêu cầu đến sản phẩm doanh nghiệp có thể vận hành",
                className:
                  "mx-auto mt-3 max-w-4xl text-balance text-3xl font-black leading-[1.1] tracking-[-0.03em] text-slate-950 dark:text-white sm:text-5xl sm:leading-[1.15] lg:text-6xl lg:leading-[1.12]",
              }),
              t.jsx("p", {
                className:
                  "mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-white/60 sm:text-base",
                children: "Cuộn xuống để xem 66 giây về cách TDDTech làm việc.",
              }),
            ],
          }),
          t.jsxs("div", {
            ref: s,
            className:
              "absolute inset-0 overflow-hidden bg-[#071224] will-change-transform",
            style: { transformOrigin: "50% 62%" },
            children: [
              t.jsx("video", {
                ref: o,
                playsInline: !0,
                loop: !0,
                preload: "none",
                className: "h-full w-full object-cover",
              }),
              t.jsx("div", {
                className: `pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 transition-opacity duration-500 ${c ? "opacity-100" : "opacity-0"}`,
              }),
              t.jsxs("div", {
                className: `absolute bottom-6 right-6 flex items-center gap-3 transition-opacity duration-500 md:bottom-10 md:right-10 ${c ? "opacity-100" : "pointer-events-none opacity-0"}`,
                children: [
                  r &&
                    t.jsx("span", {
                      className:
                        "hidden text-sm font-semibold text-white/80 sm:inline",
                      children: "Chạm để bật tiếng",
                    }),
                  t.jsx("button", {
                    type: "button",
                    onClick: p,
                    "aria-label": r ? "Bật tiếng phim" : "Tắt tiếng phim",
                    className:
                      "flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-slate-950 shadow-lg backdrop-blur transition-transform hover:scale-105",
                    children: r
                      ? t.jsx(rr, { className: "h-6 w-6" })
                      : t.jsx(or, { className: "h-6 w-6" }),
                  }),
                ],
              }),
              t.jsxs("div", {
                ref: a,
                className:
                  "pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 text-sm font-semibold text-white/75 transition-opacity duration-500 md:bottom-12",
                style: { opacity: 0 },
                children: [
                  t.jsx(lr, { className: "h-4 w-4 animate-bounce" }),
                  " Cuộn tiếp để bỏ qua",
                ],
              }),
            ],
          }),
        ],
      }),
    });
  };
function Qr({
  items: e,
  renderItem: n,
  getKey: s,
  cardWidth: i,
  aspect: a = 0.75,
  gap: o = 28,
  speed: r = 40,
  spin: l = 1400,
  className: c = "",
}) {
  const h = f.useRef(null),
    g = f.useRef([]),
    p = f.useRef([]),
    [d, m] = f.useState({ w: 1200, cw: 320 }),
    u = f.useRef(!1),
    x = f.useRef(!1),
    v = d.cw + o,
    w = Math.max(d.w * 0.95, v * 2.6),
    y = Math.ceil((2.1 * w + v * 2) / v),
    N = Math.max(1, Math.ceil(y / Math.max(1, e.length))),
    j = Array.from({ length: N }, () => e).flat(),
    k = d.cw * a;
  return (
    f.useEffect(() => {
      const b = h.current;
      if (!b) return;
      const S = () => {
        const L = { w: b.clientWidth, cw: i(window.innerWidth) };
        m((T) => (T.w === L.w && T.cw === L.cw ? T : L));
      };
      S();
      const E = new ResizeObserver(S);
      return (E.observe(b), () => E.disconnect());
    }, [i]),
    f.useEffect(() => {
      const b = h.current;
      if (!b) return;
      const S = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        E = j.length * v,
        L = Math.sign(r) || 1;
      let T = 0,
        C = 0,
        _ = performance.now(),
        D = 0,
        B = !1,
        K = !1,
        z = null;
      const st = () => {
          const W = Math.min(1, Math.abs(C) / 2e3),
            it = -Math.sign(C) * W;
          for (let ct = 0; ct < j.length; ct++) {
            const dt = g.current[ct];
            if (!dt) continue;
            let lt = ct * v - T;
            lt = ((((lt + E / 2) % E) + E) % E) - E / 2;
            const I = lt / w;
            if (Math.abs(I) > 1.05) {
              dt.style.visibility !== "hidden" &&
                (dt.style.visibility = "hidden");
              continue;
            }
            dt.style.visibility !== "visible" &&
              (dt.style.visibility = "visible");
            const mt = Math.sin(I) * w,
              pt = (Math.cos(I) - 1) * w,
              Nt = (1 - Math.cos(I)) * w * 0.16;
            dt.style.transform = `translate3d(${mt - d.cw / 2}px, ${Nt}px, ${pt}px) rotateY(${(I * 180) / Math.PI}deg) rotateZ(${I * 4}deg) skewX(${it * 3}deg)`;
            const St = p.current[ct];
            St &&
              (St.style.opacity = String(
                Math.min(0.75, Math.abs(I) * 0.55 + W * 0.12),
              ));
          }
        },
        P = (W) => {
          D = requestAnimationFrame(P);
          const it = Math.min(64, W - _) / 1e3;
          if (((_ = W), !z)) {
            const ct = r * (u.current ? 0.2 : 1);
            ((C = ct + (C - ct) * Math.exp(-it * 0.9)), (T += C * it));
          }
          st();
        };
      if ((st(), S)) return;
      const R = () => {
          D ||
            !B ||
            document.hidden ||
            ((_ = performance.now()), (D = requestAnimationFrame(P)));
        },
        et = () => {
          (cancelAnimationFrame(D), (D = 0));
        },
        at = new IntersectionObserver(
          ([W]) => {
            const it = B;
            ((B = W.isIntersecting),
              B && !it && !K && ((C = L * l), (K = !0)),
              B ? R() : et());
          },
          { threshold: 0.25 },
        );
      at.observe(b);
      const Y = (W) => {
          (W.pointerType === "mouse" && W.button !== 0) ||
            ((z = { x: W.clientX, t: performance.now(), v: 0 }),
            (x.current = !1));
        },
        Q = (W) => {
          if (!z) return;
          const it = W.clientX - z.x;
          Math.abs(it) > 4 && (x.current = !0);
          const ct = performance.now();
          ((z.v = (-it / Math.max(1, ct - z.t)) * 1e3),
            (z.x = W.clientX),
            (z.t = ct),
            (T -= it * 1.4));
        },
        Z = () => {
          z && ((C = Math.max(-6e3, Math.min(6e3, z.v * 1.4))), (z = null));
        };
      (b.addEventListener("pointerdown", Y),
        window.addEventListener("pointermove", Q, { passive: !0 }),
        window.addEventListener("pointerup", Z),
        window.addEventListener("pointercancel", Z));
      const ut = (W) => {
        x.current &&
          (W.preventDefault(), W.stopPropagation(), (x.current = !1));
      };
      b.addEventListener("click", ut, !0);
      const jt = () => (document.hidden ? et() : R());
      return (
        document.addEventListener("visibilitychange", jt),
        () => {
          (et(),
            at.disconnect(),
            b.removeEventListener("pointerdown", Y),
            window.removeEventListener("pointermove", Q),
            window.removeEventListener("pointerup", Z),
            window.removeEventListener("pointercancel", Z),
            b.removeEventListener("click", ut, !0),
            document.removeEventListener("visibilitychange", jt));
        }
      );
    }, [j.length, v, w, d.cw, r, l]),
    t.jsxs("div", {
      ref: h,
      className: `relative select-none overflow-hidden ${c}`,
      style: {
        height: k + 80,
        perspective: `${Math.round(w * 1.4)}px`,
        perspectiveOrigin: "50% 20%",
        touchAction: "pan-y",
        cursor: "grab",
      },
      onPointerEnter: () => {
        u.current = !0;
      },
      onPointerLeave: () => {
        u.current = !1;
      },
      children: [
        t.jsx(t.Fragment, {
          children: j.map((b, S) =>
            t.jsxs(
              "div",
              {
                ref: (E) => {
                  g.current[S] = E;
                },
                className: "absolute left-1/2 top-6",
                style: {
                  width: d.cw,
                  height: k,
                  willChange: "transform",
                  visibility: "hidden",
                  backfaceVisibility: "hidden",
                },
                children: [
                  n(b, S % e.length),
                  t.jsx("span", {
                    ref: (E) => {
                      p.current[S] = E;
                    },
                    className:
                      "pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950",
                    style: { opacity: 0 },
                  }),
                ],
              },
              `${s(b, S % e.length)}-${Math.floor(S / e.length)}`,
            ),
          ),
        }),
        t.jsx("span", {
          "aria-hidden": "true",
          className:
            "pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32",
          style: {
            background:
              "linear-gradient(to right, var(--marquee-bg, hsl(var(--background))), transparent)",
          },
        }),
        t.jsx("span", {
          "aria-hidden": "true",
          className:
            "pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32",
          style: {
            background:
              "linear-gradient(to left, var(--marquee-bg, hsl(var(--background))), transparent)",
          },
        }),
      ],
    })
  );
}
const ug = [
    {
      id: "bat-dong-san",
      label: "Bất động sản",
      description:
        "Landing page dự án và website dịch vụ nhà ở: nội dung dài, điều hướng theo mục lục, mặt bằng, chính sách bán hàng và nhiều điểm nhận thông tin khách hàng.",
    },
    {
      id: "xay-dung-kien-truc",
      label: "Xây dựng & Kiến trúc",
      description:
        "Website nhà thầu, công ty xây dựng và văn phòng kiến trúc: hồ sơ năng lực, thư viện công trình đã thi công và quy trình làm việc với chủ đầu tư.",
    },
    {
      id: "noi-that-vat-lieu",
      label: "Nội thất & Vật liệu",
      description:
        "Danh mục sản phẩm nhiều biến thể, catalogue theo không gian và nội dung đa ngôn ngữ cho nhà máy, xưởng sản xuất hướng tới khách quốc tế.",
    },
    {
      id: "giao-duc-dao-tao",
      label: "Giáo dục & Đào tạo",
      description:
        "Nền tảng luyện thi, trường dạy nghề và học viện: lớp học trực tuyến, đề thi thử, lộ trình học, khu vực học viên và chuyển đổi đăng ký ghi danh.",
    },
    {
      id: "thoi-trang",
      label: "Thời trang",
      description:
        "Website thương mại thời trang: hình ảnh bộ sưu tập là trọng tâm, danh mục và giỏ hàng gọn, tối ưu cho người mua bằng điện thoại.",
    },
    {
      id: "the-thao",
      label: "Thể thao",
      description:
        "Thương hiệu dụng cụ và mô hình câu lạc bộ: bảng thông số sản phẩm, xác thực hàng chính hãng, lịch giải đấu và đặt sân.",
    },
    {
      id: "f-and-b",
      label: "F&B & Nhà hàng",
      description:
        "Thực đơn trực quan, câu chuyện thương hiệu và đặt bàn: ưu tiên tốc độ tải trên điện thoại vì khách thường tra cứu ngay trước khi tới quán.",
    },
    {
      id: "lam-dep-cham-soc",
      label: "Làm đẹp & Chăm sóc",
      description:
        "Salon, spa và dịch vụ chăm sóc cá nhân: bảng giá theo gói, thư viện hình ảnh trước - sau và đặt lịch hẹn trực tiếp trên web.",
    },
    {
      id: "o-to-xe-may",
      label: "Ô tô & Chăm sóc xe",
      description:
        "Dịch vụ phủ ceramic, dán phim và bảo dưỡng: báo giá theo dòng xe, cam kết bảo hành và bằng chứng tay nghề qua ảnh thực tế.",
    },
    {
      id: "tai-chinh-dau-tu",
      label: "Tài chính & Đầu tư",
      description:
        "Nền tảng so sánh, đánh giá và cộng đồng giao dịch: ma trận so sánh nhiều tiêu chí, bộ lọc phức tạp và nội dung tuân thủ miễn trừ trách nhiệm.",
    },
    {
      id: "logistics-van-tai",
      label: "Logistics & Vận tải",
      description:
        "Website vận chuyển quốc tế: tra cứu vận đơn, mạng lưới tuyến và nội dung song ngữ cho khách hàng doanh nghiệp ở nhiều quốc gia.",
    },
    {
      id: "khach-san-du-lich",
      label: "Khách sạn & Du lịch",
      description:
        "Cổng thông tin đối tác đại lý, bảng giá phòng theo mùa và quy trình đặt phòng gắn với hệ thống quản lý của khách sạn.",
    },
    {
      id: "cong-nghe-ha-tang",
      label: "Công nghệ & Hạ tầng",
      description:
        "Sản phẩm thiên về kỹ thuật: trang giới thiệu nền tảng, gói dịch vụ máy chủ, tài liệu kỹ thuật và bảng cấu hình cho nhóm khách am hiểu.",
    },
    {
      id: "phan-mem-quan-ly",
      label: "Phần mềm quản lý",
      description:
        "Web app vận hành nội bộ: quản lý nhân sự, chấm công, tính lương và phân quyền theo vai trò, thay cho bảng tính thủ công.",
    },
    {
      id: "thuong-mai-dien-tu",
      label: "Thương mại điện tử",
      description:
        "Cửa hàng trực tuyến và xưởng sản xuất theo đơn: danh mục nhiều biến thể, giỏ hàng, thanh toán và quản lý đơn hàng.",
    },
    {
      id: "dich-vu-doanh-nghiep",
      label: "Dịch vụ doanh nghiệp",
      description:
        "Website giới thiệu công ty, hồ sơ năng lực và hệ sinh thái thương hiệu. Ưu tiên kiến trúc thông tin rõ ràng và khả năng mở rộng nội dung về sau.",
    },
    {
      id: "dich-vu-khan-cap",
      label: "Dịch vụ khẩn cấp 24/7",
      description:
        "Mô hình khách cần gấp: số điện thoại luôn trong tầm mắt, phạm vi phục vụ theo khu vực và cam kết thời gian có mặt.",
    },
    {
      id: "su-kien-giai-tri",
      label: "Sự kiện & Giải trí",
      description:
        "Dịch vụ công nghệ cho sự kiện và sản phẩm số: giới thiệu trải nghiệm, gói thuê thiết bị và đặt lịch theo ngày.",
    },
    {
      id: "thuong-hieu-ca-nhan",
      label: "Thương hiệu cá nhân",
      description:
        "Website chuyên gia và người dẫn dắt: hồ sơ chuyên môn, nội dung chia sẻ và kênh nhận tư vấn, hợp tác.",
    },
  ],
  Rn = [
    {
      slug: "vinhomes-saigon-park",
      name: "Vinhomes Sài Gòn Park",
      category: "Landing page bất động sản",
      categoryId: "bat-dong-san",
      url: "https://vinhomessaigon-park.com",
      domain: "vinhomessaigon-park.com",
      type: "Landing page dự án",
      summary:
        "Landing page giới thiệu đại đô thị Vinhomes Sài Gòn Park với khối lượng nội dung lớn: tổng quan, vị trí, phân khu, sản phẩm, tiện ích, chính sách bán hàng và tiến độ.",
      challenge:
        "Dự án có quy mô rất lớn với nhiều phân khu và nhiều loại hình sản phẩm. Người xem cần nắm được bức tranh tổng thể nhưng vẫn phải tới được đúng phần đang quan tâm mà không phải cuộn qua toàn bộ trang.",
      scope: [
        "Tổ chức trang theo từng section độc lập kèm mục lục điều hướng neo nhanh.",
        "Trình bày hệ phân khu, loại hình sản phẩm và chính sách thanh toán theo nhóm dễ đối chiếu.",
        "Bố trí form đăng ký nhận bảng giá và nút liên hệ xuyên suốt hành trình đọc.",
        "Tối ưu hiển thị cho lưu lượng truy cập chủ yếu đến từ điện thoại.",
      ],
      outcome: [
        "Toàn bộ thông tin dự án được tập trung trên một URL dễ chia sẻ khi chạy quảng cáo.",
        "Người xem chuyển nhanh giữa các phần vị trí, mặt bằng, giá và chính sách.",
        "Đội ngũ bán hàng có một điểm chạm thống nhất để tiếp nhận khách quan tâm.",
      ],
      note: "Thông tin dự án, quy mô và chính sách bán hàng thuộc nội dung do chủ đầu tư và đơn vị phân phối công bố. TDDTech thực hiện phần thiết kế và lập trình website.",
    },
    {
      slug: "brothers-renovate",
      name: "Brothers Renovation",
      category: "Website dịch vụ cải tạo nhà (Úc)",
      categoryId: "xay-dung-kien-truc",
      url: "https://brothersrenovate.com",
      domain: "brothersrenovate.com",
      type: "Website dịch vụ, thị trường Úc",
      summary:
        "Website tiếng Anh cho đơn vị cải tạo nhà ở tại Melbourne, trình bày sáu nhóm dịch vụ, portfolio công trình và quy trình làm việc bốn giai đoạn.",
      challenge:
        "Khách hàng ở thị trường Úc thường so sánh nhiều nhà thầu trước khi liên hệ. Website cần chứng minh năng lực thi công và làm rõ cách làm việc ngay trong lần xem đầu tiên.",
      scope: [
        "Xây dựng nội dung tiếng Anh theo chuẩn trình bày dịch vụ của thị trường Úc.",
        "Phân tách sáu nhóm dịch vụ cải tạo thành các trang, mục riêng.",
        "Thiết kế khu vực portfolio để công trình đã hoàn thiện làm bằng chứng năng lực.",
        "Trình bày quy trình bốn bước Discover - Design - Build - Handover và form nhận yêu cầu báo giá.",
      ],
      outcome: [
        "Thương hiệu có website riêng phục vụ khách hàng khu vực Melbourne.",
        "Năng lực thi công được thể hiện qua hình ảnh công trình thay vì chỉ mô tả.",
        "Quy trình và phạm vi công việc rõ ràng ngay trước khi khách hàng liên hệ.",
      ],
      note: "Nội dung dịch vụ và hình ảnh công trình do khách hàng cung cấp. TDDTech thực hiện thiết kế và lập trình website.",
    },
    {
      slug: "palm-river-huong-viet",
      name: "Palm River Hương Việt",
      category: "Landing page căn hộ cao cấp",
      categoryId: "bat-dong-san",
      url: "https://palmriverhuongviet.vn",
      domain: "palmriverhuongviet.vn",
      type: "Landing page dự án",
      summary:
        "Landing page dự án căn hộ ven sông tại Thủ Đức, tổ chức theo tổng quan, vị trí, tiện ích, mặt bằng, giá và chính sách, kèm khu vực thông tin chủ đầu tư.",
      challenge:
        "Phân khúc căn hộ cao cấp đòi hỏi giao diện tương xứng với định vị sản phẩm, đồng thời vẫn phải trình bày đủ thông số kỹ thuật và chính sách để khách hàng đánh giá.",
      scope: [
        "Thiết kế giao diện theo định vị sản phẩm nghỉ dưỡng ven sông.",
        "Tổ chức thông số dự án, loại hình căn hộ và mặt bằng thành các mục tra cứu nhanh.",
        "Xây dựng phần thông tin chủ đầu tư và nhà thầu để tăng độ tin cậy.",
        "Bố trí form đăng ký nhận giá, FAQ và các điểm liên hệ trên mobile.",
      ],
      outcome: [
        "Thông tin dự án được trình bày nhất quán với định vị cao cấp.",
        "Khách hàng tra cứu được mặt bằng, diện tích và chính sách thanh toán tại một nơi.",
        "Trang sẵn sàng cập nhật khi có đợt mở bán hoặc chính sách mới.",
      ],
      note: "Thông số dự án, giá và chính sách bán hàng thuộc nội dung do chủ đầu tư công bố.",
    },
    {
      slug: "hqn-group",
      name: "HQN Group",
      category: "Website doanh nghiệp xây dựng",
      categoryId: "xay-dung-kien-truc",
      url: "https://hqngroup.vn",
      domain: "hqngroup.vn",
      type: "Website doanh nghiệp xây dựng",
      summary:
        "Website doanh nghiệp ngành xây dựng, giới thiệu hệ sinh thái công ty, lĩnh vực hoạt động và năng lực thi công theo phong cách hiện đại.",
      challenge:
        "Doanh nghiệp xây dựng được đánh giá qua công trình đã làm và quy mô năng lực. Website phải dựng được hình ảnh chuyên nghiệp ngay từ đầu và còn chỗ để bổ sung hồ sơ công trình về sau.",
      scope: [
        "Xây dựng giao diện responsive theo nhận diện thương hiệu của doanh nghiệp.",
        "Tổ chức nội dung theo nhóm lĩnh vực hoạt động và năng lực thi công.",
        "Thiết kế cấu trúc sẵn sàng bổ sung hồ sơ công trình và dự án đã thực hiện.",
        "Tối ưu frontend để hiệu ứng vẫn mượt trên nhiều kích thước màn hình.",
      ],
      outcome: [
        "Hình ảnh doanh nghiệp xây dựng nhất quán trên desktop và mobile.",
        "Cấu trúc sẵn sàng bổ sung công trình, dịch vụ và nội dung thương hiệu.",
        "Website đang hoạt động công khai tại tên miền của khách hàng.",
      ],
      note: "Lĩnh vực hoạt động và thông tin năng lực thuộc nội dung do doanh nghiệp công bố.",
    },
    {
      slug: "dong-khoi-thuong-hieu-viet",
      name: "Đồng Khởi Thương Hiệu Việt",
      category: "Nền tảng thương hiệu & thương mại",
      categoryId: "dich-vu-doanh-nghiep",
      url: "https://dongkhoithuonghieuviet.com/",
      domain: "dongkhoithuonghieuviet.com",
      type: "Nền tảng nội dung & thương mại",
      client: "Công ty Cổ phần Đồng Khởi Thương hiệu Việt",
      summary:
        "Nền tảng giới thiệu thương hiệu và sản phẩm Việt, kết hợp nội dung truyền thông, danh mục đa ngành, tin tức và các điểm kết nối đối tác.",
      challenge:
        "Doanh nghiệp cần một nền tảng tập trung để truyền thông thương hiệu, giới thiệu nhiều nhóm sản phẩm và tạo không gian kết nối với khách hàng, đối tác.",
      scope: [
        "Tổ chức nội dung theo nhóm thương hiệu, sản phẩm, dự án và tin tức.",
        "Xây dựng danh mục đa ngành cùng các trang thông tin hỗ trợ khách hàng.",
        "Thiết kế responsive và bố trí nhiều điểm liên hệ, tài khoản và giỏ hàng.",
      ],
      outcome: [
        "Thông tin thương hiệu và sản phẩm được tập trung trên tên miền riêng.",
        "Nền tảng có cấu trúc để tiếp tục mở rộng ngành hàng và nội dung truyền thông.",
        "Website đang vận hành công khai và phục vụ hoạt động kết nối khách hàng, đối tác.",
      ],
      note: "Phạm vi được mô tả theo sản phẩm công khai và thông tin khách hàng cung cấp; không công bố số liệu kinh doanh chưa xác nhận.",
    },
    {
      slug: "woodland",
      name: "Woodland",
      category: "Website doanh nghiệp đa ngôn ngữ",
      categoryId: "noi-that-vat-lieu",
      url: "https://woodland.vn",
      domain: "woodland.vn",
      type: "Website doanh nghiệp, 3 ngôn ngữ",
      client: "Công ty TNHH Woodland",
      image:
        "/media/external/pub-af309aad38b04a5288f51e1a0f26f628.r2.dev/home-hero-seed/558244530-122155559126625053-6958421341796759826-n-1776988673733-a64a87be.jpg",
      summary:
        "Website doanh nghiệp ngành gỗ công nghiệp có hệ sản phẩm lớn, nội dung chuyên môn, đa ngôn ngữ và khu vực quản trị.",
      challenge:
        "Cần trình bày năng lực cung ứng, danh mục vật liệu và nội dung chuyên ngành cho nhiều nhóm khách hàng trong nước và quốc tế.",
      scope: [
        "Xây dựng kiến trúc nội dung đa ngôn ngữ Việt, Anh và Trung.",
        "Tổ chức danh mục, sản phẩm, bài viết và dữ liệu doanh nghiệp có hệ thống.",
        "Thiết kế giao diện theo định vị vật liệu xanh và quy mô cung ứng.",
      ],
      outcome: [
        "Danh mục sản phẩm được phân nhóm và có trang chi tiết.",
        "Nội dung doanh nghiệp có thể phục vụ nhiều thị trường.",
        "Website tạo nền tảng cho SEO sản phẩm và nội dung chuyên ngành.",
      ],
      note: "Các số liệu năng lực hiển thị trong website thuộc nội dung do doanh nghiệp công bố.",
    },
    {
      slug: "quoc-bao-computer",
      name: "Quốc Bảo Computer",
      category: "Website bán máy tính & linh kiện",
      categoryId: "thuong-mai-dien-tu",
      url: "https://quocbaocomputer.vn",
      domain: "quocbaocomputer.vn",
      type: "Website bán hàng có cấu hình sản phẩm",
      client: "Công ty TNHH Thương Mại và Công Nghệ Quốc Bảo",
      summary:
        "Website bán PC gaming, linh kiện máy tính và thiết bị văn phòng, có công cụ tự chọn cấu hình, danh mục linh kiện nhiều tầng và dịch vụ lắp ráp, bảo hành.",
      challenge:
        "Ngành linh kiện máy tính có số lượng SKU rất lớn và khách hàng thường muốn tự phối cấu hình theo ngân sách thay vì mua máy dựng sẵn.",
      scope: [
        "Xây dựng danh mục sản phẩm nhiều tầng cho CPU, GPU, RAM, SSD, nguồn, tản nhiệt và thiết bị ngoại vi.",
        "Phát triển công cụ chọn cấu hình để khách tự lắp máy theo nhu cầu.",
        "Tổ chức nhóm máy dựng sẵn theo phân khúc để khách chọn nhanh.",
        "Trình bày dịch vụ lắp ráp, bảo hành, trả góp và giao hàng trong trang sản phẩm.",
      ],
      outcome: [
        "Khách hàng tự phối cấu hình trực tiếp trên website trước khi liên hệ.",
        "Danh mục linh kiện lớn được phân nhóm để tra cứu và lọc thuận tiện.",
        "Hệ thống có nền tảng để tiếp tục mở rộng ngành hàng và chương trình bán hàng.",
      ],
      note: "Giá và tình trạng hàng hóa thuộc nội dung do khách hàng quản lý trên website.",
    },
    {
      slug: "do-hai-vuong-nam",
      name: "Đỗ Hải Vương Nam",
      category: "Website thương hiệu cá nhân",
      categoryId: "thuong-hieu-ca-nhan",
      url: "https://www.vngnam.com/",
      domain: "vngnam.com",
      type: "Website profile & thương hiệu cá nhân",
      client: "Công ty TNHH Kim loại quý Vương Kim Bảo",
      image: "/media/external/vngnam.com/img/VKB15253.jpeg",
      summary:
        "Website profile và thương hiệu cá nhân, kết hợp hồ sơ chuyên môn, câu chuyện, phong thủy ứng dụng và di sản kim hoàn.",
      challenge:
        "Cần xây dựng hình ảnh cá nhân có chiều sâu, thể hiện kinh nghiệm, triết lý và lĩnh vực chuyên môn theo phong cách riêng.",
      scope: [
        "Thiết kế ngôn ngữ hình ảnh sang trọng, giàu tính cá nhân.",
        "Tổ chức hồ sơ, chuyên môn, câu chuyện và nội dung tư vấn có hệ thống.",
        "Tối ưu responsive để giữ trải nghiệm thị giác trên nhiều màn hình.",
      ],
      outcome: [
        "Hình ảnh chuyên gia được thể hiện nhất quán trên một website riêng.",
        "Nội dung chuyên môn và thương hiệu cá nhân dễ tiếp cận hơn.",
        "Website đang vận hành công khai tại tên miền vngnam.com.",
      ],
      note: "Các chức danh và thông tin chuyên môn được trình bày theo nội dung do khách hàng công bố.",
    },
    {
      slug: "lumine-cloud",
      name: "LumineCloud",
      category: "Website dịch vụ hosting game",
      categoryId: "cong-nghe-ha-tang",
      url: "https://luminecloud.com",
      domain: "luminecloud.com",
      type: "Website dịch vụ có bảng cấu hình",
      summary:
        "Website dịch vụ thuê server Minecraft đặt tại Việt Nam, gồm bảng cấu hình phần cứng, bảng giá theo gói, panel quản trị, kiểm tra tương thích phiên bản và khởi tạo server trong 60 giây.",
      challenge:
        "Người thuê server game quan tâm đúng ba thứ: ping bao nhiêu, cấu hình ra sao, giá thế nào. Nếu phải đọc dài dòng mới thấy được, họ sẽ bỏ sang nhà cung cấp khác ngay.",
      scope: [
        "Đưa thông số ping và vị trí máy chủ lên ngay khu vực đầu trang.",
        "Xây dựng bảng cấu hình phần cứng và bảng giá theo gói để khách tự đối chiếu.",
        "Trình bày phần kiểm tra tương thích phiên bản và tính năng panel quản trị.",
        "Thiết kế luồng khởi tạo server nhanh cùng khu vực FAQ và blog hỗ trợ.",
      ],
      outcome: [
        "Khách nắm được ping, cấu hình và giá ngay trong màn hình đầu tiên.",
        "Các gói dịch vụ được so sánh trực tiếp thay vì phải hỏi tư vấn.",
        "Website có nền tảng nội dung để phát triển tìm kiếm tự nhiên.",
      ],
      note: "Thông số máy chủ, giá và chính sách dịch vụ thuộc nội dung do khách hàng công bố và quản lý.",
    },
    {
      slug: "tcs-global",
      name: "TCS Global",
      category: "Website logistics quốc tế",
      categoryId: "logistics-van-tai",
      url: "https://tcsglobal.net",
      domain: "tcsglobal.net",
      type: "Website logistics, song ngữ Anh - Việt",
      summary:
        "Website dịch vụ vận chuyển hàng hóa và mua hộ tuyến Mỹ - Việt Nam, có công cụ tính cước theo trọng lượng, tra cứu đơn hàng và khu vực quản lý vận đơn.",
      challenge:
        "Khách hàng gửi hàng quốc tế cần biết trước chi phí và theo dõi được đơn hàng của mình. Nếu phải nhắn tin hỏi từng lần, khối lượng hỗ trợ sẽ rất lớn.",
      scope: [
        "Xây dựng công cụ tính cước vận chuyển theo trọng lượng ngay trên website.",
        "Phát triển chức năng tra cứu tình trạng đơn hàng cho khách tự kiểm tra.",
        "Tổ chức dịch vụ mua hộ, vận đơn và thanh toán thành các luồng riêng.",
        "Triển khai nội dung song ngữ Anh - Việt phục vụ khách hàng hai thị trường.",
      ],
      outcome: [
        "Khách hàng tự ước tính chi phí và tra cứu đơn hàng mà không cần liên hệ.",
        "Các nhóm dịch vụ vận chuyển và mua hộ được phân tách rõ ràng.",
        "Website phục vụ được cả khách tại Mỹ và khách tại Việt Nam.",
      ],
      note: "Biểu cước và chính sách vận chuyển thuộc nội dung do khách hàng quản lý và cập nhật.",
    },
    {
      slug: "leaf-hotel-danang-ta",
      name: "Leaf Hotel Đà Nẵng - Cổng đại lý",
      category: "Cổng thông tin đối tác khách sạn",
      categoryId: "khach-san-du-lich",
      url: "https://ta.leafhoteldanang.com",
      domain: "ta.leafhoteldanang.com",
      type: "Cổng đối tác có đăng nhập",
      summary:
        "Cổng thông tin dành riêng cho đại lý du lịch của Leaf Hotel Đà Nẵng, cung cấp factsheet, bảng giá đại lý, chính sách, thư viện ảnh và tài liệu bán hàng sau khi đăng nhập.",
      challenge:
        "Bảng giá đại lý và chính sách bán hàng không thể công khai như nội dung thường. Khách sạn cần một nơi để đối tác tự lấy tài liệu thay vì gửi thủ công qua email từng lần.",
      scope: [
        "Xây dựng lớp đăng nhập để giới hạn truy cập cho đối tác được cấp quyền.",
        "Tổ chức kho tài liệu gồm factsheet, bảng giá, chính sách và thư viện ảnh.",
        "Thiết kế luồng tra cứu và tải tài liệu bán hàng thuận tiện cho đại lý.",
        "Tách biệt hoàn toàn khu vực đối tác khỏi website công khai của khách sạn.",
      ],
      outcome: [
        "Đối tác đại lý tự truy cập tài liệu bán hàng bất cứ lúc nào.",
        "Bảng giá và chính sách chỉ hiển thị với tài khoản được cấp quyền.",
        "Khách sạn giảm khối lượng gửi tài liệu thủ công cho từng đại lý.",
      ],
      note: "Đây là khu vực yêu cầu đăng nhập. Nội dung bên trong thuộc quyền quản lý của khách sạn và không được mô tả chi tiết tại đây.",
    },
    {
      slug: "kts-luu-van-vu",
      name: "KTS Lưu Văn Vũ - DeluxHome",
      category: "Website kiến trúc & thương hiệu chuyên gia",
      categoryId: "xay-dung-kien-truc",
      url: "https://ktsluuvanvu.com",
      domain: "ktsluuvanvu.com",
      type: "Website thương hiệu chuyên gia",
      summary:
        "Website thương hiệu cá nhân của KTS Lưu Văn Vũ cùng DeluxHome, trình bày triết lý thiết kế, hệ sinh thái nhà thầu, đội ngũ cộng sự và luồng đặt lịch tư vấn theo ngân sách.",
      challenge:
        "Khách hàng ở phân khúc nhà ở cao cấp chọn kiến trúc sư dựa trên niềm tin cá nhân. Website phải truyền tải được quan điểm nghề nghiệp và năng lực kiểm soát chất lượng, không chỉ khoe hình công trình.",
      scope: [
        "Xây dựng hệ nội dung triết lý thiết kế thành các luận điểm riêng biệt.",
        "Trình bày hệ sinh thái nhà thầu và thương hiệu vật liệu như bằng chứng kiểm soát chất lượng.",
        "Thiết kế khu vực giới thiệu đội ngũ cộng sự theo từng vai trò trong dự án.",
        "Phát triển form liên hệ có phân loại ngân sách dự kiến để lọc nhu cầu từ đầu.",
      ],
      outcome: [
        "Quan điểm nghề nghiệp của kiến trúc sư được thể hiện có chiều sâu.",
        "Năng lực thi công được chứng minh qua hệ sinh thái đối tác và đội ngũ.",
        "Yêu cầu tư vấn được phân loại theo ngân sách ngay khi khách gửi thông tin.",
      ],
      note: "Thông tin đội ngũ, đối tác và thương hiệu vật liệu thuộc nội dung do khách hàng công bố.",
    },
    {
      slug: "miea-noi-that",
      name: "MIEA Nội thất",
      category: "Website nội thất & vật liệu",
      categoryId: "noi-that-vat-lieu",
      url: "https://noithatmiearbv.vn",
      domain: "noithatmiearbv.vn",
      type: "Website catalogue sản phẩm",
      summary:
        "Website thương hiệu nội thất MIEA tại TP.HCM: bàn mặt đá tự nhiên chân inox mạ titan, ghế văn phòng, ghế ăn, két sắt nhập khẩu và cửa — bán giá tận xưởng cho gia đình, kiến trúc sư và đại lý.",
      challenge:
        "Nội thất cao cấp bán giá tận xưởng cần cùng lúc thuyết phục hai nhóm khách: chủ nhà muốn thấy chất liệu thật, còn kiến trúc sư và đại lý cần catalogue, bảng giá và chính sách hợp tác.",
      scope: [
        "Tổ chức sản phẩm theo năm nhóm: bàn mặt đá, ghế văn phòng, ghế ăn, két sắt, cửa.",
        "Xây thư viện công trình đã thực hiện để khách thấy sản phẩm trong không gian thật.",
        "Form tư vấn theo nhóm sản phẩm và form nhận catalogue, bảng giá.",
        "Trang chính sách giá cho đại lý, kiến trúc sư và kết nối Zalo, Messenger, bản đồ showroom.",
      ],
      outcome: [
        "Khách lẻ và khách dự án đi theo hai đường riêng ngay trên một website.",
        "Catalogue và bảng giá trở thành điểm thu thông tin khách hàng tiềm năng.",
        "Showroom Quận 7 có kênh online để dẫn khách tới xem trực tiếp.",
      ],
      note: "Thông tin sản phẩm, giá và chính sách đại lý do khách hàng cung cấp và cập nhật.",
    },
    {
      slug: "danh-ngoc-heavy-transport",
      name: "Danh Ngọc Transport",
      category: "Website vận tải siêu trường siêu trọng",
      categoryId: "logistics-van-tai",
      url: "https://heavy.vantaidaphuongthuc.vn",
      domain: "heavy.vantaidaphuongthuc.vn",
      type: "Website năng lực doanh nghiệp",
      summary:
        "Website năng lực của Công ty TNHH Vận Tải Danh Ngọc — vận chuyển hàng siêu trường siêu trọng, thiết bị công nghiệp và cấu kiện dự án trên toàn quốc, kèm mô phỏng xe và quy trình an toàn.",
      challenge:
        "Khách hàng nhà máy và công trình chỉ giao hàng siêu trọng cho đơn vị chứng minh được đội xe, quy trình an toàn và dự án đã làm. Thông tin này phải đủ kỹ thuật mà vẫn dễ đọc với người ra quyết định.",
      scope: [
        "Trình bày bốn nhóm hàng chính: dầm thép và bê tông, lò hơi và máy sấy, bồn bể công nghiệp, máy thi công.",
        "Bảng thông số đội xe theo tab và mô phỏng 2D chiều dài sàn rơ-moóc từ 14m đến 50m.",
        "Case study vận chuyển dầm 35m theo từng chặng tuyến đường, thư viện ảnh công trình có bộ lọc.",
        "Form yêu cầu báo giá theo loại hàng, khối lượng, kích thước, tuyến đường và hồ sơ năng lực tải về.",
      ],
      outcome: [
        "Khách hàng tự kiểm tra được xe nào phù hợp với kích thước hàng của mình.",
        "Yêu cầu báo giá đến kèm đủ thông số để đội điều phối khảo sát nhanh.",
        "Hồ sơ năng lực có bản online thay cho file gửi tay.",
      ],
      note: "Thông số đội xe, dự án và quy trình an toàn do khách hàng cung cấp.",
    },
    {
      slug: "asteraceae",
      name: "Asteraceae Studio",
      category: "Website thời trang nữ",
      categoryId: "thoi-trang",
      url: "https://asteraceae.vn",
      domain: "asteraceae.vn",
      type: "Website thương mại thời trang",
      summary:
        "Website thương hiệu thời trang nữ Việt Nam theo phong cách Y2K, tập trung vào bộ sưu tập chân váy và các nhóm sản phẩm đi kèm, có bán hàng trong nước và quốc tế.",
      challenge:
        "Thương hiệu có tệp khách hàng trẻ, quyết định mua nhanh theo cảm hứng hình ảnh. Website cần giữ được tinh thần thương hiệu mà vẫn cho phép mua hàng gọn trên điện thoại.",
      scope: [
        "Thiết kế giao diện theo tinh thần Y2K và nhận diện riêng của thương hiệu.",
        "Tổ chức shop theo danh mục sản phẩm và bộ sưu tập song song.",
        "Xây dựng luồng sản phẩm, giỏ hàng và chính sách vận chuyển trong nước, quốc tế.",
        "Tối ưu trải nghiệm mua hàng trên điện thoại và các điểm kết nối mạng xã hội.",
      ],
      outcome: [
        "Hình ảnh thương hiệu được thể hiện nhất quán trên toàn bộ website.",
        "Khách hàng duyệt theo danh mục hoặc theo bộ sưu tập tùy thói quen.",
        "Website phục vụ được cả đơn hàng trong nước và đơn quốc tế.",
      ],
      note: "Sản phẩm, giá và chương trình khuyến mãi thuộc nội dung do khách hàng quản lý.",
    },
    {
      slug: "dastin-hullor",
      name: "Dastin Hullor",
      category: "Website thời trang nam",
      categoryId: "thoi-trang",
      url: "https://dastinhullor.vn",
      domain: "dastinhullor.vn",
      type: "Website thương mại thời trang",
      image:
        "/media/external/pub-ae1372de451948ab9a5024ef261735cc.r2.dev/uploads/2026/1780562656553-banner-2.jpg",
      summary:
        "Website thương mại thời trang nam tối giản, tập trung vào hình ảnh bộ sưu tập, trải nghiệm khám phá sản phẩm và mua hàng trên mobile.",
      challenge:
        "Thương hiệu cần giữ cảm giác cao cấp, tối giản nhưng vẫn bảo đảm danh mục sản phẩm, tìm kiếm và giỏ hàng dễ sử dụng.",
      scope: [
        "Thiết kế không gian hình ảnh lớn với typography tiết chế.",
        "Xây dựng luồng sản phẩm, tìm kiếm, giỏ hàng và chuyển đổi ngôn ngữ.",
        "Tối ưu bố cục responsive cho trải nghiệm mua sắm bằng điện thoại.",
      ],
      outcome: [
        "Nhận diện thời trang được thể hiện nhất quán.",
        "Sản phẩm và bộ sưu tập trở thành trọng tâm của giao diện.",
        "Hệ thống sẵn sàng cập nhật sản phẩm và nội dung theo mùa.",
      ],
      note: "Không công bố số liệu doanh thu hoặc chuyển đổi khi chưa có báo cáo được xác nhận.",
    },
    {
      slug: "raymoire",
      name: "Raymoire",
      category: "Website thời trang nữ cao cấp",
      categoryId: "thoi-trang",
      url: "https://raymoire.com",
      domain: "raymoire.com",
      type: "Website thương mại thời trang",
      summary:
        "Website thời trang nữ tối giản lấy cảm hứng từ hoa văn di sản Việt, kết hợp bộ sưu tập theo mùa, khu vực lookbook, blog và kênh nhận đặt may riêng.",
      challenge:
        "Thương hiệu xây dựng giá trị trên chiều sâu văn hóa của từng hoa văn. Nếu website chỉ hiển thị sản phẩm như shop thông thường, phần câu chuyện làm nên giá phẩm sẽ mất đi.",
      scope: [
        "Thiết kế giao diện tối giản để hoa văn và chất liệu giữ vai trò trung tâm.",
        "Xây dựng khu vực lookbook và nội dung di sản đi kèm mỗi bộ sưu tập.",
        "Tổ chức shop theo bộ sưu tập và danh mục sản phẩm.",
        "Phát triển kênh tiếp nhận yêu cầu đặt may riêng tách khỏi luồng mua hàng thường.",
      ],
      outcome: [
        "Câu chuyện di sản của từng bộ sưu tập được trình bày song song với sản phẩm.",
        "Thương hiệu có không gian riêng cho lookbook và nội dung thương hiệu.",
        "Khách hàng đặt may riêng được dẫn vào luồng liên hệ phù hợp.",
      ],
      note: "Nội dung nghiên cứu hoa văn và thông tin bộ sưu tập do khách hàng cung cấp.",
    },
    {
      slug: "stwatch",
      name: "STWatch",
      category: "Website đồng hồ & dịch vụ",
      categoryId: "thoi-trang",
      url: "https://www.stwatch.vn/",
      domain: "stwatch.vn",
      type: "Website sản phẩm kết hợp dịch vụ",
      client:
        "Công ty TNHH Trung tâm Thu mua Bảo dưỡng Đồng hồ Chính hãng STWatch HCM",
      summary:
        "Website giới thiệu trung tâm thu mua, thẩm định, bảo dưỡng và cung cấp đồng hồ, kết hợp bộ sưu tập sản phẩm với nội dung dịch vụ.",
      challenge:
        "Cần xây dựng hình ảnh chuyên nghiệp cho một ngành đòi hỏi niềm tin cao, đồng thời trình bày rõ sản phẩm, quy trình dịch vụ và hành động đặt lịch.",
      scope: [
        "Phân tách rõ bộ sưu tập đồng hồ và các dịch vụ chuyên môn.",
        "Tăng bằng chứng trực quan qua nội dung showroom, quy trình và kinh nghiệm.",
        "Tối ưu CTA tư vấn, đặt lịch và thông tin địa điểm trên mobile.",
      ],
      outcome: [
        "Sản phẩm và dịch vụ được trình bày thống nhất trong cùng hệ thống.",
        "Khách hàng có thể tìm hiểu trước về thu mua, thẩm định và bảo dưỡng.",
        "Website hỗ trợ điều hướng người dùng tới tư vấn hoặc đặt lịch.",
      ],
      note: "Giá sản phẩm và thông tin dịch vụ thuộc nội dung do khách hàng quản lý trên website.",
    },
    {
      slug: "jk-florist",
      name: "JKFlorist",
      category: "Website hoa tươi cao cấp (Úc)",
      categoryId: "thuong-mai-dien-tu",
      url: "https://jkflorist.com.au",
      domain: "jkflorist.com.au",
      type: "Website bán hàng, thị trường Úc",
      summary:
        "Website tiếng Anh cho thương hiệu hoa tươi cao cấp tại NSW, Úc, có danh mục theo loại hoa và dịp sử dụng, cam kết giao nhanh và gói quà theo yêu cầu.",
      challenge:
        "Hoa tươi là mặt hàng gắn chặt với thời điểm. Khách hàng cần chọn nhanh theo dịp và biết chắc thời gian giao trước khi quyết định đặt.",
      scope: [
        "Tổ chức danh mục song song theo màu hoa và theo dịp sử dụng.",
        "Làm rõ cam kết giao hàng nhanh trong khu vực nội thành ngay tại trang sản phẩm.",
        "Thiết kế giao diện theo định vị tối giản, cao cấp của thương hiệu.",
        "Xây dựng luồng đặt hàng và tùy chọn gói quà cho thị trường Úc.",
      ],
      outcome: [
        "Khách hàng chọn được sản phẩm theo đúng dịp đang cần.",
        "Thông tin thời gian giao hàng hiển thị rõ trước khi đặt.",
        "Thương hiệu có website riêng thay cho việc chỉ bán qua mạng xã hội.",
      ],
      note: "Sản phẩm, giá và chính sách giao hàng thuộc nội dung do khách hàng quản lý.",
    },
    {
      slug: "blue-whale-trading",
      name: "Blue Whale Trading",
      category: "Landing page cộng đồng trading",
      categoryId: "tai-chinh-dau-tu",
      url: "https://bluewhaletradingg.com/",
      domain: "bluewhaletradingg.com",
      type: "Landing page & hệ thống thông tin",
      client: "Công ty Cổ phần Thương mại Dịch vụ và XNK Blue Gia Thành",
      image: "/media/external/bluewhaletradingg.com/og-preview.png",
      summary:
        "Landing page và hệ thống thông tin dành cho cộng đồng trading, giới thiệu sự kiện, công cụ, bảng xếp hạng và nội dung thị trường.",
      challenge:
        "Sản phẩm cần truyền tải hình ảnh công nghệ, làm rõ lợi ích cộng đồng và tổ chức nhiều nhóm thông tin trading trong trải nghiệm thống nhất.",
      scope: [
        "Thiết kế giao diện tối theo định vị công nghệ và thị trường tài chính.",
        "Tổ chức nội dung cộng đồng, sự kiện, công cụ và thông tin chuyên môn.",
        "Tối ưu responsive và các điểm tham gia cộng đồng.",
      ],
      outcome: [
        "Thông tin cộng đồng trading được tập trung trên nền tảng thương hiệu riêng.",
        "Các nhóm tính năng và nội dung được giới thiệu rõ ràng hơn.",
        "Website sẵn sàng mở rộng thêm công cụ và khu vực thành viên.",
      ],
      note: "Website không cấu thành tư vấn đầu tư; TDDTech không công bố hoặc bảo chứng hiệu quả giao dịch.",
    },
    {
      slug: "aplus-billiards",
      name: "Aplus Billiards",
      category: "Website bida & mô hình dịch vụ",
      categoryId: "the-thao",
      url: "https://aplusbilliards.vn/",
      domain: "aplusbilliards.vn",
      type: "Website giới thiệu mô hình kinh doanh",
      client: "Công ty TNHH Bida Aplus Việt Đài",
      summary:
        "Website dành cho mô hình kinh doanh bida, hỗ trợ giới thiệu thương hiệu, dịch vụ, không gian và tiếp cận khách hàng trực tuyến.",
      challenge:
        "Doanh nghiệp cần một điểm chạm trực tuyến phù hợp với ngành giải trí, vừa truyền tải không gian vừa hỗ trợ hoạt động thu hút và phục vụ khách hàng.",
      scope: [
        "Xây dựng giao diện theo hình ảnh thương hiệu và trải nghiệm tại địa điểm.",
        "Tổ chức thông tin dịch vụ, cơ sở vật chất và nội dung dành cho người chơi.",
        "Tối ưu các hành động liên hệ và tra cứu trên thiết bị di động.",
      ],
      outcome: [
        "Thương hiệu có website riêng để giới thiệu mô hình kinh doanh.",
        "Khách hàng có thể tiếp cận thông tin dịch vụ và địa điểm thuận tiện hơn.",
        "Hệ thống có nền tảng để mở rộng tính năng hỗ trợ quản lý và chăm sóc khách hàng.",
      ],
      note: "Các tính năng quản lý cụ thể được xác định theo phạm vi bàn giao; không suy diễn tính năng không hiển thị công khai.",
    },
    {
      slug: "phong-thuy-a-dong",
      name: "Học viện Phong thủy Á Đông",
      category: "Website đào tạo & tư vấn",
      categoryId: "giao-duc-dao-tao",
      url: "https://phongthuyadong.edu.vn",
      domain: "phongthuyadong.edu.vn",
      type: "Website đào tạo có công cụ tra cứu",
      summary:
        "Website học viện đào tạo phong thủy, gồm chương trình học online và offline, dịch vụ tư vấn, công cụ luận giải lá số, xem ngày và trợ lý AI hỗ trợ học viên.",
      challenge:
        "Học viện phục vụ hai nhóm nhu cầu khác nhau: người muốn học bài bản và người chỉ cần tư vấn cho công trình của mình. Một cấu trúc chung sẽ khiến cả hai nhóm đều khó tìm đúng thứ cần.",
      scope: [
        "Phân tách rõ nhánh đào tạo và nhánh dịch vụ tư vấn ngay từ điều hướng chính.",
        "Xây dựng trang chương trình học kèm lịch khai giảng cho từng khóa.",
        "Tích hợp công cụ luận giải lá số, xem ngày và trợ lý AI hỗ trợ 24/7.",
        "Trình bày hồ sơ người sáng lập và hệ thống cơ sở để tăng độ tin cậy.",
      ],
      outcome: [
        "Học viên và khách tư vấn được dẫn vào đúng nhánh nội dung phù hợp.",
        "Lịch khai giảng và thông tin khóa học được cập nhật tập trung.",
        "Công cụ tra cứu giữ người dùng quay lại website thường xuyên hơn.",
      ],
      note: "Nội dung chuyên môn, chương trình đào tạo và thông tin giảng viên do khách hàng cung cấp và chịu trách nhiệm.",
    },
    {
      slug: "hrm-manh-long-hoa-lu",
      name: "HRM Mạnh Long Hoa Lư",
      category: "Web app quản lý nhân sự & lương",
      categoryId: "phan-mem-quan-ly",
      url: "https://hrm.manhlonghoalu.com.vn",
      domain: "hrm.manhlonghoalu.com.vn",
      type: "Web app nội bộ có phân quyền",
      client: "Công ty TNHH May Mạnh Long Hoa Lư",
      summary:
        "Hệ thống quản lý nhân sự và tiền lương nội bộ cho doanh nghiệp may, gồm nhập liệu lương từ Excel, phát hành phiếu lương điện tử và tra cứu phiếu lương theo mã nhân viên.",
      challenge:
        "Doanh nghiệp may có số lượng công nhân lớn, bảng lương làm trên Excel và phát phiếu lương bằng giấy. Cách làm này tốn thời gian mỗi kỳ lương và khó tra cứu lại khi có thắc mắc.",
      scope: [
        "Xây dựng chức năng nhập bảng lương trực tiếp từ file Excel đang dùng.",
        "Phát triển hệ thống phát hành phiếu lương điện tử theo từng kỳ.",
        "Thiết kế luồng đăng nhập bằng mã nhân viên để công nhân tự tra cứu phiếu lương.",
        "Phân quyền giữa bộ phận nhân sự và người lao động.",
      ],
      outcome: [
        "Bộ phận nhân sự phát hành phiếu lương cho toàn bộ nhân viên theo kỳ thay vì in thủ công.",
        "Người lao động tự tra cứu phiếu lương của mình bất cứ lúc nào.",
        "Dữ liệu lương các kỳ được lưu tập trung, tra cứu lại được khi cần đối chiếu.",
      ],
      note: "Đây là hệ thống nội bộ yêu cầu đăng nhập. Dữ liệu nhân sự và tiền lương thuộc quyền quản lý của doanh nghiệp, không được mô tả chi tiết tại đây.",
    },
    {
      slug: "apes-studio",
      name: "A-Pes Studio",
      category: "Website sản phẩm số",
      categoryId: "su-kien-giai-tri",
      url: "https://apesmod.com",
      domain: "apesmod.com",
      type: "Website bán sản phẩm số",
      summary:
        "Website cung cấp chứng chỉ iOS và các gói sản phẩm số theo nhiều mức giá, kèm khu vực nội dung cập nhật phiên bản và hỗ trợ khách hàng qua Zalo.",
      challenge:
        "Sản phẩm số có nhiều gói với quyền lợi và thời hạn bảo hành khác nhau. Nếu không trình bày rõ, khách hàng sẽ phải nhắn tin hỏi lại trước mỗi lần mua.",
      scope: [
        "Xây dựng bảng gói sản phẩm với mức giá, quyền lợi và thời hạn hiển thị rõ ràng.",
        "Tổ chức khu vực nội dung cập nhật phiên bản theo dạng bài viết.",
        "Thiết kế luồng đặt mua và kết nối hỗ trợ qua Zalo.",
        "Tối ưu hiển thị trên điện thoại vì phần lớn người dùng truy cập từ mobile.",
      ],
      outcome: [
        "Các gói sản phẩm được so sánh trực tiếp trên cùng một trang.",
        "Nội dung cập nhật phiên bản có nơi đăng tải cố định.",
        "Khách hàng nắm được quyền lợi từng gói trước khi liên hệ.",
      ],
      note: "Sản phẩm, giá và chính sách bảo hành thuộc nội dung do khách hàng quản lý và chịu trách nhiệm.",
    },
    {
      slug: "q8-store-vietnam",
      name: "Q8 Store Việt Nam",
      category: "Website xưởng sản xuất theo đơn",
      categoryId: "thuong-mai-dien-tu",
      url: "https://q8storevietnam.vn",
      domain: "q8storevietnam.vn",
      type: "Website sản phẩm & nhận đơn gia công",
      summary:
        "Website xưởng laser và CNC tại TP.HCM, trình bày tám nhóm sản phẩm gia công theo yêu cầu, quy trình sản xuất sáu bước và kênh nhận báo giá.",
      challenge:
        "Sản phẩm gia công theo đơn không có giá cố định. Khách hàng cần hình dung được xưởng làm được những gì và quy trình ra sao trước khi gửi yêu cầu báo giá.",
      scope: [
        "Phân nhóm tám dòng sản phẩm gia công thành các danh mục riêng.",
        "Trình bày quy trình sản xuất sáu bước từ tư vấn thiết kế đến giao hàng.",
        "Xây dựng luồng nhận yêu cầu báo giá cho cả đơn lẻ và đơn doanh nghiệp.",
        "Phát triển khu vực blog hướng dẫn và tin tức phục vụ SEO.",
      ],
      outcome: [
        "Năng lực gia công của xưởng được trình bày theo nhóm sản phẩm cụ thể.",
        "Khách hàng hiểu quy trình trước khi gửi yêu cầu, giảm vòng trao đổi.",
        "Website có nền tảng nội dung để phát triển tìm kiếm tự nhiên.",
      ],
      note: "Sản phẩm mẫu và thông tin năng lực sản xuất do khách hàng cung cấp.",
    },
    {
      slug: "shi-thai",
      name: "Shi Thái",
      category: "Website nhà hàng",
      categoryId: "f-and-b",
      url: "https://shithai.com",
      domain: "shithai.com",
      type: "Website nhà hàng có đặt bàn",
      summary:
        "Website nhà hàng Thái tại Thủ Đức, gồm thực đơn phân theo nhóm món, thư viện ảnh không gian, thông tin đặt bàn và tiếp nhận khách đoàn.",
      challenge:
        "Khách chọn quán ăn thường quyết định nhanh dựa trên món và không gian. Website cần cho thấy cả hai trong vài giây đầu, đồng thời dẫn được khách tới bước đặt bàn.",
      scope: [
        "Tổ chức thực đơn theo nhóm món để khách duyệt nhanh trên điện thoại.",
        "Xây dựng thư viện ảnh thể hiện không gian và cách bày món.",
        "Thiết kế luồng đặt bàn và tiếp nhận thông tin khách đoàn.",
        "Hiển thị rõ giờ mở cửa, địa chỉ và các kênh liên hệ.",
      ],
      outcome: [
        "Thực đơn và không gian quán được trình bày tập trung tại một nơi.",
        "Khách đặt bàn trực tiếp từ website thay vì chỉ gọi điện.",
        "Nhà hàng có kênh riêng để giới thiệu ngoài các nền tảng trung gian.",
      ],
      note: "Thực đơn, giá và thông tin phục vụ thuộc nội dung do nhà hàng quản lý.",
    },
    {
      slug: "glambot-vietnam",
      name: "Glambot Việt Nam",
      category: "Website dịch vụ công nghệ sự kiện",
      categoryId: "su-kien-giai-tri",
      url: "https://glambot.com.vn",
      domain: "glambot.com.vn",
      type: "Website dịch vụ có mô phỏng 3D",
      summary:
        "Website dịch vụ quay slow-motion bằng cánh tay robot cho sự kiện, gồm showcase video, quy trình trải nghiệm, mô phỏng 3D thiết bị, thông số kỹ thuật và FAQ.",
      challenge:
        "Đây là dịch vụ mà phần lớn khách hàng chưa từng thấy tận mắt. Mô tả bằng chữ gần như không truyền tải được giá trị, còn thiết bị thì không thể mang đi giới thiệu từng nơi.",
      scope: [
        "Đặt video showcase làm trọng tâm để khách thấy ngay kết quả thực tế.",
        "Xây dựng mô phỏng 3D thiết bị để khách hình dung được cách vận hành tại sự kiện.",
        "Trình bày quy trình trải nghiệm ba bước và thông số kỹ thuật của hệ thống.",
        "Tổ chức khu vực dự án đã thực hiện và FAQ xử lý các thắc mắc thường gặp.",
      ],
      outcome: [
        "Giá trị dịch vụ được thể hiện trực tiếp bằng video thay vì mô tả.",
        "Khách hàng hình dung được thiết bị và cách triển khai trước khi liên hệ.",
        "Các câu hỏi lặp lại về kỹ thuật được xử lý sẵn trên website.",
      ],
      note: "Video, hình ảnh sự kiện và thông số thiết bị do khách hàng cung cấp.",
    },
    {
      slug: "zixue",
      name: "Zixue",
      category: "Nền tảng học tiếng Trung",
      categoryId: "giao-duc-dao-tao",
      url: "https://zixue.vn",
      domain: "zixue.vn",
      type: "Nền tảng học trực tuyến có tài khoản",
      summary:
        "Nền tảng tự học tiếng Trung theo lộ trình HSK, gồm danh sách nhiệm vụ hằng ngày, bốn kỹ năng nghe nói đọc viết, công cụ luyện nói bằng AI và hệ thống theo dõi tiến độ.",
      challenge:
        "Người tự học tiếng Trung thường bỏ cuộc vì không biết hôm nay nên học gì. Nền tảng cần biến lộ trình dài thành việc cụ thể của từng ngày và cho người học thấy được mình đang tiến tới đâu.",
      scope: [
        "Xây dựng lộ trình theo cấp độ HSK, chia nhỏ thành nhiệm vụ hằng ngày.",
        "Tổ chức nội dung theo bốn kỹ năng nghe, nói, đọc, viết.",
        "Tích hợp công cụ luyện nói bằng AI và thư viện tài nguyên học tập.",
        "Phát triển hệ thống tài khoản và theo dõi tiến độ học của từng người.",
      ],
      outcome: [
        "Người học biết chính xác cần làm gì trong mỗi ngày học.",
        "Tiến độ được ghi nhận và hiển thị lại để duy trì động lực.",
        "Nền tảng có cấu trúc sẵn để mở rộng lên các cấp độ HSK cao hơn.",
      ],
      note: "Nội dung giảng dạy và phương pháp học do khách hàng xây dựng và chịu trách nhiệm chuyên môn.",
    },
    {
      slug: "astra-education",
      name: "Astralux Capital",
      category: "Website giáo dục & đào tạo",
      categoryId: "giao-duc-dao-tao",
      url: "https://phongthaidoanhnhan.com/",
      domain: "phongthaidoanhnhan.com",
      type: "Website đào tạo",
      client: "Công ty TNHH Thương mại Dịch vụ Thuỷ Helen",
      image: "/media/external/phongthaidoanhnhan.com/images/og-astra.png",
      summary:
        "Website trung tâm đào tạo về phong thái, nghi thức và thương hiệu cá nhân, hỗ trợ giới thiệu chương trình, chuyên gia và tiếp nhận nhu cầu tư vấn.",
      challenge:
        "Cần thể hiện định vị đào tạo cao cấp, làm rõ nhiều nhóm chương trình và xây dựng hành trình đăng ký phù hợp cho cá nhân, doanh nghiệp và tổ chức.",
      scope: [
        "Xây dựng hệ nội dung giới thiệu công ty, chuyên gia và phương pháp đào tạo.",
        "Phân nhóm chương trình theo đối tượng để người xem tìm đúng nhu cầu.",
        "Bố trí thư viện, dự án, FAQ và form đăng ký tư vấn xuyên suốt website.",
      ],
      outcome: [
        "Hồ sơ đào tạo và chương trình được trình bày tập trung, có hệ thống.",
        "Khách hàng có thể hiểu định vị và tiếp cận đúng chương trình phù hợp.",
        "Website hỗ trợ thu nhận yêu cầu tư vấn học viên và doanh nghiệp.",
      ],
      note: "Các chương trình, chức danh và nội dung đào tạo được mô tả theo thông tin công khai của khách hàng.",
    },
    {
      slug: "lamsala",
      name: "LâmSala",
      category: "Website thương hiệu trà thảo mộc",
      categoryId: "f-and-b",
      url: "https://lamsala.com",
      domain: "lamsala.com",
      type: "Website thương hiệu & sản phẩm",
      summary:
        "Website thương hiệu trà thảo mộc LâmSala, trình bày vùng trồng hữu cơ, quy trình sản xuất 7 bước, hệ chứng nhận ISO 22000, HACCP, VietGAP, OCOP và danh mục sản phẩm.",
      challenge:
        "Thực phẩm sức khỏe là ngành khách hàng hoài nghi nhất. Doanh nghiệp có vùng trồng đạt chuẩn và đủ bộ chứng nhận, nhưng nếu website không trưng ra được thì mọi lời giới thiệu đều giống quảng cáo.",
      scope: [
        "Đưa hệ chứng nhận và quy trình sản xuất 7 bước thành khu vực riêng, không giấu trong trang giới thiệu.",
        "Trình bày vùng trồng hữu cơ và lịch sử 20 năm như bằng chứng năng lực sản xuất.",
        "Tổ chức danh mục sản phẩm theo dòng trà và mục đích sử dụng.",
        "Xây dựng khu vực kiến thức sức khỏe phục vụ tìm kiếm tự nhiên.",
      ],
      outcome: [
        "Chứng nhận và quy trình sản xuất trở thành điểm tin cậy đầu tiên khách nhìn thấy.",
        "Sản phẩm được trình bày theo nhu cầu sử dụng thay vì chỉ liệt kê.",
        "Website có nền tảng nội dung để phát triển SEO ngành thực phẩm sức khỏe.",
      ],
      note: "Chứng nhận, vùng trồng và thông tin sản phẩm thuộc nội dung do doanh nghiệp công bố và chịu trách nhiệm.",
    },
    {
      slug: "ppf-dong-nai",
      name: "PPF Đồng Nai",
      category: "Website dịch vụ chăm sóc xe",
      categoryId: "o-to-xe-may",
      url: "https://ppfdongnai.com",
      domain: "ppfdongnai.com",
      type: "Website dịch vụ có thư viện dự án",
      client: "Công ty TNHH Dịch vụ - Thương mại Tấn Phát Đạt",
      summary:
        "Website trung tâm dán phim bảo vệ sơn, phim cách nhiệt và độ xe, có thư viện dự án phân loại theo thương hiệu phim và luồng đặt lịch kiểm tra xe.",
      challenge:
        "Khách dán PPF bỏ ra số tiền lớn cho thứ gần như vô hình. Họ cần thấy trung tâm đã làm bao nhiêu xe và tay nghề ra sao trước khi giao xe của mình.",
      scope: [
        "Xây dựng thư viện dự án phân loại theo thương hiệu phim để khách duyệt theo dòng sản phẩm.",
        "Tổ chức mỗi dự án thành trang riêng với bộ ảnh thực tế của xe đã thi công.",
        "Phân tách nhóm dịch vụ PPF, phim cách nhiệt và độ xe trong điều hướng.",
        "Thiết kế luồng đặt lịch kiểm tra xe trực tiếp tại trung tâm.",
      ],
      outcome: [
        "Số lượng xe đã thi công trở thành bằng chứng năng lực rõ ràng nhất trên website.",
        "Khách hàng đối chiếu được kết quả thực tế theo từng dòng phim trước khi chọn.",
        "Trung tâm có kênh nhận đặt lịch thay vì chỉ tiếp nhận qua điện thoại.",
      ],
      note: "Hình ảnh dự án và thông tin dịch vụ do khách hàng cung cấp và quản lý.",
    },
    {
      slug: "engmind-study",
      name: "EngMind Study",
      category: "Nền tảng luyện thi tiếng Anh",
      categoryId: "giao-duc-dao-tao",
      url: "https://engmindstudy.vn",
      domain: "engmindstudy.vn",
      type: "Nền tảng học trực tuyến có tài khoản",
      summary:
        "Nền tảng luyện thi tiếng Anh THPTQG, TOEIC, ĐGNL, HSA và V-SAT, gồm lớp học trực tuyến, đề thi thử, khu vực xem lại lỗi sai, thư viện e-book và bộ công cụ tập trung học.",
      challenge:
        "Học sinh luyện thi cần biết mình sai ở đâu chứ không chỉ biết điểm số. Một nền tảng chỉ chấm điểm rồi thôi sẽ không giúp các em tiến bộ giữa các kỳ thi thử.",
      scope: [
        "Xây dựng hệ thống đề thi thử kèm khu vực xem lại và phân tích lỗi sai.",
        "Tổ chức khoá học theo lộ trình và theo mục tiêu kỳ thi của từng nhóm học sinh.",
        "Phát triển thư viện e-book, bản tin từ vựng và tài liệu học tập.",
        "Tích hợp bộ công cụ hỗ trợ học tập gồm đếm ngược kỳ thi, Pomodoro và nhạc tập trung.",
      ],
      outcome: [
        "Học sinh xem lại được lỗi sai của mình sau mỗi đề thay vì chỉ nhận điểm.",
        "Lộ trình học được phân theo trình độ và mục tiêu thi cụ thể.",
        "Nền tảng giữ học sinh quay lại nhờ công cụ học tập đi kèm.",
      ],
      note: "Nội dung giảng dạy, đề thi và tài liệu do khách hàng xây dựng và chịu trách nhiệm chuyên môn.",
    },
    {
      slug: "hoc-nghe-truc-tuyen",
      name: "Trường Dạy Nghề Bách Khoa",
      category: "Nền tảng đào tạo nghề trực tuyến",
      categoryId: "giao-duc-dao-tao",
      url: "https://hocnghetructuyen.edu.vn",
      domain: "hocnghetructuyen.edu.vn",
      altDomains: ["hocnghetructuyen.com"],
      type: "Nền tảng khoá học video",
      summary:
        "Nền tảng dạy nghề kỹ thuật trực tuyến gồm điện lạnh, điện tử ô tô, sửa tivi và phần cứng máy tính, phân theo bốn cấp độ từ cơ bản đến chuyên sâu.",
      challenge:
        "Học nghề kỹ thuật khác học lý thuyết: học viên cần xem đi xem lại thao tác và hỏi được khi vướng ở công trình thật. Một thư viện video đơn thuần không giải quyết được điều đó.",
      scope: [
        "Phân loại khoá học theo nhóm thiết bị và theo bốn cấp độ tay nghề.",
        "Xây dựng hệ thống khoá học video kèm tài liệu kỹ thuật tải về.",
        "Tổ chức khu vực hỗ trợ kỹ thuật trọn đời và hồ sơ chuyên viên tư vấn.",
        "Thiết kế luồng đăng ký và quản lý khoá học đã mua của học viên.",
      ],
      outcome: [
        "Học viên chọn được đúng khoá theo thiết bị và trình độ hiện tại.",
        "Tài liệu kỹ thuật và hỗ trợ đi kèm khoá học thay vì tách rời.",
        "Nền tảng sẵn sàng mở rộng thêm ngành nghề và cấp độ mới.",
      ],
      note: "Nội dung đào tạo và cam kết hỗ trợ do khách hàng xây dựng và chịu trách nhiệm chuyên môn.",
    },
    {
      slug: "doux-nails-lounge",
      name: "Doux Nails Lounge",
      category: "Website salon làm móng (Canada)",
      categoryId: "lam-dep-cham-soc",
      url: "https://douxnail.com",
      domain: "douxnail.com",
      type: "Website thương hiệu, thị trường Canada",
      summary:
        "Website tiếng Anh cho salon làm móng cao cấp tại Vancouver, Canada, xây dựng nhận diện thương hiệu trước ngày khai trương và thu danh sách khách VIP đặt lịch sớm.",
      challenge:
        "Salon chưa khai trương nên chưa có khách, chưa có ảnh thực tế. Website phải dựng được cảm giác thương hiệu và giữ chân người quan tâm cho tới ngày mở cửa.",
      scope: [
        "Thiết kế giao diện theo định vị tối giản, cao cấp của thương hiệu.",
        "Xây dựng luồng đăng ký danh sách VIP để thu khách trước khai trương.",
        "Trình bày nhóm dịch vụ và cam kết vệ sinh, chuẩn màu cho thị trường Bắc Mỹ.",
        "Tổ chức nội dung tiếng Anh phù hợp phân khúc khách khu Kerrisdale.",
      ],
      outcome: [
        "Thương hiệu có mặt trực tuyến trước ngày khai trương.",
        "Danh sách khách quan tâm được thu về ngay trong giai đoạn chuẩn bị.",
        "Website sẵn sàng chuyển sang luồng đặt lịch khi salon đi vào hoạt động.",
      ],
      note: "Thông tin dịch vụ và thời điểm khai trương do khách hàng cung cấp.",
    },
    {
      slug: "nam-key",
      name: "Nam Key - Sửa khóa Sài Gòn",
      category: "Website dịch vụ khẩn cấp 24/7",
      categoryId: "dich-vu-khan-cap",
      url: "https://suakhoanamkey.com",
      domain: "suakhoanamkey.com",
      type: "Website dịch vụ có bảng giá công khai",
      summary:
        "Website dịch vụ sửa khóa và làm chìa 24/7 tại TP.HCM, gồm bảng giá công khai, phạm vi phục vụ 22 quận huyện, quy trình ứng cứu ba bước và thư viện ảnh công việc thực tế.",
      challenge:
        "Khách gọi thợ khóa lúc đang kẹt ngoài cửa, không có thời gian so sánh. Họ chỉ cần biết ngay ba điều: bao lâu tới, giá bao nhiêu, có đáng tin không.",
      scope: [
        "Đưa bảng giá từng loại dịch vụ lên công khai thay vì bắt khách gọi hỏi.",
        "Trình bày phạm vi phục vụ theo 22 quận huyện kèm cam kết thời gian có mặt.",
        "Xây dựng thư viện ảnh công việc thực tế và khu vực đánh giá khách hàng.",
        "Tối ưu toàn bộ trang cho người truy cập bằng điện thoại trong tình huống gấp.",
      ],
      outcome: [
        "Khách nắm được giá và thời gian có mặt ngay trong vài giây đầu.",
        "Phạm vi phục vụ rõ ràng giúp giảm cuộc gọi ngoài khu vực.",
        "Ảnh công việc thực tế và đánh giá tạo cơ sở tin cậy cho dịch vụ khẩn cấp.",
      ],
      note: "Bảng giá, thời gian phục vụ và đánh giá khách hàng thuộc nội dung do khách hàng quản lý.",
    },
    {
      slug: "court-vision",
      name: "Court Vision",
      category: "Website thương hiệu thể thao",
      categoryId: "the-thao",
      url: "https://courtvisionvn.com",
      domain: "courtvisionvn.com",
      type: "Website bán hàng có xác thực NFC",
      summary:
        "Website thương hiệu vợt pickleball cao cấp, bán trực tiếp tới người dùng, có hệ thống xác thực hàng chính hãng bằng chip NFC gắn trong cán vợt.",
      challenge:
        "Vợt cao cấp bán giá vài trăm đô luôn bị làm giả. Thương hiệu gắn chip NFC vào từng cây vợt, nhưng cần một nơi để người mua quét ra và biết chắc hàng thật.",
      scope: [
        "Xây dựng hệ thống xác thực NFC để người mua quét chip và kiểm tra hàng chính hãng.",
        "Kết nối xác thực với kích hoạt bảo hành của từng cây vợt.",
        "Trình bày dòng sản phẩm và thông số kỹ thuật vật liệu carbon.",
        "Thiết kế nội dung tiếng Anh phục vụ bán hàng trực tiếp tới người dùng.",
      ],
      outcome: [
        "Người mua tự xác minh hàng chính hãng bằng điện thoại.",
        "Bảo hành được kích hoạt gắn với từng sản phẩm cụ thể.",
        "Thương hiệu có kênh bán trực tiếp không phụ thuộc sàn thương mại điện tử.",
      ],
      note: "Thông số sản phẩm và chính sách bảo hành do khách hàng công bố và chịu trách nhiệm.",
    },
    {
      slug: "propfirm-edge",
      name: "PropFirmEdge",
      category: "Nền tảng so sánh & đánh giá",
      categoryId: "tai-chinh-dau-tu",
      url: "https://propfirmedge.org",
      domain: "propfirmedge.org",
      type: "Nền tảng dữ liệu có công cụ so sánh",
      summary:
        "Nền tảng tiếng Anh đánh giá và so sánh các công ty prop trading, gồm ma trận so sánh nhiều tiêu chí, bộ lọc theo luật giao dịch, kho đánh giá và mã giảm giá.",
      challenge:
        "Người dùng phải đối chiếu hàng chục công ty trên nhiều tiêu chí khác nhau như chi phí, mức rút vốn, tỷ lệ chia lợi nhuận. Đọc từng bài đánh giá rời rạc thì không so sánh nổi.",
      scope: [
        "Xây dựng ma trận so sánh cho phép đặt nhiều công ty cạnh nhau trên cùng bộ tiêu chí.",
        "Phát triển bộ lọc theo luật giao dịch để người dùng thu hẹp lựa chọn.",
        "Tổ chức kho bài đánh giá và hệ thống mã giảm giá theo từng công ty.",
        "Xây dựng khu vực hướng dẫn và FAQ phục vụ tìm kiếm tự nhiên.",
      ],
      outcome: [
        "Người dùng so sánh trực tiếp nhiều công ty thay vì đọc rời từng bài.",
        "Bộ lọc giúp thu hẹp lựa chọn theo đúng cách giao dịch của từng người.",
        "Nền tảng có cấu trúc nội dung để phát triển SEO tiếng Anh dài hạn.",
      ],
      note: "Nội dung đánh giá và dữ liệu so sánh do khách hàng quản lý. Website không cấu thành tư vấn đầu tư; TDDTech không bảo chứng hiệu quả giao dịch.",
    },
    {
      slug: "farmstay-viet-nam",
      name: "Farmstay Việt Nam",
      category: "Website mỹ phẩm Hàn Quốc",
      categoryId: "thuong-mai-dien-tu",
      url: "https://farmstayvvg.com",
      domain: "farmstayvvg.com",
      client: "Công ty TNHH Very Very Good",
      type: "Website thương hiệu & catalogue sản phẩm",
      summary:
        'Website chính thức tại Việt Nam của thương hiệu mỹ phẩm Hàn Quốc Farmstay — "Smart Naturalism": catalogue các dòng Tea Tree Biome, Collagen, Hyaluronic Acid, Retinol, Black Snail & Peptide9, nối thẳng tới gian hàng trên sàn.',
      challenge:
        "Thương hiệu bán chủ yếu qua Shopee, Lazada, TikTok Shop nên cần một nơi chính thức để khách kiểm tra sản phẩm thật, hiểu từng dòng sản phẩm hợp loại da nào rồi mới bấm sang sàn mua.",
      scope: [
        "Catalogue theo dòng sản phẩm và nhóm công dụng, có trang chi tiết và giá niêm yết.",
        "Bộ lọc theo danh mục và dòng sản phẩm, khu vực sản phẩm nổi bật và banner khuyến mãi.",
        "Liên kết tới gian hàng chính hãng trên Shopee, Lazada, TikTok Shop và các kênh mạng xã hội.",
        "Trang giới thiệu thương hiệu, nhà sản xuất và đơn vị phân phối tại Việt Nam.",
      ],
      outcome: [
        "Thương hiệu có kênh chính thức đứng tên doanh nghiệp, không phụ thuộc hoàn toàn vào sàn.",
        "Khách chọn đúng dòng sản phẩm theo nhu cầu da trước khi sang sàn đặt hàng.",
        "Nền tảng sẵn sàng thêm giỏ hàng riêng khi doanh nghiệp muốn bán trực tiếp.",
      ],
      note: "Thông tin sản phẩm, công dụng và giá do đơn vị phân phối cung cấp.",
    },
    {
      slug: "md-decor-pro",
      name: "MD Decor Pro",
      category: "Website hoàn thiện bề mặt & sơn hiệu ứng",
      categoryId: "noi-that-vat-lieu",
      url: "https://mddecorpro.com",
      domain: "mddecorpro.com",
      type: "Website dịch vụ song ngữ",
      summary:
        'Website song ngữ Việt – Anh của MD Decor Pro tại Đà Nẵng — "The art of finishing": sơn hiệu ứng đá travertine, marble, bê tông, kim loại, venetian và bề mặt theo yêu cầu cho nhà ở, cửa hàng, văn phòng, nhà hàng.',
      challenge:
        "Sơn hiệu ứng là dịch vụ khách khó hình dung qua lời tả: họ cần thấy bề mặt hoàn thiện trong công trình thật và hiểu quy trình từ mẫu thử đến bàn giao trước khi đặt lịch khảo sát.",
      scope: [
        "Trang riêng cho từng nhóm hiệu ứng: đá, bê tông công nghiệp, kim loại và ngọc trai, kết cấu đặc biệt.",
        "Thư viện công trình: căn hộ, cửa hàng mỹ phẩm, văn phòng điều hành, nhà hàng.",
        "Trình bày quy trình bốn bước: tư vấn, làm mẫu, thi công, bàn giao.",
        "Song ngữ Việt – Anh, form yêu cầu báo giá theo dịch vụ và nút gọi nhanh.",
      ],
      outcome: [
        "Khách thấy được chất liệu hoàn thiện trước khi liên hệ, cuộc tư vấn đi thẳng vào mẫu.",
        "Yêu cầu báo giá đến kèm loại hiệu ứng khách quan tâm.",
        "Bản tiếng Anh mở đường tới khách nước ngoài và dự án khách sạn, nhà hàng tại Đà Nẵng.",
      ],
      note: "Hình ảnh công trình và nội dung dịch vụ do khách hàng cung cấp.",
    },
    {
      slug: "vinfast-huy-hieu",
      name: "VinFast Huy Hiệu",
      category: "Website đại lý xe máy điện",
      categoryId: "thuong-mai-dien-tu",
      url: "https://xemaydienvinfast.vn",
      domain: "xemaydienvinfast.vn",
      client: "Công ty TNHH và Dịch vụ Huy Hiệu",
      type: "Website bán hàng",
      summary:
        "Website bán hàng của đại lý xe máy điện VinFast Huy Hiệu tại Hà Nội: 33 mẫu xe kèm thông số và giá, xem xe 360°, đặt lịch lái thử, giỏ hàng và hệ thống cửa hàng, xưởng dịch vụ.",
      challenge:
        "Khách mua xe điện thường so nhiều mẫu, hỏi về pin, bảo hành, trả góp rồi mới tới cửa hàng. Website cần trả lời đủ những câu đó và kéo khách tới bước lái thử hoặc đặt mua.",
      scope: [
        "Catalogue 33 mẫu xe máy điện với thông số kỹ thuật, giá niêm yết và trang chi tiết từng mẫu.",
        "Xem xe 360° và khu vực thông tin pin, đổi pin, bảo hành, ứng dụng theo dõi xe.",
        "Đặt lịch lái thử, form tư vấn theo khu vực nhận xe và giỏ hàng.",
        "Trang hệ thống cửa hàng và xưởng dịch vụ, tin tức khuyến mãi, tuyển dụng.",
      ],
      outcome: [
        "Khách tự so mẫu và giá trước khi gọi, cuộc tư vấn đi thẳng vào mẫu đã chọn.",
        "Lịch lái thử và yêu cầu tư vấn về tận đội bán hàng theo khu vực.",
        "Đại lý có kênh bán hàng riêng đứng tên doanh nghiệp, cập nhật mẫu mới chủ động.",
      ],
      note: "Thông tin sản phẩm, giá, chính sách bảo hành do đại lý cung cấp và chịu trách nhiệm.",
    },
  ],
  Sn = 150,
  kd = 4,
  gg = 5,
  jd = "/media/tddtech/projects",
  Nd = "v2",
  Td = [640, 1280, 1920, 2880],
  Vn = (e, n) => `${jd}/${Nd}/${e}-${n}.webp`,
  Sd = (e) => Vn(e, 1920),
  pg = (e) => Vn(e, 2880),
  qd = (e) => Vn(e, 640),
  Cd = (e) => Td.map((n) => `${Vn(e, n)} ${n}w`).join(", "),
  xi = [
    "dastinhullor.vn",
    "luminecloud.com",
    "hqngroup.vn",
    "ppfdongnai.com",
    "ktsluuvanvu.com",
    "brothersrenovate.com",
    "asteraceae.vn",
    "quocbaocomputer.vn",
    "dongkhoithuonghieuviet.com",
    "engmindstudy.vn",
    "tcsglobal.net",
    "hocnghetructuyen.edu.vn",
    "raymoire.com",
    "jkflorist.com.au",
  ],
  Ed = [
    "xemaydienvinfast.vn",
    "aplusbilliards.vn",
    "noithatmiearbv.vn",
    "dastinhullor.vn",
    "asteraceae.vn",
    "hqngroup.vn",
    "ppfdongnai.com",
    "farmstayvvg.com",
    "luminecloud.com",
    "engmindstudy.vn",
    "courtvisionvn.com",
    "tcsglobal.net",
    "hocnghetructuyen.edu.vn",
    "mddecorpro.com",
    "vngnam.com",
  ],
  Zr = Ed.map((e) =>
    Rn.find((n) => n.domain.replace(/^www\./, "") === e),
  ).filter(Boolean),
  xg = [
    ...xi.map((e) => Rn.find((n) => n.domain === e)).filter(Boolean),
    ...Rn.filter((e) => !xi.includes(e.domain)),
  ],
  Md = () => {
    var x;
    const e = Zt(),
      { resolvedTheme: n } = Bn(),
      s = n === "dark" ? "dark" : "light",
      [i, a] = f.useState(() => window.matchMedia(Pn).matches),
      [o, r] = f.useState(!1),
      [l, c] = f.useState(!1),
      h = f.useRef(null),
      g = f.useRef(null),
      p = !!((x = navigator.connection) != null && x.saveData),
      d = !!e || p,
      m = bd[s][i ? "mobile" : "desktop"];
    (f.useEffect(() => {
      const v = window.matchMedia(Pn),
        w = () => a(v.matches);
      return (
        v.addEventListener("change", w),
        () => v.removeEventListener("change", w)
      );
    }, []),
      f.useEffect(() => {
        let v = !1;
        const w = () => {
          const y = () => {
            v || r(!0);
          };
          typeof window.requestIdleCallback == "function"
            ? window.requestIdleCallback(y, { timeout: 2500 })
            : setTimeout(y, 600);
        };
        return (
          document.readyState === "complete"
            ? w()
            : window.addEventListener("load", w, { once: !0 }),
          () => {
            ((v = !0), window.removeEventListener("load", w));
          }
        );
      }, []),
      f.useEffect(() => c(!1), [m.mp4, d]),
      f.useEffect(() => {
        const v = h.current;
        if (!v || d || !o || typeof IntersectionObserver > "u") return;
        const w = new IntersectionObserver(([y]) => {
          const N = g.current;
          N && (y.isIntersecting ? N.play().catch(() => {}) : N.pause());
        });
        return (w.observe(v), () => w.disconnect());
      }, [d, o, m.mp4]));
    const u = (v) => {
      ((g.current = v),
        v &&
          ((v.muted = !0),
          v.setAttribute("muted", ""),
          v.play().catch(() => {})));
    };
    return t.jsxs("div", {
      ref: h,
      "aria-hidden": "true",
      className: "pointer-events-none absolute inset-0 overflow-hidden",
      children: [
        o &&
          (d
            ? t.jsx(
                "img",
                {
                  src: m.poster,
                  alt: "",
                  decoding: "async",
                  onLoad: () => c(!0),
                  className:
                    "h-full w-full object-cover transition-opacity duration-700",
                  style: { opacity: l ? 1 : 0 },
                },
                m.poster,
              )
            : t.jsxs(
                "video",
                {
                  ref: u,
                  autoPlay: !0,
                  muted: !0,
                  loop: !0,
                  playsInline: !0,
                  preload: "auto",
                  disablePictureInPicture: !0,
                  onPlaying: () => c(!0),
                  className:
                    "h-full w-full object-cover transition-opacity duration-1000",
                  style: { opacity: l ? 1 : 0 },
                  children: [
                    m.webm &&
                      t.jsx("source", { src: m.webm, type: "video/webm" }),
                    t.jsx("source", { src: m.mp4, type: "video/mp4" }),
                  ],
                },
                m.mp4,
              )),
        t.jsx("div", {
          className:
            "absolute inset-0 bg-slate-50/45 dark:bg-[rgba(9,13,21,0.45)] md:bg-transparent md:bg-gradient-to-r md:from-slate-50/80 md:via-slate-50/35 md:to-transparent md:dark:bg-transparent md:dark:from-[rgba(9,13,21,0.8)] md:dark:via-[rgba(9,13,21,0.3)] md:dark:to-transparent",
        }),
        t.jsx("div", {
          className:
            "absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-slate-50 dark:to-[hsl(220_40%_6%)]",
        }),
      ],
    });
  },
  fi = [5, 8, 18, 12, 20, 4, 3, 6, 13, 17, 15, 7, 9, 2, 19, 1, 11, 10, 14, 16],
  Ld = [
    {
      value: `${Sn}+`,
      label: "dự án đã triển khai, tính cả trước khi lập công ty",
    },
    {
      value: "100%",
      label: "Mã nguồn, tên miền, dữ liệu đứng tên doanh nghiệp",
    },
  ],
  _d = (e) => (e < 640 ? 240 : e < 1024 ? 300 : 360),
  Ad = ({ lowPower: e }) => {
    const n = e ? fi.slice(0, 10) : fi;
    return t.jsxs("div", {
      className: "relative mt-16 lg:mt-20",
      "aria-hidden": "true",
      children: [
        t.jsx(Qr, {
          items: n,
          getKey: (s) => String(s),
          cardWidth: _d,
          speed: 34,
          renderItem: (s) =>
            t.jsxs("figure", {
              className:
                "group relative h-full w-full overflow-hidden rounded-[14px] shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_rgba(0,180,216,0.5)] dark:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)]",
              children: [
                t.jsx("img", {
                  src: Kr(s),
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                  className: "h-full w-full object-cover object-top",
                }),
                t.jsx("span", {
                  className:
                    "pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-0",
                  style: { backgroundColor: "rgba(15,23,42,0.08)" },
                }),
              ],
            }),
        }),
        t.jsx("div", {
          className: "container mx-auto px-4",
          children: t.jsxs("a", {
            href: "/#kho-giao-dien",
            className:
              "group mt-8 inline-flex items-center gap-3 border-b-2 border-slate-900 pb-1.5 text-sm font-bold text-slate-900 transition-colors hover:border-primary hover:text-primary dark:border-white dark:text-white",
            children: [
              "Xem kho mẫu giao diện",
              t.jsx(lr, {
                className:
                  "h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5",
              }),
            ],
          }),
        }),
      ],
    });
  },
  $d = () => {
    const e = Zt(),
      { resolvedTheme: n } = Bn(),
      s = n === "dark",
      i = Rr(),
      a = [0.22, 1, 0.36, 1],
      o = (r = 0) => ({
        initial: e ? { opacity: 0 } : { opacity: 0, y: 26 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.65, delay: r, ease: a },
      });
    return t.jsxs("section", {
      id: "home",
      className:
        "relative overflow-hidden border-b border-slate-200 pb-16 pt-36 dark:border-white/[0.06] sm:pt-40 lg:pb-24 lg:pt-44",
      children: [
        t.jsx(Md, {}),
        t.jsx("div", {
          className:
            "pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-[120px]",
        }),
        t.jsx("div", {
          className:
            "pointer-events-none absolute inset-0 opacity-50 max-md:hidden bg-[linear-gradient(to_right,rgba(0,180,216,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,180,216,0.04)_1px,transparent_1px)] bg-[size:56px_56px] dark:bg-[linear-gradient(to_right,rgba(0,212,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,212,255,0.05)_1px,transparent_1px)]",
        }),
        t.jsx("div", {
          className: "container relative mx-auto px-4",
          children: t.jsxs("div", {
            className:
              "grid gap-9 lg:grid-cols-[1.35fr_1fr] lg:gap-x-16 lg:gap-y-0",
            children: [
              t.jsxs("div", {
                className: "min-w-0",
                children: [
                  t.jsx(q.div, {
                    ...o(0),
                    children: t.jsx(Na, { children: "Thiết kế & phát triển" }),
                  }),
                  t.jsxs("h1", {
                    className:
                      "mt-7 font-black uppercase leading-[0.96] tracking-[-0.04em] text-slate-900 dark:text-white",
                    children: [
                      t.jsx(q.span, {
                        ...o(0.06),
                        className: "block",
                        style: { fontSize: "clamp(2.6rem, 11vw, 6.4rem)" },
                        children: "Website",
                      }),
                      t.jsxs(q.span, {
                        ...o(0.12),
                        className: "flex flex-wrap items-baseline",
                        style: {
                          columnGap: "clamp(0.75rem, 2.5vw, 2rem)",
                          rowGap: "0.25rem",
                        },
                        children: [
                          t.jsx("span", {
                            style: { fontSize: "clamp(2.6rem, 11vw, 6.4rem)" },
                            children: "là",
                          }),
                          t.jsxs("span", {
                            className: "relative inline-block",
                            children: [
                              t.jsx("span", {
                                "aria-hidden": "true",
                                className: "absolute rounded-sm",
                                style: {
                                  left: "-0.75rem",
                                  right: "-0.75rem",
                                  ...(s
                                    ? { top: "0.04em", bottom: "-0.02em" }
                                    : { bottom: "24%", height: "40%" }),
                                  rotate: "-2deg",
                                  backgroundColor: "#d4ff3f",
                                },
                              }),
                              t.jsx("span", {
                                className: "relative z-10 leading-[0.9]",
                                style: {
                                  fontSize: "clamp(2.6rem, 11vw, 6.4rem)",
                                  color: "#0f172a",
                                  paintOrder: "stroke fill",
                                  WebkitTextStrokeWidth: s ? "0.05em" : "0",
                                  WebkitTextStrokeColor: "#d4ff3f",
                                },
                                children: "tài sản",
                              }),
                            ],
                          }),
                        ],
                      }),
                      t.jsxs(q.span, {
                        ...o(0.18),
                        className:
                          "relative mt-4 inline-block font-extrabold normal-case tracking-tight text-primary",
                        style: { fontSize: "clamp(1.5rem, 5.5vw, 3rem)" },
                        children: [
                          "số của doanh nghiệp.",
                          t.jsx("svg", {
                            "aria-hidden": "true",
                            viewBox: "0 0 320 22",
                            preserveAspectRatio: "none",
                            className:
                              "pointer-events-none absolute -bottom-1 left-0 h-[0.42em] w-full overflow-visible",
                            children: t.jsx(q.path, {
                              d: "M4 13.5C42 6.5 96 4.2 148 6.1c42 1.5 88 5.4 126 10.4C240 13.8 196 11.2 152 10.6c-48-.7-102 1.4-148 7.2",
                              fill: "currentColor",
                              className: "text-primary/70",
                              initial: e
                                ? { opacity: 1 }
                                : { pathLength: 0, opacity: 0 },
                              animate: { pathLength: 1, opacity: 1 },
                              transition: {
                                duration: 0.9,
                                delay: 0.85,
                                ease: "easeOut",
                              },
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              t.jsx("div", {
                className:
                  "min-w-0 lg:flex lg:items-end lg:border-l lg:border-slate-200 lg:pb-10 lg:pl-10 lg:dark:border-white/10",
                children: t.jsx(q.div, {
                  ...o(0.26),
                  className: "max-w-xl",
                  children: t.jsx("p", {
                    className:
                      "text-base leading-8 text-slate-600 dark:text-white/60 lg:text-[17px]",
                    children:
                      "Đa số chủ doanh nghiệp coi website là khoản chi làm một lần rồi để đó. TDDTech coi đó là tài sản: xây đúng nền móng, anh chị sở hữu 100%, rồi chúng tôi bảo vệ, giữ gìn và phát triển nó mỗi tháng để website mang về khách hàng.",
                  }),
                }),
              }),
              t.jsx("div", {
                className: "min-w-0 lg:pt-10",
                children: t.jsxs(q.div, {
                  ...o(0.32),
                  className: "flex flex-wrap items-center",
                  style: { columnGap: "2.5rem", rowGap: "1rem" },
                  children: [
                    t.jsxs(Re, {
                      size: "lg",
                      className:
                        "group h-14 gap-3 rounded-full bg-slate-900 px-8 text-base font-bold text-white shadow-[0_10px_30px_-8px_rgba(15,23,42,0.5)] transition-colors hover:bg-primary dark:bg-white dark:text-slate-950 dark:hover:bg-primary dark:hover:text-white",
                      onClick: () => window.open(site.zaloHref, "_blank"),
                      children: [
                        t.jsx("img", {
                          src: "/zalo-icon.png",
                          alt: "",
                          className: "h-5 w-5 rounded-sm",
                        }),
                        "Trao đổi về dự án",
                        t.jsx("span", {
                          className:
                            "flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1 dark:bg-slate-950/10",
                          children: t.jsx(_n, { className: "h-4 w-4" }),
                        }),
                      ],
                    }),
                    t.jsxs("a", {
                      href: "/du-an",
                      className:
                        "group inline-flex items-center gap-2 border-b-2 border-slate-900 pb-1.5 text-base font-bold text-slate-900 transition-colors hover:border-primary hover:text-primary dark:border-white dark:text-white",
                      children: [
                        "Xem dự án đã thực hiện",
                        t.jsx(_n, {
                          className:
                            "h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              t.jsx("div", {
                className:
                  "min-w-0 lg:border-l lg:border-slate-200 lg:pl-10 lg:pt-10 lg:dark:border-white/10",
                children: t.jsx(q.dl, {
                  ...o(0.4),
                  className:
                    "grid grid-cols-2 gap-x-8 gap-y-6 border-t border-slate-200 pt-7 dark:border-white/10 lg:-mt-10 lg:pt-10",
                  children: Ld.map((r) =>
                    t.jsxs(
                      "div",
                      {
                        children: [
                          t.jsx("dt", {
                            className:
                              "text-[1.75rem] font-black leading-none text-slate-900 dark:text-white",
                            children: r.value,
                          }),
                          t.jsx("dd", {
                            className:
                              "mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-white/45",
                            children: r.label,
                          }),
                        ],
                      },
                      r.label,
                    ),
                  ),
                }),
              }),
            ],
          }),
        }),
        t.jsx(Ad, { reduce: !!e, lowPower: i }),
      ],
    });
  },
  ha = new Set(),
  da = new WeakSet(),
  Jr = (e) => (
    ha.add(e),
    e.then(
      () => da.add(e),
      () => da.add(e),
    ),
    e
  ),
  Pd = (e) =>
    new Promise((n) => {
      const s = () => (e-- <= 0 ? n() : requestAnimationFrame(s));
      requestAnimationFrame(s);
    }),
  Rd = (e) => {
    for (let n = e; n && n !== document.body; n = n.parentElement)
      if (getComputedStyle(n).display === "none") return !1;
    return !0;
  },
  Id = (e) => {
    const n = e.getBoundingClientRect();
    return (
      n.width > 2 &&
      n.height > 2 &&
      n.bottom > 0 &&
      n.top < window.innerHeight * 1.5
    );
  },
  Od = (e = 4e3) =>
    new Promise((n) => {
      const s = performance.now();
      let i = s,
        a = 0;
      const o = (r) => {
        if (((a = r - i > 40 ? 0 : a + 1), (i = r), a >= 28 || r - s > e)) {
          n();
          return;
        }
        requestAnimationFrame(o);
      };
      requestAnimationFrame(o);
    }),
  to = async (e, n, s = 2e4) => {
    var l;
    const i = performance.now();
    await Pd(2);
    const a = Array.from(document.images).filter(
        (c) =>
          (c.currentSrc || c.src || c.dataset.src) &&
          !c.closest(".page-loader") &&
          Rd(c),
      ),
      o = new Set();
    a.forEach((c) => {
      const h = () => {
          o.add(c);
        },
        g = () => (typeof c.decode == "function" ? c.decode().then(h, h) : h());
      (c.loading === "lazy" && (c.loading = "eager"),
        c.complete && c.naturalWidth
          ? g()
          : c.complete
            ? h()
            : (c.addEventListener("load", g, { once: !0 }),
              c.addEventListener("error", h, { once: !0 })));
    });
    let r = !document.fonts || document.fonts.status === "loaded";
    return (
      (l = document.fonts) == null ||
        l.ready.then(() => {
          r = !0;
        }),
      new Promise((c) => {
        const h = () => {
          const g = Array.from(ha),
            p = g.filter((x) => da.has(x)).length,
            d = Array.from(
              document.querySelectorAll("[data-page-loading]"),
            ).filter(Id).length,
            m = a.length + g.length + 2,
            u = o.size + p + (r ? 1 : 0) + (d === 0 ? 1 : 0);
          if (
            (e(u / m),
            n == null ||
              n(
                a.length
                  ? `Đang tải hình ảnh ${o.size}/${a.length}`
                  : "Đang tải trang…",
              ),
            u >= m || performance.now() - i > s)
          ) {
            (ha.clear(),
              e(0.97),
              n == null || n("Đang hoàn tất…"),
              Od().then(() => {
                (e(1), c());
              }));
            return;
          }
          window.setTimeout(h, 80);
        };
        h();
      })
    );
  },
  ls = new Set(),
  Wd = (e) => {
    let n = null,
      s = 1 / 0;
    const i = window.innerHeight / 2;
    return (
      ls.forEach((a) => {
        const o = a.getBoundingClientRect(),
          r = Math.abs(o.top + o.height / 2 - i);
        r < s && ((s = r), (n = a));
      }),
      n === e
    );
  },
  zd = (e, n) => {
    const s = ne(n);
    switch (e) {
      case "ping":
        A.ping(s, { gain: 0.04 });
        break;
      case "pop":
        A.pop(s, { gain: 0.045 });
        break;
      case "thump":
        A.thump(s, { gain: 0.14 });
        break;
      case "bell":
        A.bell(s, nt(7, 5), { gain: 0.035, decay: 1.4 });
        break;
      case "shimmer":
        A.shimmer(s, { gain: 0.022, count: 5 });
        break;
      case "click":
        A.click(s, { gain: 0.05 });
        break;
      case "tick":
        A.tick(s, { gain: 0.03 });
        break;
      default:
        A.air(s, { dur: 0.55, gain: 0.045 });
    }
  },
  bi = (e) =>
    e
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map((n) => {
        const s = n.indexOf(":");
        return [n.slice(0, s), n.slice(s + 1)];
      }),
  Ee = ({
    cues: e,
    duration: n,
    label: s,
    className: i = "",
    style: a,
    children: o,
  }) => {
    const r = f.useRef(null);
    return (
      f.useEffect(() => {
        const l = r.current;
        if (!l) return;
        const c = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
          h = [],
          g = (T, C) => {
            h.push(window.setTimeout(T, C));
          },
          p = () => {
            (h.forEach((T) => window.clearTimeout(T)), (h.length = 0));
          },
          d = (T) => Array.from(l.querySelectorAll(T)),
          m = (T, C) => d(`[${T}~="${C}"]`);
        let u = !1,
          x = 0;
        const v = () => u && x <= 2 && Wd(l),
          w = (T, C) => {
            const _ =
              C.dataset.vnd !== void 0
                ? Math.round(T).toLocaleString("vi-VN")
                : T.toFixed(Number(C.dataset.dec || 0));
            return (C.dataset.prefix || "") + _ + (C.dataset.suffix || "");
          },
          y = (T) => {
            const [C, _] = T.dataset.count.split(":").map(Number);
            if (!u) {
              T.textContent = w(_, T);
              return;
            }
            const D = performance.now(),
              B = Number(T.dataset.ms || 1e3),
              z = v() ? ne(T) : null;
            let st = 0;
            const P = (R) => {
              if (!u) return;
              const et = Math.min(1, (R - D) / B);
              ((T.textContent = w(C + (_ - C) * (1 - Math.pow(1 - et, 3)), T)),
                z &&
                  et < 1 &&
                  R - st > 60 + et * 90 &&
                  ((st = R), A.tick(z, { f: 1100 + et * 1500, gain: 0.022 })),
                et < 1 && requestAnimationFrame(P));
            };
            requestAnimationFrame(P);
          },
          N = (T) => {
            const C = T.dataset.type;
            if (!u) {
              T.textContent = C;
              return;
            }
            let _ = 0;
            const D = v() ? ne(T) : null,
              B = () => {
                u &&
                  ((_ += 1),
                  (T.textContent = C.slice(0, _)),
                  D && C[_ - 1] !== " " && A.key(D, { gain: 0.04 }),
                  _ < C.length && g(B, 38 + Math.random() * 46));
              };
            g(B, 80);
          };
        d("[data-text]").forEach((T) => {
          var C;
          (C = T.dataset).text0 ?? (C.text0 = T.textContent ?? "");
        });
        const j = d("[data-move]").map((T) => ({
            el: T,
            map: new Map(bi(T.dataset.move)),
          })),
          k = (T, C) => {
            const [_, D] = C.split(",");
            ((T.style.left = `${_}%`), (T.style.top = `${D}%`));
          },
          b = (T) => {
            if (
              ((l.dataset.stage = T),
              m("data-cue", T).forEach((P) => {
                (P.classList.add("on"),
                  P.dataset.count && y(P),
                  P.dataset.type && N(P));
              }),
              m("data-cue-out", T).forEach((P) => P.classList.add("gone")),
              m("data-press", T).forEach((P) => {
                (P.classList.remove("pressed"),
                  P.offsetWidth,
                  P.classList.add("pressed"));
              }),
              d("[data-text]").forEach((P) => {
                const R = new Map(bi(P.dataset.text)).get(T);
                R !== void 0 &&
                  ((P.textContent = R.replace(/_/g, " ")),
                  P.classList.remove("bump"),
                  P.offsetWidth,
                  P.classList.add("bump"));
              }),
              j.forEach(({ el: P, map: R }) => {
                const et = R.get(T);
                if (et !== void 0) {
                  if (et === "hide") {
                    P.classList.remove("show");
                    return;
                  }
                  (k(P, et),
                    P.classList.add("show"),
                    et.endsWith(",c") &&
                      u &&
                      g(() => {
                        (P.classList.add("click"),
                          v() && A.click(ne(P), { gain: 0.05 }),
                          g(() => P.classList.remove("click"), 420));
                      }, 720));
                }
              }),
              !v())
            )
              return;
            const C = m("data-cue", T),
              _ = C.find((P) => P.dataset.sfx),
              D = m("data-press", T)[0];
            if (_) {
              zd(_.dataset.sfx, _);
              return;
            }
            if (D) {
              A.click(ne(D), { gain: 0.05 });
              return;
            }
            const B = C.find((P) => P.classList.contains("x-fly")),
              K = C.find((P) => P.classList.contains("x-pop")),
              z = C.find((P) =>
                /\bx-(grow-y|grow-x|draw|wipe)\b/.test(P.className),
              ),
              st = C.find((P) =>
                /\bx-(drawer|left|right|down|zoom)\b/.test(P.className),
              );
            B
              ? A.air(ne(B), { dur: 0.7, from: 500, to: 2600, gain: 0.05 })
              : K
                ? A.pop(ne(K), { gain: 0.04 })
                : z
                  ? A.tick(ne(z), { f: 1700, gain: 0.03 })
                  : st &&
                    A.air(ne(st), {
                      dur: 0.42,
                      from: 700,
                      to: 2800,
                      gain: 0.03,
                      q: 1.1,
                    });
          },
          S = () => {
            (l.classList.add("x-reset"),
              d("[data-cue],[data-cue-out],[data-press]").forEach((T) =>
                T.classList.remove("on", "gone", "pressed"),
              ),
              d("[data-count]").forEach((T) => {
                T.textContent = w(Number(T.dataset.count.split(":")[0]), T);
              }),
              d("[data-type]").forEach((T) => {
                T.textContent = "";
              }),
              d("[data-text]").forEach((T) => {
                ((T.textContent = T.dataset.text0 ?? ""),
                  T.classList.remove("bump"));
              }),
              j.forEach(({ el: T, map: C }) => {
                T.classList.remove("show", "click");
                const _ = C.get("start");
                _ && _ !== "hide" && k(T, _);
              }),
              (l.dataset.stage = "start"),
              l.offsetWidth,
              l.classList.remove("x-reset"));
          },
          E = () => {
            ((x += 1),
              S(),
              l.classList.remove("x-out"),
              Object.entries(e).forEach(([T, C]) => g(() => b(T), C)),
              g(() => l.classList.add("x-out"), n - 450),
              g(E, n));
          };
        if ((S(), c)) {
          (Object.entries(e)
            .sort((T, C) => T[1] - C[1])
            .forEach(([T]) => b(T)),
            j.forEach(({ el: T }) => {
              T.dataset.keep === void 0 && T.classList.remove("show");
            }));
          return;
        }
        const L = new IntersectionObserver(
          ([T]) => {
            T.isIntersecting && !u
              ? ((u = !0), (x = 0), ls.add(l), (l.dataset.live = "1"), E())
              : !T.isIntersecting &&
                u &&
                ((u = !1), ls.delete(l), (l.dataset.live = "0"), p(), S());
          },
          { threshold: 0.3 },
        );
        return (
          L.observe(l),
          () => {
            (L.disconnect(), (u = !1), ls.delete(l), p());
          }
        );
      }, [e, n]),
      t.jsx("div", {
        ref: r,
        role: "img",
        "aria-label": s,
        "data-live": "0",
        className: `x-scene ${i}`,
        style: a,
        children: t.jsx("div", {
          className: "x-stage",
          "aria-hidden": "true",
          children: o,
        }),
      })
    );
  },
  eo = ({ move: e }) =>
    t.jsx("span", {
      "data-move": e,
      className: "x-mover x-cursor",
      children: t.jsx("svg", {
        viewBox: "0 0 24 24",
        className: "h-full w-full drop-shadow-md",
        children: t.jsx("path", {
          d: "M4 2.5 19.5 13l-7 1.4-3.6 6.6z",
          fill: "#0f172a",
          stroke: "#fff",
          strokeWidth: "1.6",
          strokeLinejoin: "round",
        }),
      }),
    }),
  no = [0, 6, 12, 18, 24, 30, 36],
  hs = [100, 92, 78, 62, 45, 30, 22],
  qn = [100, 112, 128, 150, 172, 200, 228],
  so = (e) => (e / 36) * 100,
  ao = (e) => 100 - (e / 240) * 100,
  Qs = (e) =>
    e.map((n, s) => `${s ? "L" : "M"}${so(no[s])} ${ao(n)}`).join(" "),
  Dd = (e, n) => {
    const s = Math.min(5, Math.floor(n / 6)),
      i = (n - no[s]) / 6;
    return e[s] + (e[s + 1] - e[s]) * i;
  },
  Hd = [
    { cue: "e1", m: 9, vals: hs, text: "Lỗi thời, chậm dần", tone: "cost" },
    { cue: "e2", m: 20, vals: hs, text: "Rớt hạng Google", tone: "cost" },
    { cue: "e3", m: 31, vals: hs, text: "Phải làm lại từ đầu", tone: "cost" },
    { cue: "e1", m: 6, vals: qn, text: "+ SEO & nội dung", tone: "asset" },
    {
      cue: "e2",
      m: 18,
      vals: qn,
      text: "Khách đến đều mỗi tháng",
      tone: "asset",
    },
    { cue: "e3", m: 30, vals: qn, text: "Thành kênh bán chính", tone: "asset" },
  ],
  Bd = { grid: 100, lines: 500, e1: 1150, e2: 1950, e3: 2850, end: 3300 },
  Vd = () =>
    t.jsxs(Ee, {
      label:
        "Minh hoạ xu hướng: website làm xong để đó mất giá trị dần — lỗi thời, rớt hạng Google, phải làm lại; website được vận hành tăng giá trị — SEO, khách đến đều, thành kênh bán chính.",
      cues: Bd,
      duration: 1e4,
      className:
        "aspect-[4/3] rounded-[22px] border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.03] sm:aspect-[16/8]",
      children: [
        t.jsxs("div", {
          className:
            "absolute left-[4%] right-[4%] top-[5%] flex flex-wrap items-center gap-x-[3cqw] gap-y-[1cqw] text-[2.6cqw] font-bold sm:text-[1.6cqw]",
          children: [
            t.jsx("span", {
              className: "text-slate-900 dark:text-white",
              children: "Giá trị website theo thời gian",
            }),
            t.jsxs("span", {
              className: "flex items-center gap-[0.8cqw] text-primary",
              children: [
                t.jsx("span", {
                  className:
                    "h-[0.6cqw] w-[4cqw] rounded-full bg-primary sm:w-[2.4cqw]",
                }),
                "Coi là tài sản",
              ],
            }),
            t.jsxs("span", {
              className: "flex items-center gap-[0.8cqw] text-rose-500",
              children: [
                t.jsx("span", {
                  className:
                    "h-[0.6cqw] w-[4cqw] rounded-full bg-rose-400 sm:w-[2.4cqw]",
                }),
                "Coi là chi phí",
              ],
            }),
          ],
        }),
        t.jsxs("div", {
          className:
            "absolute bottom-[14%] left-[4%] right-[4%] top-[20%] sm:right-[16%]",
          children: [
            t.jsxs("div", {
              "data-cue": "grid",
              className: "x-fade absolute inset-0",
              children: [
                [25, 50, 75].map((e) =>
                  t.jsx(
                    "span",
                    {
                      className:
                        "absolute left-0 right-0 border-t border-dashed border-slate-200 dark:border-white/10",
                      style: { top: `${e}%` },
                    },
                    e,
                  ),
                ),
                t.jsx("span", {
                  className:
                    "absolute bottom-0 left-0 right-0 border-t border-slate-300 dark:border-white/20",
                }),
                t.jsx("span", {
                  className:
                    "absolute bottom-0 left-0 top-0 border-l-2 border-slate-900 dark:border-white",
                }),
              ],
            }),
            t.jsxs("svg", {
              "data-cue": "lines",
              className:
                "x-wipe absolute inset-0 h-full w-full overflow-visible",
              viewBox: "0 0 100 100",
              preserveAspectRatio: "none",
              "aria-hidden": "true",
              style: { transitionDuration: "0.4s, 0.4s, 1.4s, 2.6s" },
              children: [
                t.jsx("path", {
                  d: Qs(hs),
                  fill: "none",
                  stroke: "#fb7185",
                  strokeWidth: "3",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  vectorEffect: "non-scaling-stroke",
                }),
                t.jsx("path", {
                  d: `${Qs(qn)} V100 H0Z`,
                  fill: "url(#asset-fill)",
                  opacity: "0.25",
                }),
                t.jsx("path", {
                  d: Qs(qn),
                  fill: "none",
                  stroke: "#00a1cf",
                  strokeWidth: "3.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  vectorEffect: "non-scaling-stroke",
                }),
                t.jsx("defs", {
                  children: t.jsxs("linearGradient", {
                    id: "asset-fill",
                    x1: "0",
                    y1: "0",
                    x2: "0",
                    y2: "1",
                    children: [
                      t.jsx("stop", { offset: "0", stopColor: "#00a1cf" }),
                      t.jsx("stop", {
                        offset: "1",
                        stopColor: "#00a1cf",
                        stopOpacity: "0",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            Hd.map((e) => {
              const n = so(e.m),
                s = ao(Dd(e.vals, e.m)),
                i = e.tone === "cost";
              return t.jsxs(
                "div",
                {
                  className: "absolute",
                  style: { left: `${n}%`, top: `${s}%` },
                  children: [
                    t.jsx("span", {
                      "data-cue": e.cue,
                      className: `x-pop absolute h-[2.4cqw] w-[2.4cqw] -translate-x-1/2 -translate-y-1/2 rounded-full border-[0.5cqw] border-white sm:h-[1.4cqw] sm:w-[1.4cqw] sm:border-[0.3cqw] ${i ? "bg-rose-400" : "bg-primary"} shadow`,
                    }),
                    t.jsx("span", {
                      "data-cue": e.cue,
                      className: `absolute whitespace-nowrap rounded-full px-[1.6cqw] py-[0.6cqw] text-[2.4cqw] font-bold shadow-sm sm:px-[1cqw] sm:py-[0.4cqw] sm:text-[1.4cqw] ${i ? "top-[1.6cqw] bg-rose-50 text-rose-600 dark:bg-rose-500/15 dark:text-rose-300" : "bottom-[1.6cqw] bg-sky-50 text-sky-700 dark:bg-primary/20 dark:text-cyan-200"}`,
                      style: {
                        left: e.m > 26 ? "auto" : "-1cqw",
                        right: e.m > 26 ? "-1cqw" : "auto",
                      },
                      children: e.text,
                    }),
                  ],
                },
                e.text,
              );
            }),
          ],
        }),
        t.jsxs("div", {
          className:
            "absolute bottom-[5%] left-[4%] right-[4%] flex justify-between text-[2.2cqw] text-slate-400 dark:text-white/40 sm:right-[16%] sm:text-[1.3cqw]",
          children: [
            t.jsx("span", {
              className: "font-bold text-slate-900 dark:text-white",
              children: "Bàn giao",
            }),
            t.jsx("span", { children: "Năm 1" }),
            t.jsx("span", { children: "Năm 2" }),
            t.jsx("span", { children: "Năm 3" }),
          ],
        }),
        t.jsxs("div", {
          className: "absolute right-[3%] top-[20%] hidden w-[12%] sm:block",
          children: [
            t.jsx("p", {
              "data-cue": "end",
              className:
                "x-right text-[1.3cqw] text-slate-500 dark:text-white/50",
              children: "Tài sản",
            }),
            t.jsx("b", {
              "data-cue": "end",
              "data-count": "100:228",
              "data-suffix": "%",
              "data-ms": "1200",
              className:
                "x-right block text-[3cqw] font-black leading-none text-primary",
              children: "100%",
            }),
          ],
        }),
        t.jsxs("div", {
          className: "absolute bottom-[16%] right-[3%] hidden w-[12%] sm:block",
          children: [
            t.jsx("p", {
              "data-cue": "end",
              className:
                "x-right text-[1.3cqw] text-slate-500 dark:text-white/50",
              children: "Chi phí",
            }),
            t.jsx("b", {
              "data-cue": "end",
              "data-count": "100:22",
              "data-suffix": "%",
              "data-ms": "1200",
              className:
                "x-right block text-[3cqw] font-black leading-none text-rose-500",
              children: "100%",
            }),
          ],
        }),
      ],
    }),
  yn = [
    { name: "Khảo sát", out: "Biên bản mục tiêu & yêu cầu", Icon: vc },
    { name: "Báo giá", out: "Báo giá ghi rõ từng hạng mục", Icon: un },
    { name: "Thiết kế", out: "Giao diện được anh chị duyệt", Icon: wc },
    { name: "Lập trình", out: "Bản chạy thử trên link riêng", Icon: xs },
    { name: "Kiểm thử", out: "Thử trên điện thoại & máy tính", Icon: yc },
    { name: "Bàn giao", out: "Website chạy thật + bảo hành", Icon: kc },
  ],
  ws = 1500,
  io = Object.fromEntries(
    yn.flatMap((e, n) => [
      [`n${n + 1}`, 300 + n * ws],
      [`s${n + 1}`, 300 + n * ws + 900],
    ]),
  );
io.live = 300 + 6 * ws;
const fg = () =>
    t.jsxs(Ee, {
      label:
        "Quy trình 6 bước: khảo sát, báo giá, thiết kế, lập trình, kiểm thử, bàn giao — mỗi bước có một đầu ra để anh chị nghiệm thu.",
      cues: io,
      duration: 300 + 6 * ws + 3200,
      className:
        "aspect-[3/4] rounded-[22px] border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.03] md:aspect-[16/5]",
      children: [
        t.jsxs("div", {
          className: "absolute inset-0 hidden md:block",
          children: [
            t.jsx("span", {
              className:
                "absolute left-[8%] right-[8%] top-[54%] h-[0.3cqw] rounded-full bg-slate-200 dark:bg-white/10",
            }),
            yn.slice(0, 5).map((e, n) =>
              t.jsx(
                "span",
                {
                  "data-cue": `s${n + 1}`,
                  className:
                    "x-grow-x absolute top-[54%] h-[0.3cqw] rounded-full bg-primary",
                  style: { left: `${8 + n * 16.8}%`, width: "16.8%" },
                },
                n,
              ),
            ),
            yn.map((e, n) =>
              t.jsxs(
                "div",
                {
                  className:
                    "absolute top-[54%] -translate-x-1/2 -translate-y-1/2",
                  style: { left: `${8 + n * 16.8}%` },
                  children: [
                    t.jsx("span", {
                      className:
                        "flex h-[3.4cqw] w-[3.4cqw] items-center justify-center rounded-full border-[0.25cqw] border-slate-300 bg-white font-mono text-[1.2cqw] font-bold text-slate-400 dark:border-white/20 dark:bg-[#0b1220] dark:text-white/40",
                      children: n + 1,
                    }),
                    t.jsx("span", {
                      "data-cue": `n${n + 1}`,
                      className:
                        "x-pop absolute inset-0 flex items-center justify-center rounded-full bg-primary font-mono text-[1.2cqw] font-bold text-white shadow-[0_0_0_0.8cqw_rgb(0_161_207/0.18)]",
                      children: n + 1,
                    }),
                    t.jsx("p", {
                      className:
                        "absolute left-1/2 top-[4.6cqw] -translate-x-1/2 whitespace-nowrap text-[1.45cqw] font-black text-slate-900 dark:text-white",
                      children: e.name,
                    }),
                    t.jsxs("div", {
                      "data-cue": `n${n + 1}`,
                      className:
                        "absolute bottom-[4.6cqw] left-1/2 w-[13.5cqw] -translate-x-1/2 rounded-[1cqw] border border-slate-200 bg-white p-[0.9cqw] text-center shadow-lg dark:border-white/10 dark:bg-[#111b2e]",
                      children: [
                        t.jsx(e.Icon, {
                          className:
                            "mx-auto h-[2.2cqw] w-[2.2cqw] text-primary",
                        }),
                        t.jsx("p", {
                          className:
                            "mt-[0.4cqw] text-[1.15cqw] font-semibold leading-tight text-slate-700 dark:text-white/80",
                          children: e.out,
                        }),
                      ],
                    }),
                  ],
                },
                e.name,
              ),
            ),
            t.jsxs("p", {
              "data-cue": "live",
              className:
                "x-pop absolute bottom-[8%] right-[3%] flex items-center gap-[0.8cqw] rounded-full bg-emerald-500 px-[1.6cqw] py-[0.6cqw] text-[1.4cqw] font-bold text-white shadow-lg",
              children: [
                t.jsx(Hn, { className: "h-[1.8cqw] w-[1.8cqw]" }),
                "Website đã chạy thật",
              ],
            }),
          ],
        }),
        t.jsxs("div", {
          className: "absolute inset-0 md:hidden",
          children: [
            t.jsx("span", {
              className:
                "absolute bottom-[7%] left-[13%] top-[7%] w-[0.8cqw] -translate-x-1/2 rounded-full bg-slate-200 dark:bg-white/10",
            }),
            yn.slice(0, 5).map((e, n) =>
              t.jsx(
                "span",
                {
                  "data-cue": `s${n + 1}`,
                  className:
                    "x-grow-y absolute left-[13%] w-[0.8cqw] -translate-x-1/2 rounded-full bg-primary",
                  style: {
                    top: `${9 + n * 16.4}%`,
                    height: "16.4%",
                    transformOrigin: "50% 0",
                  },
                },
                n,
              ),
            ),
            yn.map((e, n) =>
              t.jsxs(
                "div",
                {
                  className: "absolute left-[13%] right-[5%] -translate-y-1/2",
                  style: { top: `${9 + n * 16.4}%` },
                  children: [
                    t.jsx("span", {
                      className:
                        "absolute left-0 flex h-[9cqw] w-[9cqw] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[0.6cqw] border-slate-300 bg-white font-mono text-[3.4cqw] font-bold text-slate-400 dark:border-white/20 dark:bg-[#0b1220] dark:text-white/40",
                      children: n + 1,
                    }),
                    t.jsx("span", {
                      "data-cue": `n${n + 1}`,
                      className:
                        "x-pop absolute left-0 flex h-[9cqw] w-[9cqw] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary font-mono text-[3.4cqw] font-bold text-white",
                      children: n + 1,
                    }),
                    t.jsxs("div", {
                      className: "absolute left-[11%] top-0 -translate-y-1/2",
                      children: [
                        t.jsx("p", {
                          className:
                            "text-[4.2cqw] font-black text-slate-900 dark:text-white",
                          children: e.name,
                        }),
                        t.jsxs("p", {
                          "data-cue": `n${n + 1}`,
                          className:
                            "x-left flex items-center gap-[1.4cqw] text-[3.3cqw] text-slate-600 dark:text-white/70",
                          children: [
                            t.jsx(e.Icon, {
                              className: "h-[3.8cqw] w-[3.8cqw] text-primary",
                            }),
                            e.out,
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                e.name,
              ),
            ),
          ],
        }),
      ],
    }),
  ma = [
    { name: "Mã nguồn", Icon: xs },
    { name: "Tên miền", Icon: jc },
    { name: "Hosting", Icon: Nc },
    { name: "Tài khoản quản trị", Icon: Tc },
    { name: "Tài liệu hướng dẫn", Icon: un },
  ],
  Xd = {
    ...Object.fromEntries(
      ma.flatMap((e, n) => [
        [`i${n + 1}`, 300 + n * 140],
        [`f${n + 1}`, 1500 + n * 520],
        [`r${n + 1}`, 2250 + n * 520],
      ]),
    ),
    lock: 4900,
    w: 5500,
    inf: 7100,
  },
  bg = () =>
    t.jsxs(Ee, {
      label:
        "Bàn giao: mã nguồn, tên miền, hosting, tài khoản quản trị và tài liệu được chuyển vào tài sản đứng tên doanh nghiệp; kèm chỉnh sửa miễn phí 5 năm và bảo hành trọn đời với lỗi do TDDTech.",
      cues: Xd,
      duration: 10500,
      className:
        "mx-auto aspect-[4/3] w-full max-w-4xl rounded-[22px] border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.03] sm:aspect-[16/9]",
      children: [
        ma.map((e, n) =>
          t.jsxs(
            "div",
            {
              "data-move": `start:4,${8 + n * 12.5} i${n + 1}:4,${8 + n * 12.5} f${n + 1}:62,30 r${n + 1}:hide`,
              className:
                "x-mover flex w-[38%] items-center gap-[1.4cqw] rounded-[1.2cqw] border border-slate-200 bg-white px-[1.8cqw] py-[1.2cqw] shadow-md dark:border-white/10 dark:bg-[#111b2e] sm:w-[30%]",
              style: { transitionDuration: "0.85s" },
              children: [
                t.jsx(e.Icon, {
                  className:
                    "h-[3.2cqw] w-[3.2cqw] flex-none text-primary sm:h-[2.4cqw] sm:w-[2.4cqw]",
                }),
                t.jsx("span", {
                  className:
                    "text-[3cqw] font-bold text-slate-800 dark:text-white/85 sm:text-[2cqw]",
                  children: e.name,
                }),
              ],
            },
            e.name,
          ),
        ),
        t.jsxs("div", {
          "data-cue": "lock",
          className:
            "x-left absolute left-[4%] top-[12%] w-[44%] rounded-[1.6cqw] border border-slate-200 bg-white p-[2.6%] shadow-lg dark:border-white/10 dark:bg-[#111b2e] sm:w-[40%]",
          children: [
            t.jsxs("p", {
              className:
                "flex items-center gap-[1cqw] text-[2.8cqw] font-black text-slate-900 dark:text-white sm:text-[2cqw]",
              children: [
                t.jsx(un, {
                  className:
                    "h-[3.2cqw] w-[3.2cqw] text-primary sm:h-[2.4cqw] sm:w-[2.4cqw]",
                }),
                "Biên bản bàn giao",
              ],
            }),
            t.jsx("div", {
              className: "mt-[1.4cqw] space-y-[0.8cqw]",
              children: [70, 88, 56].map((e) =>
                t.jsx(
                  "span",
                  {
                    className:
                      "block h-[1.2cqw] rounded bg-slate-100 dark:bg-white/10 sm:h-[0.8cqw]",
                    style: { width: `${e}%` },
                  },
                  e,
                ),
              ),
            }),
            t.jsxs("div", {
              className: "mt-[2cqw] flex items-end justify-between",
              children: [
                t.jsx("svg", {
                  "data-cue": "lock",
                  className: "x-wipe h-[7cqw] w-[45%] sm:h-[5cqw]",
                  viewBox: "0 0 120 40",
                  "aria-hidden": "true",
                  style: { transitionDuration: "0.3s, 0.3s, 1s, 1.4s" },
                  children: t.jsx("path", {
                    d: "M4 30 C14 6 22 6 24 22 S34 38 42 18 S54 4 58 24 S70 34 78 20 S96 12 116 22",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2.4",
                    strokeLinecap: "round",
                    className: "text-slate-800 dark:text-white",
                  }),
                }),
                t.jsx("span", {
                  className:
                    "rounded-full bg-emerald-500/15 px-[1.4cqw] py-[0.4cqw] text-[2.2cqw] font-bold text-emerald-600 dark:text-emerald-400 sm:text-[1.5cqw]",
                  children: "Đã ký nghiệm thu",
                }),
              ],
            }),
          ],
        }),
        t.jsxs("div", {
          className:
            "absolute right-[4%] top-[6%] h-[64%] w-[46%] rounded-[2cqw] border-2 border-slate-900 bg-slate-50 p-[2.4%] dark:border-white dark:bg-white/[0.04] sm:w-[40%]",
          children: [
            t.jsxs("div", {
              className: "flex items-center gap-[1.4cqw]",
              children: [
                t.jsx(Sc, {
                  className:
                    "h-[4.6cqw] w-[4.6cqw] text-slate-900 dark:text-white sm:h-[3.4cqw] sm:w-[3.4cqw]",
                }),
                t.jsxs("p", {
                  className:
                    "text-[2.8cqw] font-black leading-tight text-slate-900 dark:text-white sm:text-[2cqw]",
                  children: [
                    "Tài sản đứng tên",
                    t.jsx("span", {
                      className: "block text-primary",
                      children: "doanh nghiệp anh chị",
                    }),
                  ],
                }),
                t.jsxs("span", {
                  className:
                    "relative ml-auto h-[4.6cqw] w-[4.6cqw] sm:h-[3.2cqw] sm:w-[3.2cqw]",
                  children: [
                    t.jsx(qc, {
                      "data-cue-out": "lock",
                      className:
                        "absolute inset-0 h-full w-full text-slate-400",
                    }),
                    t.jsx(Cc, {
                      "data-cue": "lock",
                      className:
                        "x-pop absolute inset-0 h-full w-full text-emerald-500",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("div", {
              className: "mt-[1.6cqw] space-y-[0.9cqw]",
              children: ma.map((e, n) =>
                t.jsxs(
                  "p",
                  {
                    "data-cue": `r${n + 1}`,
                    className:
                      "x-pop flex items-center gap-[1cqw] text-[2.6cqw] font-semibold text-slate-700 dark:text-white/80 sm:text-[1.8cqw]",
                    children: [
                      t.jsx(Hn, {
                        className:
                          "h-[3cqw] w-[3cqw] text-emerald-500 sm:h-[2.2cqw] sm:w-[2.2cqw]",
                      }),
                      e.name,
                    ],
                  },
                  e.name,
                ),
              ),
            }),
          ],
        }),
        t.jsxs("div", {
          className: "absolute bottom-[6%] left-[4%] right-[4%]",
          children: [
            t.jsxs("div", {
              className:
                "flex items-center justify-between text-[2.6cqw] font-bold sm:text-[1.8cqw]",
              children: [
                t.jsxs("span", {
                  className:
                    "flex items-center gap-[1cqw] text-slate-900 dark:text-white",
                  children: [
                    t.jsx(hn, {
                      className:
                        "h-[3cqw] w-[3cqw] text-primary sm:h-[2.2cqw] sm:w-[2.2cqw]",
                    }),
                    "Chỉnh sửa miễn phí trong phạm vi",
                  ],
                }),
                t.jsx("span", {
                  "data-cue": "w",
                  "data-count": "0:5",
                  "data-suffix": " năm",
                  "data-ms": "1400",
                  className: "x-stay text-primary",
                  children: "0 năm",
                }),
              ],
            }),
            t.jsxs("div", {
              className:
                "relative mt-[1.2cqw] h-[2.4cqw] rounded-full bg-slate-100 dark:bg-white/10 sm:h-[1.6cqw]",
              children: [
                t.jsx("span", {
                  "data-cue": "w",
                  className:
                    "x-grow-x absolute inset-y-0 left-0 w-[82%] rounded-full bg-gradient-to-r from-primary to-cyan-300",
                }),
                t.jsx("span", {
                  "data-cue": "inf",
                  className:
                    "x-pop absolute -top-[1.2cqw] right-0 flex h-[4.6cqw] items-center gap-[0.8cqw] rounded-full bg-slate-900 px-[1.8cqw] text-[2.4cqw] font-bold text-white dark:bg-white dark:text-slate-900 sm:-top-[1cqw] sm:h-[3.6cqw] sm:text-[1.6cqw]",
                  children: "∞ Trọn đời · lỗi do TDDTech",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  Fd = [
    "Làm một lần cho xong, ghi vào sổ như một khoản chi",
    "Bàn giao xong không ai trông, website chậm dần và cũ đi",
    "Không biết website mang về bao nhiêu khách mỗi tháng",
    "Hai, ba năm sau phải làm lại từ đầu",
  ],
  Gd = [
    "Đứng tên doanh nghiệp: mã nguồn, tên miền, dữ liệu",
    "Có người bảo vệ và giữ gìn, không để xuống cấp",
    "Giá trị tăng dần nhờ nội dung, SEO và tối ưu chuyển đổi",
    "Đo được khách hàng và đơn hàng đến từ website",
  ],
  ro = () =>
    t.jsx("section", {
      id: "tai-san",
      className:
        "relative overflow-hidden border-t border-slate-200 bg-white py-12 dark:border-white/[0.06] dark:bg-[hsl(220_40%_6%)] md:py-20",
      children: t.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          t.jsxs("div", {
            children: [
              t.jsx("p", {
                className:
                  "text-xs font-bold uppercase tracking-[0.24em] text-primary sm:text-sm",
                children: "Chi phí hay tài sản?",
              }),
              t.jsx(Yr, {
                text: "Phần lớn chủ doanh nghiệp coi website là chi phí. Người coi nó là tài sản thì có khách đều mỗi tháng.",
                className:
                  "mt-3 max-w-5xl text-balance text-3xl font-black leading-[1.22] tracking-[-0.025em] text-slate-950 dark:text-white sm:text-5xl sm:leading-[1.2] lg:text-6xl lg:leading-[1.15]",
              }),
              t.jsx("p", {
                className:
                  "mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-white/60 md:text-xl md:leading-9",
                children:
                  "Vàng, nhà, cổ phiếu được giữ gìn vì chúng sinh lời. Website cũng vậy: nó làm việc 24/7, đứng tên doanh nghiệp và có thể mang về khách hàng mỗi ngày — nếu được chăm như một tài sản.",
              }),
            ],
          }),
          t.jsx("div", {
            className: "mt-10",
            "data-motion": "card",
            children: t.jsx(Vd, {}),
          }),
          t.jsxs("div", {
            className:
              "mt-6 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr]",
            children: [
              t.jsx("div", {
                className: "h-full",
                "data-motion": "tilt-back",
                children: t.jsxs("article", {
                  className:
                    "h-full rounded-[14px] border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.03] sm:p-8",
                  children: [
                    t.jsx("p", {
                      className:
                        "text-sm font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-white/45",
                      children: "Coi website là chi phí",
                    }),
                    t.jsx("ul", {
                      className: "mt-5 space-y-4",
                      children: Fd.map((e, n) =>
                        t.jsxs(
                          "li",
                          {
                            "data-motion": "left",
                            style: { "--motion-delay": `${150 + n * 90}ms` },
                            className:
                              "flex gap-3 text-base leading-7 text-slate-500 dark:text-white/50",
                            children: [
                              t.jsx(Ln, {
                                className:
                                  "mt-1 h-5 w-5 flex-none text-rose-400",
                              }),
                              e,
                            ],
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
              t.jsx("div", {
                className: "flex items-center justify-center",
                "aria-hidden": "true",
                children: t.jsx("span", {
                  "data-motion": "pop",
                  style: { "--motion-delay": "350ms" },
                  className:
                    "flex h-12 w-12 rotate-90 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 lg:rotate-0",
                  children: t.jsx(hr, { className: "h-5 w-5" }),
                }),
              }),
              t.jsx("div", {
                className: "h-full",
                "data-motion": "tilt-front",
                style: { "--motion-delay": "200ms" },
                children: t.jsxs("article", {
                  className:
                    "relative h-full overflow-hidden rounded-[14px] bg-slate-950 p-6 text-white shadow-xl shadow-slate-900/20 sm:p-8",
                  children: [
                    t.jsx("div", {
                      className:
                        "pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/30 blur-[90px]",
                    }),
                    t.jsx("p", {
                      className:
                        "relative text-sm font-bold uppercase tracking-[0.16em] text-cyan-300",
                      children: "Coi website là tài sản",
                    }),
                    t.jsx("ul", {
                      className: "relative mt-5 space-y-4",
                      children: Gd.map((e, n) =>
                        t.jsxs(
                          "li",
                          {
                            "data-motion": "right",
                            style: { "--motion-delay": `${450 + n * 110}ms` },
                            className:
                              "flex gap-3 text-base leading-7 text-white/85",
                            children: [
                              t.jsx(dr, {
                                className:
                                  "mt-1 h-5 w-5 flex-none text-cyan-300",
                              }),
                              e,
                            ],
                          },
                          e,
                        ),
                      ),
                    }),
                    t.jsxs("p", {
                      className:
                        "relative mt-6 border-t border-white/10 pt-5 text-sm leading-6 text-white/60",
                      children: [
                        "Trách nhiệm của TDDTech: ",
                        t.jsx("strong", {
                          className: "text-white",
                          children: "bảo vệ, giữ gìn và phát triển",
                        }),
                        " tài sản đó của anh chị.",
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  It = (e) => 1 - Math.pow(1 - e, 3),
  kn = (e) => e * e * e,
  Ft = (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2),
  xe = (e) => e,
  V = (e, n, s, i, a = Ft) => gt(e, s.map(n), i, { clamp: !0, ease: a }),
  X = (e, n, s, i, a, o) =>
    gt(
      e,
      a === void 0 ? [n(s), n(i)] : [n(s), n(i), n(a), n(o)],
      a === void 0 ? [0, 1] : [0, 1, 1, 0],
      { clamp: !0 },
    ),
  oo = (e, n) => {
    const [s, i] = f.useState(() => ({
      w: typeof window > "u" ? 1440 : window.innerWidth,
      h: typeof window > "u" ? 900 : window.innerHeight,
      sectionH: (typeof window > "u" ? 900 : window.innerHeight) * 5,
    }));
    return (
      f.useLayoutEffect(() => {
        const a = e.current,
          o = n.current;
        if (!a || !o) return;
        const r = () => {
          const c = {
            w: a.clientWidth,
            h: a.clientHeight,
            sectionH: o.offsetHeight,
          };
          i((h) =>
            h.w === c.w && h.h === c.h && h.sectionH === c.sectionH ? h : c,
          );
        };
        r();
        const l = new ResizeObserver(r);
        return (l.observe(a), l.observe(o), () => l.disconnect());
      }, [e, n]),
      s
    );
  },
  Kd = (e) => (n) => Math.min(1, Math.max(0, e + n * (1 - e))),
  Yd = ({ P: e, T: n, inn: s, out: i, tilt: a, children: o }) => {
    const r = i ? [n(s[0]), n(s[1]), n(i[0]), n(i[1])] : [n(s[0]), n(s[1])],
      l = i ? [It, xe, kn] : It,
      c = gt(e, r, i ? ["140%", "0%", "0%", "-140%"] : ["140%", "0%"], {
        clamp: !0,
        ease: l,
      }),
      h = gt(e, r, i ? [a ? 72 : 0, 0, 0, a ? -50 : 0] : [a ? 72 : 0, 0], {
        clamp: !0,
        ease: l,
      });
    return t.jsx("span", {
      className: "rise-mask",
      children: t.jsx(q.span, {
        className: "inline-block",
        style: { y: c, rotateX: h, transformPerspective: 700, originY: 1 },
        children: o,
      }),
    });
  },
  Ze = ({ P: e, T: n, text: s, inn: i, out: a, special: o, tilt: r }) => {
    var g;
    const l = [];
    let c = s;
    for (; c.length;) {
      const p = Object.keys(o ?? {}).find((u) => c.startsWith(u));
      if (p) {
        const u = c.slice(p.length),
          x = ((g = u.match(/^[^\s]*/)) == null ? void 0 : g[0]) ?? "";
        (l.push({
          t: p + x,
          node: t.jsxs(t.Fragment, { children: [o[p], x] }),
        }),
          (c = u.slice(x.length).trimStart()));
        continue;
      }
      const d = c.indexOf(" "),
        m = d === -1 ? c : c.slice(0, d);
      (l.push({ t: m }), (c = d === -1 ? "" : c.slice(d + 1)));
    }
    const h = l.length;
    return t.jsx(t.Fragment, {
      children: l.map((p, d) => {
        const m = i[0] + (i[1] - i[0]) * (d / h) * 0.62,
          u = m + (i[1] - i[0]) * 0.38,
          x = a ? [a[0] + (a[1] - a[0]) * (d / h) * 0.5, 0] : void 0;
        return (
          x && a && (x[1] = x[0] + (a[1] - a[0]) * 0.5),
          t.jsxs(
            f.Fragment,
            {
              children: [
                t.jsx(Yd, {
                  P: e,
                  T: n,
                  inn: [m, u],
                  out: x,
                  tilt: r,
                  children: p.node ?? p.t,
                }),
                d < h - 1 ? " " : null,
              ],
            },
            d,
          )
        );
      }),
    });
  },
  Zs = 84,
  Ud = ({ w: e, h: n }) => {
    const s = e < 1024;
    if (!s) {
      const z = Math.min(1.3, Math.max(1, e / 1440)),
        st = Math.max(Math.min(72, e * 0.045), (e - 1320 * z) / 2),
        P = Math.min(520 * z, (e - 2 * st) * 0.4),
        R = st + P + 56,
        et = e - st,
        at = Zs + 12,
        Y = n - 96,
        Q = et - R,
        Z = Y - at,
        ut = (R + et) / 2,
        jt = (at + Y) / 2,
        W = 32,
        it = Math.min(620 * z, Q * 0.82, (Z - 120) / 0.66),
        ct = it * 0.625 + W,
        dt = 92,
        lt = Math.min(0.86, (Z - dt - 130) / ct),
        I = -(dt + 92) / 2,
        mt = I + (ct * lt) / 2 + 60 + dt / 2,
        pt = Math.min(188 * z, (Q - 3 * 18) / 4),
        Nt = pt * 1.34,
        St = [0, 1, 2, 3].map((wt) => ({ x: (wt - 1.5) * (pt + 18), y: 12 })),
        H = (pt - 24) / it,
        J = Math.min(Q / 2 - 96, (Z - 150) / 2),
        ft = Math.min(0.7, (J - 30) / (0.5 * Math.hypot(it, ct)));
      return {
        stacked: s,
        w: e,
        h: n,
        vx: ut,
        vy: jt,
        vw: Q,
        vh: Z,
        fw: it,
        fh: ct,
        chrome: W,
        textX: st,
        textY: Zs + Math.max(36, n * 0.07),
        textW: P,
        headline: Math.max(34, Math.min(58 * z, e * 0.036)),
        chartW: Math.min(Q * 0.96, 760),
        chartH: dt,
        chartY: mt,
        receipt: {
          x: Q * 0.33,
          top: ct * 0.08 - 115,
          w: Math.min(252, Q * 0.34),
        },
        c1: { x: -Q * 0.12, y: -8, s: 1 },
        c2: { x: 0, y: I, s: lt },
        c3: { x: 0, y: -8, s: Math.min(1, (Z - 80) / ct) },
        tile: { x: St[3].x, y: St[3].y - Nt / 2 + 12 + (ct * H) / 2, s: H },
        c4: { x: 0, y: -40, s: ft },
        fin: { x: e / 2 - ut, y: n / 2 - jt, s: 0.12 },
        tiles: St,
        tw: pt,
        th: Nt,
        shelfNoteY: 12 + Nt / 2 + 30,
        R: 0.5 * Math.hypot(it * ft, ct * ft) + 30,
        monthY: Z / 2 - 30,
        monthW: Math.min(Q, 600),
        toast: { w: 268 },
      };
    }
    const i = e < 600 ? 18 : 40,
      a = Zs - 8,
      o = Math.max(25, Math.min(42, e * 0.07)),
      r = Math.round(o * 1.08 * 3 + 38 + (e >= 600 ? 96 : 0)),
      l = a + r + 12,
      c = n - 54,
      h = e - 2 * i + 4,
      g = c - l,
      p = e / 2,
      d = (l + c) / 2,
      m = e < 600 ? 24 : 30,
      u = e < 600 ? 222 : 252,
      x = Math.min(h - 8, 560, ((g - u + 12) / 0.86 - m) / 0.625),
      v = x * 0.625 + m,
      w = v * 0.86,
      y = -(w + u - 18) / 2,
      N = 64,
      j = Math.min(0.82, (g - N - 130) / v),
      k = -(v * j + 64 + N + 52) / 2,
      b = 12,
      S = Math.min(170, (h - b) / 2),
      E = Math.min(S * 1.12, (g - b - 50) / 2),
      L = -(2 * E + b + 40) / 2,
      T = [0, 1, 2, 3].map((z) => ({
        x: (z % 2 ? 1 : -1) * (S / 2 + b / 2),
        y: L + (z < 2 ? E / 2 : E + b + E / 2),
      })),
      C = (S - 36) / x,
      _ = Math.max(88, Math.min(h / 2 - 36, (g - 158) / 2)),
      D = Math.min(0.66, (_ - 20) / (0.5 * Math.hypot(x, v))),
      K = -(2 * _ + 24 + 26 + 78) / 2 + 24 + _;
    return {
      stacked: s,
      w: e,
      h: n,
      vx: p,
      vy: d,
      vw: h,
      vh: g,
      fw: x,
      fh: v,
      chrome: m,
      textX: i,
      textY: a,
      textW: e - 2 * i,
      headline: o,
      chartW: h - 8,
      chartH: N,
      chartY: k + v * j + 64 + N / 2,
      receipt: { x: h * 0.16, top: y + w - 18, w: Math.min(236, h * 0.66) },
      c1: { x: -h * 0.05, y: y + w / 2, s: 0.86 },
      c2: { x: 0, y: k + (v * j) / 2, s: j },
      c3: { x: 0, y: 0, s: Math.min(0.94, (g - 40) / v) },
      tile: { x: T[3].x, y: T[3].y - E / 2 + 10 + (v * C) / 2, s: C },
      c4: { x: 0, y: K, s: D },
      fin: { x: e / 2 - p, y: n / 2 - d, s: 0.14 },
      tiles: T,
      tw: S,
      th: E,
      shelfNoteY: L + 2 * E + b + 18,
      R: _,
      monthY: K + _ + 26 + 39,
      monthW: Math.min(h, 520),
      toast: { w: Math.min(260, h - 40) },
    };
  },
  vi = () =>
    t.jsxs("div", {
      className: "absolute inset-0 overflow-hidden bg-white text-slate-900",
      style: { containerType: "inline-size" },
      children: [
        t.jsxs("div", {
          className: "flex items-center justify-between px-[4cqw] py-[2.4cqw]",
          children: [
            t.jsxs("div", {
              className: "flex items-center gap-[1.2cqw]",
              children: [
                t.jsx("span", {
                  className:
                    "h-[3.4cqw] w-[3.4cqw] rounded-full bg-gradient-to-br from-emerald-300 to-teal-600",
                }),
                t.jsx("span", {
                  className: "text-[2.5cqw] font-extrabold tracking-tight",
                  children: "Thương hiệu",
                }),
              ],
            }),
            t.jsxs("div", {
              className:
                "flex items-center gap-[2.8cqw] text-[1.75cqw] font-semibold text-slate-500",
              children: [
                t.jsx("span", { children: "Sản phẩm" }),
                t.jsx("span", { children: "Bộ sưu tập" }),
                t.jsx("span", { children: "Câu chuyện" }),
                t.jsx("span", {
                  className:
                    "rounded-full bg-slate-900 px-[2cqw] py-[0.9cqw] text-white",
                  children: "Đặt hàng",
                }),
              ],
            }),
          ],
        }),
        t.jsxs("div", {
          className:
            "mx-[4cqw] grid grid-cols-[1.15fr_1fr] items-center gap-[2cqw] overflow-hidden rounded-[2.2cqw] bg-gradient-to-br from-[#f0f7f3] via-[#e7f3ee] to-[#d6ece3] px-[4.5cqw] py-[3.6cqw]",
          children: [
            t.jsxs("div", {
              children: [
                t.jsx("p", {
                  className:
                    "text-[1.45cqw] font-bold uppercase tracking-[0.22em] text-emerald-700",
                  children: "Bộ sưu tập mới",
                }),
                t.jsx("p", {
                  className:
                    "mt-[1.2cqw] text-[4.5cqw] font-black leading-[1.06] tracking-[-0.03em]",
                  children: "Chất lượng thật, giao nhanh toàn quốc",
                }),
                t.jsx("p", {
                  className: "mt-[1.4cqw] text-[1.75cqw] text-slate-500",
                  children: "Đặt online, nhận hàng trong 24 giờ.",
                }),
                t.jsxs("div", {
                  className:
                    "mt-[2.4cqw] flex gap-[1.2cqw] text-[1.6cqw] font-bold",
                  children: [
                    t.jsx("span", {
                      className:
                        "rounded-full bg-emerald-600 px-[2.6cqw] py-[1.1cqw] text-white",
                      children: "Mua ngay",
                    }),
                    t.jsx("span", {
                      className:
                        "rounded-full border border-slate-300 px-[2.6cqw] py-[1.1cqw] text-slate-700",
                      children: "Xem sản phẩm",
                    }),
                  ],
                }),
              ],
            }),
            t.jsxs("div", {
              className: "relative aspect-square",
              children: [
                t.jsx("span", {
                  className:
                    "absolute inset-[6%] rounded-full bg-[radial-gradient(circle_at_35%_30%,#ffffff_0%,#cfeee0_45%,#8fd2b8_100%)]",
                }),
                t.jsx("span", {
                  className:
                    "absolute left-[14%] top-[46%] h-[22%] w-[40%] -rotate-[28deg] rounded-[100%_0] bg-gradient-to-br from-emerald-300 to-emerald-600",
                }),
                t.jsx("span", {
                  className:
                    "absolute right-[12%] top-[30%] h-[18%] w-[34%] rotate-[24deg] rounded-[0_100%] bg-gradient-to-bl from-teal-300 to-emerald-700",
                }),
                t.jsx("span", {
                  className:
                    "absolute bottom-[10%] left-1/2 h-[6%] w-[46%] -translate-x-1/2 rounded-[50%] bg-emerald-900/25",
                }),
                t.jsxs("span", {
                  className:
                    "absolute bottom-[13%] left-1/2 h-[52%] w-[30%] -translate-x-1/2 rounded-[2.4cqw] bg-gradient-to-r from-[#fdfaf3] via-white to-[#ece6d9] shadow-[inset_-0.6cqw_0_1.2cqw_rgba(0,0,0,0.06)]",
                  children: [
                    t.jsx("span", {
                      className:
                        "absolute inset-x-[16%] top-[34%] h-[30%] rounded-[0.6cqw] bg-emerald-700/90",
                    }),
                    t.jsx("span", {
                      className:
                        "absolute inset-x-[24%] top-[44%] h-[3%] rounded bg-white/80",
                    }),
                    t.jsx("span", {
                      className:
                        "absolute inset-x-[30%] top-[52%] h-[3%] rounded bg-white/60",
                    }),
                  ],
                }),
                t.jsx("span", {
                  className:
                    "absolute bottom-[63%] left-1/2 h-[13%] w-[17%] -translate-x-1/2 rounded-t-[1cqw] bg-gradient-to-r from-emerald-800 to-emerald-600",
                }),
              ],
            }),
          ],
        }),
        t.jsx("div", {
          className: "mx-[4cqw] mt-[2.6cqw] grid grid-cols-4 gap-[1.8cqw]",
          children: [
            ["Tinh chất dưỡng", "329.000đ", "from-[#fde7e1] to-[#f7cbbf]"],
            ["Sữa rửa mặt", "189.000đ", "from-[#e2f0fb] to-[#bfdcf3]"],
            ["Kem chống nắng", "259.000đ", "from-[#fff3d6] to-[#fde2a2]"],
            ["Mặt nạ ngủ", "299.000đ", "from-[#ece8fb] to-[#d2c9f3]"],
          ].map(([e, n, s]) =>
            t.jsxs(
              "div",
              {
                children: [
                  t.jsxs("div", {
                    className: `relative aspect-[4/3] overflow-hidden rounded-[1.4cqw] bg-gradient-to-br ${s}`,
                    children: [
                      t.jsx("span", {
                        className:
                          "absolute bottom-[14%] left-1/2 h-[58%] w-[22%] -translate-x-1/2 rounded-[0.8cqw] bg-white/90 shadow-sm",
                      }),
                      t.jsx("span", {
                        className:
                          "absolute bottom-[72%] left-1/2 h-[12%] w-[12%] -translate-x-1/2 rounded-t-[0.4cqw] bg-slate-700/70",
                      }),
                    ],
                  }),
                  t.jsx("p", {
                    className: "mt-[0.9cqw] text-[1.45cqw] font-bold",
                    children: e,
                  }),
                  t.jsx("p", {
                    className: "text-[1.35cqw] text-slate-500",
                    children: n,
                  }),
                ],
              },
              e,
            ),
          ),
        }),
      ],
    }),
  Qd = () =>
    t.jsxs("svg", {
      viewBox: "0 0 64 64",
      className: "h-full w-full",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinejoin: "round",
      children: [
        t.jsx("path", { d: "M8 50h22l-4-12H12z", fill: "url(#ag)" }),
        t.jsx("path", { d: "M34 50h22l-4-12H38z", fill: "url(#ag)" }),
        t.jsx("path", { d: "M21 36h22l-4-12H25z", fill: "url(#ag)" }),
        t.jsx("path", {
          d: "M30 14l2-5 2 5M40 17l4-3M20 17l-4-3",
          strokeLinecap: "round",
        }),
      ],
    }),
  Zd = () =>
    t.jsxs("svg", {
      viewBox: "0 0 64 64",
      className: "h-full w-full",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinejoin: "round",
      strokeLinecap: "round",
      children: [
        t.jsx("path", { d: "M10 30 32 12l22 18" }),
        t.jsx("path", { d: "M16 26v26h32V26", fill: "url(#ag)" }),
        t.jsx("path", { d: "M27 52V38h10v14" }),
        t.jsx("path", { d: "M42 20v-6h5v10" }),
      ],
    }),
  Jd = () =>
    t.jsxs("svg", {
      viewBox: "0 0 64 64",
      className: "h-full w-full",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        t.jsx("path", { d: "M10 54h46" }),
        t.jsx("path", { d: "M16 34v14M16 30v-4" }),
        t.jsx("rect", {
          x: "13",
          y: "34",
          width: "6",
          height: "10",
          rx: "1",
          fill: "url(#ag)",
        }),
        t.jsx("path", { d: "M30 26v20M30 22v-4" }),
        t.jsx("rect", {
          x: "27",
          y: "26",
          width: "6",
          height: "14",
          rx: "1",
          fill: "url(#ag)",
        }),
        t.jsx("path", { d: "M44 16v22M44 12V8" }),
        t.jsx("rect", {
          x: "41",
          y: "16",
          width: "6",
          height: "16",
          rx: "1",
          fill: "url(#ag)",
        }),
        t.jsx("path", { d: "M12 26 26 18l8 4 18-12", stroke: "#67e8f9" }),
      ],
    }),
  co = () => (Zt() ? t.jsx(ro, {}) : t.jsx(tm, {})),
  tm = () => {
    const e = Zt(),
      n = f.useRef(null),
      s = f.useRef(null),
      i = oo(s, n),
      a = f.useMemo(() => Ud(i), [i]),
      { scrollYProgress: o } = Je({
        target: n,
        offset: ["start end", "end end"],
      }),
      r = gn(o, { stiffness: 320, damping: 44, mass: 0.5, restDelta: 5e-5 }),
      l = Math.min(0.4, i.h / Math.max(i.sectionH, 1)),
      c = ($) => Math.min(1, Math.max(0, l + $ * (1 - l))),
      h = [
        -0.22, 0, 0.17, 0.23, 0.36, 0.43, 0.5, 0.56, 0.61, 0.66, 0.71, 0.87,
        0.92,
      ],
      g = [
        a.c1,
        a.c1,
        a.c1,
        a.c2,
        a.c2,
        a.c2,
        a.c3,
        a.c3,
        a.tile,
        a.tile,
        a.c4,
        a.c4,
        a.fin,
      ],
      p = V(
        r,
        c,
        h,
        g.map(($) => $.x),
      ),
      d = V(
        r,
        c,
        h,
        g.map(($, F) => $.y + (F === 0 ? 150 : F === 4 || F === 5 ? 18 : 0)),
      ),
      m = V(
        r,
        c,
        h,
        g.map(($, F) => $.s * (F === 0 ? 0.9 : 1)),
      ),
      u = V(
        r,
        c,
        [-0.22, 0, 0.17, 0.24, 0.37, 0.44, 0.5],
        [30, 9, 8, 6, 15, 15, 0],
      ),
      x = V(
        r,
        c,
        [-0.22, 0, 0.17, 0.23],
        a.stacked ? [0, 0, 0, 0] : [-14, -9, -9, 0],
      ),
      v = V(r, c, [0.24, 0.37, 0.44, 0.5], [0, -2.4, -2.4, 0]),
      w = V(r, c, [-0.22, -0.1, 0.875, 0.9], [0, 1, 1, 0], xe),
      y = V(
        r,
        c,
        [0.25, 0.28, 0.31, 0.32, 0.35, 0.36, 0.45, 0.5],
        [0, 0.32, 0.36, 0.66, 0.7, 1, 1, 0],
        xe,
      ),
      N = X(r, c, 0.27, 0.285, 0.305, 0.32),
      j = gt(r, [c(0.27), c(0.32)], [0, 900]),
      k = X(r, c, 0.305, 0.32, 0.42, 0.45),
      b = X(r, c, 0.322, 0.335),
      S = X(r, c, 0.345, 0.355, 0.46, 0.49),
      E = V(r, c, [0.352, 0.37], [0, 1], It),
      L = X(r, c, 0.35, 0.352, 0.45, 0.48),
      T = X(r, c, 0.47, 0.53, 0.86, 0.9),
      C = V(r, c, [0.49, 0.56], [-130, 230], Ft),
      _ = gt(C, ($) => `${$}%`),
      D = gt(S, ($) => 1 - $),
      B = gt(b, ($) => 1 - $),
      K = V(r, c, [0.015, 0.12], [102, 0], xe),
      z = gt(K, ($) => `${$}%`),
      st = X(r, c, 0.12, 0.13),
      P = V(r, c, [0.12, 0.14], [1.9, 1], It),
      R = V(r, c, [0.17, 0.22], [0, a.stacked ? 60 : 120], kn),
      et = V(r, c, [0.17, 0.22], [0, 70], kn),
      at = V(r, c, [0.17, 0.22], [3, 14], kn),
      Y = X(r, c, 0, 0.015, 0.18, 0.22),
      Q = X(r, c, 0.2, 0.235, 0.41, 0.445),
      Z = V(r, c, [0.2, 0.245], [0, 1], It),
      ut = V(r, c, [0.24, 0.36], [0, 1], xe),
      jt = [
        X(r, c, 0.23, 0.245),
        X(r, c, 0.275, 0.29),
        X(r, c, 0.315, 0.33),
        X(r, c, 0.355, 0.37),
      ],
      W = V(r, c, [0.37, 0.4], [0, 1], Ft),
      it = V(r, c, [0.39, 0.5], [i.h * 1.02, -i.h * 0.3], Ft),
      ct = V(r, c, [0.4, 1], [-60, 80], xe),
      dt = V(r, c, [0.4, 1], [40, -60], xe),
      lt = V(r, c, [0.955, 0.985], [0, 1], Ft),
      I = a.stacked ? 70 : 92,
      mt = gt(lt, ($) =>
        $ <= 5e-4
          ? "none"
          : `inset(calc(${$ * 50}% - ${$ * I}px) calc(${$ * 50}% - ${$ * I}px) round ${$ * 40}px)`,
      ),
      pt = V(r, c, [0.985, 1], [0, i.h * 0.3], Ft),
      Nt = V(r, c, [0.985, 1], [1, 0.62], Ft),
      St = [
        X(r, c, 0.57, 0.6, 0.66, 0.69),
        X(r, c, 0.585, 0.615, 0.66, 0.69),
        X(r, c, 0.6, 0.63, 0.66, 0.69),
        X(r, c, 0.605, 0.635, 0.66, 0.69),
      ],
      H = [
        V(r, c, [0.57, 0.61], [40, 0], It),
        V(r, c, [0.585, 0.625], [40, 0], It),
        V(r, c, [0.6, 0.64], [40, 0], It),
        V(r, c, [0.605, 0.64], [16, 0], It),
      ],
      J = V(r, c, [0.6, 0.655], [0, 1], Ft),
      ft = X(r, c, 0.625, 0.645, 0.66, 0.68),
      vt = V(r, c, [0.625, 0.655], [0, 1], Ft),
      wt = V(r, c, [0.7, 0.77], [0, 1], Ft),
      Jt = X(r, c, 0.69, 0.71, 0.87, 0.9),
      Pt = V(r, c, [0.87, 0.91], [1, 0.4], kn),
      Et = V(r, c, [0.7, 0.88], [0, 52], xe),
      Gt = [
        X(r, c, 0.715, 0.735, 0.86, 0.885),
        X(r, c, 0.74, 0.76, 0.86, 0.885),
        X(r, c, 0.765, 0.785, 0.86, 0.885),
      ],
      M = [-90, 30, 150],
      U = M.map(($) => (F) => a.R * Math.cos((($ + F) * Math.PI) / 180)),
      tt = M.map(($) => (F) => a.R * Math.sin((($ + F) * Math.PI) / 180)),
      xt = gt(Et, U[0]),
      qt = gt(Et, tt[0]),
      Vt = gt(Et, U[1]),
      Wt = gt(Et, tt[1]),
      Kt = gt(Et, U[2]),
      oe = gt(Et, tt[2]),
      _e = [
        [xt, qt],
        [Vt, Wt],
        [Kt, oe],
      ],
      pe = X(r, c, 0.74, 0.76, 0.87, 0.9),
      Fe = [3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7],
      Ge = ($) => 0.765 + $ * 0.0082,
      Oe = Fe.map(($, F) => V(r, c, [Ge(F), Ge(F) + 0.012], [0, 1], It)),
      Bt = [0.775, 0.805, 0.835],
      nn = Bt.map(($) => X(r, c, $ + 0.008, $ + 0.02, 0.86, 0.89)),
      We = Bt.map(($) => V(r, c, [$ + 0.008, $ + 0.026], [70, 0], It)),
      Yt = a.stacked ? 52 : 62,
      fn = [
        X(r, c, Bt[0] + 0.008, Bt[0] + 0.02, Bt[1], Bt[1] + 0.008),
        X(r, c, Bt[1] + 0.008, Bt[1] + 0.02, Bt[2], Bt[2] + 0.008),
        X(r, c, Bt[2] + 0.008, Bt[2] + 0.02, 0.86, 0.89),
      ],
      rt = [
        V(r, c, [0.805, 0.815, 0.835, 0.845], [0, Yt, Yt, Yt * 2]),
        V(r, c, [0.835, 0.845], [0, Yt]),
        V(r, c, [0.835, 0.845], [0, 0]),
      ],
      bt = X(r, c, 0.9, 0.935),
      Tt = V(r, c, [0.9, 0.945], [0.55, 1], It),
      ce = X(r, c, 0.92, 0.935, 0.962, 0.975),
      le = X(r, c, 0.99, 1),
      je = X(r, c, -0.16, -0.1, 0.165, 0.18),
      Ae = X(r, c, 0.185, 0.2, 0.405, 0.43),
      he = X(r, c, -0.07, 0, 0.16, 0.18),
      Ne = V(r, c, [-0.07, 0], [18, 0], It),
      Po = X(r, c, 0.19, 0.22, 0.4, 0.425),
      Ro = V(r, c, [0.19, 0.22], [18, 0], It),
      Io = X(r, c, 0.46, 0.48, 0.655, 0.675),
      Oo = X(r, c, 0.545, 0.575, 0.655, 0.675),
      Wo = V(r, c, [0.545, 0.575], [18, 0], It),
      zo = V(r, c, [0.528, 0.56], [0, 1], Ft),
      Do = gt(zo, ($) => `inset(-30% ${114 - $ * 128}% -30% -14%)`),
      Ho = X(r, c, 0.68, 0.7, 0.865, 0.885),
      Bo = X(r, c, 0.73, 0.76, 0.865, 0.885),
      Vo = V(r, c, [0.73, 0.76], [18, 0], It),
      Xo = [
        V(r, c, [0, 0.17], [0, 1], xe),
        V(r, c, [0.17, 0.4], [0, 1], xe),
        V(r, c, [0.4, 0.66], [0, 1], xe),
        V(r, c, [0.66, 0.88], [0, 1], xe),
      ],
      Fo = X(r, c, -0.04, 0, 0.88, 0.9),
      Wa = X(r, c, 0.42, 0.47),
      Go = gt(Wa, ($) => 1 - $),
      za = ($) => 0.12 + 0.76 * Math.pow($, 1.55) + 0.025 * Math.sin($ * 9),
      Ko = gt(ut, ($) => ($ - 0.5) * a.chartW),
      Yo = gt(ut, ($) => (za($) - 0.5) * a.chartH),
      Uo = gt(ut, ($) => `inset(-10px ${(1 - $) * 100}% -10px -10px)`),
      Da = f.useMemo(() => {
        const $ = [];
        for (let F = 0; F <= 60; F++) {
          const Ut = F / 60;
          $.push(
            `${(Ut * a.chartW).toFixed(1)},${(za(Ut) * a.chartH).toFixed(1)}`,
          );
        }
        return `M${$.join(" L")}`;
      }, [a.chartW, a.chartH]),
      ot = f.useRef(a);
    ((ot.current = a),
      f.useEffect(() => {
        if (e) return;
        const $ = (Rt, Te) => ({
            x: (Rt / ot.current.w - 0.5) * 2,
            y: (0.5 - Te / ot.current.h) * 2,
          }),
          F = (Rt, Te) => $(ot.current.vx + Rt, ot.current.vy + Te),
          Ut = [
            [
              -0.1,
              () => {
                (A.air($(ot.current.textX + 160, ot.current.textY + 80), {
                  dur: 0.8,
                  from: 200,
                  to: 1400,
                  gain: 0.06,
                }),
                  A.bell(F(0, 0), nt(5, 5), { gain: 0.02, decay: 1.8 }));
              },
            ],
            [
              0.02,
              () =>
                A.printer(
                  F(ot.current.receipt.x, ot.current.receipt.top + 230),
                  { lines: 7, spacing: 0.12, gain: 0.05 },
                ),
            ],
            [
              0.125,
              () =>
                A.thump(F(ot.current.receipt.x, ot.current.receipt.top + 140)),
            ],
            [
              0.17,
              () =>
                A.air(F(0, 0), { dur: 0.6, from: 600, to: 2200, gain: 0.04 }),
            ],
            [
              0.245,
              () =>
                A.tick(F(-ot.current.chartW / 2, ot.current.chartY), {
                  f: nt(4, 5),
                  gain: 0.05,
                }),
            ],
            [
              0.29,
              () => {
                (A.tick(F(-ot.current.chartW / 6, ot.current.chartY), {
                  f: nt(2, 5),
                  gain: 0.05,
                }),
                  A.bell(F(ot.current.c2.x, ot.current.c2.y), nt(2, 4), {
                    gain: 0.03,
                    decay: 1,
                    ratio: 1.41,
                    index: 1,
                  }));
              },
            ],
            [
              0.33,
              () => {
                (A.tick(F(ot.current.chartW / 6, ot.current.chartY), {
                  f: nt(1, 5),
                  gain: 0.05,
                }),
                  A.bell(
                    F(ot.current.fw * 0.4, ot.current.c2.y - 100),
                    nt(4, 4),
                    { gain: 0.035, decay: 0.8, ratio: 1.41 },
                  ),
                  A.bell(
                    F(ot.current.fw * 0.4, ot.current.c2.y - 100),
                    nt(1, 4),
                    { delay: 0.16, gain: 0.035, decay: 1.2, ratio: 1.41 },
                  ));
              },
            ],
            [
              0.355,
              () => {
                (A.crack(F(ot.current.c2.x, ot.current.c2.y)),
                  A.tick(F(ot.current.chartW / 2, ot.current.chartY), {
                    f: nt(0, 5),
                    gain: 0.05,
                  }));
              },
            ],
            [
              0.375,
              () =>
                A.marker($(ot.current.textX + 120, ot.current.textY + 140), {
                  dur: 0.42,
                }),
            ],
            [0.392, () => A.riser({ dur: 1.5, gain: 0.13 })],
            [0.48, () => A.shimmer(F(0, 0), { gain: 0.03, count: 8 })],
            [
              0.535,
              () => {
                (A.marker($(ot.current.textX + 160, ot.current.textY + 100), {
                  dur: 0.36,
                  gain: 0.06,
                }),
                  A.bell(
                    $(ot.current.textX + 160, ot.current.textY + 100),
                    nt(7, 5),
                    { delay: 0.3, gain: 0.035, decay: 2 },
                  ));
              },
            ],
            ...[0, 1, 2, 3].map((Rt) => [
              0.578 + Rt * 0.016,
              () =>
                A.bell(
                  F(ot.current.tiles[Rt].x, ot.current.tiles[Rt].y),
                  nt(5 + [0, 2, 4, 5][Rt], 5),
                  { gain: 0.04, decay: 1.6 },
                ),
            ]),
            [
              0.66,
              () =>
                A.air(F(0, 0), { dur: 0.7, from: 300, to: 1800, gain: 0.05 }),
            ],
            ...[0, 1, 2].map((Rt) => [
              0.72 + Rt * 0.025,
              () =>
                A.bell(
                  F(
                    ot.current.R * Math.cos((M[Rt] * Math.PI) / 180),
                    ot.current.R * Math.sin((M[Rt] * Math.PI) / 180),
                  ),
                  nt([7, 9, 11][Rt], 5),
                  { gain: 0.04, decay: 1.6, ratio: 2.76 },
                ),
            ]),
            ...Fe.map((Rt, Te) => [
              Ge(Te) + 0.004,
              () =>
                A.tick(
                  F(
                    -ot.current.monthW / 2 +
                      (Te + 0.5) * (ot.current.monthW / 12),
                    ot.current.monthY,
                  ),
                  { f: nt(5 + Te, 4) * 2, gain: 0.03 },
                ),
            ]),
            ...Bt.map((Rt) => [
              Rt + 0.004,
              () =>
                A.ping(F(ot.current.vw / 2 - 60, -ot.current.vh / 2 + 80), {
                  gain: 0.045,
                }),
            ]),
            [
              0.895,
              () => {
                (A.pad([nt(0, 3), nt(3, 3), nt(1, 4), nt(2, 4), nt(4, 4)], {
                  gain: 0.07,
                  dur: 2,
                }),
                  A.shimmer($(ot.current.w / 2, ot.current.h / 2), {
                    delay: 0.25,
                    gain: 0.03,
                  }));
              },
            ],
            [
              0.956,
              () =>
                A.air($(ot.current.w / 2, ot.current.h / 2), {
                  dur: 0.6,
                  from: 2400,
                  to: 300,
                  gain: 0.05,
                }),
            ],
            [
              0.986,
              () =>
                A.bell($(ot.current.w / 2, ot.current.h * 0.8), nt(0, 4), {
                  gain: 0.05,
                  decay: 2.2,
                  ratio: 2,
                }),
            ],
          ],
          Ke = (Rt) => (Rt - l) / (1 - l);
        let Ba = r.get();
        return r.on("change", (Rt) => {
          const Te = Ke(Ba),
            Va = Ke(Rt);
          if (((Ba = Rt), Va <= Te)) return;
          Ut.filter(([Gn]) => Gn > Te && Gn <= Va)
            .slice(-2)
            .forEach(([, Gn]) => Gn());
        });
      }, [r, l, e]));
    const Ha = a.fw,
      As = a.fh,
      Qo = [
        "T1",
        "T2",
        "T3",
        "T4",
        "T5",
        "T6",
        "T7",
        "T8",
        "T9",
        "T10",
        "T11",
        "T12",
      ];
    return t.jsxs("section", {
      ref: n,
      id: "tai-san",
      "data-no-motion": !0,
      "aria-label": "Chi phí hay tài sản",
      className:
        "measure-height relative h-[500svh] bg-[#f4f6f9] dark:bg-[#0a0f18] lg:h-[540svh]",
      children: [
        t.jsx("h2", { className: "sr-only", children: "Chi phí hay tài sản?" }),
        t.jsx("p", {
          className: "sr-only",
          children:
            "Phần lớn chủ doanh nghiệp coi website là chi phí: làm một lần rồi bỏ đó, website chậm dần, rớt khỏi Google và phải làm lại. Người coi website là tài sản thì có khách đều mỗi tháng — như vàng, nhà đất, cổ phiếu, tài sản được giữ gìn thì sinh lời. TDDTech bảo vệ, giữ gìn và phát triển website của anh chị mỗi tháng.",
        }),
        t.jsxs("div", {
          ref: s,
          "aria-hidden": "true",
          className: "story-stage sticky top-0 h-[100svh] overflow-hidden",
          children: [
            t.jsx("div", { className: "story-ledger absolute inset-0" }),
            t.jsx("div", {
              className: "absolute z-10 grid",
              style: { left: a.textX, top: a.textY, width: a.textW },
              children: t.jsxs("div", {
                className: "col-start-1 row-start-1",
                children: [
                  t.jsxs("div", {
                    className:
                      "grid text-[11px] font-bold uppercase tracking-[0.28em] text-slate-500 dark:text-white/50 sm:text-xs",
                    children: [
                      t.jsxs(q.span, {
                        style: { opacity: je },
                        className:
                          "col-start-1 row-start-1 flex items-center gap-3",
                        children: [
                          t.jsx("span", { className: "h-px w-8 bg-current" }),
                          "01 — Chi phí",
                        ],
                      }),
                      t.jsxs(q.span, {
                        style: { opacity: Ae },
                        className:
                          "col-start-1 row-start-1 flex items-center gap-3",
                        children: [
                          t.jsx("span", { className: "h-px w-8 bg-current" }),
                          "02 — Bỏ quên",
                        ],
                      }),
                    ],
                  }),
                  t.jsx("p", {
                    className:
                      "mt-4 font-black leading-[1.08] tracking-[-0.035em] text-[#0b1220] dark:text-white",
                    style: { fontSize: a.headline },
                    children: t.jsx(Ze, {
                      P: r,
                      T: c,
                      text: "Phần lớn chủ doanh nghiệp coi website là chi phí.",
                      inn: [-0.15, -0.03],
                      out: [0.405, 0.445],
                      special: {
                        "chi phí.": t.jsxs("span", {
                          className:
                            "relative inline-block text-slate-400 dark:text-white/40",
                          children: [
                            "chi phí.",
                            t.jsx(q.span, {
                              style: { scaleX: W },
                              className:
                                "absolute -inset-x-[0.04em] top-[54%] h-[0.085em] origin-left rounded-full bg-[#0b1220] dark:bg-white",
                            }),
                          ],
                        }),
                      },
                    }),
                  }),
                  !a.stacked || a.w >= 600
                    ? t.jsxs("div", {
                        className:
                          "mt-5 grid max-w-md text-[17px] leading-[1.65] text-slate-600 dark:text-white/60",
                        children: [
                          t.jsx(q.p, {
                            style: { opacity: he, y: Ne },
                            className: "col-start-1 row-start-1",
                            children:
                              "Làm một lần cho xong, ghi vào sổ như mọi khoản chi khác — rồi cất đi.",
                          }),
                          t.jsx(q.p, {
                            style: { opacity: Po, y: Ro },
                            className: "col-start-1 row-start-1",
                            children:
                              "Không ai trông nom: năm đầu chậm dần, năm sau rớt khỏi Google, năm thứ ba phải làm lại từ đầu.",
                          }),
                        ],
                      })
                    : null,
                ],
              }),
            }),
            t.jsxs(q.div, {
              style: {
                opacity: Q,
                left: a.vx,
                top: a.vy,
                x: "-50%",
                y: a.chartY - a.chartH / 2,
              },
              className: "absolute z-[6]",
              children: [
                t.jsxs("div", {
                  className: "relative",
                  style: { width: a.chartW, height: a.chartH },
                  children: [
                    t.jsxs("p", {
                      className:
                        "absolute -top-8 left-0 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500 dark:text-white/45 sm:text-[11px]",
                      children: [
                        t.jsx("span", {
                          className: "h-2 w-2 rounded-full bg-slate-500",
                        }),
                        "Giá trị website theo thời gian",
                      ],
                    }),
                    t.jsx(q.div, {
                      style: { clipPath: Uo },
                      className: "absolute inset-0",
                      children: t.jsxs("svg", {
                        width: a.chartW,
                        height: a.chartH,
                        className: "overflow-visible",
                        children: [
                          t.jsxs("defs", {
                            children: [
                              t.jsxs("linearGradient", {
                                id: "story-decline",
                                x1: "0",
                                y1: "0",
                                x2: "0",
                                y2: "1",
                                children: [
                                  t.jsx("stop", {
                                    offset: "0",
                                    stopColor: "#64748b",
                                    stopOpacity: "0.28",
                                  }),
                                  t.jsx("stop", {
                                    offset: "1",
                                    stopColor: "#64748b",
                                    stopOpacity: "0",
                                  }),
                                ],
                              }),
                              t.jsxs("linearGradient", {
                                id: "story-decline-line",
                                x1: "0",
                                y1: "0",
                                x2: "1",
                                y2: "0",
                                children: [
                                  t.jsx("stop", {
                                    offset: "0",
                                    stopColor: "#334155",
                                  }),
                                  t.jsx("stop", {
                                    offset: "0.6",
                                    stopColor: "#64748b",
                                  }),
                                  t.jsx("stop", {
                                    offset: "1",
                                    stopColor: "#be123c",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          t.jsx("path", {
                            d: `${Da} L${a.chartW},${a.chartH} L0,${a.chartH} Z`,
                            fill: "url(#story-decline)",
                          }),
                          t.jsx("path", {
                            d: Da,
                            fill: "none",
                            stroke: "url(#story-decline-line)",
                            strokeWidth: "2.75",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                          }),
                        ],
                      }),
                    }),
                    t.jsx(q.span, {
                      style: { x: Ko, y: Yo },
                      className:
                        "absolute left-1/2 top-1/2 -ml-[9px] -mt-[9px] h-[18px] w-[18px] rounded-full border-[3px] border-white bg-slate-800 shadow-[0_0_0_7px_rgba(100,116,139,0.2),0_6px_14px_rgba(15,23,42,0.35)] dark:border-[#0a0f18] dark:bg-white",
                    }),
                  ],
                }),
                t.jsx(q.div, {
                  style: { scaleX: Z },
                  className:
                    "mt-3 h-px origin-left bg-slate-300 dark:bg-white/20",
                }),
                t.jsx("div", {
                  className: "relative mt-2 h-10",
                  style: { width: a.chartW },
                  children: [
                    ["Bàn giao", "Mới, nhanh"],
                    ["Năm 1", "Chậm dần"],
                    ["Năm 2", "Rớt Google"],
                    ["Năm 3", "Phải làm lại"],
                  ].map(([$, F], Ut) =>
                    t.jsxs(
                      q.div,
                      {
                        style: { opacity: jt[Ut], left: `${(Ut / 3) * 100}%` },
                        className: `absolute top-0 whitespace-nowrap ${Ut === 0 ? "" : Ut === 3 ? "-translate-x-full text-right" : "-translate-x-1/2 text-center"}`,
                        children: [
                          t.jsx("p", {
                            className:
                              "text-[9.5px] font-bold uppercase tracking-[0.08em] text-slate-800 dark:text-white/85 sm:text-xs sm:tracking-[0.18em]",
                            children: $,
                          }),
                          t.jsx("p", {
                            className: `text-[11px] sm:text-[13px] ${Ut === 3 ? "font-bold text-rose-700 dark:text-rose-300" : "text-slate-500 dark:text-white/55"}`,
                            children: F,
                          }),
                        ],
                      },
                      $,
                    ),
                  ),
                }),
              ],
            }),
            t.jsx(q.div, {
              style: { y: pt, scale: Nt, clipPath: mt },
              className: "absolute inset-0 z-20",
              children: t.jsxs(q.div, {
                style: { y: it },
                className:
                  "story-curtain absolute -left-[15%] -right-[15%] top-0 h-[135%]",
                children: [
                  t.jsx(q.span, {
                    style: { x: ct, y: dt },
                    className:
                      "absolute left-[18%] top-[6%] h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.22),transparent_65%)]",
                  }),
                  t.jsx(q.span, {
                    style: { x: dt, y: ct },
                    className:
                      "absolute right-[16%] top-[30%] h-[70vh] w-[70vh] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_65%)]",
                  }),
                  t.jsx("span", { className: "story-grid absolute inset-0" }),
                ],
              }),
            }),
            t.jsxs("div", {
              className: "absolute z-[25] grid text-white",
              style: { left: a.textX, top: a.textY, width: a.textW },
              children: [
                t.jsxs("div", {
                  className: "col-start-1 row-start-1",
                  children: [
                    t.jsxs(q.p, {
                      style: { opacity: Io },
                      className:
                        "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-200/80 sm:text-xs",
                      children: [
                        t.jsx("span", { className: "h-px w-8 bg-current" }),
                        "03 — Tài sản",
                      ],
                    }),
                    t.jsx("p", {
                      className:
                        "mt-4 font-black leading-[1.08] tracking-[-0.035em]",
                      style: { fontSize: a.headline },
                      children: t.jsx(Ze, {
                        P: r,
                        T: c,
                        text: "Người coi nó là tài sản thì có khách đều mỗi tháng.",
                        inn: [0.465, 0.53],
                        out: [0.655, 0.69],
                        special: {
                          "tài sản": t.jsxs("span", {
                            className: "relative inline-block",
                            children: [
                              "tài sản",
                              t.jsxs(q.span, {
                                "aria-hidden": "true",
                                style: { clipPath: Do },
                                className: "absolute inset-0 select-none",
                                children: [
                                  t.jsx("span", {
                                    className:
                                      "absolute -inset-x-[0.12em] bottom-[0.02em] top-[0.14em] -rotate-2 rounded-sm bg-[#d4ff3f]",
                                  }),
                                  t.jsx("span", {
                                    className: "relative text-[#0f172a]",
                                    children: "tài sản",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                      }),
                    }),
                    !a.stacked || a.w >= 600
                      ? t.jsx(q.p, {
                          style: { opacity: Oo, y: Wo },
                          className:
                            "mt-5 max-w-md text-[17px] leading-[1.65] text-white/70",
                          children:
                            "Như vàng, nhà đất, cổ phiếu: tài sản được giữ gìn thì sinh lời. Website đứng tên doanh nghiệp anh chị và làm việc 24/7.",
                        })
                      : null,
                  ],
                }),
                t.jsxs("div", {
                  className: "col-start-1 row-start-1",
                  children: [
                    t.jsxs(q.p, {
                      style: { opacity: Ho },
                      className:
                        "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-200/80 sm:text-xs",
                      children: [
                        t.jsx("span", { className: "h-px w-8 bg-current" }),
                        "04 — Vận hành",
                      ],
                    }),
                    t.jsx("p", {
                      className:
                        "mt-4 font-black leading-[1.08] tracking-[-0.035em]",
                      style: { fontSize: a.headline },
                      children: t.jsx(Ze, {
                        P: r,
                        T: c,
                        text: "TDDTech bảo vệ, giữ gìn và phát triển nó — mỗi tháng.",
                        inn: [0.685, 0.745],
                        out: [0.865, 0.895],
                        special: {
                          TDDTech: t.jsx("span", {
                            className: "text-cyan-300",
                            children: "TDDTech",
                          }),
                        },
                      }),
                    }),
                    !a.stacked || a.w >= 600
                      ? t.jsx(q.p, {
                          style: { opacity: Bo, y: Vo },
                          className:
                            "mt-5 max-w-md text-[17px] leading-[1.65] text-white/70",
                          children:
                            "Sao lưu, giám sát, cập nhật, SEO và nội dung — báo cáo số liệu thật ngày 1 hằng tháng.",
                        })
                      : null,
                  ],
                }),
              ],
            }),
            t.jsx("svg", {
              width: "0",
              height: "0",
              className: "absolute",
              children: t.jsx("defs", {
                children: t.jsxs("linearGradient", {
                  id: "ag",
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "1",
                  children: [
                    t.jsx("stop", {
                      offset: "0",
                      stopColor: "#67e8f9",
                      stopOpacity: "0.45",
                    }),
                    t.jsx("stop", {
                      offset: "1",
                      stopColor: "#67e8f9",
                      stopOpacity: "0.05",
                    }),
                  ],
                }),
              }),
            }),
            [
              { label: "Vàng", sub: "Cất giữ an toàn", Icon: Qd },
              { label: "Nhà đất", sub: "Bảo trì, cho thuê", Icon: Zd },
              { label: "Cổ phiếu", sub: "Theo dõi, nắm giữ", Icon: Jd },
              { label: "Website", sub: "Vận hành mỗi tháng", Icon: null },
            ].map(($, F) =>
              t.jsx(
                q.div,
                {
                  style: {
                    opacity: St[F],
                    left: a.vx + a.tiles[F].x - a.tw / 2,
                    top: a.vy + a.tiles[F].y - a.th / 2,
                    y: H[F],
                    width: a.tw,
                    height: a.th,
                  },
                  className: `story-tile absolute ${F === 3 ? "z-[28]" : "z-[26]"}`,
                  children: t.jsxs("div", {
                    className: "flex h-full flex-col p-3 sm:p-3.5",
                    children: [
                      t.jsx("div", {
                        className:
                          "flex aspect-[1.9] items-center justify-center text-white sm:aspect-[1.55]",
                        children: $.Icon
                          ? t.jsx("span", {
                              className: "block h-[70%]",
                              children: t.jsx($.Icon, {}),
                            })
                          : null,
                      }),
                      t.jsx("p", {
                        className:
                          "mt-auto text-[15px] font-extrabold leading-tight text-white sm:text-[17px]",
                        children: $.label,
                      }),
                      t.jsx("p", {
                        className: "text-[11px] text-cyan-100/60 sm:text-xs",
                        children: $.sub,
                      }),
                      t.jsx("svg", {
                        viewBox: "0 0 100 26",
                        className: "mt-2 h-5 w-full overflow-visible sm:h-6",
                        children: t.jsx(q.path, {
                          style: { pathLength: J },
                          d: [
                            "M0 22 C18 20 30 15 46 15 S74 8 100 3",
                            "M0 20 C20 19 36 16 52 12 S80 9 100 4",
                            "M0 23 C14 14 26 20 42 13 S70 10 100 2",
                            "M0 24 C16 22 30 18 48 14 S78 6 100 1",
                          ][F],
                          fill: "none",
                          stroke: "#67e8f9",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                        }),
                      }),
                    ],
                  }),
                },
                $.label,
              ),
            ),
            t.jsx(q.div, {
              style: {
                opacity: ft,
                left: a.vx,
                top: a.vy + a.shelfNoteY,
                width: a.stacked ? a.tw * 2 + 12 : a.tw * 4 + 54,
                x: "-50%",
              },
              className: "absolute z-[26]",
              children: t.jsxs("div", {
                className:
                  "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-100/70 sm:text-xs",
                children: [
                  t.jsx(q.span, {
                    style: { scaleX: vt },
                    className:
                      "h-px flex-1 origin-left bg-gradient-to-r from-cyan-300/0 via-cyan-300/70 to-cyan-300",
                  }),
                  t.jsx("span", {
                    className: "whitespace-nowrap",
                    children: "Được giữ gìn → giá trị tăng dần",
                  }),
                ],
              }),
            }),
            t.jsxs(q.div, {
              style: {
                opacity: Jt,
                scale: Pt,
                left: a.vx + a.c4.x,
                top: a.vy + a.c4.y,
                width: a.R * 2,
                height: a.R * 2,
                x: "-50%",
                y: "-50%",
              },
              className: "absolute z-[26]",
              children: [
                t.jsxs("svg", {
                  viewBox: "0 0 200 200",
                  className: "absolute inset-0 h-full w-full overflow-visible",
                  children: [
                    t.jsx("defs", {
                      children: t.jsxs("linearGradient", {
                        id: "ring",
                        x1: "0",
                        y1: "0",
                        x2: "1",
                        y2: "1",
                        children: [
                          t.jsx("stop", { offset: "0", stopColor: "#67e8f9" }),
                          t.jsx("stop", {
                            offset: "0.5",
                            stopColor: "#ffffff",
                            stopOpacity: "0.6",
                          }),
                          t.jsx("stop", {
                            offset: "1",
                            stopColor: "#38bdf8",
                            stopOpacity: "0.2",
                          }),
                        ],
                      }),
                    }),
                    t.jsx("circle", {
                      cx: "100",
                      cy: "100",
                      r: "99",
                      fill: "none",
                      stroke: "rgba(255,255,255,0.1)",
                      strokeWidth: "0.5",
                      strokeDasharray: "0.6 2.4",
                    }),
                    t.jsx(q.circle, {
                      style: { pathLength: wt },
                      transform: "rotate(-90 100 100)",
                      cx: "100",
                      cy: "100",
                      r: "99",
                      fill: "none",
                      stroke: "#22d3ee",
                      strokeOpacity: "0.16",
                      strokeWidth: "3.2",
                      strokeLinecap: "round",
                    }),
                    t.jsx(q.circle, {
                      style: { pathLength: wt },
                      transform: "rotate(-90 100 100)",
                      cx: "100",
                      cy: "100",
                      r: "99",
                      fill: "none",
                      stroke: "url(#ring)",
                      strokeWidth: "0.85",
                      strokeLinecap: "round",
                    }),
                  ],
                }),
                t.jsx(q.div, {
                  style: { rotate: Et },
                  className: "absolute inset-0",
                  children: t.jsx("span", {
                    className:
                      "absolute left-1/2 top-0 -ml-1 -mt-1 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_4px_rgba(103,232,249,0.6)]",
                  }),
                }),
              ],
            }),
            [
              { Icon: hn, label: "Bảo vệ", sub: "Sao lưu · giám sát 24/7" },
              { Icon: Ts, label: "Giữ gìn", sub: "Cập nhật · sửa lỗi" },
              { Icon: wa, label: "Phát triển", sub: "SEO · nội dung" },
            ].map(($, F) =>
              t.jsx(
                q.div,
                {
                  style: {
                    opacity: Gt[F],
                    left: a.vx + a.c4.x,
                    top: a.vy + a.c4.y,
                    x: _e[F][0],
                    y: _e[F][1],
                  },
                  className: "absolute z-[31]",
                  children: t.jsx("div", {
                    className: "-translate-x-1/2 -translate-y-1/2",
                    children: t.jsxs("div", {
                      className:
                        "flex items-center gap-2.5 whitespace-nowrap rounded-full border border-cyan-300/25 bg-[#0a1b2e]/95 py-1.5 pl-1.5 pr-4 shadow-[0_14px_34px_-10px_rgba(0,0,0,0.7),0_0_0_4px_rgba(34,211,238,0.06)]",
                      children: [
                        t.jsx("span", {
                          className:
                            "flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-white to-cyan-100 text-[#0369a1] shadow-[0_0_18px_rgba(103,232,249,0.55)] sm:h-10 sm:w-10",
                          children: t.jsx($.Icon, {
                            className: "h-4 w-4 sm:h-5 sm:w-5",
                          }),
                        }),
                        t.jsxs("span", {
                          className: "leading-tight",
                          children: [
                            t.jsx("span", {
                              className:
                                "block text-[13px] font-extrabold text-white sm:text-[15px]",
                              children: $.label,
                            }),
                            a.stacked
                              ? null
                              : t.jsx("span", {
                                  className: "block text-xs text-cyan-100/60",
                                  children: $.sub,
                                }),
                          ],
                        }),
                      ],
                    }),
                  }),
                },
                $.label,
              ),
            ),
            t.jsxs(q.div, {
              style: {
                opacity: pe,
                left: a.vx,
                top: a.vy + a.monthY,
                width: a.monthW,
                x: "-50%",
                y: "-50%",
              },
              className: "absolute z-[26]",
              children: [
                t.jsxs("div", {
                  className:
                    "mb-2 flex items-baseline justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-white/55 sm:text-[11px]",
                  children: [
                    t.jsx("span", {
                      children:
                        a.w < 600
                          ? "Khách hỏi · mỗi tháng"
                          : "Khách hỏi qua website · mỗi tháng",
                    }),
                    t.jsx("span", {
                      className:
                        "font-medium normal-case tracking-normal text-white/35",
                      children: "minh hoạ",
                    }),
                  ],
                }),
                t.jsx("div", {
                  className: "grid grid-cols-12 items-end gap-1.5",
                  children: Qo.map(($, F) =>
                    t.jsxs(
                      "div",
                      {
                        className: "flex flex-col items-center gap-1",
                        children: [
                          t.jsx(q.div, {
                            style: { scaleY: Oe[F], opacity: Oe[F] },
                            className:
                              "flex origin-bottom flex-col-reverse gap-[2px] sm:gap-[3px]",
                            children: Array.from({ length: Fe[F] }).map(
                              (Ut, Ke) =>
                                t.jsx(
                                  "span",
                                  {
                                    className:
                                      "block h-1 w-1 rounded-full bg-cyan-300 sm:h-1.5 sm:w-1.5",
                                  },
                                  Ke,
                                ),
                            ),
                          }),
                          t.jsx("span", {
                            className:
                              "text-[9px] font-semibold text-white/45 sm:text-[10px]",
                            children: $,
                          }),
                        ],
                      },
                      $,
                    ),
                  ),
                }),
              ],
            }),
            t.jsx("div", {
              className: "pointer-events-none absolute inset-0 z-30",
              style: { perspective: 1600 },
              children: t.jsxs(q.div, {
                style: {
                  left: a.vx,
                  top: a.vy,
                  x: p,
                  y: d,
                  scale: m,
                  rotateX: u,
                  rotateY: x,
                  rotate: v,
                  opacity: w,
                  width: Ha,
                  height: As,
                  marginLeft: -Ha / 2,
                  marginTop: -As / 2,
                },
                className: "absolute will-change-transform",
                children: [
                  t.jsx(q.span, {
                    style: { opacity: T },
                    className:
                      "absolute -inset-10 rounded-[48px] bg-[radial-gradient(closest-side,rgba(34,211,238,0.45),transparent)]",
                  }),
                  t.jsxs("div", {
                    className:
                      "story-frame relative h-full w-full overflow-hidden rounded-[14px] sm:rounded-[18px]",
                    children: [
                      t.jsxs("div", {
                        className:
                          "relative flex items-center gap-1.5 border-b border-slate-200/80 bg-[#f6f7f9] px-3",
                        style: { height: a.chrome },
                        children: [
                          [0, 1, 2].map(($) =>
                            t.jsx(
                              "span",
                              {
                                className:
                                  "h-2 w-2 rounded-full bg-slate-300 sm:h-2.5 sm:w-2.5",
                              },
                              $,
                            ),
                          ),
                          t.jsxs("div", {
                            className:
                              "relative ml-2 flex h-[62%] flex-1 items-center rounded-md bg-white px-2 text-[10px] text-slate-500 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.06)] sm:max-w-[60%] sm:text-[11px]",
                            children: [
                              t.jsxs(q.span, {
                                style: { opacity: D },
                                className:
                                  "absolute inset-0 flex items-center gap-1.5 px-2",
                                children: [
                                  t.jsx(Ec, {
                                    className: "h-3 w-3 text-emerald-600",
                                  }),
                                  "website của anh chị",
                                ],
                              }),
                              t.jsxs(q.span, {
                                style: { opacity: S },
                                className:
                                  "absolute inset-0 flex items-center gap-1.5 px-2 font-semibold text-rose-600",
                                children: [
                                  t.jsx(mr, { className: "h-3 w-3" }),
                                  "Không bảo mật",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "relative",
                        style: { height: As - a.chrome },
                        children: [
                          t.jsx(vi, {}),
                          t.jsxs(q.div, {
                            style: { opacity: y },
                            className:
                              "absolute inset-0 [filter:grayscale(1)_contrast(0.92)_brightness(0.96)]",
                            children: [
                              t.jsx(vi, {}),
                              t.jsx("span", {
                                className: "story-grain absolute inset-0",
                              }),
                            ],
                          }),
                          t.jsx(q.div, {
                            style: { opacity: N },
                            className:
                              "absolute inset-0 flex items-center justify-center bg-white/55",
                            children: t.jsx(q.span, {
                              style: { rotate: j },
                              className:
                                "block h-9 w-9 rounded-full border-[3px] border-slate-300 border-t-slate-600 sm:h-11 sm:w-11",
                            }),
                          }),
                          t.jsxs(q.svg, {
                            style: { opacity: L },
                            viewBox: "0 0 100 62",
                            preserveAspectRatio: "none",
                            className: "absolute inset-0 h-full w-full",
                            children: [
                              [
                                "M58 26 L50 12 L53 4 L49 -2",
                                "M58 26 L70 20 L84 22 L102 15",
                                "M58 26 L64 38 L60 48 L66 64",
                                "M58 26 L44 31 L34 28 L18 36 L-2 34",
                                "M58 26 L52 40 L42 46",
                              ].map(($, F) =>
                                t.jsx(
                                  q.path,
                                  {
                                    d: $,
                                    style: { pathLength: E },
                                    fill: "none",
                                    stroke: "#0f172a",
                                    strokeOpacity: "0.55",
                                    strokeWidth: F === 4 ? 0.35 : 0.5,
                                    strokeLinejoin: "round",
                                  },
                                  F,
                                ),
                              ),
                              t.jsx("circle", {
                                cx: "58",
                                cy: "26",
                                r: "1.2",
                                fill: "#0f172a",
                                fillOpacity: "0.4",
                              }),
                            ],
                          }),
                          t.jsx(q.span, {
                            style: { x: _ },
                            className:
                              "absolute inset-y-0 left-0 w-[45%] -skew-x-12 bg-gradient-to-r from-transparent via-white/55 to-transparent",
                          }),
                        ],
                      }),
                    ],
                  }),
                  t.jsx(q.div, {
                    style: { opacity: k },
                    className: "absolute -right-3 -top-4 sm:-right-6 sm:-top-5",
                    children: t.jsxs("div", {
                      className:
                        "flex items-center gap-2 rounded-full bg-white py-1.5 pl-2 pr-3 text-[11px] font-bold text-slate-800 shadow-[0_12px_30px_-10px_rgba(15,23,42,0.45)] ring-1 ring-slate-200 sm:text-xs",
                      children: [
                        t.jsx(we, { className: "h-3.5 w-3.5 text-slate-500" }),
                        "Google",
                        t.jsxs("span", {
                          className: "relative inline-grid",
                          children: [
                            t.jsx(q.span, {
                              style: { opacity: B },
                              className:
                                "col-start-1 row-start-1 text-emerald-600",
                              children: "Trang 1",
                            }),
                            t.jsx(q.span, {
                              style: { opacity: b },
                              className:
                                "col-start-1 row-start-1 whitespace-nowrap text-rose-600",
                              children: "Trang 3 ↓",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            t.jsxs(q.div, {
              style: {
                opacity: Y,
                left: a.vx + a.receipt.x - a.receipt.w / 2,
                top: a.vy + a.receipt.top,
                x: R,
                y: et,
                rotate: at,
                width: a.receipt.w,
              },
              className: "story-receipt-wrap absolute z-[32]",
              children: [
                t.jsx("div", {
                  className: "overflow-hidden",
                  children: t.jsxs(q.div, {
                    style: { y: z },
                    className:
                      "story-receipt relative px-3.5 pb-9 pt-4 font-mono text-[10px] leading-[1.55] text-slate-700 sm:px-5 sm:pb-11 sm:pt-6 sm:text-[11.5px]",
                    children: [
                      t.jsx("p", {
                        className:
                          "text-center text-[11px] font-bold tracking-[0.3em] text-slate-900 sm:text-xs",
                        children: "PHIẾU CHI",
                      }),
                      t.jsx("p", {
                        className:
                          "mt-0.5 text-center text-[9.5px] text-slate-400 sm:text-[10px]",
                        children: "Ngày bàn giao website",
                      }),
                      t.jsx("div", {
                        className:
                          "my-2.5 border-t border-dashed border-slate-300",
                      }),
                      [
                        ["Thiết kế website", "1 lần"],
                        ["Bảo trì, sao lưu", "—"],
                        ["Cập nhật bảo mật", "—"],
                        ["SEO, nội dung", "—"],
                        ["Báo cáo tháng", "—"],
                      ]
                        .slice(0, a.w < 600 ? 4 : 5)
                        .map(([$, F], Ut) =>
                          t.jsxs(
                            "p",
                            {
                              className: `flex justify-between gap-2 ${Ut === 0 ? "font-bold text-slate-900" : "text-slate-400"}`,
                              children: [
                                t.jsx("span", { children: $ }),
                                t.jsx("span", { children: F }),
                              ],
                            },
                            $,
                          ),
                        ),
                      t.jsx("div", {
                        className:
                          "my-2.5 border-t border-dashed border-slate-300",
                      }),
                      t.jsx("p", {
                        className:
                          "text-[9.5px] leading-snug text-slate-500 sm:text-[10.5px]",
                        children:
                          a.w < 600
                            ? "Sau bàn giao: không ai lo."
                            : "Sau bàn giao: không ai phụ trách.",
                      }),
                      t.jsx(q.span, {
                        style: { opacity: st, scale: P, rotate: -9 },
                        className:
                          "story-stamp absolute bottom-2.5 right-3 sm:right-4",
                        children: "ĐÃ CHI",
                      }),
                    ],
                  }),
                }),
                t.jsxs("div", {
                  className:
                    "relative z-10 -mx-3 -mt-[3px] h-[20px] rounded-[7px] bg-gradient-to-b from-[#3b4658] to-[#0f172a] shadow-[0_10px_18px_-8px_rgba(0,0,0,0.7)]",
                  children: [
                    t.jsx("span", {
                      className:
                        "absolute inset-x-4 top-[3px] h-[2px] rounded-full bg-black/80",
                    }),
                    t.jsx("span", {
                      className:
                        "absolute bottom-[5px] right-2.5 h-[5px] w-[5px] rounded-full bg-emerald-400 shadow-[0_0_6px_1px_rgba(52,211,153,0.9)]",
                    }),
                  ],
                }),
              ],
            }),
            [
              {
                icon: t.jsx("img", {
                  src: "/zalo-icon.png",
                  alt: "",
                  className: "h-full w-full rounded-[7px]",
                }),
                title: "Khách hỏi giá qua Zalo",
                sub: "Từ website · vừa xong",
              },
              {
                icon: t.jsx("span", {
                  className:
                    "flex h-full w-full items-center justify-center rounded-[7px] bg-emerald-500 text-white",
                  children: t.jsx(dn, { className: "h-4 w-4" }),
                }),
                title: "Đơn hàng mới",
                sub: "2 sản phẩm · thanh toán khi nhận",
              },
              {
                icon: t.jsx("span", {
                  className:
                    "flex h-full w-full items-center justify-center rounded-[7px] bg-[#0369a1] text-white",
                  children: t.jsx(ur, { className: "h-4 w-4" }),
                }),
                title: "Lịch hẹn tư vấn",
                sub: "Đặt qua website · thứ Ba 9:30",
              },
            ].map(($, F) =>
              t.jsx(
                q.div,
                {
                  style: {
                    opacity: a.w < 600 ? fn[F] : nn[F],
                    x: We[F],
                    y: a.w < 600 ? 0 : rt[F],
                    width: a.toast.w,
                    left: a.stacked
                      ? Math.max(12, a.vx - a.toast.w / 2 - 34)
                      : Math.min(
                          a.vx + a.c4.x + (a.fw * a.c4.s) / 2 - 70,
                          a.w - a.toast.w - 36,
                        ),
                    top: a.stacked
                      ? a.vy + a.c4.y - a.R - 50
                      : a.vy + a.c4.y - 92,
                  },
                  className: "absolute z-[35]",
                  children: t.jsxs("div", {
                    className:
                      "flex items-center gap-3 rounded-[14px] bg-white/95 p-2.5 shadow-[0_18px_40px_-14px_rgba(0,0,0,0.55)] ring-1 ring-black/5",
                    children: [
                      t.jsx("span", {
                        className: "h-8 w-8 flex-none",
                        children: $.icon,
                      }),
                      t.jsxs("span", {
                        className: "min-w-0 flex-1 leading-tight",
                        children: [
                          t.jsx("span", {
                            className:
                              "block truncate text-[12.5px] font-bold text-slate-900 sm:text-[13px]",
                            children: $.title,
                          }),
                          t.jsx("span", {
                            className:
                              "block truncate text-[11px] text-slate-500 sm:text-xs",
                            children: $.sub,
                          }),
                        ],
                      }),
                      t.jsx("span", {
                        className: "self-start text-[10px] text-slate-400",
                        children: "vừa xong",
                      }),
                    ],
                  }),
                },
                $.title,
              ),
            ),
            t.jsxs(q.div, {
              style: { y: pt, scale: Nt },
              className:
                "pointer-events-none absolute inset-0 z-40 flex items-center justify-center",
              children: [
                t.jsx(q.img, {
                  style: { opacity: bt, scale: Tt },
                  src: "/brand/logo-dark.png",
                  alt: "",
                  width: 256,
                  height: 256,
                  className: "h-32 w-32 md:h-40 md:w-40",
                }),
                t.jsxs(q.p, {
                  style: { opacity: ce },
                  className:
                    "absolute inset-x-0 top-[calc(50%+88px)] px-4 text-center text-2xl font-black tracking-[-0.02em] text-white md:top-[calc(50%+108px)] md:text-4xl",
                  children: [
                    "Website là tài sản. ",
                    t.jsx("span", {
                      className: "text-cyan-300",
                      children: "TDDTech",
                    }),
                    " giữ nó sinh lời.",
                  ],
                }),
              ],
            }),
            t.jsx(q.p, {
              style: { opacity: le, top: i.h * 0.8 - (a.stacked ? 100 : 122) },
              className:
                "pointer-events-none absolute inset-x-0 z-40 text-center text-xs font-bold uppercase tracking-[0.24em] text-slate-500 dark:text-white/50 sm:text-sm",
              children: "Ba việc TDDTech làm cho anh chị ↓",
            }),
            t.jsx(q.div, {
              style: { opacity: Fo },
              className:
                "pointer-events-none absolute bottom-4 left-1/2 z-50 -translate-x-1/2 sm:bottom-7",
              children: t.jsx("div", {
                className: "grid",
                children: [
                  {
                    o: Go,
                    tone: "text-slate-700 dark:text-white/80",
                    track: "bg-slate-900/10 dark:bg-white/15",
                    fill: "bg-slate-900 dark:bg-white",
                  },
                  {
                    o: Wa,
                    tone: "text-white/85",
                    track: "bg-white/15",
                    fill: "bg-cyan-300",
                  },
                ].map(($, F) =>
                  t.jsx(
                    q.div,
                    {
                      style: { opacity: $.o },
                      className: `col-start-1 row-start-1 flex gap-2 sm:gap-3 ${$.tone}`,
                      children: [
                        "Chi phí",
                        "Bỏ quên",
                        "Tài sản",
                        "Vận hành",
                      ].map((Ut, Ke) =>
                        t.jsxs(
                          "div",
                          {
                            className: "w-[19vw] max-w-[112px] sm:w-[112px]",
                            children: [
                              t.jsxs("p", {
                                className:
                                  "mb-1.5 truncate text-[9.5px] font-bold uppercase tracking-[0.16em] sm:text-[10.5px]",
                                children: [
                                  String(Ke + 1).padStart(2, "0"),
                                  " ",
                                  Ut,
                                ],
                              }),
                              t.jsx("div", {
                                className: `h-[2px] overflow-hidden rounded-full ${$.track}`,
                                children: t.jsx(q.div, {
                                  style: { scaleX: Xo[Ke] },
                                  className: `h-full origin-left ${$.fill}`,
                                }),
                              }),
                            ],
                          },
                          Ut,
                        ),
                      ),
                    },
                    F,
                  ),
                ),
              }),
            }),
          ],
        }),
      ],
    });
  },
  lo = () => {
    try {
      const e = document.createElement("canvas");
      return !!(e.getContext("webgl2") || e.getContext("webgl"));
    } catch {
      return !1;
    }
  },
  wi = 84,
  yi = ({ w: e, h: n }) => {
    const s = e < 1024;
    if (!s) {
      const g = Math.min(1.3, Math.max(1, e / 1440)),
        p = Math.max(Math.min(72, e * 0.045), (e - 1320 * g) / 2),
        d = Math.min(500 * g, (e - 2 * p) * 0.38),
        m = p + d + 40,
        u = (m + e - p) / 2;
      return {
        portrait: s,
        w: e,
        h: n,
        k: g,
        textX: p,
        textY: wi + Math.max(36, n * 0.07),
        textW: d,
        headline: Math.max(34, Math.min(58 * g, e * 0.036)),
        stage: {
          w: e,
          h: n,
          cx: u,
          cy: n * 0.53,
          size: Math.min((e - p - m) * 0.74, 700 * g, n * 0.66),
          portrait: !1,
        },
      };
    }
    const i = e < 600 ? 18 : 40,
      a = wi - 8,
      o = Math.max(25, Math.min(42, e * 0.07)),
      r = e < 600 ? 72 : 96,
      l = Math.round(o * 1.08 * 3 + 38 + r),
      c = a + l + 8,
      h = n - 56;
    return {
      portrait: s,
      w: e,
      h: n,
      k: 1,
      textX: i,
      textY: a,
      textW: e - 2 * i,
      headline: o,
      stage: {
        w: e,
        h: n,
        cx: e / 2,
        cy: (c + h) / 2,
        size: Math.min(e * 0.8, (h - c) * 1.05, 560),
        portrait: !0,
      },
    };
  },
  em = () => {
    const e = f.useRef({});
    return {
      set: (i) => (a) => {
        e.current[i] = a;
      },
      apply: (i) => {
        const a = window.innerWidth;
        for (const o in e.current) {
          const r = e.current[o],
            l = r == null ? void 0 : r.dataset.anchor,
            c = l ? i[l] : void 0;
          if (
            !(!r || !c) &&
            ((r.style.transform = `translate3d(${c.x.toFixed(1)}px, ${c.y.toFixed(1)}px, 0)`),
            r.dataset.flip !== void 0)
          ) {
            const h = c.x > a * 0.58 ? "l" : "r";
            r.dataset.side !== h && (r.dataset.side = h);
          }
        }
      },
    };
  },
  nm = () => {
    const e = Zt(),
      [n] = f.useState(() => typeof window < "u" && lo());
    return e ? t.jsx(ro, {}) : n ? t.jsx(sm, {}) : t.jsx(co, {});
  },
  sm = () => {
    const e = f.useRef(null),
      n = f.useRef(null),
      s = f.useRef(null),
      i = f.useRef(null),
      a = f.useRef({}),
      o = oo(n, e),
      r = f.useMemo(() => yi(o), [o]),
      [l, c] = f.useState(!1),
      { set: h, apply: g } = em(),
      { scrollYProgress: p } = Je({
        target: e,
        offset: ["start end", "end end"],
      }),
      d = gn(p, { stiffness: 320, damping: 44, mass: 0.5, restDelta: 5e-5 }),
      m = Math.min(0.4, o.h / Math.max(o.sectionH, 1)),
      u = Kd(m),
      x = (M) => (M - m) / (1 - m);
    f.useEffect(() => {
      const M = e.current,
        U = s.current;
      if (!M || !U) return;
      let tt = null,
        xt = !1;
      const qt = document.documentElement.classList.contains("low-power");
      return (
        Jr(
          (async () => {
            try {
              const Wt = await zt(
                () => import("./world-CfZ9xr8b.js"),
                __vite__mapDeps([0, 1]),
              );
              if (
                xt ||
                ((tt = new Wt.AssetWorld(U, {
                  lowPower: qt,
                  dark: document.documentElement.classList.contains("dark"),
                  onAnchors: (Kt) => {
                    ((a.current = Kt), g(Kt));
                  },
                })),
                (i.current = tt),
                tt.setLayout(
                  yi({
                    w: n.current.clientWidth,
                    h: n.current.clientHeight,
                    sectionH: 1,
                  }).stage,
                ),
                tt.setTau(x(d.get())),
                await tt.init(),
                xt)
              )
                return;
              tt.setVisible(v.current && w.current);
            } catch {
              xt || c(!0);
            }
          })(),
        ),
        () => {
          ((xt = !0), tt == null || tt.dispose(), (i.current = null));
        }
      );
    }, []);
    const v = f.useRef(!1),
      w = f.useRef(!0);
    (f.useEffect(() => {
      const M = e.current;
      if (!M) return;
      const U = new IntersectionObserver(
        ([tt]) => {
          var xt;
          ((v.current = tt.isIntersecting),
            (xt = i.current) == null ||
              xt.setVisible(tt.isIntersecting && w.current));
        },
        { rootMargin: "10% 0px" },
      );
      return (U.observe(M), () => U.disconnect());
    }, []),
      f.useEffect(() => {
        var M;
        (M = i.current) == null || M.setLayout(r.stage);
      }, [r]),
      bs(d, "change", (M) => {
        var U;
        return (U = i.current) == null ? void 0 : U.setTau(x(M));
      }),
      f.useEffect(() => {
        var M;
        (M = i.current) == null || M.setTau(x(d.get()));
      }, [m]),
      f.useEffect(() => {
        if (!window.matchMedia("(pointer: fine)").matches) return;
        const M = (U) => {
          var tt;
          return (tt = i.current) == null
            ? void 0
            : tt.setPointer(
                (U.clientX / window.innerWidth - 0.5) * 2,
                (0.5 - U.clientY / window.innerHeight) * 2,
              );
        };
        return (
          window.addEventListener("pointermove", M, { passive: !0 }),
          () => window.removeEventListener("pointermove", M)
        );
      }, []),
      f.useEffect(() => {
        const M = document.documentElement,
          U = new MutationObserver(() => {
            var tt;
            return (tt = i.current) == null
              ? void 0
              : tt.setDark(M.classList.contains("dark"));
          });
        return (
          U.observe(M, { attributes: !0, attributeFilter: ["class"] }),
          () => U.disconnect()
        );
      }, []),
      f.useEffect(() => {
        const M = (xt, qt = 0.5, Vt = 0.5) => {
            const Wt = a.current[xt],
              Kt = window.innerWidth,
              oe = window.innerHeight,
              _e = Wt ? Wt.x : qt * Kt,
              pe = Wt ? Wt.y : Vt * oe;
            return { x: (_e / Kt - 0.5) * 2, y: (0.5 - pe / oe) * 2 };
          },
          U = [
            [
              -0.12,
              () => {
                (A.air(M("slabC"), {
                  dur: 1.1,
                  from: 160,
                  to: 1600,
                  gain: 0.07,
                  toPos: M("slabC"),
                }),
                  A.bell(M("slabC"), nt(5, 5), { gain: 0.022, decay: 2 }));
              },
            ],
            [
              0.015,
              () =>
                A.printer(M("printer"), {
                  lines: 8,
                  spacing: 0.12,
                  gain: 0.05,
                }),
            ],
            [0.125, () => A.thump(M("printer"), { gain: 0.24 })],
            [
              0.17,
              () =>
                A.air(M("slabC"), {
                  dur: 0.7,
                  from: 600,
                  to: 2200,
                  gain: 0.04,
                }),
            ],
            [0.245, () => A.tick(M("y0"), { f: nt(4, 5), gain: 0.05 })],
            [
              0.285,
              () => {
                (A.tick(M("y1"), { f: nt(2, 5), gain: 0.05 }),
                  A.bell(M("slabC"), nt(2, 4), {
                    gain: 0.03,
                    decay: 1,
                    ratio: 1.41,
                    index: 1,
                  }));
              },
            ],
            [
              0.325,
              () => {
                (A.tick(M("y2"), { f: nt(1, 5), gain: 0.05 }),
                  A.bell(M("slabTR"), nt(4, 4), {
                    gain: 0.035,
                    decay: 0.8,
                    ratio: 1.41,
                  }),
                  A.bell(M("slabTR"), nt(1, 4), {
                    delay: 0.16,
                    gain: 0.035,
                    decay: 1.2,
                    ratio: 1.41,
                  }));
              },
            ],
            [
              0.355,
              () => {
                (A.crack(M("slabC")),
                  A.tick(M("y3"), { f: nt(0, 5), gain: 0.05 }));
              },
            ],
            [
              0.378,
              () =>
                A.air(M("slabC"), {
                  dur: 1.3,
                  from: 2400,
                  to: 180,
                  gain: 0.07,
                  toPos: { x: M("slabC").x, y: -1 },
                }),
            ],
            [0.39, () => A.riser({ dur: 1.5, gain: 0.13 })],
            [
              0.445,
              () =>
                A.air(
                  { x: 0, y: -0.9 },
                  {
                    dur: 1,
                    from: 200,
                    to: 2600,
                    gain: 0.06,
                    toPos: M("slabC"),
                  },
                ),
            ],
            [0.48, () => A.shimmer(M("slabC"), { gain: 0.03, count: 8 })],
            [
              0.55,
              () => A.marker(M("slabC", 0.2, 0.25), { dur: 0.36, gain: 0.06 }),
            ],
            ...[0, 1, 2, 3].map((xt) => [
              0.575 + xt * 0.016,
              () =>
                A.bell(M(`a${xt}`), nt(5 + [0, 2, 4, 5][xt], 5), {
                  gain: 0.04,
                  decay: 1.6,
                }),
            ]),
            [
              0.66,
              () =>
                A.air(M("slabC"), {
                  dur: 0.7,
                  from: 300,
                  to: 1800,
                  gain: 0.05,
                }),
            ],
            ...[0, 1, 2].map((xt) => [
              0.72 + xt * 0.025,
              () =>
                A.bell(M(`n${xt}`), nt([7, 9, 11][xt], 5), {
                  gain: 0.04,
                  decay: 1.6,
                  ratio: 2.76,
                }),
            ]),
            ...Array.from({ length: 12 }, (xt, qt) => [
              0.769 + qt * 0.0082,
              () => A.tick(M("monthL"), { f: nt(5 + qt, 4) * 2, gain: 0.028 }),
            ]),
            ...[0.775, 0.805, 0.835].map((xt) => [
              xt + 0.006,
              () => A.ping(M("slabR"), { gain: 0.045 }),
            ]),
            [
              0.872,
              () =>
                A.air(M("slabC"), { dur: 1.2, from: 300, to: 3e3, gain: 0.06 }),
            ],
            [
              0.9,
              () => {
                (A.pad([nt(0, 3), nt(3, 3), nt(1, 4), nt(2, 4), nt(4, 4)], {
                  gain: 0.07,
                  dur: 2.2,
                }),
                  A.shimmer(M("origin"), { delay: 0.3, gain: 0.03, count: 9 }));
              },
            ],
            [
              0.956,
              () =>
                A.air(M("origin"), {
                  dur: 0.6,
                  from: 2400,
                  to: 300,
                  gain: 0.05,
                }),
            ],
            [
              0.986,
              () =>
                A.bell({ x: 0, y: -0.6 }, nt(0, 4), {
                  gain: 0.05,
                  decay: 2.2,
                  ratio: 2,
                }),
            ],
          ];
        let tt = d.get();
        return d.on("change", (xt) => {
          const qt = x(tt),
            Vt = x(xt);
          ((tt = xt),
            !(Vt <= qt) &&
              U.filter(([Wt]) => Wt > qt && Wt <= Vt)
                .slice(-2)
                .forEach(([, Wt]) => Wt()));
        });
      }, [d, m]));
    const y = X(d, u, -0.16, -0.1, 0.165, 0.18),
      N = X(d, u, 0.185, 0.2, 0.405, 0.43),
      j = X(d, u, -0.07, 0, 0.16, 0.18),
      k = V(d, u, [-0.07, 0], [18, 0], It),
      b = X(d, u, 0.19, 0.22, 0.4, 0.425),
      S = V(d, u, [0.19, 0.22], [18, 0], It),
      E = V(d, u, [0.37, 0.4], [0, 1], Ft),
      L = X(d, u, 0.49, 0.51, 0.655, 0.675),
      T = X(d, u, 0.565, 0.59, 0.655, 0.675),
      C = V(d, u, [0.565, 0.59], [18, 0], It),
      _ = V(d, u, [0.548, 0.575], [0, 1], Ft),
      D = gt(_, (M) => `inset(-30% ${114 - M * 128}% -30% -14%)`),
      B = X(d, u, 0.68, 0.7, 0.865, 0.885),
      K = X(d, u, 0.73, 0.76, 0.865, 0.885),
      z = V(d, u, [0.73, 0.76], [18, 0], It),
      st = X(d, u, 0.305, 0.32, 0.42, 0.45),
      P = X(d, u, 0.322, 0.335),
      R = gt(P, (M) => 1 - M),
      et = X(d, u, 0.345, 0.355, 0.44, 0.47),
      at = X(d, u, 0.21, 0.24, 0.405, 0.44),
      Y = [
        X(d, u, 0.23, 0.245, 0.405, 0.44),
        X(d, u, 0.275, 0.29, 0.405, 0.44),
        X(d, u, 0.315, 0.33, 0.405, 0.44),
        X(d, u, 0.355, 0.37, 0.405, 0.44),
      ],
      Q = [0, 1, 2, 3].map((M) =>
        X(d, u, 0.585 + M * 0.016, 0.61 + M * 0.016, 0.655, 0.68),
      ),
      Z = X(d, u, 0.625, 0.645, 0.655, 0.68),
      ut = [0, 1, 2].map((M) =>
        X(d, u, 0.725 + M * 0.025, 0.745 + M * 0.025, 0.86, 0.88),
      ),
      jt = X(d, u, 0.755, 0.775, 0.86, 0.885),
      W = [0.775, 0.805, 0.835],
      it = W.map((M, U) =>
        X(
          d,
          u,
          M + 0.008,
          M + 0.02,
          U < 2 && r.portrait ? W[U + 1] : 0.86,
          U < 2 && r.portrait ? W[U + 1] + 0.008 : 0.885,
        ),
      ),
      ct = W.map((M) => V(d, u, [M + 0.008, M + 0.026], [60, 0], It)),
      dt = 62,
      lt = [
        V(d, u, [0.805, 0.815, 0.835, 0.845], [0, dt, dt, dt * 2]),
        V(d, u, [0.835, 0.845], [0, dt]),
        V(d, u, [0.835, 0.845], [0, 0]),
      ],
      I = X(d, u, 0.935, 0.955),
      mt = X(d, u, 0.94, 0.955, 0.962, 0.974),
      pt = V(d, u, [0.958, 0.985], [1, 0], Ft),
      Nt = V(d, u, [0.958, 0.985], [1, 0.94], Ft);
    bs(pt, "change", (M) => {
      var tt;
      const U = M > 0.003;
      U !== w.current &&
        ((w.current = U),
        (tt = i.current) == null || tt.setVisible(v.current && U));
    });
    const St = V(
        d,
        u,
        [0.958, 0.99],
        [0, -o.h * (r.portrait ? 0.15 : 0.16)],
        Ft,
      ),
      H = V(d, u, [0.958, 0.99], [1, 0.62], Ft),
      J = X(d, u, 0.984, 0.998),
      ft = [
        V(d, u, [0, 0.17], [0, 1], (M) => M),
        V(d, u, [0.17, 0.4], [0, 1], (M) => M),
        V(d, u, [0.4, 0.66], [0, 1], (M) => M),
        V(d, u, [0.66, 0.88], [0, 1], (M) => M),
      ],
      vt = X(d, u, -0.04, 0, 0.88, 0.9),
      wt = gt([vt, at], ([M, U]) => (r.portrait ? M * (1 - U) : M)),
      Jt = X(d, u, 0.44, 0.48),
      Pt = gt(Jt, (M) => 1 - M);
    if (l) return t.jsx(co, {});
    const Et =
        "pointer-events-none absolute left-0 top-0 z-30 will-change-transform",
      Gt =
        "flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] font-bold shadow-[0_12px_30px_-12px_rgba(15,23,42,0.5)] sm:text-xs";
    return t.jsxs("section", {
      ref: e,
      id: "tai-san",
      "data-no-motion": !0,
      "aria-label": "Chi phí hay tài sản",
      className:
        "measure-height relative h-[500svh] bg-[#f4f6f9] dark:bg-[#0a0f18] lg:h-[540svh]",
      children: [
        t.jsx("h2", { className: "sr-only", children: "Chi phí hay tài sản?" }),
        t.jsx("p", {
          className: "sr-only",
          children:
            "Phần lớn chủ doanh nghiệp coi website là chi phí: làm một lần rồi bỏ đó, website chậm dần, rớt khỏi Google và phải làm lại. Người coi website là tài sản thì có khách đều mỗi tháng — như vàng, nhà đất, cổ phiếu, tài sản được giữ gìn thì sinh lời. TDDTech bảo vệ, giữ gìn và phát triển website của anh chị mỗi tháng.",
        }),
        t.jsxs("div", {
          ref: n,
          "aria-hidden": "true",
          className: "sticky top-0 h-[100svh] overflow-hidden",
          children: [
            t.jsx(q.div, {
              style: { opacity: pt, scale: Nt },
              className: "absolute inset-0 z-0",
              children: t.jsx("canvas", {
                ref: s,
                className: "absolute inset-0 h-full w-full",
              }),
            }),
            t.jsxs("div", {
              className: "absolute z-10",
              style: { left: r.textX, top: r.textY, width: r.textW },
              children: [
                t.jsxs("div", {
                  className:
                    "grid text-[11px] font-bold uppercase tracking-[0.28em] text-slate-500 dark:text-white/50 sm:text-xs",
                  children: [
                    t.jsxs(q.span, {
                      style: { opacity: y },
                      className:
                        "col-start-1 row-start-1 flex items-center gap-3",
                      children: [
                        t.jsx("span", { className: "h-px w-8 bg-current" }),
                        "01 — Chi phí",
                      ],
                    }),
                    t.jsxs(q.span, {
                      style: { opacity: N },
                      className:
                        "col-start-1 row-start-1 flex items-center gap-3",
                      children: [
                        t.jsx("span", { className: "h-px w-8 bg-current" }),
                        "02 — Bỏ quên",
                      ],
                    }),
                  ],
                }),
                t.jsx("p", {
                  className:
                    "mt-4 font-black leading-[1.08] tracking-[-0.035em] text-[#0b1220] dark:text-white",
                  style: { fontSize: r.headline },
                  children: t.jsx(Ze, {
                    P: d,
                    T: u,
                    tilt: !0,
                    text: "Phần lớn chủ doanh nghiệp coi website là chi phí.",
                    inn: [-0.15, -0.03],
                    out: [0.405, 0.445],
                    special: {
                      "chi phí.": t.jsxs("span", {
                        className:
                          "relative inline-block text-slate-400 dark:text-white/40",
                        children: [
                          "chi phí.",
                          t.jsx(q.span, {
                            style: { scaleX: E },
                            className:
                              "absolute -inset-x-[0.04em] top-[54%] h-[0.085em] origin-left rounded-full bg-[#0b1220] dark:bg-white",
                          }),
                        ],
                      }),
                    },
                  }),
                }),
                t.jsxs("div", {
                  className:
                    "mt-3 grid max-w-md text-[14.5px] leading-[1.55] text-slate-600 dark:text-white/60 sm:mt-5 sm:text-[17px] sm:leading-[1.65]",
                  children: [
                    t.jsx(q.p, {
                      style: { opacity: j, y: k },
                      className: "col-start-1 row-start-1",
                      children:
                        "Làm một lần cho xong, ghi vào sổ như mọi khoản chi khác — rồi cất đi.",
                    }),
                    t.jsx(q.p, {
                      style: { opacity: b, y: S },
                      className: "col-start-1 row-start-1",
                      children:
                        "Không ai trông nom: năm đầu chậm dần, năm sau rớt khỏi Google, năm thứ ba phải làm lại từ đầu.",
                    }),
                  ],
                }),
              ],
            }),
            t.jsxs("div", {
              className: "absolute z-10 grid text-white",
              style: { left: r.textX, top: r.textY, width: r.textW },
              children: [
                t.jsxs("div", {
                  className: "col-start-1 row-start-1",
                  children: [
                    t.jsxs(q.p, {
                      style: { opacity: L },
                      className:
                        "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-200/80 sm:text-xs",
                      children: [
                        t.jsx("span", { className: "h-px w-8 bg-current" }),
                        "03 — Tài sản",
                      ],
                    }),
                    t.jsx("p", {
                      className:
                        "mt-4 font-black leading-[1.08] tracking-[-0.035em]",
                      style: { fontSize: r.headline },
                      children: t.jsx(Ze, {
                        P: d,
                        T: u,
                        tilt: !0,
                        text: "Người coi nó là tài sản thì có khách đều mỗi tháng.",
                        inn: [0.49, 0.55],
                        out: [0.655, 0.69],
                        special: {
                          "tài sản": t.jsxs("span", {
                            className: "relative inline-block",
                            children: [
                              "tài sản",
                              t.jsxs(q.span, {
                                "aria-hidden": "true",
                                style: { clipPath: D },
                                className: "absolute inset-0 select-none",
                                children: [
                                  t.jsx("span", {
                                    className:
                                      "absolute -inset-x-[0.12em] bottom-[0.02em] top-[0.14em] -rotate-2 rounded-sm bg-[#d4ff3f]",
                                  }),
                                  t.jsx("span", {
                                    className: "relative text-[#0f172a]",
                                    children: "tài sản",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                      }),
                    }),
                    t.jsx(q.p, {
                      style: { opacity: T, y: C },
                      className:
                        "mt-3 max-w-md text-[14.5px] leading-[1.55] text-white/70 sm:mt-5 sm:text-[17px] sm:leading-[1.65]",
                      children:
                        "Như vàng, nhà đất, cổ phiếu: tài sản được giữ gìn thì sinh lời. Website đứng tên doanh nghiệp anh chị và làm việc 24/7.",
                    }),
                  ],
                }),
                t.jsxs("div", {
                  className: "col-start-1 row-start-1",
                  children: [
                    t.jsxs(q.p, {
                      style: { opacity: B },
                      className:
                        "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-200/80 sm:text-xs",
                      children: [
                        t.jsx("span", { className: "h-px w-8 bg-current" }),
                        "04 — Vận hành",
                      ],
                    }),
                    t.jsx("p", {
                      className:
                        "mt-4 font-black leading-[1.08] tracking-[-0.035em]",
                      style: { fontSize: r.headline },
                      children: t.jsx(Ze, {
                        P: d,
                        T: u,
                        tilt: !0,
                        text: "TDDTech bảo vệ, giữ gìn và phát triển nó — mỗi tháng.",
                        inn: [0.685, 0.745],
                        out: [0.865, 0.895],
                        special: {
                          TDDTech: t.jsx("span", {
                            className: "text-cyan-300",
                            children: "TDDTech",
                          }),
                        },
                      }),
                    }),
                    t.jsx(q.p, {
                      style: { opacity: K, y: z },
                      className:
                        "mt-3 max-w-md text-[14.5px] leading-[1.55] text-white/70 sm:mt-5 sm:text-[17px] sm:leading-[1.65]",
                      children:
                        "Sao lưu, giám sát, cập nhật, SEO và nội dung — báo cáo số liệu thật ngày 1 hằng tháng.",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("div", {
              ref: h("chip"),
              "data-anchor": "slabTR",
              className: Et,
              children: t.jsx(q.div, {
                style: { opacity: st },
                className: "-translate-x-full -translate-y-full pb-2 pr-1",
                children: t.jsxs("div", {
                  className: `${Gt} bg-white text-slate-800 ring-1 ring-slate-200`,
                  children: [
                    t.jsx(we, { className: "h-3.5 w-3.5 text-slate-500" }),
                    "Google",
                    t.jsxs("span", {
                      className: "relative inline-grid",
                      children: [
                        t.jsx(q.span, {
                          style: { opacity: R },
                          className: "col-start-1 row-start-1 text-emerald-600",
                          children: "Trang 1",
                        }),
                        t.jsx(q.span, {
                          style: { opacity: P },
                          className: "col-start-1 row-start-1 text-rose-600",
                          children: "Trang 3 ↓",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            t.jsx("div", {
              ref: h("warn"),
              "data-anchor": "slabTL",
              className: Et,
              children: t.jsx(q.div, {
                style: { opacity: et },
                className: r.portrait ? "pl-1 pt-2" : "-translate-y-full pb-2",
                children: t.jsxs("div", {
                  className: `${Gt} bg-rose-50 text-rose-600 ring-1 ring-rose-200`,
                  children: [
                    t.jsx(mr, { className: "h-3.5 w-3.5" }),
                    "Không bảo mật",
                  ],
                }),
              }),
            }),
            t.jsx("div", {
              ref: h("chart"),
              "data-anchor": "chartTL",
              className: Et,
              children: t.jsx(q.p, {
                style: { opacity: at },
                className:
                  "-translate-y-full whitespace-nowrap pb-1 text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500 dark:text-white/45 sm:text-[11px]",
                children: "Giá trị website theo thời gian",
              }),
            }),
            [
              ["Bàn giao", "Mới, nhanh"],
              ["Năm 1", "Chậm dần"],
              ["Năm 2", "Rớt Google"],
              ["Năm 3", "Phải làm lại"],
            ].map(([M, U], tt) =>
              t.jsx(
                "div",
                {
                  ref: h(`y${tt}`),
                  "data-anchor": `y${tt}`,
                  className: Et,
                  children: t.jsxs(q.div, {
                    style: { opacity: Y[tt] },
                    className: `whitespace-nowrap pt-1 ${tt === 0 ? "" : tt === 3 ? "-translate-x-full text-right" : "-translate-x-1/2 text-center"}`,
                    children: [
                      t.jsx("p", {
                        className:
                          "text-[9.5px] font-bold uppercase tracking-[0.1em] text-slate-800 dark:text-white/85 sm:text-xs sm:tracking-[0.18em]",
                        children: M,
                      }),
                      t.jsx("p", {
                        className: `text-[10.5px] leading-tight sm:text-[13px] ${r.w < 600 ? "max-w-[62px] whitespace-normal" : ""} ${tt === 3 ? "font-bold text-rose-700 dark:text-rose-300" : "text-slate-500 dark:text-white/55"} ${tt === 3 && r.w < 600 ? "ml-auto" : tt > 0 && r.w < 600 ? "mx-auto" : ""}`,
                        children: U,
                      }),
                    ],
                  }),
                },
                M,
              ),
            ),
            [
              ["Vàng", "Cất giữ an toàn"],
              ["Nhà đất", "Bảo trì, cho thuê"],
              ["Cổ phiếu", "Theo dõi, nắm giữ"],
              ["Website", "Vận hành mỗi tháng"],
            ].map(([M, U], tt) =>
              t.jsx(
                "div",
                {
                  ref: h(`a${tt}`),
                  "data-anchor": `a${tt}`,
                  className: Et,
                  children: t.jsxs(q.div, {
                    style: { opacity: Q[tt] },
                    className:
                      "-translate-x-1/2 whitespace-nowrap pt-2 text-center",
                    children: [
                      t.jsx("p", {
                        className:
                          "text-[15px] font-extrabold text-white sm:text-[17px]",
                        children: M,
                      }),
                      t.jsx("p", {
                        className: "text-[11px] text-cyan-100/60 sm:text-xs",
                        children: U,
                      }),
                    ],
                  }),
                },
                M,
              ),
            ),
            t.jsx("div", {
              ref: h("shelf"),
              "data-anchor": "shelfMid",
              className: Et,
              children: t.jsx(q.p, {
                style: { opacity: Z },
                className: `-translate-x-1/2 whitespace-nowrap text-[10.5px] font-bold uppercase tracking-[0.2em] text-cyan-100/70 sm:text-xs ${r.portrait ? "pt-2" : "pt-16"}`,
                children: "Được giữ gìn → giá trị tăng dần",
              }),
            }),
            [
              { Icon: hn, label: "Bảo vệ", sub: "Sao lưu · giám sát 24/7" },
              { Icon: Ts, label: "Giữ gìn", sub: "Cập nhật · sửa lỗi" },
              { Icon: wa, label: "Phát triển", sub: "SEO · nội dung" },
            ].map((M, U) =>
              t.jsx(
                "div",
                {
                  ref: h(`n${U}`),
                  "data-anchor": `n${U}`,
                  "data-flip": !0,
                  className: `story-flip ${Et} z-[31]`,
                  children: t.jsx(q.div, {
                    style: { opacity: ut[U] },
                    className: "story-flip-in -translate-y-1/2",
                    children: t.jsxs("div", {
                      className:
                        "flex items-center gap-2.5 whitespace-nowrap rounded-full border border-cyan-300/25 bg-[#0a1b2e]/90 py-1.5 pl-1.5 pr-4 shadow-[0_14px_34px_-10px_rgba(0,0,0,0.7)]",
                      children: [
                        t.jsx("span", {
                          className:
                            "flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-white to-cyan-100 text-[#0369a1] sm:h-9 sm:w-9",
                          children: t.jsx(M.Icon, { className: "h-4 w-4" }),
                        }),
                        t.jsxs("span", {
                          className: "leading-tight",
                          children: [
                            t.jsx("span", {
                              className:
                                "block text-[13px] font-extrabold text-white sm:text-[15px]",
                              children: M.label,
                            }),
                            t.jsx("span", {
                              className:
                                "block text-[10.5px] text-cyan-100/60 sm:text-xs",
                              children: M.sub,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                },
                M.label,
              ),
            ),
            t.jsx("div", {
              ref: h("month"),
              "data-anchor": "monthL",
              className: Et,
              children: t.jsxs(q.div, {
                style: { opacity: jt },
                className:
                  "whitespace-nowrap pt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-100/60 sm:text-[11px]",
                children: [
                  r.portrait
                    ? "Khách hỏi · mỗi tháng"
                    : "Khách hỏi qua website · mỗi tháng",
                  " ",
                  t.jsx("span", {
                    className:
                      "ml-2 font-medium normal-case tracking-normal text-white/35",
                    children: "minh hoạ",
                  }),
                ],
              }),
            }),
            [
              {
                icon: t.jsx("img", {
                  src: "/zalo-icon.png",
                  alt: "",
                  className: "h-full w-full rounded-[7px]",
                }),
                title: "Khách hỏi giá qua Zalo",
                sub: "Từ website · vừa xong",
              },
              {
                icon: t.jsx("span", {
                  className:
                    "flex h-full w-full items-center justify-center rounded-[7px] bg-emerald-500 text-white",
                  children: t.jsx(dn, { className: "h-4 w-4" }),
                }),
                title: "Đơn hàng mới",
                sub: "2 sản phẩm · thanh toán khi nhận",
              },
              {
                icon: t.jsx("span", {
                  className:
                    "flex h-full w-full items-center justify-center rounded-[7px] bg-[#0369a1] text-white",
                  children: t.jsx(ur, { className: "h-4 w-4" }),
                }),
                title: "Lịch hẹn tư vấn",
                sub: "Đặt qua website · thứ Ba 9:30",
              },
            ].map((M, U) =>
              t.jsx(
                "div",
                {
                  ref: h(`t${U}`),
                  "data-anchor": r.portrait ? "slabTL" : "slabR",
                  className: `${Et} z-[35]`,
                  children: t.jsx(q.div, {
                    style: {
                      opacity: it[U],
                      x: ct[U],
                      y: r.portrait ? 0 : lt[U],
                      width: Math.min(268, r.w - 40),
                    },
                    className: r.portrait
                      ? "-translate-y-[calc(100%+14px)]"
                      : "-translate-x-[40px] -translate-y-[60px]",
                    children: t.jsxs("div", {
                      className:
                        "flex items-center gap-3 rounded-[14px] bg-white/95 p-2.5 shadow-[0_18px_40px_-14px_rgba(0,0,0,0.6)] ring-1 ring-black/5",
                      children: [
                        t.jsx("span", {
                          className: "h-8 w-8 flex-none",
                          children: M.icon,
                        }),
                        t.jsxs("span", {
                          className: "min-w-0 flex-1 leading-tight",
                          children: [
                            t.jsx("span", {
                              className:
                                "block truncate text-[12.5px] font-bold text-slate-900 sm:text-[13px]",
                              children: M.title,
                            }),
                            t.jsx("span", {
                              className:
                                "block truncate text-[11px] text-slate-500 sm:text-xs",
                              children: M.sub,
                            }),
                          ],
                        }),
                        t.jsx("span", {
                          className: "self-start text-[10px] text-slate-400",
                          children: "vừa xong",
                        }),
                      ],
                    }),
                  }),
                },
                M.title,
              ),
            ),
            t.jsxs(q.div, {
              style: { y: St, scale: H },
              className:
                "pointer-events-none absolute inset-0 z-40 flex items-center justify-center",
              children: [
                t.jsx(q.img, {
                  style: { opacity: I },
                  src: "/brand/mark.png",
                  alt: "",
                  width: 360,
                  height: 360,
                  className:
                    "h-32 w-32 drop-shadow-[0_18px_40px_rgba(0,161,207,0.35)] md:h-[168px] md:w-[168px]",
                }),
                t.jsxs(q.p, {
                  style: { opacity: mt },
                  className:
                    "absolute inset-x-0 top-[calc(50%+86px)] px-4 text-center text-2xl font-black tracking-[-0.02em] text-white md:top-[calc(50%+112px)] md:text-4xl",
                  children: [
                    "Website là tài sản. ",
                    t.jsx("span", {
                      className: "accent-serif text-cyan-300",
                      children: "TDDTech",
                    }),
                    " giữ nó sinh lời.",
                  ],
                }),
              ],
            }),
            t.jsxs("div", {
              className:
                "pointer-events-none absolute inset-x-0 z-40 px-5 text-center",
              style: { top: o.h * (r.portrait ? 0.47 : 0.48) },
              children: [
                t.jsx("p", {
                  className:
                    "mx-auto max-w-3xl text-[clamp(1.7rem,4.6vw,3.4rem)] font-black leading-[1.08] tracking-[-0.035em] text-[#0b1220] dark:text-white",
                  children: t.jsx(Ze, {
                    P: d,
                    T: u,
                    tilt: !0,
                    text: "Ba việc TDDTech làm cho anh chị",
                    inn: [0.966, 0.993],
                    special: {
                      "anh chị": t.jsx("span", {
                        className: "accent-serif text-primary",
                        children: "anh chị",
                      }),
                    },
                  }),
                }),
                t.jsxs(q.div, {
                  style: { opacity: J },
                  className:
                    "mt-6 flex flex-col items-center gap-2 text-slate-500 dark:text-white/55",
                  children: [
                    t.jsx("span", {
                      className:
                        "text-[11px] font-bold uppercase tracking-[0.28em] sm:text-xs",
                      children: "Xây dựng · Bán hàng · Vận hành",
                    }),
                    t.jsx("span", {
                      className: "story-scroll-cue",
                      "aria-hidden": "true",
                      children: t.jsx("i", {}),
                    }),
                  ],
                }),
              ],
            }),
            t.jsx(q.div, {
              style: { opacity: wt },
              className:
                "pointer-events-none absolute bottom-2.5 left-1/2 z-50 -translate-x-1/2 sm:bottom-7",
              children: t.jsx("div", {
                className: "grid",
                children: [
                  {
                    o: Pt,
                    tone: "text-slate-700 dark:text-white/80",
                    track: "bg-slate-900/10 dark:bg-white/15",
                    fill: "bg-slate-900 dark:bg-white",
                  },
                  {
                    o: Jt,
                    tone: "text-white/85",
                    track: "bg-white/15",
                    fill: "bg-cyan-300",
                  },
                ].map((M, U) =>
                  t.jsx(
                    q.div,
                    {
                      style: { opacity: M.o },
                      className: `col-start-1 row-start-1 flex gap-2 sm:gap-3 ${M.tone}`,
                      children: [
                        "Chi phí",
                        "Bỏ quên",
                        "Tài sản",
                        "Vận hành",
                      ].map((tt, xt) =>
                        t.jsxs(
                          "div",
                          {
                            className: "w-[19vw] max-w-[112px] sm:w-[112px]",
                            children: [
                              t.jsxs("p", {
                                className:
                                  "mb-1.5 truncate text-[9.5px] font-bold uppercase tracking-[0.14em] sm:text-[10.5px] sm:tracking-[0.16em]",
                                children: [
                                  t.jsxs("span", {
                                    className: "hidden sm:inline",
                                    children: [
                                      String(xt + 1).padStart(2, "0"),
                                      " ",
                                    ],
                                  }),
                                  tt,
                                ],
                              }),
                              t.jsx("div", {
                                className: `h-[2px] overflow-hidden rounded-full ${M.track}`,
                                children: t.jsx(q.div, {
                                  style: { scaleX: ft[xt] },
                                  className: `h-full origin-left ${M.fill}`,
                                }),
                              }),
                            ],
                          },
                          tt,
                        ),
                      ),
                    },
                    U,
                  ),
                ),
              }),
            }),
          ],
        }),
      ],
    });
  },
  Ta =
    "absolute inset-[5%] overflow-hidden rounded-[2cqw] border border-slate-200 bg-white shadow-xl dark:border-white/10 dark:bg-[#0f1a2b]",
  am = t.jsx("span", {
    className: "flex gap-[0.7cqw]",
    children: [0, 1, 2].map((e) =>
      t.jsx(
        "span",
        {
          className:
            "h-[1.2cqw] w-[1.2cqw] rounded-full bg-slate-300 dark:bg-white/20",
        },
        e,
      ),
    ),
  }),
  im = {
    type: 300,
    results: 1650,
    pick: 2e3,
    picked: 2750,
    site: 3150,
    h1: 3450,
    sub: 3750,
    stats: 4e3,
    c1: 4250,
    c2: 4400,
    c3: 4550,
    mcta: 5e3,
    cta: 5750,
    form: 6e3,
    fname: 6400,
    fphone: 7150,
    msend: 7900,
    send: 8650,
    sent: 8900,
    toast: 9050,
  },
  rm = () =>
    t.jsx(Ee, {
      label:
        "Minh hoạ: khách tìm 'thiết kế website doanh nghiệp' trên Google, vào TDDTech, bấm Nhận tư vấn và để lại số điện thoại — yêu cầu chuyển thẳng vào Zalo TDDTech.",
      cues: im,
      duration: 12500,
      className:
        "aspect-[16/11] bg-gradient-to-br from-sky-50 to-slate-100 dark:from-[#0b1424] dark:to-[#071019]",
      children: t.jsxs("div", {
        className: Ta,
        children: [
          t.jsxs("div", {
            "data-cue-out": "site",
            className: "absolute inset-0 bg-white dark:bg-[#0f1a2b]",
            children: [
              t.jsxs("p", {
                className:
                  "absolute left-[6%] top-[5%] text-[3.4cqw] font-bold tracking-tight",
                children: [
                  t.jsx("span", { className: "text-[#4285f4]", children: "G" }),
                  t.jsx("span", { className: "text-[#ea4335]", children: "o" }),
                  t.jsx("span", { className: "text-[#fbbc05]", children: "o" }),
                  t.jsx("span", { className: "text-[#4285f4]", children: "g" }),
                  t.jsx("span", { className: "text-[#34a853]", children: "l" }),
                  t.jsx("span", { className: "text-[#ea4335]", children: "e" }),
                ],
              }),
              t.jsxs("div", {
                className:
                  "absolute left-[6%] right-[6%] top-[17%] flex h-[11%] items-center gap-[1.5cqw] rounded-full border border-slate-200 px-[2.5cqw] shadow-sm dark:border-white/15",
                children: [
                  t.jsx(we, {
                    className: "h-[2.6cqw] w-[2.6cqw] flex-none text-slate-400",
                  }),
                  t.jsx("span", {
                    "data-cue": "type",
                    "data-type": "thiết kế website doanh nghiệp",
                    className:
                      "x-stay x-caret text-[2.7cqw] text-slate-800 dark:text-white/90",
                  }),
                ],
              }),
              t.jsxs("div", {
                "data-cue": "results",
                className:
                  "x-fade absolute left-[6%] right-[6%] top-[33%] space-y-[2.2cqw]",
                children: [
                  t.jsxs("div", {
                    "data-cue": "picked",
                    className:
                      "x-stay -mx-[1.5cqw] rounded-[1.2cqw] px-[1.5cqw] py-[1cqw] [&.on]:bg-sky-500/15",
                    children: [
                      t.jsx("p", {
                        className:
                          "text-[2cqw] text-emerald-700 dark:text-emerald-400",
                        children: "TDDTech › thiet-ke-website",
                      }),
                      t.jsx("p", {
                        className:
                          "text-[2.9cqw] font-semibold leading-tight text-[#1a0dab] dark:text-sky-400",
                        children:
                          "TDDTech — Website là tài sản của doanh nghiệp",
                      }),
                      t.jsx("p", {
                        className:
                          "text-[2cqw] text-slate-500 dark:text-white/50",
                        children:
                          "Xây đúng nền móng, anh chị sở hữu 100%, vận hành mỗi tháng.",
                      }),
                    ],
                  }),
                  [0, 1].map((e) =>
                    t.jsxs(
                      "div",
                      {
                        className: "space-y-[1cqw] opacity-60",
                        children: [
                          t.jsx("span", {
                            className:
                              "block h-[1.3cqw] w-[28%] rounded bg-slate-200 dark:bg-white/10",
                          }),
                          t.jsx("span", {
                            className:
                              "block h-[2cqw] w-[68%] rounded bg-slate-200 dark:bg-white/10",
                          }),
                          t.jsx("span", {
                            className:
                              "block h-[1.3cqw] w-[86%] rounded bg-slate-100 dark:bg-white/5",
                          }),
                        ],
                      },
                      e,
                    ),
                  ),
                ],
              }),
            ],
          }),
          t.jsxs("div", {
            "data-cue": "site",
            className: "x-zoom absolute inset-0 bg-white dark:bg-[#0f1a2b]",
            children: [
              t.jsxs("div", {
                className:
                  "flex h-[9%] items-center gap-[1.5cqw] border-b border-slate-100 px-[2cqw] dark:border-white/5",
                children: [
                  am,
                  t.jsx("span", {
                    className:
                      "rounded-full bg-slate-100 px-[2cqw] py-[0.3cqw] text-[1.8cqw] text-slate-500 dark:bg-white/5 dark:text-white/50",
                    children: "TDDTech",
                  }),
                ],
              }),
              t.jsxs("div", {
                className:
                  "absolute left-[5%] right-[5%] top-[12%] flex items-center justify-between",
                children: [
                  t.jsxs("span", {
                    className:
                      "flex items-center gap-[0.8cqw] text-[2.6cqw] font-black text-slate-900 dark:text-white",
                    children: [
                      t.jsx("img", {
                        src: "/brand/logo-light.png",
                        alt: "",
                        className: "h-[3.6cqw] w-[3.6cqw] dark:hidden",
                      }),
                      t.jsx("img", {
                        src: "/brand/logo-dark.png",
                        alt: "",
                        className: "hidden h-[3.6cqw] w-[3.6cqw] dark:block",
                      }),
                      "TDDTech",
                    ],
                  }),
                  t.jsxs("span", {
                    className:
                      "flex gap-[2.5cqw] text-[1.9cqw] text-slate-500 dark:text-white/50",
                    children: [
                      t.jsx("span", { children: "Dịch vụ" }),
                      t.jsx("span", { children: "Dự án" }),
                      t.jsx("span", { children: "Liên hệ" }),
                    ],
                  }),
                ],
              }),
              t.jsxs("div", {
                className: "absolute left-[5%] top-[23%] w-[52%]",
                children: [
                  t.jsx("p", {
                    "data-cue": "h1",
                    className:
                      "text-[4.4cqw] font-black leading-[1.1] text-slate-900 dark:text-white",
                    children: "Website là tài sản của doanh nghiệp",
                  }),
                  t.jsx("p", {
                    "data-cue": "sub",
                    className:
                      "mt-[1.2cqw] text-[2cqw] leading-snug text-slate-500 dark:text-white/55",
                    children:
                      "Xây đúng · anh chị sở hữu 100% · vận hành mỗi tháng",
                  }),
                ],
              }),
              t.jsx("span", {
                "data-cue": "sub",
                "data-press": "cta",
                className:
                  "absolute left-[5%] top-[49%] flex h-[8%] w-[25%] items-center justify-center rounded-full bg-primary text-[2.1cqw] font-bold text-white shadow-lg shadow-primary/30",
                children: "Nhận tư vấn",
              }),
              t.jsxs("div", {
                "data-cue": "h1",
                className:
                  "x-zoom absolute left-[60%] top-[22%] h-[34%] w-[35%] overflow-hidden rounded-[1.4cqw] border border-slate-200 shadow-lg dark:border-white/10",
                children: [
                  t.jsx("img", {
                    src: Vn("vinfast-huy-hieu", 640),
                    alt: "",
                    className: "h-full w-full object-cover object-top",
                  }),
                  t.jsx("span", {
                    className:
                      "absolute bottom-[6%] left-[6%] rounded-full bg-slate-950/75 px-[1.2cqw] py-[0.3cqw] text-[1.5cqw] font-bold text-white",
                    children: "Dự án: VinFast Huy Hiệu",
                  }),
                ],
              }),
              t.jsx("div", {
                className:
                  "absolute left-[5%] right-[5%] top-[62%] flex gap-[6cqw]",
                children: [
                  { to: `0:${Sn}`, suffix: "+", label: "dự án đã làm*" },
                  {
                    to: `0:${Rn.length}`,
                    suffix: "",
                    label: "dự án công khai",
                  },
                  { to: "0:5", suffix: " năm", label: "chỉnh sửa miễn phí" },
                ].map((e) =>
                  t.jsxs(
                    "div",
                    {
                      "data-cue": "stats",
                      children: [
                        t.jsx("p", {
                          "data-cue": "stats",
                          "data-count": e.to,
                          "data-suffix": e.suffix,
                          className:
                            "x-stay text-[3.4cqw] font-black leading-none text-slate-900 dark:text-white",
                          children: "0",
                        }),
                        t.jsx("p", {
                          className:
                            "mt-[0.5cqw] text-[1.7cqw] text-slate-500 dark:text-white/50",
                          children: e.label,
                        }),
                      ],
                    },
                    e.label,
                  ),
                ),
              }),
              t.jsx("div", {
                className:
                  "absolute left-[5%] right-[5%] top-[77%] grid h-[16%] grid-cols-3 gap-[2cqw]",
                children: [
                  [ya, "Doanh nghiệp", "c1"],
                  [dn, "Bán hàng", "c2"],
                  [Ts, "Vận hành", "c3"],
                ].map(([e, n, s]) => {
                  const i = e;
                  return t.jsxs(
                    "span",
                    {
                      "data-cue": s,
                      className:
                        "flex items-center justify-center gap-[1cqw] rounded-[1cqw] border border-slate-100 bg-slate-50 dark:border-white/10 dark:bg-white/5",
                      children: [
                        t.jsx(i, {
                          className: "h-[2.6cqw] w-[2.6cqw] text-primary",
                        }),
                        t.jsx("span", {
                          className:
                            "text-[2cqw] font-semibold text-slate-700 dark:text-white/75",
                          children: n,
                        }),
                      ],
                    },
                    n,
                  );
                }),
              }),
            ],
          }),
          t.jsx("div", {
            "data-cue": "form",
            "data-cue-out": "sent",
            className: "x-fade absolute inset-0 z-10 bg-slate-950/35",
          }),
          t.jsxs("div", {
            "data-cue": "form",
            "data-cue-out": "sent",
            className:
              "x-pop absolute left-[24%] top-[13%] z-20 h-[74%] w-[52%] rounded-[1.6cqw] bg-white p-[2.4cqw] shadow-2xl dark:bg-[#16233a]",
            children: [
              t.jsx("p", {
                className:
                  "text-[2.7cqw] font-black text-slate-900 dark:text-white",
                children: "Nhận tư vấn miễn phí",
              }),
              t.jsx("p", {
                className: "text-[1.7cqw] text-slate-500 dark:text-white/50",
                children: "TDDTech gọi lại qua Zalo",
              }),
              [
                ["Họ tên", "fname", "Anh Minh"],
                ["Số điện thoại", "fphone", "0901 234 567"],
              ].map(([e, n, s]) =>
                t.jsxs(
                  "div",
                  {
                    className: "mt-[2cqw]",
                    children: [
                      t.jsx("p", {
                        className:
                          "text-[1.7cqw] font-semibold text-slate-600 dark:text-white/60",
                        children: e,
                      }),
                      t.jsx("div", {
                        className:
                          "mt-[0.6cqw] flex h-[5.4cqw] items-center rounded-[1cqw] border border-slate-200 px-[1.5cqw] dark:border-white/15",
                        children: t.jsx("span", {
                          "data-cue": n,
                          "data-type": s,
                          className:
                            "x-stay x-caret text-[2.2cqw] text-slate-900 dark:text-white",
                        }),
                      }),
                    ],
                  },
                  n,
                ),
              ),
              t.jsx("span", {
                "data-press": "send",
                className:
                  "absolute bottom-[8%] left-[6%] right-[6%] flex h-[14%] items-center justify-center rounded-full bg-primary text-[2.2cqw] font-bold text-white",
                children: "Gửi yêu cầu",
              }),
            ],
          }),
          t.jsxs("div", {
            "data-cue": "toast",
            "data-sfx": "ping",
            className:
              "x-right absolute bottom-[4%] right-[3%] z-20 flex items-center gap-[1.4cqw] rounded-[1.4cqw] bg-slate-900 px-[2cqw] py-[1.3cqw] text-white shadow-2xl dark:bg-white dark:text-slate-900",
            children: [
              t.jsx(Hn, {
                className:
                  "h-[3.4cqw] w-[3.4cqw] flex-none text-emerald-400 dark:text-emerald-500",
              }),
              t.jsxs("span", {
                className: "text-[1.8cqw] leading-tight",
                children: [
                  t.jsx("b", {
                    className: "block text-[2.1cqw]",
                    children: "Yêu cầu tư vấn mới · Anh Minh",
                  }),
                  "Đã chuyển vào Zalo TDDTech · vừa xong",
                ],
              }),
            ],
          }),
          t.jsx(eo, {
            move: "start:88,92 pick:30,44,c mcta:17.5,53,c msend:50,76,c toast:hide",
          }),
        ],
      }),
    }),
  Js = [
    {
      name: "Áo linen",
      price: "350k",
      Icon: Lc,
      tone: "from-rose-200 to-rose-300 dark:from-rose-900/60 dark:to-rose-700/60",
    },
    {
      name: "Balo da",
      price: "420k",
      Icon: _c,
      tone: "from-amber-200 to-amber-300 dark:from-amber-900/60 dark:to-amber-700/60",
    },
    {
      name: "Đồng hồ",
      price: "280k",
      Icon: Ac,
      tone: "from-sky-200 to-sky-300 dark:from-sky-900/60 dark:to-sky-700/60",
    },
    {
      name: "Kính mát",
      price: "190k",
      Icon: $c,
      tone: "from-emerald-200 to-emerald-300 dark:from-emerald-900/60 dark:to-emerald-700/60",
    },
  ],
  om = {
    m1: 600,
    a1: 1350,
    m2: 1800,
    a2: 2550,
    m3: 3e3,
    a3: 3750,
    mcart: 4150,
    cart: 4900,
    total: 5250,
    morder: 5900,
    order: 6650,
    done: 6950,
    zalo: 7550,
    rev: 8150,
  },
  cm = () =>
    t.jsx(Ee, {
      label:
        "Minh hoạ: khách thêm 3 sản phẩm vào giỏ, đặt hàng 1.050.000đ — đơn được xác nhận và chủ shop nhận thông báo qua Zalo, không qua sàn.",
      cues: om,
      duration: 11500,
      className:
        "aspect-[16/11] bg-gradient-to-br from-amber-50 to-rose-50 dark:from-[#1a1022] dark:to-[#0b1020]",
      children: t.jsxs("div", {
        className: Ta,
        children: [
          t.jsxs("div", {
            className:
              "absolute inset-x-0 top-0 flex h-[12%] items-center gap-[2cqw] border-b border-slate-100 px-[3%] dark:border-white/5",
            children: [
              t.jsxs("span", {
                className:
                  "flex items-center gap-[0.8cqw] text-[2.6cqw] font-black text-slate-900 dark:text-white",
                children: [
                  t.jsx(dn, {
                    className: "h-[2.8cqw] w-[2.8cqw] text-rose-500",
                  }),
                  "Shop của anh chị",
                ],
              }),
              t.jsxs("span", {
                className:
                  "flex h-[55%] w-[34%] items-center gap-[1cqw] rounded-full bg-slate-100 px-[1.6cqw] text-[1.7cqw] text-slate-400 dark:bg-white/5",
                children: [
                  t.jsx(we, { className: "h-[2cqw] w-[2cqw]" }),
                  "Tìm sản phẩm",
                ],
              }),
            ],
          }),
          t.jsxs("span", {
            "data-press": "cart",
            className:
              "absolute right-[3%] top-[2%] z-20 flex h-[7cqw] w-[7cqw] items-center justify-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900",
            children: [
              t.jsx(dn, { className: "h-[3.2cqw] w-[3.2cqw]" }),
              t.jsx("span", {
                "data-text": "a1:1 a2:2 a3:3",
                className:
                  "absolute -right-[1cqw] -top-[1cqw] flex h-[3.4cqw] min-w-[3.4cqw] items-center justify-center rounded-full bg-rose-500 px-[0.6cqw] text-[1.8cqw] font-black text-white",
                children: "0",
              }),
            ],
          }),
          Js.map((e, n) =>
            t.jsxs(
              "div",
              {
                className:
                  "absolute bottom-[4%] top-[16%] w-[21%] rounded-[1.2cqw] border border-slate-100 p-[1cqw] dark:border-white/10",
                style: { left: `${4 + n * 23.5}%` },
                children: [
                  t.jsx("div", {
                    className: `flex h-[50%] items-center justify-center rounded-[1cqw] bg-gradient-to-br ${e.tone}`,
                    children: t.jsx(e.Icon, {
                      className: "h-[6cqw] w-[6cqw] text-white",
                      strokeWidth: 1.6,
                    }),
                  }),
                  t.jsx("p", {
                    className:
                      "mt-[1cqw] truncate text-[2.1cqw] font-bold text-slate-900 dark:text-white",
                    children: e.name,
                  }),
                  t.jsx("p", {
                    className: "text-[2cqw] font-bold text-rose-500",
                    children: e.price,
                  }),
                  t.jsx("p", {
                    className: "flex text-amber-400",
                    children: [0, 1, 2, 3, 4].map((s) =>
                      t.jsx(
                        Mc,
                        { className: "h-[1.6cqw] w-[1.6cqw] fill-current" },
                        s,
                      ),
                    ),
                  }),
                  t.jsx("span", {
                    "data-press": n < 3 ? `a${n + 1}` : void 0,
                    className:
                      "absolute bottom-[5%] left-[7%] right-[7%] flex h-[13%] items-center justify-center rounded-[0.8cqw] bg-slate-900 text-[1.6cqw] font-bold text-white dark:bg-white dark:text-slate-900",
                    children: "Thêm vào giỏ",
                  }),
                ],
              },
              e.name,
            ),
          ),
          Js.slice(0, 3).map((e, n) =>
            t.jsx(
              "span",
              {
                "data-cue": `a${n + 1}`,
                className: `x-fly h-[6cqw] w-[6cqw] rounded-[1cqw] bg-gradient-to-br ${e.tone}`,
                style: {
                  "--x0": `${4 + n * 23.5 + 7}%`,
                  "--y0": "28%",
                  "--x1": "90%",
                  "--y1": "3%",
                },
              },
              e.name,
            ),
          ),
          t.jsxs("div", {
            "data-cue": "cart",
            className:
              "x-drawer absolute bottom-0 right-0 top-0 z-20 w-[46%] border-l border-slate-100 bg-white p-[3%] shadow-2xl dark:border-white/10 dark:bg-[#1a1f31]",
            children: [
              t.jsx("p", {
                className:
                  "text-[2.6cqw] font-black text-slate-900 dark:text-white",
                children: "Giỏ hàng (3)",
              }),
              Js.slice(0, 3).map((e) =>
                t.jsxs(
                  "div",
                  {
                    className: "mt-[1.6cqw] flex items-center gap-[1.2cqw]",
                    children: [
                      t.jsx("span", {
                        className: `flex h-[4.6cqw] w-[4.6cqw] items-center justify-center rounded-[0.8cqw] bg-gradient-to-br ${e.tone}`,
                        children: t.jsx(e.Icon, {
                          className: "h-[2.6cqw] w-[2.6cqw] text-white",
                        }),
                      }),
                      t.jsx("span", {
                        className:
                          "flex-1 text-[2cqw] text-slate-700 dark:text-white/80",
                        children: e.name,
                      }),
                      t.jsx("span", {
                        className:
                          "text-[2cqw] font-bold text-slate-900 dark:text-white",
                        children: e.price,
                      }),
                    ],
                  },
                  e.name,
                ),
              ),
              t.jsxs("div", {
                className:
                  "mt-[2cqw] flex items-center justify-between border-t border-slate-100 pt-[1.6cqw] dark:border-white/10",
                children: [
                  t.jsx("span", {
                    className: "text-[2cqw] text-slate-500 dark:text-white/55",
                    children: "Tổng cộng",
                  }),
                  t.jsx("b", {
                    "data-cue": "total",
                    "data-count": "0:1050000",
                    "data-vnd": !0,
                    "data-suffix": "đ",
                    "data-ms": "800",
                    className:
                      "x-stay text-[2.7cqw] text-slate-900 dark:text-white",
                    children: "0đ",
                  }),
                ],
              }),
              t.jsx("span", {
                "data-press": "order",
                className:
                  "absolute bottom-[18%] left-[7%] right-[7%] flex h-[11%] items-center justify-center rounded-full bg-rose-500 text-[2.2cqw] font-bold text-white shadow-lg shadow-rose-500/30",
                children: "Đặt hàng",
              }),
              t.jsxs("p", {
                "data-cue": "done",
                "data-sfx": "bell",
                className:
                  "absolute bottom-[6%] left-[7%] right-[7%] flex items-center gap-[0.8cqw] text-[1.9cqw] font-bold text-emerald-600 dark:text-emerald-400",
                children: [
                  t.jsx(Hn, { className: "h-[2.4cqw] w-[2.4cqw]" }),
                  "Đơn #1025 · Đã xác nhận",
                ],
              }),
            ],
          }),
          t.jsxs("div", {
            "data-cue": "zalo",
            "data-sfx": "ping",
            className:
              "x-down absolute left-[3%] top-[15%] z-30 flex w-[48%] items-center gap-[1.4cqw] rounded-[1.4cqw] border border-slate-100 bg-white p-[1.6cqw] shadow-2xl dark:border-white/10 dark:bg-[#1e2638]",
            children: [
              t.jsx("img", {
                src: "/zalo-icon.png",
                alt: "",
                className: "h-[5cqw] w-[5cqw] rounded-[1cqw]",
              }),
              t.jsxs("span", {
                className:
                  "text-[1.8cqw] leading-tight text-slate-600 dark:text-white/70",
                children: [
                  t.jsx("b", {
                    className:
                      "block text-[2cqw] text-slate-900 dark:text-white",
                    children: "Đơn mới từ website",
                  }),
                  "3 sản phẩm · 1.050.000đ",
                ],
              }),
            ],
          }),
          t.jsx("div", {
            "data-cue": "rev",
            className:
              "x-pop absolute bottom-[6%] left-[3%] z-30 rounded-full bg-emerald-500 px-[2cqw] py-[1cqw] text-[1.9cqw] font-bold text-white shadow-xl",
            children: "Đơn về thẳng chủ shop · không mất phí sàn",
          }),
          t.jsx(eo, {
            move: "start:50,98 m1:14.5,88,c m2:38,88,c m3:61.5,88,c mcart:93,7.6,c morder:77,76.5,c zalo:hide",
          }),
        ],
      }),
    }),
  ys = [42, 44, 47, 49, 54, 57, 61, 66],
  lm = {
    k: 300,
    ...Object.fromEntries(ys.map((e, n) => [`b${n + 1}`, 1100 + n * 200])),
    line: 2900,
    call: 4100,
    t1: 4700,
    t2: 5150,
    t3: 5600,
    t4: 6050,
  },
  hm = ys
    .map((e, n) => `${n === 0 ? "M" : "L"}${(n + 0.5) * 12.5} ${100 - e - 4}`)
    .join(" "),
  dm = () =>
    t.jsx(Ee, {
      label:
        "Ví dụ báo cáo tháng: lượt truy cập, khách liên hệ và đơn hàng tăng đều qua 8 tháng, kèm danh sách việc TDDTech đã làm trong tháng.",
      cues: lm,
      duration: 11e3,
      className:
        "aspect-[16/11] bg-gradient-to-br from-sky-50 to-cyan-100 dark:from-slate-950 dark:to-[#0b2a3d]",
      children: t.jsxs("div", {
        className: Ta,
        children: [
          t.jsxs("div", {
            className:
              "absolute left-[4%] right-[4%] top-[4%] flex items-start justify-between",
            children: [
              t.jsxs("p", {
                className:
                  "text-[2.7cqw] font-black leading-tight text-slate-900 dark:text-white",
                children: [
                  "Báo cáo tháng 8",
                  t.jsx("span", {
                    className:
                      "block text-[1.7cqw] font-medium text-slate-400 dark:text-white/45",
                    children: "website của anh chị",
                  }),
                ],
              }),
              t.jsx("span", {
                className:
                  "rounded-full bg-slate-100 px-[1.4cqw] py-[0.4cqw] text-[1.5cqw] text-slate-500 dark:bg-white/10 dark:text-white/50",
                children: "Ví dụ minh hoạ",
              }),
            ],
          }),
          t.jsx("div", {
            className:
              "absolute left-[4%] right-[4%] top-[17%] grid h-[15%] grid-cols-3 gap-[1.6cqw]",
            children: [
              {
                label: "Lượt truy cập",
                to: "1.2:1.6",
                dec: "1",
                suffix: "k",
                d: "+33%",
              },
              { label: "Khách liên hệ", to: "12:17", d: "+42%" },
              { label: "Đơn hàng", to: "6:8", d: "+33%" },
            ].map((e) =>
              t.jsxs(
                "div",
                {
                  className:
                    "rounded-[1cqw] border border-slate-100 px-[1.4cqw] py-[0.8cqw] dark:border-white/10",
                  children: [
                    t.jsx("p", {
                      className:
                        "text-[1.6cqw] text-slate-500 dark:text-white/50",
                      children: e.label,
                    }),
                    t.jsxs("p", {
                      className: "flex items-baseline gap-[0.8cqw]",
                      children: [
                        t.jsx("b", {
                          "data-cue": "k",
                          "data-count": e.to,
                          "data-dec": e.dec,
                          "data-suffix": e.suffix,
                          "data-ms": "1600",
                          className:
                            "x-stay text-[3.2cqw] text-slate-900 dark:text-white",
                          children: e.to.split(":")[0],
                        }),
                        t.jsx("span", {
                          "data-cue": "k",
                          className:
                            "x-fade text-[1.6cqw] font-bold text-emerald-500",
                          children: e.d,
                        }),
                      ],
                    }),
                  ],
                },
                e.label,
              ),
            ),
          }),
          t.jsxs("div", {
            className: "absolute left-[4%] top-[37%] h-[57%] w-[58%]",
            children: [
              t.jsxs("div", {
                className: "relative h-[86%]",
                children: [
                  t.jsx("div", {
                    className: "flex h-full items-end",
                    children: ys.map((e, n) =>
                      t.jsx(
                        "div",
                        {
                          className:
                            "flex h-full flex-1 items-end justify-center",
                          children: t.jsx("span", {
                            "data-cue": `b${n + 1}`,
                            className:
                              "x-grow-y block w-[66%] rounded-t-[0.6cqw] bg-gradient-to-t from-primary/50 to-primary dark:to-cyan-300",
                            style: { height: `${e}%` },
                          }),
                        },
                        n,
                      ),
                    ),
                  }),
                  t.jsx("svg", {
                    "data-cue": "line",
                    className:
                      "x-wipe pointer-events-none absolute inset-0 h-full w-full overflow-visible",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: t.jsx("path", {
                      d: hm,
                      fill: "none",
                      stroke: "#f59e0b",
                      strokeWidth: "2.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      vectorEffect: "non-scaling-stroke",
                    }),
                  }),
                  t.jsx("span", {
                    "data-cue": "call",
                    className:
                      "x-pop absolute right-[-4%] top-[-14%] rounded-full bg-amber-400 px-[1.2cqw] py-[0.4cqw] text-[1.6cqw] font-black text-slate-900 shadow-lg",
                    children: "Tăng đều từng tháng",
                  }),
                ],
              }),
              t.jsx("div", {
                className: "flex h-[14%] items-end",
                children: ys.map((e, n) =>
                  t.jsxs(
                    "span",
                    {
                      className:
                        "flex-1 text-center text-[1.5cqw] text-slate-400 dark:text-white/40",
                      children: ["T", n + 1],
                    },
                    n,
                  ),
                ),
              }),
            ],
          }),
          t.jsxs("div", {
            className: "absolute left-[66%] right-[4%] top-[37%]",
            children: [
              t.jsx("p", {
                className:
                  "text-[1.9cqw] font-black text-slate-900 dark:text-white",
                children: "Việc đã làm tháng này",
              }),
              [
                "4 bài viết SEO",
                "Tối ưu form liên hệ",
                "Sao lưu 30/30 ngày",
                "Landing khuyến mãi",
              ].map((e, n) =>
                t.jsxs(
                  "p",
                  {
                    "data-cue": `t${n + 1}`,
                    className:
                      "x-left mt-[1.4cqw] flex items-center gap-[0.8cqw] text-[1.75cqw] text-slate-700 dark:text-white/75",
                    children: [
                      t.jsx(Hn, {
                        className:
                          "h-[2.2cqw] w-[2.2cqw] flex-none text-emerald-500",
                      }),
                      e,
                    ],
                  },
                  e,
                ),
              ),
            ],
          }),
        ],
      }),
    }),
  mm = {
    xl: "clamp(1.65rem, 5.6vw, 4.4rem)",
    lg: "clamp(1.45rem, 4.5vw, 3.4rem)",
  },
  um = ({ reduce: e, light: n }) =>
    t.jsx("svg", {
      "aria-hidden": "true",
      viewBox: "0 0 320 22",
      preserveAspectRatio: "none",
      className: `pointer-events-none absolute -bottom-1 left-0 h-[0.3em] w-full overflow-visible ${n ? "text-white/85" : "text-primary/70"}`,
      children: t.jsx(q.path, {
        d: "M4 13.5C42 6.5 96 4.2 148 6.1c42 1.5 88 5.4 126 10.4C240 13.8 196 11.2 152 10.6c-48-.7-102 1.4-148 7.2",
        fill: "currentColor",
        initial: e ? { opacity: 1 } : { pathLength: 0, opacity: 0 },
        whileInView: { pathLength: 1, opacity: 1 },
        viewport: { once: !0, amount: 0.6 },
        transition: { duration: 0.85, delay: 0.2, ease: "easeOut" },
      }),
    }),
  Qn = (e) => e.toLowerCase().replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, ""),
  Ve = ({
    lines: e,
    grey: n,
    highlight: s,
    underline: i,
    index: a,
    eyebrow: o,
    align: r = "left",
    light: l = !1,
    size: c = "xl",
    className: h = "",
  }) => {
    const g = Zt(),
      p = r === "center",
      { resolvedTheme: d } = Bn(),
      m = d === "dark",
      u = n === void 0 ? [] : Array.isArray(n) ? n : [n],
      x = new Set(u.flatMap((b) => b.split(/\s+/).map(Qn)).filter(Boolean)),
      v = s ? s.split(/\s+/).map(Qn).filter(Boolean) : [],
      w = i ? i.split(/\s+/).map(Qn).filter(Boolean) : [],
      y = new Set(),
      N = new Set(),
      j = l ? "text-white" : "text-slate-900 dark:text-white",
      k = l ? "text-white" : "text-slate-500 dark:text-white/55";
    return t.jsxs("div", {
      className: `${p ? "text-center" : ""} ${h}`,
      children: [
        (a || o) &&
          t.jsxs("div", {
            "data-motion": "up",
            className: `mb-5 flex items-center gap-3 text-[0.7rem] font-black uppercase tracking-[0.24em] sm:text-xs ${p ? "justify-center" : ""} ${l ? "text-white/70" : "text-slate-500 dark:text-white/45"}`,
            children: [
              a &&
                t.jsx("span", {
                  className: l ? "text-white" : "text-primary",
                  children: a,
                }),
              a &&
                o &&
                t.jsx("span", {
                  "aria-hidden": "true",
                  className: `h-px w-7 flex-none ${l ? "bg-white/35" : "bg-slate-300 dark:bg-white/20"}`,
                }),
              o && t.jsx("span", { className: "text-balance", children: o }),
            ],
          }),
        t.jsx("h2", {
          "data-motion": "split",
          className: `font-black uppercase leading-[1.18] tracking-[-0.04em] ${j}`,
          style: {
            fontSize: `var(--eh-size, ${mm[c]})`,
            overflowWrap: "break-word",
          },
          children: e.map((b, S) =>
            t.jsxs(
              "span",
              {
                className: `flex flex-wrap items-baseline ${p ? "justify-center" : ""}`,
                style: {
                  columnGap: "0.26em",
                  rowGap: l && s ? "0.08em" : "0.02em",
                },
                children: [
                  b
                    .split(/\s+/)
                    .filter(Boolean)
                    .map((E, L, T) => {
                      const C = Qn(E),
                        _ = x.has(C),
                        D = v.includes(C) && !y.has(C),
                        B = w.includes(C) && !N.has(C);
                      return (
                        D && y.add(C),
                        B && N.add(C),
                        !D && !B
                          ? t.jsxs(
                              "span",
                              {
                                className: `split-word ${_ ? k : ""}`,
                                style: { "--i": S * 3 + L },
                                children: [
                                  E,
                                  L < T.length - 1 &&
                                    t.jsx("span", {
                                      className: "sr-only",
                                      children: " ",
                                    }),
                                ],
                              },
                              `${C}-${L}`,
                            )
                          : t.jsxs(
                              "span",
                              {
                                className: "split-word relative inline-block",
                                style: { "--i": S * 3 + L },
                                children: [
                                  D &&
                                    t.jsx("span", {
                                      "aria-hidden": "true",
                                      className: "absolute rounded-sm",
                                      style: l
                                        ? {
                                            left: "-0.16em",
                                            right: "-0.16em",
                                            top: "0.1em",
                                            bottom: "-0.04em",
                                            rotate: "-2deg",
                                            backgroundColor: "#ffffff",
                                          }
                                        : {
                                            left: "-0.16em",
                                            right: "-0.16em",
                                            ...(m
                                              ? {
                                                  top: "0.06em",
                                                  bottom: "-0.04em",
                                                }
                                              : {
                                                  bottom: "24%",
                                                  height: "40%",
                                                }),
                                            rotate: "-2deg",
                                            backgroundColor: "#d4ff3f",
                                          },
                                    }),
                                  t.jsx("span", {
                                    className: `relative z-10 ${_ && !D ? k : ""}`,
                                    style: D
                                      ? {
                                          color: l
                                            ? "hsl(195 100% 32%)"
                                            : "#0f172a",
                                          paintOrder: "stroke fill",
                                          WebkitTextStrokeWidth:
                                            m && !l ? "0.055em" : "0",
                                          WebkitTextStrokeColor: "#d4ff3f",
                                        }
                                      : void 0,
                                    children: E,
                                  }),
                                  B && t.jsx(um, { reduce: !!g, light: l }),
                                  L < T.length - 1 &&
                                    t.jsx("span", {
                                      className: "sr-only",
                                      children: " ",
                                    }),
                                ],
                              },
                              `${C}-${L}`,
                            )
                      );
                    }),
                  S < e.length - 1 &&
                    t.jsx("span", { className: "sr-only", children: " " }),
                ],
              },
              `${S}-${b}`,
            ),
          ),
        }),
      ],
    });
  },
  gm = "0 0 200 200",
  Ot = 2,
  yt = 1.5,
  kt = "cubic-bezier(0.22, 1, 0.36, 1)";
let ua = !1;
const ds = new Set();
let Ue = null;
const pm = () => {
    const e = document.documentElement.classList.contains("low-power");
    e !== ua && ((ua = e), ds.forEach((n) => n(e)));
  },
  xm = (e) => (
    ds.add(e),
    Ue ||
      ((ua = document.documentElement.classList.contains("low-power")),
      (Ue = new MutationObserver(pm)),
      Ue.observe(document.documentElement, {
        attributes: !0,
        attributeFilter: ["class"],
      })),
    () => {
      (ds.delete(e),
        ds.size === 0 && (Ue == null || Ue.disconnect(), (Ue = null)));
    }
  ),
  fm = () => {
    const [e, n] = f.useState(!1);
    return (
      f.useEffect(
        () => (
          n(document.documentElement.classList.contains("low-power")),
          xm(n)
        ),
        [],
      ),
      e
    );
  },
  bm = (e, n = !1) => {
    const s = Zt(),
      i = fm(),
      [a, o] = f.useState(!1),
      [r, l] = f.useState(!1),
      c = !!s || i,
      h = !c && (n || !r);
    return (
      f.useEffect(() => {
        if (!e || !h) return;
        if (typeof IntersectionObserver > "u") {
          (o(!0), l(!0));
          return;
        }
        const g = new IntersectionObserver(
          (p) => {
            const d = p.some((m) => m.isIntersecting);
            (n && o(d), d && l(!0));
          },
          { rootMargin: "0px 0px -10% 0px", threshold: 0.25 },
        );
        return (g.observe(e), () => g.disconnect());
      }, [e, h, n]),
      { enter: c ? !0 : r, loop: !c && a, still: c }
    );
  },
  Me = ({ children: e, className: n = "", style: s, svgRef: i }) =>
    t.jsx("svg", {
      ref: i,
      viewBox: gm,
      role: "presentation",
      "aria-hidden": "true",
      focusable: "false",
      className: `block overflow-visible ${n}`,
      style: s,
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: e,
    }),
  Le = (e = !1) => {
    const [n, s] = f.useState(null);
    return { motion: bm(n, e), frameProps: { svgRef: s } };
  },
  _t = "currentColor",
  Ct = "hsl(var(--primary))",
  ho = "hsl(var(--art-readout))",
  Xn = "hsl(var(--primary) / 0.28)",
  Ss = "hsl(var(--primary) / 0.45)",
  Xe = "hsl(var(--primary) / 0.12)",
  qs = "hsl(var(--art-neon))",
  In = "hsl(var(--art-neon-fill))",
  Sa = "hsl(var(--art-on-neon-fill))",
  qa = (e, n) => (Math.PI * e * n) / 180,
  ki = (e, n, s, i) => {
    const a = (i * Math.PI) / 180;
    return { x: e + s * Math.cos(a), y: n + s * Math.sin(a) };
  },
  tn = (e, n = 0.12, s = 0.15) => `${s + e * n}s`,
  mo = "text-slate-300 dark:text-white/20",
  Ca = (e) => (/(^|\s)(text-|dark:text-)/.test(e) ? e : `${mo} ${e}`),
  Qt = 100,
  ee = 112,
  mn = 240,
  ji = 150,
  ta = 0.72,
  vm = 78,
  ms = 70,
  uo = 58,
  go = 54,
  an = (e) => {
    const n = ki(Qt, ee, e, ji),
      s = ki(Qt, ee, e, ji + mn);
    return `M ${n.x} ${n.y} A ${e} ${e} 0 1 1 ${s.x} ${s.y}`;
  },
  Zn = qa(ms, mn),
  wm = qa(uo, mn) / 8,
  ym = qa(go, mn) / 32,
  vg = ({ className: e = "" }) => {
    const { motion: n, frameProps: s } = Le(!0),
      i = mn * (n.enter ? ta : 0) - mn / 2;
    return t.jsxs(Me, {
      ...s,
      className: Ca(e),
      children: [
        t.jsx("path", {
          d: an(vm),
          stroke: _t,
          strokeWidth: yt,
          strokeOpacity: 0.55,
        }),
        t.jsx("path", { d: an(ms), stroke: _t, strokeWidth: yt }),
        t.jsxs("g", {
          style: {
            opacity: n.enter ? 1 : 0.2,
            transition: n.still ? "none" : `opacity 0.45s ${kt} 0.15s`,
          },
          children: [
            t.jsx("path", {
              d: an(go),
              stroke: _t,
              strokeWidth: yt,
              strokeLinecap: "butt",
              strokeDasharray: `1.6 ${ym - 1.6}`,
            }),
            t.jsx("path", {
              d: an(uo),
              stroke: _t,
              strokeWidth: Ot,
              strokeLinecap: "butt",
              strokeDasharray: `2.4 ${wm - 2.4}`,
            }),
          ],
        }),
        t.jsx("path", {
          d: an(ms),
          stroke: Ct,
          strokeWidth: 5,
          strokeDasharray: Zn,
          strokeDashoffset: Zn * (1 - (n.enter ? ta : 0)),
          style: {
            transition: n.still ? "none" : `stroke-dashoffset 1.15s ${kt}`,
          },
        }),
        t.jsx("path", {
          d: an(ms),
          stroke: qs,
          strokeWidth: 5,
          strokeLinecap: "butt",
          strokeDasharray: `3 ${Zn}`,
          strokeDashoffset: -Zn * ta,
          opacity: n.enter ? 1 : 0,
          style: { transition: n.still ? "none" : `opacity 0.4s ${kt} 1s` },
          children: n.loop
            ? t.jsx("animate", {
                attributeName: "opacity",
                values: "1;0.55;1",
                dur: "4.6s",
                repeatCount: "indefinite",
              })
            : null,
        }),
        t.jsx("text", {
          x: Qt,
          y: 102,
          textAnchor: "middle",
          fill: ho,
          stroke: "none",
          fontSize: 34,
          fontWeight: 800,
          letterSpacing: -1,
          style: {
            opacity: n.enter ? 1 : 0,
            transition: n.still ? "none" : `opacity 0.5s ${kt} 0.75s`,
          },
          children: "72",
        }),
        t.jsx("g", {
          style: {
            transformOrigin: `${Qt}px ${ee}px`,
            transform: `rotate(${i}deg)`,
            transition: n.still ? "none" : `transform 1.15s ${kt}`,
          },
          children: t.jsxs("g", {
            children: [
              n.loop
                ? t.jsx("animateTransform", {
                    attributeName: "transform",
                    type: "rotate",
                    values: `0 ${Qt} ${ee};-2.4 ${Qt} ${ee};0.9 ${Qt} ${ee};2.4 ${Qt} ${ee};0 ${Qt} ${ee}`,
                    keyTimes: "0;0.28;0.5;0.76;1",
                    calcMode: "spline",
                    keySplines:
                      "0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1",
                    dur: "4.6s",
                    repeatCount: "indefinite",
                  })
                : null,
              t.jsx("path", {
                d: `M ${Qt} ${ee - 62} L ${Qt + 4} ${ee - 4} L ${Qt - 4} ${ee - 4} Z`,
                fill: Ct,
                stroke: "none",
              }),
              t.jsx("line", {
                x1: Qt,
                y1: ee + 2,
                x2: Qt,
                y2: ee + 15,
                stroke: Ct,
                strokeWidth: Ot,
              }),
            ],
          }),
        }),
        t.jsx("circle", { cx: Qt, cy: ee, r: 7, fill: Ct, stroke: "none" }),
        t.jsx("circle", { cx: Qt, cy: ee, r: 11, stroke: Ss, strokeWidth: yt }),
        t.jsx("path", { d: "M 74 158 H 126", stroke: _t, strokeWidth: Ot }),
      ],
    });
  },
  km = [
    { half: 62, y: 44 },
    { half: 50, y: 74 },
    { half: 38, y: 104 },
    { half: 26, y: 134 },
  ],
  jm = "M 100 56 V 122",
  Ni = 66,
  wg = ({ className: e = "" }) => {
    const { motion: n, frameProps: s } = Le(!0);
    return t.jsxs(Me, {
      ...s,
      className: `${mo} ${e}`,
      children: [
        t.jsx("path", {
          d: jm,
          stroke: Xn,
          strokeWidth: Ot,
          strokeDasharray: Ni,
          strokeDashoffset: n.enter ? 0 : Ni,
          style: {
            transition: n.still ? "none" : `stroke-dashoffset 0.9s ${kt} 0.1s`,
          },
        }),
        km.map((i, a) =>
          t.jsxs(
            "g",
            {
              style: {
                transformOrigin: "100px 100px",
                transform: n.enter ? "none" : "translate(0px, 10px)",
                opacity: n.enter ? 1 : 0,
                transition: n.still
                  ? "none"
                  : `transform 0.5s ${kt} ${tn(a, 0.13)}, opacity 0.5s ${kt} ${tn(a, 0.13)}`,
              },
              children: [
                t.jsx("rect", {
                  x: 100 - i.half,
                  y: i.y - 11,
                  width: i.half * 2,
                  height: 22,
                  rx: 5,
                  stroke: Ct,
                  strokeWidth: Ot,
                  fill: Xe,
                }),
                t.jsx("path", {
                  d: `M ${100 - i.half + 10} ${i.y} H ${100 + i.half - 10}`,
                  stroke: Ct,
                  strokeWidth: yt,
                  strokeOpacity: 0.6,
                }),
              ],
            },
            a,
          ),
        ),
        t.jsx("path", {
          d: "M 74 145 L 100 160 L 126 145",
          stroke: _t,
          strokeWidth: yt,
          opacity: n.enter ? 1 : 0,
          style: { transition: n.still ? "none" : `opacity 0.4s ${kt} 0.7s` },
        }),
        n.loop
          ? t.jsxs("circle", {
              r: 4.5,
              cx: 100,
              cy: 40,
              fill: Ct,
              stroke: "none",
              opacity: 0,
              children: [
                t.jsx("animate", {
                  attributeName: "cy",
                  values: "40;40;150;150",
                  keyTimes: "0;0.12;0.78;1",
                  dur: "3.4s",
                  repeatCount: "indefinite",
                }),
                t.jsx("animate", {
                  attributeName: "opacity",
                  values: "0;0.9;0.9;0",
                  keyTimes: "0;0.12;0.74;0.82",
                  dur: "3.4s",
                  repeatCount: "indefinite",
                }),
              ],
            })
          : null,
        t.jsx("g", {
          style: {
            transformOrigin: "100px 172px",
            transform: `scale(${n.enter ? 1 : 0.6})`,
            opacity: n.enter ? 1 : 0,
            transition: n.still
              ? "none"
              : `transform 0.45s ${kt} 0.85s, opacity 0.45s ${kt} 0.85s`,
          },
          children: t.jsx("g", {
            transform: "translate(100, 172)",
            children: t.jsxs("g", {
              children: [
                n.loop
                  ? t.jsx("animateTransform", {
                      attributeName: "transform",
                      type: "scale",
                      values: "1;1;1.07;1",
                      keyTimes: "0;0.8;0.88;1",
                      dur: "3.4s",
                      repeatCount: "indefinite",
                    })
                  : null,
                t.jsxs("g", {
                  transform: "translate(-100, -172)",
                  children: [
                    t.jsx("rect", {
                      x: 66,
                      y: 162,
                      width: 68,
                      height: 20,
                      rx: 10,
                      fill: In,
                      stroke: "none",
                    }),
                    t.jsx("path", {
                      d: "M 84 172 H 112 M 105 166 L 111 172 L 105 178",
                      stroke: Sa,
                      strokeWidth: Ot,
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  yg = ({ className: e = "" }) => {
    const { motion: n, frameProps: s } = Le(!0);
    return t.jsxs(Me, {
      ...s,
      className: Ca(e),
      children: [
        t.jsx("g", {
          style: {
            transformOrigin: "78px 96px",
            transform: n.enter ? "translate(0px, -10px) rotate(12deg)" : "none",
            transition: n.still ? "none" : `transform 0.7s ${kt} 0.25s`,
          },
          children: t.jsxs("g", {
            children: [
              n.loop
                ? t.jsx("animateTransform", {
                    attributeName: "transform",
                    type: "rotate",
                    values: "0 78 96;7 78 96;0 78 96",
                    keyTimes: "0;0.5;1",
                    calcMode: "spline",
                    keySplines: "0.4 0 0.2 1;0.4 0 0.2 1",
                    dur: "5.2s",
                    repeatCount: "indefinite",
                  })
                : null,
              t.jsx("path", {
                d: "M 78 96 V 74 A 22 22 0 0 1 122 74 V 96",
                stroke: Ct,
                strokeWidth: Ot,
              }),
            ],
          }),
        }),
        t.jsx("rect", {
          x: 62,
          y: 96,
          width: 76,
          height: 62,
          rx: 6,
          stroke: _t,
          strokeWidth: yt,
          fill: Xe,
        }),
        t.jsxs("g", {
          style: {
            transform: n.enter ? "translate(14px, 0px)" : "none",
            opacity: n.enter ? 0 : 1,
            transition: n.still
              ? "none"
              : `transform 0.6s ${kt}, opacity 0.6s ${kt}`,
          },
          children: [
            t.jsx("circle", {
              cx: 34,
              cy: 127,
              r: 7,
              stroke: _t,
              strokeWidth: yt,
            }),
            t.jsx("path", {
              d: "M 41 127 H 58 M 52 127 V 134",
              stroke: _t,
              strokeWidth: yt,
            }),
          ],
        }),
        t.jsxs("g", {
          style: {
            transformOrigin: "100px 124px",
            transform: `scale(${n.enter ? 1 : 0.85})`,
            opacity: n.enter ? 1 : 0,
            transition: n.still
              ? "none"
              : `transform 0.5s ${kt} 0.55s, opacity 0.5s ${kt} 0.55s`,
          },
          children: [
            t.jsx("path", {
              d: "M 88 114 L 78 124 L 88 134",
              stroke: Ct,
              strokeWidth: Ot,
            }),
            t.jsx("path", {
              d: "M 112 114 L 122 124 L 112 134",
              stroke: Ct,
              strokeWidth: Ot,
            }),
            t.jsx("path", {
              d: "M 104 112 L 96 136",
              stroke: Ct,
              strokeWidth: yt,
            }),
          ],
        }),
        t.jsx("line", {
          x1: 84,
          y1: 146,
          x2: 116,
          y2: 146,
          stroke: qs,
          strokeWidth: Ot,
          opacity: n.enter ? 1 : 0,
          style: { transition: n.still ? "none" : `opacity 0.4s ${kt} 0.9s` },
          children: n.loop
            ? t.jsx("animate", {
                attributeName: "opacity",
                values: "1;0.5;1",
                keyTimes: "0;0.5;1",
                dur: "5.2s",
                repeatCount: "indefinite",
              })
            : null,
        }),
      ],
    });
  },
  Ti =
    "M 100 32 L 152 52 V 104 C 152 136 128 158 100 168 C 72 158 48 136 48 104 V 52 Z",
  Si = 394,
  Nm = "M 60 110 H 80 L 88 90 L 98 130 L 108 104 L 116 110 H 140",
  Jn = 146,
  kg = ({ className: e = "" }) => {
    const { motion: n, frameProps: s } = Le(!0);
    return t.jsxs(Me, {
      ...s,
      className: Ca(e),
      children: [
        t.jsx("path", { d: Ti, stroke: _t, strokeWidth: yt, fill: Xe }),
        t.jsx("path", {
          d: Ti,
          stroke: Ct,
          strokeWidth: Ot,
          strokeDasharray: Si,
          strokeDashoffset: n.enter ? 0 : Si,
          style: {
            transition: n.still ? "none" : `stroke-dashoffset 0.9s ${kt}`,
          },
        }),
        t.jsx("g", {
          transform: "translate(100, 110)",
          children: t.jsx("circle", {
            cx: 0,
            cy: 0,
            r: 44,
            stroke: Ct,
            strokeWidth: yt,
            opacity: 0.2,
            children: n.loop
              ? t.jsxs(t.Fragment, {
                  children: [
                    t.jsx("animateTransform", {
                      attributeName: "transform",
                      type: "scale",
                      values: "0.8;1.35",
                      dur: "2.8s",
                      repeatCount: "indefinite",
                    }),
                    t.jsx("animate", {
                      attributeName: "opacity",
                      values: "0.45;0",
                      dur: "2.8s",
                      repeatCount: "indefinite",
                    }),
                  ],
                })
              : null,
          }),
        }),
        t.jsx("path", {
          d: Nm,
          stroke: Ct,
          strokeWidth: Ot,
          strokeDasharray: Jn,
          strokeDashoffset: n.enter ? 0 : Jn,
          style: {
            transition: n.still
              ? "none"
              : `stroke-dashoffset 0.7s ${kt} ${tn(2)}`,
          },
          children: n.loop
            ? t.jsx("animate", {
                attributeName: "stroke-dashoffset",
                values: `${Jn};0;0;${-Jn}`,
                keyTimes: "0;0.35;0.65;1",
                dur: "2.8s",
                repeatCount: "indefinite",
              })
            : null,
        }),
      ],
    });
  },
  Tm = "text-slate-300 dark:text-white/20",
  Sm = "hsl(var(--primary-foreground))",
  xn = (e) => (/(^|\s)(text-|dark:text-)/.test(e) ? e : `${Tm} ${e}`),
  Ce = (e, n, s = 0, i = 10) => ({
    transform: e ? "none" : `translate(0px, ${i}px)`,
    opacity: e ? 1 : 0,
    transition: n
      ? "none"
      : `transform 0.5s ${kt} ${tn(s, 0.1)}, opacity 0.5s ${kt} ${tn(s, 0.1)}`,
  }),
  qm = [118, 130, 142],
  Cm = ({ className: e = "" }) => {
    const { motion: n, frameProps: s } = Le(!0);
    return t.jsxs(Me, {
      ...s,
      className: xn(e),
      children: [
        t.jsxs("g", {
          style: Ce(n.enter, n.still, 0, 8),
          children: [
            t.jsx("path", {
              d: "M 36 58 H 132 A 10 10 0 0 1 142 68 V 92 A 10 10 0 0 1 132 102 H 52 L 40 114 V 102 H 36 A 10 10 0 0 1 26 92 V 68 A 10 10 0 0 1 36 58 Z",
              stroke: _t,
              strokeWidth: yt,
              fill: Xe,
            }),
            t.jsx("path", {
              d: "M 42 74 H 122",
              stroke: _t,
              strokeWidth: yt,
              strokeOpacity: 0.55,
              strokeDasharray: 80,
              strokeDashoffset: n.enter ? 0 : 80,
              style: {
                transition: n.still
                  ? "none"
                  : `stroke-dashoffset 0.6s ${kt} 0.2s`,
              },
              children: n.loop
                ? t.jsx("animate", {
                    attributeName: "stroke-dashoffset",
                    values: "80;0;0;0",
                    keyTimes: "0;0.3;0.85;1",
                    dur: "2.9s",
                    repeatCount: "indefinite",
                  })
                : null,
            }),
            t.jsx("path", {
              d: "M 42 88 H 94",
              stroke: _t,
              strokeWidth: yt,
              strokeOpacity: 0.35,
            }),
          ],
        }),
        t.jsxs("g", {
          style: Ce(n.enter, n.still, 2, 8),
          children: [
            t.jsx("path", {
              d: "M 168 120 H 100 A 10 10 0 0 0 90 130 V 150 A 10 10 0 0 0 100 160 H 148 L 160 172 V 160 H 168 A 10 10 0 0 0 178 150 V 130 A 10 10 0 0 0 168 120 Z",
              stroke: Ct,
              strokeWidth: Ot,
              fill: Xn,
            }),
            qm.map((i, a) =>
              t.jsx(
                "circle",
                {
                  cx: i,
                  cy: 140,
                  r: 4,
                  fill: Ct,
                  stroke: "none",
                  children: n.loop
                    ? t.jsx("animate", {
                        attributeName: "cy",
                        values: "140;137.5;140;140",
                        keyTimes: "0;0.16;0.32;1",
                        calcMode: "spline",
                        keySplines: "0.4 0 0.2 1;0.4 0 0.2 1;0 0 1 1",
                        dur: "2.9s",
                        begin: `${a * 0.22}s`,
                        repeatCount: "indefinite",
                      })
                    : null,
                },
                i,
              ),
            ),
          ],
        }),
      ],
    });
  },
  Em = ({ className: e = "" }) => {
    const { motion: n, frameProps: s } = Le(!0);
    return t.jsxs(Me, {
      ...s,
      className: xn(e),
      children: [
        t.jsx("rect", {
          x: 26,
          y: 40,
          width: 148,
          height: 120,
          rx: 10,
          stroke: _t,
          strokeWidth: yt,
        }),
        t.jsx("path", { d: "M 26 60 H 174", stroke: _t, strokeWidth: yt }),
        t.jsx("circle", { cx: 38, cy: 50, r: 2.5, fill: _t, stroke: "none" }),
        t.jsx("circle", { cx: 47, cy: 50, r: 2.5, fill: _t, stroke: "none" }),
        t.jsx("circle", { cx: 56, cy: 50, r: 2.5, fill: _t, stroke: "none" }),
        t.jsx("g", {
          style: Ce(n.enter, n.still, 0, 8),
          children: t.jsx("rect", {
            x: 38,
            y: 72,
            width: 72,
            height: 38,
            rx: 5,
            fill: Xn,
            stroke: Ct,
            strokeWidth: Ot,
          }),
        }),
        t.jsx("g", {
          style: Ce(n.enter, n.still, 1, 8),
          children: t.jsx("rect", {
            x: 120,
            y: 72,
            width: 42,
            height: 38,
            rx: 5,
            stroke: Ss,
            strokeWidth: yt,
            fill: Xe,
          }),
        }),
        t.jsxs("g", {
          style: Ce(n.enter, n.still, 2, 8),
          children: [
            t.jsx("path", { d: "M 38 124 H 110", stroke: Ct, strokeWidth: Ot }),
            t.jsx("path", {
              d: "M 38 136 H 162",
              stroke: _t,
              strokeWidth: yt,
              strokeOpacity: 0.5,
            }),
            t.jsx("path", {
              d: "M 38 148 H 134",
              stroke: _t,
              strokeWidth: yt,
              strokeOpacity: 0.35,
            }),
          ],
        }),
        n.loop
          ? t.jsxs("g", {
              children: [
                t.jsx("animateTransform", {
                  attributeName: "transform",
                  type: "translate",
                  values: "0 0;0 88;0 88",
                  keyTimes: "0;0.72;1",
                  calcMode: "spline",
                  keySplines: "0.45 0 0.55 1;0 0 1 1",
                  dur: "5.5s",
                  repeatCount: "indefinite",
                }),
                t.jsx("path", {
                  d: "M 34 68 H 166",
                  stroke: qs,
                  strokeWidth: Ot,
                  opacity: 0,
                  children: t.jsx("animate", {
                    attributeName: "opacity",
                    values: "0;0.65;0.65;0",
                    keyTimes: "0;0.1;0.62;0.72",
                    dur: "5.5s",
                    repeatCount: "indefinite",
                  }),
                }),
              ],
            })
          : null,
      ],
    });
  },
  Mm = [
    { rotate: -12, x: -22, opacity: 0.35 },
    { rotate: -6, x: -11, opacity: 0.6 },
  ],
  Lm = ({ className: e = "" }) => {
    const { motion: n, frameProps: s } = Le(!0);
    return t.jsxs(Me, {
      ...s,
      className: xn(e),
      children: [
        Mm.map((i, a) =>
          t.jsx(
            "g",
            {
              style: {
                transformOrigin: "100px 160px",
                transform: n.enter
                  ? `translate(${i.x}px, 0px) rotate(${i.rotate}deg)`
                  : "none",
                opacity: n.enter ? i.opacity : 0,
                transition: n.still
                  ? "none"
                  : `transform 0.6s ${kt} ${tn(a, 0.1)}, opacity 0.6s ${kt} ${tn(a, 0.1)}`,
              },
              children: t.jsx("rect", {
                x: 66,
                y: 44,
                width: 68,
                height: 112,
                rx: 9,
                stroke: _t,
                strokeWidth: yt,
              }),
            },
            a,
          ),
        ),
        t.jsx("g", {
          style: Ce(n.enter, n.still, 2, 12),
          children: t.jsxs("g", {
            children: [
              n.loop
                ? t.jsx("animateTransform", {
                    attributeName: "transform",
                    type: "rotate",
                    values:
                      "0 100 160;1.6 100 160;0 100 160;-1.6 100 160;0 100 160",
                    keyTimes: "0;0.25;0.5;0.75;1",
                    calcMode: "spline",
                    keySplines:
                      "0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1",
                    dur: "6s",
                    repeatCount: "indefinite",
                  })
                : null,
              t.jsx("rect", {
                x: 66,
                y: 44,
                width: 68,
                height: 112,
                rx: 9,
                stroke: Ct,
                strokeWidth: Ot,
                fill: Xe,
              }),
              t.jsx("rect", {
                x: 76,
                y: 56,
                width: 48,
                height: 30,
                rx: 4,
                fill: Xn,
                stroke: "none",
              }),
              t.jsx("path", {
                d: "M 76 98 H 124",
                stroke: Ct,
                strokeWidth: yt,
              }),
              t.jsx("path", {
                d: "M 76 108 H 110",
                stroke: Ct,
                strokeWidth: yt,
                strokeOpacity: 0.5,
              }),
              t.jsx("path", {
                d: "M 76 118 H 118",
                stroke: Ct,
                strokeWidth: yt,
                strokeOpacity: 0.35,
              }),
              t.jsx("rect", {
                x: 76,
                y: 132,
                width: 30,
                height: 12,
                rx: 6,
                fill: In,
                stroke: "none",
                children: n.loop
                  ? t.jsx("animate", {
                      attributeName: "fill-opacity",
                      values: "1;0.5;1",
                      keyTimes: "0;0.5;1",
                      dur: "6s",
                      repeatCount: "indefinite",
                    })
                  : null,
              }),
            ],
          }),
        }),
      ],
    });
  },
  _m = [44, 108, 152],
  Am = ({ className: e = "" }) => {
    const { motion: n, frameProps: s } = Le(!0);
    return t.jsxs(Me, {
      ...s,
      className: xn(e),
      children: [
        _m.map((i, a) => {
          const o = a === 0;
          return t.jsxs(
            "g",
            {
              style: Ce(n.enter, n.still, a, 8),
              children: [
                t.jsx("rect", {
                  x: 28,
                  y: i - 16,
                  width: 144,
                  height: 32,
                  rx: 8,
                  stroke: o ? Ct : _t,
                  strokeWidth: o ? Ot : yt,
                  fill: o ? Xe : "none",
                }),
                t.jsx("path", {
                  d: `M 42 ${i} H ${o ? 120 : 108}`,
                  stroke: o ? Ct : _t,
                  strokeWidth: yt,
                  strokeOpacity: o ? 0.8 : 0.45,
                }),
                t.jsx("path", {
                  d: `M 150 ${i} H 162`,
                  stroke: Ct,
                  strokeWidth: Ot,
                }),
                t.jsx("path", {
                  d: `M 156 ${i - 6} V ${i + 6}`,
                  stroke: Ct,
                  strokeWidth: Ot,
                  opacity: o ? 0 : 1,
                  children: n.loop
                    ? t.jsx("animate", {
                        attributeName: "opacity",
                        values: o ? "0;1;1;0;0" : "1;0;0;1;1",
                        keyTimes: "0;0.18;0.55;0.72;1",
                        dur: "3.9s",
                        begin: `${a * 1.3}s`,
                        repeatCount: "indefinite",
                      })
                    : null,
                }),
              ],
            },
            i,
          );
        }),
        t.jsx("path", {
          d: "M 42 70 H 130 M 42 82 H 104",
          stroke: qs,
          strokeWidth: 3,
          strokeDasharray: 150,
          strokeDashoffset: n.enter ? 0 : 150,
          style: {
            transition: n.still ? "none" : `stroke-dashoffset 0.6s ${kt} 0.5s`,
          },
          children: n.loop
            ? t.jsx("animate", {
                attributeName: "stroke-dashoffset",
                values: "0;150;0;0;0",
                keyTimes: "0;0.2;0.5;0.9;1",
                dur: "3.9s",
                repeatCount: "indefinite",
              })
            : null,
        }),
      ],
    });
  },
  $m = ({ className: e = "" }) => {
    const { motion: n, frameProps: s } = Le(!0);
    return t.jsxs(Me, {
      ...s,
      className: xn(e),
      children: [
        t.jsx("path", {
          d: "M 84 120 C 102 100 124 96 138 82",
          stroke: Ss,
          strokeWidth: yt,
          strokeDasharray: "5 6",
          opacity: n.enter ? 1 : 0,
          style: { transition: n.still ? "none" : `opacity 0.5s ${kt} 0.2s` },
        }),
        t.jsx("g", {
          style: {
            opacity: n.enter ? 1 : 0,
            transition: n.still ? "none" : `opacity 0.5s ${kt} 0.3s`,
          },
          children: t.jsxs("g", {
            children: [
              n.loop
                ? t.jsx("animateMotion", {
                    path: "M 0 0 C 18 -20 40 -24 54 -38",
                    dur: "3.2s",
                    keyPoints: "0;0;1;1",
                    keyTimes: "0;0.12;0.5;1",
                    calcMode: "spline",
                    keySplines: "0 0 1 1;0.3 0 0.2 1;0 0 1 1",
                    repeatCount: "indefinite",
                  })
                : null,
              t.jsx("path", {
                d: "M 78 124 L 34 146 L 52 150 L 46 162 Z",
                fill: Ct,
                stroke: "none",
                children: n.loop
                  ? t.jsx("animate", {
                      attributeName: "fill-opacity",
                      values: "1;1;1;0;0;1",
                      keyTimes: "0;0.12;0.46;0.54;0.94;1",
                      dur: "3.2s",
                      repeatCount: "indefinite",
                    })
                  : null,
              }),
              t.jsx("path", {
                d: "M 78 124 L 52 150",
                stroke: Sm,
                strokeWidth: yt,
                strokeOpacity: 0.5,
                children: n.loop
                  ? t.jsx("animate", {
                      attributeName: "stroke-opacity",
                      values: "0.55;0.55;0.55;0;0;0.55",
                      keyTimes: "0;0.12;0.46;0.54;0.94;1",
                      dur: "3.2s",
                      repeatCount: "indefinite",
                    })
                  : null,
              }),
            ],
          }),
        }),
        t.jsx("g", {
          style: {
            transformOrigin: "150px 56px",
            transform: `scale(${n.enter ? 1 : 0.6})`,
            opacity: n.enter ? 1 : 0,
            transition: n.still
              ? "none"
              : `transform 0.45s ${kt} 0.7s, opacity 0.45s ${kt} 0.7s`,
          },
          children: t.jsx("g", {
            transform: "translate(150, 56)",
            children: t.jsxs("g", {
              children: [
                n.loop
                  ? t.jsx("animateTransform", {
                      attributeName: "transform",
                      type: "scale",
                      values: "1;1;1.12;1;1",
                      keyTimes: "0;0.48;0.56;0.68;1",
                      calcMode: "spline",
                      keySplines: "0 0 1 1;0.2 0 0.2 1;0.4 0 0.2 1;0 0 1 1",
                      dur: "3.2s",
                      repeatCount: "indefinite",
                    })
                  : null,
                t.jsxs("g", {
                  transform: "translate(-150, -56)",
                  children: [
                    t.jsx("rect", {
                      x: 122,
                      y: 38,
                      width: 56,
                      height: 36,
                      rx: 10,
                      fill: In,
                      stroke: "none",
                    }),
                    t.jsx("path", {
                      d: "M 134 74 L 134 84 L 146 74 Z",
                      fill: In,
                      stroke: "none",
                    }),
                    t.jsx("path", {
                      d: "M 134 50 H 166 M 134 62 H 154",
                      stroke: Sa,
                      strokeWidth: yt,
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        t.jsx("text", {
          x: 46,
          y: 172,
          fill: ho,
          stroke: "none",
          fontSize: 16,
          fontWeight: 800,
          letterSpacing: -0.3,
          style: {
            opacity: n.enter ? 1 : 0,
            transition: n.still ? "none" : `opacity 0.4s ${kt} 0.95s`,
          },
          children: "5 phút",
        }),
      ],
    });
  },
  Pm = [46, 84, 122],
  Rm = [65, 103],
  Im = ({ className: e = "" }) => {
    const { motion: n, frameProps: s } = Le(!0);
    return t.jsxs(Me, {
      ...s,
      className: xn(e),
      children: [
        Pm.map((i, a) =>
          t.jsx(
            "g",
            {
              style: Ce(n.enter, n.still, a, 12),
              children: t.jsx("rect", {
                x: i,
                y: 128,
                width: 32,
                height: 32,
                rx: 5,
                stroke: _t,
                strokeWidth: yt,
                fill: Xe,
              }),
            },
            i,
          ),
        ),
        Rm.map((i, a) =>
          t.jsx(
            "g",
            {
              style: Ce(n.enter, n.still, a + 3, 12),
              children: t.jsx("rect", {
                x: i,
                y: 94,
                width: 32,
                height: 32,
                rx: 5,
                stroke: Ss,
                strokeWidth: yt,
                fill: Xn,
              }),
            },
            i,
          ),
        ),
        t.jsx("g", {
          style: Ce(n.enter, n.still, 5, 16),
          children: t.jsxs("g", {
            children: [
              n.loop
                ? t.jsx("animateTransform", {
                    attributeName: "transform",
                    type: "translate",
                    values: "0 0;0 -6;0 0;0 0",
                    keyTimes: "0;0.22;0.42;1",
                    calcMode: "spline",
                    keySplines: "0.4 0 0.2 1;0.3 0 0.2 1;0 0 1 1",
                    dur: "3.6s",
                    repeatCount: "indefinite",
                  })
                : null,
              t.jsx("rect", {
                x: 84,
                y: 60,
                width: 32,
                height: 32,
                rx: 5,
                fill: In,
                stroke: "none",
              }),
              t.jsx("path", {
                d: "M 92 76 L 98 82 L 110 70",
                stroke: Sa,
                strokeWidth: Ot,
              }),
            ],
          }),
        }),
        t.jsx("path", {
          d: "M 38 168 H 162",
          stroke: _t,
          strokeWidth: yt,
          strokeDasharray: 124,
          strokeDashoffset: n.enter ? 0 : 124,
          style: {
            transition: n.still ? "none" : `stroke-dashoffset 0.7s ${kt}`,
          },
        }),
      ],
    });
  },
  po = () => {
    const e = f.useRef(null),
      [n, s] = f.useState(!1);
    return (
      f.useEffect(() => {
        const i = new IntersectionObserver(
            ([o]) => {
              o.isIntersecting && s(!0);
            },
            { threshold: 0.1, rootMargin: "50px" },
          ),
          a = e.current;
        return (
          a && i.observe(a),
          () => {
            a && i.unobserve(a);
          }
        );
      }, []),
      { ref: e, isVisible: n }
    );
  },
  Ea = ({ text: e, className: n = "" }) => {
    const [s, i] = f.useState(!1),
      a = Zt(),
      [o, r] = f.useState(!1);
    return (
      f.useEffect(() => {
        r(document.documentElement.classList.contains("low-power"));
      }, []),
      o || a || s
        ? t.jsx("div", { className: n, children: e })
        : t.jsx(q.div, {
            className: n,
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0, amount: "some" },
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            onAnimationComplete: () => i(!0),
            children: e,
          })
    );
  },
  Om = () => {
    const { ref: e } = po(),
      n = [
        {
          icon: Pc,
          href: "/thiet-ke-website-doanh-nghiep",
          title: "Website doanh nghiệp",
          description:
            "Bộ mặt chính thức trên Google — khách tìm hiểu rồi quyết định.",
          Motion: rm,
        },
        {
          icon: Rc,
          href: "/thiet-ke-website-ban-hang",
          title: "Website bán hàng",
          description: "Kênh bán riêng đứng tên anh chị — bớt phụ thuộc sàn.",
          Motion: cm,
        },
        {
          icon: Ic,
          href: "/bang-gia-thiet-ke-website",
          title: "Vận hành hằng tháng",
          description:
            "Bảo vệ, giữ gìn, phát triển — website mang về khách mỗi tháng.",
          Motion: dm,
        },
      ];
    return t.jsxs("section", {
      id: "services",
      className: "relative overflow-hidden py-10 md:py-20 lg:py-24",
      children: [
        t.jsx("div", {
          className: "absolute inset-0 z-0",
          children: t.jsx("img", {
            src: "/bg/office-night.webp",
            alt: "",
            loading: "lazy",
            decoding: "async",
            className: "h-full w-full object-cover",
          }),
        }),
        t.jsx("div", {
          className:
            "absolute inset-0 bg-slate-50/90 dark:bg-black/60 z-10 transition-colors duration-500",
        }),
        t.jsx("span", {
          "aria-hidden": "true",
          className:
            "pointer-events-none absolute -right-8 bottom-0 z-10 h-32 w-32",
          style: { backgroundColor: "#d4ff3f", borderTopLeftRadius: "100%" },
        }),
        t.jsxs("div", {
          className: "container mx-auto px-4 relative z-20",
          children: [
            t.jsxs("div", {
              ref: e,
              className:
                "mb-7 grid items-end gap-6 md:mb-12 md:grid-cols-12 md:gap-10 lg:mb-16",
              children: [
                t.jsx(Ve, {
                  index: "01",
                  eyebrow: "DỊCH VỤ CỦA CHÚNG TÔI",
                  size: "xl",
                  lines: ["Xây đúng,", "vận hành", "mỗi tháng"],
                  grey: "vận hành",
                  highlight: "tháng",
                  className: "md:col-span-7 lg:col-span-8",
                }),
                t.jsxs("div", {
                  className:
                    "md:col-span-5 lg:col-span-4 md:border-l md:border-slate-300 md:pl-6 md:dark:border-white/15",
                  children: [
                    t.jsx(Ea, {
                      text: "Một website chỉ là tài sản khi nó được giữ gìn và tạo ra giá trị. TDDTech xây nền móng, rồi đồng hành vận hành để website mang về traffic, khách hàng và đơn hàng.",
                      className:
                        "text-base md:text-[0.95rem] lg:text-base text-slate-600 dark:text-white/70",
                    }),
                    t.jsx(Em, {
                      className:
                        "mt-5 h-28 w-28 text-slate-500 dark:text-white/40 md:mt-6 md:h-36 md:w-36",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("div", {
              className: "grid gap-4 md:grid-cols-3 md:gap-5",
              children: n.map((s, i) =>
                t.jsxs(
                  "a",
                  {
                    href: s.href,
                    "data-motion": "card",
                    style: { "--motion-delay": `${i * 120}ms` },
                    className:
                      "group relative flex flex-col overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_24px_60px_-34px_rgba(15,23,42,0.45)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-[0_34px_80px_-34px_rgba(0,161,207,0.55)] dark:border-white/10 dark:bg-white/[0.04]",
                    children: [
                      t.jsx("div", {
                        className:
                          "relative aspect-[16/11] overflow-hidden bg-slate-100 dark:bg-white/[0.03]",
                        children: t.jsx(s.Motion, {}),
                      }),
                      t.jsxs("div", {
                        className:
                          "flex flex-1 items-end justify-between gap-4 p-5 md:p-6",
                        children: [
                          t.jsxs("div", {
                            children: [
                              t.jsxs("p", {
                                className:
                                  "font-mono text-xs font-bold text-primary",
                                children: ["0", i + 1],
                              }),
                              t.jsx("h3", {
                                className:
                                  "mt-1 text-xl font-black tracking-[-0.02em] text-slate-950 dark:text-white md:text-2xl",
                                children: s.title,
                              }),
                              t.jsx("p", {
                                className:
                                  "mt-1.5 text-sm leading-6 text-slate-600 dark:text-white/60 md:text-base",
                                children: s.description,
                              }),
                            ],
                          }),
                          t.jsx("span", {
                            className:
                              "flex h-11 w-11 flex-none items-center justify-center rounded-full border border-slate-200 text-slate-900 transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white dark:border-white/15 dark:text-white",
                            children: t.jsx(s.icon, {
                              className: "h-4 w-4",
                              "aria-hidden": "true",
                            }),
                          }),
                        ],
                      }),
                    ],
                  },
                  s.title,
                ),
              ),
            }),
          ],
        }),
      ],
    });
  },
  Cs =
    "aspect-[4/3] rounded-[16px] bg-[#09101c] bg-[radial-gradient(110%_80%_at_0%_0%,rgba(56,189,248,0.09),transparent_60%)] font-label shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ring-1 ring-inset ring-white/[0.07] sm:aspect-[16/10]",
  be = "text-[clamp(9px,1.5cqw,11.5px)] leading-[1.35]",
  On = "text-[clamp(10px,1.8cqw,13px)] leading-[1.35]",
  Ma = "text-[clamp(11px,2.1cqw,15px)] leading-[1.3]",
  La = `${be} font-medium uppercase tracking-[0.14em] text-white/35`,
  ks = "h-[2.5cqw] w-[2.5cqw] min-h-[12px] min-w-[12px] flex-none",
  ts = `${be} col-start-1 row-start-1 whitespace-nowrap rounded-full px-[1cqw] py-[0.15cqw] font-medium ring-1 ring-inset`,
  Es = ({ children: e }) =>
    t.jsx("div", {
      className: "absolute inset-0 flex flex-col p-[4.2cqw]",
      children: e,
    }),
  Ms = ({ icon: e, title: n, right: s }) =>
    t.jsxs("div", {
      className: "flex items-center justify-between gap-[2cqw]",
      children: [
        t.jsxs("span", {
          className: `flex min-w-0 items-center gap-[1.2cqw] ${Ma} font-medium text-white/90`,
          children: [
            t.jsx(e, { className: `${ks} text-cyan-300`, strokeWidth: 1.75 }),
            t.jsx("span", { className: "truncate", children: n }),
          ],
        }),
        s,
      ],
    }),
  xo = ({ text: e }) =>
    t.jsxs("span", {
      className: `flex flex-none items-center gap-[0.9cqw] ${be} text-emerald-300/85`,
      children: [
        t.jsxs("span", {
          className:
            "relative flex h-[0.9cqw] w-[0.9cqw] min-h-[5px] min-w-[5px]",
          children: [
            t.jsx("span", {
              className:
                "absolute inset-0 animate-ping rounded-full bg-emerald-400/50",
            }),
            t.jsx("span", {
              className: "relative h-full w-full rounded-full bg-emerald-400",
            }),
          ],
        }),
        e,
      ],
    }),
  fo = ({ cue: e, delay: n = 0.3 }) =>
    t.jsxs("svg", {
      viewBox: "0 0 20 20",
      className: `${ks} text-emerald-300/90`,
      "aria-hidden": "true",
      children: [
        t.jsx("circle", {
          cx: "10",
          cy: "10",
          r: "8.6",
          fill: "none",
          stroke: "currentColor",
          strokeOpacity: "0.25",
          strokeWidth: "1.3",
        }),
        t.jsx("path", {
          "data-cue": e,
          className: "x-draw",
          pathLength: 100,
          d: "M6.3 10.3 8.9 12.9 13.9 7.5",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          style: { transitionDuration: "0.6s", transitionDelay: `${n}s` },
        }),
      ],
    }),
  ye = ({
    cue: e,
    icon: n,
    title: s,
    meta: i,
    delay: a = 0,
    compact: o = !1,
  }) =>
    t.jsxs("div", {
      "data-cue": e,
      "data-sfx": "tick",
      className: `flex items-center gap-[1.6cqw] border-t border-white/[0.06] first:border-t-0 ${o ? "py-[1cqw]" : "py-[1.3cqw]"}`,
      style: a ? { transitionDelay: `${a}ms` } : void 0,
      children: [
        t.jsx("span", {
          className: `grid flex-none place-items-center rounded-[1cqw] bg-white/[0.04] ring-1 ring-inset ring-white/[0.08] ${o ? "h-[3.6cqw] w-[3.6cqw] min-h-[16px] min-w-[16px]" : "h-[4.2cqw] w-[4.2cqw] min-h-[18px] min-w-[18px]"}`,
          children: t.jsx(n, {
            className: "h-[55%] w-[55%] text-cyan-200/90",
            strokeWidth: 1.75,
          }),
        }),
        t.jsxs("span", {
          className: "min-w-0 flex-1",
          children: [
            t.jsx("span", {
              className: `block text-balance ${o ? On : Ma} text-white/85`,
              children: s,
            }),
            i
              ? t.jsx("span", {
                  className: `block ${be} text-white/40`,
                  children: i,
                })
              : null,
          ],
        }),
        t.jsx(fo, { cue: e, delay: a / 1e3 + 0.3 }),
      ],
    }),
  Wm = { days: 300, l1: 1400, l2: 2100, l3: 2800 },
  zm = [
    [-32, 0],
    [204, 1.2],
    [118, 2.4],
  ],
  Dm = () =>
    t.jsx(Ee, {
      label:
        "Bảo vệ: website được giám sát liên tục từng ngày, truy cập lạ bị chặn tự động, dữ liệu sao lưu mỗi đêm và bản vá bảo mật được cập nhật ngay.",
      cues: Wm,
      duration: 9e3,
      className: Cs,
      children: t.jsxs(Es, {
        children: [
          t.jsx(Ms, {
            icon: gr,
            title: "Giám sát website của anh chị",
            right: t.jsx(xo, { text: "Đang hoạt động" }),
          }),
          t.jsxs("div", {
            className:
              "mt-[2.4cqw] grid min-h-0 flex-1 grid-cols-[0.85fr_1fr] items-center gap-[3.5cqw]",
            children: [
              t.jsx("div", {
                className: "grid h-full place-items-center",
                children: t.jsxs("div", {
                  className: "relative aspect-square w-[31cqw]",
                  children: [
                    t.jsxs("svg", {
                      viewBox: "0 0 100 100",
                      className:
                        "absolute inset-0 h-full w-full overflow-visible",
                      "aria-hidden": "true",
                      children: [
                        t.jsx("circle", {
                          cx: "50",
                          cy: "50",
                          r: "49.5",
                          fill: "none",
                          stroke: "rgb(255 255 255 / 0.09)",
                          vectorEffect: "non-scaling-stroke",
                        }),
                        t.jsx("circle", {
                          cx: "50",
                          cy: "50",
                          r: "20",
                          fill: "none",
                          stroke: "rgb(255 255 255 / 0.07)",
                          vectorEffect: "non-scaling-stroke",
                        }),
                        t.jsx("path", {
                          d: "M50 0.5V99.5M0.5 50H99.5",
                          stroke: "rgb(255 255 255 / 0.05)",
                          vectorEffect: "non-scaling-stroke",
                        }),
                        t.jsx("circle", {
                          cx: "50",
                          cy: "50",
                          r: "35",
                          fill: "none",
                          stroke: "rgb(103 232 249 / 0.5)",
                          strokeWidth: "1.25",
                          vectorEffect: "non-scaling-stroke",
                        }),
                      ],
                    }),
                    t.jsx("div", {
                      className:
                        "guard-sweep absolute inset-[0.5%] rounded-full",
                    }),
                    t.jsx("div", {
                      className:
                        "absolute inset-[35%] grid place-items-center rounded-full bg-cyan-400/10 shadow-[0_0_5cqw_rgba(34,211,238,0.3)] ring-1 ring-inset ring-cyan-300/35",
                      children: t.jsx(hn, {
                        className: "h-1/2 w-1/2 text-cyan-100",
                        strokeWidth: 1.6,
                      }),
                    }),
                    t.jsx("div", {
                      "data-cue": "l3",
                      className: "x-fade absolute inset-0",
                      children: zm.map(([e, n]) =>
                        t.jsxs(
                          "span",
                          {
                            className: "guard-probe",
                            style: {
                              transform: `rotate(${e}deg)`,
                              "--r0": "18.5cqw",
                              "--r1": "11.5cqw",
                            },
                            children: [
                              t.jsx("i", {
                                style: { animationDelay: `${n}s` },
                              }),
                              t.jsx("b", {
                                style: { animationDelay: `${n}s` },
                              }),
                            ],
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
              t.jsxs("div", {
                className: "min-w-0",
                children: [
                  t.jsx(ye, {
                    cue: "l1",
                    icon: Oc,
                    title: "Sao lưu dữ liệu",
                    meta: "Mỗi đêm",
                  }),
                  t.jsx(ye, {
                    cue: "l2",
                    icon: Wc,
                    title: "Vá lỗi bảo mật",
                    meta: "Ngay khi có bản vá",
                  }),
                  t.jsx(ye, {
                    cue: "l3",
                    icon: zc,
                    title: "Chặn truy cập lạ",
                    meta: "Tự động, liên tục",
                  }),
                ],
              }),
            ],
          }),
          t.jsxs("div", {
            className: "mt-[2.4cqw]",
            children: [
              t.jsxs("p", {
                className: `flex items-baseline justify-between ${be} text-white/40`,
                children: [
                  t.jsx("span", { children: "Nhật ký giám sát trong tháng" }),
                  t.jsx("span", { children: "Ngày 1 → 30" }),
                ],
              }),
              t.jsx("div", {
                className: "mt-[1.1cqw] flex justify-between",
                children: Array.from({ length: 30 }).map((e, n) =>
                  t.jsx(
                    "span",
                    {
                      className:
                        "relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]",
                      children: t.jsx("span", {
                        "data-cue": "days",
                        "data-sfx": n === 0 ? "shimmer" : void 0,
                        className:
                          "x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]",
                        style: { transitionDelay: `${n * 40}ms` },
                      }),
                    },
                    n,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
    }),
  Hm = { t1: 400, t2: 1900, t3: 3400, c: 4100, u: 4700, n: 5600 },
  Bm = [
    ["Mới", "bg-slate-400"],
    ["Đang xử lý", "bg-amber-300"],
    ["Hoàn thành", "bg-emerald-300"],
  ],
  qi =
    "rounded-[1.1cqw] bg-[#131d30] p-[1.3cqw] shadow-[0_1.4cqw_3cqw_-1.2cqw_rgba(0,0,0,0.75)] ring-1 ring-inset ring-white/[0.09]",
  Vm = () =>
    t.jsx(Ee, {
      label:
        "Giữ gìn: một sự cố được tiếp nhận, xử lý rồi hoàn thành trong vài giờ; yêu cầu mới và cập nhật sản phẩm được làm theo yêu cầu của anh chị.",
      cues: Hm,
      duration: 9e3,
      className: Cs,
      children: t.jsxs(Es, {
        children: [
          t.jsx(Ms, {
            icon: Ts,
            title: "Yêu cầu từ anh chị",
            right: t.jsx(xo, { text: "Xử lý trong vài giờ" }),
          }),
          t.jsxs("div", {
            className: "relative mt-[2.4cqw] min-h-0 flex-1",
            children: [
              t.jsx("div", {
                className: "absolute inset-0 grid grid-cols-3 gap-[1.6cqw]",
                children: Bm.map(([e, n]) =>
                  t.jsx(
                    "div",
                    {
                      className:
                        "rounded-[1.2cqw] bg-gradient-to-b from-white/[0.035] to-transparent ring-1 ring-inset ring-white/[0.05] [mask-image:linear-gradient(to_bottom,#000_60%,transparent)]",
                      children: t.jsxs("p", {
                        className: `flex items-center gap-[0.8cqw] border-b border-white/[0.05] px-[1.4cqw] py-[1cqw] ${La}`,
                        children: [
                          t.jsx("span", {
                            className: `h-[0.8cqw] w-[0.8cqw] min-h-[4px] min-w-[4px] rounded-full ${n}`,
                          }),
                          e,
                        ],
                      }),
                    },
                    e,
                  ),
                ),
              }),
              t.jsxs("div", {
                "data-move": "start:1.1,19 t1:1.1,19 t2:35,19 t3:68.9,19",
                "data-keep": !0,
                className: `x-mover w-[30%] ${qi}`,
                style: { transitionDuration: "0.9s" },
                children: [
                  t.jsx("p", {
                    className: `${On} font-medium text-white/90`,
                    children: "Form liên hệ không gửi được",
                  }),
                  t.jsxs("div", {
                    className:
                      "mt-[1cqw] flex items-center justify-between gap-[1cqw]",
                    children: [
                      t.jsxs("span", {
                        className: "grid",
                        children: [
                          t.jsx("span", {
                            "data-cue-out": "t2",
                            className: `${ts} bg-rose-400/10 text-rose-300 ring-rose-400/25`,
                            children: "Ưu tiên cao",
                          }),
                          t.jsx("span", {
                            "data-cue": "t2",
                            "data-cue-out": "t3",
                            "data-sfx": "air",
                            className: `x-fade ${ts} bg-amber-300/10 text-amber-200 ring-amber-300/25`,
                            children: "Đang sửa",
                          }),
                          t.jsx("span", {
                            "data-cue": "t3",
                            "data-sfx": "bell",
                            className: `x-fade ${ts} bg-emerald-400/10 text-emerald-300 ring-emerald-400/25`,
                            children: "Đã xử lý",
                          }),
                        ],
                      }),
                      t.jsx("span", {
                        className:
                          "grid h-[2.8cqw] w-[2.8cqw] min-h-[14px] min-w-[14px] flex-none place-items-center rounded-full bg-cyan-400/15 text-[clamp(7px,1.05cqw,9px)] font-semibold text-cyan-200 ring-1 ring-inset ring-cyan-300/30",
                        children: "XT",
                      }),
                    ],
                  }),
                ],
              }),
              t.jsxs("div", {
                "data-cue": "n",
                "data-sfx": "pop",
                className: `absolute left-[1.1%] top-[19%] w-[30%] ${qi}`,
                children: [
                  t.jsx("p", {
                    className: `${On} font-medium text-white/90`,
                    children: "Thay banner khuyến mãi",
                  }),
                  t.jsx("span", {
                    className: "mt-[1cqw] grid",
                    children: t.jsx("span", {
                      className: `${ts} justify-self-start bg-white/[0.05] text-white/60 ring-white/10`,
                      children: "Mới gửi",
                    }),
                  }),
                ],
              }),
            ],
          }),
          t.jsx("div", {
            className: "mt-[1.4cqw]",
            children: t.jsx(ye, {
              cue: "c",
              icon: Dc,
              title: "Cập nhật nội dung & hình ảnh",
              meta: "Banner, bài viết, thông tin liên hệ",
            }),
          }),
          t.jsxs("div", {
            className:
              "flex items-center gap-[1.6cqw] border-t border-white/[0.06] pt-[1.3cqw]",
            children: [
              t.jsx("span", {
                className:
                  "grid h-[4.2cqw] w-[4.2cqw] min-h-[18px] min-w-[18px] flex-none place-items-center rounded-[1cqw] bg-white/[0.04] ring-1 ring-inset ring-white/[0.08]",
                children: t.jsx(Hc, {
                  className: "h-[55%] w-[55%] text-cyan-200/90",
                  strokeWidth: 1.75,
                }),
              }),
              t.jsxs("span", {
                className: "min-w-0 flex-1",
                children: [
                  t.jsxs("span", {
                    className: `flex items-baseline justify-between gap-[1cqw] ${Ma} text-white/85`,
                    children: [
                      "Cập nhật sản phẩm mới",
                      t.jsx("span", {
                        className: `${be} text-white/40`,
                        children: "Theo yêu cầu",
                      }),
                    ],
                  }),
                  t.jsx("span", {
                    className:
                      "mt-[0.9cqw] block h-[0.5cqw] min-h-[2px] overflow-hidden rounded-full bg-white/[0.07]",
                    children: t.jsx("span", {
                      "data-cue": "u",
                      className:
                        "x-grow-x block h-full rounded-full bg-gradient-to-r from-cyan-400/70 to-emerald-300/80",
                    }),
                  }),
                ],
              }),
              t.jsx(fo, { cue: "u", delay: 1.2 }),
            ],
          }),
        ],
      }),
    }),
  Xm = { kw: 300, post: 1500, climb: 1800, spark: 3300, arrow: 3600 },
  Fm = () =>
    t.jsx(Ee, {
      label:
        "Phát triển: mỗi tháng có bài viết và tối ưu SEO mới, website của anh chị leo dần lên trên kết quả tìm kiếm Google, lượt truy cập từ Google tăng dần.",
      cues: Xm,
      duration: 9e3,
      className: Cs,
      children: t.jsxs(Es, {
        children: [
          t.jsx(Ms, {
            icon: wa,
            title: "Google · website của anh chị",
            right: t.jsx("span", {
              className: `flex-none ${be} text-cyan-300/85`,
              children: "Lên dần mỗi tháng",
            }),
          }),
          t.jsxs("div", {
            className:
              "mt-[2.4cqw] grid min-h-0 flex-1 grid-cols-[1.08fr_1fr] gap-[3.5cqw]",
            children: [
              t.jsxs("div", {
                className: "flex min-h-0 flex-col",
                children: [
                  t.jsxs("div", {
                    className:
                      "flex items-center gap-[1cqw] rounded-full bg-white/[0.04] px-[1.6cqw] py-[0.9cqw] ring-1 ring-inset ring-white/[0.08]",
                    children: [
                      t.jsx(we, {
                        className: `${ks} text-white/45`,
                        strokeWidth: 1.75,
                      }),
                      t.jsx("span", {
                        "data-cue": "kw",
                        "data-type": "từ khoá sản phẩm chính",
                        className: `x-fade x-caret min-w-0 truncate ${On} text-white/85`,
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "relative mt-[1.6cqw] min-h-0 flex-1",
                    children: [
                      [0, 1, 2].map((e) =>
                        t.jsxs(
                          "div",
                          {
                            "data-move": `start:0,${e * 25} kw:0,${e * 25} climb:0,${e * 25 + 25}`,
                            "data-keep": !0,
                            className:
                              "x-mover flex w-full items-center gap-[1.2cqw] px-[1.3cqw]",
                            style: {
                              height: "21%",
                              transitionDuration: "1.8s",
                            },
                            children: [
                              t.jsx("span", {
                                className:
                                  "h-[1.8cqw] w-[1.8cqw] min-h-[7px] min-w-[7px] flex-none rounded-full bg-white/[0.08]",
                              }),
                              t.jsxs("span", {
                                className: "flex-1 space-y-[0.7cqw]",
                                children: [
                                  t.jsx("span", {
                                    className:
                                      "block h-[0.9cqw] min-h-[3px] rounded-full bg-white/[0.09]",
                                    style: { width: `${[72, 60, 66][e]}%` },
                                  }),
                                  t.jsx("span", {
                                    className:
                                      "block h-[0.7cqw] min-h-[2px] rounded-full bg-white/[0.05]",
                                    style: { width: `${[44, 38, 48][e]}%` },
                                  }),
                                ],
                              }),
                            ],
                          },
                          e,
                        ),
                      ),
                      t.jsxs("div", {
                        "data-move": "start:0,75 kw:0,75 climb:0,0",
                        "data-keep": !0,
                        className:
                          "x-mover z-[31] flex w-full items-center gap-[1.2cqw] rounded-[1cqw] bg-[#0c2531] px-[1.3cqw] shadow-[0_0_4cqw_-1cqw_rgba(34,211,238,0.45)] ring-1 ring-inset ring-cyan-300/45",
                        style: { height: "21%", transitionDuration: "1.8s" },
                        children: [
                          t.jsx("span", {
                            "data-cue": "climb",
                            "data-sfx": "air",
                            className: "absolute inset-0",
                          }),
                          t.jsx("span", {
                            className:
                              "h-[1.8cqw] w-[1.8cqw] min-h-[7px] min-w-[7px] flex-none rounded-full bg-cyan-300/80",
                          }),
                          t.jsx("span", {
                            className: `min-w-0 flex-1 truncate ${On} font-medium text-cyan-100`,
                            children: "website của anh chị",
                          }),
                          t.jsx(Nn, {
                            "data-cue": "arrow",
                            "data-sfx": "ping",
                            className: `x-fade ${ks} text-emerald-300`,
                            strokeWidth: 2,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              t.jsxs("div", {
                className: "flex min-w-0 flex-col",
                children: [
                  t.jsx("p", { className: La, children: "Việc trong tháng" }),
                  t.jsxs("div", {
                    className: "mt-[0.6cqw]",
                    children: [
                      t.jsx(ye, {
                        compact: !0,
                        cue: "post",
                        icon: Bc,
                        title: "Bài viết mới",
                      }),
                      t.jsx(ye, {
                        compact: !0,
                        cue: "post",
                        delay: 180,
                        icon: we,
                        title: "Tối ưu SEO trang",
                      }),
                      t.jsx(ye, {
                        compact: !0,
                        cue: "post",
                        delay: 360,
                        icon: on,
                        title: "Cải thiện tốc độ",
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "mt-auto pt-[1.6cqw]",
                    children: [
                      t.jsx("p", {
                        className: `${be} text-white/45`,
                        children: "Lượt truy cập từ Google",
                      }),
                      t.jsxs("div", {
                        className: "relative mt-[0.8cqw]",
                        children: [
                          t.jsxs("span", {
                            "data-cue": "arrow",
                            className: `x-fade absolute left-0 top-0 flex items-center gap-[0.4cqw] ${be} font-medium text-emerald-300/90`,
                            children: [
                              t.jsx(Nn, {
                                className:
                                  "h-[1.8cqw] w-[1.8cqw] min-h-[9px] min-w-[9px]",
                                strokeWidth: 2.2,
                              }),
                              "tăng dần",
                            ],
                          }),
                          t.jsxs("svg", {
                            "data-cue": "spark",
                            "data-sfx": "shimmer",
                            className: "x-wipe h-[6.5cqw] min-h-[24px] w-full",
                            viewBox: "0 0 100 30",
                            preserveAspectRatio: "none",
                            "aria-hidden": "true",
                            children: [
                              t.jsx("defs", {
                                children: t.jsxs("linearGradient", {
                                  id: "ops-spark",
                                  x1: "0",
                                  y1: "0",
                                  x2: "0",
                                  y2: "1",
                                  children: [
                                    t.jsx("stop", {
                                      offset: "0",
                                      stopColor: "#67e8f9",
                                      stopOpacity: "0.35",
                                    }),
                                    t.jsx("stop", {
                                      offset: "1",
                                      stopColor: "#67e8f9",
                                      stopOpacity: "0",
                                    }),
                                  ],
                                }),
                              }),
                              t.jsx("path", {
                                d: "M0 26 L12 24 L24 25 L36 20 L48 18 L60 14 L72 12 L84 7 L100 3 V30 H0Z",
                                fill: "url(#ops-spark)",
                              }),
                              t.jsx("path", {
                                d: "M0 26 L12 24 L24 25 L36 20 L48 18 L60 14 L72 12 L84 7 L100 3",
                                fill: "none",
                                stroke: "#67e8f9",
                                strokeWidth: "1.6",
                                vectorEffect: "non-scaling-stroke",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  Gm = { mail: 300, s1: 1100, chart: 1300, s2: 1600, s3: 2100, s4: 2600 },
  Km = () =>
    t.jsx(Ee, {
      label:
        "Minh bạch: mỗi tháng anh chị nhận báo cáo gồm lượt truy cập và nguồn khách, liên hệ và đơn hàng từ website, việc đã làm trong tháng và đề xuất cho tháng tới.",
      cues: Gm,
      duration: 9e3,
      className: Cs,
      children: t.jsxs(Es, {
        children: [
          t.jsx(Ms, {
            icon: un,
            title: "Báo cáo tháng · website của anh chị",
            right: t.jsxs("span", {
              "data-cue": "mail",
              "data-sfx": "ping",
              className: `x-fade flex flex-none items-center gap-[0.8cqw] ${be} text-emerald-300/85`,
              children: [
                t.jsx(cr, {
                  className: "h-[2.2cqw] w-[2.2cqw] min-h-[11px] min-w-[11px]",
                  strokeWidth: 1.75,
                }),
                "Đã gửi",
              ],
            }),
          }),
          t.jsx("p", {
            className: `mt-[0.5cqw] ${be} text-white/40`,
            children:
              "Số liệu thật từ công cụ đo lường · gửi đều đặn mỗi tháng",
          }),
          t.jsxs("div", {
            className:
              "mt-[2cqw] grid min-h-0 flex-1 grid-cols-[1.25fr_1fr] gap-[3.5cqw]",
            children: [
              t.jsxs("div", {
                className: "min-w-0",
                children: [
                  t.jsx(ye, {
                    compact: !0,
                    cue: "s1",
                    icon: pr,
                    title: "Truy cập & nguồn khách",
                  }),
                  t.jsx(ye, {
                    compact: !0,
                    cue: "s2",
                    icon: xr,
                    title: "Liên hệ & đơn hàng",
                  }),
                  t.jsx(ye, {
                    compact: !0,
                    cue: "s3",
                    icon: Vc,
                    title: "Việc đã làm",
                  }),
                  t.jsx(ye, {
                    compact: !0,
                    cue: "s4",
                    icon: Xc,
                    title: "Đề xuất tháng tới",
                  }),
                ],
              }),
              t.jsxs("div", {
                className:
                  "flex min-h-0 flex-col rounded-[1.2cqw] bg-white/[0.025] p-[1.8cqw] ring-1 ring-inset ring-white/[0.06]",
                children: [
                  t.jsx("p", { className: La, children: "Xu hướng" }),
                  t.jsx("div", {
                    className:
                      "mt-[1.4cqw] flex min-h-0 flex-1 items-end gap-[1.2cqw] border-b border-white/10",
                    children: [34, 46, 40, 58, 62, 76].map((e, n) =>
                      t.jsx(
                        "span",
                        {
                          "data-cue": "chart",
                          className:
                            "x-grow-y block flex-1 rounded-t-[0.5cqw] bg-gradient-to-t from-cyan-500/20 to-cyan-300/75",
                          style: {
                            height: `${e}%`,
                            transitionDelay: `${n * 90}ms`,
                          },
                        },
                        n,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
          t.jsx("p", {
            className: `mt-[1.8cqw] ${be} text-white/40`,
            children: "Anh chị biết tài sản của mình đang làm việc ra sao.",
          }),
        ],
      }),
    }),
  Ym = `
precision mediump float;
uniform vec2 uRes; uniform float uTime; uniform float uFade; uniform float uShift;
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main(){
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  vec3 col = vec3(0.008, 0.016, 0.035);
  for (int i = 0; i < 4; i++) {
    float fi = float(i);
    float t = uTime * (0.12 + fi * 0.035) + uShift * (0.6 + fi * 0.2);
    float y = 0.2 * sin(p.x * (1.3 + fi * 0.25) + t + fi * 1.7)
            + 0.07 * sin(p.x * 3.4 - t * 1.3 + fi * 2.3)
            - 0.16 + fi * 0.1;
    float d = abs(p.y - y);
    float width = 0.006 + 0.004 * sin(p.x * 2.0 + t);
    float core = width / (d + width * 0.6);
    float halo = exp(-d * 9.0) * 0.35;
    float wave = 0.55 + 0.45 * sin(p.x * 1.7 - t * 1.6 + fi);
    vec3 c = mix(vec3(0.05, 0.75, 0.95), vec3(0.18, 0.42, 1.0), fi / 3.0);
    c = mix(c, vec3(0.55, 0.38, 1.0), step(2.5, fi) * 0.6);
    col += c * (core * 0.09 + halo) * wave;
  }
  col *= smoothstep(1.35, 0.15, length(p * vec2(0.8, 1.0)));
  col += (hash(gl_FragCoord.xy + fract(uTime)) - 0.5) * 0.012;
  gl_FragColor = vec4(col * uFade, 1.0);
}`,
  Um = "attribute vec2 a; void main(){ gl_Position = vec4(a, 0.0, 1.0); }",
  bo = Dark3DBanner,
  us = [
    {
      title: "Bảo vệ",
      week: "Tuần 1",
      text: "Giám sát liên tục, sao lưu mỗi đêm, chặn truy cập lạ.",
      Scene: Dm,
    },
    {
      title: "Giữ gìn",
      week: "Tuần 2",
      text: "Sự cố được tiếp nhận và xử lý trong vài giờ.",
      Scene: Vm,
    },
    {
      title: "Phát triển",
      week: "Tuần 3",
      text: "SEO và nội dung giúp website lên dần trên Google.",
      Scene: Fm,
    },
    {
      title: "Minh bạch",
      week: "Cuối tháng",
      text: "Báo cáo số liệu thật gửi về tận tay mỗi tháng.",
      Scene: Km,
    },
  ],
  ga = ({ className: e = "" }) =>
    t.jsxs("div", {
      className: `flex flex-col gap-3 sm:flex-row ${e}`,
      children: [t.jsxs(ContactChannelPair,{children:[t.jsxs("a", {
          href: site.zaloHref,
          target: "_blank",
          rel: "noreferrer",
          className:
            "inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-3.5 font-bold text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5",
          children: [
            t.jsx("img", {
              src: "/zalo-icon.png",
              alt: "",
              className: "h-5 w-5 rounded-sm",
            }),
            "Tư vấn gói vận hành",
          ],
        }),t.jsx(FacebookContactLink,{variant:"button",label:"Trao đổi thiết kế Web",className:"inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-3.5 font-bold text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"})]})],
    }),
  pa = ({ oneLine: e = !1 }) =>
    t.jsxs("h2", {
      className: `font-black uppercase tracking-[-0.04em] text-white ${e ? "text-[clamp(2rem,3.7vw,3.5rem)] leading-[0.95]" : "text-[clamp(2.2rem,4.6vw,4rem)] leading-[1.14]"}`,
      children: [
        "Bảo vệ.",
        e ? " " : t.jsx("br", {}),
        "Giữ gìn.",
        e ? " " : t.jsx("br", {}),
        t.jsx("span", {
          className: `accent-serif normal-case tracking-[-0.02em] text-cyan-300 ${e ? "" : "mt-[0.06em] inline-block"}`,
          children: "Phát triển.",
        }),
      ],
    }),
  Qm = () =>
    t.jsx("section", {
      id: "van-hanh",
      className:
        "relative overflow-hidden bg-[#05080f] py-16 text-white md:py-28",
      children: t.jsxs("div", {
        className: "container relative mx-auto px-4",
        children: [
          t.jsx("p", {
            className:
              "text-xs font-bold uppercase tracking-[0.26em] text-cyan-200/80",
            children: "05 — Một tháng TDDTech vận hành website",
          }),
          t.jsx("div", { className: "mt-4", children: t.jsx(pa, {}) }),
          t.jsx(ga, { className: "mt-8" }),
          t.jsx("div", {
            className: "mt-12 grid gap-6 md:grid-cols-2",
            children: us.map(({ title: e, text: n, Scene: s }, i) =>
              t.jsxs(
                "article",
                {
                  children: [
                    t.jsx(s, {}),
                    t.jsxs("p", {
                      className:
                        "mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300",
                      children: [
                        t.jsxs("span", {
                          className: "font-mono",
                          children: ["0", i + 1],
                        }),
                        " · ",
                        e,
                      ],
                    }),
                    t.jsx("p", { className: "text-white/60", children: n }),
                  ],
                },
                e,
              ),
            ),
          }),
        ],
      }),
    }),
  Zm = () => (Zt() ? t.jsx(Qm, {}) : t.jsx(Jm, {})),
  Jm = () => {
    const e = f.useRef(null),
      n = f.useRef(null),
      s = f.useRef(null),
      i = f.useRef([]),
      [a, o] = f.useState(0),
      [r, l] = f.useState(null),
      { scrollYProgress: c } = Je({
        target: e,
        offset: ["start start", "end end"],
      }),
      h = gn(c, { stiffness: 260, damping: 40, mass: 0.5, restDelta: 2e-4 }),
      { scrollYProgress: g } = Je({
        target: e,
        offset: ["start end", "end start"],
      }),
      p = gt(g, (j) =>
        Math.min(1, Math.max(0, Math.min(j / 0.18, (1 - j) / 0.12))),
      );
    bs(h, "change", (j) => {
      const k = Math.min(3, Math.max(0, Math.floor(j * 4 + 1e-4)));
      o((b) => (b === k ? b : k));
    });
    const d = gt(h, (j) =>
        String(Math.round(1 + Math.min(1, Math.max(0, j)) * 29)).padStart(
          2,
          "0",
        ),
      ),
      m = gt(h, [0, 1], [0, 1]),
      u = gt(h, (j) =>
        Math.min(1, Math.max(0, j * 4 - Math.min(3, Math.floor(j * 4)))),
      ),
      x = f.useRef(0);
    (f.useEffect(() => {
      if (a > x.current) {
        const j = i.current[a];
        j &&
          (A.air(ne(j), {
            dur: 0.6,
            from: 400,
            to: 2400,
            gain: 0.05,
            toPos: s.current ? ne(s.current) : void 0,
          }),
          A.bell(ne(j), nt([5, 7, 9, 12][a], 5), {
            delay: 0.15,
            gain: 0.04,
            decay: 1.6,
          }));
      }
      x.current = a;
    }, [a]),
      f.useLayoutEffect(() => {
        const j = () => {
          const k = n.current,
            b = i.current[a],
            S = s.current;
          if (!k || !b || !S || window.innerWidth < 1024) {
            l(null);
            return;
          }
          const E = k.getBoundingClientRect(),
            L = b.getBoundingClientRect(),
            T = S.getBoundingClientRect(),
            C = L.right - E.left + 10,
            _ = L.top + L.height / 2 - E.top,
            D = T.left - E.left - 6,
            B = T.top + T.height * 0.5 - E.top,
            K = (C + D) / 2;
          l(
            `M ${C.toFixed(1)} ${_.toFixed(1)} C ${K.toFixed(1)} ${_.toFixed(1)}, ${K.toFixed(1)} ${B.toFixed(1)}, ${D.toFixed(1)} ${B.toFixed(1)}`,
          );
        };
        return (
          j(),
          window.addEventListener("resize", j),
          () => window.removeEventListener("resize", j)
        );
      }, [a]));
    const v = us[a],
      w = t.jsxs("div", {
        className: "flex items-end gap-4",
        children: [
          t.jsx("p", {
            className:
              "text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45",
            children: "Ngày",
          }),
          t.jsxs("p", {
            className:
              "font-mono text-3xl font-bold leading-none tracking-tight text-white lg:text-[2.6rem]",
            children: [
              t.jsx(q.span, { children: d }),
              t.jsx("span", { className: "text-white/30", children: "/30" }),
            ],
          }),
          t.jsxs("div", {
            className:
              "relative mb-2 h-[3px] flex-1 overflow-hidden rounded-full bg-white/10",
            children: [
              t.jsx(q.div, {
                style: { scaleX: m },
                className:
                  "absolute inset-0 origin-left bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400",
              }),
              [0.25, 0.5, 0.75].map((j) =>
                t.jsx(
                  "span",
                  {
                    className: "absolute top-0 h-full w-px bg-[#05080f]",
                    style: { left: `${j * 100}%` },
                  },
                  j,
                ),
              ),
            ],
          }),
        ],
      }),
      y = t.jsxs("p", {
        className:
          "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.26em] text-cyan-200/80 sm:text-xs",
        children: [
          t.jsx("span", {
            className: "font-mono text-cyan-300",
            children: "05",
          }),
          t.jsx("span", { className: "h-px w-8 flex-none bg-current" }),
          t.jsx("span", {
            className: "text-balance",
            children: "Một tháng TDDTech vận hành website",
          }),
        ],
      }),
      N =
        "Trách nhiệm của TDDTech không dừng ở ngày bàn giao — đây là những việc diễn ra mỗi tháng với website của anh chị.";
    return t.jsxs("section", {
      id: "van-hanh",
      "data-no-motion": !0,
      "aria-label": "Một tháng TDDTech vận hành website",
      className: "measure-height relative bg-[#05080f] text-white",
      children: [
        t.jsxs("div", {
          className: "relative overflow-hidden pb-2 pt-20 sm:pt-24 lg:hidden",
          children: [
            t.jsx("div", {
              "aria-hidden": "true",
              className:
                "pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_85%_0%,rgba(56,189,248,0.16),transparent_70%)]",
            }),
            t.jsxs("div", {
              className: "container relative mx-auto px-4",
              children: [
                y,
                t.jsx("div", { className: "mt-3", children: t.jsx(pa, {}) }),
                t.jsx("p", {
                  className:
                    "mt-4 max-w-md text-pretty text-[15px] leading-6 text-white/60 sm:text-base",
                  children: N,
                }),
              ],
            }),
          ],
        }),
        t.jsx("div", {
          ref: e,
          className: "relative h-[320svh]",
          children: t.jsxs("div", {
            ref: n,
            className: "sticky top-0 h-[100svh] overflow-hidden",
            children: [
              t.jsx(q.div, {
                className: "absolute inset-0",
                style: { opacity: p },
                children: t.jsx(bo, { shift: a * 0.6 }),
              }),
              t.jsx("div", {
                "aria-hidden": "true",
                className:
                  "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_30%,transparent_80%)]",
              }),
              t.jsx("div", {
                "aria-hidden": "true",
                className:
                  "absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#05080f] to-transparent",
              }),
              t.jsx("div", {
                "aria-hidden": "true",
                className:
                  "absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#05080f] to-transparent",
              }),
              r
                ? t.jsxs("svg", {
                    "aria-hidden": "true",
                    className:
                      "pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible",
                    children: [
                      t.jsx(
                        q.path,
                        {
                          d: r,
                          fill: "none",
                          stroke: "#67e8f9",
                          strokeOpacity: "0.7",
                          strokeWidth: "1.5",
                          initial: { pathLength: 0, opacity: 0 },
                          animate: { pathLength: 1, opacity: 1 },
                          transition: {
                            duration: 0.7,
                            ease: [0.65, 0, 0.35, 1],
                          },
                        },
                        `w${a}`,
                      ),
                      t.jsx("circle", {
                        r: "3.5",
                        fill: "#a5f3fc",
                        style: { filter: "drop-shadow(0 0 6px #67e8f9)" },
                        children: t.jsx(
                          "animateMotion",
                          {
                            dur: "1.8s",
                            repeatCount: "indefinite",
                            path: r,
                            keyPoints: "0;1",
                            keyTimes: "0;1",
                            calcMode: "spline",
                            keySplines: "0.65 0 0.35 1",
                          },
                          r,
                        ),
                      }),
                    ],
                  })
                : null,
              t.jsxs("div", {
                className:
                  "container relative z-20 mx-auto flex h-full flex-col justify-center px-4 pb-6 pt-[84px] lg:pb-8 lg:pt-[92px]",
                children: [
                  t.jsx("div", { className: "lg:hidden", children: w }),
                  t.jsxs("div", {
                    className:
                      "hidden lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12",
                    children: [
                      t.jsxs("div", {
                        children: [
                          y,
                          t.jsx("div", {
                            className: "mt-4",
                            children: t.jsx(pa, { oneLine: !0 }),
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        children: [
                          t.jsx("p", {
                            className:
                              "max-w-md text-pretty text-[17px] leading-7 text-white/60",
                            children: N,
                          }),
                          t.jsx("div", { className: "mt-4", children: w }),
                        ],
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className:
                      "mt-4 lg:mt-8 lg:grid lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-14",
                    children: [
                      t.jsxs(kr, {
                        id: "ops",
                        children: [
                          t.jsxs("div", {
                            className: "hidden flex-col gap-1 lg:flex",
                            children: [
                              us.map((j, k) =>
                                t.jsxs(
                                  "button",
                                  {
                                    ref: (b) => {
                                      i.current[k] = b;
                                    },
                                    type: "button",
                                    "aria-current": k === a,
                                    onClick: () => {
                                      const b = e.current;
                                      b &&
                                        window.scrollTo({
                                          top:
                                            b.getBoundingClientRect().top +
                                            window.scrollY +
                                            (b.offsetHeight -
                                              window.innerHeight) *
                                              ((k + 0.4) / 4),
                                          behavior: "smooth",
                                        });
                                    },
                                    className:
                                      "relative rounded-2xl px-4 py-2.5 text-left",
                                    children: [
                                      k === a
                                        ? t.jsx(q.span, {
                                            layoutId: "ops-hi",
                                            transition: {
                                              type: "spring",
                                              stiffness: 380,
                                              damping: 34,
                                            },
                                            className:
                                              "ops-hi absolute inset-0 rounded-2xl",
                                          })
                                        : null,
                                      t.jsxs("span", {
                                        className: `relative flex items-baseline gap-3 transition-opacity duration-500 ${k === a ? "opacity-100" : "opacity-40"}`,
                                        children: [
                                          t.jsxs("span", {
                                            className:
                                              "font-mono text-sm text-cyan-300",
                                            children: ["0", k + 1],
                                          }),
                                          t.jsxs("span", {
                                            children: [
                                              t.jsxs("span", {
                                                className:
                                                  "block text-lg font-black",
                                                children: [
                                                  j.title,
                                                  " ",
                                                  t.jsx("span", {
                                                    className:
                                                      "ml-1 align-middle text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45",
                                                    children: j.week,
                                                  }),
                                                ],
                                              }),
                                              t.jsx("span", {
                                                className:
                                                  "block text-[14.5px] leading-6 text-white/65",
                                                children: j.text,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      k === a
                                        ? t.jsx("span", {
                                            className:
                                              "absolute inset-x-4 bottom-1 h-px overflow-hidden rounded-full bg-white/10",
                                            children: t.jsx(q.span, {
                                              style: { scaleX: u },
                                              className:
                                                "block h-full origin-left bg-cyan-300",
                                            }),
                                          })
                                        : null,
                                    ],
                                  },
                                  j.title,
                                ),
                              ),
                              t.jsx(ga, { className: "mt-5" }),
                            ],
                          }),
                          t.jsx("div", {
                            className:
                              "grid grid-cols-4 gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 lg:hidden",
                            children: us.map((j, k) =>
                              t.jsxs(
                                "span",
                                {
                                  className:
                                    "relative rounded-full py-2 text-center text-[12.5px] font-bold",
                                  children: [
                                    k === a
                                      ? t.jsx(q.span, {
                                          layoutId: "ops-hi-m",
                                          transition: {
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 34,
                                          },
                                          className:
                                            "absolute inset-0 rounded-full bg-white",
                                        })
                                      : null,
                                    t.jsx("span", {
                                      className: `relative ${k === a ? "text-slate-950" : "text-white/55"}`,
                                      children: j.title,
                                    }),
                                  ],
                                },
                                j.title,
                              ),
                            ),
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "mt-4 min-w-0 lg:mt-0",
                        children: [
                          t.jsxs("div", {
                            ref: s,
                            className:
                              "ops-panel relative ml-auto w-full rounded-[22px] p-2 sm:p-2.5",
                            style: {
                              perspective: 1400,
                              maxWidth:
                                "max(300px, calc((100svh - 330px) * 1.6))",
                            },
                            children: [
                              t.jsxs("div", {
                                className:
                                  "mb-2 flex items-center justify-between px-2 pt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55",
                                children: [
                                  t.jsxs("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      t.jsx("span", {
                                        className:
                                          "h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400",
                                      }),
                                      "Đang chạy · ",
                                      v.week,
                                    ],
                                  }),
                                  t.jsxs("span", {
                                    className: "font-mono text-cyan-300/80",
                                    children: ["0", a + 1, "/04"],
                                  }),
                                ],
                              }),
                              t.jsx(fe, {
                                mode: "popLayout",
                                initial: !1,
                                children: t.jsx(
                                  q.div,
                                  {
                                    initial: {
                                      opacity: 0,
                                      rotateY: 22,
                                      z: -120,
                                      scale: 0.96,
                                    },
                                    animate: {
                                      opacity: 1,
                                      rotateY: 0,
                                      z: 0,
                                      scale: 1,
                                    },
                                    exit: {
                                      opacity: 0,
                                      rotateY: -22,
                                      z: -120,
                                      scale: 0.96,
                                    },
                                    transition: {
                                      duration: 0.7,
                                      ease: [0.22, 1, 0.36, 1],
                                    },
                                    style: { transformStyle: "preserve-3d" },
                                    children: t.jsx(v.Scene, {}),
                                  },
                                  a,
                                ),
                              }),
                            ],
                          }),
                          t.jsxs("div", {
                            className: "mt-3 lg:hidden",
                            children: [
                              t.jsxs("p", {
                                className:
                                  "text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300",
                                children: [
                                  t.jsxs("span", {
                                    className: "font-mono",
                                    children: ["0", a + 1],
                                  }),
                                  " · ",
                                  v.week,
                                ],
                              }),
                              t.jsx("p", {
                                className: "text-lg font-black",
                                children: v.title,
                              }),
                              t.jsx("p", {
                                className: "text-[14.5px] text-white/65",
                                children: v.text,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        t.jsx("div", {
          className: "container mx-auto px-4 pb-14 pt-2 lg:hidden",
          children: t.jsx(ga, {}),
        }),
      ],
    });
  };
function tu(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ci(e) {
  return tu(e) || Array.isArray(e);
}
function eu() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function _a(e, n) {
  const s = Object.keys(e),
    i = Object.keys(n);
  if (s.length !== i.length) return !1;
  const a = JSON.stringify(Object.keys(e.breakpoints || {})),
    o = JSON.stringify(Object.keys(n.breakpoints || {}));
  return a !== o
    ? !1
    : s.every((r) => {
        const l = e[r],
          c = n[r];
        return typeof l == "function"
          ? `${l}` == `${c}`
          : !Ci(l) || !Ci(c)
            ? l === c
            : _a(l, c);
      });
}
function Ei(e) {
  return e
    .concat()
    .sort((n, s) => (n.name > s.name ? 1 : -1))
    .map((n) => n.options);
}
function nu(e, n) {
  if (e.length !== n.length) return !1;
  const s = Ei(e),
    i = Ei(n);
  return s.every((a, o) => {
    const r = i[o];
    return _a(a, r);
  });
}
function Aa(e) {
  return typeof e == "number";
}
function xa(e) {
  return typeof e == "string";
}
function Ls(e) {
  return typeof e == "boolean";
}
function Mi(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function $t(e) {
  return Math.abs(e);
}
function $a(e) {
  return Math.sign(e);
}
function Cn(e, n) {
  return $t(e - n);
}
function su(e, n) {
  if (e === 0 || n === 0 || $t(e) <= $t(n)) return 0;
  const s = Cn($t(e), $t(n));
  return $t(s / e);
}
function au(e) {
  return Math.round(e * 100) / 100;
}
function Wn(e) {
  return zn(e).map(Number);
}
function ke(e) {
  return e[Fn(e)];
}
function Fn(e) {
  return Math.max(0, e.length - 1);
}
function Pa(e, n) {
  return n === Fn(e);
}
function Li(e, n = 0) {
  return Array.from(Array(e), (s, i) => n + i);
}
function zn(e) {
  return Object.keys(e);
}
function vo(e, n) {
  return [e, n].reduce(
    (s, i) => (
      zn(i).forEach((a) => {
        const o = s[a],
          r = i[a],
          l = Mi(o) && Mi(r);
        s[a] = l ? vo(o, r) : r;
      }),
      s
    ),
    {},
  );
}
function fa(e, n) {
  return typeof n.MouseEvent < "u" && e instanceof n.MouseEvent;
}
function iu(e, n) {
  const s = { start: i, center: a, end: o };
  function i() {
    return 0;
  }
  function a(c) {
    return o(c) / 2;
  }
  function o(c) {
    return n - c;
  }
  function r(c, h) {
    return xa(e) ? s[e](c) : e(n, c, h);
  }
  return { measure: r };
}
function Dn() {
  let e = [];
  function n(a, o, r, l = { passive: !0 }) {
    let c;
    if ("addEventListener" in a)
      (a.addEventListener(o, r, l), (c = () => a.removeEventListener(o, r, l)));
    else {
      const h = a;
      (h.addListener(r), (c = () => h.removeListener(r)));
    }
    return (e.push(c), i);
  }
  function s() {
    e = e.filter((a) => a());
  }
  const i = { add: n, clear: s };
  return i;
}
function ru(e, n, s, i) {
  const a = Dn(),
    o = 1e3 / 60;
  let r = null,
    l = 0,
    c = 0;
  function h() {
    a.add(e, "visibilitychange", () => {
      e.hidden && u();
    });
  }
  function g() {
    (m(), a.clear());
  }
  function p(v) {
    if (!c) return;
    r || ((r = v), s(), s());
    const w = v - r;
    for (r = v, l += w; l >= o;) (s(), (l -= o));
    const y = l / o;
    (i(y), c && (c = n.requestAnimationFrame(p)));
  }
  function d() {
    c || (c = n.requestAnimationFrame(p));
  }
  function m() {
    (n.cancelAnimationFrame(c), (r = null), (l = 0), (c = 0));
  }
  function u() {
    ((r = null), (l = 0));
  }
  return { init: h, destroy: g, start: d, stop: m, update: s, render: i };
}
function ou(e, n) {
  const s = n === "rtl",
    i = e === "y",
    a = i ? "y" : "x",
    o = i ? "x" : "y",
    r = !i && s ? -1 : 1,
    l = g(),
    c = p();
  function h(u) {
    const { height: x, width: v } = u;
    return i ? x : v;
  }
  function g() {
    return i ? "top" : s ? "right" : "left";
  }
  function p() {
    return i ? "bottom" : s ? "left" : "right";
  }
  function d(u) {
    return u * r;
  }
  return {
    scroll: a,
    cross: o,
    startEdge: l,
    endEdge: c,
    measureSize: h,
    direction: d,
  };
}
function en(e = 0, n = 0) {
  const s = $t(e - n);
  function i(h) {
    return h < e;
  }
  function a(h) {
    return h > n;
  }
  function o(h) {
    return i(h) || a(h);
  }
  function r(h) {
    return o(h) ? (i(h) ? e : n) : h;
  }
  function l(h) {
    return s ? h - s * Math.ceil((h - n) / s) : h;
  }
  return {
    length: s,
    max: n,
    min: e,
    constrain: r,
    reachedAny: o,
    reachedMax: a,
    reachedMin: i,
    removeOffset: l,
  };
}
function wo(e, n, s) {
  const { constrain: i } = en(0, e),
    a = e + 1;
  let o = r(n);
  function r(d) {
    return s ? $t((a + d) % a) : i(d);
  }
  function l() {
    return o;
  }
  function c(d) {
    return ((o = r(d)), p);
  }
  function h(d) {
    return g().set(l() + d);
  }
  function g() {
    return wo(e, l(), s);
  }
  const p = { get: l, set: c, add: h, clone: g };
  return p;
}
function cu(e, n, s, i, a, o, r, l, c, h, g, p, d, m, u, x, v, w, y) {
  const { cross: N, direction: j } = e,
    k = ["INPUT", "SELECT", "TEXTAREA"],
    b = { passive: !1 },
    S = Dn(),
    E = Dn(),
    L = en(50, 225).constrain(m.measure(20)),
    T = { mouse: 300, touch: 400 },
    C = { mouse: 500, touch: 600 },
    _ = u ? 43 : 25;
  let D = !1,
    B = 0,
    K = 0,
    z = !1,
    st = !1,
    P = !1,
    R = !1;
  function et(I) {
    if (!y) return;
    function mt(Nt) {
      (Ls(y) || y(I, Nt)) && jt(Nt);
    }
    const pt = n;
    S.add(pt, "dragstart", (Nt) => Nt.preventDefault(), b)
      .add(pt, "touchmove", () => {}, b)
      .add(pt, "touchend", () => {})
      .add(pt, "touchstart", mt)
      .add(pt, "mousedown", mt)
      .add(pt, "touchcancel", it)
      .add(pt, "contextmenu", it)
      .add(pt, "click", ct, !0);
  }
  function at() {
    (S.clear(), E.clear());
  }
  function Y() {
    const I = R ? s : n;
    E.add(I, "touchmove", W, b)
      .add(I, "touchend", it)
      .add(I, "mousemove", W, b)
      .add(I, "mouseup", it);
  }
  function Q(I) {
    const mt = I.nodeName || "";
    return k.includes(mt);
  }
  function Z() {
    return (u ? C : T)[R ? "mouse" : "touch"];
  }
  function ut(I, mt) {
    const pt = p.add($a(I) * -1),
      Nt = g.byDistance(I, !u).distance;
    return u || $t(I) < L
      ? Nt
      : v && mt
        ? Nt * 0.5
        : g.byIndex(pt.get(), 0).distance;
  }
  function jt(I) {
    const mt = fa(I, i);
    ((R = mt),
      (P = u && mt && !I.buttons && D),
      (D = Cn(a.get(), r.get()) >= 2),
      !(mt && I.button !== 0) &&
        (Q(I.target) ||
          ((z = !0),
          o.pointerDown(I),
          h.useFriction(0).useDuration(0),
          a.set(r),
          Y(),
          (B = o.readPoint(I)),
          (K = o.readPoint(I, N)),
          d.emit("pointerDown"))));
  }
  function W(I) {
    if (!fa(I, i) && I.touches.length >= 2) return it(I);
    const pt = o.readPoint(I),
      Nt = o.readPoint(I, N),
      St = Cn(pt, B),
      H = Cn(Nt, K);
    if (!st && !R && (!I.cancelable || ((st = St > H), !st))) return it(I);
    const J = o.pointerMove(I);
    (St > x && (P = !0),
      h.useFriction(0.3).useDuration(0.75),
      l.start(),
      a.add(j(J)),
      I.preventDefault());
  }
  function it(I) {
    const pt = g.byDistance(0, !1).index !== p.get(),
      Nt = o.pointerUp(I) * Z(),
      St = ut(j(Nt), pt),
      H = su(Nt, St),
      J = _ - 10 * H,
      ft = w + H / 50;
    ((st = !1),
      (z = !1),
      E.clear(),
      h.useDuration(J).useFriction(ft),
      c.distance(St, !u),
      (R = !1),
      d.emit("pointerUp"));
  }
  function ct(I) {
    P && (I.stopPropagation(), I.preventDefault(), (P = !1));
  }
  function dt() {
    return z;
  }
  return { init: et, destroy: at, pointerDown: dt };
}
function lu(e, n) {
  let i, a;
  function o(p) {
    return p.timeStamp;
  }
  function r(p, d) {
    const u = `client${(d || e.scroll) === "x" ? "X" : "Y"}`;
    return (fa(p, n) ? p : p.touches[0])[u];
  }
  function l(p) {
    return ((i = p), (a = p), r(p));
  }
  function c(p) {
    const d = r(p) - r(a),
      m = o(p) - o(i) > 170;
    return ((a = p), m && (i = p), d);
  }
  function h(p) {
    if (!i || !a) return 0;
    const d = r(a) - r(i),
      m = o(p) - o(i),
      u = o(p) - o(a) > 170,
      x = d / m;
    return m && !u && $t(x) > 0.1 ? x : 0;
  }
  return { pointerDown: l, pointerMove: c, pointerUp: h, readPoint: r };
}
function hu() {
  function e(s) {
    const { offsetTop: i, offsetLeft: a, offsetWidth: o, offsetHeight: r } = s;
    return {
      top: i,
      right: a + o,
      bottom: i + r,
      left: a,
      width: o,
      height: r,
    };
  }
  return { measure: e };
}
function du(e) {
  function n(i) {
    return e * (i / 100);
  }
  return { measure: n };
}
function mu(e, n, s, i, a, o, r) {
  const l = [e].concat(i);
  let c,
    h,
    g = [],
    p = !1;
  function d(v) {
    return a.measureSize(r.measure(v));
  }
  function m(v) {
    if (!o) return;
    ((h = d(e)), (g = i.map(d)));
    function w(y) {
      for (const N of y) {
        if (p) return;
        const j = N.target === e,
          k = i.indexOf(N.target),
          b = j ? h : g[k],
          S = d(j ? e : i[k]);
        if ($t(S - b) >= 0.5) {
          (v.reInit(), n.emit("resize"));
          break;
        }
      }
    }
    ((c = new ResizeObserver((y) => {
      (Ls(o) || o(v, y)) && w(y);
    })),
      s.requestAnimationFrame(() => {
        l.forEach((y) => c.observe(y));
      }));
  }
  function u() {
    ((p = !0), c && c.disconnect());
  }
  return { init: m, destroy: u };
}
function uu(e, n, s, i, a, o) {
  let r = 0,
    l = 0,
    c = a,
    h = o,
    g = e.get(),
    p = 0;
  function d() {
    const b = i.get() - e.get(),
      S = !c;
    let E = 0;
    return (
      S
        ? ((r = 0), s.set(i), e.set(i), (E = b))
        : (s.set(e), (r += b / c), (r *= h), (g += r), e.add(r), (E = g - p)),
      (l = $a(E)),
      (p = g),
      k
    );
  }
  function m() {
    const b = i.get() - n.get();
    return $t(b) < 0.001;
  }
  function u() {
    return c;
  }
  function x() {
    return l;
  }
  function v() {
    return r;
  }
  function w() {
    return N(a);
  }
  function y() {
    return j(o);
  }
  function N(b) {
    return ((c = b), k);
  }
  function j(b) {
    return ((h = b), k);
  }
  const k = {
    direction: x,
    duration: u,
    velocity: v,
    seek: d,
    settled: m,
    useBaseFriction: y,
    useBaseDuration: w,
    useFriction: j,
    useDuration: N,
  };
  return k;
}
function gu(e, n, s, i, a) {
  const o = a.measure(10),
    r = a.measure(50),
    l = en(0.1, 0.99);
  let c = !1;
  function h() {
    return !(c || !e.reachedAny(s.get()) || !e.reachedAny(n.get()));
  }
  function g(m) {
    if (!h()) return;
    const u = e.reachedMin(n.get()) ? "min" : "max",
      x = $t(e[u] - n.get()),
      v = s.get() - n.get(),
      w = l.constrain(x / r);
    (s.subtract(v * w),
      !m &&
        $t(v) < o &&
        (s.set(e.constrain(s.get())), i.useDuration(25).useBaseFriction()));
  }
  function p(m) {
    c = !m;
  }
  return { shouldConstrain: h, constrain: g, toggleActive: p };
}
function pu(e, n, s, i, a) {
  const o = en(-n + e, 0),
    r = p(),
    l = g(),
    c = d();
  function h(u, x) {
    return Cn(u, x) <= 1;
  }
  function g() {
    const u = r[0],
      x = ke(r),
      v = r.lastIndexOf(u),
      w = r.indexOf(x) + 1;
    return en(v, w);
  }
  function p() {
    return s
      .map((u, x) => {
        const { min: v, max: w } = o,
          y = o.constrain(u),
          N = !x,
          j = Pa(s, x);
        return N ? w : j || h(v, y) ? v : h(w, y) ? w : y;
      })
      .map((u) => parseFloat(u.toFixed(3)));
  }
  function d() {
    if (n <= e + a) return [o.max];
    if (i === "keepSnaps") return r;
    const { min: u, max: x } = l;
    return r.slice(u, x);
  }
  return { snapsContained: c, scrollContainLimit: l };
}
function xu(e, n, s) {
  const i = n[0],
    a = s ? i - e : ke(n);
  return { limit: en(a, i) };
}
function fu(e, n, s, i) {
  const o = n.min + 0.1,
    r = n.max + 0.1,
    { reachedMin: l, reachedMax: c } = en(o, r);
  function h(d) {
    return d === 1 ? c(s.get()) : d === -1 ? l(s.get()) : !1;
  }
  function g(d) {
    if (!h(d)) return;
    const m = e * (d * -1);
    i.forEach((u) => u.add(m));
  }
  return { loop: g };
}
function bu(e) {
  const { max: n, length: s } = e;
  function i(o) {
    const r = o - n;
    return s ? r / -s : 0;
  }
  return { get: i };
}
function vu(e, n, s, i, a) {
  const { startEdge: o, endEdge: r } = e,
    { groupSlides: l } = a,
    c = p().map(n.measure),
    h = d(),
    g = m();
  function p() {
    return l(i)
      .map((x) => ke(x)[r] - x[0][o])
      .map($t);
  }
  function d() {
    return i.map((x) => s[o] - x[o]).map((x) => -$t(x));
  }
  function m() {
    return l(h)
      .map((x) => x[0])
      .map((x, v) => x + c[v]);
  }
  return { snaps: h, snapsAligned: g };
}
function wu(e, n, s, i, a, o) {
  const { groupSlides: r } = a,
    { min: l, max: c } = i,
    h = g();
  function g() {
    const d = r(o),
      m = !e || n === "keepSnaps";
    return s.length === 1
      ? [o]
      : m
        ? d
        : d.slice(l, c).map((u, x, v) => {
            const w = !x,
              y = Pa(v, x);
            if (w) {
              const N = ke(v[0]) + 1;
              return Li(N);
            }
            if (y) {
              const N = Fn(o) - ke(v)[0] + 1;
              return Li(N, ke(v)[0]);
            }
            return u;
          });
  }
  return { slideRegistry: h };
}
function yu(e, n, s, i, a) {
  const { reachedAny: o, removeOffset: r, constrain: l } = i;
  function c(u) {
    return u.concat().sort((x, v) => $t(x) - $t(v))[0];
  }
  function h(u) {
    const x = e ? r(u) : l(u),
      v = n
        .map((y, N) => ({ diff: g(y - x, 0), index: N }))
        .sort((y, N) => $t(y.diff) - $t(N.diff)),
      { index: w } = v[0];
    return { index: w, distance: x };
  }
  function g(u, x) {
    const v = [u, u + s, u - s];
    if (!e) return u;
    if (!x) return c(v);
    const w = v.filter((y) => $a(y) === x);
    return w.length ? c(w) : ke(v) - s;
  }
  function p(u, x) {
    const v = n[u] - a.get(),
      w = g(v, x);
    return { index: u, distance: w };
  }
  function d(u, x) {
    const v = a.get() + u,
      { index: w, distance: y } = h(v),
      N = !e && o(v);
    if (!x || N) return { index: w, distance: u };
    const j = n[w] - y,
      k = u + g(j, 0);
    return { index: w, distance: k };
  }
  return { byDistance: d, byIndex: p, shortcut: g };
}
function ku(e, n, s, i, a, o, r) {
  function l(p) {
    const d = p.distance,
      m = p.index !== n.get();
    (o.add(d),
      d && (i.duration() ? e.start() : (e.update(), e.render(1), e.update())),
      m && (s.set(n.get()), n.set(p.index), r.emit("select")));
  }
  function c(p, d) {
    const m = a.byDistance(p, d);
    l(m);
  }
  function h(p, d) {
    const m = n.clone().set(p),
      u = a.byIndex(m.get(), d);
    l(u);
  }
  return { distance: c, index: h };
}
function ju(e, n, s, i, a, o, r, l) {
  const c = { passive: !0, capture: !0 };
  let h = 0;
  function g(m) {
    if (!l) return;
    function u(x) {
      if (new Date().getTime() - h > 10) return;
      (r.emit("slideFocusStart"), (e.scrollLeft = 0));
      const y = s.findIndex((N) => N.includes(x));
      Aa(y) && (a.useDuration(0), i.index(y, 0), r.emit("slideFocus"));
    }
    (o.add(document, "keydown", p, !1),
      n.forEach((x, v) => {
        o.add(
          x,
          "focus",
          (w) => {
            (Ls(l) || l(m, w)) && u(v);
          },
          c,
        );
      }));
  }
  function p(m) {
    m.code === "Tab" && (h = new Date().getTime());
  }
  return { init: g };
}
function jn(e) {
  let n = e;
  function s() {
    return n;
  }
  function i(c) {
    n = r(c);
  }
  function a(c) {
    n += r(c);
  }
  function o(c) {
    n -= r(c);
  }
  function r(c) {
    return Aa(c) ? c : c.get();
  }
  return { get: s, set: i, add: a, subtract: o };
}
function yo(e, n) {
  const s = e.scroll === "x" ? r : l,
    i = n.style;
  let a = null,
    o = !1;
  function r(d) {
    return `translate3d(${d}px,0px,0px)`;
  }
  function l(d) {
    return `translate3d(0px,${d}px,0px)`;
  }
  function c(d) {
    if (o) return;
    const m = au(e.direction(d));
    m !== a && ((i.transform = s(m)), (a = m));
  }
  function h(d) {
    o = !d;
  }
  function g() {
    o ||
      ((i.transform = ""),
      n.getAttribute("style") || n.removeAttribute("style"));
  }
  return { clear: g, to: c, toggleActive: h };
}
function Nu(e, n, s, i, a, o, r, l, c) {
  const g = Wn(a),
    p = Wn(a).reverse(),
    d = w().concat(y());
  function m(S, E) {
    return S.reduce((L, T) => L - a[T], E);
  }
  function u(S, E) {
    return S.reduce((L, T) => (m(L, E) > 0 ? L.concat([T]) : L), []);
  }
  function x(S) {
    return o.map((E, L) => ({
      start: E - i[L] + 0.5 + S,
      end: E + n - 0.5 + S,
    }));
  }
  function v(S, E, L) {
    const T = x(E);
    return S.map((C) => {
      const _ = L ? 0 : -s,
        D = L ? s : 0,
        B = L ? "end" : "start",
        K = T[C][B];
      return {
        index: C,
        loopPoint: K,
        slideLocation: jn(-1),
        translate: yo(e, c[C]),
        target: () => (l.get() > K ? _ : D),
      };
    });
  }
  function w() {
    const S = r[0],
      E = u(p, S);
    return v(E, s, !1);
  }
  function y() {
    const S = n - r[0] - 1,
      E = u(g, S);
    return v(E, -s, !0);
  }
  function N() {
    return d.every(({ index: S }) => {
      const E = g.filter((L) => L !== S);
      return m(E, n) <= 0.1;
    });
  }
  function j() {
    d.forEach((S) => {
      const { target: E, translate: L, slideLocation: T } = S,
        C = E();
      C !== T.get() && (L.to(C), T.set(C));
    });
  }
  function k() {
    d.forEach((S) => S.translate.clear());
  }
  return { canLoop: N, clear: k, loop: j, loopPoints: d };
}
function Tu(e, n, s) {
  let i,
    a = !1;
  function o(c) {
    if (!s) return;
    function h(g) {
      for (const p of g)
        if (p.type === "childList") {
          (c.reInit(), n.emit("slidesChanged"));
          break;
        }
    }
    ((i = new MutationObserver((g) => {
      a || ((Ls(s) || s(c, g)) && h(g));
    })),
      i.observe(e, { childList: !0 }));
  }
  function r() {
    (i && i.disconnect(), (a = !0));
  }
  return { init: o, destroy: r };
}
function Su(e, n, s, i) {
  const a = {};
  let o = null,
    r = null,
    l,
    c = !1;
  function h() {
    ((l = new IntersectionObserver(
      (u) => {
        c ||
          (u.forEach((x) => {
            const v = n.indexOf(x.target);
            a[v] = x;
          }),
          (o = null),
          (r = null),
          s.emit("slidesInView"));
      },
      { root: e.parentElement, threshold: i },
    )),
      n.forEach((u) => l.observe(u)));
  }
  function g() {
    (l && l.disconnect(), (c = !0));
  }
  function p(u) {
    return zn(a).reduce((x, v) => {
      const w = parseInt(v),
        { isIntersecting: y } = a[w];
      return (((u && y) || (!u && !y)) && x.push(w), x);
    }, []);
  }
  function d(u = !0) {
    if (u && o) return o;
    if (!u && r) return r;
    const x = p(u);
    return (u && (o = x), u || (r = x), x);
  }
  return { init: h, destroy: g, get: d };
}
function qu(e, n, s, i, a, o) {
  const { measureSize: r, startEdge: l, endEdge: c } = e,
    h = s[0] && a,
    g = u(),
    p = x(),
    d = s.map(r),
    m = v();
  function u() {
    if (!h) return 0;
    const y = s[0];
    return $t(n[l] - y[l]);
  }
  function x() {
    if (!h) return 0;
    const y = o.getComputedStyle(ke(i));
    return parseFloat(y.getPropertyValue(`margin-${c}`));
  }
  function v() {
    return s
      .map((y, N, j) => {
        const k = !N,
          b = Pa(j, N);
        return k ? d[N] + g : b ? d[N] + p : j[N + 1][l] - y[l];
      })
      .map($t);
  }
  return { slideSizes: d, slideSizesWithGaps: m, startGap: g, endGap: p };
}
function Cu(e, n, s, i, a, o, r, l, c) {
  const { startEdge: h, endEdge: g, direction: p } = e,
    d = Aa(s);
  function m(w, y) {
    return Wn(w)
      .filter((N) => N % y === 0)
      .map((N) => w.slice(N, N + y));
  }
  function u(w) {
    return w.length
      ? Wn(w)
          .reduce((y, N, j) => {
            const k = ke(y) || 0,
              b = k === 0,
              S = N === Fn(w),
              E = a[h] - o[k][h],
              L = a[h] - o[N][g],
              T = !i && b ? p(r) : 0,
              C = !i && S ? p(l) : 0,
              _ = $t(L - C - (E + T));
            return (j && _ > n + c && y.push(N), S && y.push(w.length), y);
          }, [])
          .map((y, N, j) => {
            const k = Math.max(j[N - 1] || 0);
            return w.slice(k, y);
          })
      : [];
  }
  function x(w) {
    return d ? m(w, s) : u(w);
  }
  return { groupSlides: x };
}
function Eu(e, n, s, i, a, o, r) {
  const {
      align: l,
      axis: c,
      direction: h,
      startIndex: g,
      loop: p,
      duration: d,
      dragFree: m,
      dragThreshold: u,
      inViewThreshold: x,
      slidesToScroll: v,
      skipSnaps: w,
      containScroll: y,
      watchResize: N,
      watchSlides: j,
      watchDrag: k,
      watchFocus: b,
    } = o,
    S = 2,
    E = hu(),
    L = E.measure(n),
    T = s.map(E.measure),
    C = ou(c, h),
    _ = C.measureSize(L),
    D = du(_),
    B = iu(l, _),
    K = !p && !!y,
    z = p || !!y,
    {
      slideSizes: st,
      slideSizesWithGaps: P,
      startGap: R,
      endGap: et,
    } = qu(C, L, T, s, z, a),
    at = Cu(C, _, v, p, L, T, R, et, S),
    { snaps: Y, snapsAligned: Q } = vu(C, B, L, T, at),
    Z = -ke(Y) + ke(P),
    { snapsContained: ut, scrollContainLimit: jt } = pu(_, Z, Q, y, S),
    W = K ? ut : Q,
    { limit: it } = xu(Z, W, p),
    ct = wo(Fn(W), g, p),
    dt = ct.clone(),
    lt = Wn(s),
    I = ({
      dragHandler: qt,
      scrollBody: Vt,
      scrollBounds: Wt,
      options: { loop: Kt },
    }) => {
      (Kt || Wt.constrain(qt.pointerDown()), Vt.seek());
    },
    mt = (
      {
        scrollBody: qt,
        translate: Vt,
        location: Wt,
        offsetLocation: Kt,
        previousLocation: oe,
        scrollLooper: _e,
        slideLooper: pe,
        dragHandler: Fe,
        animation: Ge,
        eventHandler: Oe,
        scrollBounds: Bt,
        options: { loop: nn },
      },
      We,
    ) => {
      const Yt = qt.settled(),
        fn = !Bt.shouldConstrain(),
        rt = nn ? Yt : Yt && fn,
        bt = rt && !Fe.pointerDown();
      bt && Ge.stop();
      const Tt = Wt.get() * We + oe.get() * (1 - We);
      (Kt.set(Tt),
        nn && (_e.loop(qt.direction()), pe.loop()),
        Vt.to(Kt.get()),
        bt && Oe.emit("settle"),
        rt || Oe.emit("scroll"));
    },
    pt = ru(
      i,
      a,
      () => I(xt),
      (qt) => mt(xt, qt),
    ),
    Nt = 0.68,
    St = W[ct.get()],
    H = jn(St),
    J = jn(St),
    ft = jn(St),
    vt = jn(St),
    wt = uu(H, ft, J, vt, d, Nt),
    Jt = yu(p, W, Z, it, vt),
    Pt = ku(pt, ct, dt, wt, Jt, vt, r),
    Et = bu(it),
    Gt = Dn(),
    M = Su(n, s, r, x),
    { slideRegistry: U } = wu(K, y, W, jt, at, lt),
    tt = ju(e, s, U, Pt, wt, Gt, r, b),
    xt = {
      ownerDocument: i,
      ownerWindow: a,
      eventHandler: r,
      containerRect: L,
      slideRects: T,
      animation: pt,
      axis: C,
      dragHandler: cu(
        C,
        e,
        i,
        a,
        vt,
        lu(C, a),
        H,
        pt,
        Pt,
        wt,
        Jt,
        ct,
        r,
        D,
        m,
        u,
        w,
        Nt,
        k,
      ),
      eventStore: Gt,
      percentOfView: D,
      index: ct,
      indexPrevious: dt,
      limit: it,
      location: H,
      offsetLocation: ft,
      previousLocation: J,
      options: o,
      resizeHandler: mu(n, r, a, s, C, N, E),
      scrollBody: wt,
      scrollBounds: gu(it, ft, vt, wt, D),
      scrollLooper: fu(Z, it, ft, [H, ft, J, vt]),
      scrollProgress: Et,
      scrollSnapList: W.map(Et.get),
      scrollSnaps: W,
      scrollTarget: Jt,
      scrollTo: Pt,
      slideLooper: Nu(C, _, Z, st, P, Y, W, ft, s),
      slideFocus: tt,
      slidesHandler: Tu(n, r, j),
      slidesInView: M,
      slideIndexes: lt,
      slideRegistry: U,
      slidesToScroll: at,
      target: vt,
      translate: yo(C, n),
    };
  return xt;
}
function Mu() {
  let e = {},
    n;
  function s(h) {
    n = h;
  }
  function i(h) {
    return e[h] || [];
  }
  function a(h) {
    return (i(h).forEach((g) => g(n, h)), c);
  }
  function o(h, g) {
    return ((e[h] = i(h).concat([g])), c);
  }
  function r(h, g) {
    return ((e[h] = i(h).filter((p) => p !== g)), c);
  }
  function l() {
    e = {};
  }
  const c = { init: s, emit: a, off: r, on: o, clear: l };
  return c;
}
const Lu = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0,
};
function _u(e) {
  function n(o, r) {
    return vo(o, r || {});
  }
  function s(o) {
    const r = o.breakpoints || {},
      l = zn(r)
        .filter((c) => e.matchMedia(c).matches)
        .map((c) => r[c])
        .reduce((c, h) => n(c, h), {});
    return n(o, l);
  }
  function i(o) {
    return o
      .map((r) => zn(r.breakpoints || {}))
      .reduce((r, l) => r.concat(l), [])
      .map(e.matchMedia);
  }
  return { mergeOptions: n, optionsAtMedia: s, optionsMediaQueries: i };
}
function Au(e) {
  let n = [];
  function s(o, r) {
    return (
      (n = r.filter(({ options: l }) => e.optionsAtMedia(l).active !== !1)),
      n.forEach((l) => l.init(o, e)),
      r.reduce((l, c) => Object.assign(l, { [c.name]: c }), {})
    );
  }
  function i() {
    n = n.filter((o) => o.destroy());
  }
  return { init: s, destroy: i };
}
function js(e, n, s) {
  const i = e.ownerDocument,
    a = i.defaultView,
    o = _u(a),
    r = Au(o),
    l = Dn(),
    c = Mu(),
    { mergeOptions: h, optionsAtMedia: g, optionsMediaQueries: p } = o,
    { on: d, off: m, emit: u } = c,
    x = C;
  let v = !1,
    w,
    y = h(Lu, js.globalOptions),
    N = h(y),
    j = [],
    k,
    b,
    S;
  function E() {
    const { container: lt, slides: I } = N;
    b = (xa(lt) ? e.querySelector(lt) : lt) || e.children[0];
    const pt = xa(I) ? b.querySelectorAll(I) : I;
    S = [].slice.call(pt || b.children);
  }
  function L(lt) {
    const I = Eu(e, b, S, i, a, lt, c);
    if (lt.loop && !I.slideLooper.canLoop()) {
      const mt = Object.assign({}, lt, { loop: !1 });
      return L(mt);
    }
    return I;
  }
  function T(lt, I) {
    v ||
      ((y = h(y, lt)),
      (N = g(y)),
      (j = I || j),
      E(),
      (w = L(N)),
      p([y, ...j.map(({ options: mt }) => mt)]).forEach((mt) =>
        l.add(mt, "change", C),
      ),
      N.active &&
        (w.translate.to(w.location.get()),
        w.animation.init(),
        w.slidesInView.init(),
        w.slideFocus.init(dt),
        w.eventHandler.init(dt),
        w.resizeHandler.init(dt),
        w.slidesHandler.init(dt),
        w.options.loop && w.slideLooper.loop(),
        b.offsetParent && S.length && w.dragHandler.init(dt),
        (k = r.init(dt, j))));
  }
  function C(lt, I) {
    const mt = at();
    (_(), T(h({ startIndex: mt }, lt), I), c.emit("reInit"));
  }
  function _() {
    (w.dragHandler.destroy(),
      w.eventStore.clear(),
      w.translate.clear(),
      w.slideLooper.clear(),
      w.resizeHandler.destroy(),
      w.slidesHandler.destroy(),
      w.slidesInView.destroy(),
      w.animation.destroy(),
      r.destroy(),
      l.clear());
  }
  function D() {
    v || ((v = !0), l.clear(), _(), c.emit("destroy"), c.clear());
  }
  function B(lt, I, mt) {
    !N.active ||
      v ||
      (w.scrollBody.useBaseFriction().useDuration(I === !0 ? 0 : N.duration),
      w.scrollTo.index(lt, mt || 0));
  }
  function K(lt) {
    const I = w.index.add(1).get();
    B(I, lt, -1);
  }
  function z(lt) {
    const I = w.index.add(-1).get();
    B(I, lt, 1);
  }
  function st() {
    return w.index.add(1).get() !== at();
  }
  function P() {
    return w.index.add(-1).get() !== at();
  }
  function R() {
    return w.scrollSnapList;
  }
  function et() {
    return w.scrollProgress.get(w.offsetLocation.get());
  }
  function at() {
    return w.index.get();
  }
  function Y() {
    return w.indexPrevious.get();
  }
  function Q() {
    return w.slidesInView.get();
  }
  function Z() {
    return w.slidesInView.get(!1);
  }
  function ut() {
    return k;
  }
  function jt() {
    return w;
  }
  function W() {
    return e;
  }
  function it() {
    return b;
  }
  function ct() {
    return S;
  }
  const dt = {
    canScrollNext: st,
    canScrollPrev: P,
    containerNode: it,
    internalEngine: jt,
    destroy: D,
    off: m,
    on: d,
    emit: u,
    plugins: ut,
    previousScrollSnap: Y,
    reInit: x,
    rootNode: W,
    scrollNext: K,
    scrollPrev: z,
    scrollProgress: et,
    scrollSnapList: R,
    scrollTo: B,
    selectedScrollSnap: at,
    slideNodes: ct,
    slidesInView: Q,
    slidesNotInView: Z,
  };
  return (T(n, s), setTimeout(() => c.emit("init"), 0), dt);
}
js.globalOptions = void 0;
function Ra(e = {}, n = []) {
  const s = f.useRef(e),
    i = f.useRef(n),
    [a, o] = f.useState(),
    [r, l] = f.useState(),
    c = f.useCallback(() => {
      a && a.reInit(s.current, i.current);
    }, [a]);
  return (
    f.useEffect(() => {
      _a(s.current, e) || ((s.current = e), c());
    }, [e, c]),
    f.useEffect(() => {
      nu(i.current, n) || ((i.current = n), c());
    }, [n, c]),
    f.useEffect(() => {
      if (eu() && r) {
        js.globalOptions = Ra.globalOptions;
        const h = js(r, s.current, i.current);
        return (o(h), () => h.destroy());
      } else o(void 0);
    }, [r, o]),
    [l, a]
  );
}
Ra.globalOptions = void 0;
const ko = f.createContext(null);
function _s() {
  const e = f.useContext(ko);
  if (!e) throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const jo = f.forwardRef(
  (
    {
      orientation: e = "horizontal",
      opts: n,
      setApi: s,
      plugins: i,
      className: a,
      children: o,
      ...r
    },
    l,
  ) => {
    const [c, h] = Ra({ ...n, axis: e === "horizontal" ? "x" : "y" }, i),
      [g, p] = f.useState(!1),
      [d, m] = f.useState(!1),
      u = f.useCallback((y) => {
        y && (p(y.canScrollPrev()), m(y.canScrollNext()));
      }, []),
      x = f.useCallback(() => {
        h == null || h.scrollPrev();
      }, [h]),
      v = f.useCallback(() => {
        h == null || h.scrollNext();
      }, [h]),
      w = f.useCallback(
        (y) => {
          y.key === "ArrowLeft"
            ? (y.preventDefault(), x())
            : y.key === "ArrowRight" && (y.preventDefault(), v());
        },
        [x, v],
      );
    return (
      f.useEffect(() => {
        !h || !s || s(h);
      }, [h, s]),
      f.useEffect(() => {
        if (h)
          return (
            u(h),
            h.on("reInit", u),
            h.on("select", u),
            () => {
              h == null || h.off("select", u);
            }
          );
      }, [h, u]),
      t.jsx(ko.Provider, {
        value: {
          carouselRef: c,
          api: h,
          opts: n,
          orientation:
            e ||
            ((n == null ? void 0 : n.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: x,
          scrollNext: v,
          canScrollPrev: g,
          canScrollNext: d,
        },
        children: t.jsx("div", {
          ref: l,
          onKeyDownCapture: w,
          className: ge("relative", a),
          role: "region",
          "aria-roledescription": "carousel",
          ...r,
          children: o,
        }),
      })
    );
  },
);
jo.displayName = "Carousel";
const No = f.forwardRef(({ className: e, ...n }, s) => {
  const { carouselRef: i, orientation: a } = _s();
  return t.jsx("div", {
    ref: i,
    className: "overflow-hidden",
    children: t.jsx("div", {
      ref: s,
      className: ge("flex", a === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
      ...n,
    }),
  });
});
No.displayName = "CarouselContent";
const To = f.forwardRef(({ className: e, ...n }, s) => {
  const { orientation: i } = _s();
  return t.jsx("div", {
    ref: s,
    role: "group",
    "aria-roledescription": "slide",
    className: ge(
      "min-w-0 shrink-0 grow-0 basis-full",
      i === "horizontal" ? "pl-4" : "pt-4",
      e,
    ),
    ...n,
  });
});
To.displayName = "CarouselItem";
const So = f.forwardRef(
  ({ className: e, variant: n = "outline", size: s = "icon", ...i }, a) => {
    const { orientation: o, scrollPrev: r, canScrollPrev: l } = _s();
    return t.jsxs(Re, {
      ref: a,
      variant: n,
      size: s,
      className: ge(
        "absolute h-8 w-8 rounded-full",
        o === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e,
      ),
      disabled: !l,
      onClick: r,
      ...i,
      children: [
        t.jsx(Fc, { className: "h-4 w-4" }),
        t.jsx("span", { className: "sr-only", children: "Previous slide" }),
      ],
    });
  },
);
So.displayName = "CarouselPrevious";
const qo = f.forwardRef(
  ({ className: e, variant: n = "outline", size: s = "icon", ...i }, a) => {
    const { orientation: o, scrollNext: r, canScrollNext: l } = _s();
    return t.jsxs(Re, {
      ref: a,
      variant: n,
      size: s,
      className: ge(
        "absolute h-8 w-8 rounded-full",
        o === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e,
      ),
      disabled: !l,
      onClick: r,
      ...i,
      children: [
        t.jsx(hr, { className: "h-4 w-4" }),
        t.jsx("span", { className: "sr-only", children: "Next slide" }),
      ],
    });
  },
);
qo.displayName = "CarouselNext";
const Dt = site.company,
  jg = `${Dt.legalName}, trụ sở tại ${Dt.address}. Phục vụ khách hàng toàn quốc.`,
  es = 8,
  $u = [
    {
      id: "product-lead",
      name: "Đội ngũ XimiTech",
      role: "Giám đốc điều hành XimiTech",
      image: "/media/tddtech/company-profile/v1/tranthanhdo.webp",
      imagePosition: "center bottom",
      imageFit: "cover",
      initials: "TD",
      accent: "from-primary to-cyan-400",
      summary: `Có ${kd}+ năm kinh nghiệm làm việc và vận hành tại các tập đoàn lớn, công ty nước ngoài trước khi thành lập TDDTech. Hiện phụ trách định hướng sản phẩm, giải pháp và chất lượng bàn giao.`,
      short: "Định hướng sản phẩm, chịu trách nhiệm chất lượng bàn giao.",
      points: [
        "Làm rõ bài toán và phạm vi",
        "Theo sát quyết định trong suốt dự án",
        "Đảm bảo đầu ra bám mục tiêu đã thống nhất",
      ],
    },
    {
      id: "solution-architect",
      name: "Đội ngũ TDDTech",
      role: "Tech Team & Founder TDDTech",
      image: "/media/tddtech/company-profile/v1/myavatar.png",
      imagePosition: "center bottom",
      imageFit: "contain",
      initials: "NM",
      accent: "from-primary to-cyan-400",
      summary:
        "Phân tích yêu cầu, thiết kế luồng nghiệp vụ và kiến trúc hệ thống; đề xuất phương án kỹ thuật phù hợp để sản phẩm dễ bảo trì và mở rộng.",
      short: "Định hướng sản phẩm, chịu trách nhiệm chất lượng bàn giao.",
      points: [
        "Phân tích yêu cầu và luồng nghiệp vụ",
        "Thiết kế cấu trúc hệ thống",
        "Đánh giá khả năng tích hợp và mở rộng",
      ],
    },
  ],
  _i = [
    "Frontend",
    "Backend",
    "Dữ liệu",
    "Tích hợp",
    "Kiểm thử",
    "Hạ tầng",
    "Bảo mật",
    "Vận hành",
  ],
  ea = [
    "Sao lưu dữ liệu",
    "Cập nhật bản vá bảo mật",
    "Giám sát uptime",
    "Xử lý yêu cầu hỗ trợ",
    "Triển khai tính năng mới",
    "Tối ưu tốc độ tải trang",
    "Kiểm thử bản cập nhật",
    "Gia hạn chứng chỉ SSL",
    "Rà soát nhật ký lỗi",
    "Kiểm tra form & đơn hàng",
  ],
  Pu = 25,
  na = (e) => String(e).padStart(2, "0"),
  Ru = ({ active: e, id: n }) =>
    t.jsxs("svg", {
      viewBox: "0 0 48 48",
      className: "h-10 w-10 flex-none sm:h-11 sm:w-11",
      "aria-hidden": "true",
      children: [
        t.jsx("defs", {
          children: t.jsxs("linearGradient", {
            id: n,
            x1: "0",
            y1: "0",
            x2: "0",
            y2: "1",
            children: [
              t.jsx("stop", {
                offset: "0",
                stopColor: e ? "#22d3ee" : "#334155",
              }),
              t.jsx("stop", {
                offset: "1",
                stopColor: e ? "#0e7490" : "#1e293b",
              }),
            ],
          }),
        }),
        t.jsx("circle", {
          cx: "24",
          cy: "24",
          r: "23",
          fill: "#0b1624",
          stroke: e ? "#22d3ee" : "#1f2a3a",
          strokeWidth: "1.5",
        }),
        t.jsx("circle", { cx: "24", cy: "19", r: "7.5", fill: `url(#${n})` }),
        t.jsx("path", {
          d: "M10 41c1.8-8 7.4-12 14-12s12.2 4 14 12",
          fill: `url(#${n})`,
        }),
      ],
    }),
  Iu = () => {
    const e = Zt(),
      n = f.useRef(null),
      [s, i] = f.useState(0),
      [a, o] = f.useState(() => new Date()),
      [r, l] = f.useState(!1),
      c = Math.min(Sn, 150),
      [h, g] = f.useState(() =>
        Array.from({ length: es }, (x, v) => (v * 3) % ea.length),
      ),
      [p, d] = f.useState([]),
      m = s % es;
    (f.useEffect(() => {
      const x = n.current;
      if (!x) return;
      const v = new IntersectionObserver(([w]) => l(w.isIntersecting), {
        threshold: 0.15,
      });
      return (v.observe(x), () => v.disconnect());
    }, []),
      f.useEffect(() => {
        if (e || !r) return;
        const x = window.setInterval(() => {
          (i((v) => v + 1), o(new Date()));
        }, 950);
        return () => window.clearInterval(x);
      }, [e, r]),
      f.useEffect(() => {
        s !== 0 &&
          (g((x) =>
            x.map((v, w) => (w === m ? (v + 1 + (s % 3)) % ea.length : v)),
          ),
          d((x) => [...x.slice(-5), Math.floor(Math.random() * c)]));
      }, [s, m, c]));
    const u = f.useMemo(
      () =>
        new Set(
          Array.from({ length: 22 }, () => Math.floor(Math.random() * c)),
        ),
      [c],
    );
    return t.jsxs("div", {
      ref: n,
      className:
        "relative mt-6 overflow-hidden rounded-[14px] border border-slate-800 bg-[#07101c] text-white shadow-[0_30px_90px_-40px_rgba(2,6,23,0.8)]",
      children: [
        t.jsx("div", {
          className:
            "pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]",
        }),
        t.jsxs("div", {
          className:
            "relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:p-10",
          children: [
            t.jsxs("div", {
              className: "flex flex-col justify-between gap-8",
              children: [
                t.jsxs("div", {
                  children: [
                    t.jsx("p", {
                      className:
                        "text-xs font-bold uppercase tracking-[0.24em] text-cyan-300",
                      children: "Đội ngũ phía sau",
                    }),
                    t.jsxs("h3", {
                      className:
                        "mt-3 text-balance text-2xl font-black leading-tight tracking-[-0.02em] sm:text-3xl lg:text-4xl",
                      children: [es, " kỹ sư phát triển và vận hành"],
                    }),
                    t.jsx("p", {
                      className:
                        "mt-4 text-sm leading-7 text-white/65 sm:text-base sm:leading-8",
                      children:
                        "Đội ngũ phối hợp theo từng giai đoạn của dự án: hoàn thiện tính năng, kiểm thử, triển khai và hỗ trợ sau bàn giao. Phạm vi công việc và đầu mối phụ trách được thống nhất từ đầu.",
                    }),
                  ],
                }),
                t.jsx("dl", {
                  className:
                    "grid grid-cols-3 gap-3 border-t border-white/10 pt-6",
                  children: [
                    { value: String(es), label: "kỹ sư phát triển & vận hành" },
                    {
                      value: `${Sn}+`,
                      label:
                        "dự án đã triển khai (gồm cả trước khi lập công ty)",
                    },
                    { value: "24/7", label: "tiếp nhận & xử lý sự cố" },
                  ].map((x) =>
                    t.jsxs(
                      "div",
                      {
                        children: [
                          t.jsx("dt", {
                            className: "sr-only",
                            children: x.label,
                          }),
                          t.jsx("dd", {
                            className:
                              "text-3xl font-black tabular-nums text-white sm:text-4xl",
                            children: x.value,
                          }),
                          t.jsx("dd", {
                            className:
                              "mt-1 text-xs leading-5 text-white/55 sm:text-sm",
                            children: x.label,
                          }),
                        ],
                      },
                      x.label,
                    ),
                  ),
                }),
              ],
            }),
            t.jsxs("div", {
              className:
                "rounded-[10px] border border-white/10 bg-white/[0.03] p-4 sm:p-5",
              "aria-label": "Mô phỏng đội ngũ kỹ thuật đang phối hợp vận hành",
              children: [
                t.jsxs("div", {
                  className:
                    "flex items-center justify-between gap-3 text-xs text-white/55 sm:text-sm",
                  children: [
                    t.jsxs("span", {
                      className:
                        "inline-flex items-center gap-2 font-semibold text-white/80",
                      children: [
                        t.jsxs("span", {
                          className: "relative flex h-2.5 w-2.5",
                          children: [
                            t.jsx("span", {
                              className:
                                "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60",
                            }),
                            t.jsx("span", {
                              className:
                                "relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400",
                            }),
                          ],
                        }),
                        Sn,
                        "+ hệ thống đang chạy",
                      ],
                    }),
                    t.jsxs("span", {
                      className: "font-mono tabular-nums",
                      children: [
                        na(a.getHours()),
                        ":",
                        na(a.getMinutes()),
                        ":",
                        na(a.getSeconds()),
                      ],
                    }),
                  ],
                }),
                t.jsx("div", {
                  className: "mt-4 grid gap-[4px]",
                  style: {
                    gridTemplateColumns: `repeat(${Pu}, minmax(0, 1fr))`,
                  },
                  children: Array.from({ length: c }, (x, v) => {
                    const w = p.includes(v),
                      y = p[p.length - 1] === v;
                    return t.jsx(
                      "span",
                      {
                        className: `aspect-square rounded-[3px] transition-all duration-700 ${y ? "scale-125 bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" : w ? "bg-cyan-400/60" : u.has(v) ? "support-dot-beat bg-white/[0.14]" : "bg-white/[0.07]"}`,
                        style: u.has(v)
                          ? { animationDelay: `${(v * 37) % 3e3}ms` }
                          : void 0,
                      },
                      v,
                    );
                  }),
                }),
                t.jsx("div", {
                  className: "mt-5 grid gap-2 sm:grid-cols-2",
                  children: h.map((x, v) => {
                    const w = !e && v === m && s > 0;
                    return t.jsxs(
                      "div",
                      {
                        className: `flex items-center gap-2.5 rounded-[8px] border p-2.5 transition-colors duration-500 ${w ? "border-cyan-400/60 bg-cyan-400/[0.08]" : "border-white/10 bg-white/[0.02]"}`,
                        children: [
                          t.jsx(Ru, { active: w, id: `st-face-${v}` }),
                          t.jsxs("div", {
                            className: "min-w-0 flex-1",
                            children: [
                              t.jsxs("p", {
                                className:
                                  "flex items-center gap-1.5 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.12em] text-white/50",
                                children: [
                                  _i[v % _i.length],
                                  t.jsx("span", {
                                    className:
                                      "h-1.5 w-1.5 rounded-full bg-emerald-400",
                                  }),
                                ],
                              }),
                              t.jsx("div", {
                                className:
                                  "relative mt-0.5 h-6 overflow-hidden",
                                children: t.jsx(fe, {
                                  initial: !1,
                                  children: t.jsx(
                                    q.p,
                                    {
                                      initial: { y: 14, opacity: 0 },
                                      animate: { y: 0, opacity: 1 },
                                      exit: { y: -14, opacity: 0 },
                                      transition: { duration: 0.35 },
                                      className: `absolute inset-x-0 top-0 truncate text-sm font-semibold ${w ? "text-cyan-200" : "text-white/75"}`,
                                      children: ea[x],
                                    },
                                    x,
                                  ),
                                }),
                              }),
                            ],
                          }),
                        ],
                      },
                      v,
                    );
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Ie = {
    slogan: "Website là tài sản. TDDTech giữ nó sinh lời.",
    pillars: ["Bảo vệ", "Giữ gìn", "Phát triển"],
    positioning:
      "TDDTech xây website doanh nghiệp và website bán hàng như một tài sản: doanh nghiệp sở hữu 100%, TDDTech bảo vệ, giữ gìn và phát triển để website mang về khách hàng.",
    vision:
      "Đến năm 2030, là đơn vị mà chủ doanh nghiệp vừa và nhỏ Việt Nam tin giao website như giao một tài sản — nơi mỗi website được đo bằng khách hàng và doanh thu nó mang về, không phải bằng số trang hay độ đẹp.",
    purpose:
      "Thay đổi cách chủ doanh nghiệp nhìn website: từ một khoản chi làm một lần rồi để đó, thành một tài sản đứng tên doanh nghiệp, được bảo vệ, giữ gìn và phát triển để sinh lời mỗi tháng.",
    visionShort:
      "Đến 2030, là nơi chủ doanh nghiệp Việt tin giao website như giao một tài sản.",
    purposeShort:
      "Biến website từ khoản chi làm một lần thành tài sản đứng tên doanh nghiệp, sinh lời mỗi tháng.",
    missions: [
      {
        title: "Xây đúng nền móng",
        text: "Bắt đầu từ mục tiêu kinh doanh và hành trình mua của khách, đo lường được từ ngày đầu tiên.",
      },
      {
        title: "Trao quyền sở hữu 100%",
        text: "Mã nguồn, tên miền, dữ liệu và tài khoản quản trị đứng tên doanh nghiệp.",
      },
      {
        title: "Bảo vệ và giữ gìn",
        text: "Theo dõi, sao lưu, xử lý sự cố để tài sản không xuống cấp theo thời gian.",
      },
      {
        title: "Phát triển tài sản",
        text: "Nội dung, SEO, tối ưu chuyển đổi và chiến dịch để website mang về khách hàng, đơn hàng.",
      },
      {
        title: "Báo cáo minh bạch",
        text: "Số liệu thật từ công cụ đo lường, gửi đều đặn — anh chị biết tài sản của mình đang làm việc ra sao.",
      },
    ],
    values: [
      { title: "Chủ quyền", text: "Tài sản luôn đứng tên khách hàng." },
      {
        title: "Trách nhiệm dài hạn",
        text: "Đồng hành sau bàn giao, không làm xong rồi thôi.",
      },
      { title: "Minh bạch", text: "Nói bằng số liệu, không bằng lời hứa." },
      { title: "Thực chất", text: "Không hứa top 1, không hứa doanh thu ảo." },
      {
        title: "Tận tâm",
        text: "Chăm website của khách như tài sản của chính mình.",
      },
    ],
    audience: "Chủ doanh nghiệp vừa và nhỏ muốn website mang về khách hàng",
  },
  Ng = {
    short: "Bảo hành 5 năm, trọn đời với lỗi do TDDTech",
    editing:
      "Chỉnh sửa miễn phí trong phạm vi đã nghiệm thu suốt 5 năm (60 tháng)",
    lifetime: "Bảo hành trọn đời với lỗi do TDDTech gây ra",
    full: "TDDTech chỉnh sửa miễn phí trong phạm vi đã nghiệm thu suốt 5 năm (60 tháng), và bảo hành trọn đời với lỗi do TDDTech gây ra. Tính năng mới hoặc thay đổi ngoài phạm vi được báo chi phí trước khi làm.",
  },
  Tg =
    "tính cả các dự án nhà sáng lập và đội ngũ thực hiện trước khi thành lập công ty",
  gs = {
    setup: {
      name: "Gói Setup",
      tagline: "Xây nền móng tài sản — đầu tư một lần",
      items: [
        "Làm rõ mục tiêu kinh doanh, khách hàng và hành trình mua",
        "Cấu trúc nội dung và thiết kế theo thương hiệu",
        "Lập trình website doanh nghiệp hoặc website bán hàng",
        "SEO kỹ thuật nền tảng, tốc độ tải và hiển thị trên điện thoại",
        "Cài đo lường: GA4, Search Console, sự kiện chuyển đổi",
        "Bàn giao 100% mã nguồn, tên miền, dữ liệu và quyền quản trị",
      ],
    },
    monthly: [
      {
        id: "basic",
        name: "Basic",
        tagline: "Giữ gìn tài sản",
        fit: "Website đã chạy ổn, cần người trông và cập nhật đều đặn.",
        items: [
          "Quản lý hosting, tên miền, chứng chỉ SSL",
          "Sao lưu định kỳ và theo dõi website hoạt động",
          "Cập nhật nội dung, hình ảnh, thông tin sản phẩm",
          "Báo cáo hằng tháng: lượt truy cập, liên hệ, đơn hàng",
        ],
      },
      {
        id: "growth",
        name: "Growth",
        tagline: "Phát triển tài sản",
        fit: "Doanh nghiệp muốn website đều đặn mang về khách mới.",
        items: [
          "Toàn bộ hạng mục Basic",
          "Nội dung và SEO tăng trưởng hằng tháng",
          "Tối ưu tỷ lệ chuyển đổi: form, nút gọi, Zalo, giỏ hàng",
          "Landing page cho chiến dịch và mùa bán hàng",
          "Họp đánh giá hằng tháng, đề xuất bước tiếp theo",
        ],
      },
      {
        id: "performance",
        name: "Performance",
        tagline: "Tăng trưởng doanh thu",
        fit: "Doanh nghiệp coi website là kênh bán hàng chính.",
        items: [
          "Toàn bộ hạng mục Growth",
          "Vận hành quảng cáo dẫn về website (chưa gồm ngân sách quảng cáo)",
          "Thử nghiệm A/B, kết nối CRM và Zalo",
          "KPI khách hàng tiềm năng và doanh thu thống nhất từ đầu",
          "Báo cáo hằng tuần, nhân sự phụ trách riêng",
        ],
      },
    ],
    pricingNote:
      "Chi phí được báo riêng sau khi TDDTech hiểu mục tiêu và hiện trạng của anh chị. Nhắn Zalo hoặc gọi để nhận báo giá.",
    honesty:
      "TDDTech không cam kết một con số doanh thu. Chúng tôi cam kết đầu việc rõ ràng, KPI thống nhất từ đầu và báo cáo minh bạch.",
  },
  Ou = ({ className: e = "" }) =>
    t.jsxs("div", {
      className: e,
      children: [
        [
          { label: "Tầm nhìn", icon: fr, text: Ie.visionShort },
          { label: "Sứ mệnh", icon: br, text: Ie.purposeShort },
        ].map((n) =>
          t.jsxs(
            "div",
            {
              className:
                "grid gap-3 border-t border-slate-200 py-8 dark:border-white/10 md:grid-cols-[180px_1fr] md:gap-10 md:py-12",
              children: [
                t.jsxs("p", {
                  className:
                    "flex items-center gap-2 pt-2 text-xs font-bold uppercase tracking-[0.22em] text-primary",
                  children: [
                    t.jsx(n.icon, { className: "h-4 w-4" }),
                    " ",
                    n.label,
                  ],
                }),
                t.jsx(Ur, {
                  text: n.text,
                  className:
                    "text-balance text-3xl font-black leading-[1.15] tracking-[-0.03em] text-slate-950 dark:text-white sm:text-4xl sm:leading-[1.2] lg:text-5xl lg:leading-[1.18]",
                }),
              ],
            },
            n.label,
          ),
        ),
        t.jsxs("div", {
          className:
            "grid gap-3 border-t border-slate-200 pt-8 dark:border-white/10 md:grid-cols-[180px_1fr] md:gap-10 md:pt-12",
          children: [
            t.jsx("p", {
              className:
                "pt-1 text-xs font-bold uppercase tracking-[0.22em] text-primary",
              children: "Nhiệm vụ",
            }),
            t.jsx("ol", {
              className: "flex flex-wrap gap-2.5",
              children: Ie.missions.map((n, s) =>
                t.jsxs(
                  "li",
                  {
                    "data-motion": "card",
                    style: { "--motion-delay": `${s * 90}ms` },
                    title: n.text,
                    className:
                      "flex items-center gap-3 rounded-full border border-slate-200 bg-white py-2 pl-2 pr-5 text-sm font-bold text-slate-900 shadow-sm dark:border-white/10 dark:bg-white/[0.05] dark:text-white sm:text-base",
                    children: [
                      t.jsx("span", {
                        className:
                          "flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 font-mono text-xs text-white dark:bg-white dark:text-slate-950",
                        children: String(s + 1).padStart(2, "0"),
                      }),
                      n.title,
                    ],
                  },
                  n.title,
                ),
              ),
            }),
          ],
        }),
      ],
    }),
  Wu = ({ className: e = "", compact: n = !1 }) =>
    n
      ? t.jsx(Ou, { className: e })
      : t.jsxs("div", {
          className: e,
          children: [
            t.jsxs("div", {
              className: "grid gap-4 lg:grid-cols-2",
              children: [
                t.jsxs("article", {
                  className:
                    "relative overflow-hidden rounded-[14px] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.045] sm:p-8",
                  children: [
                    t.jsxs("div", {
                      className: "flex items-center gap-3 text-primary",
                      children: [
                        t.jsx(fr, { className: "h-5 w-5" }),
                        t.jsx("p", {
                          className:
                            "text-xs font-bold uppercase tracking-[0.22em]",
                          children: "Tầm nhìn",
                        }),
                      ],
                    }),
                    t.jsx("p", {
                      className:
                        "mt-4 text-balance text-lg font-semibold leading-8 text-slate-900 dark:text-white sm:text-xl sm:leading-9",
                      children: Ie.vision,
                    }),
                  ],
                }),
                t.jsxs("article", {
                  className:
                    "relative overflow-hidden rounded-[14px] bg-slate-950 p-6 text-white shadow-xl shadow-slate-900/15 sm:p-8",
                  children: [
                    t.jsx("div", {
                      className:
                        "pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/30 blur-[100px]",
                    }),
                    t.jsxs("div", {
                      className:
                        "relative flex items-center gap-3 text-cyan-300",
                      children: [
                        t.jsx(br, { className: "h-5 w-5" }),
                        t.jsx("p", {
                          className:
                            "text-xs font-bold uppercase tracking-[0.22em]",
                          children: "Sứ mệnh",
                        }),
                      ],
                    }),
                    t.jsx("p", {
                      className:
                        "relative mt-4 text-balance text-lg font-semibold leading-8 sm:text-xl sm:leading-9",
                      children: Ie.purpose,
                    }),
                  ],
                }),
              ],
            }),
            t.jsxs("div", {
              className:
                "mt-4 rounded-[14px] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.045] sm:p-8",
              children: [
                t.jsx("p", {
                  className:
                    "text-xs font-bold uppercase tracking-[0.22em] text-primary",
                  children: "Nhiệm vụ",
                }),
                t.jsx("ol", {
                  className:
                    "mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6",
                  children: Ie.missions.map((s, i) =>
                    t.jsxs(
                      "li",
                      {
                        className:
                          "border-t-2 border-slate-900 pt-4 dark:border-white",
                        children: [
                          t.jsx("span", {
                            className:
                              "font-mono text-sm font-bold text-slate-400 dark:text-white/40",
                            children: String(i + 1).padStart(2, "0"),
                          }),
                          t.jsx("h3", {
                            className:
                              "mt-1 text-base font-extrabold text-slate-900 dark:text-white",
                            children: s.title,
                          }),
                          t.jsx("p", {
                            className:
                              "mt-2 text-sm leading-6 text-slate-600 dark:text-white/55",
                            children: s.text,
                          }),
                        ],
                      },
                      s.title,
                    ),
                  ),
                }),
              ],
            }),
            t.jsxs("div", {
              className:
                "mt-4 flex flex-col gap-4 rounded-[14px] border border-primary/20 bg-primary/[0.07] p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between",
              children: [
                t.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    t.jsx(Gc, { className: "h-5 w-5 flex-none text-primary" }),
                    t.jsx("p", {
                      className:
                        "text-base font-extrabold text-slate-900 dark:text-white",
                      children: Ie.slogan,
                    }),
                  ],
                }),
                t.jsx("ul", {
                  className: "flex flex-wrap gap-2",
                  "aria-label": "Giá trị cốt lõi",
                  children: Ie.values.map((s) =>
                    t.jsx(
                      "li",
                      {
                        title: s.text,
                        className:
                          "rounded-full border border-slate-300 bg-white px-3.5 py-1.5 text-sm font-semibold text-slate-700 dark:border-white/15 dark:bg-white/[0.05] dark:text-white/75",
                        children: s.title,
                      },
                      s.title,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
  zu = [
    { icon: Yc, label: "Pháp nhân", value: Dt.legalName },
    {
      icon: va,
      label: "Liên hệ",
      value: site.phoneLabel,
      href: site.phoneHref,
    },
    {
      icon: vr,
      label: "Trụ sở · phục vụ",
      value: "Hà Nội · phục vụ toàn quốc",
    },
  ],
  Du = () =>
    t.jsxs("section", {
      id: "about",
      className:
        "relative scroll-mt-40 overflow-hidden bg-slate-50 py-10 transition-colors duration-500 dark:bg-[hsl(220_38%_7%)] md:scroll-mt-36 md:py-20 lg:py-24",
      children: [
        t.jsx("div", {
          className:
            "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent",
        }),
        t.jsx("div", {
          className:
            "absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:48px_48px] opacity-35",
        }),
        t.jsx("div", {
          className:
            "absolute left-0 top-20 h-80 w-80 rounded-full bg-primary/10 blur-[140px]",
        }),
        t.jsx("div", {
          className:
            "absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-[150px]",
        }),
        t.jsxs("div", {
          className: "container relative z-10 mx-auto px-4",
          children: [
            t.jsx("div", {
              className: "mb-6 lg:mb-8",
              children: t.jsxs("div", {
                className: "relative",
                children: [
                  t.jsx("span", {
                    "aria-hidden": "true",
                    className:
                      "pointer-events-none absolute -right-6 -top-6 -z-10 hidden h-24 w-24 md:block",
                    style: {
                      backgroundColor: "#d4ff3f",
                      borderBottomLeftRadius: "100%",
                    },
                  }),
                  t.jsx(Ve, {
                    index: "02",
                    eyebrow: "TẦM NHÌN · SỨ MỆNH · NHIỆM VỤ",
                    size: "lg",
                    lines: [
                      "Website là tài sản.",
                      "TDDTech giữ",
                      "nó sinh lời.",
                    ],
                    grey: "TDDTech giữ",
                    underline: "sinh lời",
                    className: "max-w-4xl",
                  }),
                  t.jsxs("div", {
                    className:
                      "mt-6 flex flex-col gap-4 md:mt-8 md:pl-[18%] sm:flex-row sm:items-center sm:gap-5",
                    children: [
                      t.jsx("p", {
                        className:
                          "min-w-0 max-w-md flex-1 border-l-2 border-slate-300 pl-4 text-sm leading-relaxed text-slate-600 dark:border-white/20 dark:text-white/65 md:pl-5 md:text-base",
                        children:
                          "Anh chị sở hữu 100%. TDDTech bảo vệ, giữ gìn và phát triển để website mang về khách hàng.",
                      }),
                      t.jsx(Im, {
                        className:
                          "h-32 w-32 flex-none self-start text-slate-500 dark:text-white/40 sm:h-40 sm:w-40 sm:self-center",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            t.jsx(Wu, { compact: !0, className: "mb-10 md:mb-16" }),
            t.jsx("dl", {
              className:
                "mb-12 grid gap-px overflow-hidden rounded-[14px] border border-slate-200 bg-slate-200 dark:border-white/10 dark:bg-white/10 md:mb-16 md:grid-cols-3",
              children: zu.map((e, n) =>
                t.jsxs(
                  "div",
                  {
                    "data-motion": "up",
                    style: { "--motion-delay": `${n * 90}ms` },
                    className:
                      "flex items-center gap-4 bg-white px-5 py-4 dark:bg-[hsl(220_38%_8%)]",
                    children: [
                      t.jsx(e.icon, {
                        className: "h-5 w-5 flex-none text-primary",
                      }),
                      t.jsxs("div", {
                        className: "min-w-0",
                        children: [
                          t.jsx("dt", {
                            className:
                              "text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-white/45",
                            children: e.label,
                          }),
                          t.jsx("dd", {
                            className:
                              "truncate text-sm font-bold text-slate-900 dark:text-white sm:text-base",
                            children: e.href
                              ? t.jsx("a", {
                                  href: e.href,
                                  className:
                                    "hover:text-primary hover:underline",
                                  children: e.value,
                                })
                              : e.value,
                          }),
                        ],
                      }),
                    ],
                  },
                  e.label,
                ),
              ),
            }),
            t.jsxs("div", {
              className: "mb-10 md:mb-14",
              children: [
                t.jsx("div", {
                  className:
                    "mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-end md:gap-4",
                  children: t.jsxs("div", {
                    children: [
                      t.jsx(Na, { children: "Đội ngũ phụ trách" }),
                      t.jsx("h3", {
                        className:
                          "mt-1 text-balance text-2xl font-bold text-slate-900 dark:text-white md:mt-2 md:text-3xl",
                        children: "Người đứng sau mỗi dự án",
                      }),
                    ],
                  }),
                }),
                t.jsxs(jo, {
                  opts: { align: "start", containScroll: "trimSnaps" },
                  className: "mx-auto max-w-5xl px-1 pb-11 sm:px-0 md:pb-0",
                  children: [
                    t.jsx(No, {
                      className: "-ml-3",
                      children: $u.map((e) =>
                        t.jsx(
                          To,
                          {
                            className:
                              "basis-[88%] pl-3 sm:basis-[72%] md:basis-1/2",
                            children: t.jsxs("article", {
                              className:
                                "surface-card group relative grid h-full grid-cols-[108px_1fr] gap-4 overflow-hidden rounded-[8px] border border-slate-200 bg-card p-4 shadow-md dark:border-white/10 sm:grid-cols-[128px_1fr]",
                              children: [
                                t.jsx("div", {
                                  className: `absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${e.accent}`,
                                }),
                                t.jsx("div", {
                                  className:
                                    "relative h-36 overflow-hidden rounded-[6px] bg-slate-100 dark:bg-[#252a32] sm:h-40",
                                  children: t.jsx("img", {
                                    src: e.image,
                                    alt: `${e.name} - ${e.role} TDDTech`,
                                    className: `h-full w-full transition-transform duration-500 group-hover:scale-[1.03] ${e.imageFit === "contain" ? "object-contain object-bottom px-1 pt-2" : "object-cover"}`,
                                    style: { objectPosition: e.imagePosition },
                                    loading: "lazy",
                                    decoding: "async",
                                  }),
                                }),
                                t.jsxs("div", {
                                  className: "min-w-0 py-1",
                                  children: [
                                    t.jsxs("div", {
                                      className: "mb-2 flex items-start gap-2",
                                      children: [
                                        t.jsx("div", {
                                          className:
                                            "mt-0.5 hidden h-9 w-9 flex-shrink-0 items-center justify-center rounded-[6px] border border-primary/25 bg-primary/10 sm:flex",
                                          children: t.jsx(Kc, {
                                            className: "h-4 w-4 text-primary",
                                          }),
                                        }),
                                        t.jsxs("div", {
                                          className: "min-w-0",
                                          children: [
                                            t.jsx("h4", {
                                              className:
                                                "text-base font-extrabold leading-tight text-slate-900 dark:text-white sm:text-lg",
                                              children: e.name,
                                            }),
                                            t.jsx("p", {
                                              className:
                                                "mt-1 text-xs font-semibold leading-snug text-primary sm:text-sm",
                                              children: e.role,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    t.jsx("p", {
                                      className:
                                        "text-sm leading-relaxed text-slate-600 dark:text-white/60 sm:text-base",
                                      children: e.short,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          e.id,
                        ),
                      ),
                    }),
                    t.jsx(So, {
                      className:
                        "-bottom-1 left-[calc(50%-2.5rem)] top-auto translate-y-0 border-slate-200 bg-white text-slate-700 hover:border-primary hover:text-primary dark:border-white/15 dark:bg-white/5 dark:text-white disabled:opacity-30 md:hidden",
                    }),
                    t.jsx(qo, {
                      className:
                        "-bottom-1 left-[calc(50%+0.5rem)] right-auto top-auto translate-y-0 border-slate-200 bg-white text-slate-700 hover:border-primary hover:text-primary dark:border-white/15 dark:bg-white/5 dark:text-white disabled:opacity-30 md:hidden",
                    }),
                  ],
                }),
                t.jsx(Iu, {}),
              ],
            }),
            t.jsx("div", {
              className: "mt-8 flex justify-center md:mt-10",
              children: t.jsxs("a", {
                href: "/ho-so-nang-luc",
                className:
                  "inline-flex items-center gap-2 border-b-2 border-slate-900 pb-1.5 text-sm font-bold text-slate-900 transition-colors hover:border-primary hover:text-primary dark:border-white dark:text-white",
                children: [
                  "Xem hồ sơ năng lực và cách triển khai ",
                  t.jsx("span", { "aria-hidden": "true", children: "→" }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  Hu = {
    up: "translateY(34px)",
    left: "translateX(-34px)",
    right: "translateX(34px)",
  },
  Bu = ({ children: e, index: n = 0, from: s = "up", className: i = "" }) => {
    const a = Zt(),
      o = f.useRef(null),
      [r, l] = f.useState(!1),
      [c, h] = f.useState(!1);
    f.useEffect(() => {
      const d = o.current;
      if (!d || r) return;
      if (typeof IntersectionObserver > "u") {
        (l(!0), h(!0));
        return;
      }
      const m = new IntersectionObserver(
        (u) => {
          u.some((x) => x.isIntersecting) &&
            (l(!0), m.disconnect(), A.reveal(d, "card", Math.min(n * 70, 420)));
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
      );
      return (m.observe(d), () => m.disconnect());
    }, [r, n]);
    const g = a ? 0.2 : 0.6,
      p = a ? 0 : Math.min(n * 0.07, 0.42);
    return t.jsx("div", {
      ref: o,
      className: i,
      onTransitionEnd: () => h(!0),
      style: {
        opacity: r ? 1 : 0,
        transform: r || a ? "none" : Hu[s],
        transition: `opacity ${g}s cubic-bezier(0.22, 1, 0.36, 1) ${p}s, transform ${g}s cubic-bezier(0.22, 1, 0.36, 1) ${p}s`,
        willChange: c || a ? void 0 : "transform, opacity",
      },
      children: e,
    });
  },
  ns = [
    {
      question: "Vì sao TDDTech nói website là tài sản chứ không phải chi phí?",
      answer:
        "Vì website đứng tên doanh nghiệp, làm việc 24/7 và có thể mang về khách hàng mỗi tháng — giống một tài sản sinh lời. Nhưng tài sản không được chăm sẽ xuống cấp: chậm dần, nội dung cũ, không ai trả lời khách. TDDTech xây đúng nền móng, anh chị sở hữu 100%, rồi bảo vệ, giữ gìn và phát triển để nó tiếp tục sinh lời.",
    },
    {
      question: "TDDTech tập trung làm những gì?",
      answer:
        "Trọng tâm là website doanh nghiệp và website bán hàng cho chủ doanh nghiệp vừa và nhỏ, kèm vận hành hằng tháng. Khi doanh nghiệp cần mở rộng, TDDTech phát triển thêm web app nghiệp vụ như quản lý đơn hàng, đặt lịch, phân quyền.",
    },
    {
      question: "Làm website hết bao nhiêu tiền? Có bao gồm hosting không?",
      answer: siteText(
        "TDDTech không niêm yết một con số chung. Chi phí gồm Gói Setup (xây nền móng, một lần) và gói vận hành hằng tháng nếu anh chị cần, được báo riêng sau khi hiểu mục tiêu và hiện trạng. Báo giá tách rõ phần triển khai và chi phí bên thứ ba như tên miền, hosting. Nhắn Zalo {{phone}} để nhận báo giá.",
      ),
    },
    {
      question: "Gói vận hành hằng tháng gồm những gì?",
      answer:
        "Có ba mức: Basic giữ gìn tài sản (hosting, tên miền, sao lưu, theo dõi, cập nhật nội dung, báo cáo tháng), Growth phát triển tài sản (thêm nội dung và SEO tăng trưởng, tối ưu chuyển đổi, landing chiến dịch) và Performance tăng trưởng doanh thu (thêm vận hành quảng cáo, kết nối CRM, KPI và báo cáo tuần). Gói vận hành không bắt buộc — website vẫn là của anh chị.",
    },
    {
      question: "TDDTech có cam kết doanh thu không?",
      answer:
        "Không cam kết một con số doanh thu, vì doanh thu còn phụ thuộc sản phẩm, giá bán và đội ngũ chốt đơn của doanh nghiệp. TDDTech cam kết đầu việc rõ ràng, KPI thống nhất từ đầu và báo cáo minh bạch bằng số liệu thật.",
    },
    {
      question: "Làm website mất bao lâu? Quy trình như thế nào?",
      answer:
        "Tiến độ phụ thuộc phạm vi và thời gian phản hồi nội dung, duyệt thiết kế, tích hợp. Các mốc cùng đầu ra từng giai đoạn được ghi trong đề xuất trước khi bắt đầu.",
    },
    {
      question: "TDDTech có làm web app quản lý theo yêu cầu không?",
      answer:
        "Có. TDDTech phát triển dashboard, quản lý đơn hàng, đặt lịch, phân quyền và workflow nội bộ. Trước khi báo giá, hai bên làm rõ vai trò người dùng, dữ liệu và các bước nghiệp vụ cần hỗ trợ.",
    },
    {
      question:
        "Website có được tối ưu SEO không? Chạy Google Ads có hiệu quả không?",
      answer:
        "Phạm vi SEO kỹ thuật được ghi trong từng báo giá. Việc lên thứ hạng hoặc hiệu quả quảng cáo còn phụ thuộc nội dung, mức cạnh tranh, ngân sách và cách vận hành sau khi website bàn giao.",
    },
    {
      question: "Sau khi bàn giao website, nếu có lỗi thì sao?",
      answer:
        "TDDTech có hai tầng bảo hành: chỉnh sửa miễn phí trong phạm vi đã nghiệm thu suốt 5 năm (60 tháng), và bảo hành trọn đời với lỗi do TDDTech gây ra. Yêu cầu mở rộng hoặc thay đổi ngoài phạm vi sẽ được đánh giá và báo chi phí trước khi thực hiện.",
    },
    {
      question: "Kinh nghiệm của nhà sáng lập có từ khi nào?",
      answer:
        "Nhà sáng lập có hơn 4 năm kinh nghiệm làm việc và vận hành tại các tập đoàn lớn, công ty nước ngoài trước khi thành lập TDDTech. Đây là kinh nghiệm cá nhân, tách biệt với thời gian hoạt động của công ty.",
    },
    {
      question: "Liên hệ TDDTech bằng cách nào nhanh nhất?",
      answer: siteText(
        "Nhắn Zalo số {{phone}} là kênh tư vấn nhanh nhất. Anh/chị cũng có thể gọi cùng số hoặc gửi email tới {{email}}.",
      ),
    },
  ],
  Vu = () => {
    const [e, n] = f.useState(null),
      [s, i] = f.useState(!1),
      a = s ? ns : ns.slice(0, 6),
      o = Zt(),
      r = (l) => {
        n(e === l ? null : l);
      };
    return t.jsxs("section", {
      id: "faq",
      className: "relative overflow-hidden py-10 md:py-16 lg:py-20",
      children: [
        t.jsxs("div", {
          className: "absolute inset-0 z-0",
          children: [
            t.jsx("img", {
              src: "/bg/office-night.webp",
              alt: "",
              loading: "lazy",
              decoding: "async",
              className: "h-full w-full object-cover",
            }),
            t.jsx("div", {
              className:
                "absolute inset-0 bg-slate-50/90 dark:bg-black/70 transition-colors duration-500",
            }),
          ],
        }),
        t.jsx("span", {
          "aria-hidden": "true",
          className:
            "pointer-events-none absolute right-6 top-10 hidden h-16 w-16 items-center justify-center rounded-full border border-slate-300 dark:border-white/20 sm:flex",
          children: t.jsx("span", {
            className: "h-1.5 w-1.5 rounded-full bg-slate-900 dark:bg-white",
          }),
        }),
        t.jsxs("div", {
          className: "container mx-auto px-4 relative z-10",
          children: [
            t.jsxs("div", {
              className: "grid items-start gap-10 lg:grid-cols-12 lg:gap-12",
              children: [
                t.jsxs("div", {
                  className: "lg:col-span-5 lg:sticky lg:top-24",
                  children: [
                    t.jsx(Ve, {
                      index: "07",
                      eyebrow: "CÂU HỎI THƯỜNG GẶP",
                      size: "lg",
                      lines: ["Giải đáp", "nhanh mọi", "thắc mắc"],
                      grey: "nhanh",
                      underline: "thắc mắc",
                    }),
                    t.jsx("div", {
                      className:
                        "mt-7 border-l-2 border-slate-900 pl-5 dark:border-white/25 md:mt-8",
                      children: t.jsx(Ea, {
                        text: "Giải đáp nhanh những thắc mắc phổ biến về thiết kế website, website bán hàng và web app theo yêu cầu",
                        className:
                          "max-w-sm text-base text-slate-600 dark:text-gray-400 md:text-lg",
                      }),
                    }),
                    t.jsx(Am, {
                      className:
                        "mt-6 hidden h-36 w-36 text-slate-500 dark:text-white/40 sm:block md:mt-8 md:h-44 md:w-44",
                    }),
                  ],
                }),
                t.jsxs("div", {
                  className: "space-y-4 lg:col-span-7",
                  children: [
                    a.map((l, c) =>
                      t.jsx(
                        Bu,
                        {
                          index: c % 6,
                          children: t.jsxs("div", {
                            className:
                              "surface-card bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-md dark:bg-secondary/30 dark:border-primary/10 dark:hover:border-primary/30 transition-all",
                            children: [
                              t.jsxs("button", {
                                id: `faq-trigger-${c}`,
                                onClick: () => r(c),
                                "aria-expanded": e === c,
                                "aria-controls": `faq-panel-${c}`,
                                className:
                                  "flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-sky-50/50 dark:hover:bg-primary/5 md:p-6",
                                children: [
                                  t.jsx("span", {
                                    className:
                                      "pr-4 text-sm font-semibold text-slate-900 dark:text-white md:text-base",
                                    children: l.question,
                                  }),
                                  t.jsx(Qc, {
                                    className: `h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ease-out ${e === c ? "rotate-180" : ""}`,
                                  }),
                                ],
                              }),
                              t.jsx(fe, {
                                initial: !1,
                                children:
                                  e === c &&
                                  t.jsx(q.div, {
                                    id: `faq-panel-${c}`,
                                    role: "region",
                                    "aria-labelledby": `faq-trigger-${c}`,
                                    initial: { height: 0, opacity: 0 },
                                    animate: { height: "auto", opacity: 1 },
                                    exit: { height: 0, opacity: 0 },
                                    transition: {
                                      height: {
                                        duration: o ? 0 : 0.28,
                                        ease: [0.22, 1, 0.36, 1],
                                      },
                                      opacity: { duration: o ? 0 : 0.18 },
                                    },
                                    className: "overflow-hidden",
                                    children: t.jsx("div", {
                                      className:
                                        "border-t border-slate-100 px-4 pb-4 pt-3 text-sm leading-relaxed text-slate-600 dark:border-primary/10 dark:text-gray-400 md:px-6 md:pb-6 md:pt-4 md:text-base",
                                      children: l.answer,
                                    }),
                                  }),
                              }),
                            ],
                          }),
                        },
                        c,
                      ),
                    ),
                    !s &&
                      ns.length > 6 &&
                      t.jsxs("button", {
                        type: "button",
                        onClick: () => i(!0),
                        className:
                          "w-full rounded-xl border border-dashed border-slate-300 py-3.5 text-sm font-bold text-slate-700 transition-colors hover:border-primary hover:text-primary dark:border-white/15 dark:text-white/70",
                        children: ["Xem thêm ", ns.length - 6, " câu hỏi"],
                      }),
                  ],
                }),
              ],
            }),
            t.jsxs("div", {
              className: "mt-10 text-center md:mt-14",
              children: [t.jsx("p", {
                  className:
                    "mb-3 text-sm text-slate-600 dark:text-gray-400 md:mb-4 md:text-base",
                  children: "Còn thắc mắc? Nhắn Zalo để được tư vấn miễn phí",
                }),
t.jsxs(ContactChannelPair,{children:[t.jsxs("a", {
                  href: site.zaloHref,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "mx-1 mt-3 inline-flex h-12 w-60 max-w-full items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all shadow-md",
                  children: [
                    t.jsx("img", {
                      src: "/zalo-icon.png",
                      alt: "",
                      className: "h-5 w-5 rounded-sm",
                    }),
                    "Nhắn Zalo",
                  ],
                }),t.jsx(FacebookContactLink,{variant:"faq",className:"mx-1 mt-3 inline-flex h-12 w-60 max-w-full items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all shadow-md"})]})],
            }),
          ],
        }),
      ],
    });
  },
  Xu = () =>
    t.jsxs("section", {
      id: "contact-section",
      className: "relative overflow-hidden py-10 md:py-24",
      children: [
        t.jsxs("div", {
          className: "absolute inset-0 z-0",
          children: [
            t.jsx("img", {
              src: "/bg/contact-bg.webp",
              alt: "",
              loading: "lazy",
              decoding: "async",
              className: "h-full w-full object-cover",
            }),
            t.jsx("div", {
              className:
                "absolute inset-0 bg-slate-50/90 dark:bg-black/75 transition-colors duration-500",
            }),
          ],
        }),
        t.jsx("span", {
          "aria-hidden": "true",
          className:
            "pointer-events-none absolute right-0 top-0 hidden h-20 w-20 sm:block",
          style: { backgroundColor: "#d4ff3f", borderBottomLeftRadius: "100%" },
        }),
        t.jsxs("div", {
          className: "container relative z-10 mx-auto px-4",
          children: [
            t.jsxs("div", {
              className:
                "mb-7 grid grid-cols-1 items-end gap-6 md:mb-12 md:grid-cols-12 md:gap-10",
              children: [
                t.jsx(Ve, {
                  index: "09",
                  eyebrow: "LIÊN HỆ",
                  size: "lg",
                  lines: ["Trao đổi dự án", "website &", "web app"],
                  grey: ["website &"],
                  underline: "TDDTech",
                  className: "md:col-span-7",
                }),
                t.jsxs("div", {
                  className:
                    "flex flex-col gap-4 md:col-span-5 md:border-l md:border-slate-300 md:pl-6 md:dark:border-white/15 sm:flex-row sm:items-center sm:gap-5",
                  children: [
                    t.jsx("p", {
                      className:
                        "min-w-0 max-w-sm flex-1 text-base text-slate-600 dark:text-gray-400 md:text-lg",
                      children: "Một tin nhắn là đủ để bắt đầu.",
                    }),
                    t.jsx($m, {
                      className:
                        "h-32 w-32 flex-none self-start text-slate-500 dark:text-white/40 sm:h-40 sm:w-40 sm:self-center",
                    }),
                  ],
                }),
              ],
            }),
            t.jsxs("div", {
              "data-motion": "card",
              className:
                "relative mx-auto max-w-5xl overflow-hidden rounded-[22px] bg-slate-950 px-6 py-10 text-white shadow-2xl shadow-slate-900/20 sm:px-10 md:px-14 md:py-14",
              children: [
                t.jsx("div", {
                  className:
                    "pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/30 blur-[120px]",
                }),
                t.jsxs("div", {
                  className:
                    "relative grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end",
                  children: [
                    t.jsxs("div", {
                      children: [
                        t.jsx("p", {
                          className:
                            "text-xs font-bold uppercase tracking-[0.22em] text-cyan-300",
                          children: "Bắt đầu trong 5 phút",
                        }),
                        t.jsx("h3", {
                          className:
                            "mt-3 text-balance text-3xl font-black leading-[1.15] tracking-[-0.02em] md:text-5xl md:leading-[1.1]",
                          children:
                            "Gửi website hiện tại hoặc ý tưởng của anh chị.",
                        }),
                        t.jsx("p", {
                          className:
                            "mt-4 max-w-md text-sm leading-7 text-white/60 md:text-base",
                          children:
                            "TDDTech xem trước, rồi đề xuất hướng làm và báo giá riêng.",
                        }),
                      ],
                    }),
                    t.jsxs("div", {
                      className: "flex flex-col gap-3 flex-wrap",
                      children: [t.jsxs(ContactChannelPair,{children:[t.jsxs("a", {
                          href: site.zaloHref,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5",
                          children: [
                            t.jsx("img", {
                              src: "/zalo-icon.png",
                              alt: "",
                              className: "h-6 w-6 rounded-sm",
                            }),
                            " Trao đổi qua Zalo",
                          ],
                        }),t.jsx(FacebookContactLink,{variant:"button",label:"Trao đổi qua Facebook",className:"inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"})]}),
t.jsxs("a", {
                          href: site.phoneHref,
                          className:
                            "inline-flex h-14 items-center justify-center gap-2.5 rounded-full border border-white/20 px-6 text-base font-bold text-white transition-colors hover:bg-white/10",
                          children: [
                            t.jsx(wr, { className: "h-4 w-4" }),
                            siteText(" Gọi {{phone}}"),
                          ],
                        })],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  Fu = ({ careers: e = !1 }) => {
    const n = [
        { label: "Thiết kế Website", href: "/thiet-ke-website" },
        {
          label: "Website doanh nghiệp",
          href: "/thiet-ke-website-doanh-nghiep",
        },
        { label: "Website bán hàng", href: "/thiet-ke-website-ban-hang" },
        { label: "Landing Page", href: "/thiet-ke-landing-page" },
        { label: "Web App Custom", href: "/lap-trinh-web-app" },
        { label: "SEO Website", href: "/dich-vu-seo-website" },
      ],
      s = [{ label: "Giới thiệu", href: "/gioi-thieu" },
{ label: "Hồ sơ năng lực", href: "/ho-so-nang-luc" },
{ label: "Dự án tiêu biểu", href: "/du-an" },
{ label: "Blog", href: "/blog" },
{ label: "Bảng giá", href: "/bang-gia-thiet-ke-website" },
{ label: "Quy trình", href: "/quy-trinh-thiet-ke-website" },
{ label: "Bảo hành & bàn giao", href: "/bao-hanh-bao-tri-website" },
{ label: "Liên hệ", href: "/lien-he" }];
    if (e)
      return t.jsx("footer", {
        className:
          "border-t border-slate-200 bg-white text-slate-900 transition-colors duration-500 dark:border-white/[0.07] dark:bg-[hsl(220_40%_5%)] dark:text-white",
        children: t.jsxs("div", {
          className:
            "container mx-auto flex flex-col items-center justify-between gap-5 px-4 py-8 sm:flex-row",
          children: [
            t.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                t.jsx("img", {
                  src: "/brand/logo-light.png",
                  alt: "TDDTech",
                  width: "40",
                  height: "40",
                  className: "h-9 w-auto block dark:hidden",
                  loading: "lazy",
                }),
                t.jsx("img", {
                  src: "/brand/logo-dark.png",
                  alt: "TDDTech",
                  width: "256",
                  height: "256",
                  className: "h-10 w-auto hidden dark:block",
                  loading: "lazy",
                }),
                t.jsx("p", {
                  className: "text-sm text-slate-500 dark:text-white/50",
                  children: "© 2026 TDDTech. All rights reserved.",
                }),
              ],
            }),
            t.jsxs("nav", {
              className:
                "flex flex-wrap items-center justify-center gap-5 text-sm font-semibold text-slate-600 dark:text-white/55",
              "aria-label": "Liên kết cuối trang",
              children: [t.jsx("a", {
                  href: "/",
                  className: "transition-colors hover:text-primary",
                  children: "Trang chủ",
                }),
t.jsx("a", {
                  href: "/gioi-thieu",
                  className: "transition-colors hover:text-primary",
                  children: "Giới thiệu",
                }),
t.jsx("a", {
                  href: "/privacy-policy",
                  className: "transition-colors hover:text-primary",
                  children: "Chính sách bảo mật",
                }),
t.jsx("a", {
                  href: site.zaloHref,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-primary transition-colors hover:underline",
                  children: "Zalo",
                }),
t.jsx(FacebookContactLink, { variant: "inline" })],
            }),
          ],
        }),
      });
    const i = Ir.map((a) => ({
      label: a.label,
      href: a.href,
      icon: a.icon("h-5 w-5"),
    }));
    return t.jsxs("footer", {
      id: "contact",
      className: "relative overflow-hidden bg-[#05080f] text-white",
      children: [
        t.jsx("div", {
          className:
            "h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent",
        }),
        t.jsx("div", {
          className: "container mx-auto px-4 pt-16 md:pt-24",
          children: t.jsxs("div", {
            className:
              "grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1.2fr] md:gap-10",
            children: [
              t.jsxs("div", {
                "data-motion": "up",
                children: [
                  t.jsx("img", {
                    src: "/brand/logo-dark.png",
                    alt: "TDDTech",
                    width: "256",
                    height: "256",
                    className: "h-16 w-auto md:h-20",
                    loading: "lazy",
                  }),
                  t.jsx("p", {
                    className:
                      "mt-5 max-w-xs text-xl font-bold leading-snug text-white",
                    children: Ie.slogan,
                  }),
                  t.jsx("div", {
                    className: "mt-6 flex flex-wrap gap-2.5",
                    children: i.map((a) =>
                      t.jsx(
                        "a",
                        {
                          href: a.href,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          "aria-label": a.label,
                          className:
                            "flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white",
                          children: a.icon,
                        },
                        a.label,
                      ),
                    ),
                  }),
                ],
              }),
              t.jsxs("nav", {
                "data-motion": "up",
                style: { "--motion-delay": "80ms" },
                "aria-label": "Dịch vụ",
                children: [
                  t.jsx("p", {
                    className:
                      "text-xs font-bold uppercase tracking-[0.22em] text-primary",
                    children: "Dịch vụ",
                  }),
                  t.jsx("ul", {
                    className: "mt-5 space-y-3",
                    children: n.map((a) =>
                      t.jsx(
                        "li",
                        {
                          children: t.jsx("a", {
                            href: a.href,
                            className:
                              "text-base text-white/70 transition-colors hover:text-white",
                            children: a.label,
                          }),
                        },
                        a.href,
                      ),
                    ),
                  }),
                ],
              }),
              t.jsxs("nav", {
                "data-motion": "up",
                style: { "--motion-delay": "160ms" },
                "aria-label": "Công ty",
                children: [
                  t.jsx("p", {
                    className:
                      "text-xs font-bold uppercase tracking-[0.22em] text-primary",
                    children: "Công ty",
                  }),
                  t.jsx("ul", {
                    className:
                      "mt-5 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1",
                    children: s.map((a) =>
                      t.jsx(
                        "li",
                        {
                          children: t.jsx("a", {
                            href: a.href,
                            className:
                              "text-base text-white/70 transition-colors hover:text-white",
                            children: a.label,
                          }),
                        },
                        a.href,
                      ),
                    ),
                  }),
                ],
              }),
              t.jsxs("div", {
                "data-motion": "up",
                style: { "--motion-delay": "240ms" },
                children: [
                  t.jsx("p", {
                    className:
                      "text-xs font-bold uppercase tracking-[0.22em] text-primary",
                    children: "Liên hệ",
                  }),
                  t.jsxs("ul", {
                    className: "mt-5 space-y-4 text-base",
                    children: [t.jsx("li", {
                        children: t.jsxs("a", {
                          href: site.zaloHref,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "flex items-center gap-3 font-bold text-white hover:text-primary",
                          children: [
                            t.jsx("img", {
                              src: "/zalo-icon.png",
                              alt: "",
                              className: "h-5 w-5 rounded",
                            }),
                            siteText("Zalo {{phone}}"),
                          ],
                        }),
                      }),
t.jsx("li", {
                        children: t.jsx(FacebookContactLink, {
                          variant: "inline",
                        }),
                      }),
t.jsx("li", {
                        children: t.jsxs("a", {
                          href: site.phoneHref,
                          className:
                            "flex items-center gap-3 text-white/75 hover:text-white",
                          children: [
                            t.jsx(wr, { className: "h-4 w-4 text-primary" }),
                            siteText("{{phone}}"),
                          ],
                        }),
                      }),
t.jsx("li", {
                        children: t.jsxs("a", {
                          href: site.emailHref,
                          className:
                            "flex items-center gap-3 break-all text-white/75 hover:text-white",
                          children: [
                            t.jsx(Zc, {
                              className: "h-4 w-4 flex-none text-primary",
                            }),
                            Dt.email,
                          ],
                        }),
                      }),
t.jsxs("li", {
                        className: "flex items-start gap-3 text-white/60",
                        children: [
                          t.jsx(vr, {
                            className: "mt-1 h-4 w-4 flex-none text-primary",
                          }),
                          Dt.shortAddress,
                          " · phục vụ toàn quốc",
                        ],
                      })],
                  }),
                ],
              }),
            ],
          }),
        }),
        t.jsx(Gu, {}),
        t.jsx("div", {
          className: "border-t border-white/10",
          children: t.jsxs("div", {
            className:
              "container mx-auto flex flex-col gap-3 px-4 py-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between",
            children: [
              t.jsx(Copyright, {}),
              t.jsxs("div", {
                className: "flex gap-6",
                children: [
                  t.jsx("a", {
                    href: "/privacy-policy",
                    className: "hover:text-white",
                    children: "Chính sách bảo mật",
                  }),
                  t.jsx("a", {
                    href: "/terms",
                    className: "hover:text-white",
                    children: "Điều khoản sử dụng",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  Gu = () => {
    const e = "TDDTech".split("");
    return t.jsx("div", {
      "data-motion": "wordmark",
      "aria-hidden": "true",
      className:
        "footer-wordmark relative mt-14 select-none overflow-hidden px-2 md:mt-20",
      children: t.jsx("div", {
        className: "flex justify-center leading-[0.78]",
        children: e.map((n, s) =>
          t.jsx(
            "span",
            {
              className: "fw-letter",
              style: { "--i": s },
              children: t.jsxs("span", {
                className: "fw-lift",
                children: [
                  t.jsx("span", { className: "fw-outline", children: n }),
                  t.jsx("span", { className: "fw-fill", children: n }),
                ],
              }),
            },
            s,
          ),
        ),
      }),
    });
  },
  Ai = [
    {
      label: "Chọn gói phù hợp",
      prompt:
        "Hãy hỏi tôi vài câu rồi tư vấn gói Setup và gói vận hành phù hợp.",
    },
    {
      label: "Website là tài sản?",
      prompt: "Vì sao TDDTech nói website là tài sản chứ không phải chi phí?",
    },
    {
      label: "Website bán hàng",
      prompt:
        "Tôi muốn làm website bán hàng, cần chuẩn bị gì và làm sao để nhận báo giá?",
    },
    {
      label: "Web App",
      prompt: "TDDTech có thể làm những loại web app quản lý nào?",
    },
    {
      label: "SEO Google",
      prompt:
        "Website mới cần làm gì để Google nhận diện và có cơ hội lên top?",
    },
    {
      label: "Bàn giao & bảo hành",
      prompt:
        "Quyền lợi bàn giao source code và bảo hành 5 năm cụ thể thế nào?",
    },
    {
      label: "Xem dự án",
      prompt: "Cho tôi xem các dự án tiêu biểu của TDDTech.",
    },
    {
      label: "Mẫu theo ngành",
      prompt:
        "Cho tôi xem các website mẫu tham khảo phù hợp với ngành của tôi.",
    },
    {
      label: "Thời gian triển khai",
      prompt: "Mỗi loại website thường mất bao lâu để hoàn thành?",
    },
  ],
  ss = () =>
    zt(
      () => import("./chatbotKnowledge-CK2UAvVi.js"),
      __vite__mapDeps([2, 3, 4, 5, 6, 7]),
    ),
  $i =
    "Dạ em chào anh/chị. Em là trợ lý của TDDTech — bên em xây website doanh nghiệp, website bán hàng và vận hành hằng tháng để website mang về khách hàng.\n\nAnh/chị đang kinh doanh ngành gì và muốn website làm được việc gì? Nếu cần báo giá, em sẽ hỏi thêm vài thông tin rồi chuyển người tư vấn qua Zalo ạ.",
  Ku = () => {
    try {
      const e = new (window.AudioContext || window.webkitAudioContext)(),
        n = e.createOscillator(),
        s = e.createGain();
      (n.connect(s),
        s.connect(e.destination),
        (n.type = "sine"),
        n.frequency.setValueAtTime(880, e.currentTime),
        n.frequency.setValueAtTime(1100, e.currentTime + 0.08),
        s.gain.setValueAtTime(0.15, e.currentTime),
        s.gain.exponentialRampToValueAtTime(0.01, e.currentTime + 0.3),
        n.start(e.currentTime),
        n.stop(e.currentTime + 0.3),
        (n.onended = () => e.close()));
    } catch {}
  },
  Pi = (e) => {
    var r;
    const n = [],
      s =
        /(\*\*(.+?)\*\*|\[(.+?)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s<]+))/g;
    let i = 0,
      a,
      o = 0;
    for (; (a = s.exec(e)) !== null;) {
      if (
        (a.index > i &&
          n.push(t.jsx("span", { children: e.slice(i, a.index) }, o++)),
        a[2])
      )
        n.push(
          t.jsx(
            "strong",
            { className: "font-extrabold text-current", children: a[2] },
            o++,
          ),
        );
      else if (a[3] && a[4])
        n.push(
          t.jsxs(
            "a",
            {
              href: a[4],
              target: "_blank",
              rel: "noreferrer",
              className:
                "inline-flex items-center gap-1 font-bold text-primary underline decoration-primary/40 underline-offset-4 hover:text-cyan-300",
              children: [a[3], " ", t.jsx(fs, { className: "h-3 w-3" })],
            },
            o++,
          ),
        );
      else if (a[5]) {
        const l =
            ((r = a[5].match(/[.,;:!?]+$/)) == null ? void 0 : r[0]) ?? "",
          c = l ? a[5].slice(0, -l.length) : a[5];
        (n.push(
          t.jsxs(
            "a",
            {
              href: c,
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "inline-flex max-w-full items-center gap-1 break-all font-bold text-primary underline decoration-primary/40 underline-offset-4 hover:text-cyan-300",
              children: [c, " ", t.jsx(fs, { className: "h-3 w-3 flex-none" })],
            },
            o++,
          ),
        ),
          l && n.push(t.jsx("span", { children: l }, o++)));
      }
      i = a.index + a[0].length;
    }
    return (
      i < e.length && n.push(t.jsx("span", { children: e.slice(i) }, o++)),
      n.length ? n : e
    );
  },
  Ri = ({ text: e }) =>
    t.jsx("div", {
      className: "space-y-2 text-sm leading-7 md:text-[15px]",
      children: e
        .split(
          `
`,
        )
        .map((n, s) => {
          if (!n.trim()) return t.jsx("div", { className: "h-1" }, s);
          const i = n.match(/^\s*[-*]\s+(.+)/);
          return i
            ? t.jsxs(
                "div",
                {
                  className: "flex gap-2.5",
                  children: [
                    t.jsx(dr, {
                      className: "mt-1.5 h-4 w-4 flex-none text-primary",
                    }),
                    t.jsx("p", { children: Pi(i[1]) }),
                  ],
                },
                s,
              )
            : t.jsx("p", { children: Pi(n) }, s);
        }),
    }),
  Ii = () =>
    t.jsxs("div", {
      className: "flex items-center gap-3 text-sm text-white/50",
      children: [
        t.jsx("div", {
          className: "flex gap-1",
          children: [0, 1, 2].map((e) =>
            t.jsx(
              q.span,
              {
                className: "h-2 w-2 rounded-full bg-primary",
                animate: { y: [0, -5, 0], opacity: [0.35, 1, 0.35] },
                transition: { duration: 0.9, repeat: 1 / 0, delay: e * 0.14 },
              },
              e,
            ),
          ),
        }),
        "Đang phân tích yêu cầu...",
      ],
    }),
  Yu = ({ variant: e = "floating" }) => {
    var j, k;
    const [n, s] = f.useState(e === "section"),
      [i, a] = f.useState([
        { text: $i, role: "assistant", timestamp: new Date() },
      ]),
      [o, r] = f.useState(""),
      [l, c] = f.useState(!1),
      [h, g] = f.useState(!1),
      p = f.useRef(null),
      d = f.useRef(null),
      m = f.useRef(!1),
      u = e === "section",
      x = f.useMemo(
        () => i.slice(-10).map((b) => ({ role: b.role, content: b.text })),
        [i],
      );
    f.useEffect(() => {
      if (u && !h) return;
      const b = p.current;
      b && (b.scrollTop = b.scrollHeight);
    }, [i, l, u, h]);
    const v = () => {
        (a([{ text: $i, role: "assistant", timestamp: new Date() }]),
          r(""),
          g(!1),
          window.setTimeout(() => {
            var b;
            return (b = d.current) == null ? void 0 : b.focus();
          }, 50));
      },
      w = async (b) => {
        const S = (b ?? o).trim();
        if (!S || l) return;
        h || g(!0);
        const E = { text: S, role: "user", timestamp: new Date() };
        ([...x], a((_) => [..._, E]), r(""), c(!0));
        const {
          chatbotSystemPrompt: L,
          getLocalChatbotAnswer: T,
          shouldUseLocalChatbotAnswer: C,
        } = await ss();
        {
          (await new Promise((_) => window.setTimeout(_, 550)),
            a((_) => [
              ..._,
              { text: T(S), role: "assistant", timestamp: new Date() },
            ]),
            c(!1),
            Ku());
          return;
        }
      },
      y = (b) => {
        (b.preventDefault(), w());
      };
    if (u)
      return t.jsxs("section", {
        id: "ai-advisor",
        className:
          "relative overflow-hidden bg-slate-50 transition-colors duration-500 dark:bg-[hsl(220_40%_4%)]",
        children: [
          t.jsxs("div", {
            className: "absolute inset-0",
            children: [
              t.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-b from-white via-sky-50/40 to-slate-50 dark:from-[hsl(220_40%_6%)] dark:via-[hsl(220_35%_8%)] dark:to-[hsl(220_40%_6%)]",
              }),
              t.jsx("div", {
                className:
                  "absolute bottom-0 left-1/2 h-[500px] w-[900px] -translate-x-1/2 translate-y-1/4 rounded-full bg-gradient-to-t from-primary/10 via-cyan-500/5 to-transparent dark:from-primary/20 dark:via-cyan-500/10 blur-[120px]",
              }),
              t.jsx("div", {
                className:
                  "absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-purple-500/5 dark:bg-purple-500/8 blur-[100px]",
              }),
              t.jsx("div", {
                className:
                  "absolute left-1/4 top-1/3 h-48 w-48 rounded-full bg-primary/5 dark:bg-primary/8 blur-[80px]",
              }),
            ],
          }),
          t.jsxs("div", {
            className:
              "container relative z-10 mx-auto px-4 py-16 md:py-20 lg:py-24",
            children: [
              t.jsxs("div", {
                className: "mx-auto mb-8 max-w-3xl text-center md:mb-10",
                children: [
                  t.jsx(Ve, {
                    index: "08",
                    eyebrow: "TRỢ LÝ THÔNG TIN TDDTech",
                    size: "lg",
                    align: "center",
                    lines: ["Mô tả website", "bạn cần"],
                    grey: "Mô tả",
                    highlight: "bạn cần",
                  }),
                  t.jsx(q.p, {
                    initial: { opacity: 0, y: 15 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 0.6, delay: 0.1 },
                    className:
                      "mx-auto mt-3 max-w-xl text-sm text-slate-600 dark:text-white/50 md:text-base",
                    children:
                      "Hỏi nhanh về phạm vi, cách triển khai, bàn giao hoặc dự án tham khảo",
                  }),
                  t.jsx(Cm, {
                    className:
                      "mx-auto mt-5 h-28 w-28 text-slate-500 dark:text-white/40 md:mt-6 md:h-36 md:w-36",
                  }),
                ],
              }),
              t.jsx(fe, {
                mode: "wait",
                children: h
                  ? t.jsxs(
                      q.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                        className: "mx-auto max-w-3xl",
                        children: [
                          t.jsxs("div", {
                            className:
                              "overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.03] dark:shadow-2xl dark:shadow-black/30",
                            children: [
                              t.jsxs("div", {
                                className:
                                  "flex items-center justify-between border-b border-slate-100 px-5 py-3 dark:border-white/[0.06]",
                                children: [
                                  t.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                      t.jsxs("div", {
                                        className:
                                          "relative flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10",
                                        children: [
                                          t.jsx("img", {
                                            src: "/brand/logo-dark.png",
                                            alt: "Trợ lý thông tin TDDTech",
                                            width: "256",
                                            height: "256",
                                            className: "h-6 w-6 object-contain",
                                          }),
                                          t.jsx("span", {
                                            className:
                                              "absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white dark:border-[hsl(220_35%_8%)] bg-emerald-400",
                                          }),
                                        ],
                                      }),
                                      t.jsx("div", {
                                        children: t.jsxs("p", {
                                          className:
                                            "flex items-center gap-1.5 text-sm font-semibold text-slate-900 dark:text-white",
                                          children: [
                                            "Trợ lý TDDTech ",
                                            t.jsx(An, {
                                              className:
                                                "h-3.5 w-3.5 text-primary",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                  t.jsxs("button", {
                                    type: "button",
                                    onClick: v,
                                    className:
                                      "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:text-white/40 dark:hover:bg-white/5 dark:hover:text-white/70 transition-colors",
                                    children: [
                                      t.jsx(Xa, { className: "h-3.5 w-3.5" }),
                                      " Mới",
                                    ],
                                  }),
                                ],
                              }),
                              t.jsx("div", {
                                ref: p,
                                className:
                                  "h-[420px] overflow-y-auto px-5 py-5 md:h-[480px] md:px-6",
                                children: t.jsxs("div", {
                                  className: "space-y-5",
                                  children: [
                                    t.jsx(fe, {
                                      initial: !1,
                                      children: i.map((b, S) =>
                                        t.jsxs(
                                          q.div,
                                          {
                                            initial: { opacity: 0, y: 12 },
                                            animate: { opacity: 1, y: 0 },
                                            transition: {
                                              duration: 0.3,
                                              ease: [0.22, 1, 0.36, 1],
                                            },
                                            className: `flex gap-3 ${b.role === "user" ? "justify-end" : "justify-start"}`,
                                            children: [
                                              b.role === "assistant" &&
                                                t.jsx("div", {
                                                  className:
                                                    "mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-primary/10 p-1",
                                                  children: t.jsx("img", {
                                                    src: "/brand/logo-dark.png",
                                                    alt: "",
                                                    width: "256",
                                                    height: "256",
                                                    className:
                                                      "h-full w-full object-contain",
                                                  }),
                                                }),
                                              t.jsx("div", {
                                                className: `max-w-[85%] rounded-2xl px-4 py-3 ${b.role === "assistant" ? "bg-slate-100 text-slate-800 dark:bg-white/[0.04] dark:text-white/70" : "bg-primary text-white"}`,
                                                children:
                                                  b.role === "assistant"
                                                    ? t.jsx(Ri, {
                                                        text: b.text,
                                                      })
                                                    : t.jsx("p", {
                                                        className:
                                                          "whitespace-pre-line text-sm leading-7",
                                                        children: b.text,
                                                      }),
                                              }),
                                              b.role === "user" &&
                                                t.jsx("div", {
                                                  className:
                                                    "mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-slate-200 text-slate-700 dark:bg-white/[0.06] dark:text-white/50",
                                                  children: t.jsx(Fa, {
                                                    className: "h-3.5 w-3.5",
                                                  }),
                                                }),
                                            ],
                                          },
                                          `${b.timestamp.getTime()}-${S}`,
                                        ),
                                      ),
                                    }),
                                    l &&
                                      ((j = i[i.length - 1]) == null
                                        ? void 0
                                        : j.role) !== "assistant" &&
                                      t.jsx(Ii, {}),
                                  ],
                                }),
                              }),
                              t.jsx("div", {
                                className:
                                  "border-t border-slate-100 p-4 dark:border-white/[0.06]",
                                children: t.jsxs("form", {
                                  onFocusCapture: () => {
                                    ss().catch(() => {});
                                  },
                                  onSubmit: y,
                                  className:
                                    "relative rounded-xl border border-slate-200 bg-slate-50 transition-colors focus-within:border-primary/40 dark:border-white/[0.08] dark:bg-white/[0.03] dark:focus-within:border-white/15 dark:focus-within:bg-white/[0.05]",
                                  children: [
                                    t.jsx("textarea", {
                                      value: o,
                                      onChange: (b) => r(b.target.value),
                                      onCompositionStart: () => {
                                        m.current = !0;
                                      },
                                      onCompositionEnd: (b) => {
                                        ((m.current = !1),
                                          r(b.currentTarget.value));
                                      },
                                      onKeyDown: (b) => {
                                        const S =
                                          m.current ||
                                          b.nativeEvent.isComposing ||
                                          b.nativeEvent.keyCode === 229;
                                        b.key === "Enter" &&
                                          !b.shiftKey &&
                                          !S &&
                                          (b.preventDefault(), w());
                                      },
                                      rows: 1,
                                      placeholder: "Nhập câu hỏi...",
                                      className:
                                        "max-h-24 min-h-[44px] w-full resize-none bg-transparent px-4 py-3 pr-12 text-sm leading-6 text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-white/25",
                                    }),
                                    t.jsx("button", {
                                      type: "submit",
                                      disabled: !o.trim() || l,
                                      className:
                                        "absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white transition-all hover:scale-110 disabled:opacity-30 disabled:hover:scale-100",
                                      "aria-label": "Gửi",
                                      children: l
                                        ? t.jsx(Rs, {
                                            className:
                                              "h-3.5 w-3.5 animate-spin",
                                          })
                                        : t.jsx(Nn, {
                                            className: "h-3.5 w-3.5",
                                          }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          t.jsx("div", {
                            className:
                              "mt-4 flex flex-wrap justify-center gap-2",
                            children: Ai.slice(0, 4).map((b) =>
                              t.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => w(b.prompt),
                                  disabled: l,
                                  className:
                                    "rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-medium text-slate-600 shadow-sm transition-all hover:border-primary/40 hover:bg-sky-50/60 hover:text-primary disabled:opacity-40 dark:border-white/[0.06] dark:bg-transparent dark:text-white/35 dark:hover:border-white/12 dark:hover:text-white/60",
                                  children: b.label,
                                },
                                b.label,
                              ),
                            ),
                          }),
                        ],
                      },
                      "full-chat",
                    )
                  : t.jsxs(
                      q.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        exit: {
                          opacity: 0,
                          y: -10,
                          transition: { duration: 0.2 },
                        },
                        transition: { duration: 0.5, delay: 0.15 },
                        className: "mx-auto max-w-2xl",
                        children: [
                          t.jsxs("form", {
                            onFocusCapture: () => {
                              ss().catch(() => {});
                            },
                            onSubmit: y,
                            className:
                              "relative rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-all focus-within:border-primary/40 focus-within:shadow-primary/5 dark:border-white/[0.08] dark:bg-white/[0.04] dark:shadow-2xl dark:shadow-black/20 dark:focus-within:border-white/15 dark:focus-within:bg-white/[0.06]",
                            children: [
                              t.jsx("textarea", {
                                ref: d,
                                value: o,
                                onChange: (b) => r(b.target.value),
                                onCompositionStart: () => {
                                  m.current = !0;
                                },
                                onCompositionEnd: (b) => {
                                  ((m.current = !1), r(b.currentTarget.value));
                                },
                                onKeyDown: (b) => {
                                  const S =
                                    m.current ||
                                    b.nativeEvent.isComposing ||
                                    b.nativeEvent.keyCode === 229;
                                  b.key === "Enter" &&
                                    !b.shiftKey &&
                                    !S &&
                                    (b.preventDefault(), w());
                                },
                                rows: 3,
                                placeholder:
                                  "Hỏi về gói dịch vụ, tính năng, SEO, quy trình hoặc mô tả website anh/chị cần...",
                                className:
                                  "w-full resize-none bg-transparent px-5 pb-14 pt-5 text-[15px] leading-relaxed text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-white/30 md:px-6 md:pt-6 md:text-base",
                              }),
                              t.jsxs("div", {
                                className:
                                  "absolute bottom-3 left-4 right-4 flex items-center justify-between md:left-5 md:right-5",
                                children: [
                                  t.jsxs("div", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                      t.jsxs("span", {
                                        className: "relative flex h-2 w-2",
                                        children: [
                                          t.jsx("span", {
                                            className:
                                              "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75",
                                          }),
                                          t.jsx("span", {
                                            className:
                                              "relative inline-flex h-2 w-2 rounded-full bg-emerald-500",
                                          }),
                                        ],
                                      }),
                                      t.jsx("span", {
                                        className:
                                          "text-xs text-slate-500 dark:text-white/35",
                                        children: "Online",
                                      }),
                                    ],
                                  }),
                                  t.jsx("button", {
                                    type: "submit",
                                    disabled: !o.trim() || l,
                                    className:
                                      "flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/20 transition-all hover:scale-110 hover:shadow-primary/30 disabled:opacity-30 disabled:shadow-none disabled:hover:scale-100",
                                    "aria-label": "Gửi câu hỏi",
                                    children: l
                                      ? t.jsx(Rs, {
                                          className: "h-4 w-4 animate-spin",
                                        })
                                      : t.jsx(Nn, { className: "h-4 w-4" }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          t.jsx("div", {
                            className:
                              "mt-5 flex flex-wrap justify-center gap-2",
                            children: Ai.slice(0, 5).map((b) =>
                              t.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => w(b.prompt),
                                  disabled: l,
                                  className:
                                    "rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 shadow-sm transition-all hover:border-primary/40 hover:bg-sky-50/60 hover:text-primary disabled:opacity-40 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-white/50 dark:hover:border-white/15 dark:hover:bg-white/[0.06] dark:hover:text-white/80",
                                  children: b.label,
                                },
                                b.label,
                              ),
                            ),
                          }),
                          t.jsx("p", {
                            className:
                              "mt-4 text-center text-[11px] text-slate-400 dark:text-white/20",
                            children:
                              "AI có thể nhầm lẫn. Báo giá và cam kết chính thức được xác nhận bằng văn bản.",
                          }),
                        ],
                      },
                      "input-only",
                    ),
              }),
            ],
          }),
        ],
      });
    const N = t.jsxs("div", {
      className:
        "flex h-[560px] min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-2xl shadow-slate-300/60 backdrop-blur-xl dark:border-white/[0.08] dark:bg-[hsl(220_38%_7%)] dark:text-white dark:shadow-black/40",
      children: [
        t.jsxs("div", {
          className:
            "flex items-center gap-3 border-b border-slate-100 px-4 py-3 dark:border-white/[0.06]",
          children: [
            t.jsxs("div", {
              className:
                "relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10",
              children: [
                t.jsx("img", {
                  src: "/brand/logo-dark.png",
                  alt: "Trợ lý thông tin TDDTech",
                  width: "256",
                  height: "256",
                  className: "h-7 w-7 object-contain",
                }),
                t.jsx("span", {
                  className:
                    "absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white dark:border-[hsl(220_38%_7%)] bg-emerald-500",
                }),
              ],
            }),
            t.jsxs("div", {
              className: "min-w-0 flex-1",
              children: [
                t.jsxs("p", {
                  className:
                    "flex items-center gap-1.5 text-sm font-semibold text-slate-900 dark:text-white",
                  children: [
                    "Trợ lý TDDTech ",
                    t.jsx(An, { className: "h-3.5 w-3.5 text-primary" }),
                  ],
                }),
                t.jsx("p", {
                  className: "text-[11px] text-slate-500 dark:text-white/35",
                  children: "Tư vấn website & web app",
                }),
              ],
            }),
            t.jsx("button", {
              type: "button",
              onClick: v,
              className:
                "rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:text-white/30 dark:hover:bg-white/5 dark:hover:text-white/60 transition-colors",
              children: t.jsx(Xa, { className: "h-4 w-4" }),
            }),
            t.jsx("button", {
              type: "button",
              onClick: () => s(!1),
              className:
                "rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:text-white/30 dark:hover:bg-white/5 dark:hover:text-white/60 transition-colors",
              "aria-label": "Đóng",
              children: t.jsx(Ln, { className: "h-4 w-4" }),
            }),
          ],
        }),
        t.jsx("div", {
          ref: p,
          className: "flex-1 overflow-y-auto px-4 py-4",
          children: t.jsxs("div", {
            className: "space-y-4",
            children: [
              t.jsx(fe, {
                initial: !1,
                children: i.map((b, S) =>
                  t.jsxs(
                    q.div,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.25 },
                      className: `flex gap-2.5 ${b.role === "user" ? "justify-end" : "justify-start"}`,
                      children: [
                        b.role === "assistant" &&
                          t.jsx("div", {
                            className:
                              "mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-primary/10 p-1",
                            children: t.jsx("img", {
                              src: "/brand/logo-dark.png",
                              alt: "",
                              width: "256",
                              height: "256",
                              className: "h-full w-full object-contain",
                            }),
                          }),
                        t.jsx("div", {
                          className: `max-w-[85%] rounded-2xl px-3.5 py-2.5 ${b.role === "assistant" ? "bg-slate-100 text-slate-800 dark:bg-white/[0.04] dark:text-white/70" : "bg-primary text-white"}`,
                          children:
                            b.role === "assistant"
                              ? t.jsx(Ri, { text: b.text })
                              : t.jsx("p", {
                                  className:
                                    "whitespace-pre-line text-sm leading-6",
                                  children: b.text,
                                }),
                        }),
                        b.role === "user" &&
                          t.jsx("div", {
                            className:
                              "mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-md bg-slate-200 text-slate-700 dark:bg-white/[0.06] dark:text-white/50",
                            children: t.jsx(Fa, { className: "h-3 w-3" }),
                          }),
                      ],
                    },
                    `${b.timestamp.getTime()}-${S}`,
                  ),
                ),
              }),
              l &&
                ((k = i[i.length - 1]) == null ? void 0 : k.role) !==
                  "assistant" &&
                t.jsx(Ii, {}),
            ],
          }),
        }),
        t.jsxs("div", {
          className: "border-t border-slate-100 p-3 dark:border-white/[0.06]",
          children: [
            t.jsxs("form", {
              onFocusCapture: () => {
                ss().catch(() => {});
              },
              onSubmit: y,
              className:
                "relative rounded-xl border border-slate-200 bg-slate-50 transition-colors focus-within:border-primary/40 dark:border-white/[0.08] dark:bg-white/[0.03] dark:focus-within:border-white/15",
              children: [
                t.jsx("textarea", {
                  ref: d,
                  value: o,
                  onChange: (b) => r(b.target.value),
                  onCompositionStart: () => {
                    m.current = !0;
                  },
                  onCompositionEnd: (b) => {
                    ((m.current = !1), r(b.currentTarget.value));
                  },
                  onKeyDown: (b) => {
                    const S =
                      m.current ||
                      b.nativeEvent.isComposing ||
                      b.nativeEvent.keyCode === 229;
                    b.key === "Enter" &&
                      !b.shiftKey &&
                      !S &&
                      (b.preventDefault(), w());
                  },
                  rows: 2,
                  placeholder: "Hỏi về giá, tính năng, quy trình...",
                  className:
                    "max-h-24 min-h-[48px] w-full resize-none bg-transparent px-3.5 py-2.5 pr-11 text-sm leading-6 text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-white/25",
                }),
                t.jsx("button", {
                  type: "submit",
                  disabled: !o.trim() || l,
                  className:
                    "absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white transition-all hover:scale-110 disabled:opacity-30 disabled:hover:scale-100",
                  "aria-label": "Gửi",
                  children: l
                    ? t.jsx(Rs, { className: "h-3.5 w-3.5 animate-spin" })
                    : t.jsx(Nn, { className: "h-3.5 w-3.5" }),
                }),
              ],
            }),
            t.jsx("p", {
              className:
                "mt-1.5 text-center text-[10px] text-slate-400 dark:text-white/20",
              children: "AI có thể nhầm lẫn",
            }),
          ],
        }),
      ],
    });
    return t.jsxs(t.Fragment, {
      children: [
        t.jsx("div", {
          className:
            "fixed bottom-6 right-6 z-[60] hidden items-end gap-3 md:flex",
          children: t.jsxs("button", {
            type: "button",
            onClick: () => s((b) => !b),
            className:
              "relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-cyan-500 text-white shadow-2xl shadow-primary/25 transition-transform hover:scale-105",
            "aria-label": "Mở trợ lý AI",
            children: [
              !n &&
                t.jsx("span", {
                  className:
                    "absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-emerald-400",
                }),
              n
                ? t.jsx(Ln, { className: "h-5 w-5" })
                : t.jsx(yr, { className: "h-5 w-5" }),
            ],
          }),
        }),
        t.jsx(fe, {
          children:
            n &&
            t.jsx(q.div, {
              initial: { opacity: 0, y: 20, scale: 0.97 },
              animate: { opacity: 1, y: 0, scale: 1 },
              exit: { opacity: 0, y: 12, scale: 0.97 },
              transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
              className:
                "fixed bottom-24 right-4 z-[59] w-[400px] max-w-[calc(100vw-2rem)] sm:right-6",
              children: N,
            }),
        }),
      ],
    });
  },
  Uu = () => {
    const [e, n] = f.useState(!1),
      [s, i] = f.useState(!1),
      { scrollYProgress: a } = Je(),
      o = gn(a, { stiffness: 100, damping: 30, restDelta: 0.001 });
    (f.useEffect(() => {
      const l = () => {
        n(window.scrollY > 400);
      };
      return (
        window.addEventListener("scroll", l),
        () => window.removeEventListener("scroll", l)
      );
    }, []),
      f.useEffect(() => {
        const l = document.querySelector("[data-immersive]");
        if (!l || typeof IntersectionObserver > "u") return;
        const c = new IntersectionObserver(([h]) => i(h.isIntersecting), {
          threshold: 0.01,
        });
        return (c.observe(l), () => c.disconnect());
      }, []));
    const r = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return t.jsx(t.Fragment, {
      children: t.jsx(fe, {
        children:
          e &&
          !s &&
          t.jsx(q.div, {
            initial: { opacity: 0, y: 50, scale: 0.3 },
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: { opacity: 0, y: 50, scale: 0.3 },
            transition: { type: "spring", stiffness: 260, damping: 20 },
            className: "fixed bottom-6 right-6 z-40 hidden md:block",
            children: t.jsxs("button", {
              onClick: r,
              className:
                "relative flex items-center justify-center h-16 w-16 transition-all group focus:outline-none",
              children: [
                t.jsxs("svg", {
                  className: "absolute inset-0 w-full h-full -rotate-90 p-0.5",
                  viewBox: "0 0 100 100",
                  children: [
                    t.jsx("circle", {
                      cx: "50",
                      cy: "50",
                      r: "46",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "4",
                      className: "text-slate-200 dark:text-white/10",
                    }),
                    t.jsx(q.circle, {
                      cx: "50",
                      cy: "50",
                      r: "46",
                      fill: "none",
                      stroke: "url(#progress-gradient)",
                      strokeWidth: "5",
                      strokeLinecap: "round",
                      style: { pathLength: o },
                    }),
                    t.jsx("defs", {
                      children: t.jsxs("linearGradient", {
                        id: "progress-gradient",
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "100%",
                        children: [
                          t.jsx("stop", {
                            offset: "0%",
                            stopColor: "hsl(var(--primary))",
                          }),
                          t.jsx("stop", {
                            offset: "100%",
                            stopColor: "#22d3ee",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                t.jsx("div", {
                  className:
                    "h-12 w-12 rounded-full bg-white/90 shadow-lg dark:bg-black/60 backdrop-blur-md border border-slate-200 dark:border-white/20 flex items-center justify-center dark:shadow-2xl group-hover:bg-sky-50 dark:group-hover:bg-primary/20 transition-all duration-300",
                  children: t.jsx(Jc, {
                    className:
                      "h-6 w-6 text-slate-800 dark:text-white group-hover:text-primary transition-colors",
                  }),
                }),
                t.jsx("span", {
                  className: "sr-only",
                  children: "Về đầu trang",
                }),
              ],
            }),
          }),
      }),
    });
  },
  as = [
    [
      { label: "Hosting · SSL", Icon: tl },
      { label: "Sao lưu", Icon: el },
      { label: "Theo dõi 24/7", Icon: gr },
      { label: "Báo cáo tháng", Icon: pr },
    ],
    [
      { label: "SEO", Icon: we },
      { label: "Nội dung", Icon: un },
      { label: "Chuyển đổi", Icon: xr },
      { label: "Landing page", Icon: on },
    ],
    [
      { label: "Quảng cáo", Icon: nl },
      { label: "A/B test", Icon: sl },
      { label: "CRM · Zalo", Icon: yr },
      { label: "KPI doanh thu", Icon: al },
    ],
  ],
  is = gs.monthly,
  ps = [0.08, 0.36, 0.64],
  Ia = (e, n) => ps[e] + 0.03 + n * 0.055,
  Pe = (e, n, s) => Math.min(1, Math.max(0, (e - n) / (s - n))),
  Qu = f.memo(({ p: e, d: n, r: s, k: i }) => {
    const a = Ia(s, i),
      o = gt(e, (l) => Pe(l, a, a + 0.045)),
      r = gt(o, (l) => (l >= 0.999 ? 1 : 0));
    return t.jsxs("g", {
      children: [
        t.jsx("path", {
          d: n,
          fill: "none",
          stroke: "rgba(255,255,255,0.06)",
          strokeWidth: "1",
        }),
        t.jsx(q.path, {
          d: n,
          fill: "none",
          stroke: ["#67e8f9", "#38bdf8", "#a78bfa"][s],
          strokeOpacity: "0.75",
          strokeWidth: "1.4",
          style: { pathLength: o },
        }),
        t.jsx(q.circle, {
          r: "2.6",
          fill: "#e0f2fe",
          style: { opacity: r, filter: "drop-shadow(0 0 5px #67e8f9)" },
          children: t.jsx("animateMotion", {
            dur: `${1.6 + i * 0.25}s`,
            repeatCount: "indefinite",
            path: n,
            keyPoints: "1;0",
            keyTimes: "0;1",
            calcMode: "linear",
          }),
        }),
      ],
    });
  }),
  Zu = f.memo(({ p: e, n, x: s, y: i, r: a, k: o, compact: r }) => {
    const l = Ia(a, o) + 0.035,
      c = gt(e, (g) => Pe(g, l, l + 0.02)),
      h = gt(c, (g) => 0.6 + 0.4 * (1 - Math.pow(1 - g, 3)));
    return t.jsx(q.div, {
      style: { left: s, top: i, opacity: c, scale: h },
      className: "absolute -translate-x-1/2 -translate-y-1/2",
      children: t.jsxs("div", {
        className: `flex items-center gap-1.5 whitespace-nowrap rounded-full border bg-[#0a1424]/90 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.8)] ${["border-cyan-300/30", "border-sky-400/30", "border-violet-400/35"][a]} ${r ? "py-px pl-0.5 pr-1.5 text-[9.5px]" : "py-1.5 pl-1.5 pr-3 text-[13px]"}`,
        children: [
          t.jsx("span", {
            className: `flex items-center justify-center rounded-full ${["bg-cyan-300/15 text-cyan-200", "bg-sky-400/15 text-sky-200", "bg-violet-400/15 text-violet-200"][a]} ${r ? "h-3.5 w-3.5" : "h-7 w-7"}`,
            children: t.jsx(n.Icon, {
              className: r ? "h-2 w-2" : "h-3.5 w-3.5",
            }),
          }),
          t.jsx("span", {
            className: "font-semibold text-white/90",
            children: n.label,
          }),
        ],
      }),
    });
  }),
  Ju = () => {
    const e = Zt(),
      n = f.useRef(null),
      s = f.useRef(null),
      [i, a] = f.useState({ w: 900, h: 460 }),
      [o, r] = f.useState(0),
      { scrollYProgress: l } = Je({
        target: n,
        offset: ["start start", "end end"],
      }),
      c = gn(l, { stiffness: 260, damping: 40, mass: 0.5, restDelta: 2e-4 }),
      h = gt(c, (k) =>
        String(
          Math.round(
            4 * Pe(k, 0.08, 0.36) +
              4 * Pe(k, 0.36, 0.64) +
              4 * Pe(k, 0.64, 0.92),
          ),
        ),
      ),
      g = gt(c, (k) => Pe(k, 0.1, 0.125)),
      p = gt(c, (k) => Pe(k, 0, 0.07)),
      d = gt(c, (k) => Pe(k, 0.92, 0.97)),
      m = gt(p, (k) => 0.8 + 0.2 * k),
      u = [0, 1, 2].map((k) =>
        gt(c, (b) => 0.25 + 0.75 * Pe(b, ps[k], ps[k] + 0.05)),
      );
    (bs(c, "change", (k) => {
      const b = k < 0.36 ? 0 : k < 0.64 ? 1 : 2;
      r((S) => (S === b ? S : b));
    }),
      f.useLayoutEffect(() => {
        const k = s.current;
        if (!k) return;
        const b = () => a({ w: k.clientWidth, h: k.clientHeight });
        b();
        const S = new ResizeObserver(b);
        return (S.observe(k), () => S.disconnect());
      }, []));
    const x = i.w < 640,
      v = x ? { x: i.w / 2, y: 36 } : { x: i.w / 2, y: i.h / 2 },
      w = f.useMemo(() => {
        const { w: k, h: b } = i,
          { x: S, y: E } = x ? { x: k / 2, y: 36 } : { x: k / 2, y: b / 2 };
        if (x) {
          const C = E + 30,
            _ = b - (b < 260 ? 24 : 34),
            D = Math.max(C + (b < 260 ? 34 : 58), Math.min(C + 76, _ - 2 * 58)),
            B = Math.max(44, (_ - D) / 2),
            K = [0, 1, 2].map((z) => D + z * B);
          return as.map((z, st) =>
            z.map((P, R) => {
              const et = S + (R % 2 ? 1 : -1) * k * 0.25,
                at = K[st] + (R < 2 ? -11 : 11),
                Y = `M ${S.toFixed(1)} ${C.toFixed(1)} C ${S.toFixed(1)} ${(C + (at - C) * 0.55).toFixed(1)}, ${et.toFixed(1)} ${(at - (at - C) * 0.45).toFixed(1)}, ${et.toFixed(1)} ${at.toFixed(1)}`;
              return { x: et, y: at, d: Y };
            }),
          );
        }
        const L = [
            [k * 0.22, b * 0.29],
            [k * 0.36, b * 0.36],
            [k * 0.47, b * 0.43],
          ],
          T = [
            [-125, -55, 55, 125],
            [-162, -18, 18, 162],
            [-140, -40, 40, 140],
          ];
        return as.map((C, _) =>
          C.map((D, B) => {
            const K = (T[_][B] * Math.PI) / 180,
              z = S + Math.cos(K) * L[_][0],
              st = E + Math.sin(K) * L[_][1],
              P = S + (z - S) * 0.5 - (st - E) * 0.18,
              R = E + (st - E) * 0.5 + (z - S) * 0.1;
            return {
              x: z,
              y: st,
              d: `M ${S.toFixed(1)} ${E.toFixed(1)} Q ${P.toFixed(1)} ${R.toFixed(1)} ${z.toFixed(1)} ${st.toFixed(1)}`,
            };
          }),
        );
      }, [i, x]),
      y = f.useRef(w);
    ((y.current = w),
      f.useEffect(() => {
        if (e) return;
        const k = (E, L) => {
            var C;
            const T =
              (C = s.current) == null ? void 0 : C.getBoundingClientRect();
            return T
              ? {
                  x: ((T.left + E) / window.innerWidth - 0.5) * 2,
                  y: (0.5 - (T.top + L) / window.innerHeight) * 2,
                }
              : { x: 0, y: 0 };
          },
          b = [];
        (as.forEach((E, L) => {
          (b.push([
            ps[L] + 0.005,
            () =>
              A.pad([nt(L * 2, 4), nt(L * 2 + 2, 4), nt(L * 2 + 4, 4)], {
                gain: 0.04,
                dur: 1.2,
              }),
          ]),
            E.forEach((T, C) =>
              b.push([
                Ia(L, C) + 0.04,
                () => {
                  const _ = y.current[L][C];
                  A.bell(k(_.x, _.y), nt(5 + L * 3 + C, 5), {
                    gain: 0.03,
                    decay: 1.1,
                    ratio: 2.76,
                  });
                },
              ]),
            ));
        }),
          b.push([
            0.925,
            () => A.shimmer({ x: 0, y: 0 }, { gain: 0.025, count: 6 }),
          ]));
        let S = c.get();
        return c.on("change", (E) => {
          const L = S;
          ((S = E),
            !(E <= L) &&
              b
                .filter(([T]) => T > L && T <= E)
                .slice(-2)
                .forEach(([, T]) => T()));
        });
      }, [c, e]));
    const N = is[o],
      j = t.jsxs("div", {
        className:
          "flex flex-col justify-between gap-3 sm:flex-row sm:items-end",
        children: [
          t.jsxs("div", {
            children: [
              t.jsx("p", {
                className:
                  "text-xs font-bold uppercase tracking-[0.22em] text-primary",
                children: "Tầng 02 · Vận hành hằng tháng",
              }),
              t.jsxs("h3", {
                className:
                  "mt-3 text-3xl font-black tracking-[-0.025em] text-slate-950 dark:text-white sm:text-[2.6rem] sm:leading-[1.1]",
                children: [
                  "Bảo vệ, giữ gìn và ",
                  t.jsx("span", {
                    className: "accent-serif text-primary",
                    children: "phát triển",
                  }),
                  " tài sản",
                ],
              }),
            ],
          }),
          t.jsx("p", {
            className:
              "max-w-md text-base leading-7 text-slate-600 dark:text-white/60",
            children:
              "Chọn theo mục tiêu của doanh nghiệp. Có thể nâng gói bất cứ lúc nào khi website bắt đầu mang về khách.",
          }),
        ],
      });
    return e
      ? t.jsx("div", { ref: n, className: "mt-20 md:mt-28", children: j })
      : t.jsxs("div", {
          className: "mt-20 md:mt-28",
          children: [
            j,
            t.jsx("div", {
              ref: n,
              "data-plan-builder": !0,
              className: "relative mt-8 h-[260svh]",
              children: t.jsx("div", {
                className:
                  "sticky top-0 flex h-[100svh] items-center py-4 pt-[76px] sm:pt-[84px] [@media(max-height:620px)]:pb-2 [@media(max-height:620px)]:pt-[68px]",
                children: t.jsxs("div", {
                  className:
                    "relative h-full w-full overflow-hidden rounded-[28px] bg-[#05080f] text-white shadow-[0_30px_60px_-40px_rgba(2,6,23,0.55)] ring-1 ring-white/10",
                  children: [
                    t.jsx("div", {
                      className: "absolute inset-0 opacity-90",
                      children: t.jsx(bo, { shift: o * 0.8 }),
                    }),
                    t.jsx("div", {
                      "aria-hidden": "true",
                      className:
                        "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_65%_60%_at_50%_50%,#000_25%,transparent_80%)]",
                    }),
                    t.jsxs("div", {
                      className:
                        "relative flex h-full flex-col p-4 sm:p-7 [@media(max-height:620px)]:p-3",
                      children: [
                        t.jsxs("div", {
                          className:
                            "flex flex-wrap items-center justify-between gap-3",
                          children: [
                            t.jsx(kr, {
                              id: "tiers",
                              children: t.jsx("div", {
                                className:
                                  "flex gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1",
                                children: is.map((k, b) =>
                                  t.jsxs(
                                    "span",
                                    {
                                      className:
                                        "relative rounded-full px-2 py-1.5 text-center text-[10px] font-black tracking-[0.06em] sm:px-5 sm:text-xs sm:tracking-[0.14em]",
                                      children: [
                                        b === o
                                          ? t.jsx(q.span, {
                                              layoutId: "tier-pill",
                                              transition: {
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 32,
                                              },
                                              className:
                                                "absolute inset-0 rounded-full bg-white shadow-[0_0_24px_rgba(103,232,249,0.45)]",
                                            })
                                          : null,
                                        t.jsx("span", {
                                          className: `relative uppercase ${b === o ? "text-slate-950" : b < o ? "text-white/70" : "text-white/40"}`,
                                          children: k.name,
                                        }),
                                      ],
                                    },
                                    k.id,
                                  ),
                                ),
                              }),
                            }),
                            t.jsxs(q.p, {
                              style: { opacity: g },
                              className:
                                "flex items-baseline gap-2 font-mono text-white/60",
                              children: [
                                t.jsx(q.span, {
                                  className:
                                    "text-3xl font-bold text-white sm:text-4xl [@media(max-height:620px)]:text-2xl",
                                  children: h,
                                }),
                                t.jsx("span", {
                                  className:
                                    "text-[11px] uppercase tracking-[0.18em] sm:text-xs",
                                  children: "việc mỗi tháng",
                                }),
                              ],
                            }),
                          ],
                        }),
                        t.jsxs("div", {
                          ref: s,
                          className: "relative mt-2 min-h-0 flex-1",
                          children: [
                            t.jsxs("svg", {
                              className:
                                "absolute inset-0 h-full w-full overflow-visible",
                              "aria-hidden": "true",
                              children: [
                                !x &&
                                  [0, 1, 2].map((k) =>
                                    t.jsx(
                                      q.ellipse,
                                      {
                                        cx: i.w / 2,
                                        cy: i.h / 2,
                                        rx: [0.22, 0.36, 0.47][k] * i.w,
                                        ry: [0.29, 0.36, 0.43][k] * i.h,
                                        fill: "none",
                                        stroke: "rgba(148,197,255,0.12)",
                                        strokeDasharray: "2 6",
                                        style: { opacity: u[k] },
                                      },
                                      k,
                                    ),
                                  ),
                                w.map((k, b) =>
                                  k.map((S, E) =>
                                    t.jsx(
                                      Qu,
                                      { p: c, d: S.d, r: b, k: E },
                                      `${b}${E}`,
                                    ),
                                  ),
                                ),
                              ],
                            }),
                            w.map((k, b) =>
                              k.map((S, E) =>
                                t.jsx(
                                  Zu,
                                  {
                                    p: c,
                                    n: as[b][E],
                                    x: S.x,
                                    y: S.y,
                                    r: b,
                                    k: E,
                                    compact: x,
                                  },
                                  `${b}${E}`,
                                ),
                              ),
                            ),
                            x && w[1][0].y - w[0][0].y >= 56
                              ? w.map((k, b) =>
                                  t.jsxs(
                                    q.span,
                                    {
                                      style: {
                                        top: k[0].y - 30,
                                        opacity: u[b],
                                      },
                                      className: `absolute left-1 flex items-center gap-1.5 text-[8.5px] font-black tracking-[0.14em] ${["text-cyan-200/70", "text-sky-200/70", "text-violet-200/70"][b]}`,
                                      children: [
                                        t.jsx("span", {
                                          className: "h-px w-3 bg-current",
                                        }),
                                        is[b].name.toUpperCase(),
                                      ],
                                    },
                                    `t${b}`,
                                  ),
                                )
                              : null,
                            t.jsx(q.div, {
                              style: {
                                left: v.x,
                                top: v.y,
                                opacity: p,
                                scale: m,
                              },
                              className:
                                "absolute -translate-x-1/2 -translate-y-1/2",
                              children: t.jsxs("div", {
                                className: "relative",
                                children: [
                                  t.jsx("span", {
                                    className:
                                      "absolute -inset-6 rounded-[28px] bg-[radial-gradient(closest-side,rgba(34,211,238,0.35),transparent)]",
                                  }),
                                  t.jsxs("div", {
                                    className: `relative overflow-hidden rounded-xl border border-white/15 bg-white shadow-[0_20px_60px_-20px_rgba(34,211,238,0.6)] ${x ? "w-[56px]" : "w-[168px]"}`,
                                    children: [
                                      t.jsx("div", {
                                        className:
                                          "flex items-center gap-1 border-b border-slate-100 px-2 py-1",
                                        children: [0, 1, 2].map((k) =>
                                          t.jsx(
                                            "span",
                                            {
                                              className:
                                                "h-1.5 w-1.5 rounded-full bg-slate-300",
                                            },
                                            k,
                                          ),
                                        ),
                                      }),
                                      t.jsxs("div", {
                                        className: "space-y-1 p-2",
                                        children: [
                                          t.jsx("span", {
                                            className:
                                              "block h-1.5 w-1/3 rounded bg-primary/70",
                                          }),
                                          t.jsx("span", {
                                            className:
                                              "block h-2 w-5/6 rounded bg-slate-800",
                                          }),
                                          t.jsx("span", {
                                            className:
                                              "block h-2 w-2/3 rounded bg-slate-800",
                                          }),
                                          t.jsx("div", {
                                            className:
                                              "grid grid-cols-3 gap-1 pt-1",
                                            children: [0, 1, 2].map((k) =>
                                              t.jsx(
                                                "span",
                                                {
                                                  className:
                                                    "h-4 rounded bg-gradient-to-br from-sky-100 to-cyan-200",
                                                },
                                                k,
                                              ),
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  t.jsx("p", {
                                    className:
                                      "mt-1.5 whitespace-nowrap text-center text-[9px] font-bold uppercase tracking-[0.14em] text-white/70 sm:mt-2 sm:text-[11px] sm:tracking-[0.16em]",
                                    children: x
                                      ? "Website"
                                      : "Website của anh chị",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        t.jsxs("div", {
                          className:
                            "mt-2 flex flex-col gap-2 sm:mt-0 sm:flex-row sm:items-end sm:justify-between sm:gap-3 [@media(max-height:620px)]:mt-1 [@media(max-height:620px)]:gap-1",
                          children: [
                            t.jsx(fe, {
                              mode: "wait",
                              initial: !1,
                              children: t.jsxs(
                                q.div,
                                {
                                  initial: {
                                    opacity: 0,
                                    y: 14,
                                    filter: "blur(6px)",
                                  },
                                  animate: {
                                    opacity: 1,
                                    y: 0,
                                    filter: "blur(0px)",
                                  },
                                  exit: {
                                    opacity: 0,
                                    y: -10,
                                    filter: "blur(6px)",
                                  },
                                  transition: {
                                    duration: 0.45,
                                    ease: [0.22, 1, 0.36, 1],
                                  },
                                  className: "max-w-xl",
                                  children: [
                                    t.jsxs("p", {
                                      className:
                                        "text-lg font-black sm:text-2xl [@media(max-height:620px)]:text-base",
                                      children: [
                                        N.name,
                                        " — ",
                                        t.jsx("span", {
                                          className:
                                            "accent-serif text-cyan-300",
                                          children: N.tagline,
                                        }),
                                      ],
                                    }),
                                    t.jsxs("p", {
                                      className:
                                        "mt-1 text-[13.5px] leading-6 text-white/65 sm:text-base [@media(max-height:620px)]:text-[12.5px] [@media(max-height:620px)]:leading-5",
                                      children: [
                                        N.fit,
                                        o > 0
                                          ? t.jsxs("span", {
                                              className: "text-white/40",
                                              children: [
                                                " Gồm toàn bộ gói ",
                                                is[o - 1].name,
                                                ".",
                                              ],
                                            })
                                          : null,
                                      ],
                                    }),
                                  ],
                                },
                                N.id,
                              ),
                            }),
                            t.jsx(q.span, {
                              style: { opacity: d },
                              className:
                                "inline-flex w-fit items-center gap-2 text-[12px] font-bold text-cyan-100 sm:rounded-full sm:border sm:border-cyan-300/30 sm:bg-cyan-300/10 sm:px-4 sm:py-2 sm:text-[13px]",
                              children:
                                "Nâng gói bất cứ lúc nào — website không gián đoạn",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
  },
  t0 = site.zaloHref,
  Oi = ({ label: e = "Nhận báo giá", tone: n = "dark" }) => {
    const s = {
      dark: "bg-slate-950 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-white/90",
      primary:
        "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25",
      light: "bg-white text-slate-950 hover:bg-white/90",
    }[n];
    return t.jsxs("a", {
      href: t0,
      target: "_blank",
      rel: "noreferrer",
      className: `inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-sm font-bold transition-colors ${s}`,
      children: [
        t.jsx("img", {
          src: "/zalo-icon.png",
          alt: "",
          className: "h-5 w-5 rounded-sm",
        }),
        e,
      ],
    });
  },
  e0 = (e) => {
    if (e.pointerType !== "mouse") return;
    const n = e.currentTarget.getBoundingClientRect();
    (e.currentTarget.style.setProperty("--mx", `${e.clientX - n.left}px`),
      e.currentTarget.style.setProperty("--my", `${e.clientY - n.top}px`));
  },
  n0 = () => {
    const { setup: e, monthly: n } = gs;
    return t.jsxs("div", {
      children: [
        t.jsxs("article", {
          "data-motion": "card",
          className:
            "relative overflow-hidden rounded-[22px] bg-slate-950 p-7 text-white shadow-2xl shadow-slate-900/25 sm:p-10 lg:p-14",
          children: [
            t.jsx("div", {
              className:
                "pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-[110px]",
            }),
            t.jsxs("div", {
              className:
                "relative grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16",
              children: [
                t.jsxs("div", {
                  className: "flex flex-col justify-between gap-6",
                  children: [
                    t.jsxs("div", {
                      children: [
                        t.jsx("p", {
                          className:
                            "text-xs font-bold uppercase tracking-[0.22em] text-cyan-300",
                          children: "Tầng 01 · Đầu tư một lần",
                        }),
                        t.jsx("h3", {
                          className:
                            "mt-4 text-4xl font-black tracking-[-0.03em] sm:text-5xl",
                          children: e.name,
                        }),
                        t.jsx("p", {
                          className: "mt-3 text-lg text-white/70",
                          children: e.tagline,
                        }),
                      ],
                    }),
                    t.jsx("div", {
                      className: "max-w-xs",
                      children: t.jsx(Oi, {
                        label: "Nhận báo giá Setup",
                        tone: "light",
                      }),
                    }),
                  ],
                }),
                t.jsxs("ol", {
                  className: "relative space-y-5 pl-12 sm:space-y-6",
                  children: [
                    t.jsx("span", {
                      "aria-hidden": "true",
                      "data-motion": "draw-y",
                      className:
                        "absolute bottom-3 left-[15px] top-3 w-px bg-gradient-to-b from-cyan-300 via-primary to-transparent",
                    }),
                    e.items.map((s, i) =>
                      t.jsxs(
                        "li",
                        {
                          "data-motion": "left",
                          style: { "--motion-delay": `${200 + i * 110}ms` },
                          className:
                            "relative text-base leading-7 text-white/85 sm:text-lg",
                          children: [
                            t.jsx("span", {
                              className:
                                "absolute -left-12 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/40 bg-slate-950 font-mono text-xs font-bold text-cyan-300",
                              children: String(i + 1).padStart(2, "0"),
                            }),
                            s,
                          ],
                        },
                        s,
                      ),
                    ),
                  ],
                }),
              ],
            }),
          ],
        }),
        t.jsx(Ju, {}),
        t.jsx("div", {
          className: "relative z-10 mt-16 grid gap-5 lg:grid-cols-3 lg:gap-6",
          children: n.map((s, i) => {
            const a = s.id === "growth";
            return t.jsxs(
              "article",
              {
                "data-motion": "card",
                onPointerMove: e0,
                style: { "--motion-delay": `${i * 150}ms` },
                className: `plan-card relative flex flex-col rounded-[22px] border p-7 sm:p-9 lg:p-7 xl:p-9 ${a ? "plan-featured border-primary/50 bg-gradient-to-b from-sky-50 to-white shadow-xl shadow-primary/10 dark:from-primary/[0.12] dark:to-transparent" : "border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.04]"}`,
                children: [
                  a &&
                    t.jsxs("span", {
                      className:
                        "absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white",
                      children: [
                        t.jsx(An, { className: "h-3.5 w-3.5" }),
                        " Đề xuất cho đa số doanh nghiệp",
                      ],
                    }),
                  t.jsx("p", {
                    className:
                      "text-sm font-bold uppercase tracking-[0.16em] text-primary lg:text-[12.5px] lg:tracking-[0.12em] xl:text-sm xl:tracking-[0.16em]",
                    children: s.tagline,
                  }),
                  t.jsx("h4", {
                    className:
                      "mt-3 text-4xl font-black tracking-[-0.03em] text-slate-950 dark:text-white",
                    children: s.name,
                  }),
                  t.jsx("p", {
                    className:
                      "mt-3 text-base leading-7 text-slate-600 dark:text-white/60",
                    children: s.fit,
                  }),
                  t.jsxs("p", {
                    className:
                      "mt-6 flex items-center justify-between gap-3 border-t border-slate-200 pt-5 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 dark:border-white/10 dark:text-white/40",
                    children: [
                      t.jsx("span", { children: "Bao gồm" }),
                      t.jsxs("span", {
                        className: "font-mono tracking-[0.06em]",
                        children: [s.items.length, " hạng mục"],
                      }),
                    ],
                  }),
                  t.jsx("ul", {
                    className: "mt-4 flex-1 space-y-3.5",
                    children: s.items.map((o, r) =>
                      t.jsxs(
                        "li",
                        {
                          "data-motion": "up",
                          style: {
                            "--motion-delay": `${i * 150 + 300 + r * 80}ms`,
                          },
                          className:
                            "flex gap-3 text-base leading-7 text-slate-700 dark:text-white/75",
                          children: [
                            t.jsx("svg", {
                              viewBox: "0 0 16 16",
                              className:
                                "plan-check mt-1.5 h-4 w-4 flex-none text-primary",
                              "aria-hidden": "true",
                              children: t.jsx("path", {
                                d: "M3 8.5 6.5 12 13 4.5",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                              }),
                            }),
                            o,
                          ],
                        },
                        o,
                      ),
                    ),
                  }),
                  t.jsx("div", {
                    className: "mt-8",
                    children: t.jsx(Oi, {
                      label: `Nhận báo giá ${s.name}`,
                      tone: a ? "primary" : "dark",
                    }),
                  }),
                ],
              },
              s.id,
            );
          }),
        }),
        t.jsxs("div", {
          "data-motion": "up",
          className:
            "mt-12 grid gap-5 rounded-[22px] border border-primary/20 bg-primary/[0.07] p-7 sm:p-9 md:grid-cols-[1fr_auto] md:items-center",
          children: [
            t.jsxs("div", {
              className:
                "space-y-2 text-base leading-7 text-slate-700 dark:text-white/70",
              children: [
                t.jsxs("p", {
                  children: [
                    t.jsx("strong", {
                      className: "text-slate-950 dark:text-white",
                      children: "Vì sao không niêm yết giá?",
                    }),
                    " ",
                    gs.pricingNote,
                  ],
                }),
                t.jsx("p", {
                  className: "text-slate-500 dark:text-white/50",
                  children: gs.honesty,
                }),
              ],
            }),
            t.jsxs("a", {
              href: site.phoneHref,
              className:
                "inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 text-sm font-bold text-slate-800 hover:border-primary hover:text-primary dark:border-white/15 dark:bg-white/[0.04] dark:text-white",
              children: [t.jsx(va, { className: "h-4 w-4" }), " ", Dt.phone],
            }),
          ],
        }),
      ],
    });
  },
  s0 = () =>
    t.jsxs("section", {
      id: "pricing",
      className:
        "measure-height relative overflow-clip bg-slate-100/70 py-16 transition-colors duration-500 dark:bg-[hsl(220_35%_8%)] md:py-28 lg:py-36",
      children: [
        t.jsx("div", {
          className:
            "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent",
        }),
        t.jsx("div", {
          className:
            "absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px] opacity-50",
        }),
        t.jsxs("div", {
          className: "container relative z-10 mx-auto max-w-6xl px-4",
          children: [
            t.jsxs("div", {
              className: "mx-auto mb-12 max-w-3xl text-center md:mb-20",
              children: [
                t.jsx(Ve, {
                  index: "06",
                  eyebrow: "MÔ HÌNH DỊCH VỤ",
                  size: "lg",
                  align: "center",
                  lines: ["Xây một lần,", "vận hành mỗi tháng"],
                  grey: "Xây một lần,",
                  highlight: "mỗi tháng",
                }),
                t.jsx("p", {
                  className:
                    "mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-white/60 md:mt-6 md:text-xl",
                  children:
                    "Website là tài sản: một lần đầu tư để xây đúng nền móng, rồi vận hành mỗi tháng để tài sản không xuống cấp và tiếp tục mang về khách hàng.",
                }),
              ],
            }),
            t.jsx(n0, {}),
            t.jsxs("p", {
              className:
                "mt-4 text-center text-xs leading-6 text-slate-500 dark:text-white/45 md:text-left",
              children: [
                "Điều kiện bàn giao và bảo hành áp dụng theo phạm vi dự án. ",
                t.jsx("a", {
                  href: "/bao-hanh-bao-tri-website",
                  className: "font-semibold text-primary hover:underline",
                  children: "Xem chính sách bàn giao và bảo hành",
                }),
                ".",
              ],
            }),
          ],
        }),
      ],
    }),
  a0 = 1.15,
  i0 = ({ children: e, lengthVh: n = 300, header: s, className: i = "" }) => {
    const a = f.useRef(null),
      o = f.useRef(null),
      [r, l] = f.useState(0),
      [c, h] = f.useState(0),
      [g, p] = f.useState(0),
      [d, m] = f.useState(!1),
      u = Zt();
    if (
      (f.useEffect(() => {
        const w = window.matchMedia("(min-width: 1024px)"),
          y = () => m(w.matches && !u);
        return (
          y(),
          w.addEventListener("change", y),
          () => w.removeEventListener("change", y)
        );
      }, [u]),
      f.useEffect(() => {
        if (!d) return;
        const w = () => {
          const N = o.current;
          N &&
            (h(Math.max(0, N.scrollWidth - window.innerWidth)),
            p(window.innerHeight));
        };
        w();
        const y = new ResizeObserver(w);
        return (
          o.current && y.observe(o.current),
          window.addEventListener("resize", w),
          () => {
            (y.disconnect(), window.removeEventListener("resize", w));
          }
        );
      }, [d, e]),
      f.useEffect(() => {
        if (!d) return;
        let w = 0;
        const y = () => {
          w ||
            (w = requestAnimationFrame(() => {
              w = 0;
              const N = a.current;
              if (!N) return;
              const j = N.getBoundingClientRect(),
                k = j.height - window.innerHeight;
              if (k <= 0) return;
              const b = Math.min(Math.max(-j.top, 0), k);
              l(b / k);
            }));
        };
        return (
          y(),
          window.addEventListener("scroll", y, { passive: !0 }),
          () => {
            (window.removeEventListener("scroll", y),
              w && cancelAnimationFrame(w));
          }
        );
      }, [d]),
      !d)
    )
      return t.jsxs("div", {
        className: i,
        children: [
          s,
          t.jsx("div", {
            className:
              "flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            children: e,
          }),
        ],
      });
    const x = c > 0 ? c * a0 + g : 0,
      v =
        d && x > 0
          ? { height: `${Math.max(x, (n / 100) * g)}px` }
          : { height: `${n}vh` };
    return t.jsx("div", {
      ref: a,
      className: i,
      style: v,
      children: t.jsxs("div", {
        className: "sticky flex flex-col justify-center overflow-hidden",
        style: {
          top: "var(--site-header-height, 5rem)",
          height: "calc(100svh - var(--site-header-height, 5rem))",
        },
        children: [
          s,
          t.jsx("div", {
            ref: o,
            className:
              "flex gap-6 px-[max(1rem,calc((100vw-1280px)/2))] will-change-transform",
            style: { transform: `translate3d(${-r * c}px,0,0)` },
            children: e,
          }),
          t.jsx("div", {
            className:
              "horizontal-scroll-progress mx-auto mt-6 h-[3px] w-40 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10",
            children: t.jsx("div", {
              className:
                "h-full rounded-full bg-primary transition-[width] duration-150",
              style: { width: `${Math.round(r * 100)}%` },
            }),
          }),
        ],
      }),
    });
  },
  r0 = (e, n) => {
    if (e < 768) {
      const o = e * 0.8,
        r = Math.min(o * 1.22, n * 0.48),
        l = o * 0.09;
      return { cardW: o, cardH: r, gap: l, step: o + l, yOffset: n * 0.035 };
    }
    const s = Math.min(e * 0.44, 860, (n * 0.56) / 0.62),
      i = s * 0.62,
      a = s * 0.13;
    return { cardW: s, cardH: i, gap: a, step: s + a, yOffset: n * 0.025 };
  },
  o0 = [
    { id: "all", label: "Tất cả", categories: [] },
    {
      id: "business",
      label: "Doanh nghiệp",
      categories: [
        "xay-dung-kien-truc",
        "noi-that-vat-lieu",
        "dich-vu-doanh-nghiep",
        "logistics-van-tai",
        "khach-san-du-lich",
        "thuong-hieu-ca-nhan",
      ],
    },
    {
      id: "commerce",
      label: "Bán hàng",
      categories: ["thoi-trang", "thuong-mai-dien-tu", "f-and-b", "the-thao"],
    },
    {
      id: "services",
      label: "Dịch vụ & BĐS",
      categories: [
        "bat-dong-san",
        "o-to-xe-may",
        "lam-dep-cham-soc",
        "dich-vu-khan-cap",
      ],
    },
    {
      id: "applications",
      label: "Web app & nền tảng",
      categories: [
        "cong-nghe-ha-tang",
        "phan-mem-quan-ly",
        "tai-chinh-dau-tu",
        "giao-duc-dao-tao",
        "su-kien-giai-tri",
      ],
    },
  ],
  c0 = (e, n) => {
    const s = o0.find((i) => i.id === n);
    return !s || s.id === "all"
      ? e
      : e.filter((i) => s.categories.includes(i.categoryId));
  };
let En = null;
const Co = new Map();
let ba = 0;
const Wi = 30 * 60 * 1e3,
  l0 = (e, n) => (!n || !En ? null : En.path === e ? En : null),
  Sg = (e) => {
    En = e;
  },
  h0 = () => {
    En = null;
  },
  qg = (e, n, s) => {
    Co.set(e, { index: n, group: s, t: Date.now() });
  },
  Cg = () => {
    ba = Date.now();
  },
  d0 = (e, n, s) => {
    const i = Co.get(e);
    if (!i || Date.now() - i.t > Wi) return null;
    if (n) return i;
    if (!s) return null;
    const a = Date.now() - ba < Wi;
    return ((ba = 0), a ? i : null);
  },
  m0 = ({ items: e, done: n, total: s, phase: i, imageFor: a = qd }) => {
    const o = e.length,
      r =
        i === "engine"
          ? 8
          : o
            ? Math.round(12 + (Math.min(n, o) / o) * 88)
            : 100,
      l = i === "images" && n >= o,
      c =
        i === "engine"
          ? "Đang chuẩn bị trình xem 3D…"
          : l
            ? "Sẵn sàng — cuộn hoặc kéo để xem từng dự án."
            : `Đang tải ảnh giao diện thật của ${s} website (${Math.min(n, o)}/${o}). Chỉ mất vài giây.`;
    return t.jsxs(q.div, {
      "data-page-loading": "",
      className:
        "absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#eef2f6] px-6 text-center text-slate-950 dark:bg-[#05080f] dark:text-white",
      exit: { opacity: 0, transition: { duration: 0.6 } },
      role: "status",
      "aria-live": "polite",
      children: [
        t.jsx("p", {
          className:
            "text-xs font-bold uppercase tracking-[0.26em] text-primary sm:text-sm",
          children: "Đang mở bộ sưu tập dự án",
        }),
        t.jsx("div", {
          className: "mt-7 grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3",
          children: e.map((h, g) => {
            const p = i === "images" && g < n;
            return t.jsxs(
              "div",
              {
                className:
                  "relative aspect-[16/10] w-24 overflow-hidden rounded-[8px] bg-slate-300/50 dark:bg-white/[0.06] sm:w-28 lg:w-32",
                children: [
                  !p &&
                    t.jsx("span", {
                      className: "work-loader-shimmer absolute inset-0",
                      style: { animationDelay: `${g * 120}ms` },
                    }),
                  p &&
                    t.jsx(q.img, {
                      src: a(h.slug),
                      alt: "",
                      initial: { opacity: 0, scale: 1.15 },
                      animate: { opacity: 1, scale: 1 },
                      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                      className:
                        "absolute inset-0 h-full w-full object-cover object-top",
                    }),
                ],
              },
              h.slug,
            );
          }),
        }),
        t.jsxs("p", {
          className:
            "mt-8 font-mono text-6xl font-bold tabular-nums tracking-tight sm:text-7xl",
          children: [r, "%"],
        }),
        t.jsx("div", {
          className:
            "mt-4 h-1 w-64 overflow-hidden rounded-full bg-slate-300/60 dark:bg-white/10 sm:w-80",
          children: t.jsx(q.div, {
            className: "h-full rounded-full bg-primary",
            initial: !1,
            animate: { width: `${r}%` },
            transition: { duration: 0.4, ease: "easeOut" },
          }),
        }),
        t.jsx("p", {
          className:
            "mt-4 max-w-sm text-sm leading-6 text-slate-500 dark:text-white/55",
          children: c,
        }),
      ],
    });
  },
  u0 = !1,
  g0 = f.lazy(() =>
    zt(
      () => import("./WorkGallery-CyYN0KRM.js"),
      __vite__mapDeps([8, 4, 1, 6, 7, 5]),
    ),
  ),
  p0 = () => {
    const [e, n] = f.useState(() => ({
      w: window.innerWidth,
      h: window.innerHeight,
    }));
    return (
      f.useEffect(() => {
        let s = 0;
        const i = () => {
          (cancelAnimationFrame(s),
            (s = requestAnimationFrame(() => {
              n((a) =>
                a.w === window.innerWidth &&
                Math.abs(a.h - window.innerHeight) < 120
                  ? a
                  : { w: window.innerWidth, h: window.innerHeight },
              );
            })));
        };
        return (
          window.addEventListener("resize", i),
          () => {
            (cancelAnimationFrame(s), window.removeEventListener("resize", i));
          }
        );
      }, []),
      e
    );
  },
  x0 = ({
    projects: e,
    variant: n = "section",
    eyebrow: s,
    heading: i,
    filterable: a,
    allLink: o,
    ratio: r,
    id: l,
    fallback: c,
  }) => {
    const { pathname: h } = Ns(),
      g = Zi(),
      p = f.useRef(null),
      [d] = f.useState(
        () =>
          lo() &&
          !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      ),
      [m] = f.useState(() => l0(h, g === "POP")),
      [u] = f.useState(() => (m ? null : d0(h, g === "POP", n === "page"))),
      [x, v] = f.useState(
        (m == null ? void 0 : m.group) ??
          (u == null ? void 0 : u.group) ??
          "all",
      ),
      [w, y] = f.useState(!0),
      N = p0();
    f.useEffect(() => {
      m || h0();
    }, [m]);
    const j = f.useMemo(() => (a ? c0(e, x) : e), [e, x, a]),
      k = r ?? (n === "page" ? 1.6 : 2.2),
      S = r0(N.w, N.h).step / k,
      E = u0,
      L = Math.max(0, j.length - 1),
      T = `calc(100svh + ${Math.round(L * S)}px)`;
    if (
      (f.useLayoutEffect(() => {
        d &&
          Jr(
            zt(
              () => import("./WorkGallery-CyYN0KRM.js"),
              __vite__mapDeps([8, 4, 1, 6, 7, 5]),
            ),
          );
      }, []),
      f.useEffect(() => {
        if (!d) return;
        const D = () => {
            zt(
              () => import("./WorkGallery-CyYN0KRM.js"),
              __vite__mapDeps([8, 4, 1, 6, 7, 5]),
            ).catch(() => {});
          },
          B = window,
          K = B.requestIdleCallback
            ? B.requestIdleCallback(D, { timeout: 2500 })
            : window.setTimeout(D, 1500);
        return () => {
          B.requestIdleCallback && "cancelIdleCallback" in window
            ? window.cancelIdleCallback(K)
            : window.clearTimeout(K);
        };
      }, [d]),
      f.useEffect(() => {
        if (w || !d) return;
        const D = p.current;
        if (!D) return;
        const B = new IntersectionObserver(
          ([K]) => {
            K.isIntersecting && y(!0);
          },
          { rootMargin: "250% 0px" },
        );
        return (B.observe(D), () => B.disconnect());
      }, [w, d]),
      !d)
    )
      return t.jsx(t.Fragment, { children: c });
    const C = t.jsx("div", { className: "sticky top-0 h-[100svh]" }),
      _ =
        m || u
          ? C
          : t.jsx("div", {
              className: "sticky top-0 h-[100svh] overflow-hidden",
              children: t.jsx(m0, {
                phase: "engine",
                items: j.slice(0, 6),
                done: 0,
                total: j.length,
              }),
            });
    return t.jsxs("section", {
      ref: p,
      id: l,
      "aria-label": i,
      ...(n === "section" ? { "data-immersive": "" } : {}),
      className: "measure-height relative bg-[#eef2f6] dark:bg-[#05080f]",
      style: { height: T },
      children: [
        w
          ? t.jsx(f.Suspense, {
              fallback: _,
              children: t.jsx(g0, {
                sectionRef: p,
                variant: n,
                items: j,
                filter: a ? { all: e, group: x, onChange: v } : void 0,
                allLink: o,
                eyebrow: s,
                heading: i,
                returning: m,
                restore: u,
                loop: E,
              }),
            })
          : C,
        t.jsx("nav", {
          className: "sr-only",
          "aria-label": `Danh sách: ${i}`,
          children: j.map((D) =>
            t.jsxs(
              "a",
              {
                href: `/du-an/${D.slug}`,
                children: [D.name, " — ", D.summary],
              },
              D.slug,
            ),
          ),
        }),
      ],
    });
  },
  f0 = Zr.slice(0, 6),
  b0 = Zr,
  v0 = () =>
    t.jsx(x0, {
      id: "du-an-noi-bat",
      projects: b0,
      eyebrow: "03 / Dự án công khai",
      heading: "Dự án tiêu biểu qua nhiều ngành",
      allLink: { href: "/du-an", label: `Xem tất cả ${Rn.length} dự án` },
      fallback: t.jsx(w0, {}),
    }),
  w0 = () =>
    t.jsxs("section", {
      id: "du-an-noi-bat",
      "data-immersive": !0,
      className:
        "measure-height relative overflow-x-clip border-t border-slate-200 bg-slate-100/50 py-12 dark:border-white/[0.06] dark:bg-white/[0.02] lg:py-0",
      children: [
        t.jsx("span", {
          "aria-hidden": "true",
          className:
            "pointer-events-none absolute right-0 top-0 hidden h-0 w-0 border-slate-900 dark:border-white sm:block",
          style: {
            borderWidth: "0 28px 28px 0",
            borderTopColor: "transparent",
            borderLeftColor: "transparent",
          },
        }),
        t.jsx(i0, {
          lengthVh: 340,
          header: t.jsx("div", {
            className:
              "container relative z-10 mx-auto mb-8 px-4 sm:mb-10 lg:mb-5",
            children: t.jsxs("div", {
              className:
                "grid items-end gap-5 md:grid-cols-12 md:gap-8 lg:gap-12",
              children: [
                t.jsx(Ve, {
                  index: "03",
                  eyebrow: "DỰ ÁN CÔNG KHAI",
                  size: "lg",
                  lines: ["Dự án tiêu biểu", "qua nhiều ngành"],
                  grey: "tiêu biểu",
                  underline: "nhiều ngành",
                  className: "eh-pinned md:col-span-7 lg:col-span-8",
                }),
                t.jsx("div", {
                  className: "md:col-span-5 md:self-end lg:col-span-4",
                  children: t.jsx("div", {
                    className:
                      "md:border-l-2 md:border-slate-200 md:pl-5 md:dark:border-white/15",
                    children: t.jsxs("a", {
                      href: "/du-an",
                      className:
                        "inline-flex items-center gap-2 font-bold text-primary hover:underline",
                      children: [
                        "Xem tất cả ",
                        t.jsx(_n, { className: "h-4 w-4" }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          }),
          children: f0.map((e) =>
            t.jsxs(
              "article",
              {
                className:
                  "horizontal-scroll-card group w-[calc(100vw-5.5rem)] shrink-0 snap-center overflow-hidden rounded-[10px] border border-slate-200 bg-white shadow-sm transition-colors hover:border-primary/40 dark:border-white/10 dark:bg-white/[0.045] dark:hover:border-primary/35 sm:w-[58vw] lg:w-[min(560px,46vw)]",
                children: [
                  t.jsxs("a", {
                    href: `/du-an/${e.slug}`,
                    className: "block",
                    children: [
                      t.jsx("div", {
                        className:
                          "relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-white/[0.03]",
                        children: t.jsx("img", {
                          src: Sd(e.slug),
                          srcSet: Cd(e.slug),
                          sizes:
                            "(min-width: 1024px) min(560px, 46vw), (min-width: 640px) 58vw, 100vw",
                          alt: `Giao diện website ${e.name}`,
                          loading: "lazy",
                          decoding: "async",
                          className:
                            "h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]",
                        }),
                      }),
                      t.jsxs("div", {
                        className: "p-5 sm:p-6",
                        children: [
                          t.jsx("p", {
                            className:
                              "text-xs font-bold uppercase tracking-[0.14em] text-primary",
                            children: e.category,
                          }),
                          t.jsx("h3", {
                            className:
                              "mt-2 text-balance text-xl font-extrabold text-slate-900 transition-colors group-hover:text-primary dark:text-white sm:text-2xl",
                            children: e.name,
                          }),
                          t.jsx("p", {
                            className:
                              "mt-2.5 text-sm leading-7 text-slate-600 dark:text-white/55",
                            children: e.summary,
                          }),
                          t.jsx("p", {
                            className:
                              "mt-4 font-mono text-xs text-slate-400 dark:text-white/35",
                            children: e.domain,
                          }),
                        ],
                      }),
                    ],
                  }),
                  t.jsx("div", {
                    className:
                      "border-t border-slate-100 px-5 py-3.5 dark:border-white/10 sm:px-6",
                    children: t.jsxs("a", {
                      href: e.url,
                      target: "_blank",
                      rel: "noreferrer",
                      className:
                        "inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline",
                      children: [
                        "Xem website ",
                        t.jsx(fs, { className: "h-4 w-4" }),
                      ],
                    }),
                  }),
                ],
              },
              e.slug,
            ),
          ),
        }),
      ],
    }),
  y0 = Array.from({ length: 20 }, (e, n) => ({
    id: n + 1,
    src: Kr(n + 1),
    alt: `Mẫu giao diện website ${n + 1}`,
  })),
  k0 = (e) => (e < 640 ? 250 : e < 1024 ? 320 : 380),
  sa = site.zaloHref,
  j0 = () => {
    const { ref: e, isVisible: n } = po(),
      [s, i] = f.useState("Tất cả"),
      a = [
        { name: "Tất cả", icon: il },
        { name: "Bán hàng", icon: dn },
        { name: "Công ty", icon: ya },
        { name: "Bất động sản", icon: rl },
        { name: "Nội thất", icon: ol },
        { name: "Khách sạn", icon: cl },
        { name: "Nhà hàng", icon: ll },
        { name: "Du lịch", icon: hl },
        { name: "Ôtô - Xe máy", icon: dl },
        { name: "Giáo dục", icon: ml },
        { name: "Tin tức", icon: ul },
        { name: "Landing Page", icon: un },
      ];
    return t.jsxs("section", {
      id: "kho-giao-dien",
      className:
        "relative py-14 md:py-18 lg:py-22 bg-slate-50 transition-colors duration-500 dark:bg-[hsl(220_40%_6%)] overflow-hidden",
      children: [
        t.jsx("div", {
          className:
            "absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none",
        }),
        t.jsx("span", {
          "aria-hidden": "true",
          className:
            "pointer-events-none absolute right-6 top-10 hidden h-16 w-16 items-center justify-center rounded-full border border-slate-300 dark:border-white/20 sm:flex",
          children: t.jsx("span", {
            className: "h-1.5 w-1.5 rounded-full bg-slate-900 dark:bg-white",
          }),
        }),
        t.jsxs("div", {
          className: "container mx-auto px-4 relative z-10",
          children: [
            t.jsxs("div", {
              ref: e,
              className:
                "mb-10 md:mb-12 grid gap-6 md:grid-cols-12 md:items-end md:gap-8",
              children: [
                t.jsx(Ve, {
                  index: "04",
                  eyebrow: "KHO GIAO DIỆN",
                  size: "xl",
                  lines: ["Kho mẫu giao", "diện Website"],
                  grey: "Kho mẫu",
                  highlight: "Website",
                  className: "md:col-span-8",
                }),
                t.jsxs("div", {
                  className:
                    "flex flex-col gap-4 md:col-span-4 md:col-start-9 md:self-end md:border-l md:border-slate-300 md:pl-5 md:dark:border-white/15 sm:flex-row sm:items-center sm:gap-5",
                  children: [
                    t.jsx("div", {
                      className: "min-w-0 flex-1",
                      children: t.jsx(Ea, {
                        text: "Chọn ngành để tư vấn mẫu phù hợp — bấm vào sẽ kết nối Zalo ngay",
                        className:
                          "text-sm md:text-base text-slate-600 dark:text-white/55",
                      }),
                    }),
                    t.jsx(Lm, {
                      className:
                        "h-32 w-32 flex-none self-start text-slate-500 dark:text-white/40 sm:h-40 sm:w-40 sm:self-center",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("div", {
              className:
                "flex flex-wrap justify-center gap-2 md:gap-2.5 max-w-5xl mx-auto mb-10 md:mb-12",
              children: a.map((o, r) => {
                const l = s === o.name;
                return t.jsxs(
                  "button",
                  {
                    onClick: () => {
                      (i(o.name), window.open(sa, "_blank"));
                    },
                    className: `group inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ${l ? "bg-primary text-white shadow-lg shadow-primary/20" : "border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-primary/40 hover:bg-sky-50/60 hover:text-primary dark:border-white/10 dark:bg-white/[0.04] dark:text-white/60 dark:hover:border-primary/30 dark:hover:bg-primary/10 dark:hover:text-white"} ${n ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
                    style: { transitionDelay: `${r * 30}ms` },
                    children: [
                      t.jsx(o.icon, {
                        className: `h-4 w-4 ${l ? "text-white" : "text-slate-400 group-hover:text-primary dark:text-white/40 dark:group-hover:text-primary"}`,
                        strokeWidth: 2,
                      }),
                      o.name,
                    ],
                  },
                  r,
                );
              }),
            }),
            t.jsx("div", {
              className:
                "-mx-4 [--marquee-bg:theme(colors.slate.50)] dark:[--marquee-bg:hsl(220_40%_6%)]",
              children: t.jsx(Qr, {
                items: y0,
                getKey: (o) => String(o.id),
                cardWidth: k0,
                speed: -30,
                renderItem: (o) =>
                  t.jsxs("a", {
                    href: sa,
                    target: "_blank",
                    rel: "noreferrer",
                    "aria-label": `Xem mẫu giao diện ${o.id} — nhắn Zalo tư vấn`,
                    className:
                      "group relative block h-full w-full overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-colors hover:border-primary/50 dark:border-white/10 dark:bg-white/[0.03]",
                    children: [
                      t.jsx("img", {
                        src: o.src,
                        alt: o.alt,
                        loading: "lazy",
                        decoding: "async",
                        className:
                          "h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]",
                      }),
                      t.jsx("div", {
                        className:
                          "absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100",
                      }),
                      t.jsxs("div", {
                        className:
                          "absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition-opacity duration-200 group-hover:opacity-100",
                        children: [
                          t.jsxs("span", {
                            className: "text-xs font-semibold text-white/90",
                            children: ["Mẫu ", o.id, " · nhắn Zalo tư vấn"],
                          }),
                          t.jsx(fs, { className: "h-3.5 w-3.5 text-white/80" }),
                        ],
                      }),
                    ],
                  }),
              }),
            }),
            t.jsx("div", {
              className: `text-center mt-10 md:mt-12 transition-all duration-500 ${n ? "opacity-100" : "opacity-0"}`,
              children: t.jsxs("a", {
                href: sa,
                target: "_blank",
                rel: "noreferrer",
                className:
                  "inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20",
                children: [
                  t.jsx("img", {
                    src: "/zalo-icon.png",
                    alt: "",
                    className: "h-4 w-4 rounded-sm",
                  }),
                  "Tư vấn thiết kế riêng",
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  N0 = () => {
    const e = f.useRef(null),
      [n, s] = f.useState(!1);
    return (
      f.useEffect(() => {
        const i = e.current;
        if (!i) return;
        const a = new IntersectionObserver(
          ([o]) => {
            o.isIntersecting && s(!0);
          },
          { threshold: 0.3 },
        );
        return (a.observe(i), () => a.disconnect());
      }, []),
      t.jsxs("div", {
        ref: e,
        className:
          "relative flex h-[50vh] min-h-[320px] items-center justify-center overflow-hidden bg-[hsl(220_40%_4%)]",
        children: [
          t.jsx("div", {
            className: "absolute inset-0 flex items-center justify-center",
            children: t.jsx("div", {
              className: `h-[300px] w-[500px] rounded-full bg-primary/10 blur-[120px] transition-opacity duration-2000 ${n ? "opacity-100" : "opacity-0"}`,
            }),
          }),
          t.jsx("div", {
            className: "relative z-10 text-center px-4",
            children:
              n &&
              t.jsxs(t.Fragment, {
                children: [
                  t.jsx(q.div, {
                    initial: { opacity: 0, scale: 0.8 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
                    className:
                      "mx-auto mb-4 h-36 w-full max-w-[300px] sm:h-44 sm:max-w-[360px] md:h-52 md:max-w-[430px]",
                    children: t.jsx(Fr, {
                      dieu: "cam-on",
                      mauChu: "trang",
                      className: "h-full w-full",
                    }),
                  }),
                  t.jsx(q.h2, {
                    initial: { opacity: 0, y: 40, filter: "blur(12px)" },
                    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                    transition: {
                      duration: 1.2,
                      delay: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    className:
                      "mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl",
                    children: "TRÂN TRỌNG CẢM ƠN",
                  }),
                  t.jsx(q.div, {
                    initial: { scaleX: 0 },
                    animate: { scaleX: 1 },
                    transition: {
                      duration: 0.8,
                      delay: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    className:
                      "mx-auto mt-5 h-[2px] w-24 origin-center bg-gradient-to-r from-transparent via-primary to-transparent md:w-32",
                  }),
                  t.jsx(q.p, {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: {
                      duration: 0.8,
                      delay: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    className:
                      "mx-auto mt-4 max-w-md text-sm text-white/40 md:text-base",
                    children: "Cảm ơn bạn đã ghé thăm. Hẹn gặp lại!",
                  }),
                ],
              }),
          }),
        ],
      })
    );
  },
  zi = siteUrl(""),
  T0 = "/brand/og.png",
  me = (e, n, s, i) => {
    let a = document.head.querySelector(e);
    (a ||
      ((a = document.createElement("meta")),
      a.setAttribute(n, s),
      document.head.appendChild(a)),
      a.setAttribute("content", i));
  },
  S0 = ({
    title: e,
    description: n,
    path: s = "/",
    robots:
      i = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: a = T0,
    schema: o,
  }) => {
    f.useEffect(() => {
      var m;
      const r = `${zi}${s}`;
      ((document.title = e),
        me("meta[name='description']", "name", "description", n),
        me("meta[name='robots']", "name", "robots", i),
        me("meta[property='og:title']", "property", "og:title", e),
        me("meta[property='og:description']", "property", "og:description", n),
        me("meta[property='og:url']", "property", "og:url", r),
        me("meta[property='og:image']", "property", "og:image", a),
        me(
          "meta[property='og:image:secure_url']",
          "property",
          "og:image:secure_url",
          a,
        ),
        me(
          "meta[property='og:image:alt']",
          "property",
          "og:image:alt",
          "TDDTech - Thiết kế website, web app và phần mềm theo yêu cầu",
        ),
        me("meta[name='twitter:title']", "name", "twitter:title", e),
        me(
          "meta[name='twitter:description']",
          "name",
          "twitter:description",
          n,
        ),
        me("meta[name='twitter:image']", "name", "twitter:image", a),
        me(
          "meta[name='twitter:image:alt']",
          "name",
          "twitter:image:alt",
          "TDDTech - Thiết kế website, web app và phần mềm theo yêu cầu",
        ),
        me("meta[name='twitter:url']", "name", "twitter:url", r));
      let l = document.head.querySelector("link[rel='canonical']");
      (l ||
        ((l = document.createElement("link")),
        l.setAttribute("rel", "canonical"),
        document.head.appendChild(l)),
        l.setAttribute("href", r));
      let c = document.head.querySelector("link[rel='image_src']");
      (c ||
        ((c = document.createElement("link")),
        c.setAttribute("rel", "image_src"),
        document.head.appendChild(c)),
        c.setAttribute("href", a));
      const h = "page-structured-data";
      (m = document.getElementById(h)) == null || m.remove();
      const g = (u) =>
          (o ?? []).some((x) => {
            const v = x["@type"];
            return Array.isArray(v) ? v.includes(u) : v === u;
          }),
        d = [
          ...(s === "/"
            ? []
            : [
                ...(g("WebPage")
                  ? []
                  : [
                      {
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "@id": `${r}#webpage`,
                        name: e,
                        description: n,
                        url: r,
                        inLanguage: "vi-VN",
                        isPartOf: { "@id": siteUrl("/#website") },
                        about: { "@id": siteUrl("/#organization") },
                        image: a,
                        thumbnailUrl: a,
                        primaryImageOfPage: {
                          "@type": "ImageObject",
                          contentUrl: a,
                          url: a,
                          width: 1200,
                          height: 630,
                        },
                      },
                    ]),
                ...(g("BreadcrumbList")
                  ? []
                  : [
                      {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "@id": `${r}#breadcrumb`,
                        itemListElement: [
                          {
                            "@type": "ListItem",
                            position: 1,
                            name: "Trang chủ",
                            item: `${zi}/`,
                          },
                          {
                            "@type": "ListItem",
                            position: 2,
                            name: e.replace(/\s*\|\s*TDDTech.*$/i, ""),
                            item: r,
                          },
                        ],
                      },
                    ]),
              ]),
          ...(o ?? []),
        ];
      if (d.length > 0) {
        const u = document.createElement("script");
        ((u.id = h),
          (u.type = "application/ld+json"),
          (u.text = JSON.stringify(d.length === 1 ? d[0] : d)),
          document.head.appendChild(u));
      }
      return () => {
        var u;
        return (u = document.getElementById(h)) == null ? void 0 : u.remove();
      };
    }, [n, a, s, i, o, e]);
  },
  q0 = () => (
    S0({
      title: "TDDTech | Website là tài sản — xây đúng, vận hành mỗi tháng",
      description:
        "TDDTech xây website doanh nghiệp và website bán hàng như một tài sản: anh chị sở hữu 100%, TDDTech bảo vệ, giữ gìn và phát triển để website mang về khách hàng.",
      path: "/",
    }),
    t.jsxs("div", {
      className: "min-h-screen",
      children: [
        t.jsx(xd, {}),
        t.jsx($d, {}),
        t.jsx(yd, {}),
        t.jsx(fd, {}),
        t.jsx(nm, {}),
        t.jsx(Om, {}),
        t.jsx(Du, {}),
        t.jsx(v0, {}),
        t.jsx(j0, {}),
        t.jsx(Zm, {}),
        t.jsx(s0, {}),
        t.jsx(Vu, {}),
        t.jsx(Yu, { variant: "section" }),
        t.jsx(Xu, {}),
        t.jsx(Fu, {}),
        t.jsx(N0, {}),
        t.jsx(Uu, {}),
      ],
    })
  ),
  C0 = {
    "/thiet-ke-website": {
      path: "/thiet-ke-website",
      eyebrow: "Dịch vụ thiết kế website",
      title: "Thiết kế website theo yêu cầu cho doanh nghiệp",
      description:
        "TDDTech xây website doanh nghiệp, website bán hàng và landing page theo mục tiêu sử dụng. Phạm vi, quyền quản trị, mã nguồn và hỗ trợ sau bàn giao được xác định rõ.",
      intro:
        "TDDTech tổ chức nội dung, giao diện và chức năng theo mục tiêu doanh nghiệp. Website được bàn giao như một kênh số có thể quản trị, đo lường và tiếp tục phát triển.",
      highlights: [
        "Giao diện riêng",
        "Tối ưu mobile",
        "SEO kỹ thuật",
        "Bảo hành 5 năm",
      ],
      sections: [
        {
          title: "Một website hoàn chỉnh cần nhiều hơn giao diện đẹp",
          description:
            "TDDTech kết hợp nội dung, trải nghiệm, kỹ thuật và khả năng quản trị để website có thể vận hành lâu dài.",
          items: [
            {
              title: "Thiết kế theo thương hiệu",
              description:
                "Màu sắc, bố cục và hình ảnh được xây theo ngành nghề và nhóm khách hàng mục tiêu.",
            },
            {
              title: "Responsive thực tế",
              description:
                "Kiểm tra kỹ trên điện thoại, máy tính bảng và màn hình lớn.",
            },
            {
              title: "Nền tảng SEO",
              description:
                "Heading, metadata, schema, sitemap, internal link và URL rõ ràng.",
            },
            {
              title: "Hiệu suất tải trang",
              description:
                "Tối ưu ảnh, mã nguồn và tài nguyên để giảm thời gian chờ.",
            },
            {
              title: "Quản trị dễ sử dụng",
              description:
                "Tùy dự án có thể quản lý bài viết, sản phẩm, đơn hàng và nội dung.",
            },
            {
              title: "Đồng hành sau bàn giao",
              description:
                "Chỉnh sửa miễn phí trong phạm vi đã nghiệm thu suốt 5 năm, bảo hành trọn đời với lỗi do TDDTech gây ra.",
            },
          ],
        },
      ],
      faq: [],
    },
    "/thiet-ke-website-doanh-nghiep": {
      path: "/thiet-ke-website-doanh-nghiep",
      eyebrow: "Website công ty",
      title: "Thiết kế website doanh nghiệp và hồ sơ năng lực số",
      description:
        "Xây website doanh nghiệp với hồ sơ năng lực, dịch vụ, dự án, tin tức và luồng liên hệ. Nội dung được tổ chức để khách hàng, đối tác dễ thẩm định.",
      intro:
        "Trang web doanh nghiệp cần trả lời nhanh ba câu hỏi: công ty là ai, có năng lực gì và khách hàng nên liên hệ bằng cách nào.",
      highlights: [
        "Hồ sơ năng lực",
        "Dịch vụ rõ ràng",
        "Dự án tiêu biểu",
        "Form nhận yêu cầu",
      ],
      sections: [
        {
          title: "Cấu trúc dành cho doanh nghiệp",
          description:
            "Các module được lựa chọn theo quy trình bán hàng và nhu cầu cập nhật nội dung.",
          items: [
            {
              title: "Giới thiệu doanh nghiệp",
              description:
                "Lịch sử, đội ngũ, năng lực, pháp lý và khu vực hoạt động.",
            },
            {
              title: "Dịch vụ chuyên sâu",
              description:
                "Mỗi nhóm dịch vụ có trang riêng để SEO và nhận đúng nhu cầu.",
            },
            {
              title: "Dự án và case study",
              description:
                "Trình bày bài toán, giải pháp, phạm vi và sản phẩm đã bàn giao.",
            },
            {
              title: "Tuyển dụng và tin tức",
              description:
                "Xây dựng sự hiện diện thương hiệu và hỗ trợ truyền thông dài hạn.",
            },
            {
              title: "Thu thập khách hàng",
              description:
                "Form, hotline, Zalo và CTA được đặt theo hành trình đọc.",
            },
            {
              title: "Minh bạch thông tin",
              description:
                "Thông tin liên hệ, chính sách và quyền sở hữu được trình bày rõ.",
            },
          ],
        },
      ],
      faq: [],
    },
    "/thiet-ke-website-ban-hang": {
      path: "/thiet-ke-website-ban-hang",
      eyebrow: "Website bán hàng",
      title: "Thiết kế website bán hàng theo quy trình vận hành",
      description:
        "Xây website bán hàng với danh mục, sản phẩm, giỏ hàng và quản lý đơn theo mô hình kinh doanh. Tích hợp thanh toán, vận chuyển và tồn kho theo phạm vi.",
      intro:
        "Kênh bán hàng cần hỗ trợ cả hành trình mua của khách lẫn thao tác xử lý đơn phía sau. Tính năng được chọn theo danh mục, tồn kho và quy trình hiện tại.",
      highlights: [
        "Danh mục sản phẩm",
        "Giỏ hàng",
        "Quản lý đơn",
        "Đo lường chuyển đổi",
      ],
      sections: [
        {
          title: "Tính năng theo đúng quy trình bán hàng",
          description: "Không ép mọi cửa hàng vào một bộ tính năng giống nhau.",
          items: [
            {
              title: "Sản phẩm và giỏ hàng",
              description:
                "Biến thể, tồn kho, giá bán, khuyến mãi và quy trình đặt hàng.",
            },
            {
              title: "Thanh toán linh hoạt",
              description:
                "COD, chuyển khoản hoặc cổng thanh toán theo nhu cầu.",
            },
            {
              title: "Quản trị đơn hàng",
              description:
                "Theo dõi trạng thái, thông tin khách hàng và lịch sử xử lý.",
            },
            {
              title: "Mua hàng trên mobile",
              description:
                "Ưu tiên thao tác một tay và giảm bước không cần thiết.",
            },
            {
              title: "SEO sản phẩm",
              description:
                "URL, dữ liệu sản phẩm, nội dung danh mục và schema phù hợp.",
            },
            {
              title: "Sẵn sàng tích hợp",
              description:
                "Có thể kết nối vận chuyển, CRM, chatbot hoặc hệ thống nội bộ.",
            },
          ],
        },
      ],
      faq: [],
    },
    "/thiet-ke-landing-page": {
      path: "/thiet-ke-landing-page",
      eyebrow: "Landing page chuyển đổi",
      title: "Thiết kế landing page cho chiến dịch bán hàng",
      description:
        "Thiết kế landing page cho quảng cáo, giới thiệu sản phẩm hoặc thu khách hàng tiềm năng. Một trang, một mục tiêu, đo được chuyển đổi. Báo giá riêng sau khi trao đổi.",
      intro:
        "Trang đích tập trung vào một nhóm khách hàng, một thông điệp và một hành động chính. Nội dung và tracking được xác định theo mục tiêu chiến dịch.",
      highlights: [
        "Một mục tiêu chính",
        "3-5 ngày",
        "CTA rõ ràng",
        "Tracking chuyển đổi",
      ],
      sections: [
        {
          title: "Tối ưu cho chiến dịch",
          description:
            "Nội dung ngắn gọn, bằng chứng đủ mạnh và hành động rõ ràng.",
          items: [
            {
              title: "Thông điệp nổi bật",
              description: "Làm rõ lợi ích chính ngay ở phần đầu trang.",
            },
            {
              title: "Bố cục bán hàng",
              description:
                "Vấn đề, giải pháp, lợi ích, bằng chứng, FAQ và CTA.",
            },
            {
              title: "Tải nhanh",
              description:
                "Giảm tài nguyên thừa để hỗ trợ quảng cáo và trải nghiệm mobile.",
            },
            {
              title: "Mobile first",
              description: "Form, nút gọi và Zalo luôn dễ thao tác.",
            },
            {
              title: "SEO on-page",
              description:
                "Có title, description, heading, canonical và nội dung có thể index.",
            },
            {
              title: "Đo lường",
              description:
                "Sẵn sàng gắn Google Analytics, Pixel và sự kiện chuyển đổi.",
            },
          ],
        },
      ],
      faq: [],
    },
    "/lap-trinh-web-app": {
      path: "/lap-trinh-web-app",
      eyebrow: "Web app theo yêu cầu",
      title: "Phát triển web app nghiệp vụ theo yêu cầu",
      description:
        "Phát triển web app quản lý, dashboard, đặt lịch, CRM mini và cổng nội bộ. Bắt đầu từ vai trò người dùng, dữ liệu và quy tắc nghiệp vụ.",
      intro:
        "TDDTech bắt đầu bằng việc bóc tách người dùng, dữ liệu và luồng nghiệp vụ trước khi chọn công nghệ hoặc thiết kế màn hình.",
      highlights: [
        "Phân tích nghiệp vụ",
        "Phân quyền",
        "Dashboard",
        "Dễ nâng cấp",
      ],
      sections: [
        {
          title: "Xây hệ thống từ quy trình thật",
          description:
            "Tập trung giảm thao tác thủ công và giúp dữ liệu dễ kiểm soát.",
          items: [
            {
              title: "Bóc tách nghiệp vụ",
              description:
                "Mô tả vai trò, trạng thái và luồng xử lý trước khi lập trình.",
            },
            {
              title: "Tài khoản và phân quyền",
              description:
                "Mỗi nhóm người dùng chỉ thấy và thao tác đúng phần việc.",
            },
            {
              title: "Kiến trúc dễ bảo trì",
              description: "Tổ chức mã nguồn và dữ liệu để thuận tiện mở rộng.",
            },
            {
              title: "Dashboard trực quan",
              description:
                "Chỉ số và trạng thái quan trọng được tổng hợp rõ ràng.",
            },
            {
              title: "Bảo mật cơ bản",
              description:
                "Kiểm soát truy cập, dữ liệu đầu vào và sao lưu theo phạm vi.",
            },
            {
              title: "Hỗ trợ vận hành",
              description:
                "Hướng dẫn sử dụng, nghiệm thu và bảo hành sau bàn giao.",
            },
          ],
        },
      ],
      faq: [],
    },
    "/dich-vu-seo-website": {
      path: "/dich-vu-seo-website",
      eyebrow: "SEO website",
      title: "Dịch vụ SEO website theo cấu trúc và nhu cầu tìm kiếm",
      description:
        "Audit và tối ưu technical SEO, kiến trúc nội dung, metadata, schema, liên kết nội bộ và hiệu suất. Kế hoạch triển khai được xác định theo website và nhóm từ khóa.",
      intro:
        "SEO bắt đầu từ việc giúp Google crawl, hiểu và phân loại đúng từng trang, sau đó mới mở rộng nội dung theo nhu cầu tìm kiếm thật của khách hàng.",
      highlights: [
        "Audit kỹ thuật",
        "Cấu trúc nội dung",
        "Internal link",
        "Theo dõi Search Console",
      ],
      sections: [
        {
          title: "SEO dựa trên cấu trúc và giá trị thật",
          description:
            "Không cam kết vị trí tuyệt đối hoặc sử dụng nội dung sao chép hàng loạt.",
          items: [
            {
              title: "Nghiên cứu từ khóa",
              description:
                "Phân nhóm từ khóa theo dịch vụ, vấn đề và giai đoạn ra quyết định.",
            },
            {
              title: "Kiến trúc website",
              description:
                "Thiết kế URL, danh mục và liên kết nội bộ để Google tìm thấy trang quan trọng.",
            },
            {
              title: "Technical SEO",
              description:
                "Kiểm tra index, canonical, sitemap, schema, heading và khả năng render.",
            },
            {
              title: "Hiệu suất",
              description:
                "Giảm ảnh nặng, mã thừa và các yếu tố ảnh hưởng trải nghiệm tải trang.",
            },
            {
              title: "Nội dung chuyên sâu",
              description:
                "Viết nội dung riêng cho từng ý định tìm kiếm và có bằng chứng phù hợp.",
            },
            {
              title: "Đo lường",
              description:
                "Theo dõi truy vấn, trang đích và chuyển đổi để ưu tiên cải thiện.",
            },
          ],
        },
      ],
      faq: [],
    },
  },
  Eg = {
    "/thiet-ke-website": [
      {
        question: "TDDTech dùng mẫu có sẵn hay thiết kế riêng?",
        answer:
          "Hướng giao diện được xây theo thương hiệu và phạm vi dự án. Có thể tham khảo bố cục thị trường nhưng không sao chép nguyên website khác.",
      },
      {
        question: "Khách hàng cần chuẩn bị nội dung gì?",
        answer:
          "Nên chuẩn bị logo, thông tin doanh nghiệp, dịch vụ, hình ảnh, thông tin liên hệ và các tài liệu pháp lý được phép công bố. TDDTech sẽ cung cấp checklist theo dự án.",
      },
      {
        question: "Website có thể bổ sung trang sau này không?",
        answer:
          "Có, nếu kiến trúc ban đầu được xây phù hợp. Phần bổ sung ngoài phạm vi nghiệm thu sẽ được đánh giá và báo chi phí trước.",
      },
      {
        question: "Chi phí duy trì hằng năm gồm gì?",
        answer:
          "Thông thường gồm domain, hosting hoặc máy chủ và dịch vụ bên thứ ba nếu có. Mức phí phụ thuộc nhà cung cấp và cấu hình sử dụng.",
      },
      {
        question: "Website có cài đo lường không?",
        answer:
          "Có thể cấu hình GA4, Search Console, Pixel hoặc sự kiện chuyển đổi theo phạm vi báo giá và quyền truy cập khách hàng cung cấp.",
      },
    ],
    "/thiet-ke-website-doanh-nghiep": [
      {
        question: "Website doanh nghiệp nên có bao nhiêu trang?",
        answer:
          "Tùy mô hình, thường cần trang chủ, giới thiệu, từng nhóm dịch vụ, dự án, bài viết, chính sách và liên hệ. Số URL được chốt sau khi lập sitemap.",
      },
      {
        question: "Có làm hồ sơ năng lực trực tuyến không?",
        answer:
          "Có. Hồ sơ có thể gồm năng lực, công nghệ, quy trình, dự án, đội ngũ và chính sách bàn giao, nhưng chỉ sử dụng thông tin có thể xác minh.",
      },
      {
        question: "Có hỗ trợ website đa ngôn ngữ không?",
        answer:
          "Có. Phạm vi cần xác định số ngôn ngữ, bên cung cấp bản dịch và cách quản trị từng phiên bản.",
      },
      {
        question: "Nhân viên công ty có tự đăng bài được không?",
        answer:
          "Có thể xây CMS và phân quyền theo vai trò để cập nhật dịch vụ, dự án, tin tức hoặc tuyển dụng.",
      },
      {
        question: "Có chuyển dữ liệu từ website cũ không?",
        answer:
          "Có thể. TDDTech cần kiểm tra cấu trúc và khối lượng dữ liệu trước khi xác nhận phương án, thời gian và chi phí.",
      },
    ],
    "/thiet-ke-website-ban-hang": [
      {
        question: "Website bán hàng cần những chức năng cốt lõi nào?",
        answer:
          "Thông thường gồm danh mục, sản phẩm, tìm kiếm hoặc bộ lọc, giỏ hàng, đặt hàng, quản trị đơn, khách hàng và nội dung chính sách.",
      },
      {
        question: "Có tích hợp thanh toán online không?",
        answer:
          "Có thể tích hợp theo cổng thanh toán và hồ sơ doanh nghiệp của khách hàng. Phí cổng và điều kiện xét duyệt thuộc nhà cung cấp.",
      },
      {
        question: "Có kết nối đơn vị vận chuyển không?",
        answer:
          "Có thể kết nối API nếu đơn vị vận chuyển hỗ trợ và tài khoản khách hàng đủ điều kiện. Phạm vi được kiểm tra trước khi báo giá.",
      },
      {
        question: "Website có quản lý tồn kho không?",
        answer:
          "Có thể quản lý tồn theo sản phẩm hoặc biến thể. Nếu cần đồng bộ nhiều kho, POS hoặc sàn thương mại điện tử thì phải bóc tách riêng.",
      },
      {
        question: "Có nhập sản phẩm hàng loạt không?",
        answer:
          "Có thể hỗ trợ import theo file có cấu trúc. Khối lượng dữ liệu, hình ảnh và yêu cầu làm sạch dữ liệu sẽ ảnh hưởng thời gian triển khai.",
      },
      {
        question: "Có xuất hóa đơn điện tử tự động không?",
        answer:
          "Có thể nghiên cứu tích hợp nhà cung cấp hóa đơn có API. Đây là hạng mục riêng và phụ thuộc tài khoản, quy trình kế toán của doanh nghiệp.",
      },
      {
        question: "Website bán hàng có chuẩn SEO không?",
        answer:
          "TDDTech thiết lập nền tảng kỹ thuật; để tăng khả năng cạnh tranh cần tiếp tục tối ưu danh mục, mô tả sản phẩm, nội dung tư vấn và liên kết nội bộ.",
      },
      {
        question: "Có kết nối Facebook Pixel và Google Analytics không?",
        answer:
          "Có thể cấu hình Pixel, GA4 và các sự kiện thương mại điện tử theo phạm vi và quyền truy cập được cung cấp.",
      },
    ],
    "/thiet-ke-landing-page": [
      {
        question: "Landing page khác website doanh nghiệp thế nào?",
        answer:
          "Landing page thường tập trung một chiến dịch và một CTA; website doanh nghiệp có nhiều trang phục vụ thương hiệu, dịch vụ và SEO dài hạn.",
      },
      {
        question: "Chi phí landing page bao nhiêu?",
        answer:
          "TDDTech báo giá riêng sau khi hiểu mục tiêu chiến dịch, số section, nội dung, form, tracking và tích hợp cần có. Landing page cho từng mùa bán hàng cũng có thể nằm trong gói vận hành Growth.",
      },
      {
        question: "Có gắn form và gửi dữ liệu về đâu?",
        answer:
          "Form có thể gửi email, Google Sheet, CRM hoặc hệ thống khác nếu có phương thức tích hợp phù hợp.",
      },
      {
        question: "Có dùng landing page để SEO không?",
        answer:
          "Có thể index và tối ưu on-page, nhưng một landing page ngắn không thay thế chiến lược website nhiều trang và nội dung dài hạn.",
      },
      {
        question: "Có hỗ trợ A/B testing không?",
        answer:
          "Có thể xây biến thể hoặc cấu hình công cụ thử nghiệm theo phạm vi. Cần đủ lưu lượng và mục tiêu đo lường rõ để kết quả có ý nghĩa.",
      },
    ],
    "/lap-trinh-web-app": [
      {
        question: "Web app có thể làm những hệ thống nào?",
        answer:
          "Có thể phát triển dashboard, CRM mini, đặt lịch, quản lý đơn, cổng nội bộ, workflow và các công cụ nghiệp vụ theo yêu cầu.",
      },
      {
        question: "Tại sao phải bóc tách nghiệp vụ trước khi báo giá?",
        answer:
          "Cùng một tên chức năng có thể có nhiều vai trò, trạng thái và quy tắc khác nhau. Bóc tách giúp xác định đúng khối lượng và tránh phát sinh không kiểm soát.",
      },
      {
        question: "Có chia dự án thành nhiều giai đoạn không?",
        answer:
          "Có. Có thể triển khai MVP trước, nghiệm thu module cốt lõi rồi mở rộng theo dữ liệu vận hành thực tế.",
      },
      {
        question: "Có làm API hoặc kết nối hệ thống khác không?",
        answer:
          "Có nếu hệ thống bên thứ ba cung cấp tài liệu và quyền truy cập phù hợp. Rủi ro, giới hạn và phí dịch vụ được nêu trước.",
      },
      {
        question: "Dữ liệu được sao lưu thế nào?",
        answer:
          "Phương án sao lưu phụ thuộc hạ tầng, mức độ quan trọng và ngân sách. Chu kỳ lưu, thời gian giữ và quy trình khôi phục cần ghi trong phạm vi vận hành.",
      },
    ],
    "/dich-vu-seo-website": [
      {
        question: "SEO bao lâu có kết quả?",
        answer:
          "Không có thời gian cố định. Website mới, mức cạnh tranh, chất lượng nội dung, kỹ thuật và độ tin cậy của tên miền đều ảnh hưởng tốc độ tăng trưởng.",
      },
      {
        question: "TDDTech có cam kết top 1 không?",
        answer:
          "Không. Không đơn vị nào kiểm soát thuật toán và đối thủ. TDDTech cam kết phạm vi công việc, tiêu chuẩn triển khai và báo cáo minh bạch.",
      },
      {
        question: "Website mới có cần viết blog ngay không?",
        answer:
          "Nên hoàn thiện trang dịch vụ, giới thiệu, dự án, chính sách và cấu trúc trước; sau đó mới ưu tiên bài viết theo cụm chủ đề có giá trị.",
      },
      {
        question: "Có xử lý website bị mất index không?",
        answer:
          "Có thể audit nguyên nhân như robots, noindex, canonical, lỗi máy chủ, nội dung hoặc vấn đề chất lượng. Khả năng phục hồi phụ thuộc nguyên nhân thực tế.",
      },
      {
        question: "SEO có bao gồm backlink không?",
        answer:
          "Chỉ triển khai nếu được ghi rõ trong phạm vi. TDDTech không dùng backlink rác hoặc cam kết số lượng liên kết không gắn với chất lượng.",
      },
      {
        question: "Cần cung cấp quyền truy cập gì?",
        answer:
          "Tùy phạm vi có thể cần Search Console, Analytics, CMS, hosting, DNS hoặc công cụ đo lường. Quyền truy cập nên cấp theo mức tối thiểu cần thiết.",
      },
    ],
  },
  E0 = [
    Ga,
    Is,
    we,
    on,
    Os,
    Ka,
    ya,
    Ya,
    An,
    Ua,
    gl,
    hn,
    pl,
    xl,
    Os,
    Is,
    we,
    Kn,
    An,
    Ga,
    on,
    Is,
    we,
    Kn,
    Kn,
    Ua,
    xs,
    on,
    hn,
    Ka,
    we,
    Ya,
    xs,
    on,
    Os,
    Kn,
  ];
let M0 = 0;
const Eo = Object.fromEntries(
    Object.entries(C0).map(([e, n]) => [
      e,
      {
        ...n,
        sections: n.sections.map((s) => ({
          ...s,
          items: s.items.map((i) => ({ ...i, icon: E0[M0++] })),
        })),
      },
    ]),
  ),
  L0 = () => {
    const e = f.useRef(null),
      n = f.useRef(!1),
      s = f.useRef(),
      i = f.useRef({ x: -100, y: -100 }),
      [a, o] = f.useState(!1);
    f.useEffect(() => {
      if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;
      const l = e.current;
      if (!l) return;
      const c = () => {
          const { x: d, y: m } = i.current;
          ((l.style.transform = `translate3d(${d - 5}px, ${m - 5}px, 0)`),
            (s.current = void 0));
        },
        h = (d) => {
          ((i.current = { x: d.clientX, y: d.clientY }),
            s.current === void 0 && (s.current = requestAnimationFrame(c)),
            n.current || ((n.current = !0), o(!0)));
        },
        g = () => {
          ((n.current = !1), o(!1));
        },
        p = () => {
          ((n.current = !0), o(!0));
        };
      return (
        document.addEventListener("mousemove", h, { passive: !0 }),
        document.documentElement.addEventListener("mouseleave", g),
        document.documentElement.addEventListener("mouseenter", p),
        () => {
          (document.removeEventListener("mousemove", h),
            document.documentElement.removeEventListener("mouseleave", g),
            document.documentElement.removeEventListener("mouseenter", p),
            s.current !== void 0 && cancelAnimationFrame(s.current));
        }
      );
    }, []);
    const [r] = f.useState(
      () =>
        typeof window < "u" &&
        ("ontouchstart" in window || navigator.maxTouchPoints > 0),
    );
    return r
      ? null
      : t.jsxs(t.Fragment, {
          children: [
            t.jsx("style", { children: "* { cursor: none !important; }" }),
            t.jsx("div", {
              ref: e,
              className: "fixed pointer-events-none z-[99999]",
              style: {
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#22d3ee",
                boxShadow: "0 0 8px rgba(34,211,238,0.6)",
                opacity: a ? 1 : 0,
                left: 0,
                top: 0,
                transform: "translate3d(-100px, -100px, 0)",
                willChange: "transform, opacity",
              },
            }),
          ],
        });
  },
  Di = [
    ["[data-motion]", ""],
    ["section h2", "heading"],
    ["section .container > p, section .container > div > p", "up"],
    ["section article, section figure, section .surface-card", "card"],
    ["section .container .grid > *", "up"],
  ],
  _0 =
    "#home, [data-immersive], header, footer, [data-no-motion], [role=dialog], .split-mask",
  A0 = (e = !0) => {
    f.useEffect(() => {
      if (
        !e ||
        typeof IntersectionObserver > "u" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      )
        return;
      const n = document.documentElement;
      n.classList.add("motion-ready");
      const s = new IntersectionObserver(
          (j) => {
            for (const k of j) {
              if (!k.isIntersecting) continue;
              const b = k.target;
              (b.classList.add("is-in"),
                s.unobserve(b),
                A.reveal(
                  b,
                  b.dataset.motion || "up",
                  parseFloat(b.style.getPropertyValue("--motion-delay")) || 0,
                ));
            }
          },
          { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
        ),
        i = new WeakSet(),
        a = Di.map(([j]) => j).join(", "),
        o = () => {
          document.querySelectorAll(a).forEach((j) => {
            var E, L, T;
            if (
              i.has(j) ||
              (i.add(j),
              j.hasAttribute("data-motion")
                ? j.closest("[data-no-motion], [role=dialog]")
                : j.closest(_0))
            )
              return;
            if (!j.dataset.motion) {
              if (
                ((E = j.parentElement) != null && E.closest("[data-motion]")) ||
                ((L = j.parentElement) != null &&
                  L.closest('[style*="opacity"]')) ||
                /\bopacity-(0|100)\b/.test(j.className)
              )
                return;
              j.dataset.motion =
                ((T = Di.find(([C]) => j.matches(C))) == null
                  ? void 0
                  : T[1]) || "up";
            }
            const b = j.parentElement
                ? Array.from(j.parentElement.children)
                : [],
              S = Math.max(0, b.indexOf(j));
            (j.style.setProperty("--motion-delay", `${Math.min(S, 6) * 80}ms`),
              (!j.offsetWidth && !j.offsetHeight) ||
              j.getBoundingClientRect().bottom < 0
                ? j.classList.add("is-in")
                : s.observe(j));
          });
        };
      o();
      let r = 0;
      const l = new MutationObserver(() => {
        (window.clearTimeout(r),
          (r = window.setTimeout(() => {
            (o(), d());
          }, 250)));
      });
      l.observe(document.body, { childList: !0, subtree: !0 });
      const c = new Set(),
        h = new WeakMap(),
        g = new IntersectionObserver(
          (j) => {
            for (const k of j)
              k.isIntersecting ? c.add(k.target) : c.delete(k.target);
            v();
          },
          { rootMargin: "10% 0px" },
        ),
        p = new WeakSet(),
        d = () =>
          document.querySelectorAll("[data-scroll]").forEach((j) => {
            p.has(j) ||
              (p.add(j), j.style.setProperty("--p", "0"), g.observe(j));
          });
      d();
      let m = 0,
        u = 0;
      const x = () => {
          m = 0;
          const j = window.innerHeight;
          for (const k of c) {
            const b = k.getBoundingClientRect().top,
              S = Math.min(1, Math.max(0, (j - b) / j)),
              E = h.get(k) ?? 0;
            S <= E + 0.002 ||
              (h.set(k, S),
              k.style.setProperty("--p", S.toFixed(3)),
              S >= 1 && (g.unobserve(k), c.delete(k)));
          }
          c.size &&
            performance.now() - u < 250 &&
            (m = requestAnimationFrame(x));
        },
        v = () => {
          ((u = performance.now()),
            !m && c.size && (m = requestAnimationFrame(x)));
        };
      (window.addEventListener("scroll", v, { passive: !0 }), v());
      let w = 0;
      const y = () => {
          const j = window.innerHeight;
          document
            .querySelectorAll("[data-motion]:not(.is-in)")
            .forEach((k) => {
              const b = k.getBoundingClientRect();
              (b.bottom < 0 ||
                (b.top < j && b.bottom > 0 && (b.width || b.height))) &&
                k.classList.add("is-in");
            });
        },
        N = () => {
          (window.clearTimeout(w), (w = window.setTimeout(y, 400)));
        };
      return (
        window.addEventListener("scroll", N, { passive: !0 }),
        (w = window.setTimeout(y, 1200)),
        () => {
          (window.removeEventListener("scroll", v),
            window.removeEventListener("scroll", N),
            window.clearTimeout(w),
            cancelAnimationFrame(m),
            g.disconnect(),
            window.clearTimeout(r),
            l.disconnect(),
            s.disconnect(),
            n.classList.remove("motion-ready"));
        }
      );
    }, [e]);
  },
  Hi = [
    [130.81, 196, 246.94, 293.66, 329.63],
    [110, 164.81, 196, 246.94, 261.63],
    [87.31, 174.61, 220, 261.63, 329.63],
    [98, 146.83, 196, 246.94, 329.63],
  ],
  rn = 9,
  Mo = 0.06;
let Bi = !1,
  qe = null,
  Mn = null,
  Qe = null,
  Lo = 0,
  Oa = 0,
  Vi = 0;
const Xi = () => {
    const e = Lt.core();
    if (!e || !qe) return;
    const { ac: n } = e,
      s = n.currentTime + 0.05,
      i = Hi[Vi % Hi.length];
    Vi += 1;
    const a = n.createBiquadFilter();
    ((a.type = "lowpass"),
      a.frequency.setValueAtTime(900, s),
      a.frequency.linearRampToValueAtTime(1500, s + rn * 0.5),
      a.frequency.linearRampToValueAtTime(800, s + rn + 3),
      a.connect(qe),
      i.forEach((o, r) => {
        [0, 6].forEach((l, c) => {
          const h = n.createOscillator();
          ((h.type = c ? "triangle" : "sine"),
            (h.frequency.value = o * Math.pow(2, l / 1200)));
          const g = n.createGain(),
            p = (r === 0 ? 0.22 : 0.14) / i.length;
          (g.gain.setValueAtTime(1e-4, s),
            g.gain.exponentialRampToValueAtTime(p, s + 3.2),
            g.gain.setValueAtTime(p, s + rn - 1),
            g.gain.exponentialRampToValueAtTime(1e-4, s + rn + 3.5),
            h.connect(g).connect(a),
            h.start(s),
            h.stop(s + rn + 3.6));
        });
      }));
  },
  _o = () => {
    Oa = requestAnimationFrame(_o);
    const e = Lt.ready();
    if (!e || !Mn || !Qe) return;
    const n = Math.min(1, Math.abs(ja()) / 45),
      s = e.ac.currentTime;
    (Mn.gain.setTargetAtTime(0.004 + n * n * 0.05, s, n > 0.1 ? 0.25 : 0.8),
      Qe.frequency.setTargetAtTime(380 + n * 2200, s, 0.3));
  },
  aa = () => {
    if (Bi) return;
    const e = Lt.core();
    if (!e) return;
    Bi = !0;
    const { ac: n } = e;
    ((qe = n.createGain()), (qe.gain.value = 0));
    const s = n.createGain();
    ((s.gain.value = 0.8),
      qe.connect(e.bus),
      qe.connect(s).connect(e.verb),
      qe.gain.setTargetAtTime(Lt.isEnabled() ? Mo : 0, n.currentTime, 2.5));
    const i = n.createBufferSource();
    ((i.buffer = e.noise),
      (i.loop = !0),
      (Qe = n.createBiquadFilter()),
      (Qe.type = "bandpass"),
      (Qe.Q.value = 0.6),
      (Qe.frequency.value = 400),
      (Mn = n.createGain()),
      (Mn.gain.value = 0),
      i.connect(Qe).connect(Mn).connect(qe),
      i.start(),
      Xi(),
      (Lo = window.setInterval(() => {
        Lt.ready() && Xi();
      }, rn * 1e3)),
      (Oa = requestAnimationFrame(_o)));
  },
  $0 = () => {
    if (typeof window > "u") return () => {};
    const e = Lt.onUnlock(() => {
      Lt.isEnabled() && aa();
    });
    Lt.isUnlocked() && Lt.isEnabled() && aa();
    const n = Lt.subscribe(() => {
      Lt.isEnabled() && Lt.isUnlocked() && aa();
      const s = Lt.core();
      qe &&
        s &&
        qe.gain.setTargetAtTime(Lt.isEnabled() ? Mo : 0, s.ac.currentTime, 0.6);
    });
    return () => {
      (e(), n(), window.clearInterval(Lo), cancelAnimationFrame(Oa));
    };
  },
  Fi =
    'a[href], button, [role="button"], summary, .plan-card, label[for], input[type="submit"]',
  P0 = () => {
    f.useEffect(() => {
      const e = $0(),
        n = window.matchMedia("(pointer: fine)").matches;
      let s = null,
        i = 0;
      const a = (l) => {
          var g, p;
          if (!n || l.pointerType !== "mouse") return;
          const c =
            (p = (g = l.target) == null ? void 0 : g.closest) == null
              ? void 0
              : p.call(g, Fi);
          if (!c || c === s) return;
          s = c;
          const h = performance.now();
          h - i < 70 ||
            ((i = h), A.hover(ne(c), c.matches(".plan-card, article")));
        },
        o = (l) => {
          s &&
            !(l.relatedTarget instanceof Node && s.contains(l.relatedTarget)) &&
            (s = null);
        },
        r = (l) => {
          var h, g;
          const c =
            (g = (h = l.target) == null ? void 0 : h.closest) == null
              ? void 0
              : g.call(h, Fi);
          c && A.click(ne(c), { gain: 0.045 });
        };
      return (
        document.addEventListener("pointerover", a, { passive: !0 }),
        document.addEventListener("pointerout", o, { passive: !0 }),
        document.addEventListener("pointerdown", r, { passive: !0 }),
        () => {
          (e(),
            document.removeEventListener("pointerover", a),
            document.removeEventListener("pointerout", o),
            document.removeEventListener("pointerdown", r));
        }
      );
    }, []);
  },
  Gi = new WeakSet(),
  R0 = () => {
    f.useEffect(() => {
      if (
        typeof window > "u" ||
        !("contentVisibility" in document.documentElement.style)
      )
        return;
      const e = typeof window.requestIdleCallback == "function",
        n = (m) =>
          e
            ? window.requestIdleCallback(m, { timeout: 1200 })
            : window.setTimeout(
                () => m({ timeRemaining: () => 12, didTimeout: !1 }),
                400,
              ),
        s = (m) => (e ? window.cancelIdleCallback(m) : window.clearTimeout(m)),
        i = [];
      let a = 0,
        o = 0,
        r = 0;
      const l = () => {
          r = performance.now();
        },
        c = () => {
          const m = window.innerHeight;
          let u = -1,
            x = 1 / 0;
          return (
            i.forEach((v, w) => {
              const y = v.getBoundingClientRect(),
                N = y.top >= m ? y.top - m : y.bottom <= 0 ? -y.bottom : 0;
              N < x && ((x = N), (u = w));
            }),
            u < 0 ? null : i.splice(u, 1)[0]
          );
        },
        h = (m) => {
          if (((a = 0), performance.now() - r < 400)) {
            a = n(h);
            return;
          }
          for (; i.length && (m.timeRemaining() > 3 || m.didTimeout);) {
            const u = c();
            if (!u) break;
            if (
              !(
                !u.isConnected ||
                getComputedStyle(u).contentVisibility !== "auto"
              ) &&
              ((u.style.contentVisibility = "visible"),
              u.offsetHeight,
              (u.style.contentVisibility = ""),
              m.didTimeout)
            )
              break;
          }
          i.length && (a = n(h));
        },
        g = () => {
          ((o = 0),
            document.querySelectorAll("section").forEach((m) => {
              Gi.has(m) || (Gi.add(m), i.push(m));
            }),
            i.length && !a && (a = n(h)));
        },
        p = () => {
          o || (o = window.setTimeout(g, 1e3));
        };
      p();
      const d = new MutationObserver(p);
      return (
        d.observe(document.body, { childList: !0, subtree: !0 }),
        window.addEventListener("scroll", l, { passive: !0 }),
        () => {
          (d.disconnect(),
            window.removeEventListener("scroll", l),
            window.clearTimeout(o),
            a && s(a));
        }
      );
    }, []);
  },
  I0 = () => {
    f.useEffect(() => {
      if (typeof IntersectionObserver > "u") return;
      const e = new WeakSet(),
        n = new IntersectionObserver(
          (o) => {
            for (const r of o) {
              const l = r.target;
              try {
                r.isIntersecting ? l.unpauseAnimations() : l.pauseAnimations();
              } catch {}
            }
          },
          { rootMargin: "200px 0px" },
        );
      let s = 0;
      const i = () => {
        ((s = 0),
          document
            .querySelectorAll("animate, animateMotion, animateTransform")
            .forEach((o) => {
              let l = o.ownerSVGElement;
              for (; l != null && l.ownerSVGElement;) l = l.ownerSVGElement;
              l && !e.has(l) && (e.add(l), n.observe(l));
            }));
      };
      i();
      const a = new MutationObserver(() => {
        s || (s = window.setTimeout(i, 400));
      });
      return (
        a.observe(document.body, { childList: !0, subtree: !0 }),
        () => {
          (a.disconnect(), n.disconnect(), window.clearTimeout(s));
        }
      );
    }, []);
  },
  At = {NotFound: () =>
      zt(
        () => import("./NotFound-ChbCxhR4.js"),
        __vite__mapDeps([9, 4, 5, 6, 7]),
      ),
PrivacyPolicy: () =>
      zt(
        () => import("./PrivacyPolicy-B70vyD1l.js"),
        __vite__mapDeps([10, 4, 6, 5, 7]),
      ),
Terms: () =>
      zt(
        () => import("./Terms-DUW2xTNl.js"),
        __vite__mapDeps([11, 4, 6, 5, 7]),
      ),
MarketingPage: () =>
      zt(
        () => import("./MarketingPage-BLJ5g1qS.js"),
        __vite__mapDeps([12, 4, 13, 7, 14, 6, 5]),
      ),
Projects: () =>
      zt(
        () => import("./Projects-C0kpfK7V.js"),
        __vite__mapDeps([15, 4, 7, 6, 5]),
      ),
ProjectDetail: () =>
      zt(
        () => import("./ProjectDetail-DyXWaEkD.js"),
        __vite__mapDeps([16, 4, 6, 5, 7]),
      ),
CompanyPage: () =>
      zt(
        () => import("./CompanyPage-BQ4Zl90y.js"),
        __vite__mapDeps([17, 4, 14, 6, 5, 7]),
      ),
CapabilityProfile: () =>
      zt(
        () => import("./CapabilityProfile-DePoOAgZ.js"),
        __vite__mapDeps([18, 4, 13, 7, 14, 6, 5]),
      ),
Blog: () =>
      zt(
        () => import("./Blog-s__qQNIp.js"),
        __vite__mapDeps([19, 4, 14, 6, 20, 3, 21, 5, 7]),
      ),
BlogPost: () =>
      zt(
        () => import("./BlogPost-DdsJrswq.js"),
        __vite__mapDeps([22, 4, 20, 3, 21, 6, 5, 7]),
      ),
SearchPage: () =>
      zt(
        () => import("./SearchPage-CSDOjFZF.js"),
        __vite__mapDeps([23, 4, 14, 6, 20, 3, 5, 7]),
      )},
  O0 = new Set([
    "/gioi-thieu",
    "/bang-gia-thiet-ke-website",
    "/quy-trinh-thiet-ke-website",
    "/bao-hanh-bao-tri-website",
    "/lien-he",
  ]),
  Ao = (e) => {
    const n = e.replace(/\/+$/, "") || "/";
    return n === "/"
      ? null
      : Eo[n]
        ? At.MarketingPage
        : O0.has(n)
          ? At.CompanyPage
          : n === "/du-an"
            ? At.Projects
            : n.startsWith("/du-an/")
              ? At.ProjectDetail
              : n === "/ho-so-nang-luc"
                ? At.CapabilityProfile
                : n === "/blog"
                    ? At.Blog
                    : n.startsWith("/blog/")
                      ? At.BlogPost
                      : n === "/tim-kiem"
                        ? At.SearchPage
                        : n === "/privacy-policy"
                          ? At.PrivacyPolicy
                          : n === "/terms"
                            ? At.Terms
                            : null;
  },
  Ki = (e) => {
    var n;
    (n = Ao(e)) == null || n().catch(() => {});
  },
  Yi = (e) => {
    var i, a;
    const n =
      (a = (i = e.target) == null ? void 0 : i.closest) == null
        ? void 0
        : a.call(i, "a");
    if (
      !(n instanceof HTMLAnchorElement) ||
      !n.href ||
      (n.target && n.target !== "_self") ||
      n.hasAttribute("download")
    )
      return null;
    const s = new URL(n.href, window.location.href);
    return s.origin !== window.location.origin ||
      /\.[a-z0-9]{2,5}$/i.test(s.pathname)
      ? null
      : s;
  },
  $o = "/loader-logo.png",
  Ui = () =>
    new Promise((e) =>
      requestAnimationFrame(() => requestAnimationFrame(() => e())),
    ),
  W0 = (e) => new Promise((n) => window.setTimeout(n, e)),
  z0 = () => {
    const e = document.createElement("div");
    ((e.className = "page-loader pl-now"),
      e.setAttribute("role", "progressbar"),
      e.setAttribute("aria-label", "Đang tải trang"),
      (e.innerHTML = `<img class="pl-mark" src="${$o}" alt="" width="96" height="96" /><span class="pl-pct">0%</span><span class="pl-track"><span class="pl-fill"></span></span><span class="pl-note">Đang tải trang…</span>`),
      document.body.appendChild(e));
    const n = e.querySelector(".pl-pct"),
      s = e.querySelector(".pl-note"),
      i = e.querySelector(".pl-fill");
    let a = 0,
      o = 0,
      r = 0;
    const l = () => {
      ((a += (o - a) * 0.22),
        o - a < 0.3 && (a = o),
        (n.textContent = `${Math.floor(a)}%`),
        (i.style.transform = `scaleX(${a / 100})`),
        (r = requestAnimationFrame(l)));
    };
    r = requestAnimationFrame(l);
    let c = !0;
    return {
      note: (h) => {
        s.textContent !== h && (s.textContent = h);
      },
      set: (h) => {
        ((o = Math.max(o, Math.min(100, h))),
          c ||
            ((c = !0),
            (i.style.transition = ""),
            (r = requestAnimationFrame(l))));
      },
      glide: (h, g) => {
        (cancelAnimationFrame(r),
          (c = !1),
          (i.style.transition = `transform ${g}ms cubic-bezier(.2,.7,.3,1)`),
          (i.style.transform = `scaleX(${h / 100})`),
          (n.textContent = `${Math.floor(h)}%`),
          (a = o = h));
      },
      close: () => {
        (cancelAnimationFrame(r),
          (i.style.transition = "transform .25s ease"),
          (i.style.transform = "scaleX(1)"),
          (n.textContent = "100%"),
          window.setTimeout(() => {
            (e.classList.add("pl-out"),
              window.setTimeout(() => e.remove(), 380));
          }, 160));
      },
    };
  },
  D0 = async (e, n) => {
    var p;
    const s = Ao(e),
      i = window,
      a = i.__XL,
      o = (p = i.__xlPageOf) == null ? void 0 : p.call(i, e),
      r = (d) => {
        const m = d.indexOf("assets/");
        return m < 0 ? "" : d.slice(m + 8).split("?")[0];
      },
      l = new Set(
        performance.getEntriesByType("resource").map((d) => r(d.name)),
      ),
      c = a && o ? (a.p[o] ?? []).filter((d) => !l.has(d)) : [],
      h = c.reduce((d, m) => d + ((a == null ? void 0 : a.s[m]) ?? 0), 0);
    let g = null;
    if (h > 0 && typeof PerformanceObserver < "u") {
      let d = 0;
      const m = new Set(c);
      ((g = new PerformanceObserver((u) => {
        u.getEntries().forEach((x) => {
          const v = r(x.name);
          m.delete(v) &&
            ((d += (a == null ? void 0 : a.s[v]) ?? 0), n((d / h) * 40));
        });
      })),
        g.observe({ type: "resource" }));
    }
    try {
      await (s == null ? void 0 : s());
    } catch {}
    (g == null || g.disconnect(), n(40));
  },
  H0 = ["/thiet-ke-website",
"/du-an",
"/blog",
"/bang-gia-thiet-ke-website",
"/ho-so-nang-luc",
"/gioi-thieu"],
  B0 = () => {
    const e = nc(),
      n = Ns(),
      s = Zi(),
      i = f.useRef(!1),
      a = f.useRef(null);
    return (
      f.useEffect(() => {
        var o;
        ((o = a.current) == null || o.call(a), (a.current = null));
      }, [n.key]),
      f.useEffect(() => {
        const o = (l) => {
            if (
              l.defaultPrevented ||
              l.button !== 0 ||
              l.metaKey ||
              l.ctrlKey ||
              l.shiftKey ||
              l.altKey
            )
              return;
            const c = Yi(l);
            if (
              !c ||
              (c.pathname === window.location.pathname &&
                c.search === window.location.search) ||
              (l.preventDefault(), i.current)
            )
              return;
            i.current = !0;
            const h = z0();
            (async () => {
              try {
                (await D0(c.pathname, h.set), await Ui(), h.glide(50, 900));
                const g = new Promise((p) => {
                  a.current = p;
                });
                (e(c.pathname + c.search + c.hash),
                  await Promise.race([g, W0(4e3)]),
                  await to((p) => h.set(50 + p * 48), h.note),
                  await Ui());
              } finally {
                (h.close(), (i.current = !1));
              }
            })();
          },
          r = (l) => {
            const c = Yi(l);
            c && Ki(c.pathname);
          };
        return (
          document.addEventListener("click", o),
          document.addEventListener("pointerover", r, { passive: !0 }),
          document.addEventListener("touchstart", r, { passive: !0 }),
          document.addEventListener("focusin", r),
          () => {
            (document.removeEventListener("click", o),
              document.removeEventListener("pointerover", r),
              document.removeEventListener("touchstart", r),
              document.removeEventListener("focusin", r));
          }
        );
      }, [e]),
      f.useEffect(() => {
        const o = new Image();
        o.src = $o;
      }, []),
      f.useEffect(() => {
        const o = navigator.connection;
        if (
          (o != null && o.saveData) ||
          /2g/.test((o == null ? void 0 : o.effectiveType) ?? "")
        )
          return;
        const r = (c) => {
            typeof window.requestIdleCallback == "function"
              ? window.requestIdleCallback(c, { timeout: 6e3 })
              : setTimeout(c, 3e3);
          },
          l = window.setTimeout(() => r(() => H0.forEach(Ki)), 2500);
        return () => window.clearTimeout(l);
      }, []),
      f.useLayoutEffect(() => {
        if (s === "POP") return;
        if (!n.hash) {
          Bs(0);
          return;
        }
        const o = [];
        let r = !1;
        const l = () => {
          r = !0;
        };
        (window.addEventListener("wheel", l, { passive: !0 }),
          window.addEventListener("touchstart", l, { passive: !0 }),
          window.addEventListener("keydown", l));
        const c = () => {
            try {
              return document.querySelector(decodeURIComponent(n.hash));
            } catch {
              return null;
            }
          },
          h = () => {
            const d = c();
            d && !r && Bs(d, -120);
          };
        let g = 0;
        const p = () => {
          if (c()) {
            h();
            for (const d of [150, 400, 800, 1300, 2e3, 3e3])
              o.push(window.setTimeout(h, d));
            return;
          }
          ++g < 30 ? o.push(window.setTimeout(p, 100)) : Bs(0);
        };
        return (
          p(),
          () => {
            (o.forEach((d) => window.clearTimeout(d)),
              window.removeEventListener("wheel", l),
              window.removeEventListener("touchstart", l),
              window.removeEventListener("keydown", l));
          }
        );
      }, [n.key, n.hash, s]),
      null
    );
  },
  V0 = f.lazy(At.NotFound),
  X0 = f.lazy(At.PrivacyPolicy),
  F0 = f.lazy(At.Terms),
  G0 = f.lazy(At.MarketingPage),
  K0 = f.lazy(At.Projects),
  Y0 = f.lazy(At.ProjectDetail),
  wn = f.lazy(At.CompanyPage),
  U0 = f.lazy(At.CapabilityProfile),
  Qi = f.lazy(At.Blog),
  Q0 = f.lazy(At.BlogPost),
  Z0 = f.lazy(At.SearchPage),
  tg = new sc(),
  eg = () => {
    const e = Ns();
    useRouteScrollReset(e, Bs);
    return (
      f.useEffect(() => {
        const n = window;
        if (!document.getElementById("boot-loader")) return;
        const s = document.querySelector("#boot-loader .pl-note");
        to(
          (i) => {
            var a;
            return (a = n.__xlSet) == null ? void 0 : a.call(n, 60 + i * 39);
          },
          (i) => {
            s && s.textContent !== i && (s.textContent = i);
          },
        ).then(() => {
          var i;
          return (i = n.__xlFinish) == null ? void 0 : i.call(n);
        });
      }, [e.pathname]),
      t.jsxs(
        rc,
        {
          location: e,
          children: [t.jsx(Ht, { path: "/", element: t.jsx(q0, {}) }),
Object.values(Eo).map((n) =>
              t.jsx(
                Ht,
                { path: n.path, element: t.jsx(G0, { page: n }) },
                n.path,
              ),
            ),
t.jsx(Ht, {
              path: "/dich-vu",
              element: t.jsx(oc, { to: "/thiet-ke-website", replace: !0 }),
            }),
t.jsx(Ht, { path: "/du-an", element: t.jsx(K0, {}) }),
t.jsx(Ht, { path: "/du-an/:slug", element: t.jsx(Y0, {}) }),
t.jsx(Ht, {
              path: "/gioi-thieu",
              element: t.jsx(wn, { kind: "about" }),
            }),
t.jsx(Ht, { path: "/ho-so-nang-luc", element: t.jsx(U0, {}) }),
t.jsx(Ht, {
              path: "/bang-gia-thiet-ke-website",
              element: t.jsx(wn, { kind: "pricing" }),
            }),
t.jsx(Ht, {
              path: "/quy-trinh-thiet-ke-website",
              element: t.jsx(wn, { kind: "process" }),
            }),
t.jsx(Ht, {
              path: "/bao-hanh-bao-tri-website",
              element: t.jsx(wn, { kind: "warranty" }),
            }),
t.jsx(Ht, {
              path: "/lien-he",
              element: t.jsx(wn, { kind: "contact" }),
            }),
t.jsx(Ht, { path: "/blog", element: t.jsx(Qi, {}) }),
t.jsx(Ht, { path: "/blog/page/:page", element: t.jsx(Qi, {}) }),
t.jsx(Ht, { path: "/blog/:slug", element: t.jsx(Q0, {}) }),
t.jsx(Ht, { path: "/tim-kiem", element: t.jsx(Z0, {}) }),
t.jsx(Ht, { path: "/privacy-policy", element: t.jsx(X0, {}) }),
t.jsx(Ht, { path: "/terms", element: t.jsx(F0, {}) }),
t.jsx(Ht, { path: "*", element: t.jsx(V0, {}) })],
        },
        e.pathname,
      )
    );
  },
  ng = () => {
    const e = window,
      n = typeof document < "u" && document.getElementById("boot-loader"),
      [s, i] = f.useState(0),
      a = f.useRef(null);
    return (
      f.useEffect(() => {
        var w;
        const o = e.__XL,
          r =
            (w = e.__xlPageOf) == null
              ? void 0
              : w.call(e, window.location.pathname);
        if (n || !o || !r) return;
        const l = (y) => {
            const N = y.indexOf("assets/");
            return N < 0 ? "" : y.slice(N + 8).split("?")[0];
          },
          c = new Set(
            performance.getEntriesByType("resource").map((y) => l(y.name)),
          ),
          h = (o.p[r] ?? []).filter((y) => !c.has(y)),
          g = h.reduce((y, N) => y + (o.s[N] ?? 0), 0);
        if (!g) return;
        let p = 0,
          d = 0,
          m = 0;
        const u = new Set(h),
          x = new PerformanceObserver((y) => {
            y.getEntries().forEach((N) => {
              const j = l(N.name);
              u.delete(j) && (p += o.s[j] ?? 0);
            });
          });
        x.observe({ type: "resource" });
        const v = () => {
          const y = (p / g) * 95;
          ((d += (y - d) * 0.2),
            i(Math.floor(d)),
            a.current && (a.current.style.transform = `scaleX(${d / 100})`),
            (m = requestAnimationFrame(v)));
        };
        return (
          (m = requestAnimationFrame(v)),
          () => {
            (x.disconnect(), cancelAnimationFrame(m));
          }
        );
      }, []),
      n
        ? null
        : t.jsxs("div", {
            className: "page-loader",
            role: "progressbar",
            "aria-label": "Đang tải trang",
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": s,
            children: [
              t.jsx("img", {
                className: "pl-mark",
                src: "/loader-logo.png",
                alt: "",
                width: 96,
                height: 96,
              }),
              t.jsxs("span", { className: "pl-pct", children: [s, "%"] }),
              t.jsx("span", {
                className: "pl-track",
                children: t.jsx("span", { ref: a, className: "pl-fill" }),
              }),
              t.jsx("span", {
                className: "pl-note",
                children: "Đang tải trang…",
              }),
            ],
          })
    );
  },
  sg = () => (
    td(),
    ih(),
    A0(),
    P0(),
    R0(),
    I0(),
    t.jsx(ac, {
      client: tg,
      children: t.jsx(nd, {
        defaultTheme: "light",
        children: t.jsxs(zh, {
          children: [
            t.jsx(ah, {}),
            t.jsx(Wh, {}),
            t.jsx(L0, {}),
            t.jsxs(ic, {
              children: [
                t.jsx(B0, {}),
                t.jsx(f.Suspense, {
                  fallback: t.jsx(ng, {}),
                  children: t.jsx(eg, {}),
                }),
              ],
            }),
          ],
        }),
      }),
    })
  ),
  ag = () =>
    new Promise((e) => {
      const n = document.getElementById("main-css");
      if (!n || n.sheet) return e();
      let s = !1;
      const i = () => {
          s || ((s = !0), clearInterval(o), clearTimeout(r), e());
        },
        a = () => {
          n.sheet && i();
        },
        o = window.setInterval(a, 50),
        r = window.setTimeout(i, 15e3);
      (n.addEventListener("load", a),
        n.addEventListener("error", i, { once: !0 }));
    });
"scrollRestoration" in history &&
  !location.hash &&
  ((history.scrollRestoration = "manual"),
  window.scrollTo(0, 0),
  window.addEventListener(
    "load",
    () => {
      window.setTimeout(() => {
        history.scrollRestoration = "manual";
      }, 1500);
    },
    { once: !0 },
  ));
export default sg;
export {
  Yr as $,
  qd as A,
  Cg as B,
  pg as C,
  wd as D,
  Wu as E,
  Fu as F,
  Vd as G,
  xd as H,
  Iu as I,
  es as J,
  $u as K,
  n0 as L,
  bg as M,
  po as N,
  gg as O,
  fg as P,
  Ie as Q,
  Bu as R,
  Ur as S,
  wg as T,
  yg as U,
  vg as V,
  x0 as W,
  kg as X,
  Ft as Y,
  Eo as Z,
  Na as _,
  jg as a,
  bo as a0,
  gs as a1,
  kd as a2,
  Ai as a3,
  r0 as a4,
  Lt as a5,
  Jr as a6,
  At as a7,
  Bs as a8,
  qg as a9,
  dg as aa,
  Sg as ab,
  m0 as ac,
  mg as ad,
  Hs as ae,
  Sd as b,
  Dt as c,
  Cd as d,
  Eg as e,
  Zr as f,
  oo as g,
  V as h,
  X as i,
  It as j,
  Ze as k,
  xe as l,
  Vn as m,
  nt as n,
  Kd as o,
  Rn as p,
  ug as q,
  xg as r,
  A as s,
  Sn as t,
  S0 as u,
  Tg as v,
  Ng as w,
  Yu as x,
  c0 as y,
  o0 as z,
};
