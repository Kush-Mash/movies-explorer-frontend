import { Link, NavLink } from "react-router-dom";

function Navigation({ isMenuOpen, handleMenuToggle }) {
  const setActive = ({ isActive }) =>
    `each-link navigation__link ${isActive ? "navigation__link_active" : ""}`;

  return (
    <nav className={`navigation ${isMenuOpen ? "navigation_active" : ""}`}>
      <div className="navigation__box">
        <div className="navigation__movies">
          {isMenuOpen && (
            <>
              <button className="navigation__close" onClick={handleMenuToggle}></button>
              <NavLink to="/" className={setActive} id="main">Главная</NavLink>
            </>
          )}
          <NavLink to="/movies" className={setActive}>Фильмы</NavLink>
          <NavLink to="/saved-movies" className={setActive}>Сохранённые&nbsp;фильмы</NavLink>
        </div>
        <Link to="/profile">
          <button className="each-button navigation__profile" type="button">Аккаунт</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
