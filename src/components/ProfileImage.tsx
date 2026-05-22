"use client";

import Image from "next/image";
import { useState } from "react";
import type { Profile } from "@/domain/models";

interface ProfileImageProps {
  profile: Profile;
  className?: string;
  size?: number;
  priority?: boolean;
}

export function ProfileImage({
  profile,
  className,
  size = 420,
  priority = true,
}: ProfileImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    const initials = profile.fullName
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2);

    const fallbackClass = className
      ? `hero-image hero-image-fallback ${className}`
      : "hero-image hero-image-fallback";

    return (
      <div className={fallbackClass} aria-label={profile.imageAlt} style={{ width: size, height: size }}>
        {initials}
      </div>
    );
  }

  const imageClass = className ? `hero-image ${className}` : "hero-image";

  return (
    <Image
      src={profile.imagePath}
      alt={profile.imageAlt}
      width={size}
      height={size}
      className={imageClass}
      priority={priority}
      onError={() => setHasError(true)}
    />
  );
}
