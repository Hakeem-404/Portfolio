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
            I’m a versatile developer passionate about crafting elegant, user-focused digital solutions across web, mobile, and AI platforms. 
            My technical expertise spans frontend (React, JavaScript, HTML/CSS), backend (Node.js, Java, SQL), and mobile development (Android, Xamarin). 
            I’ve built projects like an AI-powered symptom checker and a natural language healthcare virtual assistant, combining real-world impact with cutting-edge technology. 
            I thrive in Agile teams and continuously explore emerging tools—from NLP to cross-platform frameworks—to deliver seamless, innovative experiences across the stack. 
            My portfolio reflects a commitment to solving real problems through thoughtful, user-centered engineering.
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