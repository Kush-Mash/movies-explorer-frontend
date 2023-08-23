import FilterCheckbox from "../UIComponents/FilterCheckbox/FilterCheckbox.jsx";

function SearchForm({
  movies,
  search,
  handleChange,
  filter,
  searchTearm,
  isShort,
}) {
  const handleChangeSearchTerm = (evt) => {
    handleChange(evt);
  };

  const handleSearch = (evt) => {
    evt.preventDefault();
    search(movies);
  };

  const handleFilter = (evt) => {
    filter(evt);
    search(movies);
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
              onChange={handleChangeSearchTerm}
            />
            <button
              className="each-button search__submit"
              type="submit"
              // disabled={searchTearm.length === 0}
            />
          </div>
          <label className="search__filter" htmlFor="checkbox">
            <FilterCheckbox handleFilter={handleFilter} isShort={isShort} />
            <span className="search__condition">Короткометражки</span>
          </label>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
