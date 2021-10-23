import React,{useState} from "react"
import "../../../styles/Cheermodal.css"


const Cheermodal=  ({handleModalClose,handleModalOpen,Show})=>{

    return(
        <div className="Cheermodal">
            <div
        hidden={!Show}  
      >
        <div
          className="modal-background"
          onClick={handleModalClose}
        >
          <div className="modal-card">
            
          </div>
        </div>
      </div>
        </div>
       
    )
}

export default Cheermodal