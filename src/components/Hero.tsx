import React from "react";
import styles from "./styles/Hero.module.css";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <h1 className={styles.title}>Duas almas, um só perfil.</h1>
            <p className={styles.subtitle}>
                Descubra quem sou como profissional e como pessoa. Escolha por
                onde começar.
            </p>
            <div className={styles.buttons}>
                <div>
                    <Link to="/professional" className={styles.buttonPrimary}>
                        Soul Work
                    </Link>
                    <p className={styles.caption}>Carreira & Projetos</p>
                </div>
                <div>
                    <Link to="/personal" className={styles.buttonSecondary}>
                        Soul Hobbies
                    </Link>
                    <p className={styles.caption}>Pessoal & Inspirações</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
