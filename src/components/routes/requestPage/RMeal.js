import React, {  useEffect, useCallback, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { MEALMODALTOGGLE } from "../../../reducer/reducer";
import Mealmodal from "../modals/Mealmodal";
import ReqCom from "./ReqCom";
import "../../../styles/RMeal.css";
import apiConfig from "../../../config/apiConfig";
import Axios from 'axios'
import { logDOM } from "@testing-library/react";

const Div = styled.div`
  width: 100%;
  overflow: scroll;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 0;
  padding-bottom: 100px;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const REQ = styled.div`
  position: fixed;
  width: 100%;
  background-color: white;
  background-size: cover;
  height: 80%;
  z-index: 2;
  display: flex;
  padding: 80px;
  padding-top: 70px;
  padding-bottom: 0;
`;

const RMeal = ({ modal, toggle, dumiDataQ }) => {
  
  const [MenuData,SetMenuData] = useState([]);

  const onClick = useCallback(() => {
    toggle();
  }, []);

  let cnt = 0
  let hasNext = true
  const loadMore = () => {
    if(!hasNext) return

    Axios.get(`${apiConfig.API_ENDPOINT}/api/menus?page=${cnt++}`, {
      headers: {'x-access-token': `Bearer ${localStorage.getItem("jwtAccessToken")}`}
    })
    .then((e)=>{
      console.log(e.data.body);
      hasNext = e.data.body.hasNext;
      SetMenuData(e.data.body.items);

    })
  }

  useEffect(loadMore, [])
  // loadMore()

  return (
    <REQ>
      <select name="sort" className="sort">
        <option value="popularity">인기</option>
        <option value="recently">최근</option>
        <option value="name">이름</option>
      </select>
      <Div>
        <div
          style={{
            width: "90%",
            overflow: "scroll",
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {MenuData.map((i) => (
            <ReqCom index={i}/>
          ))}
        </div>
      </Div>
      <button className="addBut" onClick={onClick}>
        +
      </button>
      {modal ? <Mealmodal loadMore={loadMore} /> : ""}
    </REQ>
  );
};

const mapStateToProps = (state) => {
  return {
    modal: state.userReducer.ReqMealModal,
    dumiDataQ: state.MealReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: () => dispatch({ type: MEALMODALTOGGLE }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RMeal);
