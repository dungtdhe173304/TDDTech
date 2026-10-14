import { site, siteOrigin, siteUrl, siteText } from "../config/site.js";
import {
  t as y,
  g as j,
  k,
  r as $,
  j as t,
  N,
} from "./vendor-react-BaqgPuim.js";
import { a as T } from "./SeoLayout-CuGaHTIj.js";
import { u as B } from "./index-DAfw2Y79.js";
import { b as P, s as n, f as C } from "./blog-CE27P5gZ.js";
import { B as X } from "./BlogCover-DaspM6LB.js";
import {
  b9 as L,
  ba as A,
  A as _,
  a7 as E,
  s as I,
} from "./vendor-icons-xx0BMbwT.js";
import "./vendor-radix-CIIFFl0l.js";
import "./vendor-motion-B2aXCTtA.js";
import "./blogPosts-BytO_tYi.js";
const a = siteUrl(""),
  m = 12,
  O = () => {
    const { page: o } = y(),
      b = j(),
      p = k(),
      g = b.state,
      [h, f] = $.useState((g == null ? void 0 : g.blogCategory) ?? "Tất cả"),
      u = ["Tất cả", ...P],
      l = Math.max(1, Math.ceil(n.length / m)),
      d = o ? Number(o) : 1,
      c = Number.isInteger(d) && d >= 1 && d <= l,
      r = c ? d : 1,
      i = r === 1 ? "/blog" : `/blog/page/${r}`,
      w = n.slice((r - 1) * m, r * m),
      x = h === "Tất cả" ? w : n.filter((e) => e.category === h);
    if (
      (B({
        title:
          r === 1
            ? "Blog TDDTech: xây dựng và phát triển tài sản website | TDDTech"
            : `Blog TDDTech trang ${r}: website là tài sản | TDDTech`,
        description:
          r === 1
            ? "Góc nhìn và hướng dẫn thực tế để doanh nghiệp xây dựng, sở hữu, bảo vệ và phát triển website như một tài sản số."
            : `Trang ${r} trong blog TDDTech: các hướng dẫn về quyền sở hữu, vận hành và phát triển website doanh nghiệp như một tài sản số.`,
        path: i,
        robots: c ? void 0 : "noindex, follow",
        schema: [
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": `${a}${i}#blog`,
            name: r === 1 ? "Blog TDDTech" : `Blog TDDTech - Trang ${r}`,
            url: `${a}${i}`,
            inLanguage: "vi-VN",
            publisher: { "@id": `${a}/#organization` },
            blogPost: x.map((e) => ({
              "@type": "BlogPosting",
              headline: e.title,
              url: `${a}/blog/${e.slug}`,
              datePublished: e.date,
              dateModified: e.updated ?? e.date,
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": `${a}${i}#breadcrumb`,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Trang chủ",
                item: `${a}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: `${a}/blog`,
              },
              ...(r > 1
                ? [
                    {
                      "@type": "ListItem",
                      position: 3,
                      name: `Trang ${r}`,
                      item: `${a}${i}`,
                    },
                  ]
                : []),
            ],
          },
        ],
      }),
      !c || (o && (r === 1 || String(r) !== o)))
    )
      return t.jsx(N, { to: c ? i : "/blog", replace: !0 });
    const v = (e) => {
      if (o) {
        p("/blog", { state: { blogCategory: e } });
        return;
      }
      f(e);
    };
    return t.jsx(T, {
      eyebrow: "Blog TDDTech",
      title:
        r === 1
          ? "Website là tài sản. Hãy xây để chủ động phát triển."
          : `Tiếp tục khám phá blog TDDTech · Trang ${r}`,
      intro:
        r === 1
          ? "Góc nhìn TDDTech về quyền sở hữu, vận hành và phát triển website dài hạn — cùng hướng dẫn thực tế để biến nền tảng số thành một phần có ích trong hoạt động kinh doanh."
          : "Các bài viết tiếp theo về quyền sở hữu, chi phí, vận hành và phát triển website doanh nghiệp — được sắp xếp theo thời gian đăng mới nhất.",
      highlights: [
        `${n.length} bài viết`,
        `Trang ${r}/${l}`,
        "Phát triển dài hạn",
      ],
      children: t.jsx("section", {
        className:
          "border-t border-slate-200 dark:border-white/[0.06] py-14 md:py-24",
        children: t.jsxs("div", {
          className: "container mx-auto px-4",
          children: [
            t.jsx("div", {
              className: "mb-10 flex flex-wrap gap-2.5",
              children: u.map((e) =>
                t.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => v(e),
                    className: `rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${h === e ? "border-primary bg-primary/10 text-primary shadow-sm" : "border-slate-200 bg-white text-slate-700 shadow-sm hover:border-primary/40 hover:text-primary dark:border-white/10 dark:bg-white/[0.04] dark:text-white/55 dark:hover:text-white"}`,
                    children: e,
                  },
                  e,
                ),
              ),
            }),
            t.jsx("div", {
              className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
              children: x.map((e, s) =>
                t.jsx(
                  "article",
                  {
                    className:
                      "surface-card group flex flex-col overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-sm transition-colors hover:border-primary/40 dark:border-white/10 dark:bg-white/[0.045] dark:hover:border-primary/35",
                    children: t.jsxs("a", {
                      href: `/blog/${e.slug}`,
                      className: "flex h-full flex-col",
                      children: [
                        t.jsxs("div", {
                          className:
                            "relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-[radial-gradient(circle_at_top_right,rgba(0,212,255,0.22),transparent_42%),linear-gradient(135deg,#142033,#07101c)]",
                          children: [
                            e.cover
                              ? t.jsx("img", {
                                  src: e.cover,
                                  alt: e.title,
                                  width: 1200,
                                  height: 675,
                                  loading: s < 3 ? "eager" : "lazy",
                                  fetchPriority: s === 0 ? "high" : "auto",
                                  decoding: "async",
                                  className:
                                    "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
                                })
                              : t.jsx(X, {
                                  category: e.category,
                                  visual: e.visual,
                                  index: n.length - 1 - n.indexOf(e),
                                }),
                            t.jsx("span", {
                              className:
                                "absolute left-4 top-4 rounded-full border border-slate-200 bg-white/80 dark:border-white/15 dark:bg-black/45 px-3 py-1.5 text-xs font-bold text-slate-900 dark:text-white backdrop-blur-md shadow-sm",
                              children: e.category,
                            }),
                          ],
                        }),
                        t.jsxs("div", {
                          className: "flex flex-1 flex-col p-5 md:p-6",
                          children: [
                            t.jsxs("div", {
                              className:
                                "flex items-center gap-4 text-xs text-slate-500 dark:text-white/40",
                              children: [
                                t.jsxs("span", {
                                  className: "inline-flex items-center gap-1.5",
                                  children: [
                                    t.jsx(L, { className: "h-3.5 w-3.5" }),
                                    C(e.date),
                                  ],
                                }),
                                t.jsxs("span", {
                                  className: "inline-flex items-center gap-1.5",
                                  children: [
                                    t.jsx(A, { className: "h-3.5 w-3.5" }),
                                    e.readingMinutes,
                                    " phút đọc",
                                  ],
                                }),
                              ],
                            }),
                            t.jsx("h2", {
                              className:
                                "mt-3 text-lg font-extrabold leading-snug text-slate-900 group-hover:text-primary dark:text-white transition-colors",
                              children: e.title,
                            }),
                            t.jsx("p", {
                              className:
                                "mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-white/55",
                              children: e.excerpt,
                            }),
                            t.jsxs("span", {
                              className:
                                "mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary",
                              children: [
                                "Đọc bài viết ",
                                t.jsx(_, { className: "h-4 w-4" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  e.slug,
                ),
              ),
            }),
            h === "Tất cả" &&
              l > 1 &&
              t.jsxs("nav", {
                className:
                  "mt-10 flex flex-wrap items-center justify-center gap-2",
                "aria-label": "Phân trang bài viết",
                children: [
                  r > 1
                    ? t.jsxs("a", {
                        href: r === 2 ? "/blog" : `/blog/page/${r - 1}`,
                        className:
                          "inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-primary/50 hover:text-primary dark:border-white/10 dark:bg-white/[0.04] dark:text-white/75",
                        children: [
                          t.jsx(E, { className: "h-4 w-4" }),
                          " Bài mới hơn",
                        ],
                      })
                    : null,
                  Array.from({ length: l }, (e, s) => s + 1).map((e) => {
                    const s = e === 1 ? "/blog" : `/blog/page/${e}`;
                    return e === r
                      ? t.jsx(
                          "span",
                          {
                            "aria-current": "page",
                            "aria-label": `Trang ${e}, hiện tại`,
                            className:
                              "inline-flex h-11 min-w-11 items-center justify-center rounded-full bg-primary px-4 text-sm font-bold text-white shadow-sm",
                            children: e,
                          },
                          e,
                        )
                      : t.jsx(
                          "a",
                          {
                            href: s,
                            "aria-label": `Trang ${e}`,
                            className:
                              "inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-primary/50 hover:text-primary dark:border-white/10 dark:bg-white/[0.04] dark:text-white/75",
                            children: e,
                          },
                          e,
                        );
                  }),
                  r < l
                    ? t.jsxs("a", {
                        href: `/blog/page/${r + 1}`,
                        className:
                          "inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-primary/50 hover:text-primary dark:border-white/10 dark:bg-white/[0.04] dark:text-white/75",
                        children: [
                          "Bài cũ hơn ",
                          t.jsx(I, { className: "h-4 w-4" }),
                        ],
                      })
                    : null,
                ],
              }),
          ],
        }),
      }),
    });
  };
export { O as default };
