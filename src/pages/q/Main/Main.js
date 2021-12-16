import './Main.scss';
function Main() {
  return (
    <div className="main">
      <div className="all-wrapper">
        <div className="navi-wrapper">
          <div className="navi-logo">
            <div className="navi-logo-camera">
              <img
                src="https://cdn-icons.flaticon.com/png/512/739/premium/739244.png?token=exp=1638955809~hmac=65cb6ed68b4673d56dd654f864700f0a"
                alt="호우"
                width="25px"
                height="25px"
              />
            </div>
            <div className="navi-logo-text">Westagram</div>
          </div>
          <div className="navi-input">
            <input type="text" />
          </div>

          <div className="navi-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/512/864/864669.png"
              alt="호우"
              width="25px"
              height="25px"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/1216/1216575.png"
              alt="호우"
              width="25px"
              height="25px"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/1159/1159797.png "
              alt="호우"
              width="25px"
              height="25px"
            />
          </div>
        </div>
        <div className="content-wrapper">
          <div className="feed">
            <div className="feed-profile">
              <div className="feed-profile-left">
                <div className="feed-profile-photo">
                  <img
                    src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                    alt="호우"
                    width="40px"
                    height="40px"
                  />
                </div>
                <div className="feed-profile-account">Naviya</div>
              </div>
              <div className="feed-profile-right">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/512/512142.png"
                  alt="호우"
                  width="15px"
                  height="15px"
                />
              </div>
            </div>
            <div className="feed-photo">
              <img
                src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                alt="호우"
                width="615px"
                height="615px"
              />
            </div>
            <div className="feed-under-photo-wrapper">
              <div className="feed-icons">
                <div className="feed-icons-left">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1216/1216575.png"
                    alt="호우"
                    width="25px"
                    height="25px"
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2089/2089157.png"
                    alt="호우"
                    width="25px"
                    height="25px"
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/747/747416.png"
                    alt="호우"
                    width="25px"
                    height="25px"
                  />
                </div>
                <div className="feed-icons-right"></div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/66/66836.png"
                  alt="호우"
                  width="25px"
                  height="25px"
                />
              </div>
              <div className="feed-like">좋아요 350개</div>
              <div className="comment-wrapper">
                <div className="feed-account">Naviya</div>
                <div className="feed-comment">야오옹</div>
              </div>
              <ul id="feed-reply-wrapper">
                <li>
                  <span>Bow_Wow</span>
                  <span> 머엉</span>
                </li>
              </ul>
              <div className="feed-reply-input">
                <div className="feed-reply-input-input">
                  <input type="text" id="repl" placeholder="댓글 달기..." />
                </div>
                <div className="feed-reply-input-button">
                  <button disabled>게시</button>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar-wrapper">
            <div className="sidebar-account">
              <div className="sidebar-account-image">
                <img
                  src="https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
                  alt="호우"
                  width="50px"
                  height="50px"
                />
              </div>
              <div className="sidebar-account-profile-wrapper">
                <div className="sidebar-account-profile-top">Top_Dog</div>
                <div className="sidebar-account-profile-bwrapper">
                  <div className="sidebar-account-profile-bleft">Top</div>
                  <div className="sidebar-account-profile-bright">Dog</div>
                </div>
              </div>
            </div>
            <div className="sidebar-story">
              <div className="sidebar-story-twrapper">
                <div className="sidebar-story-tleft">회원님을 위한 추천</div>
                <div className="sidebar-story-tright">모두보기</div>
              </div>
              <div className="sidebar-story-bwrapper">
                <div className="sidebar-story-account1">
                  <div className="sidebar-story-account1-image">
                    <img
                      src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                      alt="호우"
                      width="35px"
                      height="35px"
                    />
                  </div>
                  <div className="sidebar-story-account1-right">
                    <div className="sidebar-story-account1-tright">Bow_Wow</div>
                    <div className="sidebar-story-account1-bright">
                      왈왈그르르르
                    </div>
                  </div>
                </div>
                <div className="sidebar-story-account2">
                  <div className="sidebar-story-account2-image">
                    <img
                      src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                      alt="호우"
                      width="35px"
                      height="35px"
                    />
                  </div>
                  <div className="sidebar-story-account2-right">
                    <div className="sidebar-story-account2-tright">Jolly</div>
                    <div className="sidebar-story-account2-bright">
                      으르렁컹컹
                    </div>
                  </div>
                </div>
                <div className="sidebar-story-account3">
                  <div className="sidebar-story-account3-image">
                    <img
                      src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="호우"
                      width="35px"
                      height="35px"
                    />
                  </div>
                  <div className="sidebar-story-account3-right">
                    <div className="sidebar-story-account3-tright">
                      Love_Coco
                    </div>
                    <div className="sidebar-story-account3-bright">
                      끼잉끼잉
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar-footer">
              소개&middot도움말&middot홍보센터&middotAPI&middot채용정보&middot개인정보처리방침&middot약관&middot위치&middot인기계정&middot해시태그&middot언어
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
