export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Profile {
  fullName: string;
  role: string;
  headline: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  imagePath: string;
  imageAlt: string;
}

export interface ExperienceItem {
  company: string;
  title: string;
  dateRange: string;
  location: string;
  highlights: string[];
}

export interface ProjectItem {
  name: string;
  stack: string;
  summary: string;
  impact: string;
}

export interface OpenSourceItem {
  name: string;
  type: "NuGet" | "GitHub";
  description: string;
  link: string;
  stats: string;
  tags: string[];
}

export interface OpenSourcePlatformGroup {
  id: string;
  label: string;
  description: string;
  items: OpenSourceItem[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
}
