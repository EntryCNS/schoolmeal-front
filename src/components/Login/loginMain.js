import React, { useState,useEffect } from "react";
import "../../styles/loginMain.css";
import LoginForm from "./loginForm";
import SignUpmodal from './../modals/signUpmodal'

function LoginMain() {
    const [signUpModalOn,setSignUpModalOn] =  useState(false);

    return (
        <div>
            {/* <SignUpmodal show={true} hide={setSignUpModalOn}/> */}
            <div className="container-left">
                <div className="transparent-box"></div>
                <div className="img"></div>
                <div className="mainColor">
                <LoginForm setSignUpModalOn={setSignUpModalOn}/>
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