// Header.tsx
import React from 'react';
import styles from './styles/Header.module.css'; // importa como objeto

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Janderson Coutinho</h1>
      {/* <p className={styles.subtitle}>“Varias almas um só perfil.”</p> */}
      <p className={styles.subtitle}>“Different spirits, one profile.”</p>
      <div className={styles.socials}>
        <a href="https://github.com/seu-usuario" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:seu@email.com">Email</a>
      </div>
    </header>
  );
};

export default Header;
