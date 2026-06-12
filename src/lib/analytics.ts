const GA_MEASUREMENT_ID = "G-718N7ZFDX2";

type ClickType = "navigation" | "outbound" | "contact" | "action";
type ActivityType = "click" | "section_view" | "scroll";

interface TrackClickParams {
  label: string;
  section: string;
  itemId?: string;
  url?: string;
  elementType: "link" | "button";
  clickType?: ClickType;
  eventName?: string;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const GA_EVENT_NAME_PATTERN = /^[a-z][a-z0-9_]{0,39}$/;

export function getGaMeasurementId(): string {
  return GA_MEASUREMENT_ID;
}

export function toGaEventName(value: string): string {
  const normalized = value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .replace(/_+/g, "_");

  const eventName = normalized || "element_clicked";
  return GA_EVENT_NAME_PATTERN.test(eventName) ? eventName : "element_clicked";
}

function pushToDataLayer(...args: unknown[]) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

function invokeGtag(...args: unknown[]) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag(...args);
    return;
  }

  pushToDataLayer(...args);
}

export function sendGaEvent(eventName: string, params: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined") return;

  const normalizedName = toGaEventName(eventName);

  invokeGtag("event", normalizedName, {
    ...params,
    send_to: GA_MEASUREMENT_ID,
    activity_type: params.activity_type ?? "interaction",
  });
}

export function trackActivity(
  eventName: string,
  activityType: ActivityType,
  params: Record<string, string | number | boolean> = {},
) {
  sendGaEvent(eventName, {
    ...params,
    activity_type: activityType,
  });
}

export function trackClick({
  label,
  section,
  itemId = "",
  url = "",
  elementType,
  clickType = "action",
  eventName,
}: TrackClickParams) {
  const resolvedEventName = eventName ?? deriveClickEventName({ label, section, itemId, url, clickType });

  sendGaEvent(resolvedEventName, {
    activity_type: "click",
    section,
    link_text: label,
    item_id: itemId,
    link_url: url,
    element_type: elementType,
    click_type: clickType,
  });

  sendGaEvent("portfolio_interaction", {
    activity_type: "click",
    interaction_name: resolvedEventName,
    section,
    link_text: label,
  });
}

export function trackSectionView(sectionId: string, sectionTitle: string) {
  trackActivity("section_viewed", "section_view", {
    section_id: sectionId,
    section_name: sectionTitle,
  });
}

export function trackScrollDepth(percent: number) {
  trackActivity(`scroll_${percent}_percent`, "scroll", {
    scroll_percent: percent,
  });
}

export function getClickType(url: string): ClickType {
  if (url.startsWith("#")) return "navigation";
  if (url.startsWith("mailto:") || url.startsWith("tel:")) return "contact";
  if (url.startsWith("http://") || url.startsWith("https://")) return "outbound";
  return "action";
}

const NAV_EVENT_NAMES: Record<string, string> = {
  about: "nav_home_clicked",
  experience: "nav_experience_clicked",
  projects: "nav_my_works_clicked",
  "skills-menu": "nav_myskill_clicked",
  skills: "nav_myskill_clicked",
  "open-source": "nav_open_source_clicked",
  opensource: "nav_open_source_clicked",
  certifications: "nav_certifications_clicked",
  competencies: "nav_competencies_clicked",
  awards: "nav_awards_clicked",
  contact: "nav_hire_me_clicked",
  blog: "nav_blog_clicked",
};

function deriveClickEventName({
  label,
  section,
  itemId,
  url,
  clickType,
}: {
  label: string;
  section: string;
  itemId: string;
  url: string;
  clickType: ClickType;
}): string {
  if (itemId && NAV_EVENT_NAMES[itemId]) {
    return NAV_EVENT_NAMES[itemId];
  }

  const lowerLabel = label.toLowerCase();

  if (lowerLabel.includes("nav:")) {
    if (lowerLabel.includes("home")) return "nav_home_clicked";
    if (lowerLabel.includes("myskill")) return "nav_myskill_clicked";
    if (lowerLabel.includes("hire me")) return "nav_hire_me_clicked";
    if (lowerLabel.includes("experience")) return "nav_experience_clicked";
    if (lowerLabel.includes("my works")) return "nav_my_works_clicked";
    if (lowerLabel.includes("open source")) return "nav_open_source_clicked";
    if (lowerLabel.includes("certifications")) return "nav_certifications_clicked";
    if (lowerLabel.includes("blog")) return "nav_blog_clicked";
  }

  if (section === "contact" || lowerLabel.includes("hire")) {
    if (url.startsWith("mailto:") || lowerLabel.includes("email") || lowerLabel.includes("send email")) {
      return "hire_email_clicked";
    }
    if (url.startsWith("tel:") || lowerLabel.includes("phone") || lowerLabel === "call") {
      return "hire_phone_clicked";
    }
    if (lowerLabel.includes("linkedin")) return "hire_linkedin_clicked";
    if (lowerLabel.includes("stack overflow")) return "hire_stackoverflow_clicked";
    return "hire_me_clicked";
  }

  if (lowerLabel.includes("share portfolio") || lowerLabel === "share") return "share_portfolio_clicked";
  if (lowerLabel.includes("scroll experience timeline left")) return "timeline_scroll_left_clicked";
  if (lowerLabel.includes("scroll experience timeline right")) return "timeline_scroll_right_clicked";
  if (lowerLabel.includes("scroll to content")) return "hero_scroll_clicked";
  if (lowerLabel.includes("linkedin profile") && section === "floating-actions") return "floating_linkedin_clicked";
  if (lowerLabel.includes("app store")) return toGaEventName(`${itemId || label}_clicked`);
  if (lowerLabel.includes("play store")) return toGaEventName(`${itemId || label}_clicked`);
  if (lowerLabel.includes("blog:")) return toGaEventName(`blog_${itemId || label}_clicked`);
  if (lowerLabel.includes("open source:")) return toGaEventName(`opensource_${itemId || label}_clicked`);
  if (clickType === "navigation") return toGaEventName(`${section || itemId || label}_nav_clicked`);

  return toGaEventName(`${section || "page"}_${label}_clicked`);
}
