import React, { Component } from "react";
import Profile from "./Profile";
import Education from "./Education";
import Work from "./Work";

class Form extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    // this.onEmailChange = this.onEmailChange.bind(this);
    // this.onPhoneChange = this.onPhoneChange.bind(this);
    this.state = {
      name: "",
      email: "",
      phone: "",
    };
  }

  onChange = (e) => {
    console.log(e);
    console.log(e.target.id);
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const name = this.state.name;
    const email = this.state.email;
    const phone = this.state.phone;
    return (
      <div>
        <form>
          <Profile
            name={name}
            email={email}
            phone={phone}
            onChange={this.onChange}
          />
          {/* <Education />
          <Work /> */}
        </form>
        <h1>Your name is: {this.state.name}</h1>
        <h1>Your email is: {this.state.email}</h1>
        <h1>Your phone is: {this.state.phone}</h1>
        <button type="submit">Submit</button>
      </div>
    );
  }
}
export default Form;
