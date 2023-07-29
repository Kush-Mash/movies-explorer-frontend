import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум&nbsp;х&nbsp;BeatFilm.
      </p>
      <div className="footer__box">
        <span className="footer__copyright">
          &copy;&nbsp;{new Date().getFullYear()}
        </span>
        <nav className="footer__menu">
          <a className="each-link footer__link" href="https://practicum.yandex.ru/" target="blank">
            Яндекс.Практикум
          </a>
          <a className="each-link footer__link" href="https://github.com/Kush-Mash" target="blank">
            Github
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
