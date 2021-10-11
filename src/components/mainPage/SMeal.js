import React from "react";
import "../../styles/mainSMeal.css";


const SMeal = () => {
  const School = require('node-school-kr') 
  const school = new School()
   
  school.init(School.Type.HIGH, School.Region.DEAGU, 'D100000282')

const example = async function () {
  const meal = await school.getMeal()
  console.log(meal);
  console.log(meal.today)
  
}
example();
  return (

    <div className="Meal">
      <div className="menu">
        <h1>오늘의 급식</h1>
        <p>빠르게 급식을 확인하세요</p>
        <div className="menuCard">
          
        </div>

        <div className="menuCard">
        </div>

        <div className="menuCard">
        </div>

      </div>
    </div>

  );
};

export default SMeal;
