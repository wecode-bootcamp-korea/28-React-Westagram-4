import React, { useState, useEffect } from 'react';
import AddComment from './AddComment/AddComment';

export default function Comment() {
  const [commentData, setCommentData] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  const [comments, setComment] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/haesoo/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCommentData(data);
      });
  }, []);

  const handleChange = event => {
    setCommentInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setComment(
      comments.concat({
        id: '',
        userName: 'haesoo',
        content: commentInput,
        isLiked: '',
      })
    );
    setCommentInput('');
  };

  return (
    <>
      <AddComment
        className="feed-comment__add"
        comments={comments}
        commentDataList={commentData}
      />
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
    </>
  );
}
