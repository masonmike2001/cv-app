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

  editToggle() {
    //show left
    document.querySelector("#left").classList.add("hidden");
    //center right
    document.querySelector("#right").classList.add("focus");

    document.querySelector("#edit").classList.remove("hidden");
    document.querySelector("#f-edit").classList.add("hidden");
  }

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
        <h1>CV Creator</h1>
        <form>
          <Profile
            name={name}
            email={email}
            phone={phone}
            onChange={this.onChange}
          />
          <hr />
          <Education
            schoolName={schoolName}
            schoolField={schoolField}
            // studyRange={studyRange}
            onChange={this.onChange}
          />
          <hr />
          <Work workName={workName} workTitle={workTitle} workTask={workTask} />
          <hr />
        </form>
        <button id="f-edit" onClick={this.editToggle}>
          Finish Editing
        </button>
      </div>
    );
  }
}
export default Form;
