import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import tmdbApi from '../api/tmdbApi';
import { Link } from 'react-router-dom';

export default function BookMarkPage() {
  const { loginState } = useSelector((state) => state.logState);
  const { bookMark } = useSelector((state) => state.logState);
  const [bookMarkList, setBookMarkList] = useState([]);

  useEffect(() => {
    async function fetchBookMark() {
      try {
        // 비동기 요청을 모두 처리하고 결과를 배열로 반환
        const newArray = await Promise.all(
          bookMark.map(async (book) => {
            const data = await tmdbApi.getMovieData(`${book}`);
            return data;
          })
        );
        // 상태 업데이트
        setBookMarkList(newArray);
      } catch (err) {
        console.error(err);
      }
    }
    // bookMark가 존재할 때만 호출
    fetchBookMark();
  }, []);

  return (
    <>
      <div>bookMarPage</div>
      <ul>
        {bookMarkList.map((el) => {
          const { id, title, poster_path } = el;
          return (
            <li key={id}>
              <p>{title}</p>
              <div style={{ width: '200px', height: '200px' }}>
                <img
                  src={'https://image.tmdb.org/t/p/w500' + poster_path}
                  alt="오류"
                  style={{ width: '100px', height: '100px' }}
                />
              </div>
              <Link to={`/movie/${id}`}>
                <h3>{title}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

// useEffect(() => {
//   function fetchBookMark() {
//     let newArray = [];
//     bookMark.forEach(async (book) => {
//       try {
//         // baseURL : https://api.themoviedb.org/3/movie
//         const data = await tmdbApi.getMovieData(`${book}`);
//         //map 쓸거임
//         newArray.push(data);
//       } catch (err) {
//         console.error(err);
//       }
//     });
//     setBookMarkList(newArray);
//   }
//   fetchBookMark();
// }, []);
