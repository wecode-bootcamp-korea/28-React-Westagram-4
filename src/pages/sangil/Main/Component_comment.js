import React from 'react';

const Component_comment = props => {
  return (
    // 미션 4 댓글 관련 props로 데이터 넘겨받음
    //Main_page.js에서 댓글아이디값 state를 받아옴.
    //다른파일에서 댓글올라가는 item을 props시켜서 받아옴
    <div className="Mission3-4_comment_test">
      <p className="Mission3-4_list_1">{props.댓글아이디값}</p>
      <p className="Mission3-4_list_2">{props.item}</p>
    </div>
  );
};
export default Component_comment;
