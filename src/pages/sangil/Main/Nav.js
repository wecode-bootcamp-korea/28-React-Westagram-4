// 항상 시작전에 git checkout feature/si 실시하고 확인할것
import React from 'react';
import '../Main/Nav.scss';

function Nav() {
  return (
    <div>
      <header id="Nav">
        <section className="Inner">
          <h1 className="Logo">
            <div className="insta_icon" />
            <div className="write_logo" />
          </h1>
          <div class="SearchBox">
            <input type="text" placeholder="검색" id="SearchField" />
            <div className="SearchFieldSmall">
              <span className="SmallSearchIcon" />
            </div>
          </div>
          <div className="right_icons">
            <div className="CompassIcon" />
            <div className="HeartIconOutline" />
            <div className="UserIconProfile" />
          </div>
        </section>
      </header>
    </div>
  );
}
export default Nav;
