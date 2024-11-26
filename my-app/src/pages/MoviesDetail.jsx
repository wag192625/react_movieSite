import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import tmdbApi from '../api/tmdbApi';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, deleteBookmark } from '../store/slices/loginSlice';

export default function MoviesDetail() {
  const { loginState, bookMark } = useSelector((state) => state.logState);
  // const { bookMark } = useSelector((state) => state.logState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id: movieId } = useParams();
  // console.log('타입', typeof movieId.id);
  console.log(movieId);

  const [movieDetail, setmovieDetail] = useState([]);
  const [movieReview, setmovieReview] = useState([]);
  // const [addMovieId, setAddMovieId] = useState({ movieId: '' });
  const [bookMarkId, setBookMarkId] = useState([]);
  const [credit, setCredit] = useState([]); // 출연진

  // console.log('로그', tmdbApi.getMovieDetail(movieId));
  useEffect(() => {
    async function showMovieDetail() {
      try {
        const movieDetailData = await tmdbApi.getMovieDetail(movieId);
        const reviews = await tmdbApi.getMovieDetail(`${movieId}/reviews`);
        // 영화의 데이터 state로 저장
        setmovieDetail(movieDetailData);
        setmovieReview(reviews.results);

        const credit = await tmdbApi.getMovieDetail(`${movieId}/credits`);
        const newCredit = credit.cast;
        setCredit(newCredit.slice(0, 6));

        setBookMarkId(movieId); // 북마크용 id 추출
      } catch (err) {
        console.error(err);
      }
    }
    showMovieDetail();
  }, []);

  console.log('전체 북마크', bookMark);

  return (
    <>
      {console.log('크레딧', credit)}
      <div style={{ justifyContent: 'center', alignContent: 'center', textAlign: 'center' }}>
        <div style={{ display: 'flex' }}>
          <img src={'https://image.tmdb.org/t/p/w400' + movieDetail.poster_path} alt="" />
          <div>
            <h1>{movieDetail?.title}</h1>

            <button
              onClick={() => {
                // e.preventDefault;

                if (loginState) {
                  // if (bookMark.movieId in bookMarkId) {
                  if (bookMark.includes(bookMarkId)) {
                    console.log('제거 북마크', bookMark);
                    alert('제거되었습니다.');
                    dispatch(deleteBookmark(bookMarkId));
                  } else {
                    dispatch(addBookmark(bookMarkId));
                  }
                } else {
                  alert('로그인이 필요합니다.');
                  navigate('/loginPage');
                }
              }}
            >
              {bookMark.includes(bookMarkId) ? '북마크 해제' : '북마크'}
            </button>
            {
              // 로그인이 되어있으면 북마크 가능
              // 북마크가 안 되어있으면 북마크
              // 북마크가 되어있으면 북마크 해제 및 북마크 해제됨
              // 로그인이 안 되어있으면 로그인 페이지로 이동
              // 로그인
            }
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {credit.map((el) => {
                const { name, profile_path, character } = el;
                return (
                  <div key={el.name}>
                    <img
                      src={'https://image.tmdb.org/t/p/w400' + profile_path}
                      alt=""
                      style={{ width: '100px' }}
                    />
                    <h4>{character}</h4>
                    <p>{name}</p>
                  </div>
                );
              })}
            </div>
            <h3>줄거리</h3>
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
