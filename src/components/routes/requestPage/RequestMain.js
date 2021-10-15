import React from "react";
import Nav from "../../mainPage/Nav";
import RMeal from "./RMeal";

const RequestMain = () => {
  return (
    <body>
      <div className="transebox">
        <div className="bkImg"></div>
        <Nav />
        <RMeal />
      </div>
    </body>
  );
};

export default RequestMain;
