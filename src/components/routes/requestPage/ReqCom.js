import React, { memo, useState } from "react";
import "../../../styles/ReqCom.css";
import heart from "../../../img/heart.png";
import heart2 from "../../../img/heart2.png";
import { connect } from "react-redux";
import { LIKE, UNLIKE } from "../../../reducer/MealReducer";

const ReqCom = memo(({ index, LIKE, UNLIKE }) => {
  const [tog, setTog] = useState(false);
  const onClick = () => {
    
    setTog(!tog);
    if (tog) {
      UNLIKE(index.id);
      console.log(tog);
    } else {
      LIKE(index.id);
    }
  };
  return (
    <div className="menuList">
      <h1>{index.menuName}</h1>
      <p>{index.description}</p>
      <p
        style={{
          display: "flex",
          alignItems: "center",
        }}
        onClick={onClick}
      >
        <img
          style={{ width: "23px", height: "23px" }}
          src={tog ? heart2 : heart}
        />
        {index.vote}
      </p>

    </div>
  );
});

const mapDispatchToProps = (dispatch) => {
  return {
    LIKE: (id) => dispatch({ type: LIKE, id }),
    UNLIKE: (id) => dispatch({ type: UNLIKE, id }),
  };
};

export default connect(null, mapDispatchToProps)(ReqCom);
