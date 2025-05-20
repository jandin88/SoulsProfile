import React, { useEffect, useState } from 'react';
import styles from './styles/Favorite.module.css';
import gameData from '../mock/game.json';

interface Game {
  name: string;
  urlImg: string;
}

interface Anime {
  mal_id: number;
  title: string;
  url: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
}

const FavoritesShowcase: React.FC = () => {
  const [animeFavorites, setAnimeFavorites] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const games: Game[] = gameData.game;

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await fetch('https://api.jikan.moe/v4/users/Nisen_ni/favorites');
        const data = await res.json();
        setAnimeFavorites(data?.data?.anime?.slice().reverse() || []);
      } catch (err) {
        console.error('Erro ao buscar favoritos:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div className={styles.favoritesSection}>
      <h3 className={styles.sectionTitle}>Animes Favoritos</h3>
      {loading ? (
        <p className={styles.status}>Carregando...</p>
      ) : error ? (
        <p className={styles.status}>Erro ao carregar animes</p>
      ) : (
        <div className={styles.favoritesGrid}>
          {animeFavorites.map((anime) => (
            <a
              key={anime.mal_id}
              href={anime.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.favoriteCard}
            >
              <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                className={styles.favoriteImage}
              />
              <div className={styles.favoriteTitle}>{anime.title}</div>
            </a>
          ))}
        </div>
      )}

      <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Jogos Favoritos</h3>
      <div className={styles.favoritesGrid}>
        {games.map((game, index) => (
          <div key={index} className={styles.favoriteCard}>
            <img src={game.urlImg} alt={game.name} className={styles.favoriteImage} />
            <div className={styles.favoriteTitle}>{game.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesShowcase;
