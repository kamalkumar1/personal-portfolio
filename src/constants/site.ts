import type { NavItem } from "@/domain/models";

export const siteConfig = {
  title: "Kamal Kumar | Mobile Architect",
  description:
    "Senior Mobile Developer and Technical Lead with 11+ years in Native iOS, .NET MAUI, and cross-platform engineering.",
};

export const navItems: NavItem[] = [
  { id: "about", label: "About", href: "#about" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "opensource", label: "Open Source", href: "#open-source" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "certifications", label: "Certifications", href: "#certifications" },
  { id: "contact", label: "Contact", href: "#contact" },
];
