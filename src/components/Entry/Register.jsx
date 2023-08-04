import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Register({ formValue, handleChange, handleSubmit }) {
  return (
    <section className="entry">
      <Link to="/"><img className="each-button entry__logo" src={logo} alt="Логотип" /></Link>
      <h1 className="entry__title">Добро пожаловать!</h1>
      <form className="entry__form" onSubmit={handleSubmit}>
        <label className="entry__label" htmlFor="name">Имя</label>
        <input className="entry__input" name="name" type="text" placeholder="Имя" minLength="2" maxLength="30" value={formValue.name} onChange={handleChange} required />
        <span className="entry__error">Что-то пошло не так...</span>
        <label className="entry__label" htmlFor="email">E-mail</label>
        <input className="entry__input" name="email" type="email" placeholder="E-mail" value={formValue.email} onChange={handleChange} required />
        <span className="entry__error">Что-то пошло не так...</span>
        <label className="entry__label" htmlFor="password">Пароль</label>
        <input className="entry__input" name="password" type="password" placeholder="Пароль" minLength="8" value={formValue.password} onChange={handleChange} required />
        <span className="entry__error">Что-то пошло не так...</span>
        <button className="each-button entry__submit" type="submit">Зарегистрироваться</button>
        <p className="entry__question">Уже зарегистрированы?<Link to="/signin" className="each-link entry__link"> Войти</Link></p>
      </form>
    </section>
  );
}

export default Register;
