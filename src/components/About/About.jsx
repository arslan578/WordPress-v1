import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBolt, FaGem, FaShieldAlt } from 'react-icons/fa'
import styles from './About.module.css'

const features = [
  { icon: FaBolt, label: 'WP Rocket & Redis Caching', color: 'perf' },
  { icon: FaGem, label: 'Custom Theme & Plugin Development', color: 'design' },
  { icon: FaShieldAlt, label: 'WordPress Security Hardening', color: 'security' },
]

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className={styles.about} id="about" ref={ref}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className={styles.badge}>WHO WE ARE</span>
            <h2 className={styles.title}>
              Beyond starter themes.
              <br />
              We build WordPress.
            </h2>
            <p className={styles.desc}>
              From custom PHP themes to headless WPGraphQL setups, we master the
              full WordPress stack — PHP, MySQL, JavaScript, REST API, WP Rocket,
              Redis, ACF Pro, and everything in between.
            </p>
            <div className={styles.features}>
              {features.map((feat, i) => (
                <motion.div
                  key={i}
                  className={styles.feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                >
                  <div className={`${styles.featureIcon} ${styles[feat.color]}`}>
                    <feat.icon />
                  </div>
                  <span>{feat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.images}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className={styles.imgDark}>
              <div className={styles.imgInner}>
                <div className={styles.mockDesktop}>
                  <div className={styles.mockBar}>
                    <span className={styles.dotRed} />
                    <span className={styles.dotYellow} />
                    <span className={styles.dotGreen} />
                  </div>
                  <div className={styles.mockContent}>
                    <div className={`${styles.mockLine} ${styles.medium}`} />
                    <div className={`${styles.mockLine} ${styles.short}`} />
                    <div className={styles.mockLine} />
                    <div className={`${styles.mockLine} ${styles.medium}`} />
                    <div className={`${styles.mockLine} ${styles.short}`} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.imgLight}>
              <div className={styles.imgInner}>
                <div className={styles.mockPhone}>
                  <div className={styles.phoneBar}>
                    <div className={styles.phoneNotch} />
                  </div>
                  <div className={styles.phoneContent}>
                    <div className={`${styles.mockLine} ${styles.medium}`} />
                    <div className={`${styles.mockLine} ${styles.short}`} />
                    <div className={styles.mockLine} />
                    <div className={`${styles.mockLine} ${styles.short}`} />
                    <div className={`${styles.mockLine} ${styles.medium}`} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
