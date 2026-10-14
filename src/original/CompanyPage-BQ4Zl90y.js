import { site, siteOrigin, siteUrl, siteText } from "../config/site.js";
import FacebookIcon from "../components/FacebookIcon";
import { j as t } from "./vendor-react-BaqgPuim.js";
import { a as w, S as h } from "./SeoLayout-CuGaHTIj.js";
import {
  u as y,
  D as j,
  E as N,
  G as f,
  a as o,
  c as a,
  I as l,
  J as T,
  K as X,
  p as d,
  r as q,
  L as S,
  P as C,
  M as B,
} from "./index-DAfw2Y79.js";
import {
  s as P,
  aZ as K,
  a_ as W,
  j as p,
  a$ as G,
  aH as x,
  b0 as b,
  b1 as u,
  b2 as L,
  b3 as H,
  q as M,
  b4 as F,
  b5 as v,
  r as g,
  K as $,
  aG as D,
  aL as E,
} from "./vendor-icons-xx0BMbwT.js";
import "./vendor-radix-CIIFFl0l.js";
import "./vendor-motion-B2aXCTtA.js";
const I = {
    about: {
      path: "/gioi-thieu",
      eyebrow: "Giới thiệu TDDTech",
      title: "TDDTech xây website và hệ thống số cho doanh nghiệp",
      description:
        "Tìm hiểu định hướng TDDTech trong website doanh nghiệp, web app nghiệp vụ và website bán hàng; cùng kinh nghiệm nhà sáng lập và cách triển khai.",
      intro:
        "TDDTech xem website và web app là tài sản số doanh nghiệp cần sở hữu, vận hành và phát triển theo mục tiêu kinh doanh.",
      highlights: [
        "Website doanh nghiệp",
        "Web app nghiệp vụ",
        "Website bán hàng",
        "Phạm vi bàn giao rõ ràng",
      ],
    },
    profile: {
      path: "/ho-so-nang-luc",
      eyebrow: "Hồ sơ năng lực",
      title: "Năng lực xây website và web app cho doanh nghiệp",
      description:
        "Hồ sơ năng lực TDDTech: ba nhóm giải pháp, người phụ trách, dự án công khai, quy trình và phạm vi bàn giao.",
      intro:
        "TDDTech tập trung website doanh nghiệp, web app nghiệp vụ và website bán hàng—những sản phẩm số doanh nghiệp có thể sở hữu, vận hành và phát triển.",
      highlights: [
        "Website doanh nghiệp",
        "Web app nghiệp vụ",
        "Website bán hàng",
        "150+ dự án đã triển khai",
      ],
    },
    pricing: {
      path: "/bang-gia-thiet-ke-website",
      eyebrow: "Bảng giá",
      title: "Chi phí website: xây một lần, vận hành mỗi tháng",
      description:
        "Mô hình dịch vụ TDDTech gồm Gói Setup xây nền móng website và ba gói vận hành hằng tháng Basic, Growth, Performance. Báo giá riêng sau khi trao đổi mục tiêu.",
      intro:
        "Website là tài sản: một lần đầu tư để xây đúng nền móng, rồi vận hành mỗi tháng để tài sản không xuống cấp và tiếp tục sinh lời. Chi phí được báo riêng sau khi TDDTech hiểu mục tiêu và hiện trạng của anh chị.",
      highlights: [
        "Gói Setup một lần",
        "Vận hành hằng tháng",
        "Báo giá riêng",
        "Không phí ẩn",
      ],
    },
    process: {
      path: "/quy-trinh-thiet-ke-website",
      eyebrow: "Quy trình làm việc",
      title: "Quy trình thiết kế website rõ từ yêu cầu đến bàn giao",
      description:
        "Quy trình tư vấn, báo giá, thiết kế, lập trình, kiểm thử, nghiệm thu và bàn giao website tại TDDTech.",
      intro:
        "Mỗi giai đoạn đều có đầu ra cụ thể để khách hàng theo dõi tiến độ và kiểm soát phạm vi.",
      highlights: [
        "Bóc tách yêu cầu",
        "Duyệt giao diện",
        "Kiểm thử",
        "Nghiệm thu",
      ],
    },
    warranty: {
      path: "/bao-hanh-bao-tri-website",
      eyebrow: "Bảo hành và bàn giao",
      title: "Bảo hành 5 năm, trọn đời với lỗi do TDDTech",
      description:
        "Chính sách bảo hành hai tầng của TDDTech: chỉnh sửa miễn phí trong phạm vi suốt 5 năm, bảo hành trọn đời với lỗi do TDDTech gây ra; bàn giao source code, tài khoản, domain, hosting và tài liệu sử dụng.",
      intro:
        "Tài sản thuộc về anh chị: mã nguồn, tài khoản và tên miền được bàn giao đầy đủ, kèm cam kết bảo hành rõ phần nào được hỗ trợ miễn phí.",
      highlights: [
        "Chỉnh sửa miễn phí 5 năm",
        "Trọn đời với lỗi do TDDTech",
        "Source code",
        "Tài khoản quản trị",
      ],
    },
    contact: {
      path: "/lien-he",
      eyebrow: "Liên hệ TDDTech",
      title: "Trao đổi trực tiếp về website bạn đang cần",
      description:
        "Liên hệ TDDTech qua Zalo, hotline hoặc email để nhận tư vấn thiết kế website và web app theo yêu cầu.",
      intro:
        "Gửi mục tiêu, ngành nghề, tính năng mong muốn và thời gian dự kiến. TDDTech sẽ phản hồi phương án phù hợp trước khi báo giá.",
      highlights: [
        siteText("Zalo {{phone}}"),
        "Tư vấn miễn phí",
        "Phản hồi nhanh",
        "Phục vụ toàn quốc",
      ],
    },
  },
  m = [
    {
      icon: x,
      title: "Website doanh nghiệp",
      text: "Tổ chức hồ sơ năng lực, dịch vụ, dự án và thông tin liên hệ để khách hàng, đối tác thẩm định.",
    },
    {
      icon: b,
      title: "Web app nghiệp vụ",
      text: "Số hóa quy trình, dữ liệu và phân quyền theo cách đội ngũ đang làm việc.",
    },
    {
      icon: u,
      title: "Website bán hàng",
      text: "Kết nối trải nghiệm mua với quản lý sản phẩm, đơn hàng và quy trình xử lý phía sau.",
    },
    {
      icon: L,
      title: "Người phụ trách rõ ràng",
      text: "Nhà sáng lập và kiến trúc sư giải pháp tham gia xác định yêu cầu, phạm vi và hướng triển khai.",
    },
  ],
  Z = [
    {
      icon: x,
      title: "Website doanh nghiệp",
      text: "Hồ sơ số tập trung vào năng lực, dịch vụ, dự án và thông tin giúp khách hàng thẩm định trước khi liên hệ.",
    },
    {
      icon: b,
      title: "Web app nghiệp vụ",
      text: "Công cụ quản lý được xây từ vai trò người dùng, dữ liệu và quy tắc vận hành thực tế.",
    },
    {
      icon: u,
      title: "Website bán hàng",
      text: "Kênh bán hàng và quản trị đơn được thiết kế theo danh mục, cách chốt đơn và hệ thống hiện có.",
    },
  ],
  R = [
    {
      icon: H,
      title: "Mã nguồn có cấu trúc",
      text: "Tổ chức module rõ ràng, quản lý phiên bản và thuận tiện tiếp tục phát triển.",
    },
    {
      icon: M,
      title: "Bảo mật theo phạm vi",
      text: "Xác thực, phân quyền, kiểm tra dữ liệu đầu vào và quản lý thông tin nhạy cảm.",
    },
    {
      icon: F,
      title: "Kiểm thử trước bàn giao",
      text: "Kiểm tra thiết bị, trình duyệt, luồng nghiệp vụ, form và các chức năng đã thống nhất.",
    },
    {
      icon: v,
      title: "Bàn giao chủ động",
      text: "Source code, tài khoản quản trị, tài liệu sử dụng và thông tin triển khai được bàn giao rõ.",
    },
  ],
  V = [
    [
      "01",
      "Tiếp nhận yêu cầu",
      "Làm rõ mục tiêu, người dùng, nội dung, tính năng và thời gian.",
    ],
    [
      "02",
      "Bóc tách và báo giá",
      "Gửi phạm vi công việc, chi phí, tiến độ, điều kiện thanh toán.",
    ],
    [
      "03",
      "Thiết kế giao diện",
      "Xây bố cục, phong cách và duyệt các màn hình chính.",
    ],
    [
      "04",
      "Lập trình",
      "Phát triển responsive, chức năng, quản trị và tích hợp.",
    ],
    [
      "05",
      "Kiểm thử",
      "Kiểm tra nội dung, thiết bị, trình duyệt và luồng sử dụng.",
    ],
    [
      "06",
      "Nghiệm thu, bàn giao",
      "Đưa website lên tên miền, bàn giao và kích hoạt bảo hành.",
    ],
  ],
  _ = [
    {
      icon: g,
      title: "Chỉnh sửa miễn phí 5 năm",
      text: "Chỉnh sửa trong phạm vi đã nghiệm thu không tính phí suốt 60 tháng.",
    },
    {
      icon: g,
      title: "Trọn đời với lỗi do TDDTech",
      text: "Lỗi phát sinh từ code hoặc cấu hình do TDDTech triển khai được sửa miễn phí, không giới hạn thời gian.",
    },
    {
      icon: v,
      title: "Source code dự án",
      text: "Bàn giao source code thuộc phạm vi sau khi hoàn tất thanh toán.",
    },
    {
      icon: $,
      title: "Tài khoản sở hữu",
      text: "Bàn giao hoặc chuyển quyền domain, hosting, quản trị và dịch vụ liên quan.",
    },
    {
      icon: p,
      title: "Tài liệu sử dụng",
      text: "Hướng dẫn các thao tác quản trị chính theo phạm vi hệ thống.",
    },
    {
      icon: D,
      title: "Hỗ trợ vận hành",
      text: "Tiếp nhận lỗi qua kênh liên hệ và phản hồi theo mức độ ảnh hưởng.",
    },
    {
      icon: E,
      title: "Phát sinh minh bạch",
      text: "Tính năng mới chỉ triển khai sau khi khách đồng ý phạm vi và chi phí.",
    },
  ],
  Y = ({ kind: n }) => {
    const e = I[n];
    return (
      y({
        title: `${e.title} | TDDTech`,
        description: e.description,
        path: e.path,
      }),
      t.jsxs(w, {
        eyebrow: e.eyebrow,
        title: e.title,
        intro: e.intro,
        highlights: [...e.highlights],
        children: [
          n === "about" && t.jsx(j, {}),
          t.jsx("section", {
            className:
              "border-t border-slate-200 dark:border-white/[0.06] py-14 md:py-24",
            children: t.jsxs("div", {
              className: "container mx-auto px-4",
              children: [
                n === "about" &&
                  t.jsxs(t.Fragment, {
                    children: [
                      t.jsx(h, {
                        kicker: "Về TDDTech",
                        title: "Website là tài sản. TDDTech giữ nó sinh lời.",
                        description:
                          "Phần lớn chủ doanh nghiệp coi website là khoản chi làm một lần rồi để đó. TDDTech coi đó là tài sản đứng tên doanh nghiệp: xây đúng nền móng từ mục tiêu kinh doanh, rồi bảo vệ, giữ gìn và phát triển để website mang về khách hàng.",
                      }),
                      t.jsx(N, { className: "mb-12" }),
                      t.jsx("div", {
                        className: "mb-12",
                        children: t.jsx(f, {}),
                      }),
                      t.jsx("div", {
                        className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
                        children: m.map((i) => t.jsx(s, { ...i }, i.title)),
                      }),
                      t.jsxs("div", {
                        className: "mt-12 grid gap-5 lg:grid-cols-2",
                        children: [
                          t.jsxs("article", {
                            className:
                              "rounded-[8px] border border-slate-200 bg-white shadow-sm p-6 dark:border-white/10 dark:bg-white/[0.045] md:p-8",
                            children: [
                              t.jsx("h2", {
                                className:
                                  "text-2xl font-bold text-slate-900 dark:text-white",
                                children: "Cách TDDTech làm việc",
                              }),
                              t.jsx("p", {
                                className:
                                  "mt-4 text-sm leading-7 text-slate-600 dark:text-white/60",
                                children:
                                  "Trao đổi trực tiếp, bóc tách tính năng, thống nhất đầu ra và chia tiến độ thành các mốc dễ nghiệm thu. Mục tiêu là giúp khách hàng hiểu mình đang đầu tư vào phần nào và nhận được gì sau bàn giao.",
                              }),
                            ],
                          }),
                          t.jsxs("article", {
                            className:
                              "rounded-[8px] border border-slate-200 bg-gradient-to-br from-sky-50 to-white shadow-sm p-6 dark:border-primary/20 dark:bg-primary/[0.07] md:p-8",
                            children: [
                              t.jsx("h2", {
                                className:
                                  "text-2xl font-bold text-slate-900 dark:text-white",
                                children: "Thông tin pháp lý",
                              }),
                              t.jsxs("p", {
                                className:
                                  "mt-4 text-sm leading-7 text-slate-600 dark:text-white/60",
                                children: [
                                  o,
                                  " Ngành nghề chính: ",
                                  a.mainBusinessDetail,
                                  ".",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      t.jsx(l, {}),
                      t.jsxs("div", {
                        className: "mt-8 flex flex-col gap-3 sm:flex-row",
                        children: [
                          t.jsx("a", {
                            href: "/ho-so-nang-luc",
                            className:
                              "inline-flex justify-center rounded-[8px] bg-primary px-5 py-3 font-bold text-white shadow-md shadow-primary/20 hover:bg-cyan-400 transition-all",
                            children: "Xem hồ sơ năng lực",
                          }),
                          t.jsx("a", {
                            href: "/du-an",
                            className:
                              "inline-flex justify-center rounded-[8px] border border-slate-200 bg-white px-5 py-3 font-bold text-slate-700 shadow-sm hover:border-primary/40 hover:text-primary dark:border-white/15 dark:bg-white/[0.04] dark:text-white/80",
                            children: "Xem dự án công khai",
                          }),
                        ],
                      }),
                    ],
                  }),
                n === "profile" &&
                  t.jsxs(t.Fragment, {
                    children: [
                      t.jsx(h, {
                        kicker: "TDDTech",
                        title: "Ba nhóm giải pháp, một cách tiếp cận",
                        description: `${o} Tên quốc tế: ${a.internationalName}. TDDTech bắt đầu từ nhu cầu sử dụng, rồi xác định cấu trúc, chức năng, dữ liệu và phạm vi bàn giao.`,
                      }),
                      t.jsx("div", {
                        className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
                        children: m.map((i) => t.jsx(s, { ...i }, i.title)),
                      }),
                      t.jsxs("div", {
                        className: "mt-14 md:mt-20",
                        children: [
                          t.jsx(h, {
                            kicker: "Giải pháp",
                            title: "Sản phẩm số TDDTech tập trung xây dựng",
                            description:
                              "Ba nhóm sản phẩm này giải quyết các điểm chạm chính giữa doanh nghiệp, khách hàng và quy trình nội bộ.",
                          }),
                          t.jsx("div", {
                            className:
                              "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
                            children: Z.map((i) =>
                              t.jsx(
                                s,
                                { icon: i.icon, title: i.title, text: i.text },
                                i.title,
                              ),
                            ),
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "mt-14 md:mt-20",
                        children: [
                          t.jsx(h, {
                            kicker: "Người phụ trách",
                            title: "Trách nhiệm rõ từ mục tiêu đến kiến trúc",
                            description: `Nhà sáng lập phụ trách định hướng và chất lượng bàn giao; kiến trúc sư giải pháp làm rõ yêu cầu, luồng nghiệp vụ và cấu trúc hệ thống. Phía sau là ${T} kỹ sư phát triển và vận hành hỗ trợ hệ thống 24/7.`,
                          }),
                          t.jsx("div", {
                            className: "grid gap-4 md:grid-cols-2",
                            children: X.map((i) =>
                              t.jsxs(
                                "article",
                                {
                                  className:
                                    "grid grid-cols-[112px_1fr] items-center gap-4 rounded-[8px] border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.045] sm:grid-cols-[136px_1fr] sm:gap-5 sm:p-5",
                                  children: [
                                    t.jsx("img", {
                                      src: i.image,
                                      alt: `${i.name} — ${i.role}`,
                                      loading: "lazy",
                                      decoding: "async",
                                      className:
                                        "aspect-[4/5] w-full rounded-[6px] bg-white object-cover dark:bg-white/[0.04]",
                                      style: { objectPosition: "center top" },
                                    }),
                                    t.jsxs("div", {
                                      children: [
                                        t.jsx("h2", {
                                          className:
                                            "text-lg font-bold text-slate-900 dark:text-white",
                                          children: i.name,
                                        }),
                                        t.jsx("p", {
                                          className:
                                            "mt-1 text-sm font-semibold text-primary",
                                          children: i.role,
                                        }),
                                        t.jsx("p", {
                                          className:
                                            "mt-3 text-sm leading-7 text-slate-600 dark:text-white/55",
                                          children: i.summary,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                i.name,
                              ),
                            ),
                          }),
                          t.jsx(l, {}),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "mt-14 md:mt-20",
                        children: [
                          t.jsx(h, {
                            kicker: "Kỹ thuật & bàn giao",
                            title: "Bàn giao đủ để anh chị sở hữu trọn vẹn",
                          }),
                          t.jsx("div", {
                            className:
                              "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
                            children: R.map((i) =>
                              t.jsx(
                                s,
                                { icon: i.icon, title: i.title, text: i.text },
                                i.title,
                              ),
                            ),
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "mt-14 md:mt-20",
                        children: [
                          t.jsx(h, {
                            kicker: "Dự án đã thực hiện",
                            title: `${d.length} dự án được khách hàng cho phép công khai`,
                            description:
                              "Một số dự án tiêu biểu dưới đây cho thấy phạm vi sản phẩm và nhóm ngành TDDTech đã triển khai. Thông tin chỉ nêu những gì có thể xác minh và được phép công bố.",
                          }),
                          t.jsx("div", {
                            className:
                              "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
                            children: q.slice(0, 9).map((i) =>
                              t.jsxs(
                                "a",
                                {
                                  href: `/du-an/${i.slug}`,
                                  className:
                                    "rounded-[8px] border border-slate-200 bg-white shadow-sm p-5 transition-colors hover:border-primary/40 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-primary/35",
                                  children: [
                                    t.jsx("p", {
                                      className:
                                        "text-xs font-bold uppercase tracking-[0.14em] text-primary",
                                      children: i.category,
                                    }),
                                    t.jsx("h2", {
                                      className:
                                        "mt-2 text-lg font-bold text-slate-900 dark:text-white",
                                      children: i.name,
                                    }),
                                    t.jsx("p", {
                                      className:
                                        "mt-2 text-sm leading-6 text-slate-600 dark:text-white/50",
                                      children: i.summary,
                                    }),
                                    t.jsx("p", {
                                      className:
                                        "mt-3 font-mono text-xs text-slate-400 dark:text-white/35",
                                      children: i.domain,
                                    }),
                                  ],
                                },
                                i.slug,
                              ),
                            ),
                          }),
                          t.jsxs("a", {
                            href: "/du-an",
                            className:
                              "mt-6 inline-flex items-center justify-center gap-2 rounded-[8px] bg-primary px-5 py-3 text-sm font-bold text-white shadow-md shadow-primary/20 hover:bg-cyan-400 transition-all",
                            children: [
                              "Xem đủ ",
                              d.length,
                              " dự án ",
                              t.jsx(P, { className: "h-4 w-4" }),
                            ],
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        className:
                          "mt-14 rounded-[8px] border border-slate-200 bg-gradient-to-br from-sky-50 via-cyan-50/40 to-white shadow-sm p-6 dark:border-primary/20 dark:bg-primary/[0.07] md:mt-20 md:p-8",
                        children: [
                          t.jsx("h2", {
                            className:
                              "text-2xl font-bold text-slate-900 dark:text-white",
                            children: "Phạm vi phục vụ và cách hợp tác",
                          }),
                          t.jsx("p", {
                            className:
                              "mt-3 max-w-4xl text-sm leading-7 text-slate-600 dark:text-white/60",
                            children:
                              "TDDTech làm việc với khách hàng toàn quốc và có thể triển khai từ xa theo từng giai đoạn: phân tích yêu cầu, thiết kế, lập trình, kiểm thử, triển khai, hướng dẫn và bảo hành. Báo giá ghi rõ phạm vi, đầu ra, tiến độ và phần khách hàng sở hữu sau bàn giao.",
                          }),
                          t.jsxs("div", {
                            className: "mt-6 flex flex-col gap-3 sm:flex-row",
                            children: [
                              t.jsx("a", {
                                href: "/du-an",
                                className:
                                  "inline-flex justify-center rounded-[8px] bg-primary px-5 py-3 font-bold text-white shadow-md shadow-primary/20 hover:bg-cyan-400 transition-all",
                                children: "Xem toàn bộ dự án",
                              }),
                              t.jsx("a", {
                                href: "/lien-he",
                                className:
                                  "inline-flex justify-center rounded-[8px] border border-slate-200 bg-white px-5 py-3 font-bold text-slate-700 shadow-sm hover:border-primary/40 hover:text-primary dark:border-white/15 dark:bg-white/[0.04] dark:text-white/80",
                                children: "Trao đổi yêu cầu",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                n === "pricing" &&
                  t.jsxs(t.Fragment, {
                    children: [
                      t.jsx(h, {
                        kicker: "Mô hình dịch vụ",
                        title:
                          "Hai tầng: xây nền móng, rồi giữ tài sản sinh lời",
                        description:
                          "Phần lớn chủ doanh nghiệp làm website một lần rồi để đó, vài năm sau website xuống cấp và phải làm lại. TDDTech tách rõ hai việc: Gói Setup để xây đúng ngay từ đầu, và gói vận hành hằng tháng để bảo vệ, giữ gìn và phát triển website.",
                      }),
                      t.jsx(S, {}),
                    ],
                  }),
                n === "process" &&
                  t.jsxs(t.Fragment, {
                    children: [
                      t.jsx(h, {
                        kicker: "6 giai đoạn",
                        title: "Mỗi bước đều có đầu ra để kiểm soát",
                      }),
                      t.jsx(C, {}),
                      t.jsx("div", {
                        className:
                          "mt-10 grid gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3",
                        children: V.map(([i, r, k]) =>
                          t.jsxs(
                            "article",
                            {
                              className:
                                "border-t-2 border-slate-900 pt-4 dark:border-white",
                              children: [
                                t.jsx("p", {
                                  className:
                                    "font-mono text-sm font-bold text-primary",
                                  children: i,
                                }),
                                t.jsx("h2", {
                                  className:
                                    "mt-1 text-lg font-black text-slate-900 dark:text-white",
                                  children: r,
                                }),
                                t.jsx("p", {
                                  className:
                                    "mt-1.5 text-sm leading-7 text-slate-600 dark:text-white/55",
                                  children: k,
                                }),
                              ],
                            },
                            i,
                          ),
                        ),
                      }),
                    ],
                  }),
                n === "warranty" &&
                  t.jsxs(t.Fragment, {
                    children: [
                      t.jsx(h, {
                        kicker: "Chính sách khách hàng",
                        title:
                          "Khách hàng chủ động sở hữu và vận hành sản phẩm",
                        description:
                          "Chi tiết cuối cùng được ghi trong báo giá hoặc hợp đồng của từng dự án. Bảo hành không bao gồm lỗi do bên thứ ba, khách tự chỉnh source code, mã độc từ tài khoản bị lộ hoặc thay đổi ngoài phạm vi bàn giao.",
                      }),
                      t.jsx(B, {}),
                      t.jsx("div", {
                        className:
                          "mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
                        children: _.map((i) => t.jsx(s, { ...i }, i.title)),
                      }),
                    ],
                  }),
                n === "contact" &&
                  t.jsxs(t.Fragment, {
                    children: [
                      t.jsx(h, {
                        kicker: "Kênh tư vấn",
                        title: "Chọn cách liên hệ thuận tiện nhất",
                      }),
                      t.jsxs("div", {
                        className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
                        children: [t.jsx(c, {
                            icon: K,
                            title: "Zalo",
                            value: siteText("{{phone}}"),
                            href: site.zaloHref,
                          }),
t.jsx(c, {
                            icon: FacebookIcon,
                            title: "Facebook",
                            value: "Thiều Đức Dũng",
                            href: site.social.facebook,
                          }),
t.jsx(c, {
                            icon: W,
                            title: "Hotline",
                            value: siteText("{{phone}}"),
                            href: site.phoneHref,
                          }),
t.jsx(c, {
                            icon: p,
                            title: "Email",
                            value: siteText("{{email}}"),
                            href: site.emailHref,
                          })],
                      }),
                      t.jsxs("div", {
                        className:
                          "mt-8 rounded-[8px] border border-slate-200 bg-gradient-to-br from-sky-50 via-cyan-50/40 to-white shadow-sm p-6 dark:border-primary/20 dark:bg-primary/[0.07] md:p-8",
                        children: [
                          t.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [
                              t.jsx(G, {
                                className: "h-7 w-7 flex-none text-primary",
                              }),
                              t.jsxs("div", {
                                children: [
                                  t.jsx("p", {
                                    className:
                                      "text-sm font-bold uppercase tracking-[0.16em] text-primary",
                                    children: "Thông tin chuyển khoản",
                                  }),
                                  t.jsx("h2", {
                                    className:
                                      "mt-1 text-xl font-bold text-slate-900 dark:text-white",
                                    children: "Thanh toán và đặt cọc dự án",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          t.jsxs("div", {
                            className: "mt-6 grid gap-4 sm:grid-cols-3",
                            children: [
                              t.jsxs("div", {
                                children: [
                                  t.jsx("p", {
                                    className:
                                      "text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-white/40",
                                    children: "Ngân hàng",
                                  }),
                                  t.jsx("p", {
                                    className:
                                      "mt-1 text-lg font-bold text-slate-900 dark:text-white",
                                    children: a.bank.name,
                                  }),
                                ],
                              }),
                              t.jsxs("div", {
                                children: [
                                  t.jsx("p", {
                                    className:
                                      "text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-white/40",
                                    children: "Số tài khoản",
                                  }),
                                  t.jsx("p", {
                                    className:
                                      "mt-1 break-all text-lg font-bold text-slate-900 dark:text-white",
                                    children: a.bank.accountNumber,
                                  }),
                                ],
                              }),
                              t.jsxs("div", {
                                children: [
                                  t.jsx("p", {
                                    className:
                                      "text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-white/40",
                                    children: "Chủ tài khoản",
                                  }),
                                  t.jsx("p", {
                                    className:
                                      "mt-1 text-lg font-bold text-slate-900 dark:text-white",
                                    children: a.bank.accountName,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          t.jsxs("p", {
                            className:
                              "mt-5 rounded-[8px] border border-amber-400/25 bg-amber-50 p-4 text-sm leading-7 text-amber-900 dark:border-amber-400/15 dark:bg-amber-400/[0.05] dark:text-amber-100/70",
                            children: [
                              "Vui lòng xác nhận lại thông tin qua Zalo ",
                              t.jsx("strong", {
                                className: "text-slate-900 dark:text-white",
                                children: siteText("{{phone}}"),
                              }),
                              " trước khi chuyển khoản. Ghi nội dung chuyển khoản kèm số điện thoại hoặc tên dự án để TDDTech đối soát nhanh.",
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
      })
    );
  },
  s = ({ icon: n, title: e, text: i }) =>
    t.jsxs("article", {
      className:
        "rounded-[8px] border border-slate-200 bg-white shadow-sm p-6 dark:border-white/10 dark:bg-white/[0.045]",
      children: [
        t.jsx("div", {
          className:
            "mb-5 flex h-12 w-12 items-center justify-center rounded-[8px] bg-primary/10 text-primary",
          children: t.jsx(n, { className: "h-6 w-6" }),
        }),
        t.jsx("h2", {
          className: "text-xl font-bold text-slate-900 dark:text-white",
          children: e,
        }),
        t.jsx("p", {
          className: "mt-3 text-sm leading-7 text-slate-600 dark:text-white/55",
          children: i,
        }),
      ],
    }),
  c = ({ icon: n, title: e, value: i, href: r }) =>
    t.jsxs("a", {
      href: r,
      target: r.startsWith("http") ? "_blank" : void 0,
      rel: "noreferrer",
      className:
        "rounded-[8px] border border-slate-200 bg-white shadow-sm p-6 transition-colors hover:border-primary/40 dark:border-white/10 dark:bg-white/[0.045] dark:hover:border-primary/35",
      children: [
        t.jsx(n, { className: "h-7 w-7 text-primary" }),
        t.jsx("p", {
          className:
            "mt-5 text-sm font-bold uppercase tracking-[0.16em] text-slate-400 dark:text-white/35",
          children: e,
        }),
        t.jsx("p", {
          className:
            "mt-2 break-all text-lg font-bold text-slate-900 dark:text-white",
          children: i,
        }),
      ],
    });
export { Y as default };
