import React, { Component } from "react";
import styles from "./GlobalStyle.module.css"

class GlobalStyle extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className={styles.globalStyle}>
        {this.props.children}
      </div>
    );
  }
}
export default GlobalStyle;