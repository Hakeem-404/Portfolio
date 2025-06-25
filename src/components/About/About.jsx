import React from 'react'
import styles from './About.module.css'
import {getImageUrl} from '../../utils/'

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}> About Me</h2>
        <div className={styles.content}>
            <img src={getImageUrl("misc/about.png")} alt="About icon/image" className={styles.heroImg}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("misc/frontend.png")} alt="frontend" className={styles.aboutImg}/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm experienced in building responsive, intuitive web interfaces using React/Vue, JavaScript, HTML, and modern CSS frameworks. My work focuses on creating accessible user experiences with attention to performance optimisation and cross-browser compatibility.</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("misc/backend.png")} alt="backend" className={styles.aboutImg}/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I complement my frontend skills with backend knowledge in Node.js, Express, and database systems. My experience includes designing RESTful APIs, implementing authentication systems, and creating persistent storage solutions. </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("misc/ui.png")} alt="ui" className={styles.aboutImg}/>
                    <div className={styles.aboutItemText}>
                        <h3>UI Developer</h3>
                        <p>I bridge design and implementation by translating visual concepts into functional interfaces. Skilled in human-computer interaction principles, I create intuitive mobile and web applications that provide excellent user experiences. I develop using Agile methodologies with experience in SCRUM, ensuring iterative improvements based on user feedback. </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("misc/mobile.png")} alt="ui" className={styles.aboutImg}/>
                    <div className={styles.aboutItemText}>
                        <h3>Mobile Developer</h3>
                        <p>I build native Android applications and cross-platform solutions using Java and Xamarin/MAUI frameworks. My mobile development skills include implementing local data persistence, cloud synchronization, and creating intuitive mobile interfaces that work across different screen sizes and device capabilities. </p>
                    </div>
                </li>


                <li className={styles.aboutItem}>
                    <img src={getImageUrl("misc/ai2.png")} alt="ui" className={styles.aboutImg}/>
                    <div className={styles.aboutItemText}>
                        <h3>AI Integration Specialist</h3>
                        <p>I incorporate natural language processing and machine learning capabilities into applications to create intelligent user experiences. My skills include implementing data validation systems for AI training and developing feedback mechanisms to continuously improve system responses based on user interaction. </p>
                    </div>
                </li>
            </ul>
        </div>

        </section>
    );
}
export default About
