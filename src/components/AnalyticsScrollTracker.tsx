"use client";

import { useEffect } from "react";
import { trackScrollDepth } from "@/lib/analytics";

const SCROLL_MILESTONES = [25, 50, 75, 100];

export function AnalyticsScrollTracker() {
  useEffect(() => {
    const reached = new Set<number>();

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) {
        if (!reached.has(100)) {
          reached.add(100);
          trackScrollDepth(100);
        }
        return;
      }

      const percent = Math.min(100, Math.round((window.scrollY / scrollHeight) * 100));

      for (const milestone of SCROLL_MILESTONES) {
        if (percent >= milestone && !reached.has(milestone)) {
          reached.add(milestone);
          trackScrollDepth(milestone);
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
