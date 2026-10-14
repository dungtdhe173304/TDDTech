import { test, expect } from "@playwright/test";
const baseURL = process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:3100";

const routes = [
  "/",
  "/thiet-ke-website",
  "/thiet-ke-website-doanh-nghiep",
  "/thiet-ke-website-ban-hang",
  "/thiet-ke-landing-page",
  "/lap-trinh-web-app",
  "/dich-vu-seo-website",
  "/du-an",
  "/du-an/apes-studio",
  "/blog",
  "/blog/page/2",
  "/blog/ban-tren-san-hay-lam-website-rieng",
  "/gioi-thieu",
  "/ho-so-nang-luc",
  "/bang-gia-thiet-ke-website",
  "/quy-trinh-thiet-ke-website",
  "/bao-hanh-bao-tri-website",
  "/lien-he",
  "/privacy-policy",
  "/terms",
  "/tim-kiem?q=website",
];

test.beforeEach(async ({ page }) => {
  // Website rendering must work entirely from the copied local assets.
  await page.route(/^https?:\/\/(?!127\.0\.0\.1|localhost)/, (route) =>
    route.abort(),
  );
});

for (const route of routes) {
  test(`renders ${route} with local assets`, async ({ page }) => {
    const errors: string[] = [];
    const missing: string[] = [];
    const externalRequests: string[] = [];
    page.on("request", (request) => {
      if (
        /^https?:\/\//.test(request.url()) &&
        new URL(request.url()).hostname !== "127.0.0.1"
      )
        externalRequests.push(request.url());
    });
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("response", (response) => {
      if (response.url().startsWith(baseURL + "/") && response.status() >= 400)
        missing.push(response.url());
    });
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1").first()).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Mở menu", exact: true }).first(),
    ).toBeVisible();
    await page.waitForTimeout(1000);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    expect(errors).toEqual([]);
    expect(missing).toEqual([]);
    expect(externalRequests).toEqual([]);
    const rendered = await page.locator("body").innerText();
    expect(rendered).not.toMatch(
      /XimiTech|088\s?888\s?9805|ximitech1309|4101691382/,
    );
    const urls = await page
      .locator("a[href], link[rel='canonical'], meta[property='og:url']")
      .evaluateAll((nodes) =>
        nodes.map(
          (node) =>
            node.getAttribute("href") || node.getAttribute("content") || "",
        ),
      );
    expect(
      urls.filter((url) =>
        /(?:ximitech\.vn|doximitech|ximitech_vn|0888889805|ximitech1309)/i.test(
          url,
        ),
      ),
    ).toEqual([]);
    const canonical = await page
      .locator("link[rel='canonical']")
      .getAttribute("href");
    expect(canonical).toBe(`${baseURL}${route.split("?")[0]}`);
  });
}

test("theme persists and menu navigates to a project page", async ({
  page,
  isMobile,
}) => {
  await page.goto("/");
  await expect(page.locator("h1").first()).toBeVisible();
  await page
    .getByRole("button", { name: "Chuyển sang giao diện Tối", exact: true })
    .first()
    .click();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.reload();
  await expect(page.locator("h1").first()).toBeVisible();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page
    .getByRole("button", { name: "Mở menu", exact: true })
    .first()
    .click();
  await expect(
    page.getByRole("button", { name: "Đóng menu", exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Đóng menu", exact: true }).click();
  if (isMobile) {
    await page.goto("/du-an");
  } else {
    await page
      .locator("header")
      .getByRole("link", { name: "Dự án", exact: true })
      .click();
  }
  await expect(page).toHaveURL(/\/du-an$/);
  await expect(page.locator("h1").first()).toBeVisible();
});

test("contact button opens the configured Zalo channel and SEO uses this host", async ({
  page,
  request,
}) => {
  await page.goto("/");
  await expect(page.locator("h1").first()).toBeVisible();
  await page.evaluate(() => {
    window.open = (url) => {
      document.documentElement.dataset.openedContact = String(url);
      return null;
    };
  });
  await page
    .locator("header")
    .getByRole("button", { name: /^(Liên hệ ngay|Zalo)$/ })
    .click();
  await expect(page.locator("html")).toHaveAttribute(
    "data-opened-contact",
    "https://zalo.me/0393312336",
  );
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).not.toContain("ximitech.vn");
  expect(await sitemap.text()).toContain(`${baseURL}/du-an`);
  const robots = await request.get("/robots.txt");
  expect(await robots.text()).toContain(`Sitemap: ${baseURL}/sitemap.xml`);
});

test("provided contact channels and Facebook icon appear on the website", async ({
  page,
}) => {
  for (const route of ["/", "/lien-he", "/ho-so-nang-luc"]) {
    await page.goto(route);
    const facebook = page
      .locator("footer")
      .getByRole("link", { name: "Facebook", exact: true });
    await expect(facebook).toHaveAttribute(
      "href",
      "https://www.facebook.com/dungchuche25",
    );
    await expect(facebook.locator("svg")).toHaveCount(1);
    await expect(
      page.locator('a[href="https://zalo.me/0393312336"]').first(),
    ).toBeAttached();
    await expect(
      page.locator('a[href="tel:0393312336"]').first(),
    ).toBeAttached();
    await expect(
      page.locator('a[href="mailto:thieuducdung254@gmail.com"]').first(),
    ).toBeAttached();
    const body = await page.locator("body").innerText();
    expect(body).toContain("0393312336");
    expect(body).toContain("thieuducdung254@gmail.com");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    if (route === "/lien-he") {
      await expect(
        page.getByRole("link", { name: /Facebook.*Thiều Đức Dũng/ }),
      ).toHaveAttribute("href", "https://www.facebook.com/dungchuche25");
    }
  }
});

test("company summary places the clickable hotline between company and location", async ({
  page,
}) => {
  await page.goto("/");
  const details = page
    .locator("dl")
    .filter({ has: page.getByText("Pháp nhân", { exact: true }) });
  await expect(details.locator("dt")).toHaveText([
    "Pháp nhân",
    "Liên hệ",
    "Trụ sở · phục vụ",
  ]);
  await expect(
    details.getByRole("link", { name: "0393312336", exact: true }),
  ).toHaveAttribute("href", "tel:0393312336");
  await expect(details.locator("dd").last()).toHaveText(
    "Hà Nội · phục vụ toàn quốc",
  );
});

test("Facebook is available in contact groups across the website", async ({
  page,
}) => {
  test.setTimeout(60_000);
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  for (const route of [
    "/",
    "/lien-he",
    "/ho-so-nang-luc",
    "/thiet-ke-website",
    "/du-an",
    "/du-an/apes-studio",
    "/blog/ban-tren-san-hay-lam-website-rieng",
    "/privacy-policy",
    "/terms",
  ]) {
    await page.goto(route);
    await expect(
      page
        .locator("footer")
        .getByRole("link", { name: "Liên hệ qua Facebook", exact: true })
        .first(),
    ).toHaveAttribute("href", "https://www.facebook.com/dungchuche25");
    expect(
      await page
        .locator('a[aria-label="Liên hệ qua Facebook"]')
        .evaluateAll((links) => links.some((link) => !link.closest("footer"))),
    ).toBe(true);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    if (route === "/ho-so-nang-luc") {
      const row = page
        .locator("dt")
        .filter({ hasText: /^Facebook$/ })
        .locator("..");
      await expect(
        row.getByRole("link", { name: "Thiều Đức Dũng", exact: true }),
      ).toHaveAttribute("href", "https://www.facebook.com/dungchuche25");
    }
    if (route === "/privacy-policy" || route === "/terms") {
      await expect(
        page
          .locator("div.space-y-1")
          .filter({ hasText: "Zalo / Hotline:" })
          .getByRole("link", { name: "Liên hệ qua Facebook", exact: true }),
      ).toHaveAttribute("href", "https://www.facebook.com/dungchuche25");
    }
  }
  expect(errors).toEqual([]);
});

test("Zalo and Facebook buttons stay adjacent with matching dimensions", async ({ page }) => {
  test.setTimeout(60_000);
  const warnings: string[] = [];
  page.on("console", message => {
    if (/unique.*key|same key|Static children should always be an array/i.test(message.text()))
      warnings.push(message.text());
  });
  for (const route of ["/", "/thiet-ke-website", "/du-an", "/du-an/apes-studio", "/ho-so-nang-luc"]) {
    await page.goto(route);
    const pairs = page.locator("[data-contact-channel-pair]");
    await expect(pairs.first()).toBeAttached();
    const results = await pairs.evaluateAll(groups => groups.map(group => {
      const links = Array.from(group.children) as HTMLAnchorElement[];
      const [zalo, facebook] = links;
      const a = zalo.getBoundingClientRect(), b = facebook.getBoundingClientRect();
      return {
        count: links.length,
        zalo: zalo.href,
        facebook: facebook.href,
        widthDifference: Math.abs(a.width - b.width),
        heightDifference: Math.abs(a.height - b.height),
        sameRow: Math.abs(a.top - b.top) < 1,
        blue: getComputedStyle(facebook).backgroundColor,
      };
    }));
    for (const result of results) {
      expect(result.count).toBe(2);
      expect(result.zalo).toBe("https://zalo.me/0393312336");
      expect(result.facebook).toBe("https://www.facebook.com/dungchuche25");
      expect(result.widthDifference).toBeLessThan(1);
      expect(result.heightDifference).toBeLessThan(1);
      expect(result.sameRow).toBe(true);
      expect(result.blue).toBe("rgb(24, 119, 242)");
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  expect(warnings).toEqual([]);
});

test("navigation resets scroll after the destination loads, including back", async ({ page }) => {
  test.setTimeout(60_000);
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  for (const route of ["/ho-so-nang-luc", "/lien-he"]) {
    const link = page.locator(`footer nav a[href="${route}"]`).first();
    await link.scrollIntoViewIfNeeded();
    expect(await page.evaluate(() => scrollY)).toBeGreaterThan(100);
    await link.click();
    await expect(page).toHaveURL(new RegExp(`${route}$`), { timeout: 20_000 });
    await expect(page.locator("h1").first()).toBeVisible();
    await expect.poll(() => page.evaluate(() => scrollY)).toBeLessThan(2);
    await expect(page.locator(".page-loader")).toHaveCount(0);
    expect(await page.evaluate(() => scrollY)).toBeLessThan(2);
  }
  await page.locator("footer").scrollIntoViewIfNeeded();
  expect(await page.evaluate(() => scrollY)).toBeGreaterThan(100);
  await page.goBack();
  await expect(page).toHaveURL(/\/ho-so-nang-luc$/);
  await expect(page.locator("h1").first()).toBeVisible();
  await expect.poll(() => page.evaluate(() => scrollY)).toBeLessThan(2);
});

test("removed Careers page returns 404 and has no navigation or sitemap entry", async ({ page, request }) => {
  for (const route of ["/tuyen-dung", "/tuyen-dung.html", "/tuyen-dung/frontend-developer"]) {
    const response = await request.get(route);
    expect(response.status()).toBe(404);
  }
  const sitemap = await request.get("/sitemap.xml");
  expect(await sitemap.text()).not.toContain("/tuyen-dung");
  await page.goto("/");
  await expect(page.locator("footer")).toBeAttached();
  await expect(page.locator('a[href*="tuyen-dung"]')).toHaveCount(0);
});

test("mirrored HTML bookmarks redirect to Next routes", async ({ page }) => {
  await page.goto("/gioi-thieu.html");
  await expect(page).toHaveURL(/\/gioi-thieu$/);
  await expect(page.locator("h1").first()).toBeVisible();
});

test("team cards retain distinct identities when their display names match", async ({
  page,
}) => {
  test.setTimeout(60_000);
  const keyWarnings: string[] = [];
  page.on("console", (message) => {
    if (/same key|unique.*key/i.test(message.text()))
      keyWarnings.push(message.text());
  });
  for (const route of ["/ho-so-nang-luc", "/gioi-thieu"]) {
    await page.goto(route);
    const cards = page.getByRole("heading", {
      name: "Đội ngũ TDDTech",
      exact: true,
    });
    await expect(page.locator("h1").first()).toBeVisible({ timeout: 20_000 });
    if (route === "/ho-so-nang-luc") await expect(cards).toHaveCount(2);
    await page
      .getByRole("button", { name: /Chuyển sang giao diện/ })
      .first()
      .click();
    if (route === "/ho-so-nang-luc") await expect(cards).toHaveCount(2);
  }
  expect(keyWarnings).toEqual([]);
});

test("copyright renders without static children warnings", async ({ page }) => {
  test.setTimeout(60_000);
  const warnings: string[] = [];
  page.on("console", (message) => {
    if (/Static children should always be an array/i.test(message.text()))
      warnings.push(message.text());
  });
  for (const route of ["/privacy-policy", "/terms"]) {
    await page.goto(route);
    await expect(
      page.getByText("© 2026 TDDTech · Thiều Đức Dũng", { exact: true }),
    ).toBeAttached({ timeout: 20_000 });
    await page
      .getByRole("button", { name: /Chuyển sang giao diện/ })
      .first()
      .click();
  }
  expect(warnings).toEqual([]);
});

test("static branding does not request a missing model or emit rendering warnings", async ({
  page,
}) => {
  test.setTimeout(60_000);
  await page.emulateMedia({ reducedMotion: "no-preference" });
  const warnings: string[] = [];
  const models: string[] = [];
  page.on("console", (message) => {
    if (
      /Static children should always be an array|Logo 3D không dựng được|Unexpected token/i.test(
        message.text(),
      )
    )
      warnings.push(message.text());
  });
  page.on("request", (request) => {
    if (/\/models\/|\.glb(?:\?|$)/.test(request.url()))
      models.push(request.url());
  });
  for (const route of ["/", "/privacy-policy", "/terms", "/ho-so-nang-luc"]) {
    await page.goto(route);
    await expect(
      page.getByText("© 2026 TDDTech · Thiều Đức Dũng", { exact: true }),
    ).toBeAttached({ timeout: 20_000 });
    await page.locator("footer").scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
  }
  expect(models).toEqual([]);
  expect(warnings).toEqual([]);
});

test("company details omit tax information and use the Hanoi service address", async ({
  page,
}) => {
  test.setTimeout(60_000);
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  for (const route of [
    "/",
    "/gioi-thieu",
    "/ho-so-nang-luc",
    "/lien-he",
    "/privacy-policy",
    "/terms",
    "/blog/chon-don-vi-thiet-ke-website-uy-tin",
    "/blog/viet-noi-dung-website",
  ]) {
    await page.goto(route);
    await expect(
      page.getByText("Hà Nội · phục vụ toàn quốc", { exact: true }).first(),
    ).toBeAttached({ timeout: 20_000 });
    expect(await page.locator("body").innerText()).not.toMatch(
      /mã số thuế|\bMST\b|Chưa cập nhật\s*·\s*phục vụ toàn quốc/i,
    );
  }
  expect(errors).toEqual([]);
});
