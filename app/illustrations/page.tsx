"use client";

import { PageShell } from "@/components/layout/PageShell";
import { IllustrationBlocks } from "@/components/illustrations/IllustrationBlocks";
import {
  uiCopyTexts,
  uiIllustrationBlocks,
} from "@/components/illustrations/illustrationsData";

export default function IllustrationsPage() {
  return (
    <PageShell className="px-4xl">
        <header className="layout-grid hero-gap mt-4xl">
          <section className="col-span-12 md:col-span-12 stack-md">
            <h1 className="type-hero text-balance text-center">
              <span className="text-color-text-primary font-medium">
              Illustration systems & visual work.
              </span>
            </h1>
            <p className="type-body leading-body max-w-xl mx-auto text-center text-color-text-secondary">
              I use illustration to bring personality and clarity into products and brands. These
              projects range from standalone visuals to illustration systems.
            </p>
          </section>
        </header>

        <div className="mt-[120px]">
          <IllustrationBlocks
            blocks={uiIllustrationBlocks}
            variant="default"
            copyTexts={uiCopyTexts}
          />
        </div>
    </PageShell>
  );
}

