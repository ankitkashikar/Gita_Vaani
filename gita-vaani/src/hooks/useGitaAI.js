import { useState } from 'react'
import { buildSystemPrompt } from '../utils/prompt.js'
import { buildVerseContext } from '../data/verses.js'

export function useGitaAI() {
  const [loading, setLoading] = useState(false)
  const [error, setError]   = useState(null)

  async function seekGuidance(question, language) {
    setLoading(true)
    setError(null)

    const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY

    try {
      const verseContext = buildVerseContext(question)
      const systemPrompt = buildSystemPrompt(language, verseContext)

      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(apiKey && apiKey !== 'your_anthropic_api_key_here'
            ? { 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' }
            : {}),
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1200,
          system: systemPrompt,
          messages: [{ role: 'user', content: question }],
        }),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err?.error?.message || `API error ${res.status}`)
      }

      const data = await res.json()
      const raw  = data.content?.[0]?.text || ''

      let parsed
      try {
        parsed = JSON.parse(raw.replace(/```json|```/g, '').trim())
      } catch {
        throw new Error('Response could not be parsed. Please try again.')
      }

      return { ok: true, data: { ...parsed, question, language, savedAt: Date.now() } }

    } catch (e) {
      setError(e.message)
      return { ok: false, error: e.message }
    } finally {
      setLoading(false)
    }
  }

  return { seekGuidance, loading, error }
}
