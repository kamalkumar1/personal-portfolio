"use client";

import { useEffect } from "react";
import { getClickType, toGaEventName, trackClick } from "@/lib/analytics";

function getSection(element: Element): string {
  const explicit = element.closest("[data-analytics-section]")?.getAttribute("data-analytics-section");
  if (explicit) return explicit;

  const section = element.closest("section[id]");
  if (section?.id) return section.id;

  if (element.closest("header")) return "header";
  if (element.closest(".hero-shell")) return "about";
  if (element.closest(".floating-socials")) return "floating-actions";
  if (element.closest(".mobile-hireme-bar")) return "contact";

  return "page";
}

function getLabel(element: HTMLElement): string {
  const explicit = element.getAttribute("data-analytics-label");
  if (explicit) return explicit;

  const ariaLabel = element.getAttribute("aria-label");
  if (ariaLabel) return ariaLabel;

  const title = element.getAttribute("title");
  if (title) return title;

  const text = element.textContent?.trim().replace(/\s+/g, " ");
  return text ? text.slice(0, 120) : "unknown";
}

function getItemId(element: HTMLElement): string {
  const explicit = element.getAttribute("data-analytics-id");
  if (explicit) return explicit;

  const article = element.closest("article");
  const heading = article?.querySelector("h4");
  if (heading?.textContent) return heading.textContent.trim();

  if (element instanceof HTMLAnchorElement) {
    return element.getAttribute("href") ?? "";
  }

  return "";
}

function getEventName(element: HTMLElement): string | undefined {
  const explicit = element.getAttribute("data-analytics-event");
  return explicit ? toGaEventName(explicit) : undefined;
}

export function AnalyticsClickTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const interactive = target.closest('a, button, [role="button"]');
      if (!(interactive instanceof HTMLElement)) return;
      if (interactive.hasAttribute("data-analytics-ignore")) return;

      const label = getLabel(interactive);
      const section = getSection(interactive);
      const itemId = getItemId(interactive);
      const elementType =
        interactive.tagName.toLowerCase() === "button" || interactive.getAttribute("role") === "button"
          ? "button"
          : "link";
      const url =
        interactive instanceof HTMLAnchorElement
          ? interactive.href
          : interactive.getAttribute("data-analytics-url") ?? "";

      trackClick({
        label,
        section,
        itemId,
        url,
        elementType,
        clickType: url ? getClickType(url) : "action",
        eventName: getEventName(interactive),
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
