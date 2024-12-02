import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login, logout } from '../store/slices/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import tmdbApi from '../api/tmdbApi';

export default function Header() {
  const { loginState } = useSelector((state) => state.logState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState();
  function handleChange(e) {
    const inputValue = e.target.value;
    // console.log('검색값1', inputValue);
    // console.log('검색 타입', typeof inputValue);

    setFormData(inputValue);
  }

  function searchText(e) {
    e.preventDefault();
    navigate(`/search/movie/${formData}`);
  }

  return (
    <>
      <div
        style={{
          width: '100vw',
          display: 'flex',
          justifyContent: 'space-between',
          textAlign: 'center',
          alignContent: 'center',
          // position:'fixed',
          top: '0px',
        }}
      >
        <Link to={'/'}>
          <h2>Header</h2>
        </Link>
        {/* 
        
        
        
        // 
        */}
        {/*  <button onClick={() => console.log(loginState)}>출력</button> */}
        {/* // ! input에 값을 넣고 검색 버튼을 누르면
            // ! 창이 바뀌면서 검색 결과를 내보냄 */}
        <form onSubmit={searchText}>
          <input type="text" onChange={handleChange} />
          <button type="submit"> 검색 </button>
        </form>
        {/* 
        
        
        
        
        */}
        {!loginState ? (
          <Link to={'/loginPage'}>
            <button>로그인</button>
          </Link>
        ) : (
          <button
            onClick={() => {
              dispatch(logout());
            }}
          >
            로그아웃
          </button>
        )}
        {loginState && (
          <Link to={'/myPage'}>
            <button> 마이페이지 </button>
          </Link>
        )}
      </div>
      {/* <Link to="/">홈</Link> */}
    </>
  );
}
