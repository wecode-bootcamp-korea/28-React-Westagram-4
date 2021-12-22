import React from 'react';
import Comment from './Comment/Comment';
import './Feed.scss';

export default function Feed() {
  return (
    <div className="feed-container">
      <header className="feed-header">
        <div className="feed-header__image" />
        <div className="feed-header__id">__hackney</div>
        <button className="feed-header__button">•••</button>
      </header>
      <div className="feed-image">
        <div className="feed-image__upload">
          <img alt="feed" src="/images/haesoo/feed_images/1.jpeg" />
        </div>
        <div className="feed-image__buttons">
          <p />
          <p />
          <p />
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
          <div className="feed-user__text">안뇽 나는 인스타그램 클론중</div>
        </div>
      </div>
      <Comment />
    </div>
  );
}
