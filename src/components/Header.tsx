import { heroNavItems, navItems } from "@/constants/site";

interface HeaderProps {
  variant?: "default" | "hero";
}

export function Header({ variant = "default" }: HeaderProps) {
  const isHero = variant === "hero";
  const items = isHero ? heroNavItems : navItems;

  return (
    <header className={isHero ? "header header-hero" : "header"}>
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
        <ul className={isHero ? "nav-list nav-list-hero" : "nav-list"}>
          {items.map((item, index) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`nav-link ${isHero ? "nav-link-hero" : ""} ${
                  isHero && index === 0 ? "nav-link-hero-active" : ""
                }`}
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
}
