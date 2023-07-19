import React from "react";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__items">
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/Kush-Mash/how-to-learn">Статичный сайт</a>
          <span>↗</span>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/Kush-Mash/russian-travel">Адаптивный сайт</a>
          <span>↗</span>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/Kush-Mash/react-mesto-api-full-gha">Одностраничное приложение</a>
          <span>↗</span>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;

