import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function MovieList({ movies, loading, toggleFavorite, favorites, loadMore }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
          <LazyLoadImage
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            effect="blur"
            className="poster"
          />
          <div className="movie-details">
            <h3>{movie.title}</h3>
            <button onClick={() => toggleFavorite(movie)}>
              {favorites.some((fav) => fav.id === movie.id) ? '❤️' : '🤍'}
            </button>
          </div>
        </div>
      ))}
      {loading && <p>Carregando...</p>}
      <button onClick={loadMore}>Carregar Mais</button>
    </div>
  );
}

export default MovieList;
