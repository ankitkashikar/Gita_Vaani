import { useState, useEffect } from 'react'
import styles from './DailyScreen.module.css'
import { DAILY_VERSES } from '../data/verses.js'

const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

export default function DailyScreen() {
  const [notifStatus, setNotifStatus] = useState('idle') // idle | granted | denied
  const todayIdx   = new Date().getDay()
  const todayVerse = DAILY_VERSES[todayIdx]
  const weekVerses = DAILY_VERSES

  useEffect(() => {
    if ('Notification' in window) {
      setNotifStatus(Notification.permission)
    }
  }, [])

  async function enableNotify() {
    if (!('Notification' in window)) { setNotifStatus('denied'); return }
    const perm = await Notification.requestPermission()
    setNotifStatus(perm)
    if (perm === 'granted') {
      new Notification('Gita Vaani 🙏', {
        body: todayVerse.translation,
        icon: '/favicon.ico',
      })
    }
  }

  return (
    <div className={styles.wrap}>

      {/* Today's verse */}
      <div className={styles.todayCard}>
        <p className={styles.todayLabel}>Aaj ka Shloka — {DAYS[todayIdx]}</p>
        <p className={`${styles.todaySanskrit} devanagari`}>{todayVerse?.sanskrit}</p>
        <p className={styles.todayMeaning}>{todayVerse?.translation}</p>
        <p className={styles.todayRef}>{todayVerse?.ref}</p>
      </div>

      {/* Notification CTA */}
      <div className={styles.notifyBox}>
        <span className={styles.notifyIcon}>🔔</span>
        <div className={styles.notifyText}>
          <p>Roz subah ek shloka paiye</p>
          <small>Get a daily verse notification at 7 AM</small>
        </div>
        {notifStatus === 'granted' ? (
          <span className={styles.notifyEnabled}>✓ Enabled</span>
        ) : notifStatus === 'denied' ? (
          <span className={styles.notifyDenied}>Blocked in browser</span>
        ) : (
          <button className={styles.notifyBtn} onClick={enableNotify}>Enable</button>
        )}
      </div>

      {/* Week at a glance */}
      <p className={styles.weekLabel}>Is Hafte ke Shlokas</p>
      <div className={styles.weekList}>
        {weekVerses.map((v, i) => (
          <div key={v?.id || i} className={`${styles.weekItem} ${i === todayIdx ? styles.weekToday : ''}`}>
            <div className={styles.weekDay}>{DAYS[i].slice(0, 3)}</div>
            <div className={styles.weekContent}>
              <p className={`${styles.weekSanskrit} devanagari`}>{v?.sanskrit?.split('\n')[0]}</p>
              <p className={styles.weekMeaning}>{v?.translation}</p>
              <p className={styles.weekRef}>{v?.ref}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
