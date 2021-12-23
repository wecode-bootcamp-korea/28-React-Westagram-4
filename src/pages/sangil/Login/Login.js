// 항상 시작전에 git checkout feature/si 실시하고 확인할것
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../components/Footer/Footer.js';
import '../Login/Login.scss';

function Login() {
  const [Id, setId] = useState('');
  const [Pw, setPw] = useState('');

  const inputId = e => setId(e.target.value);
  const inputPw = e => setPw(e.target.value);

  const [loginPageBtnActive, setLoginPageBtnActive] = useState(false);

  const loginBtnActive = () => {
    setLoginPageBtnActive(Id.includes('', '@', '.') && Pw.length > 7);
  };

  return (
    <div>
      <div id="main_container">
        <div id="form_container">
          <form className="form">
            <h1 className="instaLogoTitle">Westagram</h1>
            <p className="login_user_name">
              <input
                type="text"
                className="inputIogin"
                id="user_name"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={inputId}
                onKeyUp={loginBtnActive}
              />
            </p>
            <p className="login_user_password">
              <input
                type="password"
                className="inputIogin"
                id="user_password"
                placeholder="비밀번호"
                onChange={inputPw}
                onKeyUp={loginBtnActive}
              />
            </p>

            <p>
              <Link to="/main-sangil">
                <button
                  className={
                    loginPageBtnActive
                      ? 'submit_btn_active'
                      : 'submit_btn_unactive'
                  }
                >
                  로그인
                </button>
              </Link>
            </p>
            <div className="passwordFind">
              <Link to="/main-sangil">
                <span id="lostPassword">비밀번호를 잊으셨나요?</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="instaJoin">
        <Link to="/login-sangil" />
        <Footer />
      </div>
    </div>
  );
}

export default Login;
