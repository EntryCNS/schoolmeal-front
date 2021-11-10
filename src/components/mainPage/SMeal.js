import React, { useEffect, useState } from "react";
import "../../styles/mainSMeal.css";
import axios from "axios";
import apiConfig from "../../config/apiConfig";
import { Link } from "react-router-dom";
import accept from "../../img/accept1.png"
import ranking from "../../img/ranking1.png"
import cheer from "../../img/cheer.png"
import nextImg from "../../img/next.png"
import lastImg from "../../img/last.png"

const SMeal = () => {
  const [MonthData, SetMonthData] = useState([]);
  const [TodayData, SetTodayData] = useState(null);
  const [Next, SetNext] = useState(1);
  const [Permission,setPermission] = useState(0);
  const [day,setDay] = useState(10);
  var hours
  var month=11

  const timeChecker = (timeIdx) => {
    const rangeArr = [
      [19, 25],
      [8, 13],
      [13, 19]
    ]

    var now = new Date();
    hours = now.getHours();
    const turnOnRed = (hours > rangeArr[timeIdx][0] && hours <= rangeArr[timeIdx][1])
    return turnOnRed
  }

  useEffect(() => {
    const month = new Date().getMonth()
    axios
      .get(`${apiConfig.API_ENDPOINT}/openapi/schoolmenu?month=${month+1}`)
      .then((result) => {
        const menuList = result.data.body;
        const date = new Date().getDate()
        console.log(date)
        const todayMenu = menuList[date - Next]; // 배열이므로 -1
        console.log(todayMenu);
        SetTodayData(todayMenu);
        SetMonthData(result.data.body);
      });
  }, [Next]);


  (function permissionCheck(){
    axios.get(`${apiConfig.API_ENDPOINT}/api/users/me`,{
      headers: { 'x-access-token': `Bearer ${localStorage.getItem("jwtAccessToken")}` }
  }).then(e=>{
    setPermission(e.data.permission)
  }).catch(e=>{
      console.log(e)
  })
  })()

  const nextClick=()=>{
    SetNext(Next-1)
    setDay(day+=1)
    console.log(Next,day)
  }
  
  const lastClick=()=>{
    day-=1;
    setDay(day-=1);
    SetNext(Next+1)
  }

  return (
    <div className="Meal">
      <div className="Meal-container">
        <div className="menu front">
          <h1>오늘의 급식</h1>
          <p>빠르게 급식을 확인하세요</p>
          <h3>{month}월 {day}일</h3>
          <div className="menuChangeBtn">
          <button  onClick={lastClick}><img  src={lastImg} style={{width:"30px",height:"30px",}}/></button>
          <button onClick={nextClick}><img src={nextImg} style={{width:"30px",height:"30px"}}></img></button>
          </div>

          {TodayData == null ? (
            <p>로딩 중..</p>
          ) : (
            <div className="section-container">
              <div className="section">
                <div className="Line bre"/>
                <div className={`menuCard ${timeChecker(0) ? 'nextMealColor' : ''}`} id="breakfast" >
                  <p>{TodayData.breakfast.join(", ")}</p>
                </div>
              </div>
              <div className="section">
                <div className="Line aft" />
                <div className={`menuCard ${timeChecker(1) ? 'nextMealColor' : ''}`} id="lunch">
                  <p>{TodayData.lunch.join(", ")}</p>
                </div>
              </div>

              <div className="section">
                <div className="Line din"/>
                <div className={`menuCard ${timeChecker(2) ? 'nextMealColor' : ''}`} id="dinner">
                  <p>{TodayData.dinner.join(", ")}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="middle">
          <Link to="/request">
            <div id="request">
              <h1>메뉴 신청</h1>
              <p>원하는 급식 메뉴를 신청하세요</p>
              <div className="requestImg"></div>
            </div>
          </Link>

          <Link to="/ranking">
            <div id="ranking" style = {{position:"relative"}}>
              <h1>이달의 랭킹</h1>
              <p>급식의 질 향상의 주역들입니다.</p>
              <img style={{width:"270px",height:"172.8px",top:"73px"}} src={ranking}/>
            </div>
          </Link>
        </div>

        <div className="back">
          <Link to="/cheer">
            <div id="cheer"  style = {{position:"relative"}}>
              <h1>응원하기</h1>
              <p>맛있는 급식에 보답하세요</p>
              <img src={cheer} style={{width:"250px",marginLeft:"170px",position:"absolute",top:"70px"}}></img>
            </div>
          </Link>

          <Link to="/accept">
            <div id="accept">
              <h1>꿈은 이루어진다</h1>
              <p>최근 반영된 급식 메뉴를 확인하세요</p>
              <img src={accept} style={{width:"80px",height:"80px"}} alt="신청현황 이미지"/>
            </div>
          </Link>
        </div>
        {Permission === 1?
          <Link to="/checkreview" style={{color:"#5FBEBB",position:"absolute",top:"86%",left:"66%"}}><h2>급식리뷰 확인하기</h2></Link>
          :
          <Link to="/eval" style={{color:"#5FBEBB",position:"absolute",top:"86%",left:"66%"}}><h2>오늘 급식은 어땠나요?</h2></Link>
      }
      </div>
    </div>
  );
};

export default SMeal;
