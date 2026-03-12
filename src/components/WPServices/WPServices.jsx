import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaPaintBrush, FaPlug, FaShoppingCart, FaCode,
  FaSearch, FaServer, FaExchangeAlt, FaTools, FaUsers
} from 'react-icons/fa'
import styles from './WPServices.module.css'

const wpServices = [
  {
    icon: FaPaintBrush,
    title: 'Custom Theme Development',
    desc: 'Custom WordPress themes built with PHP, HTML, CSS & JavaScript. Clean hooks, filters, and template hierarchy — no bloated page builders.',
  },
  {
    icon: FaPlug,
    title: 'Plugin Development',
    desc: 'Custom PHP plugins with clean OOP architecture, WordPress hooks & filters, MySQL queries, and REST API endpoints.',
  },
  {
    icon: FaShoppingCart,
    title: 'WooCommerce Solutions',
    desc: 'Full-featured e-commerce stores with custom payment gateways, inventory management, and analytics.',
  },
  {
    icon: FaCode,
    title: 'Headless WordPress',
    desc: 'Decoupled WordPress with React/Next.js frontends via WPGraphQL & REST API. PHP backend + JavaScript frontend architecture.',
  },
  {
    icon: FaSearch,
    title: 'SEO Optimization',
    desc: 'Technical SEO audits, schema markup, site speed optimization, and content strategy for top rankings.',
  },
  {
    icon: FaServer,
    title: 'Managed WordPress Hosting',
    desc: 'Nginx/Apache server setup, PHP-FPM tuning, MySQL optimization, staging environments, automated backups, and SSL management.',
  },
  {
    icon: FaExchangeAlt,
    title: 'WordPress Migration',
    desc: 'Seamless migration from any platform to WordPress with zero downtime and complete data integrity.',
  },
  {
    icon: FaTools,
    title: 'Maintenance & Support',
    desc: 'PHP & MySQL updates, WordPress core patches, plugin compatibility testing, database optimization, and 24/7 monitoring.',
  },
  {
    icon: FaUsers,
    title: 'Multisite Networks',
    desc: 'WordPress multisite setup and management for enterprise networks with centralized administration.',
  },
]

const WPServices = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section className={styles.section} ref={ref}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <span className={styles.badge}>FULL-STACK WORDPRESS</span>
        <h2 className={styles.title}>Complete WordPress Solutions</h2>
        <p className={styles.desc}>
          From custom theme development to enterprise hosting, we handle every
          aspect of your WordPress ecosystem.
        </p>
      </motion.div>

      <div className={styles.grid}>
        {wpServices.map((service, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{
              y: -6,
              borderColor: 'rgba(37, 99, 235, 0.3)',
              background: '#162033',
            }}
          >
            <div className={styles.icon}>
              <service.icon />
            </div>
            <h4>{service.title}</h4>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default WPServices
