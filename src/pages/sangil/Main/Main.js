// 항상 시작전에 git checkout feature/si 실시하고 확인할것
import React, { useState } from 'react';
import { Link, Route, useNavigate } from 'react-router-dom';
import 이미지 from '../../../assets/images/profile_si.png';
import Main_page from './Main_page';
import Nav from './Nav';
import '../Main/Main.scss';

function Main() {
  return (
    <div>
      <Nav />
      <Main_page />
      <div className="main_right">
        <div className="user_profile">
          <div className="profile_small_img">
            <img src={이미지} alt="프로필이미지" />
          </div>
          <div className="detail">
            <div className="id m_text">Insta_Week2_test</div>
            <div className="ko_name">CSS가 너무 싫다</div>
          </div>
        </div>
        <article className="story">
          <header className="story_header">
            <p>스토리</p>
            <div className="more">모두 보기</div>
          </header>
          <div className="scroll_inner">
            <div className="scroll_userlist">
              <div className="profile_small_img">
                <img src={이미지} alt="프로필이미지" />
              </div>
              <div className="detail">
                <div className="id">001</div>
                <div className="time">1시간 전</div>
              </div>
            </div>
            <div className="scroll_userlist">
              <div className="profile_small_img">
                <img src={이미지} alt="프로필이미지" />
              </div>
              <div className="detail">
                <div className="id">002</div>
                <div className="time">2시간 전</div>
              </div>
            </div>
            <div class="scroll_userlist">
              <div class="profile_small_img">
                <img src={이미지} alt="프로필이미지" />
              </div>
              <div className="detail">
                <div className="id">003</div>
                <div className="time">24시간 전</div>
              </div>
            </div>
            <div className="scroll_userlist">
              <div className="profile_small_img">
                <img src={이미지} alt="프로필이미지" />
              </div>
              <div className="detail">
                <div className="id">004</div>
                <div className="time">5시간 전</div>
              </div>
            </div>
          </div>
        </article>
        <article className="recommend">
          <header className="reco_header">
            <p>회원님을 위한 추천</p>
            <div className="more">모두 보기</div>
          </header>
          <div className="scroll_userlist">
            <div className="profile_small_img">
              <img src={이미지} alt="프로필이미지" />
            </div>
            <div className="detail">
              <div className="id">009</div>
              <div className="time">회원님을 팔로우합니다.</div>
            </div>
            <div className="follows">
              <Link to="/login-sangil">팔로우</Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
export default Main;
