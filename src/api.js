// src/api.js
import axios from 'axios';

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const getPopularMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
  return response.data.results;
};

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
  return response.data;
};

export const getMovieCast = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
  return response.data.cast;
};

export const getUpcomingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
  return response.data.results;
};

export const getTopRatedMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`);
  return response.data.results;
};

export const getImageUrl = (path) => {
  return `${IMAGE_BASE_URL}${path}`;
};
