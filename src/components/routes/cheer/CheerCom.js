import React from "react";
import "../../../styles/cheerCom.css"
const CheerCom = ({index}) => {
    const writtenDate = new Date(index.writtenAt)

  return (
    <div className="postit" >
      <div
        style={{
          width: "220px",
          height: "220px",
          background: "#FFE971",
          borderRadius: "0 0 35px 0",
          padding: "20px",
        }}
      >
        <h1>{index.author.name}</h1>
        <p>{index.message}</p> 
        <p className="date">{writtenDate.getMonth()}월 {writtenDate.getDate()}일에 작성</p>
      </div>    
    </div>
  );
};

export default CheerCom;