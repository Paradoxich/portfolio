"use client";

import Link from "next/link";
import { useHireDrawer } from "@/components/contact/HireDrawerContext";
import * as React from "react";
import {
  Dropdown,
  ArrowOutward,
  ArrowDown,
  Copy,
  ArrowRight,
} from "@/components/icons";
import { ProfileAvatar } from "./ProfileAvatar";
import { NAV_SECTIONS } from "./nav.config";
import { useIsActive } from "./useIsActive";
import { CONTACT_EMAIL } from "@/lib/constants";

function NavDivider() {
  return (
    <div className="py-2" role="separator">
      <div className="h-px w-full bg-color-border-inset" />
    </div>
  );
}

function ProfileMenuItem({
  href,
  label,
  Icon,
  external,
  onClose,
}: {
  href: string;
  label: string;
  Icon: React.ComponentType<{ size?: number }>;
  external: boolean;
  onClose: () => void;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      onClick={onClose}
      className="flex items-center w-full h-8 pl-2 rounded-sm hover:bg-color-bg-muted focus:bg-color-bg-muted focus-visible:bg-color-bg-muted transition-colors font-geist"
    >
      <span className="truncate flex-1 min-w-0 type-body-sm text-color-text-primary">
        {label}
      </span>
      <span className="shrink-0 flex items-center justify-center w-8 h-8 text-color-text-primary">
        <Icon size={20} />
      </span>
    </a>
  );
}

export function Sidebar() {
  const isActive = useIsActive();
  const { openHireDrawer } = useHireDrawer();
  const [profileMenuOpen, setProfileMenuOpen] = React.useState(false);
  const profileRef = React.useRef<HTMLDivElement>(null);

  const copyEmail = React.useCallback(() => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setProfileMenuOpen(false);
  }, []);

  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileMenuOpen(false);
      }
    }
    if (profileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [profileMenuOpen]);

  return (
    <aside
      className="sidebar hidden md:flex fixed left-0 top-0 bottom-0 w-[230px] flex-col z-40 bg-color-bg border-r border-color-border-inset"
    >
      <div className="flex flex-col h-full p-2 gap-4 overflow-visible">
        {/* Profile + dropdown */}
        <div className="relative shrink-0" ref={profileRef}>
          <div className="flex items-center gap-0 w-full text-color-text-primary">
            <Link
              href="/"
              className="flex items-center gap-0 flex-1 min-w-0 hover:text-color-text-primary transition-colors"
            >
              <span className="flex w-12 h-12 shrink-0 items-center justify-center aspect-square">
                <ProfileAvatar border />
              </span>
              <span className="truncate font-geist type-body-sm font-medium text-color-text-primary">
                Ana Beverin
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setProfileMenuOpen((o) => !o)}
              className={`flex w-8 h-8 shrink-0 items-center justify-center rounded-sm text-color-text-secondary transition-colors hover:bg-color-bg-muted hover:text-color-text-primary ${
                profileMenuOpen ? "bg-color-bg-muted text-color-text-primary" : ""
              }`}
              aria-label="Open profile menu"
            >
              <Dropdown
                className={`transition-transform ${profileMenuOpen ? "rotate-180" : ""}`}
                size={16}
              />
            </button>
          </div>

          {profileMenuOpen && (
            <div
              className="absolute left-0 top-full mt-1 flex flex-col items-stretch z-[60] w-[226px] p-2 gap-0.5 rounded-surface border border-color-border-subtle bg-color-bg"
            >
              <ProfileMenuItem
                href="https://www.linkedin.com/in/paradoxich/"
                label="Linkedin"
                Icon={ArrowOutward}
                external
                onClose={() => setProfileMenuOpen(false)}
              />
              <ProfileMenuItem
                href="https://github.com/Paradoxich"
                label="GitHub"
                Icon={ArrowOutward}
                external
                onClose={() => setProfileMenuOpen(false)}
              />
              <NavDivider />
              <ProfileMenuItem
                href="/docs/CV-Beverin-2026.pdf"
                label="CV"
                Icon={ArrowDown}
                external={false}
                onClose={() => setProfileMenuOpen(false)}
              />
              <NavDivider />
              <button
                type="button"
                onClick={copyEmail}
                className="flex items-center w-full h-8 pl-2 rounded-sm text-left hover:bg-color-bg-muted focus:bg-color-bg-muted focus-visible:bg-color-bg-muted transition-colors font-geist"
              >
                <span className="truncate flex-1 min-w-0 type-body-sm text-color-text-primary">
                  {CONTACT_EMAIL}
                </span>
                <span className="shrink-0 flex items-center justify-center w-8 h-8 text-color-text-primary">
                  <Copy size={20} />
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1">
          {NAV_SECTIONS.map((section, i) => (
            <React.Fragment key={i}>
              {i > 0 && <NavDivider />}
              {section.map(({ href, label, Icon }) => {
                const active = isActive(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`group flex items-center gap-0 w-full h-12 rounded-sm transition-colors ${
                      active
                        ? "bg-color-nav-item-bg-active text-color-nav-item-fg-active"
                        : "text-color-nav-item-fg hover:bg-color-nav-item-bg-hover hover:text-color-nav-item-fg-active focus:bg-color-nav-item-bg-hover focus-visible:bg-color-nav-item-bg-hover"
                    }`}
                  >
                    <span className="flex w-12 h-12 shrink-0 items-center justify-center [&>svg]:text-current">
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
            </React.Fragment>
          ))}
        </nav>

        {/* Let's chat */}
        <div className="mt-auto shrink-0 pt-4">
          <button
            onClick={openHireDrawer}
            className="group flex w-full items-center justify-between overflow-hidden rounded-full py-2 pl-4 pr-2 transition-colors duration-300 ease-in-out bg-color-bg hover:bg-color-bg-surface border border-color-border"
          >
            <span className="shrink-0 truncate font-geist type-body-sm font-medium text-color-text-primary">
              Let&apos;s chat
            </span>
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-color-bg-surface border border-color-border-secondary text-color-text-primary transition-colors duration-300 ease-in-out group-hover:bg-color-bg"
            >
              <ArrowRight size={20} />
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}
