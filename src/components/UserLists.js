import React from 'react';

function UserLists({ favorites, watchlist, watched }) {
  return (
    <div className="user-lists">
      <h2>Favoritos</h2>
      <div className="movie-list">
        {favorites.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>

      <h2>Watchlist</h2>
      <div className="movie-list">
        {watchlist.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>

      <h2>Assistidos</h2>
      <div className="movie-list">
        {watched.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserLists;
