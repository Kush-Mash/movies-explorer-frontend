import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";

function SavedMovies({
  addedMovies,
  addMovie,
  deleteMovie,
  isLiked,
  isShort,
  handleChange,
  filter,
  search,
  searchTearm,
}) {
  return (
    <main>
      <SearchForm
        movies={addedMovies}
        search={search}
        handleChange={handleChange}
        filter={filter}
        searchTearm={searchTearm}
        isShort={isShort}
      />
      <p className="message">
        {addedMovies.length === 0 && "Список сохранённых фильмов пуст"}
      </p>
      <MoviesCardList
        more={"cards__list_place_saved"}
        moviesArray={addedMovies}
        addMovie={addMovie}
        deleteMovie={deleteMovie}
        isLiked={isLiked}
      />
    </main>
  );
}

export default SavedMovies;
