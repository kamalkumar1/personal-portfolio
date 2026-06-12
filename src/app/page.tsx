import { AwardsSection } from "@/components/AwardsSection";
import { SharePortfolioButton } from "@/components/SharePortfolioButton";
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
  const blogPosts = contentService.getBlog();
  const skills = contentService.getSkills();
  const certifications = contentService.getCertifications();
  const competencies = contentService.getCompetencies();
  const awards = contentService.getAwards();
  const openSourceGroups = contentService.getOpenSourceByPlatform();
  const skillGroupBadges: Record<string, string> = {
    Platforms: "PL",
    "Languages & Frameworks": "LF",
    "Architecture & Delivery": "AD",
  };
  const coreSkills = ["iOS", "Android", "Cross-Platform Mobile - .NET MAUI", "Kotlin Multiplatform (KMP)"];

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
        <SharePortfolioButton compact />
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
          <div className="projects-magazine">
            <div className="project-secondary-list">
              {projects.map((project) => (
                <article key={project.name} className="project-secondary-item">
                  <div className="project-secondary-main">
                    <h4>{project.name}</h4>
                    <p className="project-summary">{project.summary}</p>
                    <div className="project-tech-wrap">
                      {project.technologies.map((technology) => (
                        <span key={technology} className="project-tech-chip">
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-actions">
                    {project.appStoreUrl && (
                      <a
                        href={project.appStoreUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-store-btn"
                        data-analytics-id={`${project.name}-app-store`}
                        data-analytics-label={`${project.name}: App Store`}
                      >
                        App Store
                      </a>
                    )}
                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-store-btn"
                        data-analytics-id={`${project.name}-play-store`}
                        data-analytics-label={`${project.name}: Play Store`}
                      >
                        Play Store
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <OpenSourceSection groups={openSourceGroups} />

        <Section id="skills" title="MySkills">
          <div className="skills-market">
            <article className="skills-highlight">
              <p className="skills-kicker">Core Stack</p>
              <div className="skills-core-wrap">
                {coreSkills.map((skill) => (
                  <span key={skill} className="skills-core-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </article>

            <div className="skills-showcase">
              {skills.map((group) => (
                <article key={group.title} className="skills-panel">
                  <div className="skills-panel-head">
                    <div className="skills-title-wrap">
                      <span className="skills-badge" aria-hidden="true">
                        {skillGroupBadges[group.title] ?? "SK"}
                      </span>
                      <h4>{group.title}</h4>
                    </div>
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

            <div id="competencies" className="skills-subheading">
              <h4>Core Competencies</h4>
              <div className="competencies-grid">
                {competencies.map((item) => (
                  <span key={item.label} className="competency-chip">
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="certifications" title="Certifications">
          <div className="certifications-showcase">
            {certifications.map((certification) => (
              <article key={certification.name} className="certification-item">
                <span className="certification-icon" aria-hidden="true">
                  ◆
                </span>
                <div className="certification-body">
                  <h4>{certification.name}</h4>
                  <p>{certification.issuer}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <AwardsSection awards={awards} />

        <Section id="contact" title="Hire Me">
          <div className="hireme-shell">
            <h4 className="hireme-headline">Let's Build Your Next App</h4>
            <p className="hireme-subtitle">
              I am currently open to full-time roles, remote opportunities,
              mobile app training engagements, and part-time consulting
              assignments.
            </p>

            <article className="hireme-card">
              <p className="hireme-item">
                <span className="hireme-item-icon" aria-hidden="true">
                  ✉
                </span>
                <span className="hireme-item-body">
                  <span className="hireme-label">Email</span>
                  <a href={`mailto:${profile.email}`} className="hireme-value-link">
                    {profile.email}
                  </a>
                </span>
              </p>

              <p className="hireme-item">
                <span className="hireme-item-icon" aria-hidden="true">
                  ☎
                </span>
                <span className="hireme-item-body">
                  <span className="hireme-label">Phone</span>
                  <a
                    href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                    className="hireme-value-link"
                  >
                    {profile.phone}
                  </a>
                </span>
              </p>

              <p className="hireme-item">
                <span className="hireme-item-icon" aria-hidden="true">
                  📍
                </span>
                <span className="hireme-item-body">
                  <span className="hireme-label">Location</span>
                  <span className="hireme-value">{profile.location}</span>
                </span>
              </p>

              <div className="hireme-actions">
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hireme-btn hireme-btn-linkedin"
                >
                  View LinkedIn Profile
                </a>
                <a
                  href={profile.stackOverflowUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hireme-btn hireme-btn-stackoverflow"
                >
                  View Stack Overflow Profile
                </a>
              </div>

              <a href={`mailto:${profile.email}`} className="hireme-btn hireme-btn-email">
                Send Email
              </a>
            </article>
          </div>
        </Section>

        <Section id="blog" title="Blog">
          <div className="blog-list">
            {blogPosts.map((post, index) => (
              <article key={post.url} className="blog-item">
                <div className="blog-item-head">
                  <span className="blog-row-number">{String(index + 1).padStart(2, "0")}</span>
                  <h4>{post.title}</h4>
                </div>
                <p>{post.description}</p>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                  data-analytics-id={post.title}
                  data-analytics-label={`Blog: ${post.title}`}
                >
                  Read post
                </a>
              </article>
            ))}
          </div>
        </Section>
      </div>

    </main>
  );
}
