function LoginInput() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState();

  const goToMain = () => {
    navigate('/main-q');
  };

  return (
    <>
      <input
        type="text"
        id="id"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange
      />
      <input type="password" id="password" placeholder="비밀번호" />
      <button className="loginBtn" onClick={goToMain}>
        로그인
      </button>
    </>
  );
}

export default LoginInput;
