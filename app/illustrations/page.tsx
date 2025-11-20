"use client";

import { useState } from "react";
import {
  IllustrationBlocks,
  personalIllustrationBlocks,
  uiIllustrationBlocks,
} from "../../components/illustrations/IllustrationBlocks";

type TabId = "ui" | "personal";

const tabs: { id: TabId; label: string }[] = [
  { id: "ui", label: "UI illustrations" },
  { id: "personal", label: "Personal" },
];

export default function IllustrationsPage() {
  const [activeTab, setActiveTab] = useState<TabId>("ui");
  const activeBlocks =
    activeTab === "ui" ? uiIllustrationBlocks : personalIllustrationBlocks;

  return (
    <main className="min-h-screen">
      <div className="page-shell stack-xl">
        <header className="stack-md">
          <h1 className="type-h1">Illustrations</h1>
          <p className="type-body max-w-xl">
            Selected UI and personal explorations, covering everything from
            system-heavy dashboards to playful sketches I paint on quieter
            evenings.
          </p>
        </header>

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

        <IllustrationBlocks blocks={activeBlocks} />
      </div>
    </main>
  );
}

