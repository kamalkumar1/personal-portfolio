import { Header } from "@/components/Header";
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
  const openSourceGroups = contentService.getOpenSourceByPlatform();

  return (
    <main className="container">
      <div className="floating-socials" aria-label="Social links">
        <a
          href={profile.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="floating-social-link"
          aria-label="LinkedIn profile"
          title="Click to see LinkedIn profile"
        >
          <span className="floating-social-icon">in</span>
          <span className="floating-social-text">LinkedIn</span>
        </a>
      </div>
      <Header />
      <Hero profile={profile} />

      <Section id="experience" title="Experience">
        <div className="timeline">
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
      </Section>

      <OpenSourceSection groups={openSourceGroups} />

      <Section id="projects" title="Projects">
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

      <Section id="skills" title="Technical Skills">
        <div className="grid">
          {skills.map((group) => (
            <article key={group.title} className="card">
              <h4>{group.title}</h4>
              <ul>
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
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

      <Section id="contact" title="Contact">
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
              Click to see LinkedIn profile
            </a>
          </p>
        </article>
      </Section>
    </main>
  );
}
