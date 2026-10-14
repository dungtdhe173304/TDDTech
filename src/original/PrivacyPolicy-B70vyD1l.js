import FacebookContactLink from "../components/FacebookContactLink";
import { site, siteOrigin, siteUrl, siteText } from "../config/site.js";
import { j as t } from "./vendor-react-BaqgPuim.js";
import {
  aN as i,
  aO as a,
  aP as o,
  aQ as d,
  aR as m,
  ah as x,
} from "./vendor-icons-xx0BMbwT.js";
import { u as g, H as p, c as n, F as b, a as u } from "./index-DAfw2Y79.js";
import "./vendor-radix-CIIFFl0l.js";
import "./vendor-motion-B2aXCTtA.js";
const f = () => {
  g({
    title: "Chính sách bảo mật - TDDTech",
    description:
      "Chính sách bảo mật của TDDTech về cách thu thập, sử dụng và bảo vệ thông tin khách hàng khi tư vấn, thiết kế website, website bán hàng và web app.",
    path: "/privacy-policy",
  });
  const h = [
    {
      icon: i,
      title: "1. Giới thiệu",
      content: `TDDTech ("chúng tôi") cam kết bảo vệ quyền riêng tư và thông tin cá nhân của bạn. ${u} Chính sách bảo mật này mô tả cách chúng tôi thu thập, sử dụng và bảo vệ thông tin khi bạn sử dụng website TDDTech và các dịch vụ liên quan.`,
    },
    {
      icon: a,
      title: "2. Thông tin chúng tôi thu thập",
      list: [
        "Thông tin liên hệ: Họ tên, số điện thoại, email khi bạn chủ động liên hệ tư vấn.",
        "Thông tin dự án: Yêu cầu, mô tả, tài liệu bạn cung cấp khi sử dụng dịch vụ.",
        "Dữ liệu truy cập: Cookie, địa chỉ IP, trình duyệt, thời gian truy cập (Google Analytics).",
      ],
    },
    {
      icon: i,
      title: "3. Mục đích sử dụng",
      list: [
        "Tư vấn và cung cấp dịch vụ làm website, website bán hàng và web app theo yêu cầu.",
        "Liên hệ hỗ trợ kỹ thuật, bảo hành, cập nhật dịch vụ.",
        "Cải thiện chất lượng website và trải nghiệm người dùng.",
        "Gửi thông tin ưu đãi, chương trình khuyến mãi (nếu bạn đồng ý).",
      ],
    },
    {
      icon: o,
      title: "4. Bảo mật thông tin",
      content:
        "Chúng tôi áp dụng các biện pháp bảo mật kỹ thuật phù hợp để bảo vệ thông tin cá nhân khỏi truy cập trái phép, mất mát hoặc thay đổi. Source code dự án của khách hàng được bảo mật tuyệt đối và chỉ bàn giao cho chủ dự án.",
    },
    {
      icon: d,
      title: "5. Chia sẻ thông tin",
      content:
        "TDDTech không bán, trao đổi hoặc chia sẻ thông tin cá nhân của bạn cho bên thứ ba, trừ trường hợp:",
      list: [
        "Được bạn đồng ý rõ ràng.",
        "Theo yêu cầu của cơ quan pháp luật có thẩm quyền.",
        "Cần thiết để cung cấp dịch vụ (VD: đăng ký hosting, domain cho bạn).",
      ],
    },
    {
      icon: m,
      title: "6. Cookie",
      content:
        "Website sử dụng cookie để cải thiện trải nghiệm duyệt web. Bạn có thể tắt cookie trong cài đặt trình duyệt, tuy nhiên một số tính năng có thể bị ảnh hưởng.",
    },
    {
      icon: a,
      title: "7. Quyền của bạn",
      list: [
        "Yêu cầu xem, chỉnh sửa hoặc xóa thông tin cá nhân.",
        "Từ chối nhận email/tin nhắn marketing.",
        "Khiếu nại về việc xử lý dữ liệu cá nhân.",
      ],
    },
    {
      icon: x,
      title: "8. Liên hệ",
      content: "Nếu có câu hỏi về chính sách bảo mật, vui lòng liên hệ:",
      contact: !0,
    },
  ];
  return t.jsxs("div", {
    className:
      "min-h-screen bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-background dark:text-white flex flex-col",
    children: [
      t.jsx(p, { hideContact: !0 }),
      t.jsxs("div", {
        className:
          "relative pt-32 pb-16 bg-gradient-to-b from-sky-100/60 via-slate-50 to-slate-50 dark:from-primary/10 dark:via-background dark:to-background overflow-hidden",
        children: [
          t.jsx("div", {
            className:
              "absolute inset-0 bg-[linear-gradient(to_right,rgba(0,180,216,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,180,216,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#00d4ff08_1px,transparent_1px),linear-gradient(to_bottom,#00d4ff08_1px,transparent_1px)] bg-[size:3rem_3rem]",
          }),
          t.jsx("div", {
            className:
              "absolute top-20 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px]",
          }),
          t.jsxs("div", {
            className: "container mx-auto px-4 relative z-10 text-center",
            children: [
              t.jsxs("nav", {
                className:
                  "mb-6 flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-white/45",
                "aria-label": "Breadcrumb",
                children: [
                  t.jsx("a", {
                    href: "/",
                    className: "transition-colors hover:text-primary",
                    children: "Trang chủ",
                  }),
                  t.jsx("span", { children: "/" }),
                  t.jsx("span", {
                    className: "text-slate-800 dark:text-white/70",
                    children: "Chính sách bảo mật",
                  }),
                ],
              }),
              t.jsx("h1", {
                className:
                  "text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-900 dark:text-white",
                children: "Chính Sách Bảo Mật",
              }),
              t.jsx("p", {
                className:
                  "text-slate-600 dark:text-white/50 text-base md:text-lg max-w-xl mx-auto",
                children: "Cập nhật lần cuối: 12/10/2026",
              }),
            ],
          }),
        ],
      }),
      t.jsx("div", {
        className: "flex-1 container mx-auto px-4 py-12 max-w-3xl",
        children: t.jsx("div", {
          className: "space-y-6",
          children: h.map((e, s) => {
            const c = e.icon;
            return t.jsxs(
              "div",
              {
                className:
                  "bg-white border border-slate-200 shadow-sm rounded-xl p-6 hover:border-primary/40 dark:bg-white/[0.02] dark:border-white/10 dark:hover:border-primary/20 transition-colors",
                children: [
                  t.jsxs("div", {
                    className: "flex items-center gap-3 mb-4",
                    children: [
                      t.jsx("div", {
                        className:
                          "w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0",
                        children: t.jsx(c, {
                          className: "h-4 w-4 text-primary",
                        }),
                      }),
                      t.jsx("h2", {
                        className:
                          "text-lg font-bold text-slate-900 dark:text-white",
                        children: e.title,
                      }),
                    ],
                  }),
                  e.content &&
                    t.jsx("p", {
                      className:
                        "text-slate-600 dark:text-white/60 text-sm leading-relaxed mb-3",
                      children: e.content,
                    }),
                  e.list &&
                    t.jsx("ul", {
                      className: "space-y-2 ml-1",
                      children: e.list.map((r, l) =>
                        t.jsxs(
                          "li",
                          {
                            className:
                              "flex items-start gap-2.5 text-slate-600 dark:text-white/60 text-sm",
                            children: [
                              t.jsx("span", {
                                className: "text-primary mt-1.5 text-[8px]",
                                children: "●",
                              }),
                              t.jsx("span", { children: r }),
                            ],
                          },
                          l,
                        ),
                      ),
                    }),
                  e.contact &&
                    t.jsxs("div", {
                      className:
                        "mt-3 bg-slate-50 border border-slate-200 dark:bg-white/5 dark:border-white/10 rounded-lg p-4 space-y-1 text-sm text-slate-700 dark:text-white/60",
                      children: [
                        t.jsx("p", {
                          className:
                            "font-semibold text-slate-900 dark:text-white",
                          children: n.legalName,
                        }),

                        t.jsxs("p", { children: ["Địa chỉ: ", n.address] }),
                        t.jsxs("p", { children: ["Email: ", n.email] }),
                        t.jsxs("p", {
                          children: ["Zalo / Hotline: ", n.phone],
                        }),
                        t.jsx("p", {
                          children: t.jsx(FacebookContactLink, {
                            variant: "inline",
                          }),
                        }),
                      ],
                    }),
                ],
              },
              s,
            );
          }),
        }),
      }),
      t.jsx(b, {}),
    ],
  });
};
export { f as default };
