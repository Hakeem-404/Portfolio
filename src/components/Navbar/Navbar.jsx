import React, {useState} from 'react';
import styles from './Navbar.module.css';
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {getImageUrl} from '../../utils';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href='/'>Hk-Dev.</a>
      <div className={styles.menu}>
        <div className={styles.menuBtn}>
          {
          menuOpen ? 
            <AiOutlineClose className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)} /> : 
            <HiOutlineMenuAlt4 className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)} />
          }
          
        </div>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}>
          <li className={styles.nav}>
            <a href='#about'>About</a>
          </li>
          <li className={styles.nav}>
            <a href='#experience'>Experience</a>
          </li >
          <li className={styles.nav}>
            <a href='#projects'>Projects</a>
          </li>
          <li className={styles.nav}>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
