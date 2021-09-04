import { expressionStatement } from "@babel/types";
import React, { useState,useEffect } from "react";
import "../../styles/loginForm.css"
import 'react-notifications/lib/notifications.css'
import axios from "axios";
import apiConfig from "../../config/apiConfig";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { Link } from 'react-router-dom'


function LoginForm() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const postData = (e) => {
        e.preventDefault();
        axios
        .post(`${apiConfig.API_ENDPOINT}/auth/login`, {
            idOrEmail: id,
            password,
        })
        .then()
        .catch((ex)=>{
            // console.log("실패");
            let resp = ex.response
            console.log(resp)
            NotificationManager.warning('다시 시도해 주세요 :(', "잘못된 ID 또는 비밀번호", 2200)
        })
    };

    const toDauth = () => {
        NotificationManager.warning(' 준비중이랍니다', 'Dauth는..', 2200)
    }

    return (
        <div className="login-container">
            <div className="input-box">
                <div id="id">
                    <input
                       value={id}
                       onChange={(e)=>{
                          setId(e.target.value) 
                       }} 
                    placeholder="아이디 또는 이메일"/>
                    <div className="bottomLine"></div>
                </div>
                <div id="password">
                    <input
                     value={password}
                     onChange={(e)=>{
                         setPassword(e.target.value)
                     }}
                        type="password" placeholder="비밀번호" />
                    <div className="bottomLine"></div>
                </div>
            </div>
            <div className="button-box">
                <div className="login-btn">
                    <button 
                    onClick={postData} >로그인</button>
                </div>
                <div className="dauth-btn">
                    <button onClick={toDauth}>Dauth로 로그인</button>
                </div>
            </div>
            <div className="a-box">
                <div className="find">
                    <a href="#">아이디/비밀번호 찾기</a>
                </div>
                <div className="join">
                    <Link to="/register">회원가입</Link>
                </div>
            </div>
            <NotificationContainer/>
        </div>
    )
}

export default LoginForm