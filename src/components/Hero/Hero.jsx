import React from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.backgroundElements}>
        <div className={`${styles.backgroundBlob} ${styles.blob1}`}></div>
        <div className={`${styles.backgroundBlob} ${styles.blob2}`}></div>
        <div className={`${styles.backgroundBlob} ${styles.blob3}`}></div>
      </div>
      
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>Hello, I'm</p>
          <h1 className={styles.heroTitle}>
            Hakeem Kasali
          </h1>
          <p className={styles.heroDescription}>
            A passionate computing graduate specializing in AI, software development, and cloud systems. 
            I create innovative solutions that bridge cutting-edge technology with real-world impact.
          </p>
          <div className={styles.heroActions}>
            <a href='#projects' className={styles.ctaButton}>
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href='mailto:keem.kasali@gmail.com' className={styles.secondaryButton}>
              Get In Touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className={styles.heroImage}>
          <img 
            src={getImageUrl('misc/hero.png')} 
            alt="Hakeem Kasali" 
            className={styles.profileImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;