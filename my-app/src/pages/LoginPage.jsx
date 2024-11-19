import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
export default function LoginPage() {
  // const {loginState} = useSelector((state) => state.logState)
  // const dispatch = useDispatch()
  return (
    <>
      <div>LoginPage</div>
      <form action="">
        <label htmlFor="">아이디</label>
        <input type="text" />
        <label htmlFor="">비밀번호</label>
        <input type="text" />
        <button onClick={() => {
          dispat
        }}>로그인</button>
      </form>
    </>
  );
}
