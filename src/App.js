import React, { Component } from "react";
import "./App.css";
import uniqid from "uniqid";
import Form from "./components/Form";
import CV from "./components/CV";

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

  render() {
    return (
      <div id="holder">
        <div id="left">
          <Form />
        </div>
        <div id="right">
          <CV />
        </div>
      </div>
    );
  }
}

export default App;
