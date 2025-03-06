import React from 'react';

function Filters({ setFilter }) {
  return (
    <div className="filters">
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">Todos</option>
        <option value="28">Ação</option>
        <option value="12">Aventura</option>
        <option value="16">Animação</option>
        <option value="35">Comédia</option>
        <option value="80">Crime</option>
        <option value="99">Documentário</option>
        <option value="18">Drama</option>
        <option value="10751">Família</option>
        <option value="14">Fantasia</option>
        <option value="36">História</option>
        <option value="27">Terror</option>
        <option value="10402">Música</option>
        <option value="9648">Mistério</option>
        <option value="10749">Romance</option>
        <option value="878">Ficção Científica</option>
        <option value="10770">TV Movie</option>
        <option value="53">Thriller</option>
        <option value="10752">Guerra</option>
        <option value="37">Faroeste</option>
      </select>
    </div>
  );
}

export default Filters;
