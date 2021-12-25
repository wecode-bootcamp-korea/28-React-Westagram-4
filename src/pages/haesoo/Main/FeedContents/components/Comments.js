import React, { useState } from 'react';
import AddComment from './AddComment';
import './Comments.scss';

export default function Comment(props) {
  const { commentDataList } = props;

  const [commentInput, setCommentInput] = useState('');
  const [comments, setComment] = useState([]);
  const newComment = {
    id: '',
    userName: 'haesoo',
    content: commentInput,
    isLiked: '',
  };

  const handleChange = event => {
    const { value } = event.target;
    setCommentInput(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setComment([...comments, newComment]);
    setCommentInput('');
  };

  return (
    <>
      <AddComment comments={comments} commentDataList={commentDataList} />
      <div className="comments-haesoo">
        <form onSubmit={handleSubmit} className="input-wrapper">
          <i className="far fa-smile" />
          <input
            onChange={handleChange}
            value={commentInput}
            className="comment__input "
            placeholder="댓글 달기..."
            type="text"
          />
          <button>게시</button>
        </form>
      </div>
    </>
  );
}
