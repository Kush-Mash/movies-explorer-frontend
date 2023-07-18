import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import MoreButton from "../MoreButton/MoreButton.jsx";

function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList more={""} />
      <MoreButton />
    </>
  );
}

export default Movies;