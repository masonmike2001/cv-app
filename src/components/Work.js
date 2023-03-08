import React, { Component } from "react";

class Work extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e);
  }

  render() {
    const workName = this.props.workName;
    const workTitle = this.props.workTitle;
    const workTask = this.props.workTask;
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
