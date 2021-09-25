import React, { useCallback, useEffect, useState } from "react";
// import RegisterForm from "../register/registerForm";
import axios from "axios";
import apiConfig from "../../../config/apiConfig";
import { NotificationContainer, NotificationManager } from 'react-notifications';
// import { Link } from 'react-router-dom'
import "../../../styles/registerForm.css"

function SignUpmodal(props){
    console.log(typeof props.modalToggle)
    console.log(props)
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birth, setBirth] = useState("");

    const postData = useCallback((e) => {
        e.preventDefault();
        axios
            .post(`${apiConfig.API_ENDPOINT}/auth/signup`, {
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
    },[name,id,password,email,birth])

    return(
        <div className="modalBase" onClick={(event) => {
            console.log('close'); 
            if(event.target === event.currentTarget)
                props.modalToggle()
            
            }}>
            <div className="modalForm">
            <div className="register-input-box">
                    <input
                        value={name}
                        className="register-input-text"
                        onChange={e => {
                            setName(e.target.value);
                        }}
                        placeholder="이름" />
                    <div className="register-bottomLine" />
                    <input
                        className="register-input-text"
                        value={id}
                        onChange={e => {
                            setId(e.target.value);
                        }}
                        placeholder="아이디" />
                    <div className="register-bottomLine" />
                    <input
                        className="register-input-text"
                        value={birth}
                        type="text"
                        onChange={e => {
                            setBirth(e.target.value);
                        }}
                        placeholder="생년월일 ex)20050526" />
                    <div className="register-bottomLine" />
                    <input
                        className="register-input-text"
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value);
                        }}
                        placeholder="이메일" type="email"
                    />
                    <div className="register-bottomLine" />
                    {/* <input
                     className="bamin-font6 register_btn" 
                     type="submit" value="인증" /> */}
                    <input
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                        type="password" placeholder="비밀번호"
                        className="register-input-text"
                    />
                    <div className="register-bottomLine" />
                    <input type="password" placeholder="비밀번호 확인"
                        className="register-input-text"
                    />
                    <div className="register-bottomLine" />
                    <input
                        className="bamin-font6 register_btn"
                        onClick={postData}
                        type="submit" value="가입" />
                </div>
            </div>
        </div>
    );
}

export default SignUpmodal