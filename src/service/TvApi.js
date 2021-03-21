  import axios from 'axios'
  const token = "bfce076e7c9a3c60d70abb15359c6391"

  

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

// const baseURL = 'http://api.tvmaze.com';
// const baseURLFilm ='https://api.themoviedb.org'
// const token = "bfce076e7c9a3c60d70abb15359c6391"
// // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
//   const fetchShowDetails = showId => {
//   return fetch( `${baseURLFilm}/3/movie/${showId}?api_key=${token}&language=en-US&`).then(res => res.json());
// };

//  const fetchShowWithQuery = searchQuery => {
  
//   return fetch(`${baseURLFilm}/3/search/movie?api_key=${token}&query=${searchQuery}&include_adult=false&language=en-US&`)
//     .then(res => res.json())
//     .then(entries => entries.results)
    
    
// };


// // https://api.themoviedb.org/3/trending/all/day?api_key=${token}
// export {
//   fetchShowWithQuery,
//   fetchShowDetails
// }
