import FilterCheckbox from "../UIComponents/FilterCheckbox/FilterCheckbox.jsx";

function SearchForm() {
  return (
    <section className="search">
      <div className="search__box">
        <form className="search__form">
          <div className="search__unit">
            <input
              className="search__input"
              type="text"
              placeholder="Фильм"
            />
            <button className="each-button search__submit" type="submit"></button>
          </div>
          <label className="search__filter" htmlFor="checkbox">
            <FilterCheckbox />
            <span className="search__condition">Короткометражки</span>
          </label>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
