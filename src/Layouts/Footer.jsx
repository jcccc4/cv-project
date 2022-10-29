import React, { Component } from "react";
import styles from "../Assets/Styles/Footer.module.css"

class Footer extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <footer className={styles.footer}>
        Copyright © 2022 jcccc4
      </footer>
    );
  }
}
export default Footer;