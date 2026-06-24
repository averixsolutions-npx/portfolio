'use client'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer
      className="py-10 border-t"
      style={{ background: 'var(--bg-primary)', borderColor: 'var(--card-border)' }}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">

        <p className="text-sm" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-jetbrains), monospace' }}>
          © {new Date().getFullYear()} Aditya Gavali. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Adityanpx"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-200 hover:scale-110"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-gavali-b79b4525a/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-200 hover:scale-110"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="mailto:aditya@averixsolutions.co.in"
            className="transition-all duration-200 hover:scale-110"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            aria-label="Email"
          >
            <FaEnvelope size={18} />
          </a>
        </div>

        <p className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-jetbrains), monospace' }}>
          Built by Aditya Gavali · Averix Solutions · Next.js + Framer Motion
        </p>

      </div>
    </footer>
  )
}
