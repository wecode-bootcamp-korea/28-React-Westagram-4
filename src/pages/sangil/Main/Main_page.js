import React, { useState } from 'react';
import ComponentComment from './Component_comment';
import Image from '../../../assets/images/profile_si.png';
import '../Main/Main_page.scss';

function MainPage() {
  const [Commentse, SetCommentse] = useState('');
  const [CommentArray, SetCommentArray] = useState([]);
  const [UploadBtnActive, SetUploadBtnActive] = useState(false);

  const CommentBtnPlus = e => {
    const CommentArr = [...CommentArray];
    CommentArr.push(Commentse);
    SetCommentArray(CommentArr);
  };

  return (
    <section id="mainContainer">
      <div className="Inner">
        <div className="Contents_Box">
          <article className="Contents">
            <header className="contentsTop">
              <div className="userContainer">
                <div className="profileImg">
                  <img src={Image} alt="프로필이미지" />
                </div>
                <div className="userName">
                  <p className="nickName">Wecode_Week2</p>
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
            <div className="bottomIcons">
              <div className="leftIcons">
                <dlv className="heartBtn" />
                <div className="bubbleIcon" />
                <div className="shareIcon" />
              </div>
              <div className="rightIcon">
                <div className="bookmarkOutline" />
              </div>
            </div>
            <div className="likes m_text">
              <span className="likeCount">좋아요 2,222 개</span>
              <div className="timer">1시간 전</div>
            </div>
            <div className="CommentContainer">
              <div className="Comment">
                <div className="CommentDetail">
                  <p className="commentTextTest">댓글 테스트 진행중</p>
                </div>

                {CommentArray.map((item, i) => {
                  return <ComponentComment item={item} key={i} />;
                })}
              </div>
            </div>

            <div className="commentField">
              <input
                type="text"
                className="commentTest"
                placeholder="댓글달기..."
                onChange={event => {
                  const { value } = event.target;
                  SetCommentse(value);
                }}
                onKeyUp={event =>
                  event.target.value.length > 0
                    ? SetUploadBtnActive(true)
                    : SetUploadBtnActive(false)
                }
              />
              <button
                className="uploadBtn"
                disabled={UploadBtnActive ? false : true}
                onClick={CommentBtnPlus}
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
