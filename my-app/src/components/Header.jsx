import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
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
        <a href="">로그인</a>
        <a href="">마이페이지</a>
      </div>
      {/* <Link to="/">홈</Link> */}
    </>
  );
}
