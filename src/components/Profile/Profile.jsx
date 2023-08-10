import { useContext, useState, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import { useForm } from "../../hooks/useForm.js";

function Profile({ loggedIn, logOut, handleUpdate, formValue }) {
  const currentUser = useContext(CurrentUserContext);
  const [initChange, setInitChange] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { values, setValues, handleChange } = useForm();

  // Следим за актуальностью данных текущего юзера
  useEffect(() => {
    // setName(currentUser.name);
    // setEmail(currentUser.email);
    setValues(currentUser);
  }, [currentUser, setValues]);

  function handleClickEditButton(event) {
    event.preventDefault();
    setInitChange(true);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setInitChange(false);
    handleUpdate(name, email);
  }

  return (
    <section className="profile">
      <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
      <form className="form profile__form">
        <label className="profile__label">
          Имя
          <input
            className="profile__input"
            name="name"
            type="text"
            minLength="2"
            maxLength="30"
            placeholder="Ваше имя"
            onChange={handleChange}
            value={values.name || ""}
          />
        </label>
        <label className="profile__label">
          E-mail
          <input
            className="profile__input"
            name="email"
            type="email"
            placeholder="Почта"
            onChange={handleChange}
            value={values.email || ""}
          />
        </label>
        {!initChange ? (
          <>
            <button
              className="each-button profile__button"
              type="button"
              onClick={handleClickEditButton}
            >
              Редактировать
            </button>
            <button
              className="each-button profile__logout"
              type="button"
              onClick={logOut}
            >
              Выйти из&nbsp;аккаунта
            </button>
          </>
        ) : (
          <>
            <p className="profile__error">
              При обновлении профиля произошла ошибка.
            </p>
            <button
              className="each-button profile__submit profile__submit_inactive"
              type="submit"
              onClick={handleSubmit}
            >
              Сохранить
            </button>
          </>
        )}
      </form>
    </section>
  );
}

export default Profile;
