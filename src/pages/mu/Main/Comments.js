import React from 'react';
import { AiOutlineHeart, AiOutlineClose } from 'react-icons/ai';

function Comments({ comment, name }) {
  return (
    <li className="feed-comment">
      <div>
        <span>{name}</span>
        <p>{comment}</p>
        <i>
          <AiOutlineHeart />
        </i>
      </div>
      <span className="feed-comment-time">42분전</span>
      <i>
        <AiOutlineClose />
      </i>
    </li>
  );
}

export default Comments;
