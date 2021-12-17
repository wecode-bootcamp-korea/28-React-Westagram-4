import React, { useState } from 'react';
import {
  AiOutlineEllipsis,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineClose,
} from 'react-icons/ai';
import { BsBookmark, BsUpload } from 'react-icons/bs';

function Feed() {
  const [replys, setReplys] = useState([]);
  const [userReply, setUserReply] = useState('');
  const [replyKey, setReplyKey] = useState(0);

  const replySave = e => setUserReply(e.target.value);
  const replySubmit = e => {
    e.preventDefault();
    const nextReplys = replys.concat({
      key: replyKey,
      reply: userReply,
    });
    setReplys(nextReplys);
    setReplyKey(replyKey + 1);
    setUserReply('');
  };

  const replyLists = replys.map(reply => (
    <li className="feed-reply" key={reply.key}>
      <div>
        <span>aaa</span>
        <p>{reply.reply}</p>
        <i>
          <AiOutlineHeart />
        </i>
      </div>
      <span className="feed-reply-time">42분전</span>
      <i>
        <AiOutlineClose />
      </i>
    </li>
  ));

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
        <ul className="feed-replyList">{replyLists}</ul>
      </div>
      <form className="feed-reply-form" onSubmit={replySubmit}>
        {/* <label for="reply"></label> */}
        <input
          id="reply-input"
          type="text"
          placeholder="댓글 달기..."
          value={userReply}
          onChange={replySave}
        />
        <button id="reply-button" type="submit">
          게시
        </button>
      </form>
    </section>
  );
}

export default Feed;
