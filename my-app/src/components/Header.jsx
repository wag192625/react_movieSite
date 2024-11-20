import React from 'react';
import { Link } from 'react-router-dom';
import { login, logout } from '../store/slices/loginSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Header() {
  const { loginState } = useSelector((state) => state.logState);
  const dispatch = useDispatch();

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
        <button onClick={() => console.log(loginState)}>출력</button>
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
        {loginState && <button> 마이페이지 </button>}
      </div>
      {/* <Link to="/">홈</Link> */}
    </>
  );
}
