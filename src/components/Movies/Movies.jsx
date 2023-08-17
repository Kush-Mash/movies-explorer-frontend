import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import MoreButton from "../UIComponents/MoreButton/MoreButton.jsx";

function Movies({ allMovies }) {
  return (
    <>
      <SearchForm
        allMovies={allMovies}
      />
      <MoviesCardList
        more={""}
        allMovies={allMovies}
      />
      <MoreButton />
    </>
  );
}

export default Movies;
