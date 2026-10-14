import ContactChannelPair from "../components/ContactChannelPair";
import FacebookContactLink from "../components/FacebookContactLink";
import { site, siteOrigin, siteUrl, siteText } from "../config/site.js";
import {
  t as w,
  g as y,
  r as o,
  j as e,
  N as j,
} from "./vendor-react-BaqgPuim.js";
import {
  B as v,
  p as N,
  u as k,
  q as $,
  f as T,
  H as _,
  W as L,
  A as C,
  d as R,
  F as X,
  x as S,
  C as h,
} from "./index-DAfw2Y79.js";
import {
  o as p,
  an as b,
  A as f,
  am as u,
  P as B,
  a7 as D,
  aY as g,
} from "./vendor-icons-xx0BMbwT.js";
import "./vendor-radix-CIIFFl0l.js";
import "./vendor-motion-B2aXCTtA.js";
const I = ({ project: s, fromWork: r }) => {
    const t = o.useRef(null),
      l = o.useRef(null),
      [i, n] = o.useState(r);
    o.useLayoutEffect(() => {
      if (!r) return;
      const d = t.current,
        a = l.current;
      if (!d || !a) return;
      const c = d.getBoundingClientRect(),
        m = a.animate(
          [
            {
              top: "0px",
              left: "0px",
              width: `${window.innerWidth}px`,
              height: `${window.innerHeight}px`,
              borderRadius: "0px",
            },
            {
              top: `${c.top}px`,
              left: `${c.left}px`,
              width: `${c.width}px`,
              height: `${c.height}px`,
              borderRadius: "18px",
            },
          ],
          {
            duration: 1050,
            delay: 80,
            easing: "cubic-bezier(0.76, 0, 0.24, 1)",
            fill: "forwards",
          },
        );
      return ((m.onfinish = () => n(!1)), () => m.cancel());
    }, [r]);
    const x = `Giao diện website ${s.name} — ${s.category} do TDDTech thiết kế`;
    return e.jsxs("section", {
      className: `relative overflow-hidden pb-12 pt-28 md:pb-20 md:pt-36 ${r ? "work-hero-enter" : ""}`,
      children: [
        e.jsx("div", {
          className:
            "pointer-events-none absolute left-1/3 top-24 h-72 w-72 rounded-full bg-primary/10 blur-[140px]",
        }),
        e.jsxs("div", {
          className: "container relative mx-auto px-4",
          children: [
            e.jsxs("nav", {
              className:
                "work-hero-line mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-white/45",
              "aria-label": "Breadcrumb",
              children: [
                e.jsx("a", {
                  href: "/",
                  className: "hover:text-primary",
                  children: "Trang chủ",
                }),
                e.jsx(g, { className: "h-4 w-4" }),
                e.jsx("a", {
                  href: "/du-an",
                  className: "hover:text-primary",
                  children: "Dự án",
                }),
                e.jsx(g, { className: "h-4 w-4" }),
                e.jsx("span", {
                  className: "text-slate-800 dark:text-white/75",
                  children: s.name,
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-14",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsxs("p", {
                      className:
                        "work-hero-line text-sm font-bold uppercase tracking-[0.2em] text-primary",
                      children: [
                        s.category,
                        s.type !== s.category &&
                          e.jsxs(e.Fragment, {
                            children: [
                              e.jsx("span", {
                                className: "mx-1.5 opacity-50",
                                children: "/",
                              }),
                              " ",
                              s.type,
                            ],
                          }),
                      ],
                    }),
                    e.jsx("h1", {
                      className:
                        "work-hero-line mt-4 text-5xl font-black leading-[0.95] tracking-[-0.045em] text-slate-950 dark:text-white sm:text-7xl lg:text-8xl",
                      children: s.name,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "work-hero-line",
                  children: [
                    e.jsx("p", {
                      className:
                        "text-base leading-8 text-slate-600 dark:text-white/65 md:text-lg",
                      children: s.summary,
                    }),
                    e.jsxs("div", {
                      className:
                        "mt-6 flex flex-col gap-3 sm:flex-row flex-wrap",
                      children: [e.jsxs("a", {
                          href: s.url,
                          target: "_blank",
                          rel: "noreferrer",
                          className:
                            "inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 font-bold text-white transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-slate-950",
                          children: [
                            "Truy cập website ",
                            e.jsx(b, { className: "h-4 w-4" }),
                          ],
                        }),
e.jsxs(ContactChannelPair,{children:[e.jsxs("a", {
                          href: site.zaloHref,
                          target: "_blank",
                          rel: "noreferrer",
                          className:
                            "inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3.5 font-bold text-slate-800 transition-colors hover:border-primary hover:text-primary dark:border-white/20 dark:text-white",
                          children: [
                            e.jsx(u, { className: "h-5 w-5" }),
                            " Làm website như thế này",
                          ],
                        }),e.jsx(FacebookContactLink,{variant:"button",className:"inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3.5 font-bold text-slate-800 transition-colors hover:border-primary hover:text-primary dark:border-white/20 dark:text-white"})]})],
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("a", {
              href: s.url,
              target: "_blank",
              rel: "noreferrer",
              "aria-label": `Mở website ${s.domain}`,
              className: "group relative mt-10 block md:mt-14",
              children: e.jsxs("div", {
                ref: t,
                className:
                  "relative aspect-[16/10] overflow-hidden rounded-[18px] bg-slate-200 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.45)] dark:bg-white/[0.04] sm:aspect-[16/9]",
                children: [
                  e.jsx("img", {
                    src: h(s.slug),
                    alt: x,
                    decoding: "sync",
                    fetchpriority: "high",
                    className: `h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.015] ${i ? "opacity-0" : ""}`,
                  }),
                  e.jsxs("span", {
                    className:
                      "absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 font-mono text-sm text-white backdrop-blur-md",
                    children: [
                      s.domain,
                      " ",
                      e.jsx(f, { className: "h-4 w-4" }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        i &&
          e.jsx("div", {
            ref: l,
            "aria-hidden": "true",
            className:
              "fixed left-0 top-0 z-40 h-[100svh] w-screen overflow-hidden",
            children: e.jsx("img", {
              src: h(s.slug),
              alt: "",
              decoding: "sync",
              className: "h-full w-full object-cover object-top",
            }),
          }),
      ],
    });
  },
  A = () => {
    var d;
    const { slug: s } = w(),
      r = !!((d = y().state) != null && d.fromWork);
    o.useEffect(() => v(), []);
    const t = N.find((a) => a.slug === s);
    if (
      (k({
        title: t
          ? `${t.name} - Dự án TDDTech đã thực hiện`
          : "Không tìm thấy dự án | TDDTech",
        description: (t == null ? void 0 : t.summary) ?? "Dự án không tồn tại.",
        path: `/du-an/${s ?? ""}`,
        robots: t ? void 0 : "noindex, follow",
        image: t == null ? void 0 : t.image,
        schema: t
          ? [
              {
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                "@id": `${siteOrigin}/du-an/${t.slug}#work`,
                name: t.name,
                description: t.summary,
                url: `${siteOrigin}/du-an/${t.slug}`,
                creator: { "@id": siteUrl("/#organization") },
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "@id": `${siteOrigin}/du-an/${t.slug}#breadcrumb`,
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Trang chủ",
                    item: siteUrl("/"),
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Dự án",
                    item: siteUrl("/du-an"),
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: t.name,
                    item: `${siteOrigin}/du-an/${t.slug}`,
                  },
                ],
              },
            ]
          : [],
      }),
      !t)
    )
      return e.jsx(j, { to: "/du-an", replace: !0 });
    const l = $.find((a) => a.id === t.categoryId),
      i = T.filter((a) => a.slug !== t.slug),
      n = [
        ...i.filter((a) => a.categoryId === t.categoryId),
        ...i.filter((a) => a.categoryId !== t.categoryId),
      ],
      x = [
        { label: "Tên miền", value: t.domain, href: t.url },
        ...(t.altDomains ?? []).map((a) => ({
          label: "Tên miền phụ",
          value: a,
          href: `https://${a}`,
        })),
        { label: "Loại dự án", value: t.type },
        {
          label: "Nhóm ngành",
          value: (l == null ? void 0 : l.label) ?? t.category,
        },
        ...(t.client ? [{ label: "Khách hàng", value: t.client }] : []),
        {
          label: "Đơn vị thực hiện",
          value: "TDDTech - TDDTech",
        },
        { label: "Trạng thái", value: "Đã bàn giao, website đang hoạt động" },
      ];
    return e.jsxs("div", {
      className:
        "min-h-screen bg-slate-50 text-slate-900 dark:bg-[hsl(220_40%_6%)] dark:text-white",
      children: [
        e.jsx(_, {}),
        e.jsxs("main", {
          children: [
            e.jsx(I, { project: t, fromWork: r }),
            e.jsx("section", {
              className:
                "border-t border-slate-200 dark:border-white/[0.06] py-14 md:py-20",
              children: e.jsx("div", {
                className: "container mx-auto px-4",
                children: e.jsxs("div", {
                  className: "grid gap-10 lg:grid-cols-[1.15fr_0.85fr]",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("h2", {
                          className:
                            "text-2xl font-extrabold text-slate-900 dark:text-white md:text-3xl",
                          children: "Bài toán đặt ra",
                        }),
                        e.jsx("p", {
                          className:
                            "mt-4 text-base leading-8 text-slate-600 dark:text-white/60",
                          children: t.challenge,
                        }),
                        e.jsx("h2", {
                          className:
                            "mt-12 text-2xl font-extrabold text-slate-900 dark:text-white md:text-3xl",
                          children: "Phạm vi công việc",
                        }),
                        e.jsx("div", {
                          className: "mt-5 space-y-3.5",
                          children: t.scope.map((a) =>
                            e.jsxs(
                              "p",
                              {
                                className:
                                  "flex gap-3 text-base leading-8 text-slate-600 dark:text-white/60",
                                children: [
                                  e.jsx(p, {
                                    className:
                                      "mt-1.5 h-5 w-5 flex-none text-primary",
                                  }),
                                  a,
                                ],
                              },
                              a,
                            ),
                          ),
                        }),
                        e.jsx("h2", {
                          className:
                            "mt-12 text-2xl font-extrabold text-slate-900 dark:text-white md:text-3xl",
                          children: "Kết quả bàn giao",
                        }),
                        e.jsx("div", {
                          className: "mt-5 space-y-3.5",
                          children: t.outcome.map((a) =>
                            e.jsxs(
                              "p",
                              {
                                className:
                                  "flex gap-3 text-base leading-8 text-slate-600 dark:text-white/60",
                                children: [
                                  e.jsx(p, {
                                    className:
                                      "mt-1.5 h-5 w-5 flex-none text-primary",
                                  }),
                                  a,
                                ],
                              },
                              a,
                            ),
                          ),
                        }),
                        e.jsx("p", {
                          className:
                            "mt-10 rounded-[8px] border border-amber-400/25 bg-amber-50 p-4 text-sm leading-7 text-amber-900 dark:border-amber-400/15 dark:bg-amber-400/[0.05] dark:text-amber-100/65",
                          children: t.note,
                        }),
                      ],
                    }),
                    e.jsx("aside", {
                      className: "lg:sticky lg:top-28 lg:self-start",
                      children: e.jsxs("div", {
                        className:
                          "rounded-[8px] border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.045]",
                        children: [
                          e.jsx("div", {
                            className:
                              "border-b border-slate-100 px-6 py-4 dark:border-white/10",
                            children: e.jsx("h2", {
                              className:
                                "font-extrabold text-slate-900 dark:text-white",
                              children: "Thông tin dự án",
                            }),
                          }),
                          e.jsx("dl", {
                            className:
                              "divide-y divide-slate-100 dark:divide-white/[0.07]",
                            children: x.map((a) =>
                              e.jsxs(
                                "div",
                                {
                                  className:
                                    "grid gap-0.5 px-5 py-3 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-3 sm:px-6 sm:py-3.5",
                                  children: [
                                    e.jsx("dt", {
                                      className:
                                        "text-xs font-bold uppercase tracking-[0.1em] text-slate-400 dark:text-white/35",
                                      children: a.label,
                                    }),
                                    e.jsx("dd", {
                                      className:
                                        "text-sm leading-6 text-slate-700 dark:text-white/70",
                                      children: a.href
                                        ? e.jsx("a", {
                                            href: a.href,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className:
                                              "font-semibold text-primary [overflow-wrap:anywhere] hover:underline",
                                            children: a.value,
                                          })
                                        : a.value,
                                    }),
                                  ],
                                },
                                a.label,
                              ),
                            ),
                          }),
                          e.jsx("div", {
                            className:
                              "border-t border-slate-100 p-5 dark:border-white/10",
                            children: e.jsxs("a", {
                              href: t.url,
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-primary px-5 py-3 font-bold text-white shadow-md shadow-primary/20 transition-all hover:bg-cyan-400",
                              children: [
                                "Truy cập website ",
                                e.jsx(b, { className: "h-4 w-4" }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
            n.length > 0 &&
              e.jsx(L, {
                projects: n,
                eyebrow: "Dự án khác",
                heading: "Xem thêm sản phẩm TDDTech đã làm",
                allLink: { href: "/du-an", label: "Xem tất cả dự án" },
                fallback: e.jsx("section", {
                  className:
                    "border-t border-slate-200 dark:border-white/[0.06] py-14 md:py-20",
                  children: e.jsxs("div", {
                    className: "container mx-auto px-4",
                    children: [
                      e.jsx("h2", {
                        className:
                          "text-2xl font-extrabold text-slate-900 dark:text-white md:text-3xl",
                        children: "Các dự án khác",
                      }),
                      e.jsx("div", {
                        className:
                          "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                        children: n.slice(0, 6).map((a) =>
                          e.jsxs(
                            "a",
                            {
                              href: `/du-an/${a.slug}`,
                              className:
                                "group rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-primary/40 dark:border-white/10 dark:bg-white/[0.045] dark:hover:border-primary/35",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "-mx-6 -mt-6 mb-5 overflow-hidden rounded-t-[7px] bg-slate-100 dark:bg-white/[0.03]",
                                  children: e.jsx("img", {
                                    src: C(a.slug),
                                    srcSet: R(a.slug),
                                    sizes:
                                      "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
                                    alt: "",
                                    loading: "lazy",
                                    decoding: "async",
                                    className:
                                      "aspect-[16/10] w-full object-cover object-top",
                                  }),
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-xs font-bold uppercase tracking-[0.14em] text-primary",
                                  children: a.category,
                                }),
                                e.jsxs("div", {
                                  className:
                                    "mt-3 flex items-start justify-between gap-3",
                                  children: [
                                    e.jsx("h3", {
                                      className:
                                        "text-lg font-extrabold leading-snug text-slate-900 transition-colors group-hover:text-primary dark:text-white",
                                      children: a.name,
                                    }),
                                    e.jsx(f, {
                                      className:
                                        "mt-0.5 h-5 w-5 flex-none text-slate-300 transition-colors group-hover:text-primary dark:text-white/25",
                                    }),
                                  ],
                                }),
                                e.jsx("p", {
                                  className:
                                    "mt-3 text-sm leading-6 text-slate-600 dark:text-white/50",
                                  children: a.summary,
                                }),
                                e.jsx("p", {
                                  className:
                                    "mt-4 font-mono text-xs text-slate-400 dark:text-white/35",
                                  children: a.domain,
                                }),
                              ],
                            },
                            a.slug,
                          ),
                        ),
                      }),
                    ],
                  }),
                }),
              }),
            e.jsx("section", {
              className:
                "border-t border-slate-200 dark:border-white/[0.06] py-14 md:py-24",
              children: e.jsxs("div", {
                className: "container mx-auto px-4",
                children: [
                  e.jsxs("div", {
                    className:
                      "rounded-[8px] border border-slate-200 bg-gradient-to-br from-sky-50 via-cyan-50/40 to-white p-8 shadow-sm dark:border-primary/20 dark:bg-primary/[0.07] dark:from-transparent dark:via-transparent dark:to-transparent md:p-12",
                    children: [
                      e.jsx("h2", {
                        className:
                          "max-w-3xl text-3xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-4xl",
                        children: "Bạn cần một website như thế này?",
                      }),
                      e.jsx("p", {
                        className:
                          "mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-white/60",
                        children:
                          "Gửi yêu cầu để TDDTech tư vấn hướng triển khai và báo giá theo đúng phạm vi công việc của bạn.",
                      }),
                      e.jsxs("div", {
                        className:
                          "mt-8 flex flex-col gap-3 sm:flex-row flex-wrap",
                        children: [e.jsxs(ContactChannelPair,{children:[e.jsxs("a", {
                            href: site.zaloHref,
                            target: "_blank",
                            rel: "noreferrer",
                            className:
                              "inline-flex items-center justify-center gap-2 rounded-[8px] bg-primary px-6 py-3.5 font-bold text-white shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5",
                            children: [
                              e.jsx(u, { className: "h-5 w-5" }),
                              "Nhận tư vấn và báo giá",
                            ],
                          }),e.jsx(FacebookContactLink,{variant:"button",className:"inline-flex items-center justify-center gap-2 rounded-[8px] bg-primary px-6 py-3.5 font-bold text-white shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"})]}),
e.jsxs("a", {
                            href: site.phoneHref,
                            className:
                              "inline-flex items-center justify-center gap-2 rounded-[8px] border border-slate-200 bg-white px-6 py-3.5 font-bold text-slate-700 shadow-sm hover:border-primary/40 hover:text-primary dark:border-white/15 dark:bg-white/[0.04] dark:text-white/80",
                            children: [
                              e.jsx(B, { className: "h-5 w-5" }),
                              siteText("{{phone}}"),
                            ],
                          })],
                      }),
                    ],
                  }),
                  e.jsxs("a", {
                    href: "/du-an",
                    className:
                      "mt-10 inline-flex items-center gap-2 font-bold text-primary hover:underline",
                    children: [
                      e.jsx(D, { className: "h-4 w-4" }),
                      " Xem tất cả dự án",
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        e.jsx(X, {}),
        e.jsx(S, {}),
      ],
    });
  };
export { A as default };
