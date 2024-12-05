import React from 'react';
import styles from './styles/MainSection.module.css';
import image from "../../../assets/1.jpg"

const ImageSection = () => (
  <div className={styles.imageContainer}>
    <img
      src={image} // Replace with your asset
      alt="Team working on laptops"
      className={styles.image}
    />
  </div>
);

export default ImageSection;
