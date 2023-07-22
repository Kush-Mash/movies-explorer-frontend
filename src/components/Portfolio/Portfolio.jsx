import React from "react";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__items">
        <li className="portfolio__item">
          <a className="each-link portfolio__link" href="https://github.com/Kush-Mash/how-to-learn"><p className="portfolio__site">Статичный сайт</p><span className="portfolio__arrow">↗</span></a>

        </li>
        <li className="portfolio__item">
          <a className="each-link portfolio__link" href="https://github.com/Kush-Mash/russian-travel"><p className="portfolio__site">Адаптивный сайт</p><span className="portfolio__arrow">↗</span></a>

        </li>
        <li className="portfolio__item">
          <a className="each-link portfolio__link" href="https://github.com/Kush-Mash/react-mesto-api-full-gha"><p className="portfolio__site">Одностраничное приложение</p><span className="portfolio__arrow">↗</span></a>

        </li>
      </ul>
    </section>
  );
}

export default Portfolio;

