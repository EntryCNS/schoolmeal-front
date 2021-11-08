import React, { useState } from "react";
import { connect } from "react-redux";
import { Add } from "../../../reducer/MealReducer";
import { MEALMODALTOGGLE } from "../../../reducer/reducer";
import Axios from 'axios'
import "../../../styles/MealModal.css";
import apiConfig from "../../../config/apiConfig";

const Mealmodal = ({ toggle, AddDumi, loadMore }) => {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");

  const onClick = () => {
    if (name !== "") {
      Axios.post(`${apiConfig.API_ENDPOINT}/api/menus`,
        {
          menuName: name,
          description: des,
          isAnonymous: false
        }, {
        headers: { 'x-access-token': `Bearer ${localStorage.getItem("jwtAccessToken")}` }
      }).then(() => {
        loadMore()
      })
      AddDumi(name, des);
      toggle();

    } else {
      return;
    }
  };
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
              value={name}
              className="mealreq-input-text"
              onChange={(e) => {
                console.log(name);
                setName(e.target.value);
              }}
              placeholder="제목"
              required
            />
            <textarea
              className="mealreq-input-description"
              value={des}
              onChange={(e) => {
                console.log(des);
                setDes(e.target.value);
              }}
              placeholder="내용 (선택)"
            />
          </div>
          <input
            className="bamin-font6 mealreq_btn"
            type="submit"
            value="신청"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: () => dispatch({ type: MEALMODALTOGGLE }),
    AddDumi: (name, des) => dispatch({ type: Add, name, des }),
  };
};

export default connect(null, mapDispatchToProps)(Mealmodal);
