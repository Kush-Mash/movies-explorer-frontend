import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import MoreButton from "../UIComponents/MoreButton/MoreButton.jsx";

function Movies({ allMovies, addMovie, deleteMovie, isLiked }) {
  return (
    <>
      <SearchForm
        allMovies={allMovies}
      />
      <MoviesCardList
        more={""}
        moviesArray={allMovies}
        addMovie={addMovie}
        deleteMovie={deleteMovie}
        isLiked={isLiked}
      />
      <MoreButton />
    </>
  );
}

export default Movies;
