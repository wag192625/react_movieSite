import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import tmdbApi from '../api/tmdbApi';
import { Link } from 'react-router-dom';

export default function BookMarkPage() {
  const { loginState } = useSelector((state) => state.logState);
  const { bookMark } = useSelector((state) => state.logState);
  const [bookMarkList, setBookMarkList] = useState();

  useEffect(() => {
    async function fetchBookMark() {
      try {
        const data = await tmdbApi.getBookMark(`/${bookMark}`);
        //map 쓸거임
        setBookMarkList(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchBookMark();
  }, []);
  return (
    <>
      <div>bookMarPage</div>;
      <ul>
        {bookMarkList.map((el) => {
          const { id, title, poster_path } = el;
          return (
            <li key={id}>
              <div style={{ width: '200px', height: '200px' }}>
                <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt="오류" />
              </div>
              <Link to={`/moviList/${id}`}>
                <h3>{title}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
