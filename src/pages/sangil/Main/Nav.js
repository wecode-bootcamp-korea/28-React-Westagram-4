// 항상 시작전에 git checkout feature/si 실시하고 확인할것
import React from 'react';
import { Link } from 'react-router-dom';
import '../Main/Nav.scss';

function Nav() {
  return (
    <div>
      <section id="container">
        <header id="header">
          <section className="inner">
            <h1 className="logo">
              <div className="insta_icon" />
              <div className="write_logo" />
            </h1>
            <div class="search_box">
              <input type="text" placeholder="검색" id="search-field" />
              <div className="search_field_small">
                <span className="small_search_icon" />
              </div>
            </div>
            <div className="right_icons">
              <Link to="/login-sangil">
                <div className="compass_icon" />
              </Link>
              <div className="heart_icon_outline" />
              <div className="user_icon_profile" />
            </div>
          </section>
        </header>
      </section>
    </div>
  );
}
export default Nav;
