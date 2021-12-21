import React from 'react';
import '../Main.scss';

export default function Aside() {
  return (
    <section className="aside-haesoo">
      <aside className="user-container">
        <div className="user-wrapper">
          <div className="user-wrapper__image">
            <img
              alt="profile"
              src="/images/haesoo/navigation_icons/profile.jpg"
            />
          </div>
          <div className="user-wrapper__information">
            <div className="user-wrapper__id">__hackney</div>
            <div className="user-wrapper__name">정해수</div>
          </div>
          <div className="user-wrapper__mode">전환</div>
        </div>
        <div className="recommend-wrapper">
          <div className="recommend-wrapper__text">
            <p>회원님을 위한 추천</p>
            <button type="button">모두 보기</button>
          </div>
          <div className="recommend-wrapper__contents">
            <div className="recommend-wrapper__follow">
              <div className="follow__image">
                <img
                  alt="recommend follow profile"
                  src="/images/haesoo/feed_images/eeecy.png"
                />
              </div>
              <div className="follow__user">
                <div className="user-id">eeecy</div>
                <div className="user-follow">bumikeem님이 팔로우합니다</div>
              </div>
              <button className="follow__button" type="button">
                팔로우
              </button>
            </div>
            <div className="recommend-wrapper__follow">
              <div className="follow__image">
                <img
                  alt="recommend follow profile"
                  src="/images/haesoo/feed_images/bumikeem.png"
                />
              </div>
              <div className="follow__user">
                <div className="user-id">bumikeem</div>
                <div className="user-follow">modu님이 팔로우합니다</div>
              </div>
              <button className="follow__button" type="button">
                팔로우
              </button>
            </div>
            <div className="recommend-wrapper__follow">
              <div className="follow__image">
                <img
                  alt="recommend follow profile"
                  src="/images/haesoo/feed_images/771look.png"
                />
              </div>
              <div className="follow__user">
                <div className="user-id">771_look</div>
                <div className="user-follow">
                  bumikeem님 외 1명이 팔로우합니다
                </div>
              </div>
              <button className="follow__button" type="button">
                팔로우
              </button>
            </div>
            <div className="recommend-wrapper__follow">
              <div className="follow__image">
                <img
                  alt="recommend follow profile"
                  src="/images/haesoo/feed_images/wookie.png"
                />
              </div>
              <div className="follow__user">
                <div className="user-id">wookieyezonly</div>
                <div className="user-follow">modu님 외 1명이 팔로우합니다</div>
              </div>
              <button className="follow__button" type="button">
                팔로우
              </button>
            </div>
          </div>
        </div>
        <footer className="main-footer">
          <div className="footer-tags">
            <span>소개 ・</span>
            <span>도움말 ・</span>
            <span>홍보 ・</span>
            <span>개인정보처리방침 ・</span>
            <span>약관 ・</span>
            <span>위치 ・</span>
            <span>인기 ・</span>
            <span>계정 ・</span>
            <span>해시태그</span>
          </div>
          <div className="footer-copyright">© 2021 INSTAGRAM FROM META</div>
        </footer>
      </aside>
    </section>
  );
}
