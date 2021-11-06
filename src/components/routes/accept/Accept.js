import React, {  useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import "../../../styles/RMeal.css";
import apiConfig from "../../../config/apiConfig";
import axios from "axios";
import AcceptCom from "./AcceptCom"
import SizeContext from "antd/lib/config-provider/SizeContext";

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

const Accept = () => {
    
    const [AcceptMenuData,setAcceptMenuData] = useState([]);

      let cnt = 0
      let hasNext = true

      const loadMore = () => {
        if(!hasNext) return
        axios.get(`${apiConfig.API_ENDPOINT}/api/menus?page=${cnt++}&option=FIND_ALLOWED&sortBy=votes`, {
          headers: {'x-access-token': `Bearer ${localStorage.getItem("jwtAccessToken")}`}
        })
        .then((e)=>{
          console.log(e.data.body);
          hasNext = e.data.body.hasNext;
          setAcceptMenuData(e.data.body.items);
        })
      }

      useEffect(loadMore, [])
  return (
    <REQ>
      <Div>
        <div
          className="RMealContainer"
          style={{
            width:"85%",
            overflow: "scroll",
            display: "flex",
            justifyContent: "flex-start",
            flexFlow: "colum nowrap",
            borderWidth:"6px",
            borderStyle:"solid",
            borderColor:"#86CF64",
            borderRadius:"10px",
            position:"relative"
          }}
        >
          <div 
            className="accept-comment"
            style = {{
              position:"absolute",
              left:"50px",
              fontSize:"30px",
              top:"40px",
            }}
            >
          수락됨
        </div>
        <div
          className="accept-comment"
          style = {{
            position:"absolute",
            top:"80px",
            left:"55px",
            fontSize:"20px",
          }}
        >
            기대하세요!
          <div
            className="accept-container"
            style = {{
              display:"flex",
              flexWrap:"wrap"
            }}
            >
            {AcceptMenuData.map((i) => (
              <AcceptCom index={i}/>
              ))}
          </div>
            </div>
              </div>
      </Div>
      </REQ>
  );
};

export default Accept;

