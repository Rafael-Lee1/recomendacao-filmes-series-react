import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom'; // Remova o BrowserRouter daqui
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  // Busca filmes populares
  useEffect(() => {
    async function fetchPopularMovies() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=cb585cc2bd305d8f4092aeacaee36c05&page=${page}`
        );
        setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
      } catch (error) {
        console.error('Error fetching movies: ', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPopularMovies();
  }, [page]);

  // Aplica o tema escuro/claro
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    document.body.classList.toggle('light-mode', !darkMode);
  }, [darkMode]);

  // Adiciona/remove favoritos
  const toggleFavorite = (movie) => {
    if (favorites.some((fav) => fav.id === movie.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  // Filtra filmes
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
              favorites={favorites}
              loadMore={() => setPage(page + 1)}
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
