"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = React.useState(false);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setHasScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 py-5">
      <div className="layout-container flex items-center justify-center md:justify-between">
        <Link 
          href="/" 
          className={`text-color-text-secondary hidden md:block transition-opacity duration-200 ${
            hasScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          Hi, I'm Ana
        </Link>

        <div 
          className={`nav-pill transition-shadow duration-200 ${
            hasScrolled ? "shadow-lg" : ""
          }`}
          style={hasScrolled ? {
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          } : {}}
        >
          <Link
            href="/"
            className={isActive("/") ? "nav-link-active" : "nav-link"}
          >
            About
          </Link>

          <Link
            href="/projects"
            className={isActive("/projects") ? "nav-link-active" : "nav-link"}
          >
            Projects
          </Link>

          <Link
            href="/illustrations"
            className={
              isActive("/illustrations") ? "nav-link-active" : "nav-link"
            }
          >
            Graphics
          </Link>

          <Link href="/#contact" className="nav-link">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
