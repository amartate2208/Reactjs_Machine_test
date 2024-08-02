// src/pages/SearchPage.js
import React, { useState } from 'react';
import { searchMovies, getImageUrl } from '../api';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const searchResults = await searchMovies(query);
    setResults(searchResults);
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button onClick={handleSearch}>Search</button>
      <div className="movie-grid">
        {results.map(movie => (
          <div key={movie.id} className="movie-card">
            <img src={getImageUrl(movie.poster_path)} alt={movie.title} />
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
