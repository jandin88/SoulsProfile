// src/components/Footer.tsx
import React from 'react';
import styles from './styles/Footer.module.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.socials}>
      <a href="https://linkedin.com/in/janderson-coutinho" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/jandin88" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="mailto:jandersson.coutinho@gmail.com">
        <FaEnvelope />
      </a>
      <a href="https://wa.me/5533999312218" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
    </div>
    <p className={styles.copy}>&copy; {new Date().getFullYear()} Janderson  Coutinho.</p>
  </footer>
);

export default Footer;