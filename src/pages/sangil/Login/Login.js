// 항상 시작전에 git checkout feature/si 실시하고 확인할것
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.scss';
import Footer from '../../../components/Footer/Footer.js';
function Login() {
  const [Id, SetId] = useState('');
  const [Pw, SetPw] = useState('');

  const InputId = e => SetId(e.target.value);
  const InputPw = e => SetPw(e.target.value);

  const [Login_Page_Btn_Active, SetLogin_Page_Btn_Active] = useState(false);

  const Login_btn_active = () => {
    return Id.includes('', '@', '.') && Pw.length > 7
      ? SetLogin_Page_Btn_Active(true)
      : SetLogin_Page_Btn_Active(false);
  };
  const LoginEnterTest = e => {
    return Login_btn_active && e.key === 'Enter';
  };

  return (
    <div>
      <div id="main_container">
        <div id="form_container">
          <form className="form">
            <h1 className="InstaLogoTitle">Westagram</h1>
            <p className="login_user_name">
              <input
                type="text"
                className="input_login"
                id="user_name"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={InputId}
                onKeyUp={Login_btn_active}
              />
            </p>
            <p className="login_user_password">
              <input
                type="password"
                className="input_login"
                id="user_password"
                placeholder="비밀번호"
                onChange={InputPw}
                onKeyUp={Login_btn_active}
              />
            </p>

            <p>
              <Link to="/main-sangil">
                <button
                  className={
                    Login_Page_Btn_Active
                      ? 'submit_btn_active'
                      : 'submit_btn_unactive'
                  }
                  onKeyPress={LoginEnterTest}
                  // type="button"
                >
                  로그인
                </button>
              </Link>
            </p>
            <div className="PasswordFind">
              <Link to="/main-sangil">
                <span id="LostPassword">비밀번호를 잊으셨나요?</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="InstaJoin">
        <Link to="/login-sangil" />
        <Footer />
      </div>
    </div>
  );
}

export default Login;
