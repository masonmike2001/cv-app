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
    // const studyRange = this.props.studyRange;

    return (
      <div>
        <div>
          <h1>{name}</h1>
          <h2>{email}</h2>
          <h3>{phone}</h3>
        </div>
        <hr />
        <div>
          <h4>Education:</h4>
          <h3>
            {schoolName} ({schoolField})
          </h3>
        </div>
        <div>
          <h4>Experience:</h4>
        </div>
      </div>
    );
  }
}

export default CV;
