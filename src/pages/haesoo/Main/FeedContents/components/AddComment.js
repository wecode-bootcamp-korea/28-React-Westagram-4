import React from 'react';
import './AddComment.scss';

export default function AddComment({ comments, commentDataList }) {
  const commentList = [...commentDataList];

  if (comments.length) {
    comments.forEach(comment => {
      commentList.push(comment);
      comment.id = commentList.length;
    });
  }

  const commentsUI = commentList.map(comment => (
    <div key={comment.id} className="comment">
      <span className="comment-id">{comment.userName}</span>
      <span className="comment-text">{comment.content}</span>
      <button className="comment-delete" type="button">
        X
      </button>
    </div>
  ));

  return <div className="comment-wrapper">{commentsUI}</div>;
}
