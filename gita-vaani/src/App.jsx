import { useState } from 'react'
import styles from './App.module.css'
import SeekScreen  from './components/SeekScreen.jsx'
import SavedScreen from './components/SavedScreen.jsx'
import DailyScreen from './components/DailyScreen.jsx'
import { useSaved } from './hooks/useSaved.js'

const TABS = [
  { id: 'seek',  label: 'Seek',  icon: '🙏' },
  { id: 'saved', label: 'Saved', icon: '🔖' },
  { id: 'daily', label: 'Daily', icon: '☀️' },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('seek')
  const { saved, saveGuidance, removeGuidance } = useSaved()

  return (
    <div className={styles.app}>

      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={`${styles.om} devanagari`}>ॐ</span>
          <div>
            <h1 className={styles.brandName}>Gita Vaani</h1>
            <p className={styles.brandSub}>Voice of the Eternal Gita</p>
          </div>
        </div>
        <nav className={styles.tabs}>
          {TABS.map(t => (
            <button
              key={t.id}
              className={`${styles.tab} ${activeTab === t.id ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              <span className={styles.tabIcon}>{t.icon}</span>
              <span className={styles.tabLabel}>{t.label}</span>
              {t.id === 'saved' && saved.length > 0 && (
                <span className={styles.badge}>{saved.length}</span>
              )}
            </button>
          ))}
        </nav>
      </header>

      <main className={styles.main}>
        {activeTab === 'seek'  && <SeekScreen  onSave={saveGuidance} />}
        {activeTab === 'saved' && <SavedScreen saved={saved} onRemove={removeGuidance} />}
        {activeTab === 'daily' && <DailyScreen />}
      </main>

      <footer className={styles.footer}>
        <p>
          Rooted in the{' '}
          <span className="devanagari" style={{ color: 'var(--saffron)' }}>श्रीमद्भगवद्गीता</span>
          {' '}· Made with 🙏 for seekers everywhere
        </p>
      </footer>

    </div>
  )
}
