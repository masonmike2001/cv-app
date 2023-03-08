import React, { Component } from "react";
import "./App.css";
import uniqid from "uniqid";
import Form from "./components/Form";
import CV from "./components/CV";

class App extends Component {
  constructor() {
    super();
    this.handleChanges = this.handleChanges.bind(this);
    this.state = {
      name: "Gizmo Gecko",
      email: "gizmo@geicko.com",
      phone: "(508) 324-5906",
      schoolName: "University of Massachusetts",
      schoolField: "B.S. in Geckommunications",
      studyRange: { schoolStart: new Date(), schoolEnd: "", isAttending: "" },
      workName: "Geicko",
      workTitle: "Insurance Salesgecko Extraordinaire",
      workTask: { text: "", id: uniqid() },
      // workTasks: [],
    };
  }

  handleChanges = (e) => {
    console.log(e);
    console.log(e.target.id);
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const name = this.state.name;
    const email = this.state.email;
    const phone = this.state.phone;
    const schoolName = this.state.schoolName;
    const schoolField = this.state.schoolField;
    const workName = this.state.workName;
    const workTitle = this.state.workTitle;
    const workTask = this.state.workTask;
    // const studyRange = this.props.studyRange;
    return (
      <div id="holder">
        <div id="left">
          <Form
            name={name}
            email={email}
            phone={phone}
            schoolName={schoolName}
            schoolField={schoolField}
            // studyRange={studyRange}
            workName={workName}
            workTitle={workTitle}
            workTask={workTask}
            handleChanges={this.handleChanges}
          />
          <button type="submit">Submit</button>
          {/* <h1>Your name is: {this.state.name}</h1>
          <h1>Your email is: {this.state.email}</h1>
          <h1>Your phone is: {this.state.phone}</h1> */}
        </div>
        <div id="right">
          <CV
            name={name}
            email={email}
            phone={phone}
            schoolName={schoolName}
            schoolField={schoolField}
            // studyRange={studyRange}
            workName={workName}
            workTitle={workTitle}
            workTask={workTask}
          />
        </div>
      </div>
    );
  }
}

export default App;
