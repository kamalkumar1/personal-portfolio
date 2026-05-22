import type { NavItem } from "@/domain/models";

export const siteConfig = {
  title: "Kamal Kumar | Mobile Architect",
  description:
    "Senior Mobile Developer and Technical Lead with 11+ years in Native iOS, .NET MAUI, and cross-platform engineering.",
  siteUrl: "https://personal-portfolio.vercel.app",
  author: "Kamal Kumar",
  keywords: [
    "Mobile Developer",
    "iOS",
    ".NET MAUI",
    "Xamarin",
    "Technical Lead",
    "Chennai",
  ],
  ogImagePath: "/images/profile/profile-kamal.png",
};

export const navItems: NavItem[] = [
  { id: "about", label: "About", href: "#about" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "competencies", label: "Competencies", href: "#competencies" },
  { id: "opensource", label: "Open Source", href: "#open-source" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "certifications", label: "Certifications", href: "#certifications" },
  { id: "awards", label: "Awards", href: "#awards" },
  { id: "contact", label: "Hire Me", href: "#contact" },
];

export const heroNavItems: NavItem[] = [
  { id: "about", label: "Home", href: "#about" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "My Works", href: "#projects" },
  { id: "competencies", label: "About", href: "#competencies" },
  { id: "open-source", label: "Open Source", href: "#open-source" },
  { id: "certifications", label: "Certifications", href: "#certifications" },
  { id: "contact", label: "Hire Me", href: "#contact" },
];
