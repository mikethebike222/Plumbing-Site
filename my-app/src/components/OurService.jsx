import styles from './OurService.module.css'

const OurService = () => {
  const services = [
    {
      icon: "🚰",
      title: "Sewer Cleaning",
      description: "Professional sewer line cleaning and maintenance to keep your system flowing smoothly."
    },
    {
      icon: "🔄",
      title: "Drain Cleaning",
      description: "Fast and effective drain cleaning services for clogged pipes and slow drains."
    },
    {
      icon: "🚽",
      title: "Toilet Repairs",
      description: "Expert toilet repair and replacement services for all makes and models."
    },
    {
      icon: "🚿",
      title: "Sink & Shower",
      description: "Complete sink and shower installation, repair, and maintenance services."
    }
  ]

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>
            Professional plumbing solutions for all your residential and commercial needs
          </p>
        </div>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.iconContainer}>
                <span className={styles.icon}>{service.icon}</span>
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.serviceArea}>
          <div className={styles.areaContent}>
            <h3 className={styles.areaTitle}>Service Area</h3>
            <p className={styles.areaDescription}>
              We proudly serve the greater Westchester County area including White Plains, 
              Yonkers, New Rochelle, Mount Vernon, and surrounding communities. 
              Our experienced team is available for emergency services 24/7.
            </p>
            <div className={styles.areaFeatures}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>📍</span>
                <span>Local Service</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>⏰</span>
                <span>24/7 Emergency</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🚗</span>
                <span>Same Day Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurService
