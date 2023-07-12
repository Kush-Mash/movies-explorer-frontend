import React from "react";
import Promo from "../Promo/Promo.jsx";
import NavTab from "../NavTab/NavTab.jsx";
import AboutPrject from "../AboutProject/AboutProject.jsx";
import Techs from "../Techs/Techs.jsx";

function Main() {
  return (
    <main className="content">
      <Promo />
      <NavTab />
      <AboutPrject />
      <Techs />
    </main>
  );
}

export default Main;
