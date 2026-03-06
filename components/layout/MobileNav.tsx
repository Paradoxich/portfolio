"use client";

import Link from "next/link";
import * as React from "react";
import { useHireDrawer } from "@/components/HireDrawerContext";

export function MobileNav() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const { openHireDrawer } = useHireDrawer();

  React.useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  return (
    <>
      <header className="md:hidden sticky top-0 z-50 flex items-center justify-between px-4 py-4 border-b border-color-border bg-color-bg">
        <Link href="/" className="type-body-strong text-color-text-primary">
          Ana Beverin
        </Link>
        <div className="flex items-center gap-2">
          <button
            onClick={openHireDrawer}
            className="type-body-sm text-color-text-secondary hover:text-color-text-primary px-3 py-2"
          >
            Let&apos;s chat
          </button>
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 text-color-text-secondary hover:text-color-text-primary"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 z-[60] bg-[rgba(0,0,0,0.5)]"
          onClick={() => setSidebarOpen(false)}
          aria-hidden
        />
      )}
      <aside
        className={`md:hidden fixed top-0 left-0 bottom-0 w-[280px] max-w-[85vw] bg-color-bg border-r border-color-border z-[61] transform transition-transform duration-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <span className="type-body-strong text-color-text-primary">Menu</span>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 -mr-2 text-color-text-secondary hover:text-color-text-primary"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-1">
            {[
              { href: "/", label: "Overview" },
              { href: "/projects", label: "Projects" },
              { href: "/illustrations", label: "Illustrations" },
              { href: "/experiments", label: "Experiments" },
              { href: "/notes", label: "Notes" },
              { href: "/testimonials", label: "Testimonials" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setSidebarOpen(false)}
                className="px-3 py-2 rounded-lg text-color-text-secondary hover:text-color-text-primary hover:bg-color-bg-muted type-body-sm"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 pt-6 border-t border-color-border">
            <a
              href="https://www.linkedin.com/in/paradoxich/"
              target="_blank"
              rel="noreferrer"
              className="block py-2 type-body-sm text-color-text-secondary hover:text-color-text-primary"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/paradoxich/"
              target="_blank"
              rel="noreferrer"
              className="block py-2 type-body-sm text-color-text-secondary hover:text-color-text-primary"
            >
              Instagram
            </a>
            <a href="/cv.pdf" className="block py-2 type-body-sm text-color-text-secondary hover:text-color-text-primary">
              CV
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
