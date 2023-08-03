import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({more, allMovies}) {
  return (
    <section className="cards">
      <ul className={`cards__list ${more}`}>
        <MoviesCard />
        <MoviesCard />
        {/* {
          allMovies.map((movie) => (
            <MoviesCard
              movie={movie}
            />
          ))
        } */}
      </ul>
    </section>
  );
}

export default MoviesCardList;
