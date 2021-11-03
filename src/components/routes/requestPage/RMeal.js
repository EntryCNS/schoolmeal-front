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
  const [Sort, setSort] = useState("votes");

  const onClick = useCallback(() => {
    toggle();
  }, []);

  let cnt = 0
  let hasNext = true
  const loadMore = () => {
    if(!hasNext) return
    Axios.get(`${apiConfig.API_ENDPOINT}/api/menus?page=${cnt++}&option=FIND_NOTALLOWED&sortBy=${Sort}`, {
      headers: {'x-access-token': `Bearer ${localStorage.getItem("jwtAccessToken")}`}
    })
    .then((e)=>{
      console.log(e.data.body);
      hasNext = e.data.body.hasNext;
      SetMenuData(e.data.body.items);
    })
  }

  const changeSort =()=>{
   const sort = document.querySelector(".sort");
   console.log(sort)
    setSort(sort.options[sort.selectedIndex].value)
    console.log(Sort)
  }

  useEffect(loadMore, [Sort])

  return (
    <REQ>
      <select name="sort" className="sort" onChange={changeSort}>
        <option value="votes">인기</option>
        <option value="writtenAt">최근</option>
      </select>
      <Div>
        <div
          className="RMealContainer"
          style={{
            width:"85%",
            overflow: "scroll",
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            borderWidth:"6px",
            borderStyle:"solid",
            borderColor:"#E59419",
            borderRadius:"10px",
            // justifyContent:"space-around"
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
