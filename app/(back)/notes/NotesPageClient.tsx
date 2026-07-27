"use client";

import { PageShell } from "@/components/layout/PageShell";
import { PixelQuote } from "@/components/icons/PixelQuote";
import styles from "./page.module.css";

export function NotesPageClient() {
  return (
    <PageShell className="flex min-h-[calc(100dvh-4rem)] flex-col justify-between py-5xl">
      <div className="mx-auto flex w-full max-w-[950px] flex-1 flex-col justify-between">
        {/* Quote group: icon + text */}
        <div className="flex flex-col gap-lg">
          <span className="text-[var(--color-20)]" aria-hidden>
            <PixelQuote size={24} />
          </span>
          <p className={styles.quote}>
            You know the greatest danger facing us is ourselves, and irrational
            fear of the unknown. There&apos;s no such thing as the unknown. Only
            things temporarily hidden, temporarily not understood.
          </p>
        </div>

        {/* Bottom note */}
        <p className={`${styles.note} shrink-0`}>
          This portfolio started as a way to test modern ways, and ended up as
          my creative playground. One of my biggest pet peeves in general work
          is not having a central place for my thoughts. I want bite sized,
          curated information I can come back to, so I&apos;m building a little
          notes feature. It&apos;s not there to be shown yet. Yes, it might be
          redundant for masses, but in this vast world, I&apos;m missing
          something that works the way I intend it to.
        </p>
      </div>
    </PageShell>
  );
}
