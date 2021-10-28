import React, { useState } from "react";
import Nav from "./Nav";
import SMeal from "./SMeal";
import "../../styles/mainPage.css";

const MainPage = () => {
  // const mainCheck
  return (
    <body>
      <div className="transebox">
        <div className="bkImg"></div>
        <Nav mainCheck />
        <SMeal />
      </div>
    </body>
  );
};

export default MainPage;
