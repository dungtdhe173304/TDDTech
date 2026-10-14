import { NextRequest } from "next/server";
import { readdir } from "node:fs/promises";
import path from "node:path";
import { requestOrigin } from "@/lib/request-origin";

export async function GET(request: NextRequest) {
  const origin = requestOrigin(request);
  const routes = new Set(["/", "/privacy-policy", "/terms"]);
  async function collect(directory: string, prefix = "") {
    for (const item of await readdir(directory, { withFileTypes: true })) {
      if (item.isDirectory())
        await collect(
          path.join(directory, item.name),
          `${prefix}/${item.name}`,
        );
      else if (
        /^[a-z0-9-]+\.html$/.test(item.name) &&
        item.name !== "index.html"
      )
        routes.add(`${prefix}/${item.name.slice(0, -5)}`);
    }
  }
  await collect(path.join(process.cwd(), "src/content"));
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${[...routes].map((route) => `<url><loc>${origin}${route}</loc></url>`).join("")}</urlset>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
