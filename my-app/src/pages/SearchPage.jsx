import React, { useState } from 'react';
import tmdbApi from '../api/tmdbApi';
import { useEffect } from 'react';

export default function SearchPage({ searchText }) {
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    // 비동기로 데이터를 가져옴
    async function fetchMovie() {
      try {
        const data = await tmdbApi.getSearchData(searchText);
        // 영화의 데이터 state로 저장
        setSearchData(data);
      } catch (err) {
        console.error('오류 내용', err);
      }
    }
    fetchMovie();
  }, []);

  return (
    <>
      <div>
        <ul style={{ display: 'flex' }}>
          {searchData.map((movie) => {
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
      ;
    </>
  );
}
