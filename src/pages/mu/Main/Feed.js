import React, { useState, useEffect } from 'react';
import {
  AiOutlineEllipsis,
  AiOutlineHeart,
  AiOutlineMessage,
} from 'react-icons/ai';
import { BsBookmark, BsUpload } from 'react-icons/bs';
import CommentsList from './CommentsList';

function Feed() {
  const [comments, setComments] = useState([]);
  const [commentKey, setCommentKey] = useState(100);
  const [userName, setUserName] = useState('abc');
  const [userComment, setUserComment] = useState('');

  const commentSave = e => setUserComment(e.target.value);
  const commentSubmit = e => {
    e.preventDefault();
    setCommentKey(commentKey + 1);
    setUserName(userName + 'c');
    const nextComments = comments.concat({
      id: commentKey,
      userName: userName,
      comment: userComment,
    });
    setComments(nextComments);
    setUserComment('');
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json')
      .then(res => res.json())
      .then(data => {
        setComments(data);
      });
  }, []);

  return (
    <section className="feed">
      <div className="feed-header">
        <div className="feed-profile">
          <h3>minuk</h3>
          <img src="/images/mu/profile01.jpg" alt="minuk_profile" />
        </div>
        <div className="feed-more">
          <i>
            <AiOutlineEllipsis />
          </i>
        </div>
      </div>
      <div className="feed-image">
        <img src="/images/mu/feed_image01.jpg" alt="minuk_feed_image" />
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
          <img src="/images/mu/profile02.jpg" alt="user01_like_profile" />
          <p>
            <span>uk</span>님 <span>외 6명</span>이 좋아합니다{' '}
          </p>
        </div>
        <div className="feed-content">
          <p>
            <span>minuk</span>Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <button>더 보기</button>
        </div>
        <CommentsList comments={comments} />
      </div>
      <form className="feed-comment-form" onSubmit={commentSubmit}>
        <input
          id="comment-input"
          type="text"
          placeholder="댓글 달기..."
          value={userComment}
          onChange={commentSave}
        />
        <button id="comment-button" type="submit">
          게시
        </button>
      </form>
    </section>
  );
}

export default Feed;
