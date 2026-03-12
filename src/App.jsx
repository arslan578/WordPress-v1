import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Stats from './components/Stats/Stats'
import TechMarquee from './components/TechMarquee/TechMarquee'
import About from './components/About/About'
import Services from './components/Services/Services'
import Features from './components/Features/Features'
import WPServices from './components/WPServices/WPServices'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  // Smooth anchor scroll
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (target) {
        const id = target.getAttribute('href')
        if (id && id !== '#') {
          e.preventDefault()
          const el = document.querySelector(id)
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 80
            window.scrollTo({ top, behavior: 'smooth' })
          }
        }
      }
    }
    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Cursor Glow */}
      <div
        style={{
          position: 'fixed',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0,
          transform: `translate(${cursorPos.x - 150}px, ${cursorPos.y - 150}px)`,
          transition: 'transform 0.15s ease',
        }}
      />

      <Navbar />
      <Hero />
      <Stats />
      <TechMarquee />
      <About />
      <Services />
      <Features />
      <WPServices />
      <Projects />
      <Contact />
      <CTA />
      <Footer />
    </>
  )
}

export default App
