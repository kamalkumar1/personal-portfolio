"use client";

import { useEffect, useRef, useState } from "react";
import type { ExperienceItem } from "@/domain/models";

interface ExperienceTimelineProps {
  experiences: ExperienceItem[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isTimelineReady, setIsTimelineReady] = useState(false);

  const scrollTimeline = (direction: "left" | "right") => {
    if (!timelineRef.current) {
      return;
    }

    const distance = direction === "left" ? -320 : 320;
    timelineRef.current.scrollBy({ left: distance, behavior: "smooth" });
  };

  useEffect(() => {
    const timelineElement = timelineRef.current;
    if (!timelineElement) {
      return;
    }

    const syncArrowVisibility = () => {
      const { scrollLeft, scrollWidth, clientWidth } = timelineElement;
      const maxScrollLeft = scrollWidth - clientWidth;
      const threshold = 24;

      setCanScrollLeft(scrollLeft > threshold);
      setCanScrollRight(scrollLeft < maxScrollLeft - threshold);
    };

    timelineElement.scrollTo({ left: 0, behavior: "auto" });
    syncArrowVisibility();
    setIsTimelineReady(true);
    timelineElement.addEventListener("scroll", syncArrowVisibility, { passive: true });
    window.addEventListener("resize", syncArrowVisibility);

    return () => {
      timelineElement.removeEventListener("scroll", syncArrowVisibility);
      window.removeEventListener("resize", syncArrowVisibility);
    };
  }, []);

  return (
    <div className="timeline-wrapper">
      <div className="timeline-rail" aria-label="Experience timeline navigation">
        <button
          type="button"
          className={`timeline-nav-btn ${isTimelineReady && canScrollLeft ? "" : "is-hidden"}`}
          onClick={() => scrollTimeline("left")}
          aria-label="Scroll experience timeline left"
          data-analytics-event="timeline_scroll_left_clicked"
          data-analytics-label="Experience: Scroll left"
          aria-hidden={!(isTimelineReady && canScrollLeft)}
          tabIndex={isTimelineReady && canScrollLeft ? 0 : -1}
        >
          <span className="timeline-arrow-icon" aria-hidden="true">
            ❮
          </span>
        </button>
        <div className="timeline" ref={timelineRef}>
          {experiences.map((item) => (
            <article key={`${item.company}-${item.title}`} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <p className="timeline-date">{item.dateRange}</p>
                <h4>{item.title}</h4>
                <p className="muted">
                  {item.company} | {item.location}
                </p>
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <button
          type="button"
          className={`timeline-nav-btn ${isTimelineReady && canScrollRight ? "" : "is-hidden"}`}
          onClick={() => scrollTimeline("right")}
          aria-label="Scroll experience timeline right"
          data-analytics-event="timeline_scroll_right_clicked"
          data-analytics-label="Experience: Scroll right"
          aria-hidden={!(isTimelineReady && canScrollRight)}
          tabIndex={isTimelineReady && canScrollRight ? 0 : -1}
        >
          <span className="timeline-arrow-icon" aria-hidden="true">
            ❯
          </span>
        </button>
      </div>
    </div>
  );
}
