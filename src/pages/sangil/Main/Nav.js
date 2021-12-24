// 항상 시작전에 git checkout feature/si 실시하고 확인할것
import React from 'react';
import '../Main/Nav.scss';

function Nav() {
  return (
    <div>
      <header id="Nav">
        <section className="Inner">
          <h1 className="Logo">
            <div className="instaIcon" />
            <div className="writeLogo" />
          </h1>
          <div class="searchBox">
            <input type="text" placeholder="검색" id="searchField" />
            <div className="searchFieldSmall">
              <span className="smallSearchIcon" />
            </div>
          </div>
          <div className="rightIcons">
            <div className="compassIcon" />
            <div className="heartIconOutline" />
            <div className="userIconProfile" />
          </div>
        </section>
      </header>
    </div>
  );
}
export default Nav;
