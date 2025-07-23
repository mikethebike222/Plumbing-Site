import logo from '../images/plumbing.png'
import styles from './Header.module.css'

const Header = () => (
  <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="JC Plumbing" />

    <nav className={styles.nav}>
      <a href="#why-us" className={styles.link}>Why Us</a>
      <a href="#services" className={styles.link}>Services</a>
      <a href="#contact" className={styles.link}>Contact</a>
    </nav>

    <a href="tel:914-751-9052" className={styles.phoneBtn}>
      (914) 751‑9052
    </a>
  </header>
)

export default Header
