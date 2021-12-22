// 항상 시작전에 git checkout feature/si 실시하고 확인할것
import React from 'react';
import { Link } from 'react-router-dom';
import '../Main/Nav.scss';

function Nav() {
  return (
    <div>
      <section id="container">
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
              <Link to="/login-sangil">
                <div className="CompassIcon" />
              </Link>
              <div className="HeartIconOutline" />
              <div className="UserIconProfile" />
            </div>
          </section>
        </header>
      </section>
    </div>
  );
}
export default Nav;
