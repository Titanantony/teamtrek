import React from 'react';
import styles from './styles/MainSection.module.css';

const Header = () => (
  <div>
    <h1 className={styles.headerTitle}>
      Empower Your Team <span className={styles.fadeIn}>with Teamtrek</span>
    </h1>
    <p className={styles.description}>
      Experience the future of project management with Teamtrek, where collaboration meets efficiency. Streamline your workflow and achieve your goals with ease.
    </p>
  </div>
);

export default Header;
