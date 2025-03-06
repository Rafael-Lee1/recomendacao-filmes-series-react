import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function MovieList({ movies, loading, toggleFavorite, toggleWatchlist, favorites, watchlist, loadMore, onMovieClick }) {
  const [activeTrailer, setActiveTrailer] = useState(null);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
          <LazyLoadImage
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            effect="blur"
            className="poster"
            onClick={() => onMovieClick(movie.id)} // Adicionando o evento de clique
            style={{ cursor: 'pointer' }} // Mudando o cursor para indicar que é clicável
          />

          <div className="movie-details">
            <h3 className="movie-title">{movie.title}</h3>

            <div className="actions">
              <button
                className="action-button"
                onClick={() => toggleFavorite(movie)}
              >
                {favorites.some(fav => fav.id === movie.id) ? '❤️' : '🤍'}
              </button>

              <button
                className="action-button"
                onClick={() => toggleWatchlist(movie)}
              >
                {watchlist.some(item => item.id === movie.id) ? '✅' : '➕'}
              </button>

              {movie.trailerKey && (
                <button
                  className="action-button trailer-button"
                  onClick={() => setActiveTrailer(activeTrailer === movie.id ? null : movie.id)}
                >
                  ▶️
                </button>
              )}
            </div>

            {movie.trailerKey ? (
              <div className={`trailer-container ${activeTrailer === movie.id ? 'active' : ''}`}>
                <div className="trailer">
                  <iframe
                    src={`https://www.youtube.com/embed/${movie.trailerKey}`}
                    title={`${movie.title} Trailer`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ) : (
              <div className="no-trailer">Trailer não disponível</div>
            )}
          </div>
        </div>
      ))}

      {loading && <p className="loading">Carregando mais filmes...</p>}
      <button className="load-more" onClick={loadMore}>Carregar Mais</button>
    </div>
  );
}

export default MovieList;
