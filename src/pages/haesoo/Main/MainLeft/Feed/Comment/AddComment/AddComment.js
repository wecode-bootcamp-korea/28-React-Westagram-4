import React from 'react';
import './AddComment.scss';

export default function AddComment(props) {
  const commentData = props.commentDataList;
  const newComments = props.comments;

  const commentList = [...commentData];

  if (newComments.length) {
    newComments.forEach(newComment => {
      commentList.push(newComment);
      newComment.id = commentList.length;
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
