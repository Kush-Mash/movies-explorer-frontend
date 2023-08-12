import { useContext, useState, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import { useForm } from "../../hooks/useForm.js";
import { useFormWithValidation } from "../../hooks/useFormWithValidation.js";

function Profile({ logOut, handleUpdate }) {
  const currentUser = useContext(CurrentUserContext);
  const [isEditable, setIsEditable] = useState(false);

  // const { values, setValues, handleChange } = useForm({
  //   name: currentUser.name,
  //   email: currentUser.email
  // });

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation({
      name: currentUser.name,
      email: currentUser.email,
    });

  // // Следим за актуальностью данных текущего юзера
  // useEffect(() => {
  //   setValues(currentUser);
  // }, [currentUser, setValues]);

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
            // pattern="[а-яА-Яa-zA-Z -]{1,}"
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
            // pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
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
            <p className="profile__error">Произошла ошибка.</p>
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
