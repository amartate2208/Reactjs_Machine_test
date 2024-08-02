// src/pages/TopRatedMoviesPage.js
import React, { useEffect, useState } from 'react';
import { getTopRatedMovies, getImageUrl } from '../api';

const TopRatedMoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const topRatedMovies = await getTopRatedMovies();
      setMovies(topRatedMovies);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Top Rated Movies</h1>
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

export default TopRatedMoviesPage;
