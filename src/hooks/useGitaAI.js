import { useState } from 'react'
import { buildSystemPrompt } from '../utils/prompt.js'
import { buildVerseContext } from '../data/verses.js'

export function useGitaAI() {
  const [loading, setLoading] = useState(false)
  const [error, setError]   = useState(null)

  async function seekGuidance(question, language) {
    setLoading(true)
    setError(null)

    try {
      const verseContext = buildVerseContext(question)
      const systemPrompt = buildSystemPrompt(language, verseContext)

      // ✅ Call OUR serverless function — not Anthropic directly
      // This fixes the CORS "Failed to fetch" error
      const res = await fetch('/api/guidance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1200,
          system: systemPrompt,
          messages: [{ role: 'user', content: question }],
        }),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err?.error || `Server error ${res.status}`)
      }

      const data = await res.json()
      const raw  = data.content?.[0]?.text || ''

      let parsed
      try {
        parsed = JSON.parse(raw.replace(/```json|```/g, '').trim())
      } catch {
        throw new Error('Response could not be parsed. Please try again.')
      }

      return {
        ok: true,
        data: { ...parsed, question, language, savedAt: Date.now() }
      }

    } catch (e) {
      setError(e.message)
      return { ok: false, error: e.message }
    } finally {
      setLoading(false)
    }
  }

  return { seekGuidance, loading, error }
}
