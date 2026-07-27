"use client";

import Link from "next/link";
import * as React from "react";
import { useHireDrawer } from "@/components/contact/HireDrawerContext";
import { ProfileAvatar } from "./ProfileAvatar";
import { NAV_SECTIONS } from "./nav.config";
import { useIsActive } from "./useIsActive";

export function MobileNav() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const { openHireDrawer } = useHireDrawer();
  const isActive = useIsActive();

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
      <header className="md:hidden print:hidden flex items-center justify-between px-4 py-4 border-b border-color-border-inset bg-color-bg">
        <Link href="/" className="flex items-center gap-2">
          <ProfileAvatar />
          <span className="type-body-sm font-medium text-color-text-primary">
            Ana Beverin
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <button
            onClick={openHireDrawer}
            className="inline-flex items-center h-8 px-3 rounded-full border border-color-border-secondary type-body-sm font-medium text-color-text-primary"
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
        className={`md:hidden print:hidden fixed inset-x-0 bottom-0 max-h-[80vh] bg-color-bg border-t border-color-border-inset z-[61] transform transition-transform duration-200 rounded-t-card ${
          sidebarOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="px-4 py-2 flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <span className="type-body-sm text-color-text-primary">Menu</span>
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
            {NAV_SECTIONS.flat().map(({ href, label, Icon }) => {
              const active = isActive(href);

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setSidebarOpen(false)}
                  className={`group flex items-center w-full h-10 rounded-sm px-0 transition-colors ${
                    active
                      ? "bg-color-nav-item-bg-active text-color-nav-item-fg-active"
                      : "text-color-nav-item-fg hover:bg-color-nav-item-bg-hover hover:text-color-nav-item-fg-active focus:bg-color-nav-item-bg-hover focus-visible:bg-color-nav-item-bg-hover"
                  }`}
                >
                  <span className="flex w-10 h-10 shrink-0 items-center justify-center [&>svg]:text-current">
                    <Icon size={20} />
                  </span>
                  <span
                    className={`type-body-sm truncate flex-1 min-w-0 ${
                      active
                        ? "text-color-nav-item-fg-active"
                        : "text-color-nav-item-fg group-hover:text-color-nav-item-fg-active"
                    }`}
                  >
                    {label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
