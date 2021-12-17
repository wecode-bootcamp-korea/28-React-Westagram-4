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

  const loginValidate = (id, pw) => {
    const regExpId =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const regExpPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{5,16}$/;

    const validation = regExpId.test(id) && regExpPassword.test(pw);

    return validation;
  };

  const goToMain = () => {
    navigate('/main');
  };

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
            {loginValidate(userId, userPw) ? (
              <button
                type="button"
                onClick={goToMain}
                style={{ background: 'blue', cursor: 'pointer' }}
              >
                <Link to="/main-mu">로그인</Link>
              </button>
            ) : (
              <button
                type="button"
                onClick={goToMain}
                disabled
                style={{ background: 'red' }}
              >
                <Link to="/">로그인</Link>
              </button>
            )}
          </form>
          <a href="/">비밀번호를 잊으셨나요?</a>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Login;
