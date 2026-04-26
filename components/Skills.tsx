'use client'
import { motion } from 'framer-motion'

const skillGroups = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Vue.js', 'React Native'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Socket.IO', 'JWT/RBAC'],
  },
  {
    category: 'Database',
    icon: '🗄️',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    skills: ['AWS', 'VPS/Linux', 'Docker', 'Vercel', 'Razorpay', 'Stripe'],
  },
  {
    category: 'Data & Tools',
    icon: '📊',
    skills: ['Python', 'Pandas', 'NumPy', 'Git', 'Postman', 'Jira'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-28">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm mb-3" style={{ color: 'var(--accent)', fontFamily: 'var(--font-jetbrains), monospace' }}>
            02. Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-syne), sans-serif' }}>
            Technical Skills
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>Technologies I work with</p>
        </motion.div>

        {/* Groups */}
        <div className="space-y-12">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">{group.icon}</span>
                <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-syne), sans-serif' }}>
                  {group.category}
                </h3>
                <div className="flex-1 h-px" style={{ background: 'var(--card-border)' }} />
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 12px var(--accent-glow)' }}
                    transition={{ duration: 0.3, delay: si * 0.04 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 rounded-full text-sm cursor-default transition-all duration-200"
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-jetbrains), monospace',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
