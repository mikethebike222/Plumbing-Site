import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          © 2025 JC Services. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
