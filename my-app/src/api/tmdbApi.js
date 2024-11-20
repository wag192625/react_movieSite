// import tmdbApi from './tmdbApi';
import api from './axios';
const tmdbApi = {
  getMovie: async () => {
    const response = await api.get('now_playing');
    const movies = response.data;

    return movies.results;
  },

  getMovieDetail: async (movie_id) => {
    const response = await api.get(`/${movie_id}`);
    const movieDetail = response.data;
    // return response
    return movieDetail;
  },
  
  getBookMark: async (movie_id) => {
    const response = await api.get(`/${movie_id}`);
    const bookmarks = response.data;
    // return response
    return bookmarks;
  },
};

export default tmdbApi;
