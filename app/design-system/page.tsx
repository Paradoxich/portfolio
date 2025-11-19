"use client";

import { useState, type ReactNode } from "react";
import {
  // foundations
  fontSizeTokens,
  spacingTokens,
  layoutTokens,
  lineHeightTokens,
  trackingTokens,
  fontWeightTokens,
  colorTokens,
  radiusTokens,
  layoutGridTokens,
  layoutColumnTokens,
  layoutContainerTokens,
  // utilities
  typeUtilities,
  colorUtilityTokens,
  spacingUtilityTokens,
  radiusUtilityTokens,
  surfaceUtilities,
} from "./tokens/index";

/* ================================
 * Tabs
 * ============================== */

type TabId = "foundations" | "utilities" | "components";

const tabs: { id: TabId; label: string }[] = [
  { id: "foundations", label: "Foundations" },
  { id: "utilities", label: "Utility" },
  { id: "components", label: "Components" },
];

/* ================================
 * Page
 * ============================== */

export default function DesignSystemPage() {
  const [activeTab, setActiveTab] = useState<TabId>("foundations");

  return (
    <main className="min-h-screen">
      <div className="layout-container py-10 md:py-16 space-y-6">
        {/* Header */}
        <header className="space-y-3">
          <h1 className="type-h1">Design System</h1>
          <p className="type-body max-w-xl">
            A small working design system for my portfolio – starting from
            foundations (tokens), through utilities, and eventually into
            components.
          </p>
        </header>

        {/* Tabs */}
        <div className="inline-flex items-center gap-1 rounded-full border border-color-border bg-color-bg-muted p-1">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`type-body-xs px-4 py-2 rounded-full transition ${
                  isActive
                    ? "bg-color-bg-surface text-color-text-primary"
                    : "text-color-text-secondary hover:text-color-text-primary hover:bg-color-bg"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        {activeTab === "foundations" && <FoundationsTab />}
        {activeTab === "utilities" && <UtilitiesTab />}
        {activeTab === "components" && <ComponentsTab />}
      </div>
    </main>
  );
}

/* ================================
 * Foundations
 * ============================== */

function FoundationsTab() {
  const allLayoutTokens = [
    ...layoutTokens,
    ...layoutGridTokens,
    ...layoutContainerTokens,
  ];

  return (
    <div className="space-y-8 md:space-y-10">
      {/* =========================
          TYPOGRAPHY (4 cols)
      ========================== */}
      <section className="card space-y-6">
        <SectionHeader
          label="Typography"
          description="Usage-agnostic type scale"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {[
            { title: "Font size", tokens: fontSizeTokens },
            { title: "Line height", tokens: lineHeightTokens },
            { title: "Tracking", tokens: trackingTokens },
            { title: "Font weight", tokens: fontWeightTokens },
          ].map((group) => (
            <div key={group.title} className="card rounded-xl p-4">
              <p className="type-body-sm mb-3 text-color-text-primary">
                {group.title}
              </p>
              <TokenTable title="" tokens={group.tokens} />
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          COLOR + RADIUS (2 cols)
      ========================== */}
      <section className="card space-y-6">
        <SectionHeader
          label="Color & Radius"
          description="Foundational visuals"
        />

        <div className="grid md:grid-cols-2 gap-gutter">
          {/* COLORS */}
          <div className="card rounded-xl p-4 space-y-4">
            <p className="type-body-sm text-color-text-primary">Color</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-color-border">
                    <Th>Token</Th>
                    <Th>Value</Th>
                    <Th align="right">Swatch</Th>
                  </tr>
                </thead>
                <tbody>
                  {colorTokens.map((c) => (
                    <tr
                      key={c.token}
                      className="border-b border-color-border last:border-0"
                    >
                      <Td>{c.token}</Td>
                      <Td>{c.value}</Td>
                      <Td align="right">
                        <span
                          className="inline-block h-4 w-4 rounded-full border border-color-border align-middle"
                          style={{ backgroundColor: c.value }}
                        />
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* RADIUS */}
          <div className="card rounded-xl p-4 space-y-4">
            <p className="type-body-sm text-color-text-primary">Radius</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-color-border">
                    <Th>Token</Th>
                    <Th>Value</Th>
                    <Th align="right">Preview</Th>
                  </tr>
                </thead>
                <tbody>
                  {radiusTokens.map((r) => (
                    <tr
                      key={r.token}
                      className="border-b border-color-border last:border-0"
                    >
                      <Td>{r.token}</Td>
                      <Td>{r.value}</Td>
                      <Td align="right">
                        <div
                          className="inline-block h-8 w-8 border border-color-border bg-color-bg-muted"
                          style={{ borderRadius: r.value }}
                        />
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SPACING + LAYOUT (2 cols)
      ========================== */}
      <section className="card space-y-6 mb-10">
        <SectionHeader
          label="Spacing & Layout"
          description="Structure + rhythm"
        />

        <div className="grid md:grid-cols-2 gap-gutter">
          {/* SPACING */}
          <div className="card rounded-xl p-4 space-y-4">
            <p className="type-body-sm text-color-text-primary">Spacing</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-color-border">
                    <Th>Token</Th>
                    <Th>Value</Th>
                    <Th align="right">Preview</Th>
                  </tr>
                </thead>
                <tbody>
                  {spacingTokens.map((s) => (
                    <tr
                      key={s.token}
                      className="border-b border-color-border last:border-0"
                    >
                      <Td>{s.token}</Td>
                      <Td>{s.value}</Td>
                      <Td align="right">
                        <div
                          className="inline-block h-2 border border-color-border bg-color-bg-muted"
                          style={{ width: s.value }}
                        />
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* LAYOUT TOKENS */}
          <div className="card rounded-xl p-4 space-y-4">
            <p className="type-body-sm text-color-text-primary">Layout</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-color-border">
                    <Th>Token</Th>
                    <Th>Value</Th>
                  </tr>
                </thead>
                <tbody>
                  {allLayoutTokens.map((t) => (
                    <tr
                      key={t.token}
                      className="border-b border-color-border last:border-0"
                    >
                      <Td>{t.token}</Td>
                      <Td>{t.value}</Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ================================
 * Utilities
 * ============================== */

function UtilitiesTab() {
  return (
    <div className="space-y-8 md:space-y-10">
      {/* Typography utilities */}
      <section className="card space-y-4">
        <SectionHeader
          label="Typography · utilities"
          description="Type styles composed from foundations"
        />

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-color-border">
                <Th>Name</Th>
                <Th>Role</Th>
                <Th>Uses tokens</Th>
                <Th>CSS</Th>
                <Th align="right">Preview</Th>
              </tr>
            </thead>
            <tbody>
              {typeUtilities.map((u) => (
                <tr
                  key={u.name}
                  className="border-b border-color-border last:border-0 align-top"
                >
                  <Td>{u.name}</Td>
                  <Td>{u.role}</Td>
                  <Td className="whitespace-pre-line">{u.tokens}</Td>
                  <Td className="whitespace-pre-line">{u.css}</Td>
                  <Td align="right">
                    <p className={u.previewClass}>Lazy dog.</p>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Color utilities */}
      <section className="card space-y-4">
        <SectionHeader
          label="Color · utilities"
          description="Usage-based aliases"
        />

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-color-border">
                <Th>Token</Th>
                <Th>Maps to</Th>
                <Th align="right">Preview</Th>
              </tr>
            </thead>
            <tbody>
              {colorUtilityTokens.map((c) => (
                <tr
                  key={c.token}
                  className="border-b border-color-border last:border-0"
                >
                  <Td>{c.token}</Td>
                  <Td>{c.mapsTo}</Td>
                  <Td align="right">
                    <span
                      className="inline-block h-4 w-4 rounded-full border border-color-border align-middle"
                      style={{ backgroundColor: c.preview }}
                    />
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Radius utilities */}
      <section className="card space-y-4">
        <SectionHeader
          label="Border radius · utilities"
          description="Usage-based corner styles"
        />

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-color-border">
                <Th>Token</Th>
                <Th>Maps to</Th>
                <Th align="right">Preview</Th>
              </tr>
            </thead>
            <tbody>
              {radiusUtilityTokens.map((r) => (
                <tr
                  key={r.token}
                  className="border-b border-color-border last:border-0"
                >
                  <Td>{r.token}</Td>
                  <Td>{r.mapsTo}</Td>
                  <Td align="right">
                    <div
                      className="inline-block h-8 w-8 border border-color-border bg-color-bg-surface"
                      style={{ borderRadius: r.previewRadius }}
                    />
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Spacing utilities */}
      <section className="card space-y-4">
        <SectionHeader
          label="Spacing · utilities"
          description="Functional spacing patterns"
        />

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-color-border">
                <Th>Token</Th>
                <Th>Maps to</Th>
                <Th align="right">Preview</Th>
              </tr>
            </thead>
            <tbody>
              {spacingUtilityTokens.map((s) => (
                <tr
                  key={s.token}
                  className="border-b border-color-border last:border-0"
                >
                  <Td>{s.token}</Td>
                  <Td>{s.mapsTo}</Td>
                  <Td align="right">
                    <div
                      className="inline-block h-2 border border-color-border bg-color-bg-surface"
                      style={{ width: s.preview }}
                    />
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Surface utilities */}
      <section className="card space-y-4 mb-10">
        <SectionHeader
          label="Surfaces · utilities"
          description="Cards & muted surfaces"
        />

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-color-border">
                <Th>Name</Th>
                <Th>Uses tokens</Th>
                <Th align="right">Preview</Th>
              </tr>
            </thead>
            <tbody>
              {surfaceUtilities.map((s) => (
                <tr
                  key={s.name}
                  className="border-b border-color-border last:border-0 align-top"
                >
                  <Td>{s.name}</Td>
                  <Td>{s.tokens}</Td>
                  <Td align="right">
                    <div className={`${s.className} inline-block`}>
                      <p className="type-body-xs text-color-text-secondary">
                        Example
                      </p>
                    </div>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

/* ================================
 * Components (placeholder)
 * ============================== */

function ComponentsTab() {
  return (
    <section className="card space-y-4">
      <p className="type-label">Components</p>
      <p className="type-body-sm text-color-text-secondary max-w-lg">
        This section will eventually list higher-level components built from the
        utilities and tokens above – things like project cards, testimonial
        stack, pill carousel, and the “water the plant” interaction.
      </p>
      <p className="type-body-xs text-color-text-secondary">
        For now, this is a placeholder to show the structure of the design
        system.
      </p>
    </section>
  );
}

/* ================================
 * Small helpers
 * ============================== */

function TokenTable({
  title,
  tokens,
}: {
  title: string;
  tokens: { token: string; value: string }[];
}) {
  return (
    <div>
      <p className="type-body-sm mb-3 text-color-text-primary">{title}</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-color-border">
              <Th>Token</Th>
              <Th>Value</Th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((t) => (
              <tr
                key={t.token}
                className="border-b border-color-border last:border-0"
              >
                <Td>{t.token}</Td>
                <Td>{t.value}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SectionHeader({
  label,
  description,
}: {
  label: string;
  description: string;
}) {
  return (
    <div className="flex items-baseline justify-between">
      <p className="type-label">{label}</p>
      <p className="type-body-xs text-color-text-secondary">{description}</p>
    </div>
  );
}

function Th({
  children,
  align,
}: {
  children: ReactNode;
  align?: "left" | "right";
}) {
  return (
    <th
      className={`type-body-xs text-color-text-secondary py-2 pr-4 ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      {children}
    </th>
  );
}

function Td({
  children,
  align,
}: {
  children: ReactNode;
  align?: "left" | "right";
}) {
  return (
    <td
      className={`type-body-xs text-color-text-secondary py-3 pr-4 ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      {children}
    </td>
  );
}
