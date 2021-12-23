import Story from './Story/Story';
import Recommend from './Recommend/Recommend';
import STORYDATA from './Story/StroyData';
import RECOMMENDDATA from './Recommend//RecommendData';

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
        {STORYDATA.map(story => (
          <Story key={story.name} name={story.name} time={story.time} />
        ))}
      </article>
      <article className="aside-box recommend">
        <h3>회원님을 위한 추천</h3>
        <button>모두 보기</button>
        {RECOMMENDDATA.map(recommend => (
          <Recommend
            key={recommend.key}
            name={recommend.name}
            content={recommend.content}
          />
        ))}
      </article>
    </aside>
  );
}

export default Aside;
