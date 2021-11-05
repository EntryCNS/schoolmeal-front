import axios from "axios";
import React, { useState } from "react";
import { withRouter } from "react-router";
import { CSSTransition } from "react-transition-group";
import { SwitchTransition } from "react-transition-group";
import apiConfig from "../../config/apiConfig";
import "./EvalCss.css";
import EvalStar from "./EvalStar";
import EvalWrite from "./EvalWrite";

const EvalCom = withRouter(({ star, setStar, state, setState, history }) => {
  const [m, setM] = useState("");
  const onClick = () => {
    axios
      .post(
        `${apiConfig.API_ENDPOINT}/api/reviews`,
        {
          reviewTime:
            state === 1 ? "BREAKFAST" : state === 2 ? "LUNCH" : "DINNER",
          message: m,
          rate: star,
        },
        {
          headers: {
            "x-access-token": `Bearer ${localStorage.getItem(
              "jwtAccessToken"
            )}`,
          },
        }
      )
      .then((res) => {
        history.push("/");
      });
  };

  return (
    <div>
      <SwitchTransition>
        <CSSTransition
          key={state === 1 ? "a" : state === 2 ? "b" : "c"}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="fade"
        >
          <div>
            <EvalStar star={star} setStar={setStar} />
            {state === 1 ? (
              <EvalWrite setM={setM} m={m} ti={1} />
            ) : state === 2 ? (
              <EvalWrite setM={setM} m={m} ti={2} />
            ) : (
              <EvalWrite setM={setM} m={m} ti={3} />
            )}
            <button
              style={{
                width: "100%",
                height: "60px",
                marginTop: "5px",
                borderRadius: "10px",
                border: "none",
                backgroundColor: "rgba(220,220,220,0.8)",
                color: "white",
                fontSize: "20px",
              }}
              className="evabut"
              onClick={onClick}
            >
              제출하기
            </button>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
});

export default EvalCom;
