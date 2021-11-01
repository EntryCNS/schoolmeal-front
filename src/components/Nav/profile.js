import React, { useEffect,useState } from "react";
import '../../styles/profile.css';
import swal from 'sweetalert';
import axios from "axios";
import apiConfig from "../../config/apiConfig";

const Profile=()=>{
    const [UserName,setUserName] = useState("");
    const logOut = ()=>{
        localStorage.clear();
        setTimeout(function()
        {
            window.location.reload()
        },670)
    }

    useEffect(()=>{
        axios.get(`${apiConfig.API_ENDPOINT}/api/users/me`,{
            headers: { 'x-access-token': `Bearer ${localStorage.getItem("jwtAccessToken")}` }
        }).then(e=>{
            setUserName(e.data.name)
        }).catch(e=>{
            console.log(e)
        })
    },[])



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
                <h1>{UserName}</h1><h2>님</h2>
            </div>
        </div>
    )
}
export default Profile