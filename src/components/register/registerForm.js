import React, { useState, useEffect } from "react";
import 'react-notifications/lib/notifications.css'
import axios from "axios";
import apiConfig from "../../config/apiConfig";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Link } from 'react-router-dom'
import "../../styles/registerForm.css"

function RegisterForm() {

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birth, setBirth] = useState("");

    const postData = (e) => {
        e.preventDefault();
        axios
            .post(`${apiConfig.API_ENDPOINT}/auth/login`, {
                name,
                id,
                password,
                email,

            })
            .then()
            .catch((ex) => {
                NotificationContainer.warnig('다시 시도해 주세요 :(', "계정가입 실패", 2200);
            })
    }

    return (

        <form>
            <div className="register-container">
                <div className="register-input-box">
                    <input
                        value={id}
                        onChange={e => {
                            setName(e.target.value);
                        }}
                        placeholder="이름" />
                    <div className="bottomLine" />
                    <input
                    value={birth} 
                    onChange ={e=>{
                        setBirth(e.target.value);
                    }}
                    placeholder="생년월일" />
                    <div className="bottomLine" />
                    <input
                        value={email}
                        onChange={e=>{
                            setEmail(e.target.value);
                        }}                    
                    placeholder="이메일" type="email" />
                    <input className="email_btn" type="submit" value="인증" />
                    <input
                    value={password}
                    onChange={e=>{
                        setEmail(e.target.value);
                    }}
                    type="password" placeholder="비밀번호" />
                    <input type="password" placeholder="비밀번호 확인" />
                    <input 
                    onClick={postData}
                    type="submit" placeholder="가입" />
                </div>
            </div>
        </form>
    )
}

export default RegisterForm
