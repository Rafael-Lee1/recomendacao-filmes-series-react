import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    async function fetchPopularMovies() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=cb585cc2bd305d8f4092aeacaee36c05&page=${page}`
        );

        const moviesWithTrailers = await Promise.all(
          response.data.results.map(async (movie) => {
            try {
              const trailerResponse = await axios.get(
                `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=cb585cc2bd305d8f4092aeacaee36c05`
              );
              const trailer = trailerResponse.data.results.find(
                (video) => video.type === 'Trailer' && video.site === 'YouTube'
              );
              return { ...movie, trailerKey: trailer?.key };
            } catch (error) {
              console.error(`Error fetching trailer for movie ${movie.id}:`, error);
              return { ...movie, trailerKey: null };
            }
          })
        );

        setMovies((prevMovies) => [...prevMovies, ...moviesWithTrailers]);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPopularMovies();
  }, [page]);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    document.body.classList.toggle('light-mode', !darkMode);
  }, [darkMode]);

  const toggleFavorite = (movie) => {
    setFavorites(favorites.some((fav) => fav.id === movie.id)
      ? favorites.filter((fav) => fav.id !== movie.id)
      : [...favorites, movie]
    );
  };

  const toggleWatchlist = (movie) => {
    setWatchlist(watchlist.some((item) => item.id === movie.id)
      ? watchlist.filter((item) => item.id !== movie.id)
      : [...watchlist, movie]
    );
  };

  // Função para redirecionar para a página do filme no TMDb
  const handleMovieClick = (movieId) => {
    window.location.href = `https://www.themoviedb.org/movie/${movieId}`;
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' ? true : movie.genre_ids.includes(Number(filter));
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="App">
      <Header
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
        setSearchTerm={setSearchTerm}
        setFilter={setFilter}
      />
      <Routes>
        <Route
          path="/"
          element={
            <MovieList
              movies={filteredMovies}
              loading={loading}
              toggleFavorite={toggleFavorite}
              toggleWatchlist={toggleWatchlist}
              favorites={favorites}
              watchlist={watchlist}
              loadMore={() => setPage(page + 1)}
              onMovieClick={handleMovieClick} // Passando a função para o MovieList
            />
          }
        />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
