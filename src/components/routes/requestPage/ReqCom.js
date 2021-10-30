import React, { memo, useState } from "react";
import "../../../styles/ReqCom.css";
import vote from "../../../img/vote.png";
import accept from "../../../img/accept.png"
import remove from "../../../img/remove.png"
import axios from "axios";
import { connect } from "react-redux";
import { LIKE, UNLIKE } from "../../../reducer/MealReducer";
import apiConfig from "../../../config/apiConfig";


const ReqCom = memo(({ index, LIKE, UNLIKE }) => {
  const [Vote, SetVote] = useState(0);
  const [Admin, setAdmin] = useState(false)
  const voteClick = () => {
    SetVote(Vote + 1);
    axios.post(`${apiConfig.API_ENDPOINT}/api/menus/${index.id}/like`, {}, {
      headers: { 'x-access-token': `Bearer ${localStorage.getItem("jwtAccessToken")}` }
    }).then(() => {
      window.location.reload();
    }).catch(() => {
      alert("이미 투표하셨습니다")
    })
  }

  const acceptClick =()=>{
  }
  const removeClck =()=>{
    
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
      >
        <img
          style={{ width: "23px", height: "23px" }}
          src={vote}
          onClick={voteClick}
        />
        {index.votes}
        {Admin==true?(
        <div className="btnContainer" style={{ marginLeft: "150px", cursor: "pointer" }}>
          <img style={{ width: "50px", marginRight: "10px" }}
            src={accept}
          />
          <img style={{ width: "50px", cursor: "pointer" }}
            src={remove}
          />
        </div>
        ):(null)}

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
