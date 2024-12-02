import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_TMDB_URL,
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    include_adult: false,
    language: 'en-US',
    // page : 1 // page는 일단 생각 x
    // language: 'ko', // 한국어 리뷰가 없어서 영어로 진행
  },
});
export default instance;
