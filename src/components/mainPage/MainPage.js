import React, { useState,useEffect } from "react";
import Nav from "./Nav";
import SMeal from "./SMeal";
import Profile from "../Nav/profile";
import "../../styles/mainPage.css";

const MainPage = () => {
  
  const [MainUrl,setMainUrl]=useState("");
  useEffect(() => {
    setMainUrl(window.location.href)
  },[]);
  return (
    <body>
      <div className="transebox">
        <div className="bkImg"></div>
        <Nav MainUrl={MainUrl} />
        <Profile/>
        <SMeal />
      </div>
    </body>
  );
};

export default MainPage;
