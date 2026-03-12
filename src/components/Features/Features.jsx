import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBolt, FaShieldAlt, FaChartLine, FaSyncAlt } from 'react-icons/fa'
import styles from './Features.module.css'

const features = [
  {
    icon: FaBolt,
    title: 'WP Edge Caching',
    desc: 'WordPress-optimized CDN with full-page caching, object caching via Redis, and sub-100ms TTFB.',
  },
  {
    icon: FaShieldAlt,
    title: 'WordPress Security',
    desc: 'Wordfence integration, malware scanning, brute-force protection, and hardened wp-config for enterprise WordPress.',
  },
  {
    icon: FaChartLine,
    title: 'Core Web Vitals',
    desc: 'PHP & MySQL performance tuning for 90+ Lighthouse scores — lazy loading, image optimization, and database query cleanup.',
  },
  {
    icon: FaSyncAlt,
    title: 'Safe Auto Updates',
    desc: 'Automated PHP, MySQL, WordPress core, theme & plugin updates with visual regression testing and instant rollback.',
  },
]

const Features = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className={styles.section} id="features" ref={ref}>
      <div className={styles.topLine} />
      <div className={styles.header}>
        <div>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            WordPress Optimization Features
          </motion.h2>
          <motion.p
            className={styles.desc}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Everything your WordPress site needs to dominate search rankings
            and deliver a flawless user experience.
          </motion.p>
        </div>
        <div className={styles.headerLine} />
      </div>

      <div className={styles.grid}>
        {features.map((feat, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(0,0,0,0.08)' }}
          >
            <div className={styles.icon}>
              <feat.icon />
            </div>
            <h4>{feat.title}</h4>
            <p>{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Features
