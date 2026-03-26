import { useState, useRef } from 'react'

export function useSpeech() {
  const [speaking, setSpeaking] = useState(false)
  const uttRef = useRef(null)

  function speak(guidance, language) {
    if (!('speechSynthesis' in window)) return

    if (speaking) {
      window.speechSynthesis.cancel()
      setSpeaking(false)
      return
    }

    const parts = [
      guidance.reflection,
      guidance.verse_ref + '.',
      guidance.verse_translation,
      guidance.gita_bridge,
      guidance.takeaway,
    ].filter(Boolean).join(' ')

    const utt = new SpeechSynthesisUtterance(parts)
    utt.lang  = language === 'hindi' ? 'hi-IN' : 'en-IN'
    utt.rate  = 0.82
    utt.pitch = 0.88

    utt.onend  = () => setSpeaking(false)
    utt.onerror = () => setSpeaking(false)

    window.speechSynthesis.speak(utt)
    uttRef.current = utt
    setSpeaking(true)
  }

  function stop() {
    window.speechSynthesis.cancel()
    setSpeaking(false)
  }

  return { speak, stop, speaking }
}
