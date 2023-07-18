import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Register() {
  return (
    <div className="entry">
      <Link to="/"><img className="entry__logo" src={logo} alt="Логотип" /></Link>
      <h1 className="entry__title">Добро пожаловать!</h1>
      <form className="entry__form">
        <label className="entry__label" htmlFor="name">Имя</label>
        <input className="entry__input" name="name" type="text" placeholder="Имя" required />
        <span className="entry__error">Что-то пошло не так...</span>
        <label className="entry__label" htmlFor="email">E-mail</label>
        <input className="entry__input" name="email" type="email" placeholder="E-mail" required />
        <span className="entry__error">Что-то пошло не так...</span>
        <label className="entry__label" htmlFor="password">Пароль</label>
        <input className="entry__input" name="password" type="password" placeholder="Пароль" required />
        <span className="entry__error">Что-то пошло не так...</span>
        <button className="entry__submit" type="submit">Зарегистрироваться</button>
        <p className="entry__question">Уже зарегистрированы?<Link to="/signin" className="entry__link"> Войти</Link></p>
      </form>
    </div>
  );
}

export default Register;
