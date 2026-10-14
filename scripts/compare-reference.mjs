import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "@playwright/test";

const root = path.resolve("../ximitech.vn");
const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
};
// Read-only reference server: repair HTTrack's module imports in the response;
// supply omitted root images from their downloaded originals.
const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url, "http://localhost");
    let name = url.pathname === "/" ? "/index.html" : url.pathname;
    if (!path.extname(name)) name += ".html";
    const target = path.resolve(root, `.${name}`);
    if (!target.startsWith(root + path.sep)) throw new Error("Invalid path");
    let data;
    try {
      data = await fs.readFile(target);
    } catch {
      data = await fs.readFile(path.join("public", name));
    }
    if (name.endsWith(".js")) {
      data = data
        .toString()
        .replace(
          /(from\s*|import\(\s*|import\s*)(["'])([\w-]+\.js)\2/g,
          "$1$2./$3$2",
        );
    }
    response.writeHead(200, {
      "content-type": mime[path.extname(name)] || "application/octet-stream",
    });
    response.end(data);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
});
await new Promise((resolve) => server.listen(3001, "127.0.0.1", resolve));
const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
const comparisons = [];
await fs.mkdir("verification", { recursive: true });
try {
  for (const width of [1440, 390]) {
    for (const route of [
      "/",
      "/thiet-ke-website",
      "/du-an",
      "/blog",
      "/lien-he",
    ]) {
      const measurements = [];
      for (const port of [3001, 3000]) {
        const page = await browser.newPage({
          viewport: { width, height: width === 390 ? 844 : 1000 },
          reducedMotion: "reduce",
        });
        const errors = [];
        page.on("pageerror", (error) => errors.push(error.message));
        await page.goto(`http://127.0.0.1:${port}${route}`, {
          waitUntil: "domcontentloaded",
        });
        await page
          .locator("h1")
          .first()
          .waitFor({ state: "visible", timeout: 30000 });
        await page.waitForTimeout(4000);
        await page.evaluate(() => document.fonts.ready);
        measurements.push(
          await page.evaluate(() => ({
            heading: [...document.querySelectorAll("h1")].map((node) => {
              const box = node.getBoundingClientRect();
              const css = getComputedStyle(node);
              return {
                text: node.innerText,
                x: box.x,
                y: box.y,
                width: box.width,
                height: box.height,
                font: css.fontFamily,
                size: css.fontSize,
                color: css.color,
              };
            }),
            overflow: document.documentElement.scrollWidth > innerWidth,
            header: document.querySelector("header")?.innerText,
          })),
        );
        if (errors.length) console.log("ERROR", port, route, errors);
        await page.screenshot({
          path: `verification/${port === 3001 ? "reference" : "next"}-${width}-${route.replaceAll("/", "_")}.png`,
        });
        await page.close();
      }
      const match =
        JSON.stringify(measurements[0]) === JSON.stringify(measurements[1]);
      comparisons.push({
        width,
        route,
        match,
        reference: measurements[0],
        next: measurements[1],
      });
      console.log(JSON.stringify({ width, route, match }));
    }
  }
  await fs.writeFile(
    "verification/comparison.json",
    JSON.stringify(comparisons, null, 2),
  );
} finally {
  await browser.close();
  server.close();
}
