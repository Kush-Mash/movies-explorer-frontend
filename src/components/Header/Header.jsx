import { Link, NavLink, useLocation } from "react-router-dom";
import logo from '../../images/logo.svg'

function Header({background}) {
  const location = useLocation();

  return (
    <header className={`header ${background}`}>
      <Link to="/"><img className="entry__logo" src={logo} alt="Логотип" /></Link>
      {location.pathname === "/" ? (
        <nav className="header__nav-main">
          <Link to="/signup" className="header__registration">Регистрация</Link>
          <Link to="/signin"><button className="header__entry" type="button">Войти</button></Link>
        </nav>
      ) : (
        <nav className="header__nav-movies">
          <NavLink to="/movies" className={({isActive}) => `header__movies ${isActive ? "header__movies_active" : ""}`}>Фильмы</NavLink>
          <NavLink to="/saved-movies" className={({isActive}) => `header__movies ${isActive ? "header__movies_active" : ""}`}>Сохранённые&nbsp;фильмы</NavLink>
          <Link to="/profile"><button className="header__profile" type="button">Аккаунт</button></Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
