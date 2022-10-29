import React, { Component } from "react";
import styles from "../Assets/Styles/Main.module.css"
import FormInput from "./Components/FormInput";
import Preview from "./Components/Preview";

class Main extends Component {
  constructor() {
    super();
    
    this.state = {
      counts :{socialLinks: 0, experience:0, education:0, skills:0, interests:0,},
      inputs : {},
      submitted : {},
    };
    
  }

  onSubmit =(e)=>{
    e.preventDefault();
    this.setState(state=>(
      {submitted: {...state.inputs}}
    ))
  }

  linkHandler = (e) =>{
    e.preventDefault();
    console.log(e.target.id)
    if(e.target.id ==="addSocials"){
      this.setState((state) => ({
        counts: {...state.counts, socialLinks: state.counts.socialLinks +1}
      }));
    } else if (e.target.id ==="addExperience"){
      this.setState((state) => ({
        counts: {...state.counts, experience: state.counts.experience +1}
      }));
    } else if (e.target.id ==="addEducation"){
      this.setState((state) => ({
        counts: {...state.counts, education: state.counts.education +1}
      }));
    } else if (e.target.id ==="addSkills"){
      this.setState((state) => ({
        counts: {...state.counts, skills: state.counts.skills +1}
      }));
    } else if (e.target.id ==="addInterests"){
      this.setState((state) => ({
        counts: {...state.counts, interests: state.counts.interests +1}
      }));
    }
    
  }

  handleChange = (e) =>{
    e.preventDefault();
    this.setState((state)=>({
      inputs: {...state.inputs, [e.target.name]:e.target.value}  
    }))
  }

  removeLink = (e) =>{
    e.preventDefault();
    if(e.target.id ==="removeSocials"){
      this.setState((state)=>({
          inputs: {...state.inputs, [`website${state.counts.socialLinks-1}`]: undefined} ,
          counts: {...state.counts, socialLinks: state.counts.socialLinks - 1},
    }));
    } else if (e.target.id ==="removeExperience"){
      this.setState((state)=>({
          inputs: {...state.inputs,
            [`companyName${state.counts.socialLinks-1}`]: undefined,
            [`jobTitle${state.counts.socialLinks-1}`]: undefined, 
            [`responsibility${state.counts.socialLinks-1}`]: undefined, 
            [`started${state.counts.socialLinks-1}`]: undefined,
            [`ended${state.counts.socialLinks-1}`]: undefined, } ,
          counts: {...state.counts, experience: state.counts.experience - 1},
      }));
    } else if (e.target.id ==="removeEducation"){
      this.setState((state)=>({
          inputs: {...state.inputs,
            [`universityName${state.counts.socialLinks-1}`]: undefined,
            [`degree${state.counts.socialLinks-1}`]: undefined, 
            [`description${state.counts.socialLinks-1}`]: undefined,} ,
          counts: {...state.counts, education: state.counts.education - 1},
      }));
    }else if (e.target.id ==="removeSkills"){
      this.setState((state)=>({

          inputs: {...state.inputs, [`skills${state.counts.skills-1}`]: undefined} ,
          counts: {...state.counts, skills: state.counts.skills - 1},

      }));
    }else if (e.target.id ==="removeInterests"){
      this.setState((state)=>({
          inputs: {...state.inputs, [`interests${state.counts.interests-1}`]: undefined} ,
          counts: {...state.counts, interests: state.counts.interests - 1},
      }));
    }
  }
  render() {
    const {socialLinks, experience, education, skills, interests } = this.state.counts;
    const {state, linkHandler, removeLink, handleChange, onSubmit} = this;
    return (
        <div className={styles.main}>
            <FormInput 
              state={state} 
              socialLinks = {socialLinks} 
              experience = {experience} 
              education = {education} 
              skills = {skills} 
              interests = {interests} 
              linkHandler = {linkHandler} 
              removeLink = {removeLink} 
              handleChange ={handleChange}
              onSubmit ={onSubmit}/>
            <Preview inputs={state.submitted} counts = {state.counts} />
        </div>
    );
  }
}
export default Main;