import styled from "styled-components";
import CheerModal from "../modals/CheerModal"
import React, {useState } from "react";

import Cheermodal from "../modals/CheerModal";


const REQ = styled.div`
  position: fixed;
  width: 100%;
  background-color: white;
  background-size: cover;
  height: 80%;
  z-index: 2;
  display: flex;
  padding: 80px;
  padding-top: 70px;
  padding-bottom: 0;
  `;
  
const SCheer = ()=>{
  const [Show,setShow] = useState(false)

      
  const handleModalClose = (e) => {
    const currentClass = e.target.className;
    
    if (currentClass == 'modal-card') {
      return;
    }
    else{
      setShow(false);
    }
  };

    const handleModalOpen = () => {
        setShow(true);
      };
return(
<REQ>
  <CheerModal Show={Show} handleModalClose={handleModalClose} handleModalOpen={handleModalOpen}/>
<button className="addBut" onClick={handleModalOpen} >
        +
</button>
</REQ>

)
}

export default SCheer