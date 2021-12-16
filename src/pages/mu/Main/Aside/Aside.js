function Aside() {
  return (
    <aside>
      <article className="myprofile">
        <img alt="user02_profile" src="/images/mu/profile03.jpg" />
        <div>
          <p>minuk</p>
          <span>boookkk</span>
        </div>
      </article>
      <article className="aside-box story">
        <h3>스토리</h3>
        <button>모두 보기</button>
        <div className="story-box">
          <img alt="user03_profile" src="/images/mu/story01.jpg" />
          <div>
            <p>aaaaaaa</p>
            <span>42분 전</span>
          </div>
          <button />
        </div>
        <div className="story-box">
          <img alt="user04_profile" src="/images/mu/story02.jpg" />
          <div>
            <p>bbbbbbb</p>
            <span>21분 전</span>
          </div>
        </div>
        <div className="story-box">
          <img alt="user05_profile" src="/images/mu/story03.jpg" />
          <div>
            <p>ccccccc</p>
            <span>3분 전</span>
          </div>
        </div>
        <div className="story-box">
          <img alt="user06_profile" src="/images/mu/story04.jpg" />
          <div>
            <p>dddddddddd</p>
            <span>50분 전</span>
          </div>
        </div>
      </article>
      <article className="aside-box recommend">
        <h3>회원님을 위한 추천</h3>
        <button>모두 보기</button>
        <div className="recommend-box">
          <img alt="user02_profile" src="/images/mu/story01.jpg" />
          <div>
            <p>aaaaaaa</p>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
          </div>
          <button>팔로우</button>
        </div>
        <div className="recommend-box">
          <img alt="user03_profile" src="/images/mu/story02.jpg" />
          <div>
            <p>bbbbbbb</p>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
          </div>
          <button>팔로우</button>
        </div>
        <div className="recommend-box">
          <img alt="user04_profile" src="/images/mu/story03.jpg" />
          <div>
            <p>ccccccc</p>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
          </div>
          <button>팔로우</button>
        </div>
        <div className="recommend-box">
          <img alt="user05_profile" src="/images/mu/story01.jpg" />
          <div>
            <p>ddddddd</p>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
          </div>
          <button>팔로우</button>
        </div>
      </article>
    </aside>
  );
}

export default Aside;
