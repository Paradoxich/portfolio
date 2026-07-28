import type { Metadata } from "next";
import Image from "next/image";
import { cv } from "@/lib/cv";
import styles from "./page.module.css";

// Print source for the CV PDF. Regenerate with `pnpm cv:pdf` (dev server
// running). Content comes from lib/cv.ts, same as /cv.
export const metadata: Metadata = {
  title: "CV · Print",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CvPrintPage() {
  return (
    <div className={styles.page}>
      <article className={styles.sheet}>
        {/* Header. `priority` matters here: Next lazy-loads images by default,
            which can print an empty box in headless Chrome. */}
        <header className={styles.header}>
          <Image
            src="/general/ana-profile.png"
            alt={cv.name}
            width={216}
            height={216}
            priority
            quality={90}
            className={styles.photo}
          />
          <div>
            <h1 className={styles.name}>{cv.name}</h1>
            <div className={styles.contactRow}>
              <span>{cv.location}</span>
              <span>{cv.contact.phone}</span>
              <a href={cv.contact.linkedinHref}>{cv.contact.linkedin}</a>
              <a href={`mailto:${cv.contact.email}`}>{cv.contact.email}</a>
              <a href={`https://${cv.contact.site}`}>{cv.contact.site}</a>
            </div>
          </div>
        </header>

        {/* Intro */}
        <p className={styles.role}>{cv.title}</p>
        <p className={styles.summary}>{cv.summary}</p>

        {/* Experience */}
        <h2 className={styles.label}>Work Experience</h2>
        {cv.experience.map((job) => (
          <div key={job.company + job.period} className={styles.entry}>
            <div className={styles.entryMeta}>
              <p className={styles.company}>{job.company}</p>
              <p className={styles.roleLine}>{job.role}</p>
              <p className={styles.period}>{job.period}</p>
            </div>
            <div className={styles.entryBody}>
              {job.summary?.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              {job.bullets?.map((b) => (
                <p key={b.label}>
                  <strong>{b.label}:</strong> {b.text}
                </p>
              ))}
            </div>
          </div>
        ))}

        {/* Education */}
        <h2 className={styles.label}>Education</h2>
        <div className={styles.eduGrid}>
          {cv.education.map((e) => (
            <div key={e.institution}>
              <p className={styles.company}>{e.institution}</p>
              <p className={styles.eduDegree}>{e.degree}</p>
              <p className={styles.eduYear}>{e.year}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <h2 className={styles.label}>Skills</h2>
        <p className={styles.prose}>{cv.skills.join(", ")}.</p>

        {/* Tools */}
        <h2 className={styles.label}>Tools</h2>
        <p className={styles.prose}>{cv.tools.join(", ")}.</p>
      </article>
    </div>
  );
}
