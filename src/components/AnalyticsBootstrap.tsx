"use client";

import { useEffect } from "react";
import { sendGaEvent } from "@/lib/analytics";

export function AnalyticsBootstrap() {
  useEffect(() => {
    sendGaEvent("portfolio_ready", {
      activity_type: "lifecycle",
      page_path: window.location.pathname,
    });
  }, []);

  return null;
}
