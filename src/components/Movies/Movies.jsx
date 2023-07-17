import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import MoviesCard from "../MoviesCard/MoviesCard.jsx";

function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList>
        <MoviesCard />
      </MoviesCardList>
    </>
  );
}

export default Movies;
