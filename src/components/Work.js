import React, { Component } from "react";
import uniqid from "uniqid";

class Work extends Component {
  constructor() {
    super();
    this.state = {
      workName: "",
      workTitle: "",
      workTask: { text: "", id: uniqid() },
      workTasks: [],
    };
  }

  handleChange = (e) => {
    switch (e.target.id) {
      case "workName":
        this.setState({ workName: e.target.value });
        console.log(this.state);
        break;
      case "workTitle":
        this.setState({ workTitle: e.target.value });
        break;
      case "phone":
        this.setState({ phone: e.target.value });
        break;
      default:
        break;
    }
  };

  render() {
    const { workName, workTitle, workTask, workTasks } = this.state;
    return (
      <fieldset>
        <legend>Work:</legend>
        <label htmlFor="workName">Employer: </label>
        <input
          type="text"
          value={workName}
          id="workName"
          onChange={this.handleChange}
        />
        <label htmlFor="workTitle">Position: </label>
        <input
          type="text"
          value={workTitle}
          id="workTitle"
          onChange={this.handleChange}
        />
        <label htmlFor="workTask">Tasks (separated by commas): </label>
        <input
          type="text"
          value={workTask}
          id="workTask"
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}

export default Work;
