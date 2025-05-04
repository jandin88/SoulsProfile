import React from "react";
import styles from "./styles/Hero.module.css";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
    return (
        <section className={styles.heroWrapper}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Duas almas, um só perfil.</h1>
          <p className={styles.subtitle}>Escolha por onde começar.</p>
          <div className={styles.buttons}>
            <a href="/professional" className={styles.buttonPrimary}>Soul Jornada</a>
            <a href="/personal" className={styles.buttonSecondary}>Soul Hobbies</a>
          </div>
        </div>
      </section>
      
    );
};

export default Hero;
