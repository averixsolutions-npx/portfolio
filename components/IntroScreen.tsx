'use client'
import { useEffect, useRef, useState } from 'react'

const greetings = [
  { word: 'Hello',      font: 'var(--font-dm-sans), sans-serif',             weight: 300 },
  { word: 'Hej',        font: 'var(--font-dm-sans), sans-serif',             weight: 300 },
  { word: 'Hallo',      font: 'var(--font-dm-sans), sans-serif',             weight: 300 },
  { word: 'Moien',      font: 'var(--font-dm-sans), sans-serif',             weight: 300 },
  { word: 'வணக்கம்',   font: '"Noto Sans Tamil", sans-serif',               weight: 400 },
  { word: 'नमस्ते',    font: '"Noto Sans Devanagari", sans-serif',          weight: 400 },
]

const CHAR_DELAY   = 55    // ms before first char appears
const CHAR_STAGGER = 42    // ms between each char
const HOLD_AFTER   = 900   // ms to hold after last char appears
const EXIT_STAGGER = 28    // ms between each char exit
const EXIT_DUR     = 180   // ms base exit duration
const BETWEEN_GAP  = 200   // ms pause between words

export default function IntroScreen({ onComplete }: { onComplete: () => void }) {
  const [done, setDone] = useState(false)
  const onCompleteRef = useRef(onComplete)
  useEffect(() => { onCompleteRef.current = onComplete }, [onComplete])
  const rootRef       = useRef<HTMLDivElement>(null)
  const displayRef    = useRef<HTMLDivElement>(null)
  const underlineRef  = useRef<HTMLDivElement>(null)
  const dotsRef       = useRef<HTMLDivElement>(null)
  const counterRef    = useRef<HTMLSpanElement>(null)
  const progBarRef    = useRef<HTMLDivElement>(null)
  const timersRef     = useRef<ReturnType<typeof setTimeout>[]>([])
  const runningRef    = useRef(false)

  function schedule(fn: () => void, ms: number) {
    const id = setTimeout(fn, ms)
    timersRef.current.push(id)
    return id
  }

  function clearAll() {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
  }

  function buildDots(active: number) {
    const container = dotsRef.current
    if (!container) return
    container.innerHTML = ''
    greetings.forEach((_, i) => {
      const d = document.createElement('div')
      d.style.cssText = `
        height: 3px;
        width: ${i === active ? '22px' : '6px'};
        border-radius: 2px;
        background: ${i === active ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.2)'};
        transition: width 0.35s cubic-bezier(0.22,1,0.36,1), background 0.35s ease;
      `
      container.appendChild(d)
    })
  }

  function spawnSparks() {
    const root    = rootRef.current
    const display = displayRef.current
    if (!root || !display) return
    const rRect = root.getBoundingClientRect()
    const dRect = display.getBoundingClientRect()
    const cx = dRect.left - rRect.left + dRect.width  / 2
    const cy = dRect.top  - rRect.top  + dRect.height / 2

    for (let i = 0; i < 7; i++) {
      const spark = document.createElement('div')
      const angle = (Math.PI * 2 * i) / 7 + Math.random() * 0.5
      const dist  = 30 + Math.random() * 40
      const tx    = Math.cos(angle) * dist
      const ty    = Math.sin(angle) * dist
      spark.style.cssText = `
        position: absolute;
        width: 2px; height: 2px;
        border-radius: 50%;
        background: rgba(255,255,255,0.6);
        left: ${cx}px; top: ${cy}px;
        pointer-events: none;
        z-index: 1;
        animation: sparkFly 0.8s ease-out ${Math.random() * 80}ms forwards;
        --tx: ${tx}px; --ty: ${ty}px;
      `
      root.appendChild(spark)
      setTimeout(() => spark.remove(), 900)
    }
  }

  function typeWord(
    wordObj: (typeof greetings)[number],
    idx: number,
    onDone: () => void
  ) {
    const display   = displayRef.current
    const underline = underlineRef.current
    const counter   = counterRef.current
    const progBar   = progBarRef.current
    if (!display || !underline || !counter || !progBar) return

    const segmenter = typeof Intl !== 'undefined' && 'Segmenter' in Intl
      ? new Intl.Segmenter(undefined, { granularity: 'grapheme' })
      : null
    const chars = segmenter
      ? [...segmenter.segment(wordObj.word)].map((s) => s.segment)
      : [...wordObj.word]
    display.innerHTML = ''
    underline.style.width = '0'

    counter.textContent =
      String(idx + 1).padStart(2, '0') + ' / ' + String(greetings.length).padStart(2, '0')

    buildDots(idx)
    progBar.style.width = ((idx + 1) / greetings.length) * 100 + '%'

    chars.forEach((ch, i) => {
      const span = document.createElement('span')
      span.textContent = ch === ' ' ? '\u00A0' : ch
      span.style.cssText = `
        display: inline-block;
        font-family: ${wordObj.font};
        font-weight: ${wordObj.weight};
        opacity: 0;
        transform: translateY(18px) scale(0.88);
        filter: blur(4px);
        transition:
          opacity 0.28s cubic-bezier(0.22,1,0.36,1),
          transform 0.32s cubic-bezier(0.22,1,0.36,1),
          filter 0.28s ease;
      `
      display.appendChild(span)

      schedule(() => {
        span.style.opacity   = '1'
        span.style.transform = 'translateY(0) scale(1)'
        span.style.filter    = 'blur(0px)'

        if (i === chars.length - 1) {
          spawnSparks()
          schedule(() => {
            underline.style.transition = 'width 0.5s cubic-bezier(0.22,1,0.36,1)'
            underline.style.width = '100%'
          }, 80)
          schedule(onDone, HOLD_AFTER)
        }
      }, CHAR_DELAY + i * CHAR_STAGGER)
    })
  }

  function exitWord(onDone: () => void) {
    const display   = displayRef.current
    const underline = underlineRef.current
    if (!display || !underline) return

    const charEls = Array.from(display.querySelectorAll<HTMLElement>('span'))
    underline.style.width = '0'

    charEls.forEach((el, i) => {
      schedule(() => {
        el.style.transition = 'opacity 0.2s ease, transform 0.22s ease, filter 0.18s ease'
        el.style.opacity    = '0'
        el.style.transform  = 'translateY(-10px) scale(0.92)'
        el.style.filter     = 'blur(3px)'
      }, i * EXIT_STAGGER)
    })

    const total = EXIT_DUR + (charEls.length - 1) * EXIT_STAGGER
    schedule(onDone, total)
  }

  function runSequence() {
    if (runningRef.current) return
    runningRef.current = true
    clearAll()

    let current = 0

    function next() {
      if (current >= greetings.length) {
        // Fade out the whole screen
        const root = rootRef.current
        if (root) {
          root.style.pointerEvents = 'none'   // stop blocking clicks immediately
          root.style.transition = 'opacity 0.5s ease'
          root.style.opacity = '0'
        }
        schedule(() => {
          setDone(true)
          onCompleteRef.current()
        }, 500)
        return
      }

      typeWord(greetings[current], current, () => {
        exitWord(() => {
          schedule(() => {
            current++
            next()
          }, BETWEEN_GAP)
        })
      })
    }

    next()
  }

  useEffect(() => {
    runningRef.current = false  // reset guard on mount

    // Safety escape hatch — if anything goes wrong, skip intro after 12s
    const safetyId = setTimeout(() => {
      setDone(true)
      onCompleteRef.current()
    }, 12000)

    const start = () => {
      clearTimeout(safetyId)
      runSequence()
    }

    // Wait for Noto fonts so Indic glyphs render correctly
    if (typeof document !== 'undefined' && document.fonts) {
      document.fonts.ready.then(start).catch(start)
    } else {
      start()
    }

    return () => {
      clearTimeout(safetyId)
      clearAll()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (done) return null

  return (
    <>
      {/* Google Fonts for Devanagari & Tamil */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@300;400&family=Noto+Sans+Tamil:wght@300;400&display=block"
      />

      {/* Keyframe for spark particles */}
      <style>{`
        @keyframes sparkFly {
          0%   { opacity: 1; transform: translate(0, 0) scale(1); }
          100% { opacity: 0; transform: translate(var(--tx), var(--ty)) scale(0.2); }
        }
        @keyframes pulseRing {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50%       { opacity: 0.7; transform: scale(1.02); }
        }
      `}</style>

      <div
        ref={rootRef}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: '#000',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Ambient glow rings */}
        {[300, 480, 650].map((size, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: size,
              height: size,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.04)',
              animation: `pulseRing 4s ease-in-out ${i * 0.8}s infinite`,
              pointerEvents: 'none',
            }}
          />
        ))}

        {/* Word index counter */}
        <span
          ref={counterRef}
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            fontSize: 11,
            color: 'rgba(255,255,255,0.15)',
            letterSpacing: '0.1em',
            fontFamily: 'var(--font-dm-sans), sans-serif',
            zIndex: 4,
          }}
        >
          01 / {String(greetings.length).padStart(2, '0')}
        </span>

        {/* Word stage */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
            position: 'relative',
            zIndex: 2,
            minHeight: 120,
            justifyContent: 'center',
          }}
        >
          <div style={{ position: 'relative' }}>
            {/* Character display */}
            <div
              ref={displayRef}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'baseline',
                fontSize: 'clamp(52px, 9vw, 88px)',
                lineHeight: 1,
                color: '#fff',
                minHeight: '1.2em',
              }}
            />

            {/* Underline accent */}
            <div
              ref={underlineRef}
              style={{
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                height: 1,
                width: 0,
                background: 'rgba(255,255,255,0.2)',
                borderRadius: 1,
              }}
            />
          </div>

        </div>

        {/* Progress dots */}
        <div
          ref={dotsRef}
          style={{
            position: 'absolute',
            bottom: 28,
            display: 'flex',
            gap: 8,
            alignItems: 'center',
            zIndex: 3,
          }}
        />

        {/* Bottom progress bar */}
        <div
          ref={progBarRef}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: 1,
            width: '0%',
            background: 'rgba(255,255,255,0.15)',
            transition: 'width 0.6s cubic-bezier(0.22,1,0.36,1)',
            zIndex: 3,
          }}
        />
      </div>
    </>
  )
}