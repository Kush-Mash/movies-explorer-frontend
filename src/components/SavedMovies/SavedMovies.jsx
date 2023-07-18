import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";

function SavedMovies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList more={"cards__list_place_saved"} />
    </>
  );
}

export default SavedMovies;
