import FilterCheckbox from "../UIComponents/FilterCheckbox/FilterCheckbox.jsx";

function SearchForm({
  movies,
  search,
  searchTerm,
  setSearchTerm,
  isShort,
  setIsShort
}) {
  const handleChange = (evt) => {
    setSearchTerm(evt.target.value);
  };

  const handleSearch = (evt) => {
    evt.preventDefault();
    search(movies);
  };

  const handleFilter = () => {
    setIsShort(!isShort);
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
              value={searchTerm}
              onChange={handleChange}
            />
            <button
              className="each-button search__submit"
              type="submit"
              // disabled={searchTerm.length === 0}
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
