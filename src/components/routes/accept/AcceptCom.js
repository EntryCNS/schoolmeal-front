import React from "react";

const AcceptCom  = (({index})=>{
    console.log("hi")
    console.log(index)
    return(
        <div className="menuList" style = {{position:"relative"}}>
        <h1>{index.menuName}</h1>
        <p>{index.description}</p>
        <p
        className="menuListDate"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom:"0px"
          }}
        >
          <div style={{marginLeft:"15px",marginBottom:"15px",position:"absolute",left:"0px",bottom:"0px"}}>
          </div>
        </p>
      </div>
    )

})

export default AcceptCom