import React from "react";
import { connect } from "react-redux";
import { MEALMODALTOGGLE } from "../../../reducer/reducer";
import "../../../styles/MealModal.css";

const Mealmodal = ({ toggle }) => {
  return (
    <div
      className="modalBase"
      onClick={(event) => {
        console.log("close");
        if (event.target === event.currentTarget) toggle();
      }}
    >
      <div className="modalForm">
        <div className="mealreq-input-box">
          <div className="bind">
            <input
              // value={name}
              className="mealreq-input-text"
              // onChange={(e) => {
              //   setName(e.target.value);
              // }}
              placeholder="제목"
              required
            />
            <textarea
              className="mealreq-input-description"
              // value={id}
              // onChange={(e) => {
              //   setId(e.target.value);
              // }}
              placeholder="내용 (선택)"
            />
          </div>
          <input
            className="bamin-font6 mealreq_btn"
            type="submit"
            value="신청"
          />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: () => dispatch({ type: MEALMODALTOGGLE }),
  };
};

export default connect(null, mapDispatchToProps)(Mealmodal);
