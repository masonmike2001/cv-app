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
      summary:
        "As a leopard gecko working as an insurance salesgecko extroardinaire, I may not have the ability to save you 15% or more on car insurance, but I can certainly make the process more enjoyable. I may be small, but I have a big personality and a passion for insurance (yes, really!).",
      phone: "(508) 324-5906",
      schoolName: "University of Massachusetts",
      schoolField: "B.S. in Geckommunications",
      studyRange: {
        schoolStart: [2019, 9, 1],
        schoolEnd: [2019, 12, 25],
        isAttending: false,
      },
      workName: "Geicko",
      workTitle: "Insurance Salesgecko Extraordinaire",
      workTask: { text: "", id: uniqid() },
      // workTasks: [],
    };
  }

  handleChanges = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const name = this.state.name;
    const summary = this.state.summary;
    const email = this.state.email;
    const phone = this.state.phone;
    const schoolName = this.state.schoolName;
    const schoolField = this.state.schoolField;
    const studyRange = this.state.studyRange;
    const workName = this.state.workName;
    const workTitle = this.state.workTitle;
    const workTask = this.state.workTask;
    return (
      <div id="holder">
        <div id="left" className="hidden">
          <Form
            name={name}
            summary={summary}
            email={email}
            phone={phone}
            schoolName={schoolName}
            schoolField={schoolField}
            studyRange={studyRange}
            workName={workName}
            workTitle={workTitle}
            workTask={workTask}
            handleChanges={this.handleChanges}
          />
        </div>
        <div id="right" className="focus">
          <CV
            name={name}
            summary={summary}
            email={email}
            phone={phone}
            schoolName={schoolName}
            schoolField={schoolField}
            studyRange={studyRange}
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
