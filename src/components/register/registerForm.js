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
                birth,
            })
            .then()
            .catch((ex) => {
                let resp = ex.response
                console.log(resp)
                NotificationManager.warning('다시 시도해 주세요 :(', "잘못된 ID 또는 비밀번호", 2200)
            })
    }

    return (

        <form>
            <div className="register-container">
                <div className="register-input-box">
                    <input
                        value={name}
                        onChange={e => {
                            setName(e.target.value);
                        }}
                        placeholder="이름" />
                    <div className="bottomLine" />
                    <input
                        value={id}
                        onChange={e => {
                            setId(e.target.value);
                        }}
                        placeholder="아이디" />
                    <input
                        value={birth}
                        onChange={e => {
                            setBirth(e.target.value);
                        }}
                        placeholder="생년월일" />
                    <div className="bottomLine" />
                    <input
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value);
                        }}
                        placeholder="이메일" type="email" />
                    <input
                     className="email_btn bamin-font6 btn" 
                     type="submit" value="인증" />
                    <input
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                        type="password" placeholder="비밀번호" />
                    <input type="password" placeholder="비밀번호 확인" />
                    <input
                        className="bamin-font6 btn submit_btn"
                        onClick={postData}
                        type="submit" value="가입"/>
                </div>
            </div>
            <NotificationContainer />
        </form>
    )
}

export default RegisterForm
