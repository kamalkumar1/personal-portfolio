"use client";

import { useEffect, useState } from "react";

interface HeroTypewriterProps {
  phrases: string[];
  prefix?: string;
}

export function HeroTypewriter({
  phrases,
  prefix = "Specialized in ",
}: HeroTypewriterProps) {
  const fallback = phrases[0] ?? "";
  const [mounted, setMounted] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(fallback.length);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || phrases.length === 0) {
      return;
    }

    const currentPhrase = phrases[phraseIndex] ?? "";
    const isComplete = charIndex === currentPhrase.length;
    const isEmpty = charIndex === 0;

    let delay = isDeleting ? 45 : 85;
    if (isComplete && !isDeleting) {
      delay = 1800;
    } else if (isEmpty && isDeleting) {
      delay = 500;
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isEmpty) {
        setIsDeleting(false);
        setPhraseIndex((index) => (index + 1) % phrases.length);
        return;
      }

      setCharIndex((index) => index + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [mounted, phrases, phraseIndex, charIndex, isDeleting]);

  const displayText = mounted
    ? (phrases[phraseIndex] ?? "").slice(0, charIndex)
    : fallback;

  return (
    <p className="hero-typewriter" aria-live="polite">
      {prefix}
      <strong>{displayText}</strong>
      <span className="hero-typewriter-cursor" aria-hidden="true">
        |
      </span>
    </p>
  );
}
