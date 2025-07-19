import logo from '../images/plumbing.png'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={logo} alt="JC Plumbing" />
            </div>
            
            <div className={styles.phoneContainer}>
                <a href="tel:914-751-9052" className={styles.phoneNumber}>
                    (914) 751-9052
                </a>
            </div>
        </header>
    )
}

export default Header