import React from "react";
import "../../../styles/ReqCom.css";

const ReqCom = ({ index }) => {
  return (
    <div className="menuList">
      <h1>{index.title}</h1>
      <p>{index.description}</p>
      <p>{index.like}</p>
    </div>
  );
};

export default ReqCom;
