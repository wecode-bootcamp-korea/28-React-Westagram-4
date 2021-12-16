import { Link } from 'react-router-dom';
import {
  AiOutlineSearch,
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineCamera,
} from 'react-icons/ai';

import './Main.scss';
import Feed from './Feed';
import Aside from './Aside/Aside';

function Main() {
  return (
    <>
      <div className="header-wrap">
        <header>
          <h1>westagram</h1>
          <i>
            <AiOutlineCamera />
          </i>
        </header>
        <nav>
          <div className="search">
            <form className="search-form">
              <input className="search-input" type="text" placeholder="검색" />
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
              {/* <ul className="profile-list">
                <li>My</li>
                <li>Post</li>
                <li>Follow</li>
                <li>Setting</li>
              </ul> */}
            </div>
          </div>
        </nav>
      </div>
      <div className="main-wrap">
        <main className="main">
          <Feed />
        </main>
        <Aside />
      </div>
    </>
  );
}

export default Main;
