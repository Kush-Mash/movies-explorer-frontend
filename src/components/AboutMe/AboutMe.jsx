import React from "react";

function AboutMe() {
  return (
    <section className="me">
      <h2 className="title">Студент</h2>
      <div className="me__box">
        <h3 className="me__title">Мария</h3>
        <h3 className="me__subtitle">Фронтенд-разработчик, 32&nbsp;года</h3>
        <p className="me__description">
        Я&nbsp;живу в&nbsp;Санкт-Петербурге, закончила факультет информатики ЮУрГГПУ. Я&nbsp;замужем, и&nbsp;у&nbsp;нас двое сыновей. Люблю читать книжки детям и&nbsp;себе, а&nbsp;ещё долго гулять ногами по&nbsp;городу. Недавно решилась попробовать себя в&nbsp;веб-разработке и&nbsp;прошла курс по&nbsp;этому направлению.
        </p>
        <span className="me__github">Github</span>
      </div>
    </section>
  );
}

export default AboutMe;
