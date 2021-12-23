import React, { useState, useEffect } from 'react';
import Aside from '../Aside/Aside';
import StoryFeed from './StoryFeed/StoryFeed';
import Feed from './Feed/Feed';

function MainLeft() {
  const [storyData, setStoryData] = useState([]);
  const [feedDataList, setFeedDataList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/data/haesoo/storyData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setStoryData(data);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3001/data/haesoo/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeedDataList(data);
      });
  }, []);

  return (
    <main className="main-left">
      <section className="contents-container">
        <StoryFeed storyDataList={storyData} />
        <Feed feedDataList={feedDataList} />
      </section>
      <Aside />
    </main>
  );
}

export default MainLeft;
