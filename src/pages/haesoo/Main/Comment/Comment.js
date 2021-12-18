import React from 'react';

export default function Comment(props) {
  const commentList = props.comment;
  const comment = commentList.map(comment => (
    <ul className="comment-wrapper">
      <span className="comment-id">{comment.user}</span>
      <span className="comment-text">{comment.text}</span>
      <button className="delete-button" type="button">
        X
      </button>
    </ul>
  ));
  return <div className="feed-comment__add">{comment}</div>;
}
