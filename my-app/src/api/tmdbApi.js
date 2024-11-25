// import tmdbApi from './tmdbApi';
import api from './axios';
const tmdbApi = {
  getMovie: async (el) => {
    const response = await api.get(`/${el}`);
    const movies = response.data;

    return movies.results;
  },

  getMovieDetail: async (movie_id) => {
    const response = await api.get(`/${movie_id}`);
    const movieDetail = response.data;
    // return response
    return movieDetail;
  },

  // 위랑 동일한 코드
  getBookMark: async (movie_id) => {
    const response = await api.get(`/${movie_id}`);
    const bookmarks = response.data;
    // return response
    return bookmarks;
  },

  // 첫번째랑 동일한 코드
  getCategory: async (el) => {
    const response = await api.get(`${el}`);
    const movies = response.data;

    return movies.results;
  },
};

export default tmdbApi;
