import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { useForm } from "../../hooks/useForm.js";

function Login({ formValue, handleLogin }) {
  const { values, setValues, handleChange } = useForm({ email: "", password: "" });

  const HandleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin(values);
  };

  return (
    <section className="entry">
      <Link to="/">
        <img className="each-button entry__logo" src={logo} alt="Логотип" />
      </Link>
      <h1 className="entry__title">Рады видеть!</h1>
      <form className="form entry__form" onSubmit={HandleSubmit}>
        <label className="entry__label" htmlFor="email">E-mail</label>
        <input
          className="entry__input"
          name="email"
          type="email"
          placeholder="E-mail"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
        <span className="entry__error">Что-то пошло не&nbsp;так...</span>
        <label className="entry__label" htmlFor="password">Пароль</label>
        <input
          className="entry__input"
          name="password"
          type="password"
          placeholder="Пароль"
          value={values.password || ""}
          onChange={handleChange}
          required
        />
        <span className="entry__error">Что-то пошло не&nbsp;так...</span>
        <button
          className="each-button entry__submit entry__submit_with_indent"
          type="submit"
        >
          Войти
        </button>
        <p className="entry__question">
          Ещё не&nbsp;зарегистрированы?
          <Link to="/signup" className="each-link entry__link"> Регистрация</Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
