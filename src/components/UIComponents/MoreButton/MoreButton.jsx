function MoreButton({ handleClick }) {
  return (
      <button
        className="each-button more"
        type="button"
        aria-label="Отображать больше фильмов на странице"
        onClick={handleClick}
      >
        Ешё
      </button>
  );
}

export default MoreButton;
