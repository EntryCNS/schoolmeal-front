import React from "react";
import Nav from "../../mainPage/Nav";
import SMeal from "../../mainPage/SMeal";
import Cheerback from "./Cheerback";

const CheerPage = () => {
  return (
    <div>
      <div className="transebox">
        <div className="bkImg"></div>
        <Nav />
        <Cheerback />
      </div>
    </div>
  );
};

export default CheerPage;
