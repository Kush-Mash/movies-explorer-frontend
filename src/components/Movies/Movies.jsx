import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import MoreButton from "../UIComponents/MoreButton/MoreButton.jsx";
import { useWindowSize } from "../../hooks/useWindowSize.js";
import * as amounts from "../../utils/constants.js"
import { useEffect, useState } from "react";

function Movies({
  movies,
  addMovie,
  deleteMovie,
  isLiked,
  isShort,
  setIsShort,
  search,
  searchTerm,
  setSearchTerm,
  searchedMovies
}) {
  const windowSize = useWindowSize();
  const [initialCards, setInitialCards] = useState({});
  const [moreCards, setMoreCards] = useState({});
  const [moviesPart, setMoviesPart] = useState([]);

  useEffect(() => {
    if (windowSize >= amounts.maxWidth) {
      setInitialCards(amounts.desktopCards);
      setMoreCards(amounts.desktopCardsMore);
    }
    if (windowSize < amounts.maxWidth && windowSize > amounts.minWidth) {
      setInitialCards(amounts.padCards);
      setMoreCards(amounts.padCardsMore);
    }
    if (windowSize <= amounts.minWidth) {
      setInitialCards(amounts.mobileCards);
      setMoreCards(amounts.mobileCardsMore);
    }
  }, [windowSize]);

  useEffect(() => {
    setMoviesPart(searchedMovies.slice(0, initialCards));
  }, [searchedMovies, initialCards]);

  const handleMoreButtonClick = () => {
    setInitialCards(initialCards + moreCards);
 }

  return (
    <main>
      <SearchForm
        movies={movies}
        search={search}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isShort={isShort}
        setIsShort={setIsShort}
      />
      <p className="message">
        {(((searchedMovies.length < 1 &&
          movies.length < 1) || searchTerm.length < 1) &&
          "Нужно ввести ключевое слово") ||
          (searchedMovies.length < 1 &&
          movies.length > 0 &&
          "Ничего не найдено")}
      </p>
      <MoviesCardList
        more={""}
        moviesArray={movies}
        addMovie={addMovie}
        deleteMovie={deleteMovie}
        isLiked={isLiked}
        searchedMovies={moviesPart}
      />
      {(initialCards < searchedMovies.length)
      && <MoreButton handleClick={handleMoreButtonClick} />}
    </main>
  );
}

export default Movies;
