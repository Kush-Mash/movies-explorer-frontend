import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import MoreButton from "../UIComponents/MoreButton/MoreButton.jsx";

function Movies({
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
        {movies.length === 0 && "Нужно ввести ключевое слово"}
      </p> */}
      <p className="message">
        {(searchedMovies.length === 0 &&
          movies.length === 0 &&
          "Нужно ввести ключевое слово") ||
          (searchedMovies.length === 0 &&
          movies.length > 0 &&
          "Ничего не найдено")}
      </p>
      <MoviesCardList
        more={""}
        moviesArray={movies}
        addMovie={addMovie}
        deleteMovie={deleteMovie}
        isLiked={isLiked}
        searchedMovies={searchedMovies}
      />
      <MoreButton />
    </main>
  );
}

export default Movies;
