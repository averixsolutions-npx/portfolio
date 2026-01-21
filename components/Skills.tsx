'use client'

import { motion } from 'framer-motion'
import { FaJs, FaPython, FaReact, FaNodeJs, FaDocker, FaGit, FaAws } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiVuedotjs, SiJira, SiPostman } from 'react-icons/si'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { BiLogoPostgresql } from 'react-icons/bi'

const skills = [
  { name: 'React.js', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'JavaScript', icon: FaJs },
  { name: 'Express', icon: SiExpress },

  { name: 'TypeScript', icon: SiTypescript },
  { name: 'HTML/CSS', icon: AiOutlineHtml5 },
  { name: 'SQL', icon: BiLogoPostgresql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Python', icon: FaPython },
  { name: 'React Native', icon: FaReact },
  { name: 'Pandas', icon: SiPostman }, // placeholder
  { name: 'NumPy', icon: SiPostman }, // placeholder
  { name: 'AWS', icon: FaAws },
]

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-28">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 text-center group"
            >
              <skill.icon className="w-8 h-8 mx-auto mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
              <h3 className="text-white font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
