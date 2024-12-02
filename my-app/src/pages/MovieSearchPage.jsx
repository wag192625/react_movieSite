import React, { useEffect } from 'react';
import tmdbApi from '../api/tmdbApi';
import { Link } from 'react-router-dom';


export default function MovieSearchPage() {
  
  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await tmdbApi.getSearchData(category);
        // 영화의 데이터 state로 저장
        const newData = data.slice(0, 8);
        console.log(data);
        setMovies(newData);
      } catch (err) {
        console.error(err);
        // console.log('에러발생')
      }
    }
    fetchMovie();
  }, []);
  return <div>MovieSearchPage</div>;
}
