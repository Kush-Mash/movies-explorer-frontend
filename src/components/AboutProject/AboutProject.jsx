import React from "react";

function AboutPrject() {
  return (
    <section className="project" id="project">
      <h2 className="title">О&nbsp;проекте</h2>
      <div className="project__box">
        <div className="project__column">
          <h3 className="project__subtitle">
          Дипломный проект включал 5&nbsp;этапов
          </h3>
          <p className="project__description">
          Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.
          </p>
        </div>
        <div className="project__column">
          <h3 className="project__subtitle">
          На&nbsp;выполнение диплома ушло 5&nbsp;недель
          </h3>
          <p className="project__description">
          У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="project__duration">
        <p className="project__timeline project__timeline_color_black">1&nbsp;неделя</p>
        <p className="project__timeline project__timeline_color_grey">4&nbsp;недели</p>
        <p className="project__part">Back-end</p>
        <p className="project__part">Front-end</p>
      </div>
    </section>
  );
}

export default AboutPrject;
