import React from 'react';
import styles from './styles/MainSection.module.css';

const CTAButtons = () => (
  <div className={styles.buttonContainer}>
    <button className={`${styles.button} ${styles.primary}`}>Get Started</button>
    <button className={`${styles.button} ${styles.secondary}`}>Learn More →</button>
  </div>
);

export default CTAButtons;
