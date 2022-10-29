import React, { Component } from "react";
import styles from "../Assets/Styles/Header.module.css"

class Header extends Component {
  constructor() {
    super();

  }

  render() {
    return (
        <header className={styles.header}>
            Resume Template Generator
        </header>
    );
  }
}
export default Header;