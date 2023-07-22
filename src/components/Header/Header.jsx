import { Link, NavLink, useLocation } from "react-router-dom";
import logo from '../../images/logo.svg'

function Header({background}) {
  const location = useLocation();

  return (
    <header className={`header ${background}`}>
      <Link to="/"><img className="each-button entry__logo" src={logo} alt="Логотип" /></Link>
      {location.pathname === "/" ? (
        <nav className="header__nav-main">
          <Link to="/signup" className="each-link header__registration">Регистрация</Link>
          <Link to="/signin"><button className="each-link header__entry" type="button">Войти</button></Link>
        </nav>
      ) : (
        <nav className="header__nav-movies">
          <NavLink
            to="/movies"
            className={({isActive}) => `each-link header__movies ${isActive ? "header__movies_active" : ""}`}
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({isActive}) => `each-link header__movies ${isActive ? "header__movies_active" : ""}`}
          >
            Сохранённые&nbsp;фильмы
          </NavLink>
          <Link to="/profile">
            <button className="each-button header__profile" type="button">Аккаунт</button>
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
