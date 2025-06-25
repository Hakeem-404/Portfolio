import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'
import heroImage from '/assets/misc/hero.png'

export const Hero = () => {
  return (
    <section className={styles.container} >
        <div className={styles.content}>
            <h1 className={styles.title}> Hi, i'm Hakeem</h1>
            <p className={styles.description}>
            I am a computing graduate passionate about AI, software development, and cloud systems currently based in London. My technical expertise spans across frontend (React, Vue, JavaScript, HTML/CSS), backend (Node.js, Java, SQL), and mobile development (Android, Xamarin). 
            I’ve built projects like an AI-powered symptom checker and a natural language healthcare virtual assistant, combining real-world impact with cutting-edge technology. Open to internships and collaborations — let's build something awesome!
            </p>
            <a href='mailto:keem.kasali@gmail.com' className={styles.contactBtn}>
                Contact Me
                </a>
        </div>
        {/* <img src={getImageUrl('misc/hero.png')} alt="Image of me" className={styles.heroImg}/> */}
        <img src={heroImage} alt="Image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>

        </section>
    );
};

export default Hero