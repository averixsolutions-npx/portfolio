'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaExternalLinkAlt, FaGithub, FaLock } from 'react-icons/fa'

type Project = {
  name: string
  category: string
  filterTag: string
  featured: boolean
  description: string
  tech: string[]
  liveLink: string | null
  codeLink: string | null
  rating: number | null
  testimonial: { text: string; name: string; role: string; initials: string } | null
}

const projects: Project[] = [
  {
    name: 'ApnaBot — WhatsApp Automation',
    category: 'SaaS · AI Automation',
    filterTag: 'SaaS',
    featured: true,
    description:
      'A powerful WhatsApp automation platform for businesses. Auto-reply to customers, capture bookings, process payments via Razorpay, manage product catalogs, and track all conversations from a unified dashboard.',
    tech: ['Node.js', 'WhatsApp Business API', 'Razorpay', 'React'],
    liveLink: 'https://www.averixsolutions.co.in/#',
    codeLink: null,
    rating: 5.0,
    testimonial: {
      text: 'Our salon went from missing 40% of inquiries to full automation. Revenue up 30% in 2 months.',
      name: 'Aisha Khan',
      role: 'Salon Owner, Mumbai',
      initials: 'AK',
    },
  },
  {
    name: 'SG-EMS — Employee Management System',
    category: 'SaaS · Web App',
    filterTag: 'SaaS',
    featured: false,
    description:
      'A complete HR and workforce management SaaS. Features attendance tracking, payroll processing, leave approvals, performance reviews, department hierarchy, and role-based access.',
    tech: ['React', 'Node.js', 'MongoDB', 'Vercel'],
    liveLink: 'https://sg-ems-new.vercel.app',
    codeLink: null,
    rating: 4.8,
    testimonial: {
      text: "Finally an EMS our HR team actually enjoys using. The dashboard is clean and everything just works.",
      name: 'Rahul Sharma',
      role: 'HR Manager',
      initials: 'RS',
    },
  },
  {
    name: 'QuickCab — Driver Community Platform',
    category: 'Mobile App · Community',
    filterTag: 'Mobile App',
    featured: false,
    description:
      'Built exclusively for the driver community. Connects drivers, manages ride assignments, tracks daily earnings, and builds a reliable local transport network.',
    tech: ['Flutter', 'Firebase', 'Google Maps API'],
    liveLink: 'https://www.averixsolutions.co.in/#',
    codeLink: null,
    rating: 4.9,
    testimonial: {
      text: 'This app completely changed how our driver network operates. Bookings are smooth and we finally have real-time visibility.',
      name: 'Govind Patil',
      role: 'Driver Community Lead',
      initials: 'GP',
    },
  },
  {
    name: 'Hotel Booking Application',
    category: 'Web App · E-Commerce',
    filterTag: 'Web App',
    featured: false,
    description:
      'Full-stack platform for browsing hotels, checking real-time room availability, and booking stays with secure Stripe payments. Includes admin portal for hotel owners.',
    tech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Cloudinary', 'Stripe'],
    liveLink: 'https://hotel-booking-demo.vercel.app',
    codeLink: 'https://github.com/adityagavali/hotel-booking',
    rating: null,
    testimonial: null,
  },
  {
    name: 'Grocery Store',
    category: 'Web App · E-Commerce',
    filterTag: 'Web App',
    featured: false,
    description:
      'Full-stack grocery store with user authentication, product listings, and a streamlined checkout process using Next.js, Node.js, and Strapi CMS.',
    tech: ['React.js', 'Next.js', 'Strapi CMS', 'Express.js', 'Node.js'],
    liveLink: 'https://grocery-store-demo.vercel.app',
    codeLink: 'https://github.com/adityagavali/grocery-store',
    rating: null,
    testimonial: null,
  },
]

const tabs = ['All', 'SaaS', 'Web App', 'Mobile App']

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map(s => (
        <span key={s} style={{ color: rating >= s ? '#fbbf24' : 'var(--text-muted)', fontSize: '14px' }}>★</span>
      ))}
      <span className="text-xs ml-1" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-jetbrains), monospace' }}>
        {rating.toFixed(1)}
      </span>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? projects : projects.filter(p => p.filterTag === filter)

  return (
    <section id="projects" className="py-24" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm mb-3"
             style={{ color: 'var(--accent)', fontFamily: 'var(--font-jetbrains), monospace' }}>
            04. Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-syne), sans-serif' }}>
            Featured Projects
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>Things I've built</p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className="px-5 py-2 rounded-full text-sm transition-all duration-200"
              style={{
                background: filter === tab ? 'var(--accent)' : 'var(--bg-card)',
                color: filter === tab ? 'var(--bg-primary)' : 'var(--text-secondary)',
                border: `1px solid ${filter === tab ? 'var(--accent)' : 'var(--border)'}`,
                fontFamily: 'var(--font-jetbrains), monospace',
                fontWeight: filter === tab ? 700 : 400,
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{
                  y: -6,
                  boxShadow: project.featured
                    ? '0 20px 60px rgba(0,212,255,0.2)'
                    : '0 20px 40px rgba(0,0,0,0.25)',
                }}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{
                  background: 'var(--bg-card)',
                  border: project.featured ? '1px solid var(--accent)' : '1px solid var(--card-border)',
                  boxShadow: project.featured ? '0 0 30px var(--accent-glow)' : 'none',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {/* Card top bar */}
                <div className="px-5 pt-5 pb-3 flex items-start justify-between gap-2">
                  <span
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      background: 'var(--accent-glow)',
                      color: 'var(--accent)',
                      border: '1px solid var(--border)',
                      fontFamily: 'var(--font-jetbrains), monospace',
                    }}
                  >
                    {project.category}
                  </span>
                  {project.featured && (
                    <span
                      className="text-xs px-3 py-1 rounded-full font-bold"
                      style={{
                        background: 'var(--accent)',
                        color: 'var(--bg-primary)',
                        fontFamily: 'var(--font-jetbrains), monospace',
                      }}
                    >
                      🔥 Featured
                    </span>
                  )}
                </div>

                <div className="px-5 pb-5 flex flex-col flex-1 gap-3">
                  <h3
                    className="text-lg font-bold"
                    style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-syne), sans-serif' }}
                  >
                    {project.name}
                  </h3>

                  <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>

                  {/* Star rating */}
                  {project.rating !== null && <StarRating rating={project.rating} />}

                  {/* Testimonial */}
                  {project.testimonial && (
                    <div
                      className="p-3 rounded-xl text-xs italic"
                      style={{ background: 'var(--bg-secondary)', borderLeft: '3px solid var(--accent)' }}
                    >
                      <p style={{ color: 'var(--text-secondary)' }}>"{project.testimonial.text}"</p>
                      <p className="mt-2 not-italic font-semibold" style={{ color: 'var(--text-primary)' }}>
                        — {project.testimonial.name}, <span style={{ color: 'var(--text-muted)' }}>{project.testimonial.role}</span>
                      </p>
                    </div>
                  )}

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded"
                        style={{
                          background: 'var(--bg-secondary)',
                          color: 'var(--accent)',
                          border: '1px solid var(--border)',
                          fontFamily: 'var(--font-jetbrains), monospace',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-1">
                    {project.liveLink ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm transition-colors duration-200"
                        style={{ color: 'var(--accent)' }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
                        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                      >
                        <FaExternalLinkAlt size={12} /> Live
                      </a>
                    ) : null}
                    {project.codeLink ? (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm transition-colors duration-200"
                        style={{ color: 'var(--text-secondary)' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                      >
                        <FaGithub size={13} /> Code
                      </a>
                    ) : (
                      <span
                        className="flex items-center gap-1.5 text-sm"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <FaLock size={11} /> Private
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
