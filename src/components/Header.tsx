"use client";

import { forwardRef, useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { heroNavItems, navItems } from "@/constants/site";
import type { NavItem } from "@/domain/models";

interface HeaderProps {
  variant?: "default" | "hero";
  scrolled?: boolean;
}

function NavLinks({
  items,
  isHero,
  linkClassName,
  onNavigate,
}: {
  items: NavItem[];
  isHero: boolean;
  linkClassName: string;
  onNavigate?: () => void;
}) {
  return (
    <>
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            className={linkClassName}
            data-analytics-id={item.id}
            data-analytics-label={`Nav: ${item.label}`}
            onClick={onNavigate}
          >
            {isHero ? item.label.toUpperCase() : item.label}
          </a>
        </li>
      ))}
    </>
  );
}

export const Header = forwardRef<HTMLElement, HeaderProps>(function Header(
  { variant = "default", scrolled = false },
  ref,
) {
  const isHero = variant === "hero";
  const items = isHero ? heroNavItems : navItems;
  const menuId = useId();

  const headerRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const measureRef = useRef<HTMLUListElement>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [useDropdown, setUseDropdown] = useState(false);

  const setHeaderRef = useCallback(
    (node: HTMLElement | null) => {
      headerRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    },
    [ref],
  );

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const updateNavMode = useCallback(() => {
    const header = headerRef.current;
    const measureList = measureRef.current;
    const logo = logoRef.current;

    if (!header || !measureList || !logo) {
      return;
    }

    const headerStyles = window.getComputedStyle(header);
    const horizontalPadding =
      parseFloat(headerStyles.paddingLeft) + parseFloat(headerStyles.paddingRight);
    const logoWidth = logo.offsetWidth;
    const ctaReserve = isHero ? 0 : 112;
    const gap = 12;

    const navNeededWidth = measureList.scrollWidth;
    const availableForInlineNav =
      header.clientWidth - horizontalPadding - logoWidth - gap - ctaReserve;

    const shouldUseDropdown = navNeededWidth > availableForInlineNav;

    setUseDropdown(shouldUseDropdown);
    if (!shouldUseDropdown) {
      setMenuOpen(false);
    }
  }, [isHero]);

  useLayoutEffect(() => {
    updateNavMode();
  }, [items, updateNavMode]);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) {
      return;
    }

    const resizeObserver = new ResizeObserver(updateNavMode);
    resizeObserver.observe(header);

    window.addEventListener("resize", updateNavMode);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateNavMode);
    };
  }, [updateNavMode]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Node) || headerRef.current?.contains(target)) {
        return;
      }
      closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [closeMenu, menuOpen]);

  const headerClass = [
    "header",
    "header-sticky",
    isHero ? "header-hero" : "",
    isHero && scrolled ? "header-scrolled" : "",
    useDropdown ? "is-nav-dropdown" : "",
    useDropdown && menuOpen ? "is-nav-menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const listClassName = isHero ? "nav-list-hero" : "nav-list";
  const linkClassName = `nav-link ${isHero ? "nav-link-hero" : ""}`;

  return (
    <header ref={setHeaderRef} className={headerClass}>
      <a
        ref={logoRef}
        href="#about"
        className={isHero ? "hero-logo" : "brand"}
        data-analytics-event="nav_logo_clicked"
        data-analytics-label="Nav: Logo"
        onClick={closeMenu}
      >
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

      {useDropdown ? (
        <button
          type="button"
          className="nav-menu-toggle"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          data-analytics-event="nav_menu_toggle_clicked"
          data-analytics-label={menuOpen ? "Nav: Close menu" : "Nav: Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-menu-toggle-icon" aria-hidden="true">
            {menuOpen ? "✕" : "☰"}
          </span>
          <span className="nav-menu-toggle-text">{menuOpen ? "Close" : "Menu"}</span>
        </button>
      ) : null}

      <nav className="nav-inline" aria-label="Primary">
        <ul className={listClassName}>
          <NavLinks items={items} isHero={isHero} linkClassName={linkClassName} />
        </ul>
      </nav>

      {!isHero && !useDropdown ? (
        <a
          href="#contact"
          className="nav-cta"
          data-analytics-event="hire_me_clicked"
          data-analytics-label="Nav: Hire Me CTA"
          data-analytics-id="contact"
        >
          Hire Me
        </a>
      ) : null}

      {useDropdown && menuOpen ? (
        <nav id={menuId} className="nav-dropdown" aria-label="Primary mobile">
          <ul className="nav-dropdown-list">
            <NavLinks
              items={items}
              isHero={isHero}
              linkClassName={`${linkClassName} nav-dropdown-link`}
              onNavigate={closeMenu}
            />
            {!isHero ? (
              <li className="nav-dropdown-cta-item">
                <a
                  href="#contact"
                  className="nav-cta nav-dropdown-cta"
                  data-analytics-event="hire_me_clicked"
                  data-analytics-label="Nav: Hire Me CTA"
                  data-analytics-id="contact"
                  onClick={closeMenu}
                >
                  Hire Me
                </a>
              </li>
            ) : null}
          </ul>
        </nav>
      ) : null}

      <div className="nav-measure" aria-hidden="true">
        <ul ref={measureRef} className={`${listClassName} nav-measure-list`}>
          <NavLinks items={items} isHero={isHero} linkClassName={linkClassName} />
        </ul>
      </div>
    </header>
  );
});
