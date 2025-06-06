"use client";
import styles from "./GlitchText.module.css";

const GlitchEffect = () => {
  return (
    <section className={styles.section}>
      <div className={styles.heroContainer}>
        <div className={styles.environment}></div>
        <h2 className={`${styles.hero} ${styles.glitch} ${styles.layers}`} data-text="Detailing">
          <span >Detailing</span>
        </h2>
      </div>
    </section>
  );
};

export default GlitchEffect;

