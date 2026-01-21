'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa'

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:adityagavali0911@gmail.com'
  }

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg mb-8">Let's work together</p>
          <div className="text-center mb-8">
            <p className="text-gray-300 mb-2">Pune, Maharashtra</p>
            <p className="text-gray-300 mb-2">+91-8600256200</p>
            <p className="text-gray-300">adityagavali0911@gmail.com</p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <button
              onClick={handleEmailClick}
              className="bg-cyan-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-cyan-300 transition-colors duration-300 flex items-center gap-2 cursor-pointer"
            >
              <FaEnvelope /> Send Email
            </button>
            <div className="flex gap-6">
              <a
                href="https://github.com/adityagavali"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/adityagavali"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://leetcode.com/adityagavali"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
              >
                <FaCode size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <footer className="mt-20 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 text-center">
          <p className="text-gray-400">&copy; 2024 Aditya Gavali. All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}

export default Contact