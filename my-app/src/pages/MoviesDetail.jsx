import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import tmdbApi from '../api/tmdbApi';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark } from '../store/slices/loginSlice';

export default function MoviesDetail() {
  const { loginState } = useSelector((state) => state.logState);
  const { bookMark } = useSelector((state) => state.logState);
  const dispatch = useDispatch();
  const navigete = useNavigate;

  const movieObj = useParams();
  // console.log('타입', typeof movieObj.id);

  const [movieDetail, setmovieDetail] = useState([]);
  const [movieReview, setmovieReview] = useState([]);
  // const [addMovieId, setAddMovieId] = useState({ movieId: '' });
  const [addMovieId, setAddMovieId] = useState();

  // console.log('로그', tmdbApi.getMovieDetail(movieObj));
  useEffect(() => {
    async function showMovieDetail() {
      try {
        const movieDetailData = await tmdbApi.getMovieDetail(movieObj.id);
        const reviews = await tmdbApi.getMovieDetail(`${movieObj.id}/reviews`);

        // 영화의 데이터 state로 저장
        setmovieDetail(movieDetailData);
        setmovieReview(reviews.results);

        setAddMovieId(movieObj.id); // 북마크용 id 추출
      } catch (err) {
        console.error(err);
      }
    }
    showMovieDetail();
  }, []);

  console.log('전체 북마크', bookMark);

  // console.log('무비디테일', movieDetail);
  // console.log('무비리뷰', movieReview);
  // console.log('무비아이디', addMovieId);
  return (
    <>
      <div style={{ justifyContent: 'center', alignContent: 'center', textAlign: 'center' }}>
        <div style={{ display: 'flex' }}>
          <img src={'https://image.tmdb.org/t/p/w400' + movieDetail.poster_path} alt="" />
          <div>
            <h1>{movieDetail?.title}</h1>

            <button
              onClick={() => {
                if (loginState) {
                  // if (bookMark.movieId in addMovieId) {
                  if (bookMark in addMovieId) {
                    alert('이미 북마크입니다.');
                    // console.log('북마크', bookMark);

                    dispatch();
                  } else {
                    dispatch(addBookmark(addMovieId));
                    console.log('북마크', bookMark);
                  }
                } else {
                  alert('로그인이 필요합니다.') /*navigete('./loginPage')*/;
                }
              }}
            >
              북마크
            </button>
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
