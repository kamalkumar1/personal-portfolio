"use client";

import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/Header";

function setHeaderOffset(height: number) {
  const offset = `${height}px`;
  document.documentElement.style.setProperty("--header-sticky-height", offset);
  document.documentElement.style.setProperty("--scroll-anchor-offset", offset);
}

export function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const update = () => {
      setScrolled(window.scrollY > 48);
      setHeaderOffset(header.offsetHeight);
    };

    update();

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(header);

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return <Header ref={headerRef} variant="hero" scrolled={scrolled} />;
}
