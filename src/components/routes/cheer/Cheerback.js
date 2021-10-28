import React from "react";
import Postit from "./Postit";

const Cheerback = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "75vh",
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        paddingTop: "30px",
      }}
    >
      <div style={{ width: "70%" }}>
        <Postit />
      </div>
    </div>
  );
};

export default Cheerback;
