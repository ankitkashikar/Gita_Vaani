import { useState } from 'react'
import styles from './SeekScreen.module.css'
import { useGitaAI } from '../hooks/useGitaAI.js'
import { useSpeech }  from '../hooks/useSpeech.js'
import GuidanceCard   from './GuidanceCard.jsx'
import { CATEGORIES } from '../data/shlokaDB.js'

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

  function handleWhatsApp() {
    if (!guidance) return
    const text = encodeURIComponent(`🙏 *Gita Vaani*\n\n"${guidance.takeaway}"\n\n📖 ${guidance.verse_ref}\n\n${guidance.verse_translation}\n\nhttps://gita-vaani-tau.vercel.app`)
    window.open(`https://wa.me/?text=${text}`, '_blank')
  }

  function handleShare() {
    if (!guidance) return
    const text = `"${guidance.takeaway}"\n\n${guidance.verse_ref}\n\nGita Vaani 🙏\nhttps://gita-vaani-tau.vercel.app`
    if (navigator.share) navigator.share({ title: 'Gita Vaani', text })
    else if (navigator.clipboard) navigator.clipboard.writeText(text).then(() => alert('Copied! Share karo 🙏'))
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.chips}>
        {CATEGORIES.map(t => (
          <button key={t.id} className={`${styles.chip} ${topic?.id === t.id ? styles.chipSel : ''}`}
            onClick={() => { setTopic(t); setQuestion('') }}>
            <span className={styles.chipIcon}>{t.icon}</span>{t.label}
          </button>
        ))}
      </div>
      <div className={styles.langRow}>
        <span className={styles.langLabel}>Response in:</span>
        {LANGS.map(l => (
          <button key={l.value} className={`${styles.langBtn} ${language === l.value ? styles.langSel : ''}`}
            onClick={() => setLanguage(l.value)}>{l.label}</button>
        ))}
      </div>
      <textarea className={styles.textarea} value={question}
        onChange={e => { setQuestion(e.target.value); setTopic(null) }}
        placeholder="Ya apni baat khud likho... jaise: 'Main bahut stressed hoon'" rows={3} />
      {error && <p className={styles.error}>{error}</p>}
      <button className={styles.seekBtn} onClick={handleSeek}
        disabled={loading || (!question.trim() && !topic)}>
        {loading ? (
          <span className={styles.loading}>
            <span className={styles.dot}/><span className={styles.dot}/><span className={styles.dot}/>
            <span style={{marginLeft:10}}>Guru soch rahe hain...</span>
          </span>
        ) : '✦ Guru se Maargo — Seek Guidance'}
      </button>
      {guidance && (
        <div id="guidance-card" className={`${styles.cardWrap} fade-in`}>
          <GuidanceCard guidance={guidance} />
          <div className={styles.actions}>
            <button className={`${styles.actBtn} ${saved ? styles.actSaved : ''}`} onClick={handleSave}>
              {saved ? '✓ Saved' : '🔖 Save'}
            </button>
            <button className={`${styles.actBtn} ${speaking ? styles.actSpeaking : ''}`}
              onClick={() => speak(guidance, language)}>
              {speaking ? '⏹ Rokiye' : '🔊 Suniye'}
            </button>
            <button className={styles.actBtn} onClick={handleWhatsApp}>💬 WhatsApp</button>
            <button className={styles.actBtn} onClick={handleShare}>↗ Share</button>
            <button className={styles.actBtn} onClick={() => { setGuidance(null); setTopic(null); setQuestion('') }}>↩ New</button>
          </div>
        </div>
      )}
    </div>
  )
}
