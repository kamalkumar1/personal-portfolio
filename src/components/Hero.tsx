import { HeroMobileVisuals } from "@/components/HeroMobileVisuals";
import { HeroTypewriter } from "@/components/HeroTypewriter";
import type { Profile } from "@/domain/models";

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  return (
    <section id="about" className="hero-banner" aria-label="Introduction">
      <div
        className="hero-banner-bg"
        style={{ backgroundImage: `url(${profile.heroBackgroundPath})` }}
        aria-hidden="true"
      />
      <div className="hero-banner-overlay" aria-hidden="true" />

      <div className="hero-banner-inner">
        <div className="hero-typewriter-top">
          <HeroTypewriter phrases={profile.typewriterPhrases} />
        </div>
        <div className="hero-banner-copy">
          <h1 className="hero-banner-title">
            Hi! I&apos;m {profile.firstName}.
          </h1>
          <p className="hero-banner-subtitle">
            {profile.role} located in{" "}
            <span className="hero-location-text">{profile.location}</span>.
          </p>
          <p className="hero-availability">
            Open to Full-Time | Remote Opportunities | Mobile App Training | Part-Time Consulting
          </p>
        </div>
        <div className="hero-orbit-shell">
          <HeroMobileVisuals profile={profile} />
        </div>
      </div>

      <a
        href="#experience"
        className="hero-scroll"
        aria-label="Scroll to content"
        data-analytics-event="hero_scroll_clicked"
        data-analytics-label="Hero: Scroll to content"
      >
        <span className="hero-scroll-icon" aria-hidden="true">
          ⌄
        </span>
      </a>

      <svg
        className="hero-wave"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,72 C320,120 480,24 720,60 C960,96 1120,108 1440,48 L1440,120 L0,120 Z"
          fill="#f8fbff"
        />
      </svg>
    </section>
  );
}
