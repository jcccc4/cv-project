import React, { Component } from "react";
import Input from "../../Utilities/Input"

class Personal extends Component {
    constructor(props) {
        super(props);

        }

    


  render() {

    return (
        
      <>
            <Input type="text" id="fname" className="fname" name="fname" placeholder="First Name"  handleChange ={this.props.handleChange}/>
            <Input type="text" id="lname" className="lname" name="lname" placeholder="Last Name"  handleChange ={this.props.handleChange}/>
            <Input type="text" id="PhoneNum" className="PhoneNum" name="PhoneNum" placeholder="Phone Number"  handleChange ={this.props.handleChange}/>
            <Input type="text" id="eMail" className="eMail" name="eMail" placeholder="E-mail"  handleChange ={this.props.handleChange}/>
            
      </>
    );
  }
}
export default Personal;