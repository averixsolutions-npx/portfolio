'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ThemeToggleButton from './ThemeToggle'

const navItems = [
  { label: 'Home',       id: 'home',       index: '01' },
  { label: 'Skills',     id: 'skills',     index: '02' },
  { label: 'Experience', id: 'experience', index: '03' },
  { label: 'Projects',   id: 'projects',   index: '04' },
  { label: 'Contact',    id: 'contact',    index: '05' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      navItems.forEach(item => {
        const el = document.getElementById(item.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) setActiveSection(item.id)
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--card-border)' : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.1)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-8 lg:px-16 h-20 flex items-center justify-between">

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollTo('home')}
          className="font-bold text-lg cursor-pointer"
          style={{ color: 'var(--accent)', fontFamily: 'var(--font-jetbrains), monospace' }}
        >
          {'<AG />'}
        </motion.div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="group text-sm transition-all duration-300 relative"
              style={{
                color: activeSection === item.id ? 'var(--accent)' : 'var(--text-secondary)',
                fontFamily: 'var(--font-jetbrains), monospace',
              }}
            >
              <span style={{ color: 'var(--accent)' }}>{item.index}. </span>
              {item.label}
              <span
                className="block h-px transition-all duration-300 origin-left"
                style={{
                  background: 'var(--accent)',
                  transform: activeSection === item.id ? 'scaleX(1)' : 'scaleX(0)',
                }}
              />
            </button>
          ))}

          <ThemeToggleButton />

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm border transition-all duration-300"
            style={{
              borderColor: 'var(--accent)',
              color: 'var(--accent)',
              fontFamily: 'var(--font-jetbrains), monospace',
              borderRadius: '4px',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent-glow)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            Resume
          </a>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggleButton />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: 'var(--text-primary)' }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: 'var(--nav-bg)', backdropFilter: 'blur(20px)' }}
          >
            <div className="px-8 py-6 flex flex-col gap-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollTo(item.id)
                    setMobileOpen(false)
                  }}
                  className="text-left text-sm py-2"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-jetbrains), monospace',
                  }}
                >
                  <span style={{ color: 'var(--accent)' }}>{item.index}. </span>
                  {item.label}
                </button>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm py-2"
                style={{ color: 'var(--accent)', fontFamily: 'var(--font-jetbrains), monospace' }}
              >
                Resume ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
