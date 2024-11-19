// import tmdbApi from './tmdbApi';
import api from './axios';
const useTmdbApi = {
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
};

export default useTmdbApi;
