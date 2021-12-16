import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main');
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
            />
            <input type="password" id="password" placeholder="비밀번호" />
            <button className="loginBtn" onClick={goToMain}>
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
