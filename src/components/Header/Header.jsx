import { Link } from "react-router-dom";
import logo from '../../images/logo.svg'

function Header({background}) {
  return (
    <header className={`header ${background}`}>
      <Link to="/"><img className="entry__logo" src={logo} alt="Логотип" /></Link>
      <nav className="header__buttons-box">
        <Link to="/signup" className="header__registration">Регистрация</Link>
        <Link to="/signin"><button className="header__entry" type="button">Войти</button></Link>
      </nav>
    </header>
  );
}

export default Header;
