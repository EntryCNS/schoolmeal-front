import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import apiConfig from "../../../config/apiConfig";
import evalBackground from "../../../img/evalBackground.png";
import EvalNav from "./CheckNav";
import CheckRE from "./CheckRE";

const Eval = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${evalBackground});
  background-size: cover;
  background-repeat: no-repeat;
`;

const getDateByIndex = (idx) => {
  const unit = 1000 * 60 * 60 * 24;
  const date = new Date(Date.now() - unit * idx);
  return `${date.getMonth()}월 ${date.getDate()}일`;
};

const EvaluationPage = () => {
  const [init, setInit] = useState(null);
  const [state, setState] = useState(1);
  const [star, setStar] = useState(-1);

  useEffect(() => {
    axios
      .get(`${apiConfig.API_ENDPOINT}/api/reviews`, {
        headers: {
          "x-access-token": `Bearer ${localStorage.getItem("jwtAccessToken")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setInit(res.data);
      });
  }, []);

  useEffect(() => {
    console.log(init);
  });

  return (
    <Eval>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(10,10,10,0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <EvalNav state={state} setState={setState} />
        <div
          style={{
            height: "54%",
            width: "80%",
            display: "flex",
            overflow: "scroll",
            flexDirection: "column",
          }}
        >
          {init && (
            <div
              style={{
                width: "100%",
                display: "flex",
              }}
            >
              {init.map((day, index) => {
                return (
                  <div>
                    <p>{getDateByIndex(index)}</p>
                    {state == 1 ? (
                      <div>
                        {day.breakfast.map((i) => (
                          <CheckRE i={i} state={state} />
                        ))}
                      </div>
                    ) : state == 2 ? (
                      <div style={{ display: "flex" }}>
                        {day.lunch.map((i) => (
                          <CheckRE i={i} state={state} />
                        ))}
                      </div>
                    ) : state == 3 ? (
                      day.dinner.map((i) => <CheckRE i={i} state={state} />)
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Eval>
  );
};

export default EvaluationPage;
