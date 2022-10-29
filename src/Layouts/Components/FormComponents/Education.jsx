import React,{Fragment} from "react";
import Input from "../../Utilities/Input"

const Experience= (props) => {
  const {value,handleChange, styles} = props
    return (
      <>
        {[...Array(value.education)].map((_,i) =>{
          return (<Fragment key={`exp${i}`}>
            <div className={styles.description}>{`Education ${i+1}`}</div>
            <Input type="text" key={`universityName${i}`} className= "education" id={`universityName${i}`} name={`universityName${i}`} placeholder="University Name" handleChange ={handleChange}/>
            <Input type="text" key={`degree${i}`} className= "education" id={`degree${i}`} name={`degree${i}`} placeholder="Degree" handleChange ={handleChange}/>
            <Input type="text" key={`description${i}`} className= "education" id={`description${i}`} name={`description${i}`} placeholder="description" handleChange ={handleChange}/>
        </Fragment >)})}
      </>
    );
  };
export default Experience;