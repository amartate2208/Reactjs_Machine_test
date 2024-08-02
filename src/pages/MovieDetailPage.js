// src/pages/MovieDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getMovieCast, getImageUrl } from '../api';

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const movieDetails = await getMovieDetails(movieId);
      setMovie(movieDetails);
    };

    const fetchCast = async () => {
      const movieCast = await getMovieCast(movieId);
      setCast(movieCast);
    };

    fetchDetails();
    fetchCast();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={getImageUrl(movie.poster_path)} alt={movie.title} />
      <p>{movie.overview}</p>
      <h2>Cast</h2>
      <ul>
        {cast.map(member => (
          <li key={member.cast_id}>{member.name} as {member.character}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetailPage;
