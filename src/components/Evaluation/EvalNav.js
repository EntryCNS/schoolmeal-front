import React from "react";

const EvalNav = ({ state }) => {
  return (
    <div
      style={{
        width: "80%",
        display: "flex",
        height: "30%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <hr
          style={{ width: "450px", height: "3px", backgroundColor: "white" }}
        />
        <h1 style={{ color: "white", fontSize: "70px", marginTop: "25px" }}>
          급식의 민족
        </h1>
        <p style={{ color: "white", fontSize: "35px", marginTop: "5px" }}>
          오늘의 급식 리뷰
        </p>
      </div>
      <div style={{ fontSize: "40px", color: "white" }}>
        {state === 1 ? "아침" : state === 2 ? "점심" : "저녁"}
      </div>
    </div>
  );
};

export default EvalNav;
