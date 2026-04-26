'use client'
import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'MERN Team Lead — Backend & API Integration',
    company: 'Codestrup Infotech',
    period: 'Feb 2026 – Present',
    location: 'Remote',
    badge: '🔥 Current',
    color: '#00d4ff',
    responsibilities: [
      'Led backend and frontend team on large-scale MERN ecosystem (Playmate), designing and delivering 600+ REST APIs across booking, payments, social, and real-time systems',
      'Implemented secure JWT auth, RBAC, Socket.IO, and third-party integrations (Razorpay, AI services, FCM notifications)',
      'Engineered scalable MongoDB schemas for complex business logic, concurrency, and data-intensive SuperAdmin operations',
      'Developed critical systems: wallet (coins/diamonds), slot-locking booking engine, payment orchestration with audit-compliant financial flows',
    ],
  },
  {
    role: 'MERN Technical Team Lead',
    company: 'ACPL',
    period: 'Aug 2025 – Feb 2026',
    location: 'Remote',
    badge: null,
    color: '#7b2fff',
    responsibilities: [
      'Led and architected full-stack apps using React Native (Expo), Node.js, Express, and MongoDB, managing a team of 7–8 developers under Agile/Scrum',
      'Owned sprint execution via sprint planning, code reviews, mentoring, and Docker-based environments',
      'Supported web teams in building production-grade eCommerce platforms using Next.js, React, and Vue.js',
      'Independently designed and deployed a peer-review platform for Pune Army candidates — architecture, API design, DB modeling, frontend, and backend',
    ],
  },
  {
    role: 'Full-Stack Developer (Next.js)',
    company: 'Zapplo Technologies',
    period: 'Sep 2024 – July 2025',
    location: 'Pune, India',
    badge: null,
    color: '#00d4ff',
    responsibilities: [
      'Built an automation builder for top MNCs using React, Next.js, Node.js, and MongoDB, reducing manual workflows by 30%',
      'Handled MongoDB data modeling, query optimization, and aggregation pipelines for scalable backend architecture',
    ],
  },
  {
    role: 'Software Developer',
    company: 'A3M NextGen',
    period: 'Jun 2023 – Aug 2024',
    location: 'Pune, India',
    badge: null,
    color: '#7b2fff',
    responsibilities: [
      'Led full-stack real-time projects including police CDR analysis system',
      'Developed REST APIs, payment security systems, and Interakt bot automation',
      'Enhanced UI responsiveness and front-end performance across multiple client-facing products',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-5xl mx-auto px-8 sm:px-16 lg:px-8">

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
            03. Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-syne), sans-serif' }}>
            Work Experience
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>My professional journey</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2" style={{ borderColor: 'var(--timeline-line)' }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true }}
              className="relative ml-10 mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div
                className="absolute -left-[3.1rem] top-6 w-5 h-5 rounded-full border-4"
                style={{
                  background: exp.color,
                  borderColor: 'var(--bg-primary)',
                  boxShadow: `0 0 15px ${exp.color}80`,
                }}
              />

              {/* Glass card */}
              <div
                className="p-6 rounded-2xl backdrop-blur-sm"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--card-border)',
                }}
              >
                {/* Badge */}
                {exp.badge && (
                  <span
                    className="text-xs px-3 py-1 rounded-full mb-3 inline-block"
                    style={{
                      background: 'var(--accent-glow)',
                      color: 'var(--accent)',
                      border: '1px solid var(--border)',
                      fontFamily: 'var(--font-jetbrains), monospace',
                    }}
                  >
                    {exp.badge}
                  </span>
                )}

                <h3 className="text-lg font-bold mb-1" style={{ color: exp.color, fontFamily: 'var(--font-syne), sans-serif' }}>
                  {exp.role}
                </h3>

                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{exp.company}</span>
                  <span className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-jetbrains), monospace' }}>
                    {exp.period}
                  </span>
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>📍 {exp.location}</span>
                </div>

                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, j) => (
                    <li key={j} className="flex gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0 }}>▸</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
