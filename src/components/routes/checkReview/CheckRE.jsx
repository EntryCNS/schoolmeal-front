import React, { useEffect } from "react";
import STAR from "../../../img/Star.png";
import NOTSTAR from "../../../img/notStar.png";

const init = [0, 1, 2, 3, 4];

const CheckRE = ({ i }) => {
  useEffect(() => {
    console.log("i: ", i);
  }, [i]);

  return (
    <span>
      <span
        style={{
          width: "300px",
          height: "200px",
          background: "rgba(220,220,220,0.5)",
          margin: "20px",
          marginBottom: "40px",
          padding: "30px",
          fontSize: "25px",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {i.message}
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          {init.map((k, j) =>
            i.rate <= k ? (
              <img
                src={NOTSTAR}
                style={{ width: "35px", marginRight: "10px" }}
              />
            ) : (
              <img src={STAR} style={{ width: "35px", marginRight: "10px" }} />
            )
          )}
        </div>
      </span>
    </span>
  );
};

export default CheckRE;
