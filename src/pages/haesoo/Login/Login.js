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
    const { value } = event.target;
    setIsIdValid(value);
  };

  const handlePwChange = event => {
    const { value } = event.target;
    setIsPwValid(value);
  };

  const checkedValid = () => {
    return isIdValid.includes('@') && isPwValid.length > 6 ? false : true;
  };

  const handleEnter = event => {
    if (checkedValid && event.key === 'Enter') return fetchData();
  };

  const fetchData = () => {
    fetch('http://10.58.3.173:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: isIdValid,
        password: isPwValid,
        userName: '정해수',
        mobile: '010-7226-2627',
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'INVALID PASSWORD') {
          alert(
            '비밀번호는 8자리 이상, 문자,숫자,특수 기호 모두 한가지 이상 입력해주세요.'
          );
        } else if (result.message === 'EXIST EMAIL') {
          alert('존재하는 이메일 입니다.');
        } else if (result.message === 'INVALID EMAIL') {
          alert('이메일을 다시 입력해주세요.');
        } else if (result.message === 'SUCCESS') {
          alert('회원가입을 축하합니다.');
          goToMain();
        }
      });
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
                disabled={checkedValid()}
                onClick={fetchData}
                className="login-button"
                type="button"
              >
                로그인
              </button>
            </form>
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
