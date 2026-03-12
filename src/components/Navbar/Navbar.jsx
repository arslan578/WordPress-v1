import { useState, useEffect } from 'react'
import { FaWordpress, FaBars, FaTimes } from 'react-icons/fa'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'WORK', href: '#work' },
    { label: 'SERVICES', href: '#services' },
    { label: 'LABS', href: '#features' },
    { label: 'CONTACT', href: '#contact' },
  ]

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logo}>
        <div className={styles.logoIcon}>
          <FaWordpress />
        </div>
        <span>WP STUDIO</span>
      </a>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className={styles.cta} onClick={() => setMenuOpen(false)}>
            START A PROJECT
          </a>
        </li>
      </ul>

      <button className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  )
}

export default Navbar
