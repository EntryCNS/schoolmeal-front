import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import apiConfig from "../../../config/apiConfig";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "../../../styles/registerForm.css";
import { MODALTOGGLE } from "../../../reducer/reducer";
import { connect } from "react-redux";
import swal from "sweetalert";

function SignUpmodal({ modalToggle }) {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");


  const check = (e) => {
    setPassword2(e.target.value);
  };

  const signUPCheck= ()=>{
    const checkName = 	/^[가-힣]+$/ 
    const checkId = /^[a-z]+[a-z0-9]{5,19}$/g
    const checkBirth = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/
    const checkPassword = /^[a-zA-Z0-9]{8,15}$/
    if(!checkName.test(name) ){
      swal("한국어 이름만 가능합니다");
    }
    else if(!checkId.test(id))
      swal("아이디는 영문자로 시작하는 6~20자리를 사용해주세요.")
    else if(!checkBirth.test(birth))
      swal("생년월일을 다시 확인해주세요")
    else if(!checkPassword.test(password))
      swal("비밀번호는 숫자와 영문자 조합으로 8~15자리를 사용해야 합니다.")
    else {
      postData();
    }
  }

  useEffect(() => {
    if (!password2) {
      return;
    }
    if (password === password2) {
      setPasswordCheck(false);
    } else {
      setPasswordCheck(true);
    }
  }, [password, password2]);

  const postData = useCallback(
    (e) => {
      axios
        .post(`${apiConfig.API_ENDPOINT}/auth/signup`, {
          name,
          id,
          password,
          email,
          birth,
        })
        .then(() => {
          NotificationManager.success(
            "이메일함을 확인해주세요. :D",
            "성공!",
            2200
          )
          modalToggle();
        })
        .catch((ex) => {
          let resp = ex.response;
          let message = resp.data.message
          console.log(message)

          if(message=="user id is already exists"){
            swal("이미 아이디가 존재합니다")
          }else if(message=="user id and email is already exists"){
            swal("이미 아이디와 이메일이 존재합니다.")
          }else if(message=="user email is already exists"){
            swal("이미 이메일이 존재합니다.")
          }
          NotificationManager.warning(
            "다시 시도해 주세요 :(",
            "잘못된 ID 또는 비밀번호",
            2200
          );
        });
    },
    [name, id, password, email, birth]
  );

  return (
    <div
      className="modalBase"
      onClick={(event) => {
        console.log("close");
        if (event.target === event.currentTarget) modalToggle();
      }}
    >
      <div className="modalForm">
        <div className="register-input-box">
          <input
            value={name}
            className="register-input-text"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="이름"
          />
          <div className="register-bottomLine" />
          <input
            className="register-input-text"
            value={id}
            required
            onChange={(e) => {
              setId(e.target.value);
            }}
            placeholder="아이디"
          />
          <div className="register-bottomLine" />
          <input
            className="register-input-text"
            value={birth}
            type="text"
            required
            onChange={(e) => {
              setBirth(e.target.value);
            }}
            placeholder="생년월일 ex)20050526"
          />
          <div className="register-bottomLine" />
          <input
            className="register-input-text"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="이메일"
            type="email"
          />
          <div className="register-bottomLine" />
          {/* <input
                     className="bamin-font6 register_btn" 
                     type="submit" value="인증" /> */}
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="비밀번호"
            required
            className="register-input-text"
          />
          <div className="register-bottomLine" />
          <input
            type="password"
            placeholder="비밀번호 확인"
            className="register-input-text"
            value={password2}
            onChange={check}
          />
          <div className="register-bottomLine" />
          {passwordCheck ? (
            <div style={{ color: "red", textAlign: "right", width: "40%" }}>
              비밀번호가 틀립니다
            </div>
          ) : (
            ""
          )}
          <input
            className="bamin-font6 register_btn"
            onClick={signUPCheck}
            type="submit"
            value="가입"  
          />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    signUpModalOn: state.userReducer.signUpModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalToggle: () => dispatch({ type: MODALTOGGLE }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpmodal);
