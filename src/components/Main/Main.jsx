import React from "react";
import Promo from "../Promo/Promo.jsx";
import NavTab from "../NavTab/NavTab.jsx";
import AboutPrject from "../AboutProject/AboutProject.jsx";

function Main() {
  return (
    <main className="content">
      <Promo />
      <NavTab />
      <AboutPrject />
    </main>
  );
}

export default Main;
