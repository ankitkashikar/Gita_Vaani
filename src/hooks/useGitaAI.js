import { useState } from 'react'
import { findBestShloka, buildOfflineResponse } from '../data/shlokaDB.js'

export function useGitaAI() {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function seekGuidance(question, language = "english") {

    if (!question || question.trim() === "") {
      return { ok: false, error: "Please ask a question." }
    }

    setLoading(true)
    setError(null)

    try {

      // Small pause to feel natural
      await new Promise(resolve => setTimeout(resolve, 1200))

      // Find matching shloka
      const shloka = findBestShloka(question)

      if (!shloka) {
        throw new Error("No matching shloka found")
      }

      // Build response
      const response = buildOfflineResponse(shloka, language, question)

      return {
        ok: true,
        data: response
      }

    } catch (e) {

      console.error("GitaAI error:", e)

      setError("Kuch gadbad ho gayi. Dobara try karo. 🙏")

      return {
        ok: false,
        error: e.message
      }

    } finally {
      setLoading(false)
    }
  }

  return {
    seekGuidance,
    loading,
    error
  }
}
