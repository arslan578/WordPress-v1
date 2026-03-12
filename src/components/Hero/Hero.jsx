import { useEffect, useRef, memo } from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import styles from './Hero.module.css'

const NetworkCanvas = memo(() => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    let animId
    const particles = []
    let cw = 0
    let ch = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      cw = canvas.offsetWidth
      ch = canvas.offsetHeight
      canvas.width = cw * dpr
      canvas.height = ch * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    // Create particles - fewer for performance
    const count = 50
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * cw,
        y: Math.random() * ch,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2 + 1,
        opacity: Math.random() * 0.4 + 0.15,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, cw, ch)

      // Update & draw particles
      for (let i = 0; i < count; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = cw
        if (p.x > cw) p.x = 0
        if (p.y < 0) p.y = ch
        if (p.y > ch) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`
        ctx.fill()
      }

      // Draw connections - batch with single path
      ctx.beginPath()
      ctx.strokeStyle = 'rgba(255,255,255,0.06)'
      ctx.lineWidth = 0.5
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          if (dx * dx + dy * dy < 14400) { // 120^2
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
          }
        }
      }
      ctx.stroke()

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.canvas} />
})

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] },
    }),
  }

  return (
    <section className={styles.hero}>
      {/* Background */}
      <div className={styles.bg} />
      <NetworkCanvas />

      <div className={styles.content}>
        <motion.span
          className={styles.badge}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <span className={styles.badgeLine} />
          WORDPRESS DEVELOPMENT AGENCY
        </motion.span>

        <motion.h1
          className={styles.title}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <span>WORDPRESS</span>
          <br />
          <span className={styles.blue}>SOLUTIONS</span>
          <br />
          <span>THAT SCALE.</span>
        </motion.h1>

        <motion.p
          className={styles.desc}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          We build custom WordPress themes, plugins, and WooCommerce stores
          engineered for speed, security, and millions of monthly visitors.
        </motion.p>

        <motion.div
          className={styles.buttons}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <a href="#services" className={styles.btnPrimary}>
            Our WordPress Services
          </a>
          <a href="#work" className={styles.btnOutline}>
            WordPress Projects <FaArrowRight />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className={styles.scrollLine}>
            <div className={styles.scrollDot} />
          </div>
          <span>SCROLL</span>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
