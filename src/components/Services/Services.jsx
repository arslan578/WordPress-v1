import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaLayerGroup, FaShieldAlt, FaRocket, FaArrowRight } from 'react-icons/fa'
import styles from './Services.module.css'

const services = [
  {
    icon: FaLayerGroup,
    title: 'Headless WordPress',
    desc: 'PHP-powered WordPress backend with React/Next.js frontend via WPGraphQL & REST API for blazing-fast, scalable sites.',
    featured: false,
  },
  {
    icon: FaShieldAlt,
    title: 'WordPress Security',
    desc: 'Hardened WordPress installations with Wordfence, Sucuri, 2FA, and real-time threat monitoring — protecting your site 24/7.',
    featured: true,
    link: 'Explore Tech Stack',
  },
  {
    icon: FaRocket,
    title: 'WP Performance',
    desc: 'WP Rocket, Redis caching, PHP-FPM tuning, MySQL query optimization, and image compression for 90+ Core Web Vitals.',
    featured: false,
  },
]

const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className={styles.section} id="services" ref={ref}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <span className={styles.badge}>WHAT WE DO</span>
        <h2 className={styles.title}>WordPress Services</h2>
        <p className={styles.desc}>
          Full-stack WordPress development with PHP, MySQL, JavaScript —
          engineered for scale, security, and performance.
        </p>
      </motion.div>

      <div className={styles.grid}>
        {services.map((service, i) => (
          <motion.div
            key={i}
            className={`${styles.card} ${service.featured ? styles.featured : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            whileHover={service.featured ? { y: -24 } : { y: -8 }}
          >
            <div className={styles.icon}>
              <service.icon />
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            {service.link && (
              <a href="#" className={styles.link}>
                {service.link} <FaArrowRight />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Services
