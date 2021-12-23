import React, { useState } from 'react';
import ComponentComment from './Component_comment';
import Image from '../../../assets/images/profile_si.png';
import '../Main/Main_page.scss';

function MainPage() {
  const [Commentse, SetCommentse] = useState('');
  const [Comment_Array, SetComment_Array] = useState([]);
  const [Upload_Btn_Active, SetUpload_Btn_Active] = useState(false);

  const Comment_Btn_Plus = e => {
    const Comment_Arr = [...Comment_Array];
    Comment_Arr.push(Commentse);
    SetComment_Array(Comment_Arr);
  };

  return (
    <section id="main_container">
      <div className="Inner">
        <div className="Contents_Box">
          <article className="contents">
            <header className="contents_top">
              <div className="user_container">
                <div className="profile_img">
                  <img src={Image} alt="프로필이미지" />
                </div>
                <div className="user_name">
                  <p className="nick_name">Wecode_Week2</p>
                  <p className="country">인천광역시</p>
                </div>
              </div>
            </header>
            <div className="img_section">
              <img
                src="https://media.istockphoto.com/photos/brandenburg-gate-picture-id490614171?b=1&k=20&m=490614171&s=170667a&w=0&h=4Ak2kvxjmCf0HpjFTvSZb_QGsqSrASSJ_MI63oBHOEU="
                alt="피드용 메인 이미지"
              />
            </div>
            <div className="bottom_icons">
              <div className="left_icons">
                <dlv className="heart_btn" />
                <div className="bubble_icon" />
                <div className="share_icon" />
              </div>
              <div className="right_icon">
                <div className="bookmark_outline" />
              </div>
            </div>
            <div className="likes m_text">
              <span className="likes_count">좋아요 2,222 개</span>
              <div className="timer">1시간 전</div>
            </div>
            <div className="comment_container">
              <div className="comment">
                <div className="comment_detail">
                  <p className="comment_text_test">댓글 테스트 진행중</p>
                </div>

                {Comment_Array.map((item, i) => {
                  return <ComponentComment item={item} key={i} />;
                })}
              </div>
            </div>

            <div className="comment_field">
              <input
                type="text"
                className="comment_test"
                placeholder="댓글달기..."
                onChange={event => {
                  const { value } = event.target;
                  SetCommentse(value);
                }}
                onKeyUp={event =>
                  event.target.value.length > 0
                    ? SetUpload_Btn_Active(true)
                    : SetUpload_Btn_Active(false)
                }
              />
              <button
                className="UploadBtn"
                disabled={Upload_Btn_Active ? false : true}
                onClick={Comment_Btn_Plus}
              >
                게시
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default MainPage;
