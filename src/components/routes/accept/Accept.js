import React, {  useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import "../../../styles/RMeal.css";
import apiConfig from "../../../config/apiConfig";
import Axios from 'axios'
import axios from "axios";

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

const AccpetContainer = styled.div`
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

const Accept = () => {
    
    const [AcceptMenuData,setAceeptMenuData] = useState([]);

    const GetAcceptMenu = useEffect(() => {
        axios.get(`${apiConfig.API_ENDPOINT}/`)
    }, [])

  return (
    <AccpetContainer>
      <Div>
        <div
          className="RMealContainer"
          style={{
            width: "90%",
            overflow: "scroll",
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            borderWidth:"5px",
            borderStyle:"solid",
            borderRadius:"10px",
            borderColor:"#86CF64"
          }}
        >
        </div>
        
      </Div>
    </AccpetContainer>
  );
};

export default Accept
