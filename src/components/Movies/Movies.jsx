import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import MoreButton from "../UIComponents/MoreButton/MoreButton.jsx";

function Movies({
  allMovies,
  addMovie,
  deleteMovie,
  isLiked,
  isShort,
  handleChange,
  filter,
  search,
  searchTearm
}) {
  return (
    <main>
      <SearchForm
        movies={allMovies}
        search={search}
        handleChange={handleChange}
        filter={filter}
        searchTearm={searchTearm}
        isShort={isShort}
      />
      <p className="message">
        {((allMovies.length === 0) && 'Нужно ввести ключевое слово')}
      </p>
      <MoviesCardList
        more={""}
        moviesArray={allMovies}
        addMovie={addMovie}
        deleteMovie={deleteMovie}
        isLiked={isLiked}
      />
      <MoreButton />
    </main>
  );
}

export default Movies;
