import React, { Component } from "react";

class CV extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const name = this.props.name;
    const email = this.props.email;
    const phone = this.props.phone;
    const schoolName = this.props.schoolName;
    const schoolField = this.props.schoolField;
    const workName = this.props.workName;
    const workTitle = this.props.workTitle;
    const workTask = this.props.workName;
    // const studyRange = this.props.studyRange;

    return (
      <div>
        <div>
          <h1>{name}</h1>
          <h3>{email}</h3>
          <h3>{phone}</h3>
        </div>
        <hr />
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
                {schoolName} ({schoolField})
              </h3>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CV;
