import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';
import Footer from '../../../components/Footer/Footer';

function Login() {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const navigate = useNavigate();

  const handleIdInput = e => {
    setUserId(e.target.value);
  };

  const handlePwInput = e => {
    setUserPw(e.target.value);
  };

  const loginValidate = () => {
    const regExpId =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const regExpPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{5,16}$/;

    const validation = regExpId.test(userId) && regExpPassword.test(userPw);
    return validation;
  };

  const goToMain = () => {
    navigate('/main');
  };

  /*
  const requestSignUp = () => {
    fetch('http://10.58.3.158:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: userId,
        name: '진민욱',
        password: userPw,
        phone_number: '010-1234-9876',
        date_of_birth: null,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
  };

  const requestLogin = () => {
    fetch('http://10.58.3.158:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: userId,
        password: userPw,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
  };
  */
  return (
    <>
      <div className="wrap">
        <main className="login-container">
          <h1>westagram</h1>
          <form>
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handleIdInput}
            />
            <input
              type="password"
              placeholder="비밀번호"
              onChange={handlePwInput}
            />
            <button
              type="button"
              onClick={goToMain}
              disabled={!loginValidate()}
              className={loginValidate() ? 'btn-active' : ''}
            >
              <Link to="/main-mu">로그인</Link>
            </button>
          </form>
          <a href="/">비밀번호를 잊으셨나요?</a>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Login;
