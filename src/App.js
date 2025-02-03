import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Footer';

function PopularMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchPopularMovies() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=cb585cc2bd305d8f4092aeacaee36c05`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching CineMatch: ', error);
      }
    }

    fetchPopularMovies();
  }, []);

  return (
    <div className="container">
      <h2 className="title">CineMatch</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <a href="https://www.netmovies.com.br" target="_blank" rel="noopener noreferrer">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="poster"
            />
            </a>
            <div className="movie-details">
              <h3 className="movie-title">{movie.title}</h3>
              <p className="movie-overview">{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer /> {/* Adicione o componente do footer */}
    </div>
  );
}

export default PopularMovies;
