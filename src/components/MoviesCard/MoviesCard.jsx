import { useLocation } from "react-router-dom";

function MoviesCard({ movie, addMovie, deleteMovie, isLiked }) {
  const location = useLocation();

  const handleLikeClick = () =>
    !isLiked(movie) ? addMovie(movie) : deleteMovie(movie);

  const convertDuration = () => {
    const hours = Math.floor(movie.duration / 60);
    const minutes = movie.duration % 60;
    return `${hours}ч ${minutes}м`;
  };

  return (
    <li className="card">
      <h2 className="card__title">{movie.nameRU}</h2>
      <p className="card__subtitle">{convertDuration}</p>
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
      <img
        className="card__img"
        alt={movie.nameRU}
        src={movie.thumbnail}
      ></img>
    </li>
  );
}

export default MoviesCard;
