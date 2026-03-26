import { useState } from 'react'
import styles from './SeekScreen.module.css'
import { useGitaAI } from '../hooks/useGitaAI.js'
import { useSpeech }  from '../hooks/useSpeech.js'
import GuidanceCard   from './GuidanceCard.jsx'

const TOPICS = [
  { label: 'Stress & Anxiety',   icon: '🌊', query: 'bahut zyada stress aur anxiety ho rahi hai, chain nahi hai' },
  { label: 'Career Confusion',   icon: '🧭', query: 'career mein bahut confused hoon, kya karna chahiye samajh nahi aa raha' },
  { label: 'Rishte / Relations', icon: '💛', query: 'relationship mein bahut problems chal rahi hain, conflict ho raha hai' },
  { label: 'Motivation',         icon: '🔥', query: 'bilkul motivation nahi hai, purpose nahi dikh raha, sab bekar lag raha hai' },
  { label: 'Dar / Fear',         icon: '🌀', query: 'bahut dar lag raha hai, overthinking ho rahi hai, future se dara hoon' },
  { label: 'Dukh / Grief',       icon: '🕊️', query: 'bahut dukh hai, kuch kho diya hai, grief se kaise niklen' },
  { label: 'Krodh / Anger',      icon: '🌋', query: 'bahut gussa aata hai, anger control nahi ho raha, frustration hai' },
  { label: 'Self Discovery',     icon: '🪷', query: 'khud ko jaanna chahta hoon, mera purpose kya hai, identity dhundh raha hoon' },
]

const LANGS = [
  { value: 'hinglish', label: 'Hinglish' },
  { value: 'hindi',    label: 'Hindi'    },
  { value: 'english',  label: 'English'  },
]

export default function SeekScreen({ onSave }) {
  const [topic,    setTopic]    = useState(null)
  const [question, setQuestion] = useState('')
  const [language, setLanguage] = useState('hinglish')
  const [guidance, setGuidance] = useState(null)
  const [saved,    setSaved]    = useState(false)

  const { seekGuidance, loading, error } = useGitaAI()
  const { speak, speaking }             = useSpeech()

  async function handleSeek() {
    const q = question.trim() || topic?.query
    if (!q) return

    const result = await seekGuidance(q, language)
    if (result.ok) {
      setGuidance(result.data)
      setSaved(false)
      setTimeout(() => {
        document.getElementById('guidance-card')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }, 100)
    }
  }

  function handleSave() {
    if (!guidance) return
    const ok = onSave(guidance)
    if (ok) setSaved(true)
  }

  function handleShare() {
    if (!guidance) return
    const text = `"${guidance.takeaway}"\n\n${guidance.verse_ref}\n\nGita Vaani 🙏`
    if (navigator.share) {
      navigator.share({ title: 'Gita Vaani', text })
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => alert('Copied! Share karo 🙏'))
    }
  }

  return (
    <div className={styles.wrap}>

      {/* Topic chips */}
      <div className={styles.chips}>
        {TOPICS.map(t => (
          <button
            key={t.label}
            className={`${styles.chip} ${topic?.label === t.label ? styles.chipSel : ''}`}
            onClick={() => { setTopic(t); setQuestion('') }}
          >
            <span className={styles.chipIcon}>{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>

      {/* Language selector */}
      <div className={styles.langRow}>
        <span className={styles.langLabel}>Response in:</span>
        {LANGS.map(l => (
          <button
            key={l.value}
            className={`${styles.langBtn} ${language === l.value ? styles.langSel : ''}`}
            onClick={() => setLanguage(l.value)}
          >
            {l.label}
          </button>
        ))}
      </div>

      {/* Question input */}
      <textarea
        className={styles.textarea}
        value={question}
        onChange={e => { setQuestion(e.target.value); setTopic(null) }}
        placeholder="Ya apni baat khud likho... jaise: 'Main apni life mein bilkul lost feel kar raha hoon, nahi pata kya karna chahiye'"
        rows={3}
      />

      {error && <p className={styles.error}>{error}</p>}

      <button
        className={styles.seekBtn}
        onClick={handleSeek}
        disabled={loading || (!question.trim() && !topic)}
      >
        {loading ? (
          <span className={styles.loading}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span style={{ marginLeft: 10 }}>Guru soch rahe hain...</span>
          </span>
        ) : '✦ Guru se Maargo — Seek Guidance'}
      </button>

      {/* Guidance card */}
      {guidance && (
        <div id="guidance-card" className={`${styles.cardWrap} fade-in`}>
          <GuidanceCard guidance={guidance} />
          <div className={styles.actions}>
            <button className={`${styles.actBtn} ${saved ? styles.actSaved : ''}`} onClick={handleSave}>
              {saved ? '✓ Saved' : '🔖 Save'}
            </button>
            <button
              className={`${styles.actBtn} ${speaking ? styles.actSpeaking : ''}`}
              onClick={() => speak(guidance, language)}
            >
              {speaking ? '⏹ Rokiye' : '🔊 Suniye'}
            </button>
            <button className={styles.actBtn} onClick={handleShare}>
              ↗ Share
            </button>
            <button className={styles.actBtn} onClick={() => { setGuidance(null); setTopic(null); setQuestion('') }}>
              ↩ New
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
