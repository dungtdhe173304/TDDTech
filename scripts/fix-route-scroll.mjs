import fs from "node:fs";
import { fileURLToPath } from "node:url";

const filename = fileURLToPath(new URL("../src/original/index-DAfw2Y79.js", import.meta.url));
let source = fs.readFileSync(filename, "utf8");
const importLine = 'import useRouteScrollReset from "../components/useRouteScrollReset";';
if (!source.includes(importLine)) source = `${importLine}\n${source}`;
if (!source.includes("useRouteScrollReset(e, Bs)")) {
  const marker = /(eg\s*=\s*\(\)\s*=>\s*\{\s*const e = Ns\(\);)/;
  if (!marker.test(source)) throw new Error("Cannot find the route render component");
  source = source.replace(marker, "$1\n    useRouteScrollReset(e, Bs);");
}
// Browser restoration must not override the route's reset after initial loading.
source = source.replace('history.scrollRestoration = "auto"', 'history.scrollRestoration = "manual"');
fs.writeFileSync(filename, source);
