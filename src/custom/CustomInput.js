import React from "react"
// {type,value,setValue,placeholder,className}
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