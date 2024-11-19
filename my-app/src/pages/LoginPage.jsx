import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/slices/loginSlice';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const { loginState } = useSelector((state) => state.logState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div>LoginPage</div>
      {/* <form action=""> */}
      <label htmlFor="">아이디</label>
      <input type="text" />
      <label htmlFor="">비밀번호</label>
      <input type="text" />
      <button
        onClick={() => {
          dispatch(login);
          console.log(loginState);
          // navigate('/');
        }}
      >
        로그인
      </button>
      {/* </form> */}
    </>
  );
}
