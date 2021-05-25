import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavbar from "./components/Navbar";
import MainSection from "./MainSection"

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm">
          <MyNavbar />
          <MainSection/>
        </div>
      </div>
    );
  }
}

export default App;
