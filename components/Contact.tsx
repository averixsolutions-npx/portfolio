'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const inputStyle = {
  background: 'var(--bg-card)',
  border: '1px solid var(--border)',
  color: 'var(--text-primary)',
  borderRadius: '12px',
  padding: '12px 16px',
  width: '100%',
  outline: 'none',
  fontFamily: 'inherit',
  fontSize: '14px',
  transition: 'border-color 0.2s',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, subject, message } = form
    const text = `Hi Aditya! 👋\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || 'Portfolio Contact'}\n\n${message}`
    window.open(`https://wa.me/918600256200?text=${encodeURIComponent(text)}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-6xl mx-auto px-8 sm:px-16 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm mb-3"
             style={{ color: 'var(--accent)', fontFamily: 'var(--font-jetbrains), monospace' }}>
            05. Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-syne), sans-serif' }}>
            Get In Touch
          </h2>
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
               style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Open to opportunities</span>
          </div>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Have a project in mind? Let's build something great together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-6"
                  style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-syne), sans-serif' }}>
                Let's work together
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Whether you need a full-stack solution or just want to chat about tech — reach out.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: FaEnvelope, label: 'adityagavali0911@gmail.com', href: 'mailto:adityagavali0911@gmail.com' },
                { icon: FaPhone,    label: '+91-8600256200',             href: 'tel:+918600256200' },
                { icon: FaMapMarkerAlt, label: 'Pune, Maharashtra, India', href: null },
              ].map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                       style={{ background: 'var(--accent-glow)', border: '1px solid var(--border)' }}>
                    <Icon style={{ color: 'var(--accent)' }} size={16} />
                  </div>
                  {href ? (
                    <a href={href} style={{ color: 'var(--text-secondary)' }}
                       onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                       onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}>
                      {label}
                    </a>
                  ) : (
                    <span style={{ color: 'var(--text-secondary)' }}>{label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              {[
                { icon: FaGithub,   href: 'https://github.com/Adityanpx',                          label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/aditya-gavali-b79b4525a/', label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                />
              </div>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                required
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                style={{
                  background: sent ? 'var(--accent-secondary)' : 'var(--accent)',
                  color: 'var(--bg-primary)',
                  fontFamily: 'var(--font-jetbrains), monospace',
                }}
              >
                {sent ? '✓ Message Sent!' : 'Send Message →'}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
