'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
  {
    name: 'Hotel-Booking Application',
    description: 'Developed A full-stack platform where users can browse hotels, check real-time room availability, and book stays with secure test payments via Stripe. Hotel owners can register their properties through an admin portal, manage room listings (stored in MongoDB), and view all bookings. The system features Express.js APIs for backend operations, Next.js for dynamic rendering, and Cloudinary for efficient hotel/room image management - providing a complete solution from discovery to booking to property management.',
    techStack: ['React', 'SQL', 'Vue', 'Node', 'Express', 'MongoDB', 'Cloudinary', 'Stripe'],
    image: '/images/project1.jpg',
    liveLink: 'https://hotel-booking-demo.vercel.app',
    codeLink: 'https://github.com/adityagavali/hotel-booking'
  },
  {
    name: 'Grocery-Store',
    description: 'Developed a full-stack grocery store application using Next.js, Node.js, and Strapi CMS. Leveraged modern technologies like Tailwind CSS and shadcn for an intuitive, responsive UI. The application includes user authentication, product listings, and a streamlined checkout process, providing an efficient and engaging shopping experience.',
    techStack: ['React.js', 'Next.js', 'Strapi CMS', 'Express.js', 'Node.js'],
    image: '/images/project2.jpg',
    liveLink: 'https://grocery-store-demo.vercel.app',
    codeLink: 'https://github.com/adityagavali/grocery-store'
  },
  {
    name: 'DDoS Prevention Tool',
    description: '3rd in Smart India Hackathon – Built a DDoS prevention tool on AWS.',
    techStack: ['AWS', 'Python', 'Network Security'],
    image: '/images/project3.jpg',
    liveLink: 'https://ddos-tool-demo.vercel.app',
    codeLink: 'https://github.com/adityagavali/ddos-prevention'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg">Some of my recent work</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ rotateY: 5, scale: 1.02 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="h-48 bg-gray-700 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="bg-cyan-400 text-black px-2 py-1 rounded text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 cursor-pointer"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects