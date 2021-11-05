import React from "react";

const EvalWrite = ({ m, setM }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        borderRadius: "10px",
        backgroundColor: "rgba(255,255,255,0.3)",
        padding: "25px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <textarea
        placeholder="description"
        value={m}
        onChange={(e) => {
          setM(e.target.value);
        }}
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
