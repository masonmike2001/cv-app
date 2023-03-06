import React, { Component } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Work from "./components/Work";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  // Layout:
  // ----------------------------
  // Profile info        Output
  // Education              ||
  // Experience             ||
  // Output                 \/
  // ---------------------------

  render() {
    return (
      <div id="holder">
        <div id="left">
          <form>
            <Profile />
            <hr />
            <Education />
            <hr />
            <Work />
            <hr />
          </form>
          <button type="submit">Submit</button>
        </div>
        <div id="right">
          <p>This is your lovely CV...</p>
          <h1>{this.name}</h1>
        </div>
      </div>
    );
  }
}

export default App;
