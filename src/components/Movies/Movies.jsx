import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import MoreButton from "../UIComponents/MoreButton/MoreButton.jsx";

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
