import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Login() {
  return (
    <div className="entry">
      <Link to="/"><img className="entry__logo" src={logo} alt="Логотип" /></Link>
      <h1 className="entry__title">Рады видеть!</h1>
      <form className="entry__form">
        <label className="entry__label" htmlFor="email">E-mail</label>
        <input className="entry__input" name="email" type="email" placeholder="E-mail" required />
        <span className="entry__error">Что-то пошло не так...</span>
        <label className="entry__label" htmlFor="password">Пароль</label>
        <input className="entry__input" name="password" type="password" placeholder="Пароль" required />
        <span className="entry__error">Что-то пошло не так...</span>
        <button className="entry__submit entry__submit_with_indent" type="submit">Войти</button>
        <p className="entry__question">Ещё не зарегистрированы?<Link to="/signup" className="entry__link"> Регистрация</Link></p>
      </form>
    </div>
  );
}

export default Login;
