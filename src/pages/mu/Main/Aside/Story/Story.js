function Story({ name, time }) {
  return (
    <div className="story-box">
      <img alt="user03_profile" src="/images/mu/story01.jpg" />
      <div>
        <p>{name}</p>
        <span>{time}</span>
      </div>
      <button />
    </div>
  );
}

export default Story;
