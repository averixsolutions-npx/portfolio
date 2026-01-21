'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Technical Team Lead (MERN Stack)',
    company: 'ACPL',
    period: 'Aug 2025 - Present',
    location: 'Remote',
    responsibilities: [
      'Leading a team of 7–8 developers to design and develop MERN-based applications aligned with Agile and Scrum practices',
      'Conducting sprint planning, code reviews, and mentoring team members to maintain high technical, code-quality standards and using Docker for maintaining flexibility',
      'Collaborating with stakeholders to define sprint goals, prioritize features, and deliver end-to-end technical solutions',
      'Personally contributed to core backend and frontend modules, handling complex integrations, API design, and database architecture during high-pressure project phases'
    ]
  },
  {
    role: 'Full-Stack Developer',
    company: 'Zapplo Technologies',
    period: 'Sep 2024 - July 2025',
    location: 'Pune, India',
    responsibilities: [
      'Developing an automation builder for top MNCs using React, Next.js, Node.js, and MongoDB, reducing manual workflows by 30%',
      'Effectively handled MongoDB operations, including data modeling, query optimization, and aggregation, ensuring consistent and scalable backend architecture'
    ]
  },
  {
    role: 'Software Developer',
    company: 'A3M NextGen',
    period: 'Jun 2023 - Aug 2024',
    location: 'Pune, India',
    responsibilities: [
      'Led full-stack real-time projects such as police CDR analysis system, Developed REST APIs, payment security, and Interakt bot automation',
      'Enhanced UI responsiveness and interactivity, optimizing user experience and front-end performance And understanding what exactly industry expectations are from developers'
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-18">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-gray-400 text-lg">My professional journey</p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-cyan-400 h-full"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">{exp.role}</h3>
                  <h4 className="text-lg font-semibold text-white mb-1">{exp.company}</h4>
                  <p className="text-gray-400 text-sm mb-2">{exp.period} | {exp.location}</p>
                  <ul className="text-gray-300 text-sm">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="mb-1">• {resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-4 h-4 bg-cyan-400 rounded-full border-4 border-black absolute left-1/2 transform -translate-x-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience