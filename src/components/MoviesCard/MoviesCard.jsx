import { useLocation } from "react-router-dom";

function MoviesCard({ movie, addMovie, deleteMovie, isLiked }) {
  const location = useLocation();

  const handleLikeClick = () =>
    !isLiked(movie) ? addMovie(movie) : deleteMovie(movie);

  const convertDuration = (`
  ${Math.floor(movie.duration / 60)}ч
  ${movie.duration % 60}м`);

  return (
    <li className="card">
      <h2 className="card__title">{movie.nameRU}</h2>
      <p className="card__subtitle">{convertDuration}</p>
      {location.pathname === "/saved-movies" ? (
        <button
          className="each-button card__like card__like_status_delete"
          type="button"
          aria-label="Удалить из избранного"
          onClick={handleLikeClick}
        ></button>
      ) : (
        <button
          className={`each-button card__like ${
            isLiked(movie) ? "card__like_status_active" : "card__like_status_inactive"
          }`}
          type="button"
          aria-label="Добавить в избранное"
          onClick={handleLikeClick}
        ></button>
      )}
      <img
        className="card__img"
        alt={movie.nameRU}
        src={movie.thumbnail}
      ></img>
    </li>
  );
}

export default MoviesCard;
