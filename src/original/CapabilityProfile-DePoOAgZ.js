import CompanyStory from "../components/CompanyStory";
import ContactChannelPair from "../components/ContactChannelPair";
import FacebookIcon from "../components/FacebookIcon";
import FacebookContactLink from "../components/FacebookContactLink";
import { site, siteOrigin, siteUrl, siteText } from "../config/site.js";
import { r as b, j as e } from "./vendor-react-BaqgPuim.js";
import {
  N as _,
  u as B,
  D as $,
  t as M,
  v as u,
  p as m,
  q as x,
  O as j,
  Q as d,
  R as s,
  E as W,
  K as I,
  I as R,
  W as H,
  b as G,
  d as E,
  P as V,
  M as z,
  c,
  T as F,
  U as K,
  V as Q,
  X as U,
  f as D,
} from "./index-DAfw2Y79.js";
import { C as O } from "./CurtainChapter-Q8xUbhSg.js";
import { u as P, A as J, m as Y } from "./vendor-motion-B2aXCTtA.js";
import { a as Z, S as h } from "./SeoLayout-CuGaHTIj.js";
import {
  A as f,
  aG as N,
  b6 as ee,
  o as te,
  s as v,
  af as ae,
  an as se,
  r as ne,
  am as T,
  P as S,
  f as ie,
  l as re,
  g as he,
  m as le,
  b0 as ce,
  b7 as oe,
  b8 as de,
} from "./vendor-icons-xx0BMbwT.js";
import "./vendor-radix-CIIFFl0l.js";
const me = (i, o = 2e3, l = !0) => {
    const [t, a] = b.useState(0),
      n = b.useRef(!1);
    return (
      b.useEffect(() => {
        if (!l || n.current) return;
        n.current = !0;
        let r = null;
        const p = 0;
        let g;
        const w = (k) => {
          r || (r = k);
          const y = Math.min((k - r) / o, 1),
            q = y * (i - p) + p;
          (a(q), y < 1 ? (g = requestAnimationFrame(w)) : a(i));
        };
        return (
          (g = requestAnimationFrame(w)),
          () => {
            g && cancelAnimationFrame(g);
          }
        );
      }, [i, o, l]),
      t
    );
  },
  xe = ({ value: i, suffix: o = "", label: l }) => {
    const { ref: t, isVisible: a } = _(),
      n = P(),
      r = me(i, 1600, a && !n),
      p = n ? i : Math.round(r);
    return e.jsxs("div", {
      ref: t,
      className:
        "group relative h-full overflow-hidden rounded-[8px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 dark:border-white/10 dark:bg-white/[0.045] dark:hover:border-primary/35",
      children: [
        e.jsx("span", {
          className:
            "pointer-events-none absolute -inset-x-10 -top-10 h-24 -translate-x-full rotate-12 bg-gradient-to-r from-transparent via-primary/10 to-transparent transition-transform duration-700 group-hover:translate-x-full",
        }),
        e.jsxs("strong", {
          className:
            "relative block text-5xl font-black leading-none text-primary tabular-nums",
          children: [p, o],
        }),
        e.jsx("span", {
          className:
            "relative mt-3 block text-sm font-medium text-slate-600 dark:text-white/55",
          children: l,
        }),
      ],
    });
  },
  A = [
    { value: M, suffix: "+", label: "Dự án đã triển khai*" },
    { value: m.length, suffix: "", label: "Dự án công khai" },
    { value: x.length, suffix: "", label: "Nhóm ngành đã triển khai" },
    { value: j, suffix: "", label: "Năm bảo hành" },
  ],
  pe = [
    {
      pain: "Mục tiêu website chưa gắn với hành trình khách hàng",
      detail:
        "Trang có thể đủ thông tin nhưng chưa giúp người xem hiểu doanh nghiệp, đánh giá năng lực và biết bước tiếp theo.",
      fix: "Tổ chức thông tin theo quyết định mua",
      fixDetail:
        "Cấu trúc trang dịch vụ, dự án, bằng chứng và liên hệ được thiết kế quanh câu hỏi khách hàng cần giải đáp.",
      Art: F,
    },
    {
      pain: "Doanh nghiệp chưa nắm đủ quyền quản trị",
      detail:
        "Khi mã nguồn, tên miền hoặc tài khoản dịch vụ không được bàn giao rõ, việc cập nhật và chuyển giao về sau sẽ khó kiểm soát.",
      fix: "Quyền sở hữu được xác định từ đầu",
      fixDetail:
        "Báo giá nêu rõ source code, tài khoản quản trị, domain và dịch vụ nào do khách hàng sở hữu hoặc được chuyển quyền.",
      Art: K,
    },
    {
      pain: "Không rõ dữ liệu nào cần theo dõi",
      detail:
        "Nếu mục tiêu và sự kiện đo lường chưa được thống nhất, doanh nghiệp khó biết kênh hoặc trang nào cần ưu tiên cải thiện.",
      fix: "Chọn chỉ số phù hợp mục tiêu",
      fixDetail:
        "GA4, Search Console hoặc sự kiện chuyển đổi được cấu hình khi nằm trong phạm vi dự án và có quyền truy cập cần thiết.",
      Art: Q,
    },
    {
      pain: "Chưa có kế hoạch vận hành sau bàn giao",
      detail:
        "Nội dung, quyền truy cập, gia hạn dịch vụ và trách nhiệm xử lý sự cố cần có người phụ trách sau khi sản phẩm chạy thật.",
      fix: "Có người giữ tài sản sau bàn giao",
      fixDetail: `Bàn giao đủ tài liệu, tài khoản; chỉnh sửa miễn phí trong phạm vi ${j} năm, trọn đời với lỗi do TDDTech. Doanh nghiệp cần người trông và phát triển website đều đặn thì chọn gói vận hành hằng tháng.`,
      Art: U,
    },
  ],
  ge = [
    [
      "01",
      "Website doanh nghiệp",
      "Hồ sơ năng lực, dịch vụ, dự án và nội dung giúp khách hàng, đối tác thẩm định.",
    ],
    [
      "02",
      "Web app nghiệp vụ",
      "Quy trình, dữ liệu, vai trò người dùng và báo cáo được tổ chức theo cách doanh nghiệp vận hành.",
    ],
    [
      "03",
      "Website bán hàng",
      "Trải nghiệm mua hàng và quản lý sản phẩm, đơn hàng theo mô hình kinh doanh.",
    ],
  ],
  be = [
    [
      le,
      "Giao diện",
      "React, Next.js, Vue, Angular, TypeScript, Tailwind CSS, Three.js",
    ],
    [
      ce,
      "Máy chủ & API",
      "Node.js, NestJS, Express, PHP, Laravel, Python, Django, FastAPI",
    ],
    [oe, "Dữ liệu", "PostgreSQL, MySQL, SQL Server, MongoDB, Redis, WebSocket"],
    [
      de,
      "Tích hợp",
      "Thanh toán, vận chuyển, email, chatbot, analytics, CRM và API bên thứ ba",
    ],
  ],
  ue = [
    ["Trọn gói theo dự án", "Chốt hạng mục, chi phí, tiến độ trước khi làm."],
    ["Chia theo giai đoạn", "Làm và nghiệm thu từng mốc."],
    ["Nâng cấp hệ thống cũ", "Giữ dữ liệu, làm mới giao diện."],
    ["Đồng hành dài hạn", "Vận hành hằng tháng sau bàn giao."],
  ],
  L = D.slice(0, 6),
  ye = D;
function Me() {
  const [i, o] = b.useState(!1),
    l = P();
  return (
    B({
      title:
        "Hồ sơ năng lực TDDTech | Website doanh nghiệp, Web App, Website bán hàng",
      description:
        "Năng lực TDDTech trong website doanh nghiệp, web app nghiệp vụ và website bán hàng. Xem quy trình, phạm vi bàn giao, kinh nghiệm nhà sáng lập và các dự án công khai.",
      path: "/ho-so-nang-luc",
      image: "/media/ximitech/company-profile/v1/ximitech-profile-cover.webp",
      schema: [
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": siteUrl("/ho-so-nang-luc#profile"),
          name: "Hồ sơ năng lực TDDTech",
          description:
            "Năng lực xây dựng website doanh nghiệp, web app nghiệp vụ và website bán hàng theo quy trình kinh doanh.",
          inLanguage: "vi-VN",
          url: siteUrl("/ho-so-nang-luc"),
          about: { "@id": siteUrl("/#organization") },
          primaryImageOfPage:
            "/media/ximitech/company-profile/v1/ximitech-profile-cover.webp",
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "@id": siteUrl("/ho-so-nang-luc#breadcrumb"),
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
              name: "Hồ sơ năng lực",
              item: siteUrl("/ho-so-nang-luc"),
            },
          ],
        },
      ],
    }),
    e.jsxs(Z, {
      eyebrow: "Hồ sơ năng lực",
      showFacebook: false,
      title: "Website doanh nghiệp, web app nghiệp vụ và bán hàng",
      intro:
        "TDDTech tập trung website doanh nghiệp, web app nghiệp vụ và website bán hàng. Hồ sơ này trình bày người phụ trách, cách triển khai và các dự án khách hàng cho phép công khai.",
      highlights: [
        "Website doanh nghiệp",
        "Web app nghiệp vụ",
        "Website bán hàng",
      ],
      children: [
        e.jsx($, {}),
        e.jsx(O, {
          id: "nang-luc",
          label: "Năng lực và định hướng của TDDTech",
          summary: `TDDTech đã triển khai ${M}+ dự án (${u}), ${m.length} dự án công khai, ${x.length} nhóm ngành, bảo hành ${j} năm. Tầm nhìn: ${d.visionShort} Sứ mệnh: ${d.purposeShort}`,
          a: {
            eyebrow: "Năng lực bằng con số",
            title: "Những con số TDDTech đã làm được.",
            stats: A.map((t) => ({
              value: t.value,
              suffix: t.suffix,
              label: t.label,
            })),
            note: `* Số dự án đã triển khai ${u}. Năm bảo hành: chỉnh sửa miễn phí trong phạm vi 5 năm, trọn đời với lỗi do TDDTech.`,
          },
          b: {
            eyebrow: "Định hướng",
            title: "Đằng sau con số là một cách nhìn: website là tài sản.",
            highlight: "tài sản",
            rows: [
              { label: "Tầm nhìn", text: d.visionShort },
              { label: "Sứ mệnh", text: d.purposeShort },
            ],
            chips: d.missions.map((t) => t.title),
          },
          fallback: e.jsxs(e.Fragment, {
            children: [
              e.jsxs("section", {
                className:
                  "measure-height relative overflow-hidden border-t border-slate-200 py-12 dark:border-white/[0.06] md:py-16",
                children: [
                  e.jsx("div", {
                    className:
                      "pointer-events-none absolute left-1/2 top-0 h-64 w-[38rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px] dark:bg-primary/15",
                  }),
                  e.jsxs("div", {
                    className: "container relative mx-auto px-4",
                    children: [
                      e.jsx("div", {
                        className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
                        children: A.map((t, a) =>
                          e.jsx(
                            s,
                            {
                              index: a,
                              className: "h-full",
                              children: e.jsx(xe, {
                                value: t.value,
                                suffix: t.suffix,
                                label: t.label,
                              }),
                            },
                            t.label,
                          ),
                        ),
                      }),
                      e.jsxs("p", {
                        className:
                          "mt-5 text-sm leading-6 text-slate-500 dark:text-white/45",
                        children: [
                          "* Số dự án đã triển khai ",
                          u,
                          ". Năm bảo hành: chỉnh sửa miễn phí trong phạm vi 5 năm, trọn đời với lỗi do TDDTech.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("section", {
                className:
                  "measure-height border-t border-slate-200 bg-slate-100/50 py-12 dark:border-white/[0.06] dark:bg-white/[0.02] md:py-20",
                children: e.jsxs("div", {
                  className: "container mx-auto px-4",
                  children: [
                    e.jsx(s, {
                      children: e.jsx(h, {
                        spacious: !0,
                        kicker: "Định hướng",
                        title: "Tầm nhìn, sứ mệnh và nhiệm vụ của TDDTech",
                        description:
                          "Điều TDDTech theo đuổi và cam kết với từng khách hàng — cũng là lý do mỗi website được xây và vận hành theo cách này.",
                      }),
                    }),
                    e.jsx(s, { children: e.jsx(W, { compact: !0 }) }),
                  ],
                }),
              }),
            ],
          }),
        }),
        e.jsx(CompanyStory, {}),
        e.jsx("section", {
          className:
            "measure-height border-t border-slate-200 py-12 dark:border-white/[0.06] md:py-20",
          children: e.jsxs("div", {
            className: "container mx-auto px-4",
            children: [
              e.jsx(s, {
                children: e.jsx(h, {
                  spacious: !0,
                  kicker: "Vấn đề thường gặp",
                  title: "Bốn quyết định cần làm rõ trước khi xây sản phẩm số",
                  description: "Vấn đề phổ biến — và cách TDDTech xử lý.",
                }),
              }),
              e.jsx("div", {
                className: "space-y-4",
                children: pe.map((t, a) =>
                  e.jsx(
                    s,
                    {
                      index: a,
                      children: e.jsxs("article", {
                        className:
                          "group grid overflow-hidden rounded-[8px] border border-slate-200 shadow-sm transition-shadow duration-300 hover:shadow-md hover:shadow-primary/5 dark:border-white/10 lg:grid-cols-2",
                        children: [
                          e.jsxs("div", {
                            className:
                              "relative border-b border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03] md:p-8 lg:border-b-0 lg:border-r",
                            children: [
                              e.jsx("span", {
                                className:
                                  "pointer-events-none absolute right-5 top-4 text-5xl font-black leading-none text-slate-100 dark:text-white/[0.04]",
                                children: String(a + 1).padStart(2, "0"),
                              }),
                              e.jsxs("div", {
                                className:
                                  "relative flex items-center gap-2.5 text-rose-600 dark:text-rose-400",
                                children: [
                                  e.jsx(ee, { className: "h-5 w-5 flex-none" }),
                                  e.jsx("span", {
                                    className:
                                      "text-xs font-bold uppercase tracking-[0.14em]",
                                    children: "Vấn đề",
                                  }),
                                ],
                              }),
                              e.jsx("h3", {
                                className:
                                  "relative mt-4 text-balance text-xl font-extrabold text-slate-900 dark:text-white md:text-2xl",
                                children: t.pain,
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "flex flex-col gap-5 bg-sky-50 p-6 dark:bg-primary/[0.07] sm:flex-row sm:items-center sm:gap-6 md:p-8",
                            children: [
                              e.jsxs("div", {
                                className: "min-w-0 flex-1",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center gap-2.5 text-primary",
                                    children: [
                                      e.jsx(te, {
                                        className:
                                          "h-5 w-5 flex-none transition-transform duration-300 group-hover:scale-110",
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "text-xs font-bold uppercase tracking-[0.14em]",
                                        children: "TDDTech xử lý",
                                      }),
                                    ],
                                  }),
                                  e.jsx("h3", {
                                    className:
                                      "mt-4 text-balance text-xl font-extrabold text-slate-900 dark:text-white md:text-2xl",
                                    children: t.fix,
                                  }),
                                ],
                              }),
                              e.jsx(t.Art, {
                                className:
                                  "h-24 w-24 flex-none self-start text-slate-400 dark:text-white/25 sm:h-28 sm:w-28 sm:self-center",
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    t.pain,
                  ),
                ),
              }),
            ],
          }),
        }),
        e.jsx("section", {
          className:
            "measure-height border-t border-slate-200 bg-slate-100/50 py-12 dark:border-white/[0.06] dark:bg-white/[0.02] md:py-20",
          children: e.jsxs("div", {
            className: "container mx-auto px-4",
            children: [
              e.jsx(s, {
                children: e.jsx(h, {
                  spacious: !0,
                  kicker: "Người phụ trách",
                  title: "Có người chịu trách nhiệm cho giải pháp và kiến trúc",
                  description:
                    "Hai người chịu trách nhiệm chính, cùng 8 kỹ sư vận hành phía sau.",
                }),
              }),
              e.jsx("div", {
                className: "grid gap-4 md:grid-cols-2",
                children: I.map((t, a) =>
                  e.jsx(
                    s,
                    {
                      index: a,
                      className: "h-full",
                      children: e.jsxs("article", {
                        className:
                          "grid h-full grid-cols-[112px_1fr] items-center gap-4 rounded-[8px] border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.045] sm:grid-cols-[136px_1fr] sm:gap-5 sm:p-5",
                        children: [
                          e.jsx("img", {
                            src: t.image,
                            alt: `${t.name} — ${t.role}`,
                            loading: "lazy",
                            decoding: "async",
                            className:
                              "aspect-[4/5] w-full rounded-[6px] bg-white object-cover dark:bg-white/[0.04]",
                            style: { objectPosition: "center top" },
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("h3", {
                                className:
                                  "text-lg font-bold text-slate-900 dark:text-white",
                                children: t.name,
                              }),
                              e.jsx("p", {
                                className:
                                  "mt-1 text-sm font-semibold text-primary",
                                children: t.role,
                              }),
                              e.jsx("p", {
                                className:
                                  "mt-3 text-base leading-7 text-slate-600 dark:text-white/60",
                                children: t.short,
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    t.id,
                  ),
                ),
              }),
              e.jsx(s, { children: e.jsx(R, {}) }),
            ],
          }),
        }),
        e.jsx("section", {
          className:
            "measure-height border-t border-slate-200 py-12 dark:border-white/[0.06] md:py-20",
          children: e.jsxs("div", {
            className: "container mx-auto px-4",
            children: [
              e.jsx(s, {
                children: e.jsx(h, {
                  spacious: !0,
                  kicker: "Trọng tâm sản phẩm",
                  title: "Ba nhóm giải pháp TDDTech tập trung",
                  description:
                    "Mỗi nhóm bắt đầu từ mục tiêu sử dụng và quy trình hiện có của doanh nghiệp.",
                }),
              }),
              e.jsx("div", {
                className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
                children: ge.map(([t, a, n], r) =>
                  e.jsx(
                    s,
                    {
                      index: r,
                      className: "h-full",
                      children: e.jsxs("article", {
                        className:
                          "group relative h-full overflow-hidden rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 dark:border-white/10 dark:bg-white/[0.045] dark:hover:border-primary/35",
                        children: [
                          e.jsx("span", {
                            className:
                              "pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100",
                          }),
                          e.jsxs("div", {
                            className: "flex items-start justify-between gap-3",
                            children: [
                              e.jsx("span", {
                                className: "text-sm font-black text-primary",
                                children: t,
                              }),
                              e.jsx(v, {
                                className:
                                  "h-4 w-4 flex-none text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary dark:text-white/25",
                              }),
                            ],
                          }),
                          e.jsx("h3", {
                            className:
                              "mt-4 text-xl font-bold text-slate-900 dark:text-white",
                            children: a,
                          }),
                          e.jsx("p", {
                            className:
                              "mt-3 text-sm leading-7 text-slate-600 dark:text-white/55",
                            children: n,
                          }),
                        ],
                      }),
                    },
                    t,
                  ),
                ),
              }),
            ],
          }),
        }),
        e.jsx("section", {
          className:
            "measure-height border-t border-slate-200 bg-slate-100/50 py-12 dark:border-white/[0.06] dark:bg-white/[0.02] md:py-20",
          children: e.jsxs("div", {
            className: "container mx-auto px-4",
            children: [
              e.jsx(s, {
                children: e.jsx(h, {
                  spacious: !0,
                  kicker: "Ngành đã triển khai",
                  title: "Khách hàng trong nước và quốc tế",
                  description: `${x.length} nhóm ngành đã triển khai · Khách hàng tại Việt Nam, Úc, Canada và Mỹ.`,
                }),
              }),
              e.jsxs("button", {
                type: "button",
                "aria-expanded": i,
                "aria-controls": "capability-industry-list",
                onClick: () => o((t) => !t),
                className:
                  "inline-flex items-center gap-2 rounded-[8px] border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition-colors hover:border-primary/40 hover:text-primary dark:border-white/10 dark:bg-white/[0.04] dark:text-white/75",
                children: [
                  i ? "Thu gọn nhóm ngành" : `Xem ${x.length} nhóm ngành`,
                  e.jsx(ae, {
                    className: `h-4 w-4 transition-transform duration-300 ${i ? "rotate-180" : ""}`,
                  }),
                ],
              }),
              e.jsx(J, {
                initial: !1,
                children:
                  i &&
                  e.jsx(Y.div, {
                    id: "capability-industry-list",
                    initial: { height: 0, opacity: 0 },
                    animate: { height: "auto", opacity: 1 },
                    exit: { height: 0, opacity: 0 },
                    transition: {
                      height: {
                        duration: l ? 0 : 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      },
                      opacity: { duration: l ? 0 : 0.18 },
                    },
                    className: "overflow-hidden",
                    children: e.jsx("div", {
                      className:
                        "grid gap-3 pt-5 sm:grid-cols-2 lg:grid-cols-3",
                      children: x.map((t) =>
                        e.jsxs(
                          "article",
                          {
                            className:
                              "rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.045]",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex items-baseline justify-between gap-3",
                                children: [
                                  e.jsx("h3", {
                                    className:
                                      "text-base font-bold text-slate-900 dark:text-white",
                                    children: t.label,
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "flex-none rounded-full bg-primary/10 px-2.5 py-1 text-xs font-black text-primary",
                                    children: m.filter(
                                      (a) => a.categoryId === t.id,
                                    ).length,
                                  }),
                                ],
                              }),
                              e.jsx("p", {
                                className:
                                  "mt-2 text-sm leading-6 text-slate-600 dark:text-white/50",
                                children: t.description,
                              }),
                            ],
                          },
                          t.id,
                        ),
                      ),
                    }),
                  }),
              }),
            ],
          }),
        }),
        e.jsx(H, {
          projects: ye,
          eyebrow: "Dự án tiêu biểu",
          heading: "Sản phẩm đang chạy, tên miền kiểm chứng được",
          allLink: { href: "/du-an", label: `Xem ${m.length} dự án` },
          fallback: e.jsxs("section", {
            className:
              "measure-height relative overflow-hidden border-t border-slate-200 py-12 dark:border-white/[0.06] md:py-20",
            children: [
              e.jsx("div", {
                className:
                  "pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-primary/[0.07] blur-[110px]",
              }),
              e.jsxs("div", {
                className: "container relative mx-auto px-4",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex flex-col justify-between gap-5 sm:flex-row sm:items-end",
                    children: [
                      e.jsx(s, {
                        children: e.jsx(h, {
                          spacious: !0,
                          kicker: "Dự án tiêu biểu",
                          title: "Sản phẩm đang chạy, tên miền kiểm chứng được",
                          description: `Dưới đây là ${L.length} dự án tiêu biểu theo từng nhóm ngành. Một số dự án khác không thể công khai do phạm vi dữ liệu hoặc cam kết bảo mật với khách hàng.`,
                        }),
                      }),
                      e.jsxs("a", {
                        href: "/du-an",
                        className:
                          "mb-12 inline-flex flex-none items-center gap-2 font-bold text-primary hover:underline md:mb-16",
                        children: [
                          "Xem ",
                          m.length,
                          " dự án ",
                          e.jsx(v, { className: "h-4 w-4" }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                    children: L.map((t, a) =>
                      e.jsx(
                        s,
                        {
                          index: a,
                          className: "h-full",
                          children: e.jsxs("article", {
                            className:
                              "group flex h-full flex-col rounded-[8px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 dark:border-white/10 dark:bg-white/[0.045] dark:hover:border-primary/35",
                            children: [
                              e.jsxs("a", {
                                href: `/du-an/${t.slug}`,
                                className: "flex flex-1 flex-col",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "relative aspect-[16/10] overflow-hidden rounded-t-[7px] bg-slate-100 dark:bg-white/[0.03]",
                                    children: [
                                      e.jsx("img", {
                                        src: G(t.slug),
                                        srcSet: E(t.slug),
                                        sizes:
                                          "(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw",
                                        alt: `Giao diện website ${t.name}`,
                                        loading: "lazy",
                                        decoding: "async",
                                        className:
                                          "h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]",
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "flex flex-1 flex-col p-6",
                                    children: [
                                      e.jsx("p", {
                                        className:
                                          "text-xs font-bold uppercase tracking-[0.14em] text-primary",
                                        children: t.category,
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "mt-3 flex items-start justify-between gap-3",
                                        children: [
                                          e.jsx("h3", {
                                            className:
                                              "text-balance text-xl font-extrabold leading-snug text-slate-900 transition-colors group-hover:text-primary dark:text-white",
                                            children: t.name,
                                          }),
                                          e.jsx(f, {
                                            className:
                                              "mt-1 h-5 w-5 flex-none text-slate-300 transition-colors group-hover:text-primary dark:text-white/25",
                                          }),
                                        ],
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-white/50",
                                        children: t.summary,
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "mt-5 font-mono text-xs text-slate-400 dark:text-white/35",
                                        children: t.domain,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "border-t border-slate-100 px-6 py-3.5 dark:border-white/10",
                                children: e.jsxs("a", {
                                  href: t.url,
                                  target: "_blank",
                                  rel: "noreferrer",
                                  className:
                                    "inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline",
                                  children: [
                                    "Xem website ",
                                    e.jsx(se, {
                                      className:
                                        "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        },
                        t.slug,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
        }),
        e.jsx("section", {
          className:
            "measure-height border-t border-slate-200 bg-slate-100/50 py-12 dark:border-white/[0.06] dark:bg-white/[0.02] md:py-20",
          children: e.jsxs("div", {
            className: "container mx-auto px-4",
            children: [
              e.jsx("div", {
                className:
                  "flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between lg:gap-12",
                children: e.jsx(s, {
                  className: "min-w-0 flex-1",
                  children: e.jsx(h, {
                    spacious: !0,
                    kicker: "Quy trình",
                    title: "Sáu bước, mỗi bước có đầu ra nghiệm thu được",
                    description:
                      "Bạn biết trước mỗi giai đoạn sẽ nhận được gì và khi nào, thay vì chờ tới ngày bàn giao mới thấy sản phẩm.",
                  }),
                }),
              }),
              e.jsx(V, {}),
            ],
          }),
        }),
        e.jsx("section", {
          className:
            "measure-height border-t border-slate-200 py-12 dark:border-white/[0.06] md:py-20",
          children: e.jsx("div", {
            className: "container mx-auto px-4",
            children: e.jsxs("div", {
              className: "grid gap-10 lg:grid-cols-2",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx(s, {
                      children: e.jsx(h, {
                        spacious: !0,
                        kicker: "Công nghệ",
                        title: "Chọn theo bài toán, không theo thói quen",
                      }),
                    }),
                    e.jsx("div", {
                      className: "space-y-3",
                      children: be.map(([t, a, n], r) =>
                        e.jsx(
                          s,
                          {
                            index: r,
                            from: "left",
                            children: e.jsxs("article", {
                              className:
                                "group flex gap-5 rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md dark:border-white/10 dark:bg-white/[0.045] dark:hover:border-primary/35",
                              children: [
                                e.jsx(t, {
                                  className:
                                    "mt-0.5 h-6 w-6 flex-none text-primary transition-transform duration-300 group-hover:scale-110",
                                }),
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("h3", {
                                      className:
                                        "font-bold text-slate-900 dark:text-white",
                                      children: a,
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "mt-1.5 text-sm leading-6 text-slate-600 dark:text-white/55",
                                      children: n,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          a,
                        ),
                      ),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("div", {
                      className:
                        "flex flex-col sm:flex-row sm:items-center sm:gap-5",
                      children: e.jsx(s, {
                        className: "min-w-0 flex-1",
                        children: e.jsx(h, {
                          spacious: !0,
                          kicker: "Bàn giao",
                          title:
                            "Sau nghiệm thu: tài sản là của anh chị, TDDTech tiếp tục giữ nó vận hành",
                        }),
                      }),
                    }),
                    e.jsx(z, {}),
                    e.jsxs("div", {
                      className:
                        "mt-4 flex gap-4 rounded-[8px] border border-sky-200 bg-sky-50 p-5 dark:border-primary/20 dark:bg-primary/[0.07]",
                      children: [
                        e.jsx(ne, {
                          className: "mt-0.5 h-6 w-6 flex-none text-primary",
                        }),
                        e.jsx("p", {
                          className:
                            "text-sm leading-7 text-slate-600 dark:text-white/60",
                          children:
                            "Xác thực, phân quyền và bảo vệ dữ liệu nhạy cảm được áp dụng theo đặc thù từng hệ thống, đặc biệt với web app nội bộ và cổng đối tác.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        e.jsx("section", {
          className:
            "measure-height border-t border-slate-200 py-12 dark:border-white/[0.06] md:py-20",
          children: e.jsxs("div", {
            className: "container mx-auto px-4",
            children: [
              e.jsx(s, {
                children: e.jsx(h, {
                  spacious: !0,
                  kicker: "Hợp tác",
                  title: "Bốn cách làm việc tuỳ quy mô của bạn",
                }),
              }),
              e.jsx("div", {
                className: "grid gap-4 md:grid-cols-2",
                children: ue.map(([t, a], n) =>
                  e.jsx(
                    s,
                    {
                      index: n,
                      className: "h-full",
                      children: e.jsxs("article", {
                        className:
                          "group flex h-full gap-5 rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 dark:border-white/10 dark:bg-white/[0.045] dark:hover:border-primary/35",
                        children: [
                          e.jsx(v, {
                            className:
                              "mt-1 h-5 w-5 flex-none text-primary transition-transform duration-300 group-hover:translate-x-1",
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("h3", {
                                className:
                                  "text-lg font-bold text-slate-900 dark:text-white",
                                children: t,
                              }),
                              e.jsx("p", {
                                className:
                                  "mt-2 text-sm leading-7 text-slate-600 dark:text-white/55",
                                children: a,
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    t,
                  ),
                ),
              }),
              e.jsxs("div", {
                className:
                  "mt-8 rounded-[8px] border border-slate-200 bg-gradient-to-br from-sky-50 via-cyan-50/40 to-white p-6 shadow-sm dark:border-primary/20 dark:from-transparent dark:via-transparent dark:to-transparent md:p-8",
                children: [
                  e.jsx("h3", {
                    className:
                      "text-xl font-bold text-slate-900 dark:text-white",
                    children: "Báo giá ghi rõ từng hạng mục",
                  }),
                  e.jsx("p", {
                    className:
                      "mt-3 max-w-4xl text-sm leading-7 text-slate-600 dark:text-white/60",
                    children:
                      "Đầu ra, tiến độ, phần bạn sở hữu sau bàn giao và chi phí bên thứ ba như hosting, domain, API đều được liệt kê trước khi ký.",
                  }),
                ],
              }),
            ],
          }),
        }),
        e.jsx("section", {
          className:
            "measure-height border-t border-slate-200 py-12 dark:border-white/[0.06] md:py-20",
          children: e.jsx("div", {
            className: "container mx-auto px-4",
            children: e.jsxs("div", {
              className:
                "grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx(s, {
                      children: e.jsx(h, {
                        spacious: !0,
                        kicker: "Liên hệ",
                        title: "Gửi yêu cầu, cùng xác định phạm vi",
                        description:
                          "Cho TDDTech biết mục tiêu, quy trình và hệ thống cần kết nối. Đề xuất sẽ nêu hướng triển khai, đầu ra và các thông tin còn thiếu trước khi chốt báo giá.",
                      }),
                    }),
                    e.jsxs("div", {
                      className: "flex flex-col gap-3 sm:flex-row flex-wrap",
                      children: [e.jsxs(ContactChannelPair,{children:[e.jsxs("a", {
                          href: site.zaloHref,
                          target: "_blank",
                          rel: "noreferrer",
                          className:
                            "inline-flex items-center justify-center gap-2 rounded-[8px] bg-primary px-6 py-3.5 font-bold text-white shadow-lg shadow-primary/25 transition-colors hover:bg-cyan-400",
                          children: [
                            e.jsx(T, { className: "h-5 w-5" }),
                            "Nhận tư vấn và báo giá",
                          ],
                        }),e.jsx(FacebookContactLink,{variant:"button",label:"Trao đổi và thiết kế",className:"inline-flex items-center justify-center gap-2 rounded-[8px] bg-primary px-6 py-3.5 font-bold text-white shadow-lg shadow-primary/25 transition-colors hover:bg-cyan-400"})]}),
e.jsxs("a", {
                          href: site.phoneHref,
                          className:
                            "inline-flex items-center justify-center gap-2 rounded-[8px] border border-slate-200 bg-white px-6 py-3.5 font-bold text-slate-700 shadow-sm hover:border-primary/40 hover:text-primary dark:border-white/15 dark:bg-white/[0.04] dark:text-white/80",
                          children: [
                            e.jsx(S, { className: "h-5 w-5" }),
                            c.phone,
                          ],
                        })],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className:
                    "overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.045]",
                  children: e.jsx("dl", {
                    className:
                      "divide-y divide-slate-100 dark:divide-white/[0.07]",
                    children: [
                      [T, "Zalo", c.phone],
                      [S, "Hotline", c.phone],
                      [ie, "Email", c.email],
                      [
                        FacebookIcon,
                        "Facebook",
                        "Thiều Đức Dũng",
                        site.social.facebook,
                      ],

                      [he, "Địa chỉ", c.shortAddress],
                    ].map(([t, a, n, contactHref]) => {
                      const r = t;
                      return e.jsxs(
                        "div",
                        {
                          className:
                            "grid grid-cols-[20px_84px_minmax(0,1fr)] items-center gap-2 px-4 py-4 sm:grid-cols-[28px_100px_minmax(0,1fr)] sm:gap-3 sm:px-6",
                          children: [
                            e.jsx(r, { className: "h-5 w-5 text-primary" }),
                            e.jsx("dt", {
                              className:
                                "text-xs font-bold uppercase tracking-[0.1em] text-slate-400 dark:text-white/35",
                              children: a,
                            }),
                            e.jsx("dd", {
                              className:
                                "text-sm font-semibold text-slate-800 [overflow-wrap:anywhere] dark:text-white/75",
                              children: contactHref
                                ? e.jsx("a", {
                                    href: contactHref,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                      "hover:text-primary hover:underline",
                                    children: n,
                                  })
                                : n,
                            }),
                          ],
                        },
                        a,
                      );
                    }),
                  }),
                }),
              ],
            }),
          }),
        }),
      ],
    })
  );
}
export { Me as default };
