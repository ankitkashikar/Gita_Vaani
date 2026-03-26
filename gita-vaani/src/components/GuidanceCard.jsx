import styles from './GuidanceCard.module.css'

export default function GuidanceCard({ guidance }) {
  if (!guidance) return null

  const {
    reflection, verse_ref, verse_sanskrit, verse_translation,
    gita_bridge, steps = [], takeaway,
  } = guidance

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar}>ॐ</div>
        <div>
          <span className={styles.headerTitle}>Gita Vaani</span>
          <span className={styles.headerSub}>Bhagavad Gita se marg-darshan</span>
        </div>
      </div>

      <div className={styles.body}>
        {/* Reflection */}
        <p className={styles.reflection}>{reflection}</p>

        {/* Shloka */}
        <div className={styles.shlokaBox}>
          <p className={styles.verseRef}>{verse_ref}</p>
          <p className={`${styles.sanskrit} devanagari`}>{verse_sanskrit}</p>
          <p className={styles.translation}>{verse_translation}</p>
        </div>

        {/* Bridge */}
        {gita_bridge && (
          <>
            <p className={styles.sectionLabel}>Gita kya kehti hai aapke liye</p>
            <p className={styles.sectionBody}>{gita_bridge}</p>
          </>
        )}

        {/* Steps */}
        {steps.length > 0 && (
          <>
            <p className={styles.sectionLabel}>Aaj se kya karein</p>
            <ol className={styles.steps}>
              {steps.map((s, i) => (
                <li key={i} className={styles.step}>
                  <span className={styles.stepNum}>{i + 1}</span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </>
        )}

        {/* Takeaway */}
        {takeaway && <blockquote className={styles.takeaway}>"{takeaway}"</blockquote>}
      </div>
    </div>
  )
}
