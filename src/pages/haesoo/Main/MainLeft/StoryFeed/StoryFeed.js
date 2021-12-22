import React from 'react';
import './StoryFeed.scss';

export default function StoryFeed(props) {
  const { storyDataList } = props;

  const stories = storyDataList.map(story => (
    <div className="story-container__contents">
      <div className="story__image">
        <img alt={story.alt} src={story.src} />
      </div>
      <div className="story__id">{story.id}</div>
    </div>
  ));

  return <div className="story-container-haesoo">{stories}</div>;
}
