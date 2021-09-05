import React, { useState,useEffect } from "react";
import 'react-notifications/lib/notifications.css'
import axios from "axios";
import apiConfig from "../../config/apiConfig";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { Link } from 'react-router-dom'
import "../../styles/registerForm.css"

function RegisterForm(){
    return(
        <form>
            <div className="container">
            <div className="input-box">
                <input placeholder="이름"/>
                <hr/>
            <input placeholder="생년월일"/>
            <hr/>
            <input placeholder="이메일" type="email"/>
            <input type="submit" value="인증"></input>
            <input type="password" placeholder="비밀번호"/>
            <input type="password" placeholder="비밀번호 확인"/>
            </div>
            </div>
        </form>
    )
}

export default RegisterForm
