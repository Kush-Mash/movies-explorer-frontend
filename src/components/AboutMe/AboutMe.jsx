import React from "react";
import myPhoto from "../../images/my-photo.JPG"
import Portfolio from "../Portfolio/Portfolio.jsx";

function AboutMe() {
  return (
    <section className="section-container me" id="me">
      <h2 className="section-title">Студент</h2>
      <div className="line me__box">
        <img className="me__photo" alt="Портрет студента" src={myPhoto}/>
        <h3 className="me__title">Мария</h3>
        <h3 className="me__subtitle">Фронтенд-разработчик, 32&nbsp;года</h3>
        <p className="section-description me__description">
        Я&nbsp;живу в&nbsp;Санкт-Петербурге, закончила факультет информатики ЮУрГГПУ. Я&nbsp;замужем, и&nbsp;у&nbsp;нас двое сыновей. Люблю читать книжки детям и&nbsp;себе, а&nbsp;ещё долго гулять ногами по&nbsp;городу. Недавно решилась попробовать себя в&nbsp;веб-разработке и&nbsp;прошла учебный курс по&nbsp;этому направлению.
        </p>
        <a className="each-link me__github" href="https://github.com/Kush-Mash" target="blank">Github</a>
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
