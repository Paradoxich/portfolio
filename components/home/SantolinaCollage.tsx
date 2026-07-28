import { Public_Sans } from "next/font/google";
import styles from "./SantolinaCollage.module.css";

// The Santolina app's own typeface — scoped to this product depiction only.
const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const tasks = [
  { label: "Today is a good day to plant out and a poor day to prune.", meta: "today" },
  { label: "Mulch the perennial bed", meta: "this week" },
  { label: "Trim the hedges and shrubs", meta: "next week" },
  { label: "Plant spring bulbs in the garden", meta: "by the end of the month" },
];

// A depiction of the Santolina product UI, rendered as live DOM (crisp at any
// resolution) rather than a flattened export. Purely decorative on the card.
export function SantolinaCollage({ className }: { className?: string }) {
  return (
    <div
      className={`${publicSans.className} ${styles.collage} ${className ?? ""}`}
      aria-hidden
    >
      <div className={`${styles.card} ${styles.insight}`}>
        <div className={styles.insightText}>
          <p>When lavender blooms in June,</p>
          <p>it will be a reliable food source</p>
          <p>for local pollinators.</p>
        </div>
        <div className={styles.insightLabel}>Garden Insight</div>
        <div className={styles.birdBox}>
          <div className={styles.birdRot}>
            <div className={styles.birdWindow}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/home/santolina-insight-bird.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.card} ${styles.care}`}>
        <div className={styles.careContent}>
          <div className={styles.careHeader}>
            <span className={styles.title}>Plant care</span>
            <span className={styles.meta}>4 tips</span>
          </div>
          <div className={styles.taskList}>
            {tasks.map((task) => (
              <div key={task.label} className={styles.taskRow}>
                <div className={styles.rowContent}>
                  <span className={styles.rowLabel}>{task.label}</span>
                  <span className={styles.rowMeta}>{task.meta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.moreOverlay} />
      </div>
    </div>
  );
}
