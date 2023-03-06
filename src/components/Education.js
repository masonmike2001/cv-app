import React, { Component } from "react";

class Education extends Component {
  render() {
    const { schoolName, schoolField, studyRange } = this.state;
    return (
      <fieldset>
        <legend>Education:</legend>

        <label htmlFor="schoolName">School Name: </label>
        <input
          type="text"
          value={schoolName}
          id="schoolName"
          onChange={this.handleChange}
        />
        <label htmlFor="schoolField">Major: </label>
        <input
          type="schoolField"
          value={schoolField}
          id="text"
          onChange={this.handleChange}
        />

        <label htmlFor="schoolStart">Start Date: </label>
        <input
          type="date"
          value={studyRange.schoolStart}
          id="schoolStart"
          onChange={this.handleChange}
        />
        <label htmlFor="schoolEnd">End Date: </label>
        <input
          type="date"
          value={studyRange.schoolEnd}
          id="schoolEnd"
          onChange={this.handleChange}
        />
        <label htmlFor="isAttending">Currently attending: </label>
        <input
          type="checkbox"
          value={studyRange.isAttending}
          id="isAttending"
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}

export default Education;
