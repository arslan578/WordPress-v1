import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './Projects.module.css'

const projects = [
  {
    title: 'Vanguard Analytics',
    desc: 'Custom WordPress Dashboard + WooCommerce',
    color: 'teal',
    type: 'mock',
    mockTitle: 'WordPress SaaS Dashboard',
  },
  {
    title: 'Lumina Creative',
    desc: 'Headless WordPress + Next.js Portfolio',
    color: 'gold',
    type: 'box',
    boxText: 'WOOCOMMERCE STORE',
  },
  {
    title: 'Nexus Academy',
    desc: 'WordPress LMS with LearnDash & BuddyPress',
    color: 'purple',
    type: 'mock',
    mockTitle: 'WordPress LMS Platform',
  },
  {
    title: 'Apex Publishing',
    desc: 'WordPress Multisite Blog Network',
    color: 'green',
    type: 'box',
    boxText: 'WP MULTISITE',
  },
]

const ProjectMock = ({ title }) => (
  <div className={styles.mock}>
    <div className={styles.mockBar}>
      <span className={styles.dotRed} />
      <span className={styles.dotYellow} />
      <span className={styles.dotGreen} />
    </div>
    <div className={styles.mockBody}>
      <h5>{title}</h5>
      <div className={`${styles.mockLine} ${styles.short}`} />
      <div className={styles.mockLine} />
      <div className={`${styles.mockLine} ${styles.medium}`} />
      <div className={styles.mockBtn}>Learn More</div>
    </div>
  </div>
)

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className={styles.section} id="work" ref={ref}>
      <div className={styles.header}>
        <div>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            Our WordPress Projects
          </motion.h2>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Custom WordPress themes, plugins, and WooCommerce stores we've
            built for our clients.
          </motion.p>
        </div>
        <a href="#" className={styles.seeAll}>
          All WordPress Projects
        </a>
      </div>

      <div className={styles.grid}>
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.12 }}
            whileHover={{ y: -6 }}
          >
            <div className={`${styles.thumb} ${styles[project.color]}`}>
              <div className={styles.thumbContent}>
                {project.type === 'mock' ? (
                  <ProjectMock title={project.mockTitle} />
                ) : (
                  <div className={styles.box}>{project.boxText}</div>
                )}
              </div>
            </div>
            <div className={styles.info}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
