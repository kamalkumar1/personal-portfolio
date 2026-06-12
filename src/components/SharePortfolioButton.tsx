"use client";

import { useState } from "react";
import { siteConfig } from "@/constants/site";

interface SharePortfolioButtonProps {
  compact?: boolean;
}

export function SharePortfolioButton({ compact = false }: SharePortfolioButtonProps) {
  const baseLabel = compact ? "Share" : "Share Portfolio";
  const copiedLabel = compact ? "Copied" : "Link Copied";
  const failedLabel = compact ? "Failed" : "Copy failed";
  const cancelledLabel = compact ? "Cancelled" : "Share cancelled";

  const [label, setLabel] = useState(baseLabel);

  const handleShare = async () => {
    const shareUrl = typeof window !== "undefined" ? window.location.origin : siteConfig.siteUrl;
    const payload = {
      title: siteConfig.title,
      text: "Check out my portfolio.",
      url: shareUrl,
    };

    try {
      if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
        await navigator.share(payload);
        return;
      }

      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
        if (!compact) {
          setLabel(copiedLabel);
          window.setTimeout(() => setLabel(baseLabel), 1800);
        }
        return;
      }

      if (!compact) {
        setLabel(failedLabel);
        window.setTimeout(() => setLabel(baseLabel), 1800);
      }
    } catch {
      if (!compact) {
        setLabel(cancelledLabel);
        window.setTimeout(() => setLabel(baseLabel), 1800);
      }
    }
  };

  return (
    <button
      type="button"
      className={compact ? "floating-social-link floating-share-btn" : "hireme-btn hireme-btn-share"}
      onClick={handleShare}
      aria-label="Share portfolio"
      title="Share portfolio"
      data-analytics-event="share_portfolio_clicked"
      data-analytics-label="Share portfolio"
    >
      {compact ? (
        <span aria-hidden="true">⤴</span>
      ) : (
        label
      )}
    </button>
  );
}
