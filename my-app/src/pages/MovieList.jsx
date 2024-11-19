import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import useTmdb from '../api/useTmdb'
import useTmdbApi from '../api/useTmdb';

export default function MovieList() {
  const navigete = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await useTmdbApi.getMovie();
        // 영화의 데이터 state로 저장
        console.log(data);
        setMovies(data);
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
        <a href="">Now Playing </a>

        <ul style={{ display: 'flex' }}>
          {movies.map((movie) => {
            const { id, title, poster_path } = movie;
            // const { id, title, genre_ids } = movie;
            return (
              <li key={id} style={{ listStyle: 'none' }}>
                <div style={{ width: '150px', textAlign: 'center', alignContent: 'center' }}>
                  {/* {console.log('https://image.tmdb.org/t/p/w500' + poster_path)} */}
                  <img
                    src={'https://image.tmdb.org/t/p/w500' + poster_path}
                    alt="오류"
                    style={{ width: '100px' }}
                  />
                  <Link to={`/movieList/${id}`}>
                    <h3>{title}</h3>
                  </Link>
                </div>
              </li>
            );
          })}
          {/* <li style={{ listStyle: 'none' }}>영화 1</li> */}
        </ul>
      </div>
    </>
  );
}
