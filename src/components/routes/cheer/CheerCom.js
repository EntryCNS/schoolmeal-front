import React from "react";
import axios from "axios";

const CheerCom = ({index}) => {
    
  return (
    <div style={{ width: "220px", height: "220px", background: "#ccc" }}>
      <div
        style={{
          width: "220px",
          height: "220px",
          background: "#FFE971",
          borderRadius: "0 0 35px 0",
          padding: "20px",
        }}
      >
        {/* <h1>{index.author.name}</h1> */}
        {/* <p>{index.message}</p> */}
        <p>ㅎㅇ</p>
      </div>
    </div>
  );
};

export default CheerCom;