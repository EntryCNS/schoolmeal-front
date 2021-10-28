import React from "react";

const EvalWrite = () => {
  return (
    <div
      style={{
        width: "500px",
        height: "350px",
        borderRadius: "10px",
        backgroundColor: "rgba(255,255,255,0.3)",
        padding: "25px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <input
        type="text"
        placeholder="title"
        style={{
          height: "50px",
          padding: "10px",
          outline: "none",
          background: "none",
          border: "none",
          fontSize: "25px",
          borderBottom: "1px solid white",
          color: "white",
        }}
      />
      <textarea
        placeholder="description"
        style={{
          height: "300px",
          padding: "10px",
          outline: "none",
          background: "none",
          border: "none",
          color: "white",
          fontSize: "20px",
        }}
      />
    </div>
  );
};

export default EvalWrite;
