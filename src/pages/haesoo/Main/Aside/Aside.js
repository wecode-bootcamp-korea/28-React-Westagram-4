import React from 'react';
import '../Main.scss';

export default function Aside() {
  const tagList = [
    { id: '1', content: '소개 ・ ' },
    { id: '2', content: '도움말 ・ ' },
    { id: '3', content: '홍보 ・ ' },
    { id: '4', content: '개인정보처리방침 ・ ' },
    { id: '5', content: '약관 ・ ' },
    { id: '6', content: '위치 ・ ' },
    { id: '7', content: '인기 ・ ' },
    { id: '8', content: '계정 ・ ' },
    { id: '9', content: '해시태그 ・ ' },
  ];

  const tags = tagList.map(tag => <span key={tag.id}>{tag.content}</span>);

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
          <div className="footer-tags">{tags}</div>
          <div className="footer-copyright">© 2021 INSTAGRAM FROM META</div>
        </footer>
      </aside>
    </section>
  );
}
