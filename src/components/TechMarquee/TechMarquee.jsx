import {
  FaWordpress, FaShoppingCart, FaPaintBrush, FaSearch,
  FaPlug, FaDatabase, FaRocket, FaShieldAlt, FaBolt,
  FaServer, FaCode, FaPalette, FaPhp, FaCogs, FaSitemap,
  FaFileCode, FaLock, FaLayerGroup
} from 'react-icons/fa'
import { SiMysql, SiPhp, SiApache, SiNginx, SiGraphql, SiJavascript } from 'react-icons/si'
import styles from './TechMarquee.module.css'

const techItems = [
  { icon: FaWordpress, label: 'WordPress' },
  { icon: SiPhp, label: 'PHP' },
  { icon: SiMysql, label: 'MySQL' },
  { icon: FaCode, label: 'WooCommerce' },
  { icon: FaPalette, label: 'Elementor' },
  { icon: FaServer, label: 'ACF Pro' },
  { icon: FaBolt, label: 'Gutenberg' },
  { icon: FaShieldAlt, label: 'Wordfence' },
  { icon: FaRocket, label: 'WP Rocket' },
  { icon: FaDatabase, label: 'REST API' },
  { icon: SiGraphql, label: 'WPGraphQL' },
  { icon: FaPlug, label: 'Custom Plugins' },
  { icon: FaPaintBrush, label: 'Custom Themes' },
  { icon: FaShoppingCart, label: 'WooCommerce' },
  { icon: FaSearch, label: 'Yoast SEO' },
  { icon: SiApache, label: 'Apache' },
  { icon: SiNginx, label: 'Nginx' },
  { icon: SiJavascript, label: 'JavaScript' },
  { icon: FaLayerGroup, label: 'Multisite' },
  { icon: FaLock, label: 'Sucuri' },
]

const TechMarquee = () => {
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {[...techItems, ...techItems].map((item, i) => (
          <span key={i} className={styles.item}>
            <item.icon />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  )
}

export default TechMarquee
