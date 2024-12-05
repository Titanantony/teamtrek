import React from 'react';
import Header from './Header';
import CTAButtons from './CTAButtons';
import Statistics from './Statistics';
import ImageSection from './ImageSection';
import styles from './styles/MainSection.module.css';

const MainSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContent}>
        <Header />
        <CTAButtons />
        <Statistics />
      </div>
      <ImageSection />
    </section>
  );
};

export default MainSection;
