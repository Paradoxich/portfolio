"use client";

import Link from "next/link";
import { useHireDrawer } from "@/components/contact/HireDrawerContext";
import { ThemeSwitcherCompact } from "@/components/theme/ColorSchemeProvider";
import { CheckmarkCircle, LocationPin, Globe } from "@/components/icons";
import {
  FOOTER_PORTFOLIO_LINKS,
  FOOTER_SOCIAL_LINKS,
  type FooterLink,
} from "./footer.config";

const itemClass =
  "type-body-sm tracking-tight text-color-text-secondary hover:text-color-text-primary transition-colors";

function FooterColumn({
  title,
  links,
  children,
}: {
  title: string;
  links: FooterLink[];
  children?: React.ReactNode;
}) {
  return (
    <div className="flex min-w-[100px] flex-col gap-md">
      <p className="type-body-sm font-medium tracking-tight text-color-text-primary">
        {title}
      </p>
      {links.map((link) =>
        link.external ? (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={itemClass}
          >
            {link.label}
          </a>
        ) : (
          <Link key={link.label} href={link.href} className={itemClass}>
            {link.label}
          </Link>
        )
      )}
      {children}
    </div>
  );
}

function Chip({ Icon, label }: { Icon: React.ComponentType<{ size?: number }>; label: string }) {
  return (
    <span className="inline-flex h-7 items-center gap-1 rounded-sm bg-color-bg-muted pl-1 pr-2 text-color-text-secondary">
      <Icon size={20} />
      <span className="type-body-sm tracking-tight">{label}</span>
    </span>
  );
}

export function SiteFooter() {
  const { openHireDrawer } = useHireDrawer();

  return (
    <footer className="w-full border-t border-color-border-inset">
      <div className="mx-auto w-full max-w-[1512px]">
        <div className="flex flex-col gap-2xl px-xl py-6xl md:flex-row md:items-start md:justify-between md:px-section">
          <div className="flex gap-6xl md:w-[583px] md:gap-lg">
            <div className="flex-1">
              <FooterColumn title="Portfolio" links={FOOTER_PORTFOLIO_LINKS}>
                <button
                  type="button"
                  onClick={openHireDrawer}
                  className={`${itemClass} self-start text-left`}
                >
                  Contact
                </button>
              </FooterColumn>
            </div>
            <div className="flex-1">
              <FooterColumn title="Links" links={FOOTER_SOCIAL_LINKS} />
            </div>
          </div>

          <div className="flex flex-wrap items-start gap-1">
            <Chip Icon={CheckmarkCircle} label="Available for work" />
            <Chip Icon={LocationPin} label="Croatia" />
            <Chip Icon={Globe} label="Remote" />
          </div>
        </div>
      </div>

      <div className="border-t border-color-border-inset">
        <div className="mx-auto flex w-full max-w-[1512px] flex-wrap items-center justify-between gap-md px-xl py-lg md:px-section">
          <span className="inline-flex h-7 items-center gap-sm rounded-pill border border-color-border-subtle px-md">
            <span className="size-1 shrink-0 rounded-full bg-color-success" aria-hidden />
            <span className="type-body-sm tracking-tight text-color-text-secondary">
              All systems mostly normal
            </span>
          </span>
          <ThemeSwitcherCompact />
        </div>
      </div>
    </footer>
  );
}
