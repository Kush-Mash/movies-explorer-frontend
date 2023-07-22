import { useLocation } from "react-router-dom";
import { useState } from "react";
import pic from "../../images/pic__COLOR_pic.png";

function MoviesCard() {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(false);

  function handleLikeClick() {
    setIsLiked(!isLiked);
  }

  return (
    <li className="card">
      <h2 className="card__title">33&nbsp;слова о&nbsp;дизайне</h2>
      <p className="card__subtitle">1ч&nbsp;42м</p>
      {location.pathname === "/saved-movies" ? (
        <button
          className="each-button card__like card__like_status_delete"
          type="button"
          aria-label="Удалить из избранного"
        ></button>
      ) : (
        <button
          className={`each-button card__like ${
            isLiked ? "card__like_status_active" : "card__like_status_inactive"
          }`}
          type="button"
          aria-label="Добавить в избранное"
          onClick={handleLikeClick}
        ></button>
      )}
      <img className="card__img" alt="Превью фильма" src={pic}></img>
    </li>
  );
}

export default MoviesCard;
