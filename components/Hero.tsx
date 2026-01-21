'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 min-h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full px-24 ">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm font-mono text-cyan-400 mb-4"
            >
              Hi, my name is
            </motion.p>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              Aditya Gavali.
            </h1>

            <h2 className="text-4xl md:text-2xl font-bold text-gray-400 mb-8">
            I design and build scalable Fullstack Software Applications.

            </h2>

            <p className="max-w-xl text-gray-400 leading-relaxed mb-10">
            I’m a Full-Stack MERN Developer and Technical Team Lead with
2+ years of experience building scalable, production-ready
applications. I specialize in React, Next.js, Node.js, and
MongoDB, with strong expertise in API design, database
architecture, cloud deployments on VPS, and workflow
automation that reduces manual processes.

            </p>

            <div className="flex gap-6">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 border border-cyan-400 text-cyan-400 font-mono text-sm hover:bg-cyan-400/10 transition"
              >
                View Work
              </a>

              <a
                href="/resume.pdf"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-gray-300 font-mono text-sm hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                Resume
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="flex justify-center md:justify-end"
          >
            <motion.div
              whileHover={{ y: -6 }}
              className="relative w-[280px] md:w-[340px] aspect-[3/4]"
            >
              {/* Outline */}
              <motion.div
                className="absolute inset-0 border-2 border-cyan-400 translate-x-4 translate-y-4"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Image card */}
              <div className="relative z-10 w-full h-full overflow-hidden bg-gray-900">
                <Image
                  src="/images/me.png"
                  alt="Aditya Gavali"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition duration-500"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero
