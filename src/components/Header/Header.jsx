import { Link, useLocation  } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../images/logo.svg'
import Navigation from '../Navigation/Navigation.jsx';

function Header({ loggedIn }) {
  const location = useLocation();
  const headerModifier = location.pathname === '/' ? 'header_place_main' : 'header_place_movies';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => { setIsMenuOpen(prevState => !prevState) };

  return (
    <header className={`header ${headerModifier}`}>
      <nav className="header__nav">
        <Link to="/"><img className="each-button entry__logo" src={logo} alt="Логотип" /></Link>
      {!loggedIn
        ?
        <div className="header__auth-links">
          <Link to="/signup" className="each-link header__registration">Регистрация</Link>
          <Link to="/signin"><button className="each-button header__entry" type="button">Войти</button></Link>
        </div>
        :
        <>
          <button className="each-button header__burger" type="button" onClick={handleMenuToggle}></button>
          <Navigation isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />
        </>}
      </nav>
    </header>
  );
}

export default Header;
