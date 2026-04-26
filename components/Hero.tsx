'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const roles = [
  'Full Stack Developer',
  'MERN Team Lead',
  'API Architect',
  'Backend Engineer',
]

const stats = [
  { value: 2,   suffix: '+', label: 'Years Experience' },
  { value: 2000, suffix: '+', label: 'APIs Built' },
  { value: 4,   suffix: '',  label: 'Companies' },
  { value: 13,   suffix: '+', label: 'Projects Shipped' },
]

function useTypewriter(words: string[], speed = 80, pause = 1600) {
  const [display, setDisplay] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), speed)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), speed / 2)
    } else {
      setDeleting(false)
      setWordIndex(w => (w + 1) % words.length)
    }

    setDisplay(current.slice(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, wordIndex, words, speed, pause])

  return display
}

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let start = 0
          const step = Math.ceil(target / 40)
          const interval = setInterval(() => {
            start = Math.min(start + step, target)
            setCount(start)
            if (start >= target) clearInterval(interval)
          }, 30)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 10}s`,
  duration: `${8 + Math.random() * 12}s`,
}))

export default function Hero() {
  const role = useTypewriter(roles)

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map(p => (
          <span
            key={p.id}
            className="particle"
            style={{ left: p.left, animationDelay: p.delay, animationDuration: p.duration }}
          />
        ))}
      </div>

      {/* Ambient glows */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
           style={{ background: 'var(--accent-glow)' }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
           style={{ background: 'var(--accent-glow)', opacity: 0.5 }} />

      {/* Left social sidebar — desktop only */}
      <div className="fixed left-8 bottom-0 hidden lg:flex flex-col items-center gap-4 z-40">
        <a href="https://github.com/Adityanpx" target="_blank" rel="noopener noreferrer"
           className="transition-all duration-300 hover:scale-110"
           style={{ color: 'var(--text-muted)' }}
           onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
           onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/aditya-gavali-b79b4525a/" target="_blank" rel="noopener noreferrer"
           className="transition-all duration-300 hover:scale-110"
           style={{ color: 'var(--text-muted)' }}
           onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
           onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
          <FaLinkedin size={20} />
        </a>
        <a href="mailto:adityagavali0911@gmail.com"
           className="transition-all duration-300 hover:scale-110"
           style={{ color: 'var(--text-muted)' }}
           onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
           onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
          <FaEnvelope size={20} />
        </a>
        <div className="w-px h-24" style={{ background: 'var(--text-muted)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-8 sm:px-10 lg:px-16 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm mb-4"
              style={{ color: 'var(--accent)', fontFamily: 'var(--font-jetbrains), monospace' }}
            >
              Hi, my name is
            </motion.p>

            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-syne), sans-serif' }}
            >
              Aditya Gavali.
            </h1>

            {/* Typewriter subtitle */}
            <h2
              className="text-xl md:text-2xl font-bold mb-6 min-h-[2rem]"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-jetbrains), monospace' }}
            >
              {role}
              <span className="inline-block w-0.5 h-5 ml-1 align-middle animate-[blink_1s_step-end_infinite]"
                    style={{ background: 'var(--accent)' }} />
            </h2>

            <p className="max-w-xl leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
              Full-Stack MERN Developer and Technical Team Lead with 2+ years building scalable,
              production-ready applications. I specialize in React, Next.js, Node.js, and MongoDB,
              with expertise in API design, database architecture, and workflow automation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
              {stats.map(s => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold" style={{ color: 'var(--accent)', fontFamily: 'var(--font-syne), sans-serif' }}>
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center justify-center px-6 py-3 border text-sm transition-all duration-300"
                style={{ borderColor: 'var(--accent)', color: 'var(--accent)', fontFamily: 'var(--font-jetbrains), monospace', borderRadius: '4px' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent-glow)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                View Work
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border text-sm transition-all duration-300"
                style={{ borderColor: 'var(--card-border)', color: 'var(--text-secondary)', fontFamily: 'var(--font-jetbrains), monospace', borderRadius: '4px' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--card-border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
              >
                Resume
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="flex justify-center md:justify-end"
          >
            <motion.div whileHover={{ y: -6 }} className="relative w-[300px] md:w-[380px]">
              {/* Offset outline */}
              <motion.div
                className="absolute inset-0 border-2 translate-x-4 translate-y-4 z-0"
                style={{ borderColor: 'var(--accent)' }}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              {/* Image */}
              <div className="relative z-10 w-full overflow-hidden rounded-sm" style={{ background: 'var(--bg-secondary)' }}>
                <Image
                  src="/images/me2.png"
                  alt="Aditya Gavali"
                  width={380}
                  height={460}
                  className="w-full h-auto object-cover object-top grayscale hover:grayscale-0 transition duration-500 block"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
