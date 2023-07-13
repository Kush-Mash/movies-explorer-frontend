import React from "react";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__items">
        <li className="portfolio__item">
          <p className="portfolio__link">Статичный сайт</p>
          <span>↗</span>
        </li>
        <li className="portfolio__item">
          <p className="portfolio__link">Адаптивный сайт</p>
          <span>↗</span>
        </li>
        <li className="portfolio__item">
          <p className="portfolio__link">Одностраничное приложение</p>
          <span>↗</span>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
