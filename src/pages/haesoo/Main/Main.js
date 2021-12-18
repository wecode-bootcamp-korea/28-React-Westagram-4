import React, { useState } from 'react';
import Comment from './Comment/Comment';
import './Main.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Main() {
  const [commentInput, setCommentInput] = useState('');
  const [comments, setComment] = useState([]);

  const handleChange = event => {
    setCommentInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setComment(
      comments.concat({
        user: 'haesoo',
        text: commentInput,
      })
    );
    setCommentInput('');
  };

  return (
    <div className="main">
      <nav className="navigation">
        <a href="#">Westagram</a>
        <div className="js-navigation navigation__search">
          {/* <FontAwesomeIcon
            icon={faSearch}
            className="fa-search"
          ></FontAwesomeIcon> */}
          <input className="js-search-input" placeholder="검색" />
          {/* <div className="search-container main-hide">
            <ul className="search-list"></ul>
          </div> */}
        </div>
        <div className="navigation__icons">
          <img
            alt="home icon"
            src="/images/haesoo/content_icons/navigation.png"
          />
          <img
            alt="messenger icon"
            src="/images/haesoo/navigation_icons/messenger.png"
          />
          <img
            alt="make contents icon"
            src="/images/haesoo/navigation_icons/more.png"
          />
          <img
            alt="contents icon"
            src="/images/haesoo/content_icons/navigation.png"
          />
          <img
            alt="like information"
            src="/images/haesoo/navigation_icons/like.png"
          />
          <img
            alt="profile image"
            src="/images/haesoo/navigation_icons/profile.jpg"
            className="profile-img"
          />
        </div>
      </nav>
      <main className="main-main">
        <section className="contents-container">
          <div className="story-container">
            <div className="story-container__contents">
              <div className="story__image">
                <img
                  alt="story profile image"
                  src="/images/haesoo/story_images/1.JPG"
                />
              </div>
              <div className="story__id">onnuk_</div>
            </div>
            <div className="story-container__contents">
              <div className="story__image">
                <img
                  alt="story profile image"
                  src="/images/haesoo/story_images/2.JPG"
                />
              </div>
              <div className="story__id">singmulstore</div>
            </div>
            <div className="story-container__contents">
              <div className="story__image">
                <img
                  alt="story profile image"
                  src="/images/haesoo/story_images/3.JPG"
                />
              </div>
              <div className="story__id">dlwldms</div>
            </div>
            <div className="story-container__contents">
              <div className="story__image">
                <img
                  alt="story profile image"
                  src="/images/haesoo/story_images/7.JPG"
                />
              </div>
              <div className="story__id">_jeongjaehyun</div>
            </div>
            <div className="story-container__contents">
              <div className="story__image">
                <img
                  alt="story profile image"
                  src="/images/haesoo/story_images/5.JPG"
                />
              </div>
              <div className="story__id">cy_1.018</div>
            </div>
            <div className="story-container__contents">
              <div className="story__image">
                <img
                  alt="story profile image"
                  src="/images/haesoo/story_images/4.JPG"
                />
              </div>
              <div className="story__id">bona_is_cute</div>
            </div>
            <div className="story-container__contents">
              <div className="story__image">
                <img
                  alt="story profile image"
                  src="/images/haesoo/story_images/6.JPG"
                />
              </div>
              <div className="story__id">ninicho</div>
            </div>
          </div>
          <div className="feed-container">
            <header className="feed-header">
              <div className="header__image"></div>
              <div className="header__id">__hackney</div>
              <button className="header__button">•••</button>
            </header>
            <div className="feed-image">
              <div className="image__upload">
                <img alt="feed image" src="/images/haesoo/feed_images/1.jpeg" />
              </div>
              <div className="image__buttons">
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
            <div className="feed-icons">
              <div className="feed-icons__left">
                <button>
                  <img
                    alt="like icon"
                    src="/images/haesoo/navigation_icons/like.png"
                  />
                </button>
                <button>
                  <img
                    alt="comment icon"
                    src="/images/haesoo/content_icons/chat.png"
                  />
                </button>
                <button>
                  <img
                    alt="direct message"
                    src="/images/haesoo/content_icons/navigation.png"
                  />
                </button>
              </div>
              <div className="feed-icons__right">
                <button>
                  <img
                    alt="feed save icon"
                    src="/images/haesoo/content_icons/save-instagram.png"
                  />
                </button>
              </div>
            </div>
            <div className="feed-information js-feed-container">
              <div className="feed-likes">좋아요 170개</div>
              <div className="feed-user">
                <div className="feed-user__id">__hackney</div>
                <div className="feed-user__text">
                  안뇽 나는 인스타그램 클론중
                </div>
              </div>
            </div>
            <Comment className="feed-comment__add" comment={comments} />
            <div className="feed-comment">
              <form onSubmit={handleSubmit} className="feed-comment__left">
                <i className="far fa-smile"></i>
                <input
                  onChange={handleChange}
                  value={commentInput}
                  className="comment__input "
                  placeholder="댓글 달기..."
                  type="text"
                />
                <button className="feed-comment__button">게시</button>
              </form>
            </div>
          </div>
        </section>
        <aside className="user-container">
          <div className="user-wrapper">
            <div className="user-wrapper__image">
              <img
                alt="profile image"
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
                    alt="recommend follow profile image"
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
                    alt="recommend follow profile image"
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
                    alt="recommend follow profile image"
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
                    alt="recommend follow profile image"
                    src="/images/haesoo/feed_images/wookie.png"
                  />
                </div>
                <div className="follow__user">
                  <div className="user-id">wookieyezonly</div>
                  <div className="user-follow">
                    modu님 외 1명이 팔로우합니다
                  </div>
                </div>
                <button className="follow__button" type="button">
                  팔로우
                </button>
              </div>
            </div>
          </div>
          <footer className="main-footer">
            <div className="footer-tags">
              <a>소개 ・</a>
              <a>도움말 ・</a>
              <a>홍보 ・</a>
              <a>개인정보처리방침 ・</a>
              <a>약관 ・</a>
              <a>위치 ・</a>
              <a>인기 ・</a>
              <a>계정 ・</a>
              <a>해시태그</a>
            </div>
            <div className="footer-copyright">© 2021 INSTAGRAM FROM META</div>
          </footer>
        </aside>
      </main>
    </div>
  );
}

export default Main;
