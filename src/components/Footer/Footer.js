import React from 'react';
import '../../styles/variables.scss';

function Footer() {
  return (
    <footer className="login-footer">
      <div className="footer__tag">
        <a href="https://about.facebook.com/meta/" target="_blank">
          Meta
        </a>
        <a href="https://about.instagram.com/" target="_blank">
          소개
        </a>
        <a href="https://help.instagram.com/519522125107875" target="_blank">
          개인정보처리방침
        </a>
        <a href="https://about.instagram.com/about-us/careers" target="_blank">
          채용 정보
        </a>
        <a href="https://help.instagram.com/" target="_blank">
          도움말
        </a>
        <a
          href="https://developers.facebook.com/docs/instagram"
          target="_blank"
        >
          API
        </a>
      </div>
      <div className="footer__text">© 2021 Instagram from Meta</div>
    </footer>
  );
}

export default Footer;
