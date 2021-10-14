import React from "react";

const ReqCom = ({ index }) => {
  return (
    <div>
      <h1>{index.title}</h1>
      <p>{index.description}</p>
      <p>{index.like}</p>
    </div>
  );
};

export default ReqCom;
