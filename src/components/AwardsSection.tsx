import type { AwardItem } from "@/domain/models";
import { Section } from "@/components/Section";

interface AwardsSectionProps {
  awards: AwardItem[];
}

export function AwardsSection({ awards }: AwardsSectionProps) {
  return (
    <Section id="awards" title="Awards & Achievements">
      <div className="awards-timeline" role="list">
        {awards.map((award, index) => (
          <article key={award.title} className="awards-timeline-item" role="listitem">
            <div className="awards-timeline-content">
              <p className="awards-timeline-step">Milestone {String(index + 1).padStart(2, "0")}</p>
              <h4>{award.title}</h4>
              <p>{award.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
