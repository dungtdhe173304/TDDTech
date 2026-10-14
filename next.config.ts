import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: process.env.NEXT_DIST_DIR || ".next",
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "connect-src 'self'; img-src 'self' data: blob:; media-src 'self' blob:; font-src 'self'; frame-src 'self'; form-action 'self'; base-uri 'self'",
          },
        ],
      },
    ];
  },
  // Existing mirrored .html bookmarks continue to work with clean Next routes.
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/:path+/index.html", destination: "/:path+", permanent: true },
      { source: "/:path+.html", destination: "/:path+", permanent: true },
    ];
  },
};

export default nextConfig;
