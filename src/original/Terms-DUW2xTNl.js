import FacebookContactLink from "../components/FacebookContactLink";
import { site, siteOrigin, siteUrl, siteText } from "../config/site.js";
import { j as t } from "./vendor-react-BaqgPuim.js";
import {
  aS as e,
  aT as o,
  ad as l,
  aU as d,
  aV as m,
  aW as g,
  aX as u,
  ah as x,
} from "./vendor-icons-xx0BMbwT.js";
import { u as p, H as b, c as i, F as k, a as v } from "./index-DAfw2Y79.js";
import "./vendor-radix-CIIFFl0l.js";
import "./vendor-motion-B2aXCTtA.js";
const N = () => {
  p({
    title: "Điều khoản sử dụng - TDDTech",
    description:
      "Điều khoản sử dụng dịch vụ TDDTech cho thiết kế website, website bán hàng, web app, bảo hành, thanh toán và quyền sở hữu source code.",
    path: "/terms",
  });
  const h = [
    {
      icon: e,
      title: "1. Điều khoản chung",
      content: `Khi sử dụng website TDDTech và các dịch vụ của TDDTech, bạn đồng ý tuân thủ các điều khoản được nêu dưới đây. ${v} Nếu không đồng ý với bất kỳ điều khoản nào, vui lòng không sử dụng dịch vụ.`,
    },
    {
      icon: o,
      title: "2. Dịch vụ cung cấp",
      content: "TDDTech cung cấp các dịch vụ:",
      list: [
        "Thiết kế và phát triển Website (Landing Page, Website doanh nghiệp, Website TMĐT).",
        "Phát triển Web App, dashboard và hệ thống quản lý theo yêu cầu.",
        "Tối ưu SEO, tốc độ tải trang và chuyển đổi.",
        "Tư vấn, bảo trì và tối ưu hiệu suất hệ thống theo yêu cầu.",
      ],
    },
    {
      icon: e,
      title: "3. Quy trình làm việc",
      list: [
        "Khách hàng liên hệ tư vấn qua Zalo, điện thoại hoặc email.",
        "TDDTech tư vấn giải pháp và báo giá chi tiết.",
        "Hai bên thống nhất yêu cầu, thời gian và chi phí trước khi bắt đầu.",
        "Thanh toán theo thỏa thuận (thường chia làm 2-3 đợt).",
        "Bàn giao sản phẩm và nghiệm thu.",
      ],
    },
    {
      icon: l,
      title: "4. Bảo hành & Hỗ trợ",
      list: [
        "Chỉnh sửa miễn phí trong phạm vi đã nghiệm thu suốt 5 năm (60 tháng), và bảo hành trọn đời với lỗi do TDDTech gây ra, áp dụng cho tất cả dịch vụ website và app.",
        "Hosting, domain và dịch vụ bên thứ ba được ghi rõ theo từng báo giá.",
        "Tiếp nhận yêu cầu hỗ trợ kỹ thuật qua Zalo trong thời gian bảo hành.",
        "Sửa miễn phí lỗi kỹ thuật thuộc chức năng đã nghiệm thu.",
        "Các hạng mục mở rộng hoặc thay đổi phạm vi sẽ được báo giá riêng trước khi thực hiện.",
      ],
    },
    {
      icon: d,
      title: "5. Quyền sở hữu trí tuệ",
      list: [
        "Source code sản phẩm thuộc quyền sở hữu của khách hàng sau khi thanh toán đầy đủ.",
        "TDDTech có quyền sử dụng sản phẩm làm portfolio (trừ khi khách hàng yêu cầu bảo mật).",
        "Thiết kế, hình ảnh, nội dung do bên thứ ba cung cấp thuộc trách nhiệm của khách hàng.",
      ],
    },
    {
      icon: m,
      title: "6. Thanh toán",
      list: [
        "Thanh toán qua chuyển khoản ngân hàng hoặc ví điện tử.",
        "Đặt cọc tối thiểu 30-50% giá trị dự án trước khi bắt đầu.",
        "Thanh toán phần còn lại khi bàn giao và nghiệm thu.",
        "Không hoàn cọc trong trường hợp khách hàng hủy dự án sau khi đã bắt đầu triển khai.",
      ],
    },
    {
      icon: g,
      title: "7. Giới hạn trách nhiệm",
      list: [
        "TDDTech không chịu trách nhiệm cho nội dung do khách hàng cung cấp.",
        "Không chịu trách nhiệm cho thiệt hại phát sinh từ việc sử dụng sai mục đích.",
        "Thời gian bàn giao có thể thay đổi nếu khách hàng thay đổi yêu cầu nhiều lần.",
      ],
    },
    {
      icon: u,
      title: "8. Thay đổi điều khoản",
      content:
        "TDDTech có quyền cập nhật điều khoản sử dụng bất cứ lúc nào. Các thay đổi sẽ có hiệu lực ngay khi được đăng tải trên website. Việc bạn tiếp tục sử dụng dịch vụ sau khi thay đổi đồng nghĩa với việc bạn chấp nhận các điều khoản mới.",
    },
    {
      icon: x,
      title: "9. Liên hệ",
      content: "Mọi thắc mắc về điều khoản sử dụng, vui lòng liên hệ:",
      contact: !0,
    },
  ];
  return t.jsxs("div", {
    className:
      "min-h-screen bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-background dark:text-white flex flex-col",
    children: [
      t.jsx(b, { hideContact: !0 }),
      t.jsxs("div", {
        className:
          "relative pt-32 pb-16 bg-gradient-to-b from-sky-100/60 via-slate-50 to-slate-50 dark:from-cyan-500/10 dark:via-background dark:to-background overflow-hidden",
        children: [
          t.jsx("div", {
            className:
              "absolute inset-0 bg-[linear-gradient(to_right,rgba(0,180,216,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,180,216,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#00d4ff08_1px,transparent_1px),linear-gradient(to_bottom,#00d4ff08_1px,transparent_1px)] bg-[size:3rem_3rem]",
          }),
          t.jsx("div", {
            className:
              "absolute top-20 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px]",
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
                    children: "Điều khoản sử dụng",
                  }),
                ],
              }),
              t.jsx("h1", {
                className:
                  "text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-900 dark:text-white",
                children: "Điều Khoản Sử Dụng",
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
          children: h.map((n, a) => {
            const c = n.icon;
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
                        children: n.title,
                      }),
                    ],
                  }),
                  n.content &&
                    t.jsx("p", {
                      className:
                        "text-slate-600 dark:text-white/60 text-sm leading-relaxed mb-3",
                      children: n.content,
                    }),
                  n.list &&
                    t.jsx("ul", {
                      className: "space-y-2 ml-1",
                      children: n.list.map((s, r) =>
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
                              t.jsx("span", { children: s }),
                            ],
                          },
                          r,
                        ),
                      ),
                    }),
                  n.contact &&
                    t.jsxs("div", {
                      className:
                        "mt-3 bg-slate-50 border border-slate-200 dark:bg-white/5 dark:border-white/10 rounded-lg p-4 space-y-1 text-sm text-slate-700 dark:text-white/60",
                      children: [
                        t.jsx("p", {
                          className:
                            "font-semibold text-slate-900 dark:text-white",
                          children: i.legalName,
                        }),

                        t.jsxs("p", { children: ["Địa chỉ: ", i.address] }),
                        t.jsxs("p", { children: ["Email: ", i.email] }),
                        t.jsxs("p", {
                          children: ["Zalo / Hotline: ", i.phone],
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
              a,
            );
          }),
        }),
      }),
      t.jsx(k, {}),
    ],
  });
};
export { N as default };
