import React, { Component } from "react";
import Profile from "./Profile";
import Education from "./Education";
import Work from "./Work";

class Form extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange = (e) => {
    this.props.handleChanges(e);
  };

  render() {
    const name = this.props.name;
    const email = this.props.email;
    const phone = this.props.phone;
    const schoolName = this.props.schoolName;
    const schoolField = this.props.schoolField;
    // const studyRange = this.props.studyRange;
    const workName = this.props.workName;
    const workTitle = this.props.workTitle;
    const workTask = this.props.workTask;
    return (
      <div>
        <form>
          <Profile
            name={name}
            email={email}
            phone={phone}
            onChange={this.onChange}
          />
          <Education
            schoolName={schoolName}
            schoolField={schoolField}
            // studyRange={studyRange}
            onChange={this.onChange}
          />
          <Work workName={workName} workTitle={workTitle} workTask={workTask} />
        </form>
      </div>
    );
  }
}
export default Form;
