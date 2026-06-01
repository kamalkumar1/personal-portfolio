import { awardsContent } from "@/content/awards";
import { blogContent } from "@/content/blog";
import { certificationsContent } from "@/content/certifications";
import { competenciesContent } from "@/content/competencies";
import { experienceContent } from "@/content/experience";
import { openSourcePlatformGroups } from "@/content/openSource";
import { profileContent } from "@/content/profile";
import { projectsContent } from "@/content/projects";
import { skillGroupsContent } from "@/content/skills";

export const contentService = {
  getProfile: () => profileContent,
  getExperience: () => experienceContent,
  getProjects: () => projectsContent,
  getSkills: () => skillGroupsContent,
  getCertifications: () => certificationsContent,
  getBlog: () => blogContent,
  getCompetencies: () => competenciesContent,
  getAwards: () => awardsContent,
  getOpenSourceByPlatform: () =>
    openSourcePlatformGroups
      .filter((group) => group.visible)
      .sort((a, b) => a.order - b.order),
};
