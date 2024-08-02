// src/pages/UpcomingMoviesPage.js
import React, { useEffect, useState } from 'react';
import { getUpcomingMovies, getImageUrl } from '../api';

const UpcomingMoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const upcomingMovies = await getUpcomingMovies();
      setMovies(upcomingMovies);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Upcoming Movies</h1>
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

export default UpcomingMoviesPage;
