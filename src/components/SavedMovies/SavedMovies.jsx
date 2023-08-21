import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";

function SavedMovies({
  movies,
  addMovie,
  deleteMovie,
  isLiked,
  isShort,
  handleChange,
  filter,
  search,
  searchTearm,
  searchedMovies
}) {
  return (
    <main>
      <SearchForm
        movies={movies}
        search={search}
        handleChange={handleChange}
        filter={filter}
        searchTearm={searchTearm}
        isShort={isShort}
      />
      {/* <p className="message">
        {movies.length === 0 && "Список сохранённых фильмов пуст"}
      </p> */}
      <p className="message">
        {(movies.length === 0 &&
        "Список сохранённых фильмов пуст") ||
        (searchedMovies.length === 0 &&
        movies.length > 0 &&
        "Ничего не найдено")}
      </p>
      <MoviesCardList
        more={"cards__list_place_saved"}
        movies={movies}
        addMovie={addMovie}
        deleteMovie={deleteMovie}
        isLiked={isLiked}
        searchedMovies={searchedMovies}
      />
    </main>
  );
}

export default SavedMovies;
