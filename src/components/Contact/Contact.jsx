import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import styles from './Contact.module.css'

export const Contact = () => {
  return <footer id='contact' className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>If you have any questions or comments, feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <SiGmail className="icon" style={{fontSize: '33px'}}/>
            <a href='mailto:keem.kasali@gmail.com'>Keem.Kasali@gmail.com</a>
        </li>
        <li className={styles.link}>
            <FaLinkedin className="icon" style={{fontSize: '33px'}}/>
            <a href='https://www.linkedin.com/in/hakeem-kasali-313772361'>LinkedIn</a>
        </li>
        <li className={styles.link}>
            <FaGithub className="icon" style={{fontSize: '33px'}} />
            <a href='https://github.com/Hakeem-404'>Github</a>
        </li>
    </ul>
  </footer>
}

export default Contact
// This is a functional component named "Contact" that returns a footer element.