import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import useTmdb from '../api/useTmdb'
import tmdbApi from '../api/tmdbApi';

export default function Movie({ category }) {
  const navigete = useNavigate();
  const [movies, setMovies] = useState([]);
  // console.log('카테고리', category);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await tmdbApi.getMovieResult(category);
        // 영화의 데이터 state로 저장
        const newData = data.slice(0, 8);
        // console.log(data);
        setMovies(newData);
      } catch (err) {
        console.error(err);
        // console.log('에러발생')
      }
    }
    fetchMovie();
  }, []);

  return (
    <>
      <div>
        <Link to={`/movie/category/${category}`}>{category}</Link>
        {/* <a href=""></a> */}
        <ul style={{ display: 'flex' }}>
          {movies.map((movie) => {
            const { id, title, poster_path } = movie;
            return (
              <li key={id} style={{ listStyle: 'none' }}>
                <div style={{ width: '150px', textAlign: 'center', alignContent: 'center' }}>
                  <Link to={`/movie/${id}`}>
                    <img
                      src={'https://image.tmdb.org/t/p/w500' + poster_path}
                      alt="오류"
                      style={{ width: '100px' }}
                    />
                    <h3>{title}</h3>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
