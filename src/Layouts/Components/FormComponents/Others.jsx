import React from "react";
import Input from "../../Utilities/Input"

const Others = (props) => {
  const {status, value, handleChange} = props

  
  const arr = status.split(" ");
  for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);  
  }
  const str = arr.join(" ");
    return (
      <>
        {[...Array(value[status])].map((_,i) =>{
          return <Input type="text" key={`${status}${i}`} className= {`${status}`} id={`${status}${i}`} name={`${status}${i}`} placeholder={`${str}`} handleChange ={handleChange}/>

        })}
      </>
    );
  };
export default Others;