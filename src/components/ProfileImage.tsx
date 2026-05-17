"use client";

import Image from "next/image";
import { useState } from "react";
import type { Profile } from "@/domain/models";

interface ProfileImageProps {
  profile: Profile;
}

export function ProfileImage({ profile }: ProfileImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    const initials = profile.fullName
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2);

    return (
      <div className="hero-image hero-image-fallback" aria-label={profile.imageAlt}>
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={profile.imagePath}
      alt={profile.imageAlt}
      width={420}
      height={420}
      className="hero-image"
      priority
      onError={() => setHasError(true)}
    />
  );
}
