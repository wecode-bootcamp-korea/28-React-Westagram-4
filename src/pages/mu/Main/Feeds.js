import React, { useState } from 'react';
import {
  AiOutlineEllipsis,
  AiOutlineHeart,
  AiOutlineMessage,
} from 'react-icons/ai';
import { BsBookmark, BsUpload } from 'react-icons/bs';
import CommentsList from './CommentsList';

function Feeds({ feed, setFeed, update }) {
  const { id, feedId, userName, profileImg, feedImg, content, comments } = feed;
  const [comment, setComment] = useState([]);
  const [commentKey, setCommentKey] = useState(100);
  const [userCommentName, setUserCommentName] = useState('abc');
  const [commentInput, setCommentInput] = useState('');

  const commentSave = e => setCommentInput(e.target.value);

  const commentAdd = () => {
    const nextComment = comment.concat({
      id: commentKey,
      feedId: feedId,
      userName: userCommentName,
      comment: commentInput,
      isLiked: true,
    });

    setCommentKey(commentKey + 1);
    setUserCommentName(userCommentName + 'c');
    setComment(nextComment);
    setCommentInput('');
  };

  const inputKeyPress = e => {
    if (e.key === 'Enter') {
      commentAddRequest();
    }
  };

  const commentAddRequest = () => {
    commentAdd();
    setFeed({
      id: id,
      userName: userName,
      profileImg: profileImg,
      feedImg: feedImg,
      content: content,
      comments: [...comments, ...comment],
    });
    update();
  };

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
          <img alt="minuk_feed_image" src="/images/mu/feed_image01.jpg" />
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
            value={commentInput}
            onChange={commentSave}
            onKeyPress={inputKeyPress}
          />
          <button id="comment-button" type="button" onClick={commentAddRequest}>
            게시
          </button>
        </div>
      </section>
    </li>
  );
}

export default Feeds;
