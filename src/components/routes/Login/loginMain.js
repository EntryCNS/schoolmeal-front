import React, { useState,useEffect,useCallback } from "react";
import "../../../styles/loginMain.css";
import LoginForm from "./loginForm";

function LoginMain() {
    const [signUpModalOn,setSignUpModalOn] =  useState(false);
    
    return (
        <div>
            <div className="container-left">
                <div className="transparent-box"></div>
                <div className="img"></div>
                <div className="mainColor">
                <LoginForm signUpModalOn={setSignUpModalOn}/>
                </div>
            </div>
            <div className="container-right">
                <div className="title-box">
                    <div className="title">
                    <p>대구소프트웨어고 전용 급식 웹</p>
                    <div  className="mainTitle">
                    <h1>급식</h1><h2>의</h2><h1>민족</h1>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginMain;