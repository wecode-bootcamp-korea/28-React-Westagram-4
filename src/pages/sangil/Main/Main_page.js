import React, { useState } from 'react';
import '../Main/Main_page.scss';
import 이미지 from '../../../assets/images/profile_si.png';
import Component_comment from './Component_comment';

function Main_page() {
  // 메인페이지 댓글 관련 시작부분
  const [댓글아이디값, 댓글아이디값변경] = useState('');
  const [컨텐츠값, 컨텐츠값변경] = useState('');
  const [댓글배열저장, 댓글배열저장변경] = useState([]);
  const [검사, 검사변경] = useState(false);

  const comment_btn_plus = e => {
    e.preventDefault();
    const comment_Arr_test = [...댓글배열저장];
    comment_Arr_test.push(컨텐츠값);
    댓글배열저장변경(comment_Arr_test);
    댓글아이디값변경('');
  };
  // 메인페이지 댓글 관련 일부 완료 부분

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
                {/* 댓글 관련 map반복문 + 컴포넌트 부분 */}
                {댓글배열저장.map((item, i) => {
                  return (
                    <Component_comment
                      댓글아이디값={댓글아이디값}
                      item={item}
                      key={i}
                    />
                  );
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
                  컨텐츠값변경(event.target.value);
                }}
                onKeyUp={event =>
                  event.target.value.length > 0
                    ? 검사변경(true)
                    : 검사변경(false)
                }
              />
              <button
                className="upload_btn_m_text"
                disabled={검사 ? false : true}
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
