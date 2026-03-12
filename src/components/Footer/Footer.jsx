import { FaWordpress, FaGlobe, FaUsers, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <FaWordpress />
            </div>
            <span>WPExperts</span>
          </div>
          <p className={styles.brandDesc}>
            Leading WordPress development agency specializing in high-performance
            websites and custom enterprise solutions.
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialIcon}><FaGlobe /></a>
            <a href="#" className={styles.socialIcon}><FaUsers /></a>
            <a href="#" className={styles.socialIcon}><FaEnvelope /></a>
          </div>
        </div>

        <div className={styles.column}>
          <h4>Services</h4>
          <a href="#">Custom Themes</a>
          <a href="#">Plugin Development</a>
          <a href="#">WooCommerce Setup</a>
          <a href="#">Performance Tuning</a>
        </div>

        <div className={styles.column}>
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Case Studies</a>
          <a href="#">Our Process</a>
          <a href="#">Contact</a>
        </div>

        <div className={styles.column}>
          <h4>Office</h4>
          <div className={styles.contactItem}>
            <FaMapMarkerAlt />
            <span>123 Tech Avenue, San Francisco, CA</span>
          </div>
          <div className={styles.contactItem}>
            <FaPhone />
            <span>+1 (555) 000-0000</span>
          </div>
          <div className={styles.contactItem}>
            <MdEmail />
            <span>hello@wpexperts.com</span>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>&copy; 2024 WPExperts Agency. All rights reserved.</span>
        <div className={styles.bottomLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
