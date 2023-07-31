import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({more}) {
  return (
    <section className="cards">
      <ul className={`cards__list ${more}`}>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
    </section>
  );
}

export default MoviesCardList;
