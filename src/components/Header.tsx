"use client";

import { forwardRef, useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { heroNavItems, navItems } from "@/constants/site";
import type { NavItem } from "@/domain/models";

interface HeaderProps {
  variant?: "default" | "hero";
  scrolled?: boolean;
}

const OVERFLOW_BUTTON_WIDTH = 28;
const NAV_LIST_HORIZONTAL_PADDING = 12;

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

function OverflowMenuButton({
  menuId,
  menuOpen,
  linkClassName,
  onToggle,
}: {
  menuId: string;
  menuOpen: boolean;
  linkClassName: string;
  onToggle: () => void;
}) {
  return (
    <li className="nav-overflow-item">
      <button
        type="button"
        id={`${menuId}-trigger`}
        className={`nav-overflow-toggle ${linkClassName}`}
        aria-expanded={menuOpen}
        aria-controls={menuId}
        aria-haspopup="true"
        aria-label={menuOpen ? "Close more navigation links" : "Show more navigation links"}
        data-analytics-event="nav_menu_toggle_clicked"
        data-analytics-label={menuOpen ? "Nav: Close overflow menu" : "Nav: Open overflow menu"}
        onClick={onToggle}
      >
        <span className="nav-overflow-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
    </li>
  );
}

function calculateVisibleItemCount(
  measureList: HTMLUListElement,
  availableWidth: number,
  dotsButtonWidth: number,
): number {
  const items = Array.from(measureList.children) as HTMLElement[];
  if (items.length === 0 || availableWidth <= 0) {
    return 0;
  }

  const listStyles = window.getComputedStyle(measureList);
  const listPadding = parseFloat(listStyles.paddingLeft) + parseFloat(listStyles.paddingRight);
  const gap = Number.parseFloat(listStyles.gap || "4") || 4;
  const itemWidths = items.map((item) => item.getBoundingClientRect().width);

  let totalWidth = listPadding;
  for (let index = 0; index < itemWidths.length; index += 1) {
    totalWidth += (index > 0 ? gap : 0) + itemWidths[index];
  }

  if (totalWidth <= availableWidth) {
    return items.length;
  }

  let usedWidth = listPadding;
  let visibleCount = 0;

  for (let index = 0; index < itemWidths.length; index += 1) {
    const itemGap = visibleCount > 0 ? gap : 0;
    const remainingAfterThis = itemWidths.length - (visibleCount + 1);
    const dotsReserve = remainingAfterThis > 0 ? dotsButtonWidth + gap : 0;
    const nextWidth = usedWidth + itemGap + itemWidths[index] + dotsReserve;

    if (nextWidth <= availableWidth) {
      usedWidth += itemGap + itemWidths[index];
      visibleCount += 1;
    } else {
      break;
    }
  }

  return visibleCount;
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
  const [visibleItemCount, setVisibleItemCount] = useState(items.length);

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

  const updateVisibleItems = useCallback(() => {
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

    const availableForNav =
      header.clientWidth - horizontalPadding - logoWidth - gap - ctaReserve - NAV_LIST_HORIZONTAL_PADDING;

    const nextVisibleCount = calculateVisibleItemCount(
      measureList,
      availableForNav,
      OVERFLOW_BUTTON_WIDTH,
    );

    setVisibleItemCount(nextVisibleCount);
    if (nextVisibleCount >= items.length) {
      setMenuOpen(false);
    }
  }, [isHero, items.length]);

  useLayoutEffect(() => {
    updateVisibleItems();
  }, [items, updateVisibleItems]);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) {
      return;
    }

    const resizeObserver = new ResizeObserver(updateVisibleItems);
    resizeObserver.observe(header);

    window.addEventListener("resize", updateVisibleItems);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateVisibleItems);
    };
  }, [updateVisibleItems]);

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

  const hasOverflow = visibleItemCount < items.length;
  const inlineItems = hasOverflow ? items.slice(0, visibleItemCount) : items;
  const overflowItems = hasOverflow ? items.slice(visibleItemCount) : [];

  const headerClass = [
    "header",
    "header-sticky",
    isHero ? "header-hero" : "",
    isHero && scrolled ? "header-scrolled" : "",
    hasOverflow ? "has-nav-overflow" : "",
    menuOpen ? "is-nav-menu-open" : "",
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

      <nav className="nav-inline" aria-label="Primary">
        <ul className={listClassName}>
          <NavLinks items={inlineItems} isHero={isHero} linkClassName={linkClassName} />
          {hasOverflow ? (
            <OverflowMenuButton
              menuId={menuId}
              menuOpen={menuOpen}
              linkClassName={linkClassName}
              onToggle={() => setMenuOpen((open) => !open)}
            />
          ) : null}
        </ul>
      </nav>

      {!isHero && !hasOverflow ? (
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

      {hasOverflow && menuOpen ? (
        <nav id={menuId} className="nav-dropdown" aria-label="More navigation links">
          <ul className="nav-dropdown-list">
            <NavLinks
              items={overflowItems}
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
