import React from "react"
// {type,value,setValue,placeholder,className}
{/* <CustomInput type="button" value="button" />
CustomInput({type:"button",value:"button"}); */}
const CustomInput = ({type,value,setValue,placeholder,className})=>{
    
    return (
        <input
        type={type}
        value={value}
        onChange={e=>setValue(e.target.value)}
        placeholder={placeholder}
        className={className}
         />
    )
}

export default CustomInput;