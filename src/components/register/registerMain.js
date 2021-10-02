import React from "react";
import "../../styles/loginMain.css";
import RegisterForm from "./registerForm";
function RegisterMain() {
    return (
        <body>
            <div className="container-left">
                <div className="transparent-box"></div>
                <div className="img"></div>
                <div className="mainColor">
                    <RegisterForm />
                </div>
            </div>
            <div className="container-right">
                <div className="title-box">
                    <div className="title">
                        <p>대구소프트웨어고 전용 급식 웹</p>
                        <div className="mainTitle">
                            <h1>급식</h1><h2>의</h2><h1>민족</h1>
                        </div>
                    </div>
                </div>
            </div>
        </body>

    )
}

export default RegisterMain;