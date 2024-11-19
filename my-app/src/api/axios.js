import axios from 'axios';

// const instance = axios.create({
//   // baseURL: `http://localhost:3000/`, // server가 돌고 있어야 함
//   baseURL: import.meta.env.VITE_API_URL,
// });

const instance = axios.create({
  baseURL: import.meta.env.VITE_TMDB_URL,
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    // language: 'ko',
  },
});
export default instance;
