import React, { memo, useEffect, useState } from "react";
import "../../../styles/ReqCom.css";
import vote from "../../../img/vote.png";
import accept from "../../../img/accept.png"
import remove from "../../../img/remove.png"
import axios from "axios";
import { connect } from "react-redux";
import { LIKE, UNLIKE } from "../../../reducer/MealReducer";
import apiConfig from "../../../config/apiConfig";
import swal from "sweetalert";

const ReqCom = memo(({ index, LIKE, UNLIKE }) => {
  let writtenDate = new Date(index.writtenAt)
  console.log(index.writtenAt)
  console.log(new Date(1634722554864))
  const [Permission, setPermission] = useState(0)
  const voteClick = () => {
    axios.post(`${apiConfig.API_ENDPOINT}/api/menus/${index.id}/like`, {}, {
      headers: { 'x-access-token': `Bearer ${localStorage.getItem("jwtAccessToken")}` }
    }).then((e) => {
      window.location.reload();
      console.log(e)
    }).catch(() => {
      swal("이미 투표하셨습니다");
    })

  }

 const hi =  useEffect(()=>{
    axios.get(`${apiConfig.API_ENDPOINT}/api/users/me`,{
        headers: { 'x-access-token': `Bearer ${localStorage.getItem("jwtAccessToken")}` }
    }).then(e=>{
      setPermission(e.data.permission)
    }).catch(e=>{
        console.log(e)
    })
},[])

  const acceptClick = () => {
    axios.patch(`${apiConfig.API_ENDPOINT}/api/menus/${index.id}/allow`, { isAllowed: true }, {
      headers: { 'x-access-token': `Bearer ${localStorage.getItem("jwtAccessToken")}` }
    }).then(() => {
      console.log("성공")
    })
      .catch(e => {
        console.log(e)
        console.log(index.id)
      })
  }
  const removeClck = () => {
    axios.delete(`${apiConfig.API_ENDPOINT}/api/menus/${index.id}`, {
      headers: { 'x-access-token': `Bearer ${localStorage.getItem("jwtAccessToken")}` }
    }).then((res) => {
      console.log("성공");
      // axios.get(); cns 방법
      // 
      //res.data // 류수아 법
      window.location.reload();
    })
      .catch(e => {
        console.log(e)
        console.log(index.id)
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
      >
        <img
          style={{ width: "23px", height: "23px" }}
          src={vote}
          onClick={voteClick}
        />
        {index.votes}
        {Permission == 1 ? (
          <div className="btnContainer" style={{ marginLeft: "150px", cursor: "pointer" }}>
            <img style={{ width: "50px", marginRight: "10px" }}
              src={accept}
              onClick={acceptClick}
            />
            <img style={{ width: "50px", cursor: "pointer" }}
              src={remove}
              onClick={removeClck}
            />
          </div>
        ) : (null)}
      </p>
      <p className="reqDate" style={{ color: "gray" }}>{writtenDate.getMonth()+1}월 {writtenDate.getDate()}일에 작성</p>
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
