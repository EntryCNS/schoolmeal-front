import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import apiConfig from "../../../config/apiConfig";
import RankingCOm from "./RankingCom"
import "../../../styles/RMeal.css";
import "../../../styles/ranking.css"

const Div = styled.div`
  width: 100%;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;



const Ranking = ()=>{
    const [Ranking,setRanking] = useState([]);

    
    useEffect(()=>{
        axios.get(`${apiConfig.API_ENDPOINT}/api/users/ranks`,{
            headers: {'x-access-token': `Bearer ${localStorage.getItem("jwtAccessToken")}`}
        })
        .then((rankingData)=>{
            const {data} = rankingData
            console.log(data)
            setRanking(data)
        })
    },[])    
    
    return(

        <div className="RankingContainer">   
            <div className="titles">
                <h1>순위</h1>
                <h1>이름</h1>
                <h1>기여도</h1>
            </div>
            <div>
            {Ranking.map((i, index)=>(
                <RankingCOm  data={i} rank={index+1} />
                ))}
            </div>
     </div>
    )
}

export default Ranking;