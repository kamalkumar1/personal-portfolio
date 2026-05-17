import type { AwardItem } from "@/domain/models";
import { Section } from "@/components/Section";

interface AwardsSectionProps {
  awards: AwardItem[];
}

export function AwardsSection({ awards }: AwardsSectionProps) {
  return (
    <Section id="awards" title="Awards & Achievements">
      <div className="awards-list">
        {awards.map((award) => (
          <article key={award.title} className="award-item">
            <h4>{award.title}</h4>
            <p>{award.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
