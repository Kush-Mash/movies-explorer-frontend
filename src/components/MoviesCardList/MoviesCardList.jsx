import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ more, moviesArray, addMovie, deleteMovie, isLiked }) {
  return (
    <section className="cards">

      <ul className={`cards__list ${more}`}>
        {
          moviesArray.map((movie) => (
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
