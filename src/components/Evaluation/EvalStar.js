import React from "react";
import STAR from "../../img/Star.png";
import NOTSTAR from "../../img/notStar.png";

const init = [
  {
    star: 0,
  },
  {
    star: 0,
  },
  {
    star: 0,
  },
  {
    star: 0,
  },
  {
    star: 0,
  },
];

const EvalStar = ({ star, setStar }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "500px",
        margin: "30px",
      }}
    >
      {init.map((v, i) =>
        i <= Number(star) ? (
          <img
            onClick={() => setStar(i)}
            src={STAR}
            style={{ width: "70px" }}
          />
        ) : (
          //   <div onClick={setStar(i)}>sdfsf</div>
          <img
            onClick={() => setStar(i)}
            src={NOTSTAR}
            style={{ width: "70px" }}
          />
        )
      )}
    </div>
  );
};

export default EvalStar;
