import React from "react";
import Input from "../../Utilities/Input"

const SocialLinks= (props) => {
  const {value, handleChange} = props

    return (
      <>
        {[...Array(value.socialLinks)].map((_,i) =>{
          return <Input type="text" key={`web${i}`} className= "website" id={`website${i}`} name={`website${i}`} placeholder="Website Link" handleChange ={handleChange}/>

        })}
      </>
    );
  };
export default SocialLinks;