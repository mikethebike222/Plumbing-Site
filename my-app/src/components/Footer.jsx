import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <h3 className={styles.brand}>JC Services &amp; Repairs</h3>
            <p className={styles.tagline}>
              Family-owned plumbing you can trust — fast, honest, and local.
            </p>
            <div className={styles.stars}>★★★★★</div>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.links}>
              <li><a href="#why-us">Why Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#quote">Get a Quote</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.links}>
              <li><a href="#services">Sewer Cleaning</a></li>
              <li><a href="#services">Drain Cleaning</a></li>
              <li><a href="#services">Toilet Repairs</a></li>
              <li><a href="#services">Sink &amp; Shower</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Get In Touch</h4>
            <ul className={styles.contact}>
              <li>
                <span className={styles.contactIcon} aria-hidden="true">📞</span>
                <a href="tel:914-751-9052" className={styles.phone}>(914) 751‑9052</a>
              </li>
              <li>
                <span className={styles.contactIcon} aria-hidden="true">📍</span>
                Westchester County, NY
              </li>
              <li>
                <span className={styles.contactIcon} aria-hidden="true">⏰</span>
                24/7 Emergency Service
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © 2025 JC Services &amp; Repairs. All rights reserved.
          </p>
          <p className={styles.builtBy}>Serving Westchester County and surrounding communities.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
