import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <a className={styles.logo} href='/'>
          Hakeem Kasali
        </a>
        
        <ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <a href='#about' className={styles.navLink}>About</a>
          </li>
          <li className={styles.navItem}>
            <a href='#experience' className={styles.navLink}>Experience</a>
          </li>
          <li className={styles.navItem}>
            <a href='#projects' className={styles.navLink}>Projects</a>
          </li>
          <li className={styles.navItem}>
            <a href='#contact' className={styles.navLink}>Contact</a>
          </li>
        </ul>

        <button 
          className={styles.mobileMenuButton}
          onClick={handleMenuToggle}
          aria-label="Toggle mobile menu"
        >
          {menuOpen ? 
            <AiOutlineClose className={styles.menuIcon} /> : 
            <HiOutlineMenuAlt4 className={styles.menuIcon} />
          }
        </button>

        <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
          <ul className={styles.mobileMenuList}>
            <li>
              <a href='#about' className={styles.mobileMenuLink} onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li>
              <a href='#experience' className={styles.mobileMenuLink} onClick={handleLinkClick}>
                Experience
              </a>
            </li>
            <li>
              <a href='#projects' className={styles.mobileMenuLink} onClick={handleLinkClick}>
                Projects
              </a>
            </li>
            <li>
              <a href='#contact' className={styles.mobileMenuLink} onClick={handleLinkClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};