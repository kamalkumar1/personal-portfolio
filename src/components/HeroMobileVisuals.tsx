import { ProfileImage } from "@/components/ProfileImage";
import type { Profile } from "@/domain/models";
import type { CSSProperties, ReactNode } from "react";
import {
  AndroidIcon,
  AndroidStudioIcon,
  ApplePlatformIcon,
  CSharpIcon,
  KotlinIcon,
  MauiIcon,
  SwiftIcon,
  XcodeIcon,
} from "@/components/HeroPlatformIcons";

interface OrbitIcon {
  id: string;
  name: string;
  icon: ReactNode;
  accent: string;
}

const orbitIcons: OrbitIcon[] = [
  { id: "apple", name: "iOS", icon: <ApplePlatformIcon />, accent: "#a2aaad" },
  { id: "swift", name: "Swift", icon: <SwiftIcon />, accent: "#f05138" },
  { id: "xcode", name: "Xcode", icon: <XcodeIcon />, accent: "#147adb" },
  { id: "android", name: "Android", icon: <AndroidIcon />, accent: "#3ddc84" },
  { id: "kotlin", name: "Kotlin", icon: <KotlinIcon />, accent: "#7f52ff" },
  {
    id: "android-studio",
    name: "Android Studio",
    icon: <AndroidStudioIcon />,
    accent: "#4285f4",
  },
  { id: "maui", name: ".NET MAUI", icon: <MauiIcon />, accent: "#512bd4" },
  { id: "csharp", name: "C#", icon: <CSharpIcon />, accent: "#68217a" },
];

const totalIcons = orbitIcons.length;

const spinningOrbitIconIds = new Set(["apple", "android", "maui"]);

interface HeroMobileVisualsProps {
  profile: Profile;
}

export function HeroMobileVisuals({ profile }: HeroMobileVisualsProps) {
  return (
    <div className="hero-orbit-wrap" aria-label="Mobile development platforms">
      <div className="hero-orbit-glow" aria-hidden="true" />
      <div className="hero-orbit-track hero-orbit-track-outer" aria-hidden="true" />
      <div className="hero-orbit-track hero-orbit-track-inner" aria-hidden="true" />

      <div className="hero-orbit-ring">
        {orbitIcons.map((item, index) => (
          <div
            key={item.id}
            className={`hero-orbit-item${spinningOrbitIconIds.has(item.id) ? " hero-orbit-item--spin" : ""}`}
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

      <div className="hero-orbit-core">
        <ProfileImage profile={profile} className="hero-orbit-profile" size={112} />
      </div>
    </div>
  );
}
