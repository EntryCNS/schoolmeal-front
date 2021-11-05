import React, { useState } from "react";
import styled from "styled-components";
import evalBackground from "../../img/evalBackground.png";
import EvalCom from "./EvalCom";
import EvalNav from "./EvalNav";
import EvalStar from "./EvalStar";

const Eval = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${evalBackground});
  background-size: cover;
  background-repeat: no-repeat;
`;
const EvaluationPage = () => {
  const [state, setState] = useState(1);
  const [star, setStar] = useState(-1);
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
        <EvalCom
          state={state}
          star={star}
          setStar={setStar}
          setState={setState}
        />
      </div>
    </Eval>
  );
};

export default EvaluationPage;
