import pic from "../../images/pic__COLOR_pic.png"

function MoviesCard() {
  return (
    <li className="card">
      <h2 className="card__title">33&nbsp;слова о&nbsp;дизайне</h2>
      <p className="card__subtitle">1ч&nbsp;42м</p>
      <button className="card__like" type="button" aria-label='Добавить в избранное'></button>
      <img className="card__img" alt="Здесь будет фильм" src={pic}></img>
    </li>
  );
}

export default MoviesCard;
