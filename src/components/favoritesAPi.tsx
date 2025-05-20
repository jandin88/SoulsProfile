import React, { useEffect, useState } from 'react';
import styles from './styles/Favorite.module.css'
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

const FavoritesAnime: React.FC = () => {
  const [favorites, setFavorites] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await fetch('https://api.jikan.moe/v4/users/Nisen_ni/favorites');
        const data = await res.json();
        setFavorites(data?.data?.anime?.slice().reverse() || []);
      } catch (err) {
        console.error('Erro ao buscar favoritos:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  if (loading) return <p className={styles.status}>Carregando favoritos...</p>;
  if (error) return <p className={styles.status}>Erro ao carregar favoritos.</p>;

  return (
    <div className={styles.favoritesSection}>
      <h3 className={styles.sectionTitle}>Animes Favoritos</h3>
      <div className={styles.favoritesGrid}>
        {favorites.map((anime) => (
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
    </div>
  );
};

export default FavoritesAnime;
