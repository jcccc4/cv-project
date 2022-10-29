import React, { Component } from "react";
// import GlobalStyle from "./Assets/GlobalStyle"
import Header from "./Layouts/Header";
import Main from "./Layouts/Main";
import Footer from "./Layouts/Footer";
import GlobalStyle from "./Assets/GlobalStyle";

class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <GlobalStyle >
        <Header />
        <Main />
        <Footer />
      </GlobalStyle>
    );
  }
}
export default App;