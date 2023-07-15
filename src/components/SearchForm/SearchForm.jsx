function SearchForm() {
  return (
    <section className="search">
      <div className="search__box">
        <form className="search__form">
          <input
            className="search__input"
            type="text"
            placeholder="Фильм"
          />
          <button className="search__submit" type="submit"></button>
          <div className="search__filter">
            <div className="toggle">
              <input className="toggle__input" type="checkbox" name="isShortFilm" />
            </div>
            <label className="search__label">Короткометражки</label>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
