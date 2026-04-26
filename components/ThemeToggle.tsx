'use client'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      className="relative w-14 h-7 rounded-full border flex items-center px-1 transition-all duration-300"
      style={{
        background: 'var(--accent-glow)',
        borderColor: 'var(--border)',
      }}
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{ x: theme === 'dark' ? 0 : 28 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="w-5 h-5 rounded-full flex items-center justify-center text-xs"
        style={{ background: 'var(--accent)' }}
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </motion.div>
    </motion.button>
  )
}
