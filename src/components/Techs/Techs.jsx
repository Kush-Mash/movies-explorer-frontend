import React from "react";

function Techs() {
  return (
    <section className="section-container techs" id="techs">
      <h2 className="section-title">Технологии</h2>
      <div className="techs__box line">
        <h3 className="techs__title">7&nbsp;технологий</h3>
        <p className="section-description techs__description">
          На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые
          применили в&nbsp;дипломном проекте.
        </p>
        <ul className="techs__items">
          <li className="techs__item">HTML</li>
          <li className="techs__item">CSS</li>
          <li className="techs__item">JS</li>
          <li className="techs__item">React</li>
          <li className="techs__item">Git</li>
          <li className="techs__item">Express.js</li>
          <li className="techs__item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
