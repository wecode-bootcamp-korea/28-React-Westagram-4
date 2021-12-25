import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../components/Footer/Footer';
import './Login.scss';

// const BASE_URL = 'http://10.58.6.234:8000/users/login';

function Login() {
  const [input, setInput] = useState({
    id: '',
    password: '',
  });

  const inputValue = event => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const isFormValid = input.id.includes('@') && input.password.length > 6;

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-haesoo');
  };

  const handleEnter = event => {
    if (event.key === 'Enter') return fetchData();
  };

  // Backend와 통신
  const fetchData = () => {
    // const { id, password } = setInput;
    // fetch(BASE_URL, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: id,
    //     password: password,
    //     username: '정해수',
    //     phone_number: '010-7226-2627',
    //     age: 28,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     localStorage.setItem('token', result.access_token);
    //   });

    goToMain();
  };

  return (
    <div className="login-haesoo">
      <section className="login-container">
        <div className="logo">Westagram</div>
        <form
          className="login-form"
          onInput={inputValue}
          onKeyPress={handleEnter}
        >
          <input
            className="login-form__id"
            name="id"
            type="input"
            placeholder="  전화번호, 사용자 이름 또는 이메일"
          />
          <input
            className="login-form__password"
            name="password"
            type="password"
            placeholder="  비밀번호를 입력하세요"
          />
          <button
            disabled={!isFormValid}
            className="login-button"
            type="button"
            onClick={fetchData}
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
      <Footer />
    </div>
  );
}

export default Login;
