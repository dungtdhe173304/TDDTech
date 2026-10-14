import * as R from "react";
import * as Pu from "react-dom";
export { R as r, R as R, R as b, Pu as a, Pu as v };
export * as j from "react/jsx-runtime";
export { createRoot as q } from "react-dom/client";
export {
  QueryClient as Q,
  QueryClientProvider as m,
} from "@tanstack/react-query";
export {
  BrowserRouter as B,
  Navigate as N,
  Routes as n,
  Route as p,
  useLocation as g,
  useNavigationType as i,
  useNavigate as k,
  useParams as t,
  useSearchParams as w,
} from "react-router-dom";
const Hm = ["top", "right", "bottom", "left"],
  bt = Math.min,
  Ne = Math.max,
  Cl = Math.round,
  Ui = Math.floor,
  dt = (e) => ({ x: e, y: e }),
  Km = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Gm = { start: "end", end: "start" };
function Es(e, t, n) {
  return Ne(e, bt(t, n));
}
function _t(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Rt(e) {
  return e.split("-")[0];
}
function mr(e) {
  return e.split("-")[1];
}
function _u(e) {
  return e === "x" ? "y" : "x";
}
function Ru(e) {
  return e === "y" ? "height" : "width";
}
const Ym = new Set(["top", "bottom"]);
function at(e) {
  return Ym.has(Rt(e)) ? "y" : "x";
}
function Ou(e) {
  return _u(at(e));
}
function qm(e, t, n) {
  n === void 0 && (n = !1);
  const r = mr(e),
    i = Ou(e),
    l = Ru(i);
  let o =
    i === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return (t.reference[l] > t.floating[l] && (o = Pl(o)), [o, Pl(o)]);
}
function Xm(e) {
  const t = Pl(e);
  return [Cs(e), t, Cs(t)];
}
function Cs(e) {
  return e.replace(/start|end/g, (t) => Gm[t]);
}
const Ka = ["left", "right"],
  Ga = ["right", "left"],
  Zm = ["top", "bottom"],
  Jm = ["bottom", "top"];
function bm(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? Ga : Ka) : t ? Ka : Ga;
    case "left":
    case "right":
      return t ? Zm : Jm;
    default:
      return [];
  }
}
function ev(e, t, n, r) {
  const i = mr(e);
  let l = bm(Rt(e), n === "start", r);
  return (
    i && ((l = l.map((o) => o + "-" + i)), t && (l = l.concat(l.map(Cs)))),
    l
  );
}
function Pl(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Km[t]);
}
function tv(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function jd(e) {
  return typeof e != "number"
    ? tv(e)
    : { top: e, right: e, bottom: e, left: e };
}
function _l(e) {
  const { x: t, y: n, width: r, height: i } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n,
  };
}
function Ya(e, t, n) {
  let { reference: r, floating: i } = e;
  const l = at(t),
    o = Ou(t),
    s = Ru(o),
    u = Rt(t),
    a = l === "y",
    p = r.x + r.width / 2 - i.width / 2,
    f = r.y + r.height / 2 - i.height / 2,
    h = r[s] / 2 - i[s] / 2;
  let v;
  switch (u) {
    case "top":
      v = { x: p, y: r.y - i.height };
      break;
    case "bottom":
      v = { x: p, y: r.y + r.height };
      break;
    case "right":
      v = { x: r.x + r.width, y: f };
      break;
    case "left":
      v = { x: r.x - i.width, y: f };
      break;
    default:
      v = { x: r.x, y: r.y };
  }
  switch (mr(t)) {
    case "start":
      v[o] -= h * (n && a ? -1 : 1);
      break;
    case "end":
      v[o] += h * (n && a ? -1 : 1);
      break;
  }
  return v;
}
const nv = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: i = "absolute",
      middleware: l = [],
      platform: o,
    } = n,
    s = l.filter(Boolean),
    u = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let a = await o.getElementRects({ reference: e, floating: t, strategy: i }),
    { x: p, y: f } = Ya(a, r, u),
    h = r,
    v = {},
    g = 0;
  for (let y = 0; y < s.length; y++) {
    const { name: S, fn: d } = s[y],
      {
        x: c,
        y: m,
        data: w,
        reset: x,
      } = await d({
        x: p,
        y: f,
        initialPlacement: r,
        placement: h,
        strategy: i,
        middlewareData: v,
        rects: a,
        platform: o,
        elements: { reference: e, floating: t },
      });
    ((p = c ?? p),
      (f = m ?? f),
      (v = { ...v, [S]: { ...v[S], ...w } }),
      x &&
        g <= 50 &&
        (g++,
        typeof x == "object" &&
          (x.placement && (h = x.placement),
          x.rects &&
            (a =
              x.rects === !0
                ? await o.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: i,
                  })
                : x.rects),
          ({ x: p, y: f } = Ya(a, h, u))),
        (y = -1)));
  }
  return { x: p, y: f, placement: h, strategy: i, middlewareData: v };
};
async function ni(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: i, platform: l, rects: o, elements: s, strategy: u } = e,
    {
      boundary: a = "clippingAncestors",
      rootBoundary: p = "viewport",
      elementContext: f = "floating",
      altBoundary: h = !1,
      padding: v = 0,
    } = _t(t, e),
    g = jd(v),
    S = s[h ? (f === "floating" ? "reference" : "floating") : f],
    d = _l(
      await l.getClippingRect({
        element:
          (n = await (l.isElement == null ? void 0 : l.isElement(S))) == null ||
          n
            ? S
            : S.contextElement ||
              (await (l.getDocumentElement == null
                ? void 0
                : l.getDocumentElement(s.floating))),
        boundary: a,
        rootBoundary: p,
        strategy: u,
      }),
    ),
    c =
      f === "floating"
        ? { x: r, y: i, width: o.floating.width, height: o.floating.height }
        : o.reference,
    m = await (l.getOffsetParent == null
      ? void 0
      : l.getOffsetParent(s.floating)),
    w = (await (l.isElement == null ? void 0 : l.isElement(m)))
      ? (await (l.getScale == null ? void 0 : l.getScale(m))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    x = _l(
      l.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: s,
            rect: c,
            offsetParent: m,
            strategy: u,
          })
        : c,
    );
  return {
    top: (d.top - x.top + g.top) / w.y,
    bottom: (x.bottom - d.bottom + g.bottom) / w.y,
    left: (d.left - x.left + g.left) / w.x,
    right: (x.right - d.right + g.right) / w.x,
  };
}
const rv = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: i,
          rects: l,
          platform: o,
          elements: s,
          middlewareData: u,
        } = t,
        { element: a, padding: p = 0 } = _t(e, t) || {};
      if (a == null) return {};
      const f = jd(p),
        h = { x: n, y: r },
        v = Ou(i),
        g = Ru(v),
        y = await o.getDimensions(a),
        S = v === "y",
        d = S ? "top" : "left",
        c = S ? "bottom" : "right",
        m = S ? "clientHeight" : "clientWidth",
        w = l.reference[g] + l.reference[v] - h[v] - l.floating[g],
        x = h[v] - l.reference[v],
        P = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a));
      let _ = P ? P[m] : 0;
      (!_ || !(await (o.isElement == null ? void 0 : o.isElement(P)))) &&
        (_ = s.floating[m] || l.floating[g]);
      const O = w / 2 - x / 2,
        F = _ / 2 - y[g] / 2 - 1,
        N = bt(f[d], F),
        U = bt(f[c], F),
        ne = N,
        b = _ - y[g] - U,
        G = _ / 2 - y[g] / 2 + O,
        Ie = Es(ne, G, b),
        X =
          !u.arrow &&
          mr(i) != null &&
          G !== Ie &&
          l.reference[g] / 2 - (G < ne ? N : U) - y[g] / 2 < 0,
        le = X ? (G < ne ? G - ne : G - b) : 0;
      return {
        [v]: h[v] + le,
        data: {
          [v]: Ie,
          centerOffset: G - Ie - le,
          ...(X && { alignmentOffset: le }),
        },
        reset: X,
      };
    },
  }),
  iv = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: i,
              middlewareData: l,
              rects: o,
              initialPlacement: s,
              platform: u,
              elements: a,
            } = t,
            {
              mainAxis: p = !0,
              crossAxis: f = !0,
              fallbackPlacements: h,
              fallbackStrategy: v = "bestFit",
              fallbackAxisSideDirection: g = "none",
              flipAlignment: y = !0,
              ...S
            } = _t(e, t);
          if ((n = l.arrow) != null && n.alignmentOffset) return {};
          const d = Rt(i),
            c = at(s),
            m = Rt(s) === s,
            w = await (u.isRTL == null ? void 0 : u.isRTL(a.floating)),
            x = h || (m || !y ? [Pl(s)] : Xm(s)),
            P = g !== "none";
          !h && P && x.push(...ev(s, y, g, w));
          const _ = [s, ...x],
            O = await ni(t, S),
            F = [];
          let N = ((r = l.flip) == null ? void 0 : r.overflows) || [];
          if ((p && F.push(O[d]), f)) {
            const G = qm(i, o, w);
            F.push(O[G[0]], O[G[1]]);
          }
          if (
            ((N = [...N, { placement: i, overflows: F }]),
            !F.every((G) => G <= 0))
          ) {
            var U, ne;
            const G = (((U = l.flip) == null ? void 0 : U.index) || 0) + 1,
              Ie = _[G];
            if (
              Ie &&
              (!(f === "alignment" ? c !== at(Ie) : !1) ||
                N.every((C) => C.overflows[0] > 0 && at(C.placement) === c))
            )
              return {
                data: { index: G, overflows: N },
                reset: { placement: Ie },
              };
            let X =
              (ne = N.filter((le) => le.overflows[0] <= 0).sort(
                (le, C) => le.overflows[1] - C.overflows[1],
              )[0]) == null
                ? void 0
                : ne.placement;
            if (!X)
              switch (v) {
                case "bestFit": {
                  var b;
                  const le =
                    (b = N.filter((C) => {
                      if (P) {
                        const L = at(C.placement);
                        return L === c || L === "y";
                      }
                      return !0;
                    })
                      .map((C) => [
                        C.placement,
                        C.overflows
                          .filter((L) => L > 0)
                          .reduce((L, M) => L + M, 0),
                      ])
                      .sort((C, L) => C[1] - L[1])[0]) == null
                      ? void 0
                      : b[0];
                  le && (X = le);
                  break;
                }
                case "initialPlacement":
                  X = s;
                  break;
              }
            if (i !== X) return { reset: { placement: X } };
          }
          return {};
        },
      }
    );
  };
function qa(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Xa(e) {
  return Hm.some((t) => e[t] >= 0);
}
const lv = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: r = "referenceHidden", ...i } = _t(e, t);
          switch (r) {
            case "referenceHidden": {
              const l = await ni(t, { ...i, elementContext: "reference" }),
                o = qa(l, n.reference);
              return {
                data: { referenceHiddenOffsets: o, referenceHidden: Xa(o) },
              };
            }
            case "escaped": {
              const l = await ni(t, { ...i, altBoundary: !0 }),
                o = qa(l, n.floating);
              return { data: { escapedOffsets: o, escaped: Xa(o) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Ud = new Set(["left", "top"]);
async function ov(e, t) {
  const { placement: n, platform: r, elements: i } = e,
    l = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
    o = Rt(n),
    s = mr(n),
    u = at(n) === "y",
    a = Ud.has(o) ? -1 : 1,
    p = l && u ? -1 : 1,
    f = _t(t, e);
  let {
    mainAxis: h,
    crossAxis: v,
    alignmentAxis: g,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis,
      };
  return (
    s && typeof g == "number" && (v = s === "end" ? g * -1 : g),
    u ? { x: v * p, y: h * a } : { x: h * a, y: v * p }
  );
}
const sv = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: i, y: l, placement: o, middlewareData: s } = t,
            u = await ov(t, e);
          return o === ((n = s.offset) == null ? void 0 : n.placement) &&
            (r = s.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: i + u.x, y: l + u.y, data: { ...u, placement: o } };
        },
      }
    );
  },
  uv = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: i } = t,
            {
              mainAxis: l = !0,
              crossAxis: o = !1,
              limiter: s = {
                fn: (S) => {
                  let { x: d, y: c } = S;
                  return { x: d, y: c };
                },
              },
              ...u
            } = _t(e, t),
            a = { x: n, y: r },
            p = await ni(t, u),
            f = at(Rt(i)),
            h = _u(f);
          let v = a[h],
            g = a[f];
          if (l) {
            const S = h === "y" ? "top" : "left",
              d = h === "y" ? "bottom" : "right",
              c = v + p[S],
              m = v - p[d];
            v = Es(c, v, m);
          }
          if (o) {
            const S = f === "y" ? "top" : "left",
              d = f === "y" ? "bottom" : "right",
              c = g + p[S],
              m = g - p[d];
            g = Es(c, g, m);
          }
          const y = s.fn({ ...t, [h]: v, [f]: g });
          return {
            ...y,
            data: { x: y.x - n, y: y.y - r, enabled: { [h]: l, [f]: o } },
          };
        },
      }
    );
  },
  av = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: i, rects: l, middlewareData: o } = t,
            { offset: s = 0, mainAxis: u = !0, crossAxis: a = !0 } = _t(e, t),
            p = { x: n, y: r },
            f = at(i),
            h = _u(f);
          let v = p[h],
            g = p[f];
          const y = _t(s, t),
            S =
              typeof y == "number"
                ? { mainAxis: y, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...y };
          if (u) {
            const m = h === "y" ? "height" : "width",
              w = l.reference[h] - l.floating[m] + S.mainAxis,
              x = l.reference[h] + l.reference[m] - S.mainAxis;
            v < w ? (v = w) : v > x && (v = x);
          }
          if (a) {
            var d, c;
            const m = h === "y" ? "width" : "height",
              w = Ud.has(Rt(i)),
              x =
                l.reference[f] -
                l.floating[m] +
                ((w && ((d = o.offset) == null ? void 0 : d[f])) || 0) +
                (w ? 0 : S.crossAxis),
              P =
                l.reference[f] +
                l.reference[m] +
                (w ? 0 : ((c = o.offset) == null ? void 0 : c[f]) || 0) -
                (w ? S.crossAxis : 0);
            g < x ? (g = x) : g > P && (g = P);
          }
          return { [h]: v, [f]: g };
        },
      }
    );
  },
  cv = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: i, rects: l, platform: o, elements: s } = t,
            { apply: u = () => {}, ...a } = _t(e, t),
            p = await ni(t, a),
            f = Rt(i),
            h = mr(i),
            v = at(i) === "y",
            { width: g, height: y } = l.floating;
          let S, d;
          f === "top" || f === "bottom"
            ? ((S = f),
              (d =
                h ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(s.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((d = f), (S = h === "end" ? "top" : "bottom"));
          const c = y - p.top - p.bottom,
            m = g - p.left - p.right,
            w = bt(y - p[S], c),
            x = bt(g - p[d], m),
            P = !t.middlewareData.shift;
          let _ = w,
            O = x;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (O = m),
            (r = t.middlewareData.shift) != null && r.enabled.y && (_ = c),
            P && !h)
          ) {
            const N = Ne(p.left, 0),
              U = Ne(p.right, 0),
              ne = Ne(p.top, 0),
              b = Ne(p.bottom, 0);
            v
              ? (O = g - 2 * (N !== 0 || U !== 0 ? N + U : Ne(p.left, p.right)))
              : (_ =
                  y - 2 * (ne !== 0 || b !== 0 ? ne + b : Ne(p.top, p.bottom)));
          }
          await u({ ...t, availableWidth: O, availableHeight: _ });
          const F = await o.getDimensions(s.floating);
          return g !== F.width || y !== F.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Kl() {
  return typeof window < "u";
}
function vr(e) {
  return $d(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Me(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function ht(e) {
  var t;
  return (t = ($d(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function $d(e) {
  return Kl() ? e instanceof Node || e instanceof Me(e).Node : !1;
}
function tt(e) {
  return Kl() ? e instanceof Element || e instanceof Me(e).Element : !1;
}
function pt(e) {
  return Kl() ? e instanceof HTMLElement || e instanceof Me(e).HTMLElement : !1;
}
function Za(e) {
  return !Kl() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Me(e).ShadowRoot;
}
const fv = new Set(["inline", "contents"]);
function mi(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: i } = nt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !fv.has(i);
}
const dv = new Set(["table", "td", "th"]);
function pv(e) {
  return dv.has(vr(e));
}
const hv = [":popover-open", ":modal"];
function Gl(e) {
  return hv.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const mv = ["transform", "translate", "scale", "rotate", "perspective"],
  vv = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  yv = ["paint", "layout", "strict", "content"];
function Tu(e) {
  const t = Nu(),
    n = tt(e) ? nt(e) : e;
  return (
    mv.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    vv.some((r) => (n.willChange || "").includes(r)) ||
    yv.some((r) => (n.contain || "").includes(r))
  );
}
function gv(e) {
  let t = en(e);
  for (; pt(t) && !fr(t);) {
    if (Tu(t)) return t;
    if (Gl(t)) return null;
    t = en(t);
  }
  return null;
}
function Nu() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const wv = new Set(["html", "body", "#document"]);
function fr(e) {
  return wv.has(vr(e));
}
function nt(e) {
  return Me(e).getComputedStyle(e);
}
function Yl(e) {
  return tt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function en(e) {
  if (vr(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Za(e) && e.host) || ht(e);
  return Za(t) ? t.host : t;
}
function Bd(e) {
  const t = en(e);
  return fr(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : pt(t) && mi(t)
      ? t
      : Bd(t);
}
function ri(e, t, n) {
  var r;
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  const i = Bd(e),
    l = i === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = Me(i);
  if (l) {
    const s = Ps(o);
    return t.concat(
      o,
      o.visualViewport || [],
      mi(i) ? i : [],
      s && n ? ri(s) : [],
    );
  }
  return t.concat(i, ri(i, [], n));
}
function Ps(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Qd(e) {
  const t = nt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const i = pt(e),
    l = i ? e.offsetWidth : n,
    o = i ? e.offsetHeight : r,
    s = Cl(n) !== l || Cl(r) !== o;
  return (s && ((n = l), (r = o)), { width: n, height: r, $: s });
}
function Lu(e) {
  return tt(e) ? e : e.contextElement;
}
function qn(e) {
  const t = Lu(e);
  if (!pt(t)) return dt(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: i, $: l } = Qd(t);
  let o = (l ? Cl(n.width) : n.width) / r,
    s = (l ? Cl(n.height) : n.height) / i;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    { x: o, y: s }
  );
}
const Sv = dt(0);
function Vd(e) {
  const t = Me(e);
  return !Nu() || !t.visualViewport
    ? Sv
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function xv(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== Me(e)) ? !1 : t);
}
function Rn(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  const i = e.getBoundingClientRect(),
    l = Lu(e);
  let o = dt(1);
  t && (r ? tt(r) && (o = qn(r)) : (o = qn(e)));
  const s = xv(l, n, r) ? Vd(l) : dt(0);
  let u = (i.left + s.x) / o.x,
    a = (i.top + s.y) / o.y,
    p = i.width / o.x,
    f = i.height / o.y;
  if (l) {
    const h = Me(l),
      v = r && tt(r) ? Me(r) : r;
    let g = h,
      y = Ps(g);
    for (; y && r && v !== g;) {
      const S = qn(y),
        d = y.getBoundingClientRect(),
        c = nt(y),
        m = d.left + (y.clientLeft + parseFloat(c.paddingLeft)) * S.x,
        w = d.top + (y.clientTop + parseFloat(c.paddingTop)) * S.y;
      ((u *= S.x),
        (a *= S.y),
        (p *= S.x),
        (f *= S.y),
        (u += m),
        (a += w),
        (g = Me(y)),
        (y = Ps(g)));
    }
  }
  return _l({ width: p, height: f, x: u, y: a });
}
function Fu(e, t) {
  const n = Yl(e).scrollLeft;
  return t ? t.left + n : Rn(ht(e)).left + n;
}
function Wd(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    i = r.left + t.scrollLeft - (n ? 0 : Fu(e, r)),
    l = r.top + t.scrollTop;
  return { x: i, y: l };
}
function kv(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: i } = e;
  const l = i === "fixed",
    o = ht(r),
    s = t ? Gl(t.floating) : !1;
  if (r === o || (s && l)) return n;
  let u = { scrollLeft: 0, scrollTop: 0 },
    a = dt(1);
  const p = dt(0),
    f = pt(r);
  if (
    (f || (!f && !l)) &&
    ((vr(r) !== "body" || mi(o)) && (u = Yl(r)), pt(r))
  ) {
    const v = Rn(r);
    ((a = qn(r)), (p.x = v.x + r.clientLeft), (p.y = v.y + r.clientTop));
  }
  const h = o && !f && !l ? Wd(o, u, !0) : dt(0);
  return {
    width: n.width * a.x,
    height: n.height * a.y,
    x: n.x * a.x - u.scrollLeft * a.x + p.x + h.x,
    y: n.y * a.y - u.scrollTop * a.y + p.y + h.y,
  };
}
function Ev(e) {
  return Array.from(e.getClientRects());
}
function Cv(e) {
  const t = ht(e),
    n = Yl(e),
    r = e.ownerDocument.body,
    i = Ne(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    l = Ne(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + Fu(e);
  const s = -n.scrollTop;
  return (
    nt(r).direction === "rtl" && (o += Ne(t.clientWidth, r.clientWidth) - i),
    { width: i, height: l, x: o, y: s }
  );
}
function Pv(e, t) {
  const n = Me(e),
    r = ht(e),
    i = n.visualViewport;
  let l = r.clientWidth,
    o = r.clientHeight,
    s = 0,
    u = 0;
  if (i) {
    ((l = i.width), (o = i.height));
    const a = Nu();
    (!a || (a && t === "fixed")) && ((s = i.offsetLeft), (u = i.offsetTop));
  }
  return { width: l, height: o, x: s, y: u };
}
const _v = new Set(["absolute", "fixed"]);
function Rv(e, t) {
  const n = Rn(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    l = pt(e) ? qn(e) : dt(1),
    o = e.clientWidth * l.x,
    s = e.clientHeight * l.y,
    u = i * l.x,
    a = r * l.y;
  return { width: o, height: s, x: u, y: a };
}
function Ja(e, t, n) {
  let r;
  if (t === "viewport") r = Pv(e, n);
  else if (t === "document") r = Cv(ht(e));
  else if (tt(t)) r = Rv(t, n);
  else {
    const i = Vd(e);
    r = { x: t.x - i.x, y: t.y - i.y, width: t.width, height: t.height };
  }
  return _l(r);
}
function Hd(e, t) {
  const n = en(e);
  return n === t || !tt(n) || fr(n)
    ? !1
    : nt(n).position === "fixed" || Hd(n, t);
}
function Ov(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = ri(e, [], !1).filter((s) => tt(s) && vr(s) !== "body"),
    i = null;
  const l = nt(e).position === "fixed";
  let o = l ? en(e) : e;
  for (; tt(o) && !fr(o);) {
    const s = nt(o),
      u = Tu(o);
    (!u && s.position === "fixed" && (i = null),
      (
        l
          ? !u && !i
          : (!u && s.position === "static" && !!i && _v.has(i.position)) ||
            (mi(o) && !u && Hd(e, o))
      )
        ? (r = r.filter((p) => p !== o))
        : (i = s),
      (o = en(o)));
  }
  return (t.set(e, r), r);
}
function Tv(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e;
  const o = [
      ...(n === "clippingAncestors"
        ? Gl(t)
          ? []
          : Ov(t, this._c)
        : [].concat(n)),
      r,
    ],
    s = o[0],
    u = o.reduce(
      (a, p) => {
        const f = Ja(t, p, i);
        return (
          (a.top = Ne(f.top, a.top)),
          (a.right = bt(f.right, a.right)),
          (a.bottom = bt(f.bottom, a.bottom)),
          (a.left = Ne(f.left, a.left)),
          a
        );
      },
      Ja(t, s, i),
    );
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top,
  };
}
function Nv(e) {
  const { width: t, height: n } = Qd(e);
  return { width: t, height: n };
}
function Lv(e, t, n) {
  const r = pt(t),
    i = ht(t),
    l = n === "fixed",
    o = Rn(e, !0, l, t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const u = dt(0);
  function a() {
    u.x = Fu(i);
  }
  if (r || (!r && !l))
    if (((vr(t) !== "body" || mi(i)) && (s = Yl(t)), r)) {
      const v = Rn(t, !0, l, t);
      ((u.x = v.x + t.clientLeft), (u.y = v.y + t.clientTop));
    } else i && a();
  l && !r && i && a();
  const p = i && !r && !l ? Wd(i, s) : dt(0),
    f = o.left + s.scrollLeft - u.x - p.x,
    h = o.top + s.scrollTop - u.y - p.y;
  return { x: f, y: h, width: o.width, height: o.height };
}
function Ro(e) {
  return nt(e).position === "static";
}
function ba(e, t) {
  if (!pt(e) || nt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (ht(e) === n && (n = n.ownerDocument.body), n);
}
function Kd(e, t) {
  const n = Me(e);
  if (Gl(e)) return n;
  if (!pt(e)) {
    let i = en(e);
    for (; i && !fr(i);) {
      if (tt(i) && !Ro(i)) return i;
      i = en(i);
    }
    return n;
  }
  let r = ba(e, t);
  for (; r && pv(r) && Ro(r);) r = ba(r, t);
  return r && fr(r) && Ro(r) && !Tu(r) ? n : r || gv(e) || n;
}
const Fv = async function (e) {
  const t = this.getOffsetParent || Kd,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: Lv(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function Mv(e) {
  return nt(e).direction === "rtl";
}
const zv = {
  convertOffsetParentRelativeRectToViewportRelativeRect: kv,
  getDocumentElement: ht,
  getClippingRect: Tv,
  getOffsetParent: Kd,
  getElementRects: Fv,
  getClientRects: Ev,
  getDimensions: Nv,
  getScale: qn,
  isElement: tt,
  isRTL: Mv,
};
function Gd(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function Dv(e, t) {
  let n = null,
    r;
  const i = ht(e);
  function l() {
    var s;
    (clearTimeout(r), (s = n) == null || s.disconnect(), (n = null));
  }
  function o(s, u) {
    (s === void 0 && (s = !1), u === void 0 && (u = 1), l());
    const a = e.getBoundingClientRect(),
      { left: p, top: f, width: h, height: v } = a;
    if ((s || t(), !h || !v)) return;
    const g = Ui(f),
      y = Ui(i.clientWidth - (p + h)),
      S = Ui(i.clientHeight - (f + v)),
      d = Ui(p),
      m = {
        rootMargin: -g + "px " + -y + "px " + -S + "px " + -d + "px",
        threshold: Ne(0, bt(1, u)) || 1,
      };
    let w = !0;
    function x(P) {
      const _ = P[0].intersectionRatio;
      if (_ !== u) {
        if (!w) return o();
        _
          ? o(!1, _)
          : (r = setTimeout(() => {
              o(!1, 1e-7);
            }, 1e3));
      }
      (_ === 1 && !Gd(a, e.getBoundingClientRect()) && o(), (w = !1));
    }
    try {
      n = new IntersectionObserver(x, { ...m, root: i.ownerDocument });
    } catch {
      n = new IntersectionObserver(x, m);
    }
    n.observe(e);
  }
  return (o(!0), l);
}
function ug(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: i = !0,
      ancestorResize: l = !0,
      elementResize: o = typeof ResizeObserver == "function",
      layoutShift: s = typeof IntersectionObserver == "function",
      animationFrame: u = !1,
    } = r,
    a = Lu(e),
    p = i || l ? [...(a ? ri(a) : []), ...ri(t)] : [];
  p.forEach((d) => {
    (i && d.addEventListener("scroll", n, { passive: !0 }),
      l && d.addEventListener("resize", n));
  });
  const f = a && s ? Dv(a, n) : null;
  let h = -1,
    v = null;
  o &&
    ((v = new ResizeObserver((d) => {
      let [c] = d;
      (c &&
        c.target === a &&
        v &&
        (v.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          var m;
          (m = v) == null || m.observe(t);
        }))),
        n());
    })),
    a && !u && v.observe(a),
    v.observe(t));
  let g,
    y = u ? Rn(e) : null;
  u && S();
  function S() {
    const d = Rn(e);
    (y && !Gd(y, d) && n(), (y = d), (g = requestAnimationFrame(S)));
  }
  return (
    n(),
    () => {
      var d;
      (p.forEach((c) => {
        (i && c.removeEventListener("scroll", n),
          l && c.removeEventListener("resize", n));
      }),
        f == null || f(),
        (d = v) == null || d.disconnect(),
        (v = null),
        u && cancelAnimationFrame(g));
    }
  );
}
const Av = sv,
  Iv = uv,
  jv = iv,
  Uv = cv,
  $v = lv,
  ec = rv,
  Bv = av,
  Qv = (e, t, n) => {
    const r = new Map(),
      i = { platform: zv, ...n },
      l = { ...i.platform, _c: r };
    return nv(e, t, { ...i, platform: l });
  };
var Vv = typeof document < "u",
  Wv = function () {},
  bi = Vv ? R.useLayoutEffect : Wv;
function Rl(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, i;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0;) if (!Rl(e[r], t[r])) return !1;
      return !0;
    }
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
    for (r = n; r-- !== 0;) {
      const l = i[r];
      if (!(l === "_owner" && e.$$typeof) && !Rl(e[l], t[l])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Yd(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function tc(e, t) {
  const n = Yd(e);
  return Math.round(t * n) / n;
}
function Oo(e) {
  const t = R.useRef(e);
  return (
    bi(() => {
      t.current = e;
    }),
    t
  );
}
function ag(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: i,
      elements: { reference: l, floating: o } = {},
      transform: s = !0,
      whileElementsMounted: u,
      open: a,
    } = e,
    [p, f] = R.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [h, v] = R.useState(r);
  Rl(h, r) || v(r);
  const [g, y] = R.useState(null),
    [S, d] = R.useState(null),
    c = R.useCallback((C) => {
      C !== P.current && ((P.current = C), y(C));
    }, []),
    m = R.useCallback((C) => {
      C !== _.current && ((_.current = C), d(C));
    }, []),
    w = l || g,
    x = o || S,
    P = R.useRef(null),
    _ = R.useRef(null),
    O = R.useRef(p),
    F = u != null,
    N = Oo(u),
    U = Oo(i),
    ne = Oo(a),
    b = R.useCallback(() => {
      if (!P.current || !_.current) return;
      const C = { placement: t, strategy: n, middleware: h };
      (U.current && (C.platform = U.current),
        Qv(P.current, _.current, C).then((L) => {
          const M = { ...L, isPositioned: ne.current !== !1 };
          G.current &&
            !Rl(O.current, M) &&
            ((O.current = M),
            Pu.flushSync(() => {
              f(M);
            }));
        }));
    }, [h, t, n, U, ne]);
  bi(() => {
    a === !1 &&
      O.current.isPositioned &&
      ((O.current.isPositioned = !1), f((C) => ({ ...C, isPositioned: !1 })));
  }, [a]);
  const G = R.useRef(!1);
  (bi(
    () => (
      (G.current = !0),
      () => {
        G.current = !1;
      }
    ),
    [],
  ),
    bi(() => {
      if ((w && (P.current = w), x && (_.current = x), w && x)) {
        if (N.current) return N.current(w, x, b);
        b();
      }
    }, [w, x, b, N, F]));
  const Ie = R.useMemo(
      () => ({ reference: P, floating: _, setReference: c, setFloating: m }),
      [c, m],
    ),
    X = R.useMemo(() => ({ reference: w, floating: x }), [w, x]),
    le = R.useMemo(() => {
      const C = { position: n, left: 0, top: 0 };
      if (!X.floating) return C;
      const L = tc(X.floating, p.x),
        M = tc(X.floating, p.y);
      return s
        ? {
            ...C,
            transform: "translate(" + L + "px, " + M + "px)",
            ...(Yd(X.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: L, top: M };
    }, [n, s, X.floating, p.x, p.y]);
  return R.useMemo(
    () => ({ ...p, update: b, refs: Ie, elements: X, floatingStyles: le }),
    [p, b, Ie, X, le],
  );
}
const Hv = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: i } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? ec({ element: r.current, padding: i }).fn(n)
            : {}
          : r
            ? ec({ element: r, padding: i }).fn(n)
            : {};
      },
    };
  },
  cg = (e, t) => ({ ...Av(e), options: [e, t] }),
  fg = (e, t) => ({ ...Iv(e), options: [e, t] }),
  dg = (e, t) => ({ ...Bv(e), options: [e, t] }),
  pg = (e, t) => ({ ...jv(e), options: [e, t] }),
  hg = (e, t) => ({ ...Uv(e), options: [e, t] }),
  mg = (e, t) => ({ ...$v(e), options: [e, t] }),
  vg = (e, t) => ({ ...Hv(e), options: [e, t] });
export {
  ug as c,
  hg as d,
  vg as e,
  pg as f,
  mg as h,
  dg as l,
  cg as o,
  fg as s,
  ag as u,
};
