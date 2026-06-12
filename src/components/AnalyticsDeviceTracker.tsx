"use client";

import { useEffect } from "react";
import { trackDeviceView } from "@/lib/analytics";

export function AnalyticsDeviceTracker() {
  useEffect(() => {
    trackDeviceView();
  }, []);

  return null;
}
