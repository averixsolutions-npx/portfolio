import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="bg-black text-white ">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
