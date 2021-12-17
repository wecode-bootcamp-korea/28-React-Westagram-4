import React from 'react';
import { AiOutlineHeart, AiOutlineClose } from 'react-icons/ai';

function Replys({ reply }) {
  return (
    <li className="feed-reply">
      <div>
        <span>aaa</span>
        <p>{reply}</p>
        <i>
          <AiOutlineHeart />
        </i>
      </div>
      <span className="feed-reply-time">42분전</span>
      <i>
        <AiOutlineClose />
      </i>
    </li>
  );
}

export default Replys;
