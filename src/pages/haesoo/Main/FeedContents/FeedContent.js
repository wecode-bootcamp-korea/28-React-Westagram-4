import React, { useState, useEffect } from 'react';
import Aside from '../Aside/Aside';
import StoryFeed from './StoryFeed/StoryFeed';
import Feed from './Feeds/Feed';

const BASE_URL = 'http://localhost:3000/data/haesoo';

function FeedContents() {
  const [storyData, setStoryData] = useState([]);
  const [feedDataList, setFeedDataList] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/storyData.json`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setStoryData(data);
      });
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/feedData.json`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeedDataList(data);
      });
  }, []);

  return (
    <main className="main-container">
      <section className="contents-container">
        <StoryFeed storyDataList={storyData} />
        <Feed feedDataList={feedDataList} />
      </section>
      <Aside />
    </main>
  );
}

export default FeedContents;
