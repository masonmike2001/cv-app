import React, { Component } from "react";
import "./CV.css";
import logo from "../assets/logo.png";

class CV extends Component {
  constructor(props) {
    super(props);
  }

  editToggle() {
    //show left
    document.querySelector("#left").classList.remove("hidden");
    //center right
    document.querySelector("#right").classList.remove("focus");

    document.querySelector("#edit").classList.add("hidden");

    document.querySelector("#f-edit").classList.remove("hidden");
  }

  render() {
    const name = this.props.name;
    const summary = this.props.summary;
    const email = this.props.email;
    const phone = this.props.phone;
    const schoolName = this.props.schoolName;
    const schoolField = this.props.schoolField;
    const studyRange = this.props.studyRange;
    const workName = this.props.workName;
    const workTitle = this.props.workTitle;
    const workTask = this.props.workName;

    return (
      <div>
        <div id="profile-head">
          <div>
            <h1>{name}</h1>
            <img src={logo} className="logo" alt="profile"></img>
          </div>
          <button id="edit" onClick={this.editToggle}>
            Edit
          </button>
          <p
            className="
          alt-color"
          >
            Contact
          </p>
          <ul>
            <li>
              <h3>{email}</h3>
            </li>
            <li>
              <h3>{phone}</h3>
            </li>
          </ul>
          <p
            className="
          alt-color"
          >
            Summary
          </p>
          <h4 className="list">{summary}</h4>
        </div>
        <div id="CV-body">
          <div>
            <h4>Experience:</h4>
            <ul>
              <li>
                <h3>
                  {workTitle} at {workName}
                </h3>
              </li>
            </ul>
          </div>
          <div>
            <h4>Education:</h4>
            <ul>
              <li>
                <h3>
                  {schoolName} ({schoolField}):
                </h3>
                <p>
                  {" "}
                  {studyRange.schoolStart[1]}/{studyRange.schoolStart[2]}/
                  {studyRange.schoolStart[0]} - {studyRange.schoolEnd[1]}/
                  {studyRange.schoolEnd[2]}/{studyRange.schoolEnd[0]}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CV;
