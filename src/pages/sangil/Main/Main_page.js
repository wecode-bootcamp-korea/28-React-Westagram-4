import React, { useState, useEffect } from 'react';
import Component_comment from './Component_comment';

import 이미지 from '../../../assets/images/profile_si.png';
import '../Main/Main_page.scss';

function Main_page() {
  const [댓글, 댓글변경] = useState('');
  const [댓글배열, 댓글배열변경] = useState([]);
  const [게시버튼활성화, 게시버튼활성화변경] = useState(false);

  const comment_btn_plus = e => {
    const comment_Arr = [...댓글배열];
    comment_Arr.push(댓글);
    댓글배열변경(comment_Arr);
  };

  return (
    <section id="main_container">
      <div className="inner">
        <div className="contents_box">
          <article className="contents">
            <header className="contents_top">
              <div className="user_container">
                <div className="profile_img">
                  <img src={이미지} alt="프로필이미지" />
                </div>
                <div className="user_name">
                  <p className="nick_name">Wecode_Week2</p>
                  <p className="country">워싱턴 DC, 미국</p>
                </div>
              </div>
            </header>
            <div className="img_section">
              <div className="trans_inner">
                <div>
                  <img src="https://media.istockphoto.com/photos/brandenburg-gate-picture-id490614171?b=1&k=20&m=490614171&s=170667a&w=0&h=4Ak2kvxjmCf0HpjFTvSZb_QGsqSrASSJ_MI63oBHOEU=" />
                </div>
              </div>
            </div>
            <div className="bottom_icons">
              <div className="left_icons">
                <dlv className="heart_btn">
                  <div className="alpha_heart_icon_outline" />
                </dlv>
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

                {댓글배열.map((item, i) => {
                  return <Component_comment item={item} key={i} />;
                })}
              </div>
            </div>

            <div className="comment_field">
              <input
                type="text"
                className="comment_test"
                placeholder="댓글달기..."
                // 댓글 관련 클릭시 이벤트 진행부분
                onChange={event => {
                  const { value } = event.target;
                  댓글변경(value);
                }}
                onKeyUp={event =>
                  event.target.value.length > 0
                    ? 게시버튼활성화변경(true)
                    : 게시버튼활성화변경(false)
                }
              />
              <button
                className="upload_btn_m_text"
                disabled={게시버튼활성화 ? false : true}
                onClick={comment_btn_plus}

                // 댓글 관련 클릭시 이벤트 완료 부분
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

export default Main_page;
