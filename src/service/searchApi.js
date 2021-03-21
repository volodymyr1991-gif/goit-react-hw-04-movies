import axios from "axios";
const token = "bfce076e7c9a3c60d70abb15359c6391";

export const fetchItems = (query) =>
  axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${token}&language=en-US&page=1&include_adult=false&query=${query}`
  );

export const fetchFilmInfo = (id) =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${token}&language=en-US`
  );

export const fetchTrends = () =>
  axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${token}`);

export const fetchCast = (id) =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${token}&language=en-US`
  );

export const fetchReviews = (id) =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${token}&language=en-US`
  );