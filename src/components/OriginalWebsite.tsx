"use client";

import dynamic from "next/dynamic";

// The archived application uses browser APIs and its existing React Router.
// Next builds its modules; all components share Next's installed React runtime.
const Website = dynamic(() => import("../original/index-DAfw2Y79.js"), {
  ssr: false,
  loading: () => (
    <div className="page-loader pl-now pl-indeterminate" role="status">
      <img src="/loader-logo.png" width="96" height="96" alt="TDDTech" />
      <span className="pl-track" />
      <span className="pl-note">Đang tải trang…</span>
    </div>
  ),
});

export default function OriginalWebsite() {
  return <Website />;
}
