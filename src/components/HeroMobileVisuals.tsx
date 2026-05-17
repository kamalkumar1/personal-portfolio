import type { CSSProperties, ReactNode } from "react";
import {
  AndroidStudioIcon,
  ApplePlatformIcon,
  KotlinIcon,
  MauiIcon,
  SwiftIcon,
  SwiftUIIcon,
  XamarinIcon,
  XcodeIcon,
} from "@/components/HeroPlatformIcons";

interface OrbitIcon {
  id: string;
  name: string;
  icon: ReactNode;
  accent: string;
}

const orbitIcons: OrbitIcon[] = [
  { id: "xcode", name: "Xcode", icon: <XcodeIcon />, accent: "#147adb" },
  { id: "swift", name: "Swift", icon: <SwiftIcon />, accent: "#f05138" },
  { id: "apple", name: "Apple Platform", icon: <ApplePlatformIcon />, accent: "#a2aaad" },
  { id: "swiftui", name: "SwiftUI", icon: <SwiftUIIcon />, accent: "#0a84ff" },
  { id: "android-studio", name: "Android Studio", icon: <AndroidStudioIcon />, accent: "#3ddc84" },
  { id: "kotlin", name: "Kotlin", icon: <KotlinIcon />, accent: "#7f52ff" },
  { id: "maui", name: ".NET MAUI", icon: <MauiIcon />, accent: "#512bd4" },
  { id: "xamarin", name: "Xamarin", icon: <XamarinIcon />, accent: "#3498db" },
];

const totalIcons = orbitIcons.length;

export function HeroMobileVisuals() {
  return (
    <div className="hero-orbit-wrap" aria-label="Mobile development platforms">
      <div className="hero-orbit-glow" aria-hidden="true" />
      <div className="hero-orbit-track hero-orbit-track-outer" aria-hidden="true" />
      <div className="hero-orbit-track hero-orbit-track-inner" aria-hidden="true" />

      <div className="hero-orbit-ring">
        {orbitIcons.map((item, index) => (
          <div
            key={item.id}
            className="hero-orbit-item"
            style={
              {
                "--orbit-index": index,
                "--orbit-total": totalIcons,
                "--orbit-accent": item.accent,
              } as CSSProperties
            }
            title={item.name}
          >
            <div className="hero-orbit-icon">{item.icon}</div>
            <span className="sr-only">{item.name}</span>
          </div>
        ))}
      </div>

      <div className="hero-orbit-core" aria-hidden="true">
        <span className="hero-orbit-core-dot" />
      </div>
    </div>
  );
}
