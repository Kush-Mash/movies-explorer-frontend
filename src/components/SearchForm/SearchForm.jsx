import FilterCheckbox from "../UIComponents/FilterCheckbox/FilterCheckbox.jsx";

function SearchForm({ allMovies, search, handleChange, filter, searchTearm, isShort }) {
  const handleChangeFilter = (evt) => {
    filter(evt);
    search(allMovies);
  };
  const handleChangeSearch = (evt) => {
    handleChange(evt);
  };
  const handleSearch = (evt) => {
    evt.preventDefault();
    search(allMovies);
  };
  return (
    <section className="search">
      <div className="search__box">
        <form className="search__form" name="search" onSubmit={handleSearch}>
          <div className="search__unit">
            <input
              className="search__input"
              type="text"
              placeholder="Фильм"
              value={searchTearm}
              onChange={handleChangeSearch}
            />
            <button className="each-button search__submit" type="submit"></button>
          </div>
          <label className="search__filter" htmlFor="checkbox">
            <FilterCheckbox  handleChange={handleChangeFilter} isShort={isShort} />
            <span className="search__condition">Короткометражки</span>
          </label>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
