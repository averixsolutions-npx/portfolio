'use client'

import { motion } from 'framer-motion'

const navItems = [
  { label: 'Home', id: 'home', index: '01' },
  { label: 'Skills', id: 'skills', index: '02' },
  { label: 'Experience', id: 'experience', index: '03' },
  { label: 'Projects', id: 'projects', index: '04' },
  { label: 'Contact', id: 'contact', index: '05' },
]

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/5"
    >
      <nav className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-28 h-20 flex items-center justify-between ">

        {/* LOGO */}
        <div
          onClick={() => scrollTo('home')}
          className="text-cyan-400 font-mono text-lg cursor-pointer"
        >
          {'<AG />'}
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="group font-mono text-sm text-gray-300 hover:text-cyan-400 transition"
            >
              <span className="text-cyan-400 mr-1">
                {item.index}.
              </span>
              {item.label}
              <span className="block h-px bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
          ))}

          {/* RESUME CTA */}
          <a
            href="/resume.pdf"
            className="ml-4 px-4 py-2 border border-cyan-400 text-cyan-400 font-mono text-sm hover:bg-cyan-400/10 transition"
          >
            Resume
          </a>
        </div>
      </nav>
    </motion.header>
  )
}

export default Navbar
