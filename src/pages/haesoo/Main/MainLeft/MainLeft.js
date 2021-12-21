import React from 'react';
import Aside from '../Aside/Aside';
import StoryFeed from './StoryFeed/StoryFeed';
import Feed from './Feed/Feed';

function MainLeft() {
  return (
    <main className="main-left">
      <section className="contents-container">
        <StoryFeed />
        <Feed />
      </section>
      <Aside />
    </main>
  );
}

export default MainLeft;
