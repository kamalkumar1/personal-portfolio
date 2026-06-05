"use client";

import { useState } from "react";

interface MobileHireMeBarProps {
  email: string;
  phone: string;
  linkedinUrl: string;
}

export function MobileHireMeBar({ email, phone, linkedinUrl }: MobileHireMeBarProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="mobile-hireme-bar" role="region" aria-label="Mobile Hire Me quick actions">
      <button
        type="button"
        className="mobile-hireme-close"
        aria-label="Close Hire Me quick actions"
        onClick={() => setIsVisible(false)}
      >
        ×
      </button>
      <p className="mobile-hireme-title">Hire Me</p>
      <p className="mobile-hireme-meta">11+ years • Mobile Architect</p>
      <div className="mobile-hireme-actions">
        <a href={`mailto:${email}`} className="mobile-hireme-btn mobile-hireme-btn-primary">
          Send Email
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="mobile-hireme-btn mobile-hireme-btn-secondary"
        >
          LinkedIn
        </a>
        <a href={`tel:${phone.replace(/\s+/g, "")}`} className="mobile-hireme-btn mobile-hireme-btn-secondary">
          Call
        </a>
      </div>
    </div>
  );
}
