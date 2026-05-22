"use client";

interface HeroTypewriterProps {
  phrases: string[];
  prefix?: string;
}

function getTechClassName(phrase: string): string {
  const normalized = phrase.toLowerCase();
  if (normalized.includes("ios") || normalized.includes("apple")) {
    return "hero-spec-ios";
  }
  if (normalized.includes("android")) {
    return "hero-spec-android";
  }
  if (normalized.includes(".net") || normalized.includes("maui")) {
    return "hero-spec-dotnet";
  }
  if (normalized.includes("kotlin") || normalized.includes("kmp")) {
    return "hero-spec-kotlin";
  }
  return "hero-spec-default";
}

export function HeroTypewriter({
  phrases,
  prefix = "Specialized in ",
}: HeroTypewriterProps) {
  const tickerPhrases = phrases.filter(Boolean);
  if (tickerPhrases.length === 0) {
    return null;
  }

  const renderTickerItems = (ariaHidden = false) =>
    tickerPhrases.map((phrase, index) => (
      <span
        key={`${phrase}-${index}-${ariaHidden ? "ghost" : "live"}`}
        className="hero-ticker-chunk"
        aria-hidden={ariaHidden}
      >
        <span className={`hero-spec ${getTechClassName(phrase)}`}>{phrase}</span>
        <span className="hero-spec-separator" aria-hidden="true">
          |
        </span>
      </span>
    ));

  return (
    <p className="hero-typewriter">
      <span className="hero-typewriter-prefix">{prefix}</span>
      <span className="hero-ticker">
        <span className="hero-ticker-track">
          <strong className="hero-ticker-item">{renderTickerItems()}</strong>
          <strong className="hero-ticker-item" aria-hidden="true">
            {renderTickerItems(true)}
          </strong>
        </span>
      </span>
    </p>
  );
}
