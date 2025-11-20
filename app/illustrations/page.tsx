"use client";

import { useState } from "react";
import { IllustrationBlocks } from "../../components/illustrations/IllustrationBlocks";
import {
  personalIllustrationBlocks,
  uiCopyTexts,
  uiIllustrationBlocks,
} from "../../components/illustrations/illustrationsData";

type TabId = "ui" | "personal";

const tabs: { id: TabId; label: string }[] = [
  { id: "ui", label: "UI illustrations" },
  { id: "personal", label: "Personal" },
];

const personalCopyTexts = [
  "My personal style leans into high contrast and graphic form: big blocks of color, strong shapes, minimal detail and compositions that feel almost cinematic.",
  "The characters are reduced to essentials but still carry expression and attitude, and the scenes rely on rhythm, negative space and a few deliberate lines to tell the whole story.",
  "It's a more distilled, more graphic, more personal side of my work.",
];

export default function IllustrationsPage() {
  const [activeTab, setActiveTab] = useState<TabId>("ui");
  const activeBlocks =
    activeTab === "ui" ? uiIllustrationBlocks : personalIllustrationBlocks;
  const activeVariant = activeTab === "personal" ? "triptych" : "default";
  const activeCopyTexts =
    activeTab === "ui" ? uiCopyTexts : activeTab === "personal" ? personalCopyTexts : undefined;

  return (
    <main className="min-h-screen">
      <div className="page-shell stack-xl ">
        <header className="layout-grid hero-gap">
          <section className="col-span-12 md:col-span-5 stack-md">
            <h1 className="type-h1">
              Bits of color, characters and odd ideas{" "}
              <span className="font-normal text-color-text-secondary">
                I draw for fun and for work.
              </span>
            </h1>
          </section>
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

        <IllustrationBlocks
          blocks={activeBlocks}
          variant={activeVariant}
          copyTexts={activeCopyTexts}
        />
      </div>
    </main>
  );
}

