'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import IntroScreen from '../components/IntroScreen'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <>
      <IntroScreen onComplete={() => setIntroComplete(true)} />

      {introComplete && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
        >
          <Navbar />
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </>
  )
}
