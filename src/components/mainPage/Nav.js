import React from "react";
import "../../styles/mainNav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li><Link to="#">신청하기</Link></li>
        <li><Link to="/">신청현황</Link></li>
        <li><Link to="/"> 랭킹</Link></li>
        <li><Link to="/">응원하기</Link></li>
      </ul>
    </div>
  );
};

export default Nav;
