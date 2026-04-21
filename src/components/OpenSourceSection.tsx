"use client";

import { useState } from "react";
import type { OpenSourcePlatformGroup } from "@/domain/models";
import { Section } from "@/components/Section";

interface OpenSourceSectionProps {
  groups: OpenSourcePlatformGroup[];
}

export function OpenSourceSection({ groups }: OpenSourceSectionProps) {
  const [activePlatformId, setActivePlatformId] = useState(groups[0]?.id ?? "");

  return (
    <Section id="open-source" title="Open Source Contributions">
      <div className="accordion-list" aria-label="Open source platforms">
        {groups.map((group) => (
          <article key={group.id} className="accordion-item">
            <button
              type="button"
              className={`accordion-trigger ${activePlatformId === group.id ? "active" : ""}`}
              onClick={() =>
                setActivePlatformId((currentId) => (currentId === group.id ? "" : group.id))
              }
              aria-expanded={activePlatformId === group.id}
            >
              <span>{group.label}</span>
              <span className="accordion-icon">{activePlatformId === group.id ? "-" : "+"}</span>
            </button>
            {activePlatformId === group.id ? (
              <div className="accordion-content dynamic-fade">
                <p>{group.description}</p>
                <div className="contribution-grid">
                  {group.items.map((item) => (
                    <div key={item.name} className="card">
                      <div className="card-top">
                        <strong>{item.name}</strong>
                        <span>{item.type}</span>
                      </div>
                      <p>{item.description}</p>
                      <p className="muted">{item.stats}</p>
                      <div className="tag-wrap">
                        {item.tags.map((tag) => (
                          <span key={tag} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a href={item.link} target="_blank" rel="noreferrer">
                        View Contribution
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
