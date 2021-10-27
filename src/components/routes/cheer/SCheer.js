import styled from "styled-components";
import CheerModal from "../modals/CheerModal"
import React, { useState, useEffect } from "react";
import CheerCom from "./CheerCom";
import axios from "axios";
import apiConfig from "../../../config/apiConfig";
import { logDOM } from "@testing-library/react";


const REQ = styled.div`
  position: fixed;
  width: 100%;
  background-color: white;
  background-size: cover;
  height: 80%;
  z-index: 2;
  display: flex;
  flex-wrap:wrap;
  padding: 80px;
  padding-top: 70px;
  padding-bottom: 0;
  `;

const SCheer = () => {
  const [Show, setShow] = useState(false)

  const [CheerData, setCheerData] = useState([]);

  const loadMore = () => {

    axios.get(`${apiConfig.API_ENDPOINT}/api/cheers`, {
      headers: { 'x-access-token': `Bearer ${localStorage.getItem("jwtAccessToken")}` }
    })
      .then((e) => {
        console.log(e.data.body)
        setCheerData(e.data.body)
        // console.log(CheerData)
        console.log("받아옴")
      })
  }

  useEffect(loadMore, [])

  const handleModalClose = (e) => {
    const currentClass = e.target.className;

    if (currentClass == 'modal-card') {
      return;
    }
    else {
      setShow(false);
    }
  };

  const handleModalOpen = () => {
    setShow(true);
  };
  return (
    <REQ>
      {CheerData.map((i) => (
        <CheerCom index={i} />
      ))}
      <CheerModal Show={Show} handleModalClose={handleModalClose} handleModalOpen={handleModalOpen} lodeMore={loadMore} />
      <button className="addBut" onClick={handleModalOpen} >
        +
      </button>
    </REQ>

  )
}

export default SCheer