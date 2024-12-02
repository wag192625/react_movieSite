// import tmdbApi from './tmdbApi';
import api from './axios';
import searchApi from './searchAxios';

const tmdbApi = {
  getMovieResult: async (el) => {
    const response = await api.get(`movie/${el}`);
    const movies = response.data;

    return movies.results;
  },

  getMovieData: async (movie_id) => {
    const response = await api.get(`movie/${movie_id}`);
    const movieDetail = response.data;
    // return response
    return movieDetail;
  },

  getSearchData: async (el) => {
    const response = await api.get(`search/movie/${el}`);
    const data = response.data;
    return data.results;
  },
};

export default tmdbApi;
