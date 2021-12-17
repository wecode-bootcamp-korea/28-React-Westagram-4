import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  // const inputId = event => {
  //   setUserId(event.target.value);
  // };

  // const handleIdInput = event => {
  //   setText(event.target.value);
  // };

  // const validation = () => {
  //   return userId.includes('@') && userPw.length >= 5 ? false : true;
  // };
  // console.log(validation());

  const goToMain = () => {
    navigate('/main-q');
  };
  return (
    <div className="login">
      <div className="content-wrapper">
        <div className="login-frame">
          <div className="logo">Westagram</div>
          <div className="content">
            <input
              type="text"
              id="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={e => {
                setUserId(e.target.value);
              }}
            />
            <input
              type="password"
              id="password"
              placeholder="비밀번호"
              onChange={e => {
                setUserPw(e.target.value);
              }}
            />
            <button
              className="loginBtn"
              onClick={goToMain}
              disabled={
                userId.includes('@') && userPw.length >= 5 ? false : true
              }
            >
              로그인
            </button>
            <footer>비밀번호를 잊으셨나요?</footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
