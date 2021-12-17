import React from 'react';
import '../Main/Main_page.scss';
import 이미지 from '../../../assets/images/profile_si.png';

function Main_page() {
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
            </div>
            <div className="comment_container">
              <div className="comment">
                <div className="comment_detail">
                  <p className="comment_text_test">댓글 테스트 진행중</p>
                </div>
              </div>
            </div>
            <div className="timer">1시간 전</div>
            <div className="comment_field">
              <input
                type="text"
                className="comment_test"
                placeholder="댓글달기..."
              />
              <div className="upload_btn_m_text">게시</div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Main_page;
