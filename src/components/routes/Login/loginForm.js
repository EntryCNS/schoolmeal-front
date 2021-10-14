import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import "../../../styles/loginForm.css";
import "react-notifications/lib/notifications.css";
import axios from "axios";
import apiConfig from "../../../config/apiConfig";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import CustomInput from "../../../custom/CustomInput";
import SignUpmodal from "../modals/signUpmodal";
import { connect } from "react-redux";
import { LOGGED, MODALTOGGLE } from "../../../reducer/reducer";

function LoginForm({ setIsLoggedIn, signUpModalOn, modalToggle }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  //   const [signUpModalOn, setSignUpModalOn] = useState(false);
  const history = useHistory();

  const postData = useCallback(() => {
    axios
      .post(`${apiConfig.API_ENDPOINT}/auth/login`, {
        idOrEmail: id,
        password,
      })
      .then((e) => {
        NotificationManager.success(
          "로그인에 성공하였습니다 :D",
          "성공!",
          2200
        );
        const resData = e.data;
        console.log(resData);
        localStorage.setItem("jwtRefreshToken", resData.body.jwtRefreshToken);
        setIsLoggedIn(resData.body.jwtRefreshToken);
      })
      .catch((ex) => {
        let resp = ex.response;
        console.log(resp);
        NotificationManager.warning(
          "다시 시도해 주세요 :(",
          "잘못된 ID 또는 비밀번호",
          2200
        );
      });
  }, [id, password]);

  const toDauth = useCallback(() => {
    NotificationManager.warning(" 준비중이랍니다", "Dauth는..", 2200);
  }, []);

  const modal = useCallback(() => modalToggle(), []);
  return (
    <>
      <div className="login-container ">
        <div className="input-box ">
          <div id="id">
            <CustomInput
              className="textInput"
              type="text"
              placeholder="아이디 또는 이메일"
              value={id}
              setValue={setId}
            />
            <div className="bottomLine"></div>
          </div>
          <div id="password">
            <CustomInput
              className="textInput"
              value={password}
              setValue={setPassword}
              type="password"
              placeholder="비밀번호"
            />
            <div className="bottomLine"></div>
          </div>
        </div>
        <div className="button-box">
          <div className="login">
            <input
              className="login_btn"
              value="로그인"
              type="submit"
              onClick={postData}
            />
          </div>
          <div className="dauth-btn">
            <input
              className="login_btn"
              type="submit"
              onClick={toDauth}
              value="Dauth로 로그인"
            />
          </div>
        </div>
        <div className="a-box">
          <div className="find">
            <a href="#">아이디/비밀번호 찾기</a>
          </div>
          <div className="join">
            <a onClick={modal}>회원가입</a>
          </div>
        </div>
        <NotificationContainer />
      </div>
      {signUpModalOn && <SignUpmodal />}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    signUpModalOn: state.signUpModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalToggle: () => dispatch({ type: MODALTOGGLE }),
    setIsLoggedIn: () => dispatch({ type: LOGGED }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
