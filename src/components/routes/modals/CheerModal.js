import React, { useState } from "react"
import apiConfig from "../../../config/apiConfig";
import axios from "axios";
import "../../../styles/Cheermodal.css"


const Cheermodal = ({ handleModalClose, Show }) => {
    const [Cheer, setCheer] = useState("")

    const cheerData = () => {
        if (Cheer !=="") {
            console.log("전송")
            axios
                .post(`${apiConfig.API_ENDPOINT}/`, {
                    cheer: Cheer
                }, {
                    headers: { 'x-access-token': `Bearer ${localStorage.getItem("jwtAccessToken")}` }
                })
        }
        else
            return;
    }

    return (
        <div className="Cheermodal">
            <div
                hidden={!Show}
            >
                <div
                    className="modal-background"
                    onClick={handleModalClose}
                >
                    <div className="modal-card">
                        <textarea
                            id="cheerInput"
                            className="modal-card"
                            placeholder="입력하세요"
                            onChange={(e) => {
                                setCheer(e.target.value);
                            }}
                        />
                        <button id="cheerBtn" onClick={cheerData}>응원하기</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cheermodal