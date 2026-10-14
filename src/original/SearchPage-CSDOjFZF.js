import { site, siteOrigin, siteUrl, siteText } from "../config/site.js";
import { w as l, r as h, j as e } from "./vendor-react-BaqgPuim.js";
import { a as d } from "./SeoLayout-CuGaHTIj.js";
import { u as c, Z as m } from "./index-DAfw2Y79.js";
import { c as p } from "./blog-CE27P5gZ.js";
import { bb as u, A as x } from "./vendor-icons-xx0BMbwT.js";
import "./vendor-radix-CIIFFl0l.js";
import "./vendor-motion-B2aXCTtA.js";
import "./blogPosts-BytO_tYi.js";
const b = [{
      title: "Bảng giá thiết kế website",
      description:
        "Giá landing page, website doanh nghiệp, bán hàng và web app.",
      url: "/bang-gia-thiet-ke-website",
      type: "Trang",
    },
{
      title: "Dự án tiêu biểu",
      description: "Các website TDDTech đã thực hiện và thư viện tham khảo.",
      url: "/du-an",
      type: "Trang",
    },
{
      title: "Hồ sơ năng lực",
      description:
        "Năng lực xây website doanh nghiệp, web app nghiệp vụ và website bán hàng của TDDTech.",
      url: "/ho-so-nang-luc",
      type: "Trang",
    },
{
      title: "Liên hệ",
      description: "Tư vấn thiết kế website qua Zalo, hotline hoặc email.",
      url: "/lien-he",
      type: "Trang",
    }],
  g = () => [
    ...Object.values(m).map((t) => ({
      title: t.title,
      description: t.description,
      url: t.path,
      type: "Dịch vụ",
    })),
    ...b,
    ...p.map((t) => ({
      title: t.title,
      description: t.excerpt,
      url: `/blog/${t.slug}`,
      type: "Blog",
    })),
  ],
  s = (t) =>
    t
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase(),
  q = () => {
    var o;
    const [t] = l(),
      r = ((o = t.get("q")) == null ? void 0 : o.trim()) ?? "",
      a = h.useMemo(() => {
        if (!r) return [];
        const i = s(r);
        return g().filter(
          (n) => s(n.title).includes(i) || s(n.description).includes(i),
        );
      }, [r]);
    return (
      c({
        title: r
          ? `Kết quả tìm kiếm cho "${r}" | TDDTech`
          : "Tìm kiếm | TDDTech",
        description:
          "Tìm kiếm dịch vụ, dự án và bài viết trên website TDDTech.",
        path: "/tim-kiem",
        robots: "noindex, follow",
      }),
      e.jsx(d, {
        eyebrow: "Tìm kiếm",
        title: r ? `Kết quả cho “${r}”` : "Tìm kiếm trên TDDTech",
        intro: r
          ? `Tìm thấy ${a.length} kết quả phù hợp.`
          : "Nhập từ khóa để tìm dịch vụ, dự án hoặc bài viết.",
        children: e.jsx("section", {
          className:
            "border-t border-slate-200 dark:border-white/[0.06] py-14 md:py-24",
          children: e.jsxs("div", {
            className: "container mx-auto px-4",
            children: [
              e.jsxs("form", {
                action: "/tim-kiem",
                method: "get",
                className: "mb-10 flex max-w-2xl gap-3",
                children: [
                  e.jsx("input", {
                    type: "search",
                    name: "q",
                    defaultValue: r,
                    placeholder: "Ví dụ: chi phí thiết kế website...",
                    className:
                      "h-12 flex-1 rounded-[8px] border border-slate-200 bg-white px-4 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-primary focus:outline-none dark:border-white/15 dark:bg-white/[0.05] dark:text-white dark:placeholder:text-white/35 dark:focus:border-primary/50",
                  }),
                  e.jsx("button", {
                    type: "submit",
                    className:
                      "h-12 rounded-[8px] bg-primary px-6 font-bold text-white shadow-md shadow-primary/25 hover:bg-cyan-400 transition-all",
                    children: "Tìm",
                  }),
                ],
              }),
              r && a.length === 0
                ? e.jsxs("div", {
                    className:
                      "flex flex-col items-center gap-4 rounded-[8px] border border-slate-200 bg-white shadow-sm py-16 text-center dark:border-white/10 dark:bg-white/[0.03]",
                    children: [
                      e.jsx(u, {
                        className:
                          "h-10 w-10 text-slate-400 dark:text-white/30",
                      }),
                      e.jsxs("p", {
                        className: "text-slate-600 dark:text-white/55",
                        children: [
                          "Không tìm thấy kết quả cho “",
                          r,
                          "”. Thử từ khóa khác nhé.",
                        ],
                      }),
                    ],
                  })
                : e.jsx("div", {
                    className: "grid gap-4",
                    children: a.map((i) =>
                      e.jsxs(
                        "a",
                        {
                          href: i.url,
                          className:
                            "surface-card group flex items-start justify-between gap-4 rounded-[8px] border border-slate-200 bg-white shadow-sm p-5 transition-colors hover:border-primary/40 dark:border-white/10 dark:bg-white/[0.045] dark:hover:border-primary/35",
                          children: [
                            e.jsxs("div", {
                              children: [
                                e.jsx("span", {
                                  className:
                                    "text-xs font-bold uppercase tracking-[0.14em] text-primary",
                                  children: i.type,
                                }),
                                e.jsx("h2", {
                                  className:
                                    "mt-1 text-lg font-bold text-slate-900 group-hover:text-primary dark:text-white transition-colors",
                                  children: i.title,
                                }),
                                e.jsx("p", {
                                  className:
                                    "mt-2 text-sm leading-7 text-slate-600 dark:text-white/55",
                                  children: i.description,
                                }),
                              ],
                            }),
                            e.jsx(x, {
                              className: "h-5 w-5 flex-none text-primary",
                            }),
                          ],
                        },
                        i.url,
                      ),
                    ),
                  }),
            ],
          }),
        }),
      })
    );
  };
export { q as default };
