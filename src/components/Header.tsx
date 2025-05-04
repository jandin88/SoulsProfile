// Header.tsx
import React, { useState } from "react";
import styles from "./styles/Header.module.css"; // importa como objeto


const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Janderson Coutinho</h1>
            {/* <p className={styles.subtitle}>“Varias almas um só perfil.”</p> */}
            <p className={styles.subtitle}>“Different spirits, one profile.”</p>

            <div className={styles.right}>
                <nav className={`${styles.socials} ${menuOpen ? styles.open : ""}`}>
                    <a href="https://github.com" target="_blank">
                        GitHub
                    </a>
                    <a href="https://linkedin.com" target="_blank">
                        LinkedIn
                    </a>
                    <a href="mailto:email@email.com">Email</a>
                </nav>

                <button
                    className={styles.menuButton}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>
        </header>
    );
};

export default Header;
