// src/components/PopularMovies.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PopularMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchPopularMovies() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY_HERE`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching popular movies: ', error);
      }
    }

    fetchPopularMovies();
  }, []);

  return (
    <div>
      <h2>Popular Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PopularMovies;
