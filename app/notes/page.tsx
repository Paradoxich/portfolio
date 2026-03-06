"use client";

import { PageShell } from "@/components/layout/PageShell";

export default function NotesPage() {
  return (
    <PageShell className="stack-xl">
      <header className="layout-grid hero-gap">
        <section className="col-span-12 md:col-span-6">
          <h1 className="type-h1 text-balance">
            Notes{" "}
            <span className="text-color-text-secondary font-normal">
              thoughts and work-in-progress.
            </span>
          </h1>
        </section>
      </header>

      <div className="layout-grid">
        <section className="col-span-12">
          <div className="card-muted p-8 text-center">
            <p className="type-body text-color-text-secondary">
              Coming soon. This section will host notes and work-in-progress
              pieces.
            </p>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
