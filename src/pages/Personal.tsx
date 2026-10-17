import Header from '../components/Header';
import ParticlesBackground from '../util/particles/Particles';
import {
  FaSteam,
  FaInstagram,
  // FaGamepad,
  // FaAtom,
  // FaBook
} from 'react-icons/fa';
import { SiMyanimelist } from 'react-icons/si';
import styles from './styles/Personal.module.css';
import FavoritesAnime from '../components/favoritesAPi';

export default function Personal() {
  return (
    <div className={styles.page}>
      <ParticlesBackground />
      <Header />

      <section className={styles.hero}>
        <h2>Bem-vindo ao meu playground!</h2>
        <p>Aqui compartilho minhas paixões: jogos, animes, ciência, filosofia e leitura.</p>
      </section>

      <section className={styles.links}>
        <a
          className={`${styles.link} ${styles.mal}`}
          href="https://myanimelist.net/profile/seu-usuario"
          target="_blank"
          rel="noreferrer"
        >
          <SiMyanimelist /> MyAnimeList
        </a>
        <a
          className={`${styles.link} ${styles.instagram}`}
          href="https://instagram.com/seu-perfil"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram /> Instagram
        </a>
        <a
          className={`${styles.link} ${styles.steam}`}
          href="https://steamcommunity.com/id/seu-usuario"
          target="_blank"
          rel="noreferrer"
        >
          <FaSteam /> Steam
        </a>
      </section>

      
        <section className="mt-10">
        <FavoritesAnime />
      </section>

      <section className={styles.science}>
        <h3>Ciência & Filosofia</h3>
        <div className={styles.cards}>
          {[
            { text: '“Penso, logo existo.”', author: 'Descartes' },
            { text: '“A ciência é o grande antídoto contra o veneno do entusiasmo e da superstição.”', author: 'Adam Smith' },
            { text: '“O que não nos mata nos torna mais fortes.”', author: 'Nietzsche' },
          ].map((item, i) => (
            <div key={i} className={styles.card}>
              <FaAtom className={styles.icon} />
              <blockquote>
                <p>{item.text}</p>
                <footer>- {item.author}</footer>
              </blockquote>
            </div>
          ))}
        </div>
      </section>


      <section className={styles.reading}>
        <h3>Leituras Recentes</h3>
        <ul className={styles.bookList}>
          {['1984', 'Sapiens', 'O Mundo de Sofia', 'O Conto da Aia'].map(book => (
            <li key={book} className={styles.bookItem}>
              <FaBook className={styles.iconSmall} />
              {book}
            </li>
          ))}
        </ul>
      </section>

      <footer className={styles.footer}>
        Obrigado por explorar meu lado pessoal e gamer! 🎮📚
      </footer>
    </div>
  );
}
