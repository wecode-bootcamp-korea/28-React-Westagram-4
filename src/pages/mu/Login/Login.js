import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';
import Footer from '../../../components/Footer/Footer';

function Login() {
  const navigate = useNavigate();

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
            />
            <input type="password" placeholder="비밀번호" />
            {/* <Link to="/main">
                <button type="button" id="btn"><a className="loginBtn" href="./main.html">로그인</a></button>
              </Link> */}
            <button type="button" onClick={goToMain}>
              <a href="./main.html">로그인</a>
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
