import { navItems } from "@/constants/site";

export function Header() {
  return (
    <header className="header">
      <div className="brand">
        <span className="brand-dot" />
        <div>
          <p className="brand-name">Kamal Kumar</p>
          <p className="brand-role">Mobile Architect</p>
        </div>
      </div>
      <nav>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={item.href} className="nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a href="#contact" className="nav-cta">
        Hire Me
      </a>
    </header>
  );
}
