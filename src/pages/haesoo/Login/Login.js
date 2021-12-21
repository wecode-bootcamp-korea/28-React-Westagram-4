import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../components/Footer/Footer';
import './Login.scss';

function Login() {
  const [isIdValid, setIsIdValid] = useState('');
  const [isPwValid, setIsPwValid] = useState('');

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-haesoo');
  };

  const handleIdChange = event => {
    setIsIdValid(event.target.value);
  };

  const handlePwChange = event => {
    setIsPwValid(event.target.value);
  };

  const checkedValid = (id, pw) => {
    return id.includes('@') && pw.length > 6 ? false : true;
  };

  const handleEnter = event => {
    if (checkedValid && event.key === 'Enter') return goToMain();
  };

  return (
    <div className="login">
      <main className="login-main">
        <article className="content-container">
          <section className="login-container">
            <div className="logo">Westagram</div>
            <form className="login-form" onKeyPress={handleEnter}>
              <input
                onChange={handleIdChange}
                className="login-form__id js-id"
                placeholder="  전화번호, 사용자 이름 또는 이메일"
                type="form"
              />
              <input
                onChange={handlePwChange}
                className="login-form__password js-password"
                placeholder="  비밀번호를 입력하세요"
                type="password"
              />
              <button
                disabled={checkedValid(isIdValid, isPwValid)}
                onClick={goToMain}
                className="login-button"
                type="button"
              >
                로그인
              </button>
            </form>
            <p className="login-hide js-valid-id valid-message">
              @ 가 포함된 유효한 이메일을 입력해주세요.
            </p>
            <p className="login-hide js-valid-password valid-message">
              비밀번호를 12자리 이상 입력해주세요.
            </p>
            <p>또는</p>
            <button className="facebook-button">Facebook으로 로그인</button>
            <section className="find-password-container">
              <p>비밀번호를 잊으셨나요?</p>
            </section>
          </section>
          <section className="sign-container">
            <p>계정이 없으신가요?</p>
            <span>가입하기</span>
          </section>
        </article>
        <Footer />
      </main>
    </div>
  );
}

export default Login;
