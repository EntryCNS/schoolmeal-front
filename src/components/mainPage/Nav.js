import React from "react";
import "../../styles/mainNav.css";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="transe"></div>
      <ul>
        <li>
          <NavLink activeClassName="selected" to="/request">
            신청하기
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/">
            신청현황
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/">
            {" "}
            랭킹
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/">
            응원하기
          </NavLink>
        </li>
      </ul>
      <div className="mainPageTitle">
        <h1>급식</h1>
        <h2>의</h2>
        <h1>민족</h1>
      </div>
    </div>
  );
};

export default Nav;
