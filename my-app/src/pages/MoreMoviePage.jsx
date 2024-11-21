import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import tmdbApi from '../api/tmdbApi';

// export default function MoreMoviePage(category) {
export default function MoreMoviePage() {
  const { category } = useParams();

  const [movies, setMovies] = useState([]);

  // console.log(`카테고리 타입:`, typeof category);
  // console.log('카테고리', category);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await tmdbApi.getCategory(category);
        setMovies(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchMovie();
  });
  return (
    <>
      <div>
        <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
          {movies.map((movie) => {
            const { id, title, poster_path } = movie;
            return (
              <li key={id} style={{ listStyle: 'none' }}>
                <div style={{ width: '150px', textAlign: 'center', alignContent: 'center' }}>
                  <img
                    src={'https://image.tmdb.org/t/p/w500' + poster_path}
                    alt="오류"
                    style={{ width: '100px' }}
                  />
                  <Link to={`/movie/${id}`}>
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
