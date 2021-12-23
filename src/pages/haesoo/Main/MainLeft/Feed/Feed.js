import React from 'react';
import Comment from './Comment/Comment';
import './Feed.scss';

export default function Feed(props) {
  const { feedDataList } = props;

  const feeds = feedDataList.map(feed => (
    <div key={feed.id} className="feed-container">
      <header className="feed-header">
        <div className="feed-header__image" />
        <div className="feed-header__id">{feed.postUser}</div>
        <button className="feed-header__button">•••</button>
      </header>
      <div className="feed-image">
        <div className="feed-image__upload">
          <img alt="feed" src={feed.photo} />
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
        <div className="feed-likes">좋아요 {feed.likeNum}개</div>
        <div className="feed-user">
          <div className="feed-user__id">{feed.postUser}</div>
          <div className="feed-user__text">{feed.postComment}</div>
        </div>
      </div>
      <Comment />
    </div>
  ));
  return <div>{feeds}</div>;
}
