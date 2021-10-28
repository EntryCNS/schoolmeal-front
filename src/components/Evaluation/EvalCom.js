import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { SwitchTransition } from "react-transition-group";
import "./EvalCss.css";
import EvalWrite from "./EvalWrite";

const EvalCom = ({ state, setState }) => {
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
            {state === 1 ? (
              <EvalWrite ti={1} />
            ) : state === 2 ? (
              <EvalWrite ti={2} />
            ) : (
              <EvalWrite ti={3} />
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
            >
              제출하기
            </button>
            <div style={{ textAlign: "right" }}>
              <button
                onClick={() => {
                  if (state !== 3) {
                    setState((state) => state + 1);
                  } else {
                    setState(1);
                  }
                }}
                style={{
                  color: "#5FBEBB",
                  background: "none",
                  border: "1px solid #5FBEBB",
                  borderRadius: "10px",
                  width: "80px",
                  marginTop: "5px",
                  fontSize: "20px",
                  padding: "7px",
                }}
              >
                {state === 1 ? "점심" : state === 2 ? "저녁" : "아침"}
              </button>
            </div>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default EvalCom;
