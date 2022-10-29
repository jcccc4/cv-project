import React, { Component } from "react";
import styles from "../../Assets/Styles/FormInput.module.css"
import Personal from "./FormComponents/Personal"
import SocialLinks from "./FormComponents/SocialLinks";
import Experience from "./FormComponents/Experience";
import Education from "./FormComponents/Education";
import ButtonHandler from  "../Utilities/ButtonHandler"
import Others from "./FormComponents/Others";
class FormInput extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    const {socialLinks, experience, education, skills, interests, state, linkHandler, removeLink, handleChange, onSubmit} = this.props;
    const {counts} = state
    return (
        <form className={styles.formInput} action="" method="post">
          <Personal value={counts} handleChange ={(e)=>handleChange(e)}/>
          <SocialLinks value={counts} handleChange ={handleChange}/>        
          <ButtonHandler onAdd = {socialLinks} status = 'Socials' linkHandler = {linkHandler} removeLink = {removeLink}/>
          <Experience value={counts} handleChange ={handleChange} styles={styles.description}/>
          <ButtonHandler onAdd = {experience} status = 'Experience' linkHandler = {linkHandler} removeLink = {removeLink}/>
          <Education value={counts} handleChange ={handleChange} styles={styles}/>
          <ButtonHandler onAdd = {education} status = 'Education' linkHandler = {linkHandler} removeLink = {removeLink}/>
          <Others value={counts} handleChange ={handleChange} styles={styles} status = 'skills'/>
          <ButtonHandler onAdd = {skills} status = 'Skills' linkHandler = {linkHandler} removeLink = {removeLink}/>
          <Others value={counts} handleChange ={handleChange} styles={styles} status = 'interests'/>
          <ButtonHandler onAdd = {interests} status = 'Interests' linkHandler = {linkHandler} removeLink = {removeLink}/>
          <button type='button' onClick={(e) => onSubmit(e)}>Submit</button>
        </form>
    );
  }
}
export default FormInput;