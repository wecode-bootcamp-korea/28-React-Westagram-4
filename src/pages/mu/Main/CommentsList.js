import React from 'react';

import Comments from './Comments';

function CommentsList({ comments }) {
  return (
    <ul>
      {comments.map(comment => (
        <Comments
          key={comment.id}
          name={comment.userName}
          comment={comment.comment}
        />
      ))}
    </ul>
  );
}

export default CommentsList;
