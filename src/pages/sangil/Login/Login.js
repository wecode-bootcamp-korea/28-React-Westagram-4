// 항상 시작전에 git checkout feature/si 실시하고 확인할것
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.scss';
import Footer from '../../../components/Footer/Footer.js';
function Login() {
  // 미션1 사용자 입력 데이터 저장 시작
  const [ID입력값, ID입력값변경] = useState('');
  const [PW입력값, PW입력값변경] = useState('');
  const Input_id = e => ID입력값변경(e.target.value);
  const Input_pw = e => PW입력값변경(e.target.value);
  // 미션1 사용자 입력 데이터 저장 완료
  // 미션2 로그인 버튼 활성화 관련 부분 시작
  const [로그인버튼활성화, set로그인버튼활성화] = useState(false);
  // useState(false)로 인해 기본적으로 로그인 버튼을 비활성화함.
  const Login_btn_active = () => {
    return ID입력값.includes('@') && PW입력값.length > 4
      ? // Login_btn_active_test함수를 실행될경우 ID입력값 + PW입력값 함수에 걸린 조건을 만족하는지 확인
        set로그인버튼활성화(true)
      : // ID입력값 + PW입력값가 모두 참일 경우 Login_btn_Active를 활성화
        set로그인버튼활성화(false);
    // 위의 조건을 만족하지 못할경우 버튼을 활성화 하지 않음.
  };
  // 미션2 로그인 버튼 활성화 부분 완료
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
                onChange={Input_id} // 미션1 관련 부분
                onKeyUp={Login_btn_active} // 미션2 관련 부분 keyup 이벤트 발생시 Login_btn_active_test함수 호출
              />
            </p>
            <p className="login_user_password">
              <input
                type="password"
                className="input_login"
                id="user_password"
                placeholder="비밀번호"
                onChange={Input_pw} // 미션1 관련 부분
                onKeyUp={Login_btn_active} // 미션2 관련 부분임 , keyup 이벤트 발생시 Login_btn_active_test함수 호출
              />
            </p>
            <p>
              <button
                className={
                  // 미션2 관련 삼항연산자
                  로그인버튼활성화 ? 'submit_btn_active' : 'submit_btn_unactive'
                  //로그인버튼활성화 가 참일 경우 submit_btn_active를 활성화 아닐경우 submit_btn_unactive 실행
                }
              >
                로그인
              </button>
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
          <Link to="/login-sangil" />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Login;
