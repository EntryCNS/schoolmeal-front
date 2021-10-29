import React, { useEffect, useState } from "react";
import "../../styles/mainNav.css";
import { Link, NavLink } from "react-router-dom";

const Nav = ({ MainUrl }) => {
  const [CurrentUrl, setCurrentUrl] = useState("")
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, [])
  return (

    <div >
      <div className="transe" />
      {CurrentUrl != MainUrl ? (
        <div className="nav">
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
            <NavLink activeClassName="selected" to="/cheer">
              응원하기
            </NavLink>
          </li>
        </ul>
         <NavLink to="/">
         <div className="mainPageTitle">
           <h1>급식</h1>
           <h2>의</h2>
           <h1>민족</h1>
         </div>
       </NavLink>
       </div>
      ) : (
      <NavLink to="/">
        <div className="mainPageTitle" id="mainPageTitle">
          <h1>급식</h1>
          <h2>의</h2>
          <h1>민족</h1>
        </div>
      </NavLink>
      )}
      
    </div>
  );
};

export default Nav;
