import React from "react";

const EvalNav = ({ state, setState }) => {
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
      <div style={{ fontSize: "30px", color: "#ccc" }}>
        {state === 1 ? (
          <div>
            <p style={{ color: "white", fontSize: "40px" }}>아침</p>
            <p onClick={() => setState(2)}>점심</p>
            <p onClick={() => setState(3)}>저녁</p>
          </div>
        ) : state === 2 ? (
          <div>
            <p onClick={() => setState(1)}>아침</p>
            <p style={{ color: "white", fontSize: "40px" }}>점심</p>
            <p onClick={() => setState(3)}>저녁</p>
          </div>
        ) : (
          <div>
            <p onClick={() => setState(1)}>아침</p>
            <p onClick={() => setState(2)}>점심</p>
            <p style={{ color: "white", fontSize: "40px" }}>저녁</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EvalNav;
