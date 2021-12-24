// 항상 시작전에 git checkout feature/si 실시하고 확인할것
import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import MainPage from './Main_page';
import { ASIDESTORYLIST } from './ASIDESTORYLIST';

import Image from '../../../assets/images/profile_si.png';
import '../Main/Main.scss';

function Main() {
  return (
    <div>
      <Nav />
      <MainPage />
      <div className="mainRight">
        <div className="UserProfile">
          <div className="profileSmallImg">
            <img src={Image} alt="프로필이미지" />
          </div>
          <div className="detail">
            <div className="id m_text">Insta_React_test</div>
            <div className="koName">비공개</div>
          </div>
        </div>
        <article className="Story">
          <header className="storyHeader">
            <p>스토리</p>
            <div className="more">모두 보기</div>
          </header>

          {ASIDESTORYLIST.map(RightList => {
            return (
              <div className="scrollInner">
                <div className="scrollUserlist">
                  <div className="profileSmallImg">
                    <img src={Image} alt="프로필이미지" />
                  </div>
                  <div className="detail" key={RightList.id}>
                    <div className="id">{RightList.content}</div>
                    <div className="time">{RightList.time}</div>
                  </div>
                  <Link to="/login-sangil">
                    <div className="RightListFollow">팔로우</div>
                  </Link>
                </div>
              </div>
            );
          })}
        </article>
        <article className="Recommend">
          <header className="recoHeader">
            <p>회원님을 위한 추천</p>
            <div className="more">모두 보기</div>
          </header>
          <div className="scrollUserlist">
            <div className="ProfileSmallImg">
              <img src={Image} alt="프로필이미지" />
            </div>

            <div className="detail">
              <div className="id">009</div>
              <div className="time">회원님을 팔로우합니다.</div>
            </div>
            <div className="Follow">
              <Link to="/login-sangil">팔로우</Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
export default Main;
