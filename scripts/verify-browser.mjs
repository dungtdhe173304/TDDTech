import { chromium } from "@playwright/test";
import fs from "node:fs/promises";

const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
page.on("response", (response) => {
  if (response.status() >= 400)
    console.log("HTTP", response.status(), response.url());
});
await fs.mkdir("verification", { recursive: true });
for (const route of [
  "/",
  "/thiet-ke-website",
  "/du-an",
  "/blog",
  "/gioi-thieu",
  "/lien-he",
]) {
  await page.goto(`http://127.0.0.1:3000${route}`, {
    waitUntil: "domcontentloaded",
  });
  await page.waitForTimeout(6500);
  console.log(
    JSON.stringify({
      route,
      title: await page.title(),
      text: (await page.locator("body").innerText()).slice(0, 350),
      errors: [...errors],
    }),
  );
  await page.screenshot({
    path: `verification/${route.replaceAll("/", "_") || "home"}.png`,
  });
}
await page.setViewportSize({ width: 390, height: 844 });
await page.goto("http://127.0.0.1:3000/", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(6500);
await page.screenshot({ path: "verification/mobile.png" });
console.log(
  "MOBILE",
  JSON.stringify(
    await page.evaluate(() => ({
      width: innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
    })),
  ),
);
await browser.close();
if (errors.length) process.exitCode = 1;
