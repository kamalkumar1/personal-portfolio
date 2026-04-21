import Image from "next/image";
import type { Profile } from "@/domain/models";

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  return (
    <section id="about" className="hero">
      <div className="hero-image-wrap">
        <Image
          src={profile.imagePath}
          alt={profile.imageAlt}
          width={420}
          height={420}
          className="hero-image"
          priority
        />
      </div>
      <div className="hero-content">
        <h1>{profile.fullName}</h1>
        <h2>{profile.role}</h2>
        <p className="hero-headline">{profile.headline}</p>
        <p>{profile.summary}</p>
        <div className="hero-actions">
          <a href="#experience" className="hero-action">
            Experience
          </a>
          <a href="#open-source" className="hero-action">
            Open Source
          </a>
          <a href="#projects" className="hero-action">
            Projects
          </a>
          <a href="#contact" className="hero-action">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
