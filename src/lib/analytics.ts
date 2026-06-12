import { siteConfig } from "@/constants/site";

type ClickType = "navigation" | "outbound" | "contact" | "action";

interface TrackClickParams {
  label: string;
  section: string;
  itemId?: string;
  url?: string;
  elementType: "link" | "button";
  clickType?: ClickType;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackClick({
  label,
  section,
  itemId = "",
  url = "",
  elementType,
  clickType = "action",
}: TrackClickParams) {
  if (!siteConfig.googleAnalyticsId || typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", "site_click", {
    section,
    link_text: label,
    item_id: itemId,
    link_url: url,
    element_type: elementType,
    click_type: clickType,
  });
}

export function getClickType(url: string): ClickType {
  if (url.startsWith("#")) return "navigation";
  if (url.startsWith("mailto:") || url.startsWith("tel:")) return "contact";
  if (url.startsWith("http://") || url.startsWith("https://")) return "outbound";
  return "action";
}
