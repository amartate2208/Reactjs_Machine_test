// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { getPopularMovies, getImageUrl } from '../api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="movie-grid">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <img src={getImageUrl(movie.poster_path)} alt={movie.title} />
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
