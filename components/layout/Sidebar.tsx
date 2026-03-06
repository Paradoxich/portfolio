"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useHireDrawer } from "@/components/HireDrawerContext";
import * as React from "react";
import {
  FaceSmile,
  Projects,
  FountainPen,
  LabExperiment,
  Notes,
  Heart,
  Dropdown,
  ArrowOutward,
  ArrowDown,
  Copy,
  ArrowRight,
} from "@/components/icons";

function ProfileAvatar() {
  const [useFallback, setUseFallback] = React.useState(false);
  if (useFallback) {
    return (
      <span className="flex w-6 h-6 shrink-0 items-center justify-center rounded-full text-[12px] font-medium bg-color-border-secondary text-color-text-secondary">
        A
      </span>
    );
  }
  return (
    <Image
      src="/ana-profile.png"
      alt="Ana Beverin"
      width={24}
      height={24}
      className="h-6 w-6 shrink-0 rounded-full object-cover"
      onError={() => setUseFallback(true)}
    />
  );
}

const navSections = [
  [
    { href: "/", label: "Overview", Icon: FaceSmile },
    { href: "/projects", label: "Projects", Icon: Projects },
  ],
  [
    { href: "/illustrations", label: "Illustrations", Icon: FountainPen },
    { href: "/experiments", label: "Experiments", Icon: LabExperiment },
  ],
  [
    { href: "/notes", label: "Notes", Icon: Notes },
    { href: "/testimonials", label: "Testimonials", Icon: Heart },
  ],
];


function NavDivider() {
  return (
    <div className="py-2" role="separator">
      <div className="h-px w-full bg-color-10" />
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
      className="flex items-center w-full h-8 pl-2 rounded-[8px] hover:bg-color-bg-muted transition-colors font-geist"
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
  const pathname = usePathname();
  const { openHireDrawer } = useHireDrawer();
  const [profileMenuOpen, setProfileMenuOpen] = React.useState(false);
  const profileRef = React.useRef<HTMLDivElement>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const copyEmail = React.useCallback(() => {
    navigator.clipboard.writeText("ana.beverin@gmail.com");
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
      className="sidebar hidden md:flex fixed left-0 top-0 bottom-0 w-[230px] flex-col z-40 bg-color-bg border-r border-color-10"
    >
      <div className="flex flex-col h-full p-2 gap-4 overflow-y-auto">
        {/* Profile + dropdown */}
        <div className="relative shrink-0" ref={profileRef}>
          <button
            type="button"
            onClick={() => setProfileMenuOpen((o) => !o)}
            className="flex items-center gap-0 w-full text-left text-color-text-primary hover:text-color-text-primary transition-colors"
          >
            <span className="flex w-12 h-12 shrink-0 items-center justify-center aspect-square">
              <ProfileAvatar />
            </span>
            <span className="truncate flex-1 font-geist type-body-sm font-medium text-color-text-primary">
              Ana Beverin
            </span>
            <span
              className={`flex w-8 h-8 shrink-0 items-center justify-center rounded-[8px] text-color-text-secondary transition-colors hover:bg-color-bg-muted hover:text-color-text-primary ${
                profileMenuOpen ? "bg-color-bg-muted text-color-text-primary" : ""
              }`}
            >
              <Dropdown
                className={`transition-transform ${profileMenuOpen ? "rotate-180" : ""}`}
                size={16}
              />
            </span>
          </button>

          {profileMenuOpen && (
            <div
              className="absolute left-0 top-full mt-1 flex flex-col items-stretch z-50 w-[226px] p-2 gap-0.5 rounded-surface border border-color-10 bg-color-bg"
            >
              <ProfileMenuItem
                href="https://www.linkedin.com/in/paradoxich/"
                label="Linkedin"
                Icon={ArrowOutward}
                external
                onClose={() => setProfileMenuOpen(false)}
              />
              <ProfileMenuItem
                href="https://www.instagram.com/paradoxich/"
                label="Instagram"
                Icon={ArrowOutward}
                external
                onClose={() => setProfileMenuOpen(false)}
              />
              <NavDivider />
              <ProfileMenuItem
                href="/cv.pdf"
                label="CV"
                Icon={ArrowDown}
                external={false}
                onClose={() => setProfileMenuOpen(false)}
              />
              <NavDivider />
              <button
                type="button"
                onClick={copyEmail}
                className="flex items-center w-full h-8 pl-2 rounded-[8px] text-left hover:bg-color-bg-muted transition-colors font-geist"
              >
                <span className="truncate flex-1 min-w-0 type-body-sm text-color-text-primary">
                  ana.beverin@gmail.com
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
          {navSections.map((section, i) => (
            <React.Fragment key={i}>
              {i > 0 && <NavDivider />}
              {section.map(({ href, label, Icon }) => {
                const active = isActive(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`group flex items-center gap-0 w-full h-12 rounded-[8px] transition-colors ${
                      active
                        ? "bg-color-bg-muted text-color-90"
                        : "text-color-text-secondary hover:bg-color-bg-muted hover:text-color-90"
                    }`}
                  >
                    <span className="flex w-12 h-12 shrink-0 items-center justify-center [&>svg]:text-current">
                      <Icon size={20} />
                    </span>
                    <span
                      className={`type-body-sm truncate flex-1 min-w-0 ${
                        active
                          ? "text-color-90"
                          : "text-color-text-secondary group-hover:text-color-90"
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
            className="group flex w-full items-center justify-between overflow-hidden rounded-full py-2 pl-4 pr-2 transition-colors duration-300 ease-in-out bg-color-bg hover:bg-color-bg-surface border border-color-border-secondary"
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
