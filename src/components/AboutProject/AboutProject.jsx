import React from "react";

function AboutPrject() {
  return (
    <section className="about-project">
      <h2 className="title">О&nbsp;проекте</h2>
      <div className="about-project__box">
        <div className="about-project__column">
          <h3 className="about-project__subtitle">
          Дипломный проект включал 5&nbsp;этапов
          </h3>
          <p className="about-project__description">
          Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.
          </p>
        </div>
        <div className="about-project__column">
          <h3 className="about-project__subtitle">
          На&nbsp;выполнение диплома ушло 5&nbsp;недель
          </h3>
          <p className="about-project__description">
          У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__duration">
        <p className="about-project__timeline about-project__timeline_color_black">1&nbsp;неделя</p>
        <p className="about-project__timeline about-project__timeline_color_grey">4&nbsp;недели</p>
        <p className="about-project__part">Back-end</p>
        <p className="about-project__part">Front-end</p>
      </div>
    </section>
  );
}

export default AboutPrject;
