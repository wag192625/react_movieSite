import React, { useState } from 'react';
import tmdbApi from '../api/tmdbApi';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function SearchPage() {
  const [searchData, setSearchData] = useState([]);
  const { text } = useParams();

  useEffect(() => {
    // console.log('검색 페이지에서의 타입', typeof text);
    // 비동기로 데이터를 가져옴
    async function fetchMovie() {
      try {
        const data = await tmdbApi.getSearchData(text);
        // const data = await tmdbApi.getSearchData(`search/movie?query=${text}`);
        // console.log('불러온 데이터', data);
        // 영화의 데이터 state로 저장
        setSearchData(data);
      } catch (err) {
        console.error('오류 내용', err);
      }
    }
    fetchMovie();
  }, [searchData]);

  return (
    <>
      <div>
        <ul style={{ display: 'flex' }}>
          {searchData.map((movie) => {
            console.log('return 값', movie);
            const { id, title, poster_path } = movie;
            return (
              <li key={id} style={{ listStyle: 'none' }}>
                <div style={{ width: '150px', textAlign: 'center', alignContent: 'center' }}>
                  <Link to={`/movie/${id}`}>
                    <img
                      src={'https://image.tmdb.org/t/p/w500' + poster_path}
                      alt="사진 없음"
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
