import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p className='footer__text'>Учебный проект Яндекс.Практикум&nbsp;х&nbsp;BeatFilm.</p>
      <div className='footer__box'>
        <span className='footer__copyright'>&copy;&nbsp;{new Date().getFullYear()}</span>
        <nav className="footer__menu">
          <p className="footer__link">Яндекс.Практикум</p>
          <p className="footer__link">Github</p>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
