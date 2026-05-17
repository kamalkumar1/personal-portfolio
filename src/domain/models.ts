export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Profile {
  fullName: string;
  firstName: string;
  role: string;
  headline: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  stackOverflowUrl: string;
  imagePath: string;
  imageAlt: string;
  heroBackgroundPath: string;
  typewriterPhrases: string[];
}

export interface CompetencyItem {
  label: string;
}

export interface AwardItem {
  title: string;
  description: string;
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
  order: number;
  visible: boolean;
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
