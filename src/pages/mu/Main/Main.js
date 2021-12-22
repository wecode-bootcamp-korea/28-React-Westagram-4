import React, { useState, useEffect } from 'react';
import {
  AiOutlineSearch,
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineCamera,
} from 'react-icons/ai';

import './Main.scss';
import Feeds from './Feeds';
import Aside from './Aside/Aside';

function Main() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json')
      .then(res => res.json())
      .then(data => {
        setFeeds(data);
      });
  }, []);

  return (
    <>
      <div className="header-wrap">
        <div>
          <header>
            <h1>westagram</h1>
            <i>
              <AiOutlineCamera />
            </i>
          </header>
          <nav>
            <div className="search">
              <form className="search-form">
                <input
                  className="search-input"
                  type="text"
                  placeholder="검색"
                />
                <ul className="search-list" />
              </form>
              <i>
                <AiOutlineSearch />
              </i>
            </div>
            <div className="menu">
              <div className="icon">
                <i>
                  <AiOutlineCompass />
                </i>
                <i>
                  <AiOutlineHeart />
                </i>
                <i>
                  <AiOutlineUser />
                </i>
              </div>
              <div className="profile">
                <img alt="profile" src="/images/mu/profile03.jpg" />
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="main-wrap">
        <main className="main">
          <ul>
            {feeds.map(fee => (
              <Feeds key={fee.id} feed={fee} />
            ))}
          </ul>
        </main>
        <Aside />
      </div>
    </>
  );
}

export default Main;
