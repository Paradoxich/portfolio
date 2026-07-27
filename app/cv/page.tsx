import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { cv } from "@/lib/cv";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Ana Beverin's CV: product design and design engineering experience, selected work, skills, and education.",
};

const buttonSecondary =
  "inline-flex items-center gap-1 px-md py-sm rounded-full border border-color-border-secondary type-body-sm font-medium text-color-text-primary bg-transparent hover:bg-color-bg-muted transition-colors";

const pill =
  "inline-flex items-center px-sm py-xs rounded-sm bg-color-bg-label type-body-sm text-color-text-secondary";

const linkedLabel =
  "text-color-text-primary hover:underline underline-offset-2";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="type-label text-color-text-tertiary border-b border-color-border-inset pb-2 mb-lg">
      {children}
    </h2>
  );
}

export default function CvPage() {
  return (
    <PageShell className="w-full max-w-4xl mx-auto">
      <article className={`${styles.article} ${styles.sectionStack}`}>
        {/* Header */}
        <header className="stack-lg">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-lg">
            <div className="flex items-center gap-lg">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
                <Image
                  src="/general/ana-profile.png"
                  alt={cv.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div>
                <h2 className="type-h2">{cv.name}</h2>
                <p className="type-body">{cv.title}</p>
              </div>
            </div>
            <div className={styles.actions}>
              <a
                href="/docs/CV-Ana-Beverin-2026.pdf"
                className={buttonSecondary}
              >
                Download PDF
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-lg gap-y-1 type-body-sm text-color-text-tertiary">
            <span>{cv.location}</span>
            <a
              href={cv.contact.linkedinHref}
              target="_blank"
              rel="noreferrer"
              className="hover:text-color-text-primary hover:underline"
            >
              {cv.contact.linkedin}
            </a>
            <a
              href={`mailto:${cv.contact.email}`}
              className="hover:text-color-text-primary hover:underline"
            >
              {cv.contact.email}
            </a>
            <a
              href={`https://${cv.contact.site}`}
              className="hover:text-color-text-primary hover:underline"
            >
              {cv.contact.site}
            </a>
          </div>

          <p className={`type-body text-color-text-secondary ${styles.summaryGap}`}>{cv.summary}</p>
        </header>

        {/* Experience */}
        <section>
          <SectionLabel>Work Experience</SectionLabel>
          <div className="stack-lg">
            {cv.experience.map((job) => (
              <div
                key={job.company + job.period}
                className="card-ghost grid grid-cols-1 md:grid-cols-[220px_1fr] gap-x-lg gap-y-3"
              >
                <div>
                  <p className="type-body font-medium">
                    {job.href ? (
                      <Link href={job.href} className={linkedLabel}>
                        {job.company}
                      </Link>
                    ) : (
                      <span className="text-color-text-primary">{job.company}</span>
                    )}
                  </p>
                  <p className="type-body-sm text-color-text-secondary">{job.role}</p>
                  <p className={`type-body-sm text-color-text-tertiary ${styles.muted}`}>
                    {job.period}
                  </p>
                </div>
                <div className="stack-md">
                  {job.summary?.split("\n\n").map((para, i) => (
                    <p key={i} className="type-body text-color-text-secondary">
                      {para}
                    </p>
                  ))}
                  {job.bullets && (
                    <ul className="stack-sm">
                      {job.bullets.map((b) => (
                        <li key={b.label} className="type-body text-color-text-secondary">
                          {b.href ? (
                            <Link href={b.href} className={`type-body-strong ${linkedLabel}`}>
                              {b.label}
                            </Link>
                          ) : (
                            <span className="type-body-strong text-color-text-primary">
                              {b.label}
                            </span>
                          )}
                          : {b.text}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Selected work */}
        <section>
          <SectionLabel>Selected Work</SectionLabel>
          <div className="flex flex-wrap gap-sm">
            {cv.selectedWork.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="inline-flex items-center px-md py-sm rounded-full border border-color-border-secondary type-body-sm font-medium text-color-text-primary hover:bg-color-bg-muted transition-colors"
              >
                {p.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <SectionLabel>Skills</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {cv.skills.map((s) => (
              <span key={s} className={pill}>
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section>
          <SectionLabel>Tools</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {cv.tools.map((t) => (
              <span key={t} className={pill}>
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <SectionLabel>Education</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {cv.education.map((e) => (
              <div key={e.institution} className="card-ghost">
                <p className="type-body font-medium text-color-text-primary">
                  {e.institution}
                </p>
                <p className="type-body-sm text-color-text-secondary">{e.degree}</p>
                <p className={`type-body-sm text-color-text-tertiary ${styles.muted}`}>{e.year}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </PageShell>
  );
}
