import React, { Component } from "react";
import '../../styles/profile.css';
import swal from 'sweetalert';

const Profile=()=>{

    
    const logOut = ()=>{
        localStorage.clear();
        setTimeout(function()
        {
            window.location.reload()
        },670)
    }
    const onClick=()=>{
        swal({
            title:"정말 로그아웃 하시겠습니까?",
            text:"",
            icon:"warning",
            buttons:["취소","확인"],
        }).then((whilldelte)=>{
            if(whilldelte){
                swal("로그아웃에 성공하셨습니다 :)",{
                    icon:"success",
                    buttons:false
                });
                logOut();
            }else{
                swal("로그인이 유지됩니다!");
            }
        });
    }

    return(
        <div className="profile-container" onClick={onClick}>
            <div>
                <h1>정우재</h1><h2>님</h2>
            </div>
        </div>
    )
}
export default Profile