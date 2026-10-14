import { NextRequest } from "next/server";

export function requestOrigin(request: NextRequest) {
  if (process.env.NEXT_PUBLIC_SITE_URL)
    return new URL(process.env.NEXT_PUBLIC_SITE_URL).origin;
  const protocol =
    request.headers.get("x-forwarded-proto")?.split(",")[0] ||
    request.nextUrl.protocol.replace(":", "");
  const host = request.headers.get("host") || request.nextUrl.host;
  return new URL(`${protocol === "https" ? "https" : "http"}://${host}`).origin;
}
