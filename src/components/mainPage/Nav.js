import React from "react";
import "../../styles/mainNav.css";

const Nav = () => {
  return (
    <div className="Frag">
      <div className="MainFrame">
        <h3 className="Title">우리가 어떤 민족입니까</h3>
        <hr />
        <div className="MainNav">
          <p className="navB">로그아웃</p>
          <h1 className="LogoTitle">급식의 민족</h1>
          <nav className="navB">
            <ul>
              <li>급식 신청보기</li>
              <li>신청현황 보기</li>
              <li>응원하기</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
