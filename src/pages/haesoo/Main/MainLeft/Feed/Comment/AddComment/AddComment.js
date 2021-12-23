import React from 'react';
import './AddComment.scss';

export default function AddComment(props) {
  const commentDataList = props.commentDataList;
  const { comments } = props;

  const commentList = [...commentDataList];

  if (comments.length) {
    comments.forEach(comment => {
      commentList.push(comment);
      comment.id = commentList.length;
    });
  }

  const commentsUI = commentList.map(comment => (
    <div key={comment.id} className="comment-wrapper">
      <span className="comment-id">{comment.userName}</span>
      <span className="comment-text">{comment.content}</span>
      <button className="delete-button" type="button">
        X
      </button>
    </div>
  ));

  return <div className="feed-comment__add">{commentsUI}</div>;
}
