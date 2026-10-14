"use client";

import { useLayoutEffect } from "react";

export default function useRouteScrollReset(
  location: { key: string; pathname: string; search: string; hash: string },
  resetScroll: (position: number) => void,
) {
  useLayoutEffect(() => {
    history.scrollRestoration = "manual";
    // Keep links to sections working; reset after the destination has mounted.
    if (location.hash) return;
    const reset = () => {
      resetScroll(0);
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };
    reset();
    const frame = requestAnimationFrame(reset);
    return () => cancelAnimationFrame(frame);
  }, [location.key, location.pathname, location.search, location.hash, resetScroll]);
}
