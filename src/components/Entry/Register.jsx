import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { useFormWithValidation } from "../../hooks/useFormWithValidation.js";

function Register({ handleRegister, errMess, clearErr }) {
  const { values, handleChange, errors } =
    useFormWithValidation({ email: "", password: "" });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister(values);
  };

  return (
    <section className="entry">
      <Link to="/">
        <img className="each-button entry__logo" src={logo} alt="Логотип" />
      </Link>
      <h1 className="entry__title">Добро пожаловать!</h1>
      <form className="form entry__form" onSubmit={handleSubmit}>
        <label className="entry__label" htmlFor="name">
          Имя
        </label>
        <input
          className="entry__input"
          name="name"
          type="text"
          placeholder="Имя"
          minLength="2"
          maxLength="30"
          value={values.name || ""}
          onChange={handleChange}
          onFocus={clearErr}
          pattern="[а-яёА-ЯЁa-zA-Z \-]{1,}"
          required
        />
        <span className="entry__error">{errors.name || ""}</span>
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
        <p className="entry__err-mess">{errMess.mess}</p>
        <button className="each-button entry__submit" type="submit">
          Зарегистрироваться
        </button>
        <p className="entry__question">
          Уже зарегистрированы?
          <Link to="/signin" className="each-link entry__link">
            {" "}
            Войти
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Register;
