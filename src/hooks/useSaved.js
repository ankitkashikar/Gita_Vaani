import { useState, useEffect } from 'react'

const KEY = 'gitavaani_saved'

export function useSaved() {
  const [saved, setSaved] = useState([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY)
      if (raw) setSaved(JSON.parse(raw))
    } catch { /* ignore */ }
  }, [])

  function persist(items) {
    setSaved(items)
    try { localStorage.setItem(KEY, JSON.stringify(items)) } catch { /* ignore */ }
  }

  function saveGuidance(item) {
    const already = saved.find(s => s.savedAt === item.savedAt)
    if (already) return false
    persist([item, ...saved])
    return true
  }

  function removeGuidance(savedAt) {
    persist(saved.filter(s => s.savedAt !== savedAt))
  }

  return { saved, saveGuidance, removeGuidance }
}
