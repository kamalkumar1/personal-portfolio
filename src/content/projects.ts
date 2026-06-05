import type { ProjectItem } from "@/domain/models";

export const projectsContent: ProjectItem[] = [
  {
    name: "MyManpower App",
    summary:
      "Mobile platform for associates and job seekers to search and manage career opportunities.",
    technologies: [".NET MAUI", "Xamarin iOS", "Xamarin Android"],
    appStoreUrl: "https://apps.apple.com/us/app/my-manpower-job-search/id1569784517",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.mpg.mymanpower&hl=en_IN",
  },
  {
    name: "Sterling VDR",
    summary:
      "Secure virtual data room application for document sharing in business-critical workflows.",
    technologies: ["Native iOS", "Xamarin iOS", "Xamarin Android"],
    appStoreUrl: "https://apps.apple.com/gb/app/sterling-vdr/id1472147164",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.hms.sterling&hl=en_GB",
  },
  {
    name: "LIBRA (Vakil Search)",
    summary:
      "Case and billing management app for legal professionals and firms.",
    technologies: ["Native iOS"],
    appStoreUrl: "https://apps.apple.com/in/app/libra-law-practice-management/id1145278921",
  },
];
