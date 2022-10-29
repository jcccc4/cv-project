import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);

  } 

  render() {
    const {type, className, id, name,placeholder, handleChange} = this.props
    return (
        <input type={type} className={className} id={id} name={name} placeholder={placeholder}  onChange={handleChange} />
    );
  }
}
export default Input;