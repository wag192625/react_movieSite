import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTmdbApi from '../api/useTmdb';

export default function MoviesDetail() {
  // const navigete = useNavigate();
  const movieId = useParams();
  console.log('타입', typeof movieId);
  const [movieDetail, setmovieDetail] = useState([]);
  const [movieReview, setmovieReview] = useState([]);

  // console.log('로그', useTmdbApi.getMovieDetail(movieId));
  useEffect(() => {
    async function showMovieDetail() {
      try {
        const movieDetailData = await useTmdbApi.getMovieDetail(movieId.id);
        const reviews = await useTmdbApi.getMovieDetail(`${movieId.id}/reviews`);

        // 영화의 데이터 state로 저장
        setmovieDetail(movieDetailData);
        setmovieReview(reviews.results);

        console.log('무비디테일', movieDetailData);
        console.log('무비리뷰', movieReview);
      } catch (err) {
        console.error(err);
      }
    }
    showMovieDetail();
  }, []);

  return (
    <>
      <div style={{ justifyContent: 'center', alignContent: 'center', textAlign: 'center' }}>
        <div style={{ display: 'flex' }}>
          <img src={'https://image.tmdb.org/t/p/w400' + movieDetail.poster_path} alt="" />
          <div>
            <h1>{movieDetail?.title}</h1>
            <p>{movieDetail?.overview}</p>
          </div>
        </div>
        <div>
          <h2>영화 리뷰</h2>
          <ul>
            {movieReview.map((review) => {
              const { id, author, content, updated_at } = review;
              return (
                <li
                  key={id}
                  style={{
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    listStyle: 'none ',
                    // padding: '10 0',
                    margin: '10px 0',
                  }}
                >
                  <div>id : {author}</div>
                  <div>내용 : {content}</div>
                  <div>작성일자 : {updated_at}</div>
                </li>
              );
            })}
          </ul>
          {/* <div><p>{movieReview?.}</p></div> */}
        </div>
      </div>
    </>
  );
}
