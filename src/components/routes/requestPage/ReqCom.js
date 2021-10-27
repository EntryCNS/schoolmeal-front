import React, { memo, useState } from "react";
import "../../../styles/ReqCom.css";
import heart from "../../../img/heart.png";
import heart2 from "../../../img/heart2.png";
import axios from "axios";
import { connect } from "react-redux";
import { LIKE, UNLIKE } from "../../../reducer/MealReducer";
import apiConfig from "../../../config/apiConfig";


const ReqCom = memo(({ index, LIKE, UNLIKE }) => {
  const [tog, setTog] = useState(false);
  const [Vote, SetVote] = useState(0);
  const onClick = () => {
    setTog(!tog);
  };
  const voteClick = () => {

    SetVote(Vote + 1);
    axios.post(`${apiConfig.API_ENDPOINT}/api/menus/${index.id}/like`, {}, {
      headers: { 'x-access-token': `Bearer ${localStorage.getItem("jwtAccessToken")}` }
    })
  }
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
          onClick={voteClick}
        />
        {index.votes}
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
