import { useState } from 'react'
import styles from './SavedScreen.module.css'
import GuidanceCard from './GuidanceCard.jsx'

export default function SavedScreen({ saved, onRemove }) {
  const [expanded, setExpanded] = useState(null)
  if (!saved.length) {
    return (
      <div className={styles.empty}>
        <p className={styles.emptyOm}>ॐ</p>
        <p>Abhi koi saved guidance nahi hai.</p>
        <p className={styles.emptyHint}>Seek tab pe jaao aur kuch guidance maango — phir save karo. 🙏</p>
      </div>
    )
  }
  return (
    <div className={styles.list}>
      {saved.map((item, i) => (
        <div key={item.savedAt || i} className={styles.item}>
          {expanded === i ? (
            <>
              <GuidanceCard guidance={item} />
              <div className={styles.itemActions}>
                <button className={styles.collapseBtn} onClick={() => setExpanded(null)}>↑ Collapse</button>
                <button className={styles.removeBtn} onClick={() => { onRemove(item.savedAt); setExpanded(null) }}>🗑 Remove</button>
              </div>
            </>
          ) : (
            <div className={styles.preview} onClick={() => setExpanded(i)}>
              <p className={styles.previewQ}>{item.question || item.reflection?.slice(0,70)+'...'}</p>
              <p className={styles.previewRef}>{item.verse_ref}</p>
              <p className={styles.previewSnip}>{item.takeaway}</p>
              <span className={styles.previewHint}>Tap to read →</span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
