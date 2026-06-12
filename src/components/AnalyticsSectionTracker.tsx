"use client";

import { useEffect } from "react";
import { trackSectionView } from "@/lib/analytics";

const SECTION_TITLES: Record<string, string> = {
  about: "Home",
  experience: "Experience",
  projects: "My Works",
  "open-source": "Open Source",
  skills: "MySkills",
  competencies: "Competencies",
  certifications: "Certifications",
  awards: "Awards",
  contact: "Hire Me",
  blog: "Blog",
};

export function AnalyticsSectionTracker() {
  useEffect(() => {
    const seenSections = new Set<string>();
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.35) continue;

          const sectionId = entry.target.id;
          if (!sectionId || seenSections.has(sectionId)) continue;

          seenSections.add(sectionId);
          trackSectionView(sectionId, SECTION_TITLES[sectionId] ?? sectionId);
        }
      },
      { threshold: [0.35, 0.5] },
    );

    for (const section of sections) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
