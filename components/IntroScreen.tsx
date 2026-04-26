'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const greetings = [
  { word: 'Hello',   label: 'English',       devanagari: false },
  { word: 'Hej',     label: 'Swedish',       devanagari: false },
  { word: 'Hallo',   label: 'German',        devanagari: false },
  { word: 'Moien',   label: 'Luxembourgish', devanagari: false },
  { word: 'नमस्ते',  label: 'Hindi',         devanagari: true  },
]

const FADE_S  = 0.2    // seconds — used in framer-motion transition
const FADE_MS = 200    // milliseconds
const HOLD_MS = 350    // milliseconds
// Per-word cycle (mode="wait"): fadeIn(200) + hold(350) + fadeOut(200) = 750ms
// "Advance" trigger fires at fadeIn+hold = 550ms after previous advance

export default function IntroScreen({ onComplete }: { onComplete: () => void }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [visible,   setVisible]   = useState(true)
  const [done,      setDone]      = useState(false)

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []

    // Advance wordIndex for words 1 → 4
    for (let i = 1; i < greetings.length; i++) {
      const delay = FADE_MS + HOLD_MS + (i - 1) * (FADE_MS * 2 + HOLD_MS)
      // i=1 → 1150ms  i=2 → 2750ms  i=3 → 4350ms  i=4 → 5950ms
      timers.push(setTimeout(() => setWordIndex(i), delay))
    }

    // After last word hold completes, fade out then call onComplete
    const doneAt = FADE_MS + HOLD_MS + (greetings.length - 1) * (FADE_MS * 2 + HOLD_MS)
    // = 1150 + 4 * 1600 = 7550ms
    timers.push(
      setTimeout(() => {
        setVisible(false)
        setTimeout(() => {
          setDone(true)
          onComplete()
        }, FADE_MS)
      }, doneAt)
    )

    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  if (done) return null

  return (
    <>
      {/* Load Noto Sans Devanagari for नमस्ते */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400&display=swap"
      />

      <div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
        style={{ backgroundColor: '#000000' }}
      >
        {/* Word + language label */}
        <AnimatePresence mode="wait">
          {visible && (
            <motion.div
              key={wordIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: FADE_S, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-4 select-none"
            >
              <span
                className="text-6xl md:text-8xl text-white"
                style={{
                  fontFamily: greetings[wordIndex].devanagari
                    ? '"Noto Sans Devanagari", sans-serif'
                    : 'var(--font-dm-sans), sans-serif',
                }}
              >
                {greetings[wordIndex].word}
              </span>

              <span
                style={{
                  color: 'rgba(255, 255, 255, 0.25)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                }}
              >
                {greetings[wordIndex].label}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress dots */}
        <div className="absolute bottom-12 flex items-center gap-2">
          {greetings.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                width:   i === wordIndex && visible ? 20 : 6,
                opacity: i === wordIndex && visible ? 1  : 0.2,
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{
                height:          5,
                borderRadius:    999,
                backgroundColor: '#ffffff',
              }}
            />
          ))}
        </div>
      </div>
    </>
  )
}
