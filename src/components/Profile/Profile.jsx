import { Link } from "react-router-dom";

function Profile() {
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form">
        <div className="profile__cell">
          <label className="profile__label" htmlFor="name">Имя</label>
          <input className="profile__input" name="name" type="text" placeholder="Имя" required />
        </div>
        <p className="profile__error">Что-то пошло не так...</p>
        <div className="profile__cell">
          <label className="profile__label" htmlFor="email">E-mail</label>
          <input className="profile__input" name="email" type="email" placeholder="E-mail" required />
        </div>
        <p className="profile__error">Что-то пошло не так...</p>
        <button className="each-button profile__submit" type="submit">Редактировать</button>
      </form>
      <Link to="/signin"><button className="each-button profile__logout" type="button">Выйти из&nbsp;аккаунта</button></Link>
    </section>
  );
}

export default Profile;
