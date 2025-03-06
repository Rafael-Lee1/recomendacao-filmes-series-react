import React from 'react';

function SearchBar({ setSearchTerm }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar filmes..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
