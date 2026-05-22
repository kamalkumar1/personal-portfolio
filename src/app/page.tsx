import { AwardsSection } from "@/components/AwardsSection";
import { CompetenciesSection } from "@/components/CompetenciesSection";
import { StickyHeader } from "@/components/StickyHeader";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Hero } from "@/components/Hero";
import { OpenSourceSection } from "@/components/OpenSourceSection";
import { Section } from "@/components/Section";
import { contentService } from "@/services/contentService";

export default function Home() {
  const profile = contentService.getProfile();
  const experiences = contentService.getExperience();
  const projects = contentService.getProjects();
  const skills = contentService.getSkills();
  const certifications = contentService.getCertifications();
  const competencies = contentService.getCompetencies();
  const awards = contentService.getAwards();
  const openSourceGroups = contentService.getOpenSourceByPlatform();

  return (
    <main>
      <div className="floating-socials" aria-label="Social links">
        <a
          href={profile.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="floating-social-link"
          aria-label="LinkedIn profile"
          title="Click to see LinkedIn profile"
        >
          <img
            className="floating-social-icon-img"
            src="/images/icons/linkedin.png"
            alt=""
            width={48}
            height={48}
            draggable={false}
          />
        </a>
      </div>

      <StickyHeader />

      <div className="hero-shell">
        <Hero profile={profile} />
      </div>

      <div className="page-body container">
        <Section id="experience" title="Experience">
          <ExperienceTimeline experiences={experiences} />
        </Section>

        <Section id="projects" title="My Works">
          <div className="grid">
            {projects.map((project) => (
              <article key={project.name} className="card">
                <h4>{project.name}</h4>
                <p className="muted">{project.stack}</p>
                <p>{project.summary}</p>
                <p>{project.impact}</p>
              </article>
            ))}
          </div>
        </Section>

        <CompetenciesSection competencies={competencies} />

        <OpenSourceSection groups={openSourceGroups} />

        <Section id="skills" title="Technical Skills">
          <div className="skills-showcase">
            {skills.map((group) => (
              <article key={group.title} className="skills-panel">
                <div className="skills-panel-head">
                  <h4>{group.title}</h4>
                  <span className="skills-count">{group.items.length}</span>
                </div>
                <div className="skills-chip-wrap">
                  {group.items.map((skill) => (
                    <span key={skill} className="skills-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="certifications" title="Certifications">
          <div className="grid">
            {certifications.map((certification) => (
              <article key={certification.name} className="card">
                <h4>{certification.name}</h4>
                <p className="muted">{certification.issuer}</p>
              </article>
            ))}
          </div>
        </Section>

        <AwardsSection awards={awards} />

        <Section id="contact" title="Hire Me">
          <article className="card">
            <p>
              <strong>Email:</strong> {profile.email}
            </p>
            <p>
              <strong>Phone:</strong> {profile.phone}
            </p>
            <p>
              <strong>Location:</strong> {profile.location}
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                View LinkedIn profile
              </a>
            </p>
            <p>
              <strong>Stack Overflow:</strong>{" "}
              <a href={profile.stackOverflowUrl} target="_blank" rel="noreferrer">
                View Stack Overflow profile
              </a>
            </p>
          </article>
        </Section>
      </div>
    </main>
  );
}
