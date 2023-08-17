import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";

function SavedMovies({ addedMovies, addMovie, deleteMovie, isLiked }) {
  return (
    <>
      <SearchForm />
      <MoviesCardList
        more={"cards__list_place_saved"}
        moviesArray={addedMovies}
        addMovie={addMovie}
        deleteMovie={deleteMovie}
        isLiked={isLiked}
      />
    </>
  );
}

export default SavedMovies;
