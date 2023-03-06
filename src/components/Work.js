import React, { Component } from "react";

class Work extends Component {
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
