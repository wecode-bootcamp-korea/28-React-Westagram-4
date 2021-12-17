// 항상 시작전에 git checkout feature/si 실시하고 확인할것
import React, { useState } from 'react';
import { Link, Route, useNavigate } from 'react-router-dom';
import '../Login/Login.scss';

import Footer from '../../../components/Footer/Footer.js';
function Login() {
  const navigate_test = useNavigate();
  const navigate_btn_test = () => {
    navigate_test('/main-sangil');
  };

  const [IDhandle, setIDhandle] = useState('');
  const [PWhandle, setPWhandle] = useState('');
  const handleinput_id = e => setIDhandle(e.target.value);
  const handleinput_pw = e => setPWhandle(e.target.value);

  return (
    <div>
      <div id="main_container">
        <div id="form_container">
          <form className="form">
            <h1 className="insta_logo_title">Westagram</h1>
            <p className="login_user_name">
              <input
                type="text"
                className="input_login"
                id="user_name"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={handleinput_id}
              />
            </p>
            <p className="login_user_password">
              <input
                type="password"
                className="input_login"
                id="user_password"
                placeholder="비밀번호"
                onChange={handleinput_pw}
              />
            </p>
            <p>
              <button className="submit_btn">로그인</button>
            </p>
            <div className="password_find">
              <Link to="/main-sangil">
                <span id="lost_password">비밀번호를 잊으셨나요?</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="insta_join">
        <div className="insta_join_test">
          <Link to="/login-sangil">
            {' '}
            {/* <p className="insta_member">계정이 없으신가요? 가입하기</p> */}
          </Link>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Login;
