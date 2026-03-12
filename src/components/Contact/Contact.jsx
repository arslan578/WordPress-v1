import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope } from 'react-icons/fa'
import styles from './Contact.module.css'

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    goals: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className={styles.section} id="contact" ref={ref}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className={styles.badge}>GET IN TOUCH</span>
            <h2 className={styles.title}>
              Let's Build Your <br />
              <span className={styles.highlight}>WordPress</span> Project
            </h2>
            <p className={styles.desc}>
              Tell us about your project and our WordPress experts will reach out
              within 24 hours to discuss your custom development strategy.
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>FULL NAME</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>EMAIL ADDRESS</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>CURRENT WEBSITE URL</label>
                <input
                  type="url"
                  name="website"
                  placeholder="https://mysite.com"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label>PROJECT DETAILS</label>
                <textarea
                  name="goals"
                  placeholder="Tell us about your WordPress project requirements..."
                  value={formData.goals}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className={styles.submit}>
                <FaEnvelope />
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className={styles.imageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=800&fit=crop&q=80"
                alt="Team working together"
                className={styles.image}
              />
            </div>

            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <h4>WordPress Experts</h4>
                <p>Certified WP developers on your project</p>
              </div>
              <div className={styles.infoCard}>
                <h4>Free WP Audit</h4>
                <p>Get a free WordPress site audit</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
