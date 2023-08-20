import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ more, movies, addMovie, deleteMovie, isLiked, searchedMovies }) {
  return (
    <section className="cards">

      <ul className={`cards__list ${more}`}>
        {
          searchedMovies.map((movie) => (
            <MoviesCard
              movie={movie}
              key={movie.movieId}
              addMovie={addMovie}
              deleteMovie={deleteMovie}
              isLiked={isLiked}
            />
          ))
        }
      </ul>
    </section>
  );
}

export default MoviesCardList;
