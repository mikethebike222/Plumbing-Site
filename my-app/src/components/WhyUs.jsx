import styles from './WhyUs.module.css'

const WhyUs = () => {
  const benefits = [
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Owned & Operated",
      description: "Personal service with family values at the heart of everything we do."
    },
    {
      icon: "⏰",
      title: "30 Years of Experience",
      description: "Decades of expertise ensuring quality workmanship and reliable service."
    },
    {
      icon: "🛡️",
      title: "Fully Licensed & Insured",
      description: "Complete peace of mind with proper licensing and comprehensive insurance coverage."
    },
    {
      icon: "❤️",
      title: "Trust Customers Like Family",
      description: "We treat every customer with the same care and respect as our own family."
    }
  ]

  return (
    <section id="why-us" className={styles.whyUs}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Why Choose JC Plumbing?</h2>
          <p className={styles.subtitle}>
            Experience the difference that family values and professional expertise make
          </p>
        </div>
        
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <div className={styles.iconContainer}>
                <span className={styles.icon}>{benefit.icon}</span>
              </div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
