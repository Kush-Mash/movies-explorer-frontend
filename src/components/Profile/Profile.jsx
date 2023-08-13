import { useContext, useState, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import { useForm } from "../../hooks/useForm.js";
import { useFormWithValidation } from "../../hooks/useFormWithValidation.js";

function Profile({ logOut, handleUpdate, errMess, setErrMess, isEditable, setIsEditable }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation({ email: "", password: "" });

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  const handleClickEditButton = (evt) => {
    evt.preventDefault();
    setIsEditable(true);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsEditable(false);
    handleUpdate(values);
  };

  return (
    <section className="profile">
      <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
      <form className="form profile__form" onSubmit={handleSubmit}>
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
            disabled={!isEditable}
            pattern="[а-яёА-ЯЁa-zA-Z \-]{1,}"
          />
        </label>
        <p className="profile__warning">{errors.name || ""}</p>
        <label className="profile__label">
          E-mail
          <input
            className="profile__input"
            name="email"
            type="email"
            placeholder="Почта"
            onChange={handleChange}
            value={values.email || ""}
            disabled={!isEditable}
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          />
        </label>
        <p className="profile__warning">{errors.email || ""}</p>
        {!isEditable ? (
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
            <p className="profile__error">{errMess.mess}</p>
            <button
              className={`each-button profile__submit ${
                !isValid ||
                (values.name === currentUser.name &&
                  values.email === currentUser.email)
                  ? "profile__submit_inactive"
                  : "profile__submit_active"
              }`}
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
