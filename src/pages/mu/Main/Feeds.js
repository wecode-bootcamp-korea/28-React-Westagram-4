import React, { useState, useEffect } from 'react';
import {
  AiOutlineEllipsis,
  AiOutlineHeart,
  AiOutlineMessage,
} from 'react-icons/ai';
import { BsBookmark, BsUpload } from 'react-icons/bs';
import CommentsList from './CommentsList';

function Feeds({ feed }) {
  const { userName, content, id, feedImg } = feed;
  const [username, setUserName] = useState('abc');
  const [comments, setComments] = useState([]);
  const [commentKey, setCommentKey] = useState(100);
  const [inputText, setInputText] = useState('');
  const commentSave = e => setInputText(e.target.value);

  const commentAdd = () => {
    const nextComment = {
      id: commentKey,
      userName: username,
      feedId: id,
      comment: inputText,
      isLiked: false,
    };
    setComments([...comments, nextComment]);
    setCommentKey(commentKey + 1);
    setUserName(username + 'c');
    setInputText('');
  };

  const inputKeyEnter = e => {
    return e.key === 'Enter' ? commentAdd() : '';
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/feedComment.json')
      .then(res => res.json())
      .then(data => {
        const nowComment = data.filter(commen => commen.feedId === id);
        return setComments(nowComment);
      });
  }, []);

  return (
    <li>
      <section className="feed">
        <div className="feed-header">
          <div className="feed-profile">
            <h3>{userName}</h3>
            <img alt="minuk_profile" src="/images/mu/profile01.jpg" />
          </div>
          <div className="feed-more">
            <i>
              <AiOutlineEllipsis />
            </i>
          </div>
        </div>
        <div className="feed-image">
          <img alt="minuk_feed_image" src={feedImg} />
        </div>
        <div className="feed-wrap">
          <div className="feed-icon">
            <div>
              <i>
                <AiOutlineHeart />
              </i>
              <i>
                <AiOutlineMessage />
              </i>
              <i>
                <BsUpload />
              </i>
            </div>
            <i>
              <BsBookmark />
            </i>
          </div>
          <div className="feed-like">
            <img alt="user01_like_profile" src="/images/mu/profile02.jpg" />
            <p>
              <span>uk</span>님 <span>외 6명</span>이 좋아합니다{' '}
            </p>
          </div>
          <div className="feed-content">
            <p>
              <span>{userName}</span>
              {content}
            </p>
            <button>더 보기</button>
          </div>
          <CommentsList comments={comments} />
        </div>
        <div className="feed-comment-form">
          <input
            id="comment-input"
            type="text"
            placeholder="댓글 달기..."
            value={inputText}
            onChange={commentSave}
            onKeyPress={inputKeyEnter}
          />
          <button id="comment-button" type="button" onClick={commentAdd}>
            게시
          </button>
        </div>
      </section>
    </li>
  );
}

export default Feeds;
