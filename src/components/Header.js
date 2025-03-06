import React from 'react';
import SearchBar from './SearchBar';
import Filters from './Filters';
import '../App.css'; // Caminho corrigido

function Header({ darkMode, toggleDarkMode, setSearchTerm, setFilter }) {
  return (
    <header className="header">
      <h1>CineMatch</h1>
      <div className="header-controls">
        <SearchBar setSearchTerm={setSearchTerm} />
        <Filters setFilter={setFilter} />
        <button onClick={toggleDarkMode} className="theme-toggle">
          {darkMode ? 'Modo Claro' : 'Modo Escuro'}
        </button>
      </div>
    </header>
  );
}

export default Header;
