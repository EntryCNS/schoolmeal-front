import React, { useEffect, useState } from "react";
import "../../styles/mainSMeal.css";
import axios from "axios";
import apiConfig from "../../config/apiConfig"
import { Link } from "react-router-dom";

const SMeal = () => {
  const [MonthData, SetMonthData] = useState([]);
  const [TodayData, SetTodayData] = useState(null)

  useEffect(() => {
    axios.get(`${apiConfig.API_ENDPOINT}/openapi/schoolmenu?month=${10}`)
      .then((result) => {
        const menuList = result.data.body;
        const todayMenu = menuList[new Date().getDate() - 1] // 배열이므로 -1
        console.log(menuList);
        SetTodayData(todayMenu);
        SetMonthData(result.data.body)
      })
  }, [])


  return (

    <div className="Meal">


      <div className="Meal-container">
        <div className="menu front">
          <h1>오늘의 급식</h1>
          <p>빠르게 급식을 확인하세요</p>
          {
            TodayData == null ? <p>로딩 중..</p> :
              (
                <div>
                  <h1>조식</h1>
                  <div className="menuCard">
                    <p>{TodayData.breakfast.join(", ")}</p>
                  </div>

                  <h1>중식</h1>
                  <div className="menuCard">
                    <p>{TodayData.lunch.join(", ")}</p>
                  </div>

                  <h1>석식</h1>
                  <div className="menuCard">
                    <p>{TodayData.dinner.join(", ")}</p>
                  </div>

                </div>

              )
          }
        </div>

          <div className="middle">
            
              <Link to="/">
                  <div id="postMenu">
                    <h1>급식신청</h1>
                    <p>원하는 급식을 신청하세요</p>
                  </div>
                </Link>

                <Link to="/">
                  <div id="ranking">
                    <h1>랭킹</h1>
                    <p>메뉴들의 랭킹을 확인하시오</p>
                  </div>
                </Link>

          </div>
      </div>

    </div>

  );
};

export default SMeal;
