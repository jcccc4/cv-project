import React,{Fragment} from "react";
import Input from "../../Utilities/Input"

const Experience= (props) => {
  const {value,handleChange, styles} = props
    return (
      <>
        {[...Array(value.experience)].map((_,i) =>{
          return (<Fragment key={`exp${i}`}>
            <div className={styles.description}>{`Work Experience ${i+1}`}</div>
            <Input type="text" key={`companyName${i}`} className= "experience" id={`companyName${i}`} name={`companyName${i}`} placeholder="Company Name" handleChange ={handleChange}/>
            <Input type="text" key={`jobTitle${i}`} className= "experience" id={`jobTitle${i}`} name={`jobTitle${i}`} placeholder="Job Title" handleChange ={handleChange}/>
            <Input type="text" key={`responsibility${i}`} className= "experience" id={`responsibility${i}`} name={`responsibility${i}`} placeholder="Responsibility" handleChange ={handleChange}/>
            <Input type="text" key={`started${i}`} className= "experience" id={`started${i}`} name={`started${i}`} placeholder="Month Year Started" handleChange ={handleChange}/>
            <Input type="text" key={`ended${i}`} className= "experience" id={`ended${i}`} name={`ended${i}`} placeholder="Month Year Ended" handleChange ={handleChange}/>
        </Fragment >)})}
      </>
    );
  };
export default Experience;