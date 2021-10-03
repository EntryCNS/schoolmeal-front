import React from "react";
import Nav from "./Nav";
import SMeal from "./SMeal";
import "../../styles/mainPage.css"

const MainPage = () => {
  return (
    <body>
    <div className="transebox">
      <div className="bkImg"></div>
      <Nav />
      <SMeal />
    </div>
    </body>
  );
};

export default MainPage;
