function Profile() {
  return (
    <div className="profile">
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
        <button className="profile__submit" type="submit">Редактировать</button>
      </form>
      <button className="profile__logout" type="button">Выйти из&nbsp;аккаунта</button>
    </div>
  );
}

export default Profile;
