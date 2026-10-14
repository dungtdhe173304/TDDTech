import { site, siteOrigin, siteUrl, siteText } from "../config/site.js";
import { g as n, r as a, j as t } from "./vendor-react-BaqgPuim.js";
import { u as r } from "./index-DAfw2Y79.js";
import "./vendor-radix-CIIFFl0l.js";
import "./vendor-icons-xx0BMbwT.js";
import "./vendor-motion-B2aXCTtA.js";
const l = () => {
  const e = n();
  return (
    r({
      title: "404 - Không tìm thấy trang | TDDTech",
      description:
        "Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.",
      path: e.pathname,
      robots: "noindex, follow",
    }),
    a.useEffect(() => {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        e.pathname,
      );
    }, [e.pathname]),
    t.jsx("div", {
      className:
        "flex min-h-screen items-center justify-center bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-[hsl(220_40%_6%)] dark:text-white px-4",
      children: t.jsxs("div", {
        className: "text-center max-w-md",
        children: [
          t.jsx("span", {
            className: "inline-block text-7xl font-extrabold text-primary mb-2",
            children: "404",
          }),
          t.jsx("h1", {
            className: "mb-3 text-2xl font-bold text-slate-900 dark:text-white",
            children: "Không tìm thấy trang",
          }),
          t.jsx("p", {
            className: "mb-6 text-base text-slate-600 dark:text-white/60",
            children:
              "Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.",
          }),
          t.jsx("a", {
            href: "/",
            className:
              "inline-flex items-center justify-center rounded-[8px] bg-primary px-6 py-3 font-bold text-white shadow-md shadow-primary/25 hover:bg-cyan-400 transition-all",
            children: "Về trang chủ",
          }),
        ],
      }),
    })
  );
};
export { l as default };
