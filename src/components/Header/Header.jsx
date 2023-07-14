import React from 'react';
import logo from '../../images/logo.svg'

function Header({background}) {
  return (
    <header className={`header ${background}`}>
      <img className="header__logo" alt="Логотип киногида" src={logo}/>
      <nav className="header__buttons-box">
        <button className="header__registration">Регистрация</button>
        <button className="header__entry">Войти</button>
      </nav>
    </header>
  );
}

export default Header;
