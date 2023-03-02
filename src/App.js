import React, { Component } from "react";
import "./App.css";
import uniqid from "uniqid";
import Profile from "./components/Profile";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      schoolName: "",
      schoolField: "",
      studyRange: { schoolStart: "", schoolEnd: "", isAttending: "" },
      workName: "",
      workTitle: "",
      workTask: { text: "", id: uniqid() },
      workTasks: [],
    };
  }

  // Components:
  // Profile info
  // Education
  // Experience
  // Output

  render() {
    const {
      name,
      email,
      phone,
      schoolName,
      schoolField,
      studyRange,
      workName,
      workTitle,
      workTask,
      workTasks,
    } = this.state;
    return (
      <div id="holder">
        <div id="left">
          <Profile
            info={[this.state.name, this.state.email, this.state.phone]}
          />
          {/* <Education />
          <Work /> */}
          <button type="submit">Submit</button>
        </div>
        <div id="right"></div>
      </div>
    );
  }
}

export default App;
