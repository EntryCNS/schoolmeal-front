// import { getByDisplayValue } from "@testing-library/react";
import { FLATTENABLE_KEYS } from "@babel/types";
import "../../../styles/ranking.css"
import React from "react";

const RankingCom =(({data, rank})=>{
    return(
        
        <div className="rankingComLine">
            <h1 className="rankingNumber">{rank}</h1>
            <h1 className="rankingName">{data.userInfo.name}</h1>
            <h1 className="rankingPoints">{data.points}</h1>
        </div>
    )
})

export default RankingCom