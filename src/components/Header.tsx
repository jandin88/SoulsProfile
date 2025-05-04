// Header.tsx
import styles from "./styles/Header.module.css"; // importa como objeto
import profileImg from "../assets/icon.png"
const Header: React.FC = () => {
    // const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className={styles.header}>
            <img src={profileImg} alt="Foto de perfil" className={styles.avatar} />
            <h1 className={styles.title}>Janderson Coutinho</h1>
                {/* <p className={styles.subtitle}>“Varias almas um só perfil.”</p> */}
                <p className={styles.subtitle}>
                    “Different spirits, one profile.”
                </p>

            </header>

           
        </>
    );
};

export default Header;
