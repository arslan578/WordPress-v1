import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './CTA.module.css'

const CTA = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className={styles.title}>Ready to upgrade your WordPress?</h2>
          <p className={styles.desc}>
            Let's build your next WordPress project together. Our WordPress
            developers are ready to start your custom theme, plugin, or WooCommerce store.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <a href="#contact" className={styles.btn}>
            GET A WORDPRESS QUOTE
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
