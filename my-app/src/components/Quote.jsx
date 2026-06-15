import styles from './Quote.module.css';

const Quote = () => (
  <section id="quote" className={styles.section}>
    <div className={styles.copy}>
      <div className={styles.stars}>
        ★★★★★ <span className={styles.rated}>Trusted by Westchester homeowners</span>
      </div>
      <h1 className={styles.headline}>JC Services &amp; Repairs</h1>
      <p className={styles.blurb}>
        Sewer &amp; drain cleaning, toilet, sink &amp; shower repairs — fast, honest, and local.
      </p>

      <ul className={styles.trust}>
        <li><span className={styles.check}>✓</span> Licensed &amp; insured</li>
        <li><span className={styles.check}>✓</span> 24/7 emergency service</li>
        <li><span className={styles.check}>✓</span> Free, no-pressure estimates</li>
      </ul>

      <a href="tel:914-751-9052" className={styles.callBtn}>
        📞 Call (914) 751‑9052
      </a>
    </div>

    <form
      className={styles.card}
      onSubmit={(e) => { e.preventDefault(); alert('Submitted (demo)'); }}
    >
      <h2 className={styles.formTitle}>Get a Free Quote</h2>
      <p className={styles.formSub}>Tell us what you need — we'll get right back to you.</p>

      <label className={styles.label}>
        Full Name *
        <input className={styles.input} name="name" type="text" placeholder="Jane Smith" required />
      </label>

      <label className={styles.label}>
        Email *
        <input className={styles.input} name="email" type="email" placeholder="you@email.com" required />
      </label>

      <label className={styles.label}>
        Phone *
        <input className={styles.input} name="phone" type="tel" placeholder="(914) 555‑0000" required />
      </label>

      <label className={styles.label}>
        Zip Code *
        <input className={styles.input} name="zip" type="text" placeholder="10601" required />
      </label>

      <label className={styles.label}>
        How can we help?
        <textarea className={styles.textarea} name="message" rows="3" placeholder="Briefly describe the issue…" />
      </label>

      <button className={styles.submit} type="submit">
        Submit Quote &raquo;
      </button>
    </form>
  </section>
);

export default Quote;
