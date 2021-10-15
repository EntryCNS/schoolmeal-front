import React, { useCallback } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { MEALMODALTOGGLE } from "../../../reducer/reducer";
import Mealmodal from "../modals/Mealmodal";
import ReqCom from "./ReqCom";
import "../../../styles/RMeal.css";

const Div = styled.div`
  overflow: scroll;
  display: flex;
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

const dumiDataQ = [
  {
    title: "김치",
    description: "김치 먹고싶어요",
    like: 5,
  },
  {
    title: "참소라 죽",
    description: "급식 중에 참소라 죽이 제일 맛있어요❤️",
    like: 34,
  },
  {
    title: "오리영양탕",
    description: "사랑해요❤️",
    like: 68,
  },
  {
    title: "???",
    description: "!!!!!!!!!!!!!!!!!!",
    like: 0,
  },
  {
    title: "김치",
    description: "김치 먹고싶어요",
    like: 5,
  },
  {
    title: "참소라 죽",
    description: "급식 중에 참소라 죽이 제일 맛있어요❤️",
    like: 34,
  },
  {
    title: "오리영양탕",
    description: "사랑해요❤️",
    like: 68,
  },
  {
    title: "???",
    description: "!!!!!!!!!!!!!!!!!!",
    like: 0,
  },
  {
    title: "김치",
    description: "김치 먹고싶어요",
    like: 5,
  },
  {
    title: "참소라 죽",
    description: "급식 중에 참소라 죽이 제일 맛있어요❤️",
    like: 34,
  },
  {
    title: "오리영양탕",
    description: "사랑해요❤️",
    like: 68,
  },
  {
    title: "???",
    description: "!!!!!!!!!!!!!!!!!!",
    like: 0,
  },
  {
    title: "김치",
    description: "김치 먹고싶어요",
    like: 5,
  },
  {
    title: "참소라 죽",
    description: "급식 중에 참소라 죽이 제일 맛있어요❤️",
    like: 34,
  },
  {
    title: "오리영양탕",
    description: "사랑해요❤️",
    like: 68,
  },
  {
    title: "???",
    description: "!!!!!!!!!!!!!!!!!!",
    like: 0,
  },
  {
    title: "김치",
    description: "김치 먹고싶어요",
    like: 5,
  },
  {
    title: "참소라 죽",
    description: "급식 중에 참소라 죽이 제일 맛있어요❤️",
    like: 34,
  },
  {
    title: "오리영양탕",
    description: "사랑해요❤️",
    like: 68,
  },
  {
    title: "???",
    description: "!!!!!!!!!!!!!!!!!!",
    like: 0,
  },
  {
    title: "김치",
    description: "김치 먹고싶어요",
    like: 5,
  },
  {
    title: "참소라 죽",
    description: "급식 중에 참소라 죽이 제일 맛있어요❤️",
    like: 34,
  },
  {
    title: "오리영양탕",
    description: "사랑해요❤️",
    like: 68,
  },
  {
    title: "???",
    description: "!!!!!!!!!!!!!!!!!!",
    like: 0,
  },
];

const RMeal = ({ modal, toggle }) => {
  const onClick = useCallback(() => {
    toggle();
  }, []);
  return (
    <REQ>
      <select name="sort" className="sort">
        <option value="popularity">인기</option>
        <option value="recently">최근</option>
        <option value="name">이름</option>
      </select>
      <Div>
        {dumiDataQ.map((i) => (
          <ReqCom index={i} />
        ))}
      </Div>
      <button className="addBut" onClick={onClick}>
        +
      </button>
      {modal ? <Mealmodal /> : ""}
    </REQ>
  );
};

const mapStateToProps = (state) => {
  return {
    modal: state.userReducer.ReqMealModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: () => dispatch({ type: MEALMODALTOGGLE }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RMeal);
