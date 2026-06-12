import { forwardRef } from "react";
import { heroNavItems, navItems } from "@/constants/site";

interface HeaderProps {
  variant?: "default" | "hero";
  scrolled?: boolean;
}

export const Header = forwardRef<HTMLElement, HeaderProps>(function Header(
  { variant = "default", scrolled = false },
  ref,
) {
  const isHero = variant === "hero";
  const items = isHero ? heroNavItems : navItems;

  const headerClass = [
    "header",
    "header-sticky",
    isHero ? "header-hero" : "",
    isHero && scrolled ? "header-scrolled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header ref={ref} className={headerClass}>
      <a href="#about" className={isHero ? "hero-logo" : "brand"}>
        {isHero ? (
          "KAMAL"
        ) : (
          <>
            <span className="brand-dot" />
            <div>
              <p className="brand-name">Kamal Kumar</p>
              <p className="brand-role">Mobile Architect</p>
            </div>
          </>
        )}
      </a>

      <nav aria-label="Primary">
        <ul className={isHero ? "nav-list-hero" : "nav-list"}>
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`nav-link ${isHero ? "nav-link-hero" : ""}`}
                data-analytics-id={item.id}
                data-analytics-label={`Nav: ${item.label}`}
              >
                {isHero ? item.label.toUpperCase() : item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {!isHero ? (
        <a href="#contact" className="nav-cta">
          Hire Me
        </a>
      ) : null}
    </header>
  );
});
