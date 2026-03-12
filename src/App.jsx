import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
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
  const lenisRef = useRef(null)

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    })
    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  // Smooth anchor scroll via Lenis
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (target) {
        const id = target.getAttribute('href')
        if (id && id !== '#') {
          e.preventDefault()
          const el = document.querySelector(id)
          if (el && lenisRef.current) {
            lenisRef.current.scrollTo(el, { offset: -80 })
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
