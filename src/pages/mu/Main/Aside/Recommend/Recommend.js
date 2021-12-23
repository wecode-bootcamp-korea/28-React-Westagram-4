function Recommend({ name, content }) {
  return (
    <div className="recommend-box">
      <img alt="user04_profile" src="/images/mu/story03.jpg" />
      <div>
        <p>{name}</p>
        <span>{content}</span>
      </div>
      <button>팔로우</button>
    </div>
  );
}

export default Recommend;
