import type { OpenSourcePlatformGroup } from "@/domain/models";

export const openSourcePlatformGroups: OpenSourcePlatformGroup[] = [
  {
    id: "native-ios",
    label: "Native iOS",
    description: "iOS-first packages and reusable components for Apple ecosystem development.",
    items: [
      {
        name: "iOS Utility Components",
        type: "GitHub",
        description:
          "Reusable UI and device utility patterns for production-grade Native iOS app development.",
        link: "https://github.com/",
        stats: "Contribution Showcase",
        tags: ["Swift", "UIKit", "Architecture"],
      },
    ],
  },
  {
    id: "dotnet-maui",
    label: ".NET MAUI",
    description: "Cross-platform components and NuGet packages focused on productivity.",
    items: [
      {
        name: "PhoneContact.MAUI.KK",
        type: "NuGet",
        description: "Cross-platform MAUI contact control package.",
        link: "https://www.nuget.org/packages/PhoneContact.MAUI.KK/",
        stats: "476+ Downloads",
        tags: [".NET MAUI", "NuGet", "Reusable Component"],
      },
      {
        name: "XamarinAudioPlayer.Forms.kk",
        type: "NuGet",
        description: "Audio player control for Xamarin.Forms applications.",
        link: "https://www.nuget.org/packages/XamarinAudioPlayer.Forms.kk/",
        stats: "1300+ Downloads",
        tags: ["Xamarin", "Audio", "Cross-Platform"],
      },
      {
        name: "XamarinPhoneContact.Forms.kk",
        type: "NuGet",
        description: "Contact management control for Xamarin.Forms projects.",
        link: "https://www.nuget.org/packages/XamarinPhoneContact.Forms.kk/",
        stats: "1176+ Downloads",
        tags: ["Xamarin", "Forms", "Component"],
      },
    ],
  },
  {
    id: "kotlin-multiplatform",
    label: "Kotlin Multiplatform",
    description:
      "Future-ready section for Kotlin Multiplatform contributions and shared business modules.",
    items: [
      {
        name: "Upcoming KMP Contributions",
        type: "GitHub",
        description:
          "Space reserved for Kotlin Multiplatform libraries and architecture samples.",
        link: "https://github.com/",
        stats: "Planned",
        tags: ["Kotlin", "KMP", "Shared Code"],
      },
    ],
  },
];
