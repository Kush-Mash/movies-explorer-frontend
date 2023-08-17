import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { useForm } from "../../hooks/useForm.js";
import { useFormWithValidation } from "../../hooks/useFormWithValidation.js";

function Login({ handleLogin, errMess, clearErr }) {
  // const { values, setValues, handleChange } = useForm({ email: "", password: "" });

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation({ email: "", password: "" });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin(values);
  };

  return (
    <section className="entry">
      <Link to="/">
        <img className="each-button entry__logo" src={logo} alt="Логотип" />
      </Link>
      <h1 className="entry__title">Рады видеть!</h1>
      <form className="form entry__form" onSubmit={handleSubmit}>
        <label className="entry__label" htmlFor="email">
          E-mail
        </label>
        <input
          className="entry__input"
          name="email"
          type="email"
          placeholder="E-mail"
          value={values.email || ""}
          onChange={handleChange}
          onFocus={clearErr}
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          required
        />
        <span className="entry__error">{errors.email || ""}</span>
        <label className="entry__label" htmlFor="password">
          Пароль
        </label>
        <input
          className="entry__input"
          name="password"
          type="password"
          placeholder="Пароль"
          minLength="8"
          value={values.password || ""}
          onChange={handleChange}
          onFocus={clearErr}
          required
        />
        <span className="entry__error">{errors.password || ""}</span>
        <p className="entry__err-mess entry__err-mess_with_indent">{errMess.mess}</p>
        <button
          className="each-button entry__submit"
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
