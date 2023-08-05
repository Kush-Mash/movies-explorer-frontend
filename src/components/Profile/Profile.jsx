import { useState } from "react";
import { Link } from "react-router-dom";

function Profile({ logout }) {
  const [initChange, setInitChange] = useState(false);

  function handleClickEditButton(event) {
    event.preventDefault();
    setInitChange(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setInitChange(false);
  }

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form">
        <label className="profile__label">
          Имя
          <input className="profile__input" type="text" placeholder="Ваше имя" />
        </label>
        <label className="profile__label">
          E-mail
          <input className="profile__input" type="email" placeholder="Почта" />
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
              onClick={logout}
            >
              Выйти из&nbsp;аккаунта
            </button>
          </>
        ) : (
          <>
            <p className="profile__error">При обновлении профиля произошла ошибка.</p>
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
