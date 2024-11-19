import React from 'react';
import { useParams } from 'react-router-dom';

export default function MoviesDetail() {
  const navigete = useNavigate();
  const [movies, setMovies] = useState([]);
  const movieId = useParams();

  useEffect(() => {
    async function showMovieDetail() {
      try {
        const data = await useTmdbApi.getMovieDetail(movieId);
        // 영화의 데이터 state로 저장
        console.log(data);
        setMovies(data);
      } catch (err) {
        console.error(err);
      }
    }
    showMovieDetail();
  }, []);

  return (
    <>
      <div>
        <img src="" alt="" /> 영화 이미지
        <div>영화 제목</div>
        <div>영화 줄거리</div>
      </div>
    </>
  );
}
