"use client";

import { useEffect, useRef, useState } from "react";
import type { OpenSourcePlatformGroup } from "@/domain/models";
import { Section } from "@/components/Section";

interface OpenSourceSectionProps {
  groups: OpenSourcePlatformGroup[];
}

interface ExpandableTextProps {
  text: string;
  className?: string;
}

function ExpandableText({ text, className = "open-source-item-description" }: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const checkOverflow = () => {
      const previousDisplay = element.style.display;
      const previousLineClamp = element.style.webkitLineClamp;
      const previousOrient = element.style.webkitBoxOrient;
      const previousOverflow = element.style.overflow;

      element.style.display = "-webkit-box";
      element.style.webkitLineClamp = "2";
      element.style.webkitBoxOrient = "vertical";
      element.style.overflow = "hidden";

      const overflow = element.scrollHeight > element.clientHeight + 1;
      setHasOverflow(overflow);

      element.style.display = previousDisplay;
      element.style.webkitLineClamp = previousLineClamp;
      element.style.webkitBoxOrient = previousOrient;
      element.style.overflow = previousOverflow;
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [text]);

  return (
    <div
      className={`open-source-description-wrap ${expanded ? "is-expanded" : "is-collapsed"} ${
        hasOverflow ? "has-overflow" : ""
      }`}
    >
      <p ref={textRef} className={`${className} ${expanded ? "is-expanded" : "is-collapsed"}`}>
        {text}
      </p>
      {hasOverflow ? (
        <button type="button" className="open-source-more-btn" onClick={() => setExpanded((value) => !value)}>
          {expanded ? "Read less" : "Read more"}
        </button>
      ) : null}
    </div>
  );
}

export function OpenSourceSection({ groups }: OpenSourceSectionProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [activeGroupId, setActiveGroupId] = useState(groups[0]?.id ?? "");

  useEffect(() => {
    const updateIsMobile = () => {
      const nextIsMobile = window.innerWidth <= 860;
      setIsMobile(nextIsMobile);
      if (!nextIsMobile) {
        setActiveGroupId(groups[0]?.id ?? "");
      }
    };

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, [groups]);

  const renderGroupSummary = (group: OpenSourcePlatformGroup, className?: string) => (
    <p className={className}>
      {group.id === "dotnet-maui" ? (
        <>
          .NET MAUI :- NuGet profile:{" "}
          <a
            href="https://www.nuget.org/profiles/kamal15"
            target="_blank"
            rel="noreferrer"
            className="open-source-inline-link"
          >
            kamal15 (4 packages, 4,845 total downloads)
          </a>
          .
        </>
      ) : (
        group.description
      )}
    </p>
  );

  return (
    <Section id="open-source" title="Open Source Contributions">
      <div className="open-source-groups" aria-label="Open source platforms">
        {groups.map((group) => {
          const isOpen = !isMobile || activeGroupId === group.id;

          return (
            <article key={group.id} className="open-source-group">
              {isMobile ? (
                <button
                  type="button"
                  className={`open-source-accordion-trigger ${isOpen ? "active" : ""}`}
                  onClick={() => setActiveGroupId((currentId) => (currentId === group.id ? "" : group.id))}
                  aria-expanded={isOpen}
                >
                  <span>{group.label}</span>
                  <span className="accordion-icon">{isOpen ? "-" : "+"}</span>
                </button>
              ) : (
                <div className="open-source-group-head">
                  <h4>{group.label}</h4>
                  {renderGroupSummary(
                    group,
                    group.id === "dotnet-maui" ? "open-source-group-summary-center" : undefined,
                  )}
                </div>
              )}

              {isOpen ? (
                <div className="open-source-group-body">
                  {isMobile ? renderGroupSummary(group, "open-source-group-summary-mobile") : null}

                  <div className="open-source-grid">
                    {group.items.map((item) => {
                      const normalizedType = item.type.trim().toLowerCase();
                      const normalizedStat = item.stats.trim().toLowerCase();
                      const shouldShowStat =
                        normalizedStat.length > 0 &&
                        normalizedStat !== normalizedType &&
                        normalizedStat !== `${normalizedType} package`;

                      return (
                        <article key={item.name} className="open-source-item">
                          <div className="open-source-item-head">
                            <strong>{item.name}</strong>
                            <span className="open-source-type">{item.type}</span>
                          </div>

                          <ExpandableText text={item.description} />
                          {shouldShowStat ? <p className="open-source-item-stat">{item.stats}</p> : null}

                          <div className="tag-wrap">
                            {item.tags.map((tag) => (
                              <span key={tag} className="tag">
                                {tag}
                              </span>
                            ))}
                          </div>

                          {item.features?.length ? (
                            <ExpandableText
                              className="open-source-feature-text"
                              text={`Features: ${item.features.join(" ")}`}
                            />
                          ) : null}

                          <a href={item.link} target="_blank" rel="noreferrer" className="open-source-link-btn">
                            View Package
                          </a>
                        </article>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </Section>
  );
}
