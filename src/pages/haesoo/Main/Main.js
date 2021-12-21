import React from 'react';
import MainLeft from './MainLeft/MainLeft';
import './Main.scss';
import './MainLeft/MainLeft.scss';
import './Aside/Aside.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Main() {
  return (
    <div className="main-haesoo">
      <nav className="navigation">
        <p>Westagram</p>
        <div className="js-navigation navigation__search">
          <input className="js-search-input" placeholder="검색" />
        </div>
        <div className="navigation__icons">
          <img
            alt="home icon"
            src="/images/haesoo/content_icons/navigation.png"
          />
          <img
            alt="messenger icon"
            src="/images/haesoo/navigation_icons/messenger.png"
          />
          <img
            alt="make contents icon"
            src="/images/haesoo/navigation_icons/more.png"
          />
          <img
            alt="contents icon"
            src="/images/haesoo/content_icons/navigation.png"
          />
          <img
            alt="like information"
            src="/images/haesoo/navigation_icons/like.png"
          />
          <img
            alt="profile"
            src="/images/haesoo/navigation_icons/profile.jpg"
            className="profile-img"
          />
        </div>
      </nav>
      <MainLeft />
    </div>
  );
}

export default Main;
