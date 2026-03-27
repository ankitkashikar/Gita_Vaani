import { useState } from 'react'
import { findBestShloka, buildOfflineResponse } from '../data/shlokaDB.js'

export function useGitaAI() {
  const [loading, setLoading] = useState(false)
  const [error, setError]   = useState(null)

  async function seekGuidance(question, language) {
    setLoading(true)
    setError(null)

    try {
      // Simulate a thoughtful pause (makes it feel more human)
      await new Promise(resolve => setTimeout(resolve, 1200))

      // Find the best matching shloka from our local database
      const shloka = findBestShloka(question)

      // Build the full response in the chosen language
      const response = buildOfflineResponse(shloka, language, question)

      return { ok: true, data: response }

    } catch (e) {
      setError('Kuch gadbad ho gayi. Dobara try karo. 🙏')
      return { ok: false, error: e.message }
    } finally {
      setLoading(false)
    }
  }

  return { seekGuidance, loading, error }
}
