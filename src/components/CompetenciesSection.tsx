import type { CompetencyItem } from "@/domain/models";
import { Section } from "@/components/Section";

interface CompetenciesSectionProps {
  competencies: CompetencyItem[];
}

export function CompetenciesSection({ competencies }: CompetenciesSectionProps) {
  return (
    <Section id="competencies" title="Core Competencies">
      <div className="competencies-grid">
        {competencies.map((item) => (
          <span key={item.label} className="competency-chip">
            {item.label}
          </span>
        ))}
      </div>
    </Section>
  );
}
