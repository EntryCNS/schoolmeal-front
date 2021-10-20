import React from "react";
import Nav from "../../mainPage/Nav"
import SCheer from "./SCheer"

const Cheer = ()=>{
    return(
        <body>
        <div className="transebox">
          <div className="bkImg"></div>
          <Nav />
          <SCheer/>
        </div>
      </body>
    );
};

export default Cheer;