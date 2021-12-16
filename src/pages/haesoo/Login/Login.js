import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-haesoo');
  };

  return (
    <div className="login">
      <main className="login-main">
        <article className="content-container">
          <section className="login-container">
            <div className="logo">Westagram</div>
            <form className="login-form">
              <input
                className="login-form__id js-id"
                placeholder="  전화번호, 사용자 이름 또는 이메일"
                type="form"
              />
              <input
                className="login-form__password js-password"
                p
                laceholder="  비밀번호"
                type="password"
              />
              <button
                //disabled
                onClick={goToMain}
                className="login-button"
                type="button"
              >
                로그인
              </button>
              {/* Link 방식
               <button disabled className="login-button" type="button">
                <Link to="/main" style={{ color: "white" }}>
                  로그인
                </Link>
              </button> */}
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
              <a href="#">비밀번호를 잊으셨나요?</a>
            </section>
          </section>
          <section className="sign-container">
            <p>계정이 없으신가요?</p>
            <a href="#">가입하기</a>
          </section>
        </article>
      </main>
    </div>
  );
}

export default Login;
