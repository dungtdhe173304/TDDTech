import { NextRequest } from "next/server";
import { requestOrigin } from "@/lib/request-origin";

export function GET(request: NextRequest) {
  const origin = requestOrigin(request);
  return new Response(
    `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`,
    { headers: { "Content-Type": "text/plain" } },
  );
}
