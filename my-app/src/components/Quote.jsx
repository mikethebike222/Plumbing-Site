import styles from './Quote.module.css';

const Quote = () => (
  <section id="quote" className={styles.section}>
    <div className={styles.copy}>
      <div className={styles.stars}>★★★★★</div>
      <h1 className={styles.headline}>JC Plumbing<br/>Services & Repairs</h1>
      <p className={styles.blurb}>
        Sewer & drain cleaning, toilet/sink/shower repairs—fast, honest, local.
      </p>
    </div>

    <form
      className={styles.card}
      onSubmit={(e) => { e.preventDefault(); alert('Submitted (demo)'); }}
    >
      <h2 className={styles.formTitle}>GET A FREE QUOTE!</h2>

      <label className={styles.label}>
        Full Name *
        <input className={styles.input} name="name" type="text" required />
      </label>

      <label className={styles.label}>
        Email *
        <input className={styles.input} name="email" type="email" required />
      </label>

      <label className={styles.label}>
        Phone *
        <input className={styles.input} name="phone" type="tel" required />
      </label>

      <label className={styles.label}>
        Zip Code *
        <input className={styles.input} name="zip" type="text" required />
      </label>

      <label className={styles.label}>
        How can we help?
        <textarea className={styles.textarea} name="message" rows="3" />
      </label>

      <button className={styles.submit} type="submit">
        Submit Quote »
      </button>
    </form>
  </section>
);

export default Quote;
