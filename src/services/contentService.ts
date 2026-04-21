import { certificationsContent } from "@/content/certifications";
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
  getOpenSourceByPlatform: () => openSourcePlatformGroups,
};
