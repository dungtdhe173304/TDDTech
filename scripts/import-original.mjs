import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const project = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const source = path.resolve(project, "../ximitech.vn");
const output = path.join(project, "src/original");
fs.mkdirSync(output, { recursive: true });
fs.mkdirSync(path.join(project, "public"), { recursive: true });

// Keep the exact original CSS, page components, animation code and data.
for (const file of fs.readdirSync(path.join(source, "assets"))) {
  if (!file.endsWith(".js") || file.startsWith("vendor-react-")) continue;
  let content = fs.readFileSync(path.join(source, "assets", file), "utf8");
  content = content
    .replaceAll("tranthanhdo.webp.html", "tranthanhdo.webp")
    .replaceAll("Three.html", "Three.js")
    .replaceAll('"../index.html"', '"https://ximitech.vn"')
    .replaceAll('"index.html"', '"https://ximitech.vn"')
    .replaceAll('"OG.png"', '"/OG.png"')
    .replaceAll('"du-an/index.html"', '"/du-an/"')
    .replaceAll('"blog/index.html"', '"/blog/"');
  // HTTrack removed ./ from imports. Restore module-relative resolution.
  content = content.replace(
    /(from\s*|import\(\s*)(["'])([\w-]+\.js)\2/g,
    "$1$2./$3$2",
  );
  content = content.replace(/(import\s*)(["'])([\w-]+\.js)\2/g, "$1$2./$3$2");
  if (file === "index-DAfw2Y79.js") {
    const mount =
      'ag().then(()=>{cc(document.getElementById("root")).render(t.jsx(sg,{}))});';
    if (!content.includes(mount))
      throw new Error("Original React mount has changed");
    content = content.replace(mount, "export default sg;");
    // Next owns chunk loading; Vite's preload list points to obsolete asset URLs.
    const start = content.indexOf("zt=function(n,s,i){");
    const end = content.indexOf(",Fr=", start);
    if (start < 0 || end < 0)
      throw new Error("Original Vite loader has changed");
    content =
      content.slice(0, start) +
      "zt=function(load){return load()}" +
      content.slice(end);
    content = content.replaceAll("assets/index.html", "assets/");
  }
  fs.writeFileSync(path.join(output, file), content);
}

// Preserve the original Floating UI implementation, replacing bundled React,
// React DOM, Query and Router with shared dependencies to avoid duplicate React.
const vendor = fs.readFileSync(
  path.join(source, "assets/vendor-react-BaqgPuim.js"),
  "utf8",
);
const floating = vendor.slice(
  vendor.indexOf("const Hm="),
  vendor.indexOf("var ql=class"),
);
fs.writeFileSync(
  path.join(output, "vendor-react-BaqgPuim.js"),
  `
import * as R from "react";
import * as Pu from "react-dom";
export { R as r, R as R, R as b, Pu as a, Pu as v };
export * as j from "react/jsx-runtime";
export { createRoot as q } from "react-dom/client";
export { QueryClient as Q, QueryClientProvider as m } from "@tanstack/react-query";
export {
  BrowserRouter as B, Navigate as N, Routes as n, Route as p,
  useLocation as g, useNavigationType as i, useNavigate as k,
  useParams as t, useSearchParams as w
} from "react-router-dom";
${floating}
export { ug as c, hg as d, vg as e, pg as f, mg as h, dg as l, cg as o, fg as s, ag as u };
`,
);

fs.copyFileSync(
  path.join(source, "assets/index-BT757EXe.css"),
  path.join(project, "src/app/globals.css"),
);
const html = fs.readFileSync(path.join(source, "index.html"), "utf8");
const loader = [...html.matchAll(/<style>([\s\S]*?)<\/style>/g)]
  .map((match) => match[1])
  .find((style) => style.includes(".page-loader"));
fs.writeFileSync(path.join(project, "src/app/loader.css"), loader);
for (const file of fs.readdirSync(source)) {
  if (/\.(png|webp|ico)$/.test(file)) {
    if (file === "loader-logo.png" && fs.existsSync(path.join(project, "public", file))) continue;
    fs.copyFileSync(
      path.join(source, file),
      path.join(project, "public", file),
    );
  }
}
// Retain per-route readable HTML for metadata and no-JavaScript fallback.
const pages = path.join(project, "src/content");
fs.mkdirSync(pages, { recursive: true });
function copyPages(directory, relative = "") {
  for (const file of fs.readdirSync(directory, { withFileTypes: true })) {
    if (file.name === "assets") continue;
    const name = path.join(relative, file.name);
    if (file.isDirectory()) copyPages(path.join(directory, file.name), name);
    else if (file.name.endsWith(".html")) {
      const data = fs.readFileSync(path.join(directory, file.name), "utf8");
      if (!data.includes("data-shell")) continue;
      fs.mkdirSync(path.dirname(path.join(pages, name)), { recursive: true });
      fs.writeFileSync(path.join(pages, name), data);
    }
  }
}
copyPages(source);
// Re-importing the reference must never restore its contacts or navigation URLs.
await import("./make-independent.mjs");
console.log(
  "Imported original page modules, CSS, loader, route content and local assets.",
);
