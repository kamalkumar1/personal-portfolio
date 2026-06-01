import type { OpenSourcePlatformGroup } from "@/domain/models";

export const openSourcePlatformGroups: OpenSourcePlatformGroup[] = [
  {
    id: "dotnet-maui",
    label: ".NET MAUI",
    order: 1,
    visible: true,
    description:
      "NuGet profile: kamal15 (4 packages, 4,845 total downloads). Production-ready cross-platform libraries designed for faster mobile feature delivery.",
    items: [
      {
        name: "PhoneContact.MAUI.KK",
        type: "NuGet",
        description:
          "Cross-platform contact module for iOS and Android with enterprise-grade sync, performance, and security.",
        link: "https://www.nuget.org/packages/PhoneContact.MAUI.KK",
        stats: "1,204 total downloads • v2.1.1 • .NET 10.0",
        tags: [".NET MAUI", "iOS", "Android", "Security"],
        features: [
          "Cross-platform support: iOS & Android with proper permission handling",
          "Configurable UI: fonts, colors, icons, animations, and dark mode via ContactConfig.Instance",
          "Ready-to-use views: KKSingleContactView (ungrouped) and KKGroupContactView (grouped)",
          "Pagination for performance: smooth loading of 2,000+ contacts",
          "Silent sync: first-time full sync, then incremental updates",
          "Enterprise-ready: reduces sprint effort for contact feature delivery",
          "Security-first: local DB encryption with PBKDF2 (SHA-256, 100k iterations, per-device uniqueness)",
        ],
      },
      {
        name: "XamarinAudioPlayer.Forms.kk",
        type: "NuGet",
        description:
          "Audio playback library that supports bundled resources and local file system playback with built-in controls.",
        link: "https://www.nuget.org/packages/XamarinAudioPlayer.Forms.kk",
        stats: "1,967 total downloads • v3.1.13 • .NET 10.0",
        tags: [".NET MAUI", "Audio", "Cross-Platform", "Player Controls"],
        features: [
          "Read audio files from bundled resources and device local file system",
          "Cross-platform playback support for Android and iOS",
          "Predefined audio player controls for quick integration",
          "Progress control to show playback time",
          "Play, pause, and stop controls",
        ],
      },
      {
        name: "XamarinPhoneContact.Forms.kk",
        type: "NuGet",
        description:
          "Contact retrieval and management package for mobile apps with runtime permission handling and cross-platform support.",
        link: "https://www.nuget.org/packages/XamarinPhoneContact.Forms.kk",
        stats: "1,564 total downloads • v2.1.1 • Deprecated • .NET 8.0",
        tags: [".NET MAUI", "Contacts", "iOS", "Android", "Deprecated"],
        features: [
          "Retrieve and display phone contacts",
          "Search and filter contacts",
          "Runtime permission requests for contact access",
          "Cross-platform support for Android and iOS",
        ],
      },
      {
        name: "KKPinView",
        type: "NuGet",
        description:
          "Secure, enterprise-ready PIN entry and management library for .NET MAUI with setup, authentication, and lockout protection.",
        link: "https://www.nuget.org/packages/KKPinView",
        stats: "110 total downloads • v1.0.0 • .NET 10.0",
        tags: [".NET MAUI", "Security", "PIN Authentication", "AES-256"],
        features: [
          "Secure storage: AES-256 encryption with device-specific keys",
          "PIN authentication views: setup + confirm and entry flows",
          "Lockout protection with configurable max attempts and retry duration",
          "Customizable UI with KKPinviewConstant",
          "Cross-platform support for Android and iOS",
          "Modern native-style PIN UI with system keyboard and auto-focus behavior",
          "Visual and animated feedback for invalid PIN and mismatch flows",
        ],
      },
    ],
  },
  {
    id: "native-ios",
    label: "Native iOS",
    order: 2,
    visible: true,
    description: "SwiftUI packages focused on security-centric and customizable iOS user experiences.",
    items: [
      {
        name: "KKPinView",
        type: "Swift Package",
        description:
          "Secure and customizable PIN entry/setup view for iOS and iPadOS using SwiftUI with encrypted PIN storage and lockout protection.",
        link: "https://swiftpackageindex.com/kamalkumar1/KKPinView_SwiftUI",
        stats: "Swift Package Index",
        tags: ["SwiftUI", "iOS", "Security", "PIN"],
      },
    ],
  },
];
